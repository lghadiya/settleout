var express = require('express');
var cors = require('cors');
var mongoConnection = require('./models/dbConnection');
var userProfile = require('./controller/userProfileController');

//TEST DATA
//var userProfile = require('./test/userProfileTest');

var app = express();
var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log('Node.js listening on port ' + port);
});

//REST APIs
app.route('/save').get(cors(), function(req, res) {
	var savedata = userProfile(req, res, function(err){
        if (err) throw err;
        res.send("Saved Successfully !!");
    });
});
