'use strict';

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
var Get = require('./Get');
var OrdinaryGetOwnProperty = require('./OrdinaryGetOwnProperty');
var ToObject = require('./ToObject');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');

var forEach = require('../helpers/forEach');
var OwnPropertyKeys = require('own-keys');

// https://262.ecma-international.org/15.0/#sec-objectdefineproperties

module.exports = function ObjectDefineProperties(O, Properties) {
	var props = ToObject(Properties); // step 1
	var keys = OwnPropertyKeys(props); // step 2
	var descriptors = []; // step 3

	forEach(keys, function (nextKey) { // step 4
		var propDesc = OrdinaryGetOwnProperty(props, nextKey); // ToPropertyDescriptor(getOwnPropertyDescriptor(props, nextKey)); // step 4.a
		if (typeof propDesc !== 'undefined' && propDesc['[[Enumerable]]']) { // step 4.b
			var descObj = Get(props, nextKey); // step 4.b.i
			var desc = ToPropertyDescriptor(descObj); // step 4.b.ii
			descriptors[descriptors.length] = { '[[Key]]': nextKey, '[[Descriptor]]': desc }; // step 4.b.iii
		}
	});

	forEach(descriptors, function (pair) { // step 5
		DefinePropertyOrThrow(O, pair['[[Key]]'], pair['[[Descriptor]]']); // step 5.c
	});

	return O; // step 6
};
