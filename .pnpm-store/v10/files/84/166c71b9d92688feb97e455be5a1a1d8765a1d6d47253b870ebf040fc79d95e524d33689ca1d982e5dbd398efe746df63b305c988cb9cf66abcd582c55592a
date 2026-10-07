/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const ConfigErrorTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type ConfigErrorTypeId = typeof ConfigErrorTypeId;
/**
 * The possible ways that loading configuration data may fail.
 *
 * @since 2.0.0
 * @category models
 */
export type ConfigError = And | Or | InvalidData | MissingData | SourceUnavailable | Unsupported;
/**
 * @since 2.0.0
 */
export declare namespace ConfigError {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Proto {
        readonly _tag: "ConfigError";
        readonly [ConfigErrorTypeId]: ConfigErrorTypeId;
    }
    /**
     * @since 2.0.0
     * @category models
     */
    type Reducer<C, Z> = ConfigErrorReducer<C, Z>;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface ConfigErrorReducer<in C, in out Z> {
    andCase(context: C, left: Z, right: Z): Z;
    orCase(context: C, left: Z, right: Z): Z;
    invalidDataCase(context: C, path: Array<string>, message: string): Z;
    missingDataCase(context: C, path: Array<string>, message: string): Z;
    sourceUnavailableCase(context: C, path: Array<string>, message: string, cause: Cause.Cause<unknown>): Z;
    unsupportedCase(context: C, path: Array<string>, message: string): Z;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface And extends ConfigError.Proto {
    readonly _op: "And";
    readonly left: ConfigError;
    readonly right: ConfigError;
    readonly message: string;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Or extends ConfigError.Proto {
    readonly _op: "Or";
    readonly left: ConfigError;
    readonly right: ConfigError;
    readonly message: string;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface InvalidData extends ConfigError.Proto {
    readonly _op: "InvalidData";
    readonly path: Array<string>;
    readonly message: string;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface MissingData extends ConfigError.Proto {
    readonly _op: "MissingData";
    readonly path: Array<string>;
    readonly message: string;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface SourceUnavailable extends ConfigError.Proto {
    readonly _op: "SourceUnavailable";
    readonly path: Array<string>;
    readonly message: string;
    readonly cause: Cause.Cause<unknown>;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Unsupported extends ConfigError.Proto {
    readonly _op: "Unsupported";
    readonly path: Array<string>;
    readonly message: string;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Options {
    readonly pathDelim: string;
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const And: (self: ConfigError, that: ConfigError) => ConfigError;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Or: (self: ConfigError, that: ConfigError) => ConfigError;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const MissingData: (path: Array<string>, message: string, options?: Options) => ConfigError;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const InvalidData: (path: Array<string>, message: string, options?: Options) => ConfigError;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const SourceUnavailable: (path: Array<string>, message: string, cause: Cause.Cause<unknown>, options?: Options) => ConfigError;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const Unsupported: (path: Array<string>, message: string, options?: Options) => ConfigError;
/**
 * Returns `true` if the specified value is a `ConfigError`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isConfigError: (u: unknown) => u is ConfigError;
/**
 * Returns `true` if the specified `ConfigError` is an `And`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isAnd: (self: ConfigError) => self is And;
/**
 * Returns `true` if the specified `ConfigError` is an `Or`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isOr: (self: ConfigError) => self is Or;
/**
 * Returns `true` if the specified `ConfigError` is an `InvalidData`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isInvalidData: (self: ConfigError) => self is InvalidData;
/**
 * Returns `true` if the specified `ConfigError` is an `MissingData`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isMissingData: (self: ConfigError) => self is MissingData;
/**
 * Returns `true` if the specified `ConfigError` contains only `MissingData` errors, `false` otherwise.
 *
 * @since 2.0.0
 * @categer getters
 */
export declare const isMissingDataOnly: (self: ConfigError) => boolean;
/**
 * Returns `true` if the specified `ConfigError` is a `SourceUnavailable`,
 * `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isSourceUnavailable: (self: ConfigError) => self is SourceUnavailable;
/**
 * Returns `true` if the specified `ConfigError` is an `Unsupported`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isUnsupported: (self: ConfigError) => self is Unsupported;
/**
 * @since 2.0.0
 * @category utils
 */
export declare const prefixed: {
    /**
     * @since 2.0.0
     * @category utils
     */
    (prefix: Array<string>): (self: ConfigError) => ConfigError;
    /**
     * @since 2.0.0
     * @category utils
     */
    (self: ConfigError, prefix: Array<string>): ConfigError;
};
/**
 * @since 2.0.0
 * @category folding
 */
export declare const reduceWithContext: {
    /**
     * @since 2.0.0
     * @category folding
     */
    <C, Z>(context: C, reducer: ConfigErrorReducer<C, Z>): (self: ConfigError) => Z;
    /**
     * @since 2.0.0
     * @category folding
     */
    <C, Z>(self: ConfigError, context: C, reducer: ConfigErrorReducer<C, Z>): Z;
};
//# sourceMappingURL=ConfigError.d.ts.map