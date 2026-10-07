'use strict';

var $TypeError = require('es-errors/type');

var UTF16EncodeCodePoint = require('./UTF16EncodeCodePoint');
var IsArray = require('./IsArray');

var forEach = require('../helpers/forEach');
var isCodePoint = require('../helpers/isCodePoint');

// https://262.ecma-international.org/12.0/#sec-codepointstostring

module.exports = function CodePointsToString(text) {
	if (!IsArray(text)) {
		throw new $TypeError('Assertion failed: `text` must be a sequence of Unicode Code Points');
	}
	var result = '';
	forEach(text, function (cp) {
		if (!isCodePoint(cp)) {
			throw new $TypeError('Assertion failed: `text` must be a sequence of Unicode Code Points');
		}
		result += UTF16EncodeCodePoint(cp);
	});
	return result;
};
