const express = require("express");
const router = express.Router();
const { signIn, signUp } = require("../controllers/auth");
const {
  index: getHouses,
  show: getHouse,
  create: createHouse,
  update: updateHouse,
  delete: deleteHouse,
} = require("../controllers/house");
const { authenticated } = require("../middlewares/auth");
const {
  index: getUsers,
  delete: deleteUser,
  show: getProfile,
  changePwd,
} = require("../controllers/user");
const {
  create: createTransc,
  show: getTransc,
  index: getTranscs,
  update: updateTransc,
  owner: ownerTransc,
} = require("../controllers/transaction");

const { index: getCity } = require("../controllers/city");

//Sign In User
router.post("/signin", signIn); //public

//Sign Up User
router.post("/signup", signUp); //public

//House
router.get("/houses", getHouses); //public
router.get("/house/:id", getHouse); //public
router.post("/house", authenticated, createHouse); //owner
router.patch("/house/:id", authenticated, updateHouse); //owner
router.delete("/house/:id", authenticated, deleteHouse); //owner

//User
router.get("/profile", authenticated, getProfile); //tenant & owner
router.get("/users", authenticated, getUsers); // admin
router.delete("/user/:id", authenticated, deleteUser); // admin
router.patch("/profile", authenticated, changePwd); //tenant & owner

//Transaction
router.post("/transaction", authenticated, createTransc); //tenant
router.get("/transaction/:id", authenticated, getTransc); //tenant & owner
router.patch("/transaction/:id", authenticated, updateTransc); //tenant & owner
router.get("/transactions", authenticated, getTranscs); //tenant
router.get("/orders", authenticated, ownerTransc); //owner get transaction

//City
router.get("/cities", getCity); //public

module.exports = router;
