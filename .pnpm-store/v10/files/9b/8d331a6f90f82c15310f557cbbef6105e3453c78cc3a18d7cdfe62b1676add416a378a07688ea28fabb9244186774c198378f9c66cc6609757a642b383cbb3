/**
 * Use this symbol to define a custom serializer for your instances.
 * Serializer must be a function returning a string (see {@link WithToStringMethod}).
 *
 * @remarks Since 2.17.0
 * @public
 */
export declare const toStringMethod: unique symbol;
/**
 * Interface to implement for {@link toStringMethod}
 *
 * @remarks Since 2.17.0
 * @public
 */
export type WithToStringMethod = {
    [toStringMethod]: () => string;
};
/**
 * Check if an instance implements {@link WithToStringMethod}
 *
 * @remarks Since 2.17.0
 * @public
 */
export declare function hasToStringMethod<T>(instance: T): instance is T & WithToStringMethod;
/**
 * Use this symbol to define a custom serializer for your instances.
 * Serializer must be a function returning a promise of string (see {@link WithAsyncToStringMethod}).
 *
 * Please note that:
 * 1. It will only be useful for asynchronous properties.
 * 2. It has to return barely instantly.
 *
 * @remarks Since 2.17.0
 * @public
 */
export declare const asyncToStringMethod: unique symbol;
/**
 * Interface to implement for {@link asyncToStringMethod}
 *
 * @remarks Since 2.17.0
 * @public
 */
export type WithAsyncToStringMethod = {
    [asyncToStringMethod]: () => Promise<string>;
};
/**
 * Check if an instance implements {@link WithAsyncToStringMethod}
 *
 * @remarks Since 2.17.0
 * @public
 */
export declare function hasAsyncToStringMethod<T>(instance: T): instance is T & WithAsyncToStringMethod;
/**
 * Convert any value to its fast-check string representation
 *
 * @param value - Value to be converted into a string
 *
 * @remarks Since 1.15.0
 * @public
 */
export declare function stringify<Ts>(value: Ts): string;
/**
 * Convert any value to its fast-check string representation
 *
 * This asynchronous version is also able to dig into the status of Promise
 *
 * @param value - Value to be converted into a string
 *
 * @remarks Since 2.17.0
 * @public
 */
export declare function asyncStringify<Ts>(value: Ts): Promise<string>;
