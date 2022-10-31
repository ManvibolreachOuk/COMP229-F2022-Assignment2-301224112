/*
File: business.js
Student Name: Manvibolreach Ouk
Student ID: 301224112
Date: October 31, 2022
*/

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let businessModel = mongoose.Schema(
  {
    name: String,
    number: Number,
    email: String,
  },

  {
    collection: "businessess",
  }
);

//booksmodel to create new book more powerful than just class
module.exports = mongoose.model("Business", businessModel);
