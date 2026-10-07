/**
 * @since 3.19.4
 * @experimental
 */
import * as Effect from "./Effect.js"
import * as Iterable from "./Iterable.js"
import * as MutableHashMap from "./MutableHashMap.js"
import * as Option from "./Option.js"

/**
 * @since 3.19.4
 * @category Models
 * @experimental
 */
export const TypeId: TypeId = "~effect/PartitionedSemaphore"

/**
 * @since 3.19.4
 * @category Models
 * @experimental
 */
export type TypeId = "~effect/PartitionedSemaphore"

/**
 * A `PartitionedSemaphore` is a concurrency primitive that can be used to
 * control concurrent access to a resource across multiple partitions identified
 * by keys.
 *
 * The total number of permits is shared across all partitions, with waiting
 * permits equally distributed among partitions using a round-robin strategy.
 *
 * This is useful when you want to limit the total number of concurrent accesses
 * to a resource, while still allowing for fair distribution of access across
 * different partitions.
 *
 * @since 3.19.4
 * @category Models
 * @experimental
 */
export interface PartitionedSemaphore<in K> {
  readonly [TypeId]: TypeId

  readonly withPermits: (
    key: K,
    permits: number
  ) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
}

/**
 * A `PartitionedSemaphore` is a concurrency primitive that can be used to
 * control concurrent access to a resource across multiple partitions identified
 * by keys.
 *
 * The total number of permits is shared across all partitions, with waiting
 * permits equally distributed among partitions using a round-robin strategy.
 *
 * This is useful when you want to limit the total number of concurrent accesses
 * to a resource, while still allowing for fair distribution of access across
 * different partitions.
 *
 * @since 3.19.4
 * @category Constructors
 * @experimental
 */
export const makeUnsafe = <K = unknown>(options: {
  readonly permits: number
}): PartitionedSemaphore<K> => {
  const maxPermits = Math.max(0, options.permits)

  if (!Number.isFinite(maxPermits)) {
    return {
      [TypeId]: TypeId,
      withPermits: () => (effect) => effect
    }
  }

  let totalPermits = maxPermits
  let waitingPermits = 0

  type Waiter = {
    permits: number
    readonly resume: () => void
  }
  const partitions = MutableHashMap.empty<K, Set<Waiter>>()

  const take = (key: K, permits: number) =>
    Effect.async<void>((resume) => {
      if (maxPermits < permits) {
        return resume(Effect.never)
      } else if (totalPermits >= permits) {
        totalPermits -= permits
        return resume(Effect.void)
      }

      const needed = permits - totalPermits
      const taken = permits - needed
      if (totalPermits > 0) {
        totalPermits = 0
      }
      waitingPermits += needed

      const waiters = Option.getOrElse(
        MutableHashMap.get(partitions, key),
        () => {
          const set = new Set<Waiter>()
          MutableHashMap.set(partitions, key, set)
          return set
        }
      )

      const entry: Waiter = {
        permits: needed,
        resume() {
          cleanup()
          resume(Effect.void)
        }
      }
      function cleanup() {
        waiters.delete(entry)
        if (waiters.size === 0) {
          MutableHashMap.remove(partitions, key)
        }
      }
      waiters.add(entry)
      return Effect.sync(() => {
        cleanup()
        waitingPermits -= entry.permits
        if (taken > 0) {
          releaseUnsafe(taken)
        }
      })
    })

  let iterator = partitions[Symbol.iterator]()
  const releaseUnsafe = (permits: number) => {
    while (permits > 0) {
      if (waitingPermits === 0) {
        totalPermits += permits
        return
      }

      let state = iterator.next()
      if (state.done) {
        iterator = partitions[Symbol.iterator]()
        state = iterator.next()
        if (state.done) return
      }

      const entry = Iterable.unsafeHead(state.value[1])
      entry.permits--
      waitingPermits--
      if (entry.permits === 0) entry.resume()
      permits--
    }
  }

  return {
    [TypeId]: TypeId,
    withPermits: (key, permits) => {
      const takePermits = take(key, permits)
      const release: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R> = Effect.matchCauseEffect({
        onFailure(cause) {
          releaseUnsafe(permits)
          return Effect.failCause(cause)
        },
        onSuccess(value) {
          releaseUnsafe(permits)
          return Effect.succeed(value)
        }
      })
      return (effect) =>
        Effect.uninterruptibleMask((restore) =>
          Effect.flatMap(
            restore(takePermits),
            () => release(restore(effect))
          )
        )
    }
  }
}

/**
 * A `PartitionedSemaphore` is a concurrency primitive that can be used to
 * control concurrent access to a resource across multiple partitions identified
 * by keys.
 *
 * The total number of permits is shared across all partitions, with waiting
 * permits equally distributed among partitions using a round-robin strategy.
 *
 * This is useful when you want to limit the total number of concurrent accesses
 * to a resource, while still allowing for fair distribution of access across
 * different partitions.
 *
 * @since 3.19.4
 * @category Constructors
 * @experimental
 */
export const make = <K = unknown>(options: {
  readonly permits: number
}): Effect.Effect<PartitionedSemaphore<K>> => Effect.sync(() => makeUnsafe<K>(options))
