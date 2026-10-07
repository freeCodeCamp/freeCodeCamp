"use strict";

var assert              = require("chai").assert
  , coerceToSafeInteger = require("../../safe-integer/coerce");

describe("safe-integer/coerce", function () {
	it("Should coerce float to integer", function () {
		assert.equal(coerceToSafeInteger(123.123), 123);
		assert.equal(coerceToSafeInteger(123.823), 123);
		assert.equal(coerceToSafeInteger(-123.123), -123);
		assert.equal(coerceToSafeInteger(-123.823), -123);
	});
	it("Should coerce string", function () { assert.equal(coerceToSafeInteger("12.123"), 12); });
	it("Should coerce booleans", function () { assert.equal(coerceToSafeInteger(true), 1); });
	it("Should coerce number objects", function () {
		assert.equal(coerceToSafeInteger(new Number(343)), 343);
	});
	it("Should coerce objects", function () {
		assert.equal(coerceToSafeInteger({ valueOf: function () { return 23; } }), 23);
	});
	it("Should reject infinite number", function () {
		assert.equal(coerceToSafeInteger(Infinity), null);
	});
	it("Should reject number beyond Number.MAX_SAFE_INTEGER", function () {
		assert.equal(coerceToSafeInteger(9007199254740992), null);
	});
	it("Should reject number beyond Number.MIN_SAFE_INTEGER", function () {
		assert.equal(coerceToSafeInteger(-9007199254740992), null);
	});

	it("Should reject NaN", function () { assert.equal(coerceToSafeInteger(NaN), null); });

	if (typeof Object.create === "function") {
		it("Should not coerce objects with no number representation", function () {
			assert.equal(coerceToSafeInteger(Object.create(null)), null);
		});
	}

	it("Should not coerce null", function () { assert.equal(coerceToSafeInteger(null), null); });
	it("Should not coerce undefined", function () {
		assert.equal(coerceToSafeInteger(undefined), null);
	});

	if (typeof Symbol === "function") {
		it("Should not coerce symbols", function () {
			assert.equal(coerceToSafeInteger(Symbol("foo")), null);
		});
	}
});
