'use strict';
const crypto = require('crypto');

module.exports = length => {
	if (!Number.isFinite(length)) {
		throw new TypeError('Expected a finite number');
	}

	return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
};
