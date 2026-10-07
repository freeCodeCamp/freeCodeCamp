import type { WrappedFunction } from '../types/wrappedfunction';
/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * If the method on the passed object is not a function, the wrapper will not be applied.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */
export declare function fill(source: {
    [key: string]: any;
}, name: string, replacementFactory: (...args: any[]) => any): void;
/**
 * Defines a non-enumerable property on the given object.
 *
 * @param obj The object on which to set the property
 * @param name The name of the property to be set
 * @param value The value to which to set the property
 */
export declare function addNonEnumerableProperty(obj: object, name: string | symbol, value: unknown): void;
/**
 * Remembers the original function on the wrapped function and
 * patches up the prototype.
 *
 * @param wrapped the wrapper function
 * @param original the original function that gets wrapped
 */
export declare function markFunctionWrapped(wrapped: WrappedFunction, original: WrappedFunction): void;
/**
 * Wrap a method on an object by name, only if it is not already wrapped.
 *
 * Note: to set the wrapped method as a non-enumerable property, pass
 * false as the `enumerable` argument. This could be detected, but only
 * by either walking up the prototype chain, or iterating over all fields
 * in a `for(in)` loop. Neither are an acceptable performance impact for
 * the rare case where we might patch a non-enumerable method.
 */
export declare function wrapMethod<O extends {}, T extends string & keyof O>(obj: O, field: T, wrapped: WrappedFunction, enumerable?: boolean): void;
/**
 * This extracts the original function if available.  See
 * `markFunctionWrapped` for more information.
 *
 * @param func the function to unwrap
 * @returns the unwrapped version of the function if available.
 */
export declare function getOriginalFunction<T extends Function>(func: WrappedFunction<T>): T | undefined;
/**
 * Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
 * non-enumerable properties attached.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 * @returns An Event or Error turned into an object - or the value argument itself, when value is neither an Event nor
 *  an Error.
 */
export declare function convertToPlainObject<V>(value: V): Record<string, unknown> | V;
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
export declare function extractExceptionKeysForMessage(exception: Record<string, unknown>): string;
/**
 * Given any object, return a new object having removed all fields whose value was `undefined`.
 * Works recursively on objects and arrays.
 *
 * Attention: This function keeps circular references in the returned object.
 *
 * @deprecated This function is no longer used by the SDK and will be removed in a future major version.
 */
export declare function dropUndefinedKeys<T>(inputValue: T): T;
/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */
export declare function objectify(wat: unknown): typeof Object;
//# sourceMappingURL=object.d.ts.map