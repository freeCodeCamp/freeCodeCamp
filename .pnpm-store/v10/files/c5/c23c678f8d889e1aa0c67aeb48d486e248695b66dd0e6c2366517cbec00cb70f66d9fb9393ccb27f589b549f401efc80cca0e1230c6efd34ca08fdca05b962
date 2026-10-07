import * as RA from "../../Array.js";
import * as Cause from "../../Cause.js";
import * as Chunk from "../../Chunk.js";
import * as Context from "../../Context.js";
import * as Effect from "../../Effect.js";
import * as Either from "../../Either.js";
import * as Exit from "../../Exit.js";
import { constFalse, constTrue, constVoid, dual, identity, pipe } from "../../Function.js";
import * as Option from "../../Option.js";
import * as predicate from "../../Predicate.js";
import { yieldWrapGet } from "../../Utils.js";
import * as effectCore from "../core.js";
import * as core from "./core.js";
import * as Journal from "./journal.js";
import * as STMState from "./stmState.js";
/** @internal */
export const acquireUseRelease = /*#__PURE__*/dual(3, (acquire, use, release) => Effect.uninterruptibleMask(restore => {
  let state = STMState.running;
  return pipe(restore(core.unsafeAtomically(acquire, exit => {
    state = STMState.done(exit);
  }, () => {
    state = STMState.interrupted;
  })), Effect.matchCauseEffect({
    onFailure: cause => {
      if (STMState.isDone(state) && Exit.isSuccess(state.exit)) {
        return pipe(release(state.exit.value), Effect.matchCauseEffect({
          onFailure: cause2 => Effect.failCause(Cause.parallel(cause, cause2)),
          onSuccess: () => Effect.failCause(cause)
        }));
      }
      return Effect.failCause(cause);
    },
    onSuccess: a => pipe(restore(use(a)), Effect.matchCauseEffect({
      onFailure: cause => pipe(release(a), Effect.matchCauseEffect({
        onFailure: cause2 => Effect.failCause(Cause.parallel(cause, cause2)),
        onSuccess: () => Effect.failCause(cause)
      })),
      onSuccess: a2 => pipe(release(a), Effect.as(a2))
    }))
  }));
}));
/** @internal */
export const as = /*#__PURE__*/dual(2, (self, value) => pipe(self, core.map(() => value)));
/** @internal */
export const asSome = self => pipe(self, core.map(Option.some));
/** @internal */
export const asSomeError = self => pipe(self, mapError(Option.some));
/** @internal */
export const asVoid = self => pipe(self, core.map(constVoid));
/** @internal */
export const attempt = evaluate => suspend(() => {
  try {
    return core.succeed(evaluate());
  } catch (defect) {
    return core.fail(defect);
  }
});
export const bind = /*#__PURE__*/dual(3, (self, tag, f) => core.flatMap(self, k => core.map(f(k), a => ({
  ...k,
  [tag]: a
}))));
/* @internal */
export const bindTo = /*#__PURE__*/dual(2, (self, tag) => core.map(self, a => ({
  [tag]: a
})));
/* @internal */
export const let_ = /*#__PURE__*/dual(3, (self, tag, f) => core.map(self, k => ({
  ...k,
  [tag]: f(k)
})));
/** @internal */
export const catchSome = /*#__PURE__*/dual(2, (self, pf) => core.catchAll(self, e => Option.getOrElse(pf(e), () => core.fail(e))));
/** @internal */
export const catchTag = /*#__PURE__*/dual(3, (self, k, f) => core.catchAll(self, e => {
  if ("_tag" in e && e["_tag"] === k) {
    return f(e);
  }
  return core.fail(e);
}));
/** @internal */
export const catchTags = /*#__PURE__*/dual(2, (self, cases) => core.catchAll(self, e => {
  const keys = Object.keys(cases);
  if ("_tag" in e && keys.includes(e["_tag"])) {
    return cases[e["_tag"]](e);
  }
  return core.fail(e);
}));
/** @internal */
export const check = predicate => suspend(() => predicate() ? void_ : core.retry);
/** @internal */
export const collect = /*#__PURE__*/dual(2, (self, pf) => collectSTM(self, a => Option.map(pf(a), core.succeed)));
/** @internal */
export const collectSTM = /*#__PURE__*/dual(2, (self, pf) => core.matchSTM(self, {
  onFailure: core.fail,
  onSuccess: a => {
    const option = pf(a);
    return Option.isSome(option) ? option.value : core.retry;
  }
}));
/** @internal */
export const commitEither = self => Effect.flatten(core.commit(either(self)));
/** @internal */
export const cond = (predicate, error, result) => {
  return suspend(() => predicate() ? core.sync(result) : core.failSync(error));
};
/** @internal */
export const either = self => match(self, {
  onFailure: Either.left,
  onSuccess: Either.right
});
/** @internal */
export const eventually = self => core.matchSTM(self, {
  onFailure: () => eventually(self),
  onSuccess: core.succeed
});
/** @internal */
export const every = /*#__PURE__*/dual(2, (iterable, predicate) => core.flatMap(core.sync(() => iterable[Symbol.iterator]()), iterator => {
  const loop = suspend(() => {
    const next = iterator.next();
    if (next.done) {
      return core.succeed(true);
    }
    return pipe(predicate(next.value), core.flatMap(bool => bool ? loop : core.succeed(bool)));
  });
  return loop;
}));
/** @internal */
export const exists = /*#__PURE__*/dual(2, (iterable, predicate) => core.flatMap(core.sync(() => iterable[Symbol.iterator]()), iterator => {
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
export const fiberId = /*#__PURE__*/core.effect((_, fiberId) => fiberId);
/** @internal */
export const filter = /*#__PURE__*/dual(2, (iterable, predicate) => Array.from(iterable).reduce((acc, curr) => pipe(acc, core.zipWith(predicate(curr), (as, p) => {
  if (p) {
    as.push(curr);
    return as;
  }
  return as;
})), core.succeed([])));
/** @internal */
export const filterNot = /*#__PURE__*/dual(2, (iterable, predicate) => filter(iterable, a => negate(predicate(a))));
/** @internal */
export const filterOrDie = /*#__PURE__*/dual(3, (self, predicate, defect) => filterOrElse(self, predicate, () => core.dieSync(defect)));
/** @internal */
export const filterOrDieMessage = /*#__PURE__*/dual(3, (self, predicate, message) => filterOrElse(self, predicate, () => core.dieMessage(message)));
/** @internal */
export const filterOrElse = /*#__PURE__*/dual(3, (self, predicate, orElse) => core.flatMap(self, a => predicate(a) ? core.succeed(a) : orElse(a)));
/** @internal */
export const filterOrFail = /*#__PURE__*/dual(3, (self, predicate, orFailWith) => filterOrElse(self, predicate, a => core.failSync(() => orFailWith(a))));
/** @internal */
export const flatten = self => core.flatMap(self, identity);
/** @internal */
export const flip = self => core.matchSTM(self, {
  onFailure: core.succeed,
  onSuccess: core.fail
});
/** @internal */
export const flipWith = /*#__PURE__*/dual(2, (self, f) => flip(f(flip(self))));
/** @internal */
export const match = /*#__PURE__*/dual(2, (self, {
  onFailure,
  onSuccess
}) => core.matchSTM(self, {
  onFailure: e => core.succeed(onFailure(e)),
  onSuccess: a => core.succeed(onSuccess(a))
}));
/** @internal */
export const forEach = /*#__PURE__*/dual(args => predicate.isIterable(args[0]), (iterable, f, options) => {
  if (options?.discard) {
    return pipe(core.sync(() => iterable[Symbol.iterator]()), core.flatMap(iterator => {
      const loop = suspend(() => {
        const next = iterator.next();
        if (next.done) {
          return void_;
        }
        return pipe(f(next.value), core.flatMap(() => loop));
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
export const fromEither = either => {
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
export const fromOption = option => Option.match(option, {
  onNone: () => core.fail(Option.none()),
  onSome: core.succeed
});
/**
 * Inspired by https://github.com/tusharmath/qio/pull/22 (revised)
 * @internal
 */
export const gen = (...args) => suspend(() => {
  const f = args.length === 1 ? args[0] : args[1].bind(args[0]);
  const iterator = f(pipe);
  const state = iterator.next();
  const run = state => state.done ? core.succeed(state.value) : core.flatMap(yieldWrapGet(state.value), val => run(iterator.next(val)));
  return run(state);
});
/** @internal */
export const head = self => pipe(self, core.matchSTM({
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
export const if_ = /*#__PURE__*/dual(args => typeof args[0] === "boolean" || core.isSTM(args[0]), (self, {
  onFalse,
  onTrue
}) => {
  if (typeof self === "boolean") {
    return self ? onTrue : onFalse;
  }
  return core.flatMap(self, bool => bool ? onTrue : onFalse);
});
/** @internal */
export const ignore = self => match(self, {
  onFailure: () => void_,
  onSuccess: () => void_
});
/** @internal */
export const isFailure = self => match(self, {
  onFailure: constTrue,
  onSuccess: constFalse
});
/** @internal */
export const isSuccess = self => match(self, {
  onFailure: constFalse,
  onSuccess: constTrue
});
/** @internal */
export const iterate = (initial, options) => iterateLoop(initial, options.while, options.body);
const iterateLoop = (initial, cont, body) => {
  if (cont(initial)) {
    return pipe(body(initial), core.flatMap(z => iterateLoop(z, cont, body)));
  }
  return core.succeed(initial);
};
/** @internal */
export const loop = (initial, options) => options.discard ? loopDiscardLoop(initial, options.while, options.step, options.body) : core.map(loopLoop(initial, options.while, options.step, options.body), a => Array.from(a));
const loopLoop = (initial, cont, inc, body) => {
  if (cont(initial)) {
    return pipe(body(initial), core.flatMap(a => pipe(loopLoop(inc(initial), cont, inc, body), core.map(Chunk.append(a)))));
  }
  return core.succeed(Chunk.empty());
};
const loopDiscardLoop = (initial, cont, inc, body) => {
  if (cont(initial)) {
    return pipe(body(initial), core.flatMap(() => loopDiscardLoop(inc(initial), cont, inc, body)));
  }
  return void_;
};
/** @internal */
export const mapAttempt = /*#__PURE__*/dual(2, (self, f) => core.matchSTM(self, {
  onFailure: e => core.fail(e),
  onSuccess: a => attempt(() => f(a))
}));
/** @internal */
export const mapBoth = /*#__PURE__*/dual(2, (self, {
  onFailure,
  onSuccess
}) => core.matchSTM(self, {
  onFailure: e => core.fail(onFailure(e)),
  onSuccess: a => core.succeed(onSuccess(a))
}));
/** @internal */
export const mapError = /*#__PURE__*/dual(2, (self, f) => core.matchSTM(self, {
  onFailure: e => core.fail(f(e)),
  onSuccess: core.succeed
}));
/** @internal */
export const merge = self => core.matchSTM(self, {
  onFailure: e => core.succeed(e),
  onSuccess: core.succeed
});
/** @internal */
export const mergeAll = /*#__PURE__*/dual(3, (iterable, zero, f) => suspend(() => Array.from(iterable).reduce((acc, curr) => pipe(acc, core.zipWith(curr, f)), core.succeed(zero))));
/** @internal */
export const negate = self => pipe(self, core.map(b => !b));
/** @internal */
export const none = self => core.matchSTM(self, {
  onFailure: e => core.fail(Option.some(e)),
  onSuccess: Option.match({
    onNone: () => void_,
    onSome: () => core.fail(Option.none())
  })
});
/** @internal */
export const option = self => match(self, {
  onFailure: () => Option.none(),
  onSuccess: Option.some
});
/** @internal */
export const orDie = self => pipe(self, orDieWith(identity));
/** @internal */
export const orDieWith = /*#__PURE__*/dual(2, (self, f) => pipe(self, mapError(f), core.catchAll(core.die)));
/** @internal */
export const orElse = /*#__PURE__*/dual(2, (self, that) => core.flatMap(core.effect(journal => Journal.prepareResetJournal(journal)), reset => pipe(core.orTry(self, () => core.flatMap(core.sync(reset), that)), core.catchAll(() => core.flatMap(core.sync(reset), that)))));
/** @internal */
export const orElseEither = /*#__PURE__*/dual(2, (self, that) => orElse(core.map(self, Either.left), () => core.map(that(), Either.right)));
/** @internal */
export const orElseFail = /*#__PURE__*/dual(2, (self, error) => orElse(self, () => core.failSync(error)));
/** @internal */
export const orElseOptional = /*#__PURE__*/dual(2, (self, that) => core.catchAll(self, Option.match({
  onNone: that,
  onSome: e => core.fail(Option.some(e))
})));
/** @internal */
export const orElseSucceed = /*#__PURE__*/dual(2, (self, value) => orElse(self, () => core.sync(value)));
/** @internal */
export const provideContext = /*#__PURE__*/dual(2, (self, env) => core.mapInputContext(self, _ => env));
/** @internal */
export const provideSomeContext = /*#__PURE__*/dual(2, (self, context) => core.mapInputContext(self, parent => Context.merge(parent, context)));
/** @internal */
export const provideService = /*#__PURE__*/dual(3, (self, tag, resource) => provideServiceSTM(self, tag, core.succeed(resource)));
/** @internal */
export const provideServiceSTM = /*#__PURE__*/dual(3, (self, tag, stm) => core.contextWithSTM(env => core.flatMap(stm, service => provideContext(self, Context.add(env, tag, service)))));
/** @internal */
export const reduce = /*#__PURE__*/dual(3, (iterable, zero, f) => suspend(() => Array.from(iterable).reduce((acc, curr) => pipe(acc, core.flatMap(s => f(s, curr))), core.succeed(zero))));
/** @internal */
export const reduceAll = /*#__PURE__*/dual(3, (iterable, initial, f) => suspend(() => Array.from(iterable).reduce((acc, curr) => pipe(acc, core.zipWith(curr, f)), initial)));
/** @internal */
export const reduceRight = /*#__PURE__*/dual(3, (iterable, zero, f) => suspend(() => Array.from(iterable).reduceRight((acc, curr) => pipe(acc, core.flatMap(s => f(s, curr))), core.succeed(zero))));
/** @internal */
export const refineOrDie = /*#__PURE__*/dual(2, (self, pf) => refineOrDieWith(self, pf, identity));
/** @internal */
export const refineOrDieWith = /*#__PURE__*/dual(3, (self, pf, f) => core.catchAll(self, e => Option.match(pf(e), {
  onNone: () => core.die(f(e)),
  onSome: core.fail
})));
/** @internal */
export const reject = /*#__PURE__*/dual(2, (self, pf) => rejectSTM(self, a => Option.map(pf(a), core.fail)));
/** @internal */
export const rejectSTM = /*#__PURE__*/dual(2, (self, pf) => core.flatMap(self, a => Option.match(pf(a), {
  onNone: () => core.succeed(a),
  onSome: core.flatMap(core.fail)
})));
/** @internal */
export const repeatUntil = /*#__PURE__*/dual(2, (self, predicate) => repeatUntilLoop(self, predicate));
const repeatUntilLoop = (self, predicate) => core.flatMap(self, a => predicate(a) ? core.succeed(a) : repeatUntilLoop(self, predicate));
/** @internal */
export const repeatWhile = /*#__PURE__*/dual(2, (self, predicate) => repeatWhileLoop(self, predicate));
const repeatWhileLoop = (self, predicate) => core.flatMap(self, a => predicate(a) ? repeatWhileLoop(self, predicate) : core.succeed(a));
/** @internal */
export const replicate = /*#__PURE__*/dual(2, (self, n) => Array.from({
  length: n
}, () => self));
/** @internal */
export const replicateSTM = /*#__PURE__*/dual(2, (self, n) => all(replicate(self, n)));
/** @internal */
export const replicateSTMDiscard = /*#__PURE__*/dual(2, (self, n) => all(replicate(self, n), {
  discard: true
}));
/** @internal */
export const retryUntil = /*#__PURE__*/dual(2, (self, predicate) => core.matchSTM(self, {
  onFailure: core.fail,
  onSuccess: a => predicate(a) ? core.succeed(a) : core.retry
}));
/** @internal */
export const retryWhile = /*#__PURE__*/dual(2, (self, predicate) => core.matchSTM(self, {
  onFailure: core.fail,
  onSuccess: a => !predicate(a) ? core.succeed(a) : core.retry
}));
/** @internal */
export const partition = /*#__PURE__*/dual(2, (elements, f) => pipe(forEach(elements, a => either(f(a))), core.map(as => effectCore.partitionMap(as, identity))));
/** @internal */
export const some = self => core.matchSTM(self, {
  onFailure: e => core.fail(Option.some(e)),
  onSuccess: Option.match({
    onNone: () => core.fail(Option.none()),
    onSome: core.succeed
  })
});
/* @internal */
export const all = (input, options) => {
  if (Symbol.iterator in input) {
    return forEach(input, identity, options);
  } else if (options?.discard) {
    return forEach(Object.values(input), identity, options);
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
export const succeedNone = /*#__PURE__*/core.succeed(/*#__PURE__*/Option.none());
/** @internal */
export const succeedSome = value => core.succeed(Option.some(value));
/** @internal */
export const summarized = /*#__PURE__*/dual(3, (self, summary, f) => core.flatMap(summary, start => core.flatMap(self, value => core.map(summary, end => [f(start, end), value]))));
/** @internal */
export const suspend = evaluate => flatten(core.sync(evaluate));
/** @internal */
export const tap = /*#__PURE__*/dual(2, (self, f) => core.flatMap(self, a => as(f(a), a)));
/** @internal */
export const tapBoth = /*#__PURE__*/dual(2, (self, {
  onFailure,
  onSuccess
}) => core.matchSTM(self, {
  onFailure: e => pipe(onFailure(e), core.zipRight(core.fail(e))),
  onSuccess: a => pipe(onSuccess(a), as(a))
}));
/** @internal */
export const tapError = /*#__PURE__*/dual(2, (self, f) => core.matchSTM(self, {
  onFailure: e => core.zipRight(f(e), core.fail(e)),
  onSuccess: core.succeed
}));
/** @internal */
export const try_ = arg => {
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
const void_ = /*#__PURE__*/core.succeed(void 0);
export { /** @internal */
void_ as void };
/** @internal */
export const unless = /*#__PURE__*/dual(2, (self, predicate) => suspend(() => predicate() ? succeedNone : asSome(self)));
/** @internal */
export const unlessSTM = /*#__PURE__*/dual(2, (self, predicate) => core.flatMap(predicate, bool => bool ? succeedNone : asSome(self)));
/** @internal */
export const unsome = self => core.matchSTM(self, {
  onFailure: Option.match({
    onNone: () => core.succeed(Option.none()),
    onSome: core.fail
  }),
  onSuccess: a => core.succeed(Option.some(a))
});
/** @internal */
export const validateAll = /*#__PURE__*/dual(2, (elements, f) => core.flatMap(partition(elements, f), ([errors, values]) => RA.isNonEmptyArray(errors) ? core.fail(errors) : core.succeed(values)));
/** @internal */
export const validateFirst = /*#__PURE__*/dual(2, (elements, f) => flip(forEach(elements, a => flip(f(a)))));
/** @internal */
export const when = /*#__PURE__*/dual(2, (self, predicate) => suspend(() => predicate() ? asSome(self) : succeedNone));
/** @internal */
export const whenSTM = /*#__PURE__*/dual(2, (self, predicate) => core.flatMap(predicate, bool => bool ? asSome(self) : succeedNone));
//# sourceMappingURL=stm.js.map