import * as Cause from "../Cause.js"
import type * as Channel from "../Channel.js"
import * as Chunk from "../Chunk.js"
import * as Clock from "../Clock.js"
import * as Context from "../Context.js"
import * as Deferred from "../Deferred.js"
import * as Duration from "../Duration.js"
import * as Effect from "../Effect.js"
import * as Either from "../Either.js"
import * as Equal from "../Equal.js"
import type { ExecutionPlan } from "../ExecutionPlan.js"
import * as Exit from "../Exit.js"
import * as Fiber from "../Fiber.js"
import * as FiberRef from "../FiberRef.js"
import type { LazyArg } from "../Function.js"
import { constTrue, dual, identity, pipe } from "../Function.js"
import * as internalExecutionPlan from "../internal/executionPlan.js"
import * as Layer from "../Layer.js"
import * as MergeDecision from "../MergeDecision.js"
import * as Option from "../Option.js"
import type * as Order from "../Order.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty, type Predicate, type Refinement } from "../Predicate.js"
import * as PubSub from "../PubSub.js"
import * as Queue from "../Queue.js"
import * as RcRef from "../RcRef.js"
import * as Ref from "../Ref.js"
import * as Runtime from "../Runtime.js"
import * as Schedule from "../Schedule.js"
import type * as Scope from "../Scope.js"
import type * as Sink from "../Sink.js"
import type * as Stream from "../Stream.js"
import type * as Emit from "../StreamEmit.js"
import * as HaltStrategy from "../StreamHaltStrategy.js"
import type * as Take from "../Take.js"
import * as TPubSub from "../TPubSub.js"
import * as TQueue from "../TQueue.js"
import type * as Tracer from "../Tracer.js"
import * as Tuple from "../Tuple.js"
import type * as Types from "../Types.js"
import * as channel from "./channel.js"
import * as channelExecutor from "./channel/channelExecutor.js"
import * as MergeStrategy from "./channel/mergeStrategy.js"
import * as core from "./core-stream.js"
import * as doNotation from "./doNotation.js"
import { RingBuffer } from "./ringBuffer.js"
import * as InternalSchedule from "./schedule.js"
import * as sink_ from "./sink.js"
import * as DebounceState from "./stream/debounceState.js"
import * as emit from "./stream/emit.js"
import * as haltStrategy from "./stream/haltStrategy.js"
import * as Handoff from "./stream/handoff.js"
import * as HandoffSignal from "./stream/handoffSignal.js"
import * as pull from "./stream/pull.js"
import * as SinkEndReason from "./stream/sinkEndReason.js"
import * as ZipAllState from "./stream/zipAllState.js"
import * as ZipChunksState from "./stream/zipChunksState.js"
import * as InternalTake from "./take.js"
import * as InternalTracer from "./tracer.js"

/** @internal */
const StreamSymbolKey = "effect/Stream"

/** @internal */
export const StreamTypeId: Stream.StreamTypeId = Symbol.for(
  StreamSymbolKey
) as Stream.StreamTypeId

/** @internal */
const streamVariance = {
  _R: (_: never) => _,
  _E: (_: never) => _,
  _A: (_: never) => _
}

/** @internal */
export class StreamImpl<out A, out E = never, out R = never> implements Stream.Stream<A, E, R> {
  readonly [StreamTypeId] = streamVariance
  constructor(
    readonly channel: Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, unknown, unknown, R>
  ) {
  }

  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const isStream = (u: unknown): u is Stream.Stream<unknown, unknown, unknown> =>
  hasProperty(u, StreamTypeId) || Effect.isEffect(u)

/** @internal */
export const DefaultChunkSize = 4096

/** @internal */
export const accumulate = <A, E, R>(self: Stream.Stream<A, E, R>): Stream.Stream<Chunk.Chunk<A>, E, R> =>
  chunks(accumulateChunks(self))

/** @internal */
export const accumulateChunks = <A, E, R>(self: Stream.Stream<A, E, R>): Stream.Stream<A, E, R> => {
  const accumulator = (
    s: Chunk.Chunk<A>
  ): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E, E, void, unknown> =>
    core.readWith({
      onInput: (input: Chunk.Chunk<A>) => {
        const next = Chunk.appendAll(s, input)
        return core.flatMap(
          core.write(next),
          () => accumulator(next)
        )
      },
      onFailure: core.fail,
      onDone: () => core.void
    })
  return new StreamImpl(core.pipeTo(toChannel(self), accumulator(Chunk.empty())))
}

/** @internal */
export const acquireRelease = <A, E, R, R2, X>(
  acquire: Effect.Effect<A, E, R>,
  release: (resource: A, exit: Exit.Exit<unknown, unknown>) => Effect.Effect<X, never, R2>
): Stream.Stream<A, E, R | R2> => scoped(Effect.acquireRelease(acquire, release))

/** @internal */
export const aggregate = dual<
  <B, A, A2, E2, R2>(
    sink: Sink.Sink<B, A | A2, A2, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<B, E2 | E, R2 | R>,
  <A, E, R, B, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<B, A | A2, A2, E2, R2>
  ) => Stream.Stream<B, E2 | E, R2 | R>
>(
  2,
  <A, E, R, B, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<B, A | A2, A2, E2, R2>
  ): Stream.Stream<B, E2 | E, R2 | R> => aggregateWithin(self, sink, Schedule.forever)
)

/** @internal */
export const aggregateWithin = dual<
  <B, A, A2, E2, R2, C, R3>(
    sink: Sink.Sink<B, A | A2, A2, E2, R2>,
    schedule: Schedule.Schedule<C, Option.Option<B>, R3>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<B, E2 | E, R2 | R3 | R>,
  <A, E, R, B, A2, E2, R2, C, R3>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<B, A | A2, A2, E2, R2>,
    schedule: Schedule.Schedule<C, Option.Option<B>, R3>
  ) => Stream.Stream<B, E2 | E, R2 | R3 | R>
>(
  3,
  <A, E, R, B, A2, E2, R2, C, R3>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<B, A | A2, A2, E2, R2>,
    schedule: Schedule.Schedule<C, Option.Option<B>, R3>
  ): Stream.Stream<B, E2 | E, R2 | R3 | R> =>
    filterMap(
      aggregateWithinEither(self, sink, schedule),
      (_) =>
        Either.match(_, {
          onLeft: Option.none,
          onRight: Option.some
        })
    )
)

/** @internal */
export const aggregateWithinEither = dual<
  <B, A, A2, E2, R2, C, R3>(
    sink: Sink.Sink<B, A | A2, A2, E2, R2>,
    schedule: Schedule.Schedule<C, Option.Option<B>, R3>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<Either.Either<B, C>, E2 | E, R2 | R3 | R>,
  <A, E, R, B, A2, E2, R2, C, R3>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<B, A | A2, A2, E2, R2>,
    schedule: Schedule.Schedule<C, Option.Option<B>, R3>
  ) => Stream.Stream<Either.Either<B, C>, E2 | E, R2 | R3 | R>
>(
  3,
  <A, E, R, B, A2, E2, R2, C, R3>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<B, A | A2, A2, E2, R2>,
    schedule: Schedule.Schedule<C, Option.Option<B>, R3>
  ): Stream.Stream<Either.Either<B, C>, E2 | E, R2 | R3 | R> => {
    const layer = Effect.all([
      Handoff.make<HandoffSignal.HandoffSignal<A, E | E2>>(),
      Ref.make<SinkEndReason.SinkEndReason>(SinkEndReason.ScheduleEnd),
      Ref.make(Chunk.empty<A | A2>()),
      Schedule.driver(schedule),
      Ref.make(false),
      Ref.make(false)
    ])
    return fromEffect(layer).pipe(
      flatMap(([handoff, sinkEndReason, sinkLeftovers, scheduleDriver, consumed, endAfterEmit]) => {
        const handoffProducer: Channel.Channel<never, Chunk.Chunk<A>, never, E | E2, unknown, unknown> = core
          .readWithCause({
            onInput: (input: Chunk.Chunk<A>) =>
              core.flatMap(
                core.fromEffect(pipe(
                  handoff,
                  Handoff.offer<HandoffSignal.HandoffSignal<A, E | E2>>(HandoffSignal.emit(input)),
                  Effect.when(() => Chunk.isNonEmpty(input))
                )),
                () => handoffProducer
              ),
            onFailure: (cause) =>
              core.fromEffect(
                Handoff.offer<HandoffSignal.HandoffSignal<A, E | E2>>(
                  handoff,
                  HandoffSignal.halt(cause)
                )
              ),
            onDone: () =>
              core.fromEffect(
                Handoff.offer<HandoffSignal.HandoffSignal<A, E | E2>>(
                  handoff,
                  HandoffSignal.end(SinkEndReason.UpstreamEnd)
                )
              )
          })
        const handoffConsumer: Channel.Channel<Chunk.Chunk<A | A2>, unknown, E | E2, unknown, void, unknown> = pipe(
          Ref.getAndSet(sinkLeftovers, Chunk.empty()),
          Effect.flatMap((leftovers) => {
            if (Chunk.isNonEmpty(leftovers)) {
              return pipe(
                Ref.set(consumed, true),
                Effect.zipRight(Effect.succeed(pipe(
                  core.write(leftovers),
                  core.flatMap(() => handoffConsumer)
                )))
              )
            }
            return pipe(
              Handoff.take(handoff),
              Effect.map((signal) => {
                switch (signal._tag) {
                  case HandoffSignal.OP_EMIT: {
                    return pipe(
                      core.fromEffect(Ref.set(consumed, true)),
                      channel.zipRight(core.write(signal.elements)),
                      channel.zipRight(core.fromEffect(Ref.get(endAfterEmit))),
                      core.flatMap((bool) => bool ? core.void : handoffConsumer)
                    )
                  }
                  case HandoffSignal.OP_HALT: {
                    return core.failCause(signal.cause)
                  }
                  case HandoffSignal.OP_END: {
                    if (signal.reason._tag === SinkEndReason.OP_SCHEDULE_END) {
                      return pipe(
                        Ref.get(consumed),
                        Effect.map((bool) =>
                          bool ?
                            core.fromEffect(
                              pipe(
                                Ref.set(sinkEndReason, SinkEndReason.ScheduleEnd),
                                Effect.zipRight(Ref.set(endAfterEmit, true))
                              )
                            ) :
                            pipe(
                              core.fromEffect(
                                pipe(
                                  Ref.set(sinkEndReason, SinkEndReason.ScheduleEnd),
                                  Effect.zipRight(Ref.set(endAfterEmit, true))
                                )
                              ),
                              core.flatMap(() => handoffConsumer)
                            )
                        ),
                        channel.unwrap
                      )
                    }
                    return pipe(
                      Ref.set<SinkEndReason.SinkEndReason>(sinkEndReason, signal.reason),
                      Effect.zipRight(Ref.set(endAfterEmit, true)),
                      core.fromEffect
                    )
                  }
                }
              })
            )
          }),
          channel.unwrap
        )
        const timeout = (lastB: Option.Option<B>): Effect.Effect<C, Option.Option<never>, R2 | R3> =>
          scheduleDriver.next(lastB)
        const scheduledAggregator = (
          sinkFiber: Fiber.RuntimeFiber<readonly [Chunk.Chunk<Chunk.Chunk<A | A2>>, B], E | E2>,
          scheduleFiber: Fiber.RuntimeFiber<C, Option.Option<never>>,
          scope: Scope.Scope
        ): Channel.Channel<Chunk.Chunk<Either.Either<B, C>>, unknown, E | E2, unknown, unknown, unknown, R2 | R3> => {
          const forkSink = pipe(
            Ref.set(consumed, false),
            Effect.zipRight(Ref.set(endAfterEmit, false)),
            Effect.zipRight(
              pipe(
                handoffConsumer,
                channel.pipeToOrFail(sink_.toChannel(sink)),
                core.collectElements,
                channel.run,
                Effect.forkIn(scope)
              )
            )
          )
          const handleSide = (
            leftovers: Chunk.Chunk<Chunk.Chunk<A | A2>>,
            b: B,
            c: Option.Option<C>
          ): Channel.Channel<Chunk.Chunk<Either.Either<B, C>>, unknown, E | E2, unknown, unknown, unknown, R2 | R3> =>
            pipe(
              Ref.set(sinkLeftovers, Chunk.flatten(leftovers)),
              Effect.zipRight(
                Effect.map(Ref.get(sinkEndReason), (reason) => {
                  switch (reason._tag) {
                    case SinkEndReason.OP_SCHEDULE_END: {
                      return pipe(
                        Effect.all([
                          Ref.get(consumed),
                          forkSink,
                          pipe(timeout(Option.some(b)), Effect.forkIn(scope))
                        ]),
                        Effect.map(([wasConsumed, sinkFiber, scheduleFiber]) => {
                          const toWrite = pipe(
                            c,
                            Option.match({
                              onNone: (): Chunk.Chunk<Either.Either<B, C>> => Chunk.of(Either.right(b)),
                              onSome: (c): Chunk.Chunk<Either.Either<B, C>> =>
                                Chunk.make(Either.right(b), Either.left(c))
                            })
                          )
                          if (wasConsumed) {
                            return pipe(
                              core.write(toWrite),
                              core.flatMap(() => scheduledAggregator(sinkFiber, scheduleFiber, scope))
                            )
                          }
                          return scheduledAggregator(sinkFiber, scheduleFiber, scope)
                        }),
                        channel.unwrap
                      )
                    }
                    case SinkEndReason.OP_UPSTREAM_END: {
                      return pipe(
                        Ref.get(consumed),
                        Effect.map((wasConsumed) =>
                          wasConsumed ?
                            core.write(Chunk.of<Either.Either<B, C>>(Either.right(b))) :
                            core.void
                        ),
                        channel.unwrap
                      )
                    }
                  }
                })
              ),
              channel.unwrap
            )
          return channel.unwrap(
            Effect.raceWith(Fiber.join(sinkFiber), Fiber.join(scheduleFiber), {
              onSelfDone: (sinkExit, _) =>
                pipe(
                  Fiber.interrupt(scheduleFiber),
                  Effect.zipRight(pipe(
                    Effect.suspend(() => sinkExit),
                    Effect.map(([leftovers, b]) => handleSide(leftovers, b, Option.none()))
                  ))
                ),
              onOtherDone: (scheduleExit, _) =>
                Effect.matchCauseEffect(Effect.suspend(() => scheduleExit), {
                  onFailure: (cause) =>
                    Either.match(
                      Cause.failureOrCause(cause),
                      {
                        onLeft: () =>
                          pipe(
                            handoff,
                            Handoff.offer<HandoffSignal.HandoffSignal<A, E | E2>>(
                              HandoffSignal.end(SinkEndReason.ScheduleEnd)
                            ),
                            Effect.forkDaemon,
                            Effect.zipRight(
                              pipe(
                                Fiber.join(sinkFiber),
                                Effect.map(([leftovers, b]) => handleSide(leftovers, b, Option.none()))
                              )
                            )
                          ),
                        onRight: (cause) =>
                          pipe(
                            handoff,
                            Handoff.offer<HandoffSignal.HandoffSignal<A, E | E2>>(
                              HandoffSignal.halt(cause)
                            ),
                            Effect.forkDaemon,
                            Effect.zipRight(
                              pipe(
                                Fiber.join(sinkFiber),
                                Effect.map(([leftovers, b]) => handleSide(leftovers, b, Option.none()))
                              )
                            )
                          )
                      }
                    ),
                  onSuccess: (c) =>
                    pipe(
                      handoff,
                      Handoff.offer<HandoffSignal.HandoffSignal<A, E | E2>>(
                        HandoffSignal.end(SinkEndReason.ScheduleEnd)
                      ),
                      Effect.forkDaemon,
                      Effect.zipRight(
                        pipe(
                          Fiber.join(sinkFiber),
                          Effect.map(([leftovers, b]) => handleSide(leftovers, b, Option.some(c)))
                        )
                      )
                    )
                })
            })
          )
        }
        return unwrapScopedWith((scope) =>
          core.pipeTo(toChannel(self), handoffProducer).pipe(
            channel.run,
            Effect.forkIn(scope),
            Effect.zipRight(
              channel.pipeToOrFail(handoffConsumer, sink_.toChannel(sink)).pipe(
                core.collectElements,
                channel.run,
                Effect.forkIn(scope),
                Effect.flatMap((sinkFiber) =>
                  timeout(Option.none()).pipe(
                    Effect.forkIn(scope),
                    Effect.map((scheduleFiber) =>
                      new StreamImpl(
                        scheduledAggregator(sinkFiber, scheduleFiber, scope)
                      )
                    )
                  )
                )
              )
            )
          )
        )
      })
    )
  }
)

/** @internal */
export const as = dual<
  <B>(value: B) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<B, E, R>,
  <A, E, R, B>(self: Stream.Stream<A, E, R>, value: B) => Stream.Stream<B, E, R>
>(2, <A, E, R, B>(self: Stream.Stream<A, E, R>, value: B): Stream.Stream<B, E, R> => map(self, () => value))

const queueFromBufferOptions = <A, E>(
  bufferSize?: number | "unbounded" | {
    readonly bufferSize?: number | undefined
    readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
  } | undefined
): Effect.Effect<Queue.Queue<Take.Take<A, E>>> => {
  if (bufferSize === "unbounded") {
    return Queue.unbounded()
  } else if (typeof bufferSize === "number" || bufferSize === undefined) {
    return Queue.bounded(bufferSize ?? 16)
  }
  switch (bufferSize.strategy) {
    case "dropping":
      return Queue.dropping(bufferSize.bufferSize ?? 16)
    case "sliding":
      return Queue.sliding(bufferSize.bufferSize ?? 16)
    default:
      return Queue.bounded(bufferSize.bufferSize ?? 16)
  }
}

/** @internal */
export const _async = <A, E = never, R = never>(
  register: (
    emit: Emit.Emit<R, E, A, void>
  ) => Effect.Effect<void, never, R> | void,
  bufferSize?: number | "unbounded" | {
    readonly bufferSize?: number | undefined
    readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
  } | undefined
): Stream.Stream<A, E, R> =>
  Effect.acquireRelease(
    queueFromBufferOptions<A, E>(bufferSize),
    (queue) => Queue.shutdown(queue)
  ).pipe(
    Effect.flatMap((output) =>
      Effect.runtime<R>().pipe(
        Effect.flatMap((runtime) =>
          Effect.sync(() => {
            const runPromiseExit = Runtime.runPromiseExit(runtime)
            const canceler = register(emit.make<R, E, A, void>((resume) =>
              InternalTake.fromPull(resume).pipe(
                Effect.flatMap((take) => Queue.offer(output, take)),
                Effect.asVoid,
                runPromiseExit
              ).then((exit) => {
                if (Exit.isFailure(exit)) {
                  if (!Cause.isInterrupted(exit.cause)) {
                    throw Cause.squash(exit.cause)
                  }
                }
              })
            ))
            return canceler
          })
        ),
        Effect.map((value) => {
          const loop: Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, void, unknown> = Queue.take(output).pipe(
            Effect.flatMap((take) => InternalTake.done(take)),
            Effect.match({
              onFailure: (maybeError) =>
                core.fromEffect(Queue.shutdown(output)).pipe(
                  channel.zipRight(Option.match(maybeError, {
                    onNone: () => core.void,
                    onSome: (error) => core.fail(error)
                  }))
                ),
              onSuccess: (chunk) => core.write(chunk).pipe(core.flatMap(() => loop))
            }),
            channel.unwrap
          )
          return fromChannel(loop).pipe(ensuring(value ?? Effect.void))
        })
      )
    ),
    unwrapScoped
  )

/** @internal */
export const asyncEffect = <A, E = never, R = never>(
  register: (emit: Emit.Emit<R, E, A, void>) => Effect.Effect<unknown, E, R>,
  bufferSize?: number | "unbounded" | {
    readonly bufferSize?: number | undefined
    readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
  } | undefined
): Stream.Stream<A, E, R> =>
  pipe(
    Effect.acquireRelease(
      queueFromBufferOptions<A, E>(bufferSize),
      (queue) => Queue.shutdown(queue)
    ),
    Effect.flatMap((output) =>
      pipe(
        Effect.runtime<R>(),
        Effect.flatMap((runtime) =>
          pipe(
            register(
              emit.make((k) =>
                pipe(
                  InternalTake.fromPull(k),
                  Effect.flatMap((take) => Queue.offer(output, take)),
                  Effect.asVoid,
                  Runtime.runPromiseExit(runtime)
                ).then((exit) => {
                  if (Exit.isFailure(exit)) {
                    if (!Cause.isInterrupted(exit.cause)) {
                      throw Cause.squash(exit.cause)
                    }
                  }
                })
              )
            ),
            Effect.map(() => {
              const loop: Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, void, unknown> = pipe(
                Queue.take(output),
                Effect.flatMap(InternalTake.done),
                Effect.match({
                  onFailure: (maybeError) =>
                    pipe(
                      core.fromEffect(Queue.shutdown(output)),
                      channel.zipRight(Option.match(maybeError, { onNone: () => core.void, onSome: core.fail }))
                    ),
                  onSuccess: (chunk) => pipe(core.write(chunk), core.flatMap(() => loop))
                }),
                channel.unwrap
              )
              return loop
            })
          )
        )
      )
    ),
    channel.unwrapScoped,
    fromChannel
  )

const queueFromBufferOptionsPush = <A, E>(
  options?: { readonly bufferSize: "unbounded" } | {
    readonly bufferSize?: number | undefined
    readonly strategy?: "dropping" | "sliding" | undefined
  } | undefined
): Effect.Effect<Queue.Queue<Array<A> | Exit.Exit<void, E>>> => {
  if (options?.bufferSize === "unbounded" || (options?.bufferSize === undefined && options?.strategy === undefined)) {
    return Queue.unbounded()
  }
  switch (options?.strategy) {
    case "sliding":
      return Queue.sliding(options.bufferSize ?? 16)
    default:
      return Queue.dropping(options?.bufferSize ?? 16)
  }
}

/** @internal */
export const asyncPush = <A, E = never, R = never>(
  register: (emit: Emit.EmitOpsPush<E, A>) => Effect.Effect<unknown, E, R | Scope.Scope>,
  options?: {
    readonly bufferSize: "unbounded"
  } | {
    readonly bufferSize?: number | undefined
    readonly strategy?: "dropping" | "sliding" | undefined
  } | undefined
): Stream.Stream<A, E, Exclude<R, Scope.Scope>> =>
  Effect.acquireRelease(
    queueFromBufferOptionsPush<A, E>(options),
    Queue.shutdown
  ).pipe(
    Effect.tap((queue) =>
      FiberRef.getWith(FiberRef.currentScheduler, (scheduler) => register(emit.makePush(queue, scheduler)))
    ),
    Effect.map((queue) => {
      const loop: Channel.Channel<Chunk.Chunk<A>, unknown, E> = core.flatMap(Queue.take(queue), (item) =>
        Exit.isExit(item)
          ? Exit.isSuccess(item) ? core.void : core.failCause(item.cause)
          : channel.zipRight(core.write(Chunk.unsafeFromArray(item)), loop))
      return loop
    }),
    channel.unwrapScoped,
    fromChannel
  )

/** @internal */
export const asyncScoped = <A, E = never, R = never>(
  register: (emit: Emit.Emit<R, E, A, void>) => Effect.Effect<unknown, E, R | Scope.Scope>,
  bufferSize?: number | "unbounded" | {
    readonly bufferSize?: number | undefined
    readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
  } | undefined
): Stream.Stream<A, E, Exclude<R, Scope.Scope>> =>
  pipe(
    Effect.acquireRelease(
      queueFromBufferOptions<A, E>(bufferSize),
      (queue) => Queue.shutdown(queue)
    ),
    Effect.flatMap((output) =>
      pipe(
        Effect.runtime<R>(),
        Effect.flatMap((runtime) =>
          pipe(
            register(
              emit.make((k) =>
                pipe(
                  InternalTake.fromPull(k),
                  Effect.flatMap((take) => Queue.offer(output, take)),
                  Effect.asVoid,
                  Runtime.runPromiseExit(runtime)
                ).then((exit) => {
                  if (Exit.isFailure(exit)) {
                    if (!Cause.isInterrupted(exit.cause)) {
                      throw Cause.squash(exit.cause)
                    }
                  }
                })
              )
            ),
            Effect.zipRight(Ref.make(false)),
            Effect.flatMap((ref) =>
              pipe(
                Ref.get(ref),
                Effect.map((isDone) =>
                  isDone ?
                    pull.end() :
                    pipe(
                      Queue.take(output),
                      Effect.flatMap(InternalTake.done),
                      Effect.onError(() =>
                        pipe(
                          Ref.set(ref, true),
                          Effect.zipRight(Queue.shutdown(output))
                        )
                      )
                    )
                )
              )
            )
          )
        )
      )
    ),
    scoped,
    flatMap(repeatEffectChunkOption)
  )

/** @internal */
export const branchAfter = dual<
  <A, A2, E2, R2>(
    n: number,
    f: (input: Chunk.Chunk<A>) => Stream.Stream<A2, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    n: number,
    f: (input: Chunk.Chunk<A>) => Stream.Stream<A2, E2, R2>
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  3,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    n: number,
    f: (input: Chunk.Chunk<A>) => Stream.Stream<A2, E2, R2>
  ) =>
    suspend(() => {
      const buffering = (
        acc: Chunk.Chunk<A>
      ): Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, never, unknown, unknown, R | R2> =>
        core.readWith({
          onInput: (input) => {
            const nextSize = acc.length + input.length
            if (nextSize >= n) {
              const [b1, b2] = pipe(input, Chunk.splitAt(n - acc.length))
              return running(pipe(acc, Chunk.appendAll(b1)), b2)
            }
            return buffering(pipe(acc, Chunk.appendAll(input)))
          },
          onFailure: core.fail,
          onDone: () => running(acc, Chunk.empty())
        })
      const running = (
        prefix: Chunk.Chunk<A>,
        leftover: Chunk.Chunk<A>
      ): Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, never, unknown, unknown, R | R2> =>
        core.pipeTo(
          channel.zipRight(
            core.write(leftover),
            channel.identityChannel()
          ),
          toChannel(f(prefix))
        )
      return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(buffering(Chunk.empty<A>()))))
    })
)

/** @internal */
export const broadcast = dual<
  <N extends number>(
    n: N,
    maximumLag: number | {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ) => <A, E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<Types.TupleOf<N, Stream.Stream<A, E>>, never, Scope.Scope | R>,
  <A, E, R, N extends number>(
    self: Stream.Stream<A, E, R>,
    n: N,
    maximumLag: number | {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ) => Effect.Effect<Types.TupleOf<N, Stream.Stream<A, E>>, never, Scope.Scope | R>
>(3, <A, E, R, N extends number>(
  self: Stream.Stream<A, E, R>,
  n: N,
  maximumLag: number | {
    readonly capacity: "unbounded"
    readonly replay?: number | undefined
  } | {
    readonly capacity: number
    readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
    readonly replay?: number | undefined
  }
): Effect.Effect<Types.TupleOf<N, Stream.Stream<A, E>>, never, Scope.Scope | R> =>
  pipe(
    self,
    broadcastedQueues(n, maximumLag),
    Effect.map((tuple) =>
      tuple.map((queue) => flattenTake(fromQueue(queue, { shutdown: true }))) as Types.TupleOf<N, Stream.Stream<A, E>>
    )
  ))

/** @internal */
export const broadcastDynamic = dual<
  (
    maximumLag: number | {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<Stream.Stream<A, E>, never, Scope.Scope | R>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    maximumLag: number | {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ) => Effect.Effect<Stream.Stream<A, E>, never, Scope.Scope | R>
>(2, <A, E, R>(
  self: Stream.Stream<A, E, R>,
  maximumLag: number | {
    readonly capacity: "unbounded"
    readonly replay?: number | undefined
  } | {
    readonly capacity: number
    readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
    readonly replay?: number | undefined
  }
): Effect.Effect<Stream.Stream<A, E>, never, Scope.Scope | R> =>
  Effect.map(toPubSub(self, maximumLag), (pubsub) => flattenTake(fromPubSub(pubsub))))

export const share = dual<
  <A, E>(
    config: {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
      readonly idleTimeToLive?: Duration.DurationInput | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
      readonly idleTimeToLive?: Duration.DurationInput | undefined
    }
  ) => <R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<Stream.Stream<A, E>, never, R | Scope.Scope>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    config: {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
      readonly idleTimeToLive?: Duration.DurationInput | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
      readonly idleTimeToLive?: Duration.DurationInput | undefined
    }
  ) => Effect.Effect<Stream.Stream<A, E>, never, R | Scope.Scope>
>(
  2,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
      readonly idleTimeToLive?: Duration.DurationInput | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
      readonly idleTimeToLive?: Duration.DurationInput | undefined
    }
  ): Effect.Effect<Stream.Stream<A, E>, never, R | Scope.Scope> =>
    Effect.map(
      RcRef.make({
        acquire: broadcastDynamic(self, options),
        idleTimeToLive: options.idleTimeToLive
      }),
      (rcRef) => unwrapScoped(RcRef.get(rcRef))
    )
)

/** @internal */
export const broadcastedQueues = dual<
  <N extends number>(
    n: N,
    maximumLag: number | {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ) => <A, E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<Types.TupleOf<N, Queue.Dequeue<Take.Take<A, E>>>, never, Scope.Scope | R>,
  <A, E, R, N extends number>(
    self: Stream.Stream<A, E, R>,
    n: N,
    maximumLag: number | {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ) => Effect.Effect<Types.TupleOf<N, Queue.Dequeue<Take.Take<A, E>>>, never, Scope.Scope | R>
>(3, <A, E, R, N extends number>(
  self: Stream.Stream<A, E, R>,
  n: N,
  maximumLag: number | {
    readonly capacity: "unbounded"
    readonly replay?: number | undefined
  } | {
    readonly capacity: number
    readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
    readonly replay?: number | undefined
  }
): Effect.Effect<Types.TupleOf<N, Queue.Dequeue<Take.Take<A, E>>>, never, Scope.Scope | R> =>
  Effect.flatMap(pubsubFromOptions(maximumLag), (pubsub) =>
    pipe(
      Effect.all(Array.from({ length: n }, () => PubSub.subscribe(pubsub))) as Effect.Effect<
        Types.TupleOf<N, Queue.Dequeue<Take.Take<A, E>>>,
        never,
        R
      >,
      Effect.tap(() => Effect.forkScoped(runIntoPubSubScoped(self, pubsub)))
    )))

/** @internal */
export const broadcastedQueuesDynamic = dual<
  (
    maximumLag: number | {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ) => <A, E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<Effect.Effect<Queue.Dequeue<Take.Take<A, E>>, never, Scope.Scope>, never, Scope.Scope | R>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    maximumLag: number | {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ) => Effect.Effect<Effect.Effect<Queue.Dequeue<Take.Take<A, E>>, never, Scope.Scope>, never, Scope.Scope | R>
>(2, <A, E, R>(
  self: Stream.Stream<A, E, R>,
  maximumLag: number | {
    readonly capacity: "unbounded"
    readonly replay?: number | undefined
  } | {
    readonly capacity: number
    readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
    readonly replay?: number | undefined
  }
): Effect.Effect<Effect.Effect<Queue.Dequeue<Take.Take<A, E>>, never, Scope.Scope>, never, Scope.Scope | R> =>
  Effect.map(toPubSub(self, maximumLag), PubSub.subscribe))

/** @internal */
export const buffer = dual<
  (
    options: {
      readonly capacity: "unbounded"
    } | {
      readonly capacity: number
      readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
    }
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly capacity: "unbounded"
    } | {
      readonly capacity: number
      readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
    }
  ) => Stream.Stream<A, E, R>
>(2, <A, E, R>(
  self: Stream.Stream<A, E, R>,
  options: {
    readonly capacity: "unbounded"
  } | {
    readonly capacity: number
    readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
  }
): Stream.Stream<A, E, R> => {
  if (options.capacity === "unbounded") {
    return bufferUnbounded(self)
  } else if (options.strategy === "dropping") {
    return bufferDropping(self, options.capacity)
  } else if (options.strategy === "sliding") {
    return bufferSliding(self, options.capacity)
  }
  const queue = toQueueOfElements(self, options)
  return new StreamImpl(
    channel.unwrapScoped(
      Effect.map(queue, (queue) => {
        const process: Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, void, unknown> = pipe(
          core.fromEffect(Queue.take(queue)),
          core.flatMap(Exit.match({
            onFailure: (cause) =>
              pipe(
                Cause.flipCauseOption(cause),
                Option.match({ onNone: () => core.void, onSome: core.failCause })
              ),
            onSuccess: (value) => core.flatMap(core.write(Chunk.of(value)), () => process)
          }))
        )
        return process
      })
    )
  )
})

/** @internal */
export const bufferChunks = dual<
  (options: {
    readonly capacity: number
    readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
  }) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, options: {
    readonly capacity: number
    readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
  }) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, options: {
  readonly capacity: number
  readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
}): Stream.Stream<A, E, R> => {
  if (options.strategy === "dropping") {
    return bufferChunksDropping(self, options.capacity)
  } else if (options.strategy === "sliding") {
    return bufferChunksSliding(self, options.capacity)
  }
  const queue = toQueue(self, options)
  return new StreamImpl(
    channel.unwrapScoped(
      Effect.map(queue, (queue) => {
        const process: Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, void, unknown> = pipe(
          core.fromEffect(Queue.take(queue)),
          core.flatMap(InternalTake.match({
            onEnd: () => core.void,
            onFailure: core.failCause,
            onSuccess: (value) => pipe(core.write(value), core.flatMap(() => process))
          }))
        )
        return process
      })
    )
  )
})

const bufferChunksDropping = dual<
  (capacity: number) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, capacity: number) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, capacity: number): Stream.Stream<A, E, R> => {
  const queue = Effect.acquireRelease(
    Queue.dropping<readonly [Take.Take<A, E>, Deferred.Deferred<void>]>(capacity),
    (queue) => Queue.shutdown(queue)
  )
  return new StreamImpl(bufferSignal(queue, toChannel(self)))
})

const bufferChunksSliding = dual<
  (capacity: number) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, capacity: number) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, capacity: number): Stream.Stream<A, E, R> => {
  const queue = Effect.acquireRelease(
    Queue.sliding<readonly [Take.Take<A, E>, Deferred.Deferred<void>]>(capacity),
    (queue) => Queue.shutdown(queue)
  )
  return new StreamImpl(bufferSignal(queue, toChannel(self)))
})

const bufferDropping = dual<
  (capacity: number) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, capacity: number) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, capacity: number): Stream.Stream<A, E, R> => {
  const queue = Effect.acquireRelease(
    Queue.dropping<readonly [Take.Take<A, E>, Deferred.Deferred<void>]>(capacity),
    (queue) => Queue.shutdown(queue)
  )
  return new StreamImpl(bufferSignal(queue, toChannel(rechunk(1)(self))))
})

const bufferSliding = dual<
  (capacity: number) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, capacity: number) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, capacity: number): Stream.Stream<A, E, R> => {
  const queue = Effect.acquireRelease(
    Queue.sliding<readonly [Take.Take<A, E>, Deferred.Deferred<void>]>(capacity),
    (queue) => Queue.shutdown(queue)
  )
  return new StreamImpl(bufferSignal(queue, toChannel(pipe(self, rechunk(1)))))
})

const bufferUnbounded = <A, E, R>(self: Stream.Stream<A, E, R>): Stream.Stream<A, E, R> => {
  const queue = toQueue(self, { strategy: "unbounded" })
  return new StreamImpl(
    channel.unwrapScoped(
      Effect.map(queue, (queue) => {
        const process: Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, void, unknown> = pipe(
          core.fromEffect(Queue.take(queue)),
          core.flatMap(InternalTake.match({
            onEnd: () => core.void,
            onFailure: core.failCause,
            onSuccess: (value) => core.flatMap(core.write(value), () => process)
          }))
        )
        return process
      })
    )
  )
}

