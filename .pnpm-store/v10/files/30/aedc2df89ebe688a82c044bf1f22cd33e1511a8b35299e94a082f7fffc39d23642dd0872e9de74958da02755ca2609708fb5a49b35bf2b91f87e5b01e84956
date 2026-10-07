"use strict";

var assert          = require("chai").assert
  , ensureTimeValue = require("../../time-value/ensure");

describe("time-value/ensure", function () {
	it("Should return coerced value", function () { assert.equal(ensureTimeValue("12.23"), 12); });
	it("Should crash on no value", function () {
		try {
			ensureTimeValue("foo");
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "foo is not a time value");
		}
	});
});
