'use strict';

// TODO, semver-major: delete this

var $TypeError = require('es-errors/type');
var $SyntaxError = require('es-errors/syntax');

var isMatchRecord = require('./records/match-record');
var isPropertyDescriptor = require('./records/property-descriptor');
var isIteratorRecord = require('./records/iterator-record-2023');
var isPromiseCapabilityRecord = require('./records/promise-capability-record');
var isAsyncGeneratorRequestRecord = require('./records/async-generator-request-record');
var isRegExpRecord = require('./records/regexp-record');

var predicates = {
	'Property Descriptor': isPropertyDescriptor,
	'Match Record': isMatchRecord,
	'Iterator Record': isIteratorRecord,
	'PromiseCapability Record': isPromiseCapabilityRecord,
	'AsyncGeneratorRequest Record': isAsyncGeneratorRequestRecord,
	'RegExp Record': isRegExpRecord
};

module.exports = function assertRecord(Type, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (!predicate(value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};
