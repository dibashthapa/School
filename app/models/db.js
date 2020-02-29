const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({
  Name:{
    type:String,
    required:true
  }
  ,
  Paddress:{
    type:String,
    required:true
  },
email:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  gender:{
    type:String,
    required:true
  },
phone:{
    type:Number,
    required:true
  },
currentAddress:{
    type:String,
    required:true
  },


fatherName:{
  type:String,
  required:true
},
stream:{
  type:String,
  required:true
},
created:{
    type:Date,
    default:Date.now
  }
})
const form= mongoose.model('form',UserSchema)
module.exports=form
