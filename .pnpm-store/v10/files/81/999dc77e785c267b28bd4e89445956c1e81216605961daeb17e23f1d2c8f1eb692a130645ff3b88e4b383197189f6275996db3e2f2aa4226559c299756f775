'use strict';

var isIteratorRecordNew = require('./iterator-record');

module.exports = function isIteratorRecord(value) {
	return isIteratorRecordNew(value) && typeof value['[[NextMethod]]'] === 'function';
};
