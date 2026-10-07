import * as Duration from "../../Duration.js";
import * as Effectable from "../../Effectable.js";
import * as Equal from "../../Equal.js";
import * as Exit from "../../Exit.js";
import * as FiberId from "../../FiberId.js";
import { dual, pipe } from "../../Function.js";
import * as Hash from "../../Hash.js";
import * as MutableHashMap from "../../MutableHashMap.js";
import * as Option from "../../Option.js";
import { pipeArguments } from "../../Pipeable.js";
import * as Predicate from "../../Predicate.js";
import * as Readable from "../../Readable.js";
import { currentScheduler } from "../../Scheduler.js";
import * as internalCause from "../cause.js";
import * as effect from "../core-effect.js";
import * as core from "../core.js";
import * as internalFiber from "../fiber.js";
import * as fiberRuntime from "../fiberRuntime.js";
import { globalScope } from "../fiberScope.js";
import * as internalRef from "../ref.js";
import * as supervisor from "../supervisor.js";
/** @internal */
class Semaphore {
  permits;
  waiters = /*#__PURE__*/new Set();
  taken = 0;
  constructor(permits) {
    this.permits = permits;
  }
  get free() {
    return this.permits - this.taken;
  }
  take = n => core.asyncInterrupt(resume => {
    if (this.free < n) {
      const observer = () => {
        if (this.free < n) return;
        this.waiters.delete(observer);
        resume(core.suspend(() => {
          if (this.free < n) return this.take(n);
          this.taken += n;
          return core.succeed(n);
        }));
      };
      this.waiters.add(observer);
      return core.sync(() => {
        this.waiters.delete(observer);
      });
    }
    resume(core.suspend(() => {
      if (this.free < n) return this.take(n);
      this.taken += n;
      return core.succeed(n);
    }));
  });
  updateTakenUnsafe(fiber, f) {
    this.taken = f(this.taken);
    if (this.waiters.size > 0) {
      fiber.getFiberRef(currentScheduler).scheduleTask(() => {
        const iter = this.waiters.values();
        let item = iter.next();
        while (item.done === false && this.free > 0) {
          item.value();
          item = iter.next();
        }
      }, fiber.getFiberRef(core.currentSchedulingPriority), fiber);
    }
    return core.succeed(this.free);
  }
  updateTaken(f) {
    return core.withFiberRuntime(fiber => this.updateTakenUnsafe(fiber, f));
  }
  resize = permits => core.asVoid(core.withFiberRuntime(fiber => {
    this.permits = permits;
    if (this.free < 0) {
      return core.void;
    }
    return this.updateTakenUnsafe(fiber, taken => taken);
  }));
  release = n => this.updateTaken(taken => taken - n);
  releaseAll = /*#__PURE__*/this.updateTaken(_ => 0);
  withPermits = n => self => core.uninterruptibleMask(restore => core.flatMap(restore(this.take(n)), permits => fiberRuntime.ensuring(restore(self), this.release(permits))));
  withPermitsIfAvailable = n => self => core.uninterruptibleMask(restore => core.suspend(() => {
    if (this.free < n) {
      return effect.succeedNone;
    }
    this.taken += n;
    return fiberRuntime.ensuring(restore(effect.asSome(self)), this.release(n));
  }));
}
/** @internal */
export const unsafeMakeSemaphore = permits => new Semaphore(permits);
/** @internal */
export const makeSemaphore = permits => core.sync(() => unsafeMakeSemaphore(permits));
class Latch extends Effectable.Class {
  isOpen;
  waiters = [];
  scheduled = false;
  constructor(isOpen) {
    super();
    this.isOpen = isOpen;
  }
  commit() {
    return this.await;
  }
  unsafeSchedule(fiber) {
    if (this.scheduled || this.waiters.length === 0) {
      return core.void;
    }
    this.scheduled = true;
    fiber.currentScheduler.scheduleTask(this.flushWaiters, fiber.getFiberRef(core.currentSchedulingPriority), fiber);
    return core.void;
  }
  flushWaiters = () => {
    this.scheduled = false;
    const waiters = this.waiters;
    this.waiters = [];
    for (let i = 0; i < waiters.length; i++) {
      waiters[i](core.exitVoid);
    }
  };
  open = /*#__PURE__*/core.withFiberRuntime(fiber => {
    if (this.isOpen) {
      return core.void;
    }
    this.isOpen = true;
    return this.unsafeSchedule(fiber);
  });
  unsafeOpen() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.flushWaiters();
  }
  release = /*#__PURE__*/core.withFiberRuntime(fiber => {
    if (this.isOpen) {
      return core.void;
    }
    return this.unsafeSchedule(fiber);
  });
  await = /*#__PURE__*/core.asyncInterrupt(resume => {
    if (this.isOpen) {
      return resume(core.void);
    }
    this.waiters.push(resume);
    return core.sync(() => {
      const index = this.waiters.indexOf(resume);
      if (index !== -1) {
        this.waiters.splice(index, 1);
      }
    });
  });
  unsafeClose() {
    this.isOpen = false;
  }
  close = /*#__PURE__*/core.sync(() => {
    this.isOpen = false;
  });
  whenOpen = self => {
    return core.zipRight(this.await, self);
  };
}
/** @internal */
export const unsafeMakeLatch = open => new Latch(open ?? false);
/** @internal */
export const makeLatch = open => core.sync(() => unsafeMakeLatch(open));
/** @internal */
export const awaitAllChildren = self => ensuringChildren(self, fiberRuntime.fiberAwaitAll);
/** @internal */
export const cached = /*#__PURE__*/dual(2, (self, timeToLive) => core.map(cachedInvalidateWithTTL(self, timeToLive), tuple => tuple[0]));
/** @internal */
export const cachedInvalidateWithTTL = /*#__PURE__*/dual(2, (self, timeToLive) => {
  const duration = Duration.decode(timeToLive);
  return core.flatMap(core.context(), env => core.map(makeSynchronized(Option.none()), cache => [core.provideContext(getCachedValue(self, duration, cache), env), invalidateCache(cache)]));
});
/** @internal */
const computeCachedValue = (self, timeToLive, start) => {
  const timeToLiveMillis = Duration.toMillis(Duration.decode(timeToLive));
  return pipe(core.deferredMake(), core.tap(deferred => core.intoDeferred(self, deferred)), core.map(deferred => Option.some([start + timeToLiveMillis, deferred])));
};
/** @internal */
const getCachedValue = (self, timeToLive, cache) => core.uninterruptibleMask(restore => pipe(effect.clockWith(clock => clock.currentTimeMillis), core.flatMap(time => updateSomeAndGetEffectSynchronized(cache, option => {
  switch (option._tag) {
    case "None":
      {
        return Option.some(computeCachedValue(self, timeToLive, time));
      }
    case "Some":
      {
        const [end] = option.value;
        return end - time <= 0 ? Option.some(computeCachedValue(self, timeToLive, time)) : Option.none();
      }
  }
})), core.flatMap(option => Option.isNone(option) ? core.dieMessage("BUG: Effect.cachedInvalidate - please report an issue at https://github.com/Effect-TS/effect/issues") : restore(core.deferredAwait(option.value[1])))));
/** @internal */
const invalidateCache = cache => internalRef.set(cache, Option.none());
/** @internal */
export const ensuringChild = /*#__PURE__*/dual(2, (self, f) => ensuringChildren(self, children => f(fiberRuntime.fiberAll(children))));
/** @internal */
export const ensuringChildren = /*#__PURE__*/dual(2, (self, children) => core.flatMap(supervisor.track, supervisor => pipe(supervised(self, supervisor), fiberRuntime.ensuring(core.flatMap(supervisor.value, children)))));
/** @internal */
export const forkAll = /*#__PURE__*/dual(args => Predicate.isIterable(args[0]), (effects, options) => options?.discard ? core.forEachSequentialDiscard(effects, fiberRuntime.fork) : core.map(core.forEachSequential(effects, fiberRuntime.fork), fiberRuntime.fiberAll));
/** @internal */
export const forkIn = /*#__PURE__*/dual(2, (self, scope) => core.withFiberRuntime((parent, parentStatus) => {
  const scopeImpl = scope;
  const fiber = fiberRuntime.unsafeFork(self, parent, parentStatus.runtimeFlags, globalScope);
  if (scopeImpl.state._tag === "Open") {
    const finalizer = () => core.fiberIdWith(fiberId => Equal.equals(fiberId, fiber.id()) ? core.void : core.asVoid(core.interruptFiber(fiber)));
    const key = {};
    scopeImpl.state.finalizers.set(key, finalizer);
    fiber.addObserver(() => {
      if (scopeImpl.state._tag === "Closed") return;
      scopeImpl.state.finalizers.delete(key);
    });
  } else {
    fiber.unsafeInterruptAsFork(parent.id());
  }
  return core.succeed(fiber);
}));
/** @internal */
export const forkScoped = self => fiberRuntime.scopeWith(scope => forkIn(self, scope));
/** @internal */
export const fromFiber = fiber => internalFiber.join(fiber);
/** @internal */
export const fromFiberEffect = fiber => core.suspend(() => core.flatMap(fiber, internalFiber.join));
const memoKeySymbol = /*#__PURE__*/Symbol.for("effect/Effect/memoizeFunction.key");
class Key {
  a;
  eq;
  [memoKeySymbol] = memoKeySymbol;
  constructor(a, eq) {
    this.a = a;
    this.eq = eq;
  }
  [Equal.symbol](that) {
    if (Predicate.hasProperty(that, memoKeySymbol)) {
      if (this.eq) {
        return this.eq(this.a, that.a);
      } else {
        return Equal.equals(this.a, that.a);
      }
    }
    return false;
  }
  [Hash.symbol]() {
    return this.eq ? 0 : Hash.cached(this, Hash.hash(this.a));
  }
}
/** @internal */
export const cachedFunction = (f, eq) => {
  return pipe(core.sync(() => MutableHashMap.empty()), core.flatMap(makeSynchronized), core.map(ref => a => pipe(ref.modifyEffect(map => {
    const result = pipe(map, MutableHashMap.get(new Key(a, eq)));
    if (Option.isNone(result)) {
      return pipe(core.deferredMake(), core.tap(deferred => pipe(effect.diffFiberRefs(f(a)), core.intoDeferred(deferred), fiberRuntime.fork)), core.map(deferred => [deferred, pipe(map, MutableHashMap.set(new Key(a, eq), deferred))]));
    }
    return core.succeed([result.value, map]);
  }), core.flatMap(core.deferredAwait), core.flatMap(([patch, b]) => pipe(effect.patchFiberRefs(patch), core.as(b))))));
};
/** @internal */
export const raceFirst = /*#__PURE__*/dual(2, (self, that) => pipe(core.exit(self), fiberRuntime.race(core.exit(that)), effect => core.flatten(effect)));
/** @internal */
export const supervised = /*#__PURE__*/dual(2, (self, supervisor) => {
  const supervise = core.fiberRefLocallyWith(fiberRuntime.currentSupervisor, s => s.zip(supervisor));
  return supervise(self);
});
/** @internal */
export const timeout = /*#__PURE__*/dual(2, (self, duration) => timeoutFail(self, {
  onTimeout: () => core.timeoutExceptionFromDuration(duration),
  duration
}));
/** @internal */
export const timeoutFail = /*#__PURE__*/dual(2, (self, {
  duration,
  onTimeout
}) => core.flatten(timeoutTo(self, {
  onTimeout: () => core.failSync(onTimeout),
  onSuccess: core.succeed,
  duration
})));
/** @internal */
export const timeoutFailCause = /*#__PURE__*/dual(2, (self, {
  duration,
  onTimeout
}) => core.flatten(timeoutTo(self, {
  onTimeout: () => core.failCauseSync(onTimeout),
  onSuccess: core.succeed,
  duration
})));
/** @internal */
export const timeoutOption = /*#__PURE__*/dual(2, (self, duration) => timeoutTo(self, {
  duration,
  onSuccess: Option.some,
  onTimeout: Option.none
}));
/** @internal */
export const timeoutTo = /*#__PURE__*/dual(2, (self, {
  duration,
  onSuccess,
  onTimeout
}) => core.fiberIdWith(parentFiberId => core.uninterruptibleMask(restore => fiberRuntime.raceFibersWith(restore(self), core.interruptible(effect.sleep(duration)), {
  onSelfWin: (winner, loser) => core.flatMap(winner.await, exit => {
    if (exit._tag === "Success") {
      return core.flatMap(winner.inheritAll, () => core.as(core.interruptAsFiber(loser, parentFiberId), onSuccess(exit.value)));
    } else {
      return core.flatMap(core.interruptAsFiber(loser, parentFiberId), () => core.exitFailCause(exit.cause));
    }
  }),
  onOtherWin: (winner, loser) => core.flatMap(winner.await, exit => {
    if (exit._tag === "Success") {
      return core.flatMap(winner.inheritAll, () => core.as(core.interruptAsFiber(loser, parentFiberId), onTimeout()));
    } else {
      return core.flatMap(core.interruptAsFiber(loser, parentFiberId), () => core.exitFailCause(exit.cause));
    }
  }),
  otherScope: globalScope
}))));
// circular with Synchronized
/** @internal */
const SynchronizedSymbolKey = "effect/Ref/SynchronizedRef";
/** @internal */
export const SynchronizedTypeId = /*#__PURE__*/Symbol.for(SynchronizedSymbolKey);
/** @internal */
export const synchronizedVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
class SynchronizedImpl extends Effectable.Class {
  ref;
  withLock;
  [SynchronizedTypeId] = synchronizedVariance;
  [internalRef.RefTypeId] = internalRef.refVariance;
  [Readable.TypeId] = Readable.TypeId;
  constructor(ref, withLock) {
    super();
    this.ref = ref;
    this.withLock = withLock;
    this.get = internalRef.get(this.ref);
  }
  get;
  commit() {
    return this.get;
  }
  modify(f) {
    return this.modifyEffect(a => core.succeed(f(a)));
  }
  modifyEffect(f) {
    return this.withLock(pipe(core.flatMap(internalRef.get(this.ref), f), core.flatMap(([b, a]) => core.as(internalRef.set(this.ref, a), b))));
  }
}
/** @internal */
export const makeSynchronized = value => core.sync(() => unsafeMakeSynchronized(value));
/** @internal */
export const unsafeMakeSynchronized = value => {
  const ref = internalRef.unsafeMake(value);
  const sem = unsafeMakeSemaphore(1);
  return new SynchronizedImpl(ref, sem.withPermits(1));
};
/** @internal */
export const updateSomeAndGetEffectSynchronized = /*#__PURE__*/dual(2, (self, pf) => self.modifyEffect(value => {
  const result = pf(value);
  switch (result._tag) {
    case "None":
      {
        return core.succeed([value, value]);
      }
    case "Some":
      {
        return core.map(result.value, a => [a, a]);
      }
  }
}));
// circular with Fiber
/** @internal */
export const zipFiber = /*#__PURE__*/dual(2, (self, that) => zipWithFiber(self, that, (a, b) => [a, b]));
/** @internal */
export const zipLeftFiber = /*#__PURE__*/dual(2, (self, that) => zipWithFiber(self, that, (a, _) => a));
/** @internal */
export const zipRightFiber = /*#__PURE__*/dual(2, (self, that) => zipWithFiber(self, that, (_, b) => b));
/** @internal */
export const zipWithFiber = /*#__PURE__*/dual(3, (self, that, f) => ({
  ...Effectable.CommitPrototype,
  commit() {
    return internalFiber.join(this);
  },
  [internalFiber.FiberTypeId]: internalFiber.fiberVariance,
  id: () => pipe(self.id(), FiberId.getOrElse(that.id())),
  await: pipe(self.await, core.flatten, fiberRuntime.zipWithOptions(core.flatten(that.await), f, {
    concurrent: true
  }), core.exit),
  children: self.children,
  inheritAll: core.zipRight(that.inheritAll, self.inheritAll),
  poll: core.zipWith(self.poll, that.poll, (optionA, optionB) => pipe(optionA, Option.flatMap(exitA => pipe(optionB, Option.map(exitB => Exit.zipWith(exitA, exitB, {
    onSuccess: f,
    onFailure: internalCause.parallel
  })))))),
  interruptAsFork: id => core.zipRight(self.interruptAsFork(id), that.interruptAsFork(id)),
  pipe() {
    return pipeArguments(this, arguments);
  }
}));
/* @internal */
export const bindAll = /*#__PURE__*/dual(args => core.isEffect(args[0]), (self, f, options) => core.flatMap(self, a => fiberRuntime.all(f(a), options).pipe(core.map(record => Object.assign({}, a, record)))));
//# sourceMappingURL=circular.js.map