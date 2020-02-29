const express = require("express");
const router = express.Router();
const path =require("path")
router.get("/academics",(req,res,next)=>{
  res.render("academics",{title:"Academics"})
})

module.exports=router
