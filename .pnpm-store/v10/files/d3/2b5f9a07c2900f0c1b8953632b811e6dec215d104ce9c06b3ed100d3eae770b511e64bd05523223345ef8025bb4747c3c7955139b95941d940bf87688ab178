/**
 * A lightweight alternative to the `Effect` data type, with a subset of the functionality.
 *
 * @since 3.4.0
 * @experimental
 */
import * as Arr from "./Array.js";
import * as Context from "./Context.js";
import * as Effectable from "./Effectable.js";
import * as Either from "./Either.js";
import * as Equal from "./Equal.js";
import { constTrue, constVoid, dual, identity } from "./Function.js";
import { globalValue } from "./GlobalValue.js";
import * as Hash from "./Hash.js";
import { format, NodeInspectSymbol, toStringUnknown } from "./Inspectable.js";
import * as InternalContext from "./internal/context.js";
import * as doNotation from "./internal/doNotation.js";
import { StructuralPrototype } from "./internal/effectable.js";
import * as Option from "./Option.js";
import { pipeArguments } from "./Pipeable.js";
import { hasProperty, isIterable, isTagged } from "./Predicate.js";
import { SingleShotGen, YieldWrap, yieldWrapGet } from "./Utils.js";
/**
 * @since 3.4.0
 * @experimental
 * @category type ids
 */
export const TypeId = /*#__PURE__*/Symbol.for("effect/Micro");
/**
 * @since 3.4.0
 * @experimental
 * @category MicroExit
 */
export const MicroExitTypeId = /*#__PURE__*/Symbol.for("effect/Micro/MicroExit");
/**
 * @since 3.4.0
 * @experimental
 * @category guards
 */
export const isMicro = u => typeof u === "object" && u !== null && TypeId in u;
// ----------------------------------------------------------------------------
// MicroCause
// ----------------------------------------------------------------------------
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const MicroCauseTypeId = /*#__PURE__*/Symbol.for("effect/Micro/MicroCause");
/**
 * @since 3.6.6
 * @experimental
 * @category guards
 */
export const isMicroCause = self => hasProperty(self, MicroCauseTypeId);
const microCauseVariance = {
  _E: identity
};
class MicroCauseImpl extends globalThis.Error {
  _tag;
  traces;
  [MicroCauseTypeId];
  constructor(_tag, originalError, traces) {
    const causeName = `MicroCause.${_tag}`;
    let name;
    let message;
    let stack;
    if (originalError instanceof globalThis.Error) {
      name = `(${causeName}) ${originalError.name}`;
      message = originalError.message;
      const messageLines = message.split("\n").length;
      stack = originalError.stack ? `(${causeName}) ${originalError.stack.split("\n").slice(0, messageLines + 3).join("\n")}` : `${name}: ${message}`;
    } else {
      name = causeName;
      message = toStringUnknown(originalError, 0);
      stack = `${name}: ${message}`;
    }
    if (traces.length > 0) {
      stack += `\n    ${traces.join("\n    ")}`;
    }
    super(message);
    this._tag = _tag;
    this.traces = traces;
    this[MicroCauseTypeId] = microCauseVariance;
    this.name = name;
    this.stack = stack;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toString() {
    return this.stack;
  }
  [NodeInspectSymbol]() {
    return this.stack;
  }
}
class Fail extends MicroCauseImpl {
  error;
  constructor(error, traces = []) {
    super("Fail", error, traces);
    this.error = error;
  }
}
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeFail = (error, traces = []) => new Fail(error, traces);
class Die extends MicroCauseImpl {
  defect;
  constructor(defect, traces = []) {
    super("Die", defect, traces);
    this.defect = defect;
  }
}
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeDie = (defect, traces = []) => new Die(defect, traces);
class Interrupt extends MicroCauseImpl {
  constructor(traces = []) {
    super("Interrupt", "interrupted", traces);
  }
}
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeInterrupt = (traces = []) => new Interrupt(traces);
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeIsFail = self => self._tag === "Fail";
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeIsDie = self => self._tag === "Die";
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeIsInterrupt = self => self._tag === "Interrupt";
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeSquash = self => self._tag === "Fail" ? self.error : self._tag === "Die" ? self.defect : self;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeWithTrace = /*#__PURE__*/dual(2, (self, trace) => {
  const traces = [...self.traces, trace];
  switch (self._tag) {
    case "Die":
      return causeDie(self.defect, traces);
    case "Interrupt":
      return causeInterrupt(traces);
    case "Fail":
      return causeFail(self.error, traces);
  }
});
// ----------------------------------------------------------------------------
// MicroFiber
// ----------------------------------------------------------------------------
/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export const MicroFiberTypeId = /*#__PURE__*/Symbol.for("effect/Micro/MicroFiber");
const fiberVariance = {
  _A: identity,
  _E: identity
};
class MicroFiberImpl {
  context;
  interruptible;
  [MicroFiberTypeId];
  _stack = [];
  _observers = [];
  _exit;
  _children;
  currentOpCount = 0;
  constructor(context, interruptible = true) {
    this.context = context;
    this.interruptible = interruptible;
    this[MicroFiberTypeId] = fiberVariance;
  }
  getRef(ref) {
    return InternalContext.unsafeGetReference(this.context, ref);
  }
  addObserver(cb) {
    if (this._exit) {
      cb(this._exit);
      return constVoid;
    }
    this._observers.push(cb);
    return () => {
      const index = this._observers.indexOf(cb);
      if (index >= 0) {
        this._observers.splice(index, 1);
      }
    };
  }
  _interrupted = false;
  unsafeInterrupt() {
    if (this._exit) {
      return;
    }
    this._interrupted = true;
    if (this.interruptible) {
      this.evaluate(exitInterrupt);
    }
  }
  unsafePoll() {
    return this._exit;
  }
  evaluate(effect) {
    if (this._exit) {
      return;
    } else if (this._yielded !== undefined) {
      const yielded = this._yielded;
      this._yielded = undefined;
      yielded();
    }
    const exit = this.runLoop(effect);
    if (exit === Yield) {
      return;
    }
    // the interruptChildren middlware is added in Micro.fork, so it can be
    // tree-shaken if not used
    const interruptChildren = fiberMiddleware.interruptChildren && fiberMiddleware.interruptChildren(this);
    if (interruptChildren !== undefined) {
      return this.evaluate(flatMap(interruptChildren, () => exit));
    }
    this._exit = exit;
    for (let i = 0; i < this._observers.length; i++) {
      this._observers[i](exit);
    }
    this._observers.length = 0;
  }
  runLoop(effect) {
    let yielding = false;
    let current = effect;
    this.currentOpCount = 0;
    try {
      while (true) {
        this.currentOpCount++;
        if (!yielding && this.getRef(CurrentScheduler).shouldYield(this)) {
          yielding = true;
          const prev = current;
          current = flatMap(yieldNow, () => prev);
        }
        current = current[evaluate](this);
        if (current === Yield) {
          const yielded = this._yielded;
          if (MicroExitTypeId in yielded) {
            this._yielded = undefined;
            return yielded;
          }
          return Yield;
        }
      }
    } catch (error) {
      if (!hasProperty(current, evaluate)) {
        return exitDie(`MicroFiber.runLoop: Not a valid effect: ${String(current)}`);
      }
      return exitDie(error);
    }
  }
  getCont(symbol) {
    while (true) {
      const op = this._stack.pop();
      if (!op) return undefined;
      const cont = op[ensureCont] && op[ensureCont](this);
      if (cont) return {
        [symbol]: cont
      };
      if (op[symbol]) return op;
    }
  }
  // cancel the yielded operation, or for the yielded exit value
  _yielded = undefined;
  yieldWith(value) {
    this._yielded = value;
    return Yield;
  }
  children() {
    return this._children ??= new Set();
  }
}
const fiberMiddleware = /*#__PURE__*/globalValue("effect/Micro/fiberMiddleware", () => ({
  interruptChildren: undefined
}));
const fiberInterruptChildren = fiber => {
  if (fiber._children === undefined || fiber._children.size === 0) {
    return undefined;
  }
  return fiberInterruptAll(fiber._children);
};
/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export const fiberAwait = self => async(resume => sync(self.addObserver(exit => resume(succeed(exit)))));
/**
 * @since 3.11.2
 * @experimental
 * @category MicroFiber
 */
export const fiberJoin = self => flatten(fiberAwait(self));
/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export const fiberInterrupt = self => suspend(() => {
  self.unsafeInterrupt();
  return asVoid(fiberAwait(self));
});
/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export const fiberInterruptAll = fibers => suspend(() => {
  for (const fiber of fibers) fiber.unsafeInterrupt();
  const iter = fibers[Symbol.iterator]();
  const wait = suspend(() => {
    let result = iter.next();
    while (!result.done) {
      if (result.value.unsafePoll()) {
        result = iter.next();
        continue;
      }
      const fiber = result.value;
      return async(resume => {
        fiber.addObserver(_ => {
          resume(wait);
        });
      });
    }
    return exitVoid;
  });
  return wait;
});
const identifier = /*#__PURE__*/Symbol.for("effect/Micro/identifier");
const args = /*#__PURE__*/Symbol.for("effect/Micro/args");
const evaluate = /*#__PURE__*/Symbol.for("effect/Micro/evaluate");
const successCont = /*#__PURE__*/Symbol.for("effect/Micro/successCont");
const failureCont = /*#__PURE__*/Symbol.for("effect/Micro/failureCont");
const ensureCont = /*#__PURE__*/Symbol.for("effect/Micro/ensureCont");
const Yield = /*#__PURE__*/Symbol.for("effect/Micro/Yield");
const microVariance = {
  _A: identity,
  _E: identity,
  _R: identity
};
const MicroProto = {
  ...Effectable.EffectPrototype,
  _op: "Micro",
  [TypeId]: microVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this));
  },
  toJSON() {
    return {
      _id: "Micro",
      op: this[identifier],
      ...(args in this ? {
        args: this[args]
      } : undefined)
    };
  },
  toString() {
    return format(this);
  },
  [NodeInspectSymbol]() {
    return format(this);
  }
};
function defaultEvaluate(_fiber) {
  return exitDie(`Micro.evaluate: Not implemented`);
}
const makePrimitiveProto = options => ({
  ...MicroProto,
  [identifier]: options.op,
  [evaluate]: options.eval ?? defaultEvaluate,
  [successCont]: options.contA,
  [failureCont]: options.contE,
  [ensureCont]: options.ensure
});
const makePrimitive = options => {
  const Proto = makePrimitiveProto(options);
  return function () {
    const self = Object.create(Proto);
    self[args] = options.single === false ? arguments : arguments[0];
    return self;
  };
};
const makeExit = options => {
  const Proto = {
    ...makePrimitiveProto(options),
    [MicroExitTypeId]: MicroExitTypeId,
    _tag: options.op,
    get [options.prop]() {
      return this[args];
    },
    toJSON() {
      return {
        _id: "MicroExit",
        _tag: options.op,
        [options.prop]: this[args]
      };
    },
    [Equal.symbol](that) {
      return isMicroExit(that) && that._tag === options.op && Equal.equals(this[args], that[args]);
    },
    [Hash.symbol]() {
      return Hash.cached(this, Hash.combine(Hash.string(options.op))(Hash.hash(this[args])));
    }
  };
  return function (value) {
    const self = Object.create(Proto);
    self[args] = value;
    self[successCont] = undefined;
    self[failureCont] = undefined;
    self[ensureCont] = undefined;
    return self;
  };
};
/**
 * Creates a `Micro` effect that will succeed with the specified constant value.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const succeed = /*#__PURE__*/makeExit({
  op: "Success",
  prop: "value",
  eval(fiber) {
    const cont = fiber.getCont(successCont);
    return cont ? cont[successCont](this[args], fiber) : fiber.yieldWith(this);
  }
});
/**
 * Creates a `Micro` effect that will fail with the specified `MicroCause`.
 *
 * @since 3.4.6
 * @experimental
 * @category constructors
 */
