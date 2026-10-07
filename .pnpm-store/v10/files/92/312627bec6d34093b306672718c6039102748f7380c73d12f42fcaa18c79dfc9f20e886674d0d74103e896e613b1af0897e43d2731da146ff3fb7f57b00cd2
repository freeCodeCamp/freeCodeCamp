import * as Arr from "../Array.js"
import * as Cause from "../Cause.js"
import type * as Channel from "../Channel.js"
import * as Chunk from "../Chunk.js"
import * as Clock from "../Clock.js"
import type * as Context from "../Context.js"
import * as Duration from "../Duration.js"
import * as Effect from "../Effect.js"
import * as Either from "../Either.js"
import * as Exit from "../Exit.js"
import { constTrue, dual, identity, pipe } from "../Function.js"
import type { LazyArg } from "../Function.js"
import * as HashMap from "../HashMap.js"
import * as HashSet from "../HashSet.js"
import type * as MergeDecision from "../MergeDecision.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty, type Predicate, type Refinement } from "../Predicate.js"
import * as PubSub from "../PubSub.js"
import * as Queue from "../Queue.js"
import * as Ref from "../Ref.js"
import * as Scope from "../Scope.js"
import type * as Sink from "../Sink.js"
import type * as Types from "../Types.js"
import * as channel from "./channel.js"
import * as mergeDecision from "./channel/mergeDecision.js"
import * as core from "./core-stream.js"

/** @internal */
export const SinkTypeId: Sink.SinkTypeId = Symbol.for("effect/Sink") as Sink.SinkTypeId

const sinkVariance = {
  /* c8 ignore next */
  _A: (_: never) => _,
  /* c8 ignore next */
  _In: (_: unknown) => _,
  /* c8 ignore next */
  _L: (_: never) => _,
  /* c8 ignore next */
  _E: (_: never) => _,
  /* c8 ignore next */
  _R: (_: never) => _
}

