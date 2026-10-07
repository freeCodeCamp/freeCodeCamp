/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js"
import * as internal from "./internal/stm/tReentrantLock.js"
import type * as Scope from "./Scope.js"
import type * as STM from "./STM.js"
import type * as TRef from "./TRef.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const TReentrantLockTypeId: unique symbol = internal.TReentrantLockTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type TReentrantLockTypeId = typeof TReentrantLockTypeId

/**
 * A `TReentrantLock` is a reentrant read/write lock. Multiple readers may all
 * concurrently acquire read locks. Only one writer is allowed to acquire a
 * write lock at any given time. Read locks may be upgraded into write locks. A
 * fiber that has a write lock may acquire other write locks or read locks.
 *
 * The two primary methods of this structure are `readLock`, which acquires a
 * read lock in a scoped context, and `writeLock`, which acquires a write lock
 * in a scoped context.
 *
 * Although located in the STM package, there is no need for locks within STM
 * transactions. However, this lock can be quite useful in effectful code, to
 * provide consistent read/write access to mutable state; and being in STM
 * allows this structure to be composed into more complicated concurrent
 * structures that are consumed from effectful code.
 *
 * @since 2.0.0
 * @category models
 */
export interface TReentrantLock extends TReentrantLock.Proto {}
/**
 * @internal
 * @since 2.0.0
 */
export interface TReentrantLock {
  /** @internal */
  readonly state: TRef.TRef<internal.LockState>
}

/**
 * @since 2.0.0
 */
export declare namespace TReentrantLock {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Proto {
    readonly [TReentrantLockTypeId]: TReentrantLockTypeId
  }
}

/**
 * Acquires a read lock. The transaction will suspend until no other fiber is
 * holding a write lock. Succeeds with the number of read locks held by this
 * fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const acquireRead: (self: TReentrantLock) => STM.STM<number> = internal.acquireRead

/**
 * Acquires a write lock. The transaction will suspend until no other fibers
 * are holding read or write locks. Succeeds with the number of write locks
 * held by this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const acquireWrite: (self: TReentrantLock) => STM.STM<number> = internal.acquireWrite

/**
 * Retrieves the number of acquired read locks for this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const fiberReadLocks: (self: TReentrantLock) => STM.STM<number> = internal.fiberReadLocks

/**
 * Retrieves the number of acquired write locks for this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const fiberWriteLocks: (self: TReentrantLock) => STM.STM<number> = internal.fiberWriteLocks

/**
 * Just a convenience method for applications that only need reentrant locks,
 * without needing a distinction between readers / writers.
 *
 * See `TReentrantLock.writeLock`.
 *
 * @since 2.0.0
 * @category mutations
 */
export const lock: (self: TReentrantLock) => Effect.Effect<number, never, Scope.Scope> = internal.lock

/**
 * Determines if any fiber has a read or write lock.
 *
 * @since 2.0.0
 * @category mutations
 */
export const locked: (self: TReentrantLock) => STM.STM<boolean> = internal.locked

/**
 * Makes a new reentrant read/write lock.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make: STM.STM<TReentrantLock> = internal.make

/**
 * Obtains a read lock in a scoped context.
 *
 * @since 2.0.0
 * @category mutations
 */
export const readLock: (self: TReentrantLock) => Effect.Effect<number, never, Scope.Scope> = internal.readLock

/**
 * Retrieves the total number of acquired read locks.
 *
 * @since 2.0.0
 * @category mutations
 */
export const readLocks: (self: TReentrantLock) => STM.STM<number> = internal.readLocks

/**
 * Determines if any fiber has a read lock.
 *
 * @since 2.0.0
 * @category mutations
 */
export const readLocked: (self: TReentrantLock) => STM.STM<boolean> = internal.readLocked

/**
 * Releases a read lock held by this fiber. Succeeds with the outstanding
 * number of read locks held by this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const releaseRead: (self: TReentrantLock) => STM.STM<number> = internal.releaseRead

/**
 * Releases a write lock held by this fiber. Succeeds with the outstanding
 * number of write locks held by this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const releaseWrite: (self: TReentrantLock) => STM.STM<number> = internal.releaseWrite

/**
 * Runs the specified workflow with a lock.
 *
 * @since 2.0.0
 * @category mutations
 */
export const withLock: {
  /**
   * Runs the specified workflow with a lock.
   *
   * @since 2.0.0
   * @category mutations
   */
  (self: TReentrantLock): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  /**
   * Runs the specified workflow with a lock.
   *
   * @since 2.0.0
   * @category mutations
   */
  <A, E, R>(effect: Effect.Effect<A, E, R>, self: TReentrantLock): Effect.Effect<A, E, R>
} = internal.withLock

/**
 * Runs the specified workflow with a read lock.
 *
 * @since 2.0.0
 * @category mutations
 */
export const withReadLock: {
  /**
   * Runs the specified workflow with a read lock.
   *
   * @since 2.0.0
   * @category mutations
   */
  (self: TReentrantLock): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  /**
   * Runs the specified workflow with a read lock.
   *
   * @since 2.0.0
   * @category mutations
   */
  <A, E, R>(effect: Effect.Effect<A, E, R>, self: TReentrantLock): Effect.Effect<A, E, R>
} = internal.withReadLock

/**
 * Runs the specified workflow with a write lock.
 *
 * @since 2.0.0
 * @category mutations
 */
export const withWriteLock: {
  /**
   * Runs the specified workflow with a write lock.
   *
   * @since 2.0.0
   * @category mutations
   */
  (self: TReentrantLock): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  /**
   * Runs the specified workflow with a write lock.
   *
   * @since 2.0.0
   * @category mutations
   */
  <A, E, R>(effect: Effect.Effect<A, E, R>, self: TReentrantLock): Effect.Effect<A, E, R>
} = internal.withWriteLock

/**
 * Obtains a write lock in a scoped context.
 *
 * @since 2.0.0
 * @category mutations
 */
export const writeLock: (self: TReentrantLock) => Effect.Effect<number, never, Scope.Scope> = internal.writeLock

/**
 * Determines if a write lock is held by some fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const writeLocked: (self: TReentrantLock) => STM.STM<boolean> = internal.writeLocked

/**
 * Computes the number of write locks held by fibers.
 *
 * @since 2.0.0
 * @category mutations
 */
export const writeLocks: (self: TReentrantLock) => STM.STM<number> = internal.writeLocks
