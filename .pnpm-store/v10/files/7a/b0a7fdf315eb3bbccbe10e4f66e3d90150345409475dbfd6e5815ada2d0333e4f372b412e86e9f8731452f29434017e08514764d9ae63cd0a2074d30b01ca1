import * as Cause from "../Cause.js"
import type * as Channel from "../Channel.js"
import * as Chunk from "../Chunk.js"
import * as Deferred from "../Deferred.js"
import * as Effect from "../Effect.js"
import * as Effectable from "../Effectable.js"
import * as Exit from "../Exit.js"
import { dual, pipe } from "../Function.js"
import type * as GroupBy from "../GroupBy.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty, type Predicate } from "../Predicate.js"
import * as Queue from "../Queue.js"
import * as Ref from "../Ref.js"
import * as Scope from "../Scope.js"
import type * as Stream from "../Stream.js"
import type * as Take from "../Take.js"
import type { NoInfer } from "../Types.js"
import * as channel from "./channel.js"
import * as channelExecutor from "./channel/channelExecutor.js"
import * as core from "./core-stream.js"
import * as stream from "./stream.js"
import * as take from "./take.js"

/** @internal */
const GroupBySymbolKey = "effect/GroupBy"

/** @internal */
export const GroupByTypeId: GroupBy.GroupByTypeId = Symbol.for(
  GroupBySymbolKey
) as GroupBy.GroupByTypeId

const groupByVariance = {
  /* c8 ignore next */
  _R: (_: never) => _,
  /* c8 ignore next */
  _E: (_: never) => _,
  /* c8 ignore next */
  _K: (_: never) => _,
  /* c8 ignore next */
  _V: (_: never) => _
}

/** @internal */
export const isGroupBy = (u: unknown): u is GroupBy.GroupBy<unknown, unknown, unknown, unknown> =>
  hasProperty(u, GroupByTypeId)

/** @internal */
export const evaluate = dual<
  <K, V, E, A, E2, R2>(
    f: (key: K, stream: Stream.Stream<V, E>) => Stream.Stream<A, E2, R2>,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ) => <R>(self: GroupBy.GroupBy<K, V, E, R>) => Stream.Stream<A, E | E2, R2 | R>,
  <K, V, E, R, A, E2, R2>(
    self: GroupBy.GroupBy<K, V, E, R>,
    f: (key: K, stream: Stream.Stream<V, E>) => Stream.Stream<A, E2, R2>,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ) => Stream.Stream<A, E | E2, R2 | R>
>(
  (args) => isGroupBy(args[0]),
  <K, V, E, R, A, E2, R2>(
    self: GroupBy.GroupBy<K, V, E, R>,
    f: (key: K, stream: Stream.Stream<V, E>) => Stream.Stream<A, E2, R2>,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ): Stream.Stream<A, E | E2, R2 | R> =>
    stream.flatMap(
      self.grouped,
      ([key, queue]) => f(key, stream.flattenTake(stream.fromQueue(queue, { shutdown: true }))),
      { concurrency: "unbounded", bufferSize: options?.bufferSize ?? 16 }
    )
)

/** @internal */
export const filter = dual<
  <K>(predicate: Predicate<NoInfer<K>>) => <V, E, R>(self: GroupBy.GroupBy<K, V, E, R>) => GroupBy.GroupBy<K, V, E, R>,
  <K, V, E, R>(self: GroupBy.GroupBy<K, V, E, R>, predicate: Predicate<K>) => GroupBy.GroupBy<K, V, E, R>
>(2, <K, V, E, R>(self: GroupBy.GroupBy<K, V, E, R>, predicate: Predicate<K>): GroupBy.GroupBy<K, V, E, R> =>
  make(
    pipe(
      self.grouped,
      stream.filterEffect((tuple) => {
        if (predicate(tuple[0])) {
          return pipe(Effect.succeed(tuple), Effect.as(true))
        }
        return pipe(Queue.shutdown(tuple[1]), Effect.as(false))
      })
    )
  ))

/** @internal */
export const first = dual<
  (n: number) => <K, V, E, R>(self: GroupBy.GroupBy<K, V, E, R>) => GroupBy.GroupBy<K, V, E, R>,
  <K, V, E, R>(self: GroupBy.GroupBy<K, V, E, R>, n: number) => GroupBy.GroupBy<K, V, E, R>
>(2, <K, V, E, R>(self: GroupBy.GroupBy<K, V, E, R>, n: number): GroupBy.GroupBy<K, V, E, R> =>
  make(
    pipe(
      stream.zipWithIndex(self.grouped),
      stream.filterEffect((tuple) => {
        const index = tuple[1]
        const queue = tuple[0][1]
        if (index < n) {
          return pipe(Effect.succeed(tuple), Effect.as(true))
        }
        return pipe(Queue.shutdown(queue), Effect.as(false))
      }),
      stream.map((tuple) => tuple[0])
    )
  ))

