"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = exports.NodeInspectSymbol = exports.Class = exports.BaseProto = void 0;
exports.formatDate = formatDate;
exports.formatPropertyKey = formatPropertyKey;
exports.formatUnknown = formatUnknown;
exports.withRedactableContext = exports.toStringUnknown = exports.toJSON = exports.symbolRedactable = exports.stringifyCircular = exports.redact = exports.isRedactable = void 0;
var _GlobalValue = require("./GlobalValue.js");
var Predicate = _interopRequireWildcard(require("./Predicate.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const NodeInspectSymbol = exports.NodeInspectSymbol = /*#__PURE__*/Symbol.for("nodejs.util.inspect.custom");
/**
 * @since 2.0.0
 */
const toJSON = x => {
  try {
    if (Predicate.hasProperty(x, "toJSON") && Predicate.isFunction(x["toJSON"]) && x["toJSON"].length === 0) {
      return x.toJSON();
    } else if (Array.isArray(x)) {
      return x.map(toJSON);
    }
  } catch {
    return {};
  }
  return redact(x);
};
exports.toJSON = toJSON;
const CIRCULAR = "[Circular]";
/** @internal */
function formatDate(date) {
  try {
    return date.toISOString();
  } catch {
    return "Invalid Date";
  }
}
function safeToString(input) {
  try {
    const s = input.toString();
    return typeof s === "string" ? s : String(s);
  } catch {
    return "[toString threw]";
  }
}
/** @internal */
function formatPropertyKey(name) {
  return Predicate.isString(name) ? JSON.stringify(name) : String(name);
}
/** @internal */
function formatUnknown(input, options) {
  const space = options?.space ?? 0;
  const seen = new WeakSet();
  const gap = !space ? "" : Predicate.isNumber(space) ? " ".repeat(space) : space;
  const ind = d => gap.repeat(d);
  const wrap = (v, body) => {
    const ctor = v?.constructor;
    return ctor && ctor !== Object.prototype.constructor && ctor.name ? `${ctor.name}(${body})` : body;
  };
  const ownKeys = o => {
    try {
      return Reflect.ownKeys(o);
    } catch {
      return ["[ownKeys threw]"];
    }
  };
  function go(v, d = 0) {
    if (Array.isArray(v)) {
      if (seen.has(v)) return CIRCULAR;
      seen.add(v);
      if (!gap || v.length <= 1) return `[${v.map(x => go(x, d)).join(",")}]`;
      const inner = v.map(x => go(x, d + 1)).join(",\n" + ind(d + 1));
      return `[\n${ind(d + 1)}${inner}\n${ind(d)}]`;
    }
    if (Predicate.isDate(v)) return formatDate(v);
    if (!options?.ignoreToString && Predicate.hasProperty(v, "toString") && Predicate.isFunction(v["toString"]) && v["toString"] !== Object.prototype.toString && v["toString"] !== Array.prototype.toString) {
      const s = safeToString(v);
      if (v instanceof Error && v.cause) {
        return `${s} (cause: ${go(v.cause, d)})`;
      }
      return s;
    }
    if (Predicate.isString(v)) return JSON.stringify(v);
    if (Predicate.isNumber(v) || v == null || Predicate.isBoolean(v) || Predicate.isSymbol(v)) return String(v);
    if (Predicate.isBigInt(v)) return String(v) + "n";
    if (v instanceof Set || v instanceof Map) {
      if (seen.has(v)) return CIRCULAR;
      seen.add(v);
      return `${v.constructor.name}(${go(Array.from(v), d)})`;
    }
    if (Predicate.isObject(v)) {
      if (seen.has(v)) return CIRCULAR;
      seen.add(v);
      const keys = ownKeys(v);
      if (!gap || keys.length <= 1) {
        const body = `{${keys.map(k => `${formatPropertyKey(k)}:${go(v[k], d)}`).join(",")}}`;
        return wrap(v, body);
      }
      const body = `{\n${keys.map(k => `${ind(d + 1)}${formatPropertyKey(k)}: ${go(v[k], d + 1)}`).join(",\n")}\n${ind(d)}}`;
      return wrap(v, body);
    }
    return String(v);
  }
  return go(input, 0);
}
/**
 * @since 2.0.0
 */
const format = x => JSON.stringify(x, null, 2);
/**
 * @since 2.0.0
 */
exports.format = format;
const BaseProto = exports.BaseProto = {
  toJSON() {
    return toJSON(this);
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return format(this.toJSON());
  }
};
/**
 * @since 2.0.0
 */
class Class {
  /**
   * @since 2.0.0
   */
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
  /**
   * @since 2.0.0
   */
  toString() {
    return format(this.toJSON());
  }
}
/**
 * @since 2.0.0
 */
exports.Class = Class;
const toStringUnknown = (u, whitespace = 2) => {
  if (typeof u === "string") {
    return u;
  }
  try {
    return typeof u === "object" ? stringifyCircular(u, whitespace) : String(u);
  } catch {
    return String(u);
  }
};
/**
 * @since 2.0.0
 */
exports.toStringUnknown = toStringUnknown;
const stringifyCircular = (obj, whitespace) => {
  let cache = [];
  const retVal = JSON.stringify(obj, (_key, value) => typeof value === "object" && value !== null ? cache.includes(value) ? undefined // circular reference
  : cache.push(value) && (redactableState.fiberRefs !== undefined && isRedactable(value) ? value[symbolRedactable](redactableState.fiberRefs) : value) : value, whitespace);
  cache = undefined;
  return retVal;
};
/**
 * @since 3.10.0
 * @category redactable
 */
exports.stringifyCircular = stringifyCircular;
const symbolRedactable = exports.symbolRedactable = /*#__PURE__*/Symbol.for("effect/Inspectable/Redactable");
/**
 * @since 3.10.0
 * @category redactable
 */
const isRedactable = u => typeof u === "object" && u !== null && symbolRedactable in u;
exports.isRedactable = isRedactable;
const redactableState = /*#__PURE__*/(0, _GlobalValue.globalValue)("effect/Inspectable/redactableState", () => ({
  fiberRefs: undefined
}));
/**
 * @since 3.10.0
 * @category redactable
 */
const withRedactableContext = (context, f) => {
  const prev = redactableState.fiberRefs;
  redactableState.fiberRefs = context;
  try {
    return f();
  } finally {
    redactableState.fiberRefs = prev;
  }
};
/**
 * @since 3.10.0
 * @category redactable
 */
exports.withRedactableContext = withRedactableContext;
const redact = u => {
  if (isRedactable(u) && redactableState.fiberRefs !== undefined) {
    return u[symbolRedactable](redactableState.fiberRefs);
  }
  return u;
};
exports.redact = redact;
//# sourceMappingURL=Inspectable.js.map