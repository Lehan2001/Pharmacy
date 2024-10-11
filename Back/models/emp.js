const mongoose=require('mongoose')

const UserSchema =new mongoose.Schema({
    name:String,
    empID:String,
    email:String,
    age:Number,
    role:String,
    contact:Number
})

const UserModel =mongoose.model("employee", UserSchema,'employees')

module.exports=UserModel