import * as Arr from "../Array.js";
import * as Chunk from "../Chunk.js";
import * as Context from "../Context.js";
import * as Duration from "../Duration.js";
import * as Either from "../Either.js";
import * as Equal from "../Equal.js";
import * as FiberId from "../FiberId.js";
import { dual, identity, pipe } from "../Function.js";
import { globalValue } from "../GlobalValue.js";
import * as Hash from "../Hash.js";
import * as HashMap from "../HashMap.js";
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js";
import * as List from "../List.js";
import * as MutableRef from "../MutableRef.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty, isObject, isPromiseLike } from "../Predicate.js";
import * as RuntimeFlagsPatch from "../RuntimeFlagsPatch.js";
import { internalCall, YieldWrap } from "../Utils.js";
import * as blockedRequests_ from "./blockedRequests.js";
import * as internalCause from "./cause.js";
import * as deferred from "./deferred.js";
import * as internalDiffer from "./differ.js";
import { CommitPrototype, effectVariance, StructuralCommitPrototype } from "./effectable.js";
import { getBugErrorMessage } from "./errors.js";
import * as DeferredOpCodes from "./opCodes/deferred.js";
import * as OpCodes from "./opCodes/effect.js";
import * as runtimeFlags_ from "./runtimeFlags.js";
import { SingleShotGen } from "./singleShotGen.js";
// -----------------------------------------------------------------------------
// Effect
// -----------------------------------------------------------------------------
/**
 * @internal
 */
export const blocked = (blockedRequests, _continue) => {
  const effect = new EffectPrimitive("Blocked");
  effect.effect_instruction_i0 = blockedRequests;
  effect.effect_instruction_i1 = _continue;
  return effect;
};
/**
 * @internal
 */
