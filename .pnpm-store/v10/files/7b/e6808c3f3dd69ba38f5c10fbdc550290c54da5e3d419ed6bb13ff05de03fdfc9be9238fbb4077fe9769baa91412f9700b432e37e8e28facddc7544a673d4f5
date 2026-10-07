import { pipe } from "../Function.js";
import { globalValue } from "../GlobalValue.js";
import * as MutableRef from "../MutableRef.js";
import { hasProperty, isTagged } from "../Predicate.js";
import * as SortedSet from "../SortedSet.js";
import * as core from "./core.js";
/** @internal */
const SupervisorSymbolKey = "effect/Supervisor";
/** @internal */
export const SupervisorTypeId = /*#__PURE__*/Symbol.for(SupervisorSymbolKey);
/** @internal */
export const supervisorVariance = {
  /* c8 ignore next */
  _T: _ => _
};
/** @internal */
export class ProxySupervisor {
  underlying;
  value0;
  [SupervisorTypeId] = supervisorVariance;
  constructor(underlying, value0) {
    this.underlying = underlying;
    this.value0 = value0;
  }
  get value() {
    return this.value0;
  }
  onStart(context, effect, parent, fiber) {
    this.underlying.onStart(context, effect, parent, fiber);
  }
  onEnd(value, fiber) {
    this.underlying.onEnd(value, fiber);
  }
  onEffect(fiber, effect) {
    this.underlying.onEffect(fiber, effect);
  }
  onSuspend(fiber) {
    this.underlying.onSuspend(fiber);
  }
  onResume(fiber) {
    this.underlying.onResume(fiber);
  }
  map(f) {
    return new ProxySupervisor(this, pipe(this.value, core.map(f)));
  }
  zip(right) {
    return new Zip(this, right);
  }
}
/** @internal */
export class Zip {
  left;
  right;
  _tag = "Zip";
  [SupervisorTypeId] = supervisorVariance;
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  get value() {
    return core.zip(this.left.value, this.right.value);
  }
  onStart(context, effect, parent, fiber) {
    this.left.onStart(context, effect, parent, fiber);
    this.right.onStart(context, effect, parent, fiber);
  }
  onEnd(value, fiber) {
    this.left.onEnd(value, fiber);
    this.right.onEnd(value, fiber);
  }
  onEffect(fiber, effect) {
    this.left.onEffect(fiber, effect);
    this.right.onEffect(fiber, effect);
  }
  onSuspend(fiber) {
    this.left.onSuspend(fiber);
    this.right.onSuspend(fiber);
  }
  onResume(fiber) {
    this.left.onResume(fiber);
    this.right.onResume(fiber);
  }
  map(f) {
    return new ProxySupervisor(this, pipe(this.value, core.map(f)));
  }
  zip(right) {
    return new Zip(this, right);
  }
}
/** @internal */
export const isZip = self => hasProperty(self, SupervisorTypeId) && isTagged(self, "Zip");
/** @internal */
export class Track {
  [SupervisorTypeId] = supervisorVariance;
  fibers = /*#__PURE__*/new Set();
  get value() {
    return core.sync(() => Array.from(this.fibers));
  }
  onStart(_context, _effect, _parent, fiber) {
    this.fibers.add(fiber);
  }
  onEnd(_value, fiber) {
    this.fibers.delete(fiber);
  }
  onEffect(_fiber, _effect) {
    //
  }
  onSuspend(_fiber) {
    //
  }
  onResume(_fiber) {
    //
  }
  map(f) {
    return new ProxySupervisor(this, pipe(this.value, core.map(f)));
  }
  zip(right) {
    return new Zip(this, right);
  }
  onRun(execution, _fiber) {
    return execution();
  }
}
/** @internal */
export class Const {
  effect;
  [SupervisorTypeId] = supervisorVariance;
  constructor(effect) {
    this.effect = effect;
  }
  get value() {
    return this.effect;
  }
  onStart(_context, _effect, _parent, _fiber) {
    //
  }
  onEnd(_value, _fiber) {
    //
  }
  onEffect(_fiber, _effect) {
    //
  }
  onSuspend(_fiber) {
    //
  }
  onResume(_fiber) {
    //
  }
  map(f) {
    return new ProxySupervisor(this, pipe(this.value, core.map(f)));
  }
  zip(right) {
    return new Zip(this, right);
  }
  onRun(execution, _fiber) {
    return execution();
  }
}
class FibersIn {
  ref;
  [SupervisorTypeId] = supervisorVariance;
  constructor(ref) {
    this.ref = ref;
  }
  get value() {
    return core.sync(() => MutableRef.get(this.ref));
  }
  onStart(_context, _effect, _parent, fiber) {
    pipe(this.ref, MutableRef.set(pipe(MutableRef.get(this.ref), SortedSet.add(fiber))));
  }
  onEnd(_value, fiber) {
    pipe(this.ref, MutableRef.set(pipe(MutableRef.get(this.ref), SortedSet.remove(fiber))));
  }
  onEffect(_fiber, _effect) {
    //
  }
  onSuspend(_fiber) {
    //
  }
  onResume(_fiber) {
    //
  }
  map(f) {
    return new ProxySupervisor(this, pipe(this.value, core.map(f)));
  }
  zip(right) {
    return new Zip(this, right);
  }
  onRun(execution, _fiber) {
    return execution();
  }
}
/** @internal */
export const unsafeTrack = () => {
  return new Track();
};
/** @internal */
export const track = /*#__PURE__*/core.sync(unsafeTrack);
/** @internal */
export const fromEffect = effect => {
  return new Const(effect);
};
/** @internal */
export const none = /*#__PURE__*/globalValue("effect/Supervisor/none", () => fromEffect(core.void));
/** @internal */
export const fibersIn = ref => core.sync(() => new FibersIn(ref));
//# sourceMappingURL=supervisor.js.map