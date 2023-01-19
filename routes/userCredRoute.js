const express = require("express");
const router = express.Router();
const userCredInfo = require("../models/userModel");

router.route("/make").post((req, res) => {
    const email = req.body.email;
    const password = req.body.email;
    const addUsers = new userCredInfo({
        email,
        password
    });
    addUsers.save();
})

module.exports = router;