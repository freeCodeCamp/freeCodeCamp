'use strict';

var test = require('tape');

var ES = require('../');
var ES7 = ES.ES7;
var ES2016 = ES.ES2016;
var ES7entry = require('../es7');

test('legacy es7 export', function (t) {
	t.equal(ES7, ES2016, 'main ES7 === main ES2016');
	t.end();
});

test('legacy es7 entry point', function (t) {
	t.equal(ES7, ES7entry, 'main ES7 === ES7 entry point');
	t.end();
});
