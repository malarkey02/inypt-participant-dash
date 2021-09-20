// Importing modules 
const mongoose = require('mongoose'); 
var crypto = require('crypto'); 
  
// Creating user schema 
const UserSchema = mongoose.Schema({ 
    name : { 
        type : String, 
        required : true
    }, 
    email : { 
        type : String, 
        required : true
    }, 
    hash : String, 
    salt : String 
}); 

const newUserSchema = new mongoose.Schema ({
    firstName: String,
    lastName: String, 
    school: String,
    grade: Number, 
    board: String, 
    city: String, 
    phone: String, 
  
    email: String, 
    password: String, 
    securityQuestion: String,
    securityAnswer: String,

    hash : String, 
    salt : String 

  })
  
// Method to set salt and hash the password for a user 
newUserSchema.methods.setPassword = function(password) { 
     
 // Creating a unique salt for a particular user 
    this.salt = crypto.randomBytes(16).toString('hex'); 
  
    // Hashing user's salt and password with 1000 iterations, 
     
    this.hash = crypto.pbkdf2Sync(password, this.salt,  
    1000, 64, `sha512`).toString(`hex`); 
}; 
  
// Method to check the entered password is correct or not 
newUserSchema.methods.validPassword = function(password) { 
    var hash = crypto.pbkdf2Sync(password,  
    this.salt, 1000, 64, `sha512`).toString(`hex`); 
    return this.hash === hash; 
}; 
  
// Exporting module to allow it to be imported in other files 
const User = module.exports = mongoose.model('User', newUserSchema);