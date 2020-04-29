"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Houses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      CityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Cities",
          key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      UserId: {
        allowedNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      typeRent: {
        allowNull: false,
        type: Sequelize.ENUM("year", "month", "day"),
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(500),
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
      amenities: {
        type: Sequelize.STRING,
      },
      bedRoom: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bathRoom: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      area: {
        type: Sequelize.INTEGER,
      },
      mainImg: {
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Houses");
  },
};
