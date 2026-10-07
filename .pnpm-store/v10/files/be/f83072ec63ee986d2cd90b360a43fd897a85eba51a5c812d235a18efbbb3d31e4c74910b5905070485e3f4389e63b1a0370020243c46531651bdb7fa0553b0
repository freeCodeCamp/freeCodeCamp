"use strict";

var assert         = require("chai").assert
  , coerceToString = require("../../string/coerce");

describe("string/coerce", function () {
	it("Should return input string", function () { assert.equal(coerceToString("foo"), "foo"); });
	it("Should coerce numbers", function () { assert.equal(coerceToString(12), "12"); });
	it("Should coerce booleans", function () { assert.equal(coerceToString(true), "true"); });
	it("Should coerce string objects", function () {
		assert.equal(coerceToString(new String("bar")), "bar");
	});
	it("Should coerce objects", function () {
		assert.equal(
			coerceToString({ toString: function () { return "Some object"; } }), "Some object"
		);
	});
	if (typeof Object.create === "function") {
		it("Should not coerce objects with no toString", function () {
			assert.equal(coerceToString(Object.create(null)), null);
		});
	}
	it("Should not coerce objects with no custom toString", function () {
		assert.equal(coerceToString({}), null);
	});
	it("Should not coerce null", function () { assert.equal(coerceToString(null), null); });
	it("Should not coerce undefined", function () {
		assert.equal(coerceToString(undefined), null);
	});

	if (typeof Symbol === "function") {
		it("Should not coerce symbols", function () {
			assert.equal(coerceToString(Symbol("foo")), null);
		});
	}
});
