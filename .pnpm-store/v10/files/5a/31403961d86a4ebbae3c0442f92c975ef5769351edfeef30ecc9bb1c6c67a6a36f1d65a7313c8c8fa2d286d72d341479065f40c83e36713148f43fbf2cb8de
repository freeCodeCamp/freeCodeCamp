"use strict";

var assert                   = require("chai").assert
  , isPlainFunction          = require("../../plain-function/is")
  , arrowFunctionIfSupported = require("../_lib/arrow-function-if-supported")
  , classIfSupported         = require("../_lib/class-if-supported");

describe("plain-function/is", function () {
	it("Should return true on function", function () {
		assert.equal(isPlainFunction(function () { return true; }), true);
	});
	if (arrowFunctionIfSupported) {
		it("Should return true on arrow function", function () {
			assert.equal(isPlainFunction(arrowFunctionIfSupported), true);
		});
	}
	if (classIfSupported) {
		it("Should return false on class", function () {
			assert.equal(isPlainFunction(classIfSupported), false);
		});
	}
	it("Should return false on reg-exp", function () {
		assert.equal(isPlainFunction(/foo/), false);
	});

	it("Should return false on plain object", function () {
		assert.equal(isPlainFunction({}), false);
	});
	it("Should return false on array", function () { assert.equal(isPlainFunction([]), false); });
	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isPlainFunction(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () {
		assert.equal(isPlainFunction("foo"), false);
	});
	it("Should return false on empty string", function () {
		assert.equal(isPlainFunction(""), false);
	});
	it("Should return false on number", function () { assert.equal(isPlainFunction(123), false); });
	it("Should return false on NaN", function () { assert.equal(isPlainFunction(NaN), false); });
	it("Should return false on boolean", function () {
		assert.equal(isPlainFunction(true), false);
	});
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isPlainFunction(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isPlainFunction(null), false); });
	it("Should return false on undefined", function () {
		assert.equal(isPlainFunction(void 0), false);
	});
});
