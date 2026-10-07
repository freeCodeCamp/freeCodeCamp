import * as Context from "../Context.js";
import { pipe } from "../Function.js";
import * as effect from "./core-effect.js";
import * as core from "./core.js";
import * as fiberRuntime from "./fiberRuntime.js";
import * as layer_ from "./layer.js";
import * as schedule_ from "./schedule.js";
import * as scopedRef from "./scopedRef.js";
/** @internal */
const ReloadableSymbolKey = "effect/Reloadable";
/** @internal */
export const ReloadableTypeId = /*#__PURE__*/Symbol.for(ReloadableSymbolKey);
const reloadableVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
export const auto = (tag, options) => layer_.scoped(reloadableTag(tag), pipe(layer_.build(manual(tag, {
  layer: options.layer
})), core.map(Context.unsafeGet(reloadableTag(tag))), core.tap(reloadable => fiberRuntime.acquireRelease(pipe(reloadable.reload, effect.ignoreLogged, schedule_.schedule_Effect(options.schedule), fiberRuntime.forkDaemon), core.interruptFiber))));
/** @internal */
export const autoFromConfig = (tag, options) => layer_.scoped(reloadableTag(tag), pipe(core.context(), core.flatMap(env => pipe(layer_.build(auto(tag, {
  layer: options.layer,
  schedule: options.scheduleFromConfig(env)
})), core.map(Context.unsafeGet(reloadableTag(tag)))))));
/** @internal */
export const get = tag => core.flatMap(reloadableTag(tag), reloadable => scopedRef.get(reloadable.scopedRef));
/** @internal */
export const manual = (tag, options) => layer_.scoped(reloadableTag(tag), pipe(core.context(), core.flatMap(env => pipe(scopedRef.fromAcquire(pipe(layer_.build(options.layer), core.map(Context.unsafeGet(tag)))), core.map(ref => ({
  [ReloadableTypeId]: reloadableVariance,
  scopedRef: ref,
  reload: pipe(scopedRef.set(ref, pipe(layer_.build(options.layer), core.map(Context.unsafeGet(tag)))), core.provideContext(env))
}))))));
/** @internal */
export const reloadableTag = tag => {
  return Context.GenericTag(`effect/Reloadable<${tag.key}>`);
};
/** @internal */
export const reload = tag => core.flatMap(reloadableTag(tag), reloadable => reloadable.reload);
/** @internal */
export const reloadFork = tag => core.flatMap(reloadableTag(tag), reloadable => pipe(reloadable.reload, effect.ignoreLogged, fiberRuntime.forkDaemon, core.asVoid));
//# sourceMappingURL=reloadable.js.map