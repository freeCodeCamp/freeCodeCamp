'use strict';
var os = require('os');
var macosRelease = require('macos-release');
var winRelease = require('win-release');

module.exports = function (platform, release) {
	if (!platform && release) {
		throw new Error('You can\'t specify a `release` without specifying `platform`');
	}

	platform = platform || os.platform();
	release = release || os.release();

	var id;

	if (platform === 'darwin') {
		var prefix = Number(release.split('.')[0]) > 15 ? 'macOS' : 'OS X';
		id = macosRelease(release).name;
		return prefix + (id ? ' ' + id : '');
	}

	if (platform === 'linux') {
		id = release.replace(/^(\d+\.\d+).*/, '$1');
		return 'Linux' + (id ? ' ' + id : '');
	}

	if (platform === 'win32') {
		id = winRelease(release);
		return 'Windows' + (id ? ' ' + id : '');
	}

	return platform;
};
