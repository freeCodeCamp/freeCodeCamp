'use strict';
var fs = require('graceful-fs');
var Promise = require('pinkie-promise');
var pify = require('pify');

function type(fn, fn2, fp) {
	if (typeof fp !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	return pify(fs[fn], Promise)(fp).then(function (stats) {
		return stats[fn2]();
	});
}

function typeSync(fn, fn2, fp) {
	if (typeof fp !== 'string') {
		throw new TypeError('Expected a string');
	}

	return fs[fn](fp)[fn2]();
}

exports.file = type.bind(null, 'stat', 'isFile');
exports.dir = type.bind(null, 'stat', 'isDirectory');
exports.symlink = type.bind(null, 'lstat', 'isSymbolicLink');
exports.fileSync = typeSync.bind(null, 'statSync', 'isFile');
exports.dirSync = typeSync.bind(null, 'statSync', 'isDirectory');
exports.symlinkSync = typeSync.bind(null, 'lstatSync', 'isSymbolicLink');
