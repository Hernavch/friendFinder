
var express = require("express");
var path = require("path");
// var router = require("./app/routing/htmlRoutes")
// var friends= require("./friends");
// var routes = require("router")
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// routes();
app.use(express.static("app/public"));

 var htmlRouter= require('./app/routing/htmlRoutes');
 var apiRouter = require('./app/routing/apiRoutes');

//  app.use(express.Router)

app.use(htmlRouter);
// app.use(apiRouter);

// //   api/tables -> get request res.json()

//   app.get("/api/survey", function(req,res){
//       return res.json(res);
//   });

// api/waitlists -> get res.json() wait list info

  app.listen(PORT, function(){
    console.log('App is listening at your port');
})