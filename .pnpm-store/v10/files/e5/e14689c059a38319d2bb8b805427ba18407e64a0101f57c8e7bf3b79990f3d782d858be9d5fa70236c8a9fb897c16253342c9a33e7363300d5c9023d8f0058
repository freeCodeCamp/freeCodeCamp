"use strict";

var assert      = require("chai").assert
  , isPrototype = require("../../prototype/is");

describe("prototype/is", function () {
	it("Should return true on prototype", function () {
		assert.equal(isPrototype(Object.prototype), true);
	});
	it("Should return false on plain object", function () {
		assert.equal(isPrototype({}), false);
	});
	it("Should return false on function", function () {
		assert.equal(isPrototype(function () { return true; }), false);
	});
	it("Should return false on array", function () { assert.equal(isPrototype([]), false); });
	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isPrototype(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () { assert.equal(isPrototype("foo"), false); });
	it("Should return false on empty string", function () {
		assert.equal(isPrototype(""), false);
	});
	it("Should return false on number", function () { assert.equal(isPrototype(123), false); });
	it("Should return false on NaN", function () { assert.equal(isPrototype(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isPrototype(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isPrototype(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isPrototype(null), false); });
	it("Should return false on undefined", function () {
		assert.equal(isPrototype(void 0), false);
	});
});
