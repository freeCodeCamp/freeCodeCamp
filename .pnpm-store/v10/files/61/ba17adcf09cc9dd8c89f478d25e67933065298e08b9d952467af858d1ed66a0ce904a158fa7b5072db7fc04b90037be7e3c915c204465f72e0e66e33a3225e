import type * as Cause from "../Cause.js"
import * as Clock from "../Clock.js"
import type * as Effect from "../Effect.js"
import * as Either from "../Either.js"
import * as Exit from "../Exit.js"
import type * as Fiber from "../Fiber.js"
import * as FiberId from "../FiberId.js"
import * as FiberStatus from "../FiberStatus.js"
import { dual, pipe } from "../Function.js"
import * as HashSet from "../HashSet.js"
import * as number from "../Number.js"
import * as Option from "../Option.js"
import * as order from "../Order.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty } from "../Predicate.js"
import * as core from "./core.js"
import * as effectable from "./effectable.js"
import * as fiberScope from "./fiberScope.js"
import * as runtimeFlags from "./runtimeFlags.js"

/** @internal */
const FiberSymbolKey = "effect/Fiber"

/** @internal */
export const FiberTypeId: Fiber.FiberTypeId = Symbol.for(
  FiberSymbolKey
) as Fiber.FiberTypeId

/** @internal */
export const fiberVariance = {
  /* c8 ignore next */
  _E: (_: never) => _,
  /* c8 ignore next */
  _A: (_: never) => _
}

