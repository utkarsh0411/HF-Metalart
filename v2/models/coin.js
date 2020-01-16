var mongoose=require('mongoose');

var coinSchema=new mongoose.Schema({
    Title:String,
    Price:Number, 
    Metal:String,
    Weight:Number,
    Purity:Number,
    Dimensions:Number,
    Thickness:Number,
    Shape:String,
    Color:String,
    Edition:String,
    Packaging:String,
    Plating:String,
    Antique:String
});

module.exports=mongoose.model("Coin",coinSchema);   