'use strict';
var path = require('path');
var Module = require('module');

module.exports = function (fromDir, moduleId) {
	if (typeof fromDir !== 'string' || typeof moduleId !== 'string') {
		throw new TypeError('Expected `fromDir` and `moduleId` to be a string');
	}

	fromDir = path.resolve(fromDir);

	var fromFile = path.join(fromDir, 'noop.js');

	return Module._resolveFilename(moduleId, {
		id: fromFile,
		filename: fromFile,
		paths: Module._nodeModulePaths(fromDir)
	});
};
