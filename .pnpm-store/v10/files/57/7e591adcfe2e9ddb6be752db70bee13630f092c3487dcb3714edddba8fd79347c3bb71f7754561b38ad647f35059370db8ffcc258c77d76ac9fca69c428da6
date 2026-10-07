"use strict";

var assert     = require("chai").assert
  , isIterable = require("../../iterable/is");

describe("iterable/is", function () {
	it("Should return true on array", function () { assert.equal(isIterable([]), true); });
	it("Should return true on arguments", function () {
		assert.equal(isIterable((function () { return arguments; })()), true);
	});
	it("Should by default return false on string", function () {
		assert.equal(isIterable("foo"), false);
	});
	it("Should accept strings if specified", function () {
		assert.equal(isIterable("foo", { allowString: true }), true);
	});

	it("Should support denyEmpty option", function () {
		assert.equal(isIterable([], { denyEmpty: true }), false);
		assert.equal(isIterable([null], { denyEmpty: true }), true);
		assert.equal(isIterable("", { allowString: true, denyEmpty: true }), false);
		assert.equal(isIterable("foo", { allowString: true, denyEmpty: true }), true);
	});

	if (typeof Set === "function") {
		it("Should return true on set", function () { assert.equal(isIterable(new Set()), true); });
	}
	if (typeof Map === "function") {
		it("Should return true on set", function () { assert.equal(isIterable(new Map()), true); });
	}

	it("Should return false on plain object", function () { assert.equal(isIterable({}), false); });
	it("Should return false on function", function () {
		assert.equal(isIterable(function () { return true; }), false);
	});

	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isIterable(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () { assert.equal(isIterable("foo"), false); });
	it("Should return false on empty string", function () { assert.equal(isIterable(""), false); });
	it("Should return false on number", function () { assert.equal(isIterable(123), false); });
	it("Should return false on NaN", function () { assert.equal(isIterable(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isIterable(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isIterable(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isIterable(null), false); });
	it("Should return false on undefined", function () {
		assert.equal(isIterable(void 0), false);
	});
});
