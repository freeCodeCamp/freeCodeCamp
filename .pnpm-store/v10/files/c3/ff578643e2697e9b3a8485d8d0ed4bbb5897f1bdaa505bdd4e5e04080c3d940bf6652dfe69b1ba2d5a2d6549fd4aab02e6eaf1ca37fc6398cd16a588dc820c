import * as Cause from "../Cause.js"
import * as Chunk from "../Chunk.js"
import * as Effect from "../Effect.js"
import * as Exit from "../Exit.js"
import { constFalse, constTrue, dual, pipe } from "../Function.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import type * as Take from "../Take.js"

/** @internal */
const TakeSymbolKey = "effect/Take"

/** @internal */
export const TakeTypeId: Take.TakeTypeId = Symbol.for(
  TakeSymbolKey
) as Take.TakeTypeId

const takeVariance = {
  /* c8 ignore next */
  _A: (_: never) => _,
  /* c8 ignore next */
  _E: (_: never) => _
}

/** @internal */
export class TakeImpl<out A, out E = never> implements Take.Take<A, E> {
  readonly [TakeTypeId] = takeVariance
  constructor(readonly exit: Exit.Exit<Chunk.Chunk<A>, Option.Option<E>>) {
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const chunk = <A>(chunk: Chunk.Chunk<A>): Take.Take<A> => new TakeImpl(Exit.succeed(chunk))

/** @internal */
export const die = (defect: unknown): Take.Take<never> => new TakeImpl(Exit.die(defect))

/** @internal */
export const dieMessage = (message: string): Take.Take<never> =>
  new TakeImpl(Exit.die(new Cause.RuntimeException(message)))

/** @internal */
export const done = <A, E>(self: Take.Take<A, E>): Effect.Effect<Chunk.Chunk<A>, Option.Option<E>> =>
  Effect.suspend(() => self.exit)

/** @internal */
export const end: Take.Take<never> = new TakeImpl(Exit.fail(Option.none()))

/** @internal */
export const fail = <E>(error: E): Take.Take<never, E> => new TakeImpl(Exit.fail(Option.some(error)))

/** @internal */
export const failCause = <E>(cause: Cause.Cause<E>): Take.Take<never, E> =>
  new TakeImpl(Exit.failCause(pipe(cause, Cause.map(Option.some))))

/** @internal */
export const fromEffect = <A, E, R>(effect: Effect.Effect<A, E, R>): Effect.Effect<Take.Take<A, E>, never, R> =>
  Effect.matchCause(effect, { onFailure: failCause, onSuccess: of })

/** @internal */
export const fromExit = <A, E>(exit: Exit.Exit<A, E>): Take.Take<A, E> =>
  new TakeImpl(pipe(exit, Exit.mapBoth({ onFailure: Option.some, onSuccess: Chunk.of })))

/** @internal */
export const fromPull = <A, E, R>(
  pull: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R>
): Effect.Effect<Take.Take<A, E>, never, R> =>
  Effect.matchCause(pull, {
    onFailure: (cause) =>
      Option.match(Cause.flipCauseOption(cause), {
        onNone: () => end,
        onSome: failCause
      }),
    onSuccess: chunk
  })

/** @internal */
export const isDone = <A, E>(self: Take.Take<A, E>): boolean =>
  Exit.match(self.exit, {
    onFailure: (cause) => Option.isNone(Cause.flipCauseOption(cause)),
    onSuccess: constFalse
  })

/** @internal */
export const isFailure = <A, E>(self: Take.Take<A, E>): boolean =>
  Exit.match(self.exit, {
    onFailure: (cause) => Option.isSome(Cause.flipCauseOption(cause)),
    onSuccess: constFalse
  })

/** @internal */
export const isSuccess = <A, E>(self: Take.Take<A, E>): boolean =>
  Exit.match(self.exit, {
    onFailure: constFalse,
    onSuccess: constTrue
  })

/** @internal */
export const make = <A, E>(
  exit: Exit.Exit<Chunk.Chunk<A>, Option.Option<E>>
): Take.Take<A, E> => new TakeImpl(exit)

/** @internal */
export const match = dual<
  <Z, E, Z2, A, Z3>(
    options: {
      readonly onEnd: () => Z
      readonly onFailure: (cause: Cause.Cause<E>) => Z2
      readonly onSuccess: (chunk: Chunk.Chunk<A>) => Z3
    }
  ) => (self: Take.Take<A, E>) => Z | Z2 | Z3,
  <A, E, Z, Z2, Z3>(
    self: Take.Take<A, E>,
    options: {
      readonly onEnd: () => Z
      readonly onFailure: (cause: Cause.Cause<E>) => Z2
      readonly onSuccess: (chunk: Chunk.Chunk<A>) => Z3
    }
  ) => Z | Z2 | Z3
>(2, <A, E, Z, Z2, Z3>(
  self: Take.Take<A, E>,
  { onEnd, onFailure, onSuccess }: {
    readonly onEnd: () => Z
    readonly onFailure: (cause: Cause.Cause<E>) => Z2
    readonly onSuccess: (chunk: Chunk.Chunk<A>) => Z3
  }
): Z | Z2 | Z3 =>
  Exit.match(self.exit, {
    onFailure: (cause) =>
      Option.match(Cause.flipCauseOption(cause), {
        onNone: onEnd,
        onSome: onFailure
      }),
    onSuccess
  }))

/** @internal */
export const matchEffect = dual<
  <Z, E2, R, E, Z2, R2, A, Z3, E3, R3>(
    options: {
      readonly onEnd: Effect.Effect<Z, E2, R>
      readonly onFailure: (cause: Cause.Cause<E>) => Effect.Effect<Z2, E2, R2>
      readonly onSuccess: (chunk: Chunk.Chunk<A>) => Effect.Effect<Z3, E3, R3>
    }
  ) => (self: Take.Take<A, E>) => Effect.Effect<Z | Z2 | Z3, E2 | E | E3, R | R2 | R3>,
  <A, E, Z, E2, R, Z2, R2, Z3, E3, R3>(
    self: Take.Take<A, E>,
    options: {
      readonly onEnd: Effect.Effect<Z, E2, R>
      readonly onFailure: (cause: Cause.Cause<E>) => Effect.Effect<Z2, E2, R2>
      readonly onSuccess: (chunk: Chunk.Chunk<A>) => Effect.Effect<Z3, E3, R3>
    }
  ) => Effect.Effect<Z | Z2 | Z3, E2 | E | E3, R | R2 | R3>
>(2, <A, E, Z, E2, R, Z2, R2, Z3, E3, R3>(
  self: Take.Take<A, E>,
  { onEnd, onFailure, onSuccess }: {
    readonly onEnd: Effect.Effect<Z, E2, R>
    readonly onFailure: (cause: Cause.Cause<E>) => Effect.Effect<Z2, E2, R2>
    readonly onSuccess: (chunk: Chunk.Chunk<A>) => Effect.Effect<Z3, E3, R3>
  }
): Effect.Effect<Z | Z2 | Z3, E2 | E | E3, R | R2 | R3> =>
  Exit.matchEffect(self.exit, {
    onFailure: (cause) =>
      Option.match<Cause.Cause<E>, Effect.Effect<Z | Z2, E2 | E, R | R2>>(Cause.flipCauseOption(cause), {
        onNone: () => onEnd,
        onSome: onFailure
      }),
    onSuccess
  }))

/** @internal */
export const map = dual<
  <A, B>(f: (a: A) => B) => <E>(self: Take.Take<A, E>) => Take.Take<B, E>,
  <A, E, B>(self: Take.Take<A, E>, f: (a: A) => B) => Take.Take<B, E>
>(
  2,
  <A, E, B>(self: Take.Take<A, E>, f: (a: A) => B): Take.Take<B, E> =>
    new TakeImpl(pipe(self.exit, Exit.map(Chunk.map(f))))
)

/** @internal */
export const of = <A>(value: A): Take.Take<A> => new TakeImpl(Exit.succeed(Chunk.of(value)))

/** @internal */
export const tap = dual<
  <A, X, E2, R>(
    f: (chunk: Chunk.Chunk<A>) => Effect.Effect<X, E2, R>
  ) => <E>(self: Take.Take<A, E>) => Effect.Effect<void, E2 | E, R>,
  <A, E, X, E2, R>(
    self: Take.Take<A, E>,
    f: (chunk: Chunk.Chunk<A>) => Effect.Effect<X, E2, R>
  ) => Effect.Effect<void, E2 | E, R>
>(2, <A, E, X, E2, R>(
  self: Take.Take<A, E>,
  f: (chunk: Chunk.Chunk<A>) => Effect.Effect<X, E2, R>
): Effect.Effect<void, E2 | E, R> => pipe(self.exit, Exit.forEachEffect(f), Effect.asVoid))