/** @internal */
export class SinkImpl<out A, in In = unknown, out L = never, out E = never, out R = never>
  implements Sink.Sink<A, In, L, E, R>
{
  readonly [SinkTypeId] = sinkVariance
  constructor(
    readonly channel: Channel.Channel<Chunk.Chunk<L>, Chunk.Chunk<In>, E, never, A, unknown, R>
  ) {
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const isSink = (u: unknown): u is Sink.Sink<unknown, unknown, unknown, unknown, unknown> =>
  hasProperty(u, SinkTypeId)

/** @internal */
export const suspend = <A, In, L, E, R>(evaluate: LazyArg<Sink.Sink<A, In, L, E, R>>): Sink.Sink<A, In, L, E, R> =>
  new SinkImpl(core.suspend(() => toChannel(evaluate())))

/** @internal */
export const as = dual<
  <A2>(a: A2) => <A, In, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A2, In, L, E, R>,
  <A, In, L, E, R, A2>(self: Sink.Sink<A, In, L, E, R>, a: A2) => Sink.Sink<A2, In, L, E, R>
>(
  2,
  (self, a) => pipe(self, map(() => a))
)

/** @internal */
export const collectAll = <In>(): Sink.Sink<Chunk.Chunk<In>, In> => new SinkImpl(collectAllLoop(Chunk.empty()))

/** @internal */
const collectAllLoop = <In>(
  acc: Chunk.Chunk<In>
): Channel.Channel<never, Chunk.Chunk<In>, never, never, Chunk.Chunk<In>, unknown> =>
  core.readWithCause({
    onInput: (chunk: Chunk.Chunk<In>) => collectAllLoop(pipe(acc, Chunk.appendAll(chunk))),
    onFailure: core.failCause,
    onDone: () => core.succeed(acc)
  })

/** @internal */
export const collectAllN = <In>(n: number): Sink.Sink<Chunk.Chunk<In>, In, In> =>
  suspend(() => fromChannel(collectAllNLoop(n, Chunk.empty())))

/** @internal */
const collectAllNLoop = <In>(
  n: number,
  acc: Chunk.Chunk<In>
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, never, never, Chunk.Chunk<In>, unknown> =>
  core.readWithCause({
    onInput: (chunk: Chunk.Chunk<In>) => {
      const [collected, leftovers] = Chunk.splitAt(chunk, n)
      if (collected.length < n) {
        return collectAllNLoop(n - collected.length, Chunk.appendAll(acc, collected))
      }
      if (Chunk.isEmpty(leftovers)) {
        return core.succeed(Chunk.appendAll(acc, collected))
      }
      return core.flatMap(core.write(leftovers), () => core.succeed(Chunk.appendAll(acc, collected)))
    },
    onFailure: core.failCause,
    onDone: () => core.succeed(acc)
  })

/** @internal */
export const collectAllFrom = <A, In, L extends In, E, R>(
  self: Sink.Sink<A, In, L, E, R>
): Sink.Sink<Chunk.Chunk<A>, In, L, E, R> =>
  collectAllWhileWith(self, {
    initial: Chunk.empty<A>(),
    while: constTrue,
    body: (chunk, a) => pipe(chunk, Chunk.append(a))
  })

/** @internal */
export const collectAllToMap = <In, K>(
  key: (input: In) => K,
  merge: (x: In, y: In) => In
): Sink.Sink<HashMap.HashMap<K, In>, In> => {
  return foldLeftChunks(HashMap.empty<K, In>(), (map, chunk) =>
    pipe(
      chunk,
      Chunk.reduce(map, (map, input) => {
        const k: K = key(input)
        const v: In = pipe(map, HashMap.has(k)) ?
          merge(pipe(map, HashMap.unsafeGet(k)), input) :
          input
        return pipe(map, HashMap.set(k, v))
      })
    ))
}

/** @internal */
export const collectAllToMapN = <In, K>(
  n: number,
  key: (input: In) => K,
  merge: (x: In, y: In) => In
): Sink.Sink<HashMap.HashMap<K, In>, In, In> => {
  return foldWeighted<HashMap.HashMap<K, In>, In>({
    initial: HashMap.empty(),
    maxCost: n,
    cost: (acc, input) => pipe(acc, HashMap.has(key(input))) ? 0 : 1,
    body: (acc, input) => {
      const k: K = key(input)
      const v: In = pipe(acc, HashMap.has(k)) ?
        merge(pipe(acc, HashMap.unsafeGet(k)), input) :
        input
      return pipe(acc, HashMap.set(k, v))
    }
  })
}

/** @internal */
export const collectAllToSet = <In>(): Sink.Sink<HashSet.HashSet<In>, In> =>
  foldLeftChunks<HashSet.HashSet<In>, In>(
    HashSet.empty(),
    (acc, chunk) => pipe(chunk, Chunk.reduce(acc, (acc, input) => pipe(acc, HashSet.add(input))))
  )

/** @internal */
export const collectAllToSetN = <In>(n: number): Sink.Sink<HashSet.HashSet<In>, In, In> =>
  foldWeighted<HashSet.HashSet<In>, In>({
    initial: HashSet.empty(),
    maxCost: n,
    cost: (acc, input) => HashSet.has(acc, input) ? 0 : 1,
    body: (acc, input) => HashSet.add(acc, input)
  })

/** @internal */
export const collectAllUntil = <In>(p: Predicate<In>): Sink.Sink<Chunk.Chunk<In>, In, In> => {
  return pipe(
    fold<[Chunk.Chunk<In>, boolean], In>(
      [Chunk.empty(), true],
      (tuple) => tuple[1],
      ([chunk, _], input) => [pipe(chunk, Chunk.append(input)), !p(input)]
    ),
    map((tuple) => tuple[0])
  )
}

/** @internal */
export const collectAllUntilEffect = <In, E, R>(p: (input: In) => Effect.Effect<boolean, E, R>) => {
  return pipe(
    foldEffect<[Chunk.Chunk<In>, boolean], In, E, R>(
      [Chunk.empty(), true],
      (tuple) => tuple[1],
      ([chunk, _], input) => pipe(p(input), Effect.map((bool) => [pipe(chunk, Chunk.append(input)), !bool]))
    ),
    map((tuple) => tuple[0])
  )
}

/** @internal */
export const collectAllWhile: {
  <In, Out extends In>(refinement: Refinement<In, Out>): Sink.Sink<Chunk.Chunk<Out>, In, In>
  <In>(predicate: Predicate<In>): Sink.Sink<Chunk.Chunk<In>, In, In>
} = <In>(predicate: Predicate<In>): Sink.Sink<Chunk.Chunk<In>, In, In> =>
  fromChannel(collectAllWhileReader(predicate, Chunk.empty()))

/** @internal */
const collectAllWhileReader = <In>(
  predicate: Predicate<In>,
  done: Chunk.Chunk<In>
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, never, never, Chunk.Chunk<In>, unknown> =>
  core.readWith({
    onInput: (input: Chunk.Chunk<In>) => {
      const [collected, leftovers] = pipe(Chunk.toReadonlyArray(input), Arr.span(predicate))
      if (leftovers.length === 0) {
        return collectAllWhileReader(
          predicate,
          pipe(done, Chunk.appendAll(Chunk.unsafeFromArray(collected)))
        )
      }
      return pipe(
        core.write(Chunk.unsafeFromArray(leftovers)),
        channel.zipRight(core.succeed(pipe(done, Chunk.appendAll(Chunk.unsafeFromArray(collected)))))
      )
    },
    onFailure: core.fail,
    onDone: () => core.succeed(done)
  })

/** @internal */
export const collectAllWhileEffect = <In, E, R>(
  predicate: (input: In) => Effect.Effect<boolean, E, R>
): Sink.Sink<Chunk.Chunk<In>, In, In, E, R> => fromChannel(collectAllWhileEffectReader(predicate, Chunk.empty()))

/** @internal */
const collectAllWhileEffectReader = <In, R, E>(
  predicate: (input: In) => Effect.Effect<boolean, E, R>,
  done: Chunk.Chunk<In>
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, E, never, Chunk.Chunk<In>, unknown, R> =>
  core.readWith({
    onInput: (input: Chunk.Chunk<In>) =>
      pipe(
        core.fromEffect(pipe(input, Effect.takeWhile(predicate), Effect.map(Chunk.unsafeFromArray))),
        core.flatMap((collected) => {
          const leftovers = pipe(input, Chunk.drop(collected.length))
          if (Chunk.isEmpty(leftovers)) {
            return collectAllWhileEffectReader(predicate, pipe(done, Chunk.appendAll(collected)))
          }
          return pipe(core.write(leftovers), channel.zipRight(core.succeed(pipe(done, Chunk.appendAll(collected)))))
        })
      ),
    onFailure: core.fail,
    onDone: () => core.succeed(done)
  })

/** @internal */
export const collectAllWhileWith: {
  <A, S>(
    options: {
      readonly initial: S
      readonly while: Predicate<A>
      readonly body: (s: S, a: A) => S
    }
  ): <In, L extends In, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<S, In, L, E, R>
  <A, In, L extends In, E, R, S>(
    self: Sink.Sink<A, In, L, E, R>,
    options: {
      readonly initial: S
      readonly while: Predicate<A>
      readonly body: (s: S, a: A) => S
    }
  ): Sink.Sink<S, In, L, E, R>
} = dual(
  2,
  <A, In, L extends In, E, R, S>(
    self: Sink.Sink<A, In, L, E, R>,
    options: {
      readonly initial: S
      readonly while: Predicate<A>
      readonly body: (s: S, a: A) => S
    }
  ): Sink.Sink<S, In, L, E, R> => {
    const refs = pipe(
      Ref.make(Chunk.empty<In>()),
      Effect.zip(Ref.make(false))
    )
    const newChannel = pipe(
      core.fromEffect(refs),
      core.flatMap(([leftoversRef, upstreamDoneRef]) => {
        const upstreamMarker: Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, never, never, unknown, unknown> = core
          .readWith({
            onInput: (input) => pipe(core.write(input), core.flatMap(() => upstreamMarker)),
            onFailure: core.fail,
            onDone: (done) => pipe(core.fromEffect(Ref.set(upstreamDoneRef, true)), channel.as(done))
          })
        return pipe(
          upstreamMarker,
          core.pipeTo(channel.bufferChunk(leftoversRef)),
          core.pipeTo(
            collectAllWhileWithLoop(self, leftoversRef, upstreamDoneRef, options.initial, options.while, options.body)
          )
        )
      })
    )
    return new SinkImpl(newChannel)
  }
)

const collectAllWhileWithLoop = <Z, In, L extends In, E, R, S>(
  self: Sink.Sink<Z, In, L, E, R>,
  leftoversRef: Ref.Ref<Chunk.Chunk<In>>,
  upstreamDoneRef: Ref.Ref<boolean>,
  currentResult: S,
  p: Predicate<Z>,
  f: (s: S, z: Z) => S
): Channel.Channel<Chunk.Chunk<L>, Chunk.Chunk<In>, E, never, S, unknown, R> => {
  return pipe(
    toChannel(self),
    channel.doneCollect,
    channel.foldChannel({
      onFailure: core.fail,
      onSuccess: ([leftovers, doneValue]) =>
        p(doneValue)
          ? pipe(
            core.fromEffect(
              Ref.set(leftoversRef, Chunk.flatten(leftovers as Chunk.Chunk<Chunk.Chunk<In>>))
            ),
            core.flatMap(() =>
              pipe(
                core.fromEffect(Ref.get(upstreamDoneRef)),
                core.flatMap((upstreamDone) => {
                  const accumulatedResult = f(currentResult, doneValue)
                  return upstreamDone
                    ? pipe(core.write(Chunk.flatten(leftovers)), channel.as(accumulatedResult))
                    : collectAllWhileWithLoop(self, leftoversRef, upstreamDoneRef, accumulatedResult, p, f)
                })
              )
            )
          )
          : pipe(core.write(Chunk.flatten(leftovers)), channel.as(currentResult))
    })
  )
}

/** @internal */
export const collectLeftover = <A, In, L, E, R>(
  self: Sink.Sink<A, In, L, E, R>
): Sink.Sink<[A, Chunk.Chunk<L>], In, never, E, R> =>
  new SinkImpl(pipe(core.collectElements(toChannel(self)), channel.map(([chunks, z]) => [z, Chunk.flatten(chunks)])))

/** @internal */
export const mapInput = dual<
  <In0, In>(f: (input: In0) => In) => <A, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In0, L, E, R>,
  <A, In, L, E, R, In0>(self: Sink.Sink<A, In, L, E, R>, f: (input: In0) => In) => Sink.Sink<A, In0, L, E, R>
>(
  2,
  <A, In, L, E, R, In0>(self: Sink.Sink<A, In, L, E, R>, f: (input: In0) => In): Sink.Sink<A, In0, L, E, R> =>
    pipe(self, mapInputChunks(Chunk.map(f)))
)

/** @internal */
export const mapInputEffect = dual<
  <In0, In, E2, R2>(
    f: (input: In0) => Effect.Effect<In, E2, R2>
  ) => <A, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In0, L, E2 | E, R2 | R>,
  <A, In, L, E, R, In0, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    f: (input: In0) => Effect.Effect<In, E2, R2>
  ) => Sink.Sink<A, In0, L, E2 | E, R2 | R>
>(
  2,
  <A, In, L, E, R, In0, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    f: (input: In0) => Effect.Effect<In, E2, R2>
  ): Sink.Sink<A, In0, L, E | E2, R | R2> =>
    mapInputChunksEffect(
      self,
      (chunk) =>
        Effect.map(
          Effect.forEach(chunk, (v) => f(v)),
          Chunk.unsafeFromArray
        )
    )
)

/** @internal */
export const mapInputChunks = dual<
  <In0, In>(
    f: (chunk: Chunk.Chunk<In0>) => Chunk.Chunk<In>
  ) => <A, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In0, L, E, R>,
  <A, In, L, E, R, In0>(
    self: Sink.Sink<A, In, L, E, R>,
    f: (chunk: Chunk.Chunk<In0>) => Chunk.Chunk<In>
  ) => Sink.Sink<A, In0, L, E, R>
>(
  2,
  <A, In, L, E, R, In0>(
    self: Sink.Sink<A, In, L, E, R>,
    f: (chunk: Chunk.Chunk<In0>) => Chunk.Chunk<In>
  ): Sink.Sink<A, In0, L, E, R> => {
    const loop: Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In0>, never, never, unknown, unknown, R> = core.readWith({
      onInput: (chunk) => pipe(core.write(f(chunk)), core.flatMap(() => loop)),
      onFailure: core.fail,
      onDone: core.succeed
    })
    return new SinkImpl(pipe(loop, core.pipeTo(toChannel(self))))
  }
)

/** @internal */
export const mapInputChunksEffect = dual<
  <In0, In, E2, R2>(
    f: (chunk: Chunk.Chunk<In0>) => Effect.Effect<Chunk.Chunk<In>, E2, R2>
  ) => <A, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In0, L, E2 | E, R2 | R>,
  <A, In, L, E, R, In0, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    f: (chunk: Chunk.Chunk<In0>) => Effect.Effect<Chunk.Chunk<In>, E2, R2>
  ) => Sink.Sink<A, In0, L, E2 | E, R2 | R>
>(
  2,
  <A, In, L, E, R, In0, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    f: (chunk: Chunk.Chunk<In0>) => Effect.Effect<Chunk.Chunk<In>, E2, R2>
  ): Sink.Sink<A, In0, L, E | E2, R | R2> => {
    const loop: Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In0>, E2, never, unknown, unknown, R | R2> = core
      .readWith({
        onInput: (chunk) => pipe(core.fromEffect(f(chunk)), core.flatMap(core.write), core.flatMap(() => loop)),
        onFailure: core.fail,
        onDone: core.succeed
      })
    return new SinkImpl(pipe(loop, channel.pipeToOrFail(toChannel(self))))
  }
)

/** @internal */
export const die = (defect: unknown): Sink.Sink<never, unknown> => failCause(Cause.die(defect))

/** @internal */
export const dieMessage = (message: string): Sink.Sink<never, unknown> =>
  failCause(Cause.die(new Cause.RuntimeException(message)))

/** @internal */
export const dieSync = (evaluate: LazyArg<unknown>): Sink.Sink<never, unknown> =>
  failCauseSync(() => Cause.die(evaluate()))

/** @internal */
export const dimap = dual<
  <In0, In, A, A2>(
    options: {
      readonly onInput: (input: In0) => In
      readonly onDone: (a: A) => A2
    }
  ) => <L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A2, In0, L, E, R>,
  <A, In, L, E, R, In0, A2>(
    self: Sink.Sink<A, In, L, E, R>,
    options: {
      readonly onInput: (input: In0) => In
      readonly onDone: (a: A) => A2
    }
  ) => Sink.Sink<A2, In0, L, E, R>
>(
  2,
  <A, In, L, E, R, In0, A2>(
    self: Sink.Sink<A, In, L, E, R>,
    options: {
      readonly onInput: (input: In0) => In
      readonly onDone: (a: A) => A2
    }
  ): Sink.Sink<A2, In0, L, E, R> => map(mapInput(self, options.onInput), options.onDone)
)

/** @internal */
export const dimapEffect = dual<
  <In0, In, E2, R2, A, A2, E3, R3>(
    options: {
      readonly onInput: (input: In0) => Effect.Effect<In, E2, R2>
      readonly onDone: (a: A) => Effect.Effect<A2, E3, R3>
    }
  ) => <L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A2, In0, L, E2 | E3 | E, R2 | R3 | R>,
  <A, In, L, E, R, In0, E2, R2, A2, E3, R3>(
    self: Sink.Sink<A, In, L, E, R>,
    options: {
      readonly onInput: (input: In0) => Effect.Effect<In, E2, R2>
      readonly onDone: (a: A) => Effect.Effect<A2, E3, R3>
    }
  ) => Sink.Sink<A2, In0, L, E2 | E3 | E, R2 | R3 | R>
>(
  2,
  (self, options) =>
    mapEffect(
      mapInputEffect(self, options.onInput),
      options.onDone
    )
)

/** @internal */
export const dimapChunks = dual<
  <In0, In, A, A2>(
    options: {
      readonly onInput: (chunk: Chunk.Chunk<In0>) => Chunk.Chunk<In>
      readonly onDone: (a: A) => A2
    }
  ) => <L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A2, In0, L, E, R>,
  <A, In, L, E, R, In0, A2>(
    self: Sink.Sink<A, In, L, E, R>,
    options: {
      readonly onInput: (chunk: Chunk.Chunk<In0>) => Chunk.Chunk<In>
      readonly onDone: (a: A) => A2
    }
  ) => Sink.Sink<A2, In0, L, E, R>
>(
  2,
  (self, options) =>
    map(
      mapInputChunks(self, options.onInput),
      options.onDone
    )
)

/** @internal */
export const dimapChunksEffect = dual<
  <In0, In, E2, R2, A, A2, E3, R3>(
    options: {
      readonly onInput: (chunk: Chunk.Chunk<In0>) => Effect.Effect<Chunk.Chunk<In>, E2, R2>
      readonly onDone: (a: A) => Effect.Effect<A2, E3, R3>
    }
  ) => <L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A2, In0, L, E2 | E3 | E, R2 | R3 | R>,
  <A, In, L, E, R, In0, E2, R2, A2, E3, R3>(
    self: Sink.Sink<A, In, L, E, R>,
    options: {
      readonly onInput: (chunk: Chunk.Chunk<In0>) => Effect.Effect<Chunk.Chunk<In>, E2, R2>
      readonly onDone: (a: A) => Effect.Effect<A2, E3, R3>
    }
  ) => Sink.Sink<A2, In0, L, E2 | E3 | E, R2 | R3 | R>
>(
  2,
  (self, options) => mapEffect(mapInputChunksEffect(self, options.onInput), options.onDone)
)

/** @internal */
export const drain: Sink.Sink<void, unknown> = new SinkImpl(
  channel.drain(channel.identityChannel())
)

/** @internal */
export const drop = <In>(n: number): Sink.Sink<unknown, In, In> => suspend(() => new SinkImpl(dropLoop(n)))

/** @internal */
const dropLoop = <In>(
  n: number
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, never, never, unknown, unknown> =>
  core.readWith({
    onInput: (input: Chunk.Chunk<In>) => {
      const dropped = pipe(input, Chunk.drop(n))
      const leftover = Math.max(n - input.length, 0)
      const more = Chunk.isEmpty(input) || leftover > 0
      if (more) {
        return dropLoop(leftover)
      }
      return pipe(
        core.write(dropped),
        channel.zipRight(channel.identityChannel<Chunk.Chunk<In>, never, unknown>())
      )
    },
    onFailure: core.fail,
    onDone: () => core.void
  })

/** @internal */
export const dropUntil = <In>(predicate: Predicate<In>): Sink.Sink<unknown, In, In> =>
  new SinkImpl(
    pipe(toChannel(dropWhile((input: In) => !predicate(input))), channel.pipeToOrFail(toChannel(drop<In>(1))))
  )

/** @internal */
export const dropUntilEffect = <In, E, R>(
  predicate: (input: In) => Effect.Effect<boolean, E, R>
): Sink.Sink<unknown, In, In, E, R> => suspend(() => new SinkImpl(dropUntilEffectReader(predicate)))

/** @internal */
const dropUntilEffectReader = <In, R, E>(
  predicate: (input: In) => Effect.Effect<boolean, E, R>
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, E, E, unknown, unknown, R> =>
  core.readWith({
    onInput: (input: Chunk.Chunk<In>) =>
      pipe(
        input,
        Effect.dropUntil(predicate),
        Effect.map((leftover) => {
          const more = leftover.length === 0
          return more ?
            dropUntilEffectReader(predicate) :
            pipe(
              core.write(Chunk.unsafeFromArray(leftover)),
              channel.zipRight(channel.identityChannel<Chunk.Chunk<In>, E, unknown>())
            )
        }),
        channel.unwrap
      ),
    onFailure: core.fail,
    onDone: () => core.void
  })

/** @internal */
export const dropWhile = <In>(predicate: Predicate<In>): Sink.Sink<unknown, In, In> =>
  new SinkImpl(dropWhileReader(predicate))

/** @internal */
const dropWhileReader = <In>(
  predicate: Predicate<In>
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, never, never, unknown, unknown> =>
  core.readWith({
    onInput: (input: Chunk.Chunk<In>) => {
      const out = pipe(input, Chunk.dropWhile(predicate))
      if (Chunk.isEmpty(out)) {
        return dropWhileReader(predicate)
      }
      return pipe(core.write(out), channel.zipRight(channel.identityChannel<Chunk.Chunk<In>, never, unknown>()))
    },
    onFailure: core.fail,
    onDone: core.succeedNow
  })

/** @internal */
export const dropWhileEffect = <In, E, R>(
  predicate: (input: In) => Effect.Effect<boolean, E, R>
): Sink.Sink<unknown, In, In, E, R> => suspend(() => new SinkImpl(dropWhileEffectReader(predicate)))

/** @internal */
const dropWhileEffectReader = <In, R, E>(
  predicate: (input: In) => Effect.Effect<boolean, E, R>
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, E, E, unknown, unknown, R> =>
  core.readWith({
    onInput: (input: Chunk.Chunk<In>) =>
      pipe(
        input,
        Effect.dropWhile(predicate),
        Effect.map((leftover) => {
          const more = leftover.length === 0
          return more ?
            dropWhileEffectReader(predicate) :
            pipe(
              core.write(Chunk.unsafeFromArray(leftover)),
              channel.zipRight(channel.identityChannel<Chunk.Chunk<In>, E, unknown>())
            )
        }),
        channel.unwrap
      ),
    onFailure: core.fail,
    onDone: () => core.void
  })

/** @internal */
export const ensuring = dual<
  <X, R2>(
    finalizer: Effect.Effect<X, never, R2>
  ) => <A, In, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In, L, E, R2 | R>,
  <A, In, L, E, R, X, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    finalizer: Effect.Effect<X, never, R2>
  ) => Sink.Sink<A, In, L, E, R2 | R>
>(
  2,
  (self, finalizer) => new SinkImpl(pipe(self, toChannel, channel.ensuring(finalizer)))
)

/** @internal */
export const ensuringWith = dual<
  <A, E, X, R2>(
    finalizer: (exit: Exit.Exit<A, E>) => Effect.Effect<X, never, R2>
  ) => <In, L, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In, L, E, R2 | R>,
  <A, In, L, E, R, X, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    finalizer: (exit: Exit.Exit<A, E>) => Effect.Effect<X, never, R2>
  ) => Sink.Sink<A, In, L, E, R2 | R>
>(
  2,
  (self, finalizer) => new SinkImpl(pipe(self, toChannel, core.ensuringWith(finalizer)))
)

/** @internal */
export const context = <R>(): Sink.Sink<Context.Context<R>, unknown, never, never, R> => fromEffect(Effect.context<R>())

/** @internal */
export const contextWith = <R, Z>(
  f: (context: Context.Context<R>) => Z
): Sink.Sink<Z, unknown, never, never, R> => pipe(context<R>(), map(f))

/** @internal */
export const contextWithEffect = <R0, A, E, R>(
  f: (context: Context.Context<R0>) => Effect.Effect<A, E, R>
): Sink.Sink<A, unknown, never, E, R0 | R> => pipe(context<R0>(), mapEffect(f))

/** @internal */
export const contextWithSink = <R0, A, In, L, E, R>(
  f: (context: Context.Context<R0>) => Sink.Sink<A, In, L, E, R>
): Sink.Sink<A, In, L, E, R0 | R> =>
  new SinkImpl(channel.unwrap(Effect.contextWith((context) => toChannel(f(context)))))

/** @internal */
export const every = <In>(predicate: Predicate<In>): Sink.Sink<boolean, In, In> =>
  fold(true, identity, (acc, input) => acc && predicate(input))

/** @internal */
export const fail = <E>(e: E): Sink.Sink<never, unknown, never, E> => new SinkImpl(core.fail(e))

/** @internal */
export const failSync = <E>(evaluate: LazyArg<E>): Sink.Sink<never, unknown, never, E> =>
  new SinkImpl(core.failSync(evaluate))

/** @internal */
export const failCause = <E>(cause: Cause.Cause<E>): Sink.Sink<never, unknown, never, E> =>
  new SinkImpl(core.failCause(cause))

/** @internal */
export const failCauseSync = <E>(evaluate: LazyArg<Cause.Cause<E>>): Sink.Sink<never, unknown, never, E> =>
  new SinkImpl(core.failCauseSync(evaluate))

/** @internal */
export const filterInput: {
  <In, In1 extends In, In2 extends In1>(
    f: Refinement<In1, In2>
  ): <A, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In2, L, E, R>
  <In, In1 extends In>(f: Predicate<In1>): <A, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In1, L, E, R>
} = <In, In1 extends In>(f: Predicate<In1>) => {
  return <A, L, E, R>(self: Sink.Sink<A, In, L, E, R>): Sink.Sink<A, In1, L, E, R> =>
    pipe(self, mapInputChunks(Chunk.filter(f)))
}

/** @internal */
export const filterInputEffect = dual<
  <In, In1 extends In, E2, R2>(
    f: (input: In1) => Effect.Effect<boolean, E2, R2>
  ) => <A, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In1, L, E2 | E, R2 | R>,
  <A, In, L, E, R, In1 extends In, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    f: (input: In1) => Effect.Effect<boolean, E2, R2>
  ) => Sink.Sink<A, In1, L, E2 | E, R2 | R>
>(
  2,
  (self, f) =>
    mapInputChunksEffect(
      self,
      (chunk) => Effect.map(Effect.filter(chunk, f), Chunk.unsafeFromArray)
    )
)

/** @internal */
export const findEffect = dual<
  <A, E2, R2>(
    f: (a: A) => Effect.Effect<boolean, E2, R2>
  ) => <In, L extends In, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<Option.Option<A>, In, L, E2 | E, R2 | R>,
  <A, In, L extends In, E, R, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    f: (a: A) => Effect.Effect<boolean, E2, R2>
  ) => Sink.Sink<Option.Option<A>, In, L, E2 | E, R2 | R>
>(
  2,
  <A, In, L extends In, E, R, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    f: (a: A) => Effect.Effect<boolean, E2, R2>
  ): Sink.Sink<Option.Option<A>, In, L, E2 | E, R2 | R> => {
    const newChannel = pipe(
      core.fromEffect(pipe(
        Ref.make(Chunk.empty<In>()),
        Effect.zip(Ref.make(false))
      )),
      core.flatMap(([leftoversRef, upstreamDoneRef]) => {
        const upstreamMarker: Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, never, never, unknown, unknown> = core
          .readWith({
            onInput: (input) => pipe(core.write(input), core.flatMap(() => upstreamMarker)),
            onFailure: core.fail,
            onDone: (done) => pipe(core.fromEffect(Ref.set(upstreamDoneRef, true)), channel.as(done))
          })
        const loop: Channel.Channel<Chunk.Chunk<L>, Chunk.Chunk<In>, E | E2, never, Option.Option<A>, unknown, R | R2> =
          channel.foldChannel(core.collectElements(toChannel(self)), {
            onFailure: core.fail,
            onSuccess: ([leftovers, doneValue]) =>
              pipe(
                core.fromEffect(f(doneValue)),
                core.flatMap((satisfied) =>
                  pipe(
                    core.fromEffect(Ref.set(leftoversRef, Chunk.flatten(leftovers))),
                    channel.zipRight(
                      pipe(
                        core.fromEffect(Ref.get(upstreamDoneRef)),
                        core.flatMap((upstreamDone) => {
                          if (satisfied) {
                            return pipe(core.write(Chunk.flatten(leftovers)), channel.as(Option.some(doneValue)))
                          }
                          if (upstreamDone) {
                            return pipe(core.write(Chunk.flatten(leftovers)), channel.as(Option.none()))
                          }
                          return loop
                        })
                      )
                    )
                  )
                )
              )
          })
        return pipe(upstreamMarker, core.pipeTo(channel.bufferChunk(leftoversRef)), core.pipeTo(loop))
      })
    )
    return new SinkImpl(newChannel)
  }
)

