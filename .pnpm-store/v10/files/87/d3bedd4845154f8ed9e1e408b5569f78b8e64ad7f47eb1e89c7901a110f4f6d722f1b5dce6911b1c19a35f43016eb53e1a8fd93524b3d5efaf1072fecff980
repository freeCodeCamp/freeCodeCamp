/**
 * @since 2.0.0
 */
import type * as Clock from "./Clock.js"
import type * as ConfigProvider from "./ConfigProvider.js"
import type * as Console from "./Console.js"
import type * as Context from "./Context.js"
import type * as FiberRef from "./FiberRef.js"
import * as internal from "./internal/defaultServices.js"
import type * as Random from "./Random.js"
import type * as Tracer from "./Tracer.js"

/**
 * @since 2.0.0
 * @category models
 */
export type DefaultServices =
  | Clock.Clock
  | Console.Console
  | Random.Random
  | ConfigProvider.ConfigProvider
  | Tracer.Tracer

/**
 * @since 2.0.0
 * @category constructors
 */
export const liveServices: Context.Context<DefaultServices> = internal.liveServices

/**
 * @since 2.0.0
 * @category fiberRefs
 */
export const currentServices: FiberRef.FiberRef<Context.Context<DefaultServices>> = internal.currentServices
