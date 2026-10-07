import type { Cause } from "../Cause.js"
import * as Context from "../Context.js"
import * as Duration from "../Duration.js"
import type { Effect, Semaphore } from "../Effect.js"
import * as Effectable from "../Effectable.js"
import type { Exit } from "../Exit.js"
import { dual, identity } from "../Function.js"
import * as Iterable from "../Iterable.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import type { Pool, PoolTypeId as PoolTypeId_ } from "../Pool.js"
import { hasProperty } from "../Predicate.js"
import type { Scope } from "../Scope.js"
import * as coreEffect from "./core-effect.js"
import * as core from "./core.js"
import * as defaultServices from "./defaultServices.js"
import * as circular from "./effect/circular.js"
import * as fiberRuntime from "./fiberRuntime.js"
import * as internalQueue from "./queue.js"

/** @internal */
export const PoolTypeId: PoolTypeId_ = Symbol.for("effect/Pool") as PoolTypeId_

const poolVariance = {
  /* c8 ignore next */
  _E: (_: never) => _,
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal */
export const isPool = (u: unknown): u is Pool<unknown, unknown> => hasProperty(u, PoolTypeId)

/** @internal */
export const makeWith = <A, E, R>(options: {
  readonly acquire: Effect<A, E, R>
  readonly min: number
  readonly max: number
  readonly concurrency?: number | undefined
  readonly targetUtilization?: number | undefined
  readonly strategy: Strategy<A, E>
}): Effect<Pool<A, E>, never, Scope | R> =>
  core.uninterruptibleMask((restore) =>
    core.flatMap(core.context<R | Scope>(), (context) => {
      const scope = Context.get(context, fiberRuntime.scopeTag)
      const acquire = core.mapInputContext(
        options.acquire,
        (input) => Context.merge(context, input)
      ) as Effect<
        A,
        E,
        Scope
      >
      const pool = new PoolImpl<A, E>(
        scope,
        acquire,
        options.concurrency ?? 1,
        options.min,
        options.max,
        options.strategy,
        Math.min(Math.max(options.targetUtilization ?? 1, 0.1), 1)
      )
      const initialize = core.tap(fiberRuntime.forkDaemon(restore(pool.resize)), (fiber) =>
        scope.addFinalizer(() => core.interruptFiber(fiber)))
      const runStrategy = core.tap(fiberRuntime.forkDaemon(restore(options.strategy.run(pool))), (fiber) =>
        scope.addFinalizer(() =>
          core.interruptFiber(fiber)
        ))
      return core.succeed(pool).pipe(
        core.zipLeft(scope.addFinalizer(() =>
          pool.shutdown
        )),
        core.zipLeft(initialize),
        core.zipLeft(runStrategy)
      )
    })
  )

/** @internal */
export const make = <A, E, R>(options: {
  readonly acquire: Effect<A, E, R>
  readonly size: number
  readonly concurrency?: number | undefined
  readonly targetUtilization?: number | undefined
}): Effect<Pool<A, E>, never, R | Scope> =>
  makeWith({ ...options, min: options.size, max: options.size, strategy: strategyNoop() })

/** @internal */
export const makeWithTTL = <A, E, R>(options: {
  readonly acquire: Effect<A, E, R>
  readonly min: number
  readonly max: number
  readonly concurrency?: number | undefined
  readonly targetUtilization?: number | undefined
  readonly timeToLive: Duration.DurationInput
  readonly timeToLiveStrategy?: "creation" | "usage" | undefined
}): Effect<Pool<A, E>, never, R | Scope> =>
  core.flatMap(
    options.timeToLiveStrategy === "creation" ?
      strategyCreationTTL<A, E>(options.timeToLive) :
      strategyUsageTTL<A, E>(options.timeToLive),
    (strategy) => makeWith({ ...options, strategy })
  )

/** @internal */
export const get = <A, E>(self: Pool<A, E>): Effect<A, E, Scope> => self.get

/** @internal */
export const invalidate: {
  <A>(item: A): <E>(self: Pool<A, E>) => Effect<void>
  <A, E>(self: Pool<A, E>, item: A): Effect<void>
} = dual(2, <A, E>(self: Pool<A, E>, item: A): Effect<void> => self.invalidate(item))

interface PoolItem<A, E> {
  readonly exit: Exit<A, E>
  finalizer: Effect<void>
  refCount: number
  disableReclaim: boolean
}

interface Strategy<A, E> {
  readonly run: (pool: PoolImpl<A, E>) => Effect<void>
  readonly onAcquire: (item: PoolItem<A, E>) => Effect<void>
  readonly reclaim: (pool: PoolImpl<A, E>) => Effect<Option.Option<PoolItem<A, E>>>
}

class PoolImpl<A, E> extends Effectable.Class<A, E, Scope> implements Pool<A, E> {
  readonly [PoolTypeId]: Pool.Variance<A, E>[PoolTypeId_]

  isShuttingDown = false
  readonly semaphore: Semaphore
  readonly items = new Set<PoolItem<A, E>>()
  readonly available = new Set<PoolItem<A, E>>()
  readonly availableLatch = circular.unsafeMakeLatch(false)
  readonly invalidated = new Set<PoolItem<A, E>>()
  waiters = 0

  constructor(
    readonly scope: Scope,
    readonly acquire: Effect<A, E, Scope>,
    readonly concurrency: number,
    readonly minSize: number,
    readonly maxSize: number,
    readonly strategy: Strategy<A, E>,
    readonly targetUtilization: number
  ) {
    super()
    this[PoolTypeId] = poolVariance
    this.semaphore = circular.unsafeMakeSemaphore(concurrency * maxSize)
  }

  readonly allocate: Effect<PoolItem<A, E>> = core.acquireUseRelease(
    fiberRuntime.scopeMake(),
    (scope) =>
      this.acquire.pipe(
        fiberRuntime.scopeExtend(scope),
        core.exit,
        core.flatMap((exit) => {
          const item: PoolItem<A, E> = {
            exit,
            finalizer: core.catchAllCause(scope.close(exit), reportUnhandledError),
            refCount: 0,
            disableReclaim: false
          }
          this.items.add(item)
          this.available.add(item)
          return core.as(
            exit._tag === "Success"
              ? this.strategy.onAcquire(item)
              : core.zipRight(item.finalizer, this.strategy.onAcquire(item)),
            item
          )
        })
      ),
    (scope, exit) => exit._tag === "Failure" ? scope.close(exit) : core.void
  )

  get currentUsage() {
    let count = this.waiters
    for (const item of this.items) {
      count += item.refCount
    }
    return count
  }

  get targetSize() {
    if (this.isShuttingDown) return 0
    const utilization = this.currentUsage / this.targetUtilization
    const target = Math.ceil(utilization / this.concurrency)
    return Math.min(Math.max(this.minSize, target), this.maxSize)
  }

  get activeSize() {
    return this.items.size - this.invalidated.size
  }

  readonly resizeLoop: Effect<void> = core.suspend(() => {
    if (this.activeSize >= this.targetSize) {
      return core.void
    }
    const toAcquire = this.targetSize - this.activeSize
    return this.strategy.reclaim(this).pipe(
      core.flatMap(Option.match({
        onNone: () => this.allocate,
        onSome: core.succeed
      })),
      fiberRuntime.replicateEffect(toAcquire, { concurrency: toAcquire }),
      core.zipLeft(this.availableLatch.open),
      core.flatMap((items) => items.some((_) => _.exit._tag === "Failure") ? core.void : this.resizeLoop)
    )
  })
  readonly resizeSemaphore = circular.unsafeMakeSemaphore(1)
  readonly resize = this.resizeSemaphore.withPermits(1)(this.resizeLoop)

  readonly getPoolItem: Effect<PoolItem<A, E>, never, Scope> = core.uninterruptibleMask((restore) =>
    restore(this.semaphore.take(1)).pipe(
      core.zipRight(fiberRuntime.scopeTag),
      core.flatMap((scope) =>
        core.suspend(() => {
          this.waiters++
          if (this.isShuttingDown) {
            return core.interrupt
          } else if (this.targetSize > this.activeSize) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this
            return core.flatMap(
              this.resizeSemaphore.withPermitsIfAvailable(1)(
                circular.forkIn(core.interruptible(this.resize), this.scope)
              ),
              function loop(): Effect<PoolItem<A, E>> {
                if (self.isShuttingDown) {
                  return core.interrupt
                } else if (self.available.size > 0) {
                  return core.succeed(Iterable.unsafeHead(self.available))
                }
                self.availableLatch.unsafeClose()
                return core.flatMap(self.availableLatch.await, loop)
              }
            )
          }
          return core.succeed(Iterable.unsafeHead(this.available))
        }).pipe(
          fiberRuntime.ensuring(core.sync(() => this.waiters--)),
          core.tap((item) => {
            if (item.exit._tag === "Failure") {
              this.items.delete(item)
              this.invalidated.delete(item)
              this.available.delete(item)
              return this.semaphore.release(1)
            }
            item.refCount++
            this.available.delete(item)
            if (item.refCount < this.concurrency) {
              this.available.add(item)
            }
            return scope.addFinalizer(() =>
              core.zipRight(
                core.suspend(() => {
                  item.refCount--
                  if (this.invalidated.has(item)) {
                    return this.invalidatePoolItem(item)
                  }
                  this.available.add(item)
                  return core.exitVoid
                }),
                this.semaphore.release(1)
              )
            )
          }),
          core.onInterrupt(() => this.semaphore.release(1))
        )
      )
    )
  )

  commit() {
    return this.get
  }

  readonly get: Effect<A, E, Scope> = core.flatMap(
    core.suspend(() => this.isShuttingDown ? core.interrupt : this.getPoolItem),
    (_) => _.exit
  )

  invalidate(item: A): Effect<void> {
    return core.suspend(() => {
      if (this.isShuttingDown) return core.void
      for (const poolItem of this.items) {
        if (poolItem.exit._tag === "Success" && poolItem.exit.value === item) {
          poolItem.disableReclaim = true
          return core.uninterruptible(this.invalidatePoolItem(poolItem))
        }
      }
      return core.void
    })
  }

  invalidatePoolItem(poolItem: PoolItem<A, E>): Effect<void> {
    return core.suspend(() => {
      if (!this.items.has(poolItem)) {
        return core.void
      } else if (poolItem.refCount === 0) {
        this.items.delete(poolItem)
        this.available.delete(poolItem)
        this.invalidated.delete(poolItem)
        return core.zipRight(
          poolItem.finalizer,
          circular.forkIn(core.interruptible(this.resize), this.scope)
        )
      }
      this.invalidated.add(poolItem)
      this.available.delete(poolItem)
      return core.void
    })
  }

  get shutdown(): Effect<void> {
    return core.suspend(() => {
      if (this.isShuttingDown) return core.void
      this.isShuttingDown = true
      const size = this.items.size
      const semaphore = circular.unsafeMakeSemaphore(size)
      return core.forEachSequentialDiscard(this.items, (item) => {
        if (item.refCount > 0) {
          item.finalizer = core.zipLeft(item.finalizer, semaphore.release(1))
          this.invalidated.add(item)
          return semaphore.take(1)
        }
        this.items.delete(item)
        this.available.delete(item)
        this.invalidated.delete(item)
        return item.finalizer
      }).pipe(
        core.zipRight(this.semaphore.releaseAll),
        core.zipRight(this.availableLatch.open),
        core.zipRight(semaphore.take(size))
      )
    })
  }

  pipe() {
    return pipeArguments(this, arguments)
  }
}

