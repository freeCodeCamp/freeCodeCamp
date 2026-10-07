import * as Effect from "../../Effect.js"
import * as Equal from "../../Equal.js"
import * as FiberId from "../../FiberId.js"
import { dual } from "../../Function.js"
import * as HashMap from "../../HashMap.js"
import * as Option from "../../Option.js"
import type * as Scope from "../../Scope.js"
import type * as STM from "../../STM.js"
import type * as TReentrantLock from "../../TReentrantLock.js"
import type * as TRef from "../../TRef.js"
import * as core from "./core.js"
import * as tRef from "./tRef.js"

const TReentrantLockSymbolKey = "effect/TReentrantLock"

/** @internal */
export const TReentrantLockTypeId: TReentrantLock.TReentrantLockTypeId = Symbol.for(
  TReentrantLockSymbolKey
) as TReentrantLock.TReentrantLockTypeId

const WriteLockTypeId = Symbol.for("effect/TReentrantLock/WriteLock")

type WriteLockTypeId = typeof WriteLockTypeId

const ReadLockTypeId = Symbol.for("effect/TReentrantLock/ReadLock")

type ReadLockTypeId = typeof ReadLockTypeId

class TReentranLockImpl implements TReentrantLock.TReentrantLock {
  readonly [TReentrantLockTypeId]: TReentrantLock.TReentrantLockTypeId = TReentrantLockTypeId
  constructor(readonly state: TRef.TRef<LockState>) {}
}

/** @internal */
export interface LockState {
  /**
   * Computes the total number of read locks acquired.
   */
  readonly readLocks: number
  /**
   * Computes the total number of write locks acquired.
   */
  readonly writeLocks: number
  /**
   * Computes the number of read locks held by the specified fiber id.
   */
  readLocksHeld(fiberId: FiberId.FiberId): number
  /**
   * Computes the number of write locks held by the specified fiber id.
   */
  writeLocksHeld(fiberId: FiberId.FiberId): number
}

/**
 * This data structure describes the state of the lock when multiple fibers
 * have acquired read locks. The state is tracked as a map from fiber identity
 * to number of read locks acquired by the fiber. This level of detail permits
 * upgrading a read lock to a write lock.
 *
 * @internal
 */
export class ReadLock implements LockState {
  readonly [ReadLockTypeId]: ReadLockTypeId = ReadLockTypeId
  constructor(readonly readers: HashMap.HashMap<FiberId.FiberId, number>) {}
  get readLocks(): number {
    return Array.from(this.readers).reduce((acc, curr) => acc + curr[1], 0)
  }
  get writeLocks(): number {
    return 0
  }
  readLocksHeld(fiberId: FiberId.FiberId): number {
    return Option.getOrElse(
      HashMap.get(this.readers, fiberId),
      () => 0
    )
  }
  writeLocksHeld(_fiberId: FiberId.FiberId): number {
    return 0
  }
}

/**
 * This data structure describes the state of the lock when a single fiber has
 * a write lock. The fiber has an identity, and may also have acquired a
 * certain number of read locks.
 *
 * @internal
 */
export class WriteLock implements LockState {
  readonly [WriteLockTypeId]: WriteLockTypeId = WriteLockTypeId
  constructor(
    readonly readLocks: number,
    readonly writeLocks: number,
    readonly fiberId: FiberId.FiberId
  ) {}
  readLocksHeld(fiberId: FiberId.FiberId): number {
    return Equal.equals(fiberId)(this.fiberId) ? this.readLocks : 0
  }
  writeLocksHeld(fiberId: FiberId.FiberId): number {
    return Equal.equals(fiberId)(this.fiberId) ? this.writeLocks : 0
  }
}

const isReadLock = (lock: LockState): lock is ReadLock => {
  return ReadLockTypeId in lock
}

const isWriteLock = (lock: LockState): lock is WriteLock => {
  return WriteLockTypeId in lock
}

/**
 * An empty read lock state, in which no fiber holds any read locks.
 */
const emptyReadLock = new ReadLock(HashMap.empty())

/**
 * Creates a new read lock where the specified fiber holds the specified
 * number of read locks.
 */
const makeReadLock = (fiberId: FiberId.FiberId, count: number): ReadLock => {
  if (count <= 0) {
    return emptyReadLock
  }
  return new ReadLock(HashMap.make([fiberId, count]))
}

