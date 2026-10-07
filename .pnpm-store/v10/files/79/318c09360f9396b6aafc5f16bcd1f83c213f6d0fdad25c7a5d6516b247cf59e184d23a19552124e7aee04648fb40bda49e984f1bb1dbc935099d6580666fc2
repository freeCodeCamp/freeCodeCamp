"use strict";

var assert  = require("chai").assert
  , isValue = require("../../value/is");

describe("value/is", function () {
	it("Should return true on object", function () { assert.equal(isValue({}), true); });
	it("Should return true on function", function () {
		assert.equal(isValue(function () { return true; }), true);
	});
	it("Should return true on array", function () { assert.equal(isValue([]), true); });
	if (typeof Object.create === "function") {
		it("Should return true on object with no prototype", function () {
			assert.equal(isValue(Object.create(null)), true);
		});
	}
	it("Should return true on string", function () { assert.equal(isValue("foo"), true); });
	it("Should return true on empty string", function () { assert.equal(isValue(""), true); });
	it("Should return true on number", function () { assert.equal(isValue(123), true); });
	it("Should return true on NaN", function () { assert.equal(isValue(NaN), true); });
	it("Should return true on boolean", function () { assert.equal(isValue(false), true); });
	if (typeof Symbol === "function") {
		// eslint-disable-next-line no-undef
		it("Should return true on symbol", function () { assert.equal(isValue(Symbol()), true); });
	}

	it("Should return false on null", function () { assert.equal(isValue(null), false); });
	it("Should return false on undefined", function () { assert.equal(isValue(void 0), false); });
});
