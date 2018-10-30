'use strict';

var Set = require('../../');

module.exports = function (t, a) {
	a(t.call(new Set(), Boolean), true, "Empty set");
	a(t.call(new Set([2, 3, 4]), Boolean), true, "Truthy");
	a(t.call(new Set([2, 0, 4]), Boolean), false, "Falsy");
};
