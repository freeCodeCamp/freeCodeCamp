"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = exports.isManagedRuntime = exports.TypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/managedRuntime.js"));
var circular = _interopRequireWildcard(require("./internal/managedRuntime/circular.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 3.9.0
 * @category symbol
 */
const TypeId = exports.TypeId = circular.TypeId;
/**
 * Checks if the provided argument is a `ManagedRuntime`.
 *
 * @since 3.9.0
 * @category guards
 */
const isManagedRuntime = exports.isManagedRuntime = internal.isManagedRuntime;
/**
 * Convert a Layer into an ManagedRuntime, that can be used to run Effect's using
 * your services.
 *
 * @since 2.0.0
 * @category runtime class
 * @example
 * ```ts
 * import { Console, Effect, Layer, ManagedRuntime } from "effect"
 *
 * class Notifications extends Effect.Tag("Notifications")<
 *   Notifications,
 *   { readonly notify: (message: string) => Effect.Effect<void> }
 * >() {
 *   static Live = Layer.succeed(this, { notify: (message) => Console.log(message) })
 * }
 *
 * async function main() {
 *   const runtime = ManagedRuntime.make(Notifications.Live)
 *   await runtime.runPromise(Notifications.notify("Hello, world!"))
 *   await runtime.dispose()
 * }
 *
 * main()
 * ```
 */
const make = exports.make = internal.make;
//# sourceMappingURL=ManagedRuntime.js.map