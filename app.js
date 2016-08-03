var express = require( 'express');
var swig = require( 'swig' );
var app = express(); //create an instance of an express application
var path = require( 'path' );
var routes = require('./routes/');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var socketio = require('socket.io');
var server = app.listen(3000);
var io = socketio.listen(server);

//logging via morgan

var morgan = require('morgan');

app.use('/', morgan('dev'));

app.use(jsonParser);
app.use(urlencodedParser);

// app.get('/', function(req, res){
//   res.render('index', {title: 'Hall of Fame', people: people});

// })

// app.get('/news', function(req, res){
//     res.send('breaking news!')
// })

app.use(express.static('public'));

app.get('/css', function(req, res){
    // console.log(path.join(__dirname, '/public/stylesheets/style.css'));
    res.sendFile(path.join(__dirname, '/public/stylesheets/style.css'));
})
//using swig to render

app.use('/', routes(io));


// console.log(app.get('views'));
// This is where all the magic happens!
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
// app.set('views', __dirname + '/views');


swig.setDefaults({ cache: false});

// var people = [
//       { name:'Full'},
//       { name: 'Stack'},
//       { name:'Son'}
//     ];




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


// app.listen( 3000, function(){
//   console.log("Server is listening");
// })