const bufferSignal = <A, E, R>(
  scoped: Effect.Effect<Queue.Queue<readonly [Take.Take<A, E>, Deferred.Deferred<void>]>, never, Scope.Scope>,
  bufferChannel: Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, void, unknown, R>
): Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, void, unknown, R> => {
  const producer = (
    queue: Queue.Queue<readonly [Take.Take<A, E>, Deferred.Deferred<void>]>,
    ref: Ref.Ref<Deferred.Deferred<void>>
  ): Channel.Channel<never, Chunk.Chunk<A>, never, E, unknown, unknown, R> => {
    const terminate = (take: Take.Take<A, E>): Channel.Channel<never, Chunk.Chunk<A>, never, E, unknown, unknown, R> =>
      pipe(
        Ref.get(ref),
        Effect.tap(Deferred.await),
        Effect.zipRight(Deferred.make<void>()),
        Effect.flatMap((deferred) =>
          pipe(
            Queue.offer(queue, [take, deferred] as const),
            Effect.zipRight(Ref.set(ref, deferred)),
            Effect.zipRight(Deferred.await(deferred))
          )
        ),
        Effect.asVoid,
        core.fromEffect
      )
    return core.readWithCause({
      onInput: (input: Chunk.Chunk<A>) =>
        pipe(
          Deferred.make<void>(),
          Effect.flatMap(
            (deferred) =>
              pipe(
                Queue.offer(queue, [InternalTake.chunk(input), deferred] as const),
                Effect.flatMap((added) => pipe(Ref.set(ref, deferred), Effect.when(() => added)))
              )
          ),
          Effect.asVoid,
          core.fromEffect,
          core.flatMap(() => producer(queue, ref))
        ),
      onFailure: (error) => terminate(InternalTake.failCause(error)),
      onDone: () => terminate(InternalTake.end)
    })
  }
  const consumer = (
    queue: Queue.Queue<readonly [Take.Take<A, E>, Deferred.Deferred<void>]>
  ): Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, void, unknown, R> => {
    const process: Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, void, unknown> = pipe(
      core.fromEffect(Queue.take(queue)),
      core.flatMap(([take, deferred]) =>
        channel.zipRight(
          core.fromEffect(Deferred.succeed(deferred, void 0)),
          InternalTake.match(take, {
            onEnd: () => core.void,
            onFailure: core.failCause,
            onSuccess: (value) => pipe(core.write(value), core.flatMap(() => process))
          })
        )
      )
    )
    return process
  }
  return channel.unwrapScoped(
    pipe(
      scoped,
      Effect.flatMap((queue) =>
        pipe(
          Deferred.make<void>(),
          Effect.tap((start) => Deferred.succeed(start, void 0)),
          Effect.flatMap((start) =>
            pipe(
              Ref.make(start),
              Effect.flatMap((ref) =>
                pipe(
                  bufferChannel,
                  core.pipeTo(producer(queue, ref)),
                  channel.runScoped,
                  Effect.forkScoped
                )
              ),
              Effect.as(consumer(queue))
            )
          )
        )
      )
    )
  )
}

/** @internal */
export const catchAll = dual<
  <E, A2, E2, R2>(
    f: (error: E) => Stream.Stream<A2, E2, R2>
  ) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E2, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (error: E) => Stream.Stream<A2, E2, R2>
  ) => Stream.Stream<A2 | A, E2, R2 | R>
>(2, <A, E, R, A2, E2, R2>(
  self: Stream.Stream<A, E, R>,
  f: (error: E) => Stream.Stream<A2, E2, R2>
): Stream.Stream<A2 | A, E2, R2 | R> =>
  catchAllCause(self, (cause) =>
    Either.match(Cause.failureOrCause(cause), {
      onLeft: f,
      onRight: failCause
    })))

/** @internal */
export const catchAllCause = dual<
  <E, A2, E2, R2>(
    f: (cause: Cause.Cause<E>) => Stream.Stream<A2, E2, R2>
  ) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E2, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (cause: Cause.Cause<E>) => Stream.Stream<A2, E2, R2>
  ) => Stream.Stream<A2 | A, E2, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (cause: Cause.Cause<E>) => Stream.Stream<A2, E2, R2>
  ): Stream.Stream<A | A2, E2, R | R2> =>
    new StreamImpl<A | A2, E2, R | R2>(pipe(toChannel(self), core.catchAllCause((cause) => toChannel(f(cause)))))
)

/** @internal */
export const catchSome = dual<
  <E, A2, E2, R2>(
    pf: (error: E) => Option.Option<Stream.Stream<A2, E2, R2>>
  ) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E | E2, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    pf: (error: E) => Option.Option<Stream.Stream<A2, E2, R2>>
  ) => Stream.Stream<A2 | A, E | E2, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    pf: (error: E) => Option.Option<Stream.Stream<A2, E2, R2>>
  ): Stream.Stream<A2 | A, E | E2, R2 | R> =>
    pipe(self, catchAll((error) => pipe(pf(error), Option.getOrElse(() => fail<E | E2>(error)))))
)

/** @internal */
export const catchSomeCause = dual<
  <E, A2, E2, R2>(
    pf: (cause: Cause.Cause<E>) => Option.Option<Stream.Stream<A2, E2, R2>>
  ) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E | E2, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    pf: (cause: Cause.Cause<E>) => Option.Option<Stream.Stream<A2, E2, R2>>
  ) => Stream.Stream<A2 | A, E | E2, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    pf: (cause: Cause.Cause<E>) => Option.Option<Stream.Stream<A2, E2, R2>>
  ): Stream.Stream<A2 | A, E | E2, R2 | R> =>
    pipe(self, catchAllCause((cause) => pipe(pf(cause), Option.getOrElse(() => failCause<E | E2>(cause)))))
)

/* @internal */
export const catchTag = dual<
  <K extends E["_tag"] & string, E extends { _tag: string }, A1, E1, R1>(
    k: K,
    f: (e: Extract<E, { _tag: K }>) => Stream.Stream<A1, E1, R1>
  ) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A | A1, Exclude<E, { _tag: K }> | E1, R | R1>,
  <A, E extends { _tag: string }, R, K extends E["_tag"] & string, A1, E1, R1>(
    self: Stream.Stream<A, E, R>,
    k: K,
    f: (e: Extract<E, { _tag: K }>) => Stream.Stream<A1, E1, R1>
  ) => Stream.Stream<A | A1, Exclude<E, { _tag: K }> | E1, R | R1>
>(3, (self, k, f) =>
  catchAll(self, (e) => {
    if ("_tag" in e && e["_tag"] === k) {
      return f(e as any)
    }
    return fail(e as any)
  }))

/** @internal */
export const catchTags: {
  <
    E extends { _tag: string },
    Cases extends {
      [K in E["_tag"]]+?: (error: Extract<E, { _tag: K }>) => Stream.Stream<any, any, any>
    }
  >(
    cases: Cases
  ): <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<
    | A
    | {
      [K in keyof Cases]: Cases[K] extends
        ((...args: Array<any>) => Stream.Stream.Variance<infer A, infer _E, infer _R>) ? A
        : never
    }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
      [K in keyof Cases]: Cases[K] extends
        ((...args: Array<any>) => Stream.Stream.Variance<infer _A, infer E, infer _R>) ? E
        : never
    }[keyof Cases],
    | R
    | {
      [K in keyof Cases]: Cases[K] extends
        ((...args: Array<any>) => Stream.Stream.Variance<infer _A, infer _E, infer R>) ? R
        : never
    }[keyof Cases]
  >
  <
    A,
    E extends { _tag: string },
    R,
    Cases extends {
      [K in E["_tag"]]+?: (error: Extract<E, { _tag: K }>) => Stream.Stream<any, any, any>
    }
  >(
    self: Stream.Stream<A, E, R>,
    cases: Cases
  ): Stream.Stream<
    | A
    | {
      [K in keyof Cases]: Cases[K] extends
        ((...args: Array<any>) => Stream.Stream.Variance<infer _R, infer _E, infer A>) ? A
        : never
    }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
      [K in keyof Cases]: Cases[K] extends
        ((...args: Array<any>) => Stream.Stream.Variance<infer _R, infer E, infer _A>) ? E
        : never
    }[keyof Cases],
    | R
    | {
      [K in keyof Cases]: Cases[K] extends
        ((...args: Array<any>) => Stream.Stream.Variance<infer R, infer _E, infer _A>) ? R
        : never
    }[keyof Cases]
  >
} = dual(2, (self, cases) =>
  catchAll(self, (e: any) => {
    const keys = Object.keys(cases)
    if ("_tag" in e && keys.includes(e["_tag"])) {
      return cases[e["_tag"]](e as any)
    }
    return fail(e as any)
  }))

/** @internal */
export const changes = <A, E, R>(self: Stream.Stream<A, E, R>): Stream.Stream<A, E, R> =>
  pipe(self, changesWith((x, y) => Equal.equals(y)(x)))

/** @internal */
export const changesWith = dual<
  <A>(f: (x: A, y: A) => boolean) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, f: (x: A, y: A) => boolean) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, f: (x: A, y: A) => boolean): Stream.Stream<A, E, R> => {
  const writer = (
    last: Option.Option<A>
  ): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E, E, void, unknown> =>
    core.readWithCause({
      onInput: (input: Chunk.Chunk<A>) => {
        const [newLast, newChunk] = Chunk.reduce(
          input,
          [last, Chunk.empty<A>()] as const,
          ([option, outputs], output) => {
            if (Option.isSome(option) && f(option.value, output)) {
              return [Option.some(output), outputs] as const
            }
            return [Option.some(output), pipe(outputs, Chunk.append(output))] as const
          }
        )
        if (Chunk.isEmpty(newChunk)) return writer(newLast)
        return core.flatMap(
          core.write(newChunk),
          () => writer(newLast)
        )
      },
      onFailure: core.failCause,
      onDone: () => core.void
    })
  return new StreamImpl(pipe(toChannel(self), core.pipeTo(writer(Option.none()))))
})

/** @internal */
export const changesWithEffect = dual<
  <A, E2, R2>(
    f: (x: A, y: A) => Effect.Effect<boolean, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (x: A, y: A) => Effect.Effect<boolean, E2, R2>
  ) => Stream.Stream<A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (x: A, y: A) => Effect.Effect<boolean, E2, R2>
  ): Stream.Stream<A, E2 | E, R2 | R> => {
    const writer = (
      last: Option.Option<A>
    ): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E | E2, void, unknown, R | R2> =>
      core.readWithCause({
        onInput: (input: Chunk.Chunk<A>) =>
          pipe(
            input,
            Effect.reduce([last, Chunk.empty<A>()] as const, ([option, outputs], output) => {
              if (Option.isSome(option)) {
                return pipe(
                  f(option.value, output),
                  Effect.map((bool) =>
                    bool ?
                      [Option.some(output), outputs] as const :
                      [Option.some(output), pipe(outputs, Chunk.append(output))] as const
                  )
                )
              }
              return Effect.succeed(
                [
                  Option.some(output),
                  pipe(outputs, Chunk.append(output))
                ] as const
              )
            }),
            core.fromEffect,
            core.flatMap(([newLast, newChunk]) =>
              pipe(
                core.write(newChunk),
                core.flatMap(() => writer(newLast))
              )
            )
          ),
        onFailure: core.failCause,
        onDone: () => core.void
      })
    return new StreamImpl(pipe(toChannel(self), core.pipeTo(writer(Option.none()))))
  }
)

/** @internal */
export const chunks = <A, E, R>(self: Stream.Stream<A, E, R>): Stream.Stream<Chunk.Chunk<A>, E, R> =>
  pipe(self, mapChunks(Chunk.of))

/** @internal */
export const chunksWith = dual<
  <A, E, R, A2, E2, R2>(
    f: (stream: Stream.Stream<Chunk.Chunk<A>, E, R>) => Stream.Stream<Chunk.Chunk<A2>, E2, R2>
  ) => (self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E | E2, R | R2>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (stream: Stream.Stream<Chunk.Chunk<A>, E, R>) => Stream.Stream<Chunk.Chunk<A2>, E2, R2>
  ) => Stream.Stream<A2, E | E2, R | R2>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (stream: Stream.Stream<Chunk.Chunk<A>, E, R>) => Stream.Stream<Chunk.Chunk<A2>, E2, R2>
  ): Stream.Stream<A2, E | E2, R | R2> => flattenChunks(f(chunks(self)))
)

const unsome = <A, E, R>(effect: Effect.Effect<A, Option.Option<E>, R>): Effect.Effect<Option.Option<A>, E, R> =>
  Effect.catchAll(
    Effect.asSome(effect),
    (o) => o._tag === "None" ? Effect.succeedNone : Effect.fail(o.value)
  )

/** @internal */
export const combine = dual<
  <A2, E2, R2, S, R3, E, A, R4, R5, A3>(
    that: Stream.Stream<A2, E2, R2>,
    s: S,
    f: (
      s: S,
      pullLeft: Effect.Effect<A, Option.Option<E>, R3>,
      pullRight: Effect.Effect<A2, Option.Option<E2>, R4>
    ) => Effect.Effect<Exit.Exit<readonly [A3, S], Option.Option<E2 | E>>, never, R5>
  ) => <R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A3, E2 | E, R2 | R3 | R4 | R5 | R>,
  <R, A2, E2, R2, S, R3, E, A, R4, R5, A3>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>,
    s: S,
    f: (
      s: S,
      pullLeft: Effect.Effect<A, Option.Option<E>, R3>,
      pullRight: Effect.Effect<A2, Option.Option<E2>, R4>
    ) => Effect.Effect<Exit.Exit<readonly [A3, S], Option.Option<E2 | E>>, never, R5>
  ) => Stream.Stream<A3, E2 | E, R2 | R3 | R4 | R5 | R>
>(4, <R, A2, E2, R2, S, R3, E, A, R4, R5, A3>(
  self: Stream.Stream<A, E, R>,
  that: Stream.Stream<A2, E2, R2>,
  s: S,
  f: (
    s: S,
    pullLeft: Effect.Effect<A, Option.Option<E>, R3>,
    pullRight: Effect.Effect<A2, Option.Option<E2>, R4>
  ) => Effect.Effect<Exit.Exit<readonly [A3, S], Option.Option<E2 | E>>, never, R5>
): Stream.Stream<A3, E2 | E, R2 | R3 | R4 | R5 | R> => {
  function producer<Err, Elem>(
    handoff: Handoff.Handoff<Exit.Exit<Elem, Option.Option<Err>>>,
    latch: Handoff.Handoff<void>
  ): Channel.Channel<never, Elem, never, Err, unknown, unknown, R> {
    return core.fromEffect(Handoff.take(latch)).pipe(
      channel.zipRight(core.readWithCause({
        onInput: (input) =>
          core.flatMap(
            core.fromEffect(
              Handoff.offer<Exit.Exit<Elem, Option.Option<Err>>>(
                handoff,
                Exit.succeed(input)
              )
            ),
            () => producer(handoff, latch)
          ),
        onFailure: (cause) =>
          core.fromEffect(
            Handoff.offer<Exit.Exit<Elem, Option.Option<Err>>>(
              handoff,
              Exit.failCause(pipe(cause, Cause.map(Option.some)))
            )
          ),
        onDone: () =>
          core.flatMap(
            core.fromEffect(
              Handoff.offer<Exit.Exit<Elem, Option.Option<Err>>>(
                handoff,
                Exit.fail(Option.none())
              )
            ),
            () => producer(handoff, latch)
          )
      }))
    )
  }
  return new StreamImpl(
    channel.unwrapScopedWith((scope) =>
      Effect.all([
        Handoff.make<Exit.Exit<A, Option.Option<E>>>(),
        Handoff.make<Exit.Exit<A2, Option.Option<E2>>>(),
        Handoff.make<void>(),
        Handoff.make<void>()
      ]).pipe(
        Effect.tap(([left, _, latchL]) =>
          toChannel(self).pipe(
            channel.concatMap(channel.writeChunk),
            core.pipeTo(producer(left, latchL)),
            channelExecutor.runIn(scope),
            Effect.forkIn(scope)
          )
        ),
        Effect.tap(([, right, _, rightL]) =>
          toChannel(that).pipe(
            channel.concatMap(channel.writeChunk),
            core.pipeTo(producer(right, rightL)),
            channelExecutor.runIn(scope),
            Effect.forkIn(scope)
          )
        ),
        Effect.map(([left, right, latchL, latchR]) => {
          const pullLeft = Handoff.offer<void>(latchL, void 0).pipe(
            Effect.zipRight(Handoff.take(left).pipe(Effect.flatMap(identity)))
          )
          const pullRight = Handoff.offer<void>(latchR, void 0).pipe(
            Effect.zipRight(Handoff.take(right).pipe(Effect.flatMap(identity)))
          )
          return toChannel(unfoldEffect(s, (s) => Effect.flatMap(f(s, pullLeft, pullRight), unsome)))
        })
      )
    )
  )
})

/** @internal */
export const combineChunks = dual<
  <A2, E2, R2, S, R3, E, A, R4, R5, A3>(
    that: Stream.Stream<A2, E2, R2>,
    s: S,
    f: (
      s: S,
      pullLeft: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R3>,
      pullRight: Effect.Effect<Chunk.Chunk<A2>, Option.Option<E2>, R4>
    ) => Effect.Effect<Exit.Exit<readonly [Chunk.Chunk<A3>, S], Option.Option<E2 | E>>, never, R5>
  ) => <R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A3, E2 | E, R2 | R3 | R4 | R5 | R>,
  <R, A2, E2, R2, S, R3, E, A, R4, R5, A3>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>,
    s: S,
    f: (
      s: S,
      pullLeft: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R3>,
      pullRight: Effect.Effect<Chunk.Chunk<A2>, Option.Option<E2>, R4>
    ) => Effect.Effect<Exit.Exit<readonly [Chunk.Chunk<A3>, S], Option.Option<E2 | E>>, never, R5>
  ) => Stream.Stream<A3, E2 | E, R2 | R3 | R4 | R5 | R>
>(4, <R, A2, E2, R2, S, R3, E, A, R4, R5, A3>(
  self: Stream.Stream<A, E, R>,
  that: Stream.Stream<A2, E2, R2>,
  s: S,
  f: (
    s: S,
    pullLeft: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R3>,
    pullRight: Effect.Effect<Chunk.Chunk<A2>, Option.Option<E2>, R4>
  ) => Effect.Effect<Exit.Exit<readonly [Chunk.Chunk<A3>, S], Option.Option<E2 | E>>, never, R5>
): Stream.Stream<A3, E2 | E, R2 | R3 | R4 | R5 | R> => {
  const producer = <Err, Elem>(
    handoff: Handoff.Handoff<Take.Take<Elem, Err>>,
    latch: Handoff.Handoff<void>
  ): Channel.Channel<never, Chunk.Chunk<Elem>, never, Err, unknown, unknown, R> =>
    channel.zipRight(
      core.fromEffect(Handoff.take(latch)),
      core.readWithCause({
        onInput: (input) =>
          core.flatMap(
            core.fromEffect(pipe(
              handoff,
              Handoff.offer<Take.Take<Elem, Err>>(InternalTake.chunk(input))
            )),
            () => producer(handoff, latch)
          ),
        onFailure: (cause) =>
          core.fromEffect(
            Handoff.offer<Take.Take<Elem, Err>>(
              handoff,
              InternalTake.failCause(cause)
            )
          ),
        onDone: (): Channel.Channel<never, Chunk.Chunk<Elem>, never, Err, unknown, unknown, R> =>
          core.fromEffect(Handoff.offer<Take.Take<Elem, Err>>(handoff, InternalTake.end))
      })
    )
  return new StreamImpl(
    channel.unwrapScopedWith((scope) =>
      Effect.all([
        Handoff.make<Take.Take<A, E>>(),
        Handoff.make<Take.Take<A2, E2>>(),
        Handoff.make<void>(),
        Handoff.make<void>()
      ]).pipe(
        Effect.tap(([left, _, latchL]) =>
          core.pipeTo(toChannel(self), producer(left, latchL)).pipe(
            channelExecutor.runIn(scope),
            Effect.forkIn(scope)
          )
        ),
        Effect.tap(([_, right, __, latchR]) =>
          core.pipeTo(toChannel(that), producer(right, latchR)).pipe(
            channelExecutor.runIn(scope),
            Effect.forkIn(scope)
          )
        ),
        Effect.map(([left, right, latchL, latchR]) => {
          const pullLeft = Handoff.offer<void>(latchL, void 0).pipe(
            Effect.zipRight(Handoff.take(left).pipe(Effect.flatMap(InternalTake.done)))
          )
          const pullRight = Handoff.offer<void>(latchR, void 0).pipe(
            Effect.zipRight(Handoff.take(right).pipe(Effect.flatMap(InternalTake.done)))
          )
          return toChannel(unfoldChunkEffect(s, (s) => Effect.flatMap(f(s, pullLeft, pullRight), unsome)))
        })
      )
    )
  )
})

/** @internal */
export const concat = dual<
  <A2, E2, R2>(
    that: Stream.Stream<A2, E2, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ) => Stream.Stream<A2 | A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ): Stream.Stream<A2 | A, E2 | E, R2 | R> =>
    new StreamImpl<A2 | A, E2 | E, R2 | R>(pipe(toChannel(self), channel.zipRight(toChannel(that))))
)

/** @internal */
export const concatAll = <A, E, R>(streams: Chunk.Chunk<Stream.Stream<A, E, R>>): Stream.Stream<A, E, R> =>
  suspend(() => pipe(streams, Chunk.reduce(empty as Stream.Stream<A, E, R>, (x, y) => concat(y)(x))))

/** @internal */
export const cross: {
  <AR, ER, RR>(
    right: Stream.Stream<AR, ER, RR>
  ): <AL, EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<[AL, AR], EL | ER, RL | RR>
  <AL, ER, RR, AR, EL, RL>(
    left: Stream.Stream<AL, ER, RR>,
    right: Stream.Stream<AR, EL, RL>
  ): Stream.Stream<[AL, AR], EL | ER, RL | RR>
} = dual(
  2,
  <AL, ER, RR, AR, EL, RL>(
    left: Stream.Stream<AL, ER, RR>,
    right: Stream.Stream<AR, EL, RL>
  ): Stream.Stream<[AL, AR], EL | ER, RL | RR> => pipe(left, crossWith(right, (a, a2) => [a, a2]))
)

/** @internal */
export const crossLeft: {
  <AR, ER, RR>(
    right: Stream.Stream<AR, ER, RR>
  ): <AL, EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<AL, EL | ER, RL | RR>
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AL, EL | ER, RL | RR>
} = dual(
  2,
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AL, EL | ER, RL | RR> => pipe(left, crossWith(right, (a, _) => a))
)

/** @internal */
export const crossRight: {
  <AR, ER, RR>(
    right: Stream.Stream<AR, ER, RR>
  ): <AL, EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<AR, EL | ER, RL | RR>
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AR, EL | ER, RL | RR>
} = dual(
  2,
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AR, EL | ER, RL | RR> => flatMap(left, () => right)
)

/** @internal */
export const crossWith: {
  <AR, ER, RR, AL, A>(
    right: Stream.Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): <EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<A, EL | ER, RL | RR>
  <AL, EL, RL, AR, ER, RR, A>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): Stream.Stream<A, EL | ER, RL | RR>
} = dual(
  3,
  <AL, EL, RL, AR, ER, RR, A>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): Stream.Stream<A, EL | ER, RL | RR> => pipe(left, flatMap((a) => pipe(right, map((b) => f(a, b)))))
)

/** @internal */
export const debounce = dual<
  (duration: Duration.DurationInput) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, duration: Duration.DurationInput) => Stream.Stream<A, E, R>
>(
  2,
  <A, E, R>(self: Stream.Stream<A, E, R>, duration: Duration.DurationInput): Stream.Stream<A, E, R> =>
    unwrapScopedWith((scope) =>
      Effect.gen(function*() {
        const handoff = yield* Handoff.make<HandoffSignal.HandoffSignal<A, E>>()

        function enqueue(last: Chunk.Chunk<A>): Effect.Effect<
          Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, unknown, unknown>
        > {
          return Clock.sleep(duration).pipe(
            Effect.as(last),
            Effect.forkIn(scope),
            Effect.map((fiber) => consumer(DebounceState.previous(fiber)))
          )
        }

        const producer: Channel.Channel<never, Chunk.Chunk<A>, E, E, unknown, unknown> = core.readWithCause({
          onInput: (input: Chunk.Chunk<A>) =>
            Option.match(Chunk.last(input), {
              onNone: () => producer,
              onSome: (elem) =>
                core.fromEffect(Handoff.offer(handoff, HandoffSignal.emit(Chunk.of(elem)))).pipe(
                  core.flatMap(() => producer)
                )
            }),
          onFailure: (cause) =>
            core.fromEffect(
              Handoff.offer<HandoffSignal.HandoffSignal<A, E>>(handoff, HandoffSignal.halt(cause))
            ),
          onDone: () =>
            core.fromEffect(
              Handoff.offer<HandoffSignal.HandoffSignal<A, E>>(
                handoff,
                HandoffSignal.end(SinkEndReason.UpstreamEnd)
              )
            )
        })

        function consumer(
          state: DebounceState.DebounceState<A, E>
        ): Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, unknown, unknown> {
          switch (state._tag) {
            case DebounceState.OP_NOT_STARTED: {
              return channel.unwrap(
                Handoff.take(handoff).pipe(
                  Effect.map((signal) => {
                    switch (signal._tag) {
                      case HandoffSignal.OP_EMIT: {
                        return channel.unwrap(enqueue(signal.elements))
                      }
                      case HandoffSignal.OP_HALT: {
                        return core.failCause(signal.cause)
                      }
                      case HandoffSignal.OP_END: {
                        return core.void
                      }
                    }
                  })
                )
              )
            }
            case DebounceState.OP_PREVIOUS: {
              return channel.unwrap(
                Handoff.take(handoff).pipe(
                  Effect.forkIn(scope),
                  Effect.flatMap((handoffFiber) =>
                    Effect.raceWith(Fiber.join(state.fiber), Fiber.join(handoffFiber), {
                      onSelfDone: (leftExit, current) =>
                        Exit.match(leftExit, {
                          onFailure: (cause) =>
                            Fiber.interrupt(current).pipe(
                              Effect.as(core.failCause(cause))
                            ),
                          onSuccess: (chunk) =>
                            Fiber.interrupt(current).pipe(
                              Effect.zipRight(Effect.succeed(
                                core.write(chunk).pipe(
                                  core.flatMap(() => consumer(DebounceState.current(handoffFiber)))
                                )
                              ))
                            )
                        }),
                      onOtherDone: (rightExit, previous) =>
                        Exit.match(rightExit, {
                          onFailure: (cause) =>
                            Fiber.interrupt(previous).pipe(
                              Effect.as(core.failCause(cause))
                            ),
                          onSuccess: (signal) => {
                            switch (signal._tag) {
                              case HandoffSignal.OP_EMIT: {
                                return Fiber.interrupt(previous).pipe(
                                  Effect.zipRight(enqueue(signal.elements))
                                )
                              }
                              case HandoffSignal.OP_HALT: {
                                return Fiber.interrupt(previous).pipe(
                                  Effect.as(core.failCause(signal.cause))
                                )
                              }
                              case HandoffSignal.OP_END: {
                                return Fiber.join(previous).pipe(
                                  Effect.map((chunk) =>
                                    core.write(chunk).pipe(
                                      channel.zipRight(core.void)
                                    )
                                  )
                                )
                              }
                            }
                          }
                        })
                    })
                  )
                )
              )
            }
            case DebounceState.OP_CURRENT: {
              return channel.unwrap(
                Fiber.join(state.fiber).pipe(
                  Effect.map((signal) => {
                    switch (signal._tag) {
                      case HandoffSignal.OP_EMIT: {
                        return channel.unwrap(enqueue(signal.elements))
                      }
                      case HandoffSignal.OP_HALT: {
                        return core.failCause(signal.cause)
                      }
                      case HandoffSignal.OP_END: {
                        return core.void
                      }
                    }
                  })
                )
              )
            }
          }
        }

        return scopedWith((scope) =>
          core.pipeTo(toChannel(self), producer).pipe(
            channelExecutor.runIn(scope),
            Effect.forkIn(scope)
          )
        ).pipe(crossRight(new StreamImpl(consumer(DebounceState.notStarted))))
      })
    )
)

/** @internal */
export const die = (defect: unknown): Stream.Stream<never> => fromEffect(Effect.die(defect))

/** @internal */
export const dieSync = (evaluate: LazyArg<unknown>): Stream.Stream<never> => fromEffect(Effect.dieSync(evaluate))

/** @internal */
export const dieMessage = (message: string): Stream.Stream<never> => fromEffect(Effect.dieMessage(message))

/** @internal */
export const distributedWith = dual<
  <N extends number, A>(
    options: {
      readonly size: N
      readonly maximumLag: number
      readonly decide: (a: A) => Effect.Effect<Predicate<number>>
    }
  ) => <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<
    Types.TupleOf<N, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>>,
    never,
    Scope.Scope | R
  >,
  <A, E, R, N extends number>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly size: N
      readonly maximumLag: number
      readonly decide: (a: A) => Effect.Effect<Predicate<number>>
    }
  ) => Effect.Effect<
    Types.TupleOf<N, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>>,
    never,
    Scope.Scope | R
  >
>(
  2,
  <A, E, R, N extends number>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly size: N
      readonly maximumLag: number
      readonly decide: (a: A) => Effect.Effect<Predicate<number>>
    }
  ): Effect.Effect<
    Types.TupleOf<N, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>>,
    never,
    Scope.Scope | R
  > =>
    pipe(
      Deferred.make<(a: A) => Effect.Effect<Predicate<number>>>(),
      Effect.flatMap((deferred) =>
        pipe(
          self,
          distributedWithDynamic({
            maximumLag: options.maximumLag,
            decide: (a) => Effect.flatMap(Deferred.await(deferred), (f) => f(a))
          }),
          Effect.flatMap((next) =>
            pipe(
              Effect.all(
                Chunk.map(
                  Chunk.range(0, options.size - 1),
                  (id) => Effect.map(next, ([key, queue]) => [[key, id], queue] as const)
                )
              ),
              Effect.map(Chunk.unsafeFromArray),
              Effect.flatMap((entries) => {
                const [mappings, queues] = Chunk.reduceRight(
                  entries,
                  [
                    new Map<number, number>(),
                    Chunk.empty<Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>>()
                  ] as const,
                  ([mappings, queues], [mapping, queue]) =>
                    [
                      mappings.set(mapping[0], mapping[1]),
                      pipe(queues, Chunk.prepend(queue))
                    ] as const
                )
                return pipe(
                  Deferred.succeed(deferred, (a: A) =>
                    Effect.map(options.decide(a), (f) => (key: number) => f(mappings.get(key)!))),
                  Effect.as(
                    Array.from(queues) as Types.TupleOf<N, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>>
                  )
                )
              })
            )
          )
        )
      )
    )
)

/** @internal */
const distributedWithDynamicId = { ref: 0 }

const newDistributedWithDynamicId = () => {
  const current = distributedWithDynamicId.ref
  distributedWithDynamicId.ref = current + 1
  return current
}

/** @internal */
export const distributedWithDynamic = dual<
  <A>(
    options: {
      readonly maximumLag: number
      readonly decide: (a: A) => Effect.Effect<Predicate<number>>
    }
  ) => <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<
    Effect.Effect<[number, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>]>,
    never,
    Scope.Scope | R
  >,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly maximumLag: number
      readonly decide: (a: A) => Effect.Effect<Predicate<number>>
    }
  ) => Effect.Effect<
    Effect.Effect<[number, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>]>,
    never,
    Scope.Scope | R
  >
>(2, <A, E, R>(
  self: Stream.Stream<A, E, R>,
  options: {
    readonly maximumLag: number
    readonly decide: (a: A) => Effect.Effect<Predicate<number>>
  }
): Effect.Effect<
  Effect.Effect<[number, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>]>,
  never,
  Scope.Scope | R
> => distributedWithDynamicCallback(self, options.maximumLag, options.decide, () => Effect.void))

/** @internal */
export const distributedWithDynamicCallback = dual<
  <A, E, X>(
    maximumLag: number,
    decide: (a: A) => Effect.Effect<Predicate<number>>,
    done: (exit: Exit.Exit<never, Option.Option<E>>) => Effect.Effect<X>
  ) => <R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<
    Effect.Effect<[number, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>]>,
    never,
    Scope.Scope | R
  >,
  <A, E, R, X>(
    self: Stream.Stream<A, E, R>,
    maximumLag: number,
    decide: (a: A) => Effect.Effect<Predicate<number>>,
    done: (exit: Exit.Exit<never, Option.Option<E>>) => Effect.Effect<X>
  ) => Effect.Effect<
    Effect.Effect<[number, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>]>,
    never,
    Scope.Scope | R
  >
>(4, <A, E, R, X>(
  self: Stream.Stream<A, E, R>,
  maximumLag: number,
  decide: (a: A) => Effect.Effect<Predicate<number>>,
  done: (exit: Exit.Exit<never, Option.Option<E>>) => Effect.Effect<X>
): Effect.Effect<
  Effect.Effect<[number, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>]>,
  never,
  Scope.Scope | R
> =>
  pipe(
    Effect.acquireRelease(
      Ref.make<Map<number, Queue.Queue<Exit.Exit<A, Option.Option<E>>>>>(new Map()),
      (ref, _) => pipe(Ref.get(ref), Effect.flatMap((queues) => pipe(queues.values(), Effect.forEach(Queue.shutdown))))
    ),
    Effect.flatMap((queuesRef) =>
      Effect.gen(function*() {
        const offer = (a: A): Effect.Effect<void> =>
          pipe(
            decide(a),
            Effect.flatMap((shouldProcess) =>
              pipe(
                Ref.get(queuesRef),
                Effect.flatMap((queues) =>
                  pipe(
                    queues.entries(),
                    Effect.reduce(Chunk.empty<number>(), (acc, [id, queue]) => {
                      if (shouldProcess(id)) {
                        return pipe(
                          Queue.offer(queue, Exit.succeed(a)),
                          Effect.matchCauseEffect({
                            onFailure: (cause) =>
                              // Ignore all downstream queues that were shut
                              // down and remove them later
                              Cause.isInterrupted(cause) ?
                                Effect.succeed(pipe(acc, Chunk.prepend(id))) :
                                Effect.failCause(cause),
                            onSuccess: () => Effect.succeed(acc)
                          })
                        )
                      }
                      return Effect.succeed(acc)
                    }),
                    Effect.flatMap((ids) => {
                      if (Chunk.isNonEmpty(ids)) {
                        return Ref.update(queuesRef, (map) => {
                          for (const id of ids) {
                            map.delete(id)
                          }
                          return map
                        })
                      }
                      return Effect.void
                    })
                  )
                )
              )
            ),
            Effect.asVoid
          )
        const queuesLock = yield* Effect.makeSemaphore(1)
        const newQueue = yield* Ref.make<Effect.Effect<[number, Queue.Queue<Exit.Exit<A, Option.Option<E>>>]>>(
          pipe(
            Queue.bounded<Exit.Exit<A, Option.Option<E>>>(maximumLag),
            Effect.flatMap((queue) => {
              const id = newDistributedWithDynamicId()
              return pipe(
                Ref.update(queuesRef, (map) => map.set(id, queue)),
                Effect.as([id, queue])
              )
            })
          )
        )
        const finalize = (endTake: Exit.Exit<never, Option.Option<E>>): Effect.Effect<void> =>
          // Make sure that no queues are currently being added
          queuesLock.withPermits(1)(
            pipe(
              Ref.set(
                newQueue,
                pipe(
                  // All newly created queues should end immediately
                  Queue.bounded<Exit.Exit<A, Option.Option<E>>>(1),
                  Effect.tap((queue) => Queue.offer(queue, endTake)),
                  Effect.flatMap((queue) => {
                    const id = newDistributedWithDynamicId()
                    return pipe(
                      Ref.update(queuesRef, (map) => map.set(id, queue)),
                      Effect.as(Tuple.make(id, queue))
                    )
                  })
                )
              ),
              Effect.zipRight(
                pipe(
                  Ref.get(queuesRef),
                  Effect.flatMap((map) =>
                    pipe(
                      Chunk.fromIterable(map.values()),
                      Effect.forEach((queue) =>
                        pipe(
                          Queue.offer(queue, endTake),
                          Effect.catchSomeCause((cause) =>
                            Cause.isInterrupted(cause) ? Option.some(Effect.void) : Option.none()
                          )
                        )
                      )
                    )
                  )
                )
              ),
              Effect.zipRight(done(endTake)),
              Effect.asVoid
            )
          )
        yield* pipe(
          self,
          runForEachScoped(offer),
          Effect.matchCauseEffect({
            onFailure: (cause) => finalize(Exit.failCause(pipe(cause, Cause.map(Option.some)))),
            onSuccess: () => finalize(Exit.fail(Option.none()))
          }),
          Effect.forkScoped
        )
        return queuesLock.withPermits(1)(
          Effect.flatten(Ref.get(newQueue))
        )
      })
    )
  ))

/** @internal */
export const drain = <A, E, R>(self: Stream.Stream<A, E, R>): Stream.Stream<never, E, R> =>
  new StreamImpl(channel.drain(toChannel(self)))

