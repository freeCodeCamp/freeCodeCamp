import { Callback } from './utils';
/** Determines whether the argument is a non-empty string. */
export declare function isNonEmptyString(data: unknown): boolean;
/** Determines whether the argument is a *valid* Date. */
export declare function isDate(data: unknown): boolean;
/** Determines whether the argument is the empty string. */
export declare function isEmptyString(data: unknown): boolean;
/** Determines whether the argument is a string. */
export declare function isString(data: unknown): boolean;
/** Determines whether the string representation of the argument is "[object Object]". */
export declare function isObject(data: unknown): boolean;
/** Determines whether the argument is an integer. */
export declare function isInteger(data: unknown): boolean;
/**
 * When the first argument is false, an error is created with the given message. If a callback is
 * provided, the error is passed to the callback, otherwise the error is thrown.
 */
export declare function validate(bool: boolean, cbOrMessage?: Callback<never> | string, message?: string): void;
/**
 * Represents a validation error.
 * @public
 */
export declare class ParameterError extends Error {
}
