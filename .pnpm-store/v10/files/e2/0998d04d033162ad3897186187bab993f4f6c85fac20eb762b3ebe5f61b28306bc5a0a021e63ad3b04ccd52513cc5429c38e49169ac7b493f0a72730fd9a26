'use strict';

// var Construct = require('es-abstract/2024/Construct');
var CreateRegExpStringIterator = require('es-abstract/2024/CreateRegExpStringIterator');
var Get = require('es-abstract/2024/Get');
var Set = require('es-abstract/2024/Set');
var SpeciesConstructor = require('es-abstract/2024/SpeciesConstructor');
var ToLength = require('es-abstract/2024/ToLength');
var ToString = require('es-abstract/2024/ToString');
var Type = require('es-abstract/2024/Type');
var flagsGetter = require('regexp.prototype.flags');
var setFunctionName = require('set-function-name');
var callBound = require('call-bound');
var GetIntrinsic = require('get-intrinsic');
var $TypeError = require('es-errors/type');

var $indexOf = callBound('String.prototype.indexOf');

var OrigRegExp = GetIntrinsic('%RegExp%');

var supportsConstructingWithFlags = 'flags' in OrigRegExp.prototype;

var constructRegexWithFlags = function constructRegex(C, R) {
	var matcher;
	// workaround for older engines that lack RegExp.prototype.flags
	var flags = 'flags' in R ? Get(R, 'flags') : ToString(flagsGetter(R));
	if (supportsConstructingWithFlags && typeof flags === 'string') {
		matcher = new C(R, flags);
	} else if (C === OrigRegExp) {
		// workaround for older engines that can not construct a RegExp with flags
		matcher = new C(R.source, flags);
	} else {
		matcher = new C(R, flags);
	}
	return { flags: flags, matcher: matcher };
};

var regexMatchAll = setFunctionName(function SymbolMatchAll(string) {
	var R = this;
	if (Type(R) !== 'Object') {
		throw new $TypeError('"this" value must be an Object');
	}
	var S = ToString(string);
	var C = SpeciesConstructor(R, OrigRegExp);

	var tmp = constructRegexWithFlags(C, R);
	// var flags = ToString(Get(R, 'flags'));
	var flags = tmp.flags;
	// var matcher = Construct(C, [R, flags]);
	var matcher = tmp.matcher;

	var lastIndex = ToLength(Get(R, 'lastIndex'));
	Set(matcher, 'lastIndex', lastIndex, true);
	var global = $indexOf(flags, 'g') > -1;
	var fullUnicode = $indexOf(flags, 'u') > -1;
	return CreateRegExpStringIterator(matcher, S, global, fullUnicode);
}, '[Symbol.matchAll]', true);

module.exports = regexMatchAll;
