"use strict";

var assert = require("chai").assert
  , isDate = require("../../date/is");

describe("date/is", function () {
	it("Should return true on date", function () { assert.equal(isDate(new Date()), true); });
	it("Should return false on invalid date", function () {
		assert.equal(isDate(new Date("foo")), false);
	});

	it("Should return false on native date with no common API exposed", function () {
		var value = new Date();
		value.getFullYear = null;
		assert.equal(isDate(value), false);
	});
	it("Should return false on Date.prototype", function () {
		assert.equal(isDate(Date.prototype), false);
	});
	it("Should return false on time value", function () { assert.equal(isDate(12312313), false); });

	it("Should return false on plain object", function () { assert.equal(isDate({}), false); });
	it("Should return false on function", function () {
		assert.equal(isDate(function () { return true; }), false);
	});

	it("Should return false on array", function () { assert.equal(isDate([]), false); });
	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isDate(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () { assert.equal(isDate("foo"), false); });
	it("Should return false on empty string", function () { assert.equal(isDate(""), false); });
	it("Should return false on number", function () { assert.equal(isDate(123), false); });
	it("Should return false on NaN", function () { assert.equal(isDate(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isDate(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isDate(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isDate(null), false); });
	it("Should return false on undefined", function () { assert.equal(isDate(void 0), false); });
});