/** @internal */
export const fold = <S, In>(
  s: S,
  contFn: Predicate<S>,
  f: (s: S, input: In) => S
): Sink.Sink<S, In, In> => suspend(() => new SinkImpl(foldReader(s, contFn, f)))

/** @internal */
const foldReader = <S, In>(
  s: S,
  contFn: Predicate<S>,
  f: (z: S, input: In) => S
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, never, never, S, unknown> => {
  if (!contFn(s)) {
    return core.succeedNow(s)
  }
  return core.readWith({
    onInput: (input: Chunk.Chunk<In>) => {
      const [nextS, leftovers] = foldChunkSplit(s, input, contFn, f, 0, input.length)
      if (Chunk.isNonEmpty(leftovers)) {
        return pipe(core.write(leftovers), channel.as(nextS))
      }
      return foldReader(nextS, contFn, f)
    },
    onFailure: core.fail,
    onDone: () => core.succeedNow(s)
  })
}

/** @internal */
const foldChunkSplit = <S, In>(
  s: S,
  chunk: Chunk.Chunk<In>,
  contFn: Predicate<S>,
  f: (z: S, input: In) => S,
  index: number,
  length: number
): [S, Chunk.Chunk<In>] => {
  if (index === length) {
    return [s, Chunk.empty()]
  }
  const s1 = f(s, pipe(chunk, Chunk.unsafeGet(index)))
  if (contFn(s1)) {
    return foldChunkSplit(s1, chunk, contFn, f, index + 1, length)
  }
  return [s1, pipe(chunk, Chunk.drop(index + 1))]
}

/** @internal */
export const foldSink = dual<
  <E, A1, In, In1 extends In, L1, E1, R1, A, A2, In2 extends In, L2, E2, R2>(
    options: {
      readonly onFailure: (err: E) => Sink.Sink<A1, In1, L1, E1, R1>
      readonly onSuccess: (a: A) => Sink.Sink<A2, In2, L2, E2, R2>
    }
  ) => <L, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A1 | A2, In1 & In2, L1 | L2, E1 | E2, R1 | R2 | R>,
  <A, In, L, E, R, A1, In1 extends In, L1, E1, R1, A2, In2 extends In, L2, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    options: {
      readonly onFailure: (err: E) => Sink.Sink<A1, In1, L1, E1, R1>
      readonly onSuccess: (a: A) => Sink.Sink<A2, In2, L2, E2, R2>
    }
  ) => Sink.Sink<A1 | A2, In1 & In2, L1 | L2, E1 | E2, R1 | R2 | R>
