"use strict";

var f = function (a, b) {
 return this[a] + this[b];
}
  , o = { a: 3, b: 4 };

module.exports = function (t, a) {
	a(t.call(f).call(o, ["a", "b"]), 7);
};
