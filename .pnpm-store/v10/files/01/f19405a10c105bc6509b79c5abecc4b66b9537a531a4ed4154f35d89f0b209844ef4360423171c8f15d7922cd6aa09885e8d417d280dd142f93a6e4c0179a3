"use strict";

var assert            = require("chai").assert
  , ensureSafeInteger = require("../../safe-integer/ensure");

describe("safe-integer/ensure", function () {
	it("Should return coerced value", function () {
		assert.equal(ensureSafeInteger("12.23"), 12);
	});
	it("Should crash on no value", function () {
		try {
			ensureSafeInteger(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "null is not a safe integer");
		}
	});
});
