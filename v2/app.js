var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
var passport = require('passport');
var passportLocal = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var methodOverride = require('method-override');
var Coin=require("./models/coin");
var Medal=require("./models/medal");
var change;


var app = express();

mongoose.connect("mongodb://localhost/hfmetalart", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function (req, res) {
    change='/';
    res.render("landing",{change:change});
});

app.get("/about", function (req, res) {
    change='about'
    res.render("about",{change:change})
});

app.listen(3000, function () {
    console.log("Server Listening...")
});