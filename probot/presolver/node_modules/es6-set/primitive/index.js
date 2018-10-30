'use strict';

var callable       = require('es5-ext/object/valid-callable')
  , clear          = require('es5-ext/object/clear')
  , setPrototypeOf = require('es5-ext/object/set-prototype-of')
  , d              = require('d')
  , iterator       = require('es6-iterator/valid-iterable')
  , forOf          = require('es6-iterator/for-of')
  , Set            = require('../polyfill')
  , Iterator       = require('../lib/primitive-iterator')
  , isNative       = require('../is-native-implemented')

  , create = Object.create, defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty, getPrototypeOf = Object.getPrototypeOf
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , PrimitiveSet;

module.exports = PrimitiveSet = function (/*iterable, serialize*/) {
	var iterable = arguments[0], serialize = arguments[1], self;
	if (!(this instanceof PrimitiveSet)) throw new TypeError('Constructor requires \'new\'');
	if (isNative && setPrototypeOf) self = setPrototypeOf(new Set(), getPrototypeOf(this));
	else self = this;
	if (iterable != null) iterator(iterable);
	if (serialize !== undefined) {
		callable(serialize);
		defineProperty(self, '_serialize', d('', serialize));
	}
	defineProperties(self, {
		__setData__: d('c', create(null)),
		__size__: d('w', 0)
	});
	if (!iterable) return self;
	forOf(iterable, function (value) {
		var key = self._serialize(value);
		if (key == null) throw new TypeError(value + " cannot be serialized");
		if (hasOwnProperty.call(self.__setData__, key)) return;
		self.__setData__[key] = value;
		++self.__size__;
	});
	return self;
};
if (setPrototypeOf) setPrototypeOf(PrimitiveSet, Set);

PrimitiveSet.prototype = create(Set.prototype, {
	constructor: d(PrimitiveSet),
	_serialize: d(function (value) {
		if (value && (typeof value.toString !== 'function')) return null;
		return String(value);
	}),
	add: d(function (value) {
		var key = this._serialize(value);
		if (key == null) throw new TypeError(value + " cannot be serialized");
		if (hasOwnProperty.call(this.__setData__, key)) return this;
		this.__setData__[key] = value;
		++this.__size__;
		this.emit('_add', key);
		return this;
	}),
	clear: d(function () {
		if (!this.__size__) return;
		clear(this.__setData__);
		this.__size__ = 0;
		this.emit('_clear');
	}),
	delete: d(function (value) {
		var key = this._serialize(value);
		if (key == null) return false;
		if (!hasOwnProperty.call(this.__setData__, key)) return false;
		delete this.__setData__[key];
		--this.__size__;
		this.emit('_delete', key);
		return true;
	}),
	entries: d(function () { return new Iterator(this, 'key+value'); }),
	get: d(function (key) {
		key = this._serialize(key);
		if (key == null) return;
		return this.__setData__[key];
	}),
	has: d(function (value) {
		var key = this._serialize(value);
		if (key == null) return false;
		return hasOwnProperty.call(this.__setData__, key);
	}),
	size: d.gs(function () { return this.__size__; }),
	values: d(function () { return new Iterator(this); })
});
