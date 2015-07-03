/* eslint-disable no-process-exit */
require('babel/register');
require('dotenv').load();
var fs = require('fs'),
    path = require('path'),
    app = require('../server/server'),
    fieldGuides = require('./field-guides.json'),
    nonprofits = require('./nonprofits.json'),
    jobs = require('./jobs.json');

var Challenge = app.models.Challenge;
var FieldGuide = app.models.FieldGuide;
var Nonprofit = app.models.Nonprofit;
var Job = app.models.Job;
var counter = 0;
var challenges = fs.readdirSync(path.join(__dirname, '/challenges'));
var offerings = 3 + challenges.length;

var CompletionMonitor = function() {
  counter++;
  console.log('call ' + counter);

  if (counter < offerings) {
    return;
  } else {
    process.exit(0);
  }
};

Challenge.destroyAll(function(err, info) {
  if (err) {
    console.error(err);
  } else {
    console.log('Deleted ', info);
  }
  challenges.forEach(function (file) {
    Challenge.create(
      require('./challenges/' + file).challenges,
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Successfully parsed %s', file);
          CompletionMonitor();
        }
      }
    );
  });
});

FieldGuide.destroyAll(function(err, info) {
  if (err) {
    console.error(err);
  } else {
    console.log('Deleted ', info);
  }
  FieldGuide.create(fieldGuides, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved ', data);
    }
    CompletionMonitor();
    console.log('field guides');
  });
});

Nonprofit.destroyAll(function(err, info) {
  if (err) {
    console.error(err);
  } else {
    console.log('Deleted ', info);
  }
  Nonprofit.create(nonprofits, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved ', data);
    }
    CompletionMonitor();
    console.log('nonprofits');
  });
});

Job.destroyAll(function(err, info) {
  if (err) {
    console.error(err);
  } else {
    console.log('Deleted ', info);
  }
  Job.create(jobs, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('Saved ', data);
    }
    console.log('jobs');
    CompletionMonitor();
  });
});
