'use strict';
var userAgent = require('../internals/environment-user-agent');

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];
