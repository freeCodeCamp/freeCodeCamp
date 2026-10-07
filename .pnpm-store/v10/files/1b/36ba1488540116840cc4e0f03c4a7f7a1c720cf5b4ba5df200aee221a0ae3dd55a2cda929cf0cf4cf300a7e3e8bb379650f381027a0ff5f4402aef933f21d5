"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.use = exports.make = exports.fork = exports.extend = exports.close = exports.addFinalizerExit = exports.addFinalizer = exports.ScopeTypeId = exports.Scope = exports.CloseableScopeTypeId = void 0;
var core = _interopRequireWildcard(require("./internal/core.js"));
var fiberRuntime = _interopRequireWildcard(require("./internal/fiberRuntime.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * A unique identifier for the `Scope` type.
 *
 * @since 2.0.0
 * @category symbols
 */
const ScopeTypeId = exports.ScopeTypeId = core.ScopeTypeId;
/**
 * A unique identifier for the `CloseableScope` type.
 *
 * @since 2.0.0
 * @category symbols
 */
const CloseableScopeTypeId = exports.CloseableScopeTypeId = core.CloseableScopeTypeId;
/**
 * A tag representing the current `Scope` in the environment.
 *
 * @since 2.0.0
 * @category context
 */
const Scope = exports.Scope = fiberRuntime.scopeTag;
/**
 * Adds a finalizer to this scope. The finalizer is guaranteed to be run when
 * the scope is closed. Use this when the finalizer does not need to know the
 * `Exit` value that the scope is closed with.
 *
 * @see {@link addFinalizerExit}
 *
 * @since 2.0.0
 * @category utils
 */
const addFinalizer = exports.addFinalizer = core.scopeAddFinalizer;
/**
 * Adds a finalizer to this scope. The finalizer receives the `Exit` value
 * when the scope is closed, allowing it to perform different actions based
 * on the exit status.
 *
 * @see {@link addFinalizer}
 *
 * @since 2.0.0
 * @category utils
 */
const addFinalizerExit = exports.addFinalizerExit = core.scopeAddFinalizerExit;
/**
 * Closes this scope with the specified exit value, running all finalizers that
 * have been added to the scope.
 *
 * @since 2.0.0
 * @category destructors
 */
const close = exports.close = core.scopeClose;
/**
 * Extends the scope of an `Effect` that requires a scope into this scope.
 * It provides this scope to the effect but does not close the scope when the
 * effect completes execution. This allows extending a scoped value into a
 * larger scope.
 *
 * @since 2.0.0
 * @category utils
 */
const extend = exports.extend = fiberRuntime.scopeExtend;
/**
 * Forks a new child scope with the specified execution strategy. The child scope
 * will automatically be closed when this scope is closed.
 *
 * @since 2.0.0
 * @category utils
 */
const fork = exports.fork = core.scopeFork;
/**
 * Provides this closeable scope to an `Effect` that requires a scope,
 * guaranteeing that the scope is closed with the result of that effect as
 * soon as the effect completes execution, whether by success, failure, or
 * interruption.
 *
 * @since 2.0.0
 * @category destructors
 */
const use = exports.use = fiberRuntime.scopeUse;
/**
 * Creates a new closeable scope where finalizers will run according to the
 * specified `ExecutionStrategy`. If no execution strategy is provided, `sequential`
 * will be used by default.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = fiberRuntime.scopeMake;
//# sourceMappingURL=Scope.js.map