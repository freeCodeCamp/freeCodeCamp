"use strict";

var assert       = require("chai").assert
  , ensureNumber = require("../../number/ensure");

describe("number/ensure", function () {
	it("Should return coerced value", function () { assert.equal(ensureNumber("12.23"), 12.23); });
	it("Should crash on no value", function () {
		try {
			ensureNumber(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "null is not a number");
		}
	});
});
