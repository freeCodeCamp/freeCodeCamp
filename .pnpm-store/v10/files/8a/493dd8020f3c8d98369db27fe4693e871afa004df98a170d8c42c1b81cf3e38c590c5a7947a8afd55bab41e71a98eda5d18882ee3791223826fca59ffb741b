"use strict";

var assert      = require("chai").assert
  , isArrayLike = require("../../array-like/is");

describe("array-like/is", function () {
	it("Should return true on array", function () { assert.equal(isArrayLike([]), true); });
	it("Should return true on array-like object", function () {
		assert.equal(isArrayLike({ length: 1 }), true);
	});
	it("Should by default return false on string", function () {
		assert.equal(isArrayLike("foo"), false);
	});
	it("Should accept strings if specified", function () {
		assert.equal(isArrayLike("foo", { allowString: true }), true);
	});

	it("Should return false on objects with negative length", function () {
		assert.equal(isArrayLike({ length: -1 }), false);
	});

	it("Should return false on plain object", function () {
		assert.equal(isArrayLike({}), false);
	});
	it("Should return false on function", function () {
		assert.equal(isArrayLike(function () { return true; }), false);
	});

	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isArrayLike(Object.create(null)), false);
		});
	}
	it("Should return false on number", function () { assert.equal(isArrayLike(123), false); });
	it("Should return false on NaN", function () { assert.equal(isArrayLike(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isArrayLike(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isArrayLike(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isArrayLike(null), false); });
	it("Should return false on undefined", function () {
		assert.equal(isArrayLike(void 0), false);
	});
});
