"use strict";

var assert            = require("chai").assert
  , coerceToTimeValue = require("../../time-value/coerce");

describe("time-value/coerce", function () {
	it("Should coerce float to time value", function () {
		assert.equal(coerceToTimeValue(123.123), 123);
		assert.equal(coerceToTimeValue(123.823), 123);
		assert.equal(coerceToTimeValue(-123.123), -123);
		assert.equal(coerceToTimeValue(-123.823), -123);
	});
	it("Should coerce string", function () { assert.equal(coerceToTimeValue("12.123"), 12); });
	it("Should coerce booleans", function () { assert.equal(coerceToTimeValue(true), 1); });
	it("Should coerce number objects", function () {
		assert.equal(coerceToTimeValue(new Number(343)), 343);
	});
	it("Should coerce objects", function () {
		assert.equal(coerceToTimeValue({ valueOf: function () { return 23; } }), 23);
	});
	it("Should reject infinite number", function () {
		assert.equal(coerceToTimeValue(Infinity), null);
	});
	it("Should reject number beyond 100,000,000 days from unix epox", function () {
		assert.equal(coerceToTimeValue(8.64e15 + 1), null);
		assert.equal(coerceToTimeValue(-8.64e15 - 1), null);
	});

	it("Should reject NaN", function () { assert.equal(coerceToTimeValue(NaN), null); });

	if (typeof Object.create === "function") {
		it("Should not coerce objects with no number representation", function () {
			assert.equal(coerceToTimeValue(Object.create(null)), null);
		});
	}

	it("Should not coerce null", function () { assert.equal(coerceToTimeValue(null), null); });
	it("Should not coerce undefined", function () {
		assert.equal(coerceToTimeValue(undefined), null);
	});

	if (typeof Symbol === "function") {
		it("Should not coerce symbols", function () {
			assert.equal(coerceToTimeValue(Symbol("foo")), null);
		});
	}
});