/** @internal */
export const drainFork = dual<
  <A2, E2, R2>(
    that: Stream.Stream<A2, E2, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ) => Stream.Stream<A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ): Stream.Stream<A, E2 | E, R2 | R> =>
    fromEffect(Deferred.make<never, E2>()).pipe(flatMap((backgroundDied) =>
      scopedWith((scope) =>
        toChannel(that).pipe(
          channel.drain,
          channelExecutor.runIn(scope),
          Effect.catchAllCause((cause) => Deferred.failCause(backgroundDied, cause)),
          Effect.forkIn(scope)
        )
      ).pipe(crossRight(interruptWhenDeferred(self, backgroundDied)))
    ))
)

/** @internal */
export const drop = dual<
  (n: number) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, n: number) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, n: number): Stream.Stream<A, E, R> => {
  const loop = (r: number): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, never, never, unknown, unknown> =>
    core.readWith({
      onInput: (input: Chunk.Chunk<A>) => {
        const dropped = pipe(input, Chunk.drop(r))
        const leftover = Math.max(0, r - input.length)
        const more = Chunk.isEmpty(input) || leftover > 0
        if (more) {
          return loop(leftover)
        }
        return pipe(
          core.write(dropped),
          channel.zipRight(channel.identityChannel<Chunk.Chunk<A>, never, unknown>())
        )
      },
      onFailure: core.fail,
      onDone: () => core.void
    })
  return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(loop(n))))
})

/** @internal */
export const dropRight = dual<
  (n: number) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, n: number) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, n: number): Stream.Stream<A, E, R> => {
  if (n <= 0) {
    return identityStream()
  }
  return suspend(() => {
    const queue = new RingBuffer<A>(n)
    const reader: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E, E, void, unknown> = core.readWith({
      onInput: (input: Chunk.Chunk<A>) => {
        const outputs = pipe(
          input,
          Chunk.filterMap((elem) => {
            const head = queue.head()
            queue.put(elem)
            return head
          })
        )
        return pipe(core.write(outputs), core.flatMap(() => reader))
      },
      onFailure: core.fail,
      onDone: () => core.void
    })
    return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(reader)))
  })
})

/** @internal */
export const dropUntil = dual<
  <A>(predicate: Predicate<Types.NoInfer<A>>) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>) => Stream.Stream<A, E, R>
>(
  2,
  <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>): Stream.Stream<A, E, R> =>
    drop(dropWhile(self, (a) => !predicate(a)), 1)
)

/** @internal */
export const dropUntilEffect = dual<
  <A, E2, R2>(
    predicate: (a: Types.NoInfer<A>) => Effect.Effect<boolean, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    predicate: (a: Types.NoInfer<A>) => Effect.Effect<boolean, E2, R2>
  ) => Stream.Stream<A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    predicate: (a: Types.NoInfer<A>) => Effect.Effect<boolean, E2, R2>
  ): Stream.Stream<A, E2 | E, R2 | R> => {
    const loop: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R2> = core.readWith({
      onInput: (input: Chunk.Chunk<A>) =>
        pipe(
          Effect.dropUntil(input, predicate),
          Effect.map(Chunk.unsafeFromArray),
          Effect.map((leftover) => {
            const more = Chunk.isEmpty(leftover)
            if (more) {
              return core.suspend(() => loop)
            }
            return pipe(
              core.write(leftover),
              channel.zipRight(channel.identityChannel<Chunk.Chunk<A>, E | E2, unknown>())
            )
          }),
          channel.unwrap
        ),
      onFailure: core.fail,
      onDone: () => core.void
    })
    return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(loop)))
  }
)

/** @internal */
export const dropWhile = dual<
  <A>(predicate: Predicate<Types.NoInfer<A>>) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>): Stream.Stream<A, E, R> => {
  const loop: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, never, never, unknown, unknown> = core.readWith({
    onInput: (input: Chunk.Chunk<A>) => {
      const output = Chunk.dropWhile(input, predicate)
      if (Chunk.isEmpty(output)) {
        return core.suspend(() => loop)
      }
      return channel.zipRight(
        core.write(output),
        channel.identityChannel<Chunk.Chunk<A>, never, unknown>()
      )
    },
    onFailure: core.fail,
    onDone: core.succeedNow
  })
  return new StreamImpl(channel.pipeToOrFail(toChannel(self), loop))
})

/** @internal */
export const dropWhileEffect = dual<
  <A, E2, R2>(
    predicate: (a: Types.NoInfer<A>) => Effect.Effect<boolean, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    predicate: (a: A) => Effect.Effect<boolean, E2, R2>
  ) => Stream.Stream<A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    predicate: (a: A) => Effect.Effect<boolean, E2, R2>
  ): Stream.Stream<A, E2 | E, R2 | R> => {
    const loop: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R2> = core.readWith({
      onInput: (input: Chunk.Chunk<A>) =>
        pipe(
          Effect.dropWhile(input, predicate),
          Effect.map(Chunk.unsafeFromArray),
          Effect.map((leftover) => {
            const more = Chunk.isEmpty(leftover)
            if (more) {
              return core.suspend(() => loop)
            }
            return channel.zipRight(
              core.write(leftover),
              channel.identityChannel<Chunk.Chunk<A>, E | E2, unknown>()
            )
          }),
          channel.unwrap
        ),
      onFailure: core.fail,
      onDone: () => core.void
    })
    return new StreamImpl(channel.pipeToOrFail(
      toChannel(self),
      loop
    ))
  }
)

/** @internal */
export const either = <A, E, R>(self: Stream.Stream<A, E, R>): Stream.Stream<Either.Either<A, E>, never, R> =>
  pipe(self, map(Either.right), catchAll((error) => make(Either.left(error))))

/** @internal */
export const empty: Stream.Stream<never> = new StreamImpl(core.void)

/** @internal */
export const ensuring = dual<
  <X, R2>(
    finalizer: Effect.Effect<X, never, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R2 | R>,
  <A, E, R, X, R2>(self: Stream.Stream<A, E, R>, finalizer: Effect.Effect<X, never, R2>) => Stream.Stream<A, E, R2 | R>
>(
  2,
  <A, E, R, X, R2>(self: Stream.Stream<A, E, R>, finalizer: Effect.Effect<X, never, R2>): Stream.Stream<A, E, R2 | R> =>
    new StreamImpl(pipe(toChannel(self), channel.ensuring(finalizer)))
)

/** @internal */
export const ensuringWith = dual<
  <E, R2>(
    finalizer: (exit: Exit.Exit<unknown, E>) => Effect.Effect<unknown, never, R2>
  ) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R | R2>,
  <A, E, R, R2>(
    self: Stream.Stream<A, E, R>,
    finalizer: (exit: Exit.Exit<unknown, E>) => Effect.Effect<unknown, never, R2>
  ) => Stream.Stream<A, E, R | R2>
>(2, (self, finalizer) => new StreamImpl(core.ensuringWith(toChannel(self), finalizer)))

/** @internal */
export const context = <R>(): Stream.Stream<Context.Context<R>, never, R> => fromEffect(Effect.context<R>())

/** @internal */
export const contextWith = <R, A>(f: (env: Context.Context<R>) => A): Stream.Stream<A, never, R> =>
  pipe(context<R>(), map(f))

/** @internal */
export const contextWithEffect = <R0, A, E, R>(
  f: (env: Context.Context<R0>) => Effect.Effect<A, E, R>
): Stream.Stream<A, E, R0 | R> => pipe(context<R0>(), mapEffectSequential(f))

/** @internal */
export const contextWithStream = <R0, A, E, R>(
  f: (env: Context.Context<R0>) => Stream.Stream<A, E, R>
): Stream.Stream<A, E, R0 | R> => pipe(context<R0>(), flatMap(f))

/** @internal */
export const execute = <X, E, R>(effect: Effect.Effect<X, E, R>): Stream.Stream<never, E, R> =>
  drain(fromEffect(effect))

/** @internal */
export const fail = <E>(error: E): Stream.Stream<never, E> => fromEffectOption(Effect.fail(Option.some(error)))

/** @internal */
export const failSync = <E>(evaluate: LazyArg<E>): Stream.Stream<never, E> =>
  fromEffectOption(Effect.failSync(() => Option.some(evaluate())))

/** @internal */
export const failCause = <E>(cause: Cause.Cause<E>): Stream.Stream<never, E> => fromEffect(Effect.failCause(cause))

/** @internal */
export const failCauseSync = <E>(evaluate: LazyArg<Cause.Cause<E>>): Stream.Stream<never, E> =>
  fromEffect(Effect.failCauseSync(evaluate))

/** @internal */
export const filter: {
  <A, B extends A>(
    refinement: Refinement<Types.NoInfer<A>, B>
  ): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<B, E, R>
  <A, B extends A>(predicate: Predicate<B>): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>
  <A, E, R, B extends A>(self: Stream.Stream<A, E, R>, refinement: Refinement<A, B>): Stream.Stream<B, E, R>
  <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>): Stream.Stream<A, E, R>
} = dual(
  2,
  <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>) => mapChunks(self, Chunk.filter(predicate))
)

/** @internal */
export const filterEffect = dual<
  <A, E2, R2>(
    f: (a: Types.NoInfer<A>) => Effect.Effect<boolean, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<boolean, E2, R2>
  ) => Stream.Stream<A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<boolean, E2, R2>
  ): Stream.Stream<A, E2 | E, R2 | R> => {
    const loop = (
      iterator: Iterator<A>
    ): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R2> => {
      const next = iterator.next()
      if (next.done) {
        return core.readWithCause({
          onInput: (input) => loop(input[Symbol.iterator]()),
          onFailure: core.failCause,
          onDone: core.succeed
        })
      } else {
        return pipe(
          f(next.value),
          Effect.map((bool) =>
            bool ?
              pipe(core.write(Chunk.of(next.value)), core.flatMap(() => loop(iterator))) :
              loop(iterator)
          ),
          channel.unwrap
        )
      }
    }
    return new StreamImpl(
      core.suspend(() => pipe(toChannel(self), core.pipeTo(loop(Chunk.empty<A>()[Symbol.iterator]()))))
    )
  }
)

/** @internal */
export const filterMap = dual<
  <A, B>(pf: (a: A) => Option.Option<B>) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<B, E, R>,
  <A, E, R, B>(self: Stream.Stream<A, E, R>, pf: (a: A) => Option.Option<B>) => Stream.Stream<B, E, R>
>(
  2,
  <A, E, R, B>(self: Stream.Stream<A, E, R>, pf: (a: A) => Option.Option<B>): Stream.Stream<B, E, R> =>
    mapChunks(self, Chunk.filterMap(pf))
)

/** @internal */
export const filterMapEffect = dual<
  <A, A2, E2, R2>(
    pf: (a: A) => Option.Option<Effect.Effect<A2, E2, R2>>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    pf: (a: A) => Option.Option<Effect.Effect<A2, E2, R2>>
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    pf: (a: A) => Option.Option<Effect.Effect<A2, E2, R2>>
  ): Stream.Stream<A2, E | E2, R | R2> =>
    suspend(() => {
      const loop = (
        iterator: Iterator<A>
      ): Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R | R2> => {
        const next = iterator.next()
        if (next.done) {
          return core.readWithCause({
            onInput: (input) => loop(input[Symbol.iterator]()),
            onFailure: core.failCause,
            onDone: core.succeed
          })
        } else {
          return pipe(
            pf(next.value),
            Option.match({
              onNone: () => Effect.sync(() => loop(iterator)),
              onSome: Effect.map((a2) => core.flatMap(core.write(Chunk.of(a2)), () => loop(iterator)))
            }),
            channel.unwrap
          )
        }
      }
      return new StreamImpl(pipe(toChannel(self), core.pipeTo(loop(Chunk.empty<A>()[Symbol.iterator]()))))
    })
)

/** @internal */
export const filterMapWhile = dual<
  <A, A2>(
    pf: (a: A) => Option.Option<A2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E, R>,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, pf: (a: A) => Option.Option<A2>) => Stream.Stream<A2, E, R>
>(
  2,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, pf: (a: A) => Option.Option<A2>) => {
    const loop: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E, E, unknown, unknown> = core.readWith({
      onInput: (input: Chunk.Chunk<A>) => {
        const mapped = Chunk.filterMapWhile(input, pf)
        if (mapped.length === input.length) {
          return pipe(core.write(mapped), core.flatMap(() => loop))
        }
        return core.write(mapped)
      },
      onFailure: core.fail,
      onDone: core.succeed
    })
    return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(loop)))
  }
)

/** @internal */
export const filterMapWhileEffect = dual<
  <A, A2, E2, R2>(
    pf: (a: A) => Option.Option<Effect.Effect<A2, E2, R2>>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    pf: (a: A) => Option.Option<Effect.Effect<A2, E2, R2>>
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    pf: (a: A) => Option.Option<Effect.Effect<A2, E2, R2>>
  ): Stream.Stream<A2, E | E2, R | R2> =>
    suspend(() => {
      const loop = (
        iterator: Iterator<A>
      ): Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R | R2> => {
        const next = iterator.next()
        if (next.done) {
          return core.readWithCause({
            onInput: (input) => loop(input[Symbol.iterator]()),
            onFailure: core.failCause,
            onDone: core.succeed
          })
        } else {
          return channel.unwrap(
            Option.match(pf(next.value), {
              onNone: () => Effect.succeed(core.void),
              onSome: Effect.map(
                (a2) => core.flatMap(core.write(Chunk.of(a2)), () => loop(iterator))
              )
            })
          )
        }
      }
      return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(loop(Chunk.empty<A>()[Symbol.iterator]()))))
    })
)

/** @internal */
export const finalizer = <R, X>(finalizer: Effect.Effect<X, never, R>): Stream.Stream<void, never, R> =>
  acquireRelease(Effect.void, () => finalizer)

/** @internal */
export const find: {
  <A, B extends A>(
    refinement: Refinement<Types.NoInfer<A>, B>
  ): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<B, E, R>
  <A>(predicate: Predicate<Types.NoInfer<A>>): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>
  <A, E, R, B extends A>(self: Stream.Stream<A, E, R>, refinement: Refinement<A, B>): Stream.Stream<B, E, R>
  <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>): Stream.Stream<A, E, R>
} = dual(2, <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>): Stream.Stream<A, E, R> => {
  const loop: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E, E, unknown, unknown, R> = core.readWith({
    onInput: (input: Chunk.Chunk<A>) =>
      Option.match(Chunk.findFirst(input, predicate), {
        onNone: () => loop,
        onSome: (n) => core.write(Chunk.of(n))
      }),
    onFailure: core.fail,
    onDone: () => core.void
  })
  return new StreamImpl(pipe(toChannel(self), core.pipeTo(loop)))
})

/** @internal */
export const findEffect: {
  <A, E2, R2>(
    predicate: (a: Types.NoInfer<A>) => Effect.Effect<boolean, E2, R2>
  ): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    predicate: (a: Types.NoInfer<A>) => Effect.Effect<boolean, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    predicate: (a: Types.NoInfer<A>) => Effect.Effect<boolean, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2> => {
    const loop: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R2> = core.readWith({
      onInput: (input: Chunk.Chunk<A>) =>
        pipe(
          Effect.findFirst(input, predicate),
          Effect.map(Option.match({
            onNone: () => loop,
            onSome: (n) => core.write(Chunk.of(n))
          })),
          channel.unwrap
        ),
      onFailure: core.fail,
      onDone: () => core.void
    })
    return new StreamImpl(pipe(toChannel(self), core.pipeTo(loop)))
  }
)

/** @internal */
export const flatMap = dual<
  <A, A2, E2, R2>(
    f: (a: A) => Stream.Stream<A2, E2, R2>,
    options?: {
      readonly concurrency?: number | "unbounded" | undefined
      readonly bufferSize?: number | undefined
      readonly switch?: boolean | undefined
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Stream.Stream<A2, E2, R2>,
    options?: {
      readonly concurrency?: number | "unbounded" | undefined
      readonly bufferSize?: number | undefined
      readonly switch?: boolean | undefined
    }
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  (args) => isStream(args[0]),
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Stream.Stream<A2, E2, R2>,
    options?: {
      readonly concurrency?: number | "unbounded" | undefined
      readonly bufferSize?: number | undefined
      readonly switch?: boolean | undefined
    }
  ): Stream.Stream<A2, E | E2, R | R2> => {
    const bufferSize = options?.bufferSize ?? 16

    if (options?.switch) {
      return matchConcurrency(
        options?.concurrency,
        () => flatMapParSwitchBuffer(self, 1, bufferSize, f),
        (n) => flatMapParSwitchBuffer(self, n, bufferSize, f)
      )
    }

    return matchConcurrency(
      options?.concurrency,
      () =>
        new StreamImpl(
          channel.concatMap(
            toChannel(self),
            (as) =>
              pipe(
                as,
                Chunk.map((a) => toChannel(f(a))),
                Chunk.reduce(
                  core.void as Channel.Channel<Chunk.Chunk<A2>, unknown, E2, unknown, unknown, unknown, R2>,
                  (left, right) => pipe(left, channel.zipRight(right))
                )
              )
          )
        ),
      (_) =>
        new StreamImpl(
          pipe(
            toChannel(self),
            channel.concatMap(channel.writeChunk),
            channel.mergeMap((out) => toChannel(f(out)), options as any)
          )
        )
    )
  }
)

/** @internal */
export const matchConcurrency = <A>(
  concurrency: number | "unbounded" | undefined,
  sequential: () => A,
  bounded: (n: number) => A
) => {
  switch (concurrency) {
    case undefined:
      return sequential()
    case "unbounded":
      return bounded(Number.MAX_SAFE_INTEGER)
    default:
      return concurrency > 1 ? bounded(concurrency) : sequential()
  }
}

const flatMapParSwitchBuffer = dual<
  <A, A2, E2, R2>(
    n: number,
    bufferSize: number,
    f: (a: A) => Stream.Stream<A2, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    n: number,
    bufferSize: number,
    f: (a: A) => Stream.Stream<A2, E2, R2>
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  4,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    n: number,
    bufferSize: number,
    f: (a: A) => Stream.Stream<A2, E2, R2>
  ): Stream.Stream<A2, E | E2, R | R2> =>
    new StreamImpl(
      pipe(
        toChannel(self),
        channel.concatMap(channel.writeChunk),
        channel.mergeMap((out) => toChannel(f(out)), {
          concurrency: n,
          mergeStrategy: MergeStrategy.BufferSliding(),
          bufferSize
        })
      )
    )
)

/** @internal */
export const flatten = dual<
  (options?: {
    readonly concurrency?: number | "unbounded" | undefined
    readonly bufferSize?: number | undefined
  }) => <A, E2, R2, E, R>(
    self: Stream.Stream<Stream.Stream<A, E2, R2>, E, R>
  ) => Stream.Stream<A, E | E2, R | R2>,
  <A, E2, R2, E, R>(
    self: Stream.Stream<Stream.Stream<A, E2, R2>, E, R>,
    options?: {
      readonly concurrency?: number | "unbounded" | undefined
      readonly bufferSize?: number | undefined
    }
  ) => Stream.Stream<A, E | E2, R | R2>
>((args) => isStream(args[0]), (self, options) => flatMap(self, identity, options))

/** @internal */
export const flattenChunks = <A, E, R>(self: Stream.Stream<Chunk.Chunk<A>, E, R>): Stream.Stream<A, E, R> => {
  const flatten: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<Chunk.Chunk<A>>, E, E, unknown, unknown> = core
    .readWithCause({
      onInput: (chunks: Chunk.Chunk<Chunk.Chunk<A>>) =>
        core.flatMap(
          channel.writeChunk(chunks),
          () => flatten
        ),
      onFailure: core.failCause,
      onDone: () => core.void
    })
  return new StreamImpl(pipe(toChannel(self), core.pipeTo(flatten)))
}

/** @internal */
export const flattenEffect = dual<
  (
    options?: {
      readonly concurrency?: number | "unbounded" | undefined
      readonly unordered?: boolean | undefined
    }
  ) => <A, E2, R2, E, R>(
    self: Stream.Stream<Effect.Effect<A, E2, R2>, E, R>
  ) => Stream.Stream<A, E | E2, R | R2>,
  <A, E2, R2, E, R>(
    self: Stream.Stream<Effect.Effect<A, E2, R2>, E, R>,
    options?: {
      readonly concurrency?: number | "unbounded" | undefined
      readonly unordered?: boolean | undefined
    }
  ) => Stream.Stream<A, E | E2, R | R2>
>(
  (args) => isStream(args[0]),
  (self, options) =>
    options?.unordered ?
      flatMap(self, (a) => fromEffect(a), { concurrency: options.concurrency }) :
      matchConcurrency(
        options?.concurrency,
        () => mapEffectSequential(self, identity),
        (n) =>
          new StreamImpl(
            pipe(
              toChannel(self),
              channel.concatMap(channel.writeChunk),
              channel.mapOutEffectPar(identity, n),
              channel.mapOut(Chunk.of)
            )
          )
      )
)

/** @internal */
export const flattenExitOption = <A, E2, E, R>(
  self: Stream.Stream<Exit.Exit<A, Option.Option<E2>>, E, R>
): Stream.Stream<A, E | E2, R> => {
  const processChunk = (
    chunk: Chunk.Chunk<Exit.Exit<A, Option.Option<E2>>>,
    cont: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<Exit.Exit<A, Option.Option<E2>>>, E | E2, E, unknown, unknown, R>
  ) => {
    const [toEmit, rest] = pipe(chunk, Chunk.splitWhere((exit) => !Exit.isSuccess(exit)))
    const next = pipe(
      Chunk.head(rest),
      Option.match({
        onNone: () => cont,
        onSome: Exit.match({
          onFailure: (cause) =>
            Option.match(Cause.flipCauseOption(cause), {
              onNone: () => core.void,
              onSome: core.failCause
            }),
          onSuccess: () => core.void
        })
      })
    )
    return pipe(
      core.write(pipe(
        toEmit,
        Chunk.filterMap((exit) =>
          Exit.isSuccess(exit) ?
            Option.some(exit.value) :
            Option.none()
        )
      )),
      core.flatMap(() => next)
    )
  }
  const process: Channel.Channel<
    Chunk.Chunk<A>,
    Chunk.Chunk<Exit.Exit<A, Option.Option<E2>>>,
    E | E2,
    E,
    unknown,
    unknown,
    R
  > = core.readWithCause({
    onInput: (chunk: Chunk.Chunk<Exit.Exit<A, Option.Option<E2>>>) => processChunk(chunk, process),
    onFailure: (cause) => core.failCause<E | E2>(cause),
    onDone: () => core.void
  })
  return new StreamImpl(pipe(toChannel(self), core.pipeTo(process)))
}

/** @internal */
export const flattenIterables = <A, E, R>(self: Stream.Stream<Iterable<A>, E, R>): Stream.Stream<A, E, R> =>
  pipe(self, map(Chunk.fromIterable), flattenChunks)

/** @internal */
export const flattenTake = <A, E2, E, R>(self: Stream.Stream<Take.Take<A, E2>, E, R>): Stream.Stream<A, E | E2, R> =>
  flattenChunks(flattenExitOption(pipe(self, map((take) => take.exit))))

/** @internal */
export const forever = <A, E, R>(self: Stream.Stream<A, E, R>): Stream.Stream<A, E, R> =>
  new StreamImpl(channel.repeated(toChannel(self)))

/** @internal */
export const fromAsyncIterable = <A, E>(
  iterable: AsyncIterable<A>,
  onError: (e: unknown) => E
) =>
  pipe(
    Effect.acquireRelease(
      Effect.sync(() => iterable[Symbol.asyncIterator]()),
      (iterator) => iterator.return ? Effect.promise(async () => iterator.return!()) : Effect.void
    ),
    Effect.map((iterator) =>
      repeatEffectOption(pipe(
        Effect.tryPromise({
          try: async () => iterator.next(),
          catch: (reason) => Option.some(onError(reason))
        }),
        Effect.flatMap((result) => result.done ? Effect.fail(Option.none()) : Effect.succeed(result.value))
      ))
    ),
    unwrapScoped
  )

/** @internal */
export const fromChannel = <A, E, R>(
  channel: Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, unknown, unknown, R>
): Stream.Stream<A, E, R> => new StreamImpl(channel)

/** @internal */
export const toChannel = <A, E, R>(
  stream: Stream.Stream<A, E, R>
): Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, unknown, unknown, R> => {
  if ("channel" in stream) {
    return (stream as StreamImpl<A, E, R>).channel
  } else if (Effect.isEffect(stream)) {
    return toChannel(fromEffect(stream)) as any
  } else {
    throw new TypeError(`Expected a Stream.`)
  }
}

/** @internal */
export const fromChunk = <A>(chunk: Chunk.Chunk<A>): Stream.Stream<A> =>
  new StreamImpl(Chunk.isEmpty(chunk) ? core.void : core.write(chunk))

/** @internal */
export const fromChunkPubSub: {
  <A>(pubsub: PubSub.PubSub<Chunk.Chunk<A>>, options: {
    readonly scoped: true
    readonly shutdown?: boolean | undefined
  }): Effect.Effect<Stream.Stream<A>, never, Scope.Scope>
  <A>(pubsub: PubSub.PubSub<Chunk.Chunk<A>>, options?: {
    readonly scoped?: false | undefined
    readonly shutdown?: boolean | undefined
  }): Stream.Stream<A>
} = (pubsub, options): any => {
  if (options?.scoped) {
    const effect = Effect.map(PubSub.subscribe(pubsub), fromChunkQueue)
    return options.shutdown ? Effect.map(effect, ensuring(PubSub.shutdown(pubsub))) : effect
  }
  const stream = flatMap(scoped(PubSub.subscribe(pubsub)), fromChunkQueue)
  return options?.shutdown ? ensuring(stream, PubSub.shutdown(pubsub)) : stream
}

/** @internal */
export const fromChunkQueue = <A>(queue: Queue.Dequeue<Chunk.Chunk<A>>, options?: {
  readonly shutdown?: boolean | undefined
}): Stream.Stream<A> =>
  pipe(
    Queue.take(queue),
    Effect.catchAllCause((cause) =>
      pipe(
        Queue.isShutdown(queue),
        Effect.flatMap((isShutdown) =>
          isShutdown && Cause.isInterrupted(cause) ?
            pull.end() :
            pull.failCause(cause)
        )
      )
    ),
    repeatEffectChunkOption,
    options?.shutdown ? ensuring(Queue.shutdown(queue)) : identity
  )

/** @internal */
export const fromChunks = <A>(
  ...chunks: Array<Chunk.Chunk<A>>
): Stream.Stream<A> => pipe(fromIterable(chunks), flatMap(fromChunk))

/** @internal */
export const fromEffect = <A, E, R>(effect: Effect.Effect<A, E, R>): Stream.Stream<A, E, R> =>
  pipe(effect, Effect.mapError(Option.some), fromEffectOption)

/** @internal */
export const fromEffectOption = <A, E, R>(effect: Effect.Effect<A, Option.Option<E>, R>): Stream.Stream<A, E, R> =>
  new StreamImpl(
    channel.unwrap(
      Effect.match(effect, {
        onFailure: Option.match({
          onNone: () => core.void,
          onSome: core.fail
        }),
        onSuccess: (a) => core.write(Chunk.of(a))
      })
    )
  )

/** @internal */
export const fromPubSub: {
  <A>(pubsub: PubSub.PubSub<A>, options: {
    readonly scoped: true
    readonly maxChunkSize?: number | undefined
    readonly shutdown?: boolean | undefined
  }): Effect.Effect<Stream.Stream<A>, never, Scope.Scope>
  <A>(pubsub: PubSub.PubSub<A>, options?: {
    readonly scoped?: false | undefined
    readonly maxChunkSize?: number | undefined
    readonly shutdown?: boolean | undefined
  }): Stream.Stream<A>
} = (pubsub, options): any => {
  const maxChunkSize = options?.maxChunkSize ?? DefaultChunkSize

  if (options?.scoped) {
    const effect = Effect.map(
      PubSub.subscribe(pubsub),
      (queue) => fromQueue(queue, { maxChunkSize, shutdown: true })
    )

    return options.shutdown ? Effect.map(effect, ensuring(PubSub.shutdown(pubsub))) : effect
  }
  const stream = flatMap(
    scoped(PubSub.subscribe(pubsub)),
    (queue) => fromQueue(queue, { maxChunkSize })
  )
  return options?.shutdown ? ensuring(stream, PubSub.shutdown(pubsub)) : stream
}

/** @internal */
export const fromTPubSub = <A>(pubsub: TPubSub.TPubSub<A>): Stream.Stream<A> => {
  return unwrapScoped(Effect.map(
    TPubSub.subscribeScoped(pubsub),
    (queue) => fromTQueue(queue)
  ))
}

/** @internal */
export const fromIterable = <A>(iterable: Iterable<A>): Stream.Stream<A> =>
  suspend(() =>
    Chunk.isChunk(iterable) ?
      fromChunk(iterable) :
      fromIteratorSucceed(iterable[Symbol.iterator]())
  )

/** @internal */
export const fromIterableEffect = <A, E, R>(
  effect: Effect.Effect<Iterable<A>, E, R>
): Stream.Stream<A, E, R> => pipe(effect, Effect.map(fromIterable), unwrap)

/** @internal */
export const fromIteratorSucceed = <A>(
  iterator: Iterator<A>,
  maxChunkSize = DefaultChunkSize
): Stream.Stream<A> => {
  return pipe(
    Effect.sync(() => {
      let builder: Array<A> = []
      const loop = (
        iterator: Iterator<A>
      ): Channel.Channel<Chunk.Chunk<A>, unknown, never, unknown, unknown, unknown> =>
        pipe(
          Effect.sync(() => {
            let next: IteratorResult<A, any> = iterator.next()
            if (maxChunkSize === 1) {
              if (next.done) {
                return core.void
              }
              return pipe(
                core.write(Chunk.of(next.value)),
                core.flatMap(() => loop(iterator))
              )
            }
            builder = []
            let count = 0
            while (next.done === false) {
              builder.push(next.value)
              count = count + 1
              if (count >= maxChunkSize) {
                break
              }
              next = iterator.next()
            }
            if (count > 0) {
              return pipe(
                core.write(Chunk.unsafeFromArray(builder)),
                core.flatMap(() => loop(iterator))
              )
            }
            return core.void
          }),
          channel.unwrap
        )
      return new StreamImpl(loop(iterator))
    }),
    unwrap
  )
}

/** @internal */
export const fromPull = <R, R2, E, A>(
  effect: Effect.Effect<Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R2>, never, R | Scope.Scope>
): Stream.Stream<A, E, Exclude<R, Scope.Scope> | R2> => pipe(effect, Effect.map(repeatEffectChunkOption), unwrapScoped)

/** @internal */
export const fromQueue = <A>(
  queue: Queue.Dequeue<A>,
  options?: {
    readonly maxChunkSize?: number | undefined
    readonly shutdown?: boolean | undefined
  }
): Stream.Stream<A> =>
  pipe(
    Queue.takeBetween(queue, 1, options?.maxChunkSize ?? DefaultChunkSize),
    Effect.catchAllCause((cause) =>
      pipe(
        Queue.isShutdown(queue),
        Effect.flatMap((isShutdown) =>
          isShutdown && Cause.isInterrupted(cause) ?
            pull.end() :
            pull.failCause(cause)
        )
      )
    ),
    repeatEffectChunkOption,
    options?.shutdown ? ensuring(Queue.shutdown(queue)) : identity
  )

/** @internal */
export const fromTQueue = <A>(queue: TQueue.TDequeue<A>): Stream.Stream<A> =>
  pipe(
    TQueue.take(queue),
    Effect.map(Chunk.of),
    Effect.catchAllCause((cause) =>
      pipe(
        TQueue.isShutdown(queue),
        Effect.flatMap((isShutdown) =>
          isShutdown && Cause.isInterrupted(cause) ?
            pull.end() :
            pull.failCause(cause)
        )
      )
    ),
    repeatEffectChunkOption
  )

/** @internal */
export const fromSchedule = <A, R>(schedule: Schedule.Schedule<A, unknown, R>): Stream.Stream<A, never, R> =>
  pipe(
    Schedule.driver(schedule),
    Effect.map((driver) => repeatEffectOption(driver.next(void 0))),
    unwrap
  )

/** @internal */
export const fromReadableStream: {
  <A, E>(
    options: {
      readonly evaluate: LazyArg<ReadableStream<A>>
      readonly onError: (error: unknown) => E
      readonly releaseLockOnEnd?: boolean | undefined
    }
  ): Stream.Stream<A, E>
  <A, E>(
    evaluate: LazyArg<ReadableStream<A>>,
    onError: (error: unknown) => E
  ): Stream.Stream<A, E>
} = <A, E>(
  ...args: [options: {
    readonly evaluate: LazyArg<ReadableStream<A>>
    readonly onError: (error: unknown) => E
    readonly releaseLockOnEnd?: boolean | undefined
  }] | [
    evaluate: LazyArg<ReadableStream<A>>,
    onError: (error: unknown) => E
  ]
): Stream.Stream<A, E> => {
  const evaluate = args.length === 1 ? args[0].evaluate : args[0]
  const onError = args.length === 1 ? args[0].onError : args[1]
  const releaseLockOnEnd = args.length === 1 ? args[0].releaseLockOnEnd === true : false
  return unwrapScoped(Effect.map(
    Effect.acquireRelease(
      Effect.sync(() => evaluate().getReader()),
      (reader) =>
        releaseLockOnEnd
          ? Effect.sync(() => reader.releaseLock())
          : Effect.promise(() => reader.cancel())
    ),
    (reader) =>
      repeatEffectOption(
        Effect.flatMap(
          Effect.tryPromise({
            try: () => reader.read(),
            catch: (reason) => Option.some(onError(reason))
          }),
          ({ done, value }) => done ? Effect.fail(Option.none()) : Effect.succeed(value)
        )
      )
  ))
}

/** @internal */
export const fromReadableStreamByob: {
  <E>(
    options: {
      readonly evaluate: LazyArg<ReadableStream<Uint8Array>>
      readonly onError: (error: unknown) => E
      readonly bufferSize?: number | undefined
      readonly releaseLockOnEnd?: boolean | undefined
    }
  ): Stream.Stream<Uint8Array, E>
  <E>(
    evaluate: LazyArg<ReadableStream<Uint8Array>>,
    onError: (error: unknown) => E,
    allocSize?: number
  ): Stream.Stream<Uint8Array, E>
} = <E>(
  ...args: [options: {
    readonly evaluate: LazyArg<ReadableStream<Uint8Array>>
    readonly onError: (error: unknown) => E
    readonly bufferSize?: number | undefined
    readonly releaseLockOnEnd?: boolean | undefined
  }] | [
    evaluate: LazyArg<ReadableStream<Uint8Array>>,
    onError: (error: unknown) => E,
    allocSize?: number | undefined
  ]
): Stream.Stream<Uint8Array, E> => {
  const evaluate = args.length === 1 ? args[0].evaluate : args[0]
  const onError = args.length === 1 ? args[0].onError : args[1]
  const allocSize = (args.length === 1 ? args[0].bufferSize : args[2]) ?? 4096
  const releaseLockOnEnd = args.length === 1 ? args[0].releaseLockOnEnd === true : false
  return unwrapScoped(Effect.map(
    Effect.acquireRelease(
      Effect.sync(() => evaluate().getReader({ mode: "byob" })),
      (reader) => releaseLockOnEnd ? Effect.sync(() => reader.releaseLock()) : Effect.promise(() => reader.cancel())
    ),
    (reader) =>
      catchAll(
        forever(readChunkStreamByobReader(reader, onError, allocSize)),
        (error) => error === EOF ? empty : fail(error)
      )
  ))
}

const EOF = Symbol.for("effect/Stream/EOF")

const readChunkStreamByobReader = <E>(
  reader: ReadableStreamBYOBReader,
  onError: (error: unknown) => E,
  size: number
): Stream.Stream<Uint8Array, E | typeof EOF> => {
  const buffer = new ArrayBuffer(size)
  return paginateEffect(0, (offset) =>
    Effect.flatMap(
      Effect.tryPromise({
        try: () => reader.read(new Uint8Array(buffer, offset, buffer.byteLength - offset)),
        catch: (reason) => onError(reason)
      }),
      ({ done, value }) => {
        if (done) {
          return Effect.fail(EOF)
        }
        const newOffset = offset + value.byteLength
        return Effect.succeed([
          value,
          newOffset >= buffer.byteLength
            ? Option.none<number>()
            : Option.some(newOffset)
        ])
      }
    ))
}

/** @internal */
export const groupAdjacentBy = dual<
  <A, K>(
    f: (a: A) => K
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<[K, Chunk.NonEmptyChunk<A>], E, R>,
  <A, E, R, K>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => K
  ) => Stream.Stream<[K, Chunk.NonEmptyChunk<A>], E, R>
