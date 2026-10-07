"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.void = exports.unsafeRoots = exports.succeed = exports.status = exports.roots = exports.pretty = exports.poll = exports.orElseEither = exports.orElse = exports.never = exports.match = exports.mapFiber = exports.mapEffect = exports.map = exports.join = exports.isRuntimeFiber = exports.isFiber = exports.interrupted = exports.interruptAsFork = exports.interruptAllAs = exports.interruptAll = exports.inheritAll = exports.id = exports.getCurrentFiber = exports.fromEffect = exports.fiberVariance = exports.failCause = exports.fail = exports.dumpAll = exports.dump = exports.done = exports.currentFiberURI = exports.children = exports._await = exports.RuntimeFiberTypeId = exports.Order = exports.FiberTypeId = void 0;
var Clock = _interopRequireWildcard(require("../Clock.js"));
var Either = _interopRequireWildcard(require("../Either.js"));
var Exit = _interopRequireWildcard(require("../Exit.js"));
var FiberId = _interopRequireWildcard(require("../FiberId.js"));
var FiberStatus = _interopRequireWildcard(require("../FiberStatus.js"));
var _Function = require("../Function.js");
var HashSet = _interopRequireWildcard(require("../HashSet.js"));
var number = _interopRequireWildcard(require("../Number.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var order = _interopRequireWildcard(require("../Order.js"));
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var core = _interopRequireWildcard(require("./core.js"));
var effectable = _interopRequireWildcard(require("./effectable.js"));
var fiberScope = _interopRequireWildcard(require("./fiberScope.js"));
var runtimeFlags = _interopRequireWildcard(require("./runtimeFlags.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const FiberSymbolKey = "effect/Fiber";
/** @internal */
const FiberTypeId = exports.FiberTypeId = /*#__PURE__*/Symbol.for(FiberSymbolKey);
/** @internal */
const fiberVariance = exports.fiberVariance = {
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
const fiberProto = {
  [FiberTypeId]: fiberVariance,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/** @internal */
const RuntimeFiberSymbolKey = "effect/Fiber";
/** @internal */
const RuntimeFiberTypeId = exports.RuntimeFiberTypeId = /*#__PURE__*/Symbol.for(RuntimeFiberSymbolKey);
/** @internal */
const Order = exports.Order = /*#__PURE__*/(0, _Function.pipe)(/*#__PURE__*/order.tuple(number.Order, number.Order), /*#__PURE__*/order.mapInput(fiber => [fiber.id().startTimeMillis, fiber.id().id]));
/** @internal */
const isFiber = u => (0, _Predicate.hasProperty)(u, FiberTypeId);
/** @internal */
exports.isFiber = isFiber;
const isRuntimeFiber = self => RuntimeFiberTypeId in self;
/** @internal */
exports.isRuntimeFiber = isRuntimeFiber;
const _await = self => self.await;
/** @internal */
exports._await = _await;
const children = self => self.children;
/** @internal */
exports.children = children;
const done = exit => {
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
exports.done = done;
const dump = self => core.map(self.status, status => ({
  id: self.id(),
  status
}));
/** @internal */
exports.dump = dump;
const dumpAll = fibers => core.forEachSequential(fibers, dump);
/** @internal */
exports.dumpAll = dumpAll;
const fail = error => done(Exit.fail(error));
/** @internal */
exports.fail = fail;
const failCause = cause => done(Exit.failCause(cause));
/** @internal */
exports.failCause = failCause;
const fromEffect = effect => core.map(core.exit(effect), done);
/** @internal */
exports.fromEffect = fromEffect;
const id = self => self.id();
/** @internal */
exports.id = id;
const inheritAll = self => self.inheritAll;
/** @internal */
exports.inheritAll = inheritAll;
const interrupted = fiberId => done(Exit.interrupt(fiberId));
/** @internal */
exports.interrupted = interrupted;
const interruptAll = fibers => core.flatMap(core.fiberId, fiberId => (0, _Function.pipe)(fibers, interruptAllAs(fiberId)));
/** @internal */
exports.interruptAll = interruptAll;
const interruptAllAs = exports.interruptAllAs = /*#__PURE__*/(0, _Function.dual)(2, /*#__PURE__*/core.fnUntraced(function* (fibers, fiberId) {
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
const interruptAsFork = exports.interruptAsFork = /*#__PURE__*/(0, _Function.dual)(2, (self, fiberId) => self.interruptAsFork(fiberId));
/** @internal */
const join = self => core.zipLeft(core.flatten(self.await), self.inheritAll);
/** @internal */
exports.join = join;
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => mapEffect(self, a => core.sync(() => f(a))));
/** @internal */
const mapEffect = exports.mapEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
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
          return (0, _Function.pipe)(Exit.forEachEffect(result.value, f), core.map(Option.some));
      }
    }),
    interruptAsFork: id => self.interruptAsFork(id)
  };
  return _fiber;
});
/** @internal */
const mapFiber = exports.mapFiber = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.map(self.await, Exit.match({
  onFailure: cause => failCause(cause),
  onSuccess: a => f(a)
})));
/** @internal */
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
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
const never = exports.never = _never;
/** @internal */
const orElse = exports.orElse = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => ({
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
  interruptAsFork: id => (0, _Function.pipe)(core.interruptAsFiber(self, id), core.zipRight((0, _Function.pipe)(that, core.interruptAsFiber(id))), core.asVoid)
}));
/** @internal */
const orElseEither = exports.orElseEither = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => orElse(map(self, Either.left), map(that, Either.right)));
/** @internal */
const poll = self => self.poll;
// forked from https://github.com/sindresorhus/parse-ms/blob/4da2ffbdba02c6e288c08236695bdece0adca173/index.js
// MIT License
// Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
/** @internal */
exports.poll = poll;
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
const pretty = self => core.flatMap(Clock.currentTimeMillis, now => core.map(dump(self), dump => {
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
exports.pretty = pretty;
const unsafeRoots = () => Array.from(fiberScope.globalScope.roots);
/** @internal */
exports.unsafeRoots = unsafeRoots;
const roots = exports.roots = /*#__PURE__*/core.sync(unsafeRoots);
/** @internal */
const status = self => self.status;
/** @internal */
exports.status = status;
const succeed = value => done(Exit.succeed(value));
exports.succeed = succeed;
const void_ = exports.void = /*#__PURE__*/succeed(void 0);
/** @internal */
const currentFiberURI = exports.currentFiberURI = "effect/FiberCurrent";
/** @internal */
const getCurrentFiber = () => Option.fromNullable(globalThis[currentFiberURI]);
exports.getCurrentFiber = getCurrentFiber;
//# sourceMappingURL=fiber.js.map