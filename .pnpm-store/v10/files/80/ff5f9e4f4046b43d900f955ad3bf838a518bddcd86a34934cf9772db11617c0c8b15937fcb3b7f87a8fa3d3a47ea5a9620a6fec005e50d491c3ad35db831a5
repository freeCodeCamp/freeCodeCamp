"use strict";

var assert                = require("chai").assert
  , coerceToNaturalNumber = require("../../natural-number/coerce");

describe("natural-number/coerce", function () {
	it("Should coerce float to integer", function () {
		assert.equal(coerceToNaturalNumber(123.123), 123);
		assert.equal(coerceToNaturalNumber(123.823), 123);
	});
	it("Should coerce string", function () { assert.equal(coerceToNaturalNumber("12.123"), 12); });
	it("Should coerce booleans", function () { assert.equal(coerceToNaturalNumber(true), 1); });
	it("Should coerce number objects", function () {
		assert.equal(coerceToNaturalNumber(new Number(343)), 343);
	});
	it("Should coerce objects", function () {
		assert.equal(coerceToNaturalNumber({ valueOf: function () { return 23; } }), 23);
	});
	it("Should coerce number beyond Number.MAX_SAFE_INTEGER", function () {
		assert.equal(coerceToNaturalNumber(9007199254740992), 9007199254740992);
	});

	it("Should reject negative number", function () {
		assert.equal(coerceToNaturalNumber(-1), null);
	});
	it("Should reject infinite number", function () {
		assert.equal(coerceToNaturalNumber(Infinity), null);
	});
	it("Should reject NaN", function () { assert.equal(coerceToNaturalNumber(NaN), null); });

	if (typeof Object.create === "function") {
		it("Should not coerce objects with no number representation", function () {
			assert.equal(coerceToNaturalNumber(Object.create(null)), null);
		});
	}

	it("Should not coerce null", function () { assert.equal(coerceToNaturalNumber(null), null); });
	it("Should not coerce undefined", function () {
		assert.equal(coerceToNaturalNumber(undefined), null);
	});

	if (typeof Symbol === "function") {
		it("Should not coerce symbols", function () {
			assert.equal(coerceToNaturalNumber(Symbol("foo")), null);
		});
	}
});
