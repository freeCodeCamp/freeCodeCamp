'use strict';

var ES5 = require('./es5');
var ES6 = require('./es6');
var ES2015 = require('./es2015');

if (Object.defineProperty) {
	Object.defineProperty(ES2015, 'ES5', { enumerable: false, value: ES5 });
	Object.defineProperty(ES2015, 'ES6', { enumerable: false, value: ES6 });
	Object.defineProperty(ES2015, 'ES2015', { enumerable: false, value: ES2015 });
} else {
	// @ts-expect-error TODO
	ES2015.ES5 = ES5;
	// @ts-expect-error TODO
	ES2015.ES6 = ES6;
	// @ts-expect-error TODO
	ES2015.ES2015 = ES2015;
}

/** @type {import('.')} */
module.exports = ES2015;
