const express = require("express");
const router = express.Router();
const productInfo = require("../models/ProductModel");

router.route("/makepinned").post((req, res) => {
    const name = req.body.name;
    const image = req.body.name;
    const description = req.body.name;

    const addProducts = new productInfo({
        name,
        image,
        description
    });
    addProducts.save();
})

module.exports = router;