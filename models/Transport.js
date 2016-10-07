//Creates the Schema for Transport
//How the object will be saved in the DB

var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var TransportSchema=new Schema({

  cnpj: {
    type: String,
    required: true},

  password: {
    type: String,
    required: true},

  name: {
    type: String,
    required: true},
    
}, {collection: "transports"});

module.exports=mongoose.model('Transport',TransportSchema);
