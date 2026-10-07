"use strict";

var assert       = require("chai").assert
  , ensureFinite = require("../../finite/ensure");

describe("finite/ensure", function () {
	it("Should return coerced value", function () { assert.equal(ensureFinite("12.23"), 12.23); });
	it("Should crash on no value", function () {
		try {
			ensureFinite(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "null is not a finite number");
		}
	});
});
