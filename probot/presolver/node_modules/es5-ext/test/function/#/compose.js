"use strict";

var f = function (a, b) {
 return ["a", arguments.length, a, b];
}
  , g = function (a) {
 return ["b", arguments.length].concat(a);
}
  , h = function (a) {
 return ["c", arguments.length].concat(a);
};

module.exports = function (t, a) {
	a.deep(t.call(h, g, f)(1, 2), ["c", 1, "b", 1, "a", 2, 1, 2]);
};
