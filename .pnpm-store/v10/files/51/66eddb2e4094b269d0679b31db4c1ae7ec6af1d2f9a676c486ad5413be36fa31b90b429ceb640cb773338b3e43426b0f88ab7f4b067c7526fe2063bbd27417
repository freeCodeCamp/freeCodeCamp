"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tracerTag = exports.spanTag = exports.nativeTracer = exports.make = exports.externalSpan = exports.addSpanStackTrace = exports.TracerTypeId = exports.NativeSpan = exports.DisablePropagation = void 0;
var Context = _interopRequireWildcard(require("../Context.js"));
var _Function = require("../Function.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/** @internal */
const TracerTypeId = exports.TracerTypeId = /*#__PURE__*/Symbol.for("effect/Tracer");
/** @internal */
const make = options => ({
  [TracerTypeId]: TracerTypeId,
  ...options
});
/** @internal */
exports.make = make;
const tracerTag = exports.tracerTag = /*#__PURE__*/Context.GenericTag("effect/Tracer");
/** @internal */
const spanTag = exports.spanTag = /*#__PURE__*/Context.GenericTag("effect/ParentSpan");
const randomHexString = /*#__PURE__*/function () {
  const characters = "abcdef0123456789";
  const charactersLength = characters.length;
  return function (length) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
}();
/** @internal */
class NativeSpan {
  name;
  parent;
  context;
  startTime;
  kind;
  _tag = "Span";
  spanId;
  traceId = "native";
  sampled = true;
  status;
  attributes;
  events = [];
  links;
  constructor(name, parent, context, links, startTime, kind) {
    this.name = name;
    this.parent = parent;
    this.context = context;
    this.startTime = startTime;
    this.kind = kind;
    this.status = {
      _tag: "Started",
      startTime
    };
    this.attributes = new Map();
    this.traceId = parent._tag === "Some" ? parent.value.traceId : randomHexString(32);
    this.spanId = randomHexString(16);
    this.links = Array.from(links);
  }
  end(endTime, exit) {
    this.status = {
      _tag: "Ended",
      endTime,
      exit,
      startTime: this.status.startTime
    };
  }
  attribute(key, value) {
    this.attributes.set(key, value);
  }
  event(name, startTime, attributes) {
    this.events.push([name, startTime, attributes ?? {}]);
  }
  addLinks(links) {
    // eslint-disable-next-line no-restricted-syntax
    this.links.push(...links);
  }
}
/** @internal */
exports.NativeSpan = NativeSpan;
const nativeTracer = exports.nativeTracer = /*#__PURE__*/make({
  span: (name, parent, context, links, startTime, kind) => new NativeSpan(name, parent, context, links, startTime, kind),
  context: f => f()
});
/** @internal */
const externalSpan = options => ({
  _tag: "ExternalSpan",
  spanId: options.spanId,
  traceId: options.traceId,
  sampled: options.sampled ?? true,
  context: options.context ?? Context.empty()
});
/** @internal */
exports.externalSpan = externalSpan;
const addSpanStackTrace = options => {
  if (options?.captureStackTrace === false) {
    return options;
  } else if (options?.captureStackTrace !== undefined && typeof options.captureStackTrace !== "boolean") {
    return options;
  }
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 3;
  const traceError = new Error();
  Error.stackTraceLimit = limit;
  let cache = false;
  return {
    ...options,
    captureStackTrace: () => {
      if (cache !== false) {
        return cache;
      }
      if (traceError.stack !== undefined) {
        const stack = traceError.stack.split("\n");
        if (stack[3] !== undefined) {
          cache = stack[3].trim();
          return cache;
        }
      }
    }
  };
};
/** @internal */
exports.addSpanStackTrace = addSpanStackTrace;
const DisablePropagation = exports.DisablePropagation = /*#__PURE__*/Context.Reference()("effect/Tracer/DisablePropagation", {
  defaultValue: _Function.constFalse
});
//# sourceMappingURL=tracer.js.map