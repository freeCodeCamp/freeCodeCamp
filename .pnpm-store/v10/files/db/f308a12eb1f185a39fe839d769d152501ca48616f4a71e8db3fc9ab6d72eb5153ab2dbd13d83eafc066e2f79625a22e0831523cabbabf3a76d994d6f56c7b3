"use strict";

var assert      = require("chai").assert
  , ensureArray = require("../../array/ensure");

describe("array/ensure", function () {
	it("Should return input value", function () {
		var value = [];
		assert.equal(ensureArray(value), value);
	});
	it("Should crash on invalid value", function () {
		try {
			ensureArray(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert(error.message.includes("is not an array object"));
		}
	});
});
