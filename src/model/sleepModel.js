
const mongoose = require( "mongoose")

let schema = new mongoose.Schema({
 nickName:{
    type:String,
    required:[true," nickName plz"],
    unique:[true,"oops!!, plz Try for new name"],
    trim:true
 },
 password:{
   type: String, 
   required: true,
   
   trim: true
 },
 goals:[
    {
        type:String,
        enum:["I would go to sleep easily","I will sleep through the night","i'd wake up on time"],
        required:true
    }
 ],
 problem:{
    type:String,
    enum:["Less than 2 weeks","2 to 8 Weeks","More than 8 Weeks"],
    required:true
 },
 sleepTime:{
    type:Number,
    required:true
 },
 wakeTime:{
    type:Number,
    required:true
 },
 sleepHours:{
    type:String,
    required:[true,"Sleep hour plz"],
  
 },
 efficiency:{
   type:Number
 }
 
},{timestamps:true})

module.exports = mongoose.model("dream", schema)

