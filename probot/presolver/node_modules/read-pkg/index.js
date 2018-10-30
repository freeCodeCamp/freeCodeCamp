'use strict';
var path = require('path');
var loadJsonFile = require('load-json-file');
var normalizePackageData = require('normalize-package-data');
var pathType = require('path-type');

module.exports = function (fp, opts) {
	if (typeof fp !== 'string') {
		opts = fp;
		fp = '.';
	}

	opts = opts || {};

	return pathType.dir(fp)
		.then(function (isDir) {
			if (isDir) {
				fp = path.join(fp, 'package.json');
			}

			return loadJsonFile(fp);
		})
		.then(function (x) {
			if (opts.normalize !== false) {
				normalizePackageData(x);
			}

			return x;
		});
};

module.exports.sync = function (fp, opts) {
	if (typeof fp !== 'string') {
		opts = fp;
		fp = '.';
	}

	opts = opts || {};
	fp = pathType.dirSync(fp) ? path.join(fp, 'package.json') : fp;

	var x = loadJsonFile.sync(fp);

	if (opts.normalize !== false) {
		normalizePackageData(x);
	}

	return x;
};
