'use strict';

module.exports = (
// node 12+
	process.allowedNodeEnvironmentFlags && process.allowedNodeEnvironmentFlags.has('--preserve-symlinks')
) || (
// node v6.2 - v11
	String(module.constructor._findPath).indexOf('preserveSymlinks') >= 0 // eslint-disable-line no-underscore-dangle
);
