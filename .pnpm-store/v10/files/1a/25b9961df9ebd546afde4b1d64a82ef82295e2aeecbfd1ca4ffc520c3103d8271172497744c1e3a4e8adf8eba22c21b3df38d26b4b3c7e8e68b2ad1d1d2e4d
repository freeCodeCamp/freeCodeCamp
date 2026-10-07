'use strict';

var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');
var callBound = require('call-bound');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

module.exports = function values(O) {
	var obj = RequireObjectCoercible(O);
	var vals = [];
	for (var key in obj) {
		if ($isEnumerable(obj, key)) { // checks own-ness as well
			vals[vals.length] = obj[key];
		}
	}
	return vals;
};
