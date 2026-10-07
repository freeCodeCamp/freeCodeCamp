"use strict";

var assert    = require("chai").assert
  , isPromise = require("../../promise/is");

describe("promise/is", function () {
	if (typeof Promise === "function") {
		it("Should return true on promise", function () {
			assert.equal(isPromise(Promise.resolve()), true);
		});
	}
	it("Should return false on non-promise thenable", function () {
		assert.equal(isPromise({ then: function () { return true; } }), false);
	});

	it("Should return false on plain object", function () { assert.equal(isPromise({}), false); });
	it("Should return false on function", function () {
		assert.equal(isPromise(function () { return true; }), false);
	});
	it("Should return false on array", function () { assert.equal(isPromise([]), false); });
	if (typeof Object.create === "function") {
		it("Should return false on object with no prototype", function () {
			assert.equal(isPromise(Object.create(null)), false);
		});
	}
	it("Should return false on string", function () { assert.equal(isPromise("foo"), false); });
	it("Should return false on empty string", function () { assert.equal(isPromise(""), false); });
	it("Should return false on number", function () { assert.equal(isPromise(123), false); });
	it("Should return false on NaN", function () { assert.equal(isPromise(NaN), false); });
	it("Should return false on boolean", function () { assert.equal(isPromise(true), false); });
	if (typeof Symbol === "function") {
		it("Should return false on symbol", function () {
			assert.equal(isPromise(Symbol("foo")), false);
		});
	}

	it("Should return false on null", function () { assert.equal(isPromise(null), false); });
	it("Should return false on undefined", function () { assert.equal(isPromise(void 0), false); });
});
