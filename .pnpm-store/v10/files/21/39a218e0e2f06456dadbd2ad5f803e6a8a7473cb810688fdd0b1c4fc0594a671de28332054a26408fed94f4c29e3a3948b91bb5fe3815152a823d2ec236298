"use strict";

var assert         = require("chai").assert
  , coerceString   = require("../../string/coerce")
  , isArray        = require("../../array/is")
  , ensureIterable = require("../../iterable/ensure");

describe("iterable/ensure", function () {
	it("Should return input value", function () {
		var value = [];
		assert.equal(ensureIterable(value), value);
	});
	it("Should allow strings with allowString option", function () {
		var value = "foo";
		assert.equal(ensureIterable(value, { allowString: true }), value);
	});
	it("Should crash on invalid value", function () {
		try {
			ensureIterable("foo");
			throw new Error("Unexpected");
		} catch (error) {
			assert.equal(error.name, "TypeError");
			assert(error.message.includes("is not expected iterable value"));
		}
	});
	describe("Should support 'coerceItem' option", function () {
		it("Should resolve coerced array", function () {
			var coercedValue = ensureIterable(new Set(["foo", 12]), { coerceItem: coerceString });
			assert(isArray(coercedValue));
			assert.deepEqual(coercedValue, ["foo", "12"]);
		});
		it("Should crash if some value is non coercible", function () {
			try {
				ensureIterable(["foo", {}], { coerceItem: coerceString });
				throw new Error("Unexpected");
			} catch (error) {
				assert.equal(error.name, "TypeError");
				assert(error.message.includes("is not expected iterable value"));
			}
		});
	});
});
