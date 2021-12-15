const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
   
    name : {
        type : String,
        required : true,
        min : 3,
        max : 255
    },
    dateofbirth:{
        type : String
    },
    school:{
        type:String,
        required:true,
    },
    email : {
        type : String,
        required : true,
        max : 255,
        min : 4
    },
   
    contact:{
        type:Number,
        required:true,
    },
   
}) 


module.exports = mongoose.model('Student', studentSchema);