/** @internal */
export const make = <K, V, E, R>(
  grouped: Stream.Stream<readonly [K, Queue.Dequeue<Take.Take<V, E>>], E, R>
): GroupBy.GroupBy<K, V, E, R> => ({
  [GroupByTypeId]: groupByVariance,
  pipe() {
    return pipeArguments(this, arguments)
  },
  grouped
})

// Circular with Stream

/** @internal */
export const groupBy = dual<
  <A, K, V, E2, R2>(
    f: (a: A) => Effect.Effect<readonly [K, V], E2, R2>,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => GroupBy.GroupBy<K, V, E2 | E, R2 | R>,
  <A, E, R, K, V, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<readonly [K, V], E2, R2>,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ) => GroupBy.GroupBy<K, V, E2 | E, R2 | R>
>(
  (args) => stream.isStream(args[0]),
  <A, E, R, K, V, E2, R2>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<readonly [K, V], E2, R2>,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ): GroupBy.GroupBy<K, V, E | E2, R | R2> =>
    make(
      stream.unwrapScoped(
        Effect.gen(function*() {
          const decider = yield* Deferred.make<(key: K, value: V) => Effect.Effect<Predicate<number>>>()
          const output = yield* Effect.acquireRelease(
            Queue.bounded<Exit.Exit<readonly [K, Queue.Dequeue<Take.Take<V, E | E2>>], Option.Option<E | E2>>>(
              options?.bufferSize ?? 16
            ),
            (queue) => Queue.shutdown(queue)
          )
          const ref = yield* Ref.make<Map<K, number>>(new Map())
          const add = yield* pipe(
            stream.mapEffectSequential(self, f),
            stream.distributedWithDynamicCallback(
              options?.bufferSize ?? 16,
              ([key, value]) => Effect.flatMap(Deferred.await(decider), (f) => f(key, value)),
              (exit) => Queue.offer(output, exit)
            )
          )
          yield* Deferred.succeed(decider, (key, _) =>
            pipe(
              Ref.get(ref),
              Effect.map((map) => Option.fromNullable(map.get(key))),
              Effect.flatMap(Option.match({
                onNone: () =>
                  Effect.flatMap(add, ([index, queue]) =>
                    Effect.zipRight(
                      Ref.update(ref, (map) => map.set(key, index)),
                      pipe(
                        Queue.offer(
                          output,
                          Exit.succeed(
                            [
                              key,
                              mapDequeue(queue, (exit) =>
                                new take.TakeImpl(pipe(
                                  exit,
                                  Exit.map((tuple) => Chunk.of(tuple[1]))
                                )))
                            ] as const
                          )
                        ),
                        Effect.as<Predicate<number>>((n: number) => n === index)
                      )
                    )),
                onSome: (index) => Effect.succeed<Predicate<number>>((n: number) => n === index)
              }))
            ))
          return stream.flattenExitOption(stream.fromQueue(output, { shutdown: true }))
        })
      )
    )
)

/** @internal */
export const mapEffectOptions = dual<
  {
    <A, A2, E2, R2>(
      f: (a: A) => Effect.Effect<A2, E2, R2>,
      options?: {
        readonly concurrency?: number | "unbounded" | undefined
        readonly unordered?: boolean | undefined
      }
    ): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>
    <A, A2, E2, R2, K>(
      f: (a: A) => Effect.Effect<A2, E2, R2>,
      options: {
        readonly key: (a: A) => K
        readonly bufferSize?: number | undefined
      }
    ): <E, R>(self: Stream.Stream<A, E, R>) => Stream.Stream<A2, E2 | E, R2 | R>
  },
  {
    <A, E, R, A2, E2, R2>(
      self: Stream.Stream<A, E, R>,
      f: (a: A) => Effect.Effect<A2, E2, R2>,
      options?: {
        readonly concurrency?: number | "unbounded" | undefined
        readonly unordered?: boolean | undefined
      }
    ): Stream.Stream<A2, E2 | E, R2 | R>
    <A, E, R, A2, E2, R2, K>(
      self: Stream.Stream<A, E, R>,
      f: (a: A) => Effect.Effect<A2, E2, R2>,
      options: {
        readonly key: (a: A) => K
        readonly bufferSize?: number | undefined
      }
    ): Stream.Stream<A2, E2 | E, R2 | R>
  }
