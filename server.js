//Server file
//Creates the Server

//Requiring node modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Add Controllers
var students = require('./controllers/studentController');
var schools = require('./controllers/schoolController');
var transports = require('./controllers/transportController');

// Create the Application.
var app = express();

//Connect to MongoDB online
//var dbName = 'heroku_9xq25gxk';
//var connectionString = 'mongodb://mateus:banana42@ds035796.mlab.com:35796/'+dbName;

//Connect to MongoDB offline
var dbName = 'seredempia';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);


//Indentify the body of the Request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Allow diferent origins, methods and headers
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//REST API
app.use('/api', students);
app.use('/api', schools);
app.use('/api', transports);

//When in Root redirect to /api/students
app.get('/',function (req, res) {
        res.redirect('/api/students');
});

//If Not Found send error 404
app.use(function(req, res){
       res.sendStatus(404);
});

//Launch Server
app.listen(process.env.PORT || 8000, function(){
  console.log("It's over", this.address().port);
});
