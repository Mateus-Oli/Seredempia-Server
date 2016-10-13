//Creates the Schema for Transport
//How the object will be saved in the DB

//Requires Node Module Mongoose
var mongoose = require('mongoose');

//Get Schema from Mongoose
var Schema = mongoose.Schema;

//Creates a Mongoose Schema
var TransportSchema = new Schema({

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
}, {collection: 'transports'});


//Exports Transport Schema
module.exports=mongoose.model('Transport',TransportSchema);