>(
  2,
  <A, E, R, K>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => K
  ): Stream.Stream<[K, Chunk.NonEmptyChunk<A>], E, R> => {
    type Output = [K, Chunk.NonEmptyChunk<A>]
    const groupAdjacentByChunk = (
      state: Option.Option<Output>,
      chunk: Chunk.Chunk<A>
    ): [Option.Option<Output>, Chunk.Chunk<Output>] => {
      if (Chunk.isEmpty(chunk)) {
        return [state, Chunk.empty()]
      }
      const builder: Array<Output> = []
      let from = 0
      let until = 0
      let key: K | undefined = undefined
      let previousChunk = Chunk.empty<A>()
      switch (state._tag) {
        case "Some": {
          const tuple = state.value
          key = tuple[0]
          let loop = true
          while (loop && until < chunk.length) {
            const input = Chunk.unsafeGet(chunk, until)
            const updatedKey = f(input)
            if (!Equal.equals(key, updatedKey)) {
              const previousChunk = tuple[1]
              const additionalChunk = Chunk.unsafeFromArray(Array.from(chunk).slice(from, until))
              const group = Chunk.appendAll(previousChunk, additionalChunk)
              builder.push([key, group])
              key = updatedKey
              from = until
              loop = false
            }
            until = until + 1
          }
          if (loop) {
            previousChunk = tuple[1]
          }
          break
        }
        case "None": {
          key = f(Chunk.unsafeGet(chunk, until))
          until = until + 1
          break
        }
      }
      while (until < chunk.length) {
        const input = Chunk.unsafeGet(chunk, until)
        const updatedKey = f(input)
        if (!Equal.equals(key, updatedKey)) {
          builder.push([key, Chunk.unsafeFromArray(Array.from(chunk).slice(from, until)) as Chunk.NonEmptyChunk<A>])
          key = updatedKey
          from = until
        }
        until = until + 1
      }
      const nonEmptyChunk = Chunk.appendAll(previousChunk, Chunk.unsafeFromArray(Array.from(chunk).slice(from, until)))
      const output = Chunk.unsafeFromArray(builder)
      return [Option.some([key, nonEmptyChunk as Chunk.NonEmptyChunk<A>]), output]
    }

    const groupAdjacent = (
      state: Option.Option<Output>
    ): Channel.Channel<Chunk.Chunk<Output>, Chunk.Chunk<A>, never, never, unknown, unknown> =>
      core.readWithCause({
        onInput: (input: Chunk.Chunk<A>) => {
          const [updatedState, output] = groupAdjacentByChunk(state, input)
          return Chunk.isEmpty(output)
            ? groupAdjacent(updatedState)
            : core.flatMap(core.write(output), () => groupAdjacent(updatedState))
        },
        onFailure: (cause) =>
          Option.match(state, {
            onNone: () => core.failCause(cause),
            onSome: (output) => core.flatMap(core.write(Chunk.of(output)), () => core.failCause(cause))
          }),
        onDone: (done) =>
          Option.match(state, {
            onNone: () => core.succeedNow(done),
            onSome: (output) => core.flatMap(core.write(Chunk.of(output)), () => core.succeedNow(done))
          })
      })
    return new StreamImpl(channel.pipeToOrFail(toChannel(self), groupAdjacent(Option.none())))
  }
)

/** @internal */
export const grouped = dual<
  (chunkSize: number) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<Chunk.Chunk<A>, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, chunkSize: number) => Stream.Stream<Chunk.Chunk<A>, E, R>
>(
  2,
  <A, E, R>(self: Stream.Stream<A, E, R>, chunkSize: number): Stream.Stream<Chunk.Chunk<A>, E, R> =>
    pipe(self, rechunk(chunkSize), chunks)
)

/** @internal */
export const groupedWithin = dual<
  (
    chunkSize: number,
    duration: Duration.DurationInput
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<Chunk.Chunk<A>, E, R>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    chunkSize: number,
    duration: Duration.DurationInput
  ) => Stream.Stream<Chunk.Chunk<A>, E, R>
>(
  3,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    chunkSize: number,
    duration: Duration.DurationInput
  ): Stream.Stream<Chunk.Chunk<A>, E, R> =>
    aggregateWithin(self, sink_.collectAllN(chunkSize), Schedule.spaced(duration))
)

/** @internal */
export const haltWhen = dual<
  <X, E2, R2>(
    effect: Effect.Effect<X, E2, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>,
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    effect: Effect.Effect<X, E2, R2>
  ) => Stream.Stream<A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    effect: Effect.Effect<X, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2> => {
    const writer = (
      fiber: Fiber.Fiber<X, E2>
    ): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E | E2, void, unknown, R2> =>
      pipe(
        Fiber.poll(fiber),
        Effect.map(Option.match({
          onNone: () =>
            core.readWith({
              onInput: (input: Chunk.Chunk<A>) => core.flatMap(core.write(input), () => writer(fiber)),
              onFailure: core.fail,
              onDone: () => core.void
            }),
          onSome: Exit.match({
            onFailure: core.failCause,
            onSuccess: () => core.void
          })
        })),
        channel.unwrap
      )
    return new StreamImpl(
      channel.unwrapScopedWith((scope) =>
        effect.pipe(
          Effect.forkIn(scope),
          Effect.map((fiber) => toChannel(self).pipe(core.pipeTo(writer(fiber))))
        )
      )
    )
  }
)

/** @internal */
export const haltAfter = dual<
  (duration: Duration.DurationInput) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, duration: Duration.DurationInput) => Stream.Stream<A, E, R>
>(
  2,
  <A, E, R>(self: Stream.Stream<A, E, R>, duration: Duration.DurationInput): Stream.Stream<A, E, R> =>
    pipe(self, haltWhen(Clock.sleep(duration)))
)

/** @internal */
export const haltWhenDeferred = dual<
  <X, E2>(deferred: Deferred.Deferred<X, E2>) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R>,
  <A, E, R, X, E2>(self: Stream.Stream<A, E, R>, deferred: Deferred.Deferred<X, E2>) => Stream.Stream<A, E2 | E, R>
>(
  2,
  <A, E, R, X, E2>(self: Stream.Stream<A, E, R>, deferred: Deferred.Deferred<X, E2>): Stream.Stream<A, E | E2, R> => {
    const writer: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E | E2, void, unknown, R> = pipe(
      Deferred.poll(deferred),
      Effect.map(Option.match({
        onNone: () =>
          core.readWith({
            onInput: (input: Chunk.Chunk<A>) => pipe(core.write(input), core.flatMap(() => writer)),
            onFailure: core.fail,
            onDone: () => core.void
          }),
        onSome: (effect) =>
          channel.unwrap(Effect.match(effect, {
            onFailure: core.fail,
            onSuccess: () => core.void
          }))
      })),
      channel.unwrap
    )
    return new StreamImpl(pipe(toChannel(self), core.pipeTo(writer)))
  }
)

/** @internal */
export const identityStream = <A, E = never, R = never>(): Stream.Stream<A, E, R> =>
  new StreamImpl(
    channel.identityChannel() as Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, unknown, unknown>
  )

/** @internal */
export const interleave = dual<
  <A2, E2, R2>(
    that: Stream.Stream<A2, E2, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ) => Stream.Stream<A2 | A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ): Stream.Stream<A2 | A, E2 | E, R2 | R> => pipe(self, interleaveWith(that, forever(make(true, false))))
)

/** @internal */
export const interleaveWith = dual<
  <A2, E2, R2, E3, R3>(
    that: Stream.Stream<A2, E2, R2>,
    decider: Stream.Stream<boolean, E3, R3>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E2 | E3 | E, R2 | R3 | R>,
  <A, E, R, A2, E2, R2, E3, R3>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>,
    decider: Stream.Stream<boolean, E3, R3>
  ) => Stream.Stream<A2 | A, E2 | E3 | E, R2 | R3 | R>
>(
  3,
  <A, E, R, A2, E2, R2, E3, R3>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>,
    decider: Stream.Stream<boolean, E3, R3>
  ): Stream.Stream<A2 | A, E2 | E3 | E, R2 | R3 | R> => {
    const producer = (
      handoff: Handoff.Handoff<Take.Take<A | A2, E | E2 | E3>>
    ): Channel.Channel<never, A | A2, never, E | E2 | E3, void, unknown, R | R2 | R3> =>
      core.readWithCause({
        onInput: (value: A | A2) =>
          core.flatMap(
            core.fromEffect(
              Handoff.offer<Take.Take<A | A2, E | E2 | E3>>(handoff, InternalTake.of(value))
            ),
            () => producer(handoff)
          ),
        onFailure: (cause) =>
          core.fromEffect(
            Handoff.offer<Take.Take<A | A2, E | E2 | E3>>(
              handoff,
              InternalTake.failCause(cause)
            )
          ),
        onDone: () =>
          core.fromEffect(
            Handoff.offer<Take.Take<A | A2, E | E2 | E3>>(handoff, InternalTake.end)
          )
      })
    return new StreamImpl(
      channel.unwrapScopedWith((scope) =>
        pipe(
          Handoff.make<Take.Take<A | A2, E | E2 | E3>>(),
          Effect.zip(Handoff.make<Take.Take<A | A2, E | E2 | E3>>()),
          Effect.tap(([left]) =>
            toChannel(self).pipe(
              channel.concatMap(channel.writeChunk),
              core.pipeTo(producer(left)),
              channelExecutor.runIn(scope),
              Effect.forkIn(scope)
            )
          ),
          Effect.tap(([_, right]) =>
            toChannel(that).pipe(
              channel.concatMap(channel.writeChunk),
              core.pipeTo(producer(right)),
              channelExecutor.runIn(scope),
              Effect.forkIn(scope)
            )
          ),
          Effect.map(([left, right]) => {
            const process = (
              leftDone: boolean,
              rightDone: boolean
            ): Channel.Channel<Chunk.Chunk<A | A2>, boolean, E | E2 | E3, E | E2 | E3, void, unknown, R> =>
              core.readWithCause({
                onInput: (bool: boolean) => {
                  if (bool && !leftDone) {
                    return pipe(
                      core.fromEffect(Handoff.take(left)),
                      core.flatMap(InternalTake.match({
                        onEnd: () => rightDone ? core.void : process(true, rightDone),
                        onFailure: core.failCause,
                        onSuccess: (chunk) => pipe(core.write(chunk), core.flatMap(() => process(leftDone, rightDone)))
                      }))
                    )
                  }
                  if (!bool && !rightDone) {
                    return pipe(
                      core.fromEffect(Handoff.take(right)),
                      core.flatMap(InternalTake.match({
                        onEnd: () => leftDone ? core.void : process(leftDone, true),
                        onFailure: core.failCause,
                        onSuccess: (chunk) => pipe(core.write(chunk), core.flatMap(() => process(leftDone, rightDone)))
                      }))
                    )
                  }
                  return process(leftDone, rightDone)
                },
                onFailure: core.failCause,
                onDone: () => core.void
              })
            return pipe(
              toChannel(decider),
              channel.concatMap(channel.writeChunk),
              core.pipeTo(process(false, false))
            )
          })
        )
      )
    )
  }
)

/** @internal */
export const intersperse = dual<
  <A2>(element: A2) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E, R>,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, element: A2) => Stream.Stream<A2 | A, E, R>
>(2, <A, E, R, A2>(self: Stream.Stream<A, E, R>, element: A2): Stream.Stream<A2 | A, E, R> =>
  new StreamImpl(
    pipe(
      toChannel(self),
      channel.pipeToOrFail(
        core.suspend(() => {
          const writer = (
            isFirst: boolean
          ): Channel.Channel<Chunk.Chunk<A | A2>, Chunk.Chunk<A>, E, E, unknown, unknown> =>
            core.readWithCause({
              onInput: (chunk: Chunk.Chunk<A>) => {
                const builder: Array<A | A2> = []
                let flagResult = isFirst
                for (const output of chunk) {
                  if (flagResult) {
                    flagResult = false
                    builder.push(output)
                  } else {
                    builder.push(element)
                    builder.push(output)
                  }
                }
                return pipe(
                  core.write(Chunk.unsafeFromArray(builder)),
                  core.flatMap(() => writer(flagResult))
                )
              },
              onFailure: core.failCause,
              onDone: () => core.void
            })
          return writer(true)
        })
      )
    )
  ))

/** @internal */
export const intersperseAffixes = dual<
  <A2, A3, A4>(
    options: {
      readonly start: A2
      readonly middle: A3
      readonly end: A4
    }
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A3 | A4 | A, E, R>,
  <A, E, R, A2, A3, A4>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly start: A2
      readonly middle: A3
      readonly end: A4
    }
  ) => Stream.Stream<A2 | A3 | A4 | A, E, R>
>(
  2,
  <A, E, R, A2, A3, A4>(
    self: Stream.Stream<A, E, R>,
    { end, middle, start }: {
      readonly start: A2
      readonly middle: A3
      readonly end: A4
    }
  ): Stream.Stream<A2 | A3 | A4 | A, E, R> =>
    pipe(
      make(start),
      concat(pipe(self, intersperse(middle))),
      concat(make(end))
    )
)

/** @internal */
export const interruptAfter = dual<
  (duration: Duration.DurationInput) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, duration: Duration.DurationInput) => Stream.Stream<A, E, R>
>(
  2,
  <A, E, R>(self: Stream.Stream<A, E, R>, duration: Duration.DurationInput): Stream.Stream<A, E, R> =>
    pipe(self, interruptWhen(Clock.sleep(duration)))
)

/** @internal */
export const interruptWhen = dual<
  <X, E2, R2>(
    effect: Effect.Effect<X, E2, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>,
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    effect: Effect.Effect<X, E2, R2>
  ) => Stream.Stream<A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    effect: Effect.Effect<X, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2> => new StreamImpl(pipe(toChannel(self), channel.interruptWhen(effect)))
)

/** @internal */
export const interruptWhenDeferred = dual<
  <X, E2>(deferred: Deferred.Deferred<X, E2>) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R>,
  <A, E, R, X, E2>(self: Stream.Stream<A, E, R>, deferred: Deferred.Deferred<X, E2>) => Stream.Stream<A, E2 | E, R>
>(
  2,
  <A, E, R, X, E2>(self: Stream.Stream<A, E, R>, deferred: Deferred.Deferred<X, E2>): Stream.Stream<A, E2 | E, R> =>
    new StreamImpl(pipe(toChannel(self), channel.interruptWhenDeferred(deferred)))
)

/** @internal */
export const iterate = <A>(value: A, next: (value: A) => A): Stream.Stream<A> =>
  unfold(value, (a) => Option.some([a, next(a)] as const))

/** @internal */
export const make = <As extends Array<any>>(...as: As): Stream.Stream<As[number]> => fromIterable(as)

/** @internal */
export const map = dual<
  <A, B>(f: (a: A) => B) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<B, E, R>,
  <A, E, R, B>(self: Stream.Stream<A, E, R>, f: (a: A) => B) => Stream.Stream<B, E, R>
>(
  2,
  <A, E, R, B>(self: Stream.Stream<A, E, R>, f: (a: A) => B): Stream.Stream<B, E, R> =>
    new StreamImpl(pipe(toChannel(self), channel.mapOut(Chunk.map(f))))
)

/** @internal */
export const mapAccum = dual<
  <S, A, A2>(
    s: S,
    f: (s: S, a: A) => readonly [S, A2]
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E, R>,
  <A, E, R, S, A2>(self: Stream.Stream<A, E, R>, s: S, f: (s: S, a: A) => readonly [S, A2]) => Stream.Stream<A2, E, R>
>(
  3,
  <A, E, R, S, A2>(
    self: Stream.Stream<A, E, R>,
    s: S,
    f: (s: S, a: A) => readonly [S, A2]
  ): Stream.Stream<A2, E, R> => {
    const accumulator = (s: S): Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E, E, void, unknown> =>
      core.readWith({
        onInput: (input: Chunk.Chunk<A>) => {
          const [nextS, chunk] = Chunk.mapAccum(input, s, f)
          return core.flatMap(
            core.write(chunk),
            () => accumulator(nextS)
          )
        },
        onFailure: core.fail,
        onDone: () => core.void
      })
    return new StreamImpl(pipe(toChannel(self), core.pipeTo(accumulator(s))))
  }
)

/** @internal */
export const mapAccumEffect = dual<
  <S, A, A2, E2, R2>(
    s: S,
    f: (s: S, a: A) => Effect.Effect<readonly [S, A2], E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, S, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    s: S,
    f: (s: S, a: A) => Effect.Effect<readonly [S, A2], E2, R2>
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  3,
  <A, E, R, S, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    s: S,
    f: (s: S, a: A) => Effect.Effect<readonly [S, A2], E2, R2>
  ): Stream.Stream<A2, E | E2, R | R2> =>
    suspend(() => {
      const accumulator = (
        s: S
      ): Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R | R2> =>
        core.readWith({
          onInput: (input: Chunk.Chunk<A>) =>
            pipe(
              Effect.suspend(() => {
                const outputs: Array<A2> = []
                const emit = (output: A2) =>
                  Effect.sync(() => {
                    outputs.push(output)
                  })
                return pipe(
                  input,
                  Effect.reduce(s, (s, a) =>
                    pipe(
                      f(s, a),
                      Effect.flatMap(([s, a]) => pipe(emit(a), Effect.as(s)))
                    )),
                  Effect.match({
                    onFailure: (error) => {
                      if (outputs.length !== 0) {
                        return channel.zipRight(core.write(Chunk.unsafeFromArray(outputs)), core.fail(error))
                      }
                      return core.fail(error)
                    },
                    onSuccess: (s) => core.flatMap(core.write(Chunk.unsafeFromArray(outputs)), () => accumulator(s))
                  })
                )
              }),
              channel.unwrap
            ),
          onFailure: core.fail,
          onDone: () => core.void
        })
      return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(accumulator(s))))
    })
)

/** @internal */
export const mapBoth = dual<
  <E, E2, A, A2>(
    options: {
      readonly onFailure: (e: E) => E2
      readonly onSuccess: (a: A) => A2
    }
  ) => <R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2, R>,
  <A, E, R, E2, A2>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly onFailure: (e: E) => E2
      readonly onSuccess: (a: A) => A2
    }
  ) => Stream.Stream<A2, E2, R>
>(
  2,
  <A, E, R, E2, A2>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly onFailure: (e: E) => E2
      readonly onSuccess: (a: A) => A2
    }
  ): Stream.Stream<A2, E2, R> => pipe(self, mapError(options.onFailure), map(options.onSuccess))
)

/** @internal */
export const mapChunks = dual<
  <A, B>(
    f: (chunk: Chunk.Chunk<A>) => Chunk.Chunk<B>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<B, E, R>,
  <A, E, R, B>(self: Stream.Stream<A, E, R>, f: (chunk: Chunk.Chunk<A>) => Chunk.Chunk<B>) => Stream.Stream<B, E, R>
>(
  2,
  <A, E, R, B>(self: Stream.Stream<A, E, R>, f: (chunk: Chunk.Chunk<A>) => Chunk.Chunk<B>): Stream.Stream<B, E, R> =>
    new StreamImpl(pipe(toChannel(self), channel.mapOut(f)))
)

/** @internal */
export const mapChunksEffect = dual<
  <A, B, E2, R2>(
    f: (chunk: Chunk.Chunk<A>) => Effect.Effect<Chunk.Chunk<B>, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<B, E2 | E, R2 | R>,
  <A, E, R, B, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (chunk: Chunk.Chunk<A>) => Effect.Effect<Chunk.Chunk<B>, E2, R2>
  ) => Stream.Stream<B, E2 | E, R2 | R>
>(
  2,
  <A, E, R, B, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (chunk: Chunk.Chunk<A>) => Effect.Effect<Chunk.Chunk<B>, E2, R2>
  ): Stream.Stream<B, E2 | E, R2 | R> => new StreamImpl(pipe(toChannel(self), channel.mapOutEffect(f)))
)

/** @internal */
export const mapConcat = dual<
  <A, A2>(f: (a: A) => Iterable<A2>) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E, R>,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, f: (a: A) => Iterable<A2>) => Stream.Stream<A2, E, R>
>(
  2,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, f: (a: A) => Iterable<A2>): Stream.Stream<A2, E, R> =>
    pipe(self, mapConcatChunk((a) => Chunk.fromIterable(f(a))))
)

/** @internal */
export const mapConcatChunk = dual<
  <A, A2>(f: (a: A) => Chunk.Chunk<A2>) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E, R>,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, f: (a: A) => Chunk.Chunk<A2>) => Stream.Stream<A2, E, R>
>(
  2,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, f: (a: A) => Chunk.Chunk<A2>): Stream.Stream<A2, E, R> =>
    pipe(self, mapChunks(Chunk.flatMap(f)))
)

/** @internal */
export const mapConcatChunkEffect = dual<
  <A, A2, E2, R2>(
    f: (a: A) => Effect.Effect<Chunk.Chunk<A2>, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<Chunk.Chunk<A2>, E2, R2>
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<Chunk.Chunk<A2>, E2, R2>
  ): Stream.Stream<A2, E | E2, R | R2> => pipe(self, mapEffectSequential(f), mapConcatChunk(identity))
)

/** @internal */
export const mapConcatEffect = dual<
  <A, A2, E2, R2>(
    f: (a: A) => Effect.Effect<Iterable<A2>, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<Iterable<A2>, E2, R2>
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<Iterable<A2>, E2, R2>
  ): Stream.Stream<A2, E | E2, R | R2> =>
    pipe(self, mapEffectSequential((a) => pipe(f(a), Effect.map(Chunk.fromIterable))), mapConcatChunk(identity))
)

/** @internal */
export const mapEffectSequential = dual<
  <A, A2, E2, R2>(
    f: (a: A) => Effect.Effect<A2, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<A2, E2, R2>
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<A2, E2, R2>
  ): Stream.Stream<A2, E | E2, R | R2> => {
    const loop = (
      iterator: Iterator<A>
    ): Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R2> => {
      const next = iterator.next()
      if (next.done) {
        return core.readWithCause({
          onInput: (elem) => loop(elem[Symbol.iterator]()),
          onFailure: core.failCause,
          onDone: core.succeed
        })
      } else {
        const value = next.value
        return channel.unwrap(
          Effect.map(f(value), (a2) =>
            core.flatMap(
              core.write(Chunk.of(a2)),
              () => loop(iterator)
            ))
        )
      }
    }
    return new StreamImpl(pipe(
      toChannel(self),
      core.pipeTo(core.suspend(() => loop(Chunk.empty<A>()[Symbol.iterator]())))
    ))
  }
)

/** @internal */
export const mapEffectPar = dual<
  <A, A2, E2, R2>(
    n: number,
    f: (a: A) => Effect.Effect<A2, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    n: number,
    f: (a: A) => Effect.Effect<A2, E2, R2>
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  3,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    n: number,
    f: (a: A) => Effect.Effect<A2, E2, R2>
  ): Stream.Stream<A2, E | E2, R | R2> =>
    new StreamImpl(
      pipe(
        toChannel(self),
        channel.concatMap(channel.writeChunk),
        channel.mapOutEffectPar(f, n),
        channel.mapOut(Chunk.of)
      )
    )
)

/** @internal */
export const mapError = dual<
  <E, E2>(f: (error: E) => E2) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2, R>,
  <A, E, R, E2>(self: Stream.Stream<A, E, R>, f: (error: E) => E2) => Stream.Stream<A, E2, R>
>(
  2,
  <A, E, R, E2>(self: Stream.Stream<A, E, R>, f: (error: E) => E2): Stream.Stream<A, E2, R> =>
    new StreamImpl(pipe(toChannel(self), channel.mapError(f)))
)

/** @internal */
export const mapErrorCause = dual<
  <E, E2>(
    f: (cause: Cause.Cause<E>) => Cause.Cause<E2>
  ) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2, R>,
  <A, E, R, E2>(self: Stream.Stream<A, E, R>, f: (cause: Cause.Cause<E>) => Cause.Cause<E2>) => Stream.Stream<A, E2, R>
>(
  2,
  <A, E, R, E2>(self: Stream.Stream<A, E, R>, f: (cause: Cause.Cause<E>) => Cause.Cause<E2>): Stream.Stream<A, E2, R> =>
    new StreamImpl(pipe(toChannel(self), channel.mapErrorCause(f)))
)

/** @internal */
export const merge = dual<
  <A2, E2, R2>(
    that: Stream.Stream<A2, E2, R2>,
    options?: {
      readonly haltStrategy?: HaltStrategy.HaltStrategyInput | undefined
    }
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>,
    options?: {
      readonly haltStrategy?: HaltStrategy.HaltStrategyInput | undefined
    }
  ) => Stream.Stream<A2 | A, E2 | E, R2 | R>
>(
  (args) => isStream(args[1]),
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>,
    options?: {
      readonly haltStrategy?: HaltStrategy.HaltStrategyInput | undefined
    }
  ): Stream.Stream<A2 | A, E2 | E, R2 | R> =>
    mergeWith(self, that, {
      onSelf: identity,
      onOther: identity,
      haltStrategy: options?.haltStrategy
    })
)

/** @internal */
export const mergeAll = dual<
  (options: {
    readonly concurrency: number | "unbounded"
    readonly bufferSize?: number | undefined
  }) => <A, E, R>(streams: Iterable<Stream.Stream<A, E, R>>) => Stream.Stream<A, E, R>,
  <A, E, R>(streams: Iterable<Stream.Stream<A, E, R>>, options: {
    readonly concurrency: number | "unbounded"
    readonly bufferSize?: number | undefined
  }) => Stream.Stream<A, E, R>
>((args) => Symbol.iterator in args[0], (streams, options) => flatten(fromIterable(streams), options))

/** @internal */
export const mergeWithTag: {
  <S extends { [k in string]: Stream.Stream<any, any, any> }>(
    streams: S,
    options: {
      readonly concurrency: number | "unbounded"
      readonly bufferSize?: number | undefined
    }
  ): Stream.Stream<
    { [K in keyof S]: { _tag: K; value: Stream.Stream.Success<S[K]> } }[keyof S],
    Stream.Stream.Error<S[keyof S]>,
    Stream.Stream.Context<S[keyof S]>
  >
  (options: {
    readonly concurrency: number | "unbounded"
    readonly bufferSize?: number | undefined
  }): <S extends { [k in string]: Stream.Stream<any, any, any> }>(streams: S) => Stream.Stream<
    { [K in keyof S]: { _tag: K; value: Stream.Stream.Success<S[K]> } }[keyof S],
    Stream.Stream.Error<S[keyof S]>,
    Stream.Stream.Context<S[keyof S]>
  >
} = dual(2, (streams, options) => {
  const keys = Object.keys(streams)
  const values = keys.map((key) => streams[key].pipe(map((value) => ({ _tag: key, value })))) as any
  return mergeAll(values, options)
})

/** @internal */
export const mergeEither = dual<
  <A2, E2, R2>(
    that: Stream.Stream<A2, E2, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<Either.Either<A2, A>, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ) => Stream.Stream<Either.Either<A2, A>, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ): Stream.Stream<Either.Either<A2, A>, E2 | E, R2 | R> =>
    mergeWith(self, that, { onSelf: Either.left, onOther: Either.right })
)

/** @internal */
export const mergeLeft = dual<
  <AR, ER, RR>(
    right: Stream.Stream<AR, ER, RR>
  ) => <AL, EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<AL, ER | EL, RR | RL>,
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ) => Stream.Stream<AL, ER | EL, RR | RL>
>(
  2,
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AL, EL | ER, RL | RR> => pipe(left, merge(drain(right)))
)

/** @internal */
export const mergeRight = dual<
  <AR, ER, RR>(
    right: Stream.Stream<AR, ER, RR>
  ) => <AL, EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<AR, ER | EL, RR | RL>,
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ) => Stream.Stream<AR, ER | EL, RR | RL>
>(
  2,
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AR, EL | ER, RL | RR> => pipe(drain(left), merge(right))
)

/** @internal */
export const mergeWith = dual<
  <A2, E2, R2, A, A3, A4>(
    other: Stream.Stream<A2, E2, R2>,
    options: {
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A4
      readonly haltStrategy?: HaltStrategy.HaltStrategyInput | undefined
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A3 | A4, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2, A3, A4>(
    self: Stream.Stream<A, E, R>,
    other: Stream.Stream<A2, E2, R2>,
    options: {
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A4
      readonly haltStrategy?: HaltStrategy.HaltStrategyInput | undefined
    }
  ) => Stream.Stream<A3 | A4, E2 | E, R2 | R>
>(
  3,
  <A, E, R, A2, E2, R2, A3, A4>(
    self: Stream.Stream<A, E, R>,
    other: Stream.Stream<A2, E2, R2>,
    options: {
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A4
      readonly haltStrategy?: HaltStrategy.HaltStrategyInput | undefined
    }
  ): Stream.Stream<A3 | A4, E2 | E, R2 | R> => {
    const strategy = options.haltStrategy ? haltStrategy.fromInput(options.haltStrategy) : HaltStrategy.Both
    const handler =
      (terminate: boolean) =>
      (exit: Exit.Exit<unknown, E | E2>): MergeDecision.MergeDecision<R | R2, E | E2, unknown, E | E2, unknown> =>
        terminate || !Exit.isSuccess(exit) ?
          // TODO: remove
          MergeDecision.Done(Effect.suspend(() => exit)) :
          MergeDecision.Await((exit) => Effect.suspend(() => exit))

    return new StreamImpl<A3 | A4, E | E2, R | R2>(
      channel.mergeWith(toChannel(map(self, options.onSelf)), {
        other: toChannel(map(other, options.onOther)),
        onSelfDone: handler(strategy._tag === "Either" || strategy._tag === "Left"),
        onOtherDone: handler(strategy._tag === "Either" || strategy._tag === "Right")
      })
    )
  }
)

/** @internal */
export const mkString = <E, R>(self: Stream.Stream<string, E, R>): Effect.Effect<string, E, R> =>
  run(self, sink_.mkString)

/** @internal */
export const never: Stream.Stream<never> = fromEffect(Effect.never)

/** @internal */
export const onEnd: {
  <_, E2, R2>(
    effect: Effect.Effect<_, E2, R2>
  ): <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>
  <A, E, R, _, E2, R2>(
    self: Stream.Stream<A, E, R>,
    effect: Effect.Effect<_, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, _, E2, R2>(
    self: Stream.Stream<A, E, R>,
    effect: Effect.Effect<_, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2> => concat(self, drain(fromEffect(effect)))
)

/** @internal */
export const onError = dual<
  <E, X, R2>(
    cleanup: (cause: Cause.Cause<E>) => Effect.Effect<X, never, R2>
  ) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R2 | R>,
  <A, E, R, X, R2>(
    self: Stream.Stream<A, E, R>,
    cleanup: (cause: Cause.Cause<E>) => Effect.Effect<X, never, R2>
  ) => Stream.Stream<A, E, R2 | R>
>(
  2,
  <A, E, R, X, R2>(
    self: Stream.Stream<A, E, R>,
    cleanup: (cause: Cause.Cause<E>) => Effect.Effect<X, never, R2>
  ): Stream.Stream<A, E, R | R2> =>
    pipe(self, catchAllCause((cause) => fromEffect(pipe(cleanup(cause), Effect.zipRight(Effect.failCause(cause))))))
)

/** @internal */
export const onDone = dual<
  <X, R2>(
    cleanup: () => Effect.Effect<X, never, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R2 | R>,
  <A, E, R, X, R2>(
    self: Stream.Stream<A, E, R>,
    cleanup: () => Effect.Effect<X, never, R2>
  ) => Stream.Stream<A, E, R2 | R>
>(
  2,
  <A, E, R, X, R2>(
    self: Stream.Stream<A, E, R>,
    cleanup: () => Effect.Effect<X, never, R2>
  ): Stream.Stream<A, E, R | R2> =>
    new StreamImpl<A, E, R | R2>(
      pipe(toChannel(self), core.ensuringWith((exit) => Exit.isSuccess(exit) ? cleanup() : Effect.void))
    )
)

/** @internal */
export const onStart: {
  <_, E2, R2>(
    effect: Effect.Effect<_, E2, R2>
  ): <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>
  <A, E, R, _, E2, R2>(
    self: Stream.Stream<A, E, R>,
    effect: Effect.Effect<_, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, _, E2, R2>(
    self: Stream.Stream<A, E, R>,
    effect: Effect.Effect<_, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2> => unwrap(Effect.as(effect, self))
)

/** @internal */
export const orDie = <A, E, R>(self: Stream.Stream<A, E, R>): Stream.Stream<A, never, R> =>
  pipe(self, orDieWith(identity))

/** @internal */
export const orDieWith = dual<
  <E>(f: (e: E) => unknown) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, never, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, f: (e: E) => unknown) => Stream.Stream<A, never, R>
>(
  2,
  <A, E, R>(self: Stream.Stream<A, E, R>, f: (e: E) => unknown): Stream.Stream<A, never, R> =>
    new StreamImpl(pipe(toChannel(self), channel.orDieWith(f)))
)

/** @internal */
export const orElse = dual<
  <A2, E2, R2>(
    that: LazyArg<Stream.Stream<A2, E2, R2>>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E2, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: LazyArg<Stream.Stream<A2, E2, R2>>
  ) => Stream.Stream<A2 | A, E2, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: LazyArg<Stream.Stream<A2, E2, R2>>
  ): Stream.Stream<A2 | A, E2, R2 | R> =>
    new StreamImpl<A | A2, E2, R | R2>(pipe(toChannel(self), channel.orElse(() => toChannel(that()))))
)

/** @internal */
export const orElseEither = dual<
  <A2, E2, R2>(
    that: LazyArg<Stream.Stream<A2, E2, R2>>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<Either.Either<A2, A>, E2, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: LazyArg<Stream.Stream<A2, E2, R2>>
  ) => Stream.Stream<Either.Either<A2, A>, E2, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: LazyArg<Stream.Stream<A2, E2, R2>>
  ): Stream.Stream<Either.Either<A2, A>, E2, R2 | R> =>
    pipe(self, map(Either.left), orElse(() => pipe(that(), map(Either.right))))
)

/** @internal */
export const orElseFail = dual<
  <E2>(error: LazyArg<E2>) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2, R>,
  <A, E, R, E2>(self: Stream.Stream<A, E, R>, error: LazyArg<E2>) => Stream.Stream<A, E2, R>
>(
  2,
  <A, E, R, E2>(self: Stream.Stream<A, E, R>, error: LazyArg<E2>): Stream.Stream<A, E2, R> =>
    pipe(self, orElse(() => failSync(error)))
)

/** @internal */
export const orElseIfEmpty = dual<
  <A2>(element: LazyArg<A2>) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E, R>,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, element: LazyArg<A2>) => Stream.Stream<A2 | A, E, R>
>(
  2,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, element: LazyArg<A2>): Stream.Stream<A | A2, E, R> =>
    pipe(self, orElseIfEmptyChunk(() => Chunk.of(element())))
)

/** @internal */
export const orElseIfEmptyChunk = dual<
  <A2>(chunk: LazyArg<Chunk.Chunk<A2>>) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E, R>,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, chunk: LazyArg<Chunk.Chunk<A2>>) => Stream.Stream<A2 | A, E, R>
>(
  2,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, chunk: LazyArg<Chunk.Chunk<A2>>): Stream.Stream<A | A2, E, R> =>
    pipe(self, orElseIfEmptyStream(() => new StreamImpl(core.write(chunk()))))
)

/** @internal */
export const orElseIfEmptyStream = dual<
  <A2, E2, R2>(
    stream: LazyArg<Stream.Stream<A2, E2, R2>>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    stream: LazyArg<Stream.Stream<A2, E2, R2>>
  ) => Stream.Stream<A2 | A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    stream: LazyArg<Stream.Stream<A2, E2, R2>>
  ): Stream.Stream<A2 | A, E2 | E, R2 | R> => {
    const writer: Channel.Channel<Chunk.Chunk<A | A2>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R2> = core.readWith(
      {
        onInput: (input: Chunk.Chunk<A>) => {
          if (Chunk.isEmpty(input)) {
            return core.suspend(() => writer)
          }
          return pipe(
            core.write(input),
            channel.zipRight(channel.identityChannel<Chunk.Chunk<A>, E, unknown>())
          )
        },
        onFailure: core.fail,
        onDone: () => core.suspend(() => toChannel(stream()))
      }
    )
    return new StreamImpl(pipe(toChannel(self), core.pipeTo(writer)))
  }
)

/** @internal */
export const orElseSucceed = dual<
  <A2>(value: LazyArg<A2>) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, never, R>,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, value: LazyArg<A2>) => Stream.Stream<A2 | A, never, R>
>(
  2,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, value: LazyArg<A2>): Stream.Stream<A2 | A, never, R> =>
    pipe(self, orElse(() => sync(value)))
)

