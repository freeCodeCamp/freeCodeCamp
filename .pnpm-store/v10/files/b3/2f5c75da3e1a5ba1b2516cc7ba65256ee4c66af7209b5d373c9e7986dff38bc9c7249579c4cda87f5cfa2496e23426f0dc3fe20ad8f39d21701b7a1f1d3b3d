"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unbounded = exports.pollUpTo = exports.poll = exports.offerAll = exports.offer = exports.length = exports.isFull = exports.isEmpty = exports.capacity = exports.bounded = exports.EmptyMutableQueue = void 0;
var Chunk = _interopRequireWildcard(require("./Chunk.js"));
var Dual = _interopRequireWildcard(require("./Function.js"));
var _Inspectable = require("./Inspectable.js");
var MutableList = _interopRequireWildcard(require("./MutableList.js"));
var _Pipeable = require("./Pipeable.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

const TypeId = /*#__PURE__*/Symbol.for("effect/MutableQueue");
/**
 * @since 2.0.0
 * @category symbol
 */
const EmptyMutableQueue = exports.EmptyMutableQueue = /*#__PURE__*/Symbol.for("effect/mutable/MutableQueue/Empty");
const MutableQueueProto = {
  [TypeId]: TypeId,
  [Symbol.iterator]() {
    return Array.from(this.queue)[Symbol.iterator]();
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableQueue",
      values: Array.from(this).map(_Inspectable.toJSON)
    };
  },
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
const make = capacity => {
  const queue = Object.create(MutableQueueProto);
  queue.queue = MutableList.empty();
  queue.capacity = capacity;
  return queue;
};
/**
 * Creates a new bounded `MutableQueue`.
 *
 * @since 2.0.0
 * @category constructors
 */
const bounded = capacity => make(capacity);
/**
 * Creates a new unbounded `MutableQueue`.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.bounded = bounded;
const unbounded = () => make(undefined);
/**
 * Returns the current number of elements in the queue.
 *
 * @since 2.0.0
 * @category getters
 */
exports.unbounded = unbounded;
const length = self => MutableList.length(self.queue);
/**
 * Returns `true` if the queue is empty, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
exports.length = length;
const isEmpty = self => MutableList.isEmpty(self.queue);
/**
 * Returns `true` if the queue is full, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
exports.isEmpty = isEmpty;
const isFull = self => self.capacity === undefined ? false : MutableList.length(self.queue) === self.capacity;
/**
 * The **maximum** number of elements that a queue can hold.
 *
 * **Note**: unbounded queues can still implement this interface with
 * `capacity = Infinity`.
 *
 * @since 2.0.0
 * @category getters
 */
exports.isFull = isFull;
const capacity = self => self.capacity === undefined ? Infinity : self.capacity;
/**
 * Offers an element to the queue.
 *
 * Returns whether the enqueue was successful or not.
 *
 * @since 2.0.0
 */
exports.capacity = capacity;
const offer = exports.offer = /*#__PURE__*/Dual.dual(2, (self, value) => {
  const queueLength = MutableList.length(self.queue);
  if (self.capacity !== undefined && queueLength === self.capacity) {
    return false;
  }
  MutableList.append(value)(self.queue);
  return true;
});
/**
 * Enqueues a collection of values into the queue.
 *
 * Returns a `Chunk` of the values that were **not** able to be enqueued.
 *
 * @since 2.0.0
 */
const offerAll = exports.offerAll = /*#__PURE__*/Dual.dual(2, (self, values) => {
  const iterator = values[Symbol.iterator]();
  let next;
  let remainder = Chunk.empty();
  let offering = true;
  while (offering && (next = iterator.next()) && !next.done) {
    offering = offer(next.value)(self);
  }
  while (next != null && !next.done) {
    remainder = Chunk.prepend(next.value)(remainder);
    next = iterator.next();
  }
  return Chunk.reverse(remainder);
});
/**
 * Dequeues an element from the queue.
 *
 * Returns either an element from the queue, or the `def` param.
 *
 * **Note**: if there is no meaningful default for your type, you can always
 * use `poll(MutableQueue.EmptyMutableQueue)`.
 *
 * @since 2.0.0
 */
const poll = exports.poll = /*#__PURE__*/Dual.dual(2, (self, def) => {
  if (MutableList.isEmpty(self.queue)) {
    return def;
  }
  return MutableList.shift(self.queue);
});
/**
 * Dequeues up to `n` elements from the queue.
 *
 * Returns a `List` of up to `n` elements.
 *
 * @since 2.0.0
 */
const pollUpTo = exports.pollUpTo = /*#__PURE__*/Dual.dual(2, (self, n) => {
  let result = Chunk.empty();
  let count = 0;
  while (count < n) {
    const element = poll(EmptyMutableQueue)(self);
    if (element === EmptyMutableQueue) {
      break;
    }
    result = Chunk.prepend(element)(result);
    count += 1;
  }
  return Chunk.reverse(result);
});
//# sourceMappingURL=MutableQueue.js.map