/* eslint-disable no-process-exit */
require('babel/register');
require('dotenv').load();

var Rx = require('rx'),
    _ = require('lodash'),
    getChallenges = require('./getChallenges'),
    app = require('../server/server');


var Challenge = app.models.Challenge;
var destroy = Rx.Observable.fromNodeCallback(Challenge.destroyAll, Challenge);
var create = Rx.Observable.fromNodeCallback(Challenge.create, Challenge);

destroy()
  .flatMap(function() { return Rx.Observable.from(getChallenges()); })
  .flatMap(function(challengeSpec) {
    var order = challengeSpec.order;
    var block = challengeSpec.name;
    var superBlock = challengeSpec.superBlock;
    var superBlockOrder = challengeSpec.superBlockOrder;
    var isBeta = !!challengeSpec.isBeta;
    var fileName = challengeSpec.fileName;
    console.log('parsed %s successfully', block);

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

        challenge.fileName = fileName;
        challenge.order = order;
        challenge.suborder = index + 1;
        challenge.block = block;
        challenge.isBeta = challenge.isBeta || isBeta;
        challenge.time = challengeSpec.time;
        challenge.superBlockOrder = superBlockOrder;
        challenge.superBlock = superBlock
          .split('-')
          .map(function(word) {
            return _.capitalize(word);
          })
          .join(' ');

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
