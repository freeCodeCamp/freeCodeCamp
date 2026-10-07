'use strict';

var functionName = require('function.prototype.name');

var anon = functionName(function () {});

module.exports = function isAbstractClosure(x) {
	return typeof x === 'function' && (!x.prototype || functionName(x) === anon);
};
