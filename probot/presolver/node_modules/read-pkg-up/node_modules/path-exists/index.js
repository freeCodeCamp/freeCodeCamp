'use strict';
var fs = require('fs');
var Promise = require('pinkie-promise');

module.exports = function (fp) {
	var fn = typeof fs.access === 'function' ? fs.access : fs.stat;

	return new Promise(function (resolve) {
		fn(fp, function (err) {
			resolve(!err);
		});
	});
};

module.exports.sync = function (fp) {
	var fn = typeof fs.accessSync === 'function' ? fs.accessSync : fs.statSync;

	try {
		fn(fp);
		return true;
	} catch (err) {
		return false;
	}
};
