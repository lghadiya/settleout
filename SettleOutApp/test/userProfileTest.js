var userProfile = require('../models/userProfile');


module.exports = function(req, res){
    
     new userProfile.userProfile({
                firstName: 'Mayank', 
                LastName: 'Srivastava', //See if we want to use Virtuals
                gender : 'F',
                dob : '08/04/2017',
                address : '266 Hancock Avenue, Jersey City, NJ',
                email : 'lalitha.g@gmail.com', 
                phone : '+12012344564',
                qrCodePath : '//ertr/rtr/rt', //type : buffer can be done later
                myVendorSettings : ['23', '34'],
                personalization : {
                    theme : 'Disco',
                    default_mode : 'Customer'
                }})
        .save(function(err, result) {
                if (err) throw err;
                console.log("Save Successful !!");
                if(result) {
                    res.json(result)
                }
	    })};