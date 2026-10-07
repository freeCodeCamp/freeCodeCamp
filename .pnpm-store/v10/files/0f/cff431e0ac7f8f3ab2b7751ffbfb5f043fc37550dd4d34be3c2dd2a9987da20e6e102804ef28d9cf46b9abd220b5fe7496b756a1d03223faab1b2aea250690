/**
 * @since 2.0.0
 * @deprecated
 */
import type * as Equal from "./Equal.js"
import * as InternalSecret from "./internal/secret.js"
import type * as Redacted from "./Redacted.js"

/**
 * @since 2.0.0
 * @category symbols
 * @deprecated
 */
export const SecretTypeId: unique symbol = InternalSecret.SecretTypeId

/**
 * @since 2.0.0
 * @category symbols
 * @deprecated
 */
export type SecretTypeId = typeof SecretTypeId

/**
 * @since 2.0.0
 * @category models
 * @deprecated
 */
export interface Secret extends Redacted.Redacted, Secret.Proto, Equal.Equal {
  /** @internal */
  readonly raw: Array<number>
}

/**
 * @since 2.0.0
 * @deprecated
 */
export declare namespace Secret {
  /**
   * @since 2.0.0
   * @category models
   * @deprecated
   */
  export interface Proto {
    readonly [SecretTypeId]: SecretTypeId
  }
}

/**
 * @since 2.0.0
 * @category refinements
 * @deprecated
 */
export const isSecret: (u: unknown) => u is Secret = InternalSecret.isSecret

/**
 * @since 2.0.0
 * @category constructors
 * @deprecated
 */
export const make: (bytes: Array<number>) => Secret = InternalSecret.make

/**
 * @since 2.0.0
 * @category constructors
 * @deprecated
 */
export const fromIterable: (iterable: Iterable<string>) => Secret = InternalSecret.fromIterable

/**
 * @since 2.0.0
 * @category constructors
 * @deprecated
 */
export const fromString: (text: string) => Secret = InternalSecret.fromString

/**
 * @since 2.0.0
 * @category getters
 * @deprecated
 */
export const value: (self: Secret) => string = InternalSecret.value

/**
 * @since 2.0.0
 * @category unsafe
 * @deprecated
 */
export const unsafeWipe: (self: Secret) => void = InternalSecret.unsafeWipe
