"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeafNode = exports.IndexedNode = exports.EmptyNode = exports.CollisionNode = exports.ArrayNode = void 0;
exports.canEditNode = canEditNode;
exports.isEmptyNode = isEmptyNode;
exports.isLeafNode = isLeafNode;
var _Equal = require("../../Equal.js");
var O = _interopRequireWildcard(require("../../Option.js"));
var _Predicate = require("../../Predicate.js");
var Stack = _interopRequireWildcard(require("../stack.js"));
var _array = require("./array.js");
var _bitwise = require("./bitwise.js");
var _config = require("./config.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
class EmptyNode {
  _tag = "EmptyNode";
  modify(edit, _shift, f, hash, key, size) {
    const v = f(O.none());
    if (O.isNone(v)) return new EmptyNode();
    ++size.value;
    return new LeafNode(edit, hash, key, v);
  }
}
/** @internal */
exports.EmptyNode = EmptyNode;
function isEmptyNode(a) {
  return (0, _Predicate.isTagged)(a, "EmptyNode");
}
/** @internal */
function isLeafNode(node) {
  return isEmptyNode(node) || node._tag === "LeafNode" || node._tag === "CollisionNode";
}
/** @internal */
function canEditNode(node, edit) {
  return isEmptyNode(node) ? false : edit === node.edit;
}
/** @internal */
class LeafNode {
  edit;
  hash;
  key;
  value;
  _tag = "LeafNode";
  constructor(edit, hash, key, value) {
    this.edit = edit;
    this.hash = hash;
    this.key = key;
    this.value = value;
  }
  modify(edit, shift, f, hash, key, size) {
    if ((0, _Equal.equals)(key, this.key)) {
      const v = f(this.value);
      if (v === this.value) return this;else if (O.isNone(v)) {
        --size.value;
        return new EmptyNode();
      }
      if (canEditNode(this, edit)) {
        this.value = v;
        return this;
      }
      return new LeafNode(edit, hash, key, v);
    }
    const v = f(O.none());
    if (O.isNone(v)) return this;
    ++size.value;
    return mergeLeaves(edit, shift, this.hash, this, hash, new LeafNode(edit, hash, key, v));
  }
}
/** @internal */
exports.LeafNode = LeafNode;
class CollisionNode {
  edit;
  hash;
  children;
  _tag = "CollisionNode";
  constructor(edit, hash, children) {
    this.edit = edit;
    this.hash = hash;
    this.children = children;
  }
  modify(edit, shift, f, hash, key, size) {
    if (hash === this.hash) {
      const canEdit = canEditNode(this, edit);
      const list = this.updateCollisionList(canEdit, edit, this.hash, this.children, f, key, size);
      if (list === this.children) return this;
      return list.length > 1 ? new CollisionNode(edit, this.hash, list) : list[0]; // collapse single element collision list
    }
    const v = f(O.none());
    if (O.isNone(v)) return this;
    ++size.value;
    return mergeLeaves(edit, shift, this.hash, this, hash, new LeafNode(edit, hash, key, v));
  }
  updateCollisionList(mutate, edit, hash, list, f, key, size) {
    const len = list.length;
    for (let i = 0; i < len; ++i) {
      const child = list[i];
      if ("key" in child && (0, _Equal.equals)(key, child.key)) {
        const value = child.value;
        const newValue = f(value);
        if (newValue === value) return list;
        if (O.isNone(newValue)) {
          --size.value;
          return (0, _array.arraySpliceOut)(mutate, i, list);
        }
        return (0, _array.arrayUpdate)(mutate, i, new LeafNode(edit, hash, key, newValue), list);
      }
    }
    const newValue = f(O.none());
    if (O.isNone(newValue)) return list;
    ++size.value;
    return (0, _array.arrayUpdate)(mutate, len, new LeafNode(edit, hash, key, newValue), list);
  }
}
/** @internal */
exports.CollisionNode = CollisionNode;
class IndexedNode {
  edit;
  mask;
  children;
  _tag = "IndexedNode";
  constructor(edit, mask, children) {
    this.edit = edit;
    this.mask = mask;
    this.children = children;
  }
  modify(edit, shift, f, hash, key, size) {
    const mask = this.mask;
    const children = this.children;
    const frag = (0, _bitwise.hashFragment)(shift, hash);
    const bit = (0, _bitwise.toBitmap)(frag);
    const indx = (0, _bitwise.fromBitmap)(mask, bit);
    const exists = mask & bit;
    const canEdit = canEditNode(this, edit);
    if (!exists) {
      const _newChild = new EmptyNode().modify(edit, shift + _config.SIZE, f, hash, key, size);
      if (!_newChild) return this;
      return children.length >= _config.MAX_INDEX_NODE ? expand(edit, frag, _newChild, mask, children) : new IndexedNode(edit, mask | bit, (0, _array.arraySpliceIn)(canEdit, indx, _newChild, children));
    }
    const current = children[indx];
    const child = current.modify(edit, shift + _config.SIZE, f, hash, key, size);
    if (current === child) return this;
    let bitmap = mask;
    let newChildren;
    if (isEmptyNode(child)) {
      // remove
      bitmap &= ~bit;
      if (!bitmap) return new EmptyNode();
      if (children.length <= 2 && isLeafNode(children[indx ^ 1])) {
        return children[indx ^ 1]; // collapse
      }
      newChildren = (0, _array.arraySpliceOut)(canEdit, indx, children);
    } else {
      // modify
      newChildren = (0, _array.arrayUpdate)(canEdit, indx, child, children);
    }
    if (canEdit) {
      this.mask = bitmap;
      this.children = newChildren;
      return this;
    }
    return new IndexedNode(edit, bitmap, newChildren);
  }
}
/** @internal */
exports.IndexedNode = IndexedNode;
class ArrayNode {
  edit;
  size;
  children;
  _tag = "ArrayNode";
  constructor(edit, size, children) {
    this.edit = edit;
    this.size = size;
    this.children = children;
  }
  modify(edit, shift, f, hash, key, size) {
    let count = this.size;
    const children = this.children;
    const frag = (0, _bitwise.hashFragment)(shift, hash);
    const child = children[frag];
    const newChild = (child || new EmptyNode()).modify(edit, shift + _config.SIZE, f, hash, key, size);
    if (child === newChild) return this;
    const canEdit = canEditNode(this, edit);
    let newChildren;
    if (isEmptyNode(child) && !isEmptyNode(newChild)) {
      // add
      ++count;
      newChildren = (0, _array.arrayUpdate)(canEdit, frag, newChild, children);
    } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
      // remove
      --count;
      if (count <= _config.MIN_ARRAY_NODE) {
        return pack(edit, count, frag, children);
      }
      newChildren = (0, _array.arrayUpdate)(canEdit, frag, new EmptyNode(), children);
    } else {
      // modify
      newChildren = (0, _array.arrayUpdate)(canEdit, frag, newChild, children);
    }
    if (canEdit) {
      this.size = count;
      this.children = newChildren;
      return this;
    }
    return new ArrayNode(edit, count, newChildren);
  }
}
exports.ArrayNode = ArrayNode;
function pack(edit, count, removed, elements) {
  const children = new Array(count - 1);
  let g = 0;
  let bitmap = 0;
  for (let i = 0, len = elements.length; i < len; ++i) {
    if (i !== removed) {
      const elem = elements[i];
      if (elem && !isEmptyNode(elem)) {
        children[g++] = elem;
        bitmap |= 1 << i;
      }
    }
  }
  return new IndexedNode(edit, bitmap, children);
}
function expand(edit, frag, child, bitmap, subNodes) {
  const arr = [];
  let bit = bitmap;
  let count = 0;
  for (let i = 0; bit; ++i) {
    if (bit & 1) arr[i] = subNodes[count++];
    bit >>>= 1;
  }
  arr[frag] = child;
  return new ArrayNode(edit, count + 1, arr);
}
function mergeLeavesInner(edit, shift, h1, n1, h2, n2) {
  if (h1 === h2) return new CollisionNode(edit, h1, [n2, n1]);
  const subH1 = (0, _bitwise.hashFragment)(shift, h1);
  const subH2 = (0, _bitwise.hashFragment)(shift, h2);
  if (subH1 === subH2) {
    return child => new IndexedNode(edit, (0, _bitwise.toBitmap)(subH1) | (0, _bitwise.toBitmap)(subH2), [child]);
  } else {
    const children = subH1 < subH2 ? [n1, n2] : [n2, n1];
    return new IndexedNode(edit, (0, _bitwise.toBitmap)(subH1) | (0, _bitwise.toBitmap)(subH2), children);
  }
}
function mergeLeaves(edit, shift, h1, n1, h2, n2) {
  let stack = undefined;
  let currentShift = shift;
  while (true) {
    const res = mergeLeavesInner(edit, currentShift, h1, n1, h2, n2);
    if (typeof res === "function") {
      stack = Stack.make(res, stack);
      currentShift = currentShift + _config.SIZE;
    } else {
      let final = res;
      while (stack != null) {
        final = stack.value(final);
        stack = stack.previous;
      }
      return final;
    }
  }
}
//# sourceMappingURL=node.js.map