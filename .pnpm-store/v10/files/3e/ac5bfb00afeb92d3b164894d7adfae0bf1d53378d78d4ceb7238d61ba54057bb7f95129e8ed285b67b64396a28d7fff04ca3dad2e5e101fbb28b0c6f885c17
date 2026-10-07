/**
 * @since 3.14.0
 * @experimental
 */
import * as Context from "./Context.js"
import type * as Duration from "./Duration.js"
import * as Effect from "./Effect.js"
import * as FiberRefsPatch from "./FiberRefsPatch.js"
import { identity } from "./Function.js"
import * as core from "./internal/core.js"
import * as Layer from "./Layer.js"
import * as RcMap from "./RcMap.js"
import * as Runtime from "./Runtime.js"
import * as Scope from "./Scope.js"
import type { Mutable, NoExcessProperties } from "./Types.js"

/**
 * @since 3.14.0
 * @category Symbols
 */
export const TypeId: unique symbol = Symbol.for("effect/LayerMap")

/**
 * @since 3.14.0
 * @category Symbols
 */
export type TypeId = typeof TypeId

/**
 * @since 3.14.0
 * @category Models
 * @experimental
 */
export interface LayerMap<in K, in out I, out E = never> {
  readonly [TypeId]: TypeId

  /**
   * The internal RcMap that stores the resources.
   */
  readonly rcMap: RcMap.RcMap<K, {
    readonly layer: Layer.Layer<I, E>
    readonly runtimeEffect: Effect.Effect<Runtime.Runtime<I>, E, Scope.Scope>
  }, E>

  /**
   * Retrieves a Layer for the resources associated with the key.
   */
  get(key: K): Layer.Layer<I, E>

  /**
   * Retrieves a Runtime for the resources associated with the key.
   */
  runtime(key: K): Effect.Effect<Runtime.Runtime<I>, E, Scope.Scope>

  /**
   * Invalidates the resource associated with the key.
   */
  invalidate(key: K): Effect.Effect<void>
}

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
export const make: <
  K,
  L extends Layer.Layer<any, any, any>,
  PreloadKeys extends Iterable<K> | undefined = undefined
>(
  lookup: (key: K) => L,
  options?: {
    readonly idleTimeToLive?: Duration.DurationInput | undefined
    readonly preloadKeys?: PreloadKeys
  } | undefined
) => Effect.Effect<
  LayerMap<
    K,
    L extends Layer.Layer<infer _A, infer _E, infer _R> ? _A : never,
    L extends Layer.Layer<infer _A, infer _E, infer _R> ? _E : never
  >,
  PreloadKeys extends undefined ? never : L extends Layer.Layer<infer _A, infer _E, infer _R> ? _E : never,
  Scope.Scope | (L extends Layer.Layer<infer _A, infer _E, infer _R> ? _R : never)
