"use strict";

var assert            = require("chai").assert
  , ensurePlainObject = require("../../plain-object/ensure");

describe("plain-object/ensure", function () {
	it("Should return input value", function () {
		var value = {};
		assert.equal(ensurePlainObject(value), value);
	});
	it("Should crash on invalid value", function () {
		try {
			ensurePlainObject(null);
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert(error.message.includes("is not a plain object"));
		}
	});
});
