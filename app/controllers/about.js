const express = require("express");
const router = express.Router();
const path =require("path")
router.get("/about",(req,res,next)=>{
  res.render("about",{title:"About"})
})

module.exports=router
