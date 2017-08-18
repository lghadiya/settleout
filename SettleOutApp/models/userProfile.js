var mongoose = require('mongoose');

//autoIncrement.initialize(connection);
//USER PROFILE SCHEMA
var userProfileSchema = mongoose.Schema({
    firstName: String, 
    LastName: String, //See if we want to use Virtuals
    gender : ['F','M','NA'],
    dob : Date,
    address : String,
    email : String, 
    phone : String,
    qrCodePath : String, //type : buffer can be done later
    myVendorSettings : Array,
    personalization : {
        theme : String,
        default_mode : String
    }
});

//userProfileSchema.plugin(autoIncrement.plugin, 'UserProfile');


var userProfileModel = mongoose.model('UserProfile', userProfileSchema, "userProfile");


module.exports = {
  userProfile: userProfileModel
}