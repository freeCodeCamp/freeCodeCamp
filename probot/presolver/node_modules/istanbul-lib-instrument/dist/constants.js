'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAGIC_VALUE = exports.MAGIC_KEY = exports.SHA = undefined;

var _semver = require('semver');

var _package = require('../package.json');

var _crypto = require('crypto');

// function to use for creating hashes
var SHA = exports.SHA = 'sha1';
// name of coverage data magic key
var MAGIC_KEY = exports.MAGIC_KEY = '_coverageSchema';
// name of coverage data magic value
var MAGIC_VALUE = exports.MAGIC_VALUE = (0, _crypto.createHash)(SHA).update(_package.name + '@' + (0, _semver.major)(_package.version)).digest('hex');