"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refresh = exports.manual = exports.get = exports.auto = exports.ResourceTypeId = void 0;
var _Function = require("../Function.js");
var core = _interopRequireWildcard(require("./core.js"));
var effectable = _interopRequireWildcard(require("./effectable.js"));
var fiberRuntime = _interopRequireWildcard(require("./fiberRuntime.js"));
var schedule_ = _interopRequireWildcard(require("./schedule.js"));
var scopedRef = _interopRequireWildcard(require("./scopedRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ResourceSymbolKey = "effect/Resource";
/** @internal */
const ResourceTypeId = exports.ResourceTypeId = /*#__PURE__*/Symbol.for(ResourceSymbolKey);
const resourceVariance = {
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _
};
/** @internal  */
const proto = {
  ...effectable.CommitPrototype,
  commit() {
    return get(this);
  },
  [ResourceTypeId]: resourceVariance
};
/** @internal */
const auto = (acquire, policy) => core.tap(manual(acquire), manual => fiberRuntime.acquireRelease((0, _Function.pipe)(refresh(manual), schedule_.schedule_Effect(policy), core.interruptible, fiberRuntime.forkDaemon), core.interruptFiber));
/** @internal */
exports.auto = auto;
const manual = acquire => core.flatMap(core.context(), env => (0, _Function.pipe)(scopedRef.fromAcquire(core.exit(acquire)), core.map(ref => {
  const resource = Object.create(proto);
  resource.scopedRef = ref;
  resource.acquire = core.provideContext(acquire, env);
  return resource;
})));
/** @internal */
exports.manual = manual;
const get = self => core.flatMap(scopedRef.get(self.scopedRef), _Function.identity);
/** @internal */
exports.get = get;
const refresh = self => scopedRef.set(self.scopedRef, core.map(self.acquire, core.exitSucceed));
exports.refresh = refresh;
//# sourceMappingURL=resource.js.map