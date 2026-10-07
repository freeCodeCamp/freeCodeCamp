'use strict';

var $TypeError = require('es-errors/type');

var SameValue = require('./SameValue');

var IsArray = require('../helpers/IsArray');
var every = require('../helpers/every');
var forEach = require('../helpers/forEach');

var hasOwn = require('hasown');

var isKeyedGroup = function (group) {
	return hasOwn(group, '[[Key]]')
        && hasOwn(group, '[[Elements]]')
        && IsArray(group['[[Elements]]']);
};

// https://262.ecma-international.org/15.0/#sec-add-value-to-keyed-group

module.exports = function AddValueToKeyedGroup(groups, key, value) {
	if (!IsArray(groups) || (groups.length > 0 && !every(groups, isKeyedGroup))) {
		throw new $TypeError('Assertion failed: `groups` must be a List of Records with [[Key]] and [[Elements]]');
	}

	var matched = 0;
	forEach(groups, function (g) { // step 1
		if (SameValue(g['[[Key]]'], key)) { // step 2
			matched += 1;
			if (matched > 1) {
				throw new $TypeError('Assertion failed: Exactly one element of groups meets this criterion'); // step 2.a
			}

			var arr = g['[[Elements]]'];
			arr[arr.length] = value; // step 2.b
		}
	});

	if (matched === 0) {
		var group = { '[[Key]]': key, '[[Elements]]': [value] }; // step 2

		// eslint-disable-next-line no-param-reassign
		groups[groups.length] = group; // step 3
	}
};
