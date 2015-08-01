/* eslint-disable no-process-exit */
require('babel/register');
require('dotenv').load();
var fs = require('fs'),
    path = require('path'),
    app = require('../server/server'),
    nonprofits = require('./nonprofits.json'),
    jobs = require('./jobs.json');

var challangesRegex = /^(bonfire:|waypoint:|zipline:|basejump:|hike:)/i;

function getFilesFor(dir) {
  return fs.readdirSync(path.join(__dirname, '/' + dir));
}

var Challenge = app.models.Challenge;
var Nonprofit = app.models.Nonprofit;
var Job = app.models.Job;
var counter = 0;
var challenges = getFilesFor('challenges');
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

Challenge.destroyAll(function(err, info) {
  if (err) {
    console.error(err);
  } else {
    console.log('Deleted ', info);
  }
  challenges.forEach(function(file) {
    var challenges = require('./challenges/' + file).challenges
      .map(function(challenge) {
        // NOTE(berks): add title for displaying in views
        challenge.title = challenge.name.replace(challangesRegex, '').trim();
        return challenge;
      });

    Challenge.create(
      challenges,
      function(err) {
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
