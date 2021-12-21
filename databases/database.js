const mysql = require('mysql');

//create db
const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '', 
    database : 'college'
  });
  
  con.connect((err) => {
      if(err) throw err;
      console.log('Connected to MySQL Server!');
  });

  module.exports = con;
  
  