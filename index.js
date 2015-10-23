/* eslint-disable no-process-exit */
require('babel/register');
require('dotenv').load();
var fs = require('fs'),
    _ = require('lodash'),
    path = require('path'),
    app = require('../server/server'),
    nonprofits = require('./nonprofits.json'),
    jobs = require('./jobs.json');

function getFilesFor(dir) {
  return fs.readdirSync(path.join(__dirname, '/' + dir));
}

var Challenge = app.models.Challenge;
var Nonprofit = app.models.Nonprofit;
var Job = app.models.Job;
var counter = 0;
var challenges = getFilesFor('challenges');
// plus two accounts for nonprofits and jobs seed.
var numberToSave = challenges.length + 1;

function completionMonitor() {
  // Increment counter
  counter++;

  // Exit if all challenges have been checked
  if (counter >= numberToSave) {
    process.exit(0);
  }

  // Log where in the seed order we're currently at
  console.log('Call: ' + counter + '/' + numberToSave);
}

Challenge.destroyAll(function(err, info) {
  if (err) {
    throw err;
  } else {
    console.log('Deleted ', info);
  }
  challenges.forEach(function(file) {
    var challengeSpec = require('./challenges/' + file);
    var order = challengeSpec.order;
    var block = challengeSpec.name;
    var isBeta = !!challengeSpec.isBeta;

    // challenge file has no challenges...
    if (challengeSpec.challenges.length === 0) {
      console.log('file %s has no challenges', file);
      completionMonitor();
      return;
    }

    var challenges = challengeSpec.challenges
      .map(function(challenge, index) {
        // NOTE(berks): add title for displaying in views
        challenge.name =
          _.capitalize(challenge.type) +
          ': ' +
          challenge.title.replace(/[^a-zA-Z0-9\s]/g, '');

        challenge.dashedName = challenge.name
          .toLowerCase()
          .replace(/\:/g, '')
          .replace(/\s/g, '-');
        challenge.order = order;
        challenge.suborder = index + 1;
        challenge.block = block;
        challenge.isBeta = challenge.isBeta || isBeta;
        challenge.time = challengeSpec.time;

        return challenge;
      });

    Challenge.create(
      challenges,
      function(err) {
        if (err) {
          throw err;
        } else {
          console.log('Successfully parsed %s', file);
          completionMonitor(err);
        }
      }
    );
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
      throw err;
    } else {
      console.log('Saved ', data);
    }
    completionMonitor(err);
    console.log('nonprofits');
  });
});

Job.destroyAll(function(err, info) {
  if (err) {
    throw err;
  } else {
    console.log('Deleted ', info);
  }
  Job.create(jobs, function(err, data) {
    if (err) {
      console.log('error: ', err);
    } else {
      console.log('Saved ', data);
    }
    console.log('jobs');
    completionMonitor(err);
  });
});
