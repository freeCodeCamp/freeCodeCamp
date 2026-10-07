'use strict';

var stream = require('stream');
var util = require('util');
var replace = require('./replace');

var jsonExtRe = /\.json$/;

module.exports = function(rootEnv) {
  rootEnv = rootEnv || process.env;
  return function (file, trOpts) {
    if (jsonExtRe.test(file)) {
      return stream.PassThrough();
    }
    var envs = trOpts ? [rootEnv, trOpts] : [rootEnv];
    return new LooseEnvify(envs);
  };
};

function LooseEnvify(envs) {
  stream.Transform.call(this);
  this._data = '';
  this._envs = envs;
}
util.inherits(LooseEnvify, stream.Transform);

LooseEnvify.prototype._transform = function(buf, enc, cb) {
  this._data += buf;
  cb();
};

LooseEnvify.prototype._flush = function(cb) {
  var replaced = replace(this._data, this._envs);
  this.push(replaced);
  cb();
};
