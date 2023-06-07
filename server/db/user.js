const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    "date":String,
    "title" : String,
    "descriptions" : String,
        "food":String,
        "educations":String,
        "businessmen":String,
        "position":String    
     
}) 
module.exports = mongoose.model('Record',userSchema);