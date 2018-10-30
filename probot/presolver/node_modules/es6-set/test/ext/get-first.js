'use strict';

var Set     = require('../../');

module.exports = function (t, a) {
	var content = ['raz', 2, true], set = new Set(content);

	a(t.call(set), 'raz');

	set = new Set();
	a(t.call(set), undefined);
};
