"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Muhamad Ahad",
          userName: "Ahad",
          email: "muhamad.ahad.8@gmail.com",
          password:
            "$2b$10$wQi0UwyqZR44ZVAT/8vsP.fVHyd6KL9xsTq2FOzZiUn1UEe3jMvCW",
          asId: "1",
          gender: "male",
          address: "Otista Raya Polonia Muka",
          createdAt: new Date(),
          updatedAt: new Date(),
          phone: "+6289678140886",
        },
        {
          fullName: "Muhamad Ahad",
          userName: "Ahadd",
          email: "muhamad.ahad.@gmail.com",
          password:
            "$2b$10$wQi0UwyqZR44ZVAT/8vsP.fVHyd6KL9xsTq2FOzZiUn1UEe3jMvCW",
          asId: "1",
          gender: "male",
          address: "Otista Raya Polonia Muka",
          createdAt: new Date(),
          updatedAt: new Date(),
          phone: "+6289678140886",
        },
        {
          fullName: "MuhamaAhad",
          userName: "Aad",
          email: "muhamad.ahad8@gmail.com",
          password:
            "$2b$10$wQi0UwyqZR44ZVAT/8vsP.fVHyd6KL9xsTq2FOzZiUn1UEe3jMvCW",
          asId: "2",
          gender: "male",
          address: "Otista Raya Polonia Muka",
          createdAt: new Date(),
          updatedAt: new Date(),
          phone: "+6289678140886",
        },
        {
          fullName: "Muhaad Ahad",
          userName: "Ad",
          email: "muhad.ahad.8@gmail.com",
          password:
            "$2b$10$wQi0UwyqZR44ZVAT/8vsP.fVHyd6KL9xsTq2FOzZiUn1UEe3jMvCW",
          asId: "2",
          gender: "male",
          address: "Otista Raya Polonia Muka",
          createdAt: new Date(),
          updatedAt: new Date(),
          phone: "+6289678140886",
        },
        {
          fullName: "Muhaad Ad",
          userName: "Adz",
          email: "muh.ahad.8@gmail.com",
          password:
            "$2b$10$wQi0UwyqZR44ZVAT/8vsP.fVHyd6KL9xsTq2FOzZiUn1UEe3jMvCW",
          asId: "2",
          gender: "male",
          address: "Otista Raya Polonia Muka",
          createdAt: new Date(),
          updatedAt: new Date(),
          phone: "+6289678140886",
        },
        {
          fullName: "haad Ahad",
          userName: "Adad",
          email: "muhad.aha.8@gmail.com",
          password:
            "$2b$10$wQi0UwyqZR44ZVAT/8vsP.fVHyd6KL9xsTq2FOzZiUn1UEe3jMvCW",
          asId: "2",
          gender: "male",
          address: "Otista Raya Polonia Muka",
          createdAt: new Date(),
          updatedAt: new Date(),
          phone: "+6289678140886",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
