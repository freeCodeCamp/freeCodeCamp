'use strict';

var test = require('tape');
var gPO = require('reflect.getprototypeof/polyfill')();
var gOPD = require('gopd');

var hasProto = require('../');
var hasProtoAccessor = require('../accessor');

var getter = require('dunder-proto/get');

test('hasProtoAccessor', function (t) {
	var result = hasProtoAccessor();
	t.equal(typeof result, 'boolean', 'returns a boolean (' + result + ')');

	var obj = { __proto__: null };
	if (result) {
		t.notOk('toString' in obj, 'null object lacks toString');
		t.equal(gPO(obj), null);
		if (gOPD && getter) {
			t.equal(getter(obj), null);
		}
	} else if (hasProto()) {
		t.notOk('toString' in obj, 'null object lacks toString');
		if (gOPD && getter) {
			t.equal(getter(obj), null);
		}
	} else {
		t.ok('toString' in obj, 'without proto, null object has toString');
		t.equal(gPO(obj), Object.prototype);
	}

	t.end();
});
