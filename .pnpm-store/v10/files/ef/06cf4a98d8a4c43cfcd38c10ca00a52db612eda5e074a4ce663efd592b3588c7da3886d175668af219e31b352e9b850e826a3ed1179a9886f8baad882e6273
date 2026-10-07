"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeSet = exports.unsafeHas = exports.unsafeGet = exports.size = exports.set = exports.runtimePromise = exports.runtime = exports.run = exports.remove = exports.makeRuntimePromise = exports.makeRuntime = exports.make = exports.join = exports.isFiberMap = exports.has = exports.get = exports.clear = exports.awaitEmpty = exports.TypeId = void 0;
var Cause = _interopRequireWildcard(require("./Cause.js"));
var Deferred = _interopRequireWildcard(require("./Deferred.js"));
var Effect = _interopRequireWildcard(require("./Effect.js"));
var Exit = _interopRequireWildcard(require("./Exit.js"));
var Fiber = _interopRequireWildcard(require("./Fiber.js"));
var FiberId = _interopRequireWildcard(require("./FiberId.js"));
var _Function = require("./Function.js");
var HashSet = _interopRequireWildcard(require("./HashSet.js"));
var Inspectable = _interopRequireWildcard(require("./Inspectable.js"));
var Iterable = _interopRequireWildcard(require("./Iterable.js"));
var MutableHashMap = _interopRequireWildcard(require("./MutableHashMap.js"));
var Option = _interopRequireWildcard(require("./Option.js"));
var _Pipeable = require("./Pipeable.js");
var Predicate = _interopRequireWildcard(require("./Predicate.js"));
var Runtime = _interopRequireWildcard(require("./Runtime.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @categories type ids
 */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/FiberMap");
/**
 * @since 2.0.0
 * @categories refinements
 */
const isFiberMap = u => Predicate.hasProperty(u, TypeId);
exports.isFiberMap = isFiberMap;
const Proto = {
  [TypeId]: TypeId,
  [Symbol.iterator]() {
    if (this.state._tag === "Closed") {
      return Iterable.empty();
    }
    return this.state.backing[Symbol.iterator]();
  },
  toString() {
    return Inspectable.format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "FiberMap",
      state: this.state
    };
  },
  [Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
const unsafeMake = (backing, deferred) => {
  const self = Object.create(Proto);
  self.state = {
    _tag: "Open",
    backing
  };
  self.deferred = deferred;
  return self;
};
/**
 * A FiberMap can be used to store a collection of fibers, indexed by some key.
 * When the associated Scope is closed, all fibers in the map will be interrupted.
 *
 * You can add fibers to the map using `FiberMap.set` or `FiberMap.run`, and the fibers will
 * be automatically removed from the FiberMap when they complete.
 *
 * @example
 * ```ts
 * import { Effect, FiberMap } from "effect"
 *
 * Effect.gen(function*() {
 *   const map = yield* FiberMap.make<string>()
 *
 *   // run some effects and add the fibers to the map
 *   yield* FiberMap.run(map, "fiber a", Effect.never)
 *   yield* FiberMap.run(map, "fiber b", Effect.never)
 *
 *   yield* Effect.sleep(1000)
 * }).pipe(
 *   Effect.scoped // The fibers will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories constructors
 */
const make = () => Effect.acquireRelease(Effect.map(Deferred.make(), deferred => unsafeMake(MutableHashMap.empty(), deferred)), map => Effect.withFiberRuntime(parent => {
  const state = map.state;
  if (state._tag === "Closed") return Effect.void;
  map.state = {
    _tag: "Closed"
  };
  return Fiber.interruptAllAs(Iterable.map(state.backing, ([, fiber]) => fiber), FiberId.combine(parent.id(), internalFiberId)).pipe(Effect.intoDeferred(map.deferred));
}));
/**
 * Create an Effect run function that is backed by a FiberMap.
 *
 * @since 2.0.0
 * @categories constructors
 */
exports.make = make;
const makeRuntime = () => Effect.flatMap(make(), self => runtime(self)());
/**
 * Create an Effect run function that is backed by a FiberMap.
 *
 * @since 3.13.0
 * @categories constructors
 */
exports.makeRuntime = makeRuntime;
const makeRuntimePromise = () => Effect.flatMap(make(), self => runtimePromise(self)());
exports.makeRuntimePromise = makeRuntimePromise;
const internalFiberIdId = -1;
const internalFiberId = /*#__PURE__*/FiberId.make(internalFiberIdId, 0);
const isInternalInterruption = /*#__PURE__*/Cause.reduceWithContext(undefined, {
  emptyCase: _Function.constFalse,
  failCase: _Function.constFalse,
  dieCase: _Function.constFalse,
  interruptCase: (_, fiberId) => HashSet.has(FiberId.ids(fiberId), internalFiberIdId),
  sequentialCase: (_, left, right) => left || right,
  parallelCase: (_, left, right) => left || right
});
/**
 * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
 * If the key already exists in the FiberMap, the previous fiber will be interrupted.
 *
 * @since 2.0.0
 * @categories combinators
 */
const unsafeSet = exports.unsafeSet = /*#__PURE__*/(0, _Function.dual)(args => isFiberMap(args[0]), (self, key, fiber, options) => {
  if (self.state._tag === "Closed") {
    fiber.unsafeInterruptAsFork(FiberId.combine(options?.interruptAs ?? FiberId.none, internalFiberId));
    return;
  }
  const previous = MutableHashMap.get(self.state.backing, key);
  if (previous._tag === "Some") {
    if (options?.onlyIfMissing === true) {
      fiber.unsafeInterruptAsFork(FiberId.combine(options?.interruptAs ?? FiberId.none, internalFiberId));
      return;
    } else if (previous.value === fiber) {
      return;
    }
    previous.value.unsafeInterruptAsFork(FiberId.combine(options?.interruptAs ?? FiberId.none, internalFiberId));
  }
  MutableHashMap.set(self.state.backing, key, fiber);
  fiber.addObserver(exit => {
    if (self.state._tag === "Closed") {
      return;
    }
    const current = MutableHashMap.get(self.state.backing, key);
    if (Option.isSome(current) && fiber === current.value) {
      MutableHashMap.remove(self.state.backing, key);
    }
    if (Exit.isFailure(exit) && (options?.propagateInterruption === true ? !isInternalInterruption(exit.cause) : !Cause.isInterruptedOnly(exit.cause))) {
      Deferred.unsafeDone(self.deferred, exit);
    }
  });
});
/**
 * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
 * If the key already exists in the FiberMap, the previous fiber will be interrupted.
 *
 * @since 2.0.0
 * @categories combinators
 */
const set = exports.set = /*#__PURE__*/(0, _Function.dual)(args => isFiberMap(args[0]), (self, key, fiber, options) => Effect.fiberIdWith(fiberId => Effect.sync(() => unsafeSet(self, key, fiber, {
  ...options,
  interruptAs: fiberId
}))));
/**
 * Retrieve a fiber from the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
const unsafeGet = exports.unsafeGet = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => self.state._tag === "Closed" ? Option.none() : MutableHashMap.get(self.state.backing, key));
/**
 * Retrieve a fiber from the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
const get = exports.get = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => Effect.suspend(() => unsafeGet(self, key)));
/**
 * Check if a key exists in the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
const unsafeHas = exports.unsafeHas = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => self.state._tag === "Closed" ? false : MutableHashMap.has(self.state.backing, key));
/**
 * Check if a key exists in the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
const has = exports.has = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => Effect.sync(() => unsafeHas(self, key)));
/**
 * Remove a fiber from the FiberMap, interrupting it if it exists.
 *
 * @since 2.0.0
 * @categories combinators
 */
const remove = exports.remove = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => Effect.withFiberRuntime(removeFiber => {
  if (self.state._tag === "Closed") {
    return Effect.void;
  }
  const fiber = MutableHashMap.get(self.state.backing, key);
  if (fiber._tag === "None") {
    return Effect.void;
  }
  // will be removed by the observer
  return Fiber.interruptAs(fiber.value, FiberId.combine(removeFiber.id(), internalFiberId));
}));
/**
 * @since 2.0.0
 * @categories combinators
 */
const clear = self => Effect.withFiberRuntime(clearFiber => {
  if (self.state._tag === "Closed") {
    return Effect.void;
  }
  return Effect.forEach(self.state.backing, ([, fiber]) =>
  // will be removed by the observer
  Fiber.interruptAs(fiber, FiberId.combine(clearFiber.id(), internalFiberId)));
});
exports.clear = clear;
const constInterruptedFiber = /*#__PURE__*/function () {
  let fiber = undefined;
  return () => {
    if (fiber === undefined) {
      fiber = Effect.runFork(Effect.interrupt);
    }
    return fiber;
  };
}();
/**
 * Run an Effect and add the forked fiber to the FiberMap.
 * When the fiber completes, it will be removed from the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
const run = function () {
  const self = arguments[0];
  if (Effect.isEffect(arguments[2])) {
    return runImpl(self, arguments[1], arguments[2], arguments[3]);
  }
  const key = arguments[1];
  const options = arguments[2];
  return effect => runImpl(self, key, effect, options);
};
exports.run = run;
const runImpl = (self, key, effect, options) => Effect.withFiberRuntime(parent => {
  if (self.state._tag === "Closed") {
    return Effect.interrupt;
  } else if (options?.onlyIfMissing === true && unsafeHas(self, key)) {
    return Effect.sync(constInterruptedFiber);
  }
  const runtime = Runtime.make({
    context: parent.currentContext,
    fiberRefs: parent.getFiberRefs(),
    runtimeFlags: Runtime.defaultRuntime.runtimeFlags
  });
  const fiber = Runtime.runFork(runtime)(effect);
  unsafeSet(self, key, fiber, {
    ...options,
    interruptAs: parent.id()
  });
  return Effect.succeed(fiber);
});
/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberMap.
 *
 * @example
 * ```ts
 * import { Context, Effect, FiberMap } from "effect"
 *
 * interface Users {
 *   readonly _: unique symbol
 * }
 * const Users = Context.GenericTag<Users, {
 *    getAll: Effect.Effect<Array<unknown>>
 * }>("Users")
 *
 * Effect.gen(function*() {
 *   const map = yield* FiberMap.make<string>()
 *   const run = yield* FiberMap.runtime(map)<Users>()
 *
 *   // run some effects and add the fibers to the map
 *   run("effect-a", Effect.andThen(Users, _ => _.getAll))
 *   run("effect-b", Effect.andThen(Users, _ => _.getAll))
 * }).pipe(
 *   Effect.scoped // The fibers will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories combinators
 */
const runtime = self => () => Effect.map(Effect.runtime(), runtime => {
  const runFork = Runtime.runFork(runtime);
  return (key, effect, options) => {
    if (self.state._tag === "Closed") {
      return constInterruptedFiber();
    } else if (options?.onlyIfMissing === true && unsafeHas(self, key)) {
      return constInterruptedFiber();
    }
    const fiber = runFork(effect, options);
    unsafeSet(self, key, fiber, options);
    return fiber;
  };
});
/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberMap.
 *
 * @since 3.13.0
 * @categories combinators
 */
exports.runtime = runtime;
const runtimePromise = self => () => Effect.map(runtime(self)(), runFork => (key, effect, options) => new Promise((resolve, reject) => runFork(key, effect, options).addObserver(exit => {
  if (Exit.isSuccess(exit)) {
    resolve(exit.value);
  } else {
    reject(Cause.squash(exit.cause));
  }
})));
/**
 * @since 2.0.0
 * @categories combinators
 */
exports.runtimePromise = runtimePromise;
const size = self => Effect.sync(() => self.state._tag === "Closed" ? 0 : MutableHashMap.size(self.state.backing));
/**
 * Join all fibers in the FiberMap. If any of the Fiber's in the map terminate with a failure,
 * the returned Effect will terminate with the first failure that occurred.
 *
 * @since 2.0.0
 * @categories combinators
 * @example
 * ```ts
 * import { Effect, FiberMap } from "effect";
 *
 * Effect.gen(function* (_) {
 *   const map = yield* _(FiberMap.make());
 *   yield* _(FiberMap.set(map, "a", Effect.runFork(Effect.fail("error"))));
 *
 *   // parent fiber will fail with "error"
 *   yield* _(FiberMap.join(map));
 * });
 * ```
 */
exports.size = size;
const join = self => Deferred.await(self.deferred);
/**
 * Wait for the FiberMap to be empty.
 *
 * @since 3.13.0
 * @categories combinators
 */
exports.join = join;
const awaitEmpty = self => Effect.whileLoop({
  while: () => self.state._tag === "Open" && MutableHashMap.size(self.state.backing) > 0,
  body: () => Fiber.await(Iterable.unsafeHead(self)[1]),
  step: _Function.constVoid
});
exports.awaitEmpty = awaitEmpty;
//# sourceMappingURL=FiberMap.js.map