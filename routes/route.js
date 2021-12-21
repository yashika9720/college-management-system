const con = require('../databases/database')
const controller = require('../controllers/controller')
const express = require('express');
const app = express();

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
 
// Set EJS as templating engine
app.set('view engine', 'ejs');




app.get('/display',controller.displayData);  

app.get('/',controller.dashboard)

app.get('/join', controller.studentDetailDisplay)

//  app.get('/addsports',controller.addSports)

 app.get('/register',controller.studentFormData)

//for insert student detail in table
app.post('/create',controller.insertStudentQuery); 
//fetch data by using email
  app.post('/submit',controller.byEmailFetchquery); 

  
// //fetch data using email
app.get('/addsports', controller.addSports); 

app.post('/sportssubmit',controller.addSportsQuery)

  module.exports = app;