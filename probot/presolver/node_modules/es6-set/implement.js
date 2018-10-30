'use strict';

if (!require('./is-implemented')()) {
	Object.defineProperty(require('es5-ext/global'), 'Set',
		{ value: require('./polyfill'), configurable: true, enumerable: false,
			writable: true });
}
