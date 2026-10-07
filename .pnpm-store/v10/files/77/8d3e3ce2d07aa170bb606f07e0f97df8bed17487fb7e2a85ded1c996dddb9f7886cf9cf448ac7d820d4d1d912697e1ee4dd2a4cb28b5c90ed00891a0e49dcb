"use strict";

var setPrototypeOf = require("es5-ext/object/set-prototype-of")
  , d              = require("d")
  , Iterator       = require("../")
  , validIterable  = require("../valid-iterable")

  , push = Array.prototype.push
  , defineProperties = Object.defineProperties
  , IteratorChain;

IteratorChain = function (iterators) {
	defineProperties(this, {
		__iterators__: d("", iterators),
		__current__: d("w", iterators.shift())
	});
};
if (setPrototypeOf) setPrototypeOf(IteratorChain, Iterator);

IteratorChain.prototype = Object.create(Iterator.prototype, {
	constructor: d(IteratorChain),
	next: d(function () {
		var result;
		if (!this.__current__) return { done: true, value: undefined };
		result = this.__current__.next();
		while (result.done) {
			this.__current__ = this.__iterators__.shift();
			if (!this.__current__) return { done: true, value: undefined };
			result = this.__current__.next();
		}
		return result;
	})
});

module.exports = function () {
	var iterators = [this];
	push.apply(iterators, arguments);
	iterators.forEach(validIterable);
	return new IteratorChain(iterators);
};
