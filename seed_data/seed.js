require('dotenv').load();
var Courseware = require('../models/Courseware.js'),
    secrets = require('../config/secrets'),
    coursewares = require('./coursewares.json'),
    bonfires = require('./bonfires.json'),
    app = require('../server/server'),
    Bonfire = app.models.bonfire;

var counter = 0;
var offerings = 1;

var CompletionMonitor = function() {
    counter++;
    console.log('call ' + counter);

    if (counter < offerings) {
        return;
    } else {
        process.exit(0);
    }
};


Bonfire.destroyAll({}, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('Deleted ', data);
    }
    Bonfire.create(bonfires, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Saved ', data);
        }
        CompletionMonitor();
    });
    console.log('bonfires');
});

//Courseware.remove({}, function(err, data) {
//    if (err) {
//        console.error(err);
//    } else {
//        console.log('Deleted ', data);
//    }
//    Courseware.create(coursewares, function(err, data) {
//        if (err) {
//            console.log(err);
//        } else {
//            console.log('Saved ', data);
//        }
//        CompletionMonitor();
//    });
//    console.log('coursewares');
//});
