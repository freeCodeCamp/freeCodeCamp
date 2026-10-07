"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRuntimeFlags = exports.updateFiberRefs = exports.updateContext = exports.unsafeRunSyncExitEffect = exports.unsafeRunSyncExit = exports.unsafeRunSyncEffect = exports.unsafeRunSync = exports.unsafeRunPromiseExitEffect = exports.unsafeRunPromiseExit = exports.unsafeRunPromiseEffect = exports.unsafeRunPromise = exports.unsafeRunEffect = exports.unsafeRunCallback = exports.unsafeForkEffect = exports.unsafeFork = exports.setFiberRef = exports.runtime = exports.provideService = exports.make = exports.isFiberFailure = exports.isAsyncFiberException = exports.fiberFailure = exports.enableRuntimeFlag = exports.disableRuntimeFlag = exports.deleteFiberRef = exports.defaultRuntimeFlags = exports.defaultRuntime = exports.asyncEffect = exports.RuntimeImpl = exports.FiberFailureId = exports.FiberFailureCauseId = void 0;
var Context = _interopRequireWildcard(require("../Context.js"));
var _Equal = require("../Equal.js");
var Exit = _interopRequireWildcard(require("../Exit.js"));
var Fiber = _interopRequireWildcard(require("../Fiber.js"));
var FiberId = _interopRequireWildcard(require("../FiberId.js"));
var FiberRefs = _interopRequireWildcard(require("../FiberRefs.js"));
var _Function = require("../Function.js");
var Inspectable = _interopRequireWildcard(require("../Inspectable.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var Predicate = _interopRequireWildcard(require("../Predicate.js"));
var scheduler_ = _interopRequireWildcard(require("../Scheduler.js"));
var scope_ = _interopRequireWildcard(require("../Scope.js"));
var InternalCause = _interopRequireWildcard(require("./cause.js"));
var core = _interopRequireWildcard(require("./core.js"));
var executionStrategy = _interopRequireWildcard(require("./executionStrategy.js"));
var FiberRuntime = _interopRequireWildcard(require("./fiberRuntime.js"));
var fiberScope = _interopRequireWildcard(require("./fiberScope.js"));
var OpCodes = _interopRequireWildcard(require("./opCodes/effect.js"));
var runtimeFlags = _interopRequireWildcard(require("./runtimeFlags.js"));
var supervisor_ = _interopRequireWildcard(require("./supervisor.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const makeDual = f => function () {
  if (arguments.length === 1) {
    const runtime = arguments[0];
    return (effect, ...args) => f(runtime, effect, ...args);
  }
  return f.apply(this, arguments);
};
/** @internal */
const unsafeFork = exports.unsafeFork = /*#__PURE__*/makeDual((runtime, self, options) => {
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
    effect = core.flatMap(scope_.fork(options.scope, executionStrategy.sequential), closeableScope => core.zipRight(core.scopeAddFinalizer(closeableScope, core.fiberIdWith(id => (0, _Equal.equals)(id, fiberRuntime.id()) ? core.void : core.interruptAsFiber(fiberRuntime, id))), core.onExit(self, exit => scope_.close(closeableScope, exit))));
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
const unsafeRunCallback = exports.unsafeRunCallback = /*#__PURE__*/makeDual((runtime, effect, options = {}) => {
  const fiberRuntime = unsafeFork(runtime, effect, options);
  if (options.onExit) {
    fiberRuntime.addObserver(exit => {
      options.onExit(exit);
    });
  }
  return (id, cancelOptions) => unsafeRunCallback(runtime)((0, _Function.pipe)(fiberRuntime, Fiber.interruptAs(id ?? FiberId.none)), {
    ...cancelOptions,
    onExit: cancelOptions?.onExit ? exit => cancelOptions.onExit(Exit.flatten(exit)) : undefined
  });
});
/** @internal */
const unsafeRunSync = exports.unsafeRunSync = /*#__PURE__*/makeDual((runtime, effect) => {
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
const isAsyncFiberException = u => Predicate.isTagged(u, "AsyncFiberException") && "fiber" in u;
/** @internal */
exports.isAsyncFiberException = isAsyncFiberException;
const FiberFailureId = exports.FiberFailureId = /*#__PURE__*/Symbol.for("effect/Runtime/FiberFailure");
/** @internal */
const FiberFailureCauseId = exports.FiberFailureCauseId = /*#__PURE__*/Symbol.for("effect/Runtime/FiberFailure/Cause");
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
const fiberFailure = cause => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const error = new FiberFailureImpl(cause);
  Error.stackTraceLimit = limit;
  return error;
};
/** @internal */
exports.fiberFailure = fiberFailure;
const isFiberFailure = u => Predicate.hasProperty(u, FiberFailureId);
exports.isFiberFailure = isFiberFailure;
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
const unsafeRunSyncExit = exports.unsafeRunSyncExit = /*#__PURE__*/makeDual((runtime, effect) => {
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
const unsafeRunPromise = exports.unsafeRunPromise = /*#__PURE__*/makeDual((runtime, effect, options) => unsafeRunPromiseExit(runtime, effect, options).then(result => {
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
const unsafeRunPromiseExit = exports.unsafeRunPromiseExit = /*#__PURE__*/makeDual((runtime, effect, options) => new Promise(resolve => {
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
class RuntimeImpl {
  context;
  runtimeFlags;
  fiberRefs;
  constructor(context, runtimeFlags, fiberRefs) {
    this.context = context;
    this.runtimeFlags = runtimeFlags;
    this.fiberRefs = fiberRefs;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
exports.RuntimeImpl = RuntimeImpl;
const make = options => new RuntimeImpl(options.context, options.runtimeFlags, options.fiberRefs);
/** @internal */
exports.make = make;
const runtime = () => core.withFiberRuntime((state, status) => core.succeed(new RuntimeImpl(state.getFiberRef(core.currentContext), status.runtimeFlags, state.getFiberRefs())));
/** @internal */
exports.runtime = runtime;
const defaultRuntimeFlags = exports.defaultRuntimeFlags = /*#__PURE__*/runtimeFlags.make(runtimeFlags.Interruption, runtimeFlags.CooperativeYielding, runtimeFlags.RuntimeMetrics);
/** @internal */
const defaultRuntime = exports.defaultRuntime = /*#__PURE__*/make({
  context: /*#__PURE__*/Context.empty(),
  runtimeFlags: defaultRuntimeFlags,
  fiberRefs: /*#__PURE__*/FiberRefs.empty()
});
/** @internal */
const updateRuntimeFlags = exports.updateRuntimeFlags = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => make({
  context: self.context,
  runtimeFlags: f(self.runtimeFlags),
  fiberRefs: self.fiberRefs
}));
/** @internal */
const disableRuntimeFlag = exports.disableRuntimeFlag = /*#__PURE__*/(0, _Function.dual)(2, (self, flag) => updateRuntimeFlags(self, runtimeFlags.disable(flag)));
/** @internal */
const enableRuntimeFlag = exports.enableRuntimeFlag = /*#__PURE__*/(0, _Function.dual)(2, (self, flag) => updateRuntimeFlags(self, runtimeFlags.enable(flag)));
/** @internal */
const updateContext = exports.updateContext = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => make({
  context: f(self.context),
  runtimeFlags: self.runtimeFlags,
  fiberRefs: self.fiberRefs
}));
/** @internal */
const provideService = exports.provideService = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, service) => updateContext(self, Context.add(tag, service)));
/** @internal */
const updateFiberRefs = exports.updateFiberRefs = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => make({
  context: self.context,
  runtimeFlags: self.runtimeFlags,
  fiberRefs: f(self.fiberRefs)
}));
/** @internal */
const setFiberRef = exports.setFiberRef = /*#__PURE__*/(0, _Function.dual)(3, (self, fiberRef, value) => updateFiberRefs(self, FiberRefs.updateAs({
  fiberId: FiberId.none,
  fiberRef,
  value
})));
/** @internal */
const deleteFiberRef = exports.deleteFiberRef = /*#__PURE__*/(0, _Function.dual)(2, (self, fiberRef) => updateFiberRefs(self, FiberRefs.delete(fiberRef)));
/** @internal */
const unsafeRunEffect = exports.unsafeRunEffect = /*#__PURE__*/unsafeRunCallback(defaultRuntime);
/** @internal */
const unsafeForkEffect = exports.unsafeForkEffect = /*#__PURE__*/unsafeFork(defaultRuntime);
/** @internal */
const unsafeRunPromiseEffect = exports.unsafeRunPromiseEffect = /*#__PURE__*/unsafeRunPromise(defaultRuntime);
/** @internal */
const unsafeRunPromiseExitEffect = exports.unsafeRunPromiseExitEffect = /*#__PURE__*/unsafeRunPromiseExit(defaultRuntime);
/** @internal */
const unsafeRunSyncEffect = exports.unsafeRunSyncEffect = /*#__PURE__*/unsafeRunSync(defaultRuntime);
/** @internal */
const unsafeRunSyncExitEffect = exports.unsafeRunSyncExitEffect = /*#__PURE__*/unsafeRunSyncExit(defaultRuntime);
// circular with Effect
/** @internal */
const asyncEffect = register => core.suspend(() => {
  let cleanup = undefined;
  return core.flatMap(core.deferredMake(), deferred => core.flatMap(runtime(), runtime => core.uninterruptibleMask(restore => core.zipRight(FiberRuntime.fork(restore(core.matchCauseEffect(register(cb => unsafeRunCallback(runtime)(core.intoDeferred(cb, deferred))), {
    onFailure: cause => core.deferredFailCause(deferred, cause),
    onSuccess: cleanup_ => {
      cleanup = cleanup_;
      return core.void;
    }
  }))), restore(core.onInterrupt(core.deferredAwait(deferred), () => cleanup ?? core.void))))));
});
exports.asyncEffect = asyncEffect;
//# sourceMappingURL=runtime.js.map