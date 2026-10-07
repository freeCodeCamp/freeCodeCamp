'use strict';

var trimStart = require('string.prototype.trimstart');
var trimEnd = require('string.prototype.trimend');

var $TypeError = require('es-errors/type');

var RequireObjectCoercible = require('./RequireObjectCoercible');
var ToString = require('./ToString');

// https://262.ecma-international.org/10.0/#sec-trimstring

module.exports = function TrimString(string, where) {
	var str = RequireObjectCoercible(string);
	var S = ToString(str);
	var T;
	if (where === 'start') {
		T = trimStart(S);
	} else if (where === 'end') {
		T = trimEnd(S);
	} else if (where === 'start+end') {
		T = trimStart(trimEnd(S));
	} else {
		throw new $TypeError('Assertion failed: invalid `where` value; must be "start", "end", or "start+end"');
	}
	return T;
};
