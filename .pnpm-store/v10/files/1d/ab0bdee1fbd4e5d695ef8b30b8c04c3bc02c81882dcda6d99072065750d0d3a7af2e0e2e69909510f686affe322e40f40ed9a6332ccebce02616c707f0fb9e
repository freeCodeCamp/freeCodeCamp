"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeLocks = exports.writeLocked = exports.writeLock = exports.withWriteLock = exports.withReadLock = exports.withLock = exports.releaseWrite = exports.releaseRead = exports.readLocks = exports.readLocked = exports.readLock = exports.make = exports.locked = exports.lock = exports.fiberWriteLocks = exports.fiberReadLocks = exports.acquireWrite = exports.acquireRead = exports.TReentrantLockTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/stm/tReentrantLock.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const TReentrantLockTypeId = exports.TReentrantLockTypeId = internal.TReentrantLockTypeId;
/**
 * Acquires a read lock. The transaction will suspend until no other fiber is
 * holding a write lock. Succeeds with the number of read locks held by this
 * fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
const acquireRead = exports.acquireRead = internal.acquireRead;
/**
 * Acquires a write lock. The transaction will suspend until no other fibers
 * are holding read or write locks. Succeeds with the number of write locks
 * held by this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
const acquireWrite = exports.acquireWrite = internal.acquireWrite;
/**
 * Retrieves the number of acquired read locks for this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
const fiberReadLocks = exports.fiberReadLocks = internal.fiberReadLocks;
/**
 * Retrieves the number of acquired write locks for this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
const fiberWriteLocks = exports.fiberWriteLocks = internal.fiberWriteLocks;
/**
 * Just a convenience method for applications that only need reentrant locks,
 * without needing a distinction between readers / writers.
 *
 * See `TReentrantLock.writeLock`.
 *
 * @since 2.0.0
 * @category mutations
 */
const lock = exports.lock = internal.lock;
/**
 * Determines if any fiber has a read or write lock.
 *
 * @since 2.0.0
 * @category mutations
 */
const locked = exports.locked = internal.locked;
/**
 * Makes a new reentrant read/write lock.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Obtains a read lock in a scoped context.
 *
 * @since 2.0.0
 * @category mutations
 */
const readLock = exports.readLock = internal.readLock;
/**
 * Retrieves the total number of acquired read locks.
 *
 * @since 2.0.0
 * @category mutations
 */
const readLocks = exports.readLocks = internal.readLocks;
/**
 * Determines if any fiber has a read lock.
 *
 * @since 2.0.0
 * @category mutations
 */
const readLocked = exports.readLocked = internal.readLocked;
/**
 * Releases a read lock held by this fiber. Succeeds with the outstanding
 * number of read locks held by this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
const releaseRead = exports.releaseRead = internal.releaseRead;
/**
 * Releases a write lock held by this fiber. Succeeds with the outstanding
 * number of write locks held by this fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
const releaseWrite = exports.releaseWrite = internal.releaseWrite;
/**
 * Runs the specified workflow with a lock.
 *
 * @since 2.0.0
 * @category mutations
 */
const withLock = exports.withLock = internal.withLock;
/**
 * Runs the specified workflow with a read lock.
 *
 * @since 2.0.0
 * @category mutations
 */
const withReadLock = exports.withReadLock = internal.withReadLock;
/**
 * Runs the specified workflow with a write lock.
 *
 * @since 2.0.0
 * @category mutations
 */
const withWriteLock = exports.withWriteLock = internal.withWriteLock;
/**
 * Obtains a write lock in a scoped context.
 *
 * @since 2.0.0
 * @category mutations
 */
const writeLock = exports.writeLock = internal.writeLock;
/**
 * Determines if a write lock is held by some fiber.
 *
 * @since 2.0.0
 * @category mutations
 */
const writeLocked = exports.writeLocked = internal.writeLocked;
/**
 * Computes the number of write locks held by fibers.
 *
 * @since 2.0.0
 * @category mutations
 */
const writeLocks = exports.writeLocks = internal.writeLocks;
//# sourceMappingURL=TReentrantLock.js.map