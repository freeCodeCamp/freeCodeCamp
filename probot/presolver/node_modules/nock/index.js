'use strict';

var recorder = require('./lib/recorder');
module.exports = require('./lib/scope');

module.exports.recorder = {
    rec  : recorder.record
  , clear   : recorder.clear
  , play : recorder.outputs
};

module.exports.back = require('./lib/back');
module.exports.restore = recorder.restore;
