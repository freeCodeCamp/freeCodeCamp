"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeMake = exports.toSet = exports.toOption = exports.threadName = exports.runtime = exports.none = exports.make = exports.isRuntime = exports.isNone = exports.isFiberId = exports.isComposite = exports.ids = exports.getOrElse = exports.composite = exports.combineAll = exports.combine = exports.FiberIdTypeId = void 0;
var Equal = _interopRequireWildcard(require("../Equal.js"));
var _Function = require("../Function.js");
var _GlobalValue = require("../GlobalValue.js");
var Hash = _interopRequireWildcard(require("../Hash.js"));
var HashSet = _interopRequireWildcard(require("../HashSet.js"));
var _Inspectable = require("../Inspectable.js");
var MutableRef = _interopRequireWildcard(require("../MutableRef.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var _Predicate = require("../Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const FiberIdSymbolKey = "effect/FiberId";
/** @internal */
const FiberIdTypeId = exports.FiberIdTypeId = /*#__PURE__*/Symbol.for(FiberIdSymbolKey);
/** @internal */
const OP_NONE = "None";
/** @internal */
const OP_RUNTIME = "Runtime";
/** @internal */
const OP_COMPOSITE = "Composite";
const emptyHash = /*#__PURE__*/Hash.string(`${FiberIdSymbolKey}-${OP_NONE}`);
/** @internal */
class None {
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_NONE;
  id = -1;
  startTimeMillis = -1;
  [Hash.symbol]() {
    return emptyHash;
  }
  [Equal.symbol](that) {
    return isFiberId(that) && that._tag === OP_NONE;
  }
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag
    };
  }
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  }
}
/** @internal */
class Runtime {
  id;
  startTimeMillis;
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_RUNTIME;
  constructor(id, startTimeMillis) {
    this.id = id;
    this.startTimeMillis = startTimeMillis;
  }
  [Hash.symbol]() {
    return Hash.cached(this, Hash.string(`${FiberIdSymbolKey}-${this._tag}-${this.id}-${this.startTimeMillis}`));
  }
  [Equal.symbol](that) {
    return isFiberId(that) && that._tag === OP_RUNTIME && this.id === that.id && this.startTimeMillis === that.startTimeMillis;
  }
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      id: this.id,
      startTimeMillis: this.startTimeMillis
    };
  }
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  }
}
/** @internal */
class Composite {
  left;
  right;
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_COMPOSITE;
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  _hash;
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.string(`${FiberIdSymbolKey}-${this._tag}`), Hash.combine(Hash.hash(this.left)), Hash.combine(Hash.hash(this.right)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isFiberId(that) && that._tag === OP_COMPOSITE && Equal.equals(this.left, that.left) && Equal.equals(this.right, that.right);
  }
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      left: (0, _Inspectable.toJSON)(this.left),
      right: (0, _Inspectable.toJSON)(this.right)
    };
  }
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  }
}
/** @internal */
const none = exports.none = /*#__PURE__*/new None();
/** @internal */
const runtime = (id, startTimeMillis) => {
  return new Runtime(id, startTimeMillis);
};
/** @internal */
exports.runtime = runtime;
const composite = (left, right) => {
  return new Composite(left, right);
};
/** @internal */
exports.composite = composite;
const isFiberId = self => (0, _Predicate.hasProperty)(self, FiberIdTypeId);
/** @internal */
exports.isFiberId = isFiberId;
const isNone = self => {
  return self._tag === OP_NONE || (0, _Function.pipe)(toSet(self), HashSet.every(id => isNone(id)));
};
/** @internal */
exports.isNone = isNone;
const isRuntime = self => {
  return self._tag === OP_RUNTIME;
};
/** @internal */
exports.isRuntime = isRuntime;
const isComposite = self => {
  return self._tag === OP_COMPOSITE;
};
/** @internal */
exports.isComposite = isComposite;
const combine = exports.combine = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  if (self._tag === OP_NONE) {
    return that;
  }
  if (that._tag === OP_NONE) {
    return self;
  }
  return new Composite(self, that);
});
/** @internal */
const combineAll = fiberIds => {
  return (0, _Function.pipe)(fiberIds, HashSet.reduce(none, (a, b) => combine(b)(a)));
};
/** @internal */
exports.combineAll = combineAll;
const getOrElse = exports.getOrElse = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => isNone(self) ? that : self);
/** @internal */
const ids = self => {
  switch (self._tag) {
    case OP_NONE:
      {
        return HashSet.empty();
      }
    case OP_RUNTIME:
      {
        return HashSet.make(self.id);
      }
    case OP_COMPOSITE:
      {
        return (0, _Function.pipe)(ids(self.left), HashSet.union(ids(self.right)));
      }
  }
};
exports.ids = ids;
const _fiberCounter = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/Fiber/Id/_fiberCounter"), () => MutableRef.make(0));
/** @internal */
const make = (id, startTimeSeconds) => {
  return new Runtime(id, startTimeSeconds);
};
/** @internal */
exports.make = make;
const threadName = self => {
  const identifiers = Array.from(ids(self)).map(n => `#${n}`).join(",");
  return identifiers;
};
/** @internal */
exports.threadName = threadName;
const toOption = self => {
  const fiberIds = toSet(self);
  if (HashSet.size(fiberIds) === 0) {
    return Option.none();
  }
  let first = true;
  let acc;
  for (const fiberId of fiberIds) {
    if (first) {
      acc = fiberId;
      first = false;
    } else {
      // @ts-expect-error
      acc = (0, _Function.pipe)(acc, combine(fiberId));
    }
  }
  // @ts-expect-error
  return Option.some(acc);
};
/** @internal */
exports.toOption = toOption;
const toSet = self => {
  switch (self._tag) {
    case OP_NONE:
      {
        return HashSet.empty();
      }
    case OP_RUNTIME:
      {
        return HashSet.make(self);
      }
    case OP_COMPOSITE:
      {
        return (0, _Function.pipe)(toSet(self.left), HashSet.union(toSet(self.right)));
      }
  }
};
/** @internal */
exports.toSet = toSet;
const unsafeMake = () => {
  const id = MutableRef.get(_fiberCounter);
  (0, _Function.pipe)(_fiberCounter, MutableRef.set(id + 1));
  return new Runtime(id, Date.now());
};
exports.unsafeMake = unsafeMake;
//# sourceMappingURL=fiberId.js.map