const dao = require("../modules/studentModule/dao/studentdao")

module.exports ={

   studentFormDataService :(data)=>{
    return new Promise(function(resolve, reject){
        dao.studentFormData(data).then( (result,result2)=>{
            console.log('ds' + result2)
          resolve(result,result2);
        })
    })
   },


DisplayFormDataService :()=> {
    //logic
    return new Promise(function(resolve, reject){
   dao.displayData().then( (result,fields)=>{
     resolve(result);
    //  console.log(result)
   });
 });
},

addSportServices : () =>{
    return new Promise(function(resolve, reject){
        dao.addSports().then((result,fields)=>{
            resolve(result);
           //  console.log(result)
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

}