export const failCause = /*#__PURE__*/makeExit({
  op: "Failure",
  prop: "cause",
  eval(fiber) {
    let cont = fiber.getCont(failureCont);
    while (causeIsInterrupt(this[args]) && cont && fiber.interruptible) {
      cont = fiber.getCont(failureCont);
    }
    return cont ? cont[failureCont](this[args], fiber) : fiber.yieldWith(this);
  }
});
/**
 * Creates a `Micro` effect that fails with the given error.
 *
 * This results in a `Fail` variant of the `MicroCause` type, where the error is
 * tracked at the type level.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const fail = error => failCause(causeFail(error));
/**
 * Creates a `Micro` effect that succeeds with a lazily evaluated value.
 *
 * If the evaluation of the value throws an error, the effect will fail with a
 * `Die` variant of the `MicroCause` type.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const sync = /*#__PURE__*/makePrimitive({
  op: "Sync",
  eval(fiber) {
    const value = this[args]();
    const cont = fiber.getCont(successCont);
    return cont ? cont[successCont](value, fiber) : fiber.yieldWith(exitSucceed(value));
  }
});
/**
 * Lazily creates a `Micro` effect from the given side-effect.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const suspend = /*#__PURE__*/makePrimitive({
  op: "Suspend",
  eval(_fiber) {
    return this[args]();
  }
});
/**
 * Pause the execution of the current `Micro` effect, and resume it on the next
 * scheduler tick.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const yieldNowWith = /*#__PURE__*/makePrimitive({
  op: "Yield",
  eval(fiber) {
    let resumed = false;
    fiber.getRef(CurrentScheduler).scheduleTask(() => {
      if (resumed) return;
      fiber.evaluate(exitVoid);
    }, this[args] ?? 0);
    return fiber.yieldWith(() => {
      resumed = true;
    });
  }
});
/**
 * Pause the execution of the current `Micro` effect, and resume it on the next
 * scheduler tick.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const yieldNow = /*#__PURE__*/yieldNowWith(0);
/**
 * Creates a `Micro` effect that will succeed with the value wrapped in `Some`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const succeedSome = a => succeed(Option.some(a));
/**
 * Creates a `Micro` effect that succeeds with `None`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const succeedNone = /*#__PURE__*/succeed(/*#__PURE__*/Option.none());
/**
 * Creates a `Micro` effect that will fail with the lazily evaluated `MicroCause`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const failCauseSync = evaluate => suspend(() => failCause(evaluate()));
/**
 * Creates a `Micro` effect that will die with the specified error.
 *
 * This results in a `Die` variant of the `MicroCause` type, where the error is
 * not tracked at the type level.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const die = defect => exitDie(defect);
/**
 * Creates a `Micro` effect that will fail with the lazily evaluated error.
 *
 * This results in a `Fail` variant of the `MicroCause` type, where the error is
 * tracked at the type level.
 *
 * @since 3.4.6
 * @experimental
 * @category constructors
 */
