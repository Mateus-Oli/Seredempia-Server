//Creates the Schema for Student
//How the object will be saved in the DB

//Requires Node Module Mongoose
var mongoose = require('mongoose');

//Get Schema from Mongoose
var Schema = mongoose.Schema;

//Creates a Mongoose Schema
var StudentSchema = new Schema({

  cpf:  {
    type: String,
    required: true},

  name:  {
    type: String,
    required: true},

  status: {

    state:  {
      type: String,
      required: true,
      default: 'N'},

    date:  {
      type: Number,
      required: true,
      default: new Date().getMonth()},
  },

  //Reference to School schema
  school: {
    type: Schema.ObjectId,
    ref: 'School',
    required: true},

//Schema For Specific Collection
}, {collection: 'students'});

//Exports Student Schema
module.exports = mongoose.model('Student',StudentSchema);
