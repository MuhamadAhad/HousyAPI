"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Cities",
      [
        {
          name: "Jakarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Surabaya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bandung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aceh",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tangerang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cities", null, {});
  },
};
