"use strict";

var assert   = require("chai").assert
  , isObject = require("../../object/is");

describe("object/is", function () {
	it("Should return true on object", function () { assert.equal(isObject({}), true); });
	it("Should return true on function", function () {
		assert.equal(isObject(function () { return true; }), true);
	});
	it("Should return true on array", function () { assert.equal(isObject([]), true); });
	if (typeof Object.create === "function") {
		it("Should return true on object with no prototype", function () {
			assert.equal(isObject(Object.create(null)), true);
		});
	}
	it("Should return false on string", function () { assert.equal(isObject("foo"), false); });
	it("Should return false on empty string", function () { assert.equal(isObject(""), false); });
	it("Should return false on number", function () { assert.equal(isObject(123), false); });
	it("Should return false on NaN", function () { assert.equal(isObject(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isObject(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isObject(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isObject(null), false); });
	it("Should return false on undefined", function () { assert.equal(isObject(void 0), false); });
});
