'use strict';

var setToStringTag = require('es-set-tostringtag');
var hasProto = require('has-proto')();
var iterProto = require('../Iterator.prototype/implementation');
var SLOT = require('internal-slot');

var CreateIterResultObject = require('es-abstract/2024/CreateIterResultObject');
var GeneratorResume = require('../aos/GeneratorResume');
var GeneratorResumeAbrupt = require('../aos/GeneratorResumeAbrupt');
var IteratorCloseAll = require('../aos/IteratorCloseAll');
var ReturnCompletion = require('../aos/ReturnCompletion');

var implementation;
var o = { // in an object, for name inference
	'return': function () {
		var O = this; // step 1

		SLOT.assert(O, '[[UnderlyingIterators]]'); // step 2

		SLOT.assert(O, '[[GeneratorState]]'); // step 3

		if (SLOT.get(O, '[[GeneratorState]]') === 'suspendedStart') { // step 4
			SLOT.set(O, '[[GeneratorState]]', 'completed'); // step 4.a
			IteratorCloseAll(SLOT.get(O, '[[UnderlyingIterators]]'), ReturnCompletion(void undefined)); // step 4.c
			return CreateIterResultObject(void undefined, true); // step 4.d
		}

		var C = ReturnCompletion(void undefined); // step 5

		return GeneratorResumeAbrupt(O, C, 'Iterator Helper'); // step 6
	}
};
if (hasProto) {
	implementation = {
		__proto__: iterProto,
		next: function next() {
			return GeneratorResume(this, void undefined, 'Iterator Helper');
		},
		'return': o['return']
	};
	setToStringTag(implementation, 'Iterator Helper');
} else {
	var IteratorHelper = function IteratorHelper() {};
	IteratorHelper.prototype = iterProto;
	implementation = new IteratorHelper();
	delete implementation.constructor;
	implementation.next = function next() {
		return GeneratorResume(this, void undefined, 'Iterator Helper');
	};
	implementation['return'] = o['return'];
}

module.exports = implementation;
