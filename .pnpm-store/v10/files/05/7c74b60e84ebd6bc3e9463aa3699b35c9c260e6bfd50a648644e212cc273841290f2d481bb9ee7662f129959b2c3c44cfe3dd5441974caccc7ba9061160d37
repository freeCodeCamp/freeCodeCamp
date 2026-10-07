"use strict";

var assert        = require("chai").assert
  , toShortString = require("../../lib/to-short-string");

describe("lib/to-short-string", function () {
	it("Should return input string", function () { assert.equal(toShortString("foo"), "foo"); });
	it("Should coerce numbers", function () { assert.equal(toShortString(12), "12"); });
	it("Should coerce booleans", function () { assert.equal(toShortString(true), "true"); });
	it("Should coerce string objects", function () {
		assert.equal(toShortString(new String("bar")), "bar");
	});
	it("Should coerce objects", function () {
		assert.equal(
			toShortString({ toString: function () { return "Some object"; } }), "Some object"
		);
	});
	it("Should coerce null", function () { assert.equal(toShortString(null), "null"); });
	it("Should coerce undefined", function () {
		assert.equal(toShortString(undefined), "undefined");
	});

	if (typeof Symbol === "function") {
		it("Should coerce symbols", function () {
			// eslint-disable-next-line no-undef
			assert.equal(toShortString(Symbol()), "Symbol()");
		});
	}
	it("Should return replacement non coercible values", function () {
		assert.equal(toShortString({ toString: null }), "<Non-coercible to string value>");
	});

	it("Should replace new line characters", function () {
		assert.equal(toShortString("foo\n\r\u2028\u2029bar"), "foo\\n\\r\\u2028\\u2029bar");
	});
	it("Should truncate long string", function () {
		var str = Math.random().toString(36);
		while (str.length < 200) str += str;
		assert.equal(toShortString(str).length, 100);
	});
});
