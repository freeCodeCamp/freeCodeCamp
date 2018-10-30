'use strict';
var invertKv = require('invert-kv');
var all = require('./lcid.json');
var inverted = invertKv(all);

exports.from = function (lcidCode) {
	if (typeof lcidCode !== 'number') {
		throw new TypeError('Expected a number');
	}

	return inverted[lcidCode];
};

exports.to = function (localeId) {
	if (typeof localeId !== 'string') {
		throw new TypeError('Expected a string');
	}

	return all[localeId];
};

exports.all = all;