>(
  2,
  <A, In, L, E, R, A1, In1 extends In, L1, E1, R1, A2, In2 extends In, L2, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    options: {
      readonly onFailure: (err: E) => Sink.Sink<A1, In1, L1, E1, R1>
      readonly onSuccess: (z: A) => Sink.Sink<A2, In2, L2, E2, R2>
    }
  ): Sink.Sink<A1 | A2, In1 & In2, L1 | L2, E1 | E2, R | R1 | R2> => {
    const newChannel: Channel.Channel<
      Chunk.Chunk<L1 | L2>,
      Chunk.Chunk<In1 & In2>,
      E1 | E2,
      never,
      A1 | A2,
      unknown,
      R | R1 | R2
    > = pipe(
      toChannel(self),
      core.collectElements,
      channel.foldChannel({
        onFailure: (error) => toChannel(options.onFailure(error)),
        onSuccess: ([leftovers, z]) =>
          core.suspend(() => {
            const leftoversRef = {
              ref: pipe(leftovers, Chunk.filter(Chunk.isNonEmpty)) as Chunk.Chunk<Chunk.Chunk<L1 | L2>>
            }
            const refReader = pipe(
              core.sync(() => {
                const ref = leftoversRef.ref
                leftoversRef.ref = Chunk.empty()
                return ref
              }),
              // This cast is safe because of the L1 >: L <: In1 bound. It follows that
              // L <: In1 and therefore Chunk[L] can be safely cast to Chunk[In1].
              core.flatMap((chunk) => channel.writeChunk(chunk as Chunk.Chunk<Chunk.Chunk<In1 & In2>>))
            )
            const passthrough = channel.identityChannel<Chunk.Chunk<In1 & In2>, never, unknown>()
            const continuationSink = pipe(
              refReader,
              channel.zipRight(passthrough),
              core.pipeTo(toChannel(options.onSuccess(z)))
            )
            return core.flatMap(
              core.collectElements(continuationSink),
              ([newLeftovers, z1]) =>
                pipe(
                  core.succeed(leftoversRef.ref),
                  core.flatMap(channel.writeChunk),
                  channel.zipRight(channel.writeChunk(newLeftovers)),
                  channel.as(z1)
                )
            )
          })
      })
    )
    return new SinkImpl(newChannel)
  }
)

/** @internal */
export const foldChunks = <S, In>(
  s: S,
  contFn: Predicate<S>,
  f: (s: S, chunk: Chunk.Chunk<In>) => S
): Sink.Sink<S, In> => suspend(() => new SinkImpl(foldChunksReader(s, contFn, f)))

/** @internal */
const foldChunksReader = <S, In>(
  s: S,
  contFn: Predicate<S>,
  f: (s: S, chunk: Chunk.Chunk<In>) => S
): Channel.Channel<never, Chunk.Chunk<In>, never, never, S, unknown> => {
  if (!contFn(s)) {
    return core.succeedNow(s)
  }
  return core.readWith({
    onInput: (input: Chunk.Chunk<In>) => foldChunksReader(f(s, input), contFn, f),
    onFailure: core.fail,
    onDone: () => core.succeedNow(s)
  })
}

/** @internal */
export const foldChunksEffect = <S, In, E, R>(
  s: S,
  contFn: Predicate<S>,
  f: (s: S, chunk: Chunk.Chunk<In>) => Effect.Effect<S, E, R>
): Sink.Sink<S, In, In, E, R> => suspend(() => new SinkImpl(foldChunksEffectReader(s, contFn, f)))

/** @internal */
const foldChunksEffectReader = <S, R, E, In>(
  s: S,
  contFn: Predicate<S>,
  f: (s: S, chunk: Chunk.Chunk<In>) => Effect.Effect<S, E, R>
): Channel.Channel<never, Chunk.Chunk<In>, E, E, S, unknown, R> => {
  if (!contFn(s)) {
    return core.succeedNow(s)
  }
  return core.readWith({
    onInput: (input: Chunk.Chunk<In>) =>
      pipe(
        core.fromEffect(f(s, input)),
        core.flatMap((s) => foldChunksEffectReader(s, contFn, f))
      ),
    onFailure: core.fail,
    onDone: () => core.succeedNow(s)
  })
}

/** @internal */
export const foldEffect = <S, In, E, R>(
  s: S,
  contFn: Predicate<S>,
  f: (s: S, input: In) => Effect.Effect<S, E, R>
): Sink.Sink<S, In, In, E, R> => suspend(() => new SinkImpl(foldEffectReader(s, contFn, f)))

