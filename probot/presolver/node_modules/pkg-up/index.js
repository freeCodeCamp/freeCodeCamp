'use strict';
var findUp = require('find-up');

module.exports = function (cwd) {
	return findUp('package.json', {cwd: cwd});
};

module.exports.sync = function (cwd) {
	return findUp.sync('package.json', {cwd: cwd});
};