/**
 * Determines if there is no other holder of read locks aside from the
 * specified fiber id. If there are no other holders of read locks aside
 * from the specified fiber id, then it is safe to upgrade the read lock
 * into a write lock.
 */
const noOtherHolder = (readLock: ReadLock, fiberId: FiberId.FiberId): boolean => {
  return HashMap.isEmpty(readLock.readers) ||
    (HashMap.size(readLock.readers) === 1 && HashMap.has(readLock.readers, fiberId))
}

/**
 * Adjusts the number of read locks held by the specified fiber id.
 */
const adjustReadLock = (readLock: ReadLock, fiberId: FiberId.FiberId, adjustment: number): ReadLock => {
  const total = readLock.readLocksHeld(fiberId)
  const newTotal = total + adjustment
  if (newTotal < 0) {
    throw new Error(
      "BUG - TReentrantLock.ReadLock.adjust - please report an issue at https://github.com/Effect-TS/effect/issues"
    )
  }
  if (newTotal === 0) {
    return new ReadLock(HashMap.remove(readLock.readers, fiberId))
  }
  return new ReadLock(HashMap.set(readLock.readers, fiberId, newTotal))
}

const adjustRead = (self: TReentrantLock.TReentrantLock, delta: number): STM.STM<number> =>
  core.withSTMRuntime((runtime) => {
    const lock = tRef.unsafeGet(self.state, runtime.journal)
    if (isReadLock(lock)) {
      const result = adjustReadLock(lock, runtime.fiberId, delta)
      tRef.unsafeSet(self.state, result, runtime.journal)
      return core.succeed(result.readLocksHeld(runtime.fiberId))
    }
    if (isWriteLock(lock) && Equal.equals(runtime.fiberId)(lock.fiberId)) {
      const newTotal = lock.readLocks + delta
      if (newTotal < 0) {
        throw new Error(
          `Defect: Fiber ${
            FiberId.threadName(runtime.fiberId)
          } releasing read locks it does not hold, newTotal: ${newTotal}`
        )
      }
      tRef.unsafeSet(
        self.state,
        new WriteLock(newTotal, lock.writeLocks, runtime.fiberId),
        runtime.journal
      )
      return core.succeed(newTotal)
    }
    return core.retry
  })

/** @internal */
export const acquireRead = (self: TReentrantLock.TReentrantLock): STM.STM<number> => adjustRead(self, 1)

/** @internal */
export const acquireWrite = (self: TReentrantLock.TReentrantLock): STM.STM<number> =>
  core.withSTMRuntime((runtime) => {
    const lock = tRef.unsafeGet(self.state, runtime.journal)
    if (isReadLock(lock) && noOtherHolder(lock, runtime.fiberId)) {
      tRef.unsafeSet(
        self.state,
        new WriteLock(lock.readLocksHeld(runtime.fiberId), 1, runtime.fiberId),
        runtime.journal
      )
      return core.succeed(1)
    }
    if (isWriteLock(lock) && Equal.equals(runtime.fiberId)(lock.fiberId)) {
      tRef.unsafeSet(
        self.state,
        new WriteLock(lock.readLocks, lock.writeLocks + 1, runtime.fiberId),
        runtime.journal
      )
      return core.succeed(lock.writeLocks + 1)
    }
    return core.retry
  })

/** @internal */
export const fiberReadLocks = (self: TReentrantLock.TReentrantLock): STM.STM<number> =>
  core.effect<never, number>((journal, fiberId) =>
    tRef.unsafeGet(
      self.state,
      journal
    ).readLocksHeld(fiberId)
  )

/** @internal */
export const fiberWriteLocks = (self: TReentrantLock.TReentrantLock): STM.STM<number> =>
  core.effect<never, number>((journal, fiberId) =>
    tRef.unsafeGet(
      self.state,
      journal
    ).writeLocksHeld(fiberId)
  )

/** @internal */
export const lock = (self: TReentrantLock.TReentrantLock): Effect.Effect<number, never, Scope.Scope> => writeLock(self)

/** @internal */
export const locked = (self: TReentrantLock.TReentrantLock): STM.STM<boolean> =>
  core.zipWith(
    readLocked(self),
    writeLocked(self),
    (x, y) => x || y
  )

