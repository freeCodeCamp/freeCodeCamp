"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeLocks = exports.writeLocked = exports.writeLock = exports.withWriteLock = exports.withReadLock = exports.withLock = exports.releaseWrite = exports.releaseRead = exports.readLocks = exports.readLocked = exports.readLock = exports.make = exports.locked = exports.lock = exports.fiberWriteLocks = exports.fiberReadLocks = exports.acquireWrite = exports.acquireRead = exports.WriteLock = exports.TReentrantLockTypeId = exports.ReadLock = void 0;
var Effect = _interopRequireWildcard(require("../../Effect.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var FiberId = _interopRequireWildcard(require("../../FiberId.js"));
var _Function = require("../../Function.js");
var HashMap = _interopRequireWildcard(require("../../HashMap.js"));
var Option = _interopRequireWildcard(require("../../Option.js"));
var core = _interopRequireWildcard(require("./core.js"));
var tRef = _interopRequireWildcard(require("./tRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const TReentrantLockSymbolKey = "effect/TReentrantLock";
/** @internal */
const TReentrantLockTypeId = exports.TReentrantLockTypeId = /*#__PURE__*/Symbol.for(TReentrantLockSymbolKey);
const WriteLockTypeId = /*#__PURE__*/Symbol.for("effect/TReentrantLock/WriteLock");
const ReadLockTypeId = /*#__PURE__*/Symbol.for("effect/TReentrantLock/ReadLock");
class TReentranLockImpl {
  state;
  [TReentrantLockTypeId] = TReentrantLockTypeId;
  constructor(state) {
    this.state = state;
  }
}
/**
 * This data structure describes the state of the lock when multiple fibers
 * have acquired read locks. The state is tracked as a map from fiber identity
 * to number of read locks acquired by the fiber. This level of detail permits
 * upgrading a read lock to a write lock.
 *
 * @internal
 */
class ReadLock {
  readers;
  [ReadLockTypeId] = ReadLockTypeId;
  constructor(readers) {
    this.readers = readers;
  }
  get readLocks() {
    return Array.from(this.readers).reduce((acc, curr) => acc + curr[1], 0);
  }
  get writeLocks() {
    return 0;
  }
  readLocksHeld(fiberId) {
    return Option.getOrElse(HashMap.get(this.readers, fiberId), () => 0);
  }
  writeLocksHeld(_fiberId) {
    return 0;
  }
}
/**
 * This data structure describes the state of the lock when a single fiber has
 * a write lock. The fiber has an identity, and may also have acquired a
 * certain number of read locks.
 *
 * @internal
 */
exports.ReadLock = ReadLock;
class WriteLock {
  readLocks;
  writeLocks;
  fiberId;
  [WriteLockTypeId] = WriteLockTypeId;
  constructor(readLocks, writeLocks, fiberId) {
    this.readLocks = readLocks;
    this.writeLocks = writeLocks;
    this.fiberId = fiberId;
  }
  readLocksHeld(fiberId) {
    return Equal.equals(fiberId)(this.fiberId) ? this.readLocks : 0;
  }
  writeLocksHeld(fiberId) {
    return Equal.equals(fiberId)(this.fiberId) ? this.writeLocks : 0;
  }
}
exports.WriteLock = WriteLock;
const isReadLock = lock => {
  return ReadLockTypeId in lock;
};
const isWriteLock = lock => {
  return WriteLockTypeId in lock;
};
/**
 * An empty read lock state, in which no fiber holds any read locks.
 */
const emptyReadLock = /*#__PURE__*/new ReadLock(/*#__PURE__*/HashMap.empty());
/**
 * Creates a new read lock where the specified fiber holds the specified
 * number of read locks.
 */
const makeReadLock = (fiberId, count) => {
  if (count <= 0) {
    return emptyReadLock;
  }
  return new ReadLock(HashMap.make([fiberId, count]));
};
/**
 * Determines if there is no other holder of read locks aside from the
 * specified fiber id. If there are no other holders of read locks aside
 * from the specified fiber id, then it is safe to upgrade the read lock
 * into a write lock.
 */
const noOtherHolder = (readLock, fiberId) => {
  return HashMap.isEmpty(readLock.readers) || HashMap.size(readLock.readers) === 1 && HashMap.has(readLock.readers, fiberId);
};
/**
 * Adjusts the number of read locks held by the specified fiber id.
 */
const adjustReadLock = (readLock, fiberId, adjustment) => {
  const total = readLock.readLocksHeld(fiberId);
  const newTotal = total + adjustment;
  if (newTotal < 0) {
    throw new Error("BUG - TReentrantLock.ReadLock.adjust - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  if (newTotal === 0) {
    return new ReadLock(HashMap.remove(readLock.readers, fiberId));
  }
  return new ReadLock(HashMap.set(readLock.readers, fiberId, newTotal));
};
const adjustRead = (self, delta) => core.withSTMRuntime(runtime => {
  const lock = tRef.unsafeGet(self.state, runtime.journal);
  if (isReadLock(lock)) {
    const result = adjustReadLock(lock, runtime.fiberId, delta);
    tRef.unsafeSet(self.state, result, runtime.journal);
    return core.succeed(result.readLocksHeld(runtime.fiberId));
  }
  if (isWriteLock(lock) && Equal.equals(runtime.fiberId)(lock.fiberId)) {
    const newTotal = lock.readLocks + delta;
    if (newTotal < 0) {
      throw new Error(`Defect: Fiber ${FiberId.threadName(runtime.fiberId)} releasing read locks it does not hold, newTotal: ${newTotal}`);
    }
    tRef.unsafeSet(self.state, new WriteLock(newTotal, lock.writeLocks, runtime.fiberId), runtime.journal);
    return core.succeed(newTotal);
  }
  return core.retry;
});
/** @internal */
const acquireRead = self => adjustRead(self, 1);
/** @internal */
exports.acquireRead = acquireRead;
const acquireWrite = self => core.withSTMRuntime(runtime => {
  const lock = tRef.unsafeGet(self.state, runtime.journal);
  if (isReadLock(lock) && noOtherHolder(lock, runtime.fiberId)) {
    tRef.unsafeSet(self.state, new WriteLock(lock.readLocksHeld(runtime.fiberId), 1, runtime.fiberId), runtime.journal);
    return core.succeed(1);
  }
  if (isWriteLock(lock) && Equal.equals(runtime.fiberId)(lock.fiberId)) {
    tRef.unsafeSet(self.state, new WriteLock(lock.readLocks, lock.writeLocks + 1, runtime.fiberId), runtime.journal);
    return core.succeed(lock.writeLocks + 1);
  }
  return core.retry;
});
/** @internal */
exports.acquireWrite = acquireWrite;
const fiberReadLocks = self => core.effect((journal, fiberId) => tRef.unsafeGet(self.state, journal).readLocksHeld(fiberId));
/** @internal */
exports.fiberReadLocks = fiberReadLocks;
const fiberWriteLocks = self => core.effect((journal, fiberId) => tRef.unsafeGet(self.state, journal).writeLocksHeld(fiberId));
/** @internal */
exports.fiberWriteLocks = fiberWriteLocks;
const lock = self => writeLock(self);
/** @internal */
exports.lock = lock;
const locked = self => core.zipWith(readLocked(self), writeLocked(self), (x, y) => x || y);
/** @internal */
exports.locked = locked;
const make = exports.make = /*#__PURE__*/core.map(/*#__PURE__*/tRef.make(emptyReadLock), readLock => new TReentranLockImpl(readLock));
/** @internal */
const readLock = self => Effect.acquireRelease(core.commit(acquireRead(self)), () => core.commit(releaseRead(self)));
/** @internal */
exports.readLock = readLock;
const readLocks = self => core.map(tRef.get(self.state), state => state.readLocks);
/** @internal */
exports.readLocks = readLocks;
const readLocked = self => core.map(tRef.get(self.state), state => state.readLocks > 0);
/** @internal */
exports.readLocked = readLocked;
const releaseRead = self => adjustRead(self, -1);
/** @internal */
exports.releaseRead = releaseRead;
const releaseWrite = self => core.withSTMRuntime(runtime => {
  const lock = tRef.unsafeGet(self.state, runtime.journal);
  if (isWriteLock(lock) && lock.writeLocks === 1 && Equal.equals(runtime.fiberId)(lock.fiberId)) {
    const result = makeReadLock(lock.fiberId, lock.readLocks);
    tRef.unsafeSet(self.state, result, runtime.journal);
    return core.succeed(result.writeLocksHeld(runtime.fiberId));
  }
  if (isWriteLock(lock) && Equal.equals(runtime.fiberId)(lock.fiberId)) {
    const result = new WriteLock(lock.readLocks, lock.writeLocks - 1, runtime.fiberId);
    tRef.unsafeSet(self.state, result, runtime.journal);
    return core.succeed(result.writeLocksHeld(runtime.fiberId));
  }
  throw new Error(`Defect: Fiber ${FiberId.threadName(runtime.fiberId)} releasing write lock it does not hold`);
});
/** @internal */
exports.releaseWrite = releaseWrite;
const withLock = exports.withLock = /*#__PURE__*/(0, _Function.dual)(2, (effect, self) => withWriteLock(effect, self));
/** @internal */
const withReadLock = exports.withReadLock = /*#__PURE__*/(0, _Function.dual)(2, (effect, self) => Effect.uninterruptibleMask(restore => Effect.zipRight(restore(core.commit(acquireRead(self))), Effect.ensuring(effect, core.commit(releaseRead(self))))));
/** @internal */
const withWriteLock = exports.withWriteLock = /*#__PURE__*/(0, _Function.dual)(2, (effect, self) => Effect.uninterruptibleMask(restore => Effect.zipRight(restore(core.commit(acquireWrite(self))), Effect.ensuring(effect, core.commit(releaseWrite(self))))));
/** @internal */
const writeLock = self => Effect.acquireRelease(core.commit(acquireWrite(self)), () => core.commit(releaseWrite(self)));
/** @internal */
exports.writeLock = writeLock;
const writeLocked = self => core.map(tRef.get(self.state), state => state.writeLocks > 0);
/** @internal */
exports.writeLocked = writeLocked;
const writeLocks = self => core.map(tRef.get(self.state), state => state.writeLocks);
exports.writeLocks = writeLocks;
//# sourceMappingURL=tReentrantLock.js.map