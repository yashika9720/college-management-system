const dao = require("../modules/studentModule/dao/studentdao")

module.exports ={

   studentFormDataService :(data)=>{
    return new Promise(function(resolve, reject){
        dao.studentFormData(data).then( (data)=>{
          resolve([data[0],data[1]]);
        })
    })
   },


DisplayFormDataService :()=> {
    //logic
    return new Promise(function(resolve, reject){
   dao.displayData().then( (result,fields)=>{
     resolve(result);
   });
 });
},

addSportServices : () =>{
    return new Promise(function(resolve, reject){
        dao.addSports().then((result,fields)=>{
            resolve(result);
          });
    })
},

emailQueryServices :(data) =>{
    return new Promise(function(resolve, reject){
        dao.byEmailFetchquery(data).then((result,fields)=>{
            resolve(result);
           //  console.log(result)
          });
    })
},

insertStudentQueryService :(data) =>{
    return new Promise(function(resolve, reject){
        dao.insertStudentQuery(data).then((result,fields)=>{
            resolve(result);
           //  console.log(result)
          });
    })
},

addsportsQueryService :(data) =>{
    return new Promise(function(resolve, reject){
        dao.addSportsQuery(data).then((result,fields)=>{
            resolve(result);
           //  console.log(result)
          });
    })
},

}

