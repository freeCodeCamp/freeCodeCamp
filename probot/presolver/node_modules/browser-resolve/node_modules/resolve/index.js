var core = require('./lib/core');
exports = module.exports = require('./lib/async');
exports.core = core;
exports.isCore = function (x) { return core[x] };
exports.sync = require('./lib/sync');