export const failSync = error => suspend(() => fail(error()));
/**
 * Converts an `Option` into a `Micro` effect, that will fail with
 * `NoSuchElementException` if the option is `None`. Otherwise, it will succeed with the
 * value of the option.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const fromOption = option => option._tag === "Some" ? succeed(option.value) : fail(new NoSuchElementException({}));
/**
 * Converts an `Either` into a `Micro` effect, that will fail with the left side
 * of the either if it is a `Left`. Otherwise, it will succeed with the right
 * side of the either.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const fromEither = either => either._tag === "Right" ? succeed(either.right) : fail(either.left);
const void_ = /*#__PURE__*/succeed(void 0);
export {
/**
 * A `Micro` effect that will succeed with `void` (`undefined`).
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
void_ as void };
const try_ = options => suspend(() => {
  try {
    return succeed(options.try());
  } catch (err) {
    return fail(options.catch(err));
  }
});
export {
/**
 * The `Micro` equivalent of a try / catch block, which allows you to map
 * thrown errors to a specific error type.
 *
 * @example
 * ```ts
 * import { Micro } from "effect"
 *
 * Micro.try({
 *   try: () => { throw new Error("boom") },
 *   catch: (cause) => new Error("caught", { cause })
 * })
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
try_ as try };
/**
 * Wrap a `Promise` into a `Micro` effect.
 *
 * Any errors will result in a `Die` variant of the `MicroCause` type, where the
 * error is not tracked at the type level.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const promise = evaluate => asyncOptions(function (resume, signal) {
  evaluate(signal).then(a => resume(succeed(a)), e => resume(die(e)));
}, evaluate.length !== 0);
/**
 * Wrap a `Promise` into a `Micro` effect. Any errors will be caught and
 * converted into a specific error type.
 *
 * @example
 * ```ts
 * import { Micro } from "effect"
 *
 * Micro.tryPromise({
 *   try: () => Promise.resolve("success"),
 *   catch: (cause) => new Error("caught", { cause })
 * })
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const tryPromise = options => asyncOptions(function (resume, signal) {
  try {
    options.try(signal).then(a => resume(succeed(a)), e => resume(fail(options.catch(e))));
  } catch (err) {
    resume(fail(options.catch(err)));
  }
}, options.try.length !== 0);
/**
 * Create a `Micro` effect using the current `MicroFiber`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const withMicroFiber = /*#__PURE__*/makePrimitive({
  op: "WithMicroFiber",
  eval(fiber) {
    return this[args](fiber);
  }
});
/**
 * Flush any yielded effects that are waiting to be executed.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const yieldFlush = /*#__PURE__*/withMicroFiber(fiber => {
  fiber.getRef(CurrentScheduler).flush();
  return exitVoid;
});
const asyncOptions = /*#__PURE__*/makePrimitive({
  op: "Async",
  single: false,
  eval(fiber) {
    const register = this[args][0];
    let resumed = false;
    let yielded = false;
    const controller = this[args][1] ? new AbortController() : undefined;
    const onCancel = register(effect => {
      if (resumed) return;
      resumed = true;
      if (yielded) {
        fiber.evaluate(effect);
      } else {
        yielded = effect;
      }
    }, controller?.signal);
    if (yielded !== false) return yielded;
    yielded = true;
    fiber._yielded = () => {
      resumed = true;
    };
    if (controller === undefined && onCancel === undefined) {
      return Yield;
    }
    fiber._stack.push(asyncFinalizer(() => {
      resumed = true;
      controller?.abort();
      return onCancel ?? exitVoid;
    }));
    return Yield;
  }
});
const asyncFinalizer = /*#__PURE__*/makePrimitive({
  op: "AsyncFinalizer",
  ensure(fiber) {
    if (fiber.interruptible) {
      fiber.interruptible = false;
      fiber._stack.push(setInterruptible(true));
    }
  },
  contE(cause, _fiber) {
    return causeIsInterrupt(cause) ? flatMap(this[args](), () => failCause(cause)) : failCause(cause);
  }
});
/**
 * Create a `Micro` effect from an asynchronous computation.
 *
 * You can return a cleanup effect that will be run when the effect is aborted.
 * It is also passed an `AbortSignal` that is triggered when the effect is
 * aborted.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const async = register => asyncOptions(register, register.length >= 2);
/**
 * A `Micro` that will never succeed or fail. It wraps `setInterval` to prevent
 * the Javascript runtime from exiting.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const never = /*#__PURE__*/async(function () {
  const interval = setInterval(constVoid, 2147483646);
  return sync(() => clearInterval(interval));
});
/**
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const gen = (...args) => suspend(() => fromIterator(args.length === 1 ? args[0]() : args[1].call(args[0])));
const fromIterator = /*#__PURE__*/makePrimitive({
  op: "Iterator",
  contA(value, fiber) {
    const state = this[args].next(value);
    if (state.done) return succeed(state.value);
    fiber._stack.push(this);
    return yieldWrapGet(state.value);
  },
  eval(fiber) {
    return this[successCont](undefined, fiber);
  }
});
// ----------------------------------------------------------------------------
// mapping & sequencing
// ----------------------------------------------------------------------------
/**
 * Create a `Micro` effect that will replace the success value of the given
 * effect.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const as = /*#__PURE__*/dual(2, (self, value) => map(self, _ => value));
/**
 * Wrap the success value of this `Micro` effect in a `Some`.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const asSome = self => map(self, Option.some);
/**
 * Swap the error and success types of the `Micro` effect.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const flip = self => matchEffect(self, {
  onFailure: succeed,
  onSuccess: fail
});
/**
 * A more flexible version of `flatMap` that combines `map` and `flatMap` into a
 * single API.
 *
 * It also lets you directly pass a `Micro` effect, which will be executed after
 * the current effect.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const andThen = /*#__PURE__*/dual(2, (self, f) => flatMap(self, a => {
  const value = isMicro(f) ? f : typeof f === "function" ? f(a) : f;
  return isMicro(value) ? value : succeed(value);
}));
/**
 * Execute a side effect from the success value of the `Micro` effect.
 *
 * It is similar to the `andThen` api, but the success value is ignored.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const tap = /*#__PURE__*/dual(2, (self, f) => flatMap(self, a => {
  const value = isMicro(f) ? f : typeof f === "function" ? f(a) : f;
  return isMicro(value) ? as(value, a) : succeed(a);
}));
/**
 * Replace the success value of the `Micro` effect with `void`.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const asVoid = self => flatMap(self, _ => exitVoid);
/**
 * Access the `MicroExit` of the given `Micro` effect.
 *
 * @since 3.4.6
 * @experimental
 * @category mapping & sequencing
 */
export const exit = self => matchCause(self, {
  onFailure: exitFailCause,
  onSuccess: exitSucceed
});
/**
 * Replace the error type of the given `Micro` with the full `MicroCause` object.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const sandbox = self => catchAllCause(self, fail);
/**
 * Returns an effect that races all the specified effects,
 * yielding the value of the first effect to succeed with a value. Losers of
 * the race will be interrupted immediately
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export const raceAll = all => withMicroFiber(parent => async(resume => {
  const effects = Arr.fromIterable(all);
  const len = effects.length;
  let doneCount = 0;
  let done = false;
  const fibers = new Set();
  const causes = [];
  const onExit = exit => {
    doneCount++;
    if (exit._tag === "Failure") {
      causes.push(exit.cause);
      if (doneCount >= len) {
        resume(failCause(causes[0]));
      }
      return;
    }
    done = true;
    resume(fibers.size === 0 ? exit : flatMap(uninterruptible(fiberInterruptAll(fibers)), () => exit));
  };
  for (let i = 0; i < len; i++) {
    if (done) break;
    const fiber = unsafeFork(parent, interruptible(effects[i]), true, true);
    fibers.add(fiber);
    fiber.addObserver(exit => {
      fibers.delete(fiber);
      onExit(exit);
    });
  }
  return fiberInterruptAll(fibers);
}));
/**
 * Returns an effect that races all the specified effects,
 * yielding the value of the first effect to succeed or fail. Losers of
 * the race will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export const raceAllFirst = all => withMicroFiber(parent => async(resume => {
  let done = false;
  const fibers = new Set();
  const onExit = exit => {
    done = true;
    resume(fibers.size === 0 ? exit : flatMap(fiberInterruptAll(fibers), () => exit));
  };
  for (const effect of all) {
    if (done) break;
    const fiber = unsafeFork(parent, interruptible(effect), true, true);
    fibers.add(fiber);
    fiber.addObserver(exit => {
      fibers.delete(fiber);
      onExit(exit);
    });
  }
  return fiberInterruptAll(fibers);
}));
/**
 * Returns an effect that races two effects, yielding the value of the first
 * effect to succeed. Losers of the race will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export const race = /*#__PURE__*/dual(2, (self, that) => raceAll([self, that]));
/**
 * Returns an effect that races two effects, yielding the value of the first
 * effect to succeed *or* fail. Losers of the race will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export const raceFirst = /*#__PURE__*/dual(2, (self, that) => raceAllFirst([self, that]));
/**
 * Map the success value of this `Micro` effect to another `Micro` effect, then
 * flatten the result.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const flatMap = /*#__PURE__*/dual(2, (self, f) => {
  const onSuccess = Object.create(OnSuccessProto);
  onSuccess[args] = self;
  onSuccess[successCont] = f;
  return onSuccess;
});
const OnSuccessProto = /*#__PURE__*/makePrimitiveProto({
  op: "OnSuccess",
  eval(fiber) {
    fiber._stack.push(this);
    return this[args];
  }
});
// ----------------------------------------------------------------------------
// mapping & sequencing
// ----------------------------------------------------------------------------
/**
 * Flattens any nested `Micro` effects, merging the error and requirement types.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const flatten = self => flatMap(self, identity);
/**
 * Transforms the success value of the `Micro` effect with the specified
 * function.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const map = /*#__PURE__*/dual(2, (self, f) => flatMap(self, a => succeed(f(a))));
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const isMicroExit = u => hasProperty(u, MicroExitTypeId);
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitSucceed = succeed;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitFailCause = failCause;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitInterrupt = /*#__PURE__*/exitFailCause(/*#__PURE__*/causeInterrupt());
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitFail = e => exitFailCause(causeFail(e));
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitDie = defect => exitFailCause(causeDie(defect));
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitIsSuccess = self => self._tag === "Success";
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitIsFailure = self => self._tag === "Failure";
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitIsInterrupt = self => exitIsFailure(self) && self.cause._tag === "Interrupt";
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitIsFail = self => exitIsFailure(self) && self.cause._tag === "Fail";
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitIsDie = self => exitIsFailure(self) && self.cause._tag === "Die";
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitVoid = /*#__PURE__*/exitSucceed(void 0);
/**
 * @since 3.11.0
 * @experimental
 * @category MicroExit
 */
export const exitVoidAll = exits => {
  for (const exit of exits) {
    if (exit._tag === "Failure") {
      return exit;
    }
  }
  return exitVoid;
};
const setImmediate = "setImmediate" in globalThis ? globalThis.setImmediate : f => setTimeout(f, 0);
/**
 * @since 3.5.9
 * @experimental
 * @category scheduler
 */
export class MicroSchedulerDefault {
  tasks = [];
  running = false;
  /**
   * @since 3.5.9
   */
  scheduleTask(task, _priority) {
    this.tasks.push(task);
    if (!this.running) {
      this.running = true;
      setImmediate(this.afterScheduled);
    }
  }
  /**
   * @since 3.5.9
   */
  afterScheduled = () => {
    this.running = false;
    this.runTasks();
  };
  /**
   * @since 3.5.9
   */
  runTasks() {
    const tasks = this.tasks;
    this.tasks = [];
    for (let i = 0, len = tasks.length; i < len; i++) {
      tasks[i]();
    }
  }
  /**
   * @since 3.5.9
   */
  shouldYield(fiber) {
    return fiber.currentOpCount >= fiber.getRef(MaxOpsBeforeYield);
  }
  /**
   * @since 3.5.9
   */
  flush() {
    while (this.tasks.length > 0) {
      this.runTasks();
    }
  }
}
/**
 * Access the given `Context.Tag` from the environment.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export const service = tag => withMicroFiber(fiber => succeed(Context.unsafeGet(fiber.context, tag)));
/**
 * Access the given `Context.Tag` from the environment, without tracking the
 * dependency at the type level.
 *
 * It will return an `Option` of the service, depending on whether it is
 * available in the environment or not.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export const serviceOption = tag => withMicroFiber(fiber => succeed(Context.getOption(fiber.context, tag)));
/**
 * Update the Context with the given mapping function.
 *
 * @since 3.11.0
 * @experimental
 * @category environment
 */
export const updateContext = /*#__PURE__*/dual(2, (self, f) => withMicroFiber(fiber => {
  const prev = fiber.context;
  fiber.context = f(prev);
  return onExit(self, () => {
    fiber.context = prev;
    return void_;
  });
}));
/**
 * Update the service for the given `Context.Tag` in the environment.
 *
 * @since 3.11.0
 * @experimental
 * @category environment
 */
export const updateService = /*#__PURE__*/dual(3, (self, tag, f) => withMicroFiber(fiber => {
  const prev = Context.unsafeGet(fiber.context, tag);
  fiber.context = Context.add(fiber.context, tag, f(prev));
  return onExit(self, () => {
    fiber.context = Context.add(fiber.context, tag, prev);
    return void_;
  });
}));
/**
 * Access the current `Context` from the environment.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export const context = () => getContext;
const getContext = /*#__PURE__*/withMicroFiber(fiber => succeed(fiber.context));
/**
 * Merge the given `Context` with the current context.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export const provideContext = /*#__PURE__*/dual(2, (self, provided) => updateContext(self, Context.merge(provided)));
/**
 * Add the provided service to the current context.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export const provideService = /*#__PURE__*/dual(3, (self, tag, service) => updateContext(self, Context.add(tag, service)));
/**
 * Create a service using the provided `Micro` effect, and add it to the
 * current context.
 *
 * @since 3.4.6
 * @experimental
 * @category environment
 */
export const provideServiceEffect = /*#__PURE__*/dual(3, (self, tag, acquire) => flatMap(acquire, service => provideService(self, tag, service)));
// ========================================================================
// References
// ========================================================================
/**
 * @since 3.11.0
 * @experimental
 * @category references
 */
export class MaxOpsBeforeYield extends /*#__PURE__*/Context.Reference()("effect/Micro/currentMaxOpsBeforeYield", {
  defaultValue: () => 2048
}) {}
/**
 * @since 3.11.0
 * @experimental
 * @category environment refs
 */
export class CurrentConcurrency extends /*#__PURE__*/Context.Reference()("effect/Micro/currentConcurrency", {
  defaultValue: () => "unbounded"
}) {}
/**
 * @since 3.11.0
 * @experimental
 * @category environment refs
 */
export class CurrentScheduler extends /*#__PURE__*/Context.Reference()("effect/Micro/currentScheduler", {
  defaultValue: () => new MicroSchedulerDefault()
}) {}
/**
 * If you have a `Micro` that uses `concurrency: "inherit"`, you can use this
 * api to control the concurrency of that `Micro` when it is run.
 *
 * @example
 * ```ts
 * import * as Micro from "effect/Micro"
 *
 * Micro.forEach([1, 2, 3], (n) => Micro.succeed(n), {
 *   concurrency: "inherit"
 * }).pipe(
 *   Micro.withConcurrency(2) // use a concurrency of 2
 * )
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category environment refs
 */
export const withConcurrency = /*#__PURE__*/dual(2, (self, concurrency) => provideService(self, CurrentConcurrency, concurrency));
// ----------------------------------------------------------------------------
// zipping
// ----------------------------------------------------------------------------
/**
 * Combine two `Micro` effects into a single effect that produces a tuple of
 * their results.
 *
 * @since 3.4.0
 * @experimental
 * @category zipping
 */
export const zip = /*#__PURE__*/dual(args => isMicro(args[1]), (self, that, options) => zipWith(self, that, (a, a2) => [a, a2], options));
/**
 * The `Micro.zipWith` function combines two `Micro` effects and allows you to
 * apply a function to the results of the combined effects, transforming them
 * into a single value.
 *
 * @since 3.4.3
 * @experimental
 * @category zipping
 */
export const zipWith = /*#__PURE__*/dual(args => isMicro(args[1]), (self, that, f, options) => options?.concurrent
// Use `all` exclusively for concurrent cases, as it introduces additional overhead due to the management of concurrency
? map(all([self, that], {
  concurrency: 2
}), ([a, a2]) => f(a, a2)) : flatMap(self, a => map(that, a2 => f(a, a2))));
// ----------------------------------------------------------------------------
// filtering & conditionals
// ----------------------------------------------------------------------------
/**
 * Filter the specified effect with the provided function, failing with specified
 * `MicroCause` if the predicate fails.
 *
 * In addition to the filtering capabilities discussed earlier, you have the option to further
 * refine and narrow down the type of the success channel by providing a
 *
 * @since 3.4.0
 * @experimental
 * @category filtering & conditionals
 */
export const filterOrFailCause = /*#__PURE__*/dual(args => isMicro(args[0]), (self, refinement, orFailWith) => flatMap(self, a => refinement(a) ? succeed(a) : failCause(orFailWith(a))));
/**
 * Filter the specified effect with the provided function, failing with specified
 * error if the predicate fails.
 *
 * In addition to the filtering capabilities discussed earlier, you have the option to further
 * refine and narrow down the type of the success channel by providing a
 *
 * @since 3.4.0
 * @experimental
 * @category filtering & conditionals
 */
export const filterOrFail = /*#__PURE__*/dual(args => isMicro(args[0]), (self, refinement, orFailWith) => flatMap(self, a => refinement(a) ? succeed(a) : fail(orFailWith(a))));
/**
 * The moral equivalent of `if (p) exp`.
 *
 * @since 3.4.0
 * @experimental
 * @category filtering & conditionals
 */
export const when = /*#__PURE__*/dual(2, (self, condition) => flatMap(isMicro(condition) ? condition : sync(condition), pass => pass ? asSome(self) : succeedNone));
// ----------------------------------------------------------------------------
// repetition
// ----------------------------------------------------------------------------
/**
 * Repeat the given `Micro` using the provided options.
 *
 * The `while` predicate will be checked after each iteration, and can use the
 * fall `MicroExit` of the effect to determine if the repetition should continue.
 *
 * @since 3.4.6
 * @experimental
 * @category repetition
 */
export const repeatExit = /*#__PURE__*/dual(2, (self, options) => suspend(() => {
  const startedAt = options.schedule ? Date.now() : 0;
  let attempt = 0;
  const loop = flatMap(exit(self), exit => {
    if (options.while !== undefined && !options.while(exit)) {
      return exit;
    } else if (options.times !== undefined && attempt >= options.times) {
      return exit;
    }
    attempt++;
    let delayEffect = yieldNow;
    if (options.schedule !== undefined) {
      const elapsed = Date.now() - startedAt;
      const duration = options.schedule(attempt, elapsed);
      if (Option.isNone(duration)) {
        return exit;
      }
      delayEffect = sleep(duration.value);
    }
    return flatMap(delayEffect, () => loop);
  });
  return loop;
}));
/**
 * Repeat the given `Micro` effect using the provided options. Only successful
 * results will be repeated.
 *
 * @since 3.4.0
 * @experimental
 * @category repetition
 */
export const repeat = /*#__PURE__*/dual(args => isMicro(args[0]), (self, options) => repeatExit(self, {
  ...options,
  while: exit => exit._tag === "Success" && (options?.while === undefined || options.while(exit.value))
}));
/**
 * Replicates the given effect `n` times.
 *
 * @since 3.11.0
 * @experimental
 * @category repetition
 */
export const replicate = /*#__PURE__*/dual(2, (self, n) => Array.from({
  length: n
}, () => self));
/**
 * Performs this effect the specified number of times and collects the
 * results.
 *
 * @since 3.11.0
 * @category repetition
 */
export const replicateEffect = /*#__PURE__*/dual(args => isMicro(args[0]), (self, n, options) => all(replicate(self, n), options));
/**
 * Repeat the given `Micro` effect forever, only stopping if the effect fails.
 *
 * @since 3.4.0
 * @experimental
 * @category repetition
 */
export const forever = self => repeat(self);
/**
 * Create a `MicroSchedule` that will stop repeating after the specified number
 * of attempts.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleRecurs = n => attempt => attempt <= n ? Option.some(0) : Option.none();
/**
 * Create a `MicroSchedule` that will generate a constant delay.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleSpaced = millis => () => Option.some(millis);
/**
 * Create a `MicroSchedule` that will generate a delay with an exponential backoff.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleExponential = (baseMillis, factor = 2) => attempt => Option.some(Math.pow(factor, attempt) * baseMillis);
/**
 * Returns a new `MicroSchedule` with an added calculated delay to each delay
 * returned by this schedule.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleAddDelay = /*#__PURE__*/dual(2, (self, f) => (attempt, elapsed) => Option.map(self(attempt, elapsed), duration => duration + f()));
/**
 * Transform a `MicroSchedule` to one that will have a delay that will never exceed
 * the specified maximum.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleWithMaxDelay = /*#__PURE__*/dual(2, (self, max) => (attempt, elapsed) => Option.map(self(attempt, elapsed), duration => Math.min(duration, max)));
/**
 * Transform a `MicroSchedule` to one that will stop repeating after the specified
 * amount of time.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleWithMaxElapsed = /*#__PURE__*/dual(2, (self, max) => (attempt, elapsed) => elapsed < max ? self(attempt, elapsed) : Option.none());
/**
 * Combines two `MicroSchedule`s, by recurring if either schedule wants to
 * recur, using the minimum of the two durations between recurrences.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleUnion = /*#__PURE__*/dual(2, (self, that) => (attempt, elapsed) => Option.zipWith(self(attempt, elapsed), that(attempt, elapsed), (d1, d2) => Math.min(d1, d2)));
/**
 * Combines two `MicroSchedule`s, by recurring only if both schedules want to
 * recur, using the maximum of the two durations between recurrences.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleIntersect = /*#__PURE__*/dual(2, (self, that) => (attempt, elapsed) => Option.zipWith(self(attempt, elapsed), that(attempt, elapsed), (d1, d2) => Math.max(d1, d2)));
// ----------------------------------------------------------------------------
// error handling
// ----------------------------------------------------------------------------
/**
 * Catch the full `MicroCause` object of the given `Micro` effect, allowing you to
 * recover from any kind of cause.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const catchAllCause = /*#__PURE__*/dual(2, (self, f) => {
  const onFailure = Object.create(OnFailureProto);
  onFailure[args] = self;
  onFailure[failureCont] = f;
  return onFailure;
});
const OnFailureProto = /*#__PURE__*/makePrimitiveProto({
  op: "OnFailure",
  eval(fiber) {
    fiber._stack.push(this);
    return this[args];
  }
});
/**
 * Selectively catch a `MicroCause` object of the given `Micro` effect,
 * using the provided predicate to determine if the failure should be caught.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const catchCauseIf = /*#__PURE__*/dual(3, (self, predicate, f) => catchAllCause(self, cause => predicate(cause) ? f(cause) : failCause(cause)));
/**
 * Catch the error of the given `Micro` effect, allowing you to recover from it.
 *
 * It only catches expected errors.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const catchAll = /*#__PURE__*/dual(2, (self, f) => catchCauseIf(self, causeIsFail, cause => f(cause.error)));
/**
 * Catch any unexpected errors of the given `Micro` effect, allowing you to recover from them.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const catchAllDefect = /*#__PURE__*/dual(2, (self, f) => catchCauseIf(self, causeIsDie, die => f(die.defect)));
/**
 * Perform a side effect using the full `MicroCause` object of the given `Micro`.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const tapErrorCause = /*#__PURE__*/dual(2, (self, f) => tapErrorCauseIf(self, constTrue, f));
/**
 * Perform a side effect using if a `MicroCause` object matches the specified
 * predicate.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const tapErrorCauseIf = /*#__PURE__*/dual(3, (self, refinement, f) => catchCauseIf(self, refinement, cause => andThen(f(cause), failCause(cause))));
/**
 * Perform a side effect from expected errors of the given `Micro`.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const tapError = /*#__PURE__*/dual(2, (self, f) => tapErrorCauseIf(self, causeIsFail, fail => f(fail.error)));
/**
 * Perform a side effect from unexpected errors of the given `Micro`.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const tapDefect = /*#__PURE__*/dual(2, (self, f) => tapErrorCauseIf(self, causeIsDie, die => f(die.defect)));
/**
 * Catch any expected errors that match the specified predicate.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const catchIf = /*#__PURE__*/dual(3, (self, predicate, f) => catchCauseIf(self, f => causeIsFail(f) && predicate(f.error), fail => f(fail.error)));
/**
 * Recovers from the specified tagged error.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const catchTag = /*#__PURE__*/dual(3, (self, k, f) => catchIf(self, isTagged(k), f));
/**
 * Transform the full `MicroCause` object of the given `Micro` effect.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const mapErrorCause = /*#__PURE__*/dual(2, (self, f) => catchAllCause(self, cause => failCause(f(cause))));
/**
 * Transform any expected errors of the given `Micro` effect.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const mapError = /*#__PURE__*/dual(2, (self, f) => catchAll(self, error => fail(f(error))));
/**
 * Elevate any expected errors of the given `Micro` effect to unexpected errors,
 * resulting in an error type of `never`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const orDie = self => catchAll(self, die);
/**
 * Recover from all errors by succeeding with the given value.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const orElseSucceed = /*#__PURE__*/dual(2, (self, f) => catchAll(self, _ => sync(f)));
/**
 * Ignore any expected errors of the given `Micro` effect, returning `void`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const ignore = self => matchEffect(self, {
  onFailure: _ => void_,
  onSuccess: _ => void_
});
/**
 * Ignore any expected errors of the given `Micro` effect, returning `void`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const ignoreLogged = self => matchEffect(self, {
  // eslint-disable-next-line no-console
  onFailure: error => sync(() => console.error(error)),
  onSuccess: _ => void_
});
/**
 * Replace the success value of the given `Micro` effect with an `Option`,
 * wrapping the success value in `Some` and returning `None` if the effect fails
 * with an expected error.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const option = self => match(self, {
  onFailure: Option.none,
  onSuccess: Option.some
});
/**
 * Replace the success value of the given `Micro` effect with an `Either`,
 * wrapping the success value in `Right` and wrapping any expected errors with
 * a `Left`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const either = self => match(self, {
  onFailure: Either.left,
  onSuccess: Either.right
});
/**
 * Retry the given `Micro` effect using the provided options.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const retry = /*#__PURE__*/dual(args => isMicro(args[0]), (self, options) => repeatExit(self, {
  ...options,
  while: exit => exit._tag === "Failure" && exit.cause._tag === "Fail" && (options?.while === undefined || options.while(exit.cause.error))
}));
/**
 * Add a stack trace to any failures that occur in the effect. The trace will be
 * added to the `traces` field of the `MicroCause` object.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const withTrace = function () {
  const prevLimit = globalThis.Error.stackTraceLimit;
  globalThis.Error.stackTraceLimit = 2;
  const error = new globalThis.Error();
  globalThis.Error.stackTraceLimit = prevLimit;
  function generate(name, cause) {
    const stack = error.stack;
    if (!stack) {
      return cause;
    }
    const line = stack.split("\n")[2]?.trim().replace(/^at /, "");
    if (!line) {
      return cause;
    }
    const lineMatch = line.match(/\((.*)\)$/);
    return causeWithTrace(cause, `at ${name} (${lineMatch ? lineMatch[1] : line})`);
  }
  const f = name => self => onError(self, cause => failCause(generate(name, cause)));
  if (arguments.length === 2) {
    return f(arguments[1])(arguments[0]);
  }
  return f(arguments[0]);
};
// ----------------------------------------------------------------------------
// pattern matching
// ----------------------------------------------------------------------------
/**
 * @since 3.4.6
 * @experimental
 * @category pattern matching
 */
export const matchCauseEffect = /*#__PURE__*/dual(2, (self, options) => {
  const primitive = Object.create(OnSuccessAndFailureProto);
  primitive[args] = self;
  primitive[successCont] = options.onSuccess;
  primitive[failureCont] = options.onFailure;
  return primitive;
});
const OnSuccessAndFailureProto = /*#__PURE__*/makePrimitiveProto({
  op: "OnSuccessAndFailure",
  eval(fiber) {
    fiber._stack.push(this);
    return this[args];
  }
});
/**
 * @since 3.4.6
 * @experimental
 * @category pattern matching
 */
export const matchCause = /*#__PURE__*/dual(2, (self, options) => matchCauseEffect(self, {
  onFailure: cause => sync(() => options.onFailure(cause)),
  onSuccess: value => sync(() => options.onSuccess(value))
}));
/**
 * @since 3.4.6
 * @experimental
 * @category pattern matching
 */
export const matchEffect = /*#__PURE__*/dual(2, (self, options) => matchCauseEffect(self, {
  onFailure: cause => cause._tag === "Fail" ? options.onFailure(cause.error) : failCause(cause),
  onSuccess: options.onSuccess
}));
/**
 * @since 3.4.0
 * @experimental
 * @category pattern matching
 */
export const match = /*#__PURE__*/dual(2, (self, options) => matchEffect(self, {
  onFailure: error => sync(() => options.onFailure(error)),
  onSuccess: value => sync(() => options.onSuccess(value))
}));
// ----------------------------------------------------------------------------
// delays & timeouts
// ----------------------------------------------------------------------------
/**
 * Create a `Micro` effect that will sleep for the specified duration.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export const sleep = millis => async(resume => {
  const timeout = setTimeout(() => {
    resume(void_);
  }, millis);
  return sync(() => {
    clearTimeout(timeout);
  });
});
/**
 * Returns an effect that will delay the execution of this effect by the
 * specified duration.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export const delay = /*#__PURE__*/dual(2, (self, millis) => andThen(sleep(millis), self));
/**
 * Returns an effect that will timeout this effect, that will execute the
 * fallback effect if the timeout elapses before the effect has produced a value.
 *
 * If the timeout elapses, the running effect will be safely interrupted.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export const timeoutOrElse = /*#__PURE__*/dual(2, (self, options) => raceFirst(self, andThen(interruptible(sleep(options.duration)), options.onTimeout)));
/**
 * Returns an effect that will timeout this effect, that will fail with a
 * `TimeoutException` if the timeout elapses before the effect has produced a
 * value.
 *
 * If the timeout elapses, the running effect will be safely interrupted.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export const timeout = /*#__PURE__*/dual(2, (self, millis) => timeoutOrElse(self, {
  duration: millis,
  onTimeout: () => fail(new TimeoutException())
}));
/**
 * Returns an effect that will timeout this effect, succeeding with a `None`
 * if the timeout elapses before the effect has produced a value; and `Some` of
 * the produced value otherwise.
 *
 * If the timeout elapses, the running effect will be safely interrupted.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export const timeoutOption = /*#__PURE__*/dual(2, (self, millis) => raceFirst(asSome(self), as(interruptible(sleep(millis)), Option.none())));
// ----------------------------------------------------------------------------
// resources & finalization
// ----------------------------------------------------------------------------
/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const MicroScopeTypeId = /*#__PURE__*/Symbol.for("effect/Micro/MicroScope");
/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const MicroScope = /*#__PURE__*/Context.GenericTag("effect/Micro/MicroScope");
class MicroScopeImpl {
  [MicroScopeTypeId];
  state = {
    _tag: "Open",
    finalizers: /*#__PURE__*/new Set()
  };
  constructor() {
    this[MicroScopeTypeId] = MicroScopeTypeId;
  }
  unsafeAddFinalizer(finalizer) {
    if (this.state._tag === "Open") {
      this.state.finalizers.add(finalizer);
    }
  }
  addFinalizer(finalizer) {
    return suspend(() => {
      if (this.state._tag === "Open") {
        this.state.finalizers.add(finalizer);
        return void_;
      }
      return finalizer(this.state.exit);
    });
  }
  unsafeRemoveFinalizer(finalizer) {
    if (this.state._tag === "Open") {
      this.state.finalizers.delete(finalizer);
    }
  }
  close(microExit) {
    return suspend(() => {
      if (this.state._tag === "Open") {
        const finalizers = Array.from(this.state.finalizers).reverse();
        this.state = {
          _tag: "Closed",
          exit: microExit
        };
        return flatMap(forEach(finalizers, finalizer => exit(finalizer(microExit))), exitVoidAll);
      }
      return void_;
    });
  }
  get fork() {
    return sync(() => {
      const newScope = new MicroScopeImpl();
      if (this.state._tag === "Closed") {
        newScope.state = this.state;
        return newScope;
      }
      function fin(exit) {
        return newScope.close(exit);
      }
      this.state.finalizers.add(fin);
      newScope.unsafeAddFinalizer(_ => sync(() => this.unsafeRemoveFinalizer(fin)));
      return newScope;
    });
  }
}
/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const scopeMake = /*#__PURE__*/sync(() => new MicroScopeImpl());
/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const scopeUnsafeMake = () => new MicroScopeImpl();
/**
 * Access the current `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const scope = /*#__PURE__*/service(MicroScope);
/**
 * Provide a `MicroScope` to an effect.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const provideScope = /*#__PURE__*/dual(2, (self, scope) => provideService(self, MicroScope, scope));
/**
 * Provide a `MicroScope` to the given effect, closing it after the effect has
 * finished executing.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const scoped = self => suspend(() => {
  const scope = new MicroScopeImpl();
  return onExit(provideService(self, MicroScope, scope), exit => scope.close(exit));
});
/**
 * Create a resource with a cleanup `Micro` effect, ensuring the cleanup is
 * executed when the `MicroScope` is closed.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const acquireRelease = (acquire, release) => uninterruptible(flatMap(scope, scope => tap(acquire, a => scope.addFinalizer(exit => release(a, exit)))));
/**
 * Add a finalizer to the current `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const addFinalizer = finalizer => flatMap(scope, scope => scope.addFinalizer(finalizer));
/**
 * When the `Micro` effect is completed, run the given finalizer effect with the
 * `MicroExit` of the executed effect.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export const onExit = /*#__PURE__*/dual(2, (self, f) => uninterruptibleMask(restore => matchCauseEffect(restore(self), {
  onFailure: cause => flatMap(f(exitFailCause(cause)), () => failCause(cause)),
  onSuccess: a => flatMap(f(exitSucceed(a)), () => succeed(a))
})));
/**
 * Regardless of the result of the this `Micro` effect, run the finalizer effect.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const ensuring = /*#__PURE__*/dual(2, (self, finalizer) => onExit(self, _ => finalizer));
/**
 * When the `Micro` effect is completed, run the given finalizer effect if it
 * matches the specified predicate.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export const onExitIf = /*#__PURE__*/dual(3, (self, refinement, f) => onExit(self, exit => refinement(exit) ? f(exit) : exitVoid));
/**
 * When the `Micro` effect fails, run the given finalizer effect with the
 * `MicroCause` of the executed effect.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export const onError = /*#__PURE__*/dual(2, (self, f) => onExitIf(self, exitIsFailure, exit => f(exit.cause)));
/**
 * If this `Micro` effect is aborted, run the finalizer effect.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export const onInterrupt = /*#__PURE__*/dual(2, (self, finalizer) => onExitIf(self, exitIsInterrupt, _ => finalizer));
/**
 * Acquire a resource, use it, and then release the resource when the `use`
 * effect has completed.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const acquireUseRelease = (acquire, use, release) => uninterruptibleMask(restore => flatMap(acquire, a => flatMap(exit(restore(use(a))), exit => andThen(release(a, exit), exit))));
// ----------------------------------------------------------------------------
// interruption
// ----------------------------------------------------------------------------
/**
 * Abort the current `Micro` effect.
 *
 * @since 3.4.6
 * @experimental
 * @category interruption
 */
export const interrupt = /*#__PURE__*/failCause(/*#__PURE__*/causeInterrupt());
/**
 * Flag the effect as uninterruptible, which means that when the effect is
 * interrupted, it will be allowed to continue running until completion.
 *
 * @since 3.4.0
 * @experimental
 * @category flags
 */
export const uninterruptible = self => withMicroFiber(fiber => {
  if (!fiber.interruptible) return self;
  fiber.interruptible = false;
  fiber._stack.push(setInterruptible(true));
  return self;
});
const setInterruptible = /*#__PURE__*/makePrimitive({
  op: "SetInterruptible",
  ensure(fiber) {
    fiber.interruptible = this[args];
    if (fiber._interrupted && fiber.interruptible) {
      return () => exitInterrupt;
    }
  }
});
/**
 * Flag the effect as interruptible, which means that when the effect is
 * interrupted, it will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category flags
 */
export const interruptible = self => withMicroFiber(fiber => {
  if (fiber.interruptible) return self;
  fiber.interruptible = true;
  fiber._stack.push(setInterruptible(false));
  if (fiber._interrupted) return exitInterrupt;
  return self;
});
/**
 * Wrap the given `Micro` effect in an uninterruptible region, preventing the
 * effect from being aborted.
 *
 * You can use the `restore` function to restore a `Micro` effect to the
 * interruptibility state before the `uninterruptibleMask` was applied.
 *
 * @example
 * ```ts
 * import * as Micro from "effect/Micro"
 *
 * Micro.uninterruptibleMask((restore) =>
 *   Micro.sleep(1000).pipe( // uninterruptible
 *     Micro.andThen(restore(Micro.sleep(1000))) // interruptible
 *   )
 * )
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category interruption
 */
export const uninterruptibleMask = f => withMicroFiber(fiber => {
  if (!fiber.interruptible) return f(identity);
  fiber.interruptible = false;
  fiber._stack.push(setInterruptible(true));
  return f(interruptible);
});
/**
 * Runs all the provided effects in sequence respecting the structure provided in input.
 *
 * Supports multiple arguments, a single argument tuple / array or record / struct.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export const all = (arg, options) => {
  if (Array.isArray(arg) || isIterable(arg)) {
    return forEach(arg, identity, options);
  } else if (options?.discard) {
    return forEach(Object.values(arg), identity, options);
  }
  return suspend(() => {
    const out = {};
    return as(forEach(Object.entries(arg), ([key, effect]) => map(effect, value => {
      out[key] = value;
    }), {
      discard: true,
      concurrency: options?.concurrency
    }), out);
  });
};
/**
 * @since 3.11.0
 * @experimental
 * @category collecting & elements
 */
export const whileLoop = /*#__PURE__*/makePrimitive({
  op: "While",
  contA(value, fiber) {
    this[args].step(value);
    if (this[args].while()) {
      fiber._stack.push(this);
      return this[args].body();
    }
    return exitVoid;
  },
  eval(fiber) {
    if (this[args].while()) {
      fiber._stack.push(this);
      return this[args].body();
    }
    return exitVoid;
  }
});
/**
 * For each element of the provided iterable, run the effect and collect the
 * results.
 *
 * If the `discard` option is set to `true`, the results will be discarded and
 * the effect will return `void`.
 *
 * The `concurrency` option can be set to control how many effects are run
 * concurrently. By default, the effects are run sequentially.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export const forEach = (iterable, f, options) => withMicroFiber(parent => {
  const concurrencyOption = options?.concurrency === "inherit" ? parent.getRef(CurrentConcurrency) : options?.concurrency ?? 1;
  const concurrency = concurrencyOption === "unbounded" ? Number.POSITIVE_INFINITY : Math.max(1, concurrencyOption);
  const items = Arr.fromIterable(iterable);
  let length = items.length;
  if (length === 0) {
    return options?.discard ? void_ : succeed([]);
  }
  const out = options?.discard ? undefined : new Array(length);
  let index = 0;
  if (concurrency === 1) {
    return as(whileLoop({
      while: () => index < items.length,
      body: () => f(items[index], index),
      step: out ? b => out[index++] = b : _ => index++
    }), out);
  }
  return async(resume => {
    const fibers = new Set();
    let result = undefined;
    let inProgress = 0;
    let doneCount = 0;
    let pumping = false;
    let interrupted = false;
    function pump() {
      pumping = true;
      while (inProgress < concurrency && index < length) {
        const currentIndex = index;
        const item = items[currentIndex];
        index++;
        inProgress++;
        try {
          const child = unsafeFork(parent, f(item, currentIndex), true, true);
          fibers.add(child);
          child.addObserver(exit => {
            fibers.delete(child);
            if (interrupted) {
              return;
            } else if (exit._tag === "Failure") {
              if (result === undefined) {
                result = exit;
                length = index;
                fibers.forEach(fiber => fiber.unsafeInterrupt());
              }
            } else if (out !== undefined) {
              out[currentIndex] = exit.value;
            }
            doneCount++;
            inProgress--;
            if (doneCount === length) {
              resume(result ?? succeed(out));
            } else if (!pumping && inProgress < concurrency) {
              pump();
            }
          });
        } catch (err) {
          result = exitDie(err);
          length = index;
          fibers.forEach(fiber => fiber.unsafeInterrupt());
        }
      }
      pumping = false;
    }
    pump();
    return suspend(() => {
      interrupted = true;
      index = length;
      return fiberInterruptAll(fibers);
    });
  });
});
/**
 * Effectfully filter the elements of the provided iterable.
 *
 * Use the `concurrency` option to control how many elements are processed
 * concurrently.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export const filter = (iterable, f, options) => filterMap(iterable, a => map(f(a), pass => {
  pass = options?.negate ? !pass : pass;
  return pass ? Option.some(a) : Option.none();
}), options);
/**
 * Effectfully filter the elements of the provided iterable.
 *
 * Use the `concurrency` option to control how many elements are processed
 * concurrently.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export const filterMap = (iterable, f, options) => suspend(() => {
  const out = [];
  return as(forEach(iterable, a => map(f(a), o => {
    if (o._tag === "Some") {
      out.push(o.value);
    }
  }), {
    discard: true,
    concurrency: options?.concurrency
  }), out);
});
// ----------------------------------------------------------------------------
// do notation
// ----------------------------------------------------------------------------
/**
 * Start a do notation block.
 *
 * @since 3.4.0
 * @experimental
 * @category do notation
 */
export const Do = /*#__PURE__*/succeed({});
/**
 * Bind the success value of this `Micro` effect to the provided name.
 *
 * @since 3.4.0
 * @experimental
 * @category do notation
 */
export const bindTo = /*#__PURE__*/doNotation.bindTo(map);
/**
 * Bind the success value of this `Micro` effect to the provided name.
 *
 * @since 3.4.0
 * @experimental
 * @category do notation
 */
export const bind = /*#__PURE__*/doNotation.bind(map, flatMap);
const let_ = /*#__PURE__*/doNotation.let_(map);
export {
/**
 * Bind the result of a synchronous computation to the given name.
 *
 * @since 3.4.0
 * @experimental
 * @category do notation
 */
let_ as let };
// ----------------------------------------------------------------------------
// fibers & forking
// ----------------------------------------------------------------------------
/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * When the parent `Micro` finishes, this `Micro` will be aborted.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export const fork = self => withMicroFiber(fiber => {
  fiberMiddleware.interruptChildren ??= fiberInterruptChildren;
  return succeed(unsafeFork(fiber, self));
});
const unsafeFork = (parent, effect, immediate = false, daemon = false) => {
  const child = new MicroFiberImpl(parent.context, parent.interruptible);
  if (!daemon) {
    parent.children().add(child);
    child.addObserver(() => parent.children().delete(child));
  }
  if (immediate) {
    child.evaluate(effect);
  } else {
    parent.getRef(CurrentScheduler).scheduleTask(() => child.evaluate(effect), 0);
  }
  return child;
};
/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * It will not be aborted when the parent `Micro` finishes.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export const forkDaemon = self => withMicroFiber(fiber => succeed(unsafeFork(fiber, self, false, true)));
/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * The lifetime of the handle will be attached to the provided `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export const forkIn = /*#__PURE__*/dual(2, (self, scope) => uninterruptibleMask(restore => flatMap(scope.fork, scope => tap(restore(forkDaemon(onExit(self, exit => scope.close(exit)))), fiber => scope.addFinalizer(_ => fiberInterrupt(fiber))))));
/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * The lifetime of the handle will be attached to the current `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export const forkScoped = self => flatMap(scope, scope => forkIn(self, scope));
// ----------------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------------
/**
 * Execute the `Micro` effect and return a `MicroFiber` that can be awaited, joined,
 * or aborted.
 *
 * You can listen for the result by adding an observer using the handle's
 * `addObserver` method.
 *
 * @example
 * ```ts
 * import * as Micro from "effect/Micro"
 *
 * const handle = Micro.succeed(42).pipe(
 *   Micro.delay(1000),
 *   Micro.runFork
 * )
 *
 * handle.addObserver((exit) => {
 *   console.log(exit)
 * })
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category execution
 */
export const runFork = (effect, options) => {
  const fiber = new MicroFiberImpl(CurrentScheduler.context(options?.scheduler ?? new MicroSchedulerDefault()));
  fiber.evaluate(effect);
  if (options?.signal) {
    if (options.signal.aborted) {
      fiber.unsafeInterrupt();
    } else {
      const abort = () => fiber.unsafeInterrupt();
      options.signal.addEventListener("abort", abort, {
        once: true
      });
      fiber.addObserver(() => options.signal.removeEventListener("abort", abort));
    }
  }
  return fiber;
};
/**
 * Execute the `Micro` effect and return a `Promise` that resolves with the
 * `MicroExit` of the computation.
 *
 * @since 3.4.6
 * @experimental
 * @category execution
 */
export const runPromiseExit = (effect, options) => new Promise((resolve, _reject) => {
  const handle = runFork(effect, options);
  handle.addObserver(resolve);
});
/**
 * Execute the `Micro` effect and return a `Promise` that resolves with the
 * successful value of the computation.
 *
 * @since 3.4.0
 * @experimental
 * @category execution
 */
export const runPromise = (effect, options) => runPromiseExit(effect, options).then(exit => {
  if (exit._tag === "Failure") {
    throw exit.cause;
  }
  return exit.value;
});
/**
 * Attempt to execute the `Micro` effect synchronously and return the `MicroExit`.
 *
 * If any asynchronous effects are encountered, the function will return a
 * `CauseDie` containing the `MicroFiber`.
 *
 * @since 3.4.6
 * @experimental
 * @category execution
 */
export const runSyncExit = effect => {
  const scheduler = new MicroSchedulerDefault();
  const fiber = runFork(effect, {
    scheduler
  });
  scheduler.flush();
  return fiber._exit ?? exitDie(fiber);
};
/**
 * Attempt to execute the `Micro` effect synchronously and return the success
 * value.
 *
 * @since 3.4.0
 * @experimental
 * @category execution
 */
export const runSync = effect => {
  const exit = runSyncExit(effect);
  if (exit._tag === "Failure") throw exit.cause;
  return exit.value;
};
const YieldableError = /*#__PURE__*/function () {
  class YieldableError extends globalThis.Error {}
  // @effect-diagnostics-next-line floatingEffect:off
  Object.assign(YieldableError.prototype, MicroProto, StructuralPrototype, {
    [identifier]: "Failure",
    [evaluate]() {
      return fail(this);
    },
    toString() {
      return this.message ? `${this.name}: ${this.message}` : this.name;
    },
    toJSON() {
      return {
        ...this
      };
    },
    [NodeInspectSymbol]() {
      const stack = this.stack;
      if (stack) {
        return `${this.toString()}\n${stack.split("\n").slice(1).join("\n")}`;
      }
      return this.toString();
    }
  });
  return YieldableError;
}();
/**
 * @since 3.4.0
 * @experimental
 * @category errors
 */
export const Error = /*#__PURE__*/function () {
  return class extends YieldableError {
    constructor(args) {
      super();
      if (args) {
        Object.assign(this, args);
      }
    }
  };
}();
/**
 * @since 3.4.0
 * @experimental
 * @category errors
 */
export const TaggedError = tag => {
  class Base extends Error {
    _tag = tag;
  }
  ;
  Base.prototype.name = tag;
  return Base;
};
/**
 * Represents a checked exception which occurs when an expected element was
 * unable to be found.
 *
 * @since 3.4.4
 * @experimental
 * @category errors
 */
export class NoSuchElementException extends /*#__PURE__*/TaggedError("NoSuchElementException") {}
/**
 * Represents a checked exception which occurs when a timeout occurs.
 *
 * @since 3.4.4
 * @experimental
 * @category errors
 */
export class TimeoutException extends /*#__PURE__*/TaggedError("TimeoutException") {}
//# sourceMappingURL=Micro.js.map