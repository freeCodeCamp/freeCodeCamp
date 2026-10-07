'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Call = require('./Call');
var Get = require('./Get');
var IsCallable = require('./IsCallable');

var inspect = require('object-inspect');

// https://262.ecma-international.org/8.0/#sec-ordinarytoprimitive

module.exports = function OrdinaryToPrimitive(O, hint) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (/* typeof hint !== 'string' || */ hint !== 'string' && hint !== 'number') {
		throw new $TypeError('Assertion failed: `hint` must be "string" or "number"');
	}

	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];

	for (var i = 0; i < methodNames.length; i += 1) {
		var name = methodNames[i];
		var method = Get(O, name);
		if (IsCallable(method)) {
			var result = Call(method, O);
			if (!isObject(result)) {
				return result;
			}
		}
	}

	throw new $TypeError('No primitive value for ' + inspect(O));
};
