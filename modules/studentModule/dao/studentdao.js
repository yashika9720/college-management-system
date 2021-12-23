
const con = require("../../../databases/database")

module.exports = {



studentFormData:  ()=>{
    return new Promise((resolve, reject)=>{
    let sql= "SELECT * FROM courses"
    con.query(sql, function (Err,result) { 
        con.query("SELECT * FROM sports", function (err, result2){ 
        if (err) {
            return reject(err);
        }
     resolve([result,result2]);
        })    
    });  
})
 
},

displayData : () =>{
    return new Promise((resolve, reject)=>{
      con.query("SELECT  student.st_id, student.uname ,student.phone,student.email,student.city,courses.cs_name,sports.sp_name, GROUP_CONCAT(sports.sp_name) AS sports FROM student  JOIN student_course_map ON student_course_map.st_id = student.st_id  JOIN courses ON student_course_map.cs_id =courses.cs_id  JOIN student_sport_map ON student_sport_map.st_id = student.st_id   JOIN sports ON student_sport_map.sp_id = sports.sp_id GROUP BY student.st_id", (err, result) =>{
            if(err){
                return reject(err);
            }
           resolve(result);
        });
    });

},


insertStudentQuery : function(req) { 
        return new Promise((resolve, reject)=>{
    // store all the user input data
    const userDetails = {
        name:  req.body.uname,
        email: req.body.email,
        city : req.body.city,
       phone : req.body.phone,
    //    course_id : req.body.course,
       sports_id : req.body.sports    
    }
    let course_id = ''
    for(let i =0;i< req.body.course.length;i++){
       course_id += req.body.course[i] + " "  
    }
    // insert user data into student table
    var sql = "INSERT INTO student (uname,phone,email,city) VALUES (?, ?, ?, ?)";
    con.query(sql,[userDetails.name ,userDetails.phone,userDetails.email,userDetails.city],function (err, data) { 
        con.query(`INSERT INTO student_course_map (st_id,cs_id) VALUES (?,?)` ,[data.insertId,course_id], function (err, result) {   
        })
        con.query(`INSERT INTO student_sport_map (st_id,sp_id) VALUES (?,?)` ,[data.insertId,userDetails.sports_id], function (err, result) {  
            if(err){
               reject(err);
            }
           resolve(result);
        })
        // console.log(data)
    });
})
  },

byEmailFetchquery :  (req) => { 
    return new Promise((resolve, reject)=>{
    var sql = `SELECT * from student WHERE email = '${req.body.email}'`;
    con.query(sql, function (err, result) {      
    }); 
    let sql1 = `SELECT  student.st_id, student.uname ,student.phone,student.email,student.city,courses.cs_name,sports.sp_name, 
    GROUP_CONCAT(sports.sp_name) AS sports FROM student  
    JOIN student_course_map ON student_course_map.st_id = student.st_id
    JOIN courses ON student_course_map.cs_id =courses.cs_id  
    JOIN student_sport_map ON student_sport_map.st_id = student.st_id  
    JOIN sports ON student_sport_map.sp_id = sports.sp_id  WHERE student.email='${req.body.email}'`
    con.query(sql1, function (err, result) {  
        // console.log(result)
        if (err)  if(err){
            return reject(err);
        }
       resolve(result);
    });  
})
},

addSportsQuery :  function(req) {
    return new Promise((resolve, reject)=>{
    const userDetails = {
       sports_id : req.body.sports      
    } 
    var sql = `SELECT * from student WHERE st_id = '${req.body.stid}'`;
    con.query(sql, function (err, result) {  
        // if (err) throw err;  
    }); 
   let sql1 = `SELECT  student.st_id FROM student  
            WHERE student.st_id='${req.body.stid}'`
    con.query(sql1, function (err, result) {  
    con.query(`INSERT INTO student_sport_map (st_id,sp_id) VALUES (?,?)` ,[req.body.stid,userDetails.sports_id], function (err, result) {  
            if(err){
                return reject(err);
            }
           resolve(result);
           console.log('this###' + result)
        })
    });  
    })
  },

addSports : ()=>{
    return new Promise((resolve, reject)=>{
    let sql= "SELECT * FROM sports"
    con.query(sql, function (err, result) {  
        if(err){
            return reject(err);
        }
       resolve(result);   
// console.log(result)     
    });  
})
}


}