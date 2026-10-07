/**
 * @since 2.0.0
 */
import * as Context from "../Context.js";
import { constFalse } from "../Function.js";
/** @internal */
export const TracerTypeId = /*#__PURE__*/Symbol.for("effect/Tracer");
/** @internal */
export const make = options => ({
  [TracerTypeId]: TracerTypeId,
  ...options
});
/** @internal */
export const tracerTag = /*#__PURE__*/Context.GenericTag("effect/Tracer");
/** @internal */
export const spanTag = /*#__PURE__*/Context.GenericTag("effect/ParentSpan");
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
export class NativeSpan {
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
export const nativeTracer = /*#__PURE__*/make({
  span: (name, parent, context, links, startTime, kind) => new NativeSpan(name, parent, context, links, startTime, kind),
  context: f => f()
});
/** @internal */
export const externalSpan = options => ({
  _tag: "ExternalSpan",
  spanId: options.spanId,
  traceId: options.traceId,
  sampled: options.sampled ?? true,
  context: options.context ?? Context.empty()
});
/** @internal */
export const addSpanStackTrace = options => {
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
export const DisablePropagation = /*#__PURE__*/Context.Reference()("effect/Tracer/DisablePropagation", {
  defaultValue: constFalse
});
//# sourceMappingURL=tracer.js.map