/** @internal */
const foldEffectReader = <S, In, R, E>(
  s: S,
  contFn: Predicate<S>,
  f: (s: S, input: In) => Effect.Effect<S, E, R>
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, E, E, S, unknown, R> => {
  if (!contFn(s)) {
    return core.succeedNow(s)
  }
  return core.readWith({
    onInput: (input: Chunk.Chunk<In>) =>
      pipe(
        core.fromEffect(foldChunkSplitEffect(s, input, contFn, f)),
        core.flatMap(([nextS, leftovers]) =>
          pipe(
            leftovers,
            Option.match({
              onNone: () => foldEffectReader(nextS, contFn, f),
              onSome: (leftover) => pipe(core.write(leftover), channel.as(nextS))
            })
          )
        )
      ),
    onFailure: core.fail,
    onDone: () => core.succeedNow(s)
  })
}

/** @internal */
const foldChunkSplitEffect = <S, R, E, In>(
  s: S,
  chunk: Chunk.Chunk<In>,
  contFn: Predicate<S>,
  f: (s: S, input: In) => Effect.Effect<S, E, R>
): Effect.Effect<[S, Option.Option<Chunk.Chunk<In>>], E, R> =>
  foldChunkSplitEffectInternal(s, chunk, 0, chunk.length, contFn, f)

/** @internal */
const foldChunkSplitEffectInternal = <S, R, E, In>(
  s: S,
  chunk: Chunk.Chunk<In>,
  index: number,
  length: number,
  contFn: Predicate<S>,
  f: (s: S, input: In) => Effect.Effect<S, E, R>
): Effect.Effect<[S, Option.Option<Chunk.Chunk<In>>], E, R> => {
  if (index === length) {
    return Effect.succeed([s, Option.none()])
  }
  return pipe(
    f(s, pipe(chunk, Chunk.unsafeGet(index))),
    Effect.flatMap((s1) =>
      contFn(s1) ?
        foldChunkSplitEffectInternal(s1, chunk, index + 1, length, contFn, f) :
        Effect.succeed([s1, Option.some(pipe(chunk, Chunk.drop(index + 1)))])
    )
  )
}

/** @internal */
export const foldLeft = <S, In>(s: S, f: (s: S, input: In) => S): Sink.Sink<S, In> =>
  ignoreLeftover(fold(s, constTrue, f))

/** @internal */
export const foldLeftChunks = <S, In>(
  s: S,
  f: (s: S, chunk: Chunk.Chunk<In>) => S
): Sink.Sink<S, In> => foldChunks(s, constTrue, f)

/** @internal */
export const foldLeftChunksEffect = <S, In, E, R>(
  s: S,
  f: (s: S, chunk: Chunk.Chunk<In>) => Effect.Effect<S, E, R>
): Sink.Sink<S, In, never, E, R> => ignoreLeftover(foldChunksEffect(s, constTrue, f))

/** @internal */
export const foldLeftEffect = <S, In, E, R>(
  s: S,
  f: (s: S, input: In) => Effect.Effect<S, E, R>
): Sink.Sink<S, In, In, E, R> => foldEffect(s, constTrue, f)

/** @internal */
export const foldUntil = <S, In>(s: S, max: number, f: (s: S, input: In) => S): Sink.Sink<S, In, In> =>
  pipe(
    fold<[S, number], In>(
      [s, 0],
      (tuple) => tuple[1] < max,
      ([output, count], input) => [f(output, input), count + 1]
    ),
    map((tuple) => tuple[0])
  )

/** @internal */
export const foldUntilEffect = <S, In, E, R>(
  s: S,
  max: number,
  f: (s: S, input: In) => Effect.Effect<S, E, R>
): Sink.Sink<S, In, In, E, R> =>
  pipe(
    foldEffect(
      [s, 0 as number] as const,
      (tuple) => tuple[1] < max,
      ([output, count], input: In) => pipe(f(output, input), Effect.map((s) => [s, count + 1] as const))
    ),
    map((tuple) => tuple[0])
  )

/** @internal */
export const foldWeighted = <S, In>(
  options: {
    readonly initial: S
    readonly maxCost: number
    readonly cost: (s: S, input: In) => number
    readonly body: (s: S, input: In) => S
  }
): Sink.Sink<S, In, In> =>
  foldWeightedDecompose({
    ...options,
    decompose: Chunk.of
  })

/** @internal */
export const foldWeightedDecompose = <S, In>(
  options: {
    readonly initial: S
    readonly maxCost: number
    readonly cost: (s: S, input: In) => number
    readonly decompose: (input: In) => Chunk.Chunk<In>
    readonly body: (s: S, input: In) => S
  }
): Sink.Sink<S, In, In> =>
  suspend(() =>
    new SinkImpl(
      foldWeightedDecomposeLoop(
        options.initial,
        0,
        false,
        options.maxCost,
        options.cost,
        options.decompose,
        options.body
      )
    )
  )

/** @internal */
const foldWeightedDecomposeLoop = <S, In>(
  s: S,
  cost: number,
  dirty: boolean,
  max: number,
  costFn: (s: S, input: In) => number,
  decompose: (input: In) => Chunk.Chunk<In>,
  f: (s: S, input: In) => S
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, never, never, S, unknown> =>
  core.readWith({
    onInput: (input: Chunk.Chunk<In>) => {
      const [nextS, nextCost, nextDirty, leftovers] = foldWeightedDecomposeFold(
        input,
        s,
        cost,
        dirty,
        max,
        costFn,
        decompose,
        f
      )
      if (Chunk.isNonEmpty(leftovers)) {
        return pipe(core.write(leftovers), channel.zipRight(core.succeedNow(nextS)))
      }
      if (cost > max) {
        return core.succeedNow(nextS)
      }
      return foldWeightedDecomposeLoop(nextS, nextCost, nextDirty, max, costFn, decompose, f)
    },
    onFailure: core.fail,
    onDone: () => core.succeedNow(s)
  })

/** @internal */
const foldWeightedDecomposeFold = <In, S>(
  input: Chunk.Chunk<In>,
  s: S,
  cost: number,
  dirty: boolean,
  max: number,
  costFn: (s: S, input: In) => number,
  decompose: (input: In) => Chunk.Chunk<In>,
  f: (s: S, input: In) => S
): [S, number, boolean, Chunk.Chunk<In>] => {
  for (let index = 0; index < input.length; index++) {
    const elem = Chunk.unsafeGet(input, index)
    const prevCost = cost
    cost = cost + costFn(s, elem)
    if (cost <= max) {
      s = f(s, elem)
      dirty = true
      continue
    }
    const decomposed = decompose(elem)
    if (decomposed.length <= 1 && !dirty) {
      // If `elem` cannot be decomposed, we need to cross the `max` threshold. To
      // minimize "injury", we only allow this when we haven't added anything else
      // to the aggregate (dirty = false).
      return [f(s, elem), cost, true, Chunk.drop(input, index + 1)]
    }
    if (decomposed.length <= 1 && dirty) {
      // If the state is dirty and `elem` cannot be decomposed, we stop folding
      // and include `elem` in the leftovers.
      return [s, prevCost, dirty, Chunk.drop(input, index)]
    }
    // `elem` got decomposed, so we will recurse with the decomposed elements pushed
    // into the chunk we're processing and see if we can aggregate further.
    input = Chunk.appendAll(decomposed, Chunk.drop(input, index + 1))
    cost = prevCost
    index = -1
  }
  return [s, cost, dirty, Chunk.empty<In>()]
}

/** @internal */
export const foldWeightedDecomposeEffect = <S, In, E, R, E2, R2, E3, R3>(
  options: {
    readonly initial: S
    readonly maxCost: number
    readonly cost: (s: S, input: In) => Effect.Effect<number, E, R>
    readonly decompose: (input: In) => Effect.Effect<Chunk.Chunk<In>, E2, R2>
    readonly body: (s: S, input: In) => Effect.Effect<S, E3, R3>
  }
): Sink.Sink<S, In, In, E | E2 | E3, R | R2 | R3> =>
  suspend(() =>
    new SinkImpl(
      foldWeightedDecomposeEffectLoop(
        options.initial,
        options.maxCost,
        options.cost,
        options.decompose,
        options.body,
        0,
        false
      )
    )
  )

/** @internal */
export const foldWeightedEffect = <S, In, E, R, E2, R2>(
  options: {
    readonly initial: S
    readonly maxCost: number
    readonly cost: (s: S, input: In) => Effect.Effect<number, E, R>
    readonly body: (s: S, input: In) => Effect.Effect<S, E2, R2>
  }
): Sink.Sink<S, In, In, E | E2, R | R2> =>
  foldWeightedDecomposeEffect({
    ...options,
    decompose: (input) => Effect.succeed(Chunk.of(input))
  })

const foldWeightedDecomposeEffectLoop = <S, In, E, R, E2, R2, E3, R3>(
  s: S,
  max: number,
  costFn: (s: S, input: In) => Effect.Effect<number, E, R>,
  decompose: (input: In) => Effect.Effect<Chunk.Chunk<In>, E2, R2>,
  f: (s: S, input: In) => Effect.Effect<S, E3, R3>,
  cost: number,
  dirty: boolean
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, E | E2 | E3, E | E2 | E3, S, unknown, R | R2 | R3> =>
  core.readWith({
    onInput: (input: Chunk.Chunk<In>) =>
      pipe(
        core.fromEffect(foldWeightedDecomposeEffectFold(s, max, costFn, decompose, f, input, dirty, cost, 0)),
        core.flatMap(([nextS, nextCost, nextDirty, leftovers]) => {
          if (Chunk.isNonEmpty(leftovers)) {
            return pipe(core.write(leftovers), channel.zipRight(core.succeedNow(nextS)))
          }
          if (cost > max) {
            return core.succeedNow(nextS)
          }
          return foldWeightedDecomposeEffectLoop(nextS, max, costFn, decompose, f, nextCost, nextDirty)
        })
      ),
    onFailure: core.fail,
    onDone: () => core.succeedNow(s)
  })

/** @internal */
const foldWeightedDecomposeEffectFold = <S, In, E, R, E2, R2, E3, R3>(
  s: S,
  max: number,
  costFn: (s: S, input: In) => Effect.Effect<number, E, R>,
  decompose: (input: In) => Effect.Effect<Chunk.Chunk<In>, E2, R2>,
  f: (s: S, input: In) => Effect.Effect<S, E3, R3>,
  input: Chunk.Chunk<In>,
  dirty: boolean,
  cost: number,
  index: number
): Effect.Effect<[S, number, boolean, Chunk.Chunk<In>], E | E2 | E3, R | R2 | R3> => {
  if (index === input.length) {
    return Effect.succeed([s, cost, dirty, Chunk.empty<In>()])
  }
  const elem = pipe(input, Chunk.unsafeGet(index))
  return pipe(
    costFn(s, elem),
    Effect.map((newCost) => cost + newCost),
    Effect.flatMap((total) => {
      if (total <= max) {
        return pipe(
          f(s, elem),
          Effect.flatMap((s) =>
            foldWeightedDecomposeEffectFold(s, max, costFn, decompose, f, input, true, total, index + 1)
          )
        )
      }
      return pipe(
        decompose(elem),
        Effect.flatMap((decomposed) => {
          if (decomposed.length <= 1 && !dirty) {
            // If `elem` cannot be decomposed, we need to cross the `max` threshold. To
            // minimize "injury", we only allow this when we haven't added anything else
            // to the aggregate (dirty = false).
            return pipe(
              f(s, elem),
              Effect.map((s) => [s, total, true, pipe(input, Chunk.drop(index + 1))])
            )
          }
          if (decomposed.length <= 1 && dirty) {
            // If the state is dirty and `elem` cannot be decomposed, we stop folding
            // and include `elem` in th leftovers.
            return Effect.succeed([s, cost, dirty, pipe(input, Chunk.drop(index))])
          }
          // `elem` got decomposed, so we will recurse with the decomposed elements pushed
          // into the chunk we're processing and see if we can aggregate further.
          const next = pipe(decomposed, Chunk.appendAll(pipe(input, Chunk.drop(index + 1))))
          return foldWeightedDecomposeEffectFold(s, max, costFn, decompose, f, next, dirty, cost, 0)
        })
      )
    })
  )
}

/** @internal */
export const flatMap = dual<
  <A, A1, In, In1 extends In, L1, E1, R1>(
    f: (a: A) => Sink.Sink<A1, In1, L1, E1, R1>
  ) => <L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A1, In & In1, L | L1, E1 | E, R1 | R>,
  <A, In, L, E, R, A1, In1 extends In, L1, E1, R1>(
    self: Sink.Sink<A, In, L, E, R>,
    f: (a: A) => Sink.Sink<A1, In1, L1, E1, R1>
  ) => Sink.Sink<A1, In & In1, L | L1, E1 | E, R1 | R>
>(
  2,
  (self, f) => foldSink(self, { onFailure: fail, onSuccess: f })
)

/** @internal */
export const forEach = <In, X, E, R>(f: (input: In) => Effect.Effect<X, E, R>): Sink.Sink<void, In, never, E, R> => {
  const process: Channel.Channel<never, Chunk.Chunk<In>, E, E, void, unknown, R> = core.readWithCause({
    onInput: (input: Chunk.Chunk<In>) =>
      pipe(core.fromEffect(Effect.forEach(input, (v) => f(v), { discard: true })), core.flatMap(() => process)),
    onFailure: core.failCause,
    onDone: () => core.void
  })
  return new SinkImpl(process)
}

/** @internal */
export const forEachChunk = <In, X, E, R>(
  f: (input: Chunk.Chunk<In>) => Effect.Effect<X, E, R>
): Sink.Sink<void, In, never, E, R> => {
  const process: Channel.Channel<never, Chunk.Chunk<In>, E, E, void, unknown, R> = core.readWithCause({
    onInput: (input: Chunk.Chunk<In>) => pipe(core.fromEffect(f(input)), core.flatMap(() => process)),
    onFailure: core.failCause,
    onDone: () => core.void
  })
  return new SinkImpl(process)
}

/** @internal */
export const forEachWhile = <In, E, R>(
  f: (input: In) => Effect.Effect<boolean, E, R>
): Sink.Sink<void, In, In, E, R> => {
  const process: Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, E, E, void, unknown, R> = core.readWithCause({
    onInput: (input: Chunk.Chunk<In>) => forEachWhileReader(f, input, 0, input.length, process),
    onFailure: core.failCause,
    onDone: () => core.void
  })
  return new SinkImpl(process)
}

/** @internal */
const forEachWhileReader = <In, E, R>(
  f: (input: In) => Effect.Effect<boolean, E, R>,
  input: Chunk.Chunk<In>,
  index: number,
  length: number,
  cont: Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, E, E, void, unknown, R>
): Channel.Channel<Chunk.Chunk<In>, Chunk.Chunk<In>, E, E, void, unknown, R> => {
  if (index === length) {
    return cont
  }
  return pipe(
    core.fromEffect(f(pipe(input, Chunk.unsafeGet(index)))),
    core.flatMap((bool) =>
      bool ?
        forEachWhileReader(f, input, index + 1, length, cont) :
        core.write(pipe(input, Chunk.drop(index)))
    ),
    channel.catchAll((error) => pipe(core.write(pipe(input, Chunk.drop(index))), channel.zipRight(core.fail(error))))
  )
}

/** @internal */
export const forEachChunkWhile = <In, E, R>(
  f: (input: Chunk.Chunk<In>) => Effect.Effect<boolean, E, R>
): Sink.Sink<void, In, In, E, R> => {
  const reader: Channel.Channel<never, Chunk.Chunk<In>, E, E, void, unknown, R> = core.readWith({
    onInput: (input: Chunk.Chunk<In>) =>
      pipe(
        core.fromEffect(f(input)),
        core.flatMap((cont) => cont ? reader : core.void)
      ),
    onFailure: core.fail,
    onDone: () => core.void
  })
  return new SinkImpl(reader)
}

/** @internal */
export const fromChannel = <L, In, E, A, R>(
  channel: Channel.Channel<Chunk.Chunk<L>, Chunk.Chunk<In>, E, never, A, unknown, R>
): Sink.Sink<A, In, L, E, R> => new SinkImpl(channel)

/** @internal */
export const fromEffect = <A, E, R>(effect: Effect.Effect<A, E, R>): Sink.Sink<A, unknown, never, E, R> =>
  new SinkImpl(core.fromEffect(effect))

/** @internal */
export const fromPubSub = <In>(
  pubsub: PubSub.PubSub<In>,
  options?: {
    readonly shutdown?: boolean | undefined
  }
): Sink.Sink<void, In> => fromQueue(pubsub, options)

/** @internal */
export const fromPush = <In, L0, R0, L, R>(
  push: Effect.Effect<
    (_: Option.Option<Chunk.Chunk<In>>) => Effect.Effect<void, readonly [Either.Either<R0, L0>, Chunk.Chunk<L>], R>,
    never,
    R
  >
): Sink.Sink<R0, In, L, L0, Exclude<R, Scope.Scope>> =>
  new SinkImpl(channel.unwrapScoped(pipe(push, Effect.map(fromPushPull))))

const fromPushPull = <In, Z, E, L, R>(
  push: (
    option: Option.Option<Chunk.Chunk<In>>
  ) => Effect.Effect<void, readonly [Either.Either<Z, E>, Chunk.Chunk<L>], R>
): Channel.Channel<Chunk.Chunk<L>, Chunk.Chunk<In>, E, never, Z, unknown, R> =>
  core.readWith({
    onInput: (input: Chunk.Chunk<In>) =>
      channel.foldChannel(core.fromEffect(push(Option.some(input))), {
        onFailure: ([either, leftovers]) =>
          Either.match(either, {
            onLeft: (error) => pipe(core.write(leftovers), channel.zipRight(core.fail(error))),
            onRight: (z) => pipe(core.write(leftovers), channel.zipRight(core.succeedNow(z)))
          }),
        onSuccess: () => fromPushPull(push)
      }),
    onFailure: core.fail,
    onDone: () =>
      channel.foldChannel(core.fromEffect(push(Option.none())), {
        onFailure: ([either, leftovers]) =>
          Either.match(either, {
            onLeft: (error) => pipe(core.write(leftovers), channel.zipRight(core.fail(error))),
            onRight: (z) => pipe(core.write(leftovers), channel.zipRight(core.succeedNow(z)))
          }),
        onSuccess: () =>
          core.fromEffect(
            Effect.dieMessage(
              "BUG: Sink.fromPush - please report an issue at https://github.com/Effect-TS/effect/issues"
            )
          )
      })
  })

/** @internal */
export const fromQueue = <In>(
  queue: Queue.Enqueue<In>,
  options?: {
    readonly shutdown?: boolean | undefined
  }
): Sink.Sink<void, In> =>
  options?.shutdown ?
    unwrapScoped(
      Effect.map(
        Effect.acquireRelease(Effect.succeed(queue), Queue.shutdown),
        fromQueue
      )
    ) :
    forEachChunk((input: Chunk.Chunk<In>) => Queue.offerAll(queue, input))

/** @internal */
export const head = <In>(): Sink.Sink<Option.Option<In>, In, In> =>
  fold(
    Option.none() as Option.Option<In>,
    Option.isNone,
    (option, input) =>
      Option.match(option, {
        onNone: () => Option.some(input),
        onSome: () => option
      })
  )

/** @internal */
export const ignoreLeftover = <A, In, L, E, R>(self: Sink.Sink<A, In, L, E, R>): Sink.Sink<A, In, never, E, R> =>
  new SinkImpl(channel.drain(toChannel(self)))

/** @internal */
export const last = <In>(): Sink.Sink<Option.Option<In>, In, In> =>
  foldLeftChunks(Option.none<In>(), (s, input) => Option.orElse(Chunk.last(input), () => s))

/** @internal */
export const leftover = <L>(chunk: Chunk.Chunk<L>): Sink.Sink<void, unknown, L> =>
  new SinkImpl(core.suspend(() => core.write(chunk)))

/** @internal */
export const map = dual<
  <A, A2>(f: (a: A) => A2) => <In, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A2, In, L, E, R>,
  <A, In, L, E, R, A2>(self: Sink.Sink<A, In, L, E, R>, f: (a: A) => A2) => Sink.Sink<A2, In, L, E, R>
>(2, (self, f) => {
  return new SinkImpl(pipe(toChannel(self), channel.map(f)))
})

/** @internal */
export const mapEffect = dual<
  <A, A2, E2, R2>(
    f: (a: A) => Effect.Effect<A2, E2, R2>
  ) => <In, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A2, In, L, E2 | E, R2 | R>,
  <A, In, L, E, R, A2, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    f: (a: A) => Effect.Effect<A2, E2, R2>
  ) => Sink.Sink<A2, In, L, E2 | E, R2 | R>
>(
  2,
  (self, f) => new SinkImpl(pipe(toChannel(self), channel.mapEffect(f)))
)

/** @internal */
export const mapError = dual<
  <E, E2>(f: (error: E) => E2) => <A, In, L, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In, L, E2, R>,
  <A, In, L, E, R, E2>(self: Sink.Sink<A, In, L, E, R>, f: (error: E) => E2) => Sink.Sink<A, In, L, E2, R>
>(
  2,
  (self, f) => new SinkImpl(pipe(toChannel(self), channel.mapError(f)))
)

/** @internal */
export const mapLeftover = dual<
  <L, L2>(f: (leftover: L) => L2) => <A, In, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In, L2, E, R>,
  <A, In, L, E, R, L2>(self: Sink.Sink<A, In, L, E, R>, f: (leftover: L) => L2) => Sink.Sink<A, In, L2, E, R>
>(
  2,
  (self, f) => new SinkImpl(pipe(toChannel(self), channel.mapOut(Chunk.map(f))))
)

/** @internal */
export const never: Sink.Sink<never, unknown> = fromEffect(Effect.never)

/** @internal */
export const orElse = dual<
  <A2, In2, L2, E2, R2>(
    that: LazyArg<Sink.Sink<A2, In2, L2, E2, R2>>
  ) => <A, In, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A2 | A, In & In2, L2 | L, E2 | E, R2 | R>,
  <A, In, L, E, R, A2, In2, L2, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    that: LazyArg<Sink.Sink<A2, In2, L2, E2, R2>>
  ) => Sink.Sink<A2 | A, In & In2, L2 | L, E2 | E, R2 | R>
>(
  2,
  <A, In, L, E, R, A2, In2, L2, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    that: LazyArg<Sink.Sink<A2, In2, L2, E2, R2>>
  ): Sink.Sink<A | A2, In & In2, L | L2, E | E2, R | R2> =>
    new SinkImpl<A | A2, In & In2, L | L2, E | E2, R | R2>(
      pipe(toChannel(self), channel.orElse(() => toChannel(that())))
    )
)

