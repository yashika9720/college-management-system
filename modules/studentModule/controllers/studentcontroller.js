// const res = require('express/lib/response')
const con = require("../../../databases/database");
const services = require("../../../services/service");


module.exports = {

  dashboard: (req, res) => {
    res.render("dashboard");
    res.end();
  },

  studentEmailDisplay: (req, res) => {
    res.render("join");
    res.end();
  },

  studentFormData: (req, res) => {
    return new Promise(function (resolve, reject) {
      services.studentFormDataService().then((data) => {
        resolve([data[0], data[1]]);
        //  console.log(result)
        // console.log(result2)
        return res.render("student", { data: data[0], data2: data[1] });
        res.end();
      });
    });
  },


  displayData: (res, data) => {
    //logic
    return new Promise(function (resolve, reject) {
      services.DisplayFormDataService().then((result, fields) => {
        resolve(result);
        //  console.log(result)
        res.render("retrieve", { data: result });
        res.end();
      });
    });
  },

  insertStudentQuery: function (req, res) {
    return new Promise(function (resolve, reject) {
      services.insertStudentQueryService(req).then((result, fields) => {
        resolve(result);

        //  console.log(result)
        //  res.render('retrieve',{data:result})
        res.redirect("display");
        res.end();
      });
    });
  },

  byEmailFetchquery: (req, res) => {
    return new Promise(function (resolve, reject) {
      services.emailQueryServices(req).then((result, fields) => {
        resolve(result);
        res.render("info", { data: result });
        res.end();
      });
    });
  },

  addSportsQuery: function (req, res) {
    return new Promise(function (resolve, reject) {
      services.addsportsQueryService(req).then((result, fields) => {
        resolve(result);
        //  console.log(result)
        res.redirect("/");
        res.end();
      });
    });
  },

  addSports: (res, data) => {
    return new Promise(function (resolve, reject) {
      services.addSportServices().then((result, fields) => {
        resolve(result);
        //  console.log(result)
        res.render("addsports", { data: result });
        res.end();
      });
    });
  },
};
