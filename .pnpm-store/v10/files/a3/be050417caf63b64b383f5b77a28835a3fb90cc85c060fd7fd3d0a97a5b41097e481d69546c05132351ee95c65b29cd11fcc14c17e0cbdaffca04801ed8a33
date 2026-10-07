"use strict";

var assert                   = require("chai").assert
  , isFunction               = require("../../function/is")
  , arrowFunctionIfSupported = require("../_lib/arrow-function-if-supported")
  , classIfSupported         = require("../_lib/class-if-supported");

describe("function/is", function () {
	it("Should return true on function", function () {
		assert.equal(isFunction(function () { return true; }), true);
	});
	if (arrowFunctionIfSupported) {
		it("Should return true on arrow function", function () {
			assert.equal(isFunction(arrowFunctionIfSupported), true);
		});
	}
	if (classIfSupported) {
		it("Should return true on class", function () {
			assert.equal(isFunction(classIfSupported), true);
		});
	}
	it("Should return false on reg-exp", function () { assert.equal(isFunction(/foo/), false); });

	it("Should return false on plain object", function () { assert.equal(isFunction({}), false); });
	it("Should return false on array", function () { assert.equal(isFunction([]), false); });
	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isFunction(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () { assert.equal(isFunction("foo"), false); });
	it("Should return false on empty string", function () { assert.equal(isFunction(""), false); });
	it("Should return false on number", function () { assert.equal(isFunction(123), false); });
	it("Should return false on NaN", function () { assert.equal(isFunction(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isFunction(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isFunction(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isFunction(null), false); });
	it("Should return false on undefined", function () {
		assert.equal(isFunction(void 0), false);
	});
});
