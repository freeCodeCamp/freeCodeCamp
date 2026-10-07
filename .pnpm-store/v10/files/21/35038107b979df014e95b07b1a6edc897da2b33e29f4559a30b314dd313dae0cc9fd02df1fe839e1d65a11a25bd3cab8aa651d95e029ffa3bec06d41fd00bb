'use strict';

var GetIntrinsic = require('get-intrinsic');

var hasOwn = require('hasown');

var $assign = GetIntrinsic('%Object.assign%', true);

module.exports = function assign(target, source) {
	if ($assign) {
		return $assign(target, source);
	}

	// eslint-disable-next-line no-restricted-syntax
	for (var key in source) {
		if (hasOwn(source, key)) {
			// eslint-disable-next-line no-param-reassign
			target[key] = source[key];
		}
	}
	return target;
};
