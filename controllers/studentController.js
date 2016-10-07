//Student Controller
//Create the Routes for Student

var Student = require('../models/Student');
var School  = require('../models/School');
var express = require('express');

var router=express.Router();

//Function to correct the status for the current month
var correctStatus = function(student){
  //If diferent month then status is Not Confirmed
  if(student!=null && student.status.date != new Date().getMonth()){

    student.status.state = "N";

    student.status.date = new Date().getMonth();
  };
};

router.route('/students')
//GET all Students
  .get(function(req,res){
    Student.find().populate("school", "-password").then(function(err, students){

      if(err) res.send(err);

      else{
        students.forEach(function(student){
          correctStatus(student);
        });

        res.json(students);
      }
    });
  })
//POST (Create) a new Student
  .post(function(req,res){
    var student=new Student(req.body);
    student.save(function(err){

      if(err) res.send(err);

      else res.send({message:'Estudante Adicionado'});
    });
  })
//PUT (Update) a Student
  .put(function(req,res){

    req.body.forEach(function(student){

      student.status.date = new Date().getMonth();

      Student.update({_id:student._id},{$set:student},function(err,student){

        if(err) res.send(err);
      });
    });
    
    res.json({ message: 'Estudantes atualizados!' });
  });

router.route('/studentsSt/:status')
//GET  all Students with the specified Status
  .get(function(req,res){
    Student.find({"status.state":req.params.status,"status.date":new Date().getMonth()}).populate("school", "-password").then(function(err,students){

      if(err) res.send(err);

      else res.json(students);
      });
  });

router.route('/studentsSc/:school')
//GET  all Students with an specified School
  .get(function(req,res){
    Student.find({"status.state":"W", "status.date": new Date().getMonth(), "school": req.params.school}).populate("school", "-password").then(function(err,students){

      if(err) res.send(err);

      else res.json(students);
    });
  });

router.route('/studentsCp/:cpf')
//GET  the Student with the specified CPF
  .get(function(req,res){
    Student.findOne({cpf:req.params.cpf},function(err, student) {

      if(err) res.send(err);

      else{

        correctStatus(student);

        res.json(student);
      }
    });
  })
//DELETE  the Student with the specified CPF
  .delete(function(req,res){
    Student.remove({cpf: req.params.cpf}, function(err, student) {

      if (err) res.send(err);

      else res.json({ message: 'Deletado OK' });
    });
  });

module.exports=router;
