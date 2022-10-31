/*
File: users.js
Student Name: Manvibolreach Ouk
Student ID: 301224112
Date: October 31, 2022
*/

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Placeholder");
});

module.exports = router;
