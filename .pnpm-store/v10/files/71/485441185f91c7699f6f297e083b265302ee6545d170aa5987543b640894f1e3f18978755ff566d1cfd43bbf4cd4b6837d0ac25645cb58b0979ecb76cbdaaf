"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reloadableTag = exports.reloadFork = exports.reload = exports.manual = exports.get = exports.autoFromConfig = exports.auto = exports.ReloadableTypeId = void 0;
var Context = _interopRequireWildcard(require("../Context.js"));
var _Function = require("../Function.js");
var effect = _interopRequireWildcard(require("./core-effect.js"));
var core = _interopRequireWildcard(require("./core.js"));
var fiberRuntime = _interopRequireWildcard(require("./fiberRuntime.js"));
var layer_ = _interopRequireWildcard(require("./layer.js"));
var schedule_ = _interopRequireWildcard(require("./schedule.js"));
var scopedRef = _interopRequireWildcard(require("./scopedRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ReloadableSymbolKey = "effect/Reloadable";
/** @internal */
const ReloadableTypeId = exports.ReloadableTypeId = /*#__PURE__*/Symbol.for(ReloadableSymbolKey);
const reloadableVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
const auto = (tag, options) => layer_.scoped(reloadableTag(tag), (0, _Function.pipe)(layer_.build(manual(tag, {
  layer: options.layer
})), core.map(Context.unsafeGet(reloadableTag(tag))), core.tap(reloadable => fiberRuntime.acquireRelease((0, _Function.pipe)(reloadable.reload, effect.ignoreLogged, schedule_.schedule_Effect(options.schedule), fiberRuntime.forkDaemon), core.interruptFiber))));
/** @internal */
exports.auto = auto;
const autoFromConfig = (tag, options) => layer_.scoped(reloadableTag(tag), (0, _Function.pipe)(core.context(), core.flatMap(env => (0, _Function.pipe)(layer_.build(auto(tag, {
  layer: options.layer,
  schedule: options.scheduleFromConfig(env)
})), core.map(Context.unsafeGet(reloadableTag(tag)))))));
/** @internal */
exports.autoFromConfig = autoFromConfig;
const get = tag => core.flatMap(reloadableTag(tag), reloadable => scopedRef.get(reloadable.scopedRef));
/** @internal */
exports.get = get;
const manual = (tag, options) => layer_.scoped(reloadableTag(tag), (0, _Function.pipe)(core.context(), core.flatMap(env => (0, _Function.pipe)(scopedRef.fromAcquire((0, _Function.pipe)(layer_.build(options.layer), core.map(Context.unsafeGet(tag)))), core.map(ref => ({
  [ReloadableTypeId]: reloadableVariance,
  scopedRef: ref,
  reload: (0, _Function.pipe)(scopedRef.set(ref, (0, _Function.pipe)(layer_.build(options.layer), core.map(Context.unsafeGet(tag)))), core.provideContext(env))
}))))));
/** @internal */
exports.manual = manual;
const reloadableTag = tag => {
  return Context.GenericTag(`effect/Reloadable<${tag.key}>`);
};
/** @internal */
exports.reloadableTag = reloadableTag;
const reload = tag => core.flatMap(reloadableTag(tag), reloadable => reloadable.reload);
/** @internal */
exports.reload = reload;
const reloadFork = tag => core.flatMap(reloadableTag(tag), reloadable => (0, _Function.pipe)(reloadable.reload, effect.ignoreLogged, fiberRuntime.forkDaemon, core.asVoid));
exports.reloadFork = reloadFork;
//# sourceMappingURL=reloadable.js.map