> = Effect.fnUntraced(function*<I, K, EL, RL>(
  lookup: (key: K) => Layer.Layer<I, EL, RL>,
  options?: {
    readonly idleTimeToLive?: Duration.DurationInput | undefined
    readonly preloadKeys?: Iterable<K> | undefined
  } | undefined
) {
  const context = yield* Effect.context<never>()

  // If we are inside another layer build, use the current memo map,
  // otherwise create a new one.
  const memoMap = context.unsafeMap.has(Layer.CurrentMemoMap.key)
    ? Context.get(context, Layer.CurrentMemoMap)
    : yield* Layer.makeMemoMap

  const rcMap = yield* RcMap.make({
    lookup: (key: K) =>
      Effect.scopeWith((scope) => Effect.diffFiberRefs(Layer.buildWithMemoMap(lookup(key), memoMap, scope))).pipe(
        Effect.map(([patch, context]) => ({
          layer: Layer.scopedContext(
            core.withFiberRuntime<Context.Context<I>, any, Scope.Scope>((fiber) => {
              const scope = Context.unsafeGet(fiber.currentContext, Scope.Scope)
              const oldRefs = fiber.getFiberRefs()
              const newRefs = FiberRefsPatch.patch(patch, fiber.id(), oldRefs)
              const revert = FiberRefsPatch.diff(newRefs, oldRefs)
              fiber.setFiberRefs(newRefs)
              return Effect.as(
                Scope.addFinalizerExit(scope, () => {
                  fiber.setFiberRefs(FiberRefsPatch.patch(revert, fiber.id(), fiber.getFiberRefs()))
                  return Effect.void
                }),
                context
              )
            })
          ),
          runtimeEffect: Effect.withFiberRuntime<Runtime.Runtime<I>, any, Scope.Scope>((fiber) => {
            const fiberRefs = FiberRefsPatch.patch(patch, fiber.id(), fiber.getFiberRefs())
            return Effect.succeed(Runtime.make({
              context,
              fiberRefs,
              runtimeFlags: Runtime.defaultRuntime.runtimeFlags
            }))
          })
        } as const))
      ),
    idleTimeToLive: options?.idleTimeToLive
  })

  if (options?.preloadKeys) {
    for (const key of options.preloadKeys) {
      yield* (RcMap.get(rcMap, key) as Effect.Effect<any, EL, RL | Scope.Scope>)
    }
  }

  return identity<LayerMap<K, Exclude<I, Scope.Scope>, any>>({
    [TypeId]: TypeId,
    rcMap,
    get: (key) => Layer.unwrapScoped(Effect.map(RcMap.get(rcMap, key), ({ layer }) => layer)),
    runtime: (key) => Effect.flatMap(RcMap.get(rcMap, key), ({ runtimeEffect }) => runtimeEffect),
    invalidate: (key) => RcMap.invalidate(rcMap, key)
  })
})

/**
 * @since 3.14.0
 * @category Constructors
 * @experimental
 */
export const fromRecord = <
  const Layers extends Record<string, Layer.Layer<any, any, any>>,
  const Preload extends boolean = false
>(
  layers: Layers,
  options?: {
    readonly idleTimeToLive?: Duration.DurationInput | undefined
    readonly preload?: Preload | undefined
  } | undefined
): Effect.Effect<
  LayerMap<
    keyof Layers,
    Layers[keyof Layers] extends Layer.Layer<infer _A, infer _E, infer _R> ? _A : never,
    Preload extends true ? never : Layers[keyof Layers] extends Layer.Layer<infer _A, infer _E, infer _R> ? _E : never
  >,
  Preload extends true ? never : Layers[keyof Layers] extends Layer.Layer<infer _A, infer _E, infer _R> ? _E : never,
  Scope.Scope | (Layers[keyof Layers] extends Layer.Layer<infer _A, infer _E, infer _R> ? _R : never)
> =>
  make((key: keyof Layers) => layers[key], {
    ...options,
    preloadKeys: options?.preload ? Object.keys(layers) : undefined
  }) as any

/**
 * @since 3.14.0
 * @category Service
 */
export interface TagClass<
  in out Self,
  in out Id extends string,
  in out K,
  in out I,
  in out E,
  in out R,
  in out LE,
  in out Deps extends Layer.Layer<any, any, any>
> extends Context.TagClass<Self, Id, LayerMap<K, I, E>> {
  /**
   * A default layer for the `LayerMap` service.
   */
  readonly Default: Layer.Layer<
    Self,
    (Deps extends Layer.Layer<infer _A, infer _E, infer _R> ? _E : never) | LE,
    | Exclude<R, (Deps extends Layer.Layer<infer _A, infer _E, infer _R> ? _A : never)>
    | (Deps extends Layer.Layer<infer _A, infer _E, infer _R> ? _R : never)
  >

  /**
   * A default layer for the `LayerMap` service without the dependencies provided.
   */
  readonly DefaultWithoutDependencies: Layer.Layer<Self, LE, R>

  /**
   * Retrieves a Layer for the resources associated with the key.
   */
  readonly get: (key: K) => Layer.Layer<I, E, Self>

  /**
   * Retrieves a Runtime for the resources associated with the key.
   */
  readonly runtime: (key: K) => Effect.Effect<Runtime.Runtime<I>, E, Scope.Scope | Self>

  /**
   * Invalidates the resource associated with the key.
   */
  readonly invalidate: (key: K) => Effect.Effect<void, never, Self>
}

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
export const Service = <Self>() =>
<
  const Id extends string,
  Options extends
    | NoExcessProperties<
      {
        readonly lookup: (key: any) => Layer.Layer<any, any, any>
        readonly dependencies?: ReadonlyArray<Layer.Layer<any, any, any>>
        readonly idleTimeToLive?: Duration.DurationInput | undefined
        readonly preloadKeys?:
          | Iterable<Options extends { readonly lookup: (key: infer K) => any } ? K : never>
          | undefined
      },
      Options
    >
    | NoExcessProperties<{
      readonly layers: Record<string, Layer.Layer<any, any, any>>
      readonly dependencies?: ReadonlyArray<Layer.Layer<any, any, any>>
      readonly idleTimeToLive?: Duration.DurationInput | undefined
      readonly preload?: boolean
    }, Options>
