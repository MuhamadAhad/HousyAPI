"use strict";
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define(
    "House",
    {
      name: DataTypes.STRING,
      CityId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      typeRent: DataTypes.ENUM("year", "month", "day"),
      address: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      amenities: {
        type: DataTypes.STRING,
        get() {
          return (
            this.getDataValue("amenities") &&
            this.getDataValue("amenities").split(";")
          );
        },
        set(val) {
          this.setDataValue("amenities", val.join(";"));
        },
      },
      bedRoom: DataTypes.INTEGER,
      bathRoom: DataTypes.INTEGER,
      mainImg: DataTypes.STRING,
      area: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {}
  );
  House.associate = function (models) {
    House.hasMany(models.Transaction);
    House.belongsTo(models.City);
    House.belongsTo(models.User);
  };
  return House;
};
