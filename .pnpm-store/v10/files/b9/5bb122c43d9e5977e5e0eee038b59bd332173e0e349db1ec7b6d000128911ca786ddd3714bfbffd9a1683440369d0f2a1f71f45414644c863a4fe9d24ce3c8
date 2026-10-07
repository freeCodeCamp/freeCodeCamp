/**
 * @since 3.14.0
 * @experimental
 */
import * as Context from "./Context.js";
import * as Effect from "./Effect.js";
import * as FiberRefsPatch from "./FiberRefsPatch.js";
import { identity } from "./Function.js";
import * as core from "./internal/core.js";
import * as Layer from "./Layer.js";
import * as RcMap from "./RcMap.js";
import * as Runtime from "./Runtime.js";
import * as Scope from "./Scope.js";
/**
 * @since 3.14.0
 * @category Symbols
 */
export const TypeId = /*#__PURE__*/Symbol.for("effect/LayerMap");
/**
 * @since 3.14.0
 * @category Constructors
 * @experimental
 *
 * A `LayerMap` allows you to create a map of Layer's that can be used to
 * dynamically access resources based on a key.
 *
 * ```ts
 * import { NodeRuntime } from "@effect/platform-node"
 * import { Context, Effect, FiberRef, Layer, LayerMap } from "effect"
 *
 * class Greeter extends Context.Tag("Greeter")<Greeter, {
 *   greet: Effect.Effect<string>
 * }>() {}
 *
 * // create a service that wraps a LayerMap
 * class GreeterMap extends LayerMap.Service<GreeterMap>()("GreeterMap", {
 *   // define the lookup function for the layer map
 *   //
 *   // The returned Layer will be used to provide the Greeter service for the
 *   // given name.
 *   lookup: (name: string) =>
 *     Layer.succeed(Greeter, {
 *       greet: Effect.succeed(`Hello, ${name}!`)
 *     }).pipe(
 *       Layer.merge(Layer.locallyScoped(FiberRef.currentConcurrency, 123))
 *     ),
 *
 *   // If a layer is not used for a certain amount of time, it can be removed
 *   idleTimeToLive: "5 seconds",
 *
 *   // Supply the dependencies for the layers in the LayerMap
 *   dependencies: []
 * }) {}
 *
 * // usage
 * const program: Effect.Effect<void, never, GreeterMap> = Effect.gen(function*() {
 *   // access and use the Greeter service
 *   const greeter = yield* Greeter
 *   yield* Effect.log(yield* greeter.greet)
 * }).pipe(
 *   // use the GreeterMap service to provide a variant of the Greeter service
 *   Effect.provide(GreeterMap.get("John"))
 * )
 *
 * // run the program
 * program.pipe(
 *   Effect.provide(GreeterMap.Default),
 *   NodeRuntime.runMain
 * )
 * ```
 */
export const make = /*#__PURE__*/Effect.fnUntraced(function* (lookup, options) {
  const context = yield* Effect.context();
  // If we are inside another layer build, use the current memo map,
  // otherwise create a new one.
  const memoMap = context.unsafeMap.has(Layer.CurrentMemoMap.key) ? Context.get(context, Layer.CurrentMemoMap) : yield* Layer.makeMemoMap;
  const rcMap = yield* RcMap.make({
    lookup: key => Effect.scopeWith(scope => Effect.diffFiberRefs(Layer.buildWithMemoMap(lookup(key), memoMap, scope))).pipe(Effect.map(([patch, context]) => ({
      layer: Layer.scopedContext(core.withFiberRuntime(fiber => {
        const scope = Context.unsafeGet(fiber.currentContext, Scope.Scope);
        const oldRefs = fiber.getFiberRefs();
        const newRefs = FiberRefsPatch.patch(patch, fiber.id(), oldRefs);
        const revert = FiberRefsPatch.diff(newRefs, oldRefs);
        fiber.setFiberRefs(newRefs);
        return Effect.as(Scope.addFinalizerExit(scope, () => {
          fiber.setFiberRefs(FiberRefsPatch.patch(revert, fiber.id(), fiber.getFiberRefs()));
          return Effect.void;
        }), context);
      })),
      runtimeEffect: Effect.withFiberRuntime(fiber => {
        const fiberRefs = FiberRefsPatch.patch(patch, fiber.id(), fiber.getFiberRefs());
        return Effect.succeed(Runtime.make({
          context,
          fiberRefs,
          runtimeFlags: Runtime.defaultRuntime.runtimeFlags
        }));
      })
    }))),
    idleTimeToLive: options?.idleTimeToLive
  });
  if (options?.preloadKeys) {
    for (const key of options.preloadKeys) {
      yield* RcMap.get(rcMap, key);
    }
  }
  return identity({
    [TypeId]: TypeId,
    rcMap,
    get: key => Layer.unwrapScoped(Effect.map(RcMap.get(rcMap, key), ({
      layer
    }) => layer)),
    runtime: key => Effect.flatMap(RcMap.get(rcMap, key), ({
      runtimeEffect
    }) => runtimeEffect),
    invalidate: key => RcMap.invalidate(rcMap, key)
  });
});
/**
 * @since 3.14.0
 * @category Constructors
 * @experimental
 */