export const runRequestBlock = blockedRequests => {
  const effect = new EffectPrimitive("RunBlocked");
  effect.effect_instruction_i0 = blockedRequests;
  return effect;
};
/** @internal */
export const EffectTypeId = /*#__PURE__*/Symbol.for("effect/Effect");
/** @internal */
export class RevertFlags {
  patch;
  op;
  _op = OpCodes.OP_REVERT_FLAGS;
  constructor(patch, op) {
    this.patch = patch;
    this.op = op;
  }
}
class EffectPrimitive {
  _op;
  effect_instruction_i0 = undefined;
  effect_instruction_i1 = undefined;
  effect_instruction_i2 = undefined;
  trace = undefined;
  [EffectTypeId] = effectVariance;
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
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Effect",
      _op: this._op,
      effect_instruction_i0: toJSON(this.effect_instruction_i0),
      effect_instruction_i1: toJSON(this.effect_instruction_i1),
      effect_instruction_i2: toJSON(this.effect_instruction_i2)
    };
  }
  toString() {
    return format(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this));
  }
}
/** @internal */
class EffectPrimitiveFailure {
  _op;
  effect_instruction_i0 = undefined;
  effect_instruction_i1 = undefined;
  effect_instruction_i2 = undefined;
  trace = undefined;
  [EffectTypeId] = effectVariance;
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
    return pipe(
    // @ts-expect-error
    Hash.string(this._tag),
    // @ts-expect-error
    Hash.combine(Hash.hash(this.effect_instruction_i0)), Hash.cached(this));
  }
  get cause() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      cause: this.cause.toJSON()
    };
  }
  toString() {
    return format(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this));
  }
}
/** @internal */
class EffectPrimitiveSuccess {
  _op;
  effect_instruction_i0 = undefined;
  effect_instruction_i1 = undefined;
  effect_instruction_i2 = undefined;
  trace = undefined;
  [EffectTypeId] = effectVariance;
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
    return pipe(
    // @ts-expect-error
    Hash.string(this._tag),
    // @ts-expect-error
    Hash.combine(Hash.hash(this.effect_instruction_i0)), Hash.cached(this));
  }
  get value() {
    return this.effect_instruction_i0;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      value: toJSON(this.value)
    };
  }
  toString() {
    return format(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this));
  }
}
/** @internal */
export const isEffect = u => hasProperty(u, EffectTypeId);
/* @internal */
export const withFiberRuntime = withRuntime => {
  const effect = new EffectPrimitive(OpCodes.OP_WITH_RUNTIME);
  effect.effect_instruction_i0 = withRuntime;
  return effect;
};
/* @internal */
export const acquireUseRelease = /*#__PURE__*/dual(3, (acquire, use, release) => uninterruptibleMask(restore => flatMap(acquire, a => flatMap(exit(suspend(() => restore(use(a)))), exit => {
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
export const as = /*#__PURE__*/dual(2, (self, value) => flatMap(self, () => succeed(value)));
/* @internal */
export const asVoid = self => as(self, void 0);
/* @internal */
export const custom = function () {
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
        throw new Error(getBugErrorMessage("you're not supposed to end up here"));
      }
  }
  return wrapper;
};
/* @internal */
export const unsafeAsync = (register, blockingOn = FiberId.none) => {
  const effect = new EffectPrimitive(OpCodes.OP_ASYNC);
  let cancelerRef = undefined;
  effect.effect_instruction_i0 = resume => {
    cancelerRef = register(resume);
  };
  effect.effect_instruction_i1 = blockingOn;
  return onInterrupt(effect, _ => isEffect(cancelerRef) ? cancelerRef : void_);
};
/* @internal */
export const asyncInterrupt = (register, blockingOn = FiberId.none) => suspend(() => unsafeAsync(register, blockingOn));
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
      cancelerRef = internalCall(() => this.effect_instruction_i0(proxyResume, controllerRef.signal));
    } else {
      cancelerRef = internalCall(() => this.effect_instruction_i0(proxyResume));
    }
    return cancelerRef || controllerRef ? onInterrupt(effect, _ => {
      if (controllerRef) {
        controllerRef.abort();
      }
      return cancelerRef ?? void_;
    }) : effect;
  });
};
export { /** @internal */
async_ as async };
/* @internal */
export const catchAllCause = /*#__PURE__*/dual(2, (self, f) => {
  const effect = new EffectPrimitive(OpCodes.OP_ON_FAILURE);
  effect.effect_instruction_i0 = self;
  effect.effect_instruction_i1 = f;
  return effect;
});
/* @internal */
export const catchAll = /*#__PURE__*/dual(2, (self, f) => matchEffect(self, {
  onFailure: f,
  onSuccess: succeed
}));
/* @internal */
export const catchIf = /*#__PURE__*/dual(3, (self, predicate, f) => catchAllCause(self, cause => {
  const either = internalCause.failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      return predicate(either.left) ? f(either.left) : failCause(cause);
    case "Right":
      return failCause(either.right);
  }
}));
/* @internal */
export const catchSome = /*#__PURE__*/dual(2, (self, pf) => catchAllCause(self, cause => {
  const either = internalCause.failureOrCause(cause);
  switch (either._tag) {
    case "Left":
      return pipe(pf(either.left), Option.getOrElse(() => failCause(cause)));
    case "Right":
      return failCause(either.right);
  }
}));
/* @internal */
export const checkInterruptible = f => withFiberRuntime((_, status) => f(runtimeFlags_.interruption(status.runtimeFlags)));
const originalSymbol = /*#__PURE__*/Symbol.for("effect/OriginalAnnotation");
/* @internal */
export const originalInstance = obj => {
  if (hasProperty(obj, originalSymbol)) {
    // @ts-expect-error
    return obj[originalSymbol];
  }
  return obj;
};
/* @internal */
export const capture = (obj, span) => {
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
export const die = defect => isObject(defect) && !(internalCause.spanSymbol in defect) ? withFiberRuntime(fiber => failCause(internalCause.die(capture(defect, currentSpanFromFiber(fiber))))) : failCause(internalCause.die(defect));
/* @internal */
export const dieMessage = message => failCauseSync(() => internalCause.die(new RuntimeException(message)));
/* @internal */
export const dieSync = evaluate => flatMap(sync(evaluate), die);
/* @internal */
export const either = self => matchEffect(self, {
  onFailure: e => succeed(Either.left(e)),
  onSuccess: a => succeed(Either.right(a))
});
/* @internal */
export const exit = self => matchCause(self, {
  onFailure: exitFailCause,
  onSuccess: exitSucceed
});
/* @internal */
export const fail = error => isObject(error) && !(internalCause.spanSymbol in error) ? withFiberRuntime(fiber => failCause(internalCause.fail(capture(error, currentSpanFromFiber(fiber))))) : failCause(internalCause.fail(error));
/* @internal */
export const failSync = evaluate => flatMap(sync(evaluate), fail);
/* @internal */
export const failCause = cause => {
  const effect = new EffectPrimitiveFailure(OpCodes.OP_FAILURE);
  effect.effect_instruction_i0 = cause;
  return effect;
};
/* @internal */
export const failCauseSync = evaluate => flatMap(sync(evaluate), failCause);
/* @internal */
export const fiberId = /*#__PURE__*/withFiberRuntime(state => succeed(state.id()));
/* @internal */
export const fiberIdWith = f => withFiberRuntime(state => f(state.id()));
/* @internal */
export const flatMap = /*#__PURE__*/dual(2, (self, f) => {
  const effect = new EffectPrimitive(OpCodes.OP_ON_SUCCESS);
  effect.effect_instruction_i0 = self;
  effect.effect_instruction_i1 = f;
  return effect;
});
/* @internal */
export const andThen = /*#__PURE__*/dual(2, (self, f) => flatMap(self, a => {
  const b = typeof f === "function" ? f(a) : f;
  if (isEffect(b)) {
    return b;
  } else if (isPromiseLike(b)) {
    return unsafeAsync(resume => {
      b.then(a => resume(succeed(a)), e => resume(fail(new UnknownException(e, "An unknown error occurred in Effect.andThen"))));
    });
  }
  return succeed(b);
}));
/* @internal */
export const step = self => {
  const effect = new EffectPrimitive("OnStep");
  effect.effect_instruction_i0 = self;
  return effect;
};
/* @internal */
export const flatten = self => flatMap(self, identity);
/* @internal */
export const flip = self => matchEffect(self, {
  onFailure: succeed,
  onSuccess: fail
});
/* @internal */
export const matchCause = /*#__PURE__*/dual(2, (self, options) => matchCauseEffect(self, {
  onFailure: cause => succeed(options.onFailure(cause)),
  onSuccess: a => succeed(options.onSuccess(a))
}));
/* @internal */
export const matchCauseEffect = /*#__PURE__*/dual(2, (self, options) => {
  const effect = new EffectPrimitive(OpCodes.OP_ON_SUCCESS_AND_FAILURE);
  effect.effect_instruction_i0 = self;
  effect.effect_instruction_i1 = options.onFailure;
  effect.effect_instruction_i2 = options.onSuccess;
  return effect;
});
/* @internal */
export const matchEffect = /*#__PURE__*/dual(2, (self, options) => matchCauseEffect(self, {
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
export const forEachSequential = /*#__PURE__*/dual(2, (self, f) => suspend(() => {
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
export const forEachSequentialDiscard = /*#__PURE__*/dual(2, (self, f) => suspend(() => {
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
export const if_ = /*#__PURE__*/dual(args => typeof args[0] === "boolean" || isEffect(args[0]), (self, options) => isEffect(self) ? flatMap(self, b => b ? options.onTrue() : options.onFalse()) : self ? options.onTrue() : options.onFalse());
/* @internal */
export const interrupt = /*#__PURE__*/flatMap(fiberId, fiberId => interruptWith(fiberId));
/* @internal */
export const interruptWith = fiberId => failCause(internalCause.interrupt(fiberId));
/* @internal */
export const interruptible = self => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = RuntimeFlagsPatch.enable(runtimeFlags_.Interruption);
  effect.effect_instruction_i1 = () => self;
  return effect;
};
/* @internal */
export const interruptibleMask = f => custom(f, function () {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = RuntimeFlagsPatch.enable(runtimeFlags_.Interruption);
  effect.effect_instruction_i1 = oldFlags => runtimeFlags_.interruption(oldFlags) ? internalCall(() => this.effect_instruction_i0(interruptible)) : internalCall(() => this.effect_instruction_i0(uninterruptible));
  return effect;
});
/* @internal */
export const intoDeferred = /*#__PURE__*/dual(2, (self, deferred) => uninterruptibleMask(restore => flatMap(exit(restore(self)), exit => deferredDone(deferred, exit))));
/* @internal */
export const map = /*#__PURE__*/dual(2, (self, f) => flatMap(self, a => sync(() => f(a))));
/* @internal */
export const mapBoth = /*#__PURE__*/dual(2, (self, options) => matchEffect(self, {
  onFailure: e => failSync(() => options.onFailure(e)),
  onSuccess: a => sync(() => options.onSuccess(a))
}));
/* @internal */
export const mapError = /*#__PURE__*/dual(2, (self, f) => matchCauseEffect(self, {
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
export const onError = /*#__PURE__*/dual(2, (self, cleanup) => onExit(self, exit => exitIsSuccess(exit) ? void_ : cleanup(exit.effect_instruction_i0)));
/* @internal */
export const onExit = /*#__PURE__*/dual(2, (self, cleanup) => uninterruptibleMask(restore => matchCauseEffect(restore(self), {
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
export const onInterrupt = /*#__PURE__*/dual(2, (self, cleanup) => onExit(self, exitMatch({
  onFailure: cause => internalCause.isInterruptedOnly(cause) ? asVoid(cleanup(internalCause.interruptors(cause))) : void_,
  onSuccess: () => void_
})));
/* @internal */
export const orElse = /*#__PURE__*/dual(2, (self, that) => attemptOrElse(self, that, succeed));
/* @internal */
export const orDie = self => orDieWith(self, identity);
/* @internal */
export const orDieWith = /*#__PURE__*/dual(2, (self, f) => matchEffect(self, {
  onFailure: e => die(f(e)),
  onSuccess: succeed
}));
/* @internal */
export const partitionMap = Arr.partitionMap;
/* @internal */
export const runtimeFlags = /*#__PURE__*/withFiberRuntime((_, status) => succeed(status.runtimeFlags));
/* @internal */
export const succeed = value => {
  const effect = new EffectPrimitiveSuccess(OpCodes.OP_SUCCESS);
  effect.effect_instruction_i0 = value;
  return effect;
};
/* @internal */
export const suspend = evaluate => {
  const effect = new EffectPrimitive(OpCodes.OP_COMMIT);
  effect.commit = evaluate;
  return effect;
};
/* @internal */
export const sync = thunk => {
  const effect = new EffectPrimitive(OpCodes.OP_SYNC);
  effect.effect_instruction_i0 = thunk;
  return effect;
};
/* @internal */
export const tap = /*#__PURE__*/dual(args => args.length === 3 || args.length === 2 && !(isObject(args[1]) && "onlyEffect" in args[1]), (self, f) => flatMap(self, a => {
  const b = typeof f === "function" ? f(a) : f;
  if (isEffect(b)) {
    return as(b, a);
  } else if (isPromiseLike(b)) {
    return unsafeAsync(resume => {
      b.then(_ => resume(succeed(a)), e => resume(fail(new UnknownException(e, "An unknown error occurred in Effect.tap"))));
    });
  }
  return succeed(a);
}));
/* @internal */
export const transplant = f => withFiberRuntime(state => {
  const scopeOverride = state.getFiberRef(currentForkScopeOverride);
  const scope = pipe(scopeOverride, Option.getOrElse(() => state.scope()));
  return f(fiberRefLocally(currentForkScopeOverride, Option.some(scope)));
});
/* @internal */
export const attemptOrElse = /*#__PURE__*/dual(3, (self, that, onSuccess) => matchCauseEffect(self, {
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
export const uninterruptible = self => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = RuntimeFlagsPatch.disable(runtimeFlags_.Interruption);
  effect.effect_instruction_i1 = () => self;
  return effect;
};
/* @internal */
export const uninterruptibleMask = f => custom(f, function () {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = RuntimeFlagsPatch.disable(runtimeFlags_.Interruption);
  effect.effect_instruction_i1 = oldFlags => runtimeFlags_.interruption(oldFlags) ? internalCall(() => this.effect_instruction_i0(interruptible)) : internalCall(() => this.effect_instruction_i0(uninterruptible));
  return effect;
});
const void_ = /*#__PURE__*/succeed(void 0);
export { /* @internal */
void_ as void };
/* @internal */
export const updateRuntimeFlags = patch => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = patch;
  effect.effect_instruction_i1 = void 0;
  return effect;
};
/* @internal */
export const whenEffect = /*#__PURE__*/dual(2, (self, condition) => flatMap(condition, b => {
  if (b) {
    return pipe(self, map(Option.some));
  }
  return succeed(Option.none());
}));
/* @internal */
export const whileLoop = options => {
  const effect = new EffectPrimitive(OpCodes.OP_WHILE);
  effect.effect_instruction_i0 = options.while;
  effect.effect_instruction_i1 = options.body;
  effect.effect_instruction_i2 = options.step;
  return effect;
};
/* @internal */
export const fromIterator = iterator => suspend(() => {
  const effect = new EffectPrimitive(OpCodes.OP_ITERATOR);
  effect.effect_instruction_i0 = iterator();
  return effect;
});
/* @internal */
export const gen = function () {
  const f = arguments.length === 1 ? arguments[0] : arguments[1].bind(arguments[0]);
  return fromIterator(() => f(pipe));
};
/** @internal */
export const fnUntraced = (body, ...pipeables) => Object.defineProperty(pipeables.length === 0 ? function (...args) {
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
export const withConcurrency = /*#__PURE__*/dual(2, (self, concurrency) => fiberRefLocally(self, currentConcurrency, concurrency));
/* @internal */
export const withRequestBatching = /*#__PURE__*/dual(2, (self, requestBatching) => fiberRefLocally(self, currentRequestBatching, requestBatching));
/* @internal */
export const withRuntimeFlags = /*#__PURE__*/dual(2, (self, update) => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS);
  effect.effect_instruction_i0 = update;
  effect.effect_instruction_i1 = () => self;
  return effect;
});
/** @internal */
export const withTracerEnabled = /*#__PURE__*/dual(2, (effect, enabled) => fiberRefLocally(effect, currentTracerEnabled, enabled));
/** @internal */
export const withTracerTiming = /*#__PURE__*/dual(2, (effect, enabled) => fiberRefLocally(effect, currentTracerTimingEnabled, enabled));
/* @internal */
export const yieldNow = options => {
  const effect = new EffectPrimitive(OpCodes.OP_YIELD);
  return typeof options?.priority !== "undefined" ? withSchedulingPriority(effect, options.priority) : effect;
};
/* @internal */
export const zip = /*#__PURE__*/dual(2, (self, that) => flatMap(self, a => map(that, b => [a, b])));
/* @internal */
export const zipFlatten = /*#__PURE__*/dual(2, (self, that) => flatMap(self, a => map(that, b => [...a, b])));
/* @internal */
export const zipLeft = /*#__PURE__*/dual(2, (self, that) => flatMap(self, a => as(that, a)));
/* @internal */
export const zipRight = /*#__PURE__*/dual(2, (self, that) => flatMap(self, () => that));
/* @internal */
export const zipWith = /*#__PURE__*/dual(3, (self, that, f) => flatMap(self, a => map(that, b => f(a, b))));
/* @internal */
export const never = /*#__PURE__*/asyncInterrupt(() => {
  const interval = setInterval(() => {
    //
  }, 2 ** 31 - 1);
  return sync(() => clearInterval(interval));
});
// -----------------------------------------------------------------------------
// Fiber
// -----------------------------------------------------------------------------
/* @internal */
export const interruptFiber = self => flatMap(fiberId, fiberId => pipe(self, interruptAsFiber(fiberId)));
/* @internal */
export const interruptAsFiber = /*#__PURE__*/dual(2, (self, fiberId) => flatMap(self.interruptAsFork(fiberId), () => self.await));
// -----------------------------------------------------------------------------
// LogLevel
// -----------------------------------------------------------------------------
/** @internal */
export const logLevelAll = {
  _tag: "All",
  syslog: 0,
  label: "ALL",
  ordinal: Number.MIN_SAFE_INTEGER,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const logLevelFatal = {
  _tag: "Fatal",
  syslog: 2,
  label: "FATAL",
  ordinal: 50000,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const logLevelError = {
  _tag: "Error",
  syslog: 3,
  label: "ERROR",
  ordinal: 40000,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const logLevelWarning = {
  _tag: "Warning",
  syslog: 4,
  label: "WARN",
  ordinal: 30000,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const logLevelInfo = {
  _tag: "Info",
  syslog: 6,
  label: "INFO",
  ordinal: 20000,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const logLevelDebug = {
  _tag: "Debug",
  syslog: 7,
  label: "DEBUG",
  ordinal: 10000,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const logLevelTrace = {
  _tag: "Trace",
  syslog: 7,
  label: "TRACE",
  ordinal: 0,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const logLevelNone = {
  _tag: "None",
  syslog: 7,
  label: "OFF",
  ordinal: Number.MAX_SAFE_INTEGER,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
export const allLogLevels = [logLevelAll, logLevelTrace, logLevelDebug, logLevelInfo, logLevelWarning, logLevelError, logLevelFatal, logLevelNone];
// -----------------------------------------------------------------------------
// FiberRef
// -----------------------------------------------------------------------------
/** @internal */
const FiberRefSymbolKey = "effect/FiberRef";
/** @internal */
export const FiberRefTypeId = /*#__PURE__*/Symbol.for(FiberRefSymbolKey);
const fiberRefVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/* @internal */
export const fiberRefGet = self => withFiberRuntime(fiber => exitSucceed(fiber.getFiberRef(self)));
/* @internal */
export const fiberRefGetAndSet = /*#__PURE__*/dual(2, (self, value) => fiberRefModify(self, v => [v, value]));
/* @internal */
export const fiberRefGetAndUpdate = /*#__PURE__*/dual(2, (self, f) => fiberRefModify(self, v => [v, f(v)]));
/* @internal */
export const fiberRefGetAndUpdateSome = /*#__PURE__*/dual(2, (self, pf) => fiberRefModify(self, v => [v, Option.getOrElse(pf(v), () => v)]));
/* @internal */
export const fiberRefGetWith = /*#__PURE__*/dual(2, (self, f) => flatMap(fiberRefGet(self), f));
/* @internal */
export const fiberRefSet = /*#__PURE__*/dual(2, (self, value) => fiberRefModify(self, () => [void 0, value]));
/* @internal */
export const fiberRefDelete = self => withFiberRuntime(state => {
  state.unsafeDeleteFiberRef(self);
  return void_;
});
/* @internal */
export const fiberRefReset = self => fiberRefSet(self, self.initial);
/* @internal */
export const fiberRefModify = /*#__PURE__*/dual(2, (self, f) => withFiberRuntime(state => {
  const [b, a] = f(state.getFiberRef(self));
  state.setFiberRef(self, a);
  return succeed(b);
}));
/* @internal */
export const fiberRefModifySome = (self, def, f) => fiberRefModify(self, v => Option.getOrElse(f(v), () => [def, v]));
/* @internal */
export const fiberRefUpdate = /*#__PURE__*/dual(2, (self, f) => fiberRefModify(self, v => [void 0, f(v)]));
/* @internal */
export const fiberRefUpdateSome = /*#__PURE__*/dual(2, (self, pf) => fiberRefModify(self, v => [void 0, Option.getOrElse(pf(v), () => v)]));
/* @internal */
export const fiberRefUpdateAndGet = /*#__PURE__*/dual(2, (self, f) => fiberRefModify(self, v => {
  const result = f(v);
  return [result, result];
}));
/* @internal */
export const fiberRefUpdateSomeAndGet = /*#__PURE__*/dual(2, (self, pf) => fiberRefModify(self, v => {
  const result = Option.getOrElse(pf(v), () => v);
  return [result, result];
}));
// circular
/** @internal */
const RequestResolverSymbolKey = "effect/RequestResolver";
/** @internal */
export const RequestResolverTypeId = /*#__PURE__*/Symbol.for(RequestResolverSymbolKey);
const requestResolverVariance = {
  /* c8 ignore next */
  _A: _ => _,
  /* c8 ignore next */
  _R: _ => _
};
/** @internal */
export class RequestResolverImpl {
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
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const isRequestResolver = u => hasProperty(u, RequestResolverTypeId);
// end
/** @internal */
export const resolverLocally = /*#__PURE__*/dual(3, (use, self, value) => new RequestResolverImpl(requests => fiberRefLocally(use.runAll(requests), self, value), Chunk.make("Locally", use, self, value)));
/** @internal */
export const requestBlockLocally = (self, ref, value) => blockedRequests_.reduce(self, LocallyReducer(ref, value));
const LocallyReducer = (ref, value) => ({
  emptyCase: () => blockedRequests_.empty,
  parCase: (left, right) => blockedRequests_.par(left, right),
  seqCase: (left, right) => blockedRequests_.seq(left, right),
  singleCase: (dataSource, blockedRequest) => blockedRequests_.single(resolverLocally(dataSource, ref, value), blockedRequest)
});
/* @internal */
export const fiberRefLocally = /*#__PURE__*/dual(3, (use, self, value) => acquireUseRelease(zipLeft(fiberRefGet(self), fiberRefSet(self, value)), () => use, oldValue => fiberRefSet(self, oldValue)));
/* @internal */
export const fiberRefLocallyWith = /*#__PURE__*/dual(3, (use, self, f) => fiberRefGetWith(self, a => fiberRefLocally(use, self, f(a))));
/** @internal */
export const fiberRefUnsafeMake = (initial, options) => fiberRefUnsafeMakePatch(initial, {
  differ: internalDiffer.update(),
  fork: options?.fork ?? identity,
  join: options?.join
});
/** @internal */
export const fiberRefUnsafeMakeHashSet = initial => {
  const differ = internalDiffer.hashSet();
  return fiberRefUnsafeMakePatch(initial, {
    differ,
    fork: differ.empty
  });
};
/** @internal */
export const fiberRefUnsafeMakeReadonlyArray = initial => {
  const differ = internalDiffer.readonlyArray(internalDiffer.update());
  return fiberRefUnsafeMakePatch(initial, {
    differ,
    fork: differ.empty
  });
};
/** @internal */
export const fiberRefUnsafeMakeContext = initial => {
  const differ = internalDiffer.environment();
  return fiberRefUnsafeMakePatch(initial, {
    differ,
    fork: differ.empty
  });
};
/** @internal */
export const fiberRefUnsafeMakePatch = (initial, options) => {
  const _fiberRef = {
    ...CommitPrototype,
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
export const fiberRefUnsafeMakeRuntimeFlags = initial => fiberRefUnsafeMakePatch(initial, {
  differ: runtimeFlags_.differ,
  fork: runtimeFlags_.differ.empty
});
/** @internal */
export const currentContext = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentContext"), () => fiberRefUnsafeMakeContext(Context.empty()));
/** @internal */
export const currentSchedulingPriority = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentSchedulingPriority"), () => fiberRefUnsafeMake(0));
/** @internal */
export const currentMaxOpsBeforeYield = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"), () => fiberRefUnsafeMake(2048));
/** @internal */
export const currentLogAnnotations = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentLogAnnotation"), () => fiberRefUnsafeMake(HashMap.empty()));
/** @internal */
export const currentLogLevel = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentLogLevel"), () => fiberRefUnsafeMake(logLevelInfo));
/** @internal */
export const currentLogSpan = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentLogSpan"), () => fiberRefUnsafeMake(List.empty()));
/** @internal */
export const withSchedulingPriority = /*#__PURE__*/dual(2, (self, scheduler) => fiberRefLocally(self, currentSchedulingPriority, scheduler));
/** @internal */
export const withMaxOpsBeforeYield = /*#__PURE__*/dual(2, (self, scheduler) => fiberRefLocally(self, currentMaxOpsBeforeYield, scheduler));
/** @internal */
export const currentConcurrency = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentConcurrency"), () => fiberRefUnsafeMake("unbounded"));
/**
 * @internal
 */
export const currentRequestBatching = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentRequestBatching"), () => fiberRefUnsafeMake(true));
/** @internal */
export const currentUnhandledErrorLogLevel = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"), () => fiberRefUnsafeMake(Option.some(logLevelDebug)));
/** @internal */
export const currentVersionMismatchErrorLogLevel = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/versionMismatchErrorLogLevel"), () => fiberRefUnsafeMake(Option.some(logLevelWarning)));
/** @internal */
export const withUnhandledErrorLogLevel = /*#__PURE__*/dual(2, (self, level) => fiberRefLocally(self, currentUnhandledErrorLogLevel, level));
/** @internal */
export const currentMetricLabels = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentMetricLabels"), () => fiberRefUnsafeMakeReadonlyArray(Arr.empty()));
/* @internal */
export const metricLabels = /*#__PURE__*/fiberRefGet(currentMetricLabels);
/** @internal */
export const currentForkScopeOverride = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentForkScopeOverride"), () => fiberRefUnsafeMake(Option.none(), {
  fork: () => Option.none(),
  join: (parent, _) => parent
}));
/** @internal */
export const currentInterruptedCause = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentInterruptedCause"), () => fiberRefUnsafeMake(internalCause.empty, {
  fork: () => internalCause.empty,
  join: (parent, _) => parent
}));
/** @internal */
export const currentTracerEnabled = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentTracerEnabled"), () => fiberRefUnsafeMake(true));
/** @internal */
export const currentTracerTimingEnabled = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentTracerTiming"), () => fiberRefUnsafeMake(true));
/** @internal */
export const currentTracerSpanAnnotations = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentTracerSpanAnnotations"), () => fiberRefUnsafeMake(HashMap.empty()));
/** @internal */
export const currentTracerSpanLinks = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentTracerSpanLinks"), () => fiberRefUnsafeMake(Chunk.empty()));
// -----------------------------------------------------------------------------
// Scope
// -----------------------------------------------------------------------------
/** @internal */
export const ScopeTypeId = /*#__PURE__*/Symbol.for("effect/Scope");
/** @internal */
export const CloseableScopeTypeId = /*#__PURE__*/Symbol.for("effect/CloseableScope");
/* @internal */
export const scopeAddFinalizer = (self, finalizer) => self.addFinalizer(() => asVoid(finalizer));
/* @internal */
export const scopeAddFinalizerExit = (self, finalizer) => self.addFinalizer(finalizer);
/* @internal */
export const scopeClose = (self, exit) => self.close(exit);
/* @internal */
export const scopeFork = (self, strategy) => self.fork(strategy);
// -----------------------------------------------------------------------------
// Cause
// -----------------------------------------------------------------------------
/** @internal */
export const causeSquash = self => {
  return causeSquashWith(identity)(self);
};
/** @internal */
export const causeSquashWith = /*#__PURE__*/dual(2, (self, f) => {
  const option = pipe(self, internalCause.failureOption, Option.map(f));
  switch (option._tag) {
    case "None":
      {
        return pipe(internalCause.defects(self), Chunk.head, Option.match({
          onNone: () => {
            const interrupts = Arr.fromIterable(internalCause.interruptors(self)).flatMap(fiberId => Arr.fromIterable(FiberId.ids(fiberId)).map(id => `#${id}`));
            return new InterruptedException(interrupts ? `Interrupted by fibers: ${interrupts.join(", ")}` : void 0);
          },
          onSome: identity
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
export const YieldableError = /*#__PURE__*/function () {
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
    [NodeInspectSymbol]() {
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
  Object.assign(YieldableError.prototype, StructuralCommitPrototype);
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
export const RuntimeExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/RuntimeException");
/** @internal */
export const RuntimeException = /*#__PURE__*/makeException({
  [RuntimeExceptionTypeId]: RuntimeExceptionTypeId
}, "RuntimeException");
/** @internal */
export const isRuntimeException = u => hasProperty(u, RuntimeExceptionTypeId);
/** @internal */
export const InterruptedExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/InterruptedException");
/** @internal */
export const InterruptedException = /*#__PURE__*/makeException({
  [InterruptedExceptionTypeId]: InterruptedExceptionTypeId
}, "InterruptedException");
/** @internal */
export const isInterruptedException = u => hasProperty(u, InterruptedExceptionTypeId);
/** @internal */
export const IllegalArgumentExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/IllegalArgument");
/** @internal */
export const IllegalArgumentException = /*#__PURE__*/makeException({
  [IllegalArgumentExceptionTypeId]: IllegalArgumentExceptionTypeId
}, "IllegalArgumentException");
/** @internal */
export const isIllegalArgumentException = u => hasProperty(u, IllegalArgumentExceptionTypeId);
/** @internal */
export const NoSuchElementExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/NoSuchElement");
/** @internal */
export const NoSuchElementException = /*#__PURE__*/makeException({
  [NoSuchElementExceptionTypeId]: NoSuchElementExceptionTypeId
}, "NoSuchElementException");
/** @internal */
export const isNoSuchElementException = u => hasProperty(u, NoSuchElementExceptionTypeId);
/** @internal */
export const InvalidPubSubCapacityExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/InvalidPubSubCapacityException");
/** @internal */
export const InvalidPubSubCapacityException = /*#__PURE__*/makeException({
  [InvalidPubSubCapacityExceptionTypeId]: InvalidPubSubCapacityExceptionTypeId
}, "InvalidPubSubCapacityException");
/** @internal */
export const ExceededCapacityExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/ExceededCapacityException");
/** @internal */
export const ExceededCapacityException = /*#__PURE__*/makeException({
  [ExceededCapacityExceptionTypeId]: ExceededCapacityExceptionTypeId
}, "ExceededCapacityException");
/** @internal */
export const isExceededCapacityException = u => hasProperty(u, ExceededCapacityExceptionTypeId);
/** @internal */
export const isInvalidCapacityError = u => hasProperty(u, InvalidPubSubCapacityExceptionTypeId);
/** @internal */
export const TimeoutExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/Timeout");
/** @internal */
export const TimeoutException = /*#__PURE__*/makeException({
  [TimeoutExceptionTypeId]: TimeoutExceptionTypeId
}, "TimeoutException");
/** @internal */
export const timeoutExceptionFromDuration = duration => new TimeoutException(`Operation timed out after '${Duration.format(duration)}'`);
/** @internal */
export const isTimeoutException = u => hasProperty(u, TimeoutExceptionTypeId);
/** @internal */
export const UnknownExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Cause/errors/UnknownException");
/** @internal */
export const UnknownException = /*#__PURE__*/function () {
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
export const isUnknownException = u => hasProperty(u, UnknownExceptionTypeId);
// -----------------------------------------------------------------------------
// Exit
// -----------------------------------------------------------------------------
/** @internal */
export const exitIsExit = u => isEffect(u) && "_tag" in u && (u._tag === "Success" || u._tag === "Failure");
/** @internal */
export const exitIsFailure = self => self._tag === "Failure";
/** @internal */
export const exitIsSuccess = self => self._tag === "Success";
/** @internal */
export const exitIsInterrupted = self => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return internalCause.isInterrupted(self.effect_instruction_i0);
    case OpCodes.OP_SUCCESS:
      return false;
  }
};
/** @internal */
export const exitAs = /*#__PURE__*/dual(2, (self, value) => {
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
export const exitAsVoid = self => exitAs(self, void 0);
/** @internal */
export const exitCauseOption = self => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return Option.some(self.effect_instruction_i0);
    case OpCodes.OP_SUCCESS:
      return Option.none();
  }
};
/** @internal */
export const exitCollectAll = (exits, options) => exitCollectAllInternal(exits, options?.parallel ? internalCause.parallel : internalCause.sequential);
/** @internal */
export const exitDie = defect => exitFailCause(internalCause.die(defect));
/** @internal */
export const exitExists = /*#__PURE__*/dual(2, (self, refinement) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return false;
    case OpCodes.OP_SUCCESS:
      return refinement(self.effect_instruction_i0);
  }
});
/** @internal */
export const exitFail = error => exitFailCause(internalCause.fail(error));
/** @internal */
export const exitFailCause = cause => {
  const effect = new EffectPrimitiveFailure(OpCodes.OP_FAILURE);
  effect.effect_instruction_i0 = cause;
  return effect;
};
/** @internal */
export const exitFlatMap = /*#__PURE__*/dual(2, (self, f) => {
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
export const exitFlatMapEffect = /*#__PURE__*/dual(2, (self, f) => {
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
export const exitFlatten = self => pipe(self, exitFlatMap(identity));
/** @internal */
export const exitForEachEffect = /*#__PURE__*/dual(2, (self, f) => {
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
export const exitFromEither = either => {
  switch (either._tag) {
    case "Left":
      return exitFail(either.left);
    case "Right":
      return exitSucceed(either.right);
  }
};
/** @internal */
export const exitFromOption = option => {
  switch (option._tag) {
    case "None":
      return exitFail(void 0);
    case "Some":
      return exitSucceed(option.value);
  }
};
/** @internal */
export const exitGetOrElse = /*#__PURE__*/dual(2, (self, orElse) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return orElse(self.effect_instruction_i0);
    case OpCodes.OP_SUCCESS:
      return self.effect_instruction_i0;
  }
});
/** @internal */
export const exitInterrupt = fiberId => exitFailCause(internalCause.interrupt(fiberId));
/** @internal */
export const exitMap = /*#__PURE__*/dual(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause(self.effect_instruction_i0);
    case OpCodes.OP_SUCCESS:
      return exitSucceed(f(self.effect_instruction_i0));
  }
});
/** @internal */
export const exitMapBoth = /*#__PURE__*/dual(2, (self, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause(pipe(self.effect_instruction_i0, internalCause.map(onFailure)));
    case OpCodes.OP_SUCCESS:
      return exitSucceed(onSuccess(self.effect_instruction_i0));
  }
});
/** @internal */
export const exitMapError = /*#__PURE__*/dual(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause(pipe(self.effect_instruction_i0, internalCause.map(f)));
    case OpCodes.OP_SUCCESS:
      return exitSucceed(self.effect_instruction_i0);
  }
});
/** @internal */
export const exitMapErrorCause = /*#__PURE__*/dual(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause(f(self.effect_instruction_i0));
    case OpCodes.OP_SUCCESS:
      return exitSucceed(self.effect_instruction_i0);
  }
});
/** @internal */
export const exitMatch = /*#__PURE__*/dual(2, (self, {
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
export const exitMatchEffect = /*#__PURE__*/dual(2, (self, {
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
export const exitSucceed = value => {
  const effect = new EffectPrimitiveSuccess(OpCodes.OP_SUCCESS);
  effect.effect_instruction_i0 = value;
  return effect;
};
/** @internal */
export const exitVoid = /*#__PURE__*/exitSucceed(void 0);
/** @internal */
export const exitZip = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (a, a2) => [a, a2],
  onFailure: internalCause.sequential
}));
/** @internal */
export const exitZipLeft = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (a, _) => a,
  onFailure: internalCause.sequential
}));
/** @internal */
export const exitZipRight = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (_, a2) => a2,
  onFailure: internalCause.sequential
}));
/** @internal */
export const exitZipPar = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (a, a2) => [a, a2],
  onFailure: internalCause.parallel
}));
/** @internal */
export const exitZipParLeft = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (a, _) => a,
  onFailure: internalCause.parallel
}));
/** @internal */
export const exitZipParRight = /*#__PURE__*/dual(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (_, a2) => a2,
  onFailure: internalCause.parallel
}));
/** @internal */
export const exitZipWith = /*#__PURE__*/dual(3, (self, that, {
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
  return pipe(Chunk.tailNonEmpty(list), Arr.reduce(pipe(Chunk.headNonEmpty(list), exitMap(Chunk.of)), (accumulator, current) => pipe(accumulator, exitZipWith(current, {
    onSuccess: (list, value) => pipe(list, Chunk.prepend(value)),
    onFailure: combineCauses
  }))), exitMap(Chunk.reverse), exitMap(chunk => Chunk.toReadonlyArray(chunk)), Option.some);
};
// -----------------------------------------------------------------------------
// Deferred
// -----------------------------------------------------------------------------
/** @internal */
export const deferredUnsafeMake = fiberId => {
  const _deferred = {
    ...CommitPrototype,
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
export const deferredMake = () => flatMap(fiberId, id => deferredMakeAs(id));
/* @internal */
export const deferredMakeAs = fiberId => sync(() => deferredUnsafeMake(fiberId));
/* @internal */
export const deferredAwait = self => asyncInterrupt(resume => {
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
export const deferredComplete = /*#__PURE__*/dual(2, (self, effect) => intoDeferred(effect, self));
/* @internal */
export const deferredCompleteWith = /*#__PURE__*/dual(2, (self, effect) => sync(() => {
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
export const deferredDone = /*#__PURE__*/dual(2, (self, exit) => deferredCompleteWith(self, exit));
/* @internal */
export const deferredFail = /*#__PURE__*/dual(2, (self, error) => deferredCompleteWith(self, fail(error)));
/* @internal */
export const deferredFailSync = /*#__PURE__*/dual(2, (self, evaluate) => deferredCompleteWith(self, failSync(evaluate)));
/* @internal */
export const deferredFailCause = /*#__PURE__*/dual(2, (self, cause) => deferredCompleteWith(self, failCause(cause)));
/* @internal */
export const deferredFailCauseSync = /*#__PURE__*/dual(2, (self, evaluate) => deferredCompleteWith(self, failCauseSync(evaluate)));
/* @internal */
export const deferredDie = /*#__PURE__*/dual(2, (self, defect) => deferredCompleteWith(self, die(defect)));
/* @internal */
export const deferredDieSync = /*#__PURE__*/dual(2, (self, evaluate) => deferredCompleteWith(self, dieSync(evaluate)));
/* @internal */
export const deferredInterrupt = self => flatMap(fiberId, fiberId => deferredCompleteWith(self, interruptWith(fiberId)));
/* @internal */
export const deferredInterruptWith = /*#__PURE__*/dual(2, (self, fiberId) => deferredCompleteWith(self, interruptWith(fiberId)));
/* @internal */
export const deferredIsDone = self => sync(() => MutableRef.get(self.state)._tag === DeferredOpCodes.OP_STATE_DONE);
/* @internal */
export const deferredPoll = self => sync(() => {
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
export const deferredSucceed = /*#__PURE__*/dual(2, (self, value) => deferredCompleteWith(self, succeed(value)));
/* @internal */
export const deferredSync = /*#__PURE__*/dual(2, (self, evaluate) => deferredCompleteWith(self, sync(evaluate)));
/** @internal */
export const deferredUnsafeDone = (self, effect) => {
  const state = MutableRef.get(self.state);
  if (state._tag === DeferredOpCodes.OP_STATE_PENDING) {
    MutableRef.set(self.state, deferred.done(effect));
    for (let i = 0, len = state.joiners.length; i < len; i++) {
      state.joiners[i](effect);
    }
  }
};
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
export const context = () => constContext;
/* @internal */
export const contextWith = f => map(context(), f);
/* @internal */
export const contextWithEffect = f => flatMap(context(), f);
/* @internal */
export const provideContext = /*#__PURE__*/dual(2, (self, context) => fiberRefLocally(currentContext, context)(self));
/* @internal */
export const provideSomeContext = /*#__PURE__*/dual(2, (self, context) => fiberRefLocallyWith(currentContext, parent => Context.merge(parent, context))(self));
/* @internal */
export const mapInputContext = /*#__PURE__*/dual(2, (self, f) => contextWithEffect(context => provideContext(self, f(context))));
// -----------------------------------------------------------------------------
// Filtering
// -----------------------------------------------------------------------------
/** @internal */
export const filterEffectOrElse = /*#__PURE__*/dual(2, (self, options) => flatMap(self, a => flatMap(options.predicate(a), pass => pass ? succeed(a) : options.orElse(a))));
/** @internal */
export const filterEffectOrFail = /*#__PURE__*/dual(2, (self, options) => filterEffectOrElse(self, {
  predicate: options.predicate,
  orElse: a => fail(options.orFailWith(a))
}));
// -----------------------------------------------------------------------------
// Tracing
// -----------------------------------------------------------------------------
/** @internal */
export const currentSpanFromFiber = fiber => {
  const span = fiber.currentSpan;
  return span !== undefined && span._tag === "Span" ? Option.some(span) : Option.none();
};
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
export const noopSpan = options => Object.assign(Object.create(NoopSpanProto), options);
//# sourceMappingURL=core.js.map