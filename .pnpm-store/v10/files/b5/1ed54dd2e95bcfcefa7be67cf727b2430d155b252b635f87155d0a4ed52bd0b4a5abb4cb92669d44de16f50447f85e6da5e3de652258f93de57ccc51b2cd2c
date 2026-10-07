import * as Cause from "../../Cause.js"
import * as Deferred from "../../Deferred.js"
import * as Effect from "../../Effect.js"
import * as Either from "../../Either.js"
import * as Exit from "../../Exit.js"
import { pipe } from "../../Function.js"
import * as Ref from "../../Ref.js"
import type * as SingleProducerAsyncInput from "../../SingleProducerAsyncInput.js"

/** @internal */
type State<Err, Elem, _Done> =
  | Empty
  | Emit<Err, Elem, _Done>
  | Error<Err>
  | Done<_Done>

/** @internal */
const OP_STATE_EMPTY = "Empty" as const

/** @internal */
type OP_STATE_EMPTY = typeof OP_STATE_EMPTY

/** @internal */
const OP_STATE_EMIT = "Emit" as const

/** @internal */
type OP_STATE_EMIT = typeof OP_STATE_EMIT

/** @internal */
const OP_STATE_ERROR = "Error" as const

/** @internal */
type OP_STATE_ERROR = typeof OP_STATE_ERROR

/** @internal */
const OP_STATE_DONE = "Done" as const

/** @internal */
type OP_STATE_DONE = typeof OP_STATE_DONE

/** @internal */
interface Empty {
  readonly _tag: OP_STATE_EMPTY
  readonly notifyProducer: Deferred.Deferred<void>
}

/** @internal */
interface Emit<Err, Elem, Done> {
  readonly _tag: OP_STATE_EMIT
  readonly notifyConsumers: ReadonlyArray<Deferred.Deferred<Either.Either<Elem, Done>, Err>>
}

/** @internal */
interface Error<Err> {
  readonly _tag: OP_STATE_ERROR
  readonly cause: Cause.Cause<Err>
}

/** @internal */
interface Done<_Done> {
  readonly _tag: OP_STATE_DONE
  readonly done: _Done
}

/** @internal */
const stateEmpty = (notifyProducer: Deferred.Deferred<void>): State<never, never, never> => ({
  _tag: OP_STATE_EMPTY,
  notifyProducer
})

/** @internal */
const stateEmit = <Err, Elem, Done>(
  notifyConsumers: ReadonlyArray<Deferred.Deferred<Either.Either<Elem, Done>, Err>>
): State<Err, Elem, Done> => ({
  _tag: OP_STATE_EMIT,
  notifyConsumers
})

/** @internal */
const stateError = <Err>(cause: Cause.Cause<Err>): State<Err, never, never> => ({
  _tag: OP_STATE_ERROR,
  cause
})

/** @internal */
const stateDone = <Done>(done: Done): State<never, never, Done> => ({
  _tag: OP_STATE_DONE,
  done
})

