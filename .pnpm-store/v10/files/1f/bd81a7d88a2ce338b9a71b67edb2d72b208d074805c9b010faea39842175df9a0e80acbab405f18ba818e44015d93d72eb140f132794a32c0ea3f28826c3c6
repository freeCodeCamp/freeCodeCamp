"use strict";

var assert   = require("chai").assert
  , isRegExp = require("../../reg-exp/is");

describe("reg-exp/is", function () {
	it("Should return true on regular expression", function () {
		assert.equal(isRegExp(/foo/), true);
	});

	it("Should return false on native regular expression with no common API exposed", function () {
		var re = /foo/;
		re.test = null;
		assert.equal(isRegExp(re), false);
	});
	it("Should return false on RegExp.prototype", function () {
		assert.equal(isRegExp(RegExp.prototype), false);
	});
	it("Should return false on regexp like string", function () {
		assert.equal(isRegExp("/foo/"), false);
	});

	it("Should return false on plain object", function () { assert.equal(isRegExp({}), false); });
	it("Should return false on function", function () {
		assert.equal(isRegExp(function () { return true; }), false);
	});

	it("Should return false on array", function () { assert.equal(isRegExp([]), false); });
	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isRegExp(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () { assert.equal(isRegExp("foo"), false); });
	it("Should return false on empty string", function () { assert.equal(isRegExp(""), false); });
	it("Should return false on number", function () { assert.equal(isRegExp(123), false); });
	it("Should return false on NaN", function () { assert.equal(isRegExp(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isRegExp(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isRegExp(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isRegExp(null), false); });
	it("Should return false on undefined", function () { assert.equal(isRegExp(void 0), false); });
});
