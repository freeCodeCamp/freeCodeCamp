"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valuesForward = exports.valuesBackward = exports.size = exports.reversed = exports.removeFirst = exports.reduce = exports.make = exports.lessThanForwards = exports.lessThanEqualForwards = exports.lessThanEqualBackwards = exports.lessThanBackwards = exports.last = exports.keysForward = exports.keysBackward = exports.isRedBlackTree = exports.insert = exports.has = exports.greaterThanForwards = exports.greaterThanEqualForwards = exports.greaterThanEqualBackwards = exports.greaterThanBackwards = exports.getOrder = exports.getAt = exports.fromIterable = exports.forEachLessThan = exports.forEachGreaterThanEqual = exports.forEachBetween = exports.forEach = exports.first = exports.findFirst = exports.findAll = exports.empty = exports.atForwards = exports.atBackwards = exports.RedBlackTreeTypeId = void 0;
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Equal = _interopRequireWildcard(require("../Equal.js"));
var _Function = require("../Function.js");
var Hash = _interopRequireWildcard(require("../Hash.js"));
var _Inspectable = require("../Inspectable.js");
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var _iterator = require("./redBlackTree/iterator.js");
var Node = _interopRequireWildcard(require("./redBlackTree/node.js"));
var Stack = _interopRequireWildcard(require("./stack.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const RedBlackTreeSymbolKey = "effect/RedBlackTree";
/** @internal */
const RedBlackTreeTypeId = exports.RedBlackTreeTypeId = /*#__PURE__*/Symbol.for(RedBlackTreeSymbolKey);
const redBlackTreeVariance = {
  /* c8 ignore next */
  _Key: _ => _,
  /* c8 ignore next */
  _Value: _ => _
};
const RedBlackTreeProto = {
  [RedBlackTreeTypeId]: redBlackTreeVariance,
  [Hash.symbol]() {
    let hash = Hash.hash(RedBlackTreeSymbolKey);
    for (const item of this) {
      hash ^= (0, _Function.pipe)(Hash.hash(item[0]), Hash.combine(Hash.hash(item[1])));
    }
    return Hash.cached(this, hash);
  },
  [Equal.symbol](that) {
    if (isRedBlackTree(that)) {
      if ((this._root?.count ?? 0) !== (that._root?.count ?? 0)) {
        return false;
      }
      const entries = Array.from(that);
      return Array.from(this).every((itemSelf, i) => {
        const itemThat = entries[i];
        return Equal.equals(itemSelf[0], itemThat[0]) && Equal.equals(itemSelf[1], itemThat[1]);
      });
    }
    return false;
  },
  [Symbol.iterator]() {
    const stack = [];
    let n = this._root;
    while (n != null) {
      stack.push(n);
      n = n.left;
    }
    return new _iterator.RedBlackTreeIterator(this, stack, _iterator.Direction.Forward);
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "RedBlackTree",
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
const makeImpl = (ord, root) => {
  const tree = Object.create(RedBlackTreeProto);
  tree._ord = ord;
  tree._root = root;
  return tree;
};
/** @internal */
const isRedBlackTree = u => (0, _Predicate.hasProperty)(u, RedBlackTreeTypeId);
/** @internal */
exports.isRedBlackTree = isRedBlackTree;
const empty = ord => makeImpl(ord, undefined);
/** @internal */
exports.empty = empty;
const fromIterable = exports.fromIterable = /*#__PURE__*/(0, _Function.dual)(2, (entries, ord) => {
  let tree = empty(ord);
  for (const [key, value] of entries) {
    tree = insert(tree, key, value);
  }
  return tree;
});
/** @internal */
const make = ord => (...entries) => {
  return fromIterable(entries, ord);
};
/** @internal */
exports.make = make;
const atBackwards = exports.atBackwards = /*#__PURE__*/(0, _Function.dual)(2, (self, index) => at(self, index, _iterator.Direction.Backward));
/** @internal */
const atForwards = exports.atForwards = /*#__PURE__*/(0, _Function.dual)(2, (self, index) => at(self, index, _iterator.Direction.Forward));
const at = (self, index, direction) => {
  return {
    [Symbol.iterator]: () => {
      if (index < 0) {
        return new _iterator.RedBlackTreeIterator(self, [], direction);
      }
      let node = self._root;
      const stack = [];
      while (node !== undefined) {
        stack.push(node);
        if (node.left !== undefined) {
          if (index < node.left.count) {
            node = node.left;
            continue;
          }
          index -= node.left.count;
        }
        if (!index) {
          return new _iterator.RedBlackTreeIterator(self, stack, direction);
        }
        index -= 1;
        if (node.right !== undefined) {
          if (index >= node.right.count) {
            break;
          }
          node = node.right;
        } else {
          break;
        }
      }
      return new _iterator.RedBlackTreeIterator(self, [], direction);
    }
  };
};
/** @internal */
const findAll = exports.findAll = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => {
  const stack = [];
  let node = self._root;
  let result = Chunk.empty();
  while (node !== undefined || stack.length > 0) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      const current = stack.pop();
      if (Equal.equals(key, current.key)) {
        result = Chunk.prepend(current.value)(result);
      }
      node = current.right;
    }
  }
  return result;
});
/** @internal */
const findFirst = exports.findFirst = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => {
  const cmp = self._ord;
  let node = self._root;
  while (node !== undefined) {
    const d = cmp(key, node.key);
    if (Equal.equals(key, node.key)) {
      return Option.some(node.value);
    }
    if (d <= 0) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return Option.none();
});
/** @internal */
const first = self => {
  let node = self._root;
  let current = self._root;
  while (node !== undefined) {
    current = node;
    node = node.left;
  }
  return current ? Option.some([current.key, current.value]) : Option.none();
};
/** @internal */
exports.first = first;
const getAt = exports.getAt = /*#__PURE__*/(0, _Function.dual)(2, (self, index) => {
  if (index < 0) {
    return Option.none();
  }
  let root = self._root;
  let node = undefined;
  while (root !== undefined) {
    node = root;
    if (root.left) {
      if (index < root.left.count) {
        root = root.left;
        continue;
      }
      index -= root.left.count;
    }
    if (!index) {
      return Option.some([node.key, node.value]);
    }
    index -= 1;
    if (root.right) {
      if (index >= root.right.count) {
        break;
      }
      root = root.right;
    } else {
      break;
    }
  }
  return Option.none();
});
/** @internal */
const getOrder = tree => tree._ord;
/** @internal */
exports.getOrder = getOrder;
const has = exports.has = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => Option.isSome(findFirst(self, key)));
/** @internal */
const insert = exports.insert = /*#__PURE__*/(0, _Function.dual)(3, (self, key, value) => {
  const cmp = self._ord;
  // Find point to insert new node at
  let n = self._root;
  const n_stack = [];
  const d_stack = [];
  while (n != null) {
    const d = cmp(key, n.key);
    n_stack.push(n);
    d_stack.push(d);
    if (d <= 0) {
      n = n.left;
    } else {
      n = n.right;
    }
  }
  // Rebuild path to leaf node
  n_stack.push({
    color: Node.Color.Red,
    key,
    value,
    left: undefined,
    right: undefined,
    count: 1
  });
  for (let s = n_stack.length - 2; s >= 0; --s) {
    const n2 = n_stack[s];
    if (d_stack[s] <= 0) {
      n_stack[s] = {
        color: n2.color,
        key: n2.key,
        value: n2.value,
        left: n_stack[s + 1],
        right: n2.right,
        count: n2.count + 1
      };
    } else {
      n_stack[s] = {
        color: n2.color,
        key: n2.key,
        value: n2.value,
        left: n2.left,
        right: n_stack[s + 1],
        count: n2.count + 1
      };
    }
  }
  // Rebalance tree using rotations
  for (let s = n_stack.length - 1; s > 1; --s) {
    const p = n_stack[s - 1];
    const n3 = n_stack[s];
    if (p.color === Node.Color.Black || n3.color === Node.Color.Black) {
      break;
    }
    const pp = n_stack[s - 2];
    if (pp.left === p) {
      if (p.left === n3) {
        const y = pp.right;
        if (y && y.color === Node.Color.Red) {
          p.color = Node.Color.Black;
          pp.right = Node.repaint(y, Node.Color.Black);
          pp.color = Node.Color.Red;
          s -= 1;
        } else {
          pp.color = Node.Color.Red;
          pp.left = p.right;
          p.color = Node.Color.Black;
          p.right = pp;
          n_stack[s - 2] = p;
          n_stack[s - 1] = n3;
          Node.recount(pp);
          Node.recount(p);
          if (s >= 3) {
            const ppp = n_stack[s - 3];
            if (ppp.left === pp) {
              ppp.left = p;
            } else {
              ppp.right = p;
            }
          }
          break;
        }
      } else {
        const y = pp.right;
        if (y && y.color === Node.Color.Red) {
          p.color = Node.Color.Black;
          pp.right = Node.repaint(y, Node.Color.Black);
          pp.color = Node.Color.Red;
          s -= 1;
        } else {
          p.right = n3.left;
          pp.color = Node.Color.Red;
          pp.left = n3.right;
          n3.color = Node.Color.Black;
          n3.left = p;
          n3.right = pp;
          n_stack[s - 2] = n3;
          n_stack[s - 1] = p;
          Node.recount(pp);
          Node.recount(p);
          Node.recount(n3);
          if (s >= 3) {
            const ppp = n_stack[s - 3];
            if (ppp.left === pp) {
              ppp.left = n3;
            } else {
              ppp.right = n3;
            }
          }
          break;
        }
      }
    } else {
      if (p.right === n3) {
        const y = pp.left;
        if (y && y.color === Node.Color.Red) {
          p.color = Node.Color.Black;
          pp.left = Node.repaint(y, Node.Color.Black);
          pp.color = Node.Color.Red;
          s -= 1;
        } else {
          pp.color = Node.Color.Red;
          pp.right = p.left;
          p.color = Node.Color.Black;
          p.left = pp;
          n_stack[s - 2] = p;
          n_stack[s - 1] = n3;
          Node.recount(pp);
          Node.recount(p);
          if (s >= 3) {
            const ppp = n_stack[s - 3];
            if (ppp.right === pp) {
              ppp.right = p;
            } else {
              ppp.left = p;
            }
          }
          break;
        }
      } else {
        const y = pp.left;
        if (y && y.color === Node.Color.Red) {
          p.color = Node.Color.Black;
          pp.left = Node.repaint(y, Node.Color.Black);
          pp.color = Node.Color.Red;
          s -= 1;
        } else {
          p.left = n3.right;
          pp.color = Node.Color.Red;
          pp.right = n3.left;
          n3.color = Node.Color.Black;
          n3.right = p;
          n3.left = pp;
          n_stack[s - 2] = n3;
          n_stack[s - 1] = p;
          Node.recount(pp);
          Node.recount(p);
          Node.recount(n3);
          if (s >= 3) {
            const ppp = n_stack[s - 3];
            if (ppp.right === pp) {
              ppp.right = n3;
            } else {
              ppp.left = n3;
            }
          }
          break;
        }
      }
    }
  }
  // Return new tree
  n_stack[0].color = Node.Color.Black;
  return makeImpl(self._ord, n_stack[0]);
});
/** @internal */
const keysForward = self => keys(self, _iterator.Direction.Forward);
/** @internal */
exports.keysForward = keysForward;
const keysBackward = self => keys(self, _iterator.Direction.Backward);
exports.keysBackward = keysBackward;
const keys = (self, direction) => {
  const begin = self[Symbol.iterator]();
  let count = 0;
  return {
    [Symbol.iterator]: () => keys(self, direction),
    next: () => {
      count++;
      const entry = begin.key;
      if (direction === _iterator.Direction.Forward) {
        begin.moveNext();
      } else {
        begin.movePrev();
      }
      switch (entry._tag) {
        case "None":
          {
            return {
              done: true,
              value: count
            };
          }
        case "Some":
          {
            return {
              done: false,
              value: entry.value
            };
          }
      }
    }
  };
};
/** @internal */
const last = self => {
  let node = self._root;
  let current = self._root;
  while (node !== undefined) {
    current = node;
    node = node.right;
  }
  return current ? Option.some([current.key, current.value]) : Option.none();
};
/** @internal */
exports.last = last;
const reversed = self => {
  return {
    [Symbol.iterator]: () => {
      const stack = [];
      let node = self._root;
      while (node !== undefined) {
        stack.push(node);
        node = node.right;
      }
      return new _iterator.RedBlackTreeIterator(self, stack, _iterator.Direction.Backward);
    }
  };
};
/** @internal */
exports.reversed = reversed;
const greaterThanBackwards = exports.greaterThanBackwards = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => greaterThan(self, key, _iterator.Direction.Backward));
/** @internal */
const greaterThanForwards = exports.greaterThanForwards = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => greaterThan(self, key, _iterator.Direction.Forward));
const greaterThan = (self, key, direction) => {
  return {
    [Symbol.iterator]: () => {
      const cmp = self._ord;
      let node = self._root;
      const stack = [];
      let last_ptr = 0;
      while (node !== undefined) {
        const d = cmp(key, node.key);
        stack.push(node);
        if (d < 0) {
          last_ptr = stack.length;
        }
        if (d < 0) {
          node = node.left;
        } else {
          node = node.right;
        }
      }
      stack.length = last_ptr;
      return new _iterator.RedBlackTreeIterator(self, stack, direction);
    }
  };
};
/** @internal */
const greaterThanEqualBackwards = exports.greaterThanEqualBackwards = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => greaterThanEqual(self, key, _iterator.Direction.Backward));
/** @internal */
const greaterThanEqualForwards = exports.greaterThanEqualForwards = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => greaterThanEqual(self, key, _iterator.Direction.Forward));
const greaterThanEqual = (self, key, direction = _iterator.Direction.Forward) => {
  return {
    [Symbol.iterator]: () => {
      const cmp = self._ord;
      let node = self._root;
      const stack = [];
      let last_ptr = 0;
      while (node !== undefined) {
        const d = cmp(key, node.key);
        stack.push(node);
        if (d <= 0) {
          last_ptr = stack.length;
        }
        if (d <= 0) {
          node = node.left;
        } else {
          node = node.right;
        }
      }
      stack.length = last_ptr;
      return new _iterator.RedBlackTreeIterator(self, stack, direction);
    }
  };
};
/** @internal */
const lessThanBackwards = exports.lessThanBackwards = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => lessThan(self, key, _iterator.Direction.Backward));
/** @internal */
const lessThanForwards = exports.lessThanForwards = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => lessThan(self, key, _iterator.Direction.Forward));
const lessThan = (self, key, direction) => {
  return {
    [Symbol.iterator]: () => {
      const cmp = self._ord;
      let node = self._root;
      const stack = [];
      let last_ptr = 0;
      while (node !== undefined) {
        const d = cmp(key, node.key);
        stack.push(node);
        if (d > 0) {
          last_ptr = stack.length;
        }
        if (d <= 0) {
          node = node.left;
        } else {
          node = node.right;
        }
      }
      stack.length = last_ptr;
      return new _iterator.RedBlackTreeIterator(self, stack, direction);
    }
  };
};
/** @internal */
const lessThanEqualBackwards = exports.lessThanEqualBackwards = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => lessThanEqual(self, key, _iterator.Direction.Backward));
/** @internal */
const lessThanEqualForwards = exports.lessThanEqualForwards = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => lessThanEqual(self, key, _iterator.Direction.Forward));
const lessThanEqual = (self, key, direction) => {
  return {
    [Symbol.iterator]: () => {
      const cmp = self._ord;
      let node = self._root;
      const stack = [];
      let last_ptr = 0;
      while (node !== undefined) {
        const d = cmp(key, node.key);
        stack.push(node);
        if (d >= 0) {
          last_ptr = stack.length;
        }
        if (d < 0) {
          node = node.left;
        } else {
          node = node.right;
        }
      }
      stack.length = last_ptr;
      return new _iterator.RedBlackTreeIterator(self, stack, direction);
    }
  };
};
/** @internal */
const forEach = exports.forEach = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const root = self._root;
  if (root !== undefined) {
    visitFull(root, (key, value) => {
      f(key, value);
      return Option.none();
    });
  }
});
/** @internal */
const forEachGreaterThanEqual = exports.forEachGreaterThanEqual = /*#__PURE__*/(0, _Function.dual)(3, (self, min, f) => {
  const root = self._root;
  const ord = self._ord;
  if (root !== undefined) {
    visitGreaterThanEqual(root, min, ord, (key, value) => {
      f(key, value);
      return Option.none();
    });
  }
});
/** @internal */
const forEachLessThan = exports.forEachLessThan = /*#__PURE__*/(0, _Function.dual)(3, (self, max, f) => {
  const root = self._root;
  const ord = self._ord;
  if (root !== undefined) {
    visitLessThan(root, max, ord, (key, value) => {
      f(key, value);
      return Option.none();
    });
  }
});
/** @internal */
const forEachBetween = exports.forEachBetween = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  body,
  max,
  min
}) => {
  const root = self._root;
  const ord = self._ord;
  if (root) {
    visitBetween(root, min, max, ord, (key, value) => {
      body(key, value);
      return Option.none();
    });
  }
});
/** @internal */
const reduce = exports.reduce = /*#__PURE__*/(0, _Function.dual)(3, (self, zero, f) => {
  let accumulator = zero;
  for (const entry of self) {
    accumulator = f(accumulator, entry[1], entry[0]);
  }
  return accumulator;
});
/** @internal */
const removeFirst = exports.removeFirst = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => {
  if (!has(self, key)) {
    return self;
  }
  const ord = self._ord;
  const cmp = ord;
  let node = self._root;
  const stack = [];
  while (node !== undefined) {
    const d = cmp(key, node.key);
    stack.push(node);
    if (Equal.equals(key, node.key)) {
      node = undefined;
    } else if (d <= 0) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  if (stack.length === 0) {
    return self;
  }
  const cstack = new Array(stack.length);
  let n = stack[stack.length - 1];
  cstack[cstack.length - 1] = {
    color: n.color,
    key: n.key,
    value: n.value,
    left: n.left,
    right: n.right,
    count: n.count
  };
  for (let i = stack.length - 2; i >= 0; --i) {
    n = stack[i];
    if (n.left === stack[i + 1]) {
      cstack[i] = {
        color: n.color,
        key: n.key,
        value: n.value,
        left: cstack[i + 1],
        right: n.right,
        count: n.count
      };
    } else {
      cstack[i] = {
        color: n.color,
        key: n.key,
        value: n.value,
        left: n.left,
        right: cstack[i + 1],
        count: n.count
      };
    }
  }
  // Get node
  n = cstack[cstack.length - 1];
  // If not leaf, then swap with previous node
  if (n.left !== undefined && n.right !== undefined) {
    // First walk to previous leaf
    const split = cstack.length;
    n = n.left;
    while (n.right != null) {
      cstack.push(n);
      n = n.right;
    }
    // Copy path to leaf
    const v = cstack[split - 1];
    cstack.push({
      color: n.color,
      key: v.key,
      value: v.value,
      left: n.left,
      right: n.right,
      count: n.count
    });
    cstack[split - 1].key = n.key;
    cstack[split - 1].value = n.value;
    // Fix up stack
    for (let i = cstack.length - 2; i >= split; --i) {
      n = cstack[i];
      cstack[i] = {
        color: n.color,
        key: n.key,
        value: n.value,
        left: n.left,
        right: cstack[i + 1],
        count: n.count
      };
    }
    cstack[split - 1].left = cstack[split];
  }
  // Remove leaf node
  n = cstack[cstack.length - 1];
  if (n.color === Node.Color.Red) {
    // Easy case: removing red leaf
    const p = cstack[cstack.length - 2];
    if (p.left === n) {
      p.left = undefined;
    } else if (p.right === n) {
      p.right = undefined;
    }
    cstack.pop();
    for (let i = 0; i < cstack.length; ++i) {
      cstack[i].count--;
    }
    return makeImpl(ord, cstack[0]);
  } else {
    if (n.left !== undefined || n.right !== undefined) {
      // Second easy case:  Single child black parent
      if (n.left !== undefined) {
        Node.swap(n, n.left);
      } else if (n.right !== undefined) {
        Node.swap(n, n.right);
      }
      // Child must be red, so repaint it black to balance color
      n.color = Node.Color.Black;
      for (let i = 0; i < cstack.length - 1; ++i) {
        cstack[i].count--;
      }
      return makeImpl(ord, cstack[0]);
    } else if (cstack.length === 1) {
      // Third easy case: root
      return makeImpl(ord, undefined);
    } else {
      // Hard case: Repaint n, and then do some nasty stuff
      for (let i = 0; i < cstack.length; ++i) {
        cstack[i].count--;
      }
      const parent = cstack[cstack.length - 2];
      fixDoubleBlack(cstack);
      // Fix up links
      if (parent.left === n) {
        parent.left = undefined;
      } else {
        parent.right = undefined;
      }
    }
  }
  return makeImpl(ord, cstack[0]);
});
/** @internal */
const size = self => self._root?.count ?? 0;
/** @internal */
exports.size = size;
const valuesForward = self => values(self, _iterator.Direction.Forward);
/** @internal */
exports.valuesForward = valuesForward;
const valuesBackward = self => values(self, _iterator.Direction.Backward);
/** @internal */
exports.valuesBackward = valuesBackward;
const values = (self, direction) => {
  const begin = self[Symbol.iterator]();
  let count = 0;
  return {
    [Symbol.iterator]: () => values(self, direction),
    next: () => {
      count++;
      const entry = begin.value;
      if (direction === _iterator.Direction.Forward) {
        begin.moveNext();
      } else {
        begin.movePrev();
      }
      switch (entry._tag) {
        case "None":
          {
            return {
              done: true,
              value: count
            };
          }
        case "Some":
          {
            return {
              done: false,
              value: entry.value
            };
          }
      }
    }
  };
};
const visitFull = (node, visit) => {
  let current = node;
  let stack = undefined;
  let done = false;
  while (!done) {
    if (current != null) {
      stack = Stack.make(current, stack);
      current = current.left;
    } else if (stack != null) {
      const value = visit(stack.value.key, stack.value.value);
      if (Option.isSome(value)) {
        return value;
      }
      current = stack.value.right;
      stack = stack.previous;
    } else {
      done = true;
    }
  }
  return Option.none();
};
const visitGreaterThanEqual = (node, min, ord, visit) => {
  let current = node;
  let stack = undefined;
  let done = false;
  while (!done) {
    if (current !== undefined) {
      stack = Stack.make(current, stack);
      if (ord(min, current.key) <= 0) {
        current = current.left;
      } else {
        current = undefined;
      }
    } else if (stack !== undefined) {
      if (ord(min, stack.value.key) <= 0) {
        const value = visit(stack.value.key, stack.value.value);
        if (Option.isSome(value)) {
          return value;
        }
      }
      current = stack.value.right;
      stack = stack.previous;
    } else {
      done = true;
    }
  }
  return Option.none();
};
const visitLessThan = (node, max, ord, visit) => {
  let current = node;
  let stack = undefined;
  let done = false;
  while (!done) {
    if (current !== undefined) {
      stack = Stack.make(current, stack);
      current = current.left;
    } else if (stack !== undefined && ord(max, stack.value.key) > 0) {
      const value = visit(stack.value.key, stack.value.value);
      if (Option.isSome(value)) {
        return value;
      }
      current = stack.value.right;
      stack = stack.previous;
    } else {
      done = true;
    }
  }
  return Option.none();
};
const visitBetween = (node, min, max, ord, visit) => {
  let current = node;
  let stack = undefined;
  let done = false;
  while (!done) {
    if (current !== undefined) {
      stack = Stack.make(current, stack);
      if (ord(min, current.key) <= 0) {
        current = current.left;
      } else {
        current = undefined;
      }
    } else if (stack !== undefined && ord(max, stack.value.key) > 0) {
      if (ord(min, stack.value.key) <= 0) {
        const value = visit(stack.value.key, stack.value.value);
        if (Option.isSome(value)) {
          return value;
        }
      }
      current = stack.value.right;
      stack = stack.previous;
    } else {
      done = true;
    }
  }
  return Option.none();
};
/**
 * Fix up a double black node in a Red-Black Tree.
 */
