/**
 * @since 2.0.0
 * @deprecated
 */
import type * as Equal from "./Equal.js";
import type * as Redacted from "./Redacted.js";
/**
 * @since 2.0.0
 * @category symbols
 * @deprecated
 */
export declare const SecretTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 * @deprecated
 */
export type SecretTypeId = typeof SecretTypeId;
/**
 * @since 2.0.0
 * @category models
 * @deprecated
 */
export interface Secret extends Redacted.Redacted, Secret.Proto, Equal.Equal {
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
    interface Proto {
        readonly [SecretTypeId]: SecretTypeId;
    }
}
/**
 * @since 2.0.0
 * @category refinements
 * @deprecated
 */
export declare const isSecret: (u: unknown) => u is Secret;
/**
 * @since 2.0.0
 * @category constructors
 * @deprecated
 */
export declare const make: (bytes: Array<number>) => Secret;
/**
 * @since 2.0.0
 * @category constructors
 * @deprecated
 */
export declare const fromIterable: (iterable: Iterable<string>) => Secret;
/**
 * @since 2.0.0
 * @category constructors
 * @deprecated
 */
export declare const fromString: (text: string) => Secret;
/**
 * @since 2.0.0
 * @category getters
 * @deprecated
 */
export declare const value: (self: Secret) => string;
/**
 * @since 2.0.0
 * @category unsafe
 * @deprecated
 */
export declare const unsafeWipe: (self: Secret) => void;
//# sourceMappingURL=Secret.d.ts.map