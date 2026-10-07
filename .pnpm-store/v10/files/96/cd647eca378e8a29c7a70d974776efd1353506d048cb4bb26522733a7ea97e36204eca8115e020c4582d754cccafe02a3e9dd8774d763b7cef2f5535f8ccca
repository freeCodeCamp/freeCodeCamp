import * as Context from "../Context.js";
import { equals } from "../Equal.js";
import * as Exit from "../Exit.js";
import * as Fiber from "../Fiber.js";
import * as FiberId from "../FiberId.js";
import * as FiberRefs from "../FiberRefs.js";
import { dual, pipe } from "../Function.js";
import * as Inspectable from "../Inspectable.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
import * as Predicate from "../Predicate.js";
import * as scheduler_ from "../Scheduler.js";
import * as scope_ from "../Scope.js";
import * as InternalCause from "./cause.js";
import * as core from "./core.js";
import * as executionStrategy from "./executionStrategy.js";
import * as FiberRuntime from "./fiberRuntime.js";
import * as fiberScope from "./fiberScope.js";
import * as OpCodes from "./opCodes/effect.js";
import * as runtimeFlags from "./runtimeFlags.js";
import * as supervisor_ from "./supervisor.js";
const makeDual = f => function () {
  if (arguments.length === 1) {
    const runtime = arguments[0];
    return (effect, ...args) => f(runtime, effect, ...args);
  }
  return f.apply(this, arguments);
};
/** @internal */
export const unsafeFork = /*#__PURE__*/makeDual((runtime, self, options) => {
  const fiberId = FiberId.unsafeMake();
  const fiberRefUpdates = [[core.currentContext, [[fiberId, runtime.context]]]];
  if (options?.scheduler) {
    fiberRefUpdates.push([scheduler_.currentScheduler, [[fiberId, options.scheduler]]]);
  }
  let fiberRefs = FiberRefs.updateManyAs(runtime.fiberRefs, {
    entries: fiberRefUpdates,
    forkAs: fiberId
  });
  if (options?.updateRefs) {
    fiberRefs = options.updateRefs(fiberRefs, fiberId);
  }
  const fiberRuntime = new FiberRuntime.FiberRuntime(fiberId, fiberRefs, runtime.runtimeFlags);
  let effect = self;
  if (options?.scope) {
    effect = core.flatMap(scope_.fork(options.scope, executionStrategy.sequential), closeableScope => core.zipRight(core.scopeAddFinalizer(closeableScope, core.fiberIdWith(id => equals(id, fiberRuntime.id()) ? core.void : core.interruptAsFiber(fiberRuntime, id))), core.onExit(self, exit => scope_.close(closeableScope, exit))));
  }
  const supervisor = fiberRuntime.currentSupervisor;
  // we can compare by reference here as _supervisor.none is wrapped with globalValue
  if (supervisor !== supervisor_.none) {
    supervisor.onStart(runtime.context, effect, Option.none(), fiberRuntime);
    fiberRuntime.addObserver(exit => supervisor.onEnd(exit, fiberRuntime));
  }
  fiberScope.globalScope.add(runtime.runtimeFlags, fiberRuntime);
  // Only an explicit false will prevent immediate execution
  if (options?.immediate === false) {
    fiberRuntime.resume(effect);
  } else {
    fiberRuntime.start(effect);
  }
  return fiberRuntime;
});
/** @internal */
export const unsafeRunCallback = /*#__PURE__*/makeDual((runtime, effect, options = {}) => {
  const fiberRuntime = unsafeFork(runtime, effect, options);
  if (options.onExit) {
    fiberRuntime.addObserver(exit => {
      options.onExit(exit);
    });
  }
  return (id, cancelOptions) => unsafeRunCallback(runtime)(pipe(fiberRuntime, Fiber.interruptAs(id ?? FiberId.none)), {
    ...cancelOptions,
    onExit: cancelOptions?.onExit ? exit => cancelOptions.onExit(Exit.flatten(exit)) : undefined
  });
});
/** @internal */
export const unsafeRunSync = /*#__PURE__*/makeDual((runtime, effect) => {
  const result = unsafeRunSyncExit(runtime)(effect);
  if (result._tag === "Failure") {
    throw fiberFailure(result.effect_instruction_i0);
  }
  return result.effect_instruction_i0;
});
class AsyncFiberExceptionImpl extends Error {
  fiber;
  _tag = "AsyncFiberException";
  constructor(fiber) {
    super(`Fiber #${fiber.id().id} cannot be resolved synchronously. This is caused by using runSync on an effect that performs async work`);
    this.fiber = fiber;
    this.name = this._tag;
    this.stack = this.message;
  }
}
const asyncFiberException = fiber => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const error = new AsyncFiberExceptionImpl(fiber);
  Error.stackTraceLimit = limit;
  return error;
};
/** @internal */
export const isAsyncFiberException = u => Predicate.isTagged(u, "AsyncFiberException") && "fiber" in u;
/** @internal */
export const FiberFailureId = /*#__PURE__*/Symbol.for("effect/Runtime/FiberFailure");
/** @internal */
export const FiberFailureCauseId = /*#__PURE__*/Symbol.for("effect/Runtime/FiberFailure/Cause");
class FiberFailureImpl extends Error {
  [FiberFailureId];
  [FiberFailureCauseId];
  constructor(cause) {
    const head = InternalCause.prettyErrors(cause)[0];
    super(head?.message || "An error has occurred");
    this[FiberFailureId] = FiberFailureId;
    this[FiberFailureCauseId] = cause;
    this.name = head ? `(FiberFailure) ${head.name}` : "FiberFailure";
    if (head?.stack) {
      this.stack = head.stack;
    }
  }
  toJSON() {
    return {
      _id: "FiberFailure",
      cause: this[FiberFailureCauseId].toJSON()
    };
  }
  toString() {
    return "(FiberFailure) " + InternalCause.pretty(this[FiberFailureCauseId], {
      renderErrorCause: true
    });
  }
  [Inspectable.NodeInspectSymbol]() {
    return this.toString();
  }
}
/** @internal */
export const fiberFailure = cause => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const error = new FiberFailureImpl(cause);
  Error.stackTraceLimit = limit;
  return error;
};
/** @internal */
export const isFiberFailure = u => Predicate.hasProperty(u, FiberFailureId);
const fastPath = effect => {
  const op = effect;
  switch (op._op) {
    case "Failure":
    case "Success":
      {
        // @ts-expect-error
        return op;
      }
    case "Left":
      {
        return core.exitFail(op.left);
      }
    case "Right":
      {
        return core.exitSucceed(op.right);
      }
    case "Some":
      {
        return core.exitSucceed(op.value);
      }
    case "None":
      {
        // @ts-expect-error
        return core.exitFail(new core.NoSuchElementException());
      }
  }
};
/** @internal */
export const unsafeRunSyncExit = /*#__PURE__*/makeDual((runtime, effect) => {
  const op = fastPath(effect);
  if (op) {
    return op;
  }
  const scheduler = new scheduler_.SyncScheduler();
  const fiberRuntime = unsafeFork(runtime)(effect, {
    scheduler
  });
  scheduler.flush();
  const result = fiberRuntime.unsafePoll();
  if (result) {
    return result;
  }
  return core.exitDie(core.capture(asyncFiberException(fiberRuntime), core.currentSpanFromFiber(fiberRuntime)));
});
/** @internal */
export const unsafeRunPromise = /*#__PURE__*/makeDual((runtime, effect, options) => unsafeRunPromiseExit(runtime, effect, options).then(result => {
  switch (result._tag) {
    case OpCodes.OP_SUCCESS:
      {
        return result.effect_instruction_i0;
      }
    case OpCodes.OP_FAILURE:
      {
        throw fiberFailure(result.effect_instruction_i0);
      }
  }
}));
/** @internal */
export const unsafeRunPromiseExit = /*#__PURE__*/makeDual((runtime, effect, options) => new Promise(resolve => {
  const op = fastPath(effect);
  if (op) {
    resolve(op);
  }
  const fiber = unsafeFork(runtime)(effect);
  fiber.addObserver(exit => {
    resolve(exit);
  });
  if (options?.signal !== undefined) {
    if (options.signal.aborted) {
      fiber.unsafeInterruptAsFork(fiber.id());
    } else {
      options.signal.addEventListener("abort", () => {
        fiber.unsafeInterruptAsFork(fiber.id());
      }, {
        once: true
      });
    }
  }
}));
/** @internal */
export class RuntimeImpl {
  context;
  runtimeFlags;
  fiberRefs;
  constructor(context, runtimeFlags, fiberRefs) {
    this.context = context;
    this.runtimeFlags = runtimeFlags;
    this.fiberRefs = fiberRefs;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const make = options => new RuntimeImpl(options.context, options.runtimeFlags, options.fiberRefs);
/** @internal */
export const runtime = () => core.withFiberRuntime((state, status) => core.succeed(new RuntimeImpl(state.getFiberRef(core.currentContext), status.runtimeFlags, state.getFiberRefs())));
/** @internal */
export const defaultRuntimeFlags = /*#__PURE__*/runtimeFlags.make(runtimeFlags.Interruption, runtimeFlags.CooperativeYielding, runtimeFlags.RuntimeMetrics);
/** @internal */
export const defaultRuntime = /*#__PURE__*/make({
  context: /*#__PURE__*/Context.empty(),
  runtimeFlags: defaultRuntimeFlags,
  fiberRefs: /*#__PURE__*/FiberRefs.empty()
});
/** @internal */
export const updateRuntimeFlags = /*#__PURE__*/dual(2, (self, f) => make({
  context: self.context,
  runtimeFlags: f(self.runtimeFlags),
  fiberRefs: self.fiberRefs
}));
/** @internal */
export const disableRuntimeFlag = /*#__PURE__*/dual(2, (self, flag) => updateRuntimeFlags(self, runtimeFlags.disable(flag)));
/** @internal */
export const enableRuntimeFlag = /*#__PURE__*/dual(2, (self, flag) => updateRuntimeFlags(self, runtimeFlags.enable(flag)));
/** @internal */
export const updateContext = /*#__PURE__*/dual(2, (self, f) => make({
  context: f(self.context),
  runtimeFlags: self.runtimeFlags,
  fiberRefs: self.fiberRefs
}));
/** @internal */
export const provideService = /*#__PURE__*/dual(3, (self, tag, service) => updateContext(self, Context.add(tag, service)));
/** @internal */
export const updateFiberRefs = /*#__PURE__*/dual(2, (self, f) => make({
  context: self.context,
  runtimeFlags: self.runtimeFlags,
  fiberRefs: f(self.fiberRefs)
}));
/** @internal */
export const setFiberRef = /*#__PURE__*/dual(3, (self, fiberRef, value) => updateFiberRefs(self, FiberRefs.updateAs({
  fiberId: FiberId.none,
  fiberRef,
  value
})));
/** @internal */
export const deleteFiberRef = /*#__PURE__*/dual(2, (self, fiberRef) => updateFiberRefs(self, FiberRefs.delete(fiberRef)));
/** @internal */
export const unsafeRunEffect = /*#__PURE__*/unsafeRunCallback(defaultRuntime);
/** @internal */
export const unsafeForkEffect = /*#__PURE__*/unsafeFork(defaultRuntime);
/** @internal */
export const unsafeRunPromiseEffect = /*#__PURE__*/unsafeRunPromise(defaultRuntime);
/** @internal */
export const unsafeRunPromiseExitEffect = /*#__PURE__*/unsafeRunPromiseExit(defaultRuntime);
/** @internal */
export const unsafeRunSyncEffect = /*#__PURE__*/unsafeRunSync(defaultRuntime);
/** @internal */
export const unsafeRunSyncExitEffect = /*#__PURE__*/unsafeRunSyncExit(defaultRuntime);
// circular with Effect
/** @internal */
export const asyncEffect = register => core.suspend(() => {
  let cleanup = undefined;
  return core.flatMap(core.deferredMake(), deferred => core.flatMap(runtime(), runtime => core.uninterruptibleMask(restore => core.zipRight(FiberRuntime.fork(restore(core.matchCauseEffect(register(cb => unsafeRunCallback(runtime)(core.intoDeferred(cb, deferred))), {
    onFailure: cause => core.deferredFailCause(deferred, cause),
    onSuccess: cleanup_ => {
      cleanup = cleanup_;
      return core.void;
    }
  }))), restore(core.onInterrupt(core.deferredAwait(deferred), () => cleanup ?? core.void))))));
});
//# sourceMappingURL=runtime.js.map