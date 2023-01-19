const mongoose = require("mongoose");


const productSchema = new mongoose.Schema ({
    name:{
        type: String,
        required:[true],
    },
    image:{
        type: String,
        required:[true],
    },
    description:{
        type: String,
        required:[true],
    },
});

const productInfo = mongoose.model("productInfo", productSchema);

module.exports = productInfo;