>(
  (args) => typeof args[0] !== "function",
  (<A, E, R, A2, E2, R2, K>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => Effect.Effect<A2, E2, R2>,
    options?: {
      readonly key?: ((a: A) => K) | undefined
      readonly concurrency?: number | "unbounded" | undefined
      readonly unordered?: boolean | undefined
      readonly bufferSize?: number | undefined
    }
  ): Stream.Stream<A2, E2 | E, R2 | R> => {
    if (options?.key) {
      return evaluate(
        groupByKey(self, options.key, { bufferSize: options.bufferSize }),
        (_, s) => stream.mapEffectSequential(s, f)
      )
    }

    return stream.matchConcurrency(
      options?.concurrency,
      () => stream.mapEffectSequential(self, f),
      (n) =>
        options?.unordered ?
          stream.flatMap(self, (a) => stream.fromEffect(f(a)), { concurrency: n }) :
          stream.mapEffectPar(self, n, f)
    )
  }) as any
)

/** @internal */
export const bindEffect = dual<
  <N extends string, A, B, E2, R2>(
    tag: Exclude<N, keyof A>,
    f: (_: NoInfer<A>) => Effect.Effect<B, E2, R2>,
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
    f: (_: NoInfer<A>) => Effect.Effect<B, E2, R2>,
    options?: {
      readonly concurrency?: number | "unbounded" | undefined
      readonly unordered?: boolean | undefined
    }
  ) => Stream.Stream<
    { [K in keyof A | N]: K extends keyof A ? A[K] : B },
    E | E2,
    R | R2
  >
>((args) => typeof args[0] !== "string", <A, E, R, N extends string, B, E2, R2>(
  self: Stream.Stream<A, E, R>,
  tag: Exclude<N, keyof A>,
  f: (_: A) => Effect.Effect<B, E2, R2>,
  options?: {
    readonly concurrency?: number | "unbounded" | undefined
    readonly unordered?: boolean | undefined
  }
) =>
  mapEffectOptions(self, (k) =>
    Effect.map(
      f(k),
      (a) => ({ ...k, [tag]: a } as { [K in keyof A | N]: K extends keyof A ? A[K] : B })
    ), options))

const mapDequeue = <A, B>(dequeue: Queue.Dequeue<A>, f: (a: A) => B): Queue.Dequeue<B> => new MapDequeue(dequeue, f)

class MapDequeue<in out A, out B> extends Effectable.Class<B> implements Queue.Dequeue<B> {
  readonly [Queue.DequeueTypeId] = {
    _Out: (_: never) => _
  }

  constructor(
    readonly dequeue: Queue.Dequeue<A>,
    readonly f: (a: A) => B
  ) {
    super()
  }

  capacity(): number {
    return Queue.capacity(this.dequeue)
  }

  get size(): Effect.Effect<number> {
    return Queue.size(this.dequeue)
  }

  unsafeSize(): Option.Option<number> {
    return this.dequeue.unsafeSize()
  }

  get awaitShutdown(): Effect.Effect<void> {
    return Queue.awaitShutdown(this.dequeue)
  }

  isActive(): boolean {
    return this.dequeue.isActive()
  }

  get isShutdown(): Effect.Effect<boolean> {
    return Queue.isShutdown(this.dequeue)
  }

  get shutdown(): Effect.Effect<void> {
    return Queue.shutdown(this.dequeue)
  }

  get isFull(): Effect.Effect<boolean> {
    return Queue.isFull(this.dequeue)
  }

  get isEmpty(): Effect.Effect<boolean> {
    return Queue.isEmpty(this.dequeue)
  }

  get take(): Effect.Effect<B> {
    return pipe(Queue.take(this.dequeue), Effect.map((a) => this.f(a)))
  }

  get takeAll(): Effect.Effect<Chunk.Chunk<B>> {
    return pipe(Queue.takeAll(this.dequeue), Effect.map(Chunk.map((a) => this.f(a))))
  }

  takeUpTo(max: number): Effect.Effect<Chunk.Chunk<B>> {
    return pipe(Queue.takeUpTo(this.dequeue, max), Effect.map(Chunk.map((a) => this.f(a))))
  }

  takeBetween(min: number, max: number): Effect.Effect<Chunk.Chunk<B>> {
    return pipe(Queue.takeBetween(this.dequeue, min, max), Effect.map(Chunk.map((a) => this.f(a))))
  }

  takeN(n: number): Effect.Effect<Chunk.Chunk<B>> {
    return pipe(Queue.takeN(this.dequeue, n), Effect.map(Chunk.map((a) => this.f(a))))
  }

  poll(): Effect.Effect<Option.Option<B>> {
    return pipe(Queue.poll(this.dequeue), Effect.map(Option.map((a) => this.f(a))))
  }

  pipe() {
    return pipeArguments(this, arguments)
  }

  commit() {
    return this.take
  }
}

