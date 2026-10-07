"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sleep = exports.setFiberRefs = exports.serviceOptional = exports.serviceOption = exports.serviceMembers = exports.serviceFunctions = exports.serviceFunctionEffect = exports.serviceFunction = exports.serviceConstants = exports.sandbox = exports.repeatN = exports.reduceWhile = exports.reduceRight = exports.reduce = exports.random = exports.provideServiceEffect = exports.provideService = exports.promise = exports.patchFiberRefs = exports.parallelErrors = exports.orElseSucceed = exports.orElseFail = exports.optionFromOptional = exports.option = exports.once = exports.none = exports.negate = exports.merge = exports.memoize = exports.match = exports.mapErrorCause = exports.mapAccum = exports.makeSpan = exports.loop = exports.logWithLevel = exports.logWarning = exports.logTrace = exports.logInfo = exports.logFatal = exports.logError = exports.logDebug = exports.logAnnotations = exports.log = exports.linkSpans = exports.linkSpanCurrent = exports.liftPredicate = exports.let_ = exports.labelMetrics = exports.iterate = exports.isSuccess = exports.isFailure = exports.inheritFiberRefs = exports.ignoreLogged = exports.ignore = exports.head = exports.functionWithSpan = exports.fromNullable = exports.forever = exports.flipWith = exports.firstSuccessOf = exports.findFirst = exports.filterOrFail = exports.filterOrElse = exports.filterOrDieMessage = exports.filterOrDie = exports.filterMap = exports.filterDisablePropagation = exports.fiberRefs = exports.every = exports.eventually = exports.endSpan = exports.dropWhile = exports.dropUntil = exports.diffFiberRefsAndRuntimeFlags = exports.diffFiberRefs = exports.descriptorWith = exports.descriptor = exports.delay = exports.currentSpan = exports.currentPropagatedSpan = exports.currentParentSpan = exports.contextWith = exports.clockWith = exports.clock = exports.cause = exports.catchTags = exports.catchTag = exports.catchSomeDefect = exports.catchSomeCause = exports.catchAllDefect = exports.bindTo = exports.bind = exports.asSomeError = exports.asSome = exports.annotateSpans = exports.annotateLogs = exports.annotateCurrentSpan = exports.allowInterrupt = exports._catch = exports.Do = void 0;
exports.withSpan = exports.withParentSpan = exports.withMetric = exports.withLogSpan = exports.whenRef = exports.whenFiberRef = exports.when = exports.useSpan = exports.updateService = exports.updateFiberRefs = exports.unsandbox = exports.unsafeMakeSpan = exports.unlessEffect = exports.unless = exports.try_ = exports.tryPromise = exports.tryMapPromise = exports.tryMap = exports.tracerWith = exports.tracer = exports.timedWith = exports.timed = exports.tapErrorTag = exports.tapErrorCause = exports.tapError = exports.tapDefect = exports.tapBoth = exports.takeWhile = exports.takeUntil = exports.tagMetrics = exports.summarized = exports.succeedSome = exports.succeedNone = exports.spanLinks = exports.spanAnnotations = void 0;
var Arr = _interopRequireWildcard(require("../Array.js"));
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Clock = _interopRequireWildcard(require("../Clock.js"));
var Context = _interopRequireWildcard(require("../Context.js"));
var Duration = _interopRequireWildcard(require("../Duration.js"));
var FiberRefs = _interopRequireWildcard(require("../FiberRefs.js"));
var _Function = require("../Function.js");
var HashMap = _interopRequireWildcard(require("../HashMap.js"));
var HashSet = _interopRequireWildcard(require("../HashSet.js"));
var List = _interopRequireWildcard(require("../List.js"));
var LogLevel = _interopRequireWildcard(require("../LogLevel.js"));
var LogSpan = _interopRequireWildcard(require("../LogSpan.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var Predicate = _interopRequireWildcard(require("../Predicate.js"));
var Ref = _interopRequireWildcard(require("../Ref.js"));
var Tracer = _interopRequireWildcard(require("../Tracer.js"));
var _Utils = require("../Utils.js");
var internalCause = _interopRequireWildcard(require("./cause.js"));
var _clock = require("./clock.js");
var core = _interopRequireWildcard(require("./core.js"));
var defaultServices = _interopRequireWildcard(require("./defaultServices.js"));
var doNotation = _interopRequireWildcard(require("./doNotation.js"));
var fiberRefsPatch = _interopRequireWildcard(require("./fiberRefs/patch.js"));
var metricLabel = _interopRequireWildcard(require("./metric/label.js"));
var runtimeFlags = _interopRequireWildcard(require("./runtimeFlags.js"));
var internalTracer = _interopRequireWildcard(require("./tracer.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/* @internal */
const annotateLogs = exports.annotateLogs = /*#__PURE__*/(0, _Function.dual)(args => core.isEffect(args[0]), function () {
  const args = arguments;
  return core.fiberRefLocallyWith(args[0], core.currentLogAnnotations, typeof args[1] === "string" ? HashMap.set(args[1], args[2]) : annotations => Object.entries(args[1]).reduce((acc, [key, value]) => HashMap.set(acc, key, value), annotations));
});
/* @internal */
const asSome = self => core.map(self, Option.some);
/* @internal */
exports.asSome = asSome;
const asSomeError = self => core.mapError(self, Option.some);
/* @internal */
exports.asSomeError = asSomeError;
const try_ = arg => {
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
      return core.succeed((0, _Utils.internalCall)(evaluate));
    } catch (error) {
      return core.fail(onFailure ? (0, _Utils.internalCall)(() => onFailure(error)) : new core.UnknownException(error, "An unknown error occurred in Effect.try"));
    }
  });
};
/* @internal */
exports.try_ = try_;
const _catch = exports._catch = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, options) => core.catchAll(self, e => {
  if (Predicate.hasProperty(e, tag) && e[tag] === options.failure) {
    return options.onFailure(e);
  }
  return core.fail(e);
}));
/* @internal */
const catchAllDefect = exports.catchAllDefect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.catchAllCause(self, cause => {
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
const catchSomeCause = exports.catchSomeCause = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.matchCauseEffect(self, {
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
const catchSomeDefect = exports.catchSomeDefect = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => core.catchAllCause(self, cause => {
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
const catchTag = exports.catchTag = /*#__PURE__*/(0, _Function.dual)(args => core.isEffect(args[0]), (self, ...args) => {
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
const catchTags = exports.catchTags = /*#__PURE__*/(0, _Function.dual)(2, (self, cases) => {
  let keys;
  return core.catchIf(self, e => {
    keys ??= Object.keys(cases);
    return Predicate.hasProperty(e, "_tag") && Predicate.isString(e["_tag"]) && keys.includes(e["_tag"]);
  }, e => cases[e["_tag"]](e));
});
/* @internal */
const cause = self => core.matchCause(self, {
  onFailure: _Function.identity,
  onSuccess: () => internalCause.empty
});
/* @internal */
exports.cause = cause;
const clockWith = exports.clockWith = Clock.clockWith;
/* @internal */
const clock = exports.clock = /*#__PURE__*/clockWith(core.succeed);
/* @internal */
const delay = exports.delay = /*#__PURE__*/(0, _Function.dual)(2, (self, duration) => core.zipRight(Clock.sleep(duration), self));
/* @internal */
const descriptorWith = f => core.withFiberRuntime((state, status) => f({
  id: state.id(),
  status,
  interruptors: internalCause.interruptors(state.getFiberRef(core.currentInterruptedCause))
}));
/* @internal */
exports.descriptorWith = descriptorWith;
const allowInterrupt = exports.allowInterrupt = /*#__PURE__*/descriptorWith(descriptor => HashSet.size(descriptor.interruptors) > 0 ? core.interrupt : core.void);
/* @internal */
const descriptor = exports.descriptor = /*#__PURE__*/descriptorWith(core.succeed);
/* @internal */
const diffFiberRefs = self => summarized(self, fiberRefs, fiberRefsPatch.diff);
/* @internal */
exports.diffFiberRefs = diffFiberRefs;
const diffFiberRefsAndRuntimeFlags = self => summarized(self, core.zip(fiberRefs, core.runtimeFlags), ([refs, flags], [refsNew, flagsNew]) => [fiberRefsPatch.diff(refs, refsNew), runtimeFlags.diff(flags, flagsNew)]);
/* @internal */
exports.diffFiberRefsAndRuntimeFlags = diffFiberRefsAndRuntimeFlags;
const Do = exports.Do = /*#__PURE__*/core.succeed({});
/* @internal */
const bind = exports.bind = /*#__PURE__*/doNotation.bind(core.map, core.flatMap);
/* @internal */
const bindTo = exports.bindTo = /*#__PURE__*/doNotation.bindTo(core.map);
/* @internal */
const let_ = exports.let_ = /*#__PURE__*/doNotation.let_(core.map);
/* @internal */
const dropUntil = exports.dropUntil = /*#__PURE__*/(0, _Function.dual)(2, (elements, predicate) => core.suspend(() => {
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
const dropWhile = exports.dropWhile = /*#__PURE__*/(0, _Function.dual)(2, (elements, predicate) => core.suspend(() => {
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
const contextWith = f => core.map(core.context(), f);
/* @internal */
exports.contextWith = contextWith;
const eventually = self => core.orElse(self, () => core.flatMap(core.yieldNow(), () => eventually(self)));
/* @internal */
exports.eventually = eventually;
const filterMap = exports.filterMap = /*#__PURE__*/(0, _Function.dual)(2, (elements, pf) => core.map(core.forEachSequential(elements, _Function.identity), Arr.filterMap(pf)));
/* @internal */
const filterOrDie = exports.filterOrDie = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, orDieWith) => filterOrElse(self, predicate, a => core.dieSync(() => orDieWith(a))));
/* @internal */
const filterOrDieMessage = exports.filterOrDieMessage = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, message) => filterOrElse(self, predicate, () => core.dieMessage(message)));
/* @internal */
const filterOrElse = exports.filterOrElse = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, orElse) => core.flatMap(self, a => predicate(a) ? core.succeed(a) : orElse(a)));
/** @internal */
const liftPredicate = exports.liftPredicate = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, orFailWith) => core.suspend(() => predicate(self) ? core.succeed(self) : core.fail(orFailWith(self))));
/* @internal */
const filterOrFail = exports.filterOrFail = /*#__PURE__*/(0, _Function.dual)(args => core.isEffect(args[0]), (self, predicate, orFailWith) => filterOrElse(self, predicate, a => orFailWith === undefined ? core.fail(new core.NoSuchElementException()) : core.failSync(() => orFailWith(a))));
/* @internal */
const findFirst = exports.findFirst = /*#__PURE__*/(0, _Function.dual)(2, (elements, predicate) => core.suspend(() => {
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
const firstSuccessOf = effects => core.suspend(() => {
  const list = Chunk.fromIterable(effects);
  if (!Chunk.isNonEmpty(list)) {
    return core.dieSync(() => new core.IllegalArgumentException(`Received an empty collection of effects`));
  }
  return (0, _Function.pipe)(Chunk.tailNonEmpty(list), Arr.reduce(Chunk.headNonEmpty(list), (left, right) => core.orElse(left, () => right)));
});
/* @internal */
exports.firstSuccessOf = firstSuccessOf;
const flipWith = exports.flipWith = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.flip(f(core.flip(self))));
/* @internal */
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => core.matchEffect(self, {
  onFailure: e => core.succeed(options.onFailure(e)),
  onSuccess: a => core.succeed(options.onSuccess(a))
}));
/* @internal */
const every = exports.every = /*#__PURE__*/(0, _Function.dual)(2, (elements, predicate) => core.suspend(() => forAllLoop(elements[Symbol.iterator](), 0, predicate)));
const forAllLoop = (iterator, index, f) => {
  const next = iterator.next();
  return next.done ? core.succeed(true) : core.flatMap(f(next.value, index), b => b ? forAllLoop(iterator, index + 1, f) : core.succeed(b));
};
/* @internal */
const forever = self => {
  const loop = core.flatMap(core.flatMap(self, () => core.yieldNow()), () => loop);
  return loop;
};
/* @internal */
exports.forever = forever;
const fiberRefs = exports.fiberRefs = /*#__PURE__*/core.withFiberRuntime(state => core.succeed(state.getFiberRefs()));
/* @internal */
const head = self => core.flatMap(self, as => {
  const iterator = as[Symbol.iterator]();
  const next = iterator.next();
  if (next.done) {
    return core.fail(new core.NoSuchElementException());
  }
  return core.succeed(next.value);
});
/* @internal */
exports.head = head;
const ignore = self => match(self, {
  onFailure: _Function.constVoid,
  onSuccess: _Function.constVoid
});
/* @internal */
exports.ignore = ignore;
const ignoreLogged = self => core.matchCauseEffect(self, {
  onFailure: cause => logDebug(cause, "An error was silently ignored because it is not anticipated to be useful"),
  onSuccess: () => core.void
});
/* @internal */
exports.ignoreLogged = ignoreLogged;
const inheritFiberRefs = childFiberRefs => updateFiberRefs((parentFiberId, parentFiberRefs) => FiberRefs.joinAs(parentFiberRefs, parentFiberId, childFiberRefs));
/* @internal */
exports.inheritFiberRefs = inheritFiberRefs;
const isFailure = self => match(self, {
  onFailure: _Function.constTrue,
  onSuccess: _Function.constFalse
});
/* @internal */
exports.isFailure = isFailure;
const isSuccess = self => match(self, {
  onFailure: _Function.constFalse,
  onSuccess: _Function.constTrue
});
/* @internal */
exports.isSuccess = isSuccess;
const iterate = (initial, options) => core.suspend(() => {
  if (options.while(initial)) {
    return core.flatMap(options.body(initial), z2 => iterate(z2, options));
  }
  return core.succeed(initial);
});
/** @internal */
exports.iterate = iterate;
const logWithLevel = level => (...message) => {
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
exports.logWithLevel = logWithLevel;
const log = exports.log = /*#__PURE__*/logWithLevel();
/** @internal */
const logTrace = exports.logTrace = /*#__PURE__*/logWithLevel(LogLevel.Trace);
/** @internal */
const logDebug = exports.logDebug = /*#__PURE__*/logWithLevel(LogLevel.Debug);
/** @internal */
const logInfo = exports.logInfo = /*#__PURE__*/logWithLevel(LogLevel.Info);
/** @internal */
const logWarning = exports.logWarning = /*#__PURE__*/logWithLevel(LogLevel.Warning);
/** @internal */
const logError = exports.logError = /*#__PURE__*/logWithLevel(LogLevel.Error);
/** @internal */
const logFatal = exports.logFatal = /*#__PURE__*/logWithLevel(LogLevel.Fatal);
/* @internal */
const withLogSpan = exports.withLogSpan = /*#__PURE__*/(0, _Function.dual)(2, (effect, label) => core.flatMap(Clock.currentTimeMillis, now => core.fiberRefLocallyWith(effect, core.currentLogSpan, List.prepend(LogSpan.make(label, now)))));
/* @internal */
const logAnnotations = exports.logAnnotations = /*#__PURE__*/core.fiberRefGet(core.currentLogAnnotations);
/* @internal */
const loop = (initial, options) => options.discard ? loopDiscard(initial, options.while, options.step, options.body) : core.map(loopInternal(initial, options.while, options.step, options.body), Arr.fromIterable);
exports.loop = loop;
const loopInternal = (initial, cont, inc, body) => core.suspend(() => cont(initial) ? core.flatMap(body(initial), a => core.map(loopInternal(inc(initial), cont, inc, body), List.prepend(a))) : core.sync(() => List.empty()));
const loopDiscard = (initial, cont, inc, body) => core.suspend(() => cont(initial) ? core.flatMap(body(initial), () => loopDiscard(inc(initial), cont, inc, body)) : core.void);
/* @internal */
const mapAccum = exports.mapAccum = /*#__PURE__*/(0, _Function.dual)(3, (elements, initial, f) => core.suspend(() => {
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
const mapErrorCause = exports.mapErrorCause = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.matchCauseEffect(self, {
  onFailure: c => core.failCauseSync(() => f(c)),
  onSuccess: core.succeed
}));
/* @internal */
const memoize = self => (0, _Function.pipe)(core.deferredMake(), core.flatMap(deferred => (0, _Function.pipe)(diffFiberRefsAndRuntimeFlags(self), core.intoDeferred(deferred), once, core.map(complete => core.zipRight(complete, (0, _Function.pipe)(core.deferredAwait(deferred), core.flatMap(([patch, a]) => core.as(core.zip(patchFiberRefs(patch[0]), core.updateRuntimeFlags(patch[1])), a))))))));
/* @internal */
exports.memoize = memoize;
const merge = self => core.matchEffect(self, {
  onFailure: e => core.succeed(e),
  onSuccess: core.succeed
});
/* @internal */
exports.merge = merge;
const negate = self => core.map(self, b => !b);
/* @internal */
exports.negate = negate;
const none = self => core.flatMap(self, option => {
  switch (option._tag) {
    case "None":
      return core.void;
    case "Some":
      return core.fail(new core.NoSuchElementException());
  }
});
/* @internal */
exports.none = none;
const once = self => core.map(Ref.make(true), ref => core.asVoid(core.whenEffect(self, Ref.getAndSet(ref, false))));
/* @internal */
exports.once = once;
const option = self => core.matchEffect(self, {
  onFailure: () => core.succeed(Option.none()),
  onSuccess: a => core.succeed(Option.some(a))
});
/* @internal */
exports.option = option;
const orElseFail = exports.orElseFail = /*#__PURE__*/(0, _Function.dual)(2, (self, evaluate) => core.orElse(self, () => core.failSync(evaluate)));
/* @internal */
const orElseSucceed = exports.orElseSucceed = /*#__PURE__*/(0, _Function.dual)(2, (self, evaluate) => core.orElse(self, () => core.sync(evaluate)));
/* @internal */
const parallelErrors = self => core.matchCauseEffect(self, {
  onFailure: cause => {
    const errors = Arr.fromIterable(internalCause.failures(cause));
    return errors.length === 0 ? core.failCause(cause) : core.fail(errors);
  },
  onSuccess: core.succeed
});
/* @internal */
exports.parallelErrors = parallelErrors;
const patchFiberRefs = patch => updateFiberRefs((fiberId, fiberRefs) => (0, _Function.pipe)(patch, fiberRefsPatch.patch(fiberId, fiberRefs)));
/* @internal */
exports.patchFiberRefs = patchFiberRefs;
const promise = evaluate => evaluate.length >= 1 ? core.async((resolve, signal) => {
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
exports.promise = promise;
const provideService = exports.provideService = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, service) => core.contextWithEffect(env => core.provideContext(self, Context.add(env, tag, service))));
/* @internal */
const provideServiceEffect = exports.provideServiceEffect = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, effect) => core.contextWithEffect(env => core.flatMap(effect, service => core.provideContext(self, (0, _Function.pipe)(env, Context.add(tag, service))))));
/* @internal */
const random = exports.random = /*#__PURE__*/defaultServices.randomWith(core.succeed);
/* @internal */
const reduce = exports.reduce = /*#__PURE__*/(0, _Function.dual)(3, (elements, zero, f) => Arr.fromIterable(elements).reduce((acc, el, i) => core.flatMap(acc, a => f(a, el, i)), core.succeed(zero)));
/* @internal */
const reduceRight = exports.reduceRight = /*#__PURE__*/(0, _Function.dual)(3, (elements, zero, f) => Arr.fromIterable(elements).reduceRight((acc, el, i) => core.flatMap(acc, a => f(el, a, i)), core.succeed(zero)));
/* @internal */
const reduceWhile = exports.reduceWhile = /*#__PURE__*/(0, _Function.dual)(3, (elements, zero, options) => core.flatMap(core.sync(() => elements[Symbol.iterator]()), iterator => reduceWhileLoop(iterator, 0, zero, options.while, options.body)));
const reduceWhileLoop = (iterator, index, state, predicate, f) => {
  const next = iterator.next();
  if (!next.done && predicate(state)) {
    return core.flatMap(f(state, next.value, index), nextState => reduceWhileLoop(iterator, index + 1, nextState, predicate, f));
  }
  return core.succeed(state);
};
/* @internal */
const repeatN = exports.repeatN = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => core.suspend(() => repeatNLoop(self, n)));
/* @internal */
const repeatNLoop = (self, n) => core.flatMap(self, a => n <= 0 ? core.succeed(a) : core.zipRight(core.yieldNow(), repeatNLoop(self, n - 1)));
/* @internal */
const sandbox = self => core.matchCauseEffect(self, {
  onFailure: core.fail,
  onSuccess: core.succeed
});
/* @internal */
exports.sandbox = sandbox;
const setFiberRefs = fiberRefs => core.suspend(() => FiberRefs.setAll(fiberRefs));
/* @internal */
exports.setFiberRefs = setFiberRefs;
const sleep = exports.sleep = Clock.sleep;
/* @internal */
const succeedNone = exports.succeedNone = /*#__PURE__*/core.succeed(/*#__PURE__*/Option.none());
/* @internal */
const succeedSome = value => core.succeed(Option.some(value));
/* @internal */
exports.succeedSome = succeedSome;
const summarized = exports.summarized = /*#__PURE__*/(0, _Function.dual)(3, (self, summary, f) => core.flatMap(summary, start => core.flatMap(self, value => core.map(summary, end => [f(start, end), value]))));
/* @internal */
const tagMetrics = exports.tagMetrics = /*#__PURE__*/(0, _Function.dual)(args => core.isEffect(args[0]), function () {
  return labelMetrics(arguments[0], typeof arguments[1] === "string" ? [metricLabel.make(arguments[1], arguments[2])] : Object.entries(arguments[1]).map(([k, v]) => metricLabel.make(k, v)));
});
/* @internal */
const labelMetrics = exports.labelMetrics = /*#__PURE__*/(0, _Function.dual)(2, (self, labels) => core.fiberRefLocallyWith(self, core.currentMetricLabels, old => Arr.union(old, labels)));
/* @internal */
const takeUntil = exports.takeUntil = /*#__PURE__*/(0, _Function.dual)(2, (elements, predicate) => core.suspend(() => {
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
const takeWhile = exports.takeWhile = /*#__PURE__*/(0, _Function.dual)(2, (elements, predicate) => core.suspend(() => {
  const iterator = elements[Symbol.iterator]();
  const builder = [];
  let next;
  let taking = core.succeed(true);
  let i = 0;
  while ((next = iterator.next()) && !next.done) {
    const a = next.value;
    const index = i++;
    taking = core.flatMap(taking, taking => (0, _Function.pipe)(taking ? predicate(a, index) : core.succeed(false), core.map(bool => {
      if (bool) {
        builder.push(a);
      }
      return bool;
    })));
  }
  return core.map(taking, () => builder);
}));
/* @internal */
const tapBoth = exports.tapBoth = /*#__PURE__*/(0, _Function.dual)(2, (self, {
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
const tapDefect = exports.tapDefect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.catchAllCause(self, cause => Option.match(internalCause.keepDefects(cause), {
  onNone: () => core.failCause(cause),
  onSome: a => core.zipRight(f(a), core.failCause(cause))
})));
/* @internal */
const tapError = exports.tapError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.matchCauseEffect(self, {
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
const tapErrorTag = exports.tapErrorTag = /*#__PURE__*/(0, _Function.dual)(3, (self, k, f) => tapError(self, e => {
  if (Predicate.isTagged(e, k)) {
    return f(e);
  }
  return core.void;
}));
/* @internal */
const tapErrorCause = exports.tapErrorCause = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.matchCauseEffect(self, {
  onFailure: cause => core.zipRight(f(cause), core.failCause(cause)),
  onSuccess: core.succeed
}));
/* @internal */
const timed = self => timedWith(self, Clock.currentTimeNanos);
/* @internal */
exports.timed = timed;
const timedWith = exports.timedWith = /*#__PURE__*/(0, _Function.dual)(2, (self, nanos) => summarized(self, nanos, (start, end) => Duration.nanos(end - start)));
/* @internal */
const tracerWith = exports.tracerWith = Tracer.tracerWith;
/** @internal */
const tracer = exports.tracer = /*#__PURE__*/tracerWith(core.succeed);
/* @internal */
const tryPromise = arg => {
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
exports.tryPromise = tryPromise;
const tryMap = exports.tryMap = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => core.flatMap(self, a => try_({
  try: () => options.try(a),
  catch: options.catch
})));
/* @internal */
const tryMapPromise = exports.tryMapPromise = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => core.flatMap(self, a => tryPromise({
  try: options.try.length >= 1 ? signal => options.try(a, signal) : () => options.try(a),
  catch: options.catch
})));
/* @internal */
const unless = exports.unless = /*#__PURE__*/(0, _Function.dual)(2, (self, condition) => core.suspend(() => condition() ? succeedNone : asSome(self)));
/* @internal */
const unlessEffect = exports.unlessEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, condition) => core.flatMap(condition, b => b ? succeedNone : asSome(self)));
/* @internal */
const unsandbox = self => mapErrorCause(self, internalCause.flatten);
/* @internal */
exports.unsandbox = unsandbox;
const updateFiberRefs = f => core.withFiberRuntime(state => {
  state.setFiberRefs(f(state.id(), state.getFiberRefs()));
  return core.void;
});
/* @internal */
exports.updateFiberRefs = updateFiberRefs;
const updateService = exports.updateService = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, f) => core.mapInputContext(self, context => Context.add(context, tag, f(Context.unsafeGet(context, tag)))));
/* @internal */
const when = exports.when = /*#__PURE__*/(0, _Function.dual)(2, (self, condition) => core.suspend(() => condition() ? core.map(self, Option.some) : core.succeed(Option.none())));
/* @internal */
const whenFiberRef = exports.whenFiberRef = /*#__PURE__*/(0, _Function.dual)(3, (self, fiberRef, predicate) => core.flatMap(core.fiberRefGet(fiberRef), s => predicate(s) ? core.map(self, a => [s, Option.some(a)]) : core.succeed([s, Option.none()])));
/* @internal */
const whenRef = exports.whenRef = /*#__PURE__*/(0, _Function.dual)(3, (self, ref, predicate) => core.flatMap(Ref.get(ref), s => predicate(s) ? core.map(self, a => [s, Option.some(a)]) : core.succeed([s, Option.none()])));
/* @internal */
const withMetric = exports.withMetric = /*#__PURE__*/(0, _Function.dual)(2, (self, metric) => metric(self));
/** @internal */
const serviceFunctionEffect = (getService, f) => (...args) => core.flatMap(getService, a => f(a)(...args));
/** @internal */
exports.serviceFunctionEffect = serviceFunctionEffect;
const serviceFunction = (getService, f) => (...args) => core.map(getService, a => f(a)(...args));
/** @internal */
exports.serviceFunction = serviceFunction;
const serviceFunctions = getService => new Proxy({}, {
  get(_target, prop, _receiver) {
    return (...args) => core.flatMap(getService, s => s[prop](...args));
  }
});
/** @internal */
exports.serviceFunctions = serviceFunctions;
const serviceConstants = getService => new Proxy({}, {
  get(_target, prop, _receiver) {
    return core.flatMap(getService, s => core.isEffect(s[prop]) ? s[prop] : core.succeed(s[prop]));
  }
});
/** @internal */
exports.serviceConstants = serviceConstants;
const serviceMembers = getService => ({
  functions: serviceFunctions(getService),
  constants: serviceConstants(getService)
});
/** @internal */
exports.serviceMembers = serviceMembers;
const serviceOption = tag => core.map(core.context(), Context.getOption(tag));
/** @internal */
exports.serviceOption = serviceOption;
const serviceOptional = tag => core.flatMap(core.context(), Context.getOption(tag));
// -----------------------------------------------------------------------------
// tracing
// -----------------------------------------------------------------------------
/* @internal */
exports.serviceOptional = serviceOptional;
const annotateCurrentSpan = function () {
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
exports.annotateCurrentSpan = annotateCurrentSpan;
const linkSpanCurrent = function () {
  const args = arguments;
  const links = Array.isArray(args[0]) ? args[0] : [{
    _tag: "SpanLink",
    span: args[0],
    attributes: args[1] ?? {}
  }];
  return ignore(core.flatMap(currentSpan, span => core.sync(() => span.addLinks(links))));
};
/* @internal */
exports.linkSpanCurrent = linkSpanCurrent;
const annotateSpans = exports.annotateSpans = /*#__PURE__*/(0, _Function.dual)(args => core.isEffect(args[0]), function () {
  const args = arguments;
  return core.fiberRefLocallyWith(args[0], core.currentTracerSpanAnnotations, typeof args[1] === "string" ? HashMap.set(args[1], args[2]) : annotations => Object.entries(args[1]).reduce((acc, [key, value]) => HashMap.set(acc, key, value), annotations));
});
/** @internal */
const currentParentSpan = exports.currentParentSpan = /*#__PURE__*/serviceOptional(internalTracer.spanTag);
/** @internal */
const currentSpan = exports.currentSpan = /*#__PURE__*/core.flatMap(/*#__PURE__*/core.context(), context => {
  const span = context.unsafeMap.get(internalTracer.spanTag.key);
  return span !== undefined && span._tag === "Span" ? core.succeed(span) : core.fail(new core.NoSuchElementException());
});
const currentPropagatedSpan = exports.currentPropagatedSpan = /*#__PURE__*/core.flatMap(/*#__PURE__*/core.context(), context => {
  const span = filterDisablePropagation(Context.getOption(context, internalTracer.spanTag));
  return span._tag === "Some" && span.value._tag === "Span" ? core.succeed(span.value) : core.fail(new core.NoSuchElementException());
});
/* @internal */
const linkSpans = exports.linkSpans = /*#__PURE__*/(0, _Function.dual)(args => core.isEffect(args[0]), (self, span, attributes) => core.fiberRefLocallyWith(self, core.currentTracerSpanLinks, Chunk.append({
  _tag: "SpanLink",
  span,
  attributes: attributes ?? {}
})));
const bigint0 = /*#__PURE__*/BigInt(0);
const filterDisablePropagation = exports.filterDisablePropagation = /*#__PURE__*/Option.flatMap(span => Context.get(span.context, internalTracer.DisablePropagation) ? span._tag === "Span" ? filterDisablePropagation(span.parent) : Option.none() : Option.some(span));
/** @internal */
const unsafeMakeSpan = (fiber, name, options) => {
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
exports.unsafeMakeSpan = unsafeMakeSpan;
const makeSpan = (name, options) => {
  options = internalTracer.addSpanStackTrace(options);
  return core.withFiberRuntime(fiber => core.succeed(unsafeMakeSpan(fiber, name, options)));
};
/* @internal */
exports.makeSpan = makeSpan;
const spanAnnotations = exports.spanAnnotations = /*#__PURE__*/core.fiberRefGet(core.currentTracerSpanAnnotations);
/* @internal */
const spanLinks = exports.spanLinks = /*#__PURE__*/core.fiberRefGet(core.currentTracerSpanLinks);
/** @internal */
const endSpan = (span, exit, clock, timingEnabled) => core.sync(() => {
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
exports.endSpan = endSpan;
const useSpan = (name, ...args) => {
  const options = internalTracer.addSpanStackTrace(args.length === 1 ? undefined : args[0]);
  const evaluate = args[args.length - 1];
  return core.withFiberRuntime(fiber => {
    const span = unsafeMakeSpan(fiber, name, options);
    const timingEnabled = fiber.getFiberRef(core.currentTracerTimingEnabled);
    const clock = Context.get(fiber.getFiberRef(defaultServices.currentServices), _clock.clockTag);
    return core.onExit(evaluate(span), exit => endSpan(span, exit, clock, timingEnabled));
  });
};
/** @internal */
exports.useSpan = useSpan;
const withParentSpan = exports.withParentSpan = /*#__PURE__*/(0, _Function.dual)(2, (self, span) => provideService(self, internalTracer.spanTag, span));
/** @internal */
const withSpan = function () {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options = internalTracer.addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self = arguments[0];
    return useSpan(name, options, span => withParentSpan(self, span));
  }
  return self => useSpan(name, options, span => withParentSpan(self, span));
};
exports.withSpan = withSpan;
const functionWithSpan = options => function () {
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
    return withSpan(core.suspend(() => (0, _Utils.internalCall)(() => options.body.apply(this, arguments))), opts.name, {
      ...opts,
      captureStackTrace
    });
  });
};
// -------------------------------------------------------------------------------------
// optionality
// -------------------------------------------------------------------------------------
/* @internal */
exports.functionWithSpan = functionWithSpan;
const fromNullable = value => value == null ? core.fail(new core.NoSuchElementException()) : core.succeed(value);
/* @internal */
exports.fromNullable = fromNullable;
const optionFromOptional = self => core.catchAll(core.map(self, Option.some), error => core.isNoSuchElementException(error) ? succeedNone : core.fail(error));
exports.optionFromOptional = optionFromOptional;
//# sourceMappingURL=core-effect.js.map