const { User } = require("../models");
const bcrypt = require("bcrypt");

//Get All data of Users
//Access level : admin
exports.index = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users) {
      res.status(200).send({ data: users });
    } else {
      res.status(404).send({ msg: "failed get data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};

//Delete data user
//Access level : admin
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const found = await User.count({
      where: {
        id,
      },
    });
    if (found !== 0) {
      const result = await User.destroy({
        where: {
          id,
        },
      });
      if (result) {
        res.status(200).send({ data: { id } });
      } else {
      }
    } else {
      res.status(404).send({ msg: "Data not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};

//get data User
//access Level : tenant & owner
exports.show = async (req, res) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: {
          id: req.user,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      });
      if (user.userName && user.id === req.user) {
        res.status(200).send({ data: user });
      } else {
        res.status(200).send({ msg: "data not found" });
      }
    } else {
      res.status(200).send({ msg: "you are unauthorized" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};

exports.changePwd = async (req, res) => {
  try {
    const saltRounds = 10;
    const user = await User.findOne({
      where: { id: req.user },
      attributes: ["id", "password"],
    });
    bcrypt.compare(req.body.password, user.password, async (error, result) => {
      if (result) {
        bcrypt.hash(req.body.newPassword, saltRounds, async (error, hash) => {
          if (!error) {
            const result = await User.update(
              {
                password: hash,
              },
              {
                where: {
                  id: req.user,
                },
              }
            );
            res.status(200).send({ msg: "success" });
          } else {
            res.status(200).send({ msg: "encrypt failure" });
          }
        });
      } else {
        res.status(200).send({ msg: "wrong password" });
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Internal server error" });
  }
};
