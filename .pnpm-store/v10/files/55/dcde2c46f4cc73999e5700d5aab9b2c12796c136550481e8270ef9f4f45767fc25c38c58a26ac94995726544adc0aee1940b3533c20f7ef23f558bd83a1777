'use strict';

var hasSymbols = require('has-symbols')();
var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bound');
var isString = require('is-string');

var $iterator = GetIntrinsic('%Symbol.iterator%', true);
var $stringSlice = callBound('String.prototype.slice');
var $String = GetIntrinsic('%String%');

var IsArray = require('./IsArray');

module.exports = function getIteratorMethod(ES, iterable) {
	var usingIterator;
	if (hasSymbols) {
		usingIterator = ES.GetMethod(iterable, $iterator);
	} else if (IsArray(iterable)) {
		usingIterator = function () {
			var i = -1;
			var arr = this;
			return {
				next: function () {
					i += 1;
					return {
						done: i >= arr.length,
						value: arr[i]
					};
				}
			};
		};
	} else if (isString(iterable)) {
		usingIterator = function () {
			var i = 0;
			return {
				next: function () {
					var nextIndex = ES.AdvanceStringIndex($String(iterable), i, true);
					var value = $stringSlice(iterable, i, nextIndex);
					i = nextIndex;
					var done = nextIndex > iterable.length;
					return {
						done: done,
						value: done ? void undefined : value
					};
				}
			};
		};
	}
	return usingIterator;
};
