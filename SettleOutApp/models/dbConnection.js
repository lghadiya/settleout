var mongoose = require('mongoose');

// Mongoose connection to MongoDB 
module.export = mongoose.connect('mongodb://localhost:27017/test', function (error) {
    if (error) {
        console.log(error);
    }
    console.log("connected to DB");
});