import * as Clock from "../Clock.js";
import * as Either from "../Either.js";
import * as Exit from "../Exit.js";
import * as FiberId from "../FiberId.js";
import * as FiberStatus from "../FiberStatus.js";
import { dual, pipe } from "../Function.js";
import * as HashSet from "../HashSet.js";
import * as number from "../Number.js";
import * as Option from "../Option.js";
import * as order from "../Order.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
import * as core from "./core.js";
import * as effectable from "./effectable.js";
import * as fiberScope from "./fiberScope.js";
import * as runtimeFlags from "./runtimeFlags.js";
/** @internal */
const FiberSymbolKey = "effect/Fiber";
/** @internal */
export const FiberTypeId = /*#__PURE__*/Symbol.for(FiberSymbolKey);
/** @internal */
export const fiberVariance = {
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
const fiberProto = {
  [FiberTypeId]: fiberVariance,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/** @internal */
const RuntimeFiberSymbolKey = "effect/Fiber";
/** @internal */
export const RuntimeFiberTypeId = /*#__PURE__*/Symbol.for(RuntimeFiberSymbolKey);
/** @internal */
export const Order = /*#__PURE__*/pipe(/*#__PURE__*/order.tuple(number.Order, number.Order), /*#__PURE__*/order.mapInput(fiber => [fiber.id().startTimeMillis, fiber.id().id]));
/** @internal */
export const isFiber = u => hasProperty(u, FiberTypeId);
/** @internal */
export const isRuntimeFiber = self => RuntimeFiberTypeId in self;
/** @internal */
export const _await = self => self.await;
/** @internal */
export const children = self => self.children;
/** @internal */
export const done = exit => {
  const _fiber = {
    ...effectable.CommitPrototype,
    commit() {
      return join(this);
    },
    ...fiberProto,
    id: () => FiberId.none,
    await: core.succeed(exit),
    children: core.succeed([]),
    inheritAll: core.void,
    poll: core.succeed(Option.some(exit)),
    interruptAsFork: () => core.void
  };
  return _fiber;
};
/** @internal */
export const dump = self => core.map(self.status, status => ({
  id: self.id(),
  status
}));
/** @internal */
export const dumpAll = fibers => core.forEachSequential(fibers, dump);
/** @internal */
export const fail = error => done(Exit.fail(error));
/** @internal */
export const failCause = cause => done(Exit.failCause(cause));
/** @internal */
export const fromEffect = effect => core.map(core.exit(effect), done);
/** @internal */
export const id = self => self.id();
/** @internal */
export const inheritAll = self => self.inheritAll;
/** @internal */
export const interrupted = fiberId => done(Exit.interrupt(fiberId));
/** @internal */
export const interruptAll = fibers => core.flatMap(core.fiberId, fiberId => pipe(fibers, interruptAllAs(fiberId)));
/** @internal */
export const interruptAllAs = /*#__PURE__*/dual(2, /*#__PURE__*/core.fnUntraced(function* (fibers, fiberId) {
  for (const fiber of fibers) {
    if (isRuntimeFiber(fiber)) {
      fiber.unsafeInterruptAsFork(fiberId);
      continue;
    }
    yield* fiber.interruptAsFork(fiberId);
  }
  for (const fiber of fibers) {
    if (isRuntimeFiber(fiber) && fiber.unsafePoll()) {
      continue;
    }
    yield* fiber.await;
  }
}));
/** @internal */
export const interruptAsFork = /*#__PURE__*/dual(2, (self, fiberId) => self.interruptAsFork(fiberId));
/** @internal */
export const join = self => core.zipLeft(core.flatten(self.await), self.inheritAll);
/** @internal */
export const map = /*#__PURE__*/dual(2, (self, f) => mapEffect(self, a => core.sync(() => f(a))));
/** @internal */
export const mapEffect = /*#__PURE__*/dual(2, (self, f) => {
  const _fiber = {
    ...effectable.CommitPrototype,
    commit() {
      return join(this);
    },
    ...fiberProto,
    id: () => self.id(),
    await: core.flatMap(self.await, Exit.forEachEffect(f)),
    children: self.children,
    inheritAll: self.inheritAll,
    poll: core.flatMap(self.poll, result => {
      switch (result._tag) {
        case "None":
          return core.succeed(Option.none());
        case "Some":
          return pipe(Exit.forEachEffect(result.value, f), core.map(Option.some));
      }
    }),
    interruptAsFork: id => self.interruptAsFork(id)
  };
  return _fiber;
});
/** @internal */
export const mapFiber = /*#__PURE__*/dual(2, (self, f) => core.map(self.await, Exit.match({
  onFailure: cause => failCause(cause),
  onSuccess: a => f(a)
})));
/** @internal */
export const match = /*#__PURE__*/dual(2, (self, {
  onFiber,
  onRuntimeFiber
}) => {
  if (isRuntimeFiber(self)) {
    return onRuntimeFiber(self);
  }
  return onFiber(self);
});
/** @internal */
const _never = {
  ...effectable.CommitPrototype,
  commit() {
    return join(this);
  },
  ...fiberProto,
  id: () => FiberId.none,
  await: core.never,
  children: /*#__PURE__*/core.succeed([]),
  inheritAll: core.never,
  poll: /*#__PURE__*/core.succeed(/*#__PURE__*/Option.none()),
  interruptAsFork: () => core.never
};
/** @internal */
export const never = _never;
/** @internal */
export const orElse = /*#__PURE__*/dual(2, (self, that) => ({
  ...effectable.CommitPrototype,
  commit() {
    return join(this);
  },
  ...fiberProto,
  id: () => FiberId.getOrElse(self.id(), that.id()),
  await: core.zipWith(self.await, that.await, (exit1, exit2) => Exit.isSuccess(exit1) ? exit1 : exit2),
  children: self.children,
  inheritAll: core.zipRight(that.inheritAll, self.inheritAll),
  poll: core.zipWith(self.poll, that.poll, (option1, option2) => {
    switch (option1._tag) {
      case "None":
        {
          return Option.none();
        }
      case "Some":
        {
          return Exit.isSuccess(option1.value) ? option1 : option2;
        }
    }
  }),
  interruptAsFork: id => pipe(core.interruptAsFiber(self, id), core.zipRight(pipe(that, core.interruptAsFiber(id))), core.asVoid)
}));
/** @internal */
export const orElseEither = /*#__PURE__*/dual(2, (self, that) => orElse(map(self, Either.left), map(that, Either.right)));
/** @internal */
export const poll = self => self.poll;
// forked from https://github.com/sindresorhus/parse-ms/blob/4da2ffbdba02c6e288c08236695bdece0adca173/index.js
// MIT License
// Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
/** @internal */
const parseMs = milliseconds => {
  const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
  return {
    days: roundTowardsZero(milliseconds / 86400000),
    hours: roundTowardsZero(milliseconds / 3600000) % 24,
    minutes: roundTowardsZero(milliseconds / 60000) % 60,
    seconds: roundTowardsZero(milliseconds / 1000) % 60,
    milliseconds: roundTowardsZero(milliseconds) % 1000,
    microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
    nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
  };
};
/** @internal */
const renderStatus = status => {
  if (FiberStatus.isDone(status)) {
    return "Done";
  }
  if (FiberStatus.isRunning(status)) {
    return "Running";
  }
  const isInterruptible = runtimeFlags.interruptible(status.runtimeFlags) ? "interruptible" : "uninterruptible";
  return `Suspended(${isInterruptible})`;
};
/** @internal */
export const pretty = self => core.flatMap(Clock.currentTimeMillis, now => core.map(dump(self), dump => {
  const time = now - dump.id.startTimeMillis;
  const {
    days,
    hours,
    milliseconds,
    minutes,
    seconds
  } = parseMs(time);
  const lifeMsg = (days === 0 ? "" : `${days}d`) + (days === 0 && hours === 0 ? "" : `${hours}h`) + (days === 0 && hours === 0 && minutes === 0 ? "" : `${minutes}m`) + (days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? "" : `${seconds}s`) + `${milliseconds}ms`;
  const waitMsg = FiberStatus.isSuspended(dump.status) ? (() => {
    const ids = FiberId.ids(dump.status.blockingOn);
    return HashSet.size(ids) > 0 ? `waiting on ` + Array.from(ids).map(id => `${id}`).join(", ") : "";
  })() : "";
  const statusMsg = renderStatus(dump.status);
  return `[Fiber](#${dump.id.id}) (${lifeMsg}) ${waitMsg}\n   Status: ${statusMsg}`;
}));
/** @internal */
export const unsafeRoots = () => Array.from(fiberScope.globalScope.roots);
/** @internal */
export const roots = /*#__PURE__*/core.sync(unsafeRoots);
/** @internal */
export const status = self => self.status;
/** @internal */
export const succeed = value => done(Exit.succeed(value));
const void_ = /*#__PURE__*/succeed(void 0);
export { /** @internal */
void_ as void };
/** @internal */
export const currentFiberURI = "effect/FiberCurrent";
/** @internal */
export const getCurrentFiber = () => Option.fromNullable(globalThis[currentFiberURI]);
//# sourceMappingURL=fiber.js.map