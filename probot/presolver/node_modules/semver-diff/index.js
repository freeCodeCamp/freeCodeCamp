'use strict';
var semver = require('semver');

module.exports = function (a, b) {
	if (semver.gt(a, b)) {
		return null;
	}

	a = semver.parse(a);
	b = semver.parse(b);

	for (var key in a) {
		if (key === 'major' || key === 'minor' || key === 'patch') {
			if (a[key] !== b[key]) {
				return key;
			}
		}

		if (key === 'prerelease' || key === 'build') {
			if (JSON.stringify(a[key]) !== JSON.stringify(b[key])) {
				return key;
			}
		}
	}

	return null;
};
