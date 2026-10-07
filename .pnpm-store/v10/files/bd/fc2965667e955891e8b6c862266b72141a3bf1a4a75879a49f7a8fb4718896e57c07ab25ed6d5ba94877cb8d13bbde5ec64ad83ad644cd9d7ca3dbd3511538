import * as Context from "../Context.js";
import { dual, pipe } from "../Function.js";
import * as core from "./core.js";
import * as circular from "./effect/circular.js";
import * as effectable from "./effectable.js";
import * as fiberRuntime from "./fiberRuntime.js";
import * as ref from "./ref.js";
import * as synchronized from "./synchronizedRef.js";
/** @internal */
const ScopedRefSymbolKey = "effect/ScopedRef";
/** @internal */
export const ScopedRefTypeId = /*#__PURE__*/Symbol.for(ScopedRefSymbolKey);
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
export const fromAcquire = acquire => core.uninterruptible(fiberRuntime.scopeMake().pipe(core.flatMap(newScope => acquire.pipe(core.mapInputContext(Context.add(fiberRuntime.scopeTag, newScope)), core.onError(cause => newScope.close(core.exitFail(cause))), core.flatMap(value => circular.makeSynchronized([newScope, value]).pipe(core.flatMap(ref => {
  const scopedRef = Object.create(proto);
  scopedRef.ref = ref;
  return pipe(fiberRuntime.addFinalizer(() => close(scopedRef)), core.as(scopedRef));
})))))));
/** @internal */
export const get = self => core.map(ref.get(self.ref), tuple => tuple[1]);
/** @internal */
export const make = evaluate => fromAcquire(core.sync(evaluate));
/** @internal */
export const set = /*#__PURE__*/dual(2, (self, acquire) => core.flatten(synchronized.modifyEffect(self.ref, ([oldScope, value]) => core.uninterruptible(core.scopeClose(oldScope, core.exitVoid).pipe(core.zipRight(fiberRuntime.scopeMake()), core.flatMap(newScope => core.exit(fiberRuntime.scopeExtend(acquire, newScope)).pipe(core.flatMap(exit => core.exitMatch(exit, {
  onFailure: cause => core.scopeClose(newScope, core.exitVoid).pipe(core.as([core.failCause(cause), [oldScope, value]])),
  onSuccess: value => core.succeed([core.void, [newScope, value]])
})))))))));
//# sourceMappingURL=scopedRef.js.map