"use strict";

var assert        = require("chai").assert
  , ensureInteger = require("../../integer/ensure");

describe("integer/ensure", function () {
	it("Should return coerced value", function () { assert.equal(ensureInteger("12.23"), 12); });
	it("Should crash on no value", function () {
		try {
			ensureInteger(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "null is not an integer");
		}
	});
});
