/* eslint-disable no-process-exit */
require('babel/register');
require('dotenv').load();

var fs = require('fs'),
    Rx = require('rx'),
    _ = require('lodash'),
    path = require('path'),
    app = require('../server/server');

function getFilesFor(dir) {
  return fs.readdirSync(path.join(__dirname, '/' + dir));
}

var Challenge = app.models.Challenge;
var challenges = getFilesFor('challenges');
var destroy = Rx.Observable.fromNodeCallback(Challenge.destroyAll, Challenge);
var create = Rx.Observable.fromNodeCallback(Challenge.create, Challenge);

destroy()
  .flatMap(function() { return Rx.Observable.from(challenges); })
  .flatMap(function(file) {
    var challengeSpec = require('./challenges/' + file);
    var order = challengeSpec.order;
    var block = challengeSpec.name;
    var isBeta = !!challengeSpec.isBeta;
    console.log('parsed %s successfully', file);

    // challenge file has no challenges...
    if (challengeSpec.challenges.length === 0) {
      return Rx.Observable.just([{ block: 'empty ' + block }]);
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

    return create(challenges);
  })
  .subscribe(
    function(challenges) {
      console.log('%s successfully saved', challenges[0].block);
    },
    function(err) { throw err; },
    function() {
      console.log('challenge seed completed');
      process.exit(0);
    }
  );
