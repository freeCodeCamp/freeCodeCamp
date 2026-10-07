import * as Context from "../Context.js";
import * as Duration from "../Duration.js";
import * as Effectable from "../Effectable.js";
import { identity } from "../Function.js";
import * as Readable from "../Readable.js";
import * as coreEffect from "./core-effect.js";
import * as core from "./core.js";
import * as circular from "./effect/circular.js";
import * as fiberRuntime from "./fiberRuntime.js";
/** @internal */
export const TypeId = /*#__PURE__*/Symbol.for("effect/RcRef");
const stateEmpty = {
  _tag: "Empty"
};
const stateClosed = {
  _tag: "Closed"
};
const variance = {
  _A: identity,
  _E: identity
};
class RcRefImpl extends Effectable.Class {
  acquire;
  context;
  scope;
  idleTimeToLive;
  [TypeId] = variance;
  [Readable.TypeId] = Readable.TypeId;
  state = stateEmpty;
  semaphore = /*#__PURE__*/circular.unsafeMakeSemaphore(1);
  constructor(acquire, context, scope, idleTimeToLive) {
    super();
    this.acquire = acquire;
    this.context = context;
    this.scope = scope;
    this.idleTimeToLive = idleTimeToLive;
    this.get = get(this);
  }
  get;
  commit() {
    return this.get;
  }
}
/** @internal */
export const make = options => core.withFiberRuntime(fiber => {
  const context = fiber.getFiberRef(core.currentContext);
  const scope = Context.get(context, fiberRuntime.scopeTag);
  const ref = new RcRefImpl(options.acquire, context, scope, options.idleTimeToLive ? Duration.decode(options.idleTimeToLive) : undefined);
  return core.as(scope.addFinalizer(() => ref.semaphore.withPermits(1)(core.suspend(() => {
    const close = ref.state._tag === "Acquired" ? core.scopeClose(ref.state.scope, core.exitVoid) : core.void;
    ref.state = stateClosed;
    return close;
  }))), ref);
});
/** @internal */
export const get = self_ => {
  const self = self_;
  const isInfinite = self.idleTimeToLive && !Duration.isFinite(self.idleTimeToLive);
  return core.uninterruptibleMask(restore => core.suspend(() => {
    switch (self.state._tag) {
      case "Closed":
        {
          return core.interrupt;
        }
      case "Acquired":
        {
          self.state.refCount++;
          return self.state.fiber ? core.as(core.interruptFiber(self.state.fiber), self.state) : core.succeed(self.state);
        }
      case "Empty":
        {
          return fiberRuntime.scopeMake().pipe(coreEffect.bindTo("scope"), coreEffect.bind("value", ({
            scope
          }) => restore(core.fiberRefLocally(self.acquire, core.currentContext, Context.add(self.context, fiberRuntime.scopeTag, scope)))), core.map(({
            scope,
            value
          }) => {
            const state = {
              _tag: "Acquired",
              value,
              scope,
              fiber: undefined,
              refCount: 1
            };
            self.state = state;
            return state;
          }));
        }
    }
  })).pipe(self.semaphore.withPermits(1), coreEffect.bindTo("state"), coreEffect.bind("scope", () => fiberRuntime.scopeTag), core.tap(({
    scope,
    state
  }) => scope.addFinalizer(() => core.suspend(() => {
    state.refCount--;
    if (state.refCount > 0 || isInfinite) {
      return core.void;
    }
    if (self.idleTimeToLive === undefined) {
      self.state = stateEmpty;
      return core.scopeClose(state.scope, core.exitVoid);
    }
    return coreEffect.sleep(self.idleTimeToLive).pipe(core.interruptible, core.zipRight(core.suspend(() => {
      if (self.state._tag === "Acquired" && self.state.refCount === 0) {
        self.state = stateEmpty;
        return core.scopeClose(state.scope, core.exitVoid);
      }
      return core.void;
    })), fiberRuntime.ensuring(core.sync(() => {
      state.fiber = undefined;
    })), circular.forkIn(self.scope), core.tap(fiber => {
      state.fiber = fiber;
    }), self.semaphore.withPermits(1));
  }))), core.map(({
    state
  }) => state.value));
};
/** @internal */
export const invalidate = self_ => {
  const self = self_;
  return core.uninterruptible(core.suspend(() => {
    if (self.state._tag !== "Acquired") {
      return core.void;
    }
    const state = self.state;
    self.state = stateEmpty;
    return state.scope.close(core.exitVoid);
  }));
};
//# sourceMappingURL=rcRef.js.map