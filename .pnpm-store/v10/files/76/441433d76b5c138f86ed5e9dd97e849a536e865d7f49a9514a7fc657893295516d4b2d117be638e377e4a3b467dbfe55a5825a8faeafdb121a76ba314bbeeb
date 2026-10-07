"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSomeEffect = exports.updateEffect = exports.updateAndGetEffect = exports.modifySomeEffect = exports.modifyEffect = exports.modify = exports.getAndUpdateSomeEffect = exports.getAndUpdateEffect = void 0;
var _Function = require("../Function.js");
var Option = _interopRequireWildcard(require("../Option.js"));
var core = _interopRequireWildcard(require("./core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const getAndUpdateEffect = exports.getAndUpdateEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modifyEffect(value => core.map(f(value), result => [value, result])));
/** @internal */
const getAndUpdateSomeEffect = exports.getAndUpdateSomeEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => self.modifyEffect(value => {
  const result = pf(value);
  switch (result._tag) {
    case "None":
      {
        return core.succeed([value, value]);
      }
    case "Some":
      {
        return core.map(result.value, newValue => [value, newValue]);
      }
  }
}));
/** @internal */
const modify = exports.modify = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(f));
/** @internal */
const modifyEffect = exports.modifyEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modifyEffect(f));
/** @internal */
const modifySomeEffect = exports.modifySomeEffect = /*#__PURE__*/(0, _Function.dual)(3, (self, fallback, pf) => self.modifyEffect(value => (0, _Function.pipe)(pf(value), Option.getOrElse(() => core.succeed([fallback, value])))));
/** @internal */
const updateEffect = exports.updateEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modifyEffect(value => core.map(f(value), result => [undefined, result])));
/** @internal */
const updateAndGetEffect = exports.updateAndGetEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modifyEffect(value => core.map(f(value), result => [result, result])));
/** @internal */
const updateSomeEffect = exports.updateSomeEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => self.modifyEffect(value => {
  const result = pf(value);
  switch (result._tag) {
    case "None":
      {
        return core.succeed([void 0, value]);
      }
    case "Some":
      {
        return core.map(result.value, a => [void 0, a]);
      }
  }
}));
//# sourceMappingURL=synchronizedRef.js.map