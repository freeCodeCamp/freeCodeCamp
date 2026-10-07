import * as Equal from "../Equal.js";
import * as Dual from "../Function.js";
import { identity, pipe } from "../Function.js";
import * as Hash from "../Hash.js";
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
import { fromBitmap, hashFragment, toBitmap } from "./hashMap/bitwise.js";
import { SIZE } from "./hashMap/config.js";
import * as Node from "./hashMap/node.js";
const HashMapSymbolKey = "effect/HashMap";
/** @internal */
export const HashMapTypeId = /*#__PURE__*/Symbol.for(HashMapSymbolKey);
const HashMapProto = {
  [HashMapTypeId]: HashMapTypeId,
  [Symbol.iterator]() {
    return new HashMapIterator(this, (k, v) => [k, v]);
  },
  [Hash.symbol]() {
    let hash = Hash.hash(HashMapSymbolKey);
    for (const item of this) {
      hash ^= pipe(Hash.hash(item[0]), Hash.combine(Hash.hash(item[1])));
    }
    return Hash.cached(this, hash);
  },
  [Equal.symbol](that) {
    if (isHashMap(that)) {
      if (that._size !== this._size) {
        return false;
      }
      for (const item of this) {
        const elem = pipe(that, getHash(item[0], Hash.hash(item[0])));
        if (Option.isNone(elem)) {
          return false;
        } else {
          if (!Equal.equals(item[1], elem.value)) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "HashMap",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const makeImpl = (editable, edit, root, size) => {
  const map = Object.create(HashMapProto);
  map._editable = editable;
  map._edit = edit;
  map._root = root;
  map._size = size;
  return map;
};
class HashMapIterator {
  map;
  f;
  v;
  constructor(map, f) {
    this.map = map;
    this.f = f;
    this.v = visitLazy(this.map._root, this.f, undefined);
  }
  next() {
    if (Option.isNone(this.v)) {
      return {
        done: true,
        value: undefined
      };
    }
    const v0 = this.v.value;
    this.v = applyCont(v0.cont);
    return {
      done: false,
      value: v0.value
    };
  }
  [Symbol.iterator]() {
    return new HashMapIterator(this.map, this.f);
  }
}
const applyCont = cont => cont ? visitLazyChildren(cont[0], cont[1], cont[2], cont[3], cont[4]) : Option.none();
const visitLazy = (node, f, cont = undefined) => {
  switch (node._tag) {
    case "LeafNode":
      {
        if (Option.isSome(node.value)) {
          return Option.some({
            value: f(node.key, node.value.value),
            cont
          });
        }
        return applyCont(cont);
      }
    case "CollisionNode":
    case "ArrayNode":
    case "IndexedNode":
      {
        const children = node.children;
        return visitLazyChildren(children.length, children, 0, f, cont);
      }
    default:
      {
        return applyCont(cont);
      }
  }
};
const visitLazyChildren = (len, children, i, f, cont) => {
  while (i < len) {
    const child = children[i++];
    if (child && !Node.isEmptyNode(child)) {
      return visitLazy(child, f, [len, children, i, f, cont]);
    }
  }
  return applyCont(cont);
};
const _empty = /*#__PURE__*/makeImpl(false, 0, /*#__PURE__*/new Node.EmptyNode(), 0);
/** @internal */
export const empty = () => _empty;
/** @internal */
export const make = (...entries) => fromIterable(entries);
/** @internal */
export const fromIterable = entries => {
  const map = beginMutation(empty());
  for (const entry of entries) {
    set(map, entry[0], entry[1]);
  }
  return endMutation(map);
};
/** @internal */
export const isHashMap = u => hasProperty(u, HashMapTypeId);
/** @internal */
export const isEmpty = self => self && Node.isEmptyNode(self._root);
/** @internal */
export const get = /*#__PURE__*/Dual.dual(2, (self, key) => getHash(self, key, Hash.hash(key)));
/** @internal */
export const getHash = /*#__PURE__*/Dual.dual(3, (self, key, hash) => {
  let node = self._root;
  let shift = 0;
  while (true) {
    switch (node._tag) {
      case "LeafNode":
        {
          return Equal.equals(key, node.key) ? node.value : Option.none();
        }
      case "CollisionNode":
        {
          if (hash === node.hash) {
            const children = node.children;
            for (let i = 0, len = children.length; i < len; ++i) {
              const child = children[i];
              if ("key" in child && Equal.equals(key, child.key)) {
                return child.value;
              }
            }
          }
          return Option.none();
        }
      case "IndexedNode":
        {
          const frag = hashFragment(shift, hash);
          const bit = toBitmap(frag);
          if (node.mask & bit) {
            node = node.children[fromBitmap(node.mask, bit)];
            shift += SIZE;
            break;
          }
          return Option.none();
        }
      case "ArrayNode":
        {
          node = node.children[hashFragment(shift, hash)];
          if (node) {
            shift += SIZE;
            break;
          }
          return Option.none();
        }
      default:
        return Option.none();
    }
  }
});
/** @internal */
export const unsafeGet = /*#__PURE__*/Dual.dual(2, (self, key) => {
  const element = getHash(self, key, Hash.hash(key));
  if (Option.isNone(element)) {
    throw new Error("Expected map to contain key");
  }
  return element.value;
});
/** @internal */
export const has = /*#__PURE__*/Dual.dual(2, (self, key) => Option.isSome(getHash(self, key, Hash.hash(key))));
/** @internal */
export const hasHash = /*#__PURE__*/Dual.dual(3, (self, key, hash) => Option.isSome(getHash(self, key, hash)));
/** @internal */
export const hasBy = /*#__PURE__*/Dual.dual(2, (self, predicate) => Option.isSome(findFirst(self, predicate)));
/** @internal */
export const set = /*#__PURE__*/Dual.dual(3, (self, key, value) => modifyAt(self, key, () => Option.some(value)));
/** @internal */
export const setTree = /*#__PURE__*/Dual.dual(3, (self, newRoot, newSize) => {
  if (self._editable) {
    ;
    self._root = newRoot;
    self._size = newSize;
    return self;
  }
  return newRoot === self._root ? self : makeImpl(self._editable, self._edit, newRoot, newSize);
});
/** @internal */
export const keys = self => new HashMapIterator(self, key => key);
/** @internal */
export const values = self => new HashMapIterator(self, (_, value) => value);
/** @internal */
export const entries = self => new HashMapIterator(self, (key, value) => [key, value]);
/** @internal */
export const size = self => self._size;
/** @internal */
export const countBy = /*#__PURE__*/Dual.dual(2, (self, f) => {
  let count = 0;
  for (const [k, a] of self) {
    if (f(a, k)) {
      count++;
    }
  }
  return count;
});
/** @internal */
export const beginMutation = self => makeImpl(true, self._edit + 1, self._root, self._size);
/** @internal */
export const endMutation = self => {
  ;
  self._editable = false;
  return self;
};
/** @internal */
export const mutate = /*#__PURE__*/Dual.dual(2, (self, f) => {
  const transient = beginMutation(self);
  f(transient);
  return endMutation(transient);
});
/** @internal */
export const modifyAt = /*#__PURE__*/Dual.dual(3, (self, key, f) => modifyHash(self, key, Hash.hash(key), f));
/** @internal */
export const modifyHash = /*#__PURE__*/Dual.dual(4, (self, key, hash, f) => {
  const size = {
    value: self._size
  };
  const newRoot = self._root.modify(self._editable ? self._edit : NaN, 0, f, hash, key, size);
  return pipe(self, setTree(newRoot, size.value));
});
/** @internal */
export const modify = /*#__PURE__*/Dual.dual(3, (self, key, f) => modifyAt(self, key, Option.map(f)));
/** @internal */
export const union = /*#__PURE__*/Dual.dual(2, (self, that) => {
  const result = beginMutation(self);
  forEach(that, (v, k) => set(result, k, v));
  return endMutation(result);
});
/** @internal */
export const remove = /*#__PURE__*/Dual.dual(2, (self, key) => modifyAt(self, key, Option.none));
/** @internal */
export const removeMany = /*#__PURE__*/Dual.dual(2, (self, keys) => mutate(self, map => {
  for (const key of keys) {
    remove(key)(map);
  }
}));
/**
 * Maps over the entries of the `HashMap` using the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map = /*#__PURE__*/Dual.dual(2, (self, f) => reduce(self, empty(), (map, value, key) => set(map, key, f(value, key))));
/** @internal */
export const flatMap = /*#__PURE__*/Dual.dual(2, (self, f) => reduce(self, empty(), (zero, value, key) => mutate(zero, map => forEach(f(value, key), (value, key) => set(map, key, value)))));
/** @internal */
export const forEach = /*#__PURE__*/Dual.dual(2, (self, f) => reduce(self, void 0, (_, value, key) => f(value, key)));
/** @internal */
export const reduce = /*#__PURE__*/Dual.dual(3, (self, zero, f) => {
  const root = self._root;
  if (root._tag === "LeafNode") {
    return Option.isSome(root.value) ? f(zero, root.value.value, root.key) : zero;
  }
  if (root._tag === "EmptyNode") {
    return zero;
  }
  const toVisit = [root.children];
  let children;
  while (children = toVisit.pop()) {
    for (let i = 0, len = children.length; i < len;) {
      const child = children[i++];
      if (child && !Node.isEmptyNode(child)) {
        if (child._tag === "LeafNode") {
          if (Option.isSome(child.value)) {
            zero = f(zero, child.value.value, child.key);
          }
        } else {
          toVisit.push(child.children);
        }
      }
    }
  }
  return zero;
});
/** @internal */
export const filter = /*#__PURE__*/Dual.dual(2, (self, f) => mutate(empty(), map => {
  for (const [k, a] of self) {
    if (f(a, k)) {
      set(map, k, a);
    }
  }
}));
/** @internal */
export const compact = self => filterMap(self, identity);
/** @internal */
export const filterMap = /*#__PURE__*/Dual.dual(2, (self, f) => mutate(empty(), map => {
  for (const [k, a] of self) {
    const option = f(a, k);
    if (Option.isSome(option)) {
      set(map, k, option.value);
    }
  }
}));
/** @internal */
export const findFirst = /*#__PURE__*/Dual.dual(2, (self, predicate) => {
  for (const ka of self) {
    if (predicate(ka[1], ka[0])) {
      return Option.some(ka);
    }
  }
  return Option.none();
});
/** @internal */
export const some = /*#__PURE__*/Dual.dual(2, (self, predicate) => {
  for (const ka of self) {
    if (predicate(ka[1], ka[0])) {
      return true;
    }
  }
  return false;
});
/** @internal */
export const every = /*#__PURE__*/Dual.dual(2, (self, predicate) => !some(self, (a, k) => !predicate(a, k)));
//# sourceMappingURL=hashMap.js.map