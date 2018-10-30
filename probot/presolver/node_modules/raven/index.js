'use strict';

module.exports = require('./lib/client');
module.exports.utils = require('./lib/utils');

module.exports.transports = require('./lib/transports');
module.exports.parsers = require('./lib/parsers');

// To infinity and beyond
Error.stackTraceLimit = Infinity;
