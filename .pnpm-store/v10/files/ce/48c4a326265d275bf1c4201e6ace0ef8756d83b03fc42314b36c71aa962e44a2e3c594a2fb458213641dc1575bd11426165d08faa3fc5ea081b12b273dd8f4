"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tail = exports.shift = exports.reset = exports.prepend = exports.pop = exports.make = exports.length = exports.isEmpty = exports.head = exports.fromIterable = exports.forEach = exports.empty = exports.append = void 0;
var Dual = _interopRequireWildcard(require("./Function.js"));
var _Inspectable = require("./Inspectable.js");
var _Pipeable = require("./Pipeable.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

const TypeId = /*#__PURE__*/Symbol.for("effect/MutableList");
const MutableListProto = {
  [TypeId]: TypeId,
  [Symbol.iterator]() {
    let done = false;
    let head = this.head;
    return {
      next() {
        if (done) {
          return this.return();
        }
        if (head == null) {
          done = true;
          return this.return();
        }
        const value = head.value;
        head = head.next;
        return {
          done,
          value
        };
      },
      return(value) {
        if (!done) {
          done = true;
        }
        return {
          done: true,
          value
        };
      }
    };
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableList",
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
/** @internal */
const makeNode = value => ({
  value,
  removed: false,
  prev: undefined,
  next: undefined
});
/**
 * Creates an empty `MutableList`.
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = () => {
  const list = Object.create(MutableListProto);
  list.head = undefined;
  list.tail = undefined;
  list._length = 0;
  return list;
};
/**
 * Creates a new `MutableList` from an iterable collection of values.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.empty = empty;
const fromIterable = iterable => {
  const list = empty();
  for (const element of iterable) {
    append(list, element);
  }
  return list;
};
/**
 * Creates a new `MutableList` from the specified elements.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.fromIterable = fromIterable;
const make = (...elements) => fromIterable(elements);
/**
 * Returns `true` if the list contains zero elements, `false`, otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
exports.make = make;
const isEmpty = self => length(self) === 0;
/**
 * Returns the length of the list.
 *
 * @since 2.0.0
 * @category getters
 */
exports.isEmpty = isEmpty;
const length = self => self._length;
/**
 * Returns the last element of the list, if it exists.
 *
 * @since 2.0.0
 * @category getters
 */
exports.length = length;
const tail = self => self.tail === undefined ? undefined : self.tail.value;
/**
 * Returns the first element of the list, if it exists.
 *
 * @since 2.0.0
 * @category getters
 */
exports.tail = tail;
const head = self => self.head === undefined ? undefined : self.head.value;
/**
 * Executes the specified function `f` for each element in the list.
 *
 * @since 2.0.0
 * @category traversing
 */
exports.head = head;
const forEach = exports.forEach = /*#__PURE__*/Dual.dual(2, (self, f) => {
  let current = self.head;
  while (current !== undefined) {
    f(current.value);
    current = current.next;
  }
});
/**
 * Removes all elements from the doubly-linked list.
 *
 * @since 2.0.0
 */
const reset = self => {
  ;
  self._length = 0;
  self.head = undefined;
  self.tail = undefined;
  return self;
};
/**
 * Appends the specified element to the end of the `MutableList`.
 *
 * @category concatenating
 * @since 2.0.0
 */
exports.reset = reset;
const append = exports.append = /*#__PURE__*/Dual.dual(2, (self, value) => {
  const node = makeNode(value);
  if (self.head === undefined) {
    self.head = node;
  }
  if (self.tail === undefined) {
    self.tail = node;
  } else {
    self.tail.next = node;
    node.prev = self.tail;
    self.tail = node;
  }
  ;
  self._length += 1;
  return self;
});
/**
 * Removes the first value from the list and returns it, if it exists.
 *
 * @since 0.0.1
 */
const shift = self => {
  const head = self.head;
  if (head !== undefined) {
    remove(self, head);
    return head.value;
  }
  return undefined;
};
/**
 * Removes the last value from the list and returns it, if it exists.
 *
 * @since 0.0.1
 */
exports.shift = shift;
const pop = self => {
  const tail = self.tail;
  if (tail !== undefined) {
    remove(self, tail);
    return tail.value;
  }
  return undefined;
};
/**
 * Prepends the specified value to the beginning of the list.
 *
 * @category concatenating
 * @since 2.0.0
 */
exports.pop = pop;
const prepend = exports.prepend = /*#__PURE__*/Dual.dual(2, (self, value) => {
  const node = makeNode(value);
  node.next = self.head;
  if (self.head !== undefined) {
    self.head.prev = node;
  }
  self.head = node;
  if (self.tail === undefined) {
    self.tail = node;
  }
  ;
  self._length += 1;
  return self;
});
const remove = (self, node) => {
  if (node.removed) {
    return;
  }
  node.removed = true;
  if (node.prev !== undefined && node.next !== undefined) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  } else if (node.prev !== undefined) {
    self.tail = node.prev;
    node.prev.next = undefined;
  } else if (node.next !== undefined) {
    self.head = node.next;
    node.next.prev = undefined;
  } else {
    self.tail = undefined;
    self.head = undefined;
  }
  if (self._length > 0) {
    ;
    self._length -= 1;
  }
};
//# sourceMappingURL=MutableList.js.map