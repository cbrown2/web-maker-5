var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    
    username: String,
    password: String,
    firstName: {type: String, default: ""}, 
    lastName: {type: String, default: ""},
    email: {type: String, default: ""},
    dataCreated: {type: Date, default: Date.now }
}, {collection: "user" });

module.exports = UserSchema
   
