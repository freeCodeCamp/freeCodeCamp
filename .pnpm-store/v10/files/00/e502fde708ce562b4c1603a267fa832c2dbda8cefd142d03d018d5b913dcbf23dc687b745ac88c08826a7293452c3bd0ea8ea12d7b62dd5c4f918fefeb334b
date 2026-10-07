/**
 * @since 2.0.0
 */
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
import { pipeArguments } from "./Pipeable.js";
import * as Predicate from "./Predicate.js";
import * as Runtime from "./Runtime.js";
/**
 * @since 2.0.0
 * @categories type ids
 */
export const TypeId = /*#__PURE__*/Symbol.for("effect/FiberSet");
/**
 * @since 2.0.0
 * @categories refinements
 */
export const isFiberSet = u => Predicate.hasProperty(u, TypeId);
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
 * A FiberSet can be used to store a collection of fibers.
 * When the associated Scope is closed, all fibers in the set will be interrupted.
 *
 * You can add fibers to the set using `FiberSet.add` or `FiberSet.run`, and the fibers will
 * be automatically removed from the FiberSet when they complete.
 *
 * @example
 * ```ts
 * import { Effect, FiberSet } from "effect"
 *
 * Effect.gen(function*() {
 *   const set = yield* FiberSet.make()
 *
 *   // run some effects and add the fibers to the set
 *   yield* FiberSet.run(set, Effect.never)
 *   yield* FiberSet.run(set, Effect.never)
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
export const make = () => Effect.acquireRelease(Effect.map(Deferred.make(), deferred => unsafeMake(new Set(), deferred)), set => Effect.withFiberRuntime(parent => {
  const state = set.state;
  if (state._tag === "Closed") return Effect.void;
  set.state = {
    _tag: "Closed"
  };
  const fibers = state.backing;
  return Fiber.interruptAllAs(fibers, FiberId.combine(parent.id(), internalFiberId)).pipe(Effect.intoDeferred(set.deferred));
}));
/**
 * Create an Effect run function that is backed by a FiberSet.
 *
 * @since 2.0.0
 * @categories constructors
 */
export const makeRuntime = () => Effect.flatMap(make(), self => runtime(self)());
/**
 * Create an Effect run function that is backed by a FiberSet.
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
 * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const unsafeAdd = /*#__PURE__*/dual(args => isFiberSet(args[0]), (self, fiber, options) => {
  if (self.state._tag === "Closed") {
    fiber.unsafeInterruptAsFork(FiberId.combine(options?.interruptAs ?? FiberId.none, internalFiberId));
    return;
  } else if (self.state.backing.has(fiber)) {
    return;
  }
  self.state.backing.add(fiber);
  fiber.addObserver(exit => {
    if (self.state._tag === "Closed") {
      return;
    }
    self.state.backing.delete(fiber);
    if (Exit.isFailure(exit) && (options?.propagateInterruption === true ? !isInternalInterruption(exit.cause) : !Cause.isInterruptedOnly(exit.cause))) {
      Deferred.unsafeDone(self.deferred, exit);
    }
  });
});
/**
 * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const add = /*#__PURE__*/dual(args => isFiberSet(args[0]), (self, fiber, options) => Effect.fiberIdWith(fiberId => Effect.sync(() => unsafeAdd(self, fiber, {
  ...options,
  interruptAs: fiberId
}))));
/**
 * @since 2.0.0
 * @categories combinators
 */
export const clear = self => Effect.withFiberRuntime(clearFiber => {
  if (self.state._tag === "Closed") {
    return Effect.void;
  }
  return Effect.forEach(self.state.backing, fiber =>
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
 * Fork an Effect and add the forked fiber to the FiberSet.
 * When the fiber completes, it will be removed from the FiberSet.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const run = function () {
  const self = arguments[0];
  if (!Effect.isEffect(arguments[1])) {
    const options = arguments[1];
    return effect => runImpl(self, effect, options);
  }
  return runImpl(self, arguments[1], arguments[2]);
};
const runImpl = (self, effect, options) => Effect.fiberIdWith(fiberId => {
  if (self.state._tag === "Closed") {
    return Effect.sync(constInterruptedFiber);
  }
  return Effect.tap(Effect.forkDaemon(effect), fiber => unsafeAdd(self, fiber, {
    ...options,
    interruptAs: fiberId
  }));
});
/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberSet.
 *
 * @example
 * ```ts
 * import { Context, Effect, FiberSet } from "effect"
 *
 * interface Users {
 *   readonly _: unique symbol
 * }
 * const Users = Context.GenericTag<Users, {
 *    getAll: Effect.Effect<Array<unknown>>
 * }>("Users")
 *
 * Effect.gen(function*() {
 *   const set = yield* FiberSet.make()
 *   const run = yield* FiberSet.runtime(set)<Users>()
 *
 *   // run some effects and add the fibers to the set
 *   run(Effect.andThen(Users, _ => _.getAll))
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
  return (effect, options) => {
    if (self.state._tag === "Closed") {
      return constInterruptedFiber();
    }
    const fiber = runFork(effect, options);
    unsafeAdd(self, fiber);
    return fiber;
  };
});
/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberSet.
 *
 * The returned run function will return Promise's.
 *
 * @since 3.13.0
 * @categories combinators
 */
export const runtimePromise = self => () => Effect.map(runtime(self)(), runFork => (effect, options) => new Promise((resolve, reject) => runFork(effect, options).addObserver(exit => {
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
export const size = self => Effect.sync(() => self.state._tag === "Closed" ? 0 : self.state.backing.size);
/**
 * Join all fibers in the FiberSet. If any of the Fiber's in the set terminate with a failure,
 * the returned Effect will terminate with the first failure that occurred.
 *
 * @since 2.0.0
 * @categories combinators
 * @example
 * ```ts
 * import { Effect, FiberSet } from "effect";
 *
 * Effect.gen(function* (_) {
 *   const set = yield* _(FiberSet.make());
 *   yield* _(FiberSet.add(set, Effect.runFork(Effect.fail("error"))));
 *
 *   // parent fiber will fail with "error"
 *   yield* _(FiberSet.join(set));
 * });
 * ```
 */
export const join = self => Deferred.await(self.deferred);
/**
 * Wait until the fiber set is empty.
 *
 * @since 3.13.0
 * @categories combinators
 */
export const awaitEmpty = self => Effect.whileLoop({
  while: () => self.state._tag === "Open" && self.state.backing.size > 0,
  body: () => Fiber.await(Iterable.unsafeHead(self)),
  step: constVoid
});
//# sourceMappingURL=FiberSet.js.map