const strategyNoop = <A, E>(): Strategy<A, E> => ({
  run: (_) => core.void,
  onAcquire: (_) => core.void,
  reclaim: (_) => coreEffect.succeedNone
})

const strategyCreationTTL = <A, E>(ttl: Duration.DurationInput) =>
  defaultServices.clockWith((clock) =>
    core.map(internalQueue.unbounded<PoolItem<A, E>>(), (queue) => {
      const ttlMillis = Duration.toMillis(ttl)
      const creationTimes = new WeakMap<PoolItem<A, E>, number>()
      return identity<Strategy<A, E>>({
        run: (pool) => {
          const process = (item: PoolItem<A, E>): Effect<void> =>
            core.suspend(() => {
              if (!pool.items.has(item) || pool.invalidated.has(item)) {
                return core.void
              }
              const now = clock.unsafeCurrentTimeMillis()
              const created = creationTimes.get(item)!
              const remaining = ttlMillis - (now - created)
              return remaining > 0
                ? coreEffect.delay(process(item), remaining)
                : pool.invalidatePoolItem(item)
            })
          return queue.take.pipe(
            core.tap(process),
            coreEffect.forever
          )
        },
        onAcquire: (item) =>
          core.suspend(() => {
            creationTimes.set(item, clock.unsafeCurrentTimeMillis())
            return queue.offer(item)
          }),
        reclaim: (_) => coreEffect.succeedNone
      })
    })
  )