>(
  id: Id,
  options: Options
): TagClass<
  Self,
  Id,
  Options extends { readonly lookup: (key: infer K) => any } ? K
    : Options extends { readonly layers: infer Layers } ? keyof Layers
    : never,
  Service.Success<Options>,
  Options extends { readonly preload: true } ? never : Service.Error<Options>,
  Service.Context<Options>,
  Options extends { readonly preload: true } ? Service.Error<Options>
    : Options extends { readonly preloadKey: Iterable<any> } ? Service.Error<Options>
    : never,
  Options extends { readonly dependencies: ReadonlyArray<any> } ? Options["dependencies"][number] : never
> => {
  const Err = globalThis.Error as any
  const limit = Err.stackTraceLimit
  Err.stackTraceLimit = 2
  const creationError = new Err()
  Err.stackTraceLimit = limit

  function TagClass() {}
  const TagClass_ = TagClass as any as Mutable<TagClass<Self, Id, string, any, any, any, any, any>>
  Object.setPrototypeOf(TagClass, Object.getPrototypeOf(Context.GenericTag<Self, any>(id)))
  TagClass.key = id
  Object.defineProperty(TagClass, "stack", {
    get() {
      return creationError.stack
    }
  })

  TagClass_.DefaultWithoutDependencies = Layer.scoped(
    TagClass_,
    "lookup" in options
      ? make(options.lookup, options)
      : fromRecord(options.layers as any, options)
  )
  TagClass_.Default = options.dependencies && options.dependencies.length > 0 ?
    Layer.provide(TagClass_.DefaultWithoutDependencies, options.dependencies as any) :
    TagClass_.DefaultWithoutDependencies

  TagClass_.get = (key: string) => Layer.unwrapScoped(Effect.map(TagClass_, (layerMap) => layerMap.get(key)))
  TagClass_.runtime = (key: string) => Effect.flatMap(TagClass_, (layerMap) => layerMap.runtime(key))
  TagClass_.invalidate = (key: string) => Effect.flatMap(TagClass_, (layerMap) => layerMap.invalidate(key))

  return TagClass as any
}

/**
 * @since 3.14.0
 * @category Service
 * @experimental
 */
export declare namespace Service {
  /**
   * @since 3.14.0
   * @category Service
   * @experimental
   */
  export type Key<Options> = Options extends { readonly lookup: (key: infer K) => any } ? K
    : Options extends { readonly layers: infer Layers } ? keyof Layers
    : never

  /**
   * @since 3.14.0
   * @category Service
   * @experimental
   */
  export type Layers<Options> = Options extends { readonly lookup: (key: infer _K) => infer Layers } ? Layers
    : Options extends { readonly layers: infer Layers } ? Layers[keyof Layers]
    : never

  /**
   * @since 3.14.0
   * @category Service
   * @experimental
   */
  export type Success<Options> = Layers<Options> extends Layer.Layer<infer _A, infer _E, infer _R> ? _A : never

  /**
   * @since 3.14.0
   * @category Service
   * @experimental
   */
  export type Error<Options> = Layers<Options> extends Layer.Layer<infer _A, infer _E, infer _R> ? _E : never

  /**
   * @since 3.14.0
   * @category Service
   * @experimental
   */
  export type Context<Options> = Layers<Options> extends Layer.Layer<infer _A, infer _E, infer _R> ? _R : never
}