/** @internal */
class SingleProducerAsyncInputImpl<in out Err, in out Elem, in out Done>
  implements SingleProducerAsyncInput.SingleProducerAsyncInput<Err, Elem, Done>
{
  constructor(readonly ref: Ref.Ref<State<Err, Elem, Done>>) {
  }

  awaitRead(): Effect.Effect<unknown> {
    return Effect.flatten(
      Ref.modify(this.ref, (state) =>
        state._tag === OP_STATE_EMPTY ?
          [Deferred.await(state.notifyProducer), state as State<Err, Elem, Done>] :
          [Effect.void, state])
    )
  }

  get close(): Effect.Effect<unknown> {
    return Effect.fiberIdWith((fiberId) => this.error(Cause.interrupt(fiberId)))
  }

  done(value: Done): Effect.Effect<unknown> {
    return Effect.flatten(
      Ref.modify(this.ref, (state) => {
        switch (state._tag) {
          case OP_STATE_EMPTY: {
            return [Deferred.await(state.notifyProducer), state]
          }
          case OP_STATE_EMIT: {
            return [
              Effect.forEach(
                state.notifyConsumers,
                (deferred) => Deferred.succeed(deferred, Either.left(value)),
                { discard: true }
              ),
              stateDone(value) as State<Err, Elem, Done>
            ]
          }
          case OP_STATE_ERROR: {
            return [Effect.interrupt, state]
          }
          case OP_STATE_DONE: {
            return [Effect.interrupt, state]
          }
        }
      })
    )
  }

  emit(element: Elem): Effect.Effect<unknown> {
    return Effect.flatMap(Deferred.make<void>(), (deferred) =>
      Effect.flatten(
        Ref.modify(this.ref, (state) => {
          switch (state._tag) {
            case OP_STATE_EMPTY: {
              return [Deferred.await(state.notifyProducer), state]
            }
            case OP_STATE_EMIT: {
              const notifyConsumer = state.notifyConsumers[0]
              const notifyConsumers = state.notifyConsumers.slice(1)
              if (notifyConsumer !== undefined) {
                return [
                  Deferred.succeed(notifyConsumer, Either.right(element)),
                  (notifyConsumers.length === 0 ?
                    stateEmpty(deferred) :
                    stateEmit(notifyConsumers)) as State<Err, Elem, Done>
                ]
              }
              throw new Error(
                "Bug: Channel.SingleProducerAsyncInput.emit - Queue was empty! please report an issue at https://github.com/Effect-TS/effect/issues"
              )
            }
            case OP_STATE_ERROR: {
              return [Effect.interrupt, state]
            }
            case OP_STATE_DONE: {
              return [Effect.interrupt, state]
            }
          }
        })
      ))
  }

  error(cause: Cause.Cause<Err>): Effect.Effect<unknown> {
    return Effect.flatten(
      Ref.modify(this.ref, (state) => {
        switch (state._tag) {
          case OP_STATE_EMPTY: {
            return [Deferred.await(state.notifyProducer), state]
          }
          case OP_STATE_EMIT: {
            return [
              Effect.forEach(
                state.notifyConsumers,
                (deferred) => Deferred.failCause(deferred, cause),
                { discard: true }
              ),
              stateError(cause) as State<Err, Elem, Done>
            ]
          }
          case OP_STATE_ERROR: {
            return [Effect.interrupt, state]
          }
          case OP_STATE_DONE: {
            return [Effect.interrupt, state]
          }
        }
      })
    )
  }

  get take(): Effect.Effect<Exit.Exit<Elem, Either.Either<Done, Err>>> {
    return this.takeWith(
      (cause) => Exit.failCause(Cause.map(cause, Either.left)),
      (elem) => Exit.succeed(elem) as Exit.Exit<Elem, Either.Either<Done, Err>>,
      (done) => Exit.fail(Either.right(done))
    )
  }

  takeWith<A>(
    onError: (cause: Cause.Cause<Err>) => A,
    onElement: (element: Elem) => A,
    onDone: (value: Done) => A
  ): Effect.Effect<A> {
    return Effect.flatMap(Deferred.make<Either.Either<Elem, Done>, Err>(), (deferred) =>
      Effect.flatten(
        Ref.modify(this.ref, (state) => {
          switch (state._tag) {
            case OP_STATE_EMPTY: {
              return [
                Effect.zipRight(
                  Deferred.succeed(state.notifyProducer, void 0),
                  Effect.matchCause(Deferred.await(deferred), {
                    onFailure: onError,
                    onSuccess: Either.match({ onLeft: onDone, onRight: onElement })
                  })
                ),
                stateEmit([deferred])
              ]
            }
            case OP_STATE_EMIT: {
              return [
                Effect.matchCause(Deferred.await(deferred), {
                  onFailure: onError,
                  onSuccess: Either.match({ onLeft: onDone, onRight: onElement })
                }),
                stateEmit([...state.notifyConsumers, deferred])
              ]
            }
            case OP_STATE_ERROR: {
              return [Effect.succeed(onError(state.cause)), state]
            }
            case OP_STATE_DONE: {
              return [Effect.succeed(onDone(state.done)), state]
            }
          }
        })
      ))
  }
}

/** @internal */
export const make = <Err, Elem, Done>(): Effect.Effect<
  SingleProducerAsyncInput.SingleProducerAsyncInput<Err, Elem, Done>
> =>
  pipe(
    Deferred.make<void>(),
    Effect.flatMap((deferred) => Ref.make(stateEmpty(deferred) as State<Err, Elem, Done>)),
    Effect.map((ref) => new SingleProducerAsyncInputImpl(ref))
  )
