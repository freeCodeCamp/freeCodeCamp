import * as internal from "./internal/stm/tReentrantLock.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const TReentrantLockTypeId = internal.TReentrantLockTypeId;
/**
 * Acquires a read lock. The transaction will suspend until no other fiber is
 * holding a write lock. Succeeds with the number of read locks held by this
 * fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const acquireRead = internal.acquireRead;
/**
 * Acquires a write lock. The transaction will suspend until no other fibers
 * are holding read or write locks. Succeeds with the number of write locks
 * held by this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const acquireWrite = internal.acquireWrite;
/**
 * Retrieves the number of acquired read locks for this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const fiberReadLocks = internal.fiberReadLocks;
/**
 * Retrieves the number of acquired write locks for this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const fiberWriteLocks = internal.fiberWriteLocks;
/**
 * Just a convenience method for applications that only need reentrant locks,
 * without needing a distinction between readers / writers.
 *
 * See `TReentrantLock.writeLock`.
 *
 * @since 2.0.0
 * @category mutations
 */
export const lock = internal.lock;
/**
 * Determines if any fiber has a read or write lock.
 *
 * @since 2.0.0
 * @category mutations
 */
export const locked = internal.locked;
/**
 * Makes a new reentrant read/write lock.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make = internal.make;
/**
 * Obtains a read lock in a scoped context.
 *
 * @since 2.0.0
 * @category mutations
 */
export const readLock = internal.readLock;
/**
 * Retrieves the total number of acquired read locks.
 *
 * @since 2.0.0
 * @category mutations
 */
export const readLocks = internal.readLocks;
/**
 * Determines if any fiber has a read lock.
 *
 * @since 2.0.0
 * @category mutations
 */
export const readLocked = internal.readLocked;
/**
 * Releases a read lock held by this fiber. Succeeds with the outstanding
 * number of read locks held by this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const releaseRead = internal.releaseRead;
/**
 * Releases a write lock held by this fiber. Succeeds with the outstanding
 * number of write locks held by this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const releaseWrite = internal.releaseWrite;
/**
 * Runs the specified workflow with a lock.
 *
 * @since 2.0.0
 * @category mutations
 */
export const withLock = internal.withLock;
/**
 * Runs the specified workflow with a read lock.
 *
 * @since 2.0.0
 * @category mutations
 */
export const withReadLock = internal.withReadLock;
/**
 * Runs the specified workflow with a write lock.
 *
 * @since 2.0.0
 * @category mutations
 */
export const withWriteLock = internal.withWriteLock;
/**
 * Obtains a write lock in a scoped context.
 *
 * @since 2.0.0
 * @category mutations
 */
export const writeLock = internal.writeLock;
/**
 * Determines if a write lock is held by some fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
export const writeLocked = internal.writeLocked;
/**
 * Computes the number of write locks held by fibers.
 *
 * @since 2.0.0
 * @category mutations
 */
export const writeLocks = internal.writeLocks;
//# sourceMappingURL=TReentrantLock.js.map