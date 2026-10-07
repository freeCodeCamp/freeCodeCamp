"use strict";

var assert         = require("chai").assert
  , coerceToNumber = require("../../number/coerce");

describe("number/coerce", function () {
	it("Should return input number", function () {
		assert.equal(coerceToNumber(123.123), 123.123);
	});
	it("Should return input infinite number", function () {
		assert.equal(coerceToNumber(Infinity), Infinity);
	});
	it("Should coerce string", function () { assert.equal(coerceToNumber("12"), 12); });
	it("Should coerce booleans", function () { assert.equal(coerceToNumber(true), 1); });
	it("Should coerce number objects", function () {
		assert.equal(coerceToNumber(new Number(343)), 343);
	});
	it("Should coerce objects", function () {
		assert.equal(coerceToNumber({ valueOf: function () { return 23; } }), 23);
	});

	it("Should reject NaN", function () { assert.equal(coerceToNumber(NaN), null); });

	if (typeof Object.create === "function") {
		it("Should not coerce objects with no number representation", function () {
			assert.equal(coerceToNumber(Object.create(null)), null);
		});
	}

	it("Should not coerce null", function () { assert.equal(coerceToNumber(null), null); });
	it("Should not coerce undefined", function () {
		assert.equal(coerceToNumber(undefined), null);
	});

	if (typeof Symbol === "function") {
		it("Should not coerce symbols", function () {
			assert.equal(coerceToNumber(Symbol("foo")), null);
		});
	}
});
