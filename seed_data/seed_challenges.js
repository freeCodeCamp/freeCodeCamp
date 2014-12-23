var Challenge = require('../models/Challenge.js'),
    mongoose = require('mongoose'),
    secrets = require('../config/secrets'),
    challenges = require('./challenges.json');

mongoose.connect(secrets.db);

Challenge.remove({}, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log('Deleted ', data);
    }
    Challenge.create(challenges, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log('Saved ', data);
        }
        process.exit(0);
    });
});
