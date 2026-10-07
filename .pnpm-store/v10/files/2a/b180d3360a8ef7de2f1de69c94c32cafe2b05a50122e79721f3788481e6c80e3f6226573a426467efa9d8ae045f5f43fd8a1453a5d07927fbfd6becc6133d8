'use strict';

var test = require('tape');

var names = require('../');

test('typed array names', function (t) {
	for (var i = 0; i < names.length; i++) {
		var name = names[i];

		t.equal(typeof name, 'string', 'is string');
		t.equal(names.indexOf(name), i, 'is unique (from start)');
		t.equal(names.lastIndexOf(name), i, 'is unique (from end)');

		t.match(typeof global[name], /^(?:function|undefined)$/, 'is a global function, or `undefined`');
	}

	t.end();
});