/** @internal */
export const paginate = <S, A>(s: S, f: (s: S) => readonly [A, Option.Option<S>]): Stream.Stream<A> =>
  paginateChunk(s, (s) => {
    const page = f(s)
    return [Chunk.of(page[0]), page[1]] as const
  })

/** @internal */
export const paginateChunk = <S, A>(
  s: S,
  f: (s: S) => readonly [Chunk.Chunk<A>, Option.Option<S>]
): Stream.Stream<A> => {
  const loop = (s: S): Channel.Channel<Chunk.Chunk<A>, unknown, never, unknown, unknown, unknown> => {
    const page = f(s)
    return Option.match(page[1], {
      onNone: () => channel.zipRight(core.write(page[0]), core.void),
      onSome: (s) => core.flatMap(core.write(page[0]), () => loop(s))
    })
  }
  return new StreamImpl(core.suspend(() => loop(s)))
}

/** @internal */
export const paginateChunkEffect = <S, A, E, R>(
  s: S,
  f: (s: S) => Effect.Effect<readonly [Chunk.Chunk<A>, Option.Option<S>], E, R>
): Stream.Stream<A, E, R> => {
  const loop = (s: S): Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, unknown, unknown, R> =>
    channel.unwrap(
      Effect.map(f(s), ([chunk, option]) =>
        Option.match(option, {
          onNone: () => channel.zipRight(core.write(chunk), core.void),
          onSome: (s) => core.flatMap(core.write(chunk), () => loop(s))
        }))
    )
  return new StreamImpl(core.suspend(() => loop(s)))
}

/** @internal */
export const paginateEffect = <S, A, E, R>(
  s: S,
  f: (s: S) => Effect.Effect<readonly [A, Option.Option<S>], E, R>
): Stream.Stream<A, E, R> =>
  paginateChunkEffect(s, (s) => pipe(f(s), Effect.map(([a, s]) => [Chunk.of(a), s] as const)))

/** @internal */
export const peel = dual<
  <A2, A, E2, R2>(
    sink: Sink.Sink<A2, A, A, E2, R2>
  ) => <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<[A2, Stream.Stream<A, E>], E2 | E, Scope.Scope | R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<A2, A, A, E2, R2>
  ) => Effect.Effect<[A2, Stream.Stream<A, E>], E2 | E, Scope.Scope | R2 | R>
>(2, <A, E, R, A2, E2, R2>(
  self: Stream.Stream<A, E, R>,
  sink: Sink.Sink<A2, A, A, E2, R2>
): Effect.Effect<[A2, Stream.Stream<A, E>], E2 | E, Scope.Scope | R2 | R> => {
  type Signal = Emit | Halt | End
  const OP_EMIT = "Emit" as const
  type OP_EMIT = typeof OP_EMIT
  const OP_HALT = "Halt" as const
  type OP_HALT = typeof OP_HALT
  const OP_END = "End" as const
  type OP_END = typeof OP_END
  interface Emit {
    readonly _tag: OP_EMIT
    readonly elements: Chunk.Chunk<A>
  }
  interface Halt {
    readonly _tag: OP_HALT
    readonly cause: Cause.Cause<E>
  }
  interface End {
    readonly _tag: OP_END
  }
  return pipe(
    Deferred.make<A2, E | E2>(),
    Effect.flatMap((deferred) =>
      pipe(
        Handoff.make<Signal>(),
        Effect.map((handoff) => {
          const consumer = sink_.foldSink(sink_.collectLeftover(sink), {
            onFailure: (error) =>
              sink_.zipRight(
                sink_.fromEffect(Deferred.fail(deferred, error)),
                sink_.fail(error)
              ),
            onSuccess: ([z, leftovers]) => {
              const loop: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E, void, unknown> = core
                .readWithCause({
                  onInput: (elements) =>
                    core.flatMap(
                      core.fromEffect(
                        Handoff.offer<Signal>(handoff, { _tag: OP_EMIT, elements })
                      ),
                      () => loop
                    ),
                  onFailure: (cause) =>
                    channel.zipRight(
                      core.fromEffect(Handoff.offer<Signal>(handoff, { _tag: OP_HALT, cause })),
                      core.failCause(cause)
                    ),
                  onDone: (_) =>
                    channel.zipRight(
                      core.fromEffect(Handoff.offer<Signal>(handoff, { _tag: OP_END })),
                      core.void
                    )
                })
              return sink_.fromChannel(
                pipe(
                  core.fromEffect(Deferred.succeed(deferred, z)),
                  channel.zipRight(core.fromEffect(
                    pipe(
                      handoff,
                      Handoff.offer<Signal>({ _tag: OP_EMIT, elements: leftovers })
                    )
                  )),
                  channel.zipRight(loop)
                )
              )
            }
          })

          const producer: Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, void, unknown> = pipe(
            Handoff.take(handoff),
            Effect.map((signal) => {
              switch (signal._tag) {
                case OP_EMIT: {
                  return pipe(core.write(signal.elements), core.flatMap(() => producer))
                }
                case OP_HALT: {
                  return core.failCause(signal.cause)
                }
                case OP_END: {
                  return core.void
                }
              }
            }),
            channel.unwrap
          )

          return pipe(
            self,
            tapErrorCause((cause) => Deferred.failCause(deferred, cause)),
            run(consumer),
            Effect.forkScoped,
            Effect.zipRight(Deferred.await(deferred)),
            Effect.map((z) => [z, new StreamImpl(producer)] as [A2, StreamImpl<A, E>])
          )
        })
      )
    ),
    Effect.flatten
  )
})

/** @internal */
export const partition: {
  <C extends A, B extends A, A = C>(
    refinement: Refinement<Types.NoInfer<A>, B>,
    options?: {
      bufferSize?: number | undefined
    }
  ): <E, R>(
    self: Stream.Stream<C, E, R>
  ) => Effect.Effect<
    [excluded: Stream.Stream<Exclude<C, B>, E>, satisfying: Stream.Stream<B, E>],
    E,
    Scope.Scope | R
  >
  <A>(
    predicate: Predicate<A>,
    options?: {
      bufferSize?: number | undefined
    }
  ): <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<[excluded: Stream.Stream<A, E>, satisfying: Stream.Stream<A, E>], E, Scope.Scope | R>
  <C extends A, E, R, B extends A, A = C>(
    self: Stream.Stream<C, E, R>,
    refinement: Refinement<A, B>,
    options?: {
      bufferSize?: number | undefined
    }
  ): Effect.Effect<
    [excluded: Stream.Stream<Exclude<C, B>, E>, satisfying: Stream.Stream<B, E>],
    E,
    Scope.Scope | R
  >
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    predicate: Predicate<A>,
    options?: {
      bufferSize?: number | undefined
    }
  ): Effect.Effect<[excluded: Stream.Stream<A, E>, satisfying: Stream.Stream<A, E>], E, Scope.Scope | R>
} = dual(
  (args) => typeof args[1] === "function",
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    predicate: Predicate<A>,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ): Effect.Effect<
    [Stream.Stream<A, E>, Stream.Stream<A, E>],
    E,
    R | Scope.Scope
  > =>
    partitionEither(
      self,
      (a) => Effect.succeed(predicate(a) ? Either.right(a) : Either.left(a)),
      options
    )
)

/** @internal */
export const partitionEither = dual<
  <A, A3, A2, E2, R2>(
    predicate: (a: Types.NoInfer<A>) => Effect.Effect<Either.Either<A3, A2>, E2, R2>,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ) => <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<
    [left: Stream.Stream<A2, E2 | E>, right: Stream.Stream<A3, E2 | E>],
    E2 | E,
    Scope.Scope | R2 | R
  >,
  <A, E, R, A3, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    predicate: (a: A) => Effect.Effect<Either.Either<A3, A2>, E2, R2>,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ) => Effect.Effect<
    [left: Stream.Stream<A2, E2 | E>, right: Stream.Stream<A3, E2 | E>],
    E2 | E,
    Scope.Scope | R2 | R
  >
>(
  (args) => typeof args[1] === "function",
  <A, E, R, A3, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    predicate: (a: A) => Effect.Effect<Either.Either<A3, A2>, E2, R2>,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ): Effect.Effect<
    [left: Stream.Stream<A2, E2 | E>, right: Stream.Stream<A3, E2 | E>],
    E | E2,
    R | R2 | Scope.Scope
  > =>
    pipe(
      mapEffectSequential(self, predicate),
      distributedWith({
        size: 2,
        maximumLag: options?.bufferSize ?? 16,
        decide: Either.match({
          onLeft: () => Effect.succeed((n) => n === 0),
          onRight: () => Effect.succeed((n) => n === 1)
        })
      }),
      Effect.flatMap(([queue1, queue2]) =>
        Effect.succeed([
          filterMap(
            flattenExitOption(fromQueue(queue1, { shutdown: true })),
            (_) =>
              Either.match(_, {
                onLeft: Option.some,
                onRight: Option.none
              })
          ),
          filterMap(
            flattenExitOption(fromQueue(queue2, { shutdown: true })),
            (_) =>
              Either.match(_, {
                onLeft: Option.none,
                onRight: Option.some
              })
          )
        ])
      )
    )
)

/** @internal */
export const pipeThrough = dual<
  <A2, A, L, E2, R2>(
    sink: Sink.Sink<A2, A, L, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<L, E2 | E, R2 | R>,
  <A, E, R, A2, L, E2, R2>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<A2, A, L, E2, R2>
  ) => Stream.Stream<L, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, L, E2, R2>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<A2, A, L, E2, R2>
  ): Stream.Stream<L, E2 | E, R2 | R> =>
    new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(sink_.toChannel(sink))))
)

/** @internal */
export const pipeThroughChannel = dual<
  <R2, E, E2, A, A2>(
    channel: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, E, unknown, unknown, R2>
  ) => <R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2, R2 | R>,
  <R, R2, E, E2, A, A2>(
    self: Stream.Stream<A, E, R>,
    channel: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, E, unknown, unknown, R2>
  ) => Stream.Stream<A2, E2, R2 | R>
>(
  2,
  <R, R2, E, E2, A, A2>(
    self: Stream.Stream<A, E, R>,
    channel: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, E, unknown, unknown, R2>
  ): Stream.Stream<A2, E2, R2 | R> => new StreamImpl(core.pipeTo(toChannel(self), channel))
)

/** @internal */
export const pipeThroughChannelOrFail = dual<
  <R2, E, E2, A, A2>(
    chan: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, E, unknown, unknown, R2>
  ) => <R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E | E2, R2 | R>,
  <R, R2, E, E2, A, A2>(
    self: Stream.Stream<A, E, R>,
    chan: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, E, unknown, unknown, R2>
  ) => Stream.Stream<A2, E | E2, R2 | R>
>(
  2,
  <R, R2, E, E2, A, A2>(
    self: Stream.Stream<A, E, R>,
    chan: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, E, unknown, unknown, R2>
  ): Stream.Stream<A2, E | E2, R2 | R> => new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(chan)))
)

/** @internal */
export const prepend = dual<
  <B>(values: Chunk.Chunk<B>) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A | B, E, R>,
  <A, E, R, B>(self: Stream.Stream<A, E, R>, values: Chunk.Chunk<B>) => Stream.Stream<A | B, E, R>
>(2, (self, values) =>
  new StreamImpl(
    channel.zipRight(
      core.write(values as Chunk.Chunk<any>),
      toChannel(self)
    )
  ))

/** @internal */
export const provideContext = dual<
  <R>(context: Context.Context<R>) => <A, E>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E>,
  <A, E, R>(self: Stream.Stream<A, E, R>, context: Context.Context<R>) => Stream.Stream<A, E>
>(
  2,
  <A, E, R>(self: Stream.Stream<A, E, R>, context: Context.Context<R>): Stream.Stream<A, E> =>
    new StreamImpl(pipe(toChannel(self), core.provideContext(context)))
)

/** @internal */
export const provideSomeContext = dual<
  <R2>(context: Context.Context<R2>) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, Exclude<R, R2>>,
  <A, E, R, R2>(self: Stream.Stream<A, E, R>, context: Context.Context<R2>) => Stream.Stream<A, E, Exclude<R, R2>>
>(
  2,
  <A, E, R, R2>(self: Stream.Stream<A, E, R>, context: Context.Context<R2>): Stream.Stream<A, E, Exclude<R, R2>> =>
    mapInputContext(self as any, Context.merge(context))
)

/** @internal */
export const provideLayer = dual<
  <RIn, E2, ROut>(
    layer: Layer.Layer<ROut, E2, RIn>
  ) => <A, E>(self: Stream.Stream<A, E, ROut>) => Stream.Stream<A, E2 | E, RIn>,
  <A, E, RIn, E2, ROut>(
    self: Stream.Stream<A, E, ROut>,
    layer: Layer.Layer<ROut, E2, RIn>
  ) => Stream.Stream<A, E2 | E, RIn>
>(
  2,
  <A, E, RIn, E2, ROut>(
    self: Stream.Stream<A, E, ROut>,
    layer: Layer.Layer<ROut, E2, RIn>
  ): Stream.Stream<A, E2 | E, RIn> =>
    new StreamImpl(
      channel.unwrapScopedWith((scope) =>
        Layer.buildWithScope(layer, scope).pipe(
          Effect.map((env) => pipe(toChannel(self), core.provideContext(env)))
        )
      )
    )
)

/** @internal */
export const provideService = dual<
  <I, S>(
    tag: Context.Tag<I, S>,
    resource: Types.NoInfer<S>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, Exclude<R, I>>,
  <A, E, R, I, S>(
    self: Stream.Stream<A, E, R>,
    tag: Context.Tag<I, S>,
    resource: Types.NoInfer<S>
  ) => Stream.Stream<A, E, Exclude<R, I>>
>(
  3,
  <A, E, R, I, S>(
    self: Stream.Stream<A, E, R>,
    tag: Context.Tag<I, S>,
    resource: Types.NoInfer<S>
  ) => provideServiceEffect(self, tag, Effect.succeed(resource))
)

/** @internal */
export const provideServiceEffect = dual<
  <I, S, E2, R2>(
    tag: Context.Tag<I, S>,
    effect: Effect.Effect<Types.NoInfer<S>, E2, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | Exclude<R, I>>,
  <A, E, R, I, S, E2, R2>(
    self: Stream.Stream<A, E, R>,
    tag: Context.Tag<I, S>,
    effect: Effect.Effect<Types.NoInfer<S>, E2, R2>
  ) => Stream.Stream<A, E2 | E, R2 | Exclude<R, I>>
>(
  3,
  <A, E, R, I, S, E2, R2>(
    self: Stream.Stream<A, E, R>,
    tag: Context.Tag<I, S>,
    effect: Effect.Effect<Types.NoInfer<S>, E2, R2>
  ) => provideServiceStream(self, tag, fromEffect(effect))
)

/** @internal */
export const provideServiceStream = dual<
  <I, S, E2, R2>(
    tag: Context.Tag<I, S>,
    stream: Stream.Stream<Types.NoInfer<S>, E2, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | Exclude<R, I>>,
  <A, E, R, I, S, E2, R2>(
    self: Stream.Stream<A, E, R>,
    tag: Context.Tag<I, S>,
    stream: Stream.Stream<Types.NoInfer<S>, E2, R2>
  ) => Stream.Stream<A, E2 | E, R2 | Exclude<R, I>>
>(
  3,
  <A, E, R, I, S, E2, R2>(
    self: Stream.Stream<A, E, R>,
    tag: Context.Tag<I, S>,
    stream: Stream.Stream<Types.NoInfer<S>, E2, R2>
  ): Stream.Stream<A, E2 | E, R2 | Exclude<R, I>> =>
    contextWithStream((env: Context.Context<R2 | Exclude<R, I>>) =>
      flatMap(
        stream,
        (service) => pipe(self, provideContext(Context.add(env, tag, service) as Context.Context<R | R2>))
      )
    )
)

/** @internal */
export const mapInputContext = dual<
  <R0, R>(
    f: (env: Context.Context<R0>) => Context.Context<R>
  ) => <A, E>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R0>,
  <A, E, R0, R>(
    self: Stream.Stream<A, E, R>,
    f: (env: Context.Context<R0>) => Context.Context<R>
  ) => Stream.Stream<A, E, R0>
>(
  2,
  <A, E, R0, R>(
    self: Stream.Stream<A, E, R>,
    f: (env: Context.Context<R0>) => Context.Context<R>
  ): Stream.Stream<A, E, R0> => contextWithStream((env) => pipe(self, provideContext(f(env))))
)

/** @internal */
export const provideSomeLayer = dual<
  <RIn, E2, ROut>(
    layer: Layer.Layer<ROut, E2, RIn>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, RIn | Exclude<R, ROut>>,
  <A, E, R, RIn, E2, ROut>(
    self: Stream.Stream<A, E, R>,
    layer: Layer.Layer<ROut, E2, RIn>
  ) => Stream.Stream<A, E2 | E, RIn | Exclude<R, ROut>>
>(
  2,
  <A, E, R, RIn, E2, ROut>(
    self: Stream.Stream<A, E, R>,
    layer: Layer.Layer<ROut, E2, RIn>
  ): Stream.Stream<A, E2 | E, RIn | Exclude<R, ROut>> =>
    // @ts-expect-error
    // @effect-diagnostics-next-line missingEffectContext:off
    pipe(
      self,
      provideLayer(pipe(Layer.context(), Layer.merge(layer)))
    )
)

/** @internal */
export const range = (min: number, max: number, chunkSize = DefaultChunkSize): Stream.Stream<number> =>
  suspend(() => {
    if (min > max) {
      return empty as Stream.Stream<number>
    }
    const go = (
      min: number,
      max: number,
      chunkSize: number
    ): Channel.Channel<Chunk.Chunk<number>, unknown, never, unknown, unknown, unknown> => {
      const remaining = max - min + 1
      if (remaining > chunkSize) {
        return pipe(
          core.write(Chunk.range(min, min + chunkSize - 1)),
          core.flatMap(() => go(min + chunkSize, max, chunkSize))
        )
      }
      return core.write(Chunk.range(min, min + remaining - 1))
    }
    return new StreamImpl(go(min, max, chunkSize))
  })

/** @internal */
export const race: {
  <AR, ER, RR>(
    right: Stream.Stream<AR, ER, RR>
  ): <AL, EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<AL | AR, EL | ER, RL | RR>
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AL | AR, EL | ER, RL | RR>
} = dual(
  2,
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AL | AR, EL | ER, RL | RR> => raceAll(left, right)
)

/** @internal */
export const raceAll = <S extends ReadonlyArray<Stream.Stream<any, any, any>>>(
  ...streams: S
): Stream.Stream<
  Stream.Stream.Success<S[number]>,
  Stream.Stream.Error<S[number]>,
  Stream.Stream.Context<S[number]>
> =>
  Deferred.make<void>().pipe(
    Effect.map((halt) => {
      let winner: number | null = null
      return mergeAll(
        streams.map((stream, index) =>
          stream.pipe(
            takeWhile(() => {
              if (winner === null) {
                winner = index
                Deferred.unsafeDone(halt, Exit.void)
                return true
              }
              return winner === index
            }),
            interruptWhen(
              Deferred.await(halt).pipe(
                Effect.flatMap(() => winner === index ? Effect.never : Effect.void)
              )
            )
          )
        ),
        { concurrency: streams.length }
      )
    }),
    unwrap
  )

/** @internal */
export const rechunk = dual<
  (n: number) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, n: number) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, n: number): Stream.Stream<A, E, R> =>
  suspend(() => {
    const target = Math.max(n, 1)
    const process = rechunkProcess(new StreamRechunker(target), target)
    return new StreamImpl(pipe(toChannel(self), core.pipeTo(process)))
  }))

/** @internal */
const rechunkProcess = <A, E>(
  rechunker: StreamRechunker<A, E>,
  target: number
): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E, E, unknown, unknown> =>
  core.readWithCause({
    onInput: (chunk: Chunk.Chunk<A>) => {
      if (chunk.length === target && rechunker.isEmpty()) {
        return core.flatMap(
          core.write(chunk),
          () => rechunkProcess(rechunker, target)
        )
      }
      if (chunk.length > 0) {
        const chunks: Array<Chunk.Chunk<A>> = []
        let result: Chunk.Chunk<A> | undefined = undefined
        let index = 0
        while (index < chunk.length) {
          while (index < chunk.length && result === undefined) {
            result = rechunker.write(pipe(chunk, Chunk.unsafeGet(index)))
            index = index + 1
          }
          if (result !== undefined) {
            chunks.push(result)
            result = undefined
          }
        }
        return core.flatMap(
          channel.writeAll(...chunks),
          () => rechunkProcess(rechunker, target)
        )
      }
      return core.suspend(() => rechunkProcess(rechunker, target))
    },
    onFailure: (cause) => channel.zipRight(rechunker.emitIfNotEmpty(), core.failCause(cause)),
    onDone: () => rechunker.emitIfNotEmpty()
  })

class StreamRechunker<out A, in out E> {
  private builder: Array<A> = []
  private pos = 0

  constructor(readonly n: number) {
  }

  isEmpty(): boolean {
    return this.pos === 0
  }

  write(elem: A): Chunk.Chunk<A> | undefined {
    this.builder.push(elem)
    this.pos += 1

    if (this.pos === this.n) {
      const result = Chunk.unsafeFromArray(this.builder)
      this.builder = []
      this.pos = 0
      return result
    }

    return undefined
  }

  emitIfNotEmpty(): Channel.Channel<Chunk.Chunk<A>, unknown, E, E, void, unknown> {
    if (this.pos !== 0) {
      return core.write(Chunk.unsafeFromArray(this.builder))
    }
    return core.void
  }
}

/** @internal */
export const refineOrDie = dual<
  <E, E2>(pf: (error: E) => Option.Option<E2>) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2, R>,
  <A, E, R, E2>(self: Stream.Stream<A, E, R>, pf: (error: E) => Option.Option<E2>) => Stream.Stream<A, E2, R>
>(
  2,
  <A, E, R, E2>(self: Stream.Stream<A, E, R>, pf: (error: E) => Option.Option<E2>): Stream.Stream<A, E2, R> =>
    pipe(self, refineOrDieWith(pf, identity))
)

/** @internal */
export const refineOrDieWith = dual<
  <E, E2>(
    pf: (error: E) => Option.Option<E2>,
    f: (error: E) => unknown
  ) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2, R>,
  <A, E, R, E2>(
    self: Stream.Stream<A, E, R>,
    pf: (error: E) => Option.Option<E2>,
    f: (error: E) => unknown
  ) => Stream.Stream<A, E2, R>
>(
  3,
  <A, E, R, E2>(
    self: Stream.Stream<A, E, R>,
    pf: (error: E) => Option.Option<E2>,
    f: (error: E) => unknown
  ): Stream.Stream<A, E2, R> =>
    new StreamImpl(
      channel.catchAll(toChannel(self), (error) =>
        Option.match(pf(error), {
          onNone: () => core.failCause(Cause.die(f(error))),
          onSome: core.fail
        }))
    )
)

/** @internal */
export const repeat = dual<
  <B, R2>(
    schedule: Schedule.Schedule<B, unknown, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R2 | R>,
  <A, E, R, B, R2>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>
  ) => Stream.Stream<A, E, R2 | R>
>(
  2,
  <A, E, R, B, R2>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>
  ): Stream.Stream<A, E, R | R2> =>
    filterMap(
      repeatEither(self, schedule),
      (_) =>
        Either.match(_, {
          onLeft: Option.none,
          onRight: Option.some
        })
    )
)

/** @internal */
export const repeatEffect = <A, E, R>(effect: Effect.Effect<A, E, R>): Stream.Stream<A, E, R> =>
  repeatEffectOption(pipe(effect, Effect.mapError(Option.some)))

/** @internal */
export const repeatEffectChunk = <A, E, R>(effect: Effect.Effect<Chunk.Chunk<A>, E, R>): Stream.Stream<A, E, R> =>
  repeatEffectChunkOption(pipe(effect, Effect.mapError(Option.some)))

/** @internal */
export const repeatEffectChunkOption = <A, E, R>(
  effect: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R>
): Stream.Stream<A, E, R> =>
  unfoldChunkEffect(effect, (effect) =>
    pipe(
      Effect.map(effect, (chunk) => Option.some([chunk, effect] as const)),
      Effect.catchAll(Option.match({
        onNone: () => Effect.succeed(Option.none()),
        onSome: Effect.fail
      }))
    ))

/** @internal */
export const repeatEffectOption = <A, E, R>(effect: Effect.Effect<A, Option.Option<E>, R>): Stream.Stream<A, E, R> =>
  repeatEffectChunkOption(pipe(effect, Effect.map(Chunk.of)))

/** @internal */
export const repeatEither = dual<
  <B, R2>(
    schedule: Schedule.Schedule<B, unknown, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<Either.Either<A, B>, E, R2 | R>,
  <A, E, R, B, R2>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>
  ) => Stream.Stream<Either.Either<A, B>, E, R2 | R>
>(
  2,
  <A, E, R, B, R2>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>
  ): Stream.Stream<Either.Either<A, B>, E, R2 | R> =>
    repeatWith(self, schedule, {
      onElement: (a): Either.Either<A, B> => Either.right(a),
      onSchedule: Either.left
    })
)

/** @internal */
export const repeatElements = dual<
  <B, R2>(
    schedule: Schedule.Schedule<B, unknown, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R2 | R>,
  <A, E, R, B, R2>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>
  ) => Stream.Stream<A, E, R2 | R>
>(
  2,
  <A, E, R, B, R2>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>
  ): Stream.Stream<A, E, R | R2> =>
    filterMap(
      repeatElementsWith(self, schedule, { onElement: (a) => Option.some(a), onSchedule: Option.none }),
      identity
    )
)

/** @internal */
export const repeatElementsWith = dual<
  <B, R2, A, C>(
    schedule: Schedule.Schedule<B, unknown, R2>,
    options: {
      readonly onElement: (a: A) => C
      readonly onSchedule: (b: B) => C
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<C, E, R2 | R>,
  <A, E, R, B, R2, C>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>,
    options: {
      readonly onElement: (a: A) => C
      readonly onSchedule: (b: B) => C
    }
  ) => Stream.Stream<C, E, R2 | R>
>(
  3,
  <A, E, R, B, R2, C>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>,
    options: {
      readonly onElement: (a: A) => C
      readonly onSchedule: (b: B) => C
    }
  ): Stream.Stream<C, E, R | R2> => {
    const driver = pipe(
      Schedule.driver(schedule),
      Effect.map((driver) => {
        const feed = (
          input: Chunk.Chunk<A>
        ): Channel.Channel<Chunk.Chunk<C>, Chunk.Chunk<A>, E, E, void, unknown, R2> =>
          Option.match(Chunk.head(input), {
            onNone: () => loop,
            onSome: (a) =>
              channel.zipRight(
                core.write(Chunk.of(options.onElement(a))),
                step(pipe(input, Chunk.drop(1)), a)
              )
          })
        const step = (
          input: Chunk.Chunk<A>,
          a: A
        ): Channel.Channel<Chunk.Chunk<C>, Chunk.Chunk<A>, E, E, void, unknown, R2> => {
          const advance = pipe(
            driver.next(a),
            Effect.as(pipe(core.write(Chunk.of(options.onElement(a))), core.flatMap(() => step(input, a))))
          )
          const reset: Effect.Effect<
            Channel.Channel<Chunk.Chunk<C>, Chunk.Chunk<A>, E, E, void, unknown, R2>,
            never,
            R2
          > = pipe(
            driver.last,
            Effect.orDie,
            Effect.flatMap((b) =>
              pipe(
                driver.reset,
                Effect.map(() =>
                  pipe(
                    core.write(Chunk.of(options.onSchedule(b))),
                    channel.zipRight(feed(input))
                  )
                )
              )
            )
          )
          return pipe(advance, Effect.orElse(() => reset), channel.unwrap)
        }
        const loop: Channel.Channel<Chunk.Chunk<C>, Chunk.Chunk<A>, E, E, void, unknown, R2> = core.readWith({
          onInput: feed,
          onFailure: core.fail,
          onDone: () => core.void
        })
        return loop
      }),
      channel.unwrap
    )
    return new StreamImpl(pipe(toChannel(self), core.pipeTo(driver)))
  }
)

/** @internal */
export const repeatValue = <A>(value: A): Stream.Stream<A> =>
  new StreamImpl(
    channel.repeated(core.write(Chunk.of(value)))
  )

/** @internal */
export const repeatWith = dual<
  <B, R2, A, C>(
    schedule: Schedule.Schedule<B, unknown, R2>,
    options: {
      readonly onElement: (a: A) => C
      readonly onSchedule: (b: B) => C
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<C, E, R2 | R>,
  <A, E, R, B, R2, C>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>,
    options: {
      readonly onElement: (a: A) => C
      readonly onSchedule: (b: B) => C
    }
  ) => Stream.Stream<C, E, R2 | R>
>(
  3,
  <A, E, R, B, R2, C>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>,
    options: {
      readonly onElement: (a: A) => C
      readonly onSchedule: (b: B) => C
    }
  ): Stream.Stream<C, E, R | R2> => {
    return pipe(
      Schedule.driver(schedule),
      Effect.map((driver) => {
        const provideLastIterationInfo = provideServiceEffect(
          Schedule.CurrentIterationMetadata,
          Ref.get(driver.iterationMeta)
        )

        const process = pipe(self, provideLastIterationInfo, map(options.onElement), toChannel)
        const loop: Channel.Channel<Chunk.Chunk<C>, unknown, E, unknown, void, unknown, R | R2> = channel.unwrap(
          Effect.match(
            driver.next(void 0),
            {
              onFailure: () => core.void,
              onSuccess: (output) =>
                core.flatMap(
                  process,
                  () => channel.zipRight(core.write(Chunk.of(options.onSchedule(output))), loop)
                )
            }
          )
        )
        return new StreamImpl(channel.zipRight(process, loop))
      }),
      unwrap
    )
  }
)

const repeatWithSchedule = <A, R, X>(
  value: A,
  schedule: Schedule.Schedule<X, A, R>
): Stream.Stream<A, never, R> => repeatEffectWithSchedule(Effect.succeed(value), schedule)

/** @internal */
export const repeatEffectWithSchedule = <A, E, R, X, A0 extends A, R2>(
  effect: Effect.Effect<A, E, R>,
  schedule: Schedule.Schedule<X, A0, R2>
): Stream.Stream<A, E, R | R2> =>
  flatMap(
    fromEffect(Effect.zip(effect, Schedule.driver(schedule))),
    ([a, driver]) => {
      const provideLastIterationInfo = Effect.provideServiceEffect(
        Schedule.CurrentIterationMetadata,
        Ref.get(driver.iterationMeta)
      )
      return concat(
        succeed(a),
        unfoldEffect(a, (s) =>
          Effect.matchEffect(driver.next(s as A0), {
            onFailure: Effect.succeed,
            onSuccess: () =>
              Effect.map(provideLastIterationInfo(effect), (nextA) => Option.some([nextA, nextA] as const))
          }))
      )
    }
  )

/** @internal */
export const retry = dual<
  <E, R2, X>(
    policy: Schedule.Schedule<X, Types.NoInfer<E>, R2>
  ) => <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R2 | R>,
  <A, E, R, X, R2>(
    self: Stream.Stream<A, E, R>,
    policy: Schedule.Schedule<X, Types.NoInfer<E>, R2>
  ) => Stream.Stream<A, E, R2 | R>
>(
  2,
  <A, E, R, X, R2>(
    self: Stream.Stream<A, E, R>,
    policy: Schedule.Schedule<X, Types.NoInfer<E>, R2>
  ): Stream.Stream<A, E, R2 | R> =>
    Schedule.driver(policy).pipe(
      Effect.map((driver) => {
        const provideLastIterationInfo = provideServiceEffect(
          Schedule.CurrentIterationMetadata,
          Ref.get(driver.iterationMeta)
        )

        const loop: Channel.Channel<
          Chunk.Chunk<A>,
          unknown,
          E,
          unknown,
          unknown,
          unknown,
          R2 | R
        > = toChannel(provideLastIterationInfo(self)).pipe(
          channel.mapOutEffect((out) => Effect.as(driver.reset, out)),
          channel.catchAll((error) =>
            driver.next(error).pipe(
              Effect.match({
                onFailure: () => core.fail(error),
                onSuccess: () => loop
              }),
              channel.unwrap
            )
          )
        )
        return loop
      }),
      channel.unwrap,
      fromChannel
    )
)

/** @internal */
export const withExecutionPlan: {
  <Input, R2, Provides, PolicyE>(
    policy: ExecutionPlan<{
      provides: Provides
      input: Input
      error: PolicyE
      requirements: R2
    }>,
    options?: {
      readonly preventFallbackOnPartialStream?: boolean | undefined
    }
  ): <A, E extends Input, R>(
    self: Stream.Stream<A, E, R>
  ) => Stream.Stream<A, E | PolicyE, R2 | Exclude<R, Provides>>
  <A, E extends Input, R, R2, Input, Provides, PolicyE>(
    self: Stream.Stream<A, E, R>,
    policy: ExecutionPlan<{
      provides: Provides
      input: Input
      error: PolicyE
      requirements: R2
    }>,
    options?: {
      readonly preventFallbackOnPartialStream?: boolean | undefined
    }
  ): Stream.Stream<A, E | PolicyE, R2 | Exclude<R, Provides>>
} = dual((args) => isStream(args[0]), <A, E extends Input, R, R2, Input, Provides, PolicyE>(
  self: Stream.Stream<A, E, R>,
  policy: ExecutionPlan<{
    provides: Provides
    input: Input
    error: PolicyE
    requirements: R2
  }>,
  options?: {
    readonly preventFallbackOnPartialStream?: boolean | undefined
  }
): Stream.Stream<A, E | PolicyE, R2 | Exclude<R, Provides>> =>
  suspend(() => {
    const preventFallbackOnPartialStream = options?.preventFallbackOnPartialStream ?? false
    let i = 0
    let lastError = Option.none<E | PolicyE>()
    const loop: Stream.Stream<
      A,
      E | PolicyE,
      R2 | Exclude<R, Provides>
    > = suspend(() => {
      const step = policy.steps[i++]
      if (!step) {
        return fail(Option.getOrThrow(lastError))
      }

      let nextStream: Stream.Stream<A, E | PolicyE, R2 | Exclude<R, Provides>> = Context.isContext(step.provide)
        ? provideSomeContext(self, step.provide)
        : provideSomeLayer(self, step.provide as Layer.Layer<Provides, E | PolicyE, R2>)
      let receivedElements = false

      if (Option.isSome(lastError)) {
        const error = lastError.value
        let attempted = false
        const wrapped = nextStream
        // ensure the schedule is applied at least once
        nextStream = suspend(() => {
          if (attempted) return wrapped
          attempted = true
          return fail(error)
        })
        nextStream = scheduleDefectRefail(retry(nextStream, internalExecutionPlan.scheduleFromStep(step, false)!))
      } else {
        const schedule = internalExecutionPlan.scheduleFromStep(step, true)
        nextStream = schedule ? scheduleDefectRefail(retry(nextStream, schedule)) : nextStream
      }

      return catchAll(
        preventFallbackOnPartialStream ?
          mapChunks(nextStream, (chunk) => {
            receivedElements = true
            return chunk
          }) :
          nextStream,
        (error) => {
          if (preventFallbackOnPartialStream && receivedElements) {
            return fail(error)
          }
          lastError = Option.some(error)
          return loop
        }
      )
    })
    return loop
  }))

const scheduleDefectRefail = <A, E, R>(self: Stream.Stream<A, E, R>) =>
  catchAllCause(self, (cause) => failCause(InternalSchedule.scheduleDefectRefailCause(cause)))

/** @internal */
export const run = dual<
  <A2, A, E2, R2>(
    sink: Sink.Sink<A2, A, unknown, E2, R2>
  ) => <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<A2, E2 | E, R | R2>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<A2, A, unknown, E2, R2>
  ) => Effect.Effect<A2, E2 | E, R | R2>
>(2, <A, E, R, A2, E2, R2>(
  self: Stream.Stream<A, E, R>,
  sink: Sink.Sink<A2, A, unknown, E2, R2>
): Effect.Effect<A2, E2 | E, R | R2> =>
  toChannel(self).pipe(
    channel.pipeToOrFail(sink_.toChannel(sink)),
    channel.runDrain
  ))

/** @internal */
export const runCollect = <A, E, R>(
  self: Stream.Stream<A, E, R>
): Effect.Effect<Chunk.Chunk<A>, E, R> => run(self, sink_.collectAll())

/** @internal */
export const runCount = <A, E, R>(self: Stream.Stream<A, E, R>): Effect.Effect<number, E, R> => run(self, sink_.count)

