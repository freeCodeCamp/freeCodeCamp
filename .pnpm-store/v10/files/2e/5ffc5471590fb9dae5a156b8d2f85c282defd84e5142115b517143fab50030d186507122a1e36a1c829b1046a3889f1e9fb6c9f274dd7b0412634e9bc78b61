import * as Arr from "../Array.js";
import * as Chunk from "../Chunk.js";
import * as Clock from "../Clock.js";
import * as Context from "../Context.js";
import * as Duration from "../Duration.js";
import * as FiberRefs from "../FiberRefs.js";
import { constFalse, constTrue, constVoid, dual, identity, pipe } from "../Function.js";
import * as HashMap from "../HashMap.js";
import * as HashSet from "../HashSet.js";
import * as List from "../List.js";
import * as LogLevel from "../LogLevel.js";
import * as LogSpan from "../LogSpan.js";
import * as Option from "../Option.js";
import * as Predicate from "../Predicate.js";
import * as Ref from "../Ref.js";
import * as Tracer from "../Tracer.js";
import { internalCall } from "../Utils.js";
import * as internalCause from "./cause.js";
import { clockTag } from "./clock.js";
import * as core from "./core.js";
import * as defaultServices from "./defaultServices.js";
import * as doNotation from "./doNotation.js";
import * as fiberRefsPatch from "./fiberRefs/patch.js";
import * as metricLabel from "./metric/label.js";
import * as runtimeFlags from "./runtimeFlags.js";
import * as internalTracer from "./tracer.js";
/* @internal */
export const annotateLogs = /*#__PURE__*/dual(args => core.isEffect(args[0]), function () {
  const args = arguments;
  return core.fiberRefLocallyWith(args[0], core.currentLogAnnotations, typeof args[1] === "string" ? HashMap.set(args[1], args[2]) : annotations => Object.entries(args[1]).reduce((acc, [key, value]) => HashMap.set(acc, key, value), annotations));
});
/* @internal */
export const asSome = self => core.map(self, Option.some);
/* @internal */
export const asSomeError = self => core.mapError(self, Option.some);
/* @internal */
export const try_ = arg => {
  let evaluate;
  let onFailure = undefined;
  if (typeof arg === "function") {
    evaluate = arg;
  } else {
    evaluate = arg.try;
    onFailure = arg.catch;
  }
  return core.suspend(() => {
    try {
      return core.succeed(internalCall(evaluate));
    } catch (error) {
      return core.fail(onFailure ? internalCall(() => onFailure(error)) : new core.UnknownException(error, "An unknown error occurred in Effect.try"));
    }
  });
};
/* @internal */
export const _catch = /*#__PURE__*/dual(3, (self, tag, options) => core.catchAll(self, e => {
  if (Predicate.hasProperty(e, tag) && e[tag] === options.failure) {
    return options.onFailure(e);
  }
  return core.fail(e);
}));
/* @internal */
export const catchAllDefect = /*#__PURE__*/dual(2, (self, f) => core.catchAllCause(self, cause => {
  const option = internalCause.find(cause, _ => internalCause.isDieType(_) ? Option.some(_) : Option.none());
  switch (option._tag) {
    case "None":
      {
        return core.failCause(cause);
      }
    case "Some":
      {
        return f(option.value.defect);
      }
  }
}));
/* @internal */
export const catchSomeCause = /*#__PURE__*/dual(2, (self, f) => core.matchCauseEffect(self, {
  onFailure: cause => {
    const option = f(cause);
    switch (option._tag) {
      case "None":
        {
          return core.failCause(cause);
        }
      case "Some":
        {
          return option.value;
        }
    }
  },
  onSuccess: core.succeed
}));
/* @internal */
export const catchSomeDefect = /*#__PURE__*/dual(2, (self, pf) => core.catchAllCause(self, cause => {
  const option = internalCause.find(cause, _ => internalCause.isDieType(_) ? Option.some(_) : Option.none());
  switch (option._tag) {
    case "None":
      {
        return core.failCause(cause);
      }
    case "Some":
      {
        const optionEffect = pf(option.value.defect);
        return optionEffect._tag === "Some" ? optionEffect.value : core.failCause(cause);
      }
  }
}));
/* @internal */
export const catchTag = /*#__PURE__*/dual(args => core.isEffect(args[0]), (self, ...args) => {
  const f = args[args.length - 1];
  let predicate;
  if (args.length === 2) {
    predicate = Predicate.isTagged(args[0]);
  } else {
    predicate = e => {
      const tag = Predicate.hasProperty(e, "_tag") ? e["_tag"] : undefined;
      if (!tag) return false;
      for (let i = 0; i < args.length - 1; i++) {
        if (args[i] === tag) return true;
      }
      return false;
    };
  }
  return core.catchIf(self, predicate, f);
});
/** @internal */
export const catchTags = /*#__PURE__*/dual(2, (self, cases) => {
  let keys;
  return core.catchIf(self, e => {
    keys ??= Object.keys(cases);
    return Predicate.hasProperty(e, "_tag") && Predicate.isString(e["_tag"]) && keys.includes(e["_tag"]);
  }, e => cases[e["_tag"]](e));
});
/* @internal */
export const cause = self => core.matchCause(self, {
  onFailure: identity,
  onSuccess: () => internalCause.empty
});
/* @internal */
export const clockWith = Clock.clockWith;
/* @internal */
export const clock = /*#__PURE__*/clockWith(core.succeed);
/* @internal */
export const delay = /*#__PURE__*/dual(2, (self, duration) => core.zipRight(Clock.sleep(duration), self));
/* @internal */
export const descriptorWith = f => core.withFiberRuntime((state, status) => f({
  id: state.id(),
  status,
  interruptors: internalCause.interruptors(state.getFiberRef(core.currentInterruptedCause))
}));
/* @internal */
export const allowInterrupt = /*#__PURE__*/descriptorWith(descriptor => HashSet.size(descriptor.interruptors) > 0 ? core.interrupt : core.void);
/* @internal */
export const descriptor = /*#__PURE__*/descriptorWith(core.succeed);
/* @internal */
export const diffFiberRefs = self => summarized(self, fiberRefs, fiberRefsPatch.diff);
/* @internal */
export const diffFiberRefsAndRuntimeFlags = self => summarized(self, core.zip(fiberRefs, core.runtimeFlags), ([refs, flags], [refsNew, flagsNew]) => [fiberRefsPatch.diff(refs, refsNew), runtimeFlags.diff(flags, flagsNew)]);
/* @internal */
export const Do = /*#__PURE__*/core.succeed({});
/* @internal */
export const bind = /*#__PURE__*/doNotation.bind(core.map, core.flatMap);
/* @internal */
export const bindTo = /*#__PURE__*/doNotation.bindTo(core.map);
/* @internal */
export const let_ = /*#__PURE__*/doNotation.let_(core.map);
/* @internal */
export const dropUntil = /*#__PURE__*/dual(2, (elements, predicate) => core.suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let dropping = core.succeed(false);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    dropping = core.flatMap(dropping, bool => {
      if (bool) {
        builder.push(a);
        return core.succeed(true);
      }
      return predicate(a, index);
    });
  }
  return core.map(dropping, () => builder);
}));
/* @internal */
export const dropWhile = /*#__PURE__*/dual(2, (elements, predicate) => core.suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let dropping = core.succeed(true);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    dropping = core.flatMap(dropping, d => core.map(d ? predicate(a, index) : core.succeed(false), b => {
      if (!b) {
        builder.push(a);
      }
      return b;
    }));
  }
  return core.map(dropping, () => builder);
}));
/* @internal */
export const contextWith = f => core.map(core.context(), f);
/* @internal */
export const eventually = self => core.orElse(self, () => core.flatMap(core.yieldNow(), () => eventually(self)));
/* @internal */
export const filterMap = /*#__PURE__*/dual(2, (elements, pf) => core.map(core.forEachSequential(elements, identity), Arr.filterMap(pf)));
/* @internal */
export const filterOrDie = /*#__PURE__*/dual(3, (self, predicate, orDieWith) => filterOrElse(self, predicate, a => core.dieSync(() => orDieWith(a))));
/* @internal */
export const filterOrDieMessage = /*#__PURE__*/dual(3, (self, predicate, message) => filterOrElse(self, predicate, () => core.dieMessage(message)));
/* @internal */
export const filterOrElse = /*#__PURE__*/dual(3, (self, predicate, orElse) => core.flatMap(self, a => predicate(a) ? core.succeed(a) : orElse(a)));
/** @internal */
export const liftPredicate = /*#__PURE__*/dual(3, (self, predicate, orFailWith) => core.suspend(() => predicate(self) ? core.succeed(self) : core.fail(orFailWith(self))));
/* @internal */
export const filterOrFail = /*#__PURE__*/dual(args => core.isEffect(args[0]), (self, predicate, orFailWith) => filterOrElse(self, predicate, a => orFailWith === undefined ? core.fail(new core.NoSuchElementException()) : core.failSync(() => orFailWith(a))));
/* @internal */
export const findFirst = /*#__PURE__*/dual(2, (elements, predicate) => core.suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const next = iterator.next();
  if (!next.done) {
    return findLoop(iterator, 0, predicate, next.value);
  }
  return core.succeed(Option.none());
}));
const findLoop = (iterator, index, f, value) => core.flatMap(f(value, index), result => {
  if (result) {
    return core.succeed(Option.some(value));
  }
  const next = iterator.next();
  if (!next.done) {
    return findLoop(iterator, index + 1, f, next.value);
  }
  return core.succeed(Option.none());
});
/* @internal */
export const firstSuccessOf = effects => core.suspend(() => {
  const list = Chunk.fromIterable(effects);
  if (!Chunk.isNonEmpty(list)) {
    return core.dieSync(() => new core.IllegalArgumentException(`Received an empty collection of effects`));
  }
  return pipe(Chunk.tailNonEmpty(list), Arr.reduce(Chunk.headNonEmpty(list), (left, right) => core.orElse(left, () => right)));
});
/* @internal */
export const flipWith = /*#__PURE__*/dual(2, (self, f) => core.flip(f(core.flip(self))));
/* @internal */
export const match = /*#__PURE__*/dual(2, (self, options) => core.matchEffect(self, {
  onFailure: e => core.succeed(options.onFailure(e)),
  onSuccess: a => core.succeed(options.onSuccess(a))
}));
/* @internal */
export const every = /*#__PURE__*/dual(2, (elements, predicate) => core.suspend(() => forAllLoop(elements[Symbol.iterator](), 0, predicate)));
const forAllLoop = (iterator, index, f) => {
  const next = iterator.next();
  return next.done ? core.succeed(true) : core.flatMap(f(next.value, index), b => b ? forAllLoop(iterator, index + 1, f) : core.succeed(b));
};
/* @internal */
export const forever = self => {
  const loop = core.flatMap(core.flatMap(self, () => core.yieldNow()), () => loop);
  return loop;
};
/* @internal */
export const fiberRefs = /*#__PURE__*/core.withFiberRuntime(state => core.succeed(state.getFiberRefs()));
/* @internal */
export const head = self => core.flatMap(self, as => {
  const iterator = as[Symbol.iterator]();
  const next = iterator.next();
  if (next.done) {
    return core.fail(new core.NoSuchElementException());
  }
  return core.succeed(next.value);
});
/* @internal */
export const ignore = self => match(self, {
  onFailure: constVoid,
  onSuccess: constVoid
});
/* @internal */
export const ignoreLogged = self => core.matchCauseEffect(self, {
  onFailure: cause => logDebug(cause, "An error was silently ignored because it is not anticipated to be useful"),
  onSuccess: () => core.void
});
/* @internal */
export const inheritFiberRefs = childFiberRefs => updateFiberRefs((parentFiberId, parentFiberRefs) => FiberRefs.joinAs(parentFiberRefs, parentFiberId, childFiberRefs));
/* @internal */
export const isFailure = self => match(self, {
  onFailure: constTrue,
  onSuccess: constFalse
});
/* @internal */
export const isSuccess = self => match(self, {
  onFailure: constFalse,
  onSuccess: constTrue
});
/* @internal */
export const iterate = (initial, options) => core.suspend(() => {
  if (options.while(initial)) {
    return core.flatMap(options.body(initial), z2 => iterate(z2, options));
  }
  return core.succeed(initial);
});
/** @internal */
export const logWithLevel = level => (...message) => {
  const levelOption = Option.fromNullable(level);
  let cause = undefined;
  for (let i = 0, len = message.length; i < len; i++) {
    const msg = message[i];
    if (internalCause.isCause(msg)) {
      if (cause !== undefined) {
        cause = internalCause.sequential(cause, msg);
      } else {
        cause = msg;
      }
      message = [...message.slice(0, i), ...message.slice(i + 1)];
      i--;
    }
  }
  if (cause === undefined) {
    cause = internalCause.empty;
  }
  return core.withFiberRuntime(fiberState => {
    fiberState.log(message, cause, levelOption);
    return core.void;
  });
};
/** @internal */
export const log = /*#__PURE__*/logWithLevel();
/** @internal */
export const logTrace = /*#__PURE__*/logWithLevel(LogLevel.Trace);
/** @internal */
export const logDebug = /*#__PURE__*/logWithLevel(LogLevel.Debug);
/** @internal */
export const logInfo = /*#__PURE__*/logWithLevel(LogLevel.Info);
/** @internal */
export const logWarning = /*#__PURE__*/logWithLevel(LogLevel.Warning);
/** @internal */
export const logError = /*#__PURE__*/logWithLevel(LogLevel.Error);
/** @internal */
export const logFatal = /*#__PURE__*/logWithLevel(LogLevel.Fatal);
/* @internal */
export const withLogSpan = /*#__PURE__*/dual(2, (effect, label) => core.flatMap(Clock.currentTimeMillis, now => core.fiberRefLocallyWith(effect, core.currentLogSpan, List.prepend(LogSpan.make(label, now)))));
/* @internal */
export const logAnnotations = /*#__PURE__*/core.fiberRefGet(core.currentLogAnnotations);
/* @internal */
export const loop = (initial, options) => options.discard ? loopDiscard(initial, options.while, options.step, options.body) : core.map(loopInternal(initial, options.while, options.step, options.body), Arr.fromIterable);
const loopInternal = (initial, cont, inc, body) => core.suspend(() => cont(initial) ? core.flatMap(body(initial), a => core.map(loopInternal(inc(initial), cont, inc, body), List.prepend(a))) : core.sync(() => List.empty()));
const loopDiscard = (initial, cont, inc, body) => core.suspend(() => cont(initial) ? core.flatMap(body(initial), () => loopDiscard(inc(initial), cont, inc, body)) : core.void);
/* @internal */
export const mapAccum = /*#__PURE__*/dual(3, (elements, initial, f) => core.suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let result = core.succeed(initial);
  let next;
  let i = 0;
  while (!(next = iterator.next()).done) {
    const index = i++;
    const value = next.value;
    result = core.flatMap(result, state => core.map(f(state, value, index), ([z, b]) => {
      builder.push(b);
      return z;
    }));
  }
  return core.map(result, z => [z, builder]);
}));
/* @internal */
export const mapErrorCause = /*#__PURE__*/dual(2, (self, f) => core.matchCauseEffect(self, {
  onFailure: c => core.failCauseSync(() => f(c)),
  onSuccess: core.succeed
}));
/* @internal */
export const memoize = self => pipe(core.deferredMake(), core.flatMap(deferred => pipe(diffFiberRefsAndRuntimeFlags(self), core.intoDeferred(deferred), once, core.map(complete => core.zipRight(complete, pipe(core.deferredAwait(deferred), core.flatMap(([patch, a]) => core.as(core.zip(patchFiberRefs(patch[0]), core.updateRuntimeFlags(patch[1])), a))))))));
/* @internal */
export const merge = self => core.matchEffect(self, {
  onFailure: e => core.succeed(e),
  onSuccess: core.succeed
});
/* @internal */
export const negate = self => core.map(self, b => !b);
/* @internal */
export const none = self => core.flatMap(self, option => {
  switch (option._tag) {
    case "None":
      return core.void;
    case "Some":
      return core.fail(new core.NoSuchElementException());
  }
});
/* @internal */
export const once = self => core.map(Ref.make(true), ref => core.asVoid(core.whenEffect(self, Ref.getAndSet(ref, false))));
/* @internal */
export const option = self => core.matchEffect(self, {
  onFailure: () => core.succeed(Option.none()),
  onSuccess: a => core.succeed(Option.some(a))
});
/* @internal */
export const orElseFail = /*#__PURE__*/dual(2, (self, evaluate) => core.orElse(self, () => core.failSync(evaluate)));
/* @internal */
export const orElseSucceed = /*#__PURE__*/dual(2, (self, evaluate) => core.orElse(self, () => core.sync(evaluate)));
/* @internal */
export const parallelErrors = self => core.matchCauseEffect(self, {
  onFailure: cause => {
    const errors = Arr.fromIterable(internalCause.failures(cause));
    return errors.length === 0 ? core.failCause(cause) : core.fail(errors);
  },
  onSuccess: core.succeed
});
/* @internal */
export const patchFiberRefs = patch => updateFiberRefs((fiberId, fiberRefs) => pipe(patch, fiberRefsPatch.patch(fiberId, fiberRefs)));
/* @internal */
export const promise = evaluate => evaluate.length >= 1 ? core.async((resolve, signal) => {
  try {
    evaluate(signal).then(a => resolve(core.succeed(a)), e => resolve(core.die(e)));
  } catch (e) {
    resolve(core.die(e));
  }
}) : core.async(resolve => {
  try {
    ;
    evaluate().then(a => resolve(core.succeed(a)), e => resolve(core.die(e)));
  } catch (e) {
    resolve(core.die(e));
  }
});
/* @internal */
export const provideService = /*#__PURE__*/dual(3, (self, tag, service) => core.contextWithEffect(env => core.provideContext(self, Context.add(env, tag, service))));
/* @internal */
export const provideServiceEffect = /*#__PURE__*/dual(3, (self, tag, effect) => core.contextWithEffect(env => core.flatMap(effect, service => core.provideContext(self, pipe(env, Context.add(tag, service))))));
/* @internal */
export const random = /*#__PURE__*/defaultServices.randomWith(core.succeed);
/* @internal */
export const reduce = /*#__PURE__*/dual(3, (elements, zero, f) => Arr.fromIterable(elements).reduce((acc, el, i) => core.flatMap(acc, a => f(a, el, i)), core.succeed(zero)));
/* @internal */
export const reduceRight = /*#__PURE__*/dual(3, (elements, zero, f) => Arr.fromIterable(elements).reduceRight((acc, el, i) => core.flatMap(acc, a => f(el, a, i)), core.succeed(zero)));
/* @internal */
export const reduceWhile = /*#__PURE__*/dual(3, (elements, zero, options) => core.flatMap(core.sync(() => elements[Symbol.iterator]()), iterator => reduceWhileLoop(iterator, 0, zero, options.while, options.body)));
const reduceWhileLoop = (iterator, index, state, predicate, f) => {
  const next = iterator.next();
  if (!next.done && predicate(state)) {
    return core.flatMap(f(state, next.value, index), nextState => reduceWhileLoop(iterator, index + 1, nextState, predicate, f));
  }
  return core.succeed(state);
};
/* @internal */
export const repeatN = /*#__PURE__*/dual(2, (self, n) => core.suspend(() => repeatNLoop(self, n)));
/* @internal */
const repeatNLoop = (self, n) => core.flatMap(self, a => n <= 0 ? core.succeed(a) : core.zipRight(core.yieldNow(), repeatNLoop(self, n - 1)));
/* @internal */
export const sandbox = self => core.matchCauseEffect(self, {
  onFailure: core.fail,
  onSuccess: core.succeed
});
/* @internal */
export const setFiberRefs = fiberRefs => core.suspend(() => FiberRefs.setAll(fiberRefs));
/* @internal */
export const sleep = Clock.sleep;
/* @internal */
export const succeedNone = /*#__PURE__*/core.succeed(/*#__PURE__*/Option.none());
/* @internal */
export const succeedSome = value => core.succeed(Option.some(value));
/* @internal */
export const summarized = /*#__PURE__*/dual(3, (self, summary, f) => core.flatMap(summary, start => core.flatMap(self, value => core.map(summary, end => [f(start, end), value]))));
/* @internal */
export const tagMetrics = /*#__PURE__*/dual(args => core.isEffect(args[0]), function () {
  return labelMetrics(arguments[0], typeof arguments[1] === "string" ? [metricLabel.make(arguments[1], arguments[2])] : Object.entries(arguments[1]).map(([k, v]) => metricLabel.make(k, v)));
});
/* @internal */
export const labelMetrics = /*#__PURE__*/dual(2, (self, labels) => core.fiberRefLocallyWith(self, core.currentMetricLabels, old => Arr.union(old, labels)));
/* @internal */
export const takeUntil = /*#__PURE__*/dual(2, (elements, predicate) => core.suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let effect = core.succeed(false);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    effect = core.flatMap(effect, bool => {
      if (bool) {
        return core.succeed(true);
      }
      builder.push(a);
      return predicate(a, index);
    });
  }
  return core.map(effect, () => builder);
}));
/* @internal */
export const takeWhile = /*#__PURE__*/dual(2, (elements, predicate) => core.suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let taking = core.succeed(true);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    taking = core.flatMap(taking, taking => pipe(taking ? predicate(a, index) : core.succeed(false), core.map(bool => {
      if (bool) {
        builder.push(a);
      }
      return bool;
    })));
  }
  return core.map(taking, () => builder);
}));
/* @internal */
export const tapBoth = /*#__PURE__*/dual(2, (self, {
  onFailure,
  onSuccess
}) => core.matchCauseEffect(self, {
  onFailure: cause => {
    const either = internalCause.failureOrCause(cause);
    switch (either._tag) {
      case "Left":
        {
          return core.zipRight(onFailure(either.left), core.failCause(cause));
        }
      case "Right":
        {
          return core.failCause(cause);
        }
    }
  },
  onSuccess: a => core.as(onSuccess(a), a)
}));
/* @internal */
export const tapDefect = /*#__PURE__*/dual(2, (self, f) => core.catchAllCause(self, cause => Option.match(internalCause.keepDefects(cause), {
  onNone: () => core.failCause(cause),
  onSome: a => core.zipRight(f(a), core.failCause(cause))
})));
/* @internal */
export const tapError = /*#__PURE__*/dual(2, (self, f) => core.matchCauseEffect(self, {
  onFailure: cause => {
    const either = internalCause.failureOrCause(cause);
    switch (either._tag) {
      case "Left":
        return core.zipRight(f(either.left), core.failCause(cause));
      case "Right":
        return core.failCause(cause);
    }
  },
  onSuccess: core.succeed
}));
/* @internal */
export const tapErrorTag = /*#__PURE__*/dual(3, (self, k, f) => tapError(self, e => {
  if (Predicate.isTagged(e, k)) {
    return f(e);
  }
  return core.void;
}));
/* @internal */
export const tapErrorCause = /*#__PURE__*/dual(2, (self, f) => core.matchCauseEffect(self, {
  onFailure: cause => core.zipRight(f(cause), core.failCause(cause)),
  onSuccess: core.succeed
}));
/* @internal */
export const timed = self => timedWith(self, Clock.currentTimeNanos);
/* @internal */
export const timedWith = /*#__PURE__*/dual(2, (self, nanos) => summarized(self, nanos, (start, end) => Duration.nanos(end - start)));
/* @internal */
export const tracerWith = Tracer.tracerWith;
/** @internal */
export const tracer = /*#__PURE__*/tracerWith(core.succeed);
/* @internal */
export const tryPromise = arg => {
  let evaluate;
  let catcher = undefined;
  if (typeof arg === "function") {
    evaluate = arg;
  } else {
    evaluate = arg.try;
    catcher = arg.catch;
  }
  const fail = e => catcher ? core.failSync(() => catcher(e)) : core.fail(new core.UnknownException(e, "An unknown error occurred in Effect.tryPromise"));
  if (evaluate.length >= 1) {
    return core.async((resolve, signal) => {
      try {
        evaluate(signal).then(a => resolve(core.succeed(a)), e => resolve(fail(e)));
      } catch (e) {
        resolve(fail(e));
      }
    });
  }
  return core.async(resolve => {
    try {
      evaluate().then(a => resolve(core.succeed(a)), e => resolve(fail(e)));
    } catch (e) {
      resolve(fail(e));
    }
  });
};
/* @internal */
export const tryMap = /*#__PURE__*/dual(2, (self, options) => core.flatMap(self, a => try_({
  try: () => options.try(a),
  catch: options.catch
})));
/* @internal */
export const tryMapPromise = /*#__PURE__*/dual(2, (self, options) => core.flatMap(self, a => tryPromise({
  try: options.try.length >= 1 ? signal => options.try(a, signal) : () => options.try(a),
  catch: options.catch
})));
/* @internal */
export const unless = /*#__PURE__*/dual(2, (self, condition) => core.suspend(() => condition() ? succeedNone : asSome(self)));
/* @internal */
export const unlessEffect = /*#__PURE__*/dual(2, (self, condition) => core.flatMap(condition, b => b ? succeedNone : asSome(self)));
/* @internal */
export const unsandbox = self => mapErrorCause(self, internalCause.flatten);
/* @internal */
export const updateFiberRefs = f => core.withFiberRuntime(state => {
  state.setFiberRefs(f(state.id(), state.getFiberRefs()));
  return core.void;
});
/* @internal */
export const updateService = /*#__PURE__*/dual(3, (self, tag, f) => core.mapInputContext(self, context => Context.add(context, tag, f(Context.unsafeGet(context, tag)))));
/* @internal */
export const when = /*#__PURE__*/dual(2, (self, condition) => core.suspend(() => condition() ? core.map(self, Option.some) : core.succeed(Option.none())));
/* @internal */
export const whenFiberRef = /*#__PURE__*/dual(3, (self, fiberRef, predicate) => core.flatMap(core.fiberRefGet(fiberRef), s => predicate(s) ? core.map(self, a => [s, Option.some(a)]) : core.succeed([s, Option.none()])));
/* @internal */
export const whenRef = /*#__PURE__*/dual(3, (self, ref, predicate) => core.flatMap(Ref.get(ref), s => predicate(s) ? core.map(self, a => [s, Option.some(a)]) : core.succeed([s, Option.none()])));
/* @internal */
export const withMetric = /*#__PURE__*/dual(2, (self, metric) => metric(self));
/** @internal */
export const serviceFunctionEffect = (getService, f) => (...args) => core.flatMap(getService, a => f(a)(...args));
/** @internal */
export const serviceFunction = (getService, f) => (...args) => core.map(getService, a => f(a)(...args));
/** @internal */
export const serviceFunctions = getService => new Proxy({}, {
  get(_target, prop, _receiver) {
    return (...args) => core.flatMap(getService, s => s[prop](...args));
  }
});
/** @internal */
export const serviceConstants = getService => new Proxy({}, {
  get(_target, prop, _receiver) {
    return core.flatMap(getService, s => core.isEffect(s[prop]) ? s[prop] : core.succeed(s[prop]));
  }
});
/** @internal */
export const serviceMembers = getService => ({
  functions: serviceFunctions(getService),
  constants: serviceConstants(getService)
});
/** @internal */
export const serviceOption = tag => core.map(core.context(), Context.getOption(tag));
/** @internal */
export const serviceOptional = tag => core.flatMap(core.context(), Context.getOption(tag));
// -----------------------------------------------------------------------------
// tracing
// -----------------------------------------------------------------------------
/* @internal */
export const annotateCurrentSpan = function () {
  const args = arguments;
  return ignore(core.flatMap(currentPropagatedSpan, span => core.sync(() => {
    if (typeof args[0] === "string") {
      span.attribute(args[0], args[1]);
    } else {
      for (const key in args[0]) {
        span.attribute(key, args[0][key]);
      }
    }
  })));
};
/* @internal */
export const linkSpanCurrent = function () {
  const args = arguments;
  const links = Array.isArray(args[0]) ? args[0] : [{
    _tag: "SpanLink",
    span: args[0],
    attributes: args[1] ?? {}
  }];
  return ignore(core.flatMap(currentSpan, span => core.sync(() => span.addLinks(links))));
};
/* @internal */
export const annotateSpans = /*#__PURE__*/dual(args => core.isEffect(args[0]), function () {
  const args = arguments;
  return core.fiberRefLocallyWith(args[0], core.currentTracerSpanAnnotations, typeof args[1] === "string" ? HashMap.set(args[1], args[2]) : annotations => Object.entries(args[1]).reduce((acc, [key, value]) => HashMap.set(acc, key, value), annotations));
});
/** @internal */
export const currentParentSpan = /*#__PURE__*/serviceOptional(internalTracer.spanTag);
/** @internal */
export const currentSpan = /*#__PURE__*/core.flatMap(/*#__PURE__*/core.context(), context => {
  const span = context.unsafeMap.get(internalTracer.spanTag.key);
  return span !== undefined && span._tag === "Span" ? core.succeed(span) : core.fail(new core.NoSuchElementException());
});
export const currentPropagatedSpan = /*#__PURE__*/core.flatMap(/*#__PURE__*/core.context(), context => {
  const span = filterDisablePropagation(Context.getOption(context, internalTracer.spanTag));
  return span._tag === "Some" && span.value._tag === "Span" ? core.succeed(span.value) : core.fail(new core.NoSuchElementException());
});
/* @internal */
export const linkSpans = /*#__PURE__*/dual(args => core.isEffect(args[0]), (self, span, attributes) => core.fiberRefLocallyWith(self, core.currentTracerSpanLinks, Chunk.append({
  _tag: "SpanLink",
  span,
  attributes: attributes ?? {}
})));
const bigint0 = /*#__PURE__*/BigInt(0);
export const filterDisablePropagation = /*#__PURE__*/Option.flatMap(span => Context.get(span.context, internalTracer.DisablePropagation) ? span._tag === "Span" ? filterDisablePropagation(span.parent) : Option.none() : Option.some(span));
/** @internal */
export const unsafeMakeSpan = (fiber, name, options) => {
  const disablePropagation = !fiber.getFiberRef(core.currentTracerEnabled) || options.context && Context.get(options.context, internalTracer.DisablePropagation);
  const context = fiber.getFiberRef(core.currentContext);
  const parent = options.parent ? Option.some(options.parent) : options.root ? Option.none() : filterDisablePropagation(Context.getOption(context, internalTracer.spanTag));
  let span;
  if (disablePropagation) {
    span = core.noopSpan({
      name,
      parent,
      context: Context.add(options.context ?? Context.empty(), internalTracer.DisablePropagation, true)
    });
  } else {
    const services = fiber.getFiberRef(defaultServices.currentServices);
    const tracer = Context.get(services, internalTracer.tracerTag);
    const clock = Context.get(services, Clock.Clock);
    const timingEnabled = fiber.getFiberRef(core.currentTracerTimingEnabled);
    const fiberRefs = fiber.getFiberRefs();
    const annotationsFromEnv = FiberRefs.get(fiberRefs, core.currentTracerSpanAnnotations);
    const linksFromEnv = FiberRefs.get(fiberRefs, core.currentTracerSpanLinks);
    const links = linksFromEnv._tag === "Some" ? options.links !== undefined ? [...Chunk.toReadonlyArray(linksFromEnv.value), ...(options.links ?? [])] : Chunk.toReadonlyArray(linksFromEnv.value) : options.links ?? Arr.empty();
    span = tracer.span(name, parent, options.context ?? Context.empty(), links, timingEnabled ? clock.unsafeCurrentTimeNanos() : bigint0, options.kind ?? "internal", options);
    if (annotationsFromEnv._tag === "Some") {
      HashMap.forEach(annotationsFromEnv.value, (value, key) => span.attribute(key, value));
    }
    if (options.attributes !== undefined) {
      Object.entries(options.attributes).forEach(([k, v]) => span.attribute(k, v));
    }
  }
  if (typeof options.captureStackTrace === "function") {
    internalCause.spanToTrace.set(span, options.captureStackTrace);
  }
  return span;
};
/** @internal */
export const makeSpan = (name, options) => {
  options = internalTracer.addSpanStackTrace(options);
  return core.withFiberRuntime(fiber => core.succeed(unsafeMakeSpan(fiber, name, options)));
};
/* @internal */
export const spanAnnotations = /*#__PURE__*/core.fiberRefGet(core.currentTracerSpanAnnotations);
/* @internal */
export const spanLinks = /*#__PURE__*/core.fiberRefGet(core.currentTracerSpanLinks);
/** @internal */
export const endSpan = (span, exit, clock, timingEnabled) => core.sync(() => {
  if (span.status._tag === "Ended") {
    return;
  }
  if (core.exitIsFailure(exit) && internalCause.spanToTrace.has(span)) {
    // https://opentelemetry.io/docs/specs/semconv/registry/attributes/code/#code-stacktrace
    span.attribute("code.stacktrace", internalCause.spanToTrace.get(span)());
  }
  span.end(timingEnabled ? clock.unsafeCurrentTimeNanos() : bigint0, exit);
});
/** @internal */
export const useSpan = (name, ...args) => {
  const options = internalTracer.addSpanStackTrace(args.length === 1 ? undefined : args[0]);
  const evaluate = args[args.length - 1];
  return core.withFiberRuntime(fiber => {
    const span = unsafeMakeSpan(fiber, name, options);
    const timingEnabled = fiber.getFiberRef(core.currentTracerTimingEnabled);
    const clock = Context.get(fiber.getFiberRef(defaultServices.currentServices), clockTag);
    return core.onExit(evaluate(span), exit => endSpan(span, exit, clock, timingEnabled));
  });
};
/** @internal */
export const withParentSpan = /*#__PURE__*/dual(2, (self, span) => provideService(self, internalTracer.spanTag, span));
/** @internal */
export const withSpan = function () {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options = internalTracer.addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self = arguments[0];
    return useSpan(name, options, span => withParentSpan(self, span));
  }
  return self => useSpan(name, options, span => withParentSpan(self, span));
};
export const functionWithSpan = options => function () {
  let captureStackTrace = options.captureStackTrace ?? false;
  if (options.captureStackTrace !== false) {
    const limit = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    const error = new Error();
    Error.stackTraceLimit = limit;
    let cache = false;
    captureStackTrace = () => {
      if (cache !== false) {
        return cache;
      }
      if (error.stack) {
        const stack = error.stack.trim().split("\n");
        cache = stack.slice(2).join("\n").trim();
        return cache;
      }
    };
  }
  return core.suspend(() => {
    const opts = typeof options.options === "function" ? options.options.apply(null, arguments) : options.options;
    return withSpan(core.suspend(() => internalCall(() => options.body.apply(this, arguments))), opts.name, {
      ...opts,
      captureStackTrace
    });
  });
};
// -------------------------------------------------------------------------------------
// optionality
// -------------------------------------------------------------------------------------
/* @internal */
export const fromNullable = value => value == null ? core.fail(new core.NoSuchElementException()) : core.succeed(value);
/* @internal */
export const optionFromOptional = self => core.catchAll(core.map(self, Option.some), error => core.isNoSuchElementException(error) ? succeedNone : core.fail(error));
//# sourceMappingURL=core-effect.js.map