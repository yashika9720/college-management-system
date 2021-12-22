// const con = require('../databases/database')
const controller = require('../controllers/studentcontroller')
// 
const express = require('express');
const app = express();

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
 
// Set EJS as templating engine
app.set('view engine', 'ejs');


app.get('/',controller.dashboard)

app.get('/register',(req,res)=>controller.studentFormData(req,res))

app.get('/display',(req,res)=>{controller.displayData(res)});  

app.get('/join', controller.studentEmailDisplay)


// //for insert student detail in table
// app.post('/create',controller.insertStudent); 
// //fetch data by using email
app.post('/submit',(req,res)=>controller.byEmailFetchquery(req,res)); 
 
app.get('/addsports',(req,res)=> controller.addSports(res)); 

// app.post('/sportssubmit',controller.addSportsQuery)

  module.exports = app;