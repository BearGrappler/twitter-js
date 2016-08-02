var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser')

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  showForm = true;
  res.render( 'index', { tweets: tweets, showForm: true} );
});


router.get( '/users/:name', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name});
  res.render('index', {tweets: list});
});


//will return only one tweet since each id is unique
router.get( '/tweets/:id', function (req, res) {
  var id = req.params.id;
  var list = tweetBank.find({id: parseFloat(id)});
  res.render('index', {tweets: list});
});

router.post('/tweets', function(req, res) {
  res.send(req)
  // var name = req.body.name;
  // var text = req.body.text;
  // res.send(name, text);
  // tweetBank.add(name, text);
  // res.redirect('/');
});

module.exports = router;
