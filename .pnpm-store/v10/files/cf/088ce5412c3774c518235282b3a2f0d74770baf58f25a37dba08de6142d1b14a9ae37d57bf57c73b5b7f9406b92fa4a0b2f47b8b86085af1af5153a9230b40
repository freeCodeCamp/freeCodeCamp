"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeUnsafe = exports.make = exports.TypeId = void 0;
var Effect = _interopRequireWildcard(require("./Effect.js"));
var Iterable = _interopRequireWildcard(require("./Iterable.js"));
var MutableHashMap = _interopRequireWildcard(require("./MutableHashMap.js"));
var Option = _interopRequireWildcard(require("./Option.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 3.19.4
 * @experimental
 */

/**
 * @since 3.19.4
 * @category Models
 * @experimental
 */
const TypeId = exports.TypeId = "~effect/PartitionedSemaphore";
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
const makeUnsafe = options => {
  const maxPermits = Math.max(0, options.permits);
  if (!Number.isFinite(maxPermits)) {
    return {
      [TypeId]: TypeId,
      withPermits: () => effect => effect
    };
  }
  let totalPermits = maxPermits;
  let waitingPermits = 0;
  const partitions = MutableHashMap.empty();
  const take = (key, permits) => Effect.async(resume => {
    if (maxPermits < permits) {
      return resume(Effect.never);
    } else if (totalPermits >= permits) {
      totalPermits -= permits;
      return resume(Effect.void);
    }
    const needed = permits - totalPermits;
    const taken = permits - needed;
    if (totalPermits > 0) {
      totalPermits = 0;
    }
    waitingPermits += needed;
    const waiters = Option.getOrElse(MutableHashMap.get(partitions, key), () => {
      const set = new Set();
      MutableHashMap.set(partitions, key, set);
      return set;
    });
    const entry = {
      permits: needed,
      resume() {
        cleanup();
        resume(Effect.void);
      }
    };
    function cleanup() {
      waiters.delete(entry);
      if (waiters.size === 0) {
        MutableHashMap.remove(partitions, key);
      }
    }
    waiters.add(entry);
    return Effect.sync(() => {
      cleanup();
      waitingPermits -= entry.permits;
      if (taken > 0) {
        releaseUnsafe(taken);
      }
    });
  });
  let iterator = partitions[Symbol.iterator]();
  const releaseUnsafe = permits => {
    while (permits > 0) {
      if (waitingPermits === 0) {
        totalPermits += permits;
        return;
      }
      let state = iterator.next();
      if (state.done) {
        iterator = partitions[Symbol.iterator]();
        state = iterator.next();
        if (state.done) return;
      }
      const entry = Iterable.unsafeHead(state.value[1]);
      entry.permits--;
      waitingPermits--;
      if (entry.permits === 0) entry.resume();
      permits--;
    }
  };
  return {
    [TypeId]: TypeId,
    withPermits: (key, permits) => {
      const takePermits = take(key, permits);
      const release = Effect.matchCauseEffect({
        onFailure(cause) {
          releaseUnsafe(permits);
          return Effect.failCause(cause);
        },
        onSuccess(value) {
          releaseUnsafe(permits);
          return Effect.succeed(value);
        }
      });
      return effect => Effect.uninterruptibleMask(restore => Effect.flatMap(restore(takePermits), () => release(restore(effect))));
    }
  };
};
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
exports.makeUnsafe = makeUnsafe;
const make = options => Effect.sync(() => makeUnsafe(options));
exports.make = make;
//# sourceMappingURL=PartitionedSemaphore.js.map