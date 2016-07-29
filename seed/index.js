/* eslint-disable no-process-exit */
require('babel-register');
require('dotenv').load();
var adler32 = require('adler32');

var Rx = require('rx'),
    _ = require('lodash'),
    utils = require('../server/utils'),
    getChallenges = require('./getChallenges'),
    app = require('../server/server');


var dasherize = utils.dasherize;
var nameify = utils.nameify;
var Observable = Rx.Observable;
var Challenge = app.models.Challenge;

var destroyChallenges =
  Observable.fromNodeCallback(Challenge.destroyAll, Challenge);
var createChallenges =
  Observable.fromNodeCallback(Challenge.create, Challenge);

var Block = app.models.Block;
var destroyBlocks = Observable.fromNodeCallback(Block.destroyAll, Block);
var createBlocks = Observable.fromNodeCallback(Block.create, Block);

Observable.combineLatest(
  destroyChallenges(),
  destroyBlocks()
)
  .last()
  .flatMap(function() { return Observable.from(getChallenges()); })
  .flatMap(function(challengeSpec) {
    var order = challengeSpec.order;
    var blockName = challengeSpec.name;
    var superBlock = challengeSpec.superBlock;
    var superOrder = challengeSpec.superOrder;
    var isBeta = !!challengeSpec.isBeta;
    var isComingSoon = !!challengeSpec.isComingSoon;
    var fileName = challengeSpec.fileName;
    var helpRoom = challengeSpec.helpRoom || 'Help';
    var time = challengeSpec.time || 'N/A';
    var isLocked = !!challengeSpec.isLocked;
    var message = challengeSpec.message;
    var required = challengeSpec.required || [];

    console.log('parsed %s successfully', blockName);

    // challenge file has no challenges...
    if (challengeSpec.challenges.length === 0) {
      return Rx.Observable.just([{ block: 'empty ' + blockName }]);
    }

    var block = {
      title: blockName,
      name: nameify(blockName),
      dashedName: dasherize(blockName),
      superOrder: superOrder,
      superBlock: superBlock,
      superBlockMessage: message,
      order: order,
      time: time,
      isLocked: isLocked
    };

    return createBlocks(block)
      .map(block => {
        console.log('successfully created %s block', block.name);

        return challengeSpec.challenges
          .map(function(challenge, index) {
            challenge.name = nameify(challenge.title);

            challenge.dashedName = dasherize(challenge.name);

            challenge.checksum = adler32.sum(
              Buffer(
                challenge.title +
                JSON.stringify(challenge.description) +
                JSON.stringify(challenge.challengeSeed) +
                JSON.stringify(challenge.tests)
              )
            );

            challenge.fileName = fileName;
            challenge.helpRoom = helpRoom;
            challenge.order = order;
            challenge.suborder = index + 1;
            challenge.block = dasherize(blockName);
            challenge.blockId = block.id;
            challenge.isBeta = challenge.isBeta || isBeta;
            challenge.isComingSoon = challenge.isComingSoon || isComingSoon;
            challenge.isLocked = challenge.isLocked || isLocked;
            challenge.time = challengeSpec.time;
            challenge.superOrder = superOrder;
            challenge.superBlock = superBlock
              .split('-')
              .map(function(word) {
                return _.capitalize(word);
              })
              .join(' ');
            challenge.required = (challenge.required || []).concat(required);

            return challenge;
          });
      })
      .flatMap(challenges => createChallenges(challenges));
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
