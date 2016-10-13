//Creates the Schema for School
//How the object will be saved in the DB

//Requires Node Module Mongoose
var mongoose = require('mongoose');

//Get Schema from Mongoose
var Schema = mongoose.Schema;

//Creates a Mongoose Schema
var SchoolSchema = new Schema({

  cnpj: {
    type: String,
    required: true},

  password: {
    type: String,
    required: true},

  name: {
    type: String,
    required: true},

//Schema For Specific Collection
}, {collection: 'schools'});

//Exports Student Schema
module.exports = mongoose.model('School',SchoolSchema);
