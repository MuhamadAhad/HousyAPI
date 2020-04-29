const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.authenticated = async (req, res, next) => {
  try {
    const bearerToken = req.header("Authorization");
    if (bearerToken) {
      const token = bearerToken.replace("Bearer ", "");
      const data = await jwt.verify(token, process.env.PRIVATE_KEY);
      if (data.id) {
        const user = await User.findOne({
          where: {
            id: data.id,
          },
        });
        if (user) {
          req.user = user.id;
          req.token = token;
          next();
        } else {
          res.status(401).send({ msg: "You're unauthorized!" });
        }
      } else {
        res.status(401).send({ msg: "You're unauthorized!" });
      }
    } else {
      res.status(401).send({ msg: "You're unauthorized!" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};
