"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whenSTM = exports.when = exports.void = exports.validateFirst = exports.validateAll = exports.unsome = exports.unlessSTM = exports.unless = exports.try_ = exports.tapError = exports.tapBoth = exports.tap = exports.suspend = exports.summarized = exports.succeedSome = exports.succeedNone = exports.some = exports.retryWhile = exports.retryUntil = exports.replicateSTMDiscard = exports.replicateSTM = exports.replicate = exports.repeatWhile = exports.repeatUntil = exports.rejectSTM = exports.reject = exports.refineOrDieWith = exports.refineOrDie = exports.reduceRight = exports.reduceAll = exports.reduce = exports.provideSomeContext = exports.provideServiceSTM = exports.provideService = exports.provideContext = exports.partition = exports.orElseSucceed = exports.orElseOptional = exports.orElseFail = exports.orElseEither = exports.orElse = exports.orDieWith = exports.orDie = exports.option = exports.none = exports.negate = exports.mergeAll = exports.merge = exports.match = exports.mapError = exports.mapBoth = exports.mapAttempt = exports.loop = exports.let_ = exports.iterate = exports.isSuccess = exports.isFailure = exports.ignore = exports.if_ = exports.head = exports.gen = exports.fromOption = exports.fromEither = exports.forEach = exports.flipWith = exports.flip = exports.flatten = exports.filterOrFail = exports.filterOrElse = exports.filterOrDieMessage = exports.filterOrDie = exports.filterNot = exports.filter = exports.fiberId = exports.exists = exports.every = exports.eventually = exports.either = exports.cond = exports.commitEither = exports.collectSTM = exports.collect = exports.check = exports.catchTags = exports.catchTag = exports.catchSome = exports.bindTo = exports.bind = exports.attempt = exports.asVoid = exports.asSomeError = exports.asSome = exports.as = exports.all = exports.acquireUseRelease = void 0;
var RA = _interopRequireWildcard(require("../../Array.js"));
var Cause = _interopRequireWildcard(require("../../Cause.js"));
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var Context = _interopRequireWildcard(require("../../Context.js"));
var Effect = _interopRequireWildcard(require("../../Effect.js"));
var Either = _interopRequireWildcard(require("../../Either.js"));
var Exit = _interopRequireWildcard(require("../../Exit.js"));
var _Function = require("../../Function.js");
var Option = _interopRequireWildcard(require("../../Option.js"));
var predicate = _interopRequireWildcard(require("../../Predicate.js"));
var _Utils = require("../../Utils.js");
var effectCore = _interopRequireWildcard(require("../core.js"));
var core = _interopRequireWildcard(require("./core.js"));
var Journal = _interopRequireWildcard(require("./journal.js"));
var STMState = _interopRequireWildcard(require("./stmState.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const acquireUseRelease = exports.acquireUseRelease = /*#__PURE__*/(0, _Function.dual)(3, (acquire, use, release) => Effect.uninterruptibleMask(restore => {
  let state = STMState.running;
  return (0, _Function.pipe)(restore(core.unsafeAtomically(acquire, exit => {
    state = STMState.done(exit);
  }, () => {
    state = STMState.interrupted;
  })), Effect.matchCauseEffect({
    onFailure: cause => {
      if (STMState.isDone(state) && Exit.isSuccess(state.exit)) {
        return (0, _Function.pipe)(release(state.exit.value), Effect.matchCauseEffect({
          onFailure: cause2 => Effect.failCause(Cause.parallel(cause, cause2)),
          onSuccess: () => Effect.failCause(cause)
        }));
      }
      return Effect.failCause(cause);
    },
    onSuccess: a => (0, _Function.pipe)(restore(use(a)), Effect.matchCauseEffect({
      onFailure: cause => (0, _Function.pipe)(release(a), Effect.matchCauseEffect({
        onFailure: cause2 => Effect.failCause(Cause.parallel(cause, cause2)),
        onSuccess: () => Effect.failCause(cause)
      })),
      onSuccess: a2 => (0, _Function.pipe)(release(a), Effect.as(a2))
    }))
  }));
}));
/** @internal */
const as = exports.as = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => (0, _Function.pipe)(self, core.map(() => value)));
/** @internal */
const asSome = self => (0, _Function.pipe)(self, core.map(Option.some));
/** @internal */
exports.asSome = asSome;
const asSomeError = self => (0, _Function.pipe)(self, mapError(Option.some));
/** @internal */
exports.asSomeError = asSomeError;
const asVoid = self => (0, _Function.pipe)(self, core.map(_Function.constVoid));
/** @internal */
exports.asVoid = asVoid;
const attempt = evaluate => suspend(() => {
  try {
    return core.succeed(evaluate());
  } catch (defect) {
    return core.fail(defect);
  }
});
exports.attempt = attempt;
const bind = exports.bind = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, f) => core.flatMap(self, k => core.map(f(k), a => ({
  ...k,
  [tag]: a
}))));
/* @internal */
const bindTo = exports.bindTo = /*#__PURE__*/(0, _Function.dual)(2, (self, tag) => core.map(self, a => ({
  [tag]: a
})));
/* @internal */
const let_ = exports.let_ = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, f) => core.map(self, k => ({
  ...k,
  [tag]: f(k)
})));
/** @internal */
const catchSome = exports.catchSome = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => core.catchAll(self, e => Option.getOrElse(pf(e), () => core.fail(e))));
/** @internal */
const catchTag = exports.catchTag = /*#__PURE__*/(0, _Function.dual)(3, (self, k, f) => core.catchAll(self, e => {
  if ("_tag" in e && e["_tag"] === k) {
    return f(e);
  }
  return core.fail(e);
}));
/** @internal */
const catchTags = exports.catchTags = /*#__PURE__*/(0, _Function.dual)(2, (self, cases) => core.catchAll(self, e => {
  const keys = Object.keys(cases);
  if ("_tag" in e && keys.includes(e["_tag"])) {
    return cases[e["_tag"]](e);
  }
  return core.fail(e);
}));
/** @internal */
const check = predicate => suspend(() => predicate() ? void_ : core.retry);
/** @internal */
exports.check = check;
const collect = exports.collect = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => collectSTM(self, a => Option.map(pf(a), core.succeed)));
/** @internal */
const collectSTM = exports.collectSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => core.matchSTM(self, {
  onFailure: core.fail,
  onSuccess: a => {
    const option = pf(a);
    return Option.isSome(option) ? option.value : core.retry;
  }
}));
/** @internal */
const commitEither = self => Effect.flatten(core.commit(either(self)));
/** @internal */
exports.commitEither = commitEither;
const cond = (predicate, error, result) => {
  return suspend(() => predicate() ? core.sync(result) : core.failSync(error));
};
/** @internal */
exports.cond = cond;
const either = self => match(self, {
  onFailure: Either.left,
  onSuccess: Either.right
});
/** @internal */
exports.either = either;
const eventually = self => core.matchSTM(self, {
  onFailure: () => eventually(self),
  onSuccess: core.succeed
});
/** @internal */
exports.eventually = eventually;
const every = exports.every = /*#__PURE__*/(0, _Function.dual)(2, (iterable, predicate) => core.flatMap(core.sync(() => iterable[Symbol.iterator]()), iterator => {
  const loop = suspend(() => {
    const next = iterator.next();
    if (next.done) {
      return core.succeed(true);
    }
    return (0, _Function.pipe)(predicate(next.value), core.flatMap(bool => bool ? loop : core.succeed(bool)));
  });
  return loop;
}));
/** @internal */
const exists = exports.exists = /*#__PURE__*/(0, _Function.dual)(2, (iterable, predicate) => core.flatMap(core.sync(() => iterable[Symbol.iterator]()), iterator => {
  const loop = suspend(() => {
    const next = iterator.next();
    if (next.done) {
      return core.succeed(false);
    }
    return core.flatMap(predicate(next.value), bool => bool ? core.succeed(bool) : loop);
  });
  return loop;
}));
/** @internal */
const fiberId = exports.fiberId = /*#__PURE__*/core.effect((_, fiberId) => fiberId);
/** @internal */
const filter = exports.filter = /*#__PURE__*/(0, _Function.dual)(2, (iterable, predicate) => Array.from(iterable).reduce((acc, curr) => (0, _Function.pipe)(acc, core.zipWith(predicate(curr), (as, p) => {
  if (p) {
    as.push(curr);
    return as;
  }
  return as;
})), core.succeed([])));
/** @internal */
const filterNot = exports.filterNot = /*#__PURE__*/(0, _Function.dual)(2, (iterable, predicate) => filter(iterable, a => negate(predicate(a))));
/** @internal */
const filterOrDie = exports.filterOrDie = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, defect) => filterOrElse(self, predicate, () => core.dieSync(defect)));
/** @internal */
const filterOrDieMessage = exports.filterOrDieMessage = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, message) => filterOrElse(self, predicate, () => core.dieMessage(message)));
/** @internal */
const filterOrElse = exports.filterOrElse = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, orElse) => core.flatMap(self, a => predicate(a) ? core.succeed(a) : orElse(a)));
/** @internal */
const filterOrFail = exports.filterOrFail = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, orFailWith) => filterOrElse(self, predicate, a => core.failSync(() => orFailWith(a))));
/** @internal */
const flatten = self => core.flatMap(self, _Function.identity);
/** @internal */
exports.flatten = flatten;
const flip = self => core.matchSTM(self, {
  onFailure: core.succeed,
  onSuccess: core.fail
});
/** @internal */
exports.flip = flip;
const flipWith = exports.flipWith = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => flip(f(flip(self))));
/** @internal */
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onFailure,
  onSuccess
}) => core.matchSTM(self, {
  onFailure: e => core.succeed(onFailure(e)),
  onSuccess: a => core.succeed(onSuccess(a))
}));
/** @internal */
const forEach = exports.forEach = /*#__PURE__*/(0, _Function.dual)(args => predicate.isIterable(args[0]), (iterable, f, options) => {
  if (options?.discard) {
    return (0, _Function.pipe)(core.sync(() => iterable[Symbol.iterator]()), core.flatMap(iterator => {
      const loop = suspend(() => {
        const next = iterator.next();
        if (next.done) {
          return void_;
        }
        return (0, _Function.pipe)(f(next.value), core.flatMap(() => loop));
      });
      return loop;
    }));
  }
  return suspend(() => RA.fromIterable(iterable).reduce((acc, curr) => core.zipWith(acc, f(curr), (array, elem) => {
    array.push(elem);
    return array;
  }), core.succeed([])));
});
/** @internal */
const fromEither = either => {
  switch (either._tag) {
    case "Left":
      {
        return core.fail(either.left);
      }
    case "Right":
      {
        return core.succeed(either.right);
      }
  }
};
/** @internal */
exports.fromEither = fromEither;
const fromOption = option => Option.match(option, {
  onNone: () => core.fail(Option.none()),
  onSome: core.succeed
});
/**
 * Inspired by https://github.com/tusharmath/qio/pull/22 (revised)
 * @internal
 */
