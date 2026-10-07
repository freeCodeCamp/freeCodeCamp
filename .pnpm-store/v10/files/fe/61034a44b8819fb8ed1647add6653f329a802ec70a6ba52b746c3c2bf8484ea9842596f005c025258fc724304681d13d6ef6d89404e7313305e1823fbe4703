"use strict";

var isPrototype   = require("../prototype/is")
  , isPlainObject = require("../plain-object/is");

var objectToString = Object.prototype.toString;

// Recognize host specific errors (e.g. DOMException)
var errorTaggedStringRe = /^\[object .*(?:Error|Exception)\]$/
  , errorNameRe = /^[^\s]*(?:Error|Exception)$/;

module.exports = function (value) {
	if (!value) return false;

	var name;
	// Sanity check (reject objects which do not expose common Error interface)
	try {
		name = value.name;
		if (typeof name !== "string") return false;
		if (typeof value.message !== "string") return false;
	} catch (error) {
		return false;
	}

	// Ensure its a native-like Error object
	// (has [[ErrorData]] slot, or was created to resemble one)
	// Note: It's not a 100% bulletproof check of confirming that as:
	// - In ES2015+ string tag can be overriden via Symbol.toStringTag property
	// - Host errors do not share native error tag. Still we rely on assumption that
	//   tag for each error will end either with `Error` or `Exception` string
	// - In pre ES2015 era, no custom errors will share the error tag.
	if (!errorTaggedStringRe.test(objectToString.call(value))) {
		// Definitely not an ES2015 error instance, but could still be an error
		// (created via e.g. CustomError.prototype = Object.create(Error.prototype))
		try {
			if (name !== value.constructor.name) return false;
		} catch (error) {
			return false;
		}
		if (!errorNameRe.test(name)) return false;
		if (isPlainObject(value)) return false;
	}

	return !isPrototype(value);
};