/** @internal */
export const make: STM.STM<TReentrantLock.TReentrantLock> = core.map(
  tRef.make<LockState>(emptyReadLock),
  (readLock) => new TReentranLockImpl(readLock)
)

/** @internal */
export const readLock = (self: TReentrantLock.TReentrantLock): Effect.Effect<number, never, Scope.Scope> =>
  Effect.acquireRelease(
    core.commit(acquireRead(self)),
    () => core.commit(releaseRead(self))
  )

/** @internal */
export const readLocks = (self: TReentrantLock.TReentrantLock): STM.STM<number> =>
  core.map(
    tRef.get(self.state),
    (state) => state.readLocks
  )

/** @internal */
export const readLocked = (self: TReentrantLock.TReentrantLock): STM.STM<boolean> =>
  core.map(
    tRef.get(self.state),
    (state) => state.readLocks > 0
  )

/** @internal */
export const releaseRead = (self: TReentrantLock.TReentrantLock): STM.STM<number> => adjustRead(self, -1)

/** @internal */
export const releaseWrite = (self: TReentrantLock.TReentrantLock): STM.STM<number> =>
  core.withSTMRuntime((runtime) => {
    const lock = tRef.unsafeGet(self.state, runtime.journal)
    if (isWriteLock(lock) && lock.writeLocks === 1 && Equal.equals(runtime.fiberId)(lock.fiberId)) {
      const result = makeReadLock(lock.fiberId, lock.readLocks)
      tRef.unsafeSet(self.state, result, runtime.journal)
      return core.succeed(result.writeLocksHeld(runtime.fiberId))
    }
    if (isWriteLock(lock) && Equal.equals(runtime.fiberId)(lock.fiberId)) {
      const result = new WriteLock(lock.readLocks, lock.writeLocks - 1, runtime.fiberId)
      tRef.unsafeSet(self.state, result, runtime.journal)
      return core.succeed(result.writeLocksHeld(runtime.fiberId))
    }
    throw new Error(
      `Defect: Fiber ${FiberId.threadName(runtime.fiberId)} releasing write lock it does not hold`
    )
  })

/** @internal */
export const withLock = dual<
  (
    self: TReentrantLock.TReentrantLock
  ) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(
    effect: Effect.Effect<A, E, R>,
    self: TReentrantLock.TReentrantLock
  ) => Effect.Effect<A, E, R>
>(2, (effect, self) => withWriteLock(effect, self))

/** @internal */
export const withReadLock = dual<
  (self: TReentrantLock.TReentrantLock) => <A, E, R>(
    effect: Effect.Effect<A, E, R>
  ) => Effect.Effect<A, E, R>,
  <A, E, R>(
    effect: Effect.Effect<A, E, R>,
    self: TReentrantLock.TReentrantLock
  ) => Effect.Effect<A, E, R>
>(2, (effect, self) =>
  Effect.uninterruptibleMask((restore) =>
    Effect.zipRight(
      restore(core.commit(acquireRead(self))),
      Effect.ensuring(
        effect,
        core.commit(releaseRead(self))
      )
    )
  ))

/** @internal */
export const withWriteLock = dual<
  (self: TReentrantLock.TReentrantLock) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(effect: Effect.Effect<A, E, R>, self: TReentrantLock.TReentrantLock) => Effect.Effect<A, E, R>
>(2, (effect, self) =>
  Effect.uninterruptibleMask((restore) =>
    Effect.zipRight(
      restore(core.commit(acquireWrite(self))),
      Effect.ensuring(
        effect,
        core.commit(releaseWrite(self))
      )
    )
  ))

/** @internal */
export const writeLock = (self: TReentrantLock.TReentrantLock): Effect.Effect<number, never, Scope.Scope> =>
  Effect.acquireRelease(
    core.commit(acquireWrite(self)),
    () => core.commit(releaseWrite(self))
  )

/** @internal */
export const writeLocked = (self: TReentrantLock.TReentrantLock): STM.STM<boolean> =>
  core.map(
    tRef.get(self.state),
    (state) => state.writeLocks > 0
  )

/** @internal */
export const writeLocks = (self: TReentrantLock.TReentrantLock): STM.STM<number> =>
  core.map(
    tRef.get(self.state),
    (state) => state.writeLocks
  )
