// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/about');
});

// route for our service page
router.get('/service', function(req, res) {
  res.render('pages/service');
});

// route for our contact page
router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

