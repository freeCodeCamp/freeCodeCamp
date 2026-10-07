'use strict';

var Path = require('path');
var slice = Array.prototype.slice;

function join(/* globs */) {
	var args;

	args = slice.call(arguments, 0);
	return args.reduce(function (result, globs) {
		return _apply(result, function (path) {
			return _apply(globs, function (glob) {
				return _join(path, glob);
			});
		});
	}, '');
}

function _apply(values, fn) {
	if (Array.isArray(values)) {
		return values.reduce(function (result, value) {
			return result.concat(fn(value));
		}, []);
	}
	return fn(values);
}

function _join(path, glob) {
	var negative, positive;

	if (glob[0] === '!') {
		positive = glob.substr(1);
		if (path[0] === '!') {
			negative = '';
		} else {
			negative = '!';
		}
		return negative + Path.join(path, positive);
	}
	return Path.join(path, glob);
}

module.exports = join;
