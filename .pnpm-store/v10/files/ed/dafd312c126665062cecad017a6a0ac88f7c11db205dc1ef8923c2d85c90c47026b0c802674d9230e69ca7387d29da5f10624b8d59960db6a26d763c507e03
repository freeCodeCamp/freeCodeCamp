'use strict';

var $TypeError = require('es-errors/type');

var Call = require('es-abstract/2024/Call');
var CreateIterResultObject = require('es-abstract/2024/CreateIterResultObject');
var GetMethod = require('es-abstract/2024/GetMethod');
var Type = require('es-abstract/2024/Type');

var SLOT = require('internal-slot');
var iterProto = require('../Iterator.prototype/implementation');

// https://tc39.es/proposal-iterator-helpers/#sec-wrapforvaliditeratorprototype-object

module.exports = /* GetIntrinsic('%WrapForValidIteratorPrototype%', true) || */ {
	__proto__: iterProto,
	next: function next() {
		var O = this; // step 1

		// RequireInternalSlot(O, [[Iterated]]); // step 2
		SLOT.assert(O, '[[Iterated]]');

		var iteratorRecord = SLOT.get(O, '[[Iterated]]'); // step 3

		return Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']); // step 4
	},
	'return': function () {
		var O = this; // step 1

		// RequireInternalSlot(O, [[Iterated]]); // step 2
		SLOT.assert(O, '[[Iterated]]');

		var iterator = SLOT.get(O, '[[Iterated]]')['[[Iterator]]']; // step 3

		if (Type(iterator) !== 'Object') {
			throw new $TypeError('iterator must be an Object'); // step 4
		}

		var returnMethod = GetMethod(iterator, 'return'); // step 5

		if (typeof returnMethod === 'undefined') { // step 6
			return CreateIterResultObject(undefined, true); // step 6.a
		}
		return Call(returnMethod, iterator); // step 7
	}
};
