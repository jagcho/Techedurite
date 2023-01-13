const mongoose=require('mongoose')


const adminSchema=new mongoose.Schema({

First_Name:{
    type:String,
    required:true,
    trim:true
},
Last_Name:{
    type:String,
    trim:true
},
Email:{
    type:String,
    required:true,
    trim:true,
    unique:true
},
Password:{
    type:String,
    required:true,
    min: 8,
    max: 15
},
Role:{
    type:String,
    default:'Admin'
}
},{timestamps:true})

module.exports= mongoose.model("Admin",adminSchema)