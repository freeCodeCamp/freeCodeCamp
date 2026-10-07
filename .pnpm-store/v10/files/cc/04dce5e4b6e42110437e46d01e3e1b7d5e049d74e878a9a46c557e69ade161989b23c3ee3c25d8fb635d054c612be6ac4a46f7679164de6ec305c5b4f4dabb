'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBind = require('call-bind');
var $SyntaxError = require('es-errors/syntax');

var $resolve = GetIntrinsic('%Promise.resolve%', true);
var $PromiseResolve = $resolve && callBind($resolve);

// https://262.ecma-international.org/9.0/#sec-promise-resolve

module.exports = function PromiseResolve(C, x) {
	if (!$PromiseResolve) {
		throw new $SyntaxError('This environment does not support Promises.');
	}
	return $PromiseResolve(C, x);
};

