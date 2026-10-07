"use strict";

var assert         = require("chai").assert
  , ensureThenable = require("../../thenable/ensure");

describe("thenable/ensure", function () {
	it("Should return input value", function () {
		var value = { then: function () { return true; } };
		assert.equal(ensureThenable(value), value);
	});
	it("Should crash on no value", function () {
		try {
			ensureThenable({});
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "[object Object] is not a thenable object");
		}
	});
});
