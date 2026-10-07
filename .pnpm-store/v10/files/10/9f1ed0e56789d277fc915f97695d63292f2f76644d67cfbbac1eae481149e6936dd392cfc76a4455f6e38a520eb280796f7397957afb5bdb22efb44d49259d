"use strict";

var assert              = require("chai").assert
  , ensureNaturalNumber = require("../../natural-number/ensure");

describe("natural-number/ensure", function () {
	it("Should return coerced value", function () {
		assert.equal(ensureNaturalNumber("12.23"), 12);
	});
	it("Should crash on no value", function () {
		try {
			ensureNaturalNumber(-20);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "-20 is not a natural number");
		}
	});
});
