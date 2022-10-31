/*
File: business.js
Student Name: Manvibolreach Ouk
Student ID: 301224112
Date: October 31, 2022
*/

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create reference to the model (dbschema )
let Business = require("../models/business");

module.exports.displayBusinessList = (req, res, next) => {
  Business.find((err, businessList) => {
    if (err) {
      return console.error(err);
    } else {
      //console.log(bookList);

      res.render("business/list", {
        title: "Business List",
        BusinessList: businessList,
        displayName: req.user ? req.user.displayName : "",
      });
      //render book.ejs and pass title and Booklist variable we are passing bookList object to BookList property
    }
  });
};

module.exports.addpage = (req, res, next) => {
  res.render("business/add", {
    title: "Add Business List",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addprocesspage = (req, res, next) => {
  let newBusiness = Business({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });
  Business.create(newBusiness, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.redirect("/business-list");
    }
  });
};

module.exports.displayeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  Business.findById(id, (err, businesstoedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("business/edit", {
        title: "Edit Business List",
        business: businesstoedit,
        displayName: req.user ? req.user.displayName : "",
      });
    }
  });
};

module.exports.processingeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updatebusiness = Business({
    _id: id,
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });
  Business.updateOne({ _id: id }, updatebusiness, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the book list
      res.redirect("/business-list");
    }
  });
};

module.exports.deletepage = (req, res, next) => {
  let id = req.params.id;
  Business.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh book list
      res.redirect("/business-list");
    }
  });
};
