const { City } = require("../models");

exports.index = async (req, res) => {
  try {
    const cities = await City.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({ data: cities });
  } catch (error) {
    res.status(500).send({ msg: "Internal server error" });
    console.log(error);
  }
};
