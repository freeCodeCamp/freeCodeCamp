'use strict';

var GetIntrinsic = require('get-intrinsic');

var $BigInt = GetIntrinsic('%BigInt%', true);

var $pow = require('math-intrinsics/pow');

var ToBigInt = require('./ToBigInt');
var BigIntRemainder = require('./BigInt/remainder');

var modBigInt = require('../helpers/modBigInt');

// BigInt(2**64), but node v10.4-v10.8 have a bug where you can't `BigInt(x)` anything larger than MAX_SAFE_INTEGER
var twoSixtyFour = $BigInt && (BigInt($pow(2, 32)) * BigInt($pow(2, 32)));

// https://262.ecma-international.org/11.0/#sec-tobiguint64

module.exports = function ToBigUint64(argument) {
	var n = ToBigInt(argument);
	var int64bit = modBigInt(BigIntRemainder, n, twoSixtyFour);
	return int64bit;
};
