"use strict";

module.exports = function (t, a) {
	a(t(), false, "Undefined");
	a(t(1), false, "Primitive");
	a(t({}), false, "Objectt");
	a(t({ toString: function () {
 return "[object Error]";
} }), false,
		"Fake error");
	a(t(new Error()), true, "Error");
	a(t(new EvalError()), true, "EvalError");
	a(t(new RangeError()), true, "RangeError");
	a(t(new ReferenceError()), true, "ReferenceError");
	a(t(new SyntaxError()), true, "SyntaxError");
	a(t(new TypeError()), true, "TypeError");
	a(t(new URIError()), true, "URIError");
};
