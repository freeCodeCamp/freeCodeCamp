"use strict";

var assert          = require("chai").assert
  , ensureArrayLike = require("../../array-like/ensure");

describe("array-like/ensure", function () {
	it("Should return input value", function () {
		var value = [];
		assert.equal(ensureArrayLike(value), value);
	});
	it("Should allow strings with allowString option", function () {
		var value = "foo";
		assert.equal(ensureArrayLike(value, { allowString: true }), value);
	});
	it("Should crash on invalid value", function () {
		try {
			ensureArrayLike("foo");
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert(error.message.includes("is not an array like value"));
		}
	});
});
