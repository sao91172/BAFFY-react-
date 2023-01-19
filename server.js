const express=require('express');
const app=express();
const cors = require("cors");


const mongoose = require("mongoose");
 
const port=4000;
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://sarah2fyee:w8DKrok66nQ0QQmR@baffycluster.5txzfp7.mongodb.net/BaffyDB");

app.use("/", require("./routes/userCredRoute"));
app.use("/", require("./routes/ProductRoute"));
/* If you see this in the console then the API is working */
app.listen(port, function() {
    console.log("Server is listening at port:" + port);
});
 
