"use strict";

var assert       = require("chai").assert
  , safeToString = require("../../lib/safe-to-string");

describe("lib/safe-to-string", function () {
	it("Should return input string", function () { assert.equal(safeToString("foo"), "foo"); });
	it("Should coerce numbers", function () { assert.equal(safeToString(12), "12"); });
	it("Should coerce booleans", function () { assert.equal(safeToString(true), "true"); });
	it("Should coerce string objects", function () {
		assert.equal(safeToString(new String("bar")), "bar");
	});
	it("Should coerce objects", function () {
		assert.equal(
			safeToString({ toString: function () { return "Some object"; } }), "Some object"
		);
	});
	it("Should coerce null", function () { assert.equal(safeToString(null), "null"); });
	it("Should coerce undefined", function () {
		assert.equal(safeToString(undefined), "undefined");
	});

	if (typeof Symbol === "function") {
		it("Should coerce symbols", function () {
			// eslint-disable-next-line no-undef
			assert.equal(safeToString(Symbol()), "Symbol()");
		});
	}
	it("Should return null for non coercible values", function () {
		assert.equal(safeToString({ toString: null }), null);
	});
});
