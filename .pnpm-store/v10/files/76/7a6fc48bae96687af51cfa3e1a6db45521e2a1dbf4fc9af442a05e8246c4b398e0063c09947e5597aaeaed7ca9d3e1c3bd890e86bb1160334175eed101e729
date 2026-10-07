"use strict";

var assert         = require("chai").assert
  , coerceToFinite = require("../../finite/coerce");

describe("finite/coerce", function () {
	it("Should return input number", function () {
		assert.equal(coerceToFinite(123.123), 123.123);
	});
	it("Should coerce string", function () { assert.equal(coerceToFinite("12"), 12); });
	it("Should coerce booleans", function () { assert.equal(coerceToFinite(true), 1); });
	it("Should coerce number objects", function () {
		assert.equal(coerceToFinite(new Number(343)), 343);
	});
	it("Should coerce objects", function () {
		assert.equal(coerceToFinite({ valueOf: function () { return 23; } }), 23);
	});

	it("Should reject infinite number", function () {
		assert.equal(coerceToFinite(Infinity), null);
	});
	it("Should reject NaN", function () { assert.equal(coerceToFinite(NaN), null); });

	if (typeof Object.create === "function") {
		it("Should not coerce objects with no number representation", function () {
			assert.equal(coerceToFinite(Object.create(null)), null);
		});
	}

	it("Should not coerce null", function () { assert.equal(coerceToFinite(null), null); });
	it("Should not coerce undefined", function () {
		assert.equal(coerceToFinite(undefined), null);
	});

	if (typeof Symbol === "function") {
		it("Should not coerce symbols", function () {
			assert.equal(coerceToFinite(Symbol("foo")), null);
		});
	}
});
