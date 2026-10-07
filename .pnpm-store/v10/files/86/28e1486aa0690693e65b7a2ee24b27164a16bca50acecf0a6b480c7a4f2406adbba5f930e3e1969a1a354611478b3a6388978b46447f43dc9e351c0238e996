'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Call = require('./Call');
var CreateDataProperty = require('./CreateDataProperty');
var EnumerableOwnNames = require('./EnumerableOwnNames');
var Get = require('./Get');
var IsArray = require('./IsArray');
var ToLength = require('./ToLength');
var ToString = require('./ToString');

var forEach = require('../helpers/forEach');

// https://262.ecma-international.org/6.0/#sec-internalizejsonproperty

// note: `reviver` was implicitly closed-over until ES2020, where it becomes a third argument

module.exports = function InternalizeJSONProperty(holder, name, reviver) {
	if (!isObject(holder)) {
		throw new $TypeError('Assertion failed: `holder` is not an Object');
	}
	if (typeof name !== 'string') {
		throw new $TypeError('Assertion failed: `name` is not a String');
	}
	if (typeof reviver !== 'function') {
		throw new $TypeError('Assertion failed: `reviver` is not a Function');
	}

	var val = Get(holder, name); // step 1

	if (isObject(val)) { // step 3
		var isArray = IsArray(val); // step 3.a
		if (isArray) { // step 3.c
			var I = 0; // step 3.c.i

			var len = ToLength(Get(val, 'length')); // step 3.b.ii

			while (I < len) { // step 3.b.iv
				var newElement = InternalizeJSONProperty(val, ToString(I), reviver); // step 3.b.iv.1

				if (typeof newElement === 'undefined') { // step 3.b.iv.3
					delete val[ToString(I)]; // step 3.b.iv.3.a
				} else { // step 3.b.iv.4
					CreateDataProperty(val, ToString(I), newElement); // step 3.b.iv.4.a
				}

				I += 1; // step 3.b.iv.6
			}
		} else {
			var keys = EnumerableOwnNames(val); // step 3.d.i

			forEach(keys, function (P) { // step 3.d.iii
				// eslint-disable-next-line no-shadow
				var newElement = InternalizeJSONProperty(val, P, reviver); // step 3.d.iii.1

				if (typeof newElement === 'undefined') { // step 3.d.iii.3
					delete val[P]; // step 3.d.iii.3.a
				} else { // step 3.d.iii.4
					CreateDataProperty(val, P, newElement); // step 3.d.iii.4.a
				}
			});
		}
	}

	return Call(reviver, holder, [name, val]); // step 4
};
