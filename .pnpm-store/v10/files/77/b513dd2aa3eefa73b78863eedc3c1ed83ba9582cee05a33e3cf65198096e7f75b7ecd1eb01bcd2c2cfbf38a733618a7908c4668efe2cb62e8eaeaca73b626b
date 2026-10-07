"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tagged = exports.succeed = exports.of = exports.makeEntry = exports.makeCache = exports.isRequest = exports.isEntry = exports.interruptWhenPossible = exports.failCause = exports.fail = exports.completeEffect = exports.complete = exports.TaggedClass = exports.RequestTypeId = exports.EntryTypeId = exports.Class = void 0;
var RequestBlock_ = _interopRequireWildcard(require("./internal/blockedRequests.js"));
var cache = _interopRequireWildcard(require("./internal/cache.js"));
var core = _interopRequireWildcard(require("./internal/core.js"));
var fiberRuntime = _interopRequireWildcard(require("./internal/fiberRuntime.js"));
var internal = _interopRequireWildcard(require("./internal/request.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const RequestTypeId = exports.RequestTypeId = internal.RequestTypeId;
/**
 * Returns `true` if the specified value is a `Request`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isRequest = exports.isRequest = internal.isRequest;
/**
 * Constructs a new `Request`.
 *
 * @since 2.0.0
 * @category constructors
 */
const of = exports.of = internal.of;
/**
 * Constructs a new `Request`.
 *
 * @since 2.0.0
 * @category constructors
 */
const tagged = exports.tagged = internal.tagged;
/**
 * Provides a constructor for a Request Class.
 *
 * @example
 * ```ts
 * import { Request } from "effect"
 *
 * type Success = string
 * type Error = never
 *
 * class MyRequest extends Request.Class<Success, Error, {
 *   readonly id: string
 * }> {}
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const Class = exports.Class = internal.Class;
/**
 * Provides a Tagged constructor for a Request Class.
 *
 * @example
 * ```ts
 * import { Request } from "effect"
 *
 * type Success = string
 * type Error = never
 *
 * class MyRequest extends Request.TaggedClass("MyRequest")<Success, Error, {
 *   readonly name: string
 * }> {}
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const TaggedClass = exports.TaggedClass = internal.TaggedClass;
/**
 * Complete a `Request` with the specified result.
 *
 * @since 2.0.0
 * @category request completion
 */
const complete = exports.complete = internal.complete;
/**
 * Interrupts the child effect when requests are no longer needed
 *
 * @since 2.0.0
 * @category request completion
 */
const interruptWhenPossible = exports.interruptWhenPossible = fiberRuntime.interruptWhenPossible;
/**
 * Complete a `Request` with the specified effectful computation, failing the
 * request with the error from the effect workflow if it fails, and completing
 * the request with the value of the effect workflow if it succeeds.
 *
 * @since 2.0.0
 * @category request completion
 */
const completeEffect = exports.completeEffect = internal.completeEffect;
/**
 * Complete a `Request` with the specified error.
 *
 * @since 2.0.0
 * @category request completion
 */
const fail = exports.fail = internal.fail;
/**
 * Complete a `Request` with the specified cause.
 *
 * @since 2.0.0
 * @category request completion
 */
const failCause = exports.failCause = internal.failCause;
/**
 * Complete a `Request` with the specified value.
 *
 * @since 2.0.0
 * @category request completion
 */
const succeed = exports.succeed = internal.succeed;
/**
 * @since 2.0.0
 * @category models
 */
const makeCache = options => cache.make({
  ...options,
  lookup: () => core.map(core.deferredMake(), handle => ({
    listeners: new internal.Listeners(),
    handle
  }))
});
/**
 * @since 2.0.0
 * @category symbols
 */
exports.makeCache = makeCache;
const EntryTypeId = exports.EntryTypeId = /*#__PURE__*/Symbol.for("effect/RequestBlock.Entry");
/**
 * @since 2.0.0
 * @category guards
 */
const isEntry = exports.isEntry = RequestBlock_.isEntry;
/**
 * @since 2.0.0
 * @category constructors
 */
const makeEntry = exports.makeEntry = RequestBlock_.makeEntry;
//# sourceMappingURL=Request.js.map