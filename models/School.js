//Creates the Schema for School
//How the object will be saved in the DB

var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var SchoolSchema=new Schema({
  cnpj: String,
  password: String,
  name: String,
});

module.exports=mongoose.model('School',SchoolSchema);
