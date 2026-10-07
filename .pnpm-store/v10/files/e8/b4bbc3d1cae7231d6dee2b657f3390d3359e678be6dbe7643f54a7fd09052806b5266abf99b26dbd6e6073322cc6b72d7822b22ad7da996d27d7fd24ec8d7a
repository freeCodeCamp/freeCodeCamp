'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Call = require('./Call');
var CreateDataProperty = require('./CreateDataProperty');
var EnumerableOwnProperties = require('./EnumerableOwnProperties');
var Get = require('./Get');
var IsArray = require('./IsArray');
var ToLength = require('./ToLength');
var ToString = require('./ToString');

var forEach = require('../helpers/forEach');

// https://262.ecma-international.org/8.0/#sec-internalizejsonproperty

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

	if (isObject(val)) { // step 2
		var isArray = IsArray(val); // step 2.a
		if (isArray) { // step 2.b
			var I = 0; // step 2.b.i

			var len = ToLength(Get(val, 'length')); // step 2.b.ii

			while (I < len) { // step 2.b.iii
				var newElement = InternalizeJSONProperty(val, ToString(I), reviver); // step 2.b.iv.1

				if (typeof newElement === 'undefined') { // step 2.b.iii.2
					delete val[ToString(I)]; // step 2.b.iii.2.a
				} else { // step 2.b.iii.3
					CreateDataProperty(val, ToString(I), newElement); // step 2.b.iii.3.a
				}

				I += 1; // step 2.b.iii.4
			}
		} else { // step 2.c
			var keys = EnumerableOwnProperties(val, 'key'); // step 2.c.i

			forEach(keys, function (P) { // step 2.c.ii
				// eslint-disable-next-line no-shadow
				var newElement = InternalizeJSONProperty(val, P, reviver); // step 2.c.ii.1

				if (typeof newElement === 'undefined') { // step 2.c.ii.2
					delete val[P]; // step 2.c.ii.2.a
				} else { // step 2.c.ii.3
					CreateDataProperty(val, P, newElement); // step 2.c.ii.3.a
				}
			});
		}
	}

	return Call(reviver, holder, [name, val]); // step 3
};
