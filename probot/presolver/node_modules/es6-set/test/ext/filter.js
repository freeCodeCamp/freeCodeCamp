'use strict';

var aFrom = require('es5-ext/array/from')

  , Set = require('../../');

module.exports = function (t, a) {
	a.deep(aFrom(t.call(new Set(), Boolean)), [], "Empty set");
	a.deep(aFrom(t.call(new Set([2, 3, 4]), Boolean)), [2, 3, 4], "All true");
	a.deep(aFrom(t.call(new Set([0, false, 4]), Boolean)), [4], "Some false");
	a.deep(aFrom(t.call(new Set([0, false, null]), Boolean)), [], "All false");
};
