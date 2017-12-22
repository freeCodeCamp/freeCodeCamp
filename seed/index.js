/* eslint-disable no-process-exit */
require('babel-register');
require('dotenv').load();

const { Observable } = require('rxjs');
const getChallenges = require('./getChallenges');
const { createChallengesArray } = require('./create-challenges.js');
const createDebugger = require('debug');
const app = require('../server/server');

const log = createDebugger('fcc:seed');
// force logger to always output
// this may be brittle
log.enabled = true;


const { Block, Challenge } = app.models;

const destroyChallenges =
  Observable.bindNodeCallback(Challenge.destroyAll.bind(Challenge));
const createChallenges =
  Observable.bindNodeCallback(Challenge.create.bind(Challenge));

const destroyBlocks = Observable.bindNodeCallback(Block.destroyAll.bind(Block));
const createBlocks = Observable.bindNodeCallback(Block.create.bind(Block));

Observable.combineLatest(
  destroyChallenges(),
  destroyBlocks()
)
  .last()
  .flatMap(() => Observable.of(getChallenges()))
  .map(createChallengesArray)
  .flatMap(([blocks, challenges]) => Observable.combineLatest(
    createBlocks(blocks).do(() => log('blocks created')),
    createChallenges(challenges).do(() => log('challenges created'))
  ))
  .subscribe(
    null,
    function(err) { throw err; },
    function() {
      log('challenge seed completed');
      process.exit(0);
    }
  );