/** @internal */
export const groupByKey = dual<
  <A, K>(
    f: (a: A) => K,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ) => <E, R>(self: Stream.Stream<A, E, R>) => GroupBy.GroupBy<K, A, E, R>,
  <A, E, R, K>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => K,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ) => GroupBy.GroupBy<K, A, E, R>
>(
  (args) => typeof args[0] !== "function",
  <A, E, R, K>(
    self: Stream.Stream<A, E, R>,
    f: (a: A) => K,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ): GroupBy.GroupBy<K, A, E, R> => {
    const loop = (
      map: Map<K, Queue.Queue<Take.Take<A, E>>>,
      outerQueue: Queue.Queue<Take.Take<readonly [K, Queue.Queue<Take.Take<A, E>>], E>>
    ): Channel.Channel<never, Chunk.Chunk<A>, E, E, unknown, unknown, R> =>
      core.readWithCause({
        onInput: (input: Chunk.Chunk<A>) =>
          core.flatMap(
            core.fromEffect(
              Effect.forEach(groupByIterable(input, f), ([key, values]) => {
                const innerQueue = map.get(key)
                if (innerQueue === undefined) {
                  return pipe(
                    Queue.bounded<Take.Take<A, E>>(options?.bufferSize ?? 16),
                    Effect.flatMap((innerQueue) =>
                      pipe(
                        Effect.sync(() => {
                          map.set(key, innerQueue)
                        }),
                        Effect.zipRight(
                          Queue.offer(outerQueue, take.of([key, innerQueue] as const))
                        ),
                        Effect.zipRight(
                          pipe(
                            Queue.offer(innerQueue, take.chunk(values)),
                            Effect.catchSomeCause((cause) =>
                              Cause.isInterruptedOnly(cause) ?
                                Option.some(Effect.void) :
                                Option.none()
                            )
                          )
                        )
                      )
                    )
                  )
                }
                return Effect.catchSomeCause(
                  Queue.offer(innerQueue, take.chunk(values)),
                  (cause) =>
                    Cause.isInterruptedOnly(cause) ?
                      Option.some(Effect.void) :
                      Option.none()
                )
              }, { discard: true })
            ),
            () => loop(map, outerQueue)
          ),
        onFailure: (cause) => core.fromEffect(Queue.offer(outerQueue, take.failCause(cause))),
        onDone: () =>
          core.fromEffect(
            pipe(
              Effect.forEach(map.entries(), ([_, innerQueue]) =>
                pipe(
                  Queue.offer(innerQueue, take.end),
                  Effect.catchSomeCause((cause) =>
                    Cause.isInterruptedOnly(cause) ?
                      Option.some(Effect.void) :
                      Option.none()
                  )
                ), { discard: true }),
              Effect.zipRight(Queue.offer(outerQueue, take.end))
            )
          )
      })
    return make(stream.unwrapScopedWith((scope) =>
      Effect.gen(function*() {
        const map = new Map<K, Queue.Queue<Take.Take<A, E>>>()
        const queue = yield* Queue.unbounded<Take.Take<readonly [K, Queue.Queue<Take.Take<A, E>>], E>>()
        yield* Scope.addFinalizer(scope, Queue.shutdown(queue))
        return yield* stream.toChannel(self).pipe(
          core.pipeTo(loop(map, queue)),
          channel.drain,
          channelExecutor.runIn(scope),
          Effect.forkIn(scope),
          Effect.as(stream.flattenTake(stream.fromQueue(queue, { shutdown: true })))
        )
      })
    ))
  }
)

/**
 * A variant of `groupBy` that retains the insertion order of keys.
 *
 * @internal
 */
const groupByIterable = dual<
  <V, K>(f: (value: V) => K) => (iterable: Iterable<V>) => Chunk.Chunk<[K, Chunk.Chunk<V>]>,
  <V, K>(iterable: Iterable<V>, f: (value: V) => K) => Chunk.Chunk<[K, Chunk.Chunk<V>]>
>(2, <V, K>(iterable: Iterable<V>, f: (value: V) => K): Chunk.Chunk<[K, Chunk.Chunk<V>]> => {
  const builder: Array<[K, Array<V>]> = []
  const iterator = iterable[Symbol.iterator]()
  const map = new Map<K, Array<V>>()
  let next: IteratorResult<V, any>
  while ((next = iterator.next()) && !next.done) {
    const value = next.value
    const key = f(value)
    if (map.has(key)) {
      const innerBuilder = map.get(key)!
      innerBuilder.push(value)
    } else {
      const innerBuilder: Array<V> = [value]
      builder.push([key, innerBuilder])
      map.set(key, innerBuilder)
    }
  }
  return Chunk.unsafeFromArray(
    builder.map((tuple) => [tuple[0], Chunk.unsafeFromArray(tuple[1])])
  )
})