/** @internal */
export const runDrain = <A, E, R>(self: Stream.Stream<A, E, R>): Effect.Effect<void, E, R> => run(self, sink_.drain)

/** @internal */
export const runFold = dual<
  <S, A>(
    s: S,
    f: (s: S, a: A) => S
  ) => <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<S, E, R>,
  <A, E, R, S>(
    self: Stream.Stream<A, E, R>,
    s: S,
    f: (s: S, a: A) => S
  ) => Effect.Effect<S, E, R>
>(
  3,
  <A, E, R, S>(self: Stream.Stream<A, E, R>, s: S, f: (s: S, a: A) => S): Effect.Effect<S, E, R> =>
    runFoldWhile(self, s, constTrue, f)
)

/** @internal */
export const runFoldEffect = dual<
  <S, A, E2, R2>(
    s: S,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<S, E2 | E, R | R2>,
  <A, E, R, S, E2, R2>(
    self: Stream.Stream<A, E, R>,
    s: S,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ) => Effect.Effect<S, E2 | E, R | R2>
>(3, <A, E, R, S, E2, R2>(
  self: Stream.Stream<A, E, R>,
  s: S,
  f: (s: S, a: A) => Effect.Effect<S, E2, R2>
): Effect.Effect<S, E2 | E, R | R2> => runFoldWhileEffect(self, s, constTrue, f))

/** @internal */
export const runFoldScoped = dual<
  <S, A>(s: S, f: (s: S, a: A) => S) => <E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<S, E, Scope.Scope | R>,
  <A, E, R, S>(self: Stream.Stream<A, E, R>, s: S, f: (s: S, a: A) => S) => Effect.Effect<S, E, Scope.Scope | R>
>(
  3,
  <A, E, R, S>(self: Stream.Stream<A, E, R>, s: S, f: (s: S, a: A) => S): Effect.Effect<S, E, Scope.Scope | R> =>
    pipe(self, runFoldWhileScoped(s, constTrue, f))
)

/** @internal */
export const runFoldScopedEffect = dual<
  <S, A, E2, R2>(
    s: S,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<S, E2 | E, Scope.Scope | R2 | R>,
  <A, E, R, S, E2, R2>(
    self: Stream.Stream<A, E, R>,
    s: S,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ) => Effect.Effect<S, E2 | E, Scope.Scope | R2 | R>
>(3, <A, E, R, S, E2, R2>(
  self: Stream.Stream<A, E, R>,
  s: S,
  f: (s: S, a: A) => Effect.Effect<S, E2, R2>
): Effect.Effect<S, E2 | E, Scope.Scope | R2 | R> => pipe(self, runFoldWhileScopedEffect(s, constTrue, f)))

/** @internal */
export const runFoldWhile = dual<
  <S, A>(
    s: S,
    cont: Predicate<S>,
    f: (s: S, a: A) => S
  ) => <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<S, E, R>,
  <A, E, R, S>(
    self: Stream.Stream<A, E, R>,
    s: S,
    cont: Predicate<S>,
    f: (s: S, a: A) => S
  ) => Effect.Effect<S, E, R>
>(4, <A, E, R, S>(
  self: Stream.Stream<A, E, R>,
  s: S,
  cont: Predicate<S>,
  f: (s: S, a: A) => S
): Effect.Effect<S, E, R> => run(self, sink_.fold(s, cont, f)))

/** @internal */
export const runFoldWhileEffect = dual<
  <S, A, E2, R2>(
    s: S,
    cont: Predicate<S>,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ) => <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<S, E2 | E, R | R2>,
  <A, E, R, S, E2, R2>(
    self: Stream.Stream<A, E, R>,
    s: S,
    cont: Predicate<S>,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ) => Effect.Effect<S, E2 | E, R | R2>
>(4, <A, E, R, S, E2, R2>(
  self: Stream.Stream<A, E, R>,
  s: S,
  cont: Predicate<S>,
  f: (s: S, a: A) => Effect.Effect<S, E2, R2>
): Effect.Effect<S, E2 | E, R | R2> => run(self, sink_.foldEffect(s, cont, f)))

/** @internal */
export const runFoldWhileScoped = dual<
  <S, A>(
    s: S,
    cont: Predicate<S>,
    f: (s: S, a: A) => S
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<S, E, Scope.Scope | R>,
  <A, E, R, S>(
    self: Stream.Stream<A, E, R>,
    s: S,
    cont: Predicate<S>,
    f: (s: S, a: A) => S
  ) => Effect.Effect<S, E, Scope.Scope | R>
>(4, <A, E, R, S>(
  self: Stream.Stream<A, E, R>,
  s: S,
  cont: Predicate<S>,
  f: (s: S, a: A) => S
): Effect.Effect<S, E, Scope.Scope | R> => pipe(self, runScoped(sink_.fold(s, cont, f))))

/** @internal */
export const runFoldWhileScopedEffect = dual<
  <S, A, E2, R2>(
    s: S,
    cont: Predicate<S>,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<S, E2 | E, Scope.Scope | R2 | R>,
  <A, E, R, S, E2, R2>(
    self: Stream.Stream<A, E, R>,
    s: S,
    cont: Predicate<S>,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ) => Effect.Effect<S, E2 | E, Scope.Scope | R2 | R>
>(4, <A, E, R, S, E2, R2>(
  self: Stream.Stream<A, E, R>,
  s: S,
  cont: Predicate<S>,
  f: (s: S, a: A) => Effect.Effect<S, E2, R2>
): Effect.Effect<S, E2 | E, Scope.Scope | R2 | R> => pipe(self, runScoped(sink_.foldEffect(s, cont, f))))

/** @internal */
export const runForEach = dual<
  <A, X, E2, R2>(
    f: (a: A) => Effect.Effect<X, E2, R2>
  ) => <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<void, E2 | E, R | R2>,
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<X, E2, R2>
  ) => Effect.Effect<void, E2 | E, R | R2>
>(2, <A, E, R, X, E2, R2>(
  self: Stream.Stream<A, E, R>,
  f: (a: A) => Effect.Effect<X, E2, R2>
): Effect.Effect<void, E2 | E, R | R2> => run(self, sink_.forEach(f)))

/** @internal */
export const runForEachChunk = dual<
  <A, X, E2, R2>(
    f: (a: Chunk.Chunk<A>) => Effect.Effect<X, E2, R2>
  ) => <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<void, E2 | E, R | R2>,
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: Chunk.Chunk<A>) => Effect.Effect<X, E2, R2>
  ) => Effect.Effect<void, E2 | E, R | R2>
>(2, <A, E, R, X, E2, R2>(
  self: Stream.Stream<A, E, R>,
  f: (a: Chunk.Chunk<A>) => Effect.Effect<X, E2, R2>
): Effect.Effect<void, E2 | E, R | R2> => run(self, sink_.forEachChunk(f)))

/** @internal */
export const runForEachChunkScoped = dual<
  <A, X, E2, R2>(
    f: (a: Chunk.Chunk<A>) => Effect.Effect<X, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<void, E2 | E, Scope.Scope | R2 | R>,
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: Chunk.Chunk<A>) => Effect.Effect<X, E2, R2>
  ) => Effect.Effect<void, E2 | E, Scope.Scope | R2 | R>
>(2, <A, E, R, X, E2, R2>(
  self: Stream.Stream<A, E, R>,
  f: (a: Chunk.Chunk<A>) => Effect.Effect<X, E2, R2>
): Effect.Effect<void, E2 | E, Scope.Scope | R2 | R> => pipe(self, runScoped(sink_.forEachChunk(f))))

/** @internal */
export const runForEachScoped = dual<
  <A, X, E2, R2>(
    f: (a: A) => Effect.Effect<X, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<void, E2 | E, R2 | R | Scope.Scope>,
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<X, E2, R2>
  ) => Effect.Effect<void, E2 | E, R2 | R | Scope.Scope>
>(2, <A, E, R, X, E2, R2>(
  self: Stream.Stream<A, E, R>,
  f: (a: A) => Effect.Effect<X, E2, R2>
): Effect.Effect<void, E2 | E, R2 | R | Scope.Scope> => pipe(self, runScoped(sink_.forEach(f))))

/** @internal */
export const runForEachWhile = dual<
  <A, E2, R2>(
    f: (a: A) => Effect.Effect<boolean, E2, R2>
  ) => <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<void, E2 | E, R | R2>,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<boolean, E2, R2>
  ) => Effect.Effect<void, E2 | E, R | R2>
>(2, <A, E, R, E2, R2>(
  self: Stream.Stream<A, E, R>,
  f: (a: A) => Effect.Effect<boolean, E2, R2>
): Effect.Effect<void, E2 | E, R | R2> => run(self, sink_.forEachWhile(f)))

/** @internal */
export const runForEachWhileScoped = dual<
  <A, E2, R2>(
    f: (a: A) => Effect.Effect<boolean, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<void, E2 | E, R2 | R | Scope.Scope>,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<boolean, E2, R2>
  ) => Effect.Effect<void, E2 | E, R2 | R | Scope.Scope>
>(2, <A, E, R, E2, R2>(
  self: Stream.Stream<A, E, R>,
  f: (a: A) => Effect.Effect<boolean, E2, R2>
): Effect.Effect<void, E2 | E, R2 | R | Scope.Scope> => pipe(self, runScoped(sink_.forEachWhile(f))))

/** @internal */
export const runHead = <A, E, R>(
  self: Stream.Stream<A, E, R>
): Effect.Effect<Option.Option<A>, E, R> => run(self, sink_.head<A>())

/** @internal */
export const runIntoPubSub = dual<
  <A, E>(
    pubsub: PubSub.PubSub<Take.Take<A, E>>
  ) => <R>(self: Stream.Stream<A, E, R>) => Effect.Effect<void, never, Exclude<R, Scope.Scope>>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    pubsub: PubSub.PubSub<Take.Take<A, E>>
  ) => Effect.Effect<void, never, Exclude<R, Scope.Scope>>
>(
  2,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    pubsub: PubSub.PubSub<Take.Take<A, E>>
  ): Effect.Effect<void, never, Exclude<R, Scope.Scope>> => pipe(self, runIntoQueue(pubsub))
)

/** @internal */
export const runIntoPubSubScoped = dual<
  <A, E>(
    pubsub: PubSub.PubSub<Take.Take<A, E>>
  ) => <R>(self: Stream.Stream<A, E, R>) => Effect.Effect<void, never, Scope.Scope | R>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    pubsub: PubSub.PubSub<Take.Take<A, E>>
  ) => Effect.Effect<void, never, Scope.Scope | R>
>(2, <A, E, R>(
  self: Stream.Stream<A, E, R>,
  pubsub: PubSub.PubSub<Take.Take<A, E>>
): Effect.Effect<void, never, Scope.Scope | R> => pipe(self, runIntoQueueScoped(pubsub)))

/** @internal */
export const runIntoQueue = dual<
  <A, E>(
    queue: Queue.Enqueue<Take.Take<A, E>>
  ) => <R>(self: Stream.Stream<A, E, R>) => Effect.Effect<void, never, Exclude<R, Scope.Scope>>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    queue: Queue.Enqueue<Take.Take<A, E>>
  ) => Effect.Effect<void, never, Exclude<R, Scope.Scope>>
>(
  2,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    queue: Queue.Enqueue<Take.Take<A, E>>
  ): Effect.Effect<void, never, Exclude<R, Scope.Scope>> => pipe(self, runIntoQueueScoped(queue), Effect.scoped)
)

/** @internal */
export const runIntoQueueElementsScoped = dual<
  <A, E>(
    queue: Queue.Enqueue<Exit.Exit<A, Option.Option<E>>>
  ) => <R>(self: Stream.Stream<A, E, R>) => Effect.Effect<void, never, Scope.Scope | R>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    queue: Queue.Enqueue<Exit.Exit<A, Option.Option<E>>>
  ) => Effect.Effect<void, never, Scope.Scope | R>
>(2, <A, E, R>(
  self: Stream.Stream<A, E, R>,
  queue: Queue.Enqueue<Exit.Exit<A, Option.Option<E>>>
): Effect.Effect<void, never, Scope.Scope | R> => {
  const writer: Channel.Channel<Exit.Exit<A, Option.Option<E>>, Chunk.Chunk<A>, never, E, unknown, unknown, R> = core
    .readWithCause({
      onInput: (input: Chunk.Chunk<A>) =>
        core.flatMap(
          core.fromEffect(Queue.offerAll(queue, Chunk.map(input, Exit.succeed))),
          () => writer
        ),
      onFailure: (cause) => core.fromEffect(Queue.offer(queue, Exit.failCause(Cause.map(cause, Option.some)))),
      onDone: () => core.fromEffect(Queue.offer(queue, Exit.fail(Option.none())))
    })
  return pipe(
    core.pipeTo(toChannel(self), writer),
    channel.drain,
    channel.runScoped,
    Effect.asVoid
  )
})

/** @internal */
export const runIntoQueueScoped = dual<
  <A, E>(
    queue: Queue.Enqueue<Take.Take<A, E>>
  ) => <R>(self: Stream.Stream<A, E, R>) => Effect.Effect<void, never, Scope.Scope | R>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    queue: Queue.Enqueue<Take.Take<A, E>>
  ) => Effect.Effect<void, never, Scope.Scope | R>
>(2, <A, E, R>(
  self: Stream.Stream<A, E, R>,
  queue: Queue.Enqueue<Take.Take<A, E>>
): Effect.Effect<void, never, Scope.Scope | R> => {
  const writer: Channel.Channel<Take.Take<A, E>, Chunk.Chunk<A>, never, E, unknown, unknown, R> = core
    .readWithCause({
      onInput: (input: Chunk.Chunk<A>) => core.flatMap(core.write(InternalTake.chunk(input)), () => writer),
      onFailure: (cause) => core.write(InternalTake.failCause(cause)),
      onDone: () => core.write(InternalTake.end)
    })
  return pipe(
    core.pipeTo(toChannel(self), writer),
    channel.mapOutEffect((take) => Queue.offer(queue, take)),
    channel.drain,
    channel.runScoped,
    Effect.asVoid
  )
})

/** @internal */
export const runLast = <A, E, R>(
  self: Stream.Stream<A, E, R>
): Effect.Effect<Option.Option<A>, E, R> => run(self, sink_.last())

/** @internal */
export const runScoped = dual<
  <A2, A, E2, R2>(
    sink: Sink.Sink<A2, A, unknown, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<A2, E | E2, R | R2 | Scope.Scope>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<A2, A, unknown, E2, R2>
  ) => Effect.Effect<A2, E | E2, R | R2 | Scope.Scope>
>(2, <A, E, R, A2, E2, R2>(
  self: Stream.Stream<A, E, R>,
  sink: Sink.Sink<A2, A, unknown, E2, R2>
): Effect.Effect<A2, E | E2, R | R2 | Scope.Scope> =>
  pipe(
    toChannel(self),
    channel.pipeToOrFail(sink_.toChannel(sink)),
    channel.drain,
    channel.runScoped
  ))

/** @internal */
export const runSum = <E, R>(self: Stream.Stream<number, E, R>): Effect.Effect<number, E, R> => run(self, sink_.sum)

/** @internal */
export const scan = dual<
  <S, A>(s: S, f: (s: S, a: A) => S) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<S, E, R>,
  <A, E, R, S>(self: Stream.Stream<A, E, R>, s: S, f: (s: S, a: A) => S) => Stream.Stream<S, E, R>
>(
  3,
  <A, E, R, S>(self: Stream.Stream<A, E, R>, s: S, f: (s: S, a: A) => S): Stream.Stream<S, E, R> =>
    pipe(self, scanEffect(s, (s, a) => Effect.succeed(f(s, a))))
)

/** @internal */
export const scanReduce = dual<
  <A2, A>(f: (a2: A2 | A, a: A) => A2) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E, R>,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, f: (a2: A2 | A, a: A) => A2) => Stream.Stream<A2 | A, E, R>
>(
  2,
  <A, E, R, A2>(self: Stream.Stream<A, E, R>, f: (a2: A | A2, a: A) => A2): Stream.Stream<A | A2, E, R> =>
    pipe(self, scanReduceEffect((a2, a) => Effect.succeed(f(a2, a))))
)

/** @internal */
export const scanReduceEffect = dual<
  <A2, A, E2, R2>(
    f: (a2: A2 | A, a: A) => Effect.Effect<A2 | A, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a2: A2 | A, a: A) => Effect.Effect<A2 | A, E2, R2>
  ) => Stream.Stream<A2 | A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a2: A | A2, a: A) => Effect.Effect<A2 | A, E2, R2>
  ): Stream.Stream<A2 | A, E2 | E, R2 | R> =>
    pipe(
      self,
      mapAccumEffect<Option.Option<A | A2>, A, A | A2, E2, R2>(Option.none() as Option.Option<A | A2>, (option, a) => {
        switch (option._tag) {
          case "None": {
            return Effect.succeed([Option.some<A | A2>(a), a] as const)
          }
          case "Some": {
            return pipe(
              f(option.value, a),
              Effect.map((b) => [Option.some<A | A2>(b), b] as const)
            )
          }
        }
      })
    )
)

/** @internal */
export const schedule = dual<
  <X, A0 extends A, R2, A>(
    schedule: Schedule.Schedule<X, A0, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R2 | R>,
  <A, E, R, X, A0 extends A, R2>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<X, A0, R2>
  ) => Stream.Stream<A, E, R2 | R>
>(
  2,
  <A, E, R, X, A0 extends A, R2>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<X, A0, R2>
  ): Stream.Stream<A, E, R | R2> =>
    filterMap(
      scheduleWith(self, schedule, { onElement: Option.some, onSchedule: Option.none }),
      identity
    )
)

/** @internal */
export const scheduleWith = dual<
  <B, A0 extends A, R2, A, C>(
    schedule: Schedule.Schedule<B, A0, R2>,
    options: {
      readonly onElement: (a: A) => C
      readonly onSchedule: (b: B) => C
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<C, E, R2 | R>,
  <A, E, R, B, A0 extends A, R2, C>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, A0, R2>,
    options: {
      readonly onElement: (a: A) => C
      readonly onSchedule: (b: B) => C
    }
  ) => Stream.Stream<C, E, R2 | R>
>(
  3,
  <A, E, R, B, A0 extends A, R2, C>(
    self: Stream.Stream<A, E, R>,
    schedule: Schedule.Schedule<B, A0, R2>,
    options: {
      readonly onElement: (a: A) => C
      readonly onSchedule: (b: B) => C
    }
  ): Stream.Stream<C, E, R | R2> => {
    const loop = (
      driver: Schedule.ScheduleDriver<B, A0, R2>,
      iterator: Iterator<A>
    ): Channel.Channel<Chunk.Chunk<C>, Chunk.Chunk<A>, E, E, unknown, unknown, R2> => {
      const next = iterator.next()
      if (next.done) {
        return core.readWithCause({
          onInput: (chunk: Chunk.Chunk<A>) => loop(driver, chunk[Symbol.iterator]()),
          onFailure: core.failCause,
          onDone: core.succeedNow
        })
      }
      return channel.unwrap(
        Effect.matchEffect(driver.next(next.value as A0), {
          onFailure: () =>
            pipe(
              driver.last,
              Effect.orDie,
              Effect.map((b) =>
                pipe(
                  core.write(Chunk.make(options.onElement(next.value), options.onSchedule(b))),
                  core.flatMap(() => loop(driver, iterator))
                )
              ),
              Effect.zipLeft(driver.reset)
            ),
          onSuccess: () =>
            Effect.succeed(pipe(
              core.write(Chunk.of(options.onElement(next.value))),
              core.flatMap(() => loop(driver, iterator))
            ))
        })
      )
    }
    return new StreamImpl(
      pipe(
        core.fromEffect(Schedule.driver(schedule)),
        core.flatMap((driver) =>
          pipe(
            toChannel(self),
            core.pipeTo(loop(driver, Chunk.empty<A>()[Symbol.iterator]()))
          )
        )
      )
    )
  }
)

/** @internal */
export const scanEffect = dual<
  <S, A, E2, R2>(
    s: S,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<S, E2 | E, R2 | R>,
  <A, E, R, S, E2, R2>(
    self: Stream.Stream<A, E, R>,
    s: S,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ) => Stream.Stream<S, E2 | E, R2 | R>
>(
  3,
  <A, E, R, S, E2, R2>(
    self: Stream.Stream<A, E, R>,
    s: S,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ): Stream.Stream<S, E2 | E, R2 | R> =>
    new StreamImpl(
      pipe(
        core.write(Chunk.of(s)),
        core.flatMap(() =>
          toChannel(pipe(
            self,
            mapAccumEffect(s, (s, a) => pipe(f(s, a), Effect.map((s) => [s, s])))
          ))
        )
      )
    )
)

/** @internal */
export const scoped = <A, E, R>(
  effect: Effect.Effect<A, E, R>
): Stream.Stream<A, E, Exclude<R, Scope.Scope>> =>
  new StreamImpl(channel.ensuring(channel.scoped(pipe(effect, Effect.map(Chunk.of))), Effect.void))

/** @internal */
export const scopedWith = <A, E, R>(
  f: (scope: Scope.Scope) => Effect.Effect<A, E, R>
): Stream.Stream<A, E, R> =>
  new StreamImpl(channel.scopedWith((scope) =>
    f(scope).pipe(
      Effect.map(Chunk.of)
    )
  ))

/** @internal */
export const some = <A, E, R>(self: Stream.Stream<Option.Option<A>, E, R>): Stream.Stream<A, Option.Option<E>, R> =>
  pipe(self, mapError(Option.some), someOrFail(() => Option.none()))

/** @internal */
export const someOrElse = dual<
  <A2>(fallback: LazyArg<A2>) => <A, E, R>(self: Stream.Stream<Option.Option<A>, E, R>) => Stream.Stream<A2 | A, E, R>,
  <A, E, R, A2>(self: Stream.Stream<Option.Option<A>, E, R>, fallback: LazyArg<A2>) => Stream.Stream<A2 | A, E, R>
>(
  2,
  <A, E, R, A2>(self: Stream.Stream<Option.Option<A>, E, R>, fallback: LazyArg<A2>): Stream.Stream<A | A2, E, R> =>
    pipe(self, map(Option.getOrElse(fallback)))
)

/** @internal */
export const someOrFail = dual<
  <E2>(error: LazyArg<E2>) => <A, E, R>(self: Stream.Stream<Option.Option<A>, E, R>) => Stream.Stream<A, E2 | E, R>,
  <A, E, R, E2>(self: Stream.Stream<Option.Option<A>, E, R>, error: LazyArg<E2>) => Stream.Stream<A, E2 | E, R>
>(
  2,
  <A, E, R, E2>(self: Stream.Stream<Option.Option<A>, E, R>, error: LazyArg<E2>): Stream.Stream<A, E | E2, R> =>
    mapEffectSequential(
      self,
      Option.match({
        onNone: () => Effect.failSync(error),
        onSome: Effect.succeed
      })
    )
)

/** @internal */
export const sliding = dual<
  (
    chunkSize: number
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<Chunk.Chunk<A>, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, chunkSize: number) => Stream.Stream<Chunk.Chunk<A>, E, R>
>(
  2,
  <A, E, R>(self: Stream.Stream<A, E, R>, chunkSize: number): Stream.Stream<Chunk.Chunk<A>, E, R> =>
    slidingSize(self, chunkSize, 1)
)

/** @internal */
export const slidingSize = dual<
  (
    chunkSize: number,
    stepSize: number
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<Chunk.Chunk<A>, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, chunkSize: number, stepSize: number) => Stream.Stream<Chunk.Chunk<A>, E, R>
>(
  3,
  <A, E, R>(self: Stream.Stream<A, E, R>, chunkSize: number, stepSize: number): Stream.Stream<Chunk.Chunk<A>, E, R> => {
    if (chunkSize <= 0 || stepSize <= 0) {
      return die(
        new Cause.IllegalArgumentException("Invalid bounds - `chunkSize` and `stepSize` must be greater than zero")
      )
    }
    return new StreamImpl(core.suspend(() => {
      const queue = new RingBuffer<A>(chunkSize)
      const emitOnStreamEnd = (
        queueSize: number,
        channelEnd: Channel.Channel<Chunk.Chunk<Chunk.Chunk<A>>, Chunk.Chunk<A>, E, E, unknown, unknown>
      ) => {
        if (queueSize < chunkSize) {
          const items = queue.toChunk()
          const result = Chunk.isEmpty(items) ? Chunk.empty<Chunk.Chunk<A>>() : Chunk.of(items)
          return pipe(core.write(result), core.flatMap(() => channelEnd))
        }
        const lastEmitIndex = queueSize - (queueSize - chunkSize) % stepSize
        if (lastEmitIndex === queueSize) {
          return channelEnd
        }
        const leftovers = queueSize - (lastEmitIndex - chunkSize + stepSize)
        const lastItems = pipe(queue.toChunk(), Chunk.takeRight(leftovers))
        const result = Chunk.isEmpty(lastItems) ? Chunk.empty<Chunk.Chunk<A>>() : Chunk.of(lastItems)
        return pipe(core.write(result), core.flatMap(() => channelEnd))
      }
      const reader = (
        queueSize: number
      ): Channel.Channel<Chunk.Chunk<Chunk.Chunk<A>>, Chunk.Chunk<A>, E, E, unknown, unknown> =>
        core.readWithCause({
          onInput: (input: Chunk.Chunk<A>) =>
            core.flatMap(
              core.write(
                Chunk.filterMap(input, (element, index) => {
                  queue.put(element)
                  const currentIndex = queueSize + index + 1
                  if (currentIndex < chunkSize || (currentIndex - chunkSize) % stepSize > 0) {
                    return Option.none()
                  }
                  return Option.some(queue.toChunk())
                })
              ),
              () => reader(queueSize + input.length)
            ),
          onFailure: (cause) => emitOnStreamEnd(queueSize, core.failCause(cause)),
          onDone: () => emitOnStreamEnd(queueSize, core.void)
        })
      return pipe(toChannel(self), core.pipeTo(reader(0)))
    }))
  }
)

/** @internal */
export const split: {
  <A, B extends A>(
    refinement: Refinement<Types.NoInfer<A>, B>
  ): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<Chunk.Chunk<Exclude<A, B>>, E, R>
  <A>(
    predicate: Predicate<Types.NoInfer<A>>
  ): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<Chunk.Chunk<A>, E, R>
  <A, E, R, B extends A>(
    self: Stream.Stream<A, E, R>,
    refinement: Refinement<A, B>
  ): Stream.Stream<Chunk.Chunk<Exclude<A, B>>, E, R>
  <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>): Stream.Stream<Chunk.Chunk<A>, E, R>
} = dual(
  2,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    predicate: Predicate<A>
  ): Stream.Stream<Chunk.Chunk<A>, E, R> => {
    const split = (
      leftovers: Chunk.Chunk<A>,
      input: Chunk.Chunk<A>
    ): Channel.Channel<Chunk.Chunk<Chunk.Chunk<A>>, Chunk.Chunk<A>, E, E, unknown, unknown, R> => {
      const [chunk, remaining] = pipe(leftovers, Chunk.appendAll(input), Chunk.splitWhere(predicate))
      if (Chunk.isEmpty(chunk) || Chunk.isEmpty(remaining)) {
        return loop(pipe(chunk, Chunk.appendAll(pipe(remaining, Chunk.drop(1)))))
      }
      return pipe(
        core.write(Chunk.of(chunk)),
        core.flatMap(() => split(Chunk.empty(), pipe(remaining, Chunk.drop(1))))
      )
    }
    const loop = (
      leftovers: Chunk.Chunk<A>
    ): Channel.Channel<Chunk.Chunk<Chunk.Chunk<A>>, Chunk.Chunk<A>, E, E, unknown, unknown, R> =>
      core.readWith({
        onInput: (input: Chunk.Chunk<A>) => split(leftovers, input),
        onFailure: core.fail,
        onDone: () => {
          if (Chunk.isEmpty(leftovers)) {
            return core.void
          }
          if (Option.isNone(pipe(leftovers, Chunk.findFirst(predicate)))) {
            return channel.zipRight(core.write(Chunk.of(leftovers)), core.void)
          }
          return channel.zipRight(
            split(Chunk.empty(), leftovers),
            core.void
          )
        }
      })
    return new StreamImpl(pipe(toChannel(self), core.pipeTo(loop(Chunk.empty()))))
  }
)

/** @internal */
export const splitOnChunk = dual<
  <A>(delimiter: Chunk.Chunk<A>) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<Chunk.Chunk<A>, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, delimiter: Chunk.Chunk<A>) => Stream.Stream<Chunk.Chunk<A>, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, delimiter: Chunk.Chunk<A>): Stream.Stream<Chunk.Chunk<A>, E, R> => {
  const next = (
    leftover: Option.Option<Chunk.Chunk<A>>,
    delimiterIndex: number
  ): Channel.Channel<Chunk.Chunk<Chunk.Chunk<A>>, Chunk.Chunk<A>, E, E, unknown, unknown, R> =>
    core.readWithCause({
      onInput: (inputChunk: Chunk.Chunk<A>) => {
        let buffer: Array<Chunk.Chunk<A>> | undefined
        const [carry, delimiterCursor] = pipe(
          inputChunk,
          Chunk.reduce(
            [pipe(leftover, Option.getOrElse(() => Chunk.empty<A>())), delimiterIndex] as const,
            ([carry, delimiterCursor], a) => {
              const concatenated = pipe(carry, Chunk.append(a))
              if (
                delimiterCursor < delimiter.length &&
                Equal.equals(a, pipe(delimiter, Chunk.unsafeGet(delimiterCursor)))
              ) {
                if (delimiterCursor + 1 === delimiter.length) {
                  if (buffer === undefined) {
                    buffer = []
                  }
                  buffer.push(pipe(concatenated, Chunk.take(concatenated.length - delimiter.length)))
                  return [Chunk.empty<A>(), 0] as const
                }
                return [concatenated, delimiterCursor + 1] as const
              }
              return [concatenated, Equal.equals(a, pipe(delimiter, Chunk.unsafeGet(0))) ? 1 : 0] as const
            }
          )
        )
        const output = buffer === undefined ? Chunk.empty<Chunk.Chunk<A>>() : Chunk.unsafeFromArray(buffer)
        return core.flatMap(
          core.write(output),
          () => next(Chunk.isNonEmpty(carry) ? Option.some(carry) : Option.none(), delimiterCursor)
        )
      },
      onFailure: (cause) =>
        Option.match(leftover, {
          onNone: () => core.failCause(cause),
          onSome: (chunk) =>
            channel.zipRight(
              core.write(Chunk.of(chunk)),
              core.failCause(cause)
            )
        }),
      onDone: (done) =>
        Option.match(leftover, {
          onNone: () => core.succeed(done),
          onSome: (chunk) => channel.zipRight(core.write(Chunk.of(chunk)), core.succeed(done))
        })
    })
  return new StreamImpl(pipe(toChannel(self), core.pipeTo(next(Option.none(), 0))))
})

/** @internal */
export const splitLines = <E, R>(self: Stream.Stream<string, E, R>): Stream.Stream<string, E, R> =>
  pipeThroughChannel(self, channel.splitLines())

/** @internal */
export const succeed = <A>(value: A): Stream.Stream<A> => fromChunk(Chunk.of(value))

/** @internal */
export const sync = <A>(evaluate: LazyArg<A>): Stream.Stream<A> => suspend(() => fromChunk(Chunk.of(evaluate())))

/** @internal */
export const suspend = <A, E, R>(stream: LazyArg<Stream.Stream<A, E, R>>): Stream.Stream<A, E, R> =>
  new StreamImpl(core.suspend(() => toChannel(stream())))

/** @internal */
export const take = dual<
  (n: number) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, n: number) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, n: number): Stream.Stream<A, E, R> => {
  if (!Number.isInteger(n)) {
    return die(new Cause.IllegalArgumentException(`${n} must be an integer`))
  }
  const loop = (n: number): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, never, never, unknown, unknown> =>
    core.readWith({
      onInput: (input: Chunk.Chunk<A>) => {
        const taken = pipe(input, Chunk.take(Math.min(n, Number.POSITIVE_INFINITY)))
        const leftover = Math.max(0, n - taken.length)
        const more = leftover > 0
        if (more) {
          return pipe(core.write(taken), core.flatMap(() => loop(leftover)))
        }
        return core.write(taken)
      },
      onFailure: core.fail,
      onDone: core.succeed
    })
  return new StreamImpl(
    pipe(
      toChannel(self),
      channel.pipeToOrFail(0 < n ? loop(n) : core.void)
    )
  )
})

/** @internal */
export const takeRight = dual<
  (n: number) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, n: number) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, n: number): Stream.Stream<A, E, R> => {
  if (n <= 0) {
    return empty
  }
  return new StreamImpl(
    pipe(
      Effect.succeed(new RingBuffer<A>(n)),
      Effect.map((queue) => {
        const reader: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E, E, void, unknown> = core.readWith({
          onInput: (input: Chunk.Chunk<A>) => {
            for (const element of input) {
              queue.put(element)
            }
            return reader
          },
          onFailure: core.fail,
          onDone: () => pipe(core.write(queue.toChunk()), channel.zipRight(core.void))
        })
        return pipe(toChannel(self), core.pipeTo(reader))
      }),
      channel.unwrap
    )
  )
})

/** @internal */
export const takeUntil: {
  <A>(predicate: Predicate<Types.NoInfer<A>>): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>
  <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>): Stream.Stream<A, E, R>
} = dual(2, <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>): Stream.Stream<A, E, R> => {
  const loop: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, never, never, unknown, unknown> = core.readWith({
    onInput: (input: Chunk.Chunk<A>) => {
      const taken = pipe(input, Chunk.takeWhile((a) => !predicate(a)))
      const last = pipe(input, Chunk.drop(taken.length), Chunk.take(1))
      if (Chunk.isEmpty(last)) {
        return pipe(core.write(taken), core.flatMap(() => loop))
      }
      return core.write(pipe(taken, Chunk.appendAll(last)))
    },
    onFailure: core.fail,
    onDone: core.succeed
  })
  return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(loop)))
})

/** @internal */
export const takeUntilEffect: {
  <A, E2, R2>(
    predicate: (a: Types.NoInfer<A>) => Effect.Effect<boolean, E2, R2>
  ): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    predicate: (a: A) => Effect.Effect<boolean, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    predicate: (a: A) => Effect.Effect<boolean, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2> => {
    const loop = (
      iterator: Iterator<A>
    ): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R2> => {
      const next = iterator.next()
      if (next.done) {
        return core.readWithCause({
          onInput: (elem) => loop(elem[Symbol.iterator]()),
          onFailure: core.failCause,
          onDone: core.succeed
        })
      }
      return pipe(
        predicate(next.value),
        Effect.map((bool) =>
          bool ?
            core.write(Chunk.of(next.value)) :
            pipe(
              core.write(Chunk.of(next.value)),
              core.flatMap(() => loop(iterator))
            )
        ),
        channel.unwrap
      )
    }
    return new StreamImpl(pipe(toChannel(self), core.pipeTo(loop(Chunk.empty<A>()[Symbol.iterator]()))))
  }
)

/** @internal */
export const takeWhile: {
  <A, B extends A>(
    refinement: Refinement<Types.NoInfer<A>, B>
  ): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<B, E, R>
  <A>(predicate: Predicate<Types.NoInfer<A>>): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>
  <A, E, R, B extends A>(self: Stream.Stream<A, E, R>, refinement: Refinement<A, B>): Stream.Stream<B, E, R>
  <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>): Stream.Stream<A, E, R>
} = dual(2, <A, E, R>(self: Stream.Stream<A, E, R>, predicate: Predicate<A>): Stream.Stream<A, E, R> => {
  const loop: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, never, never, unknown, unknown> = core.readWith({
    onInput: (input: Chunk.Chunk<A>) => {
      const taken = pipe(input, Chunk.takeWhile(predicate))
      const more = taken.length === input.length
      if (more) {
        return pipe(core.write(taken), core.flatMap(() => loop))
      }
      return core.write(taken)
    },
    onFailure: core.fail,
    onDone: core.succeed
  })
  return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(loop)))
})

/** @internal */
export const tap: {
  <A, X, E2, R2>(
    f: (a: Types.NoInfer<A>) => Effect.Effect<X, E2, R2>
  ): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: Types.NoInfer<A>) => Effect.Effect<X, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: Types.NoInfer<A>) => Effect.Effect<X, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2> => mapEffectSequential(self, (a) => Effect.as(f(a), a))
)