export const fromRecord = (layers, options) => make(key => layers[key], {
  ...options,
  preloadKeys: options?.preload ? Object.keys(layers) : undefined
});
/**
 * @since 3.14.0
 * @category Service
 * @experimental
 *
 * Create a `LayerMap` service that provides a dynamic set of resources based on
 * a key.
 *
 * ```ts
 * import { NodeRuntime } from "@effect/platform-node"
 * import { Context, Effect, FiberRef, Layer, LayerMap } from "effect"
 *
 * class Greeter extends Context.Tag("Greeter")<Greeter, {
 *   greet: Effect.Effect<string>
 * }>() {}
 *
 * // create a service that wraps a LayerMap
 * class GreeterMap extends LayerMap.Service<GreeterMap>()("GreeterMap", {
 *   // define the lookup function for the layer map
 *   //
 *   // The returned Layer will be used to provide the Greeter service for the
 *   // given name.
 *   lookup: (name: string) =>
 *     Layer.succeed(Greeter, {
 *       greet: Effect.succeed(`Hello, ${name}!`)
 *     }).pipe(
 *       Layer.merge(Layer.locallyScoped(FiberRef.currentConcurrency, 123))
 *     ),
 *
 *   // If a layer is not used for a certain amount of time, it can be removed
 *   idleTimeToLive: "5 seconds",
 *
 *   // Supply the dependencies for the layers in the LayerMap
 *   dependencies: []
 * }) {}
 *
 * // usage
 * const program: Effect.Effect<void, never, GreeterMap> = Effect.gen(function*() {
 *   // access and use the Greeter service
 *   const greeter = yield* Greeter
 *   yield* Effect.log(yield* greeter.greet)
 * }).pipe(
 *   // use the GreeterMap service to provide a variant of the Greeter service
 *   Effect.provide(GreeterMap.get("John"))
 * )
 *
 * // run the program
 * program.pipe(
 *   Effect.provide(GreeterMap.Default),
 *   NodeRuntime.runMain
 * )
 * ```
 */
export const Service = () => (id, options) => {
  const Err = globalThis.Error;
  const limit = Err.stackTraceLimit;
  Err.stackTraceLimit = 2;
  const creationError = new Err();
  Err.stackTraceLimit = limit;
  function TagClass() {}
  const TagClass_ = TagClass;
  Object.setPrototypeOf(TagClass, Object.getPrototypeOf(Context.GenericTag(id)));
  TagClass.key = id;
  Object.defineProperty(TagClass, "stack", {
    get() {
      return creationError.stack;
    }
  });
  TagClass_.DefaultWithoutDependencies = Layer.scoped(TagClass_, "lookup" in options ? make(options.lookup, options) : fromRecord(options.layers, options));
  TagClass_.Default = options.dependencies && options.dependencies.length > 0 ? Layer.provide(TagClass_.DefaultWithoutDependencies, options.dependencies) : TagClass_.DefaultWithoutDependencies;
  TagClass_.get = key => Layer.unwrapScoped(Effect.map(TagClass_, layerMap => layerMap.get(key)));
  TagClass_.runtime = key => Effect.flatMap(TagClass_, layerMap => layerMap.runtime(key));
  TagClass_.invalidate = key => Effect.flatMap(TagClass_, layerMap => layerMap.invalidate(key));
  return TagClass;
};
//# sourceMappingURL=LayerMap.js.map