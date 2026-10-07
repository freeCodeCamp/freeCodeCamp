"use strict";

var assert        = require("chai").assert
  , ensurePromise = require("../../promise/ensure");

describe("promise/ensure", function () {
	it("Should return input value", function () {
		var value = Promise.resolve();
		assert.equal(ensurePromise(value), value);
	});
	it("Should crash on no value", function () {
		try {
			ensurePromise({});
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "[object Object] is not a promise");
		}
	});
});
