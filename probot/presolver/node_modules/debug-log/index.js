'use strict';
// https://github.com/joyent/node/blob/fbfe562d71ae8d8f8bbf627808c755e513e4e905/lib/util.js#L96-L114
var util = require('util');
var debugEnv = process.env.NODE_DEBUG || '';
var cache = {};

module.exports = function (set) {
	set = set.toUpperCase();

	if (!cache[set]) {
		if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnv)) {
			var pid = process.pid;

			cache[set] = function () {
				console.error('%s %d: %s', set, pid, util.format.apply(util, arguments));
			};
		} else {
			cache[set] = function () {};
		}
	}

	return cache[set];
};
