import * as Deferred from "../../Deferred.js"
import * as Effect from "../../Effect.js"
import { dual, pipe } from "../../Function.js"
import * as Option from "../../Option.js"
import * as Ref from "../../Ref.js"

/** @internal */
export const HandoffTypeId = Symbol.for("effect/Stream/Handoff")

/** @internal */
export type HandoffTypeId = typeof HandoffTypeId

/**
 * A synchronous queue-like abstraction that allows a producer to offer an
 * element and wait for it to be taken, and allows a consumer to wait for an
 * element to be available.
 *
 * @internal
 */
export interface Handoff<in out A> extends Handoff.Variance<A> {
  readonly ref: Ref.Ref<Handoff.State<A>>
}

/** @internal */
export const OP_HANDOFF_STATE_EMPTY = "Empty" as const

/** @internal */
export type OP_HANDOFF_STATE_EMPTY = typeof OP_HANDOFF_STATE_EMPTY

/** @internal */
export const OP_HANDOFF_STATE_FULL = "Full" as const

/** @internal */
export type OP_HANDOFF_STATE_FULL = typeof OP_HANDOFF_STATE_FULL

/** @internal */
export declare namespace Handoff {
  /** @internal */
  export interface Variance<in out A> {
    readonly [HandoffTypeId]: {
      readonly _A: (_: A) => A
    }
  }

  /** @internal */
  export type State<A> = Empty | Full<A>

  /** @internal */
  export interface Empty {
    readonly _tag: OP_HANDOFF_STATE_EMPTY
    readonly notifyConsumer: Deferred.Deferred<void>
  }

  /** @internal */
  export interface Full<out A> {
    readonly _tag: OP_HANDOFF_STATE_FULL
    readonly value: A
    readonly notifyProducer: Deferred.Deferred<void>
  }
}

/** @internal */
const handoffStateEmpty = <A>(notifyConsumer: Deferred.Deferred<void>): Handoff.State<A> => ({
  _tag: OP_HANDOFF_STATE_EMPTY,
  notifyConsumer
})

/** @internal */
const handoffStateFull = <A>(value: A, notifyProducer: Deferred.Deferred<void>): Handoff.State<A> => ({
  _tag: OP_HANDOFF_STATE_FULL,
  value,
  notifyProducer
})

/** @internal */
const handoffStateMatch = <A, Z>(
  onEmpty: (notifyConsumer: Deferred.Deferred<void>) => Z,
  onFull: (value: A, notifyProducer: Deferred.Deferred<void>) => Z
) => {
  return (self: Handoff.State<A>): Z => {
    switch (self._tag) {
      case OP_HANDOFF_STATE_EMPTY: {
        return onEmpty(self.notifyConsumer)
      }
      case OP_HANDOFF_STATE_FULL: {
        return onFull(self.value, self.notifyProducer)
      }
    }
  }
}

const handoffVariance = {
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal */
export const make = <A>(): Effect.Effect<Handoff<A>> =>
  pipe(
    Deferred.make<void>(),
    Effect.flatMap((deferred) => Ref.make(handoffStateEmpty<A>(deferred))),
    Effect.map((ref): Handoff<A> => ({
      [HandoffTypeId]: handoffVariance,
      ref
    }))
  )

/** @internal */
export const offer = dual<
  <A>(value: A) => (self: Handoff<A>) => Effect.Effect<void>,
  <A>(self: Handoff<A>, value: A) => Effect.Effect<void>
>(2, (self, value): Effect.Effect<void> => {
  return Effect.flatMap(Deferred.make<void>(), (deferred) =>
    Effect.flatten(
      Ref.modify(self.ref, (state) =>
        pipe(
          state,
          handoffStateMatch(
            (notifyConsumer) => [
              Effect.zipRight(
                Deferred.succeed(notifyConsumer, void 0),
                Deferred.await(deferred)
              ),
              handoffStateFull(value, deferred)
            ],
            (_, notifyProducer) => [
              Effect.flatMap(
                Deferred.await(notifyProducer),
                () => pipe(self, offer(value))
              ),
              state
            ]
          )
        ))
    ))
})

/** @internal */
export const take = <A>(self: Handoff<A>): Effect.Effect<A> =>
  Effect.flatMap(Deferred.make<void>(), (deferred) =>
    Effect.flatten(
      Ref.modify(self.ref, (state) =>
        pipe(
          state,
          handoffStateMatch(
            (notifyConsumer) =>
              [
                Effect.flatMap(
                  Deferred.await(notifyConsumer),
                  () => take(self)
                ),
                state
              ] as const,
            (value, notifyProducer) => [
              Effect.as(
                Deferred.succeed(notifyProducer, void 0),
                value
              ),
              handoffStateEmpty<A>(deferred)
            ]
          )
        ))
    ))

/** @internal */
export const poll = <A>(self: Handoff<A>): Effect.Effect<Option.Option<A>> =>
  Effect.flatMap(Deferred.make<void>(), (deferred) =>
    Effect.flatten(
      Ref.modify(self.ref, (state) =>
        pipe(
          state,
          handoffStateMatch(
            () =>
              [
                Effect.succeed(Option.none<A>()),
                state
              ] as const,
            (value, notifyProducer) => [
              Effect.as(
                Deferred.succeed(notifyProducer, void 0),
                Option.some(value)
              ),
              handoffStateEmpty<A>(deferred)
            ]
          )
        ))
    ))
