'use strict';

var Call = require('es-abstract/2024/Call');
var Get = require('es-abstract/2024/Get');
var GetMethod = require('es-abstract/2024/GetMethod');
var IsRegExp = require('es-abstract/2024/IsRegExp');
var ToString = require('es-abstract/2024/ToString');
var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');
var callBound = require('call-bound');
var hasSymbols = require('has-symbols')();
var flagsGetter = require('regexp.prototype.flags');
var GetIntrinsic = require('get-intrinsic');
var $TypeError = require('es-errors/type');

var $RegExp = GetIntrinsic('%RegExp%');
var $indexOf = callBound('String.prototype.indexOf');

var regexpMatchAllPolyfill = require('./polyfill-regexp-matchall');

var getMatcher = function getMatcher(regexp) { // eslint-disable-line consistent-return
	var matcherPolyfill = regexpMatchAllPolyfill();
	if (hasSymbols && typeof Symbol.matchAll === 'symbol') {
		var matcher = GetMethod(regexp, Symbol.matchAll);
		if (matcher === $RegExp.prototype[Symbol.matchAll] && matcher !== matcherPolyfill) {
			return matcherPolyfill;
		}
		return matcher;
	}
	// fallback for pre-Symbol.matchAll environments
	if (IsRegExp(regexp)) {
		return matcherPolyfill;
	}
};

module.exports = function matchAll(regexp) {
	var O = RequireObjectCoercible(this);

	if (typeof regexp !== 'undefined' && regexp !== null) {
		var isRegExp = IsRegExp(regexp);
		if (isRegExp) {
			// workaround for older engines that lack RegExp.prototype.flags
			var flags = 'flags' in regexp ? Get(regexp, 'flags') : flagsGetter(regexp);
			RequireObjectCoercible(flags);
			if ($indexOf(ToString(flags), 'g') < 0) {
				throw new $TypeError('matchAll requires a global regular expression');
			}
		}

		var matcher = getMatcher(regexp);
		if (typeof matcher !== 'undefined') {
			return Call(matcher, regexp, [O]);
		}
	}

	var S = ToString(O);
	// var rx = RegExpCreate(regexp, 'g');
	var rx = new $RegExp(regexp, 'g');
	return Call(getMatcher(rx), rx, [S]);
};
