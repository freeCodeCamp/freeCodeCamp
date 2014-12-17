var Challenge = require('../models/Challenge.js')
var mongoose = require('mongoose');
var secrets = require('../config/secrets');
var challenges = require('./challenges.json');

mongoose.connect(secrets.db);
Challenge.remove({}, function(err, data){
    if (err) console.log(err);
    else console.log('Deleted ', data );
    Challenge.create(challenges, function(err, data) {
        if (err) console.log(err);
        else console.log('Saved ', data );
        process.exit(0);
    });
});
