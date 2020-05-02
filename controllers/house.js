const { House, City, User } = require("../models");
const { Op } = require("sequelize");

const defHouse = {
  include: [
    {
      model: City,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },
  ],
  attributes: {
    exclude: ["createdAt", "updatedAt", "CityId", "UserId", "description"],
  },
};

function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

//Get All houses
//Access level : public (owner / tenant)
exports.index = async (req, res) => {
  //const bearerToken = req.header("Authorization");
  try {
    var condition = {};
    for (key in req.query) {
      switch (key) {
        case "typeRent":
          condition.typeRent = req.query[key];
          break;
        case "belowPrice":
          condition.price = { [Op.lte]: parseInt(req.query[key]) };
          break;
        case "bedRoom":
          const bed = parseInt(req.query[key]);
          condition.bedRoom = bed === 5 ? { [Op.gte]: bed } : bed;
          break;
        case "bathRoom":
          const bath = parseInt(req.query[key]);
          condition.bathRoom = bath === 5 ? { [Op.gte]: bath } : bath;
          break;
        case "city":
          condition.city = parseInt(req.query[key]);
          break;
        case "amenities":
          condition.amenities = req.query.amenities;
          break;
      }
    }
    const result = await House.findAll({
      where: {
        ...condition,
      },
      ...defHouse,
    });
    if (result) {
      res.status(200).send({ data: result });
    } else {
      res.status(404).send({ msg: "data not found" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};

//Get a house by ID
//Access level : public (owner & tenant)
exports.show = async (req, res) => {
  try {
    const detail = {
      ...defHouse,
      attributes: {
        exclude: ["createdAt", "updatedAt", "CityId", "UserId"],
      },
    };
    const house = await House.findOne({
      where: {
        id: req.params.id,
      },
      ...detail,
    });
    if (house) {
      res.status(200).send({ data: house });
    } else {
      res.status(404).send({ msg: "Data not found" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};

//Create new House
// Access level : owner / asId : 1
exports.create = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.user } });
    if (user && user.asId && user.asId.name === "owner") {
      if (
        req.body.price &&
        req.body.name &&
        req.body.CityId &&
        req.body.typeRent &&
        req.body.address &&
        req.body.amenities &&
        req.body.bedRoom &&
        req.body.bathRoom
      ) {
        const found = await House.count({
          where: {
            ...req.body,
            amenities: req.body.amenities && req.body.amenities.join(";"),
          },
        });
        if (found === 0) {
          const newHouse = { ...req.body, UserId: req.user };
          const result = await House.create(newHouse);
          if (result.id) {
            const detail = {
              ...defHouse,
              attributes: {
                exclude: ["createdAt", "updatedAt", "CityId", "UserId"],
              },
            };
            const house = await House.findOne({
              where: {
                id: result.id,
              },
              ...detail,
            });
            if (house) {
              res.status(200).send({ data: house });
            } else {
              res.status(404).send({ msg: "Data not found" });
            }
          } else {
            res.status(404).send({ msg: "failed input to database" });
          }
        } else {
          res.status(404).send({ msg: "Data already exist" });
        }
      } else {
        res.status(404).send({ msg: "Data didnt match" });
      }
    } else {
      res.status(401).send({ msg: "you are unauthorized" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};

//Update House by ID
// Access level : owner / asId : 1
exports.update = async (req, res) => {
  try {
    if (!isEmpty(req.body)) {
      const { id } = req.params;
      if (req.user) {
        const result = await House.count({ where: { id, UserId: req.user } });
        if (result === 1) {
          const house = await House.update(req.body, {
            where: { id, UserId: req.user },
          });
          if (house[0] !== 0) {
            const updateHouse = await House.findOne({
              where: {
                id,
              },
              ...defHouse,
            });
            if (updateHouse) {
              res.status(200).send({ data: updateHouse });
            } else {
              res.status(404).send({ msg: "Data failed to get" });
            }
          } else {
            res.status(404).send({ msg: "Data failed to update" });
          }
        } else {
          res.status(404).send({ msg: "Data didn't match" });
        }
      } else {
        res.status(404).send({ msg: "You are unauthorized" });
      }
    } else {
      res.status(404).send({ msg: "Data input not found" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};

//Delete House by ID
//Access level : Owner / asId : 1
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const found = await House.count({ where: { id, UserId: req.user } });
    if (found !== 0) {
      const result = await House.destroy({ where: { id, UserId: req.user } });
      if (result !== 0) {
        res.status(200).send({ data: { id } });
      } else {
        res.status(404).send({ msg: "Data failed to delete" });
      }
    } else {
      res.status(404).send({ msg: "Data not match" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};
