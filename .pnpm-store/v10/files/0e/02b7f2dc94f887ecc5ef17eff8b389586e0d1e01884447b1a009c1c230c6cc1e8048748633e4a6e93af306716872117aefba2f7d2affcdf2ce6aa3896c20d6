import { Primitive } from '../types/misc';
import { ParameterizedString } from '../types/parameterize';
import { PolymorphicEvent } from '../types/polymorphics';
import { VNode, VueViewModel } from '../types/vue';
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export declare function isError(wat: unknown): wat is Error;
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export declare function isErrorEvent(wat: unknown): boolean;
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export declare function isDOMError(wat: unknown): boolean;
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export declare function isDOMException(wat: unknown): boolean;
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export declare function isString(wat: unknown): wat is string;
/**
 * Checks whether given string is parameterized
 * {@link isParameterizedString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export declare function isParameterizedString(wat: unknown): wat is ParameterizedString;
/**
 * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export declare function isPrimitive(wat: unknown): wat is Primitive;
/**
 * Checks whether given value's type is an object literal, or a class instance.
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export declare function isPlainObject(wat: unknown): wat is Record<string, unknown>;
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export declare function isEvent(wat: unknown): wat is PolymorphicEvent;
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 * @deprecated This is browser-specific and will be removed from `@sentry/core` in a future major version.
 * Import `isElement` from `@sentry-internal/browser-utils` instead.
 */
export declare function isElement(wat: unknown): boolean;
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
export declare function isRegExp(wat: unknown): wat is RegExp;
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
export declare function isThenable(wat: any): wat is PromiseLike<any>;
/**
 * Checks whether given value's type is a React SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 * @deprecated This is React-specific and will be removed from `@sentry/core` in a future major version.
 * Use the equivalent helper that ships with `@sentry/react` instead.
 */
export declare function isSyntheticEvent(wat: unknown): boolean;
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
export declare function isInstanceOf<T>(wat: any, base: any): wat is T;
/**
 * Checks whether given value's type is a Vue ViewModel or a VNode.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 * @deprecated This is Vue-specific and will be removed from `@sentry/core` in a future major version.
 * Use the equivalent helper that ships with `@sentry/vue` instead.
 */
export declare function isVueViewModel(wat: unknown): wat is VueViewModel | VNode;
/**
 * Checks whether the given parameter is a Standard Web API Request instance.
 *
 * Returns false if Request is not available in the current runtime.
 */
export declare function isRequest(request: unknown): request is Request;
//# sourceMappingURL=is.d.ts.map
