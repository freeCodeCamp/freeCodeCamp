'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var CreateDataPropertyOrThrow = require('es-abstract/2024/CreateDataPropertyOrThrow');
var Get = require('es-abstract/2024/Get');
var GetIteratorFlattenable = require('../aos/GetIteratorFlattenable');
var GetOptionsObject = require('../aos/GetOptionsObject');
var IfAbruptCloseIterators = require('../aos/IfAbruptCloseIterators');
var IsAccessorDescriptor = require('es-abstract/2024/IsAccessorDescriptor');
var IsDataDescriptor = require('es-abstract/2024/IsDataDescriptor');
var IteratorZip = require('../aos/IteratorZip');
var OrdinaryObjectCreate = require('es-abstract/2024/OrdinaryObjectCreate');
var ThrowCompletion = require('es-abstract/2024/ThrowCompletion');
var ToPropertyDescriptor = require('es-abstract/2024/ToPropertyDescriptor');
var Type = require('es-abstract/2024/Type');

var forEach = require('es-abstract/helpers/forEach');
var ownKeys = require('es-abstract/helpers/OwnPropertyKeys');

var gOPD = require('gopd');

module.exports = function zipKeyed(iterables) {
	if (this instanceof zipKeyed) {
		throw new $TypeError('`Iterator.zip` is not a constructor');
	}

	if (Type(iterables) !== 'Object') {
		throw new $TypeError('`iterables` must be an Object'); // step 1
	}

	var options = GetOptionsObject(arguments.length > 1 ? arguments[1] : undefined); // step 2

	var mode = Get(options, 'mode'); // step 3

	if (typeof mode === 'undefined') {
		mode = 'shortest'; // step 4
	}

	if (mode !== 'shortest' && mode !== 'longest' && mode !== 'strict') {
		throw new $TypeError('`mode` must be one of "shortest", "longest", or "strict"'); // step 5
	}

	var paddingOption; // step 6

	if (mode === 'longest') { // step 7
		paddingOption = Get(options, 'padding'); // step 7.a
		if (typeof paddingOption !== 'undefined' && Type(paddingOption) !== 'Object') {
			throw new $TypeError('`padding` option must be an Object'); // step 7.b
		}
	}

	var iters = []; // step 8

	var padding = []; // step 9

	var allKeys = ownKeys(iterables); // step 10

	var keys = []; // step 11

	forEach(allKeys, function (key) { // step 12
		var desc;
		try {
			desc = ToPropertyDescriptor(gOPD(iterables, key)); // step 12.a
		} catch (e) {
			IfAbruptCloseIterators(ThrowCompletion(e), iters); // step 12.b
		}

		if (typeof desc !== 'undefined' && desc['[[Enumerable]]'] === true) { // step 12.c
			var value; // step 12.c.i
			if (IsDataDescriptor(desc)) { // step 12.c.ii
				value = desc['[[Value]]']; // step 12.c.ii.1
			} else {
				if (!IsAccessorDescriptor(desc)) {
					throw new $TypeError('Assertion failed: IsAccessorDescriptor(desc) is not true'); // step 12.c.ii.1
				}
				var getter = desc['[[Get]]']; // step 12.c.iii.2
				if (typeof getter !== 'undefined') { // step 12.c.iii.3
					var getterResult;
					try {
						getterResult = Call(getter, iterables); // step 12.c.iii.3.a
					} catch (e) {
						// step 12.c.iii.3.b
						// 2. IfAbruptCloseIterators(e, iters).
					}
					value = getterResult; // step 12.c.iii.3.c
				}
			}
			if (typeof value !== 'undefined') { // step 12.c.iv
				keys[keys.length] = key; // step 12.c.iv.1
				var iter;
				try {
					iter = GetIteratorFlattenable(value, 'REJECT-STRINGS'); // step 12.c.iv.2
				} catch (e) {
					IfAbruptCloseIterators(ThrowCompletion(e), iters); // step 12.c.iv.3
				}
				iters[iters.length] = iter; // step 12.c.iv.4
			}
		}
	});

	var iterCount = iters.length; // step 13

	if (mode === 'longest') { // step 14
		if (typeof paddingOption === 'undefined') { // step 14.a
			for (var j = 0; j < iterCount; j += 1) { // step 14.a.i
				padding[padding.length] = void undefined; // step 14.a.i.1
			}
		} else { // step 14.b
			forEach(keys, function (key) { // step 14.b.i
				var value;
				try {
					value = Get(paddingOption, key); // step 14.b.i.1
				} catch (e) {
					IfAbruptCloseIterators(ThrowCompletion(e), iters); // step 14.b.i.2
				}
				padding[padding.length] = value; // step 14.b.i.3
			});
		}
	}

	// eslint-disable-next-line no-sequences
	var finishResults = (0, function (results) { // step 15
		var obj = OrdinaryObjectCreate(null); // step 15.a
		for (var i = 0; i < iterCount; i += 1) { // step 15.b
			CreateDataPropertyOrThrow(obj, keys[i], results[i]); // step 15.b.i
		}
		return obj; // step 15.c
	});

	return IteratorZip(iters, mode, padding, finishResults); // step 16
};
