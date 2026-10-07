'use strict';

// eslint-disable-next-line consistent-return
module.exports = /** @type {(t: import('tape').Test) => void | false} */ function runSymbolTests(t) {
	t.equal(typeof Symbol, 'function', 'global Symbol is a function');
	t.ok(Symbol.toStringTag, 'Symbol.toStringTag exists');

	if (typeof Symbol !== 'function' || !Symbol.toStringTag) { return false; }

	/** @type {{ [Symbol.toStringTag]?: 'test'}} */
	var obj = {};
	obj[Symbol.toStringTag] = 'test';

	t.equal(Object.prototype.toString.call(obj), '[object test]');
};
