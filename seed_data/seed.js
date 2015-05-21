require('dotenv').load();
var Challenge = require('../models/Challenge.js'),
  FieldGuide = require('../models/FieldGuide.js'),
  Nonprofit = require('../models/Nonprofit.js'),
  mongoose = require('mongoose'),
  secrets = require('../config/secrets'),
  fieldGuides = require('./field-guides.json'),
  nonprofits = require('./nonprofits.json'),
  fs = require('fs');

mongoose.connect(secrets.db);
var challenges = fs.readdirSync(__dirname + '/challenges');

var counter = 0;
var offerings = 2 + challenges.length;

var CompletionMonitor = function() {
  counter++;
  console.log('call ' + counter);

  if (counter < offerings) {
    return;
  } else {
    process.exit(0);
  }
};

Challenge.remove({}, function(err, data) {
  if (err) {
    console.err(err);
  } else {
    console.log('Deleted ', data);
  }
  challenges.forEach(function (file) {
    Challenge.create(require('./challenges/' + file).challenges, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log('Successfully parsed %s', file);
        CompletionMonitor();
      }
    });
  });
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
