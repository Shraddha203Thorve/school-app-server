const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
   
    name : {
        type : String,
        required : true,
        min : 3,
        max : 255
    },
    email : {
        type : String,
        required : true,
        max : 255,
        min : 4
    },
    class:{
        type:String,
        required:true,
    },
    rollNo:{
        type:Number,
        required:true,
    },
    photoid:{
        type:String,
        required:true
    },
    password : {
        type : String,
        required : true,
        min : 6
    },
    date : {
        type : Date,
        default : Date.now
    }
}) 


module.exports = mongoose.model('Student', studentSchema);