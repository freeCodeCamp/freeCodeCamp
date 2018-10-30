'use strict';

var Set     = require('../../');

module.exports = function (t, a) {
	var content = ['raz', 2, true], set = new Set(content);

	a(t.call(set), true);

	set = new Set();
	a(t.call(set), undefined);
};