/** @internal */
export const provideContext = dual<
  <R>(context: Context.Context<R>) => <A, In, L, E>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In, L, E>,
  <A, In, L, E, R>(self: Sink.Sink<A, In, L, E, R>, context: Context.Context<R>) => Sink.Sink<A, In, L, E>
>(
  2,
  (self, context) => new SinkImpl(pipe(toChannel(self), core.provideContext(context)))
)

/** @internal */
export const race = dual<
  <R1, E1, In1, L1, A1>(
    that: Sink.Sink<A1, In1, L1, E1, R1>
  ) => <A, In, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A1 | A, In & In1, L1 | L, E1 | E, R1 | R>,
  <A, In, L, E, R, A1, In1, L1, E1, R1>(
    self: Sink.Sink<A, In, L, E, R>,
    that: Sink.Sink<A1, In1, L1, E1, R1>
  ) => Sink.Sink<A1 | A, In & In1, L1 | L, E1 | E, R1 | R>
>(
  2,
  (self, that) => pipe(self, raceBoth(that), map(Either.merge))
)

/** @internal */
export const raceBoth = dual<
  <A1, In1, L1, E1, R1>(
    that: Sink.Sink<A1, In1, L1, E1, R1>,
    options?: {
      readonly capacity?: number | undefined
    }
  ) => <A, In, L, E, R>(
    self: Sink.Sink<A, In, L, E, R>
  ) => Sink.Sink<Either.Either<A1, A>, In & In1, L1 | L, E1 | E, R1 | R>,
  <A, In, L, E, R, A1, In1, L1, E1, R1>(
    self: Sink.Sink<A, In, L, E, R>,
    that: Sink.Sink<A1, In1, L1, E1, R1>,
    options?: {
      readonly capacity?: number | undefined
    }
  ) => Sink.Sink<Either.Either<A1, A>, In & In1, L1 | L, E1 | E, R1 | R>
