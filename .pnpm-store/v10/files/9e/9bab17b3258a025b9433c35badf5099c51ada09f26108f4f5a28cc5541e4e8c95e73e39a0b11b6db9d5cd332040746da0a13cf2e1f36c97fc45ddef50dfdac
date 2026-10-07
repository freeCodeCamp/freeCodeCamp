"use strict";

var assert  = require("chai").assert
  , isArray = require("../../array/is");

describe("array/is", function () {
	it("Should return true on array", function () { assert.equal(isArray([]), true); });

	it("Should return false on array with no common API exposed", function () {
		var value = [];
		value.push = null;
		assert.equal(isArray(value), false);
	});
	it("Should return false on Array.prototype", function () {
		assert.equal(isArray(Array.prototype), false);
	});

	it("Should return false on plain object", function () { assert.equal(isArray({}), false); });
	it("Should return false on function", function () {
		assert.equal(isArray(function () { return true; }), false);
	});

	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isArray(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () { assert.equal(isArray("foo"), false); });
	it("Should return false on empty string", function () { assert.equal(isArray(""), false); });
	it("Should return false on number", function () { assert.equal(isArray(123), false); });
	it("Should return false on NaN", function () { assert.equal(isArray(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isArray(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isArray(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isArray(null), false); });
	it("Should return false on undefined", function () { assert.equal(isArray(void 0), false); });
});
