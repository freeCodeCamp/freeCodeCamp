'use strict';

var iterate = require('iterate-iterator');

module.exports = function testIterator(iterator, expected, t, msg) {
	t.deepEqual(iterate(iterator), expected, 'iterator yields expected values: ' + msg);
};
