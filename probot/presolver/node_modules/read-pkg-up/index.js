'use strict';
var findUp = require('find-up');
var readPkg = require('read-pkg');

module.exports = function (opts) {
	return findUp('package.json', opts).then(function (fp) {
		if (!fp) {
			return {};
		}

		return readPkg(fp, opts).then(function (pkg) {
			return {
				pkg: pkg,
				path: fp
			};
		});
	});
};

module.exports.sync = function (opts) {
	var fp = findUp.sync('package.json', opts);

	if (!fp) {
		return {};
	}

	return {
		pkg: readPkg.sync(fp, opts),
		path: fp
	};
};