/** @internal */
export const tapBoth: {
  <E, X1, E2, R2, A, X2, E3, R3>(
    options: {
      readonly onFailure: (e: Types.NoInfer<E>) => Effect.Effect<X1, E2, R2>
      readonly onSuccess: (a: Types.NoInfer<A>) => Effect.Effect<X2, E3, R3>
    }
  ): <R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E | E2 | E3, R | R2 | R3>
  <A, E, R, X1, E2, R2, X2, E3, R3>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly onFailure: (e: Types.NoInfer<E>) => Effect.Effect<X1, E2, R2>
      readonly onSuccess: (a: Types.NoInfer<A>) => Effect.Effect<X2, E3, R3>
    }
  ): Stream.Stream<A, E | E2 | E3, R | R2 | R3>
} = dual(
  2,
  <A, E, R, X1, E2, R2, X2, E3, R3>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly onFailure: (e: Types.NoInfer<E>) => Effect.Effect<X1, E2, R2>
      readonly onSuccess: (a: Types.NoInfer<A>) => Effect.Effect<X2, E3, R3>
    }
  ): Stream.Stream<A, E | E2 | E3, R | R2 | R3> => pipe(self, tapError(options.onFailure), tap(options.onSuccess))
)

/** @internal */
export const tapError: {
  <E, X, E2, R2>(
    f: (error: Types.NoInfer<E>) => Effect.Effect<X, E2, R2>
  ): <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E | E2, R2 | R>
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (error: E) => Effect.Effect<X, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (error: E) => Effect.Effect<X, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2> =>
    catchAll(self, (error) => fromEffect(Effect.zipRight(f(error), Effect.fail(error))))
)

/** @internal */
export const tapErrorCause: {
  <E, X, E2, R2>(
    f: (cause: Cause.Cause<Types.NoInfer<E>>) => Effect.Effect<X, E2, R2>
  ): <A, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E | E2, R2 | R>
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (cause: Cause.Cause<E>) => Effect.Effect<X, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, X, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (cause: Cause.Cause<E>) => Effect.Effect<X, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2> => {
    const loop: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R | R2> = core
      .readWithCause({
        onInput: (chunk) => core.flatMap(core.write(chunk), () => loop),
        onFailure: (cause) => core.fromEffect(Effect.zipRight(f(cause), Effect.failCause(cause))),
        onDone: core.succeedNow
      })

    return new StreamImpl(pipe(toChannel(self), core.pipeTo(loop)))
  }
)

/** @internal */
export const tapSink = dual<
  <A, E2, R2>(
    sink: Sink.Sink<unknown, A, unknown, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<unknown, A, unknown, E2, R2>
  ) => Stream.Stream<A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<unknown, A, unknown, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2> =>
    pipe(
      fromEffect(Effect.all([Queue.bounded<Take.Take<A, E | E2>>(1), Deferred.make<void>()])),
      flatMap(([queue, deferred]) => {
        const right = flattenTake(fromQueue(queue, { maxChunkSize: 1 }))
        const loop: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R2> = core
          .readWithCause({
            onInput: (chunk: Chunk.Chunk<A>) =>
              pipe(
                core.fromEffect(Queue.offer(queue, InternalTake.chunk(chunk))),
                core.foldCauseChannel({
                  onFailure: () => core.flatMap(core.write(chunk), () => channel.identityChannel()),
                  onSuccess: () => core.flatMap(core.write(chunk), () => loop)
                })
              ) as Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E, unknown, unknown, R2>,
            onFailure: (cause: Cause.Cause<E | E2>) =>
              pipe(
                core.fromEffect(Queue.offer(queue, InternalTake.failCause(cause))),
                core.foldCauseChannel({
                  onFailure: () => core.failCause(cause),
                  onSuccess: () => core.failCause(cause)
                })
              ),
            onDone: () =>
              pipe(
                core.fromEffect(Queue.offer(queue, InternalTake.end)),
                core.foldCauseChannel({
                  onFailure: () => core.void,
                  onSuccess: () => core.void
                })
              )
          })
        return pipe(
          new StreamImpl(pipe(
            core.pipeTo(toChannel(self), loop),
            channel.ensuring(Effect.zipRight(
              Effect.forkDaemon(Queue.offer(queue, InternalTake.end)),
              Deferred.await(deferred)
            ))
          )),
          merge(
            execute(pipe(
              run(right, sink),
              Effect.ensuring(Effect.zipRight(
                Queue.shutdown(queue),
                Deferred.succeed(deferred, void 0)
              ))
            ))
          )
        )
      })
    )
)

/** @internal */
export const throttle = dual<
  <A>(
    options: {
      readonly cost: (chunk: Chunk.Chunk<A>) => number
      readonly units: number
      readonly duration: Duration.DurationInput
      readonly burst?: number | undefined
      readonly strategy?: "enforce" | "shape" | undefined
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly cost: (chunk: Chunk.Chunk<A>) => number
      readonly units: number
      readonly duration: Duration.DurationInput
      readonly burst?: number | undefined
      readonly strategy?: "enforce" | "shape" | undefined
    }
  ) => Stream.Stream<A, E, R>
>(
  2,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly cost: (chunk: Chunk.Chunk<A>) => number
      readonly units: number
      readonly duration: Duration.DurationInput
      readonly burst?: number | undefined
      readonly strategy?: "enforce" | "shape" | undefined
    }
  ): Stream.Stream<A, E, R> =>
    throttleEffect(self, {
      ...options,
      cost: (chunk) => Effect.succeed(options.cost(chunk))
    })
)

/** @internal */
export const throttleEffect = dual<
  <A, E2, R2>(
    options: {
      readonly cost: (chunk: Chunk.Chunk<A>) => Effect.Effect<number, E2, R2>
      readonly units: number
      readonly duration: Duration.DurationInput
      readonly burst?: number | undefined
      readonly strategy?: "enforce" | "shape" | undefined
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly cost: (chunk: Chunk.Chunk<A>) => Effect.Effect<number, E2, R2>
      readonly units: number
      readonly duration: Duration.DurationInput
      readonly burst?: number | undefined
      readonly strategy?: "enforce" | "shape" | undefined
    }
  ) => Stream.Stream<A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly cost: (chunk: Chunk.Chunk<A>) => Effect.Effect<number, E2, R2>
      readonly units: number
      readonly duration: Duration.DurationInput
      readonly burst?: number | undefined
      readonly strategy?: "enforce" | "shape" | undefined
    }
  ): Stream.Stream<A, E | E2, R | R2> => {
    if (options.strategy === "enforce") {
      return throttleEnforceEffect(self, options.cost, options.units, options.duration, options.burst ?? 0)
    }
    return throttleShapeEffect(self, options.cost, options.units, options.duration, options.burst ?? 0)
  }
)

const throttleEnforceEffect = <A, E, R, E2, R2>(
  self: Stream.Stream<A, E, R>,
  cost: (chunk: Chunk.Chunk<A>) => Effect.Effect<number, E2, R2>,
  units: number,
  duration: Duration.DurationInput,
  burst: number
): Stream.Stream<A, E | E2, R | R2> => {
  const loop = (
    tokens: number,
    timestampMillis: number
  ): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E, void, unknown, R2> =>
    core.readWithCause({
      onInput: (input: Chunk.Chunk<A>) =>
        pipe(
          cost(input),
          Effect.zip(Clock.currentTimeMillis),
          Effect.map(([weight, currentTimeMillis]) => {
            const elapsed = currentTimeMillis - timestampMillis
            const cycles = elapsed / Duration.toMillis(duration)
            const sum = tokens + (cycles * units)
            const max = units + burst < 0 ? Number.POSITIVE_INFINITY : units + burst
            const available = sum < 0 ? max : Math.min(sum, max)
            if (weight <= available) {
              return pipe(
                core.write(input),
                core.flatMap(() => loop(available - weight, currentTimeMillis))
              )
            }
            return loop(tokens, timestampMillis)
          }),
          channel.unwrap
        ),
      onFailure: core.failCause,
      onDone: () => core.void
    })
  const throttled = pipe(
    Clock.currentTimeMillis,
    Effect.map((currentTimeMillis) => loop(units, currentTimeMillis)),
    channel.unwrap
  )
  return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(throttled)))
}

const throttleShapeEffect = <A, E, R, E2, R2>(
  self: Stream.Stream<A, E, R>,
  costFn: (chunk: Chunk.Chunk<A>) => Effect.Effect<number, E2, R2>,
  units: number,
  duration: Duration.DurationInput,
  burst: number
): Stream.Stream<A, E | E2, R | R2> => {
  const loop = (
    tokens: number,
    timestampMillis: number
  ): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E | E2, E, void, unknown, R2> =>
    core.readWithCause({
      onInput: (input: Chunk.Chunk<A>) =>
        pipe(
          costFn(input),
          Effect.zip(Clock.currentTimeMillis),
          Effect.map(([weight, currentTimeMillis]) => {
            const elapsed = currentTimeMillis - timestampMillis
            const cycles = elapsed / Duration.toMillis(duration)
            const sum = tokens + (cycles * units)
            const max = units + burst < 0 ? Number.POSITIVE_INFINITY : units + burst
            const available = sum < 0 ? max : Math.min(sum, max)
            const remaining = available - weight
            const waitCycles = remaining >= 0 ? 0 : -remaining / units
            const delay = Duration.millis(Math.max(0, waitCycles * Duration.toMillis(duration)))
            if (Duration.greaterThan(delay, Duration.zero)) {
              return pipe(
                core.fromEffect(Clock.sleep(delay)),
                channel.zipRight(core.write(input)),
                core.flatMap(() => loop(remaining, currentTimeMillis))
              )
            }
            return core.flatMap(
              core.write(input),
              () => loop(remaining, currentTimeMillis)
            )
          }),
          channel.unwrap
        ),
      onFailure: core.failCause,
      onDone: () => core.void
    })
  const throttled = pipe(
    Clock.currentTimeMillis,
    Effect.map((currentTimeMillis) => loop(units, currentTimeMillis)),
    channel.unwrap
  )
  return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(throttled)))
}

/** @internal */
export const tick = (interval: Duration.DurationInput): Stream.Stream<void> =>
  repeatWithSchedule(void 0, Schedule.spaced(interval))

/** @internal */
export const timeout = dual<
  (duration: Duration.DurationInput) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, duration: Duration.DurationInput) => Stream.Stream<A, E, R>
>(2, <A, E, R>(self: Stream.Stream<A, E, R>, duration: Duration.DurationInput): Stream.Stream<A, E, R> =>
  pipe(
    toPull(self),
    Effect.map(Effect.timeoutFail<Option.Option<E>>({
      onTimeout: () => Option.none(),
      duration
    })),
    fromPull
  ))

/** @internal */
export const timeoutFail = dual<
  <E2>(
    error: LazyArg<E2>,
    duration: Duration.DurationInput
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R>,
  <A, E, R, E2>(
    self: Stream.Stream<A, E, R>,
    error: LazyArg<E2>,
    duration: Duration.DurationInput
  ) => Stream.Stream<A, E2 | E, R>
>(
  3,
  <A, E, R, E2>(
    self: Stream.Stream<A, E, R>,
    error: LazyArg<E2>,
    duration: Duration.DurationInput
  ): Stream.Stream<A, E | E2, R> => pipe(self, timeoutTo(duration, failSync(error)))
)

/** @internal */
export const timeoutFailCause = dual<
  <E2>(
    cause: LazyArg<Cause.Cause<E2>>,
    duration: Duration.DurationInput
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R>,
  <A, E, R, E2>(
    self: Stream.Stream<A, E, R>,
    cause: LazyArg<Cause.Cause<E2>>,
    duration: Duration.DurationInput
  ) => Stream.Stream<A, E2 | E, R>
>(
  3,
  <A, E, R, E2>(
    self: Stream.Stream<A, E, R>,
    cause: LazyArg<Cause.Cause<E2>>,
    duration: Duration.DurationInput
  ): Stream.Stream<A, E | E2, R> =>
    pipe(
      toPull(self),
      Effect.map(
        Effect.timeoutFailCause<Option.Option<E | E2>>({
          onTimeout: () => Cause.map(cause(), Option.some),
          duration
        })
      ),
      fromPull
    )
)

/** @internal */
export const timeoutTo = dual<
  <A2, E2, R2>(
    duration: Duration.DurationInput,
    that: Stream.Stream<A2, E2, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2 | A, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    duration: Duration.DurationInput,
    that: Stream.Stream<A2, E2, R2>
  ) => Stream.Stream<A2 | A, E2 | E, R2 | R>
>(
  3,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    duration: Duration.DurationInput,
    that: Stream.Stream<A2, E2, R2>
  ): Stream.Stream<A2 | A, E2 | E, R2 | R> => {
    const StreamTimeout = new Cause.RuntimeException("Stream Timeout")
    return pipe(
      self,
      timeoutFailCause<E | E2>(() => Cause.die(StreamTimeout), duration),
      catchSomeCause((cause) =>
        Cause.isDieType(cause) &&
          Cause.isRuntimeException(cause.defect) &&
          cause.defect.message !== undefined &&
          cause.defect.message === "Stream Timeout" ?
          Option.some(that) :
          Option.none()
      )
    )
  }
)

const pubsubFromOptions = <A, E>(
  options: number | {
    readonly capacity: "unbounded"
    readonly replay?: number | undefined
  } | {
    readonly capacity: number
    readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
    readonly replay?: number | undefined
  }
): Effect.Effect<PubSub.PubSub<Take.Take<A, E>>> => {
  if (typeof options === "number") {
    return PubSub.bounded(options)
  } else if (options.capacity === "unbounded") {
    return PubSub.unbounded({ replay: options.replay })
  }
  switch (options.strategy) {
    case "dropping":
      return PubSub.dropping(options)
    case "sliding":
      return PubSub.sliding(options)
    default:
      return PubSub.bounded(options)
  }
}

/** @internal */
export const toPubSub = dual<
  (
    capacity: number | {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<PubSub.PubSub<Take.Take<A, E>>, never, Scope.Scope | R>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    capacity: number | {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ) => Effect.Effect<PubSub.PubSub<Take.Take<A, E>>, never, Scope.Scope | R>
>(2, <A, E, R>(
  self: Stream.Stream<A, E, R>,
  capacity: number | {
    readonly capacity: "unbounded"
    readonly replay?: number | undefined
  } | {
    readonly capacity: number
    readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
    readonly replay?: number | undefined
  }
): Effect.Effect<PubSub.PubSub<Take.Take<A, E>>, never, Scope.Scope | R> =>
  pipe(
    Effect.acquireRelease(pubsubFromOptions<A, E>(capacity), (pubsub) => PubSub.shutdown(pubsub)),
    Effect.tap((pubsub) => pipe(self, runIntoPubSubScoped(pubsub), Effect.forkScoped))
  ))

/** @internal */
export const toPull = <A, E, R>(
  self: Stream.Stream<A, E, R>
): Effect.Effect<Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R>, never, R | Scope.Scope> =>
  Effect.map(channel.toPull(toChannel(self)), (pull) =>
    pipe(
      pull,
      Effect.mapError(Option.some),
      Effect.flatMap(Either.match({
        onLeft: () => Effect.fail(Option.none()),
        onRight: Effect.succeed
      }))
    ))

/** @internal */
export const toQueue = dual<
  (
    options?: {
      readonly strategy?: "suspend" | "sliding" | "dropping" | undefined
      readonly capacity?: number | undefined
    } | {
      readonly strategy: "unbounded"
    }
  ) => <A, E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<Queue.Dequeue<Take.Take<A, E>>, never, R | Scope.Scope>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    options?: {
      readonly strategy?: "suspend" | "sliding" | "dropping" | undefined
      readonly capacity?: number | undefined
    } | {
      readonly strategy: "unbounded"
    }
  ) => Effect.Effect<Queue.Dequeue<Take.Take<A, E>>, never, R | Scope.Scope>
>((args) => isStream(args[0]), <A, E, R>(
  self: Stream.Stream<A, E, R>,
  options?: {
    readonly strategy?: "suspend" | "sliding" | "dropping" | undefined
    readonly capacity?: number | undefined
  } | {
    readonly strategy: "unbounded"
  }
) =>
  Effect.tap(
    Effect.acquireRelease(
      options?.strategy === "unbounded" ?
        Queue.unbounded<Take.Take<A, E>>() :
        options?.strategy === "dropping" ?
        Queue.dropping<Take.Take<A, E>>(options.capacity ?? 2) :
        options?.strategy === "sliding" ?
        Queue.sliding<Take.Take<A, E>>(options.capacity ?? 2) :
        Queue.bounded<Take.Take<A, E>>(options?.capacity ?? 2),
      (queue) => Queue.shutdown(queue)
    ),
    (queue) => Effect.forkScoped(runIntoQueueScoped(self, queue))
  ))

/** @internal */
export const toQueueOfElements = dual<
  (options?: {
    readonly capacity?: number | undefined
  }) => <A, E, R>(
    self: Stream.Stream<A, E, R>
  ) => Effect.Effect<Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>, never, R | Scope.Scope>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    options?: {
      readonly capacity?: number | undefined
    }
  ) => Effect.Effect<Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>, never, R | Scope.Scope>
>((args) => isStream(args[0]), <A, E, R>(
  self: Stream.Stream<A, E, R>,
  options?: {
    readonly capacity?: number | undefined
  }
) =>
  Effect.tap(
    Effect.acquireRelease(
      Queue.bounded<Exit.Exit<A, Option.Option<E>>>(options?.capacity ?? 2),
      (queue) => Queue.shutdown(queue)
    ),
    (queue) => Effect.forkScoped(runIntoQueueElementsScoped(self, queue))
  ))

/** @internal */
export const toReadableStream = dual<
  <A>(
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ) => <E>(self: Stream.Stream<A, E>) => ReadableStream<A>,
  <A, E>(
    self: Stream.Stream<A, E>,
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ) => ReadableStream<A>
>(
  (args) => isStream(args[0]),
  <A, E>(
    self: Stream.Stream<A, E>,
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ) => toReadableStreamRuntime(self, Runtime.defaultRuntime, options)
)

/** @internal */
export const toReadableStreamEffect = dual<
  <A>(
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Effect.Effect<ReadableStream<A>, never, R>,
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ) => Effect.Effect<ReadableStream<A>, never, R>
>(
  (args) => isStream(args[0]),
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ) => Effect.map(Effect.runtime<R>(), (runtime) => toReadableStreamRuntime(self, runtime, options))
)

/** @internal */
export const toReadableStreamRuntime = dual<
  <A, XR>(
    runtime: Runtime.Runtime<XR>,
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ) => <E, R extends XR>(self: Stream.Stream<A, E, R>) => ReadableStream<A>,
  <A, E, XR, R extends XR>(
    self: Stream.Stream<A, E, R>,
    runtime: Runtime.Runtime<XR>,
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ) => ReadableStream<A>
>(
  (args) => isStream(args[0]),
  <A, E, XR, R extends XR>(
    self: Stream.Stream<A, E, R>,
    runtime: Runtime.Runtime<XR>,
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ): ReadableStream<A> => {
    const runFork = Runtime.runFork(runtime)
    let currentResolve: (() => void) | undefined = undefined
    let fiber: Fiber.RuntimeFiber<void, E> | undefined = undefined
    const latch = Effect.unsafeMakeLatch(false)

    return new ReadableStream<A>({
      start(controller) {
        fiber = runFork(runForEachChunk(self, (chunk) => {
          if (chunk.length === 0) return Effect.void
          return latch.whenOpen(Effect.sync(() => {
            latch.unsafeClose()
            for (const item of chunk) {
              controller.enqueue(item)
            }
            currentResolve!()
            currentResolve = undefined
          }))
        }))
        fiber.addObserver((exit) => {
          try {
            if (exit._tag === "Failure") {
              controller.error(Cause.squash(exit.cause))
            } else {
              controller.close()
            }
          } catch {
            // ignore
          }
        })
      },
      pull() {
        return new Promise<void>((resolve) => {
          currentResolve = resolve
          Effect.runSync(latch.open)
        })
      },
      cancel() {
        if (!fiber) return
        return Effect.runPromise(Effect.asVoid(Fiber.interrupt(fiber)))
      }
    }, options?.strategy)
  }
)

/** @internal */
export const transduce = dual<
  <A2, A, E2, R2>(
    sink: Sink.Sink<A2, A, A, E2, R2>
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<A2, A, A, E2, R2>
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    sink: Sink.Sink<A2, A, A, E2, R2>
  ): Stream.Stream<A2, E2 | E, R2 | R> => {
    const newChannel = core.suspend(() => {
      const leftovers = { ref: Chunk.empty<Chunk.Chunk<A>>() }
      const upstreamDone = { ref: false }
      const buffer: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E, E, unknown, unknown> = core.suspend(
        () => {
          const leftover = leftovers.ref
          if (Chunk.isEmpty(leftover)) {
            return core.readWith({
              onInput: (input) => pipe(core.write(input), core.flatMap(() => buffer)),
              onFailure: core.fail,
              onDone: core.succeedNow
            })
          }
          leftovers.ref = Chunk.empty<Chunk.Chunk<A>>()
          return pipe(channel.writeChunk(leftover), core.flatMap(() => buffer))
        }
      )
      const concatAndGet = (chunk: Chunk.Chunk<Chunk.Chunk<A>>): Chunk.Chunk<Chunk.Chunk<A>> => {
        const leftover = leftovers.ref
        const concatenated = Chunk.appendAll(leftover, Chunk.filter(chunk, (chunk) => chunk.length !== 0))
        leftovers.ref = concatenated
        return concatenated
      }
      const upstreamMarker: Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E, E, unknown, unknown> = core
        .readWith({
          onInput: (input: Chunk.Chunk<A>) => core.flatMap(core.write(input), () => upstreamMarker),
          onFailure: core.fail,
          onDone: (done) =>
            channel.zipRight(
              core.sync(() => {
                upstreamDone.ref = true
              }),
              core.succeedNow(done)
            )
        })
      const transducer: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E | E2, never, void, unknown, R | R2> = pipe(
        sink,
        sink_.toChannel,
        core.collectElements,
        core.flatMap(([leftover, z]) =>
          pipe(
            core.succeed([upstreamDone.ref, concatAndGet(leftover)] as const),
            core.flatMap(([done, newLeftovers]) => {
              const nextChannel = done && Chunk.isEmpty(newLeftovers) ?
                core.void :
                transducer
              return pipe(core.write(Chunk.of(z)), core.flatMap(() => nextChannel))
            })
          )
        )
      )
      return pipe(
        toChannel(self),
        core.pipeTo(upstreamMarker),
        core.pipeTo(buffer),
        channel.pipeToOrFail(transducer)
      )
    })
    return new StreamImpl(newChannel)
  }
)

/** @internal */
export const toAsyncIterableRuntime = dual<
  <A, XR>(
    runtime: Runtime.Runtime<XR>
  ) => <E, R extends XR>(self: Stream.Stream<A, E, R>) => AsyncIterable<A>,
  <A, E, XR, R extends XR>(
    self: Stream.Stream<A, E, R>,
    runtime: Runtime.Runtime<XR>
  ) => AsyncIterable<A>
>(
  (args) => isStream(args[0]),
  <A, E, XR, R extends XR>(
    self: Stream.Stream<A, E, R>,
    runtime: Runtime.Runtime<XR>
  ): AsyncIterable<A> => {
    const runFork = Runtime.runFork(runtime)
    return {
      [Symbol.asyncIterator]() {
        let currentResolve: ((value: IteratorResult<A>) => void) | undefined = undefined
        let currentReject: ((reason: any) => void) | undefined = undefined
        let fiber: Fiber.RuntimeFiber<void, E> | undefined = undefined
        const latch = Effect.unsafeMakeLatch(false)
        let returned = false
        return {
          next() {
            if (!fiber) {
              fiber = runFork(runForEach(self, (value) =>
                latch.whenOpen(Effect.sync(() => {
                  latch.unsafeClose()
                  currentResolve!({ done: false, value })
                  currentResolve = currentReject = undefined
                }))))
              fiber.addObserver((exit) => {
                if (returned) return
                fiber = Effect.runFork(latch.whenOpen(Effect.sync(() => {
                  if (exit._tag === "Failure") {
                    currentReject!(Cause.squash(exit.cause))
                  } else {
                    currentResolve!({ done: true, value: void 0 })
                  }
                  currentResolve = currentReject = undefined
                })))
              })
            }
            return new Promise<IteratorResult<A>>((resolve, reject) => {
              currentResolve = resolve
              currentReject = reject
              latch.unsafeOpen()
            })
          },
          return() {
            returned = true
            if (!fiber) return Promise.resolve({ done: true, value: void 0 })
            return Effect.runPromise(Effect.as(Fiber.interrupt(fiber), { done: true, value: void 0 }))
          }
        }
      }
    }
  }
)

/** @internal */
export const toAsyncIterable = <A, E>(self: Stream.Stream<A, E>): AsyncIterable<A> =>
  toAsyncIterableRuntime(self, Runtime.defaultRuntime)

/** @internal */
export const toAsyncIterableEffect = <A, E, R>(
  self: Stream.Stream<A, E, R>
): Effect.Effect<AsyncIterable<A>, never, R> =>
  Effect.map(Effect.runtime<R>(), (runtime) => toAsyncIterableRuntime(self, runtime))

/** @internal */
export const unfold = <S, A>(s: S, f: (s: S) => Option.Option<readonly [A, S]>): Stream.Stream<A> =>
  unfoldChunk(s, (s) => pipe(f(s), Option.map(([a, s]) => [Chunk.of(a), s])))

/** @internal */
export const unfoldChunk = <S, A>(
  s: S,
  f: (s: S) => Option.Option<readonly [Chunk.Chunk<A>, S]>
): Stream.Stream<A> => {
  const loop = (s: S): Channel.Channel<Chunk.Chunk<A>, unknown, never, unknown, unknown, unknown> =>
    Option.match(f(s), {
      onNone: () => core.void,
      onSome: ([chunk, s]) => core.flatMap(core.write(chunk), () => loop(s))
    })
  return new StreamImpl(core.suspend(() => loop(s)))
}

/** @internal */
export const unfoldChunkEffect = <S, A, E, R>(
  s: S,
  f: (s: S) => Effect.Effect<Option.Option<readonly [Chunk.Chunk<A>, S]>, E, R>
): Stream.Stream<A, E, R> =>
  suspend(() => {
    const loop = (s: S): Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, unknown, unknown, R> =>
      channel.unwrap(
        Effect.map(
          f(s),
          Option.match({
            onNone: () => core.void,
            onSome: ([chunk, s]) => core.flatMap(core.write(chunk), () => loop(s))
          })
        )
      )
    return new StreamImpl(loop(s))
  })

/** @internal */
export const unfoldEffect = <S, A, E, R>(
  s: S,
  f: (s: S) => Effect.Effect<Option.Option<readonly [A, S]>, E, R>
): Stream.Stream<A, E, R> =>
  unfoldChunkEffect(s, (s) => pipe(f(s), Effect.map(Option.map(([a, s]) => [Chunk.of(a), s]))))

const void_: Stream.Stream<void> = succeed(void 0)
export {
  /** @internal */
  void_ as void
}

/** @internal */
export const unwrap = <A, E2, R2, E, R>(
  effect: Effect.Effect<Stream.Stream<A, E2, R2>, E, R>
): Stream.Stream<A, E | E2, R | R2> => flatten(fromEffect(effect))

/** @internal */
export const unwrapScoped = <A, E2, R2, E, R>(
  effect: Effect.Effect<Stream.Stream<A, E2, R2>, E, R>
): Stream.Stream<A, E | E2, Exclude<R, Scope.Scope> | R2> => flatten(scoped(effect))

/** @internal */
export const unwrapScopedWith = <A, E2, R2, E, R>(
  f: (scope: Scope.Scope) => Effect.Effect<Stream.Stream<A, E2, R2>, E, R>
): Stream.Stream<A, E | E2, R | R2> => flatten(scopedWith((scope) => f(scope)))

/** @internal */
export const updateService = dual<
  <I, S>(
    tag: Context.Tag<I, S>,
    f: (service: Types.NoInfer<S>) => Types.NoInfer<S>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, I | R>,
  <A, E, R, I, S>(
    self: Stream.Stream<A, E, R>,
    tag: Context.Tag<I, S>,
    f: (service: Types.NoInfer<S>) => Types.NoInfer<S>
  ) => Stream.Stream<A, E, I | R>
>(
  3,
  <A, E, R, I, S>(
    self: Stream.Stream<A, E, R>,
    tag: Context.Tag<I, S>,
    f: (service: Types.NoInfer<S>) => Types.NoInfer<S>
  ): Stream.Stream<A, E, I | R> =>
    pipe(
      self,
      mapInputContext((context) =>
        pipe(
          context,
          Context.add(tag, f(pipe(context, Context.unsafeGet(tag))))
        )
      )
    )
)

/** @internal */
export const when = dual<
  (test: LazyArg<boolean>) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, R>,
  <A, E, R>(self: Stream.Stream<A, E, R>, test: LazyArg<boolean>) => Stream.Stream<A, E, R>
>(
  2,
  <A, E, R>(self: Stream.Stream<A, E, R>, test: LazyArg<boolean>): Stream.Stream<A, E, R> =>
    pipe(self, whenEffect(Effect.sync(test)))
)

/** @internal */
export const whenCase = <A, A2, E, R>(
  evaluate: LazyArg<A>,
  pf: (a: A) => Option.Option<Stream.Stream<A2, E, R>>
) => whenCaseEffect(pf)(Effect.sync(evaluate))

/** @internal */
export const whenCaseEffect = dual<
  <A, A2, E2, R2>(
    pf: (a: A) => Option.Option<Stream.Stream<A2, E2, R2>>
  ) => <E, R>(self: Effect.Effect<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    pf: (a: A) => Option.Option<Stream.Stream<A2, E2, R2>>
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    pf: (a: A) => Option.Option<Stream.Stream<A2, E2, R2>>
  ): Stream.Stream<A2, E | E2, R | R2> =>
    pipe(
      fromEffect(self),
      flatMap((a) => pipe(pf(a), Option.getOrElse(() => empty)))
    )
)

/** @internal */
export const whenEffect = dual<
  <E2, R2>(
    effect: Effect.Effect<boolean, E2, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    effect: Effect.Effect<boolean, E2, R2>
  ) => Stream.Stream<A, E2 | E, R2 | R>
>(
  2,
  <A, E, R, E2, R2>(
    self: Stream.Stream<A, E, R>,
    effect: Effect.Effect<boolean, E2, R2>
  ): Stream.Stream<A, E | E2, R | R2> => pipe(fromEffect(effect), flatMap((bool) => bool ? self : empty))
)

/** @internal */
export const withSpan: {
  (
    name: string,
    options?: Tracer.SpanOptions
  ): <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E, Exclude<R, Tracer.ParentSpan>>
  <A, E, R>(
    self: Stream.Stream<A, E, R>,
    name: string,
    options?: Tracer.SpanOptions
  ): Stream.Stream<A, E, Exclude<R, Tracer.ParentSpan>>
} = function() {
  const dataFirst = typeof arguments[0] !== "string"
  const name = dataFirst ? arguments[1] : arguments[0]
  const options = InternalTracer.addSpanStackTrace(dataFirst ? arguments[2] : arguments[1])
  if (dataFirst) {
    const self = arguments[0]
    return new StreamImpl(channel.withSpan(toChannel(self), name, options))
  }
  return (self: Stream.Stream<any, any, any>) => new StreamImpl(channel.withSpan(toChannel(self), name, options))
} as any

/** @internal */
export const zip = dual<
  <A2, E2, R2>(
    that: Stream.Stream<A2, E2, R2>
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<[A, A2], E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ) => Stream.Stream<[A, A2], E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ): Stream.Stream<[A, A2], E2 | E, R2 | R> => pipe(self, zipWith(that, (a, a2) => [a, a2]))
)

/** @internal */
export const zipFlatten = dual<
  <A2, E2, R2>(
    that: Stream.Stream<A2, E2, R2>
  ) => <A extends ReadonlyArray<any>, E, R>(
    self: Stream.Stream<A, E, R>
  ) => Stream.Stream<[...A, A2], E2 | E, R2 | R>,
  <A extends ReadonlyArray<any>, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ) => Stream.Stream<[...A, A2], E2 | E, R2 | R>
>(
  2,
  <A extends ReadonlyArray<any>, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>
  ): Stream.Stream<[...A, A2], E2 | E, R2 | R> => pipe(self, zipWith(that, (a, a2) => [...a, a2]))
)

/** @internal */
export const zipAll = dual<
  <A2, E2, R2, A>(
    options: {
      readonly other: Stream.Stream<A2, E2, R2>
      readonly defaultSelf: A
      readonly defaultOther: A2
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<[A, A2], E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly other: Stream.Stream<A2, E2, R2>
      readonly defaultSelf: A
      readonly defaultOther: A2
    }
  ) => Stream.Stream<[A, A2], E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly other: Stream.Stream<A2, E2, R2>
      readonly defaultSelf: A
      readonly defaultOther: A2
    }
  ): Stream.Stream<[A, A2], E2 | E, R2 | R> =>
    zipAllWith(self, {
      other: options.other,
      onSelf: (a) => [a, options.defaultOther],
      onOther: (a2) => [options.defaultSelf, a2],
      onBoth: (a, a2) => [a, a2]
    })
)

/** @internal */
export const zipAllLeft = dual<
  <A2, E2, R2, A>(
    that: Stream.Stream<A2, E2, R2>,
    defaultLeft: A
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>,
    defaultLeft: A
  ) => Stream.Stream<A, E2 | E, R2 | R>
>(
  3,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    other: Stream.Stream<A2, E2, R2>,
    defaultSelf: A
  ): Stream.Stream<A, E | E2, R | R2> =>
    zipAllWith(self, {
      other,
      onSelf: identity,
      onOther: () => defaultSelf,
      onBoth: (a) => a
    })
)

/** @internal */
export const zipAllRight = dual<
  <A2, E2, R2>(
    that: Stream.Stream<A2, E2, R2>,
    defaultRight: A2
  ) => <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>,
    defaultRight: A2
  ) => Stream.Stream<A2, E2 | E, R2 | R>
>(
  3,
  <A, E, R, A2, E2, R2>(
    self: Stream.Stream<A, E, R>,
    other: Stream.Stream<A2, E2, R2>,
    defaultRight: A2
  ): Stream.Stream<A2, E | E2, R | R2> =>
    zipAllWith(self, {
      other,
      onSelf: () => defaultRight,
      onOther: identity,
      onBoth: (_, a2) => a2
    })
)

/** @internal */
export const zipAllSortedByKey = dual<
  <A2, E2, R2, A, K>(
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly defaultSelf: A
      readonly defaultOther: A2
      readonly order: Order.Order<K>
    }
  ) => <E, R>(
    self: Stream.Stream<readonly [K, A], E, R>
  ) => Stream.Stream<[K, [A, A2]], E2 | E, R2 | R>,
  <K, A, E, R, A2, E2, R2>(
    self: Stream.Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly defaultSelf: A
      readonly defaultOther: A2
      readonly order: Order.Order<K>
    }
  ) => Stream.Stream<[K, [A, A2]], E2 | E, R2 | R>
>(
  2,
  <K, A, E, R, A2, E2, R2>(
    self: Stream.Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly defaultSelf: A
      readonly defaultOther: A2
      readonly order: Order.Order<K>
    }
  ): Stream.Stream<[K, [A, A2]], E2 | E, R2 | R> =>
    zipAllSortedByKeyWith(self, {
      other: options.other,
      onSelf: (a) => [a, options.defaultOther],
      onOther: (a2) => [options.defaultSelf, a2],
      onBoth: (a, a2) => [a, a2],
      order: options.order
    })
)

/** @internal */
export const zipAllSortedByKeyLeft = dual<
  <A2, E2, R2, A, K>(
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly defaultSelf: A
      readonly order: Order.Order<K>
    }
  ) => <E, R>(self: Stream.Stream<readonly [K, A], E, R>) => Stream.Stream<[K, A], E2 | E, R2 | R>,
  <K, A, E, R, A2, E2, R2>(
    self: Stream.Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly defaultSelf: A
      readonly order: Order.Order<K>
    }
  ) => Stream.Stream<[K, A], E2 | E, R2 | R>
>(
  2,
  <K, A, E, R, A2, E2, R2>(
    self: Stream.Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly defaultSelf: A
      readonly order: Order.Order<K>
    }
  ): Stream.Stream<[K, A], E2 | E, R2 | R> =>
    zipAllSortedByKeyWith(self, {
      other: options.other,
      onSelf: identity,
      onOther: () => options.defaultSelf,
      onBoth: (a) => a,
      order: options.order
    })
)

