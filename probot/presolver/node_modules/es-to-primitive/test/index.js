'use strict';

var toPrimitive = require('../');
var ES5 = require('../es5');
var ES6 = require('../es6');
var ES2015 = require('../es2015');

var test = require('tape');

test('default export', function (t) {
	t.equal(toPrimitive, ES2015, 'default export is ES2015');
	t.equal(toPrimitive.ES5, ES5, 'ES5 property has ES5 method');
	t.equal(toPrimitive.ES6, ES6, 'ES6 property has ES6 method');
	t.equal(toPrimitive.ES2015, ES2015, 'ES2015 property has ES2015 method');
	t.end();
});

require('./es5');
require('./es6');
require('./es2015');
