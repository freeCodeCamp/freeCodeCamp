'use strict';
const path = require('path');
const resolveFrom = require('resolve-from');
const parentModule = require('parent-module');

module.exports = moduleId => {
	if (typeof moduleId !== 'string') {
		throw new TypeError('Expected a string');
	}

	const parentPath = parentModule(__filename);

	const cwd = parentPath ? path.dirname(parentPath) : __dirname;
	const filePath = resolveFrom(cwd, moduleId);

	const oldModule = require.cache[filePath];
	// Delete itself from module parent
	if (oldModule && oldModule.parent) {
		let i = oldModule.parent.children.length;

		while (i--) {
			if (oldModule.parent.children[i].id === filePath) {
				oldModule.parent.children.splice(i, 1);
			}
		}
	}

	delete require.cache[filePath]; // Delete module from cache

	const parent = require.cache[parentPath]; // If `filePath` and `parentPath` are the same, cache will already be deleted so we won't get a memory leak in next step

	// In case cache doesn't have parent, fall back to normal require
	return parent === undefined || parent.require === undefined ? require(filePath) : parent.require(filePath);
};
