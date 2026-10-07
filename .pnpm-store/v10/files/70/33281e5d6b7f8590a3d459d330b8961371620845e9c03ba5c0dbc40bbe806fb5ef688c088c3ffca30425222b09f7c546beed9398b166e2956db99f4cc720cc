'use strict';
const path = require('path');
const {createRequire} = require('module');

module.exports = (fromDirectory, moduleId) => createRequire(path.resolve(fromDirectory, 'noop.js'))(moduleId);

module.exports.silent = (fromDirectory, moduleId) => {
	try {
		return createRequire(path.resolve(fromDirectory, 'noop.js'))(moduleId);
	} catch {}
};
