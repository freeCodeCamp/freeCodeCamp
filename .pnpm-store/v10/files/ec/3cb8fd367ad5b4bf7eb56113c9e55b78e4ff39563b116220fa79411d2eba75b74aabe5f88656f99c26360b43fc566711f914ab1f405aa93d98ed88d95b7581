"use strict";

var assert        = require("chai").assert
  , isPlainObject = require("../../plain-object/is");

describe("plain-object/is", function () {
	it("Should return true on plain object", function () {
		assert.equal(isPlainObject({}), true);
	});
	if (typeof Object.create === "function") {
		it("Should return true on object with no prototype", function () {
			assert.equal(isPlainObject(Object.create(null)), true);
		});
		it(
			"Should return false on object that inherits from object with no prototype",
			function () { assert.equal(isPlainObject(Object.create(Object.create(null))), false); }
		);
	}
	it("Should return false on Object.prototype", function () {
		assert.equal(isPlainObject(Object.prototype), false);
	});
	it("Should return false on prototype that derives from Object.prototype", function () {
		assert.equal(isPlainObject(RegExp.prototype), false);
	});

	it("Should return false on function", function () {
		assert.equal(isPlainObject(function () { return true; }), false);
	});

	it("Should return false on string", function () { assert.equal(isPlainObject("foo"), false); });
	it("Should return false on empty string", function () {
		assert.equal(isPlainObject(""), false);
	});
	it("Should return false on number", function () { assert.equal(isPlainObject(123), false); });
	it("Should return false on NaN", function () { assert.equal(isPlainObject(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isPlainObject(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isPlainObject(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isPlainObject(null), false); });
	it("Should return false on undefined", function () {
		assert.equal(isPlainObject(void 0), false);
	});
});
