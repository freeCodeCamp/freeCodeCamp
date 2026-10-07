'use strict';
const pLimit = require('p-limit');

class EndError extends Error {
	constructor(value) {
		super();
		this.value = value;
	}
}

// The input can also be a promise, so we `Promise.resolve()` it
const testElement = (el, tester) => Promise.resolve(el).then(tester);

// The input can also be a promise, so we `Promise.all()` them both
const finder = el => Promise.all(el).then(val => val[1] === true && Promise.reject(new EndError(val[0])));

module.exports = (iterable, tester, opts) => {
	opts = Object.assign({
		concurrency: Infinity,
		preserveOrder: true
	}, opts);

	const limit = pLimit(opts.concurrency);

	// Start all the promises concurrently with optional limit
	const items = [...iterable].map(el => [el, limit(testElement, el, tester)]);

	// Check the promises either serially or concurrently
	const checkLimit = pLimit(opts.preserveOrder ? 1 : Infinity);

	return Promise.all(items.map(el => checkLimit(finder, el)))
		.then(() => {})
		.catch(err => err instanceof EndError ? err.value : Promise.reject(err));
};
