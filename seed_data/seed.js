require('dotenv').load();
var Bonfire = require('../models/Bonfire.js'),
    Courseware = require('../models/Courseware.js'),
    FieldGuide = require('../models/FieldGuide.js'),
    Nonprofit = require('../models/Nonprofit.js'),
    mongoose = require('mongoose'),
    secrets = require('../config/secrets'),
    coursewares = require('./coursewares.json'),
    fieldGuides = require('./field-guides.json'),
    nonprofits = require('./nonprofits.json'),
    bonfires = require('./bonfires.json');

mongoose.connect(secrets.db);

var counter = 0;
var offerings = 4;

var CompletionMonitor = function() {
    counter++;
    console.log('call ' + counter);

    if (counter < offerings) {
        return;
    } else {
        process.exit(0);
    }
};


Bonfire.remove({}, function(err, data) {
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

Courseware.remove({}, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('Deleted ', data);
    }
    Courseware.create(coursewares, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Saved ', data);
        }
        CompletionMonitor();
    });
    console.log('coursewares');
});

FieldGuide.remove({}, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('Deleted ', data);
    }
    FieldGuide.create(fieldGuides, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Saved ', data);
        }
        CompletionMonitor();
    });
    console.log('field guides');
});

Nonprofit.remove({}, function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('Deleted ', data);
    }
    Nonprofit.create(nonprofits, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Saved ', data);
        }
        CompletionMonitor();
    });
    console.log('nonprofits');
});
