var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
var passport = require('passport');
var passportLocal = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var methodOverride = require('method-override');

var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

var change;

app.get("/", function (req, res) {
    change='/';
    res.render("landing",{change:change});
});

app.get("/about", function (req, res) {
    change='about'
    res.render("about",{change:change})
})
app.listen(3000, function () {
    console.log("Server Listening...")
});