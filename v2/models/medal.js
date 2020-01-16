var mongoose=require('mongoose');

var medalSchema=new mongoose.Schema({
    Title:String, 
    Metal:String,
    Dimensions:Number,
    Thickness:Number,
    Plating:String,
    Number_of_enamel_colors:Number,
    Attachments:String,
    Diamond_cut:String, 
    Price:Number,
    Description:String,
    twod_3d:String
});

module.exports=mongoose.model("Medal",medalSchema);