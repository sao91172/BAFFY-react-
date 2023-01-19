const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userCredSchema = new mongoose.Schema ({
    email:{
        type: String,
        required:[true],
        unique: true,
    },
    password:{
        type: String,
        required:[true],
    },
});

    userCredSchema.pre("save", async function (next){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
        next();
});

const userCredInfo = mongoose.model("UserCredInfo", userCredSchema);

module.exports = userCredInfo;