const strategyUsageTTL = <A, E>(ttl: Duration.DurationInput) =>
  core.map(internalQueue.unbounded<PoolItem<A, E>>(), (queue) => {
    return identity<Strategy<A, E>>({
      run: (pool) => {
        const process: Effect<void> = core.suspend(() => {
          const excess = pool.activeSize - pool.targetSize
          if (excess <= 0) return core.void
          return queue.take.pipe(
            core.tap((item) => pool.invalidatePoolItem(item)),
            core.zipRight(process)
          )
        })
        return process.pipe(
          coreEffect.delay(ttl),
          coreEffect.forever
        )
      },
      onAcquire: (item) => queue.offer(item),
      reclaim(pool) {
        return core.suspend((): Effect<Option.Option<PoolItem<A, E>>> => {
          if (pool.invalidated.size === 0) {
            return coreEffect.succeedNone
          }
          const item = Iterable.head(
            Iterable.filter(pool.invalidated, (item) => !item.disableReclaim)
          )
          if (item._tag === "None") {
            return coreEffect.succeedNone
          }
          pool.invalidated.delete(item.value)
          if (item.value.refCount < pool.concurrency) {
            pool.available.add(item.value)
          }
          return core.as(queue.offer(item.value), item)
        })
      }
    })
  })

const reportUnhandledError = <E>(cause: Cause<E>) =>
  core.withFiberRuntime<void>((fiber) => {
    const unhandledLogLevel = fiber.getFiberRef(core.currentUnhandledErrorLogLevel)
    if (unhandledLogLevel._tag === "Some") {
      fiber.log("Unhandled error in pool finalizer", cause, unhandledLogLevel)
    }
    return core.void
  })
