'use strict';
var path = require('path');
var resolveFrom = require('resolve-from');
var callerPath = require('caller-path');

module.exports = function (moduleId) {
	if (typeof moduleId !== 'string') {
		throw new TypeError('Expected a string');
	}

	var filePath = resolveFrom(path.dirname(callerPath()), moduleId);

	// delete itself from module parent
	if (require.cache[filePath] && require.cache[filePath].parent) {
		var i = require.cache[filePath].parent.children.length;

		while (i--) {
			if (require.cache[filePath].parent.children[i].id === filePath) {
				require.cache[filePath].parent.children.splice(i, 1);
			}
		}
	}

	// delete module from cache
	delete require.cache[filePath];

	// return fresh module
	return require(filePath);
};
