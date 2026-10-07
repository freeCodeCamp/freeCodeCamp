/**
 * A callback function that accepts an error or a result.
 * @public
 */
export interface Callback<T> {
    (error: Error, result?: never): void;
    (error: null, result: T): void;
}
/**
 * A callback function that only accepts an error.
 * @public
 */
export interface ErrorCallback {
    (error: Error | null): void;
}
/**
 * The inverse of NonNullable<T>.
 * @public
 */
export type Nullable<T> = T | null | undefined;
/** Wrapped `Object.prototype.toString`, so that you don't need to remember to use `.call()`. */
export declare const objectToString: (obj: unknown) => string;
/** Safely converts any value to string, using the value's own `toString` when available. */
export declare const safeToString: (val: unknown) => string;
/** Utility object for promise/callback interop. */
export interface PromiseCallback<T> {
    promise: Promise<T>;
    callback: Callback<T>;
    resolve: (value: T) => Promise<T>;
    reject: (error: Error) => Promise<T>;
}
/** Converts a callback into a utility object where either a callback or a promise can be used. */
export declare function createPromiseCallback<T>(cb?: Callback<T>): PromiseCallback<T>;
export declare function inOperator<K extends string, T extends object>(k: K, o: T): o is T & Record<K, unknown>;
