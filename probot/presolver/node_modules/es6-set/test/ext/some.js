'use strict';

var Set = require('../../');

module.exports = function (t, a) {
	a(t.call(new Set(), Boolean), false, "Empty set");
	a(t.call(new Set([2, 3, 4]), Boolean), true, "All true");
	a(t.call(new Set([0, false, 4]), Boolean), true, "Some false");
	a(t.call(new Set([0, false, null]), Boolean), false, "All false");
};
