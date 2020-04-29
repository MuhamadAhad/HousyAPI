const bcrypt = require("bcrypt");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

exports.signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({
      where: { userName },
      attributes: ["asId", "userName", "password", "id"],
    });
    if (user) {
      bcrypt.compare(password, user.password, (error, result) => {
        if (result) {
          jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, (err, token) => {
            const data = {
              level: user.asId.name,
              userName: user.userName,
              token,
            };
            res.status(200).send({ data });
          });
        } else {
          res.status(200).send({ msg: "Invalid signin" });
          console.log(error);
        }
      });
    } else {
      res.status(200).send({ msg: "Username not registered" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};

exports.signUp = async (req, res) => {
  try {
    const saltRounds = 10;
    const { userName, password, email } = req.body;
    const user = await User.findOne({
      where: {
        [Op.or]: [
          {
            userName,
          },
          {
            email,
          },
        ],
      },
    });
    if (!user) {
      bcrypt.hash(password, saltRounds, async (error, hash) => {
        if (!error) {
          const aSign = { ...req.body, password: hash };
          const newUser = await User.create(aSign);
          if (newUser.userName) {
            jwt.sign(
              { id: newUser.id },
              process.env.PRIVATE_KEY,
              (error, token) => {
                const data = {
                  level: newUser.asId.name,
                  userName: newUser.userName,
                  token,
                };
                res.status(200).send({ data });
              }
            );
          } else {
            res.status(200).send({
              msg: "failed adding to database",
            });
          }
        } else {
          res.status(200).send({
            msg: "process error",
          });
        }
      });
    } else {
      res.status(200).send({
        msg: "Username already registered",
      });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};
