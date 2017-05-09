//server.js

// require express framework and additional modules
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var bodyParser = require('body-parser');

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);


// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// set up root route to respond with strings
// app.get('/', function (req, res) {
//   res.send('Oh hello lover..');
// });

// route our app
var router = require('./app/routes');
app.use('/', router);

// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});