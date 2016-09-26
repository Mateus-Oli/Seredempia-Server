//Transport Controller
//Create the Routes for Transport

var Transport = require('../models/Transport');
var express=require('express');

var router=express.Router();

router.route('/transports')
//GET all Transports
    .get(function(req,res){
       Transport.find(function(err,transports){
           if(err)
                res.send(err);
           res.json(transports);
       });
    })

//POST(Create) a new Transport
    .post(function(req,res){
        var transport=new Transport(req.body);
        transport.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Transporte Adicionado'});
        });
    })

//PUT (Update) a Transport
    .put(function(req,res){
        req.body.forEach(function(transport){
          Transport.update({_id:transport._id},{$set:transport},function(err,transport){
            if(err)
                res.send(err);

            res.json({ message: 'Transporte atualizado!' });
            });
        });
      });

router.route('/transportsCn/:cnpj')
//DELETE the Transport with the specified CNPJ
    .delete(function(req,res){
        Transport.remove({
            cnpj: req.params.cnpj}, function(err, transport) {
            if (err)
                res.send(err);

            res.json({ message: 'Deletado OK' });
        });
    });

router.route('/transportsCnPa/:cnpj/:password')
//GET LOG-IN
    .get(function(req,res){
        Transport.findOne({cnpj:req.params.cnpj},function(err, transport) {
            if(err)
                res.send(err);

            if(transport==null)
                res.json("CNPJ não cadastrado");
            else{
                if(req.params.password!=null && transport.password==req.params.password)
                    res.json(transport);
                else
                    res.json("Password Incorreto");
                }
        });
    });

module.exports=router;
