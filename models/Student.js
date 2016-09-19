//Creates the Schema for Student
//How the object will be saved in the DB

var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var StudentSchema=new Schema({
  cpf: String,
  name: String,
  status: {
    state: String,
    date: String,
  },
  school: {
    cnpj: String,
    password: String,
    name: String,
  },
});

module.exports=mongoose.model('Student',StudentSchema);
