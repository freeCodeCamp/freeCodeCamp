"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exitForEachEffect = exports.exitFlatten = exports.exitFlatMapEffect = exports.exitFlatMap = exports.exitFailCause = exports.exitFail = exports.exitExists = exports.exitDie = exports.exitCollectAll = exports.exitCauseOption = exports.exitAsVoid = exports.exitAs = exports.exit = exports.either = exports.dieSync = exports.dieMessage = exports.die = exports.deferredUnsafeMake = exports.deferredUnsafeDone = exports.deferredSync = exports.deferredSucceed = exports.deferredPoll = exports.deferredMakeAs = exports.deferredMake = exports.deferredIsDone = exports.deferredInterruptWith = exports.deferredInterrupt = exports.deferredFailSync = exports.deferredFailCauseSync = exports.deferredFailCause = exports.deferredFail = exports.deferredDone = exports.deferredDieSync = exports.deferredDie = exports.deferredCompleteWith = exports.deferredComplete = exports.deferredAwait = exports.custom = exports.currentVersionMismatchErrorLogLevel = exports.currentUnhandledErrorLogLevel = exports.currentTracerTimingEnabled = exports.currentTracerSpanLinks = exports.currentTracerSpanAnnotations = exports.currentTracerEnabled = exports.currentSpanFromFiber = exports.currentSchedulingPriority = exports.currentRequestBatching = exports.currentMetricLabels = exports.currentMaxOpsBeforeYield = exports.currentLogSpan = exports.currentLogLevel = exports.currentLogAnnotations = exports.currentInterruptedCause = exports.currentForkScopeOverride = exports.currentContext = exports.currentConcurrency = exports.contextWithEffect = exports.contextWith = exports.context = exports.checkInterruptible = exports.causeSquashWith = exports.causeSquash = exports.catchSome = exports.catchIf = exports.catchAllCause = exports.catchAll = exports.capture = exports.blocked = exports.attemptOrElse = exports.asyncInterrupt = exports.async = exports.asVoid = exports.as = exports.andThen = exports.allLogLevels = exports.acquireUseRelease = exports.YieldableError = exports.UnknownExceptionTypeId = exports.UnknownException = exports.TimeoutExceptionTypeId = exports.TimeoutException = exports.ScopeTypeId = exports.RuntimeExceptionTypeId = exports.RuntimeException = exports.RevertFlags = exports.RequestResolverTypeId = exports.RequestResolverImpl = exports.NoSuchElementExceptionTypeId = exports.NoSuchElementException = exports.InvalidPubSubCapacityExceptionTypeId = exports.InvalidPubSubCapacityException = exports.InterruptedExceptionTypeId = exports.InterruptedException = exports.IllegalArgumentExceptionTypeId = exports.IllegalArgumentException = exports.FiberRefTypeId = exports.ExceededCapacityExceptionTypeId = exports.ExceededCapacityException = exports.EffectTypeId = exports.CloseableScopeTypeId = void 0;
exports.onInterrupt = exports.onExit = exports.onError = exports.noopSpan = exports.never = exports.metricLabels = exports.matchEffect = exports.matchCauseEffect = exports.matchCause = exports.mapInputContext = exports.mapError = exports.mapBoth = exports.map = exports.logLevelWarning = exports.logLevelTrace = exports.logLevelNone = exports.logLevelInfo = exports.logLevelFatal = exports.logLevelError = exports.logLevelDebug = exports.logLevelAll = exports.isUnknownException = exports.isTimeoutException = exports.isRuntimeException = exports.isRequestResolver = exports.isNoSuchElementException = exports.isInvalidCapacityError = exports.isInterruptedException = exports.isIllegalArgumentException = exports.isExceededCapacityException = exports.isEffect = exports.intoDeferred = exports.interruptibleMask = exports.interruptible = exports.interruptWith = exports.interruptFiber = exports.interruptAsFiber = exports.interrupt = exports.if_ = exports.gen = exports.fromIterator = exports.forEachSequentialDiscard = exports.forEachSequential = exports.fnUntraced = exports.flip = exports.flatten = exports.flatMap = exports.filterEffectOrFail = exports.filterEffectOrElse = exports.fiberRefUpdateSomeAndGet = exports.fiberRefUpdateSome = exports.fiberRefUpdateAndGet = exports.fiberRefUpdate = exports.fiberRefUnsafeMakeRuntimeFlags = exports.fiberRefUnsafeMakeReadonlyArray = exports.fiberRefUnsafeMakePatch = exports.fiberRefUnsafeMakeHashSet = exports.fiberRefUnsafeMakeContext = exports.fiberRefUnsafeMake = exports.fiberRefSet = exports.fiberRefReset = exports.fiberRefModifySome = exports.fiberRefModify = exports.fiberRefLocallyWith = exports.fiberRefLocally = exports.fiberRefGetWith = exports.fiberRefGetAndUpdateSome = exports.fiberRefGetAndUpdate = exports.fiberRefGetAndSet = exports.fiberRefGet = exports.fiberRefDelete = exports.fiberIdWith = exports.fiberId = exports.failSync = exports.failCauseSync = exports.failCause = exports.fail = exports.exitZipWith = exports.exitZipRight = exports.exitZipParRight = exports.exitZipParLeft = exports.exitZipPar = exports.exitZipLeft = exports.exitZip = exports.exitVoid = exports.exitSucceed = exports.exitMatchEffect = exports.exitMatch = exports.exitMapErrorCause = exports.exitMapError = exports.exitMapBoth = exports.exitMap = exports.exitIsSuccess = exports.exitIsInterrupted = exports.exitIsFailure = exports.exitIsExit = exports.exitInterrupt = exports.exitGetOrElse = exports.exitFromOption = exports.exitFromEither = void 0;
exports.zipWith = exports.zipRight = exports.zipLeft = exports.zipFlatten = exports.zip = exports.yieldNow = exports.withUnhandledErrorLogLevel = exports.withTracerTiming = exports.withTracerEnabled = exports.withSchedulingPriority = exports.withRuntimeFlags = exports.withRequestBatching = exports.withMaxOpsBeforeYield = exports.withFiberRuntime = exports.withConcurrency = exports.whileLoop = exports.whenEffect = exports.void = exports.updateRuntimeFlags = exports.unsafeAsync = exports.uninterruptibleMask = exports.uninterruptible = exports.transplant = exports.timeoutExceptionFromDuration = exports.tap = exports.sync = exports.suspend = exports.succeed = exports.step = exports.scopeFork = exports.scopeClose = exports.scopeAddFinalizerExit = exports.scopeAddFinalizer = exports.runtimeFlags = exports.runRequestBlock = exports.resolverLocally = exports.requestBlockLocally = exports.provideSomeContext = exports.provideContext = exports.partitionMap = exports.originalInstance = exports.orElse = exports.orDieWith = exports.orDie = void 0;
var Arr = _interopRequireWildcard(require("../Array.js"));
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Context = _interopRequireWildcard(require("../Context.js"));
var Duration = _interopRequireWildcard(require("../Duration.js"));
var Either = _interopRequireWildcard(require("../Either.js"));
var Equal = _interopRequireWildcard(require("../Equal.js"));
var FiberId = _interopRequireWildcard(require("../FiberId.js"));
var _Function = require("../Function.js");
var _GlobalValue = require("../GlobalValue.js");
var Hash = _interopRequireWildcard(require("../Hash.js"));
var HashMap = _interopRequireWildcard(require("../HashMap.js"));
var _Inspectable = require("../Inspectable.js");
var List = _interopRequireWildcard(require("../List.js"));
var MutableRef = _interopRequireWildcard(require("../MutableRef.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var RuntimeFlagsPatch = _interopRequireWildcard(require("../RuntimeFlagsPatch.js"));
var _Utils = require("../Utils.js");
var blockedRequests_ = _interopRequireWildcard(require("./blockedRequests.js"));
var internalCause = _interopRequireWildcard(require("./cause.js"));
var deferred = _interopRequireWildcard(require("./deferred.js"));
var internalDiffer = _interopRequireWildcard(require("./differ.js"));
var _effectable = require("./effectable.js");
var _errors = require("./errors.js");
var DeferredOpCodes = _interopRequireWildcard(require("./opCodes/deferred.js"));
var OpCodes = _interopRequireWildcard(require("./opCodes/effect.js"));
var runtimeFlags_ = _interopRequireWildcard(require("./runtimeFlags.js"));
var _singleShotGen = require("./singleShotGen.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// -----------------------------------------------------------------------------
// Effect
// -----------------------------------------------------------------------------
/**
 * @internal
 */
const blocked = (blockedRequests, _continue) => {
  const effect = new EffectPrimitive("Blocked");
  effect.effect_instruction_i0 = blockedRequests;
  effect.effect_instruction_i1 = _continue;
  return effect;
};
/**
 * @internal
 */
exports.blocked = blocked;
const runRequestBlock = blockedRequests => {
  const effect = new EffectPrimitive("RunBlocked");
  effect.effect_instruction_i0 = blockedRequests;
  return effect;
};
/** @internal */
exports.runRequestBlock = runRequestBlock;
const EffectTypeId = exports.EffectTypeId = /*#__PURE__*/Symbol.for("effect/Effect");
/** @internal */
class RevertFlags {
  patch;
  op;
  _op = OpCodes.OP_REVERT_FLAGS;
  constructor(patch, op) {
    this.patch = patch;
    this.op = op;
  }
}
exports.RevertFlags = RevertFlags;
class EffectPrimitive {
  _op;
  effect_instruction_i0 = undefined;
  effect_instruction_i1 = undefined;
  effect_instruction_i2 = undefined;
  trace = undefined;
  [EffectTypeId] = _effectable.effectVariance;
  constructor(_op) {
    this._op = _op;
  }
  [Equal.symbol](that) {
    return this === that;
  }
  [Hash.symbol]() {
    return Hash.cached(this, Hash.random(this));
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
  toJSON() {
    return {
      _id: "Effect",
      _op: this._op,
      effect_instruction_i0: (0, _Inspectable.toJSON)(this.effect_instruction_i0),
      effect_instruction_i1: (0, _Inspectable.toJSON)(this.effect_instruction_i1),
      effect_instruction_i2: (0, _Inspectable.toJSON)(this.effect_instruction_i2)
    };
  }
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  }
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new _singleShotGen.SingleShotGen(new _Utils.YieldWrap(this));
  }
}
/** @internal */
class EffectPrimitiveFailure {
  _op;
  effect_instruction_i0 = undefined;
  effect_instruction_i1 = undefined;
  effect_instruction_i2 = undefined;
  trace = undefined;
  [EffectTypeId] = _effectable.effectVariance;
  constructor(_op) {
    this._op = _op;
    // @ts-expect-error
    this._tag = _op;
  }
  [Equal.symbol](that) {
    return exitIsExit(that) && that._op === "Failure" &&
    // @ts-expect-error
    Equal.equals(this.effect_instruction_i0, that.effect_instruction_i0);
  }
  [Hash.symbol]() {
    return (0, _Function.pipe)(
    // @ts-expect-error
    Hash.string(this._tag),
    // @ts-expect-error
    Hash.combine(Hash.hash(this.effect_instruction_i0)), Hash.cached(this));
  }
  get cause() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      cause: this.cause.toJSON()
    };
  }
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  }
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new _singleShotGen.SingleShotGen(new _Utils.YieldWrap(this));
  }
}
/** @internal */
class EffectPrimitiveSuccess {
  _op;
  effect_instruction_i0 = undefined;
  effect_instruction_i1 = undefined;
  effect_instruction_i2 = undefined;
  trace = undefined;
  [EffectTypeId] = _effectable.effectVariance;
  constructor(_op) {
    this._op = _op;
    // @ts-expect-error
    this._tag = _op;
  }
  [Equal.symbol](that) {
    return exitIsExit(that) && that._op === "Success" &&
    // @ts-expect-error
    Equal.equals(this.effect_instruction_i0, that.effect_instruction_i0);
  }
  [Hash.symbol]() {
    return (0, _Function.pipe)(
    // @ts-expect-error
    Hash.string(this._tag),
    // @ts-expect-error
    Hash.combine(Hash.hash(this.effect_instruction_i0)), Hash.cached(this));
  }
  get value() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      value: (0, _Inspectable.toJSON)(this.value)
    };
  }
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  }
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new _singleShotGen.SingleShotGen(new _Utils.YieldWrap(this));
  }
}
/** @internal */
const isEffect = u => (0, _Predicate.hasProperty)(u, EffectTypeId);
/* @internal */
exports.isEffect = isEffect;
const withFiberRuntime = withRuntime => {
  const effect = new EffectPrimitive(OpCodes.OP_WITH_RUNTIME);
  effect.effect_instruction_i0 = withRuntime;
  return effect;
};
/* @internal */
exports.withFiberRuntime = withFiberRuntime;
const acquireUseRelease = exports.acquireUseRelease = /*#__PURE__*/(0, _Function.dual)(3, (acquire, use, release) => uninterruptibleMask(restore => flatMap(acquire, a => flatMap(exit(suspend(() => restore(use(a)))), exit => {
  return suspend(() => release(a, exit)).pipe(matchCauseEffect({
    onFailure: cause => {
      switch (exit._tag) {
        case OpCodes.OP_FAILURE:
          return failCause(internalCause.sequential(exit.effect_instruction_i0, cause));
        case OpCodes.OP_SUCCESS:
          return failCause(cause);
      }
    },
    onSuccess: () => exit
  }));
}))));
/* @internal */
const as = exports.as = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => flatMap(self, () => succeed(value)));
/* @internal */
const asVoid = self => as(self, void 0);
/* @internal */
exports.asVoid = asVoid;
const custom = function () {
  const wrapper = new EffectPrimitive(OpCodes.OP_COMMIT);
  switch (arguments.length) {
    case 2:
      {
        wrapper.effect_instruction_i0 = arguments[0];
        wrapper.commit = arguments[1];
        break;
      }
    case 3:
      {
        wrapper.effect_instruction_i0 = arguments[0];
        wrapper.effect_instruction_i1 = arguments[1];
        wrapper.commit = arguments[2];
        break;
      }
    case 4:
      {
        wrapper.effect_instruction_i0 = arguments[0];
        wrapper.effect_instruction_i1 = arguments[1];
        wrapper.effect_instruction_i2 = arguments[2];
        wrapper.commit = arguments[3];
        break;
      }
    default:
      {
        throw new Error((0, _errors.getBugErrorMessage)("you're not supposed to end up here"));
      }
  }
  return wrapper;
};
/* @internal */
exports.custom = custom;
const unsafeAsync = (register, blockingOn = FiberId.none) => {
  const effect = new EffectPrimitive(OpCodes.OP_ASYNC);
  let cancelerRef = undefined;
  effect.effect_instruction_i0 = resume => {
    cancelerRef = register(resume);
  };
  effect.effect_instruction_i1 = blockingOn;
  return onInterrupt(effect, _ => isEffect(cancelerRef) ? cancelerRef : void_);
};
/* @internal */
exports.unsafeAsync = unsafeAsync;
const asyncInterrupt = (register, blockingOn = FiberId.none) => suspend(() => unsafeAsync(register, blockingOn));
exports.asyncInterrupt = asyncInterrupt;
const async_ = (resume, blockingOn = FiberId.none) => {
  return custom(resume, function () {
    let backingResume = undefined;
    let pendingEffect = undefined;
    function proxyResume(effect) {
      if (backingResume) {
        backingResume(effect);
      } else if (pendingEffect === undefined) {
        pendingEffect = effect;
      }
    }
    const effect = new EffectPrimitive(OpCodes.OP_ASYNC);
    effect.effect_instruction_i0 = resume => {
      backingResume = resume;
      if (pendingEffect) {
        resume(pendingEffect);
      }
    };
    effect.effect_instruction_i1 = blockingOn;
    let cancelerRef = undefined;
    let controllerRef = undefined;
    if (this.effect_instruction_i0.length !== 1) {
      controllerRef = new AbortController();
      cancelerRef = (0, _Utils.internalCall)(() => this.effect_instruction_i0(proxyResume, controllerRef.signal));
    } else {
      cancelerRef = (0, _Utils.internalCall)(() => this.effect_instruction_i0(proxyResume));
    }
    return cancelerRef || controllerRef ? onInterrupt(effect, _ => {
      if (controllerRef) {
        controllerRef.abort();
      }
      return cancelerRef ?? void_;
    }) : effect;
  });
};
exports.async = async_;
/* @internal */
const catchAllCause = exports.catchAllCause = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const effect = new EffectPrimitive(OpCodes.OP_ON_FAILURE);
  effect.effect_instruction_i0 = self;
  effect.effect_instruction_i1 = f;
  return effect;
});
/* @internal */
const catchAll = exports.catchAll = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => matchEffect(self, {
  onFailure: f,
  onSuccess: succeed
}));
/* @internal */
const catchIf = exports.catchIf = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, f) => catchAllCause(self, cause => {
  const either = internalCause.failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      return predicate(either.left) ? f(either.left) : failCause(cause);
    case "Right":
      return failCause(either.right);
  }
}));
/* @internal */
const catchSome = exports.catchSome = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => catchAllCause(self, cause => {
  const either = internalCause.failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      return (0, _Function.pipe)(pf(either.left), Option.getOrElse(() => failCause(cause)));
    case "Right":
      return failCause(either.right);
  }
}));
/* @internal */
const checkInterruptible = f => withFiberRuntime((_, status) => f(runtimeFlags_.interruption(status.runtimeFlags)));
exports.checkInterruptible = checkInterruptible;
const originalSymbol = /*#__PURE__*/Symbol.for("effect/OriginalAnnotation");
/* @internal */
const originalInstance = obj => {
  if ((0, _Predicate.hasProperty)(obj, originalSymbol)) {
    // @ts-expect-error
    return obj[originalSymbol];
  }
  return obj;
};
/* @internal */
exports.originalInstance = originalInstance;
const capture = (obj, span) => {
  if (Option.isSome(span)) {
    return new Proxy(obj, {
      has(target, p) {
        return p === internalCause.spanSymbol || p === originalSymbol || p in target;
      },
      get(target, p) {
        if (p === internalCause.spanSymbol) {
          return span.value;
        }
        if (p === originalSymbol) {
          return obj;
        }
        // @ts-expect-error
        return target[p];
      }
    });
  }
  return obj;
};
/* @internal */
exports.capture = capture;
const die = defect => (0, _Predicate.isObject)(defect) && !(internalCause.spanSymbol in defect) ? withFiberRuntime(fiber => failCause(internalCause.die(capture(defect, currentSpanFromFiber(fiber))))) : failCause(internalCause.die(defect));
/* @internal */
exports.die = die;
const dieMessage = message => failCauseSync(() => internalCause.die(new RuntimeException(message)));
/* @internal */
exports.dieMessage = dieMessage;
const dieSync = evaluate => flatMap(sync(evaluate), die);
/* @internal */
exports.dieSync = dieSync;
const either = self => matchEffect(self, {
  onFailure: e => succeed(Either.left(e)),
  onSuccess: a => succeed(Either.right(a))
});
/* @internal */
exports.either = either;
const exit = self => matchCause(self, {
  onFailure: exitFailCause,
  onSuccess: exitSucceed
});
/* @internal */
exports.exit = exit;
const fail = error => (0, _Predicate.isObject)(error) && !(internalCause.spanSymbol in error) ? withFiberRuntime(fiber => failCause(internalCause.fail(capture(error, currentSpanFromFiber(fiber))))) : failCause(internalCause.fail(error));
/* @internal */
exports.fail = fail;
const failSync = evaluate => flatMap(sync(evaluate), fail);
/* @internal */
exports.failSync = failSync;
const failCause = cause => {
  const effect = new EffectPrimitiveFailure(OpCodes.OP_FAILURE);
  effect.effect_instruction_i0 = cause;
  return effect;
};
/* @internal */
exports.failCause = failCause;
const failCauseSync = evaluate => flatMap(sync(evaluate), failCause);
/* @internal */
exports.failCauseSync = failCauseSync;
const fiberId = exports.fiberId = /*#__PURE__*/withFiberRuntime(state => succeed(state.id()));
/* @internal */
const fiberIdWith = f => withFiberRuntime(state => f(state.id()));
/* @internal */
exports.fiberIdWith = fiberIdWith;
const flatMap = exports.flatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const effect = new EffectPrimitive(OpCodes.OP_ON_SUCCESS);
  effect.effect_instruction_i0 = self;
  effect.effect_instruction_i1 = f;
  return effect;
});
/* @internal */
const andThen = exports.andThen = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => flatMap(self, a => {
  const b = typeof f === "function" ? f(a) : f;
  if (isEffect(b)) {
    return b;
  } else if ((0, _Predicate.isPromiseLike)(b)) {
    return unsafeAsync(resume => {
      b.then(a => resume(succeed(a)), e => resume(fail(new UnknownException(e, "An unknown error occurred in Effect.andThen"))));
    });
  }
  return succeed(b);
}));
/* @internal */
const step = self => {
  const effect = new EffectPrimitive("OnStep");
  effect.effect_instruction_i0 = self;
  return effect;
};
/* @internal */
exports.step = step;
const flatten = self => flatMap(self, _Function.identity);
/* @internal */
exports.flatten = flatten;
const flip = self => matchEffect(self, {
  onFailure: succeed,
  onSuccess: fail
});
/* @internal */
exports.flip = flip;
const matchCause = exports.matchCause = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => matchCauseEffect(self, {
  onFailure: cause => succeed(options.onFailure(cause)),
  onSuccess: a => succeed(options.onSuccess(a))
}));
/* @internal */
const matchCauseEffect = exports.matchCauseEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  const effect = new EffectPrimitive(OpCodes.OP_ON_SUCCESS_AND_FAILURE);
  effect.effect_instruction_i0 = self;
  effect.effect_instruction_i1 = options.onFailure;
  effect.effect_instruction_i2 = options.onSuccess;
  return effect;
});
/* @internal */
const matchEffect = exports.matchEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => matchCauseEffect(self, {
  onFailure: cause => {
    const defects = internalCause.defects(cause);
    if (defects.length > 0) {
      return failCause(internalCause.electFailures(cause));
    }
    const failures = internalCause.failures(cause);
    if (failures.length > 0) {
      return options.onFailure(Chunk.unsafeHead(failures));
    }
    return failCause(cause);
  },
  onSuccess: options.onSuccess
}));
/* @internal */
const forEachSequential = exports.forEachSequential = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => suspend(() => {
  const arr = Arr.fromIterable(self);
  const ret = Arr.allocate(arr.length);
  let i = 0;
  return as(whileLoop({
    while: () => i < arr.length,
    body: () => f(arr[i], i),
    step: b => {
      ret[i++] = b;
    }
  }), ret);
}));
/* @internal */
const forEachSequentialDiscard = exports.forEachSequentialDiscard = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => suspend(() => {
  const arr = Arr.fromIterable(self);
  let i = 0;
  return whileLoop({
    while: () => i < arr.length,
    body: () => f(arr[i], i),
    step: () => {
      i++;
    }
  });
}));
/* @internal */
const if_ = exports.if_ = /*#__PURE__*/(0, _Function.dual)(args => typeof args[0] === "boolean" || isEffect(args[0]), (self, options) => isEffect(self) ? flatMap(self, b => b ? options.onTrue() : options.onFalse()) : self ? options.onTrue() : options.onFalse());
/* @internal */
const interrupt = exports.interrupt = /*#__PURE__*/flatMap(fiberId, fiberId => interruptWith(fiberId));
/* @internal */
const interruptWith = fiberId => failCause(internalCause.interrupt(fiberId));
/* @internal */
exports.interruptWith = interruptWith;
const interruptible = self => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = RuntimeFlagsPatch.enable(runtimeFlags_.Interruption);
  effect.effect_instruction_i1 = () => self;
  return effect;
};
/* @internal */
exports.interruptible = interruptible;
const interruptibleMask = f => custom(f, function () {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = RuntimeFlagsPatch.enable(runtimeFlags_.Interruption);
  effect.effect_instruction_i1 = oldFlags => runtimeFlags_.interruption(oldFlags) ? (0, _Utils.internalCall)(() => this.effect_instruction_i0(interruptible)) : (0, _Utils.internalCall)(() => this.effect_instruction_i0(uninterruptible));
  return effect;
});
/* @internal */
exports.interruptibleMask = interruptibleMask;
const intoDeferred = exports.intoDeferred = /*#__PURE__*/(0, _Function.dual)(2, (self, deferred) => uninterruptibleMask(restore => flatMap(exit(restore(self)), exit => deferredDone(deferred, exit))));
/* @internal */
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => flatMap(self, a => sync(() => f(a))));
/* @internal */
const mapBoth = exports.mapBoth = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => matchEffect(self, {
  onFailure: e => failSync(() => options.onFailure(e)),
  onSuccess: a => sync(() => options.onSuccess(a))
}));
/* @internal */
const mapError = exports.mapError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => matchCauseEffect(self, {
  onFailure: cause => {
    const either = internalCause.failureOrCause(cause);
    switch (either._tag) {
      case "Left":
        {
          return failSync(() => f(either.left));
        }
      case "Right":
        {
          return failCause(either.right);
        }
    }
  },
  onSuccess: succeed
}));
/* @internal */
const onError = exports.onError = /*#__PURE__*/(0, _Function.dual)(2, (self, cleanup) => onExit(self, exit => exitIsSuccess(exit) ? void_ : cleanup(exit.effect_instruction_i0)));
/* @internal */
const onExit = exports.onExit = /*#__PURE__*/(0, _Function.dual)(2, (self, cleanup) => uninterruptibleMask(restore => matchCauseEffect(restore(self), {
  onFailure: cause1 => {
    const result = exitFailCause(cause1);
    return matchCauseEffect(cleanup(result), {
      onFailure: cause2 => exitFailCause(internalCause.sequential(cause1, cause2)),
      onSuccess: () => result
    });
  },
  onSuccess: success => {
    const result = exitSucceed(success);
    return zipRight(cleanup(result), result);
  }
})));
/* @internal */
const onInterrupt = exports.onInterrupt = /*#__PURE__*/(0, _Function.dual)(2, (self, cleanup) => onExit(self, exitMatch({
  onFailure: cause => internalCause.isInterruptedOnly(cause) ? asVoid(cleanup(internalCause.interruptors(cause))) : void_,
  onSuccess: () => void_
})));
/* @internal */
const orElse = exports.orElse = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => attemptOrElse(self, that, succeed));
/* @internal */
const orDie = self => orDieWith(self, _Function.identity);
/* @internal */
exports.orDie = orDie;
const orDieWith = exports.orDieWith = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => matchEffect(self, {
  onFailure: e => die(f(e)),
  onSuccess: succeed
}));
/* @internal */
const partitionMap = exports.partitionMap = Arr.partitionMap;
/* @internal */
const runtimeFlags = exports.runtimeFlags = /*#__PURE__*/withFiberRuntime((_, status) => succeed(status.runtimeFlags));
/* @internal */
const succeed = value => {
  const effect = new EffectPrimitiveSuccess(OpCodes.OP_SUCCESS);
  effect.effect_instruction_i0 = value;
  return effect;
};
/* @internal */
exports.succeed = succeed;
const suspend = evaluate => {
  const effect = new EffectPrimitive(OpCodes.OP_COMMIT);
  effect.commit = evaluate;
  return effect;
};
/* @internal */
exports.suspend = suspend;
const sync = thunk => {
  const effect = new EffectPrimitive(OpCodes.OP_SYNC);
  effect.effect_instruction_i0 = thunk;
  return effect;
};
/* @internal */
exports.sync = sync;
const tap = exports.tap = /*#__PURE__*/(0, _Function.dual)(args => args.length === 3 || args.length === 2 && !((0, _Predicate.isObject)(args[1]) && "onlyEffect" in args[1]), (self, f) => flatMap(self, a => {
  const b = typeof f === "function" ? f(a) : f;
  if (isEffect(b)) {
    return as(b, a);
  } else if ((0, _Predicate.isPromiseLike)(b)) {
    return unsafeAsync(resume => {
      b.then(_ => resume(succeed(a)), e => resume(fail(new UnknownException(e, "An unknown error occurred in Effect.tap"))));
    });
  }
  return succeed(a);
}));
/* @internal */
const transplant = f => withFiberRuntime(state => {
  const scopeOverride = state.getFiberRef(currentForkScopeOverride);
  const scope = (0, _Function.pipe)(scopeOverride, Option.getOrElse(() => state.scope()));
  return f(fiberRefLocally(currentForkScopeOverride, Option.some(scope)));
});
/* @internal */
exports.transplant = transplant;
const attemptOrElse = exports.attemptOrElse = /*#__PURE__*/(0, _Function.dual)(3, (self, that, onSuccess) => matchCauseEffect(self, {
  onFailure: cause => {
    const defects = internalCause.defects(cause);
    if (defects.length > 0) {
      return failCause(Option.getOrThrow(internalCause.keepDefectsAndElectFailures(cause)));
    }
    return that();
  },
  onSuccess
}));
/* @internal */
const uninterruptible = self => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = RuntimeFlagsPatch.disable(runtimeFlags_.Interruption);
  effect.effect_instruction_i1 = () => self;
  return effect;
};
/* @internal */
exports.uninterruptible = uninterruptible;
const uninterruptibleMask = f => custom(f, function () {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = RuntimeFlagsPatch.disable(runtimeFlags_.Interruption);
  effect.effect_instruction_i1 = oldFlags => runtimeFlags_.interruption(oldFlags) ? (0, _Utils.internalCall)(() => this.effect_instruction_i0(interruptible)) : (0, _Utils.internalCall)(() => this.effect_instruction_i0(uninterruptible));
  return effect;
});
exports.uninterruptibleMask = uninterruptibleMask;
const void_ = exports.void = /*#__PURE__*/succeed(void 0);
/* @internal */
const updateRuntimeFlags = patch => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = patch;
  effect.effect_instruction_i1 = void 0;
  return effect;
};
/* @internal */
exports.updateRuntimeFlags = updateRuntimeFlags;
const whenEffect = exports.whenEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, condition) => flatMap(condition, b => {
  if (b) {
    return (0, _Function.pipe)(self, map(Option.some));
  }
  return succeed(Option.none());
}));
/* @internal */
const whileLoop = options => {
  const effect = new EffectPrimitive(OpCodes.OP_WHILE);
  effect.effect_instruction_i0 = options.while;
  effect.effect_instruction_i1 = options.body;
  effect.effect_instruction_i2 = options.step;
  return effect;
};
/* @internal */
exports.whileLoop = whileLoop;
const fromIterator = iterator => suspend(() => {
  const effect = new EffectPrimitive(OpCodes.OP_ITERATOR);
  effect.effect_instruction_i0 = iterator();
  return effect;
});
/* @internal */
exports.fromIterator = fromIterator;
const gen = function () {
  const f = arguments.length === 1 ? arguments[0] : arguments[1].bind(arguments[0]);
  return fromIterator(() => f(_Function.pipe));
};
/** @internal */
exports.gen = gen;
const fnUntraced = (body, ...pipeables) => Object.defineProperty(pipeables.length === 0 ? function (...args) {
  return fromIterator(() => body.apply(this, args));
} : function (...args) {
  let effect = fromIterator(() => body.apply(this, args));
  for (const x of pipeables) {
    effect = x(effect, ...args);
  }
  return effect;
}, "length", {
  value: body.length,
  configurable: true
});
/* @internal */
exports.fnUntraced = fnUntraced;
const withConcurrency = exports.withConcurrency = /*#__PURE__*/(0, _Function.dual)(2, (self, concurrency) => fiberRefLocally(self, currentConcurrency, concurrency));
/* @internal */
const withRequestBatching = exports.withRequestBatching = /*#__PURE__*/(0, _Function.dual)(2, (self, requestBatching) => fiberRefLocally(self, currentRequestBatching, requestBatching));
/* @internal */
const withRuntimeFlags = exports.withRuntimeFlags = /*#__PURE__*/(0, _Function.dual)(2, (self, update) => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = update;
  effect.effect_instruction_i1 = () => self;
  return effect;
});
/** @internal */
const withTracerEnabled = exports.withTracerEnabled = /*#__PURE__*/(0, _Function.dual)(2, (effect, enabled) => fiberRefLocally(effect, currentTracerEnabled, enabled));
/** @internal */
const withTracerTiming = exports.withTracerTiming = /*#__PURE__*/(0, _Function.dual)(2, (effect, enabled) => fiberRefLocally(effect, currentTracerTimingEnabled, enabled));
/* @internal */
const yieldNow = options => {
  const effect = new EffectPrimitive(OpCodes.OP_YIELD);
  return typeof options?.priority !== "undefined" ? withSchedulingPriority(effect, options.priority) : effect;
};
/* @internal */
exports.yieldNow = yieldNow;
const zip = exports.zip = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => flatMap(self, a => map(that, b => [a, b])));
/* @internal */
const zipFlatten = exports.zipFlatten = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => flatMap(self, a => map(that, b => [...a, b])));
/* @internal */
const zipLeft = exports.zipLeft = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => flatMap(self, a => as(that, a)));
/* @internal */
const zipRight = exports.zipRight = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => flatMap(self, () => that));
/* @internal */
const zipWith = exports.zipWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => flatMap(self, a => map(that, b => f(a, b))));
/* @internal */
const never = exports.never = /*#__PURE__*/asyncInterrupt(() => {
  const interval = setInterval(() => {
    //
  }, 2 ** 31 - 1);
  return sync(() => clearInterval(interval));
});
// -----------------------------------------------------------------------------
// Fiber
// -----------------------------------------------------------------------------
/* @internal */
const interruptFiber = self => flatMap(fiberId, fiberId => (0, _Function.pipe)(self, interruptAsFiber(fiberId)));
/* @internal */
exports.interruptFiber = interruptFiber;
const interruptAsFiber = exports.interruptAsFiber = /*#__PURE__*/(0, _Function.dual)(2, (self, fiberId) => flatMap(self.interruptAsFork(fiberId), () => self.await));
// -----------------------------------------------------------------------------
// LogLevel
// -----------------------------------------------------------------------------
/** @internal */
const logLevelAll = exports.logLevelAll = {
  _tag: "All",
  syslog: 0,
  label: "ALL",
  ordinal: Number.MIN_SAFE_INTEGER,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const logLevelFatal = exports.logLevelFatal = {
  _tag: "Fatal",
  syslog: 2,
  label: "FATAL",
  ordinal: 50000,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const logLevelError = exports.logLevelError = {
  _tag: "Error",
  syslog: 3,
  label: "ERROR",
  ordinal: 40000,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const logLevelWarning = exports.logLevelWarning = {
  _tag: "Warning",
  syslog: 4,
  label: "WARN",
  ordinal: 30000,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const logLevelInfo = exports.logLevelInfo = {
  _tag: "Info",
  syslog: 6,
  label: "INFO",
  ordinal: 20000,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const logLevelDebug = exports.logLevelDebug = {
  _tag: "Debug",
  syslog: 7,
  label: "DEBUG",
  ordinal: 10000,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const logLevelTrace = exports.logLevelTrace = {
  _tag: "Trace",
  syslog: 7,
  label: "TRACE",
  ordinal: 0,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const logLevelNone = exports.logLevelNone = {
  _tag: "None",
  syslog: 7,
  label: "OFF",
  ordinal: Number.MAX_SAFE_INTEGER,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const allLogLevels = exports.allLogLevels = [logLevelAll, logLevelTrace, logLevelDebug, logLevelInfo, logLevelWarning, logLevelError, logLevelFatal, logLevelNone];
// -----------------------------------------------------------------------------
// FiberRef
// -----------------------------------------------------------------------------
/** @internal */
const FiberRefSymbolKey = "effect/FiberRef";
/** @internal */
const FiberRefTypeId = exports.FiberRefTypeId = /*#__PURE__*/Symbol.for(FiberRefSymbolKey);
const fiberRefVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/* @internal */
const fiberRefGet = self => withFiberRuntime(fiber => exitSucceed(fiber.getFiberRef(self)));
/* @internal */
exports.fiberRefGet = fiberRefGet;
const fiberRefGetAndSet = exports.fiberRefGetAndSet = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => fiberRefModify(self, v => [v, value]));
/* @internal */
const fiberRefGetAndUpdate = exports.fiberRefGetAndUpdate = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => fiberRefModify(self, v => [v, f(v)]));
/* @internal */
const fiberRefGetAndUpdateSome = exports.fiberRefGetAndUpdateSome = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => fiberRefModify(self, v => [v, Option.getOrElse(pf(v), () => v)]));
/* @internal */
const fiberRefGetWith = exports.fiberRefGetWith = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => flatMap(fiberRefGet(self), f));
/* @internal */
const fiberRefSet = exports.fiberRefSet = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => fiberRefModify(self, () => [void 0, value]));
/* @internal */
const fiberRefDelete = self => withFiberRuntime(state => {
  state.unsafeDeleteFiberRef(self);
  return void_;
});
/* @internal */
exports.fiberRefDelete = fiberRefDelete;
const fiberRefReset = self => fiberRefSet(self, self.initial);
/* @internal */
exports.fiberRefReset = fiberRefReset;
const fiberRefModify = exports.fiberRefModify = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => withFiberRuntime(state => {
  const [b, a] = f(state.getFiberRef(self));
  state.setFiberRef(self, a);
  return succeed(b);
}));
/* @internal */
const fiberRefModifySome = (self, def, f) => fiberRefModify(self, v => Option.getOrElse(f(v), () => [def, v]));
/* @internal */
exports.fiberRefModifySome = fiberRefModifySome;
const fiberRefUpdate = exports.fiberRefUpdate = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => fiberRefModify(self, v => [void 0, f(v)]));
/* @internal */
const fiberRefUpdateSome = exports.fiberRefUpdateSome = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => fiberRefModify(self, v => [void 0, Option.getOrElse(pf(v), () => v)]));
/* @internal */
const fiberRefUpdateAndGet = exports.fiberRefUpdateAndGet = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => fiberRefModify(self, v => {
  const result = f(v);
  return [result, result];
}));
/* @internal */
const fiberRefUpdateSomeAndGet = exports.fiberRefUpdateSomeAndGet = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => fiberRefModify(self, v => {
  const result = Option.getOrElse(pf(v), () => v);
  return [result, result];
}));
// circular
/** @internal */
const RequestResolverSymbolKey = "effect/RequestResolver";
/** @internal */
const RequestResolverTypeId = exports.RequestResolverTypeId = /*#__PURE__*/Symbol.for(RequestResolverSymbolKey);
const requestResolverVariance = {
  /* c8 ignore next */
  _A: _ => _,
  /* c8 ignore next */
  _R: _ => _
};
/** @internal */
class RequestResolverImpl {
  runAll;
  target;
  [RequestResolverTypeId] = requestResolverVariance;
  constructor(runAll, target) {
    this.runAll = runAll;
    this.target = target;
  }
  [Hash.symbol]() {
    return Hash.cached(this, this.target ? Hash.hash(this.target) : Hash.random(this));
  }
  [Equal.symbol](that) {
    return this.target ? isRequestResolver(that) && Equal.equals(this.target, that.target) : this === that;
  }
  identified(...ids) {
    return new RequestResolverImpl(this.runAll, Chunk.fromIterable(ids));
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
exports.RequestResolverImpl = RequestResolverImpl;
const isRequestResolver = u => (0, _Predicate.hasProperty)(u, RequestResolverTypeId);
// end
/** @internal */
exports.isRequestResolver = isRequestResolver;
const resolverLocally = exports.resolverLocally = /*#__PURE__*/(0, _Function.dual)(3, (use, self, value) => new RequestResolverImpl(requests => fiberRefLocally(use.runAll(requests), self, value), Chunk.make("Locally", use, self, value)));
/** @internal */
const requestBlockLocally = (self, ref, value) => blockedRequests_.reduce(self, LocallyReducer(ref, value));
exports.requestBlockLocally = requestBlockLocally;
const LocallyReducer = (ref, value) => ({
  emptyCase: () => blockedRequests_.empty,
  parCase: (left, right) => blockedRequests_.par(left, right),
  seqCase: (left, right) => blockedRequests_.seq(left, right),
  singleCase: (dataSource, blockedRequest) => blockedRequests_.single(resolverLocally(dataSource, ref, value), blockedRequest)
});
/* @internal */
const fiberRefLocally = exports.fiberRefLocally = /*#__PURE__*/(0, _Function.dual)(3, (use, self, value) => acquireUseRelease(zipLeft(fiberRefGet(self), fiberRefSet(self, value)), () => use, oldValue => fiberRefSet(self, oldValue)));
/* @internal */
const fiberRefLocallyWith = exports.fiberRefLocallyWith = /*#__PURE__*/(0, _Function.dual)(3, (use, self, f) => fiberRefGetWith(self, a => fiberRefLocally(use, self, f(a))));
/** @internal */
const fiberRefUnsafeMake = (initial, options) => fiberRefUnsafeMakePatch(initial, {
  differ: internalDiffer.update(),
  fork: options?.fork ?? _Function.identity,
  join: options?.join
});
/** @internal */
exports.fiberRefUnsafeMake = fiberRefUnsafeMake;
const fiberRefUnsafeMakeHashSet = initial => {
  const differ = internalDiffer.hashSet();
  return fiberRefUnsafeMakePatch(initial, {
    differ,
    fork: differ.empty
  });
};
/** @internal */
exports.fiberRefUnsafeMakeHashSet = fiberRefUnsafeMakeHashSet;
const fiberRefUnsafeMakeReadonlyArray = initial => {
  const differ = internalDiffer.readonlyArray(internalDiffer.update());
  return fiberRefUnsafeMakePatch(initial, {
    differ,
    fork: differ.empty
  });
};
/** @internal */
exports.fiberRefUnsafeMakeReadonlyArray = fiberRefUnsafeMakeReadonlyArray;
const fiberRefUnsafeMakeContext = initial => {
  const differ = internalDiffer.environment();
  return fiberRefUnsafeMakePatch(initial, {
    differ,
    fork: differ.empty
  });
};
/** @internal */
exports.fiberRefUnsafeMakeContext = fiberRefUnsafeMakeContext;
const fiberRefUnsafeMakePatch = (initial, options) => {
  const _fiberRef = {
    ..._effectable.CommitPrototype,
    [FiberRefTypeId]: fiberRefVariance,
    initial,
    commit() {
      return fiberRefGet(this);
    },
    diff: (oldValue, newValue) => options.differ.diff(oldValue, newValue),
    combine: (first, second) => options.differ.combine(first, second),
    patch: patch => oldValue => options.differ.patch(patch, oldValue),
    fork: options.fork,
    join: options.join ?? ((_, n) => n)
  };
  return _fiberRef;
};
/** @internal */
exports.fiberRefUnsafeMakePatch = fiberRefUnsafeMakePatch;
const fiberRefUnsafeMakeRuntimeFlags = initial => fiberRefUnsafeMakePatch(initial, {
  differ: runtimeFlags_.differ,
  fork: runtimeFlags_.differ.empty
});
/** @internal */
exports.fiberRefUnsafeMakeRuntimeFlags = fiberRefUnsafeMakeRuntimeFlags;
const currentContext = exports.currentContext = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentContext"), () => fiberRefUnsafeMakeContext(Context.empty()));
/** @internal */
const currentSchedulingPriority = exports.currentSchedulingPriority = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentSchedulingPriority"), () => fiberRefUnsafeMake(0));
/** @internal */
const currentMaxOpsBeforeYield = exports.currentMaxOpsBeforeYield = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"), () => fiberRefUnsafeMake(2048));
/** @internal */
const currentLogAnnotations = exports.currentLogAnnotations = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentLogAnnotation"), () => fiberRefUnsafeMake(HashMap.empty()));
/** @internal */
const currentLogLevel = exports.currentLogLevel = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentLogLevel"), () => fiberRefUnsafeMake(logLevelInfo));
/** @internal */
const currentLogSpan = exports.currentLogSpan = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentLogSpan"), () => fiberRefUnsafeMake(List.empty()));
/** @internal */
const withSchedulingPriority = exports.withSchedulingPriority = /*#__PURE__*/(0, _Function.dual)(2, (self, scheduler) => fiberRefLocally(self, currentSchedulingPriority, scheduler));
/** @internal */
const withMaxOpsBeforeYield = exports.withMaxOpsBeforeYield = /*#__PURE__*/(0, _Function.dual)(2, (self, scheduler) => fiberRefLocally(self, currentMaxOpsBeforeYield, scheduler));
/** @internal */
const currentConcurrency = exports.currentConcurrency = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentConcurrency"), () => fiberRefUnsafeMake("unbounded"));
/**
 * @internal
 */
const currentRequestBatching = exports.currentRequestBatching = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentRequestBatching"), () => fiberRefUnsafeMake(true));
/** @internal */
const currentUnhandledErrorLogLevel = exports.currentUnhandledErrorLogLevel = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"), () => fiberRefUnsafeMake(Option.some(logLevelDebug)));
/** @internal */
const currentVersionMismatchErrorLogLevel = exports.currentVersionMismatchErrorLogLevel = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/versionMismatchErrorLogLevel"), () => fiberRefUnsafeMake(Option.some(logLevelWarning)));
/** @internal */
const withUnhandledErrorLogLevel = exports.withUnhandledErrorLogLevel = /*#__PURE__*/(0, _Function.dual)(2, (self, level) => fiberRefLocally(self, currentUnhandledErrorLogLevel, level));
/** @internal */
const currentMetricLabels = exports.currentMetricLabels = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentMetricLabels"), () => fiberRefUnsafeMakeReadonlyArray(Arr.empty()));
/* @internal */
const metricLabels = exports.metricLabels = /*#__PURE__*/fiberRefGet(currentMetricLabels);
/** @internal */
const currentForkScopeOverride = exports.currentForkScopeOverride = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentForkScopeOverride"), () => fiberRefUnsafeMake(Option.none(), {
  fork: () => Option.none(),
  join: (parent, _) => parent
}));
/** @internal */
const currentInterruptedCause = exports.currentInterruptedCause = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentInterruptedCause"), () => fiberRefUnsafeMake(internalCause.empty, {
  fork: () => internalCause.empty,
  join: (parent, _) => parent
}));
/** @internal */
const currentTracerEnabled = exports.currentTracerEnabled = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentTracerEnabled"), () => fiberRefUnsafeMake(true));
/** @internal */
const currentTracerTimingEnabled = exports.currentTracerTimingEnabled = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentTracerTiming"), () => fiberRefUnsafeMake(true));
/** @internal */
const currentTracerSpanAnnotations = exports.currentTracerSpanAnnotations = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentTracerSpanAnnotations"), () => fiberRefUnsafeMake(HashMap.empty()));
/** @internal */
const currentTracerSpanLinks = exports.currentTracerSpanLinks = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentTracerSpanLinks"), () => fiberRefUnsafeMake(Chunk.empty()));
// -----------------------------------------------------------------------------
// Scope
// -----------------------------------------------------------------------------
/** @internal */
const ScopeTypeId = exports.ScopeTypeId = /*#__PURE__*/Symbol.for("effect/Scope");
/** @internal */
const CloseableScopeTypeId = exports.CloseableScopeTypeId = /*#__PURE__*/Symbol.for("effect/CloseableScope");
/* @internal */
const scopeAddFinalizer = (self, finalizer) => self.addFinalizer(() => asVoid(finalizer));
/* @internal */
exports.scopeAddFinalizer = scopeAddFinalizer;
const scopeAddFinalizerExit = (self, finalizer) => self.addFinalizer(finalizer);
/* @internal */
exports.scopeAddFinalizerExit = scopeAddFinalizerExit;
const scopeClose = (self, exit) => self.close(exit);
/* @internal */
exports.scopeClose = scopeClose;
const scopeFork = (self, strategy) => self.fork(strategy);
// -----------------------------------------------------------------------------
// Cause
// -----------------------------------------------------------------------------
/** @internal */
exports.scopeFork = scopeFork;
const causeSquash = self => {
  return causeSquashWith(_Function.identity)(self);
};
/** @internal */
exports.causeSquash = causeSquash;
const causeSquashWith = exports.causeSquashWith = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const option = (0, _Function.pipe)(self, internalCause.failureOption, Option.map(f));
  switch (option._tag) {
    case "None":
      {
        return (0, _Function.pipe)(internalCause.defects(self), Chunk.head, Option.match({
          onNone: () => {
            const interrupts = Arr.fromIterable(internalCause.interruptors(self)).flatMap(fiberId => Arr.fromIterable(FiberId.ids(fiberId)).map(id => `#${id}`));
            return new InterruptedException(interrupts ? `Interrupted by fibers: ${interrupts.join(", ")}` : void 0);
          },
          onSome: _Function.identity
        }));
      }
    case "Some":
      {
        return option.value;
      }
  }
});
// -----------------------------------------------------------------------------
// Errors
// -----------------------------------------------------------------------------
/** @internal */
const YieldableError = exports.YieldableError = /*#__PURE__*/function () {
  class YieldableError extends globalThis.Error {
    commit() {
      return fail(this);
    }
    toJSON() {
      const obj = {
        ...this
      };
      if (this.message) obj.message = this.message;
      if (this.cause) obj.cause = this.cause;
      return obj;
    }
    [_Inspectable.NodeInspectSymbol]() {
      if (this.toString !== globalThis.Error.prototype.toString) {
        return this.stack ? `${this.toString()}\n${this.stack.split("\n").slice(1).join("\n")}` : this.toString();
      } else if ("Bun" in globalThis) {
        return internalCause.pretty(internalCause.fail(this), {
          renderErrorCause: true
        });
      }
      return this;
    }
  }
  // @effect-diagnostics-next-line floatingEffect:off
  Object.assign(YieldableError.prototype, _effectable.StructuralCommitPrototype);
  return YieldableError;
}();
const makeException = (proto, tag) => {
  class Base extends YieldableError {
    _tag = tag;
  }
  Object.assign(Base.prototype, proto);
  Base.prototype.name = tag;
  return Base;
};
/** @internal */
const RuntimeExceptionTypeId = exports.RuntimeExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/RuntimeException");
/** @internal */
const RuntimeException = exports.RuntimeException = /*#__PURE__*/makeException({
  [RuntimeExceptionTypeId]: RuntimeExceptionTypeId
}, "RuntimeException");
/** @internal */
const isRuntimeException = u => (0, _Predicate.hasProperty)(u, RuntimeExceptionTypeId);
/** @internal */
exports.isRuntimeException = isRuntimeException;
const InterruptedExceptionTypeId = exports.InterruptedExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/InterruptedException");
/** @internal */
const InterruptedException = exports.InterruptedException = /*#__PURE__*/makeException({
  [InterruptedExceptionTypeId]: InterruptedExceptionTypeId
}, "InterruptedException");
/** @internal */
const isInterruptedException = u => (0, _Predicate.hasProperty)(u, InterruptedExceptionTypeId);
/** @internal */
exports.isInterruptedException = isInterruptedException;
const IllegalArgumentExceptionTypeId = exports.IllegalArgumentExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/IllegalArgument");
/** @internal */
const IllegalArgumentException = exports.IllegalArgumentException = /*#__PURE__*/makeException({
  [IllegalArgumentExceptionTypeId]: IllegalArgumentExceptionTypeId
}, "IllegalArgumentException");
/** @internal */
const isIllegalArgumentException = u => (0, _Predicate.hasProperty)(u, IllegalArgumentExceptionTypeId);
/** @internal */
exports.isIllegalArgumentException = isIllegalArgumentException;
const NoSuchElementExceptionTypeId = exports.NoSuchElementExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/NoSuchElement");
/** @internal */
const NoSuchElementException = exports.NoSuchElementException = /*#__PURE__*/makeException({
  [NoSuchElementExceptionTypeId]: NoSuchElementExceptionTypeId
}, "NoSuchElementException");
/** @internal */
const isNoSuchElementException = u => (0, _Predicate.hasProperty)(u, NoSuchElementExceptionTypeId);
/** @internal */
exports.isNoSuchElementException = isNoSuchElementException;
const InvalidPubSubCapacityExceptionTypeId = exports.InvalidPubSubCapacityExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/InvalidPubSubCapacityException");
/** @internal */
const InvalidPubSubCapacityException = exports.InvalidPubSubCapacityException = /*#__PURE__*/makeException({
  [InvalidPubSubCapacityExceptionTypeId]: InvalidPubSubCapacityExceptionTypeId
}, "InvalidPubSubCapacityException");
/** @internal */
const ExceededCapacityExceptionTypeId = exports.ExceededCapacityExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/ExceededCapacityException");
/** @internal */
const ExceededCapacityException = exports.ExceededCapacityException = /*#__PURE__*/makeException({
  [ExceededCapacityExceptionTypeId]: ExceededCapacityExceptionTypeId
}, "ExceededCapacityException");
/** @internal */
const isExceededCapacityException = u => (0, _Predicate.hasProperty)(u, ExceededCapacityExceptionTypeId);
/** @internal */
exports.isExceededCapacityException = isExceededCapacityException;
const isInvalidCapacityError = u => (0, _Predicate.hasProperty)(u, InvalidPubSubCapacityExceptionTypeId);
/** @internal */
exports.isInvalidCapacityError = isInvalidCapacityError;
const TimeoutExceptionTypeId = exports.TimeoutExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/Timeout");
/** @internal */
const TimeoutException = exports.TimeoutException = /*#__PURE__*/makeException({
  [TimeoutExceptionTypeId]: TimeoutExceptionTypeId
}, "TimeoutException");
/** @internal */
const timeoutExceptionFromDuration = duration => new TimeoutException(`Operation timed out after '${Duration.format(duration)}'`);
/** @internal */
exports.timeoutExceptionFromDuration = timeoutExceptionFromDuration;
const isTimeoutException = u => (0, _Predicate.hasProperty)(u, TimeoutExceptionTypeId);
/** @internal */
exports.isTimeoutException = isTimeoutException;
const UnknownExceptionTypeId = exports.UnknownExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/UnknownException");
/** @internal */
const UnknownException = exports.UnknownException = /*#__PURE__*/function () {
  class UnknownException extends YieldableError {
    _tag = "UnknownException";
    error;
    constructor(cause, message) {
      super(message ?? "An unknown error occurred", {
        cause
      });
      this.error = cause;
    }
  }
  Object.assign(UnknownException.prototype, {
    [UnknownExceptionTypeId]: UnknownExceptionTypeId,
    name: "UnknownException"
  });
  return UnknownException;
}();
/** @internal */
const isUnknownException = u => (0, _Predicate.hasProperty)(u, UnknownExceptionTypeId);
// -----------------------------------------------------------------------------
// Exit
// -----------------------------------------------------------------------------
/** @internal */
exports.isUnknownException = isUnknownException;
const exitIsExit = u => isEffect(u) && "_tag" in u && (u._tag === "Success" || u._tag === "Failure");
/** @internal */
exports.exitIsExit = exitIsExit;
const exitIsFailure = self => self._tag === "Failure";
/** @internal */
exports.exitIsFailure = exitIsFailure;
const exitIsSuccess = self => self._tag === "Success";
/** @internal */
exports.exitIsSuccess = exitIsSuccess;
const exitIsInterrupted = self => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return internalCause.isInterrupted(self.effect_instruction_i0);
    case OpCodes.OP_SUCCESS:
      return false;
  }
};
/** @internal */
exports.exitIsInterrupted = exitIsInterrupted;
const exitAs = exports.exitAs = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      {
        return exitFailCause(self.effect_instruction_i0);
      }
    case OpCodes.OP_SUCCESS:
      {
        return exitSucceed(value);
      }
  }
});
/** @internal */
const exitAsVoid = self => exitAs(self, void 0);
/** @internal */
exports.exitAsVoid = exitAsVoid;
const exitCauseOption = self => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return Option.some(self.effect_instruction_i0);
    case OpCodes.OP_SUCCESS:
      return Option.none();
  }
};
/** @internal */
exports.exitCauseOption = exitCauseOption;
const exitCollectAll = (exits, options) => exitCollectAllInternal(exits, options?.parallel ? internalCause.parallel : internalCause.sequential);
/** @internal */
exports.exitCollectAll = exitCollectAll;
const exitDie = defect => exitFailCause(internalCause.die(defect));
/** @internal */
exports.exitDie = exitDie;
const exitExists = exports.exitExists = /*#__PURE__*/(0, _Function.dual)(2, (self, refinement) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return false;
    case OpCodes.OP_SUCCESS:
      return refinement(self.effect_instruction_i0);
  }
});
/** @internal */
const exitFail = error => exitFailCause(internalCause.fail(error));
/** @internal */
exports.exitFail = exitFail;
const exitFailCause = cause => {
  const effect = new EffectPrimitiveFailure(OpCodes.OP_FAILURE);
  effect.effect_instruction_i0 = cause;
  return effect;
};
/** @internal */
exports.exitFailCause = exitFailCause;
const exitFlatMap = exports.exitFlatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      {
        return exitFailCause(self.effect_instruction_i0);
      }
    case OpCodes.OP_SUCCESS:
      {
        return f(self.effect_instruction_i0);
      }
  }
});
/** @internal */
const exitFlatMapEffect = exports.exitFlatMapEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      {
        return succeed(exitFailCause(self.effect_instruction_i0));
      }
    case OpCodes.OP_SUCCESS:
      {
        return f(self.effect_instruction_i0);
      }
  }
});
/** @internal */
const exitFlatten = self => (0, _Function.pipe)(self, exitFlatMap(_Function.identity));
/** @internal */
exports.exitFlatten = exitFlatten;
const exitForEachEffect = exports.exitForEachEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      {
        return succeed(exitFailCause(self.effect_instruction_i0));
      }
    case OpCodes.OP_SUCCESS:
      {
        return exit(f(self.effect_instruction_i0));
      }
  }
});
/** @internal */
const exitFromEither = either => {
  switch (either._tag) {
    case "Left":
      return exitFail(either.left);
    case "Right":
      return exitSucceed(either.right);
  }
};
/** @internal */
exports.exitFromEither = exitFromEither;
const exitFromOption = option => {
  switch (option._tag) {
    case "None":
      return exitFail(void 0);
    case "Some":
      return exitSucceed(option.value);
  }
};
/** @internal */
exports.exitFromOption = exitFromOption;
const exitGetOrElse = exports.exitGetOrElse = /*#__PURE__*/(0, _Function.dual)(2, (self, orElse) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return orElse(self.effect_instruction_i0);
    case OpCodes.OP_SUCCESS:
      return self.effect_instruction_i0;
  }
});
/** @internal */
const exitInterrupt = fiberId => exitFailCause(internalCause.interrupt(fiberId));
/** @internal */
exports.exitInterrupt = exitInterrupt;
const exitMap = exports.exitMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause(self.effect_instruction_i0);
    case OpCodes.OP_SUCCESS:
      return exitSucceed(f(self.effect_instruction_i0));
  }
});
/** @internal */
const exitMapBoth = exports.exitMapBoth = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause((0, _Function.pipe)(self.effect_instruction_i0, internalCause.map(onFailure)));
    case OpCodes.OP_SUCCESS:
      return exitSucceed(onSuccess(self.effect_instruction_i0));
  }
});
/** @internal */
const exitMapError = exports.exitMapError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause((0, _Function.pipe)(self.effect_instruction_i0, internalCause.map(f)));
    case OpCodes.OP_SUCCESS:
      return exitSucceed(self.effect_instruction_i0);
  }
});
/** @internal */
const exitMapErrorCause = exports.exitMapErrorCause = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause(f(self.effect_instruction_i0));
    case OpCodes.OP_SUCCESS:
      return exitSucceed(self.effect_instruction_i0);
  }
});
/** @internal */
const exitMatch = exports.exitMatch = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return onFailure(self.effect_instruction_i0);
    case OpCodes.OP_SUCCESS:
      return onSuccess(self.effect_instruction_i0);
  }
});
/** @internal */
const exitMatchEffect = exports.exitMatchEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return onFailure(self.effect_instruction_i0);
    case OpCodes.OP_SUCCESS:
      return onSuccess(self.effect_instruction_i0);
  }
});
/** @internal */
const exitSucceed = value => {
  const effect = new EffectPrimitiveSuccess(OpCodes.OP_SUCCESS);
  effect.effect_instruction_i0 = value;
  return effect;
};
/** @internal */
exports.exitSucceed = exitSucceed;
const exitVoid = exports.exitVoid = /*#__PURE__*/exitSucceed(void 0);
/** @internal */
const exitZip = exports.exitZip = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (a, a2) => [a, a2],
  onFailure: internalCause.sequential
}));
/** @internal */
const exitZipLeft = exports.exitZipLeft = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (a, _) => a,
  onFailure: internalCause.sequential
}));
/** @internal */
const exitZipRight = exports.exitZipRight = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (_, a2) => a2,
  onFailure: internalCause.sequential
}));
/** @internal */
const exitZipPar = exports.exitZipPar = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (a, a2) => [a, a2],
  onFailure: internalCause.parallel
}));
/** @internal */
const exitZipParLeft = exports.exitZipParLeft = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (a, _) => a,
  onFailure: internalCause.parallel
}));
/** @internal */
const exitZipParRight = exports.exitZipParRight = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (_, a2) => a2,
  onFailure: internalCause.parallel
}));
/** @internal */
const exitZipWith = exports.exitZipWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      {
        switch (that._tag) {
          case OpCodes.OP_SUCCESS:
            return exitFailCause(self.effect_instruction_i0);
          case OpCodes.OP_FAILURE:
            {
              return exitFailCause(onFailure(self.effect_instruction_i0, that.effect_instruction_i0));
            }
        }
      }
    case OpCodes.OP_SUCCESS:
      {
        switch (that._tag) {
          case OpCodes.OP_SUCCESS:
            return exitSucceed(onSuccess(self.effect_instruction_i0, that.effect_instruction_i0));
          case OpCodes.OP_FAILURE:
            return exitFailCause(that.effect_instruction_i0);
        }
      }
  }
});
const exitCollectAllInternal = (exits, combineCauses) => {
  const list = Chunk.fromIterable(exits);
  if (!Chunk.isNonEmpty(list)) {
    return Option.none();
  }
  return (0, _Function.pipe)(Chunk.tailNonEmpty(list), Arr.reduce((0, _Function.pipe)(Chunk.headNonEmpty(list), exitMap(Chunk.of)), (accumulator, current) => (0, _Function.pipe)(accumulator, exitZipWith(current, {
    onSuccess: (list, value) => (0, _Function.pipe)(list, Chunk.prepend(value)),
    onFailure: combineCauses
  }))), exitMap(Chunk.reverse), exitMap(chunk => Chunk.toReadonlyArray(chunk)), Option.some);
};
// -----------------------------------------------------------------------------
// Deferred
// -----------------------------------------------------------------------------
/** @internal */
const deferredUnsafeMake = fiberId => {
  const _deferred = {
    ..._effectable.CommitPrototype,
    [deferred.DeferredTypeId]: deferred.deferredVariance,
    state: MutableRef.make(deferred.pending([])),
    commit() {
      return deferredAwait(this);
    },
    blockingOn: fiberId
  };
  return _deferred;
};
/* @internal */
exports.deferredUnsafeMake = deferredUnsafeMake;
const deferredMake = () => flatMap(fiberId, id => deferredMakeAs(id));
/* @internal */
exports.deferredMake = deferredMake;
const deferredMakeAs = fiberId => sync(() => deferredUnsafeMake(fiberId));
/* @internal */
exports.deferredMakeAs = deferredMakeAs;
const deferredAwait = self => asyncInterrupt(resume => {
  const state = MutableRef.get(self.state);
  switch (state._tag) {
    case DeferredOpCodes.OP_STATE_DONE:
      {
        return resume(state.effect);
      }
    case DeferredOpCodes.OP_STATE_PENDING:
      {
        // we can push here as the internal state is mutable
        state.joiners.push(resume);
        return deferredInterruptJoiner(self, resume);
      }
  }
}, self.blockingOn);
/* @internal */
exports.deferredAwait = deferredAwait;
const deferredComplete = exports.deferredComplete = /*#__PURE__*/(0, _Function.dual)(2, (self, effect) => intoDeferred(effect, self));
/* @internal */
const deferredCompleteWith = exports.deferredCompleteWith = /*#__PURE__*/(0, _Function.dual)(2, (self, effect) => sync(() => {
  const state = MutableRef.get(self.state);
  switch (state._tag) {
    case DeferredOpCodes.OP_STATE_DONE:
      {
        return false;
      }
    case DeferredOpCodes.OP_STATE_PENDING:
      {
        MutableRef.set(self.state, deferred.done(effect));
        for (let i = 0, len = state.joiners.length; i < len; i++) {
          state.joiners[i](effect);
        }
        return true;
      }
  }
}));
/* @internal */
const deferredDone = exports.deferredDone = /*#__PURE__*/(0, _Function.dual)(2, (self, exit) => deferredCompleteWith(self, exit));
/* @internal */
const deferredFail = exports.deferredFail = /*#__PURE__*/(0, _Function.dual)(2, (self, error) => deferredCompleteWith(self, fail(error)));
/* @internal */
const deferredFailSync = exports.deferredFailSync = /*#__PURE__*/(0, _Function.dual)(2, (self, evaluate) => deferredCompleteWith(self, failSync(evaluate)));
/* @internal */
const deferredFailCause = exports.deferredFailCause = /*#__PURE__*/(0, _Function.dual)(2, (self, cause) => deferredCompleteWith(self, failCause(cause)));
/* @internal */
const deferredFailCauseSync = exports.deferredFailCauseSync = /*#__PURE__*/(0, _Function.dual)(2, (self, evaluate) => deferredCompleteWith(self, failCauseSync(evaluate)));
/* @internal */
const deferredDie = exports.deferredDie = /*#__PURE__*/(0, _Function.dual)(2, (self, defect) => deferredCompleteWith(self, die(defect)));
/* @internal */
const deferredDieSync = exports.deferredDieSync = /*#__PURE__*/(0, _Function.dual)(2, (self, evaluate) => deferredCompleteWith(self, dieSync(evaluate)));
/* @internal */
const deferredInterrupt = self => flatMap(fiberId, fiberId => deferredCompleteWith(self, interruptWith(fiberId)));
/* @internal */
exports.deferredInterrupt = deferredInterrupt;
const deferredInterruptWith = exports.deferredInterruptWith = /*#__PURE__*/(0, _Function.dual)(2, (self, fiberId) => deferredCompleteWith(self, interruptWith(fiberId)));
/* @internal */
const deferredIsDone = self => sync(() => MutableRef.get(self.state)._tag === DeferredOpCodes.OP_STATE_DONE);
/* @internal */
exports.deferredIsDone = deferredIsDone;
const deferredPoll = self => sync(() => {
  const state = MutableRef.get(self.state);
  switch (state._tag) {
    case DeferredOpCodes.OP_STATE_DONE:
      {
        return Option.some(state.effect);
      }
    case DeferredOpCodes.OP_STATE_PENDING:
      {
        return Option.none();
      }
  }
});
/* @internal */
exports.deferredPoll = deferredPoll;
const deferredSucceed = exports.deferredSucceed = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => deferredCompleteWith(self, succeed(value)));
/* @internal */
const deferredSync = exports.deferredSync = /*#__PURE__*/(0, _Function.dual)(2, (self, evaluate) => deferredCompleteWith(self, sync(evaluate)));
/** @internal */
const deferredUnsafeDone = (self, effect) => {
  const state = MutableRef.get(self.state);
  if (state._tag === DeferredOpCodes.OP_STATE_PENDING) {
    MutableRef.set(self.state, deferred.done(effect));
    for (let i = 0, len = state.joiners.length; i < len; i++) {
      state.joiners[i](effect);
    }
  }
};
exports.deferredUnsafeDone = deferredUnsafeDone;
const deferredInterruptJoiner = (self, joiner) => sync(() => {
  const state = MutableRef.get(self.state);
  if (state._tag === DeferredOpCodes.OP_STATE_PENDING) {
    const index = state.joiners.indexOf(joiner);
    if (index >= 0) {
      // we can splice here as the internal state is mutable
      state.joiners.splice(index, 1);
    }
  }
});
// -----------------------------------------------------------------------------
// Context
// -----------------------------------------------------------------------------
const constContext = /*#__PURE__*/withFiberRuntime(fiber => exitSucceed(fiber.currentContext));
/* @internal */
const context = () => constContext;
/* @internal */
exports.context = context;
const contextWith = f => map(context(), f);
/* @internal */
exports.contextWith = contextWith;
const contextWithEffect = f => flatMap(context(), f);
/* @internal */
exports.contextWithEffect = contextWithEffect;
const provideContext = exports.provideContext = /*#__PURE__*/(0, _Function.dual)(2, (self, context) => fiberRefLocally(currentContext, context)(self));
/* @internal */
const provideSomeContext = exports.provideSomeContext = /*#__PURE__*/(0, _Function.dual)(2, (self, context) => fiberRefLocallyWith(currentContext, parent => Context.merge(parent, context))(self));
/* @internal */
const mapInputContext = exports.mapInputContext = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => contextWithEffect(context => provideContext(self, f(context))));
// -----------------------------------------------------------------------------
// Filtering
// -----------------------------------------------------------------------------
/** @internal */
const filterEffectOrElse = exports.filterEffectOrElse = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => flatMap(self, a => flatMap(options.predicate(a), pass => pass ? succeed(a) : options.orElse(a))));
/** @internal */
const filterEffectOrFail = exports.filterEffectOrFail = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => filterEffectOrElse(self, {
  predicate: options.predicate,
  orElse: a => fail(options.orFailWith(a))
}));
// -----------------------------------------------------------------------------
// Tracing
// -----------------------------------------------------------------------------
/** @internal */
const currentSpanFromFiber = fiber => {
  const span = fiber.currentSpan;
  return span !== undefined && span._tag === "Span" ? Option.some(span) : Option.none();
};
exports.currentSpanFromFiber = currentSpanFromFiber;
const NoopSpanProto = {
  _tag: "Span",
  spanId: "noop",
  traceId: "noop",
  sampled: false,
  status: {
    _tag: "Ended",
    startTime: /*#__PURE__*/BigInt(0),
    endTime: /*#__PURE__*/BigInt(0),
    exit: exitVoid
  },
  attributes: /*#__PURE__*/new Map(),
  links: [],
  kind: "internal",
  attribute() {},
  event() {},
  end() {},
  addLinks() {}
};
/** @internal */
const noopSpan = options => Object.assign(Object.create(NoopSpanProto), options);
exports.noopSpan = noopSpan;
//# sourceMappingURL=core.js.map