/** @internal */
const fiberProto = {
  [FiberTypeId]: fiberVariance,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
const RuntimeFiberSymbolKey = "effect/Fiber"

/** @internal */
export const RuntimeFiberTypeId: Fiber.RuntimeFiberTypeId = Symbol.for(
  RuntimeFiberSymbolKey
) as Fiber.RuntimeFiberTypeId

/** @internal */
export const Order: order.Order<Fiber.RuntimeFiber<unknown, unknown>> = pipe(
  order.tuple(number.Order, number.Order),
  order.mapInput((fiber: Fiber.RuntimeFiber<unknown, unknown>) =>
    [
      (fiber.id() as FiberId.Runtime).startTimeMillis,
      (fiber.id() as FiberId.Runtime).id
    ] as const
  )
)

/** @internal */
export const isFiber = (u: unknown): u is Fiber.Fiber<unknown, unknown> => hasProperty(u, FiberTypeId)

/** @internal */
export const isRuntimeFiber = <A, E>(self: Fiber.Fiber<A, E>): self is Fiber.RuntimeFiber<A, E> =>
  RuntimeFiberTypeId in self

/** @internal */
export const _await = <A, E>(self: Fiber.Fiber<A, E>): Effect.Effect<Exit.Exit<A, E>> => self.await

/** @internal */
export const children = <A, E>(
  self: Fiber.Fiber<A, E>
): Effect.Effect<Array<Fiber.RuntimeFiber<any, any>>> => self.children

/** @internal */
export const done = <A, E>(exit: Exit.Exit<A, E>): Fiber.Fiber<A, E> => {
  const _fiber = {
    ...effectable.CommitPrototype,
    commit() {
      return join(this)
    },
    ...fiberProto,
    id: () => FiberId.none,
    await: core.succeed(exit),
    children: core.succeed([]),
    inheritAll: core.void,
    poll: core.succeed(Option.some(exit)),
    interruptAsFork: () => core.void
  }

  return _fiber
}

/** @internal */
export const dump = <A, E>(self: Fiber.RuntimeFiber<A, E>): Effect.Effect<Fiber.Fiber.Dump> =>
  core.map(self.status, (status) => ({ id: self.id(), status }))

/** @internal */
export const dumpAll = (
  fibers: Iterable<Fiber.RuntimeFiber<unknown, unknown>>
): Effect.Effect<Array<Fiber.Fiber.Dump>> => core.forEachSequential(fibers, dump)

/** @internal */
export const fail = <E>(error: E): Fiber.Fiber<never, E> => done(Exit.fail(error))

/** @internal */
export const failCause = <E>(cause: Cause.Cause<E>): Fiber.Fiber<never, E> => done(Exit.failCause(cause))

/** @internal */
export const fromEffect = <A, E>(effect: Effect.Effect<A, E>): Effect.Effect<Fiber.Fiber<A, E>> =>
  core.map(core.exit(effect), done)

/** @internal */
export const id = <A, E>(self: Fiber.Fiber<A, E>): FiberId.FiberId => self.id()

/** @internal */
export const inheritAll = <A, E>(self: Fiber.Fiber<A, E>): Effect.Effect<void> => self.inheritAll

/** @internal */
export const interrupted = (fiberId: FiberId.FiberId): Fiber.Fiber<never> => done(Exit.interrupt(fiberId))

/** @internal */
export const interruptAll = (fibers: Iterable<Fiber.Fiber<any, any>>): Effect.Effect<void> =>
  core.flatMap(core.fiberId, (fiberId) => pipe(fibers, interruptAllAs(fiberId)))

/** @internal */
export const interruptAllAs = dual<
  (fiberId: FiberId.FiberId) => (fibers: Iterable<Fiber.Fiber<any, any>>) => Effect.Effect<void>,
  (fibers: Iterable<Fiber.Fiber<any, any>>, fiberId: FiberId.FiberId) => Effect.Effect<void>
>(
  2,
  core.fnUntraced(function*(fibers, fiberId) {
    for (const fiber of fibers) {
      if (isRuntimeFiber(fiber)) {
        fiber.unsafeInterruptAsFork(fiberId)
        continue
      }
      yield* fiber.interruptAsFork(fiberId)
    }
    for (const fiber of fibers) {
      if (isRuntimeFiber(fiber) && fiber.unsafePoll()) {
        continue
      }
      yield* fiber.await
    }
  })
)

/** @internal */
export const interruptAsFork = dual<
  (fiberId: FiberId.FiberId) => <A, E>(self: Fiber.Fiber<A, E>) => Effect.Effect<void>,
  <A, E>(self: Fiber.Fiber<A, E>, fiberId: FiberId.FiberId) => Effect.Effect<void>
>(2, (self, fiberId) => self.interruptAsFork(fiberId))

/** @internal */
export const join = <A, E>(self: Fiber.Fiber<A, E>): Effect.Effect<A, E> =>
  core.zipLeft(core.flatten(self.await), self.inheritAll)

/** @internal */
export const map = dual<
  <A, B>(f: (a: A) => B) => <E>(self: Fiber.Fiber<A, E>) => Fiber.Fiber<B, E>,
  <A, E, B>(self: Fiber.Fiber<A, E>, f: (a: A) => B) => Fiber.Fiber<B, E>
>(2, (self, f) => mapEffect(self, (a) => core.sync(() => f(a))))

/** @internal */
export const mapEffect = dual<
  <A, A2, E2>(f: (a: A) => Effect.Effect<A2, E2>) => <E>(self: Fiber.Fiber<A, E>) => Fiber.Fiber<A2, E | E2>,
  <A, E, A2, E2>(self: Fiber.Fiber<A, E>, f: (a: A) => Effect.Effect<A2, E2>) => Fiber.Fiber<A2, E | E2>
>(2, (self, f) => {
  const _fiber = {
    ...effectable.CommitPrototype,
    commit() {
      return join(this)
    },
    ...fiberProto,
    id: () => self.id(),
    await: core.flatMap(self.await, Exit.forEachEffect(f)),
    children: self.children,
    inheritAll: self.inheritAll,
    poll: core.flatMap(self.poll, (result) => {
      switch (result._tag) {
        case "None":
          return core.succeed(Option.none())
        case "Some":
          return pipe(
            Exit.forEachEffect(result.value, f),
            core.map(Option.some)
          )
      }
    }),
    interruptAsFork: (id: FiberId.FiberId) => self.interruptAsFork(id)
  }
  return _fiber
})

/** @internal */
export const mapFiber = dual<
  <E, E2, A, B>(
    f: (a: A) => Fiber.Fiber<B, E2>
  ) => (self: Fiber.Fiber<A, E>) => Effect.Effect<Fiber.Fiber<B, E | E2>>,
  <A, E, E2, B>(
    self: Fiber.Fiber<A, E>,
    f: (a: A) => Fiber.Fiber<B, E2>
  ) => Effect.Effect<Fiber.Fiber<B, E | E2>>
>(2, <A, E, E2, B>(
  self: Fiber.Fiber<A, E>,
  f: (a: A) => Fiber.Fiber<B, E2>
) =>
  core.map(
    self.await,
    Exit.match({
      onFailure: (cause): Fiber.Fiber<B, E | E2> => failCause(cause),
      onSuccess: (a) => f(a)
    })
  ))

/** @internal */
export const match = dual<
  <A, E, Z>(
    options: {
      readonly onFiber: (fiber: Fiber.Fiber<A, E>) => Z
      readonly onRuntimeFiber: (fiber: Fiber.RuntimeFiber<A, E>) => Z
    }
  ) => (self: Fiber.Fiber<A, E>) => Z,
  <A, E, Z>(
    self: Fiber.Fiber<A, E>,
    options: {
      readonly onFiber: (fiber: Fiber.Fiber<A, E>) => Z
      readonly onRuntimeFiber: (fiber: Fiber.RuntimeFiber<A, E>) => Z
    }
  ) => Z
>(2, (self, { onFiber, onRuntimeFiber }) => {
  if (isRuntimeFiber(self)) {
    return onRuntimeFiber(self)
  }
  return onFiber(self)
})

/** @internal */
const _never = {
  ...effectable.CommitPrototype,
  commit() {
    return join(this)
  },
  ...fiberProto,
  id: () => FiberId.none,
  await: core.never,
  children: core.succeed([]),
  inheritAll: core.never,
  poll: core.succeed(Option.none()),
  interruptAsFork: () => core.never
}

/** @internal */
export const never: Fiber.Fiber<never> = _never

/** @internal */
export const orElse = dual<
  <A2, E2>(that: Fiber.Fiber<A2, E2>) => <A, E>(self: Fiber.Fiber<A, E>) => Fiber.Fiber<A | A2, E | E2>,
  <A, E, A2, E2>(self: Fiber.Fiber<A, E>, that: Fiber.Fiber<A2, E2>) => Fiber.Fiber<A | A2, E | E2>
>(2, (self, that) => ({
  ...effectable.CommitPrototype,
  commit() {
    return join(this)
  },
  ...fiberProto,
  id: () => FiberId.getOrElse(self.id(), that.id()),
  await: core.zipWith(
    self.await,
    that.await,
    (exit1, exit2) => (Exit.isSuccess(exit1) ? exit1 : exit2)
  ),
  children: self.children,
  inheritAll: core.zipRight(that.inheritAll, self.inheritAll),
  poll: core.zipWith(
    self.poll,
    that.poll,
    (option1, option2) => {
      switch (option1._tag) {
        case "None": {
          return Option.none()
        }
        case "Some": {
          return Exit.isSuccess(option1.value) ? option1 : option2
        }
      }
    }
  ),
  interruptAsFork: (id) =>
    pipe(
      core.interruptAsFiber(self, id),
      core.zipRight(pipe(that, core.interruptAsFiber(id))),
      core.asVoid
    )
}))

/** @internal */
export const orElseEither = dual<
  <A2, E2>(that: Fiber.Fiber<A2, E2>) => <A, E>(self: Fiber.Fiber<A, E>) => Fiber.Fiber<Either.Either<A2, A>, E | E2>,
  <A, E, A2, E2>(self: Fiber.Fiber<A, E>, that: Fiber.Fiber<A2, E2>) => Fiber.Fiber<Either.Either<A2, A>, E | E2>
>(2, (self, that) => orElse(map(self, Either.left), map(that, Either.right)))

/** @internal */
export const poll = <A, E>(self: Fiber.Fiber<A, E>): Effect.Effect<Option.Option<Exit.Exit<A, E>>> => self.poll

// forked from https://github.com/sindresorhus/parse-ms/blob/4da2ffbdba02c6e288c08236695bdece0adca173/index.js
// MIT License
// Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
/** @internal */
const parseMs = (milliseconds: number) => {
  const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil
  return {
    days: roundTowardsZero(milliseconds / 86400000),
    hours: roundTowardsZero(milliseconds / 3600000) % 24,
    minutes: roundTowardsZero(milliseconds / 60000) % 60,
    seconds: roundTowardsZero(milliseconds / 1000) % 60,
    milliseconds: roundTowardsZero(milliseconds) % 1000,
    microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
    nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
  }
}

/** @internal */
const renderStatus = (status: FiberStatus.FiberStatus): string => {
  if (FiberStatus.isDone(status)) {
    return "Done"
  }
  if (FiberStatus.isRunning(status)) {
    return "Running"
  }

  const isInterruptible = runtimeFlags.interruptible(status.runtimeFlags) ?
    "interruptible" :
    "uninterruptible"
  return `Suspended(${isInterruptible})`
}

/** @internal */
export const pretty = <A, E>(self: Fiber.RuntimeFiber<A, E>): Effect.Effect<string> =>
  core.flatMap(Clock.currentTimeMillis, (now) =>
    core.map(dump(self), (dump) => {
      const time = now - dump.id.startTimeMillis
      const { days, hours, milliseconds, minutes, seconds } = parseMs(time)
      const lifeMsg = (days === 0 ? "" : `${days}d`) +
        (days === 0 && hours === 0 ? "" : `${hours}h`) +
        (days === 0 && hours === 0 && minutes === 0 ? "" : `${minutes}m`) +
        (days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? "" : `${seconds}s`) +
        `${milliseconds}ms`
      const waitMsg = FiberStatus.isSuspended(dump.status) ?
        (() => {
          const ids = FiberId.ids(dump.status.blockingOn)
          return HashSet.size(ids) > 0
            ? `waiting on ` + Array.from(ids).map((id) => `${id}`).join(", ")
            : ""
        })() :
        ""
      const statusMsg = renderStatus(dump.status)
      return `[Fiber](#${dump.id.id}) (${lifeMsg}) ${waitMsg}\n   Status: ${statusMsg}`
    }))

/** @internal */
export const unsafeRoots = (): Array<Fiber.RuntimeFiber<any, any>> => Array.from(fiberScope.globalScope.roots)

/** @internal */
export const roots: Effect.Effect<Array<Fiber.RuntimeFiber<any, any>>> = core.sync(unsafeRoots)

/** @internal */
export const status = <A, E>(self: Fiber.RuntimeFiber<A, E>): Effect.Effect<FiberStatus.FiberStatus> => self.status

/** @internal */
export const succeed = <A>(value: A): Fiber.Fiber<A> => done(Exit.succeed(value))

const void_: Fiber.Fiber<void> = succeed(void 0)
export {
  /** @internal */
  void_ as void
}

/** @internal */
export const currentFiberURI = "effect/FiberCurrent"

/** @internal */
export const getCurrentFiber = (): Option.Option<Fiber.RuntimeFiber<any, any>> =>
  Option.fromNullable((globalThis as any)[currentFiberURI])
