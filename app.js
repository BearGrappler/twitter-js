var express = require( 'express');
var app = express(); //create an instance of an express application


//logging via morgan

var morgan = require('morgan');

app.use('/', morgan('dev'));

app.get('/', function(req, res){
    res.send('hello world!')
})

app.get('/news', function(req, res){
    res.send('breaking news!')
})


//Logging via Router

// var router = express.Router();

// router.use(function(req, res, next){

//   console.log(req.method, req.url);

//   next();
// })

// router.get('/', function(req, res){
//   console.log("in the home file")
// })

// router.get('/news', function(req, res){
//   console.log("in the news")
//   res.send('In the news!');
// })

// app.use('/', router);


app.listen( 3000, function(){
  console.log("Server is listening");
})

