'use strict';

var test = require('tape');

var ES = require('../');
var ES6 = ES.ES6;
var ES2015 = ES.ES2015;
var ES6entry = require('../es6');

test('legacy es6 export', function (t) {
	t.equal(ES6, ES2015, 'main ES6 === main ES2015');
	t.end();
});

test('legacy es6 entry point', function (t) {
	t.equal(ES6, ES6entry, 'main ES6 === ES6 entry point');
	t.end();
});
