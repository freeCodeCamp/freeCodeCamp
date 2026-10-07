import * as Cause from "./Cause.js";
import * as Deferred from "./Deferred.js";
import * as Effect from "./Effect.js";
import * as Exit from "./Exit.js";
import * as Fiber from "./Fiber.js";
import * as FiberId from "./FiberId.js";
import { constFalse, constVoid, dual } from "./Function.js";
import * as HashSet from "./HashSet.js";
import * as Inspectable from "./Inspectable.js";
import * as Iterable from "./Iterable.js";
import * as MutableHashMap from "./MutableHashMap.js";
import * as Option from "./Option.js";
import { pipeArguments } from "./Pipeable.js";
import * as Predicate from "./Predicate.js";
import * as Runtime from "./Runtime.js";
/**
 * @since 2.0.0
 * @categories type ids
 */
export const TypeId = /*#__PURE__*/Symbol.for("effect/FiberMap");
/**
 * @since 2.0.0
 * @categories refinements
 */
export const isFiberMap = u => Predicate.hasProperty(u, TypeId);
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
    return pipeArguments(this, arguments);
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
export const make = () => Effect.acquireRelease(Effect.map(Deferred.make(), deferred => unsafeMake(MutableHashMap.empty(), deferred)), map => Effect.withFiberRuntime(parent => {
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
export const makeRuntime = () => Effect.flatMap(make(), self => runtime(self)());
/**
 * Create an Effect run function that is backed by a FiberMap.
 *
 * @since 3.13.0
 * @categories constructors
 */
export const makeRuntimePromise = () => Effect.flatMap(make(), self => runtimePromise(self)());
const internalFiberIdId = -1;
const internalFiberId = /*#__PURE__*/FiberId.make(internalFiberIdId, 0);
const isInternalInterruption = /*#__PURE__*/Cause.reduceWithContext(undefined, {
  emptyCase: constFalse,
  failCase: constFalse,
  dieCase: constFalse,
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
export const unsafeSet = /*#__PURE__*/dual(args => isFiberMap(args[0]), (self, key, fiber, options) => {
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
export const set = /*#__PURE__*/dual(args => isFiberMap(args[0]), (self, key, fiber, options) => Effect.fiberIdWith(fiberId => Effect.sync(() => unsafeSet(self, key, fiber, {
  ...options,
  interruptAs: fiberId
}))));
/**
 * Retrieve a fiber from the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const unsafeGet = /*#__PURE__*/dual(2, (self, key) => self.state._tag === "Closed" ? Option.none() : MutableHashMap.get(self.state.backing, key));
/**
 * Retrieve a fiber from the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const get = /*#__PURE__*/dual(2, (self, key) => Effect.suspend(() => unsafeGet(self, key)));
/**
 * Check if a key exists in the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const unsafeHas = /*#__PURE__*/dual(2, (self, key) => self.state._tag === "Closed" ? false : MutableHashMap.has(self.state.backing, key));
/**
 * Check if a key exists in the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const has = /*#__PURE__*/dual(2, (self, key) => Effect.sync(() => unsafeHas(self, key)));
/**
 * Remove a fiber from the FiberMap, interrupting it if it exists.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const remove = /*#__PURE__*/dual(2, (self, key) => Effect.withFiberRuntime(removeFiber => {
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
export const clear = self => Effect.withFiberRuntime(clearFiber => {
  if (self.state._tag === "Closed") {
    return Effect.void;
  }
  return Effect.forEach(self.state.backing, ([, fiber]) =>
  // will be removed by the observer
  Fiber.interruptAs(fiber, FiberId.combine(clearFiber.id(), internalFiberId)));
});
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
export const run = function () {
  const self = arguments[0];
  if (Effect.isEffect(arguments[2])) {
    return runImpl(self, arguments[1], arguments[2], arguments[3]);
  }
  const key = arguments[1];
  const options = arguments[2];
  return effect => runImpl(self, key, effect, options);
};
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
export const runtime = self => () => Effect.map(Effect.runtime(), runtime => {
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
export const runtimePromise = self => () => Effect.map(runtime(self)(), runFork => (key, effect, options) => new Promise((resolve, reject) => runFork(key, effect, options).addObserver(exit => {
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
export const size = self => Effect.sync(() => self.state._tag === "Closed" ? 0 : MutableHashMap.size(self.state.backing));
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
export const join = self => Deferred.await(self.deferred);
/**
 * Wait for the FiberMap to be empty.
 *
 * @since 3.13.0
 * @categories combinators
 */
export const awaitEmpty = self => Effect.whileLoop({
  while: () => self.state._tag === "Open" && MutableHashMap.size(self.state.backing) > 0,
  body: () => Fiber.await(Iterable.unsafeHead(self)[1]),
  step: constVoid
});
//# sourceMappingURL=FiberMap.js.map