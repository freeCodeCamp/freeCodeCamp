"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valuesWithPrefix = exports.values = exports.unsafeGet = exports.toEntriesWithPrefix = exports.size = exports.removeMany = exports.remove = exports.reduce = exports.modify = exports.map = exports.make = exports.longestPrefixOf = exports.keysWithPrefix = exports.keys = exports.isTrie = exports.isEmpty = exports.insertMany = exports.insert = exports.has = exports.get = exports.fromIterable = exports.forEach = exports.filterMap = exports.filter = exports.entriesWithPrefix = exports.entries = exports.empty = exports.compact = exports.TrieTypeId = void 0;
var Equal = _interopRequireWildcard(require("../Equal.js"));
var _Function = require("../Function.js");
var Hash = _interopRequireWildcard(require("../Hash.js"));
var _Inspectable = require("../Inspectable.js");
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const TrieSymbolKey = "effect/Trie";
/** @internal */
const TrieTypeId = exports.TrieTypeId = /*#__PURE__*/Symbol.for(TrieSymbolKey);
const trieVariance = {
  /* c8 ignore next */
  _Value: _ => _
};
const TrieProto = {
  [TrieTypeId]: trieVariance,
  [Symbol.iterator]() {
    return new TrieIterator(this, (k, v) => [k, v], () => true);
  },
  [Hash.symbol]() {
    let hash = Hash.hash(TrieSymbolKey);
    for (const item of this) {
      hash ^= (0, _Function.pipe)(Hash.hash(item[0]), Hash.combine(Hash.hash(item[1])));
    }
    return Hash.cached(this, hash);
  },
  [Equal.symbol](that) {
    if (isTrie(that)) {
      const entries = Array.from(that);
      return Array.from(this).every((itemSelf, i) => {
        const itemThat = entries[i];
        return Equal.equals(itemSelf[0], itemThat[0]) && Equal.equals(itemSelf[1], itemThat[1]);
      });
    }
    return false;
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Trie",
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
const makeImpl = root => {
  const trie = Object.create(TrieProto);
  trie._root = root;
  trie._count = root?.count ?? 0;
  return trie;
};
class TrieIterator {
  trie;
  f;
  filter;
  stack = [];
  constructor(trie, f, filter) {
    this.trie = trie;
    this.f = f;
    this.filter = filter;
    const root = trie._root !== undefined ? trie._root : undefined;
    if (root !== undefined) {
      this.stack.push([root, "", false]);
    }
  }
  next() {
    while (this.stack.length > 0) {
      const [node, keyString, isAdded] = this.stack.pop();
      if (isAdded) {
        const value = node.value;
        if (value !== undefined) {
          const key = keyString + node.key;
          if (this.filter(key, value)) {
            return {
              done: false,
              value: this.f(key, value)
            };
          }
        }
      } else {
        this.addToStack(node, keyString);
      }
    }
    return {
      done: true,
      value: undefined
    };
  }
  addToStack(node, keyString) {
    if (node.right !== undefined) {
      this.stack.push([node.right, keyString, false]);
    }
    if (node.mid !== undefined) {
      this.stack.push([node.mid, keyString + node.key, false]);
    }
    this.stack.push([node, keyString, true]);
    if (node.left !== undefined) {
      this.stack.push([node.left, keyString, false]);
    }
  }
  [Symbol.iterator]() {
    return new TrieIterator(this.trie, this.f, this.filter);
  }
}
/** @internal */
const isTrie = u => (0, _Predicate.hasProperty)(u, TrieTypeId);
/** @internal */
exports.isTrie = isTrie;
const empty = () => makeImpl(undefined);
/** @internal */
exports.empty = empty;
const fromIterable = entries => {
  let trie = empty();
  for (const [key, value] of entries) {
    trie = insert(trie, key, value);
  }
  return trie;
};
/** @internal */
exports.fromIterable = fromIterable;
const make = (...entries) => {
  return fromIterable(entries);
};
/** @internal */
exports.make = make;
const insert = exports.insert = /*#__PURE__*/(0, _Function.dual)(3, (self, key, value) => {
  if (key.length === 0) return self;
  // -1:left | 0:mid | 1:right
  const dStack = [];
  const nStack = [];
  let n = self._root ?? {
    key: key[0],
    count: 0
  };
  const count = n.count + 1;
  let cIndex = 0;
  while (cIndex < key.length) {
    const c = key[cIndex];
    nStack.push(n);
    if (c > n.key) {
      dStack.push(1);
      if (n.right === undefined) {
        n = {
          key: c,
          count
        };
      } else {
        n = n.right;
      }
    } else if (c < n.key) {
      dStack.push(-1);
      if (n.left === undefined) {
        n = {
          key: c,
          count
        };
      } else {
        n = n.left;
      }
    } else {
      if (cIndex === key.length - 1) {
        n.value = value;
      } else if (n.mid === undefined) {
        dStack.push(0);
        n = {
          key: key[cIndex + 1],
          count
        };
      } else {
        dStack.push(0);
        n = n.mid;
      }
      cIndex += 1;
    }
  }
  // Rebuild path to leaf node (Path-copying immutability)
  for (let s = nStack.length - 2; s >= 0; --s) {
    const n2 = nStack[s];
    const d = dStack[s];
    if (d === -1) {
      // left
      nStack[s] = {
        key: n2.key,
        count,
        value: n2.value,
        left: nStack[s + 1],
        mid: n2.mid,
        right: n2.right
      };
    } else if (d === 1) {
      // right
      nStack[s] = {
        key: n2.key,
        count,
        value: n2.value,
        left: n2.left,
        mid: n2.mid,
        right: nStack[s + 1]
      };
    } else {
      // mid
      nStack[s] = {
        key: n2.key,
        count,
        value: n2.value,
        left: n2.left,
        mid: nStack[s + 1],
        right: n2.right
      };
    }
  }
  nStack[0].count = count;
  return makeImpl(nStack[0]);
});
/** @internal */
const size = self => self._root?.count ?? 0;
/** @internal */
exports.size = size;
const isEmpty = self => size(self) === 0;
/** @internal */
exports.isEmpty = isEmpty;
const keys = self => new TrieIterator(self, key => key, () => true);
/** @internal */
exports.keys = keys;
const values = self => new TrieIterator(self, (_, value) => value, () => true);
/** @internal */
exports.values = values;
const entries = self => new TrieIterator(self, (key, value) => [key, value], () => true);
/** @internal */
exports.entries = entries;
const reduce = exports.reduce = /*#__PURE__*/(0, _Function.dual)(3, (self, zero, f) => {
  let accumulator = zero;
  for (const entry of self) {
    accumulator = f(accumulator, entry[1], entry[0]);
  }
  return accumulator;
});
/** @internal */
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => reduce(self, empty(), (trie, value, key) => insert(trie, key, f(value, key))));
/** @internal */
const filter = exports.filter = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => reduce(self, empty(), (trie, value, key) => f(value, key) ? insert(trie, key, value) : trie));
/** @internal */
const filterMap = exports.filterMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => reduce(self, empty(), (trie, value, key) => {
  const option = f(value, key);
  return Option.isSome(option) ? insert(trie, key, option.value) : trie;
}));
/** @internal */
const compact = self => filterMap(self, _Function.identity);
/** @internal */
exports.compact = compact;
const forEach = exports.forEach = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => reduce(self, void 0, (_, value, key) => f(value, key)));
/** @internal */
const keysWithPrefix = exports.keysWithPrefix = /*#__PURE__*/(0, _Function.dual)(2, (self, prefix) => new TrieIterator(self, key => key, key => key.startsWith(prefix)));
/** @internal */
const valuesWithPrefix = exports.valuesWithPrefix = /*#__PURE__*/(0, _Function.dual)(2, (self, prefix) => new TrieIterator(self, (_, value) => value, key => key.startsWith(prefix)));
/** @internal */
const entriesWithPrefix = exports.entriesWithPrefix = /*#__PURE__*/(0, _Function.dual)(2, (self, prefix) => new TrieIterator(self, (key, value) => [key, value], key => key.startsWith(prefix)));
/** @internal */
const toEntriesWithPrefix = exports.toEntriesWithPrefix = /*#__PURE__*/(0, _Function.dual)(2, (self, prefix) => Array.from(entriesWithPrefix(self, prefix)));
/** @internal */
const get = exports.get = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => {
  let n = self._root;
  if (n === undefined || key.length === 0) return Option.none();
  let cIndex = 0;
  while (cIndex < key.length) {
    const c = key[cIndex];
    if (c > n.key) {
      if (n.right === undefined) {
        return Option.none();
      } else {
        n = n.right;
      }
    } else if (c < n.key) {
      if (n.left === undefined) {
        return Option.none();
      } else {
        n = n.left;
      }
    } else {
      if (cIndex === key.length - 1) {
        return Option.fromNullable(n.value);
      } else {
        if (n.mid === undefined) {
          return Option.none();
        } else {
          n = n.mid;
          cIndex += 1;
        }
      }
    }
  }
  return Option.none();
});
/** @internal */
const has = exports.has = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => Option.isSome(get(self, key)));
/** @internal */
const unsafeGet = exports.unsafeGet = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => {
  const element = get(self, key);
  if (Option.isNone(element)) {
    throw new Error("Expected trie to contain key");
  }
  return element.value;
});
/** @internal */
const remove = exports.remove = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => {
  let n = self._root;
  if (n === undefined || key.length === 0) return self;
  const count = n.count - 1;
  // -1:left | 0:mid | 1:right
  const dStack = [];
  const nStack = [];
  let cIndex = 0;
  while (cIndex < key.length) {
    const c = key[cIndex];
    if (c > n.key) {
      if (n.right === undefined) {
        return self;
      } else {
        nStack.push(n);
        dStack.push(1);
        n = n.right;
      }
    } else if (c < n.key) {
      if (n.left === undefined) {
        return self;
      } else {
        nStack.push(n);
        dStack.push(-1);
        n = n.left;
      }
    } else {
      if (cIndex === key.length - 1) {
        if (n.value !== undefined) {
          nStack.push(n);
          dStack.push(0);
          cIndex += 1;
        } else {
          return self;
        }
      } else {
        if (n.mid === undefined) {
          return self;
        } else {
          nStack.push(n);
          dStack.push(0);
          n = n.mid;
          cIndex += 1;
        }
      }
    }
  }
  const removeNode = nStack[nStack.length - 1];
  nStack[nStack.length - 1] = {
    key: removeNode.key,
    count,
    left: removeNode.left,
    mid: removeNode.mid,
    right: removeNode.right
  };
  // Rebuild path to leaf node (Path-copying immutability)
  for (let s = nStack.length - 2; s >= 0; --s) {
    const n2 = nStack[s];
    const d = dStack[s];
    const child = nStack[s + 1];
    const nc = child.left === undefined && child.mid === undefined && child.right === undefined ? undefined : child;
    if (d === -1) {
      // left
      nStack[s] = {
        key: n2.key,
        count,
        value: n2.value,
        left: nc,
        mid: n2.mid,
        right: n2.right
      };
    } else if (d === 1) {
      // right
      nStack[s] = {
        key: n2.key,
        count,
        value: n2.value,
        left: n2.left,
        mid: n2.mid,
        right: nc
      };
    } else {
      // mid
      nStack[s] = {
        key: n2.key,
        count,
        value: n2.value,
        left: n2.left,
        mid: nc,
        right: n2.right
      };
    }
  }
  nStack[0].count = count;
  return makeImpl(nStack[0]);
});
/** @internal */
const removeMany = exports.removeMany = /*#__PURE__*/(0, _Function.dual)(2, (self, keys) => {
  let trie = self;
  for (const key of keys) {
    trie = remove(key)(trie);
  }
  return trie;
});
/** @internal */
const insertMany = exports.insertMany = /*#__PURE__*/(0, _Function.dual)(2, (self, iter) => {
  let trie = self;
  for (const [key, value] of iter) {
    trie = insert(key, value)(trie);
  }
  return trie;
});
/** @internal */
const modify = exports.modify = /*#__PURE__*/(0, _Function.dual)(3, (self, key, f) => {
  let n = self._root;
  if (n === undefined || key.length === 0) return self;
  // -1:left | 0:mid | 1:right
  const dStack = [];
  const nStack = [];
  let cIndex = 0;
  while (cIndex < key.length) {
    const c = key[cIndex];
    if (c > n.key) {
      if (n.right === undefined) {
        return self;
      } else {
        nStack.push(n);
        dStack.push(1);
        n = n.right;
      }
    } else if (c < n.key) {
      if (n.left === undefined) {
        return self;
      } else {
        nStack.push(n);
        dStack.push(-1);
        n = n.left;
      }
    } else {
      if (cIndex === key.length - 1) {
        if (n.value !== undefined) {
          nStack.push(n);
          dStack.push(0);
          cIndex += 1;
        } else {
          return self;
        }
      } else {
        if (n.mid === undefined) {
          return self;
        } else {
          nStack.push(n);
          dStack.push(0);
          n = n.mid;
          cIndex += 1;
        }
      }
    }
  }
  const updateNode = nStack[nStack.length - 1];
  if (updateNode.value === undefined) {
    return self;
  }
  nStack[nStack.length - 1] = {
    key: updateNode.key,
    count: updateNode.count,
    value: f(updateNode.value),
    // Update
    left: updateNode.left,
    mid: updateNode.mid,
    right: updateNode.right
  };
  // Rebuild path to leaf node (Path-copying immutability)
  for (let s = nStack.length - 2; s >= 0; --s) {
    const n2 = nStack[s];
    const d = dStack[s];
    const child = nStack[s + 1];
    if (d === -1) {
      // left
      nStack[s] = {
        key: n2.key,
        count: n2.count,
        value: n2.value,
        left: child,
        mid: n2.mid,
        right: n2.right
      };
    } else if (d === 1) {
      // right
      nStack[s] = {
        key: n2.key,
        count: n2.count,
        value: n2.value,
        left: n2.left,
        mid: n2.mid,
        right: child
      };
    } else {
      // mid
      nStack[s] = {
        key: n2.key,
        count: n2.count,
        value: n2.value,
        left: n2.left,
        mid: child,
        right: n2.right
      };
    }
  }
  return makeImpl(nStack[0]);
});
/** @internal */
const longestPrefixOf = exports.longestPrefixOf = /*#__PURE__*/(0, _Function.dual)(2, (self, key) => {
  let n = self._root;
  if (n === undefined || key.length === 0) return Option.none();
  let longestPrefixNode = undefined;
  let cIndex = 0;
  while (cIndex < key.length) {
    const c = key[cIndex];
    if (n.value !== undefined) {
      longestPrefixNode = [key.slice(0, cIndex + 1), n.value];
    }
    if (c > n.key) {
      if (n.right === undefined) {
        break;
      } else {
        n = n.right;
      }
    } else if (c < n.key) {
      if (n.left === undefined) {
        break;
      } else {
        n = n.left;
      }
    } else {
      if (n.mid === undefined) {
        break;
      } else {
        n = n.mid;
        cIndex += 1;
      }
    }
  }
  return Option.fromNullable(longestPrefixNode);
});
//# sourceMappingURL=trie.js.map