const fixDoubleBlack = stack => {
  let n, p, s, z;
  for (let i = stack.length - 1; i >= 0; --i) {
    n = stack[i];
    if (i === 0) {
      n.color = Node.Color.Black;
      return;
    }
    p = stack[i - 1];
    if (p.left === n) {
      s = p.right;
      if (s !== undefined && s.right !== undefined && s.right.color === Node.Color.Red) {
        s = p.right = Node.clone(s);
        z = s.right = Node.clone(s.right);
        p.right = s.left;
        s.left = p;
        s.right = z;
        s.color = p.color;
        n.color = Node.Color.Black;
        p.color = Node.Color.Black;
        z.color = Node.Color.Black;
        Node.recount(p);
        Node.recount(s);
        if (i > 1) {
          const pp = stack[i - 2];
          if (pp.left === p) {
            pp.left = s;
          } else {
            pp.right = s;
          }
        }
        stack[i - 1] = s;
        return;
      } else if (s !== undefined && s.left !== undefined && s.left.color === Node.Color.Red) {
        s = p.right = Node.clone(s);
        z = s.left = Node.clone(s.left);
        p.right = z.left;
        s.left = z.right;
        z.left = p;
        z.right = s;
        z.color = p.color;
        p.color = Node.Color.Black;
        s.color = Node.Color.Black;
        n.color = Node.Color.Black;
        Node.recount(p);
        Node.recount(s);
        Node.recount(z);
        if (i > 1) {
          const pp = stack[i - 2];
          if (pp.left === p) {
            pp.left = z;
          } else {
            pp.right = z;
          }
        }
        stack[i - 1] = z;
        return;
      }
      if (s !== undefined && s.color === Node.Color.Black) {
        if (p.color === Node.Color.Red) {
          p.color = Node.Color.Black;
          p.right = Node.repaint(s, Node.Color.Red);
          return;
        } else {
          p.right = Node.repaint(s, Node.Color.Red);
          continue;
        }
      } else if (s !== undefined) {
        s = Node.clone(s);
        p.right = s.left;
        s.left = p;
        s.color = p.color;
        p.color = Node.Color.Red;
        Node.recount(p);
        Node.recount(s);
        if (i > 1) {
          const pp = stack[i - 2];
          if (pp.left === p) {
            pp.left = s;
          } else {
            pp.right = s;
          }
        }
        stack[i - 1] = s;
        stack[i] = p;
        if (i + 1 < stack.length) {
          stack[i + 1] = n;
        } else {
          stack.push(n);
        }
        i = i + 2;
      }
    } else {
      s = p.left;
      if (s !== undefined && s.left !== undefined && s.left.color === Node.Color.Red) {
        s = p.left = Node.clone(s);
        z = s.left = Node.clone(s.left);
        p.left = s.right;
        s.right = p;
        s.left = z;
        s.color = p.color;
        n.color = Node.Color.Black;
        p.color = Node.Color.Black;
        z.color = Node.Color.Black;
        Node.recount(p);
        Node.recount(s);
        if (i > 1) {
          const pp = stack[i - 2];
          if (pp.right === p) {
            pp.right = s;
          } else {
            pp.left = s;
          }
        }
        stack[i - 1] = s;
        return;
      } else if (s !== undefined && s.right !== undefined && s.right.color === Node.Color.Red) {
        s = p.left = Node.clone(s);
        z = s.right = Node.clone(s.right);
        p.left = z.right;
        s.right = z.left;
        z.right = p;
        z.left = s;
        z.color = p.color;
        p.color = Node.Color.Black;
        s.color = Node.Color.Black;
        n.color = Node.Color.Black;
        Node.recount(p);
        Node.recount(s);
        Node.recount(z);
        if (i > 1) {
          const pp = stack[i - 2];
          if (pp.right === p) {
            pp.right = z;
          } else {
            pp.left = z;
          }
        }
        stack[i - 1] = z;
        return;
      }
      if (s !== undefined && s.color === Node.Color.Black) {
        if (p.color === Node.Color.Red) {
          p.color = Node.Color.Black;
          p.left = Node.repaint(s, Node.Color.Red);
          return;
        } else {
          p.left = Node.repaint(s, Node.Color.Red);
          continue;
        }
      } else if (s !== undefined) {
        s = Node.clone(s);
        p.left = s.right;
        s.right = p;
        s.color = p.color;
        p.color = Node.Color.Red;
        Node.recount(p);
        Node.recount(s);
        if (i > 1) {
          const pp = stack[i - 2];
          if (pp.right === p) {
            pp.right = s;
          } else {
            pp.left = s;
          }
        }
        stack[i - 1] = s;
        stack[i] = p;
        if (i + 1 < stack.length) {
          stack[i + 1] = n;
        } else {
          stack.push(n);
        }
        i = i + 2;
      }
    }
  }
};
//# sourceMappingURL=redBlackTree.js.map