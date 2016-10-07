//Creates the Schema for School
//How the object will be saved in the DB

var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var SchoolSchema=new Schema({

  cnpj: {
    type: String,
    required: true},

  password: {
    type: String,
    required: true},

  name: {
    type: String,
    required: true},

}, {collection: "schools"});

module.exports=mongoose.model('School',SchoolSchema);
