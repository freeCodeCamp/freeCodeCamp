"use strict";

var assert     = require("chai").assert
  , ensureDate = require("../../date/ensure");

describe("date/ensure", function () {
	it("Should return input value", function () {
		var value = new Date();
		assert.equal(ensureDate(value), value);
	});
	it("Should crash on invalid value", function () {
		try {
			ensureDate(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert(error.message.includes("is not a date object"));
		}
	});
});
