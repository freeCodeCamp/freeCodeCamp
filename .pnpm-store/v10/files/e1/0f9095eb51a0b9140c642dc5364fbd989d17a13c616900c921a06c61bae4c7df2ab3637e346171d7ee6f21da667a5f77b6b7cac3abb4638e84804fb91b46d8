"use strict";

var assert     = require("chai").assert
  , isThenable = require("../../thenable/is");

describe("thenable/is", function () {
	it("Should return true on object with `then` method", function () {
		assert.equal(isThenable({ then: function () { return true; } }), true);
	});
	if (typeof Promise === "function") {
		it("Should return true on promise", function () {
			assert.equal(isThenable(Promise.resolve()), true);
		});
	}
	it("Should return false on object with `then` non callable property", function () {
		assert.equal(isThenable({ then: {} }), false);
	});

	it("Should return false on plain object", function () { assert.equal(isThenable({}), false); });
	it("Should return false on function", function () {
		assert.equal(isThenable(function () { return true; }), false);
	});
	it("Should return false on array", function () { assert.equal(isThenable([]), false); });
	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isThenable(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () { assert.equal(isThenable("foo"), false); });
	it("Should return false on empty string", function () { assert.equal(isThenable(""), false); });
	it("Should return false on number", function () { assert.equal(isThenable(123), false); });
	it("Should return false on NaN", function () { assert.equal(isThenable(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isThenable(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isThenable(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isThenable(null), false); });
	it("Should return false on undefined", function () {
		assert.equal(isThenable(void 0), false);
	});
});
