"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequential = exports.parallelN = exports.parallel = exports.match = exports.isSequential = exports.isParallelN = exports.isParallel = void 0;
var internal = _interopRequireWildcard(require("./internal/executionStrategy.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * Execute effects sequentially.
 *
 * @since 2.0.0
 * @category constructors
 */
const sequential = exports.sequential = internal.sequential;
/**
 * Execute effects in parallel.
 *
 * @since 2.0.0
 * @category constructors
 */
const parallel = exports.parallel = internal.parallel;
/**
 * Execute effects in parallel, up to the specified number of concurrent fibers.
 *
 * @since 2.0.0
 * @category constructors
 */
const parallelN = exports.parallelN = internal.parallelN;
/**
 * Returns `true` if the specified `ExecutionStrategy` is an instance of
 * `Sequential`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isSequential = exports.isSequential = internal.isSequential;
/**
 * Returns `true` if the specified `ExecutionStrategy` is an instance of
 * `Sequential`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isParallel = exports.isParallel = internal.isParallel;
/**
 * Returns `true` if the specified `ExecutionStrategy` is an instance of
 * `Sequential`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isParallelN = exports.isParallelN = internal.isParallelN;
/**
 * Folds over the specified `ExecutionStrategy` using the provided case
 * functions.
 *
 * @since 2.0.0
 * @category folding
 */
const match = exports.match = internal.match;
//# sourceMappingURL=ExecutionStrategy.js.map