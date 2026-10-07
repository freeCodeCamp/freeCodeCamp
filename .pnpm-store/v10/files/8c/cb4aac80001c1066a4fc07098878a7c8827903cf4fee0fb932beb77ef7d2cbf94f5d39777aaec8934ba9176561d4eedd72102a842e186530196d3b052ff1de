'use strict';

var $TypeError = require('es-errors/type');

var CodePointAt = require('./CodePointAt');

// https://262.ecma-international.org/12.0/#sec-stringtocodepoints

module.exports = function StringToCodePoints(string) {
	if (typeof string !== 'string') {
		throw new $TypeError('Assertion failed: `string` must be a String');
	}
	var codePoints = [];
	var size = string.length;
	var position = 0;
	while (position < size) {
		var cp = CodePointAt(string, position);
		codePoints[codePoints.length] = cp['[[CodePoint]]'];
		position += cp['[[CodeUnitCount]]'];
	}
	return codePoints;
};
