'use strict';

var ES = require('../').ES2015;

var ops = require('../operations/2015');

// jscs:disable
var expectedMissing = ['CreateMethodProperty', 'DefinePropertyOrThrow', 'DeletePropertyOrThrow', 'Construct', 'SetIntegrityLevel', 'TestIntegrityLevel', 'CreateArrayFromList', 'CreateListFromArrayLike', 'OrdinaryHasInstance', 'EnumerableOwnNames', 'GetIterator', 'IteratorNext', 'IteratorComplete', 'IteratorValue', 'IteratorStep', 'IteratorClose', 'CreateListIterator', 'thisNumberValue', 'thisTimeValue', 'thisStringValue', 'RegExpBuiltinExec', 'IsPromise', 'NormalCompletion'];
// jscs:enable

require('./tests').es2015(ES, ops, expectedMissing);
