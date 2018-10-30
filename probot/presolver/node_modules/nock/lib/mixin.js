'use strict';
var _ = require("lodash");

function mixin(a, b) {
	if (! a) { a = {}; }
	if (! b) {b = {}; }
	a = _.cloneDeep(a);
	for(var prop in b) {
		a[prop] = b[prop];
	}
	return a;
}

module.exports = mixin;
