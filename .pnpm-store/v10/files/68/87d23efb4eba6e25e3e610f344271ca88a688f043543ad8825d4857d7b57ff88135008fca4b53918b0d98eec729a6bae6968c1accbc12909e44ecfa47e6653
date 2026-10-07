import { identity, pipe } from "../Function.js";
import * as core from "./core.js";
import * as effectable from "./effectable.js";
import * as fiberRuntime from "./fiberRuntime.js";
import * as schedule_ from "./schedule.js";
import * as scopedRef from "./scopedRef.js";
/** @internal */
const ResourceSymbolKey = "effect/Resource";
/** @internal */
export const ResourceTypeId = /*#__PURE__*/Symbol.for(ResourceSymbolKey);
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
export const auto = (acquire, policy) => core.tap(manual(acquire), manual => fiberRuntime.acquireRelease(pipe(refresh(manual), schedule_.schedule_Effect(policy), core.interruptible, fiberRuntime.forkDaemon), core.interruptFiber));
/** @internal */
export const manual = acquire => core.flatMap(core.context(), env => pipe(scopedRef.fromAcquire(core.exit(acquire)), core.map(ref => {
  const resource = Object.create(proto);
  resource.scopedRef = ref;
  resource.acquire = core.provideContext(acquire, env);
  return resource;
})));
/** @internal */
export const get = self => core.flatMap(scopedRef.get(self.scopedRef), identity);
/** @internal */
export const refresh = self => scopedRef.set(self.scopedRef, core.map(self.acquire, core.exitSucceed));
//# sourceMappingURL=resource.js.map