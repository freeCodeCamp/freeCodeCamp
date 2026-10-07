'use strict';

var GetIntrinsic = require('get-intrinsic');

var $RegExp = GetIntrinsic('%RegExp%');

// var RegExpAlloc = require('./RegExpAlloc');
// var RegExpInitialize = require('./RegExpInitialize');
var ToString = require('./ToString');

// https://262.ecma-international.org/6.0/#sec-regexpcreate

module.exports = function RegExpCreate(P, F) {
	// var obj = RegExpAlloc($RegExp);
	// return RegExpInitialize(obj, P, F);

	// covers spec mechanics; bypass regex brand checking
	var pattern = typeof P === 'undefined' ? '' : ToString(P);
	var flags = typeof F === 'undefined' ? '' : ToString(F);
	return new $RegExp(pattern, flags);
};