/** @internal */
export const zipAllSortedByKeyRight = dual<
  <K, A2, E2, R2>(
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly defaultOther: A2
      readonly order: Order.Order<K>
    }
  ) => <A, E, R>(self: Stream.Stream<readonly [K, A], E, R>) => Stream.Stream<[K, A2], E2 | E, R2 | R>,
  <A, E, R, K, A2, E2, R2>(
    self: Stream.Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly defaultOther: A2
      readonly order: Order.Order<K>
    }
  ) => Stream.Stream<[K, A2], E2 | E, R2 | R>
>(
  2,
  <A, E, R, K, A2, E2, R2>(
    self: Stream.Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly defaultOther: A2
      readonly order: Order.Order<K>
    }
  ): Stream.Stream<[K, A2], E2 | E, R2 | R> =>
    zipAllSortedByKeyWith(self, {
      other: options.other,
      onSelf: () => options.defaultOther,
      onOther: identity,
      onBoth: (_, a2) => a2,
      order: options.order
    })
)

/** @internal */
export const zipAllSortedByKeyWith = dual<
  <K, A2, E2, R2, A, A3>(
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A3
      readonly onBoth: (a: A, a2: A2) => A3
      readonly order: Order.Order<K>
    }
  ) => <E, R>(self: Stream.Stream<readonly [K, A], E, R>) => Stream.Stream<[K, A3], E2 | E, R2 | R>,
  <K, A, E, R, A2, E2, R2, A3>(
    self: Stream.Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A3
      readonly onBoth: (a: A, a2: A2) => A3
      readonly order: Order.Order<K>
    }
  ) => Stream.Stream<[K, A3], E2 | E, R2 | R>
>(
  2,
  <K, A, E, R, A2, E2, R2, A3>(
    self: Stream.Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream.Stream<readonly [K, A2], E2, R2>
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A3
      readonly onBoth: (a: A, a2: A2) => A3
      readonly order: Order.Order<K>
    }
  ): Stream.Stream<[K, A3], E2 | E, R2 | R> => {
    const pull = (
      state: ZipAllState.ZipAllState<readonly [K, A], readonly [K, A2]>,
      pullLeft: Effect.Effect<Chunk.Chunk<readonly [K, A]>, Option.Option<E>, R>,
      pullRight: Effect.Effect<Chunk.Chunk<readonly [K, A2]>, Option.Option<E2>, R2>
    ): Effect.Effect<
      Exit.Exit<
        readonly [
          Chunk.Chunk<[K, A3]>,
          ZipAllState.ZipAllState<readonly [K, A], readonly [K, A2]>
        ],
        Option.Option<E | E2>
      >,
      never,
      R | R2
    > => {
      switch (state._tag) {
        case ZipAllState.OP_DRAIN_LEFT: {
          return pipe(
            pullLeft,
            Effect.match({
              onFailure: Exit.fail,
              onSuccess: (leftChunk) =>
                Exit.succeed(
                  [
                    Chunk.map(leftChunk, ([k, a]) => [k, options.onSelf(a)]),
                    ZipAllState.DrainLeft
                  ] as const
                )
            })
          )
        }
        case ZipAllState.OP_DRAIN_RIGHT: {
          return pipe(
            pullRight,
            Effect.match({
              onFailure: Exit.fail,
              onSuccess: (rightChunk) =>
                Exit.succeed(
                  [
                    Chunk.map(rightChunk, ([k, a2]) => [k, options.onOther(a2)]),
                    ZipAllState.DrainRight
                  ] as const
                )
            })
          )
        }
        case ZipAllState.OP_PULL_BOTH: {
          return pipe(
            unsome(pullLeft),
            Effect.zip(unsome(pullRight), { concurrent: true }),
            Effect.matchEffect({
              onFailure: (error) => Effect.succeed(Exit.fail(Option.some(error))),
              onSuccess: ([leftOption, rightOption]) => {
                if (Option.isSome(leftOption) && Option.isSome(rightOption)) {
                  if (Chunk.isEmpty(leftOption.value) && Chunk.isEmpty(rightOption.value)) {
                    return pull(ZipAllState.PullBoth, pullLeft, pullRight)
                  }
                  if (Chunk.isEmpty(leftOption.value)) {
                    return pull(ZipAllState.PullLeft(rightOption.value), pullLeft, pullRight)
                  }
                  if (Chunk.isEmpty(rightOption.value)) {
                    return pull(ZipAllState.PullRight(leftOption.value), pullLeft, pullRight)
                  }
                  return Effect.succeed(Exit.succeed(merge(leftOption.value, rightOption.value)))
                }
                if (Option.isSome(leftOption) && Option.isNone(rightOption)) {
                  if (Chunk.isEmpty(leftOption.value)) {
                    return pull(ZipAllState.DrainLeft, pullLeft, pullRight)
                  }
                  return Effect.succeed(
                    Exit.succeed(
                      [
                        pipe(leftOption.value, Chunk.map(([k, a]) => [k, options.onSelf(a)])),
                        ZipAllState.DrainLeft
                      ] as const
                    )
                  )
                }
                if (Option.isNone(leftOption) && Option.isSome(rightOption)) {
                  if (Chunk.isEmpty(rightOption.value)) {
                    return pull(ZipAllState.DrainRight, pullLeft, pullRight)
                  }
                  return Effect.succeed(
                    Exit.succeed(
                      [
                        pipe(rightOption.value, Chunk.map(([k, a2]) => [k, options.onOther(a2)])),
                        ZipAllState.DrainRight
                      ] as const
                    )
                  )
                }
                return Effect.succeed(Exit.fail<Option.Option<E | E2>>(Option.none()))
              }
            })
          )
        }
        case ZipAllState.OP_PULL_LEFT: {
          return Effect.matchEffect(pullLeft, {
            onFailure: Option.match({
              onNone: () =>
                Effect.succeed(
                  Exit.succeed([
                    pipe(state.rightChunk, Chunk.map(([k, a2]) => [k, options.onOther(a2)])),
                    ZipAllState.DrainRight
                  ])
                ),
              onSome: (error) =>
                Effect.succeed<
                  Exit.Exit<
                    readonly [
                      Chunk.Chunk<[K, A3]>,
                      ZipAllState.ZipAllState<readonly [K, A], readonly [K, A2]>
                    ],
                    Option.Option<E | E2>
                  >
                >(Exit.fail(Option.some(error)))
            }),
            onSuccess: (leftChunk) =>
              Chunk.isEmpty(leftChunk) ?
                pull(ZipAllState.PullLeft(state.rightChunk), pullLeft, pullRight) :
                Effect.succeed(Exit.succeed(merge(leftChunk, state.rightChunk)))
          })
        }
        case ZipAllState.OP_PULL_RIGHT: {
          return Effect.matchEffect(pullRight, {
            onFailure: Option.match({
              onNone: () =>
                Effect.succeed(
                  Exit.succeed(
                    [
                      Chunk.map(state.leftChunk, ([k, a]) => [k, options.onSelf(a)]),
                      ZipAllState.DrainLeft
                    ] as const
                  )
                ),
              onSome: (error) =>
                Effect.succeed<
                  Exit.Exit<
                    readonly [
                      Chunk.Chunk<[K, A3]>,
                      ZipAllState.ZipAllState<readonly [K, A], readonly [K, A2]>
                    ],
                    Option.Option<E | E2>
                  >
                >(Exit.fail(Option.some(error)))
            }),
            onSuccess: (rightChunk) =>
              Chunk.isEmpty(rightChunk) ?
                pull(ZipAllState.PullRight(state.leftChunk), pullLeft, pullRight) :
                Effect.succeed(Exit.succeed(merge(state.leftChunk, rightChunk)))
          })
        }
      }
    }
    const merge = (
      leftChunk: Chunk.Chunk<readonly [K, A]>,
      rightChunk: Chunk.Chunk<readonly [K, A2]>
    ): readonly [
      Chunk.Chunk<[K, A3]>,
      ZipAllState.ZipAllState<readonly [K, A], readonly [K, A2]>
    ] => {
      const hasNext = <T>(chunk: Chunk.Chunk<T>, index: number) => index < chunk.length - 1
      const builder: Array<[K, A3]> = []
      let state:
        | ZipAllState.ZipAllState<
          readonly [K, A],
          readonly [K, A2]
        >
        | undefined = undefined
      let leftIndex = 0
      let rightIndex = 0
      let leftTuple = pipe(leftChunk, Chunk.unsafeGet(leftIndex))
      let rightTuple = pipe(rightChunk, Chunk.unsafeGet(rightIndex))
      let k1 = leftTuple[0]
      let a = leftTuple[1]
      let k2 = rightTuple[0]
      let a2 = rightTuple[1]
      let loop = true
      while (loop) {
        const compare = options.order(k1, k2)
        if (compare === 0) {
          builder.push([k1, options.onBoth(a, a2)])
          if (hasNext(leftChunk, leftIndex) && hasNext(rightChunk, rightIndex)) {
            leftIndex = leftIndex + 1
            rightIndex = rightIndex + 1
            leftTuple = pipe(leftChunk, Chunk.unsafeGet(leftIndex))
            rightTuple = pipe(rightChunk, Chunk.unsafeGet(rightIndex))
            k1 = leftTuple[0]
            a = leftTuple[1]
            k2 = rightTuple[0]
            a2 = rightTuple[1]
          } else if (hasNext(leftChunk, leftIndex)) {
            state = ZipAllState.PullRight(pipe(leftChunk, Chunk.drop(leftIndex + 1)))
            loop = false
          } else if (hasNext(rightChunk, rightIndex)) {
            state = ZipAllState.PullLeft(pipe(rightChunk, Chunk.drop(rightIndex + 1)))
            loop = false
          } else {
            state = ZipAllState.PullBoth
            loop = false
          }
        } else if (compare < 0) {
          builder.push([k1, options.onSelf(a)])
          if (hasNext(leftChunk, leftIndex)) {
            leftIndex = leftIndex + 1
            leftTuple = pipe(leftChunk, Chunk.unsafeGet(leftIndex))
            k1 = leftTuple[0]
            a = leftTuple[1]
          } else {
            const rightBuilder: Array<readonly [K, A2]> = []
            rightBuilder.push(rightTuple)
            while (hasNext(rightChunk, rightIndex)) {
              rightIndex = rightIndex + 1
              rightTuple = pipe(rightChunk, Chunk.unsafeGet(rightIndex))
              rightBuilder.push(rightTuple)
            }
            state = ZipAllState.PullLeft(Chunk.unsafeFromArray(rightBuilder))
            loop = false
          }
        } else {
          builder.push([k2, options.onOther(a2)])
          if (hasNext(rightChunk, rightIndex)) {
            rightIndex = rightIndex + 1
            rightTuple = pipe(rightChunk, Chunk.unsafeGet(rightIndex))
            k2 = rightTuple[0]
            a2 = rightTuple[1]
          } else {
            const leftBuilder: Array<readonly [K, A]> = []
            leftBuilder.push(leftTuple)
            while (hasNext(leftChunk, leftIndex)) {
              leftIndex = leftIndex + 1
              leftTuple = pipe(leftChunk, Chunk.unsafeGet(leftIndex))
              leftBuilder.push(leftTuple)
            }
            state = ZipAllState.PullRight(Chunk.unsafeFromArray(leftBuilder))
            loop = false
          }
        }
      }
      return [Chunk.unsafeFromArray(builder), state!]
    }
    return combineChunks(self, options.other, ZipAllState.PullBoth, pull)
  }
)

/** @internal */
export const zipAllWith = dual<
  <A2, E2, R2, A, A3>(
    options: {
      readonly other: Stream.Stream<A2, E2, R2>
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A3
      readonly onBoth: (a: A, a2: A2) => A3
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A3, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2, A3>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly other: Stream.Stream<A2, E2, R2>
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A3
      readonly onBoth: (a: A, a2: A2) => A3
    }
  ) => Stream.Stream<A3, E2 | E, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2, A3>(
    self: Stream.Stream<A, E, R>,
    options: {
      readonly other: Stream.Stream<A2, E2, R2>
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A3
      readonly onBoth: (a: A, a2: A2) => A3
    }
  ): Stream.Stream<A3, E2 | E, R2 | R> => {
    const pull = (
      state: ZipAllState.ZipAllState<A, A2>,
      pullLeft: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R>,
      pullRight: Effect.Effect<Chunk.Chunk<A2>, Option.Option<E2>, R2>
    ): Effect.Effect<
      Exit.Exit<readonly [Chunk.Chunk<A3>, ZipAllState.ZipAllState<A, A2>], Option.Option<E | E2>>,
      never,
      R | R2
    > => {
      switch (state._tag) {
        case ZipAllState.OP_DRAIN_LEFT: {
          return Effect.matchEffect(pullLeft, {
            onFailure: (error) => Effect.succeed(Exit.fail(error)),
            onSuccess: (leftChunk) =>
              Effect.succeed(Exit.succeed(
                [
                  Chunk.map(leftChunk, options.onSelf),
                  ZipAllState.DrainLeft
                ] as const
              ))
          })
        }
        case ZipAllState.OP_DRAIN_RIGHT: {
          return Effect.matchEffect(pullRight, {
            onFailure: (error) => Effect.succeed(Exit.fail(error)),
            onSuccess: (rightChunk) =>
              Effect.succeed(Exit.succeed(
                [
                  Chunk.map(rightChunk, options.onOther),
                  ZipAllState.DrainRight
                ] as const
              ))
          })
        }
        case ZipAllState.OP_PULL_BOTH: {
          return pipe(
            unsome(pullLeft),
            Effect.zip(unsome(pullRight), { concurrent: true }),
            Effect.matchEffect({
              onFailure: (error) => Effect.succeed(Exit.fail(Option.some(error))),
              onSuccess: ([leftOption, rightOption]) => {
                if (Option.isSome(leftOption) && Option.isSome(rightOption)) {
                  if (Chunk.isEmpty(leftOption.value) && Chunk.isEmpty(rightOption.value)) {
                    return pull(ZipAllState.PullBoth, pullLeft, pullRight)
                  }
                  if (Chunk.isEmpty(leftOption.value)) {
                    return pull(ZipAllState.PullLeft(rightOption.value), pullLeft, pullRight)
                  }
                  if (Chunk.isEmpty(rightOption.value)) {
                    return pull(ZipAllState.PullRight(leftOption.value), pullLeft, pullRight)
                  }
                  return Effect.succeed(Exit.succeed(zip(leftOption.value, rightOption.value, options.onBoth)))
                }
                if (Option.isSome(leftOption) && Option.isNone(rightOption)) {
                  return Effect.succeed(Exit.succeed(
                    [
                      Chunk.map(leftOption.value, options.onSelf),
                      ZipAllState.DrainLeft
                    ] as const
                  ))
                }
                if (Option.isNone(leftOption) && Option.isSome(rightOption)) {
                  return Effect.succeed(Exit.succeed(
                    [
                      Chunk.map(rightOption.value, options.onOther),
                      ZipAllState.DrainRight
                    ] as const
                  ))
                }
                return Effect.succeed(Exit.fail<Option.Option<E | E2>>(Option.none()))
              }
            })
          )
        }
        case ZipAllState.OP_PULL_LEFT: {
          return Effect.matchEffect(pullLeft, {
            onFailure: Option.match({
              onNone: () =>
                Effect.succeed(Exit.succeed(
                  [
                    Chunk.map(state.rightChunk, options.onOther),
                    ZipAllState.DrainRight
                  ] as const
                )),
              onSome: (error) =>
                Effect.succeed<
                  Exit.Exit<readonly [Chunk.Chunk<A3>, ZipAllState.ZipAllState<A, A2>], Option.Option<E | E2>>
                >(
                  Exit.fail(Option.some(error))
                )
            }),
            onSuccess: (leftChunk) => {
              if (Chunk.isEmpty(leftChunk)) {
                return pull(ZipAllState.PullLeft(state.rightChunk), pullLeft, pullRight)
              }
              if (Chunk.isEmpty(state.rightChunk)) {
                return pull(ZipAllState.PullRight(leftChunk), pullLeft, pullRight)
              }
              return Effect.succeed(Exit.succeed(zip(leftChunk, state.rightChunk, options.onBoth)))
            }
          })
        }
        case ZipAllState.OP_PULL_RIGHT: {
          return Effect.matchEffect(pullRight, {
            onFailure: Option.match({
              onNone: () =>
                Effect.succeed(
                  Exit.succeed(
                    [
                      Chunk.map(state.leftChunk, options.onSelf),
                      ZipAllState.DrainLeft
                    ] as const
                  )
                ),
              onSome: (error) =>
                Effect.succeed<
                  Exit.Exit<readonly [Chunk.Chunk<A3>, ZipAllState.ZipAllState<A, A2>], Option.Option<E | E2>>
                >(
                  Exit.fail(Option.some(error))
                )
            }),
            onSuccess: (rightChunk) => {
              if (Chunk.isEmpty(rightChunk)) {
                return pull(
                  ZipAllState.PullRight(state.leftChunk),
                  pullLeft,
                  pullRight
                )
              }
              if (Chunk.isEmpty(state.leftChunk)) {
                return pull(
                  ZipAllState.PullLeft(rightChunk),
                  pullLeft,
                  pullRight
                )
              }
              return Effect.succeed(Exit.succeed(zip(state.leftChunk, rightChunk, options.onBoth)))
            }
          })
        }
      }
    }
    const zip = (
      leftChunk: Chunk.Chunk<A>,
      rightChunk: Chunk.Chunk<A2>,
      f: (a: A, a2: A2) => A3
    ): readonly [Chunk.Chunk<A3>, ZipAllState.ZipAllState<A, A2>] => {
      const [output, either] = zipChunks(leftChunk, rightChunk, f)
      switch (either._tag) {
        case "Left": {
          if (Chunk.isEmpty(either.left)) {
            return [output, ZipAllState.PullBoth] as const
          }
          return [output, ZipAllState.PullRight(either.left)] as const
        }
        case "Right": {
          if (Chunk.isEmpty(either.right)) {
            return [output, ZipAllState.PullBoth] as const
          }
          return [output, ZipAllState.PullLeft(either.right)] as const
        }
      }
    }
    return combineChunks(self, options.other, ZipAllState.PullBoth, pull)
  }
)

/** @internal */
export const zipLatest: {
  <AR, ER, RR>(
    right: Stream.Stream<AR, ER, RR>
  ): <AL, EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<[AL, AR], EL | ER, RL | RR>
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<[AL, AR], EL | ER, RL | RR>
} = dual(
  2,
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<[AL, AR], EL | ER, RL | RR> => pipe(left, zipLatestWith(right, (a, a2) => [a, a2]))
)

export const zipLatestAll = <T extends ReadonlyArray<Stream.Stream<any, any, any>>>(
  ...streams: T
): Stream.Stream<
  [T[number]] extends [never] ? never
    : { [K in keyof T]: T[K] extends Stream.Stream<infer A, infer _E, infer _R> ? A : never },
  [T[number]] extends [never] ? never : T[number] extends Stream.Stream<infer _A, infer _E, infer _R> ? _E : never,
  [T[number]] extends [never] ? never : T[number] extends Stream.Stream<infer _A, infer _E, infer _R> ? _R : never
> => {
  if (streams.length === 0) {
    return empty
  } else if (streams.length === 1) {
    return map(streams[0]!, (x) => [x]) as any
  }
  const [head, ...tail] = streams
  return zipLatestWith(
    head,
    zipLatestAll(...tail),
    (first, second) => [first, ...second]
  ) as any
}

/** @internal */
export const zipLatestWith: {
  <AR, ER, RR, AL, A>(
    right: Stream.Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): <EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<A, EL | ER, RL | RR>
  <AL, EL, RL, AR, ER, RR, A>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): Stream.Stream<A, EL | ER, RL | RR>
} = dual(
  3,
  <AL, EL, RL, AR, ER, RR, A>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): Stream.Stream<A, EL | ER, RL | RR> => {
    const pullNonEmpty = <_R, _E, _A>(
      pull: Effect.Effect<Chunk.Chunk<_A>, Option.Option<_E>, _R>
    ): Effect.Effect<Chunk.Chunk<_A>, Option.Option<_E>, _R> =>
      pipe(pull, Effect.flatMap((chunk) => Chunk.isEmpty(chunk) ? pullNonEmpty(pull) : Effect.succeed(chunk)))
    return pipe(
      toPull(left),
      Effect.map(pullNonEmpty),
      Effect.zip(pipe(toPull(right), Effect.map(pullNonEmpty))),
      Effect.flatMap(([left, right]) =>
        pipe(
          fromEffectOption<readonly [Chunk.Chunk<AL>, Chunk.Chunk<AR>, boolean], EL | ER, RL | RR>(
            Effect.raceWith(left, right, {
              onSelfDone: (leftDone, rightFiber) =>
                pipe(
                  Effect.suspend(() => leftDone),
                  Effect.zipWith(Fiber.join(rightFiber), (l, r) => [l, r, true] as const)
                ),
              onOtherDone: (rightDone, leftFiber) =>
                pipe(
                  Effect.suspend(() => rightDone),
                  Effect.zipWith(Fiber.join(leftFiber), (l, r) => [r, l, false] as const)
                )
            })
          ),
          flatMap(([l, r, leftFirst]) =>
            pipe(
              fromEffect(
                Ref.make([Chunk.unsafeLast(l), Chunk.unsafeLast(r)] as const)
              ),
              flatMap((latest) =>
                pipe(
                  fromChunk(
                    leftFirst ?
                      pipe(r, Chunk.map((a2) => f(Chunk.unsafeLast(l), a2))) :
                      pipe(l, Chunk.map((a) => f(a, Chunk.unsafeLast(r))))
                  ),
                  concat(
                    pipe(
                      repeatEffectOption(left),
                      mergeEither(repeatEffectOption(right)),
                      mapEffectSequential(Either.match({
                        onLeft: (leftChunk) =>
                          Ref.modify(latest, ([_, rightLatest]) =>
                            [
                              pipe(leftChunk, Chunk.map((a) => f(a, rightLatest))),
                              [Chunk.unsafeLast(leftChunk), rightLatest] as const
                            ] as const),
                        onRight: (rightChunk) =>
                          Ref.modify(latest, ([leftLatest, _]) =>
                            [
                              pipe(rightChunk, Chunk.map((a2) => f(leftLatest, a2))),
                              [leftLatest, Chunk.unsafeLast(rightChunk)] as const
                            ] as const)
                      })),
                      flatMap(fromChunk)
                    )
                  )
                )
              )
            )
          ),
          toPull
        )
      ),
      fromPull
    )
  }
)

/** @internal */
export const zipLeft: {
  <AR, ER, RR>(
    right: Stream.Stream<AR, ER, RR>
  ): <AL, EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<AL, ER | EL, RR | RL>
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AL, EL | ER, RL | RR>
} = dual(
  2,
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AL, EL | ER, RL | RR> =>
    pipe(
      left,
      zipWithChunks(right, (left, right) => {
        if (left.length > right.length) {
          return [
            pipe(left, Chunk.take(right.length)),
            Either.left(pipe(left, Chunk.take(right.length)))
          ] as const
        }
        return [
          left,
          Either.right(pipe(right, Chunk.drop(left.length)))
        ]
      })
    )
)

/** @internal */
export const zipRight: {
  <AR, ER, RR>(
    right: Stream.Stream<AR, ER, RR>
  ): <AL, EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<AR, ER | EL, RR | RL>
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AR, EL | ER, RL | RR>
} = dual(
  2,
  <AL, EL, RL, AR, ER, RR>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>
  ): Stream.Stream<AR, EL | ER, RL | RR> =>
    pipe(
      left,
      zipWithChunks(right, (left, right) => {
        if (left.length > right.length) {
          return [
            right,
            Either.left(pipe(left, Chunk.take(right.length)))
          ] as const
        }
        return [
          pipe(right, Chunk.take(left.length)),
          Either.right(pipe(right, Chunk.drop(left.length)))
        ]
      })
    )
)

/** @internal */
export const zipWith: {
  <AR, ER, RR, AL, A>(
    right: Stream.Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): <EL, RL>(left: Stream.Stream<AL, EL, RL>) => Stream.Stream<A, EL | ER, RL | RR>
  <AL, EL, RL, AR, ER, RR, A>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): Stream.Stream<A, EL | ER, RL | RR>
} = dual(
  3,
  <AL, EL, RL, AR, ER, RR, A>(
    left: Stream.Stream<AL, EL, RL>,
    right: Stream.Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): Stream.Stream<A, EL | ER, RL | RR> =>
    pipe(left, zipWithChunks(right, (leftChunk, rightChunk) => zipChunks(leftChunk, rightChunk, f)))
)

/** @internal */
export const zipWithChunks = dual<
  <A2, E2, R2, A, A3>(
    that: Stream.Stream<A2, E2, R2>,
    f: (
      left: Chunk.Chunk<A>,
      right: Chunk.Chunk<A2>
    ) => readonly [Chunk.Chunk<A3>, Either.Either<Chunk.Chunk<A2>, Chunk.Chunk<A>>]
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A3, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2, A3>(
    self: Stream.Stream<A, E, R>,
    that: Stream.Stream<A2, E2, R2>,
    f: (
      left: Chunk.Chunk<A>,
      right: Chunk.Chunk<A2>
    ) => readonly [Chunk.Chunk<A3>, Either.Either<Chunk.Chunk<A2>, Chunk.Chunk<A>>]
  ) => Stream.Stream<A3, E2 | E, R2 | R>
>(3, <A, E, R, A2, E2, R2, A3>(
  self: Stream.Stream<A, E, R>,
  that: Stream.Stream<A2, E2, R2>,
  f: (
    left: Chunk.Chunk<A>,
    right: Chunk.Chunk<A2>
  ) => readonly [Chunk.Chunk<A3>, Either.Either<Chunk.Chunk<A2>, Chunk.Chunk<A>>]
): Stream.Stream<A3, E2 | E, R2 | R> => {
  const pull = (
    state: ZipChunksState.ZipChunksState<A, A2>,
    pullLeft: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R>,
    pullRight: Effect.Effect<Chunk.Chunk<A2>, Option.Option<E2>, R2>
  ): Effect.Effect<
    Exit.Exit<readonly [Chunk.Chunk<A3>, ZipChunksState.ZipChunksState<A, A2>], Option.Option<E | E2>>,
    never,
    R | R2
  > => {
    switch (state._tag) {
      case ZipChunksState.OP_PULL_BOTH: {
        return pipe(
          unsome(pullLeft),
          Effect.zip(unsome(pullRight), { concurrent: true }),
          Effect.matchEffect({
            onFailure: (error) => Effect.succeed(Exit.fail(Option.some(error))),
            onSuccess: ([leftOption, rightOption]) => {
              if (Option.isSome(leftOption) && Option.isSome(rightOption)) {
                if (Chunk.isEmpty(leftOption.value) && Chunk.isEmpty(rightOption.value)) {
                  return pull(ZipChunksState.PullBoth, pullLeft, pullRight)
                }
                if (Chunk.isEmpty(leftOption.value)) {
                  return pull(ZipChunksState.PullLeft(rightOption.value), pullLeft, pullRight)
                }
                if (Chunk.isEmpty(rightOption.value)) {
                  return pull(ZipChunksState.PullRight(leftOption.value), pullLeft, pullRight)
                }
                return Effect.succeed(Exit.succeed(zip(leftOption.value, rightOption.value)))
              }
              return Effect.succeed(Exit.fail(Option.none()))
            }
          })
        )
      }
      case ZipChunksState.OP_PULL_LEFT: {
        return Effect.matchEffect(pullLeft, {
          onFailure: (error) => Effect.succeed(Exit.fail(error)),
          onSuccess: (leftChunk) => {
            if (Chunk.isEmpty(leftChunk)) {
              return pull(ZipChunksState.PullLeft(state.rightChunk), pullLeft, pullRight)
            }
            if (Chunk.isEmpty(state.rightChunk)) {
              return pull(ZipChunksState.PullRight(leftChunk), pullLeft, pullRight)
            }
            return Effect.succeed(Exit.succeed(zip(leftChunk, state.rightChunk)))
          }
        })
      }
      case ZipChunksState.OP_PULL_RIGHT: {
        return Effect.matchEffect(pullRight, {
          onFailure: (error) => Effect.succeed(Exit.fail(error)),
          onSuccess: (rightChunk) => {
            if (Chunk.isEmpty(rightChunk)) {
              return pull(ZipChunksState.PullRight(state.leftChunk), pullLeft, pullRight)
            }
            if (Chunk.isEmpty(state.leftChunk)) {
              return pull(ZipChunksState.PullLeft(rightChunk), pullLeft, pullRight)
            }
            return Effect.succeed(Exit.succeed(zip(state.leftChunk, rightChunk)))
          }
        })
      }
    }
  }
  const zip = (
    leftChunk: Chunk.Chunk<A>,
    rightChunk: Chunk.Chunk<A2>
  ): readonly [Chunk.Chunk<A3>, ZipChunksState.ZipChunksState<A, A2>] => {
    const [output, either] = f(leftChunk, rightChunk)
    switch (either._tag) {
      case "Left": {
        if (Chunk.isEmpty(either.left)) {
          return [output, ZipChunksState.PullBoth] as const
        }
        return [output, ZipChunksState.PullRight(either.left)] as const
      }
      case "Right": {
        if (Chunk.isEmpty(either.right)) {
          return [output, ZipChunksState.PullBoth] as const
        }
        return [output, ZipChunksState.PullLeft(either.right)] as const
      }
    }
  }
  return pipe(
    self,
    combineChunks(that, ZipChunksState.PullBoth, pull)
  )
})

/** @internal */
export const zipWithIndex = <A, E, R>(self: Stream.Stream<A, E, R>): Stream.Stream<[A, number], E, R> =>
  pipe(self, mapAccum(0, (index, a) => [index + 1, [a, index]]))

/** @internal */
export const zipWithNext = <A, E, R>(
  self: Stream.Stream<A, E, R>
): Stream.Stream<[A, Option.Option<A>], E, R> => {
  const process = (
    last: Option.Option<A>
  ): Channel.Channel<Chunk.Chunk<readonly [A, Option.Option<A>]>, Chunk.Chunk<A>, never, never, void, unknown> =>
    core.readWithCause({
      onInput: (input: Chunk.Chunk<A>) => {
        const [newLast, chunk] = Chunk.mapAccum(
          input,
          last,
          (prev, curr) => [Option.some(curr), pipe(prev, Option.map((a) => [a, curr] as const))] as const
        )
        const output = Chunk.filterMap(
          chunk,
          (option) =>
            Option.isSome(option) ?
              Option.some([option.value[0], Option.some(option.value[1])] as const) :
              Option.none()
        )
        return core.flatMap(
          core.write(output),
          () => process(newLast)
        )
      },
      onFailure: core.failCause,
      onDone: () =>
        Option.match(last, {
          onNone: () => core.void,
          onSome: (value) =>
            channel.zipRight(
              core.write(Chunk.of<readonly [A, Option.Option<A>]>([value, Option.none()])),
              core.void
            )
        })
    })
  return new StreamImpl(pipe(toChannel(self), channel.pipeToOrFail(process(Option.none()))))
}

/** @internal */
export const zipWithPrevious = <A, E, R>(
  self: Stream.Stream<A, E, R>
): Stream.Stream<[Option.Option<A>, A], E, R> =>
  pipe(
    self,
    mapAccum<Option.Option<A>, A, [Option.Option<A>, A]>(
      Option.none(),
      (prev, curr) => [Option.some(curr), [prev, curr]]
    )
  )

/** @internal */
export const zipWithPreviousAndNext = <A, E, R>(
  self: Stream.Stream<A, E, R>
): Stream.Stream<[Option.Option<A>, A, Option.Option<A>], E, R> =>
  pipe(
    zipWithNext(zipWithPrevious(self)),
    map(([[prev, curr], next]) => [prev, curr, pipe(next, Option.map((tuple) => tuple[1]))])
  )

/** @internal */
const zipChunks = <A, B, C>(
  left: Chunk.Chunk<A>,
  right: Chunk.Chunk<B>,
  f: (a: A, b: B) => C
): [Chunk.Chunk<C>, Either.Either<Chunk.Chunk<B>, Chunk.Chunk<A>>] => {
  if (left.length > right.length) {
    return [
      pipe(left, Chunk.take(right.length), Chunk.zipWith(right, f)),
      Either.left(pipe(left, Chunk.drop(right.length)))
    ]
  }
  return [
    pipe(left, Chunk.zipWith(pipe(right, Chunk.take(left.length)), f)),
    Either.right(pipe(right, Chunk.drop(left.length)))
  ]
}

// Do notation

/** @internal */
export const Do: Stream.Stream<{}> = succeed({})

/** @internal */
export const bind = dual<
  <N extends string, A, B, E2, R2>(
    tag: Exclude<N, keyof A>,
    f: (_: Types.NoInfer<A>) => Stream.Stream<B, E2, R2>,
    options?: {
      readonly concurrency?: number | "unbounded" | undefined
      readonly bufferSize?: number | undefined
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<
    { [K in keyof A | N]: K extends keyof A ? A[K] : B },
    E | E2,
    R | R2
  >,
  <A, E, R, N extends string, B, E2, R2>(
    self: Stream.Stream<A, E, R>,
    tag: Exclude<N, keyof A>,
    f: (_: Types.NoInfer<A>) => Stream.Stream<B, E2, R2>,
    options?: {
      readonly concurrency?: number | "unbounded" | undefined
      readonly bufferSize?: number | undefined
    }
  ) => Stream.Stream<
    { [K in keyof A | N]: K extends keyof A ? A[K] : B },
    E | E2,
    R | R2
  >
>((args) => typeof args[0] !== "string", <A, E, R, N extends string, B, E2, R2>(
  self: Stream.Stream<A, E, R>,
  tag: Exclude<N, keyof A>,
  f: (_: A) => Stream.Stream<B, E2, R2>,
  options?: {
    readonly concurrency?: number | "unbounded" | undefined
    readonly bufferSize?: number | undefined
  }
) =>
  flatMap(self, (k) =>
    map(
      f(k),
      (a) => ({ ...k, [tag]: a } as { [K in keyof A | N]: K extends keyof A ? A[K] : B })
    ), options))

/* @internal */
export const bindTo: {
  <N extends string>(name: N): <A, E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<{ [K in N]: A }, E, R>
  <A, E, R, N extends string>(self: Stream.Stream<A, E, R>, name: N): Stream.Stream<{ [K in N]: A }, E, R>
} = doNotation.bindTo<Stream.StreamTypeLambda>(map)

/* @internal */
export const let_: {
  <N extends string, A extends object, B>(
    name: Exclude<N, keyof A>,
    f: (a: Types.NoInfer<A>) => B
  ): <E, R>(
    self: Stream.Stream<A, E, R>
  ) => Stream.Stream<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E, R>
  <A extends object, E, R, N extends string, B>(
    self: Stream.Stream<A, E, R>,
    name: Exclude<N, keyof A>,
    f: (a: Types.NoInfer<A>) => B
  ): Stream.Stream<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E, R>
} = doNotation.let_<Stream.StreamTypeLambda>(map)

// Circular with Channel

/** @internal */
export const channelToStream = <OutElem, OutErr, OutDone, Env>(
  self: Channel.Channel<Chunk.Chunk<OutElem>, unknown, OutErr, unknown, OutDone, unknown, Env>
): Stream.Stream<OutElem, OutErr, Env> => {
  return new StreamImpl(self)
}

// =============================================================================
// encoding
// =============================================================================

/** @internal */
export const decodeText = dual<
  (encoding?: string) => <E, R>(self: Stream.Stream<Uint8Array, E, R>) => Stream.Stream<string, E, R>,
  <E, R>(self: Stream.Stream<Uint8Array, E, R>, encoding?: string) => Stream.Stream<string, E, R>
>((args) => isStream(args[0]), (self, encoding = "utf-8") =>
  suspend(() => {
    const decoder = new TextDecoder(encoding)
    return map(self, (s) => decoder.decode(s, { stream: true }))
  }))

/** @internal */
export const encodeText = <E, R>(self: Stream.Stream<string, E, R>): Stream.Stream<Uint8Array, E, R> =>
  suspend(() => {
    const encoder = new TextEncoder()
    return map(self, (s) => encoder.encode(s))
  })

/** @internal */
export const fromEventListener = <A = unknown>(
  target: Stream.EventListener<A>,
  type: string,
  options?: boolean | {
    readonly capture?: boolean
    readonly passive?: boolean
    readonly once?: boolean
    readonly bufferSize?: number | "unbounded" | undefined
  } | undefined
): Stream.Stream<A> =>
  asyncPush<A>((emit) =>
    Effect.acquireRelease(
      Effect.sync(() => target.addEventListener(type, emit.single as any, options)),
      () => Effect.sync(() => target.removeEventListener(type, emit.single, options))
    ), { bufferSize: typeof options === "object" ? options.bufferSize : undefined })
