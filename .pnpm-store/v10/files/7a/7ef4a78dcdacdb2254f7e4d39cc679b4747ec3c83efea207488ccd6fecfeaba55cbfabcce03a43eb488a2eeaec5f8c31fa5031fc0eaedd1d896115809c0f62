"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalValue = void 0;
/**
 * The `GlobalValue` module ensures that a single instance of a value is created globally,
 * even when modules are imported multiple times (e.g., due to mixing CommonJS and ESM builds)
 * or during hot-reloading in development environments like Next.js or Remix.
 *
 * It achieves this by using a versioned global store, identified by a unique `Symbol` tied to
 * the current version of the `effect` library. The store holds values that are keyed by an identifier,
 * allowing the reuse of previously computed instances across imports or reloads.
 *
 * This pattern is particularly useful in scenarios where frequent reloading can cause services or
 * single-instance objects to be recreated unnecessarily, such as in development environments with hot-reloading.
 *
 * @since 2.0.0
 */
const globalStoreId = `effect/GlobalValue`;
let globalStore;
/**
 * Retrieves or computes a global value associated with the given `id`. If the value for this `id`
 * has already been computed, it will be returned from the global store. If it does not exist yet,
 * the provided `compute` function will be executed to compute the value, store it, and then return it.
 *
 * This ensures that even in cases where the module is imported multiple times (e.g., in mixed environments
 * like CommonJS and ESM, or during hot-reloading in development), the value is computed only once and reused
 * thereafter.
 *
 * @example
 * ```ts
 * import { globalValue } from "effect/GlobalValue"
 *
 * // This cache will persist as long as the module is running,
 * // even if reloaded or imported elsewhere
 * const myCache = globalValue(
 *   Symbol.for("myCache"),
 *   () => new WeakMap<object, number>()
 * )
 * ```
 *
 * @since 2.0.0
 */
const globalValue = (id, compute) => {
  if (!globalStore) {
    // @ts-expect-error
    globalThis[globalStoreId] ??= new Map();
    // @ts-expect-error
    globalStore = globalThis[globalStoreId];
  }
  if (!globalStore.has(id)) {
    globalStore.set(id, compute());
  }
  return globalStore.get(id);
};
exports.globalValue = globalValue;
//# sourceMappingURL=GlobalValue.js.map