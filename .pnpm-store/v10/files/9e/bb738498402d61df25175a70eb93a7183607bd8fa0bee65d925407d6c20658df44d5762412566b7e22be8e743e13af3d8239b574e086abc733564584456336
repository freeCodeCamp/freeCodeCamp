"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.succeed = exports.poll = exports.make = exports.fail = exports.done = exports._await = exports.TDeferredTypeId = void 0;
var Either = _interopRequireWildcard(require("../../Either.js"));
var _Function = require("../../Function.js");
var Option = _interopRequireWildcard(require("../../Option.js"));
var core = _interopRequireWildcard(require("./core.js"));
var stm = _interopRequireWildcard(require("./stm.js"));
var tRef = _interopRequireWildcard(require("./tRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TDeferredSymbolKey = "effect/TDeferred";
/** @internal */
const TDeferredTypeId = exports.TDeferredTypeId = /*#__PURE__*/Symbol.for(TDeferredSymbolKey);
/** @internal */
const tDeferredVariance = {
  /* c8 ignore next */
  _A: _ => _,
  /* c8 ignore next */
  _E: _ => _
};
/** @internal */
class TDeferredImpl {
  ref;
  [TDeferredTypeId] = tDeferredVariance;
  constructor(ref) {
    this.ref = ref;
  }
}
/** @internal */
const _await = self => stm.flatten(stm.collect(tRef.get(self.ref), option => Option.isSome(option) ? Option.some(stm.fromEither(option.value)) : Option.none()));
/** @internal */
exports._await = _await;
const done = exports.done = /*#__PURE__*/(0, _Function.dual)(2, (self, either) => core.flatMap(tRef.get(self.ref), Option.match({
  onNone: () => core.zipRight(tRef.set(self.ref, Option.some(either)), core.succeed(true)),
  onSome: () => core.succeed(false)
})));
/** @internal */
const fail = exports.fail = /*#__PURE__*/(0, _Function.dual)(2, (self, error) => done(self, Either.left(error)));
/** @internal */
const make = () => core.map(tRef.make(Option.none()), ref => new TDeferredImpl(ref));
/** @internal */
exports.make = make;
const poll = self => tRef.get(self.ref);
/** @internal */
exports.poll = poll;
const succeed = exports.succeed = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => done(self, Either.right(value)));
//# sourceMappingURL=tDeferred.js.map