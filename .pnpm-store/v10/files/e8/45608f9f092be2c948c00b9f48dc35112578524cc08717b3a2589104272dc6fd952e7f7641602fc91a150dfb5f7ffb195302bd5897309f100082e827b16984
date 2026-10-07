import * as Cause from "../../Cause.js"
import * as Effect from "../../Effect.js"
import { dual } from "../../Function.js"
import type * as Scope from "../../Scope.js"
import * as STM from "../../STM.js"
import type * as TRef from "../../TRef.js"
import type * as TSemaphore from "../../TSemaphore.js"
import * as core from "./core.js"
import * as tRef from "./tRef.js"

/** @internal */
const TSemaphoreSymbolKey = "effect/TSemaphore"

/** @internal */
export const TSemaphoreTypeId: TSemaphore.TSemaphoreTypeId = Symbol.for(
  TSemaphoreSymbolKey
) as TSemaphore.TSemaphoreTypeId

/** @internal */
class TSemaphoreImpl implements TSemaphore.TSemaphore {
  readonly [TSemaphoreTypeId]: TSemaphore.TSemaphoreTypeId = TSemaphoreTypeId
  constructor(readonly permits: TRef.TRef<number>) {}
}

/** @internal */
export const make = (permits: number): STM.STM<TSemaphore.TSemaphore> =>
  STM.map(tRef.make(permits), (permits) => new TSemaphoreImpl(permits))

/** @internal */
export const acquire = (self: TSemaphore.TSemaphore): STM.STM<void> => acquireN(self, 1)

/** @internal */
export const acquireN = dual<
  (n: number) => (self: TSemaphore.TSemaphore) => STM.STM<void>,
  (self: TSemaphore.TSemaphore, n: number) => STM.STM<void>
>(2, (self, n) =>
  core.withSTMRuntime((driver) => {
    if (n < 0) {
      throw new Cause.IllegalArgumentException(`Unexpected negative value ${n} passed to Semaphore.acquireN`)
    }
    const value = tRef.unsafeGet(self.permits, driver.journal)
    if (value < n) {
      return STM.retry
    } else {
      return STM.succeed(tRef.unsafeSet(self.permits, value - n, driver.journal))
    }
  }))

/** @internal */
export const available = (self: TSemaphore.TSemaphore) => tRef.get(self.permits)

/** @internal */
export const release = (self: TSemaphore.TSemaphore): STM.STM<void> => releaseN(self, 1)

/** @internal */
export const releaseN = dual<
  (n: number) => (self: TSemaphore.TSemaphore) => STM.STM<void>,
  (self: TSemaphore.TSemaphore, n: number) => STM.STM<void>
>(2, (self, n) =>
  core.withSTMRuntime((driver) => {
    if (n < 0) {
      throw new Cause.IllegalArgumentException(`Unexpected negative value ${n} passed to Semaphore.releaseN`)
    }
    const current = tRef.unsafeGet(self.permits, driver.journal)
    return STM.succeed(tRef.unsafeSet(self.permits, current + n, driver.journal))
  }))

/** @internal */
export const withPermit = dual<
  (semaphore: TSemaphore.TSemaphore) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, semaphore: TSemaphore.TSemaphore) => Effect.Effect<A, E, R>
>(2, (self, semaphore) => withPermits(self, semaphore, 1))

/** @internal */
export const withPermits = dual<
  (
    semaphore: TSemaphore.TSemaphore,
    permits: number
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    semaphore: TSemaphore.TSemaphore,
    permits: number
  ) => Effect.Effect<A, E, R>
>(3, (self, semaphore, permits) =>
  Effect.uninterruptibleMask((restore) =>
    Effect.zipRight(
      restore(core.commit(acquireN(permits)(semaphore))),
      Effect.ensuring(
        self,
        core.commit(releaseN(permits)(semaphore))
      )
    )
  ))

/** @internal */
export const withPermitScoped = (self: TSemaphore.TSemaphore): Effect.Effect<void, never, Scope.Scope> =>
  withPermitsScoped(self, 1)

/** @internal */
export const withPermitsScoped = dual<
  (permits: number) => (self: TSemaphore.TSemaphore) => Effect.Effect<void, never, Scope.Scope>,
  (self: TSemaphore.TSemaphore, permits: number) => Effect.Effect<void, never, Scope.Scope>
>(2, (self, permits) =>
  Effect.acquireReleaseInterruptible(
    core.commit(acquireN(self, permits)),
    () => core.commit(releaseN(self, permits))
  ))

/** @internal */
export const unsafeMakeSemaphore = (permits: number): TSemaphore.TSemaphore => {
  return new TSemaphoreImpl(new tRef.TRefImpl(permits))
}
