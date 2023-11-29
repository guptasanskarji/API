const mongoose = require("mongoose");

// const URL = "mongodb+srv://Sanskar:xFBHKrudLy8jcpyJ@cluster0.2ux0og4.mongodb.net/SanskarDB?retryWrites=true&w=majority"
const URL = "mongodb+srv://Sanskar:xFBHKrudLy8jcpyJ@cluster0.2ux0og4.mongodb.net/SanskarDB?retryWrites=true&w=majority";
exports.createconnection =()=>{
    mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((ref)=>{
        console.log("Database connected Successfully");
    }).catch(err=>{
        console.log(err);
    })
}