>(
  (args) => isSink(args[1]),
  (self, that, options) =>
    raceWith(self, {
      other: that,
      onSelfDone: (selfDone) => mergeDecision.Done(Effect.map(selfDone, Either.left)),
      onOtherDone: (thatDone) => mergeDecision.Done(Effect.map(thatDone, Either.right)),
      capacity: options?.capacity ?? 16
    })
)

/** @internal */
export const raceWith = dual<
  <A2, In2, L2, E2, R2, A, E, A3, A4>(
    options: {
      readonly other: Sink.Sink<A2, In2, L2, E2, R2>
      readonly onSelfDone: (exit: Exit.Exit<A, E>) => MergeDecision.MergeDecision<R2, E2, A2, E2 | E, A3>
      readonly onOtherDone: (exit: Exit.Exit<A2, E2>) => MergeDecision.MergeDecision<R2, E, A, E2 | E, A4>
      readonly capacity?: number | undefined
    }
  ) => <In, L, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A3 | A4, In & In2, L2 | L, E2 | E, R2 | R>,
  <A, In, L, E, R, A2, In2, L2, E2, R2, A3, A4>(
    self: Sink.Sink<A, In, L, E, R>,
    options: {
      readonly other: Sink.Sink<A2, In2, L2, E2, R2>
      readonly onSelfDone: (exit: Exit.Exit<A, E>) => MergeDecision.MergeDecision<R2, E2, A2, E2 | E, A3>
      readonly onOtherDone: (exit: Exit.Exit<A2, E2>) => MergeDecision.MergeDecision<R2, E, A, E2 | E, A4>
      readonly capacity?: number | undefined
    }
  ) => Sink.Sink<A3 | A4, In & In2, L2 | L, E2 | E, R2 | R>
>(
  2,
  <A, In, L, E, R, A2, In2, L2, E2, R2, A3, A4>(
    self: Sink.Sink<A, In, L, E, R>,
    options: {
      readonly other: Sink.Sink<A2, In2, L2, E2, R2>
      readonly onSelfDone: (exit: Exit.Exit<A, E>) => MergeDecision.MergeDecision<R2, E2, A2, E2 | E, A3>
      readonly onOtherDone: (exit: Exit.Exit<A2, E2>) => MergeDecision.MergeDecision<R2, E, A, E2 | E, A4>
      readonly capacity?: number | undefined
    }
  ): Sink.Sink<A3 | A4, In & In2, L2 | L, E2 | E, R2 | R> => {
    function race(scope: Scope.Scope) {
      return Effect.gen(function*() {
        const pubsub = yield* PubSub.bounded<
          Either.Either<Chunk.Chunk<In & In2>, Exit.Exit<unknown>>
        >(options?.capacity ?? 16)
        const subscription1 = yield* Scope.extend(PubSub.subscribe(pubsub), scope)
        const subscription2 = yield* Scope.extend(PubSub.subscribe(pubsub), scope)
        const reader = channel.toPubSub(pubsub)
        const writer = channel.fromQueue(subscription1).pipe(
          core.pipeTo(toChannel(self)),
          channel.zipLeft(core.fromEffect(Queue.shutdown(subscription1))),
          channel.mergeWith({
            other: channel.fromQueue(subscription2).pipe(
              core.pipeTo(toChannel(options.other)),
              channel.zipLeft(core.fromEffect(Queue.shutdown(subscription2)))
            ),
            onSelfDone: options.onSelfDone,
            onOtherDone: options.onOtherDone
          })
        )
        const racedChannel = channel.mergeWith(reader, {
          other: writer,
          onSelfDone: () => mergeDecision.Await(identity),
          onOtherDone: (exit) => mergeDecision.Done(exit)
        }) as Channel.Channel<
          Chunk.Chunk<L | L2>,
          Chunk.Chunk<In & In2>,
          E | E2,
          never,
          A3 | A4,
          unknown,
          R | R2
        >
        return new SinkImpl(racedChannel)
      })
    }
    return unwrapScopedWith(race)
  }
)

/** @internal */
export const refineOrDie = dual<
  <E, E2>(
    pf: (error: E) => Option.Option<E2>
  ) => <A, In, L, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In, L, E2, R>,
  <A, In, L, E, R, E2>(
    self: Sink.Sink<A, In, L, E, R>,
    pf: (error: E) => Option.Option<E2>
  ) => Sink.Sink<A, In, L, E2, R>
>(
  2,
  (self, pf) => pipe(self, refineOrDieWith(pf, identity))
)

/** @internal */
export const refineOrDieWith = dual<
  <E, E2>(
    pf: (error: E) => Option.Option<E2>,
    f: (error: E) => unknown
  ) => <A, In, L, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In, L, E2, R>,
  <A, In, L, E, R, E2>(
    self: Sink.Sink<A, In, L, E, R>,
    pf: (error: E) => Option.Option<E2>,
    f: (error: E) => unknown
  ) => Sink.Sink<A, In, L, E2, R>
>(
  3,
  (self, pf, f) => {
    const newChannel = pipe(
      self,
      toChannel,
      channel.catchAll((error) =>
        Option.match(pf(error), {
          onNone: () => core.failCauseSync(() => Cause.die(f(error))),
          onSome: core.fail
        })
      )
    )
    return new SinkImpl(newChannel)
  }
)

/** @internal */
export const service = <I, S>(
  tag: Context.Tag<I, S>
): Sink.Sink<S, unknown, never, never, I> => serviceWith(tag, identity)

/** @internal */
export const serviceWith = <I, S, Z>(
  tag: Context.Tag<I, S>,
  f: (service: Types.NoInfer<S>) => Z
): Sink.Sink<Z, unknown, never, never, I> => fromEffect(Effect.map(tag, f))

/** @internal */
export const serviceWithEffect = <I, S, R, E, Z>(
  tag: Context.Tag<I, S>,
  f: (service: Types.NoInfer<S>) => Effect.Effect<Z, E, R>
): Sink.Sink<Z, unknown, never, E, R | I> => fromEffect(Effect.flatMap(tag, f))

/** @internal */
export const serviceWithSink = <I, S, R, E, In, L, Z>(
  tag: Context.Tag<I, S>,
  f: (service: Types.NoInfer<S>) => Sink.Sink<Z, In, L, E, R>
): Sink.Sink<Z, In, L, E, R | I> =>
  new SinkImpl(pipe(Effect.map(tag, (service) => toChannel(f(service))), channel.unwrap))

/** @internal */
export const some = <In>(predicate: Predicate<In>): Sink.Sink<boolean, In, In> =>
  fold(false, (bool) => !bool, (acc, input) => acc || predicate(input))

/** @internal */
export const splitWhere = dual<
  <In>(f: Predicate<In>) => <A, L extends In, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In, In, E, R>,
  <A, In, L extends In, E, R>(self: Sink.Sink<A, In, L, E, R>, f: Predicate<In>) => Sink.Sink<A, In, In, E, R>
>(2, <A, In, L extends In, E, R>(self: Sink.Sink<A, In, L, E, R>, f: Predicate<In>): Sink.Sink<A, In, In, E, R> => {
  const newChannel = pipe(
    core.fromEffect(Ref.make(Chunk.empty<In>())),
    core.flatMap((ref) =>
      pipe(
        splitWhereSplitter<In, E>(false, ref, f),
        channel.pipeToOrFail(toChannel(self)),
        core.collectElements,
        core.flatMap(([leftovers, z]) =>
          pipe(
            core.fromEffect(Ref.get(ref)),
            core.flatMap((leftover) =>
              pipe(
                core.write<Chunk.Chunk<In>>(pipe(leftover, Chunk.appendAll(Chunk.flatten(leftovers)))),
                channel.zipRight(core.succeed(z))
              )
            )
          )
        )
      )
    )
  )
  return new SinkImpl(newChannel)
})

