module.exports=function(app){
  app.use("/",require('./controllers/home'))
  app.use("/",require('./controllers/admission'))
  app.use("/",require('./controllers/academics'))
app.use("/",require('./controllers/about'))
}
