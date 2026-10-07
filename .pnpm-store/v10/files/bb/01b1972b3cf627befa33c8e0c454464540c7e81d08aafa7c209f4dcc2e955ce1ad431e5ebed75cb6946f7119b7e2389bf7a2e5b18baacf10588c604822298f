'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = require('es-errors/type');
var $fromCharCode = GetIntrinsic('%String.fromCharCode%');

var floor = require('./floor');
var modulo = require('./modulo');

var isCodePoint = require('../helpers/isCodePoint');

// https://262.ecma-international.org/12.0/#sec-utf16encoding

module.exports = function UTF16EncodeCodePoint(cp) {
	if (!isCodePoint(cp)) {
		throw new $TypeError('Assertion failed: `cp` must be >= 0 and <= 0x10FFFF');
	}
	if (cp <= 65535) {
		return $fromCharCode(cp);
	}
	var cu1 = $fromCharCode(floor((cp - 65536) / 1024) + 0xD800);
	var cu2 = $fromCharCode(modulo(cp - 65536, 1024) + 0xDC00);
	return cu1 + cu2;
};
