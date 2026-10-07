import * as Array from "../Array.js"
import type * as Chunk from "../Chunk.js"
import type * as Clock from "../Clock.js"
import type * as Config from "../Config.js"
import type * as ConfigProvider from "../ConfigProvider.js"
import * as Context from "../Context.js"
import type * as DefaultServices from "../DefaultServices.js"
import * as Duration from "../Duration.js"
import type * as Effect from "../Effect.js"
import { dual, pipe } from "../Function.js"
import { globalValue } from "../GlobalValue.js"
import type * as Random from "../Random.js"
import type * as Tracer from "../Tracer.js"
import * as clock from "./clock.js"
import * as configProvider from "./configProvider.js"
import * as core from "./core.js"
import * as console_ from "./defaultServices/console.js"
import * as random from "./random.js"
import * as tracer from "./tracer.js"

/** @internal */
export const liveServices: Context.Context<DefaultServices.DefaultServices> = pipe(
  Context.empty(),
  Context.add(clock.clockTag, clock.make()),
  Context.add(console_.consoleTag, console_.defaultConsole),
  Context.add(random.randomTag, random.make(Math.random())),
  Context.add(configProvider.configProviderTag, configProvider.fromEnv()),
  Context.add(tracer.tracerTag, tracer.nativeTracer)
)

/**
 * The `FiberRef` holding the default `Effect` services.
 *
 * @since 2.0.0
 * @category fiberRefs
 */
export const currentServices = globalValue(
  Symbol.for("effect/DefaultServices/currentServices"),
  () => core.fiberRefUnsafeMakeContext(liveServices)
)

// circular with Clock

/** @internal */
export const sleep = (duration: Duration.DurationInput): Effect.Effect<void> => {
  const decodedDuration = Duration.decode(duration)
  return clockWith((clock) => clock.sleep(decodedDuration))
}

/** @internal */
export const defaultServicesWith = <A, E, R>(
  f: (services: Context.Context<DefaultServices.DefaultServices>) => Effect.Effect<A, E, R>
) => core.withFiberRuntime<A, E, R>((fiber) => f(fiber.currentDefaultServices))

/** @internal */
export const clockWith = <A, E, R>(f: (clock: Clock.Clock) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
  defaultServicesWith((services) => f(services.unsafeMap.get(clock.clockTag.key)))

/** @internal */
export const currentTimeMillis: Effect.Effect<number> = clockWith((clock) => clock.currentTimeMillis)

/** @internal */
export const currentTimeNanos: Effect.Effect<bigint> = clockWith((clock) => clock.currentTimeNanos)

/** @internal */
export const withClock = dual<
  <C extends Clock.Clock>(clock: C) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <C extends Clock.Clock, A, E, R>(effect: Effect.Effect<A, E, R>, clock: C) => Effect.Effect<A, E, R>
>(2, (effect, c) =>
  core.fiberRefLocallyWith(
    currentServices,
    Context.add(clock.clockTag, c)
  )(effect))

// circular with ConfigProvider

/** @internal */
export const withConfigProvider = dual<
  (provider: ConfigProvider.ConfigProvider) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, provider: ConfigProvider.ConfigProvider) => Effect.Effect<A, E, R>
>(2, (self, provider) =>
  core.fiberRefLocallyWith(
    currentServices,
    Context.add(configProvider.configProviderTag, provider)
  )(self))

/** @internal */
export const configProviderWith = <A, E, R>(
  f: (provider: ConfigProvider.ConfigProvider) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> =>
  defaultServicesWith((services) => f(services.unsafeMap.get(configProvider.configProviderTag.key)))

/** @internal */
export const config = <A>(config: Config.Config<A>) => configProviderWith((_) => _.load(config))

/** @internal */
export const configOrDie = <A>(config: Config.Config<A>) => core.orDie(configProviderWith((_) => _.load(config)))

// circular with Random

/** @internal */
export const randomWith = <A, E, R>(f: (random: Random.Random) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
  defaultServicesWith((services) => f(services.unsafeMap.get(random.randomTag.key)))

/** @internal */
export const withRandom = dual<
  <X extends Random.Random>(value: X) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <X extends Random.Random, A, E, R>(effect: Effect.Effect<A, E, R>, value: X) => Effect.Effect<A, E, R>
>(2, (effect, value) =>
  core.fiberRefLocallyWith(
    currentServices,
    Context.add(random.randomTag, value)
  )(effect))

/** @internal */
export const next: Effect.Effect<number> = randomWith((random) => random.next)

/** @internal */
export const nextInt: Effect.Effect<number> = randomWith((random) => random.nextInt)

/** @internal */
export const nextBoolean: Effect.Effect<boolean> = randomWith((random) => random.nextBoolean)

/** @internal */
export const nextRange = (min: number, max: number): Effect.Effect<number> =>
  randomWith((random) => random.nextRange(min, max))

/** @internal */
export const nextIntBetween = (min: number, max: number): Effect.Effect<number> =>
  randomWith((random) => random.nextIntBetween(min, max))

/** @internal */
export const shuffle = <A>(elements: Iterable<A>): Effect.Effect<Chunk.Chunk<A>> =>
  randomWith((random) => random.shuffle(elements))

/** @internal */
export const choice = <Self extends Iterable<unknown>>(
  elements: Self
) => {
  const array = Array.fromIterable(elements)
  return core.map(
    array.length === 0
      ? core.fail(new core.NoSuchElementException("Cannot select a random element from an empty array"))
      : randomWith((random) => random.nextIntBetween(0, array.length)),
    (i) => array[i]
  ) as any
}

// circular with Tracer

/** @internal */
export const tracerWith = <A, E, R>(f: (tracer: Tracer.Tracer) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
  defaultServicesWith((services) => f(services.unsafeMap.get(tracer.tracerTag.key)))

/** @internal */
export const withTracer = dual<
  (value: Tracer.Tracer) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(effect: Effect.Effect<A, E, R>, value: Tracer.Tracer) => Effect.Effect<A, E, R>
>(2, (effect, value) =>
  core.fiberRefLocallyWith(
    currentServices,
    Context.add(tracer.tracerTag, value)
  )(effect))
