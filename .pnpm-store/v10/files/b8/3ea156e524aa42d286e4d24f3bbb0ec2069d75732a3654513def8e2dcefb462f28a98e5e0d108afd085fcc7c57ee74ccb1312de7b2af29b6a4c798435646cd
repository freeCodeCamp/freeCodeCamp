"use strict";

var assert          = require("chai").assert
  , coerceToInteger = require("../../integer/coerce");

describe("integer/coerce", function () {
	it("Should coerce float to integer", function () {
		assert.equal(coerceToInteger(123.123), 123);
		assert.equal(coerceToInteger(123.823), 123);
		assert.equal(coerceToInteger(-123.123), -123);
		assert.equal(coerceToInteger(-123.823), -123);
	});
	it("Should coerce string", function () { assert.equal(coerceToInteger("12.123"), 12); });
	it("Should coerce booleans", function () { assert.equal(coerceToInteger(true), 1); });
	it("Should coerce number objects", function () {
		assert.equal(coerceToInteger(new Number(343)), 343);
	});
	it("Should coerce objects", function () {
		assert.equal(coerceToInteger({ valueOf: function () { return 23; } }), 23);
	});
	it("Should coerce number beyond Number.MAX_SAFE_INTEGER", function () {
		assert.equal(coerceToInteger(9007199254740992), 9007199254740992);
	});
	it("Should coerce number beyond Number.MIN_SAFE_INTEGER", function () {
		assert.equal(coerceToInteger(-9007199254740992), -9007199254740992);
	});

	it("Should reject infinite number", function () {
		assert.equal(coerceToInteger(Infinity), null);
	});
	it("Should reject NaN", function () { assert.equal(coerceToInteger(NaN), null); });

	if (typeof Object.create === "function") {
		it("Should not coerce objects with no number representation", function () {
			assert.equal(coerceToInteger(Object.create(null)), null);
		});
	}

	it("Should not coerce null", function () { assert.equal(coerceToInteger(null), null); });
	it("Should not coerce undefined", function () {
		assert.equal(coerceToInteger(undefined), null);
	});

	if (typeof Symbol === "function") {
		it("Should not coerce symbols", function () {
			assert.equal(coerceToInteger(Symbol("foo")), null);
		});
	}
});
