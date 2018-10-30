'use strict';

var clear             = require('es5-ext/array/#/clear')
  , assign            = require('es5-ext/object/assign')
  , setPrototypeOf    = require('es5-ext/object/set-prototype-of')
  , toStringTagSymbol = require('es6-symbol').toStringTag
  , d                 = require('d')
  , autoBind          = require('d/auto-bind')
  , Iterator          = require('es6-iterator')
  , kinds             = require('./iterator-kinds')

  , defineProperties = Object.defineProperties, keys = Object.keys
  , unBind = Iterator.prototype._unBind
  , PrimitiveMapIterator;

PrimitiveMapIterator = module.exports = function (map, kind) {
	if (!(this instanceof PrimitiveMapIterator)) {
		return new PrimitiveMapIterator(map, kind);
	}
	Iterator.call(this, keys(map.__mapKeysData__), map);
	if (!kind || !kinds[kind]) kind = 'key+value';
	defineProperties(this, {
		__kind__: d('', kind),
		__keysData__: d('w', map.__mapKeysData__),
		__valuesData__: d('w', map.__mapValuesData__)
	});
};
if (setPrototypeOf) setPrototypeOf(PrimitiveMapIterator, Iterator);

PrimitiveMapIterator.prototype = Object.create(Iterator.prototype, assign({
	constructor: d(PrimitiveMapIterator),
	_resolve: d(function (i) {
		if (this.__kind__ === 'value') return this.__valuesData__[this.__list__[i]];
		if (this.__kind__ === 'key') return this.__keysData__[this.__list__[i]];
		return [this.__keysData__[this.__list__[i]],
			this.__valuesData__[this.__list__[i]]];
	}),
	_unBind: d(function () {
		this.__keysData__ = null;
		this.__valuesData__ = null;
		unBind.call(this);
	}),
	toString: d(function () { return '[object Map Iterator]'; })
}, autoBind({
	_onAdd: d(function (key) { this.__list__.push(key); }),
	_onDelete: d(function (key) {
		var index = this.__list__.lastIndexOf(key);
		if (index < this.__nextIndex__) return;
		this.__list__.splice(index, 1);
	}),
	_onClear: d(function () {
		clear.call(this.__list__);
		this.__nextIndex__ = 0;
	})
})));
Object.defineProperty(PrimitiveMapIterator.prototype, toStringTagSymbol,
	d('c', 'Map Iterator'));
