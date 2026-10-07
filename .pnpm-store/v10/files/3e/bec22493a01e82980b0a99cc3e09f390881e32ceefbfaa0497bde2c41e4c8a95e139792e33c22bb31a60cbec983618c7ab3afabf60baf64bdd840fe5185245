import type { DurationInput } from "../Duration.js"
import * as Duration from "../Duration.js"
import * as Effect from "../Effect.js"
import * as FiberRef from "../FiberRef.js"
import { pipe } from "../Function.js"
import { globalValue } from "../GlobalValue.js"
import type * as RateLimiter from "../RateLimiter.js"
import type * as Scope from "../Scope.js"

/** @internal */
export const make = ({
  algorithm = "token-bucket",
  interval,
  limit
}: RateLimiter.RateLimiter.Options): Effect.Effect<
  RateLimiter.RateLimiter,
  never,
  Scope.Scope
> => {
  switch (algorithm) {
    case "fixed-window": {
      return fixedWindow(limit, interval)
    }
    case "token-bucket": {
      return tokenBucket(limit, interval)
    }
  }
}

const tokenBucket = (limit: number, window: DurationInput): Effect.Effect<
  RateLimiter.RateLimiter,
  never,
  Scope.Scope
> =>
  Effect.gen(function*() {
    const millisPerToken = Math.ceil(Duration.toMillis(window) / limit)
    const semaphore = yield* Effect.makeSemaphore(limit)
    const latch = yield* Effect.makeSemaphore(0)
    const refill: Effect.Effect<void> = Effect.sleep(millisPerToken).pipe(
      Effect.zipRight(latch.releaseAll),
      Effect.zipRight(semaphore.release(1)),
      Effect.flatMap((free) => free === limit ? Effect.void : refill)
    )
    yield* pipe(
      latch.take(1),
      Effect.zipRight(refill),
      Effect.forever,
      Effect.forkScoped,
      Effect.interruptible
    )
    const take = Effect.uninterruptibleMask((restore) =>
      Effect.flatMap(
        FiberRef.get(currentCost),
        (cost) => Effect.zipRight(restore(semaphore.take(cost)), latch.release(1))
      )
    )
    return (effect) => Effect.zipRight(take, effect)
  })

const fixedWindow = (limit: number, window: DurationInput): Effect.Effect<
  RateLimiter.RateLimiter,
  never,
  Scope.Scope
> =>
  Effect.gen(function*() {
    const semaphore = yield* Effect.makeSemaphore(limit)
    const latch = yield* Effect.makeSemaphore(0)
    yield* pipe(
      latch.take(1),
      Effect.zipRight(Effect.sleep(window)),
      Effect.zipRight(latch.releaseAll),
      Effect.zipRight(semaphore.releaseAll),
      Effect.forever,
      Effect.forkScoped,
      Effect.interruptible
    )
    const take = Effect.uninterruptibleMask((restore) =>
      Effect.flatMap(
        FiberRef.get(currentCost),
        (cost) => Effect.zipRight(restore(semaphore.take(cost)), latch.release(1))
      )
    )
    return (effect) => Effect.zipRight(take, effect)
  })

/** @internal */
const currentCost = globalValue(
  Symbol.for("effect/RateLimiter/currentCost"),
  () => FiberRef.unsafeMake(1)
)

/** @internal */
export const withCost = (cost: number) => Effect.locally(currentCost, cost)
