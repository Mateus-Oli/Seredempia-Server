//School Controller
//Create the Routes for School

var School = require('../models/School');
var express=require('express');

var router=express.Router();

router.route('/schools')
//GET all Schools
    .get(function(req,res){
       School.find(function(err,schools){
           if(err)
                res.send(err);
           res.json(schools);
       });
    })

//POST (Create) a School
    .post(function(req,res){
        var school=new School(req.body);
        school.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'Escola Adicionada'});
        });
    })

//PUT (Update) a School
    .put(function(req,res){
        req.body.forEach(function(school){
          School.update({_id:school._id},{$set:transport},function(err,school){
            if(err)
                res.send(err);

            res.json({ message: 'Escola atualizada!' });
            });
        });
      });

router.route('/schoolsCn/:cnpj')
//DELETE the School with the specified CNPJ
    .delete(function(req,res){
        School.remove({cnpj: req.params.cnpj}, function(err, school) {
            if (err)
                res.send(err);

            res.json({ message: 'Deletado OK' });
        });
    });

router.route('/schoolsCnPa/:cnpj/:password')
//GET LOG-IN
    .get(function(req,res){ console.log('cnpj = '+req.params.cnpj);
        console.log('password = '+req.params.password);
        School.findOne({cnpj:req.params.cnpj},function(err, school) {
            if(err)
                res.send(err);

            if(school==null)
                res.json("CNPJ não cadastrado");
            else{
                if(req.params.password!=null && school.password==req.params.password)
                    res.json(school);
                else
                    res.json("Password Incorreto");
                }
        });
    });

module.exports=router;
