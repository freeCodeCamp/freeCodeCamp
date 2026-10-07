"use strict";

var assert          = require("chai").assert
  , handleException = require("../../lib/resolve-exception");

describe("lib/handle-exception", function () {
	it("Should throw TypeError", function () {
		try {
			handleException(12, "Invalid value");
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert.equal(error.message, "Invalid value");
		}
	});
	it("Should resolve value in default message", function () {
		try {
			handleException(12, "%v is invalid", {});
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.message, "12 is invalid");
		}
	});
	it("Should support optional values via inputOptions.isOptional", function () {
		assert.equal(handleException(null, "%v is invalid", { isOptional: true }, null));
	});
	it("Should support optional values via inputOptions.default", function () {
		// prettier-ignore
		assert.equal(handleException(null, "%v is invalid", { "default": "bar" }), "bar");
	});
	it("Should support custome error message via inputOptions.errorMessage", function () {
		try {
			handleException(null, "%v is invalid", { errorMessage: "%v is not supported age" });
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.message, "null is not supported age");
		}
	});
});
