'use strict';
const mimicFn = require('mimic-fn');

const cacheStore = new WeakMap();

const defaultCacheKey = function (x) {
	if (arguments.length === 1 && (x === null || x === undefined || (typeof x !== 'function' && typeof x !== 'object'))) {
		return x;
	}

	return JSON.stringify(arguments);
};

module.exports = (fn, opts) => {
	opts = Object.assign({
		cacheKey: defaultCacheKey,
		cache: new Map()
	}, opts);

	const memoized = function () {
		const cache = cacheStore.get(memoized);
		const key = opts.cacheKey.apply(null, arguments);

		if (cache.has(key)) {
			const c = cache.get(key);

			if (typeof opts.maxAge !== 'number' || Date.now() < c.maxAge) {
				return c.data;
			}
		}

		const ret = fn.apply(null, arguments);

		cache.set(key, {
			data: ret,
			maxAge: Date.now() + (opts.maxAge || 0)
		});

		return ret;
	};

	mimicFn(memoized, fn);

	cacheStore.set(memoized, opts.cache);

	return memoized;
};

module.exports.clear = fn => {
	const cache = cacheStore.get(fn);

	if (cache && typeof cache.clear === 'function') {
		cache.clear();
	}
};
