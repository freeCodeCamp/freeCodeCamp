"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.let_ = exports.bindTo = exports.bind = void 0;
var _Function = require("../Function.js");
/** @internal */
const let_ = map => (0, _Function.dual)(3, (self, name, f) => map(self, a => ({
  ...a,
  [name]: f(a)
})));
/** @internal */
exports.let_ = let_;
const bindTo = map => (0, _Function.dual)(2, (self, name) => map(self, a => ({
  [name]: a
})));
/** @internal */
exports.bindTo = bindTo;
const bind = (map, flatMap) => (0, _Function.dual)(3, (self, name, f) => flatMap(self, a => map(f(a), b => ({
  ...a,
  [name]: b
}))));
exports.bind = bind;
//# sourceMappingURL=doNotation.js.map