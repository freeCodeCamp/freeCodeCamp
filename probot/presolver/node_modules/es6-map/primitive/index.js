'use strict';

var clear          = require('es5-ext/object/clear')
  , setPrototypeOf = require('es5-ext/object/set-prototype-of')
  , validValue     = require('es5-ext/object/valid-value')
  , callable       = require('es5-ext/object/valid-callable')
  , d              = require('d')
  , iterator       = require('es6-iterator/valid-iterable')
  , forOf          = require('es6-iterator/for-of')
  , isNative       = require('../is-native-implemented')
  , MapPolyfill    = require('../polyfill')
  , Iterator       = require('../lib/primitive-iterator')

  , call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties, getPrototypeOf = Object.getPrototypeOf
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , PrimitiveMap;

module.exports = PrimitiveMap = function (/*iterable, serialize*/) {
	var iterable = arguments[0], serialize = arguments[1], self;
	if (!(this instanceof PrimitiveMap)) throw new TypeError('Constructor requires \'new\'');
	if (isNative && setPrototypeOf && (Map !== MapPolyfill)) {
		self = setPrototypeOf(new Map(), getPrototypeOf(this));
	} else {
		self = this;
	}
	if (iterable != null) iterator(iterable);
	if (serialize !== undefined) {
		callable(serialize);
		defineProperty(self, '_serialize', d('', serialize));
	}
	defineProperties(self, {
		__mapKeysData__: d('c', create(null)),
		__mapValuesData__: d('c', create(null)),
		__size__: d('w', 0)
	});
	if (!iterable) return self;
	forOf(iterable, function (value) {
		var key = validValue(value)[0], sKey = self._serialize(key);
		if (sKey == null) throw new TypeError(key + " cannot be serialized");
		value = value[1];
		if (hasOwnProperty.call(self.__mapKeysData__, sKey)) {
			if (self.__mapValuesData__[sKey] === value) return;
		} else {
			++self.__size__;
		}
		self.__mapKeysData__[sKey] = key;
		self.__mapValuesData__[sKey] = value;
	});
	return self;
};
if (setPrototypeOf) setPrototypeOf(PrimitiveMap, MapPolyfill);

PrimitiveMap.prototype = create(MapPolyfill.prototype, {
	constructor: d(PrimitiveMap),
	_serialize: d(function (value) {
		if (value && (typeof value.toString !== 'function')) return null;
		return String(value);
	}),
	clear: d(function () {
		if (!this.__size__) return;
		clear(this.__mapKeysData__);
		clear(this.__mapValuesData__);
		this.__size__ = 0;
		this.emit('_clear');
	}),
	delete: d(function (key) {
		var sKey = this._serialize(key);
		if (sKey == null) return false;
		if (!hasOwnProperty.call(this.__mapKeysData__, sKey)) return false;
		delete this.__mapKeysData__[sKey];
		delete this.__mapValuesData__[sKey];
		--this.__size__;
		this.emit('_delete', sKey);
		return true;
	}),
	entries: d(function () { return new Iterator(this, 'key+value'); }),
	forEach: d(function (cb/*, thisArg*/) {
		var thisArg = arguments[1], iterator, result, sKey;
		callable(cb);
		iterator = this.entries();
		result = iterator._next();
		while (result !== undefined) {
			sKey = iterator.__list__[result];
			call.call(cb, thisArg, this.__mapValuesData__[sKey],
				this.__mapKeysData__[sKey], this);
			result = iterator._next();
		}
	}),
	get: d(function (key) {
		var sKey = this._serialize(key);
		if (sKey == null) return;
		return this.__mapValuesData__[sKey];
	}),
	has: d(function (key) {
		var sKey = this._serialize(key);
		if (sKey == null) return false;
		return hasOwnProperty.call(this.__mapKeysData__, sKey);
	}),
	keys: d(function () { return new Iterator(this, 'key'); }),
	size: d.gs(function () { return this.__size__; }),
	set: d(function (key, value) {
		var sKey = this._serialize(key);
		if (sKey == null) throw new TypeError(key + " cannot be serialized");
		if (hasOwnProperty.call(this.__mapKeysData__, sKey)) {
			if (this.__mapValuesData__[sKey] === value) return this;
		} else {
			++this.__size__;
		}
		this.__mapKeysData__[sKey] = key;
		this.__mapValuesData__[sKey] = value;
		this.emit('_add', sKey);
		return this;
	}),
	values: d(function () { return new Iterator(this, 'value'); })
});
