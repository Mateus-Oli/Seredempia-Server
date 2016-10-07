//Creates the Schema for Student
//How the object will be saved in the DB

var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var StudentSchema=new Schema({

  cpf:  {
    type: String,
    required: true},

  name:  {
    type: String,
    required: true},

  status: {

    state:  {
      type: String,
      required: true},

    date:  {
      type: Number,
      required: true,
      default: new Date().getMonth()},
  },

  //Reference to School schema
  school: {
    type:Schema.ObjectId,
    ref: 'School',
    required: true},

}, {collection: "students"});

module.exports=mongoose.model('Student',StudentSchema);
