
// const res = require('express/lib/response')
const con = require('../../../databases/database')
const services = require("../../../services/service")
module.exports = {

    dashboard :(req,res)=>{
        res.render('dashboard')
        res.end()     
    },
  studentEmailDisplay: (req,res)=>{
    res.render('join')
    res.end()
},
    studentFormData:(req,res)=>{
        return new Promise(function(resolve, reject){
          
            services.studentFormDataService().then( (result,result2)=>{
               resolve(result,result2);
              //  console.log(result)
              console.log(result2)
              return res.render('student',{data:result,data2:result2})
               res.end()
              
             });
           });
       
          console.log(data)
      
     },
 
    //   insertStudent :()=>{
    //     services.insertStudentQueryService
    //  }

    displayData : (res,data)=> {
        //logic
        return new Promise(function(resolve, reject){
          
      services.DisplayFormDataService().then( (result,fields)=>{
         resolve(result);
        //  console.log(result)
         res.render('retrieve',{data:result})
         res.end()
       });
     });
    },


// studentFormData:  (req,res)=>{
//     let sql= "SELECT * FROM courses"
//     con.query(sql, function (err, result) {  
//         if (err) throw err; 
//         con.query("SELECT * FROM sports", function (err, result2){
//       res.render('student',{data:result,data2:result2})
//         res.end();

//         })
//     });  
 
// },


//     insertStudentQuery : function(req, res) { 
//     // console.log(req.body.course)
//     // store all the user input data
//     const userDetails = {
//         name:  req.body.uname,
//         email: req.body.email,
//         city : req.body.city,
//        phone : req.body.phone,
//     //    course_id : req.body.course,
//        sports_id : req.body.sports
       
//     }
//     let course_id = ''
//     for(let i =0;i< req.body.course.length;i++){
//        course_id += req.body.course[i] + " "
     
//     }
//     console.log(course_id)
//     // console.log(req.body);
//     // insert user data into student table
//     var sql = "INSERT INTO student (uname,phone,email,city) VALUES (?, ?, ?, ?)";
//     con.query(sql,[userDetails.name ,userDetails.phone,userDetails.email,userDetails.city],function (err, data) { 
//         if (err) throw err;
//         con.query(`INSERT INTO student_course_map (st_id,cs_id) VALUES (?,?)` ,[data.insertId,course_id], function (err, result) {  
    
//         })
//         con.query(`INSERT INTO student_sport_map (st_id,sp_id) VALUES (?,?)` ,[data.insertId,userDetails.sports_id], function (err, result) {  
    
//         })
//         // console.log(data)
//     });
//    res.redirect('/display');  // redirect to user form page after inserting the data
//   },

  byEmailFetchquery : (req,res) =>{ 
    return new Promise(function(resolve, reject){
          
      services.emailQueryServices(req).then( (result,fields)=>{
         resolve(result);
           res.render('info',{data:result})
        res.end()
       });
     });
    },
//   studentDetailDisplay: (req,res)=>{
//     res.render('join')
//     res.end()
// },
// addSportsQuery :  function(req, res) {
//     const userDetails = {
//     //   stid: req.body.stid,
//        sports_id : req.body.sports
       
//     } 
//     var sql = `SELECT * from student WHERE st_id = '${req.body.stid}'`;
//     con.query(sql, function (err, result) {  
//         if (err) throw err;  
//         console.log(result)
//         // res.render('info',{data:result})
//         // res.end()
    
//     }); 
 
//    let sql1 = `SELECT  student.st_id FROM student  
// WHERE student.st_id='${req.body.stid}'`
//     con.query(sql1, function (err, result) {  
//         // console.log(result)
//         if (err) throw err;  
//         con.query(`INSERT INTO student_sport_map (st_id,sp_id) VALUES (?,?)` ,[req.body.stid,userDetails.sports_id], function (err, result) {  
    
//         })
//       res.redirect('/')
//         res.end()
//     });  

//   },
addSports : (res,data)=>{
 
    return new Promise(function(resolve, reject){
          
        services.addSportServices().then( (result,fields)=>{
           resolve(result);
          //  console.log(result)
           res.render("addsports",{data:result})
           res.end()
         });
       });
      }


}