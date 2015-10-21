/* eslint-disable no-process-exit */
require('babel/register');
require('dotenv').load();

var Rx = require('rx');
var app = require('../server/server');

var Nonprofits = app.models.Challenge;
var nonprofits = require('./nonprofits.json');
var destroy = Rx.Observable.fromNodeCallback(Nonprofits.destroyAll, Nonprofits);
var create = Rx.Observable.fromNodeCallback(Nonprofits.create, Nonprofits);

destroy()
  .flatMap(function() {
    if (!nonprofits) {
      return Rx.Observable.throw(new Error('No nonprofits found'));
    }
    return create(nonprofits);
  })
  .subscribe(
    function(nonprofits) {
      console.log('successfully saved %d nonprofits', nonprofits.length);
    },
    function(err) { throw err; },
    function() {
      console.log('nonprofit seed completed');
      process.exit(0);
    }
  );
