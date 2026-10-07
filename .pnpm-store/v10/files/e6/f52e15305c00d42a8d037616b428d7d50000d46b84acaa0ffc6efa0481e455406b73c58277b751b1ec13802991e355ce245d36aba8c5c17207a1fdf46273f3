'use strict';

var GetIntrinsic = require('get-intrinsic');

var $isConcatSpreadable = GetIntrinsic('%Symbol.isConcatSpreadable%', true);

var Get = require('./Get');
var IsArray = require('./IsArray');
var ToBoolean = require('./ToBoolean');

var isObject = require('es-object-atoms/isObject');

// https://262.ecma-international.org/6.0/#sec-isconcatspreadable

module.exports = function IsConcatSpreadable(O) {
	if (!isObject(O)) {
		return false;
	}
	if ($isConcatSpreadable) {
		var spreadable = Get(O, $isConcatSpreadable);
		if (typeof spreadable !== 'undefined') {
			return ToBoolean(spreadable);
		}
	}
	return IsArray(O);
};
