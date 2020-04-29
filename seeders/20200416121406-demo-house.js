"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Houses",
      [
        {
          name: "House Astina",
          CityId: 1,
          typeRent: "year",
          address: "Bintaro Permata Residence",
          price: 9000000,
          amenities: "Furnished;Pet Allowed;Shared Accommodation",
          bedRoom: 4,
          bathRoom: 2,
          UserId: 1,
          area: 1500,
          mainImg:
            "https://hnsfpau.imgix.net/5/images/detailed/68/MonteCarlo-5S-Corner-Lounge-Suite.jpg?fit=fill&bg=0FFF&w=785&h=441&auto=format,compress",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet nisl. Tempus egestas sed sed risus. At risus viverra adipiscing at in tellus. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Habitant morbi tristique senectus et netus. Arcu dui vivamus arcu felis bibendum ut tristique et. Tincidunt dui ut ornare lectus sit. Morbi non arcu risus quis varius quam quisque. Leo integer malesuada nunc vel. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.Id eu nisl nunc mi ipsum faucibus vitae aliquet. Eros donec ac odio tempor orci dapibus ultrices in. Magna eget est lorem ipsum dolor sit. Egestas diam in arcu cursus euismod. Tempus quam pellentesque nec nam aliquam. Lorem dolor sed viverra ipsum nunc aliquet. Fringilla urna porttitor rhoncus dolor. Tristique senectus et netus et malesuada fames ac turpis. Vel pretium lectus quam id. Augue ut lectus arcu bibendum at. Non quam lacus suspendisse faucibus interdum posuere. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Ac tortor dignissim convallis aenean et. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Amet volutpat consequat mauris nunc congue nisi vitae.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "House Aston",
          CityId: 4,
          typeRent: "month",
          address: "Bintaro Permata Residence",
          price: 7000000,
          amenities: "Pet Allowed;Shared Accommodation",
          bedRoom: 3,
          bathRoom: 1,
          UserId: 2,
          area: 1500,
          mainImg:
            "https://hnsfpau.imgix.net/5/images/detailed/68/MonteCarlo-5S-Corner-Lounge-Suite.jpg?fit=fill&bg=0FFF&w=785&h=441&auto=format,compress",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet nisl. Tempus egestas sed sed risus. At risus viverra adipiscing at in tellus. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Habitant morbi tristique senectus et netus. Arcu dui vivamus arcu felis bibendum ut tristique et. Tincidunt dui ut ornare lectus sit. Morbi non arcu risus quis varius quam quisque. Leo integer malesuada nunc vel. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.Id eu nisl nunc mi ipsum faucibus vitae aliquet. Eros donec ac odio tempor orci dapibus ultrices in. Magna eget est lorem ipsum dolor sit. Egestas diam in arcu cursus euismod. Tempus quam pellentesque nec nam aliquam. Lorem dolor sed viverra ipsum nunc aliquet. Fringilla urna porttitor rhoncus dolor. Tristique senectus et netus et malesuada fames ac turpis. Vel pretium lectus quam id. Augue ut lectus arcu bibendum at. Non quam lacus suspendisse faucibus interdum posuere. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Ac tortor dignissim convallis aenean et. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Amet volutpat consequat mauris nunc congue nisi vitae.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "House Ast",
          CityId: 2,
          typeRent: "day",
          address: "Bintaro Permata Residence Permai",
          price: 5000000,
          amenities: "Furnished;Pet Allowed",
          bedRoom: 4,
          bathRoom: 2,
          UserId: 1,
          area: 1500,
          mainImg:
            "https://hnsfpau.imgix.net/5/images/detailed/68/MonteCarlo-5S-Corner-Lounge-Suite.jpg?fit=fill&bg=0FFF&w=785&h=441&auto=format,compress",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet nisl. Tempus egestas sed sed risus. At risus viverra adipiscing at in tellus. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Habitant morbi tristique senectus et netus. Arcu dui vivamus arcu felis bibendum ut tristique et. Tincidunt dui ut ornare lectus sit. Morbi non arcu risus quis varius quam quisque. Leo integer malesuada nunc vel. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.Id eu nisl nunc mi ipsum faucibus vitae aliquet. Eros donec ac odio tempor orci dapibus ultrices in. Magna eget est lorem ipsum dolor sit. Egestas diam in arcu cursus euismod. Tempus quam pellentesque nec nam aliquam. Lorem dolor sed viverra ipsum nunc aliquet. Fringilla urna porttitor rhoncus dolor. Tristique senectus et netus et malesuada fames ac turpis. Vel pretium lectus quam id. Augue ut lectus arcu bibendum at. Non quam lacus suspendisse faucibus interdum posuere. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Ac tortor dignissim convallis aenean et. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Amet volutpat consequat mauris nunc congue nisi vitae.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "House Tina",
          CityId: 3,
          typeRent: "year",
          address: "Bintaro Permata Residence",
          price: 4000000,
          amenities: "Furnished",
          bedRoom: 2,
          bathRoom: 1,
          UserId: 2,
          area: 1500,
          mainImg:
            "https://hnsfpau.imgix.net/5/images/detailed/68/MonteCarlo-5S-Corner-Lounge-Suite.jpg?fit=fill&bg=0FFF&w=785&h=441&auto=format,compress",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet nisl. Tempus egestas sed sed risus. At risus viverra adipiscing at in tellus. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Habitant morbi tristique senectus et netus. Arcu dui vivamus arcu felis bibendum ut tristique et. Tincidunt dui ut ornare lectus sit. Morbi non arcu risus quis varius quam quisque. Leo integer malesuada nunc vel. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.Id eu nisl nunc mi ipsum faucibus vitae aliquet. Eros donec ac odio tempor orci dapibus ultrices in. Magna eget est lorem ipsum dolor sit. Egestas diam in arcu cursus euismod. Tempus quam pellentesque nec nam aliquam. Lorem dolor sed viverra ipsum nunc aliquet. Fringilla urna porttitor rhoncus dolor. Tristique senectus et netus et malesuada fames ac turpis. Vel pretium lectus quam id. Augue ut lectus arcu bibendum at. Non quam lacus suspendisse faucibus interdum posuere. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Ac tortor dignissim convallis aenean et. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Amet volutpat consequat mauris nunc congue nisi vitae.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "House Doe",
          CityId: 2,
          typeRent: "day",
          address: "Bintaro Permata Residence Permai",
          price: 5500000,
          amenities: "Shared Accommodation",
          bedRoom: 4,
          bathRoom: 2,
          UserId: 1,
          area: 1500,
          mainImg:
            "https://hnsfpau.imgix.net/5/images/detailed/68/MonteCarlo-5S-Corner-Lounge-Suite.jpg?fit=fill&bg=0FFF&w=785&h=441&auto=format,compress",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet nisl. Tempus egestas sed sed risus. At risus viverra adipiscing at in tellus. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Habitant morbi tristique senectus et netus. Arcu dui vivamus arcu felis bibendum ut tristique et. Tincidunt dui ut ornare lectus sit. Morbi non arcu risus quis varius quam quisque. Leo integer malesuada nunc vel. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.Id eu nisl nunc mi ipsum faucibus vitae aliquet. Eros donec ac odio tempor orci dapibus ultrices in. Magna eget est lorem ipsum dolor sit. Egestas diam in arcu cursus euismod. Tempus quam pellentesque nec nam aliquam. Lorem dolor sed viverra ipsum nunc aliquet. Fringilla urna porttitor rhoncus dolor. Tristique senectus et netus et malesuada fames ac turpis. Vel pretium lectus quam id. Augue ut lectus arcu bibendum at. Non quam lacus suspendisse faucibus interdum posuere. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Ac tortor dignissim convallis aenean et. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Amet volutpat consequat mauris nunc congue nisi vitae.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "House John",
          CityId: 3,
          typeRent: "year",
          address: "Bintaro Permata Residence",
          price: 4700000,
          amenities: "Furnished;Shared Accommodation",
          bedRoom: 2,
          bathRoom: 1,
          UserId: 2,
          area: 1500,
          mainImg:
            "https://hnsfpau.imgix.net/5/images/detailed/68/MonteCarlo-5S-Corner-Lounge-Suite.jpg?fit=fill&bg=0FFF&w=785&h=441&auto=format,compress",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet nisl. Tempus egestas sed sed risus. At risus viverra adipiscing at in tellus. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Habitant morbi tristique senectus et netus. Arcu dui vivamus arcu felis bibendum ut tristique et. Tincidunt dui ut ornare lectus sit. Morbi non arcu risus quis varius quam quisque. Leo integer malesuada nunc vel. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.Id eu nisl nunc mi ipsum faucibus vitae aliquet. Eros donec ac odio tempor orci dapibus ultrices in. Magna eget est lorem ipsum dolor sit. Egestas diam in arcu cursus euismod. Tempus quam pellentesque nec nam aliquam. Lorem dolor sed viverra ipsum nunc aliquet. Fringilla urna porttitor rhoncus dolor. Tristique senectus et netus et malesuada fames ac turpis. Vel pretium lectus quam id. Augue ut lectus arcu bibendum at. Non quam lacus suspendisse faucibus interdum posuere. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Ac tortor dignissim convallis aenean et. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Amet volutpat consequat mauris nunc congue nisi vitae.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Houses", null, {});
  },
};
