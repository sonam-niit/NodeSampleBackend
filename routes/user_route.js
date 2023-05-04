const express = require('express');
const { getAllUser, createNewUser } = require('../controller/user_controller');

const router=express.Router();

router.route("/").get(getAllUser).post(createNewUser);

//router.route("/:id").get(getUserById);
module.exports=router