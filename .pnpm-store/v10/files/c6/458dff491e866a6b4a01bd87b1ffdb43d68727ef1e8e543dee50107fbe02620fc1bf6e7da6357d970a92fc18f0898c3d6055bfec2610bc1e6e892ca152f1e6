import type { BaseToneOptions } from "../Tone.js";
export declare function deepMerge<T>(target: T): T;
export declare function deepMerge<T, U>(target: T, source1: U): T & U;
export declare function deepMerge<T, U, V>(target: T, source1: U, source2: V): T & U & V;
export declare function deepMerge<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
/**
 * Returns true if the two arrays have the same value for each of the elements
 */
export declare function deepEquals<T>(arrayA: T[], arrayB: T[]): boolean;
/**
 * Convert an args array into an object.
 * @internal
 */
export declare function optionsFromArguments<T extends object>(defaults: T, argsArray: IArguments, keys?: Array<keyof T>, objKey?: keyof T): T;
/**
 * Return this instances default values by calling Constructor.getDefaults()
 */
export declare function getDefaultsFromInstance<T>(instance: T): BaseToneOptions;
/**
 * Returns the fallback if the given object is undefined.
 * Take an array of arguments and return a formatted options object.
 * @internal
 */
export declare function defaultArg<T>(given: T, fallback: T): T;
/**
 * Remove all of the properties belonging to omit from obj.
 */
export declare function omitFromObject<T extends object, O extends string[]>(obj: T, omit: O): Omit<T, keyof O>;
