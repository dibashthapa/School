const express = require("express");
const router = express.Router();
const path =require("path")
router.get("/",(req,res,next)=>{
  res.render("index",{title:"Home"})
})

module.exports=router
