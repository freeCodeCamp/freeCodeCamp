"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.make = exports.get = exports.fromAcquire = exports.ScopedRefTypeId = void 0;
var Context = _interopRequireWildcard(require("../Context.js"));
var _Function = require("../Function.js");
var core = _interopRequireWildcard(require("./core.js"));
var circular = _interopRequireWildcard(require("./effect/circular.js"));
var effectable = _interopRequireWildcard(require("./effectable.js"));
var fiberRuntime = _interopRequireWildcard(require("./fiberRuntime.js"));
var ref = _interopRequireWildcard(require("./ref.js"));
var synchronized = _interopRequireWildcard(require("./synchronizedRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ScopedRefSymbolKey = "effect/ScopedRef";
/** @internal */
const ScopedRefTypeId = exports.ScopedRefTypeId = /*#__PURE__*/Symbol.for(ScopedRefSymbolKey);
/** @internal */
const scopedRefVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal  */
const proto = {
  ...effectable.CommitPrototype,
  commit() {
    return get(this);
  },
  [ScopedRefTypeId]: scopedRefVariance
};
/** @internal  */
const close = self => core.flatMap(ref.get(self.ref), tuple => tuple[0].close(core.exitVoid));
/** @internal */
const fromAcquire = acquire => core.uninterruptible(fiberRuntime.scopeMake().pipe(core.flatMap(newScope => acquire.pipe(core.mapInputContext(Context.add(fiberRuntime.scopeTag, newScope)), core.onError(cause => newScope.close(core.exitFail(cause))), core.flatMap(value => circular.makeSynchronized([newScope, value]).pipe(core.flatMap(ref => {
  const scopedRef = Object.create(proto);
  scopedRef.ref = ref;
  return (0, _Function.pipe)(fiberRuntime.addFinalizer(() => close(scopedRef)), core.as(scopedRef));
})))))));
/** @internal */
exports.fromAcquire = fromAcquire;
const get = self => core.map(ref.get(self.ref), tuple => tuple[1]);
/** @internal */
exports.get = get;
const make = evaluate => fromAcquire(core.sync(evaluate));
/** @internal */
exports.make = make;
const set = exports.set = /*#__PURE__*/(0, _Function.dual)(2, (self, acquire) => core.flatten(synchronized.modifyEffect(self.ref, ([oldScope, value]) => core.uninterruptible(core.scopeClose(oldScope, core.exitVoid).pipe(core.zipRight(fiberRuntime.scopeMake()), core.flatMap(newScope => core.exit(fiberRuntime.scopeExtend(acquire, newScope)).pipe(core.flatMap(exit => core.exitMatch(exit, {
  onFailure: cause => core.scopeClose(newScope, core.exitVoid).pipe(core.as([core.failCause(cause), [oldScope, value]])),
  onSuccess: value => core.succeed([core.void, [newScope, value]])
})))))))));
//# sourceMappingURL=scopedRef.js.map