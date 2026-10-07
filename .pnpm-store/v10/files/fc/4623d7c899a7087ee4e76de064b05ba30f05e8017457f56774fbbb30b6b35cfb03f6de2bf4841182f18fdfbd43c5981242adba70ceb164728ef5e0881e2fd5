import * as Equal from "../Equal.js";
import { dual } from "../Function.js";
import { globalValue } from "../GlobalValue.js";
import * as Hash from "../Hash.js";
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
import { EffectPrototype, effectVariance } from "./effectable.js";
import * as option from "./option.js";
/** @internal */
export const TagTypeId = /*#__PURE__*/Symbol.for("effect/Context/Tag");
/** @internal */
export const ReferenceTypeId = /*#__PURE__*/Symbol.for("effect/Context/Reference");
/** @internal */
const STMSymbolKey = "effect/STM";
/** @internal */
export const STMTypeId = /*#__PURE__*/Symbol.for(STMSymbolKey);
/** @internal */
export const TagProto = {
  ...EffectPrototype,
  _op: "Tag",
  [STMTypeId]: effectVariance,
  [TagTypeId]: {
    _Service: _ => _,
    _Identifier: _ => _
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Tag",
      key: this.key,
      stack: this.stack
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  of(self) {
    return self;
  },
  context(self) {
    return make(this, self);
  }
};
export const ReferenceProto = {
  ...TagProto,
  [ReferenceTypeId]: ReferenceTypeId
};
/** @internal */
export const makeGenericTag = key => {
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
export const Tag = id => () => {
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
export const Reference = () => (id, options) => {
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
export const TypeId = /*#__PURE__*/Symbol.for("effect/Context");
/** @internal */
export const ContextProto = {
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
    return pipeArguments(this, arguments);
  },
  toString() {
    return format(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Context",
      services: Array.from(this.unsafeMap).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
/** @internal */
export const makeContext = unsafeMap => {
  const context = Object.create(ContextProto);
  context.unsafeMap = unsafeMap;
  return context;
};
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
export const isContext = u => hasProperty(u, TypeId);
/** @internal */
export const isTag = u => hasProperty(u, TagTypeId);
/** @internal */
export const isReference = u => hasProperty(u, ReferenceTypeId);
const _empty = /*#__PURE__*/makeContext(/*#__PURE__*/new Map());
/** @internal */
export const empty = () => _empty;
/** @internal */
export const make = (tag, service) => makeContext(new Map([[tag.key, service]]));
/** @internal */
export const add = /*#__PURE__*/dual(3, (self, tag, service) => {
  const map = new Map(self.unsafeMap);
  map.set(tag.key, service);
  return makeContext(map);
});
const defaultValueCache = /*#__PURE__*/globalValue("effect/Context/defaultValueCache", () => new Map());
const getDefaultValue = tag => {
  if (defaultValueCache.has(tag.key)) {
    return defaultValueCache.get(tag.key);
  }
  const value = tag.defaultValue();
  defaultValueCache.set(tag.key, value);
  return value;
};
/** @internal */
export const unsafeGetReference = (self, tag) => {
  return self.unsafeMap.has(tag.key) ? self.unsafeMap.get(tag.key) : getDefaultValue(tag);
};
/** @internal */
export const unsafeGet = /*#__PURE__*/dual(2, (self, tag) => {
  if (!self.unsafeMap.has(tag.key)) {
    if (ReferenceTypeId in tag) return getDefaultValue(tag);
    throw serviceNotFoundError(tag);
  }
  return self.unsafeMap.get(tag.key);
});
/** @internal */
export const get = unsafeGet;
/** @internal */
export const getOrElse = /*#__PURE__*/dual(3, (self, tag, orElse) => {
  if (!self.unsafeMap.has(tag.key)) {
    return isReference(tag) ? getDefaultValue(tag) : orElse();
  }
  return self.unsafeMap.get(tag.key);
});
/** @internal */
export const getOption = /*#__PURE__*/dual(2, (self, tag) => {
  if (!self.unsafeMap.has(tag.key)) {
    return isReference(tag) ? option.some(getDefaultValue(tag)) : option.none;
  }
  return option.some(self.unsafeMap.get(tag.key));
});
/** @internal */
export const merge = /*#__PURE__*/dual(2, (self, that) => {
  const map = new Map(self.unsafeMap);
  for (const [tag, s] of that.unsafeMap) {
    map.set(tag, s);
  }
  return makeContext(map);
});
/** @internal */
export const mergeAll = (...ctxs) => {
  const map = new Map();
  for (let i = 0; i < ctxs.length; i++) {
    ctxs[i].unsafeMap.forEach((value, key) => {
      map.set(key, value);
    });
  }
  return makeContext(map);
};
/** @internal */
export const pick = (...tags) => self => {
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
export const omit = (...tags) => self => {
  const newEnv = new Map(self.unsafeMap);
  for (const tag of tags) {
    newEnv.delete(tag.key);
  }
  return makeContext(newEnv);
};
//# sourceMappingURL=context.js.map