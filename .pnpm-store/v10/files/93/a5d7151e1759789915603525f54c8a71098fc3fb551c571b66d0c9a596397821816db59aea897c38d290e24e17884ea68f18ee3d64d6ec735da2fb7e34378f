"use strict";

var assert              = require("chai").assert
  , coerceToArrayLength = require("../../array-length/coerce");

describe("array-length/coerce", function () {
	it("Should coerce float", function () {
		assert.equal(coerceToArrayLength(123.123), 123);
		assert.equal(coerceToArrayLength(123.823), 123);
	});
	it("Should coerce string", function () { assert.equal(coerceToArrayLength("12.123"), 12); });
	it("Should coerce booleans", function () { assert.equal(coerceToArrayLength(true), 1); });
	it("Should coerce number objects", function () {
		assert.equal(coerceToArrayLength(new Number(343)), 343);
	});
	it("Should coerce objects", function () {
		assert.equal(coerceToArrayLength({ valueOf: function () { return 23; } }), 23);
	});
	it("Should reject infinite number", function () {
		assert.equal(coerceToArrayLength(Infinity), null);
	});
	it("Should reject number beyond Number.MAX_SAFE_INTEGER", function () {
		assert.equal(coerceToArrayLength(9007199254740992), null);
	});
	it("Should reject negative number", function () {
		assert.equal(coerceToArrayLength(-9), null);
	});

	it("Should reject NaN", function () { assert.equal(coerceToArrayLength(NaN), null); });

	if (typeof Object.create === "function") {
		it("Should not coerce objects with no number representation", function () {
			assert.equal(coerceToArrayLength(Object.create(null)), null);
		});
	}

	it("Should not coerce null", function () { assert.equal(coerceToArrayLength(null), null); });
	it("Should not coerce undefined", function () {
		assert.equal(coerceToArrayLength(undefined), null);
	});

	if (typeof Symbol === "function") {
		it("Should not coerce symbols", function () {
			assert.equal(coerceToArrayLength(Symbol("foo")), null);
		});
	}
});