/** @internal */
const splitWhereSplitter = <A, E>(
  written: boolean,
  leftovers: Ref.Ref<Chunk.Chunk<A>>,
  f: Predicate<A>
): Channel.Channel<Chunk.Chunk<A>, Chunk.Chunk<A>, E, never, unknown, unknown> =>
  core.readWithCause({
    onInput: (input) => {
      if (Chunk.isEmpty(input)) {
        return splitWhereSplitter(written, leftovers, f)
      }
      if (written) {
        const index = indexWhere(input, f)
        if (index === -1) {
          return channel.zipRight(
            core.write(input),
            splitWhereSplitter<A, E>(true, leftovers, f)
          )
        }
        const [left, right] = Chunk.splitAt(input, index)
        return channel.zipRight(
          core.write(left),
          core.fromEffect(Ref.set(leftovers, right))
        )
      }
      const index = indexWhere(input, f, 1)
      if (index === -1) {
        return channel.zipRight(
          core.write(input),
          splitWhereSplitter<A, E>(true, leftovers, f)
        )
      }
      const [left, right] = pipe(input, Chunk.splitAt(Math.max(index, 1)))
      return channel.zipRight(core.write(left), core.fromEffect(Ref.set(leftovers, right)))
    },
    onFailure: core.failCause,
    onDone: core.succeed
  })

/** @internal */
const indexWhere = <A>(self: Chunk.Chunk<A>, predicate: Predicate<A>, from = 0): number => {
  const iterator = self[Symbol.iterator]()
  let index = 0
  let result = -1
  let next: IteratorResult<A, any>
  while (result < 0 && (next = iterator.next()) && !next.done) {
    const a = next.value
    if (index >= from && predicate(a)) {
      result = index
    }
    index = index + 1
  }
  return result
}

/** @internal */
export const succeed = <A>(a: A): Sink.Sink<A, unknown> => new SinkImpl(core.succeed(a))

/** @internal */
export const sum: Sink.Sink<number, number> = foldLeftChunks(
  0,
  (acc, chunk) => acc + Chunk.reduce(chunk, 0, (s, a) => s + a)
)

/** @internal */
export const summarized = dual<
  <A2, E2, R2, A3>(
    summary: Effect.Effect<A2, E2, R2>,
    f: (start: A2, end: A2) => A3
  ) => <A, In, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<[A, A3], In, L, E2 | E, R2 | R>,
  <A, In, L, E, R, A2, E2, R2, A3>(
    self: Sink.Sink<A, In, L, E, R>,
    summary: Effect.Effect<A2, E2, R2>,
    f: (start: A2, end: A2) => A3
  ) => Sink.Sink<[A, A3], In, L, E2 | E, R2 | R>
>(
  3,
  (self, summary, f) => {
    const newChannel = pipe(
      core.fromEffect(summary),
      core.flatMap((start) =>
        pipe(
          self,
          toChannel,
          core.flatMap((done) =>
            pipe(
              core.fromEffect(summary),
              channel.map((end) => [done, f(start, end)])
            )
          )
        )
      )
    )
    return new SinkImpl(newChannel)
  }
)

/** @internal */
export const sync = <A>(evaluate: LazyArg<A>): Sink.Sink<A, unknown> => new SinkImpl(core.sync(evaluate))

/** @internal */
export const take = <In>(n: number): Sink.Sink<Chunk.Chunk<In>, In, In> =>
  pipe(
    foldChunks<Chunk.Chunk<In>, In>(
      Chunk.empty(),
      (chunk) => chunk.length < n,
      (acc, chunk) => pipe(acc, Chunk.appendAll(chunk))
    ),
    flatMap((acc) => {
      const [taken, leftover] = pipe(acc, Chunk.splitAt(n))
      return new SinkImpl(pipe(core.write(leftover), channel.zipRight(core.succeedNow(taken))))
    })
  )

/** @internal */
export const toChannel = <A, In, L, E, R>(
  self: Sink.Sink<A, In, L, E, R>
): Channel.Channel<Chunk.Chunk<L>, Chunk.Chunk<In>, E, never, A, unknown, R> =>
  Effect.isEffect(self) ?
    toChannel(fromEffect(self as Effect.Effect<A, E, R>)) :
    (self as SinkImpl<A, In, L, E, R>).channel

/** @internal */
export const unwrap = <A, In, L, E2, R2, E, R>(
  effect: Effect.Effect<Sink.Sink<A, In, L, E2, R2>, E, R>
): Sink.Sink<A, In, L, E | E2, R | R2> =>
  new SinkImpl(
    channel.unwrap(pipe(effect, Effect.map((sink) => toChannel(sink))))
  )

/** @internal */
export const unwrapScoped = <A, In, L, E, R>(
  effect: Effect.Effect<Sink.Sink<A, In, L, E, R>, E, R>
): Sink.Sink<A, In, L, E, Exclude<R, Scope.Scope>> =>
  new SinkImpl(
    channel.unwrapScoped(effect.pipe(
      Effect.map((sink) => toChannel(sink))
    ))
  )

/** @internal */
export const unwrapScopedWith = <A, In, L, E, R>(
  f: (scope: Scope.Scope) => Effect.Effect<Sink.Sink<A, In, L, E, R>, E, R>
): Sink.Sink<A, In, L, E, R> =>
  new SinkImpl(
    channel.unwrapScopedWith((scope) =>
      f(scope).pipe(
        Effect.map((sink) => toChannel(sink))
      )
    )
  )

/** @internal */
export const withDuration = <A, In, L, E, R>(
  self: Sink.Sink<A, In, L, E, R>
): Sink.Sink<[A, Duration.Duration], In, L, E, R> =>
  pipe(self, summarized(Clock.currentTimeMillis, (start, end) => Duration.millis(end - start)))

/** @internal */
export const zip = dual<
  <A2, In, In2 extends In, L2, E2, R2>(
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ) => <A, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<[A, A2], In & In2, L | L2, E2 | E, R2 | R>,
  <A, In, L, E, R, A2, In2 extends In, L2, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ) => Sink.Sink<[A, A2], In & In2, L | L2, E2 | E, R2 | R>
>(
  (args) => isSink(args[1]),
  <A, In, L, E, R, A2, In2 extends In, L2, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ): Sink.Sink<[A, A2], In & In2, L | L2, E2 | E, R2 | R> => zipWith(self, that, (z, z2) => [z, z2], options)
)

/** @internal */
export const zipLeft = dual<
  <A2, In, In2 extends In, L2, E2, R2>(
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ) => <A, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A, In & In2, L | L2, E2 | E, R2 | R>,
  <A, In, L, E, R, A2, In2 extends In, L2, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ) => Sink.Sink<A, In & In2, L | L2, E2 | E, R2 | R>
>(
  (args) => isSink(args[1]),
  <A, In, L, E, R, A2, In2 extends In, L2, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ): Sink.Sink<A, In & In2, L | L2, E2 | E, R2 | R> => zipWith(self, that, (z, _) => z, options)
)

/** @internal */
export const zipRight = dual<
  <A2, In, In2 extends In, L2, E2, R2>(
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ) => <A, L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A2, In & In2, L | L2, E2 | E, R2 | R>,
  <A, In, L, E, R, A2, In2 extends In, L2, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ) => Sink.Sink<A2, In & In2, L | L2, E2 | E, R2 | R>
>(
  (args) => isSink(args[1]),
  <A, In, L, E, R, A2, In2 extends In, L2, E2, R2>(
    self: Sink.Sink<A, In, L, E, R>,
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ): Sink.Sink<A2, In & In2, L | L2, E2 | E, R2 | R> => zipWith(self, that, (_, z2) => z2, options)
)

/** @internal */
export const zipWith = dual<
  <A2, In, In2 extends In, L2, E2, R2, A, A3>(
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    f: (a: A, a2: A2) => A3,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ) => <L, E, R>(self: Sink.Sink<A, In, L, E, R>) => Sink.Sink<A3, In & In2, L | L2, E2 | E, R2 | R>,
  <A, In, L, E, R, A2, In2 extends In, L2, E2, R2, A3>(
    self: Sink.Sink<A, In, L, E, R>,
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    f: (a: A, a2: A2) => A3,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ) => Sink.Sink<A3, In & In2, L | L2, E2 | E, R2 | R>
>(
  (args) => isSink(args[1]),
  <A, In, L, E, R, A2, In2 extends In, L2, E2, R2, A3>(
    self: Sink.Sink<A, In, L, E, R>,
    that: Sink.Sink<A2, In2, L2, E2, R2>,
    f: (a: A, a2: A2) => A3,
    options?: {
      readonly concurrent?: boolean | undefined
    }
  ): Sink.Sink<A3, In & In2, L | L2, E2 | E, R2 | R> =>
    options?.concurrent ?
      raceWith(self, {
        other: that,
        onSelfDone: Exit.match({
          onFailure: (cause) => mergeDecision.Done(Effect.failCause(cause)),
          onSuccess: (leftZ) =>
            mergeDecision.Await<R | R2, E2, A2, E | E2, A3>(
              Exit.match({
                onFailure: Effect.failCause,
                onSuccess: (rightZ) => Effect.succeed(f(leftZ, rightZ))
              })
            )
        }),
        onOtherDone: Exit.match({
          onFailure: (cause) => mergeDecision.Done(Effect.failCause(cause)),
          onSuccess: (rightZ) =>
            mergeDecision.Await<R | R2, E, A, E | E2, A3>(
              Exit.match({
                onFailure: Effect.failCause,
                onSuccess: (leftZ) => Effect.succeed(f(leftZ, rightZ))
              })
            )
        })
      }) :
      flatMap(self, (z) => map(that, (z2) => f(z, z2)))
)

// Circular with Channel

/** @internal */
export const channelToSink = <OutElem, InElem, OutErr, InErr, OutDone, Env>(
  self: Channel.Channel<Chunk.Chunk<OutElem>, Chunk.Chunk<InElem>, OutErr, InErr, OutDone, unknown, Env>
): Sink.Sink<OutDone, InElem, OutElem, OutErr, Env> => new SinkImpl(self)

// Constants

/** @internal */
export const count: Sink.Sink<number, unknown> = foldLeftChunks(
  0,
  (acc, chunk) => acc + chunk.length
)

/** @internal */
export const mkString: Sink.Sink<string, unknown> = suspend(() => {
  const strings: Array<string> = []
  return pipe(
    foldLeftChunks<void, unknown>(void 0, (_, elems) =>
      Chunk.map(elems, (elem) => {
        strings.push(String(elem))
      })),
    map(() => strings.join(""))
  )
})

/** @internal */
export const timed: Sink.Sink<Duration.Duration, unknown> = pipe(
  withDuration(drain),
  map((tuple) => tuple[1])
)
