const express = require("express");
const router = express.Router();
const form= require("../models/db.js");
const config = require("../models/config.js")


router.get("/admission",(req,res,next)=>{
  res.render("admission",{title:"Admission"})
})
router.post('/submit', (req, res, next) => {
Data= new form(req.body)
  Data.save()
res.render("submitted",{title:"Admission"})

});
module.exports=router