exports.fromOption = fromOption;
const gen = (...args) => suspend(() => {
  const f = args.length === 1 ? args[0] : args[1].bind(args[0]);
  const iterator = f(_Function.pipe);
  const state = iterator.next();
  const run = state => state.done ? core.succeed(state.value) : core.flatMap((0, _Utils.yieldWrapGet)(state.value), val => run(iterator.next(val)));
  return run(state);
});
/** @internal */
exports.gen = gen;
const head = self => (0, _Function.pipe)(self, core.matchSTM({
  onFailure: e => core.fail(Option.some(e)),
  onSuccess: a => {
    const i = a[Symbol.iterator]();
    const res = i.next();
    if (res.done) {
      return core.fail(Option.none());
    } else {
      return core.succeed(res.value);
    }
  }
}));
/** @internal */
exports.head = head;
const if_ = exports.if_ = /*#__PURE__*/(0, _Function.dual)(args => typeof args[0] === "boolean" || core.isSTM(args[0]), (self, {
  onFalse,
  onTrue
}) => {
  if (typeof self === "boolean") {
    return self ? onTrue : onFalse;
  }
  return core.flatMap(self, bool => bool ? onTrue : onFalse);
});
/** @internal */
const ignore = self => match(self, {
  onFailure: () => void_,
  onSuccess: () => void_
});
/** @internal */
exports.ignore = ignore;
const isFailure = self => match(self, {
  onFailure: _Function.constTrue,
  onSuccess: _Function.constFalse
});
/** @internal */
exports.isFailure = isFailure;
const isSuccess = self => match(self, {
  onFailure: _Function.constFalse,
  onSuccess: _Function.constTrue
});
/** @internal */
exports.isSuccess = isSuccess;
const iterate = (initial, options) => iterateLoop(initial, options.while, options.body);
exports.iterate = iterate;
const iterateLoop = (initial, cont, body) => {
  if (cont(initial)) {
    return (0, _Function.pipe)(body(initial), core.flatMap(z => iterateLoop(z, cont, body)));
  }
  return core.succeed(initial);
};
/** @internal */
const loop = (initial, options) => options.discard ? loopDiscardLoop(initial, options.while, options.step, options.body) : core.map(loopLoop(initial, options.while, options.step, options.body), a => Array.from(a));
exports.loop = loop;
const loopLoop = (initial, cont, inc, body) => {
  if (cont(initial)) {
    return (0, _Function.pipe)(body(initial), core.flatMap(a => (0, _Function.pipe)(loopLoop(inc(initial), cont, inc, body), core.map(Chunk.append(a)))));
  }
  return core.succeed(Chunk.empty());
};
const loopDiscardLoop = (initial, cont, inc, body) => {
  if (cont(initial)) {
    return (0, _Function.pipe)(body(initial), core.flatMap(() => loopDiscardLoop(inc(initial), cont, inc, body)));
  }
  return void_;
};
/** @internal */
const mapAttempt = exports.mapAttempt = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.matchSTM(self, {
  onFailure: e => core.fail(e),
  onSuccess: a => attempt(() => f(a))
}));
/** @internal */
const mapBoth = exports.mapBoth = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onFailure,
  onSuccess
}) => core.matchSTM(self, {
  onFailure: e => core.fail(onFailure(e)),
  onSuccess: a => core.succeed(onSuccess(a))
}));
/** @internal */
const mapError = exports.mapError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.matchSTM(self, {
  onFailure: e => core.fail(f(e)),
  onSuccess: core.succeed
}));
/** @internal */
const merge = self => core.matchSTM(self, {
  onFailure: e => core.succeed(e),
  onSuccess: core.succeed
});
/** @internal */
exports.merge = merge;
const mergeAll = exports.mergeAll = /*#__PURE__*/(0, _Function.dual)(3, (iterable, zero, f) => suspend(() => Array.from(iterable).reduce((acc, curr) => (0, _Function.pipe)(acc, core.zipWith(curr, f)), core.succeed(zero))));
/** @internal */
const negate = self => (0, _Function.pipe)(self, core.map(b => !b));
/** @internal */
exports.negate = negate;
const none = self => core.matchSTM(self, {
  onFailure: e => core.fail(Option.some(e)),
  onSuccess: Option.match({
    onNone: () => void_,
    onSome: () => core.fail(Option.none())
  })
});
/** @internal */
exports.none = none;
const option = self => match(self, {
  onFailure: () => Option.none(),
  onSuccess: Option.some
});
/** @internal */
exports.option = option;
const orDie = self => (0, _Function.pipe)(self, orDieWith(_Function.identity));
/** @internal */
exports.orDie = orDie;
const orDieWith = exports.orDieWith = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, mapError(f), core.catchAll(core.die)));
/** @internal */
const orElse = exports.orElse = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => core.flatMap(core.effect(journal => Journal.prepareResetJournal(journal)), reset => (0, _Function.pipe)(core.orTry(self, () => core.flatMap(core.sync(reset), that)), core.catchAll(() => core.flatMap(core.sync(reset), that)))));
/** @internal */
const orElseEither = exports.orElseEither = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => orElse(core.map(self, Either.left), () => core.map(that(), Either.right)));
/** @internal */
const orElseFail = exports.orElseFail = /*#__PURE__*/(0, _Function.dual)(2, (self, error) => orElse(self, () => core.failSync(error)));
/** @internal */
const orElseOptional = exports.orElseOptional = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => core.catchAll(self, Option.match({
  onNone: that,
  onSome: e => core.fail(Option.some(e))
})));
/** @internal */
const orElseSucceed = exports.orElseSucceed = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => orElse(self, () => core.sync(value)));
/** @internal */
const provideContext = exports.provideContext = /*#__PURE__*/(0, _Function.dual)(2, (self, env) => core.mapInputContext(self, _ => env));
/** @internal */
const provideSomeContext = exports.provideSomeContext = /*#__PURE__*/(0, _Function.dual)(2, (self, context) => core.mapInputContext(self, parent => Context.merge(parent, context)));
/** @internal */
const provideService = exports.provideService = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, resource) => provideServiceSTM(self, tag, core.succeed(resource)));
/** @internal */
const provideServiceSTM = exports.provideServiceSTM = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, stm) => core.contextWithSTM(env => core.flatMap(stm, service => provideContext(self, Context.add(env, tag, service)))));
/** @internal */
const reduce = exports.reduce = /*#__PURE__*/(0, _Function.dual)(3, (iterable, zero, f) => suspend(() => Array.from(iterable).reduce((acc, curr) => (0, _Function.pipe)(acc, core.flatMap(s => f(s, curr))), core.succeed(zero))));
/** @internal */
const reduceAll = exports.reduceAll = /*#__PURE__*/(0, _Function.dual)(3, (iterable, initial, f) => suspend(() => Array.from(iterable).reduce((acc, curr) => (0, _Function.pipe)(acc, core.zipWith(curr, f)), initial)));
/** @internal */
const reduceRight = exports.reduceRight = /*#__PURE__*/(0, _Function.dual)(3, (iterable, zero, f) => suspend(() => Array.from(iterable).reduceRight((acc, curr) => (0, _Function.pipe)(acc, core.flatMap(s => f(s, curr))), core.succeed(zero))));
/** @internal */
const refineOrDie = exports.refineOrDie = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => refineOrDieWith(self, pf, _Function.identity));
/** @internal */
const refineOrDieWith = exports.refineOrDieWith = /*#__PURE__*/(0, _Function.dual)(3, (self, pf, f) => core.catchAll(self, e => Option.match(pf(e), {
  onNone: () => core.die(f(e)),
  onSome: core.fail
})));
/** @internal */
const reject = exports.reject = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => rejectSTM(self, a => Option.map(pf(a), core.fail)));
/** @internal */
const rejectSTM = exports.rejectSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => core.flatMap(self, a => Option.match(pf(a), {
  onNone: () => core.succeed(a),
  onSome: core.flatMap(core.fail)
})));
/** @internal */
const repeatUntil = exports.repeatUntil = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => repeatUntilLoop(self, predicate));
const repeatUntilLoop = (self, predicate) => core.flatMap(self, a => predicate(a) ? core.succeed(a) : repeatUntilLoop(self, predicate));
/** @internal */
const repeatWhile = exports.repeatWhile = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => repeatWhileLoop(self, predicate));
const repeatWhileLoop = (self, predicate) => core.flatMap(self, a => predicate(a) ? repeatWhileLoop(self, predicate) : core.succeed(a));
/** @internal */
const replicate = exports.replicate = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => Array.from({
  length: n
}, () => self));
/** @internal */
const replicateSTM = exports.replicateSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => all(replicate(self, n)));
/** @internal */
const replicateSTMDiscard = exports.replicateSTMDiscard = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => all(replicate(self, n), {
  discard: true
}));
/** @internal */
const retryUntil = exports.retryUntil = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => core.matchSTM(self, {
  onFailure: core.fail,
  onSuccess: a => predicate(a) ? core.succeed(a) : core.retry
}));
/** @internal */
const retryWhile = exports.retryWhile = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => core.matchSTM(self, {
  onFailure: core.fail,
  onSuccess: a => !predicate(a) ? core.succeed(a) : core.retry
}));
/** @internal */
const partition = exports.partition = /*#__PURE__*/(0, _Function.dual)(2, (elements, f) => (0, _Function.pipe)(forEach(elements, a => either(f(a))), core.map(as => effectCore.partitionMap(as, _Function.identity))));
/** @internal */
const some = self => core.matchSTM(self, {
  onFailure: e => core.fail(Option.some(e)),
  onSuccess: Option.match({
    onNone: () => core.fail(Option.none()),
    onSome: core.succeed
  })
});
/* @internal */
exports.some = some;
const all = (input, options) => {
  if (Symbol.iterator in input) {
    return forEach(input, _Function.identity, options);
  } else if (options?.discard) {
    return forEach(Object.values(input), _Function.identity, options);
  }
  return core.map(forEach(Object.entries(input), ([_, e]) => core.map(e, a => [_, a])), values => {
    const res = {};
    for (const [k, v] of values) {
      ;
      res[k] = v;
    }
    return res;
  });
};
/** @internal */
exports.all = all;
const succeedNone = exports.succeedNone = /*#__PURE__*/core.succeed(/*#__PURE__*/Option.none());
/** @internal */
const succeedSome = value => core.succeed(Option.some(value));
/** @internal */
exports.succeedSome = succeedSome;
const summarized = exports.summarized = /*#__PURE__*/(0, _Function.dual)(3, (self, summary, f) => core.flatMap(summary, start => core.flatMap(self, value => core.map(summary, end => [f(start, end), value]))));
/** @internal */
const suspend = evaluate => flatten(core.sync(evaluate));
/** @internal */
exports.suspend = suspend;
const tap = exports.tap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.flatMap(self, a => as(f(a), a)));
/** @internal */
const tapBoth = exports.tapBoth = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onFailure,
  onSuccess
}) => core.matchSTM(self, {
  onFailure: e => (0, _Function.pipe)(onFailure(e), core.zipRight(core.fail(e))),
  onSuccess: a => (0, _Function.pipe)(onSuccess(a), as(a))
}));
/** @internal */
const tapError = exports.tapError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.matchSTM(self, {
  onFailure: e => core.zipRight(f(e), core.fail(e)),
  onSuccess: core.succeed
}));
/** @internal */
const try_ = arg => {
  const evaluate = typeof arg === "function" ? arg : arg.try;
  return suspend(() => {
    try {
      return core.succeed(evaluate());
    } catch (error) {
      return core.fail("catch" in arg ? arg.catch(error) : error);
    }
  });
};
/** @internal */
exports.try_ = try_;
const void_ = exports.void = /*#__PURE__*/core.succeed(void 0);
/** @internal */
const unless = exports.unless = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => suspend(() => predicate() ? succeedNone : asSome(self)));
/** @internal */
const unlessSTM = exports.unlessSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => core.flatMap(predicate, bool => bool ? succeedNone : asSome(self)));
/** @internal */
const unsome = self => core.matchSTM(self, {
  onFailure: Option.match({
    onNone: () => core.succeed(Option.none()),
    onSome: core.fail
  }),
  onSuccess: a => core.succeed(Option.some(a))
});
/** @internal */
exports.unsome = unsome;
const validateAll = exports.validateAll = /*#__PURE__*/(0, _Function.dual)(2, (elements, f) => core.flatMap(partition(elements, f), ([errors, values]) => RA.isNonEmptyArray(errors) ? core.fail(errors) : core.succeed(values)));
/** @internal */
const validateFirst = exports.validateFirst = /*#__PURE__*/(0, _Function.dual)(2, (elements, f) => flip(forEach(elements, a => flip(f(a)))));
/** @internal */
const when = exports.when = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => suspend(() => predicate() ? asSome(self) : succeedNone));
/** @internal */
const whenSTM = exports.whenSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => core.flatMap(predicate, bool => bool ? asSome(self) : succeedNone));
//# sourceMappingURL=stm.js.map