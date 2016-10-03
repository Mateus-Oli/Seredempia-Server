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
    type:Schema.ObjectId,
    ref: 'School',
  },
}, {collection: "students"});

module.exports=mongoose.model('Student',StudentSchema);
