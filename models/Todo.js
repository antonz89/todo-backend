const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");



// create a blogSchema 
const todoSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true,
    },
    
    description:String,
    
    completed:{
        type: Boolean,
        required: true,
    },
    
    createdAt: { 
        type: Date, 
        default: Date.now,
        required: true,

     },
    
    dateCompleted: Date,
    
    status: {
        type: String,
        required: true,
        default: "incomplete",
        enum: ['incomplete', 'complete', 'deferred'],
    }, 
    
    id: {
        type: String, 
        default: uuidv4(),
    }

}); 

/*
name - type: string, validation: required
description - type: string
completed - type: boolean, validation: required
dateCreated - type: date, default: Date.now(), validation: required
dateCompleted - type: date
status - type: string, default: 'incomplete', validation: required, enum: ['incomplete', 'complete', 'deferred']
*/

// register model to collection
const Todo = mongoose.model("samples", todoSchema);

// make our model accessible to outside files 
module.exports = Todo;