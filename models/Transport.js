//Creates the Schema for Transport
//How the object will be saved in the DB

var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var TransportSchema=new Schema({
  cnpj: String,
  password: String,
  name: String,
}, {collection: "transports"});

module.exports=mongoose.model('Transport',TransportSchema);
