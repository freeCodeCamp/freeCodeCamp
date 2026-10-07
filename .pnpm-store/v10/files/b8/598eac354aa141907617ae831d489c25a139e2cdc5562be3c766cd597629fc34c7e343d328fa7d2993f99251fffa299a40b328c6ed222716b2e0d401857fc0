'use strict';

module.exports = function SHA(algorithm) {
	var alg = algorithm.toLowerCase();

	var Algorithm = module.exports[alg];
	if (!Algorithm) {
		throw new Error(alg + ' is not supported (we accept pull requests)');
	}

	return new Algorithm();
};

module.exports.sha = require('./sha');
module.exports.sha1 = require('./sha1');
module.exports.sha224 = require('./sha224');
module.exports.sha256 = require('./sha256');
module.exports.sha384 = require('./sha384');
module.exports.sha512 = require('./sha512');
