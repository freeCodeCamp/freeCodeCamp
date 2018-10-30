'use strict';
var path = require('path');
var findUp = require('find-up');

module.exports = function (cwd) {
	return findUp('package.json', {cwd: cwd}).then(function (fp) {
		return fp ? path.dirname(fp) : null;
	});
};

module.exports.sync = function (cwd) {
	var fp = findUp.sync('package.json', {cwd: cwd});
	return fp ? path.dirname(fp) : null;
};
