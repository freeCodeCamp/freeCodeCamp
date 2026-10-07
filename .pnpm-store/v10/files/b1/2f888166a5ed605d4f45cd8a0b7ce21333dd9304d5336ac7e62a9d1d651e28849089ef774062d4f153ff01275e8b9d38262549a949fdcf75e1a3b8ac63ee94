"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeGetReference = exports.unsafeGet = exports.pick = exports.omit = exports.mergeAll = exports.merge = exports.makeGenericTag = exports.makeContext = exports.make = exports.isTag = exports.isReference = exports.isContext = exports.getOrElse = exports.getOption = exports.get = exports.empty = exports.add = exports.TypeId = exports.TagTypeId = exports.TagProto = exports.Tag = exports.STMTypeId = exports.ReferenceTypeId = exports.ReferenceProto = exports.Reference = exports.ContextProto = void 0;
var Equal = _interopRequireWildcard(require("../Equal.js"));
var _Function = require("../Function.js");
var _GlobalValue = require("../GlobalValue.js");
var Hash = _interopRequireWildcard(require("../Hash.js"));
var _Inspectable = require("../Inspectable.js");
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var _effectable = require("./effectable.js");
var option = _interopRequireWildcard(require("./option.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TagTypeId = exports.TagTypeId = /*#__PURE__*/Symbol.for("effect/Context/Tag");
/** @internal */
const ReferenceTypeId = exports.ReferenceTypeId = /*#__PURE__*/Symbol.for("effect/Context/Reference");
/** @internal */
const STMSymbolKey = "effect/STM";
/** @internal */
const STMTypeId = exports.STMTypeId = /*#__PURE__*/Symbol.for(STMSymbolKey);
/** @internal */
const TagProto = exports.TagProto = {
  ..._effectable.EffectPrototype,
  _op: "Tag",
  [STMTypeId]: _effectable.effectVariance,
  [TagTypeId]: {
    _Service: _ => _,
    _Identifier: _ => _
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Tag",
      key: this.key,
      stack: this.stack
    };
  },
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  },
  of(self) {
    return self;
  },
  context(self) {
    return make(this, self);
  }
};
const ReferenceProto = exports.ReferenceProto = {
  ...TagProto,
  [ReferenceTypeId]: ReferenceTypeId
};
/** @internal */
const makeGenericTag = key => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  const tag = Object.create(TagProto);
  Object.defineProperty(tag, "stack", {
    get() {
      return creationError.stack;
    }
  });
  tag.key = key;
  return tag;
};
/** @internal */
exports.makeGenericTag = makeGenericTag;
const Tag = id => () => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  function TagClass() {}
  Object.setPrototypeOf(TagClass, TagProto);
  TagClass.key = id;
  Object.defineProperty(TagClass, "stack", {
    get() {
      return creationError.stack;
    }
  });
  return TagClass;
};
/** @internal */
exports.Tag = Tag;
const Reference = () => (id, options) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  function ReferenceClass() {}
  Object.setPrototypeOf(ReferenceClass, ReferenceProto);
  ReferenceClass.key = id;
  ReferenceClass.defaultValue = options.defaultValue;
  Object.defineProperty(ReferenceClass, "stack", {
    get() {
      return creationError.stack;
    }
  });
  return ReferenceClass;
};
/** @internal */
exports.Reference = Reference;
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/Context");
/** @internal */
const ContextProto = exports.ContextProto = {
  [TypeId]: {
    _Services: _ => _
  },
  [Equal.symbol](that) {
    if (isContext(that)) {
      if (this.unsafeMap.size === that.unsafeMap.size) {
        for (const k of this.unsafeMap.keys()) {
          if (!that.unsafeMap.has(k) || !Equal.equals(this.unsafeMap.get(k), that.unsafeMap.get(k))) {
            return false;
          }
        }
        return true;
      }
    }
    return false;
  },
  [Hash.symbol]() {
    return Hash.cached(this, Hash.number(this.unsafeMap.size));
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  },
  toString() {
    return (0, _Inspectable.format)(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Context",
      services: Array.from(this.unsafeMap).map(_Inspectable.toJSON)
    };
  },
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  }
};
/** @internal */
const makeContext = unsafeMap => {
  const context = Object.create(ContextProto);
  context.unsafeMap = unsafeMap;
  return context;
};
exports.makeContext = makeContext;
const serviceNotFoundError = tag => {
  const error = new Error(`Service not found${tag.key ? `: ${String(tag.key)}` : ""}`);
  if (tag.stack) {
    const lines = tag.stack.split("\n");
    if (lines.length > 2) {
      const afterAt = lines[2].match(/at (.*)/);
      if (afterAt) {
        error.message = error.message + ` (defined at ${afterAt[1]})`;
      }
    }
  }
  if (error.stack) {
    const lines = error.stack.split("\n");
    lines.splice(1, 3);
    error.stack = lines.join("\n");
  }
  return error;
};
/** @internal */
const isContext = u => (0, _Predicate.hasProperty)(u, TypeId);
/** @internal */
exports.isContext = isContext;
const isTag = u => (0, _Predicate.hasProperty)(u, TagTypeId);
/** @internal */
exports.isTag = isTag;
const isReference = u => (0, _Predicate.hasProperty)(u, ReferenceTypeId);
exports.isReference = isReference;
const _empty = /*#__PURE__*/makeContext(/*#__PURE__*/new Map());
/** @internal */
const empty = () => _empty;
/** @internal */
exports.empty = empty;
const make = (tag, service) => makeContext(new Map([[tag.key, service]]));
/** @internal */
exports.make = make;
const add = exports.add = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, service) => {
  const map = new Map(self.unsafeMap);
  map.set(tag.key, service);
  return makeContext(map);
});
const defaultValueCache = /*#__PURE__*/(0, _GlobalValue.globalValue)("effect/Context/defaultValueCache", () => new Map());
const getDefaultValue = tag => {
  if (defaultValueCache.has(tag.key)) {
    return defaultValueCache.get(tag.key);
  }
  const value = tag.defaultValue();
  defaultValueCache.set(tag.key, value);
  return value;
};
/** @internal */
const unsafeGetReference = (self, tag) => {
  return self.unsafeMap.has(tag.key) ? self.unsafeMap.get(tag.key) : getDefaultValue(tag);
};
/** @internal */
exports.unsafeGetReference = unsafeGetReference;
const unsafeGet = exports.unsafeGet = /*#__PURE__*/(0, _Function.dual)(2, (self, tag) => {
  if (!self.unsafeMap.has(tag.key)) {
    if (ReferenceTypeId in tag) return getDefaultValue(tag);
    throw serviceNotFoundError(tag);
  }
  return self.unsafeMap.get(tag.key);
});
/** @internal */
const get = exports.get = unsafeGet;
/** @internal */
const getOrElse = exports.getOrElse = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, orElse) => {
  if (!self.unsafeMap.has(tag.key)) {
    return isReference(tag) ? getDefaultValue(tag) : orElse();
  }
  return self.unsafeMap.get(tag.key);
});
/** @internal */
const getOption = exports.getOption = /*#__PURE__*/(0, _Function.dual)(2, (self, tag) => {
  if (!self.unsafeMap.has(tag.key)) {
    return isReference(tag) ? option.some(getDefaultValue(tag)) : option.none;
  }
  return option.some(self.unsafeMap.get(tag.key));
});
/** @internal */
const merge = exports.merge = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  const map = new Map(self.unsafeMap);
  for (const [tag, s] of that.unsafeMap) {
    map.set(tag, s);
  }
  return makeContext(map);
});
/** @internal */
const mergeAll = (...ctxs) => {
  const map = new Map();
  for (let i = 0; i < ctxs.length; i++) {
    ctxs[i].unsafeMap.forEach((value, key) => {
      map.set(key, value);
    });
  }
  return makeContext(map);
};
/** @internal */
exports.mergeAll = mergeAll;
const pick = (...tags) => self => {
  const tagSet = new Set(tags.map(_ => _.key));
  const newEnv = new Map();
  for (const [tag, s] of self.unsafeMap.entries()) {
    if (tagSet.has(tag)) {
      newEnv.set(tag, s);
    }
  }
  return makeContext(newEnv);
};
/** @internal */
exports.pick = pick;
const omit = (...tags) => self => {
  const newEnv = new Map(self.unsafeMap);
  for (const tag of tags) {
    newEnv.delete(tag.key);
  }
  return makeContext(newEnv);
};
exports.omit = omit;
//# sourceMappingURL=context.js.map