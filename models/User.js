"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.ENUM("male", "female"),
    asId: {
      type: DataTypes.STRING,
      get() {
        const id = this.getDataValue("asId");
        return {
          id,
          name: id === "1" ? "owner" : "tenant",
        };
      },
      gender: DataTypes.STRING,
      address: DataTypes.STRING,
    },
  });
  User.associate = function (models) {
    User.hasMany(models.House);
    User.hasMany(models.Transaction);
  };
  return User;
};
