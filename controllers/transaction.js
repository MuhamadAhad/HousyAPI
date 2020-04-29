const { Transaction, House, City, User } = require("../models");
const { Op } = require("sequelize");
const date = new Date();
const dateNow = `${date.getFullYear}-${date.getUTCMonth}-${date.getUTCDate}`;
const defTransc = {
  include: [
    {
      model: House,
      attributes: {
        exclude: ["createdAt", "updatedAt", "CityId", "UserId", "id"],
      },
      include: [
        {
          model: City,
          attributes: {
            exclude: ["createdAt", "updatedAt", "id"],
          },
        },
        {
          model: User,
          attributes: ["fullName", "phone", "gender"],
        },
      ],
    },
  ],
  attributes: {
    exclude: ["createdAt", "updatedAt", "HouseId", "UserId"],
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

function isLeapYear(year) {
  if (year % 400 == 0) {
    return true;
  } else if (year % 100 == 0) {
    return false;
  } else if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

function countDay(checkIn, checkOut) {
  const dFirst = checkIn.split("-").map((val) => parseInt(val));
  const dLast = checkOut.split("-").map((val) => parseInt(val));
  let found = false;
  let result = 0;
  for (let y = dFirst[0]; y <= dLast[0]; y++) {
    for (let m = dFirst[1]; m <= 12; m++) {
      let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (isLeapYear(y) === true) {
        months[1] = 29;
      }
      for (let d = dFirst[2]; d <= months[m - 1]; d++) {
        result++;
        if (
          y + "-" + m + "-" + d ===
          dLast[0] + "-" + dLast[1] + "-" + dLast[2]
        ) {
          found = true;
          break;
        }
      }
      if (found === true) {
        break;
      } else {
        dFirst[2] = 1;
      }
    }
    if (found == true) {
      break;
    } else {
      dFirst[1] = 1;
    }
  }
  return result - 1;
}

//Create Transaction
//Access level : Tenant / asId : 2
exports.create = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.user } });
    if (user && user.asId && user.asId.name === "tenant") {
      if (
        req.body.checkIn &&
        req.body.checkOut &&
        req.body.HouseId &&
        req.body.total &&
        req.body.status === "booked" &&
        req.body.attachment
      ) {
        const { checkIn, checkOut, HouseId } = req.body;
        const transc = await Transaction.findAll({
          where: {
            [Op.or]: [
              {
                HouseId,
                status: {
                  [Op.or]: ["paid", "approved"],
                },
              },
              {
                ...req.body,
                UserId: req.user,
              },
            ],
          },
        });
        const numTransac = transc.length;
        let found = false;
        if (numTransac === 0) {
          found = checkIn < checkOut ? false : true;
        } else {
          for (let i = 0; i < numTransac; i++) {
            if (
              checkIn < checkOut &&
              ((checkIn < transc[i].checkIn &&
                checkIn < transc[i].checkOut &&
                checkOut < transc[i].checkIn &&
                checkOut < transc[i].checkOut) ||
                (checkIn > transc[i].checkIn &&
                  checkIn > transc[i].checkOut &&
                  checkOut > transc[i].checkIn &&
                  checkOut > transc[i].checkOut))
            ) {
            } else {
              found = true;
            }
            if (found === true) {
              break;
            }
          }
        }
        if (found === false) {
          // const house = await House.findOne({
          //   where: { id: HouseId },
          //   attributes: ["typeRent", "price"],
          // });
          // const countRent = 0;
          // if ((house.typeRent = "year")) {
          // } else if ((house.typeRent = "month")) {
          // } else if ((house.typeRent = "day")) {
          //   countRent = countDay(checkIn, checkOut);
          // }
          //res.send({ data: house });
          const newTransc = await Transaction.create({
            ...req.body,
            UserId: req.user,
          });
          if (!isEmpty(newTransc)) {
            const result = await Transaction.findOne({
              where: {
                id: newTransc.id,
              },
              ...defTransc,
            });
            res.status(200).send({ data: result });
          } else {
            res.status(404).send({ msg: "Data failed to save" });
          }
        } else {
          res.status(404).send({ msg: "transaction failed" });
        }
      } else {
        res.status(404).send({ msg: "Data didn't match" });
      }
    } else {
      res.status(404).send({ msg: "you are unauthorized" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};

//Show a Transaction by ID
//Access level : Tenant & owner
exports.show = async (req, res) => {
  try {
    if (req.params.id) {
      const result = await Transaction.findOne({
        where: {
          id: req.params.id,
          UserId: req.user,
        },
        ...defTransc,
      });
      if (!isEmpty(result)) {
        res.status(200).send({ data: result });
      } else {
        res.status(401).send({ msg: "You unauthorized to access this file" });
      }
    } else {
      res.status(404).send({ msg: "ID transaction not found" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};

exports.index = async (req, res) => {
  try {
    //res.send({ data: req.user });
    const result = await Transaction.findAll({
      where: { UserId: req.user },
      defTransc,
    });
    if (result) {
      res.status(200).send({ data: result });
    } else {
      res.status(404).send({ msg: "Data not found" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id: req.user } });
    if (user && user.asId.name === "tenant") {
      const count = await Transaction.count({
        where: { id, UserId: req.user },
      });
      if (count !== 0) {
        const result = await Transaction.update(req.body, {
          where: { id },
        });
        if (result) {
          const newOrder = await Transaction.findOne({
            where: {
              id,
            },
            ...defTransc,
          });
          if (newOrder) {
            res.status(200).send({ data: newOrder });
          } else {
            res.status(404).send({ msg: "Data not found" });
          }
        } else {
          res.status(404).send({ msg: "Data failed to update" });
        }
      } else {
        res.send({ msg: "data not found" });
      }
    } else if (user && user.asId.name === "owner") {
      //res.send({ data: user });
      const transByHouse = await Transaction.findOne({ where: { id } });
      if (transByHouse) {
        //res.send({ transByHouse });
        const count = await House.count({
          where: { id: transByHouse.HouseId, UserId: req.user },
        });
        if (count !== 0) {
          const result = await Transaction.update(req.body, {
            where: { id },
          });
          if (result) {
            const newOrder = await Transaction.findOne({
              where: {
                id,
              },
              ...defTransc,
            });
            if (newOrder) {
              res.status(200).send({ data: newOrder });
            } else {
              res.status(404).send({ msg: "Data not found" });
            }
          } else {
            res.status(404).send({ msg: "Data failed to update" });
          }
        } else {
          res.send({ msg: "data not found" });
        }
      } else {
        res.send({ msg: "failure" });
      }
    } else {
      res.status(404).send({ msg: "Data is empty" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};

exports.owner = async (req, res) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: {
          id: req.user,
        },
        attributes: ["asId"],
      });
      if (user.asId.name === "owner") {
        const trans = await House.findAll({
          where: {
            UserId: req.user,
          },
          include: [
            {
              model: Transaction,
              attributes: {
                exclude: ["createdAt", "updatedAt"],
              },
            },
          ],
          attributes: [],
        });
        let result = [];
        trans.forEach((item) => {
          item.Transactions.forEach((rec) => {
            result.push(rec);
          });
        });
        res.status(200).send({ data: trans });
      } else {
        res.status(401).send({ msg: "You are unauthorized" });
      }
    } else {
      res.status(401).send({ msg: "You are unauthorized" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};
