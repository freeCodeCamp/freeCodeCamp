'use strict';

var $isFinite = isFinite;
var MAX_ALLOC = Math.pow(2, 30) - 1; // default in iojs

module.exports = function (iterations, keylen) {
	if (typeof iterations !== 'number') {
		throw new TypeError('Iterations not a number');
	}

	if (iterations < 0 || !$isFinite(iterations)) {
		throw new TypeError('Bad iterations');
	}

	if (typeof keylen !== 'number') {
		throw new TypeError('Key length not a number');
	}

	if (keylen < 0 || keylen > MAX_ALLOC || keylen !== keylen) { /* eslint no-self-compare: 0 */
		throw new TypeError('Bad key length');
	}
};
