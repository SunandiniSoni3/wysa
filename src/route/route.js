const express = require("express");

const router = express.Router()
const{userData,loginUser}=require("../controller/user")


router.post("/userData",userData)
router.post("/login",loginUser)


module.exports = router