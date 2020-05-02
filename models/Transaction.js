"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      checkIn: DataTypes.DATEONLY,
      checkOut: DataTypes.DATEONLY,
      HouseId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      attachment: DataTypes.STRING,
      status: DataTypes.ENUM("booked", "paid", "canceled", "approved"),
      total: DataTypes.DOUBLE,
    },
    {}
  );
  Transaction.associate = function (models) {
    Transaction.belongsTo(models.User);
    Transaction.belongsTo(models.House);
  };
  return Transaction;
};
