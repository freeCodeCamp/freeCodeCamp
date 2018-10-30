'use strict';
var path = require('path');
var pathExists = require('path-exists');
var Promise = require('pinkie-promise');

function splitPath(x) {
	return path.resolve(x || '').split(path.sep);
}

function join(parts, filename) {
	return path.resolve(parts.join(path.sep) + path.sep, filename);
}

module.exports = function (filename, opts) {
	opts = opts || {};

	var parts = splitPath(opts.cwd);

	return new Promise(function (resolve) {
		(function find() {
			var fp = join(parts, filename);

			pathExists(fp).then(function (exists) {
				if (exists) {
					resolve(fp);
				} else if (parts.pop()) {
					find();
				} else {
					resolve(null);
				}
			});
		})();
	});
};

module.exports.sync = function (filename, opts) {
	opts = opts || {};

	var parts = splitPath(opts.cwd);
	var len = parts.length;

	while (len--) {
		var fp = join(parts, filename);

		if (pathExists.sync(fp)) {
			return fp;
		}

		parts.pop();
	}

	return null;
};
