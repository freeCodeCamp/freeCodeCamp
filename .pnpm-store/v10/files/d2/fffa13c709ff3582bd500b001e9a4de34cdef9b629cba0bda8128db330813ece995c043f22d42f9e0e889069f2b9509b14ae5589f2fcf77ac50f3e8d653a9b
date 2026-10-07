import * as Equal from "../Equal.js";
import { pipe } from "../Function.js";
import * as Hash from "../Hash.js";
import { hasProperty } from "../Predicate.js";
const FiberStatusSymbolKey = "effect/FiberStatus";
/** @internal */
export const FiberStatusTypeId = /*#__PURE__*/Symbol.for(FiberStatusSymbolKey);
/** @internal */
export const OP_DONE = "Done";
/** @internal */
export const OP_RUNNING = "Running";
/** @internal */
export const OP_SUSPENDED = "Suspended";
const DoneHash = /*#__PURE__*/Hash.string(`${FiberStatusSymbolKey}-${OP_DONE}`);
/** @internal */
class Done {
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_DONE;
  [Hash.symbol]() {
    return DoneHash;
  }
  [Equal.symbol](that) {
    return isFiberStatus(that) && that._tag === OP_DONE;
  }
}
/** @internal */
class Running {
  runtimeFlags;
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_RUNNING;
  constructor(runtimeFlags) {
    this.runtimeFlags = runtimeFlags;
  }
  [Hash.symbol]() {
    return pipe(Hash.hash(FiberStatusSymbolKey), Hash.combine(Hash.hash(this._tag)), Hash.combine(Hash.hash(this.runtimeFlags)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isFiberStatus(that) && that._tag === OP_RUNNING && this.runtimeFlags === that.runtimeFlags;
  }
}
/** @internal */
class Suspended {
  runtimeFlags;
  blockingOn;
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_SUSPENDED;
  constructor(runtimeFlags, blockingOn) {
    this.runtimeFlags = runtimeFlags;
    this.blockingOn = blockingOn;
  }
  [Hash.symbol]() {
    return pipe(Hash.hash(FiberStatusSymbolKey), Hash.combine(Hash.hash(this._tag)), Hash.combine(Hash.hash(this.runtimeFlags)), Hash.combine(Hash.hash(this.blockingOn)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isFiberStatus(that) && that._tag === OP_SUSPENDED && this.runtimeFlags === that.runtimeFlags && Equal.equals(this.blockingOn, that.blockingOn);
  }
}
/** @internal */
export const done = /*#__PURE__*/new Done();
/** @internal */
export const running = runtimeFlags => new Running(runtimeFlags);
/** @internal */
export const suspended = (runtimeFlags, blockingOn) => new Suspended(runtimeFlags, blockingOn);
/** @internal */
export const isFiberStatus = u => hasProperty(u, FiberStatusTypeId);
/** @internal */
export const isDone = self => self._tag === OP_DONE;
/** @internal */
export const isRunning = self => self._tag === OP_RUNNING;
/** @internal */
export const isSuspended = self => self._tag === OP_SUSPENDED;
//# sourceMappingURL=fiberStatus.js.map