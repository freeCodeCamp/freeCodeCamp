/**
 * @since 2.0.0
 */
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 */
export declare const URI: unique symbol

/**
 * @since 2.0.0
 */
export interface TypeClass<F extends TypeLambda> {
  readonly [URI]?: F
}

/**
 * @since 2.0.0
 */
export interface TypeLambda {
  readonly In: unknown
  readonly Out2: unknown
  readonly Out1: unknown
  readonly Target: unknown
}

/**
 * @since 2.0.0
 */
export type Kind<F extends TypeLambda, In, Out2, Out1, Target> = F extends {
  readonly type: unknown
} ? (F & {
    readonly In: In
    readonly Out2: Out2
    readonly Out1: Out1
    readonly Target: Target
  })["type"]
  : {
    readonly F: F
    readonly In: Types.Contravariant<In>
    readonly Out2: Types.Covariant<Out2>
    readonly Out1: Types.Covariant<Out1>
    readonly Target: Types.Invariant<Target>
  }
