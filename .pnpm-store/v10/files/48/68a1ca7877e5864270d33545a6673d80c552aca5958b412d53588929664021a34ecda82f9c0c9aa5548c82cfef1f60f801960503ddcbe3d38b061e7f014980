/**
 * An object whose all properties have the same type.
 */
export declare type Dictionary<T = any> = {
    [key: string]: T;
};
/**
 * Returns the keys of T that match Dictionary<U> and are not arrays.
 */
export declare type DictionaryKeyof<T, U = any> = Exclude<KeyOf<T, Dictionary<U>>, KeyOf<T, any[]>>;
/**
 * Returns the keys of T that match U.
 */
export declare type KeyOf<T, U> = Exclude<{
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T], undefined>;
/**
 * An array whose first element is not undefined.
 */
export declare type NotEmptyArray<T = any> = [T, ...T[]];
/**
 * Returns the type of a Dictionary or array values.
 */
export declare type ValueOf<T> = T extends (infer U)[] ? U : T[keyof T];
/**
 * Typing wrapper around assert.notStrictEqual()
 */
export declare function assertNotStrictEqual<N, T>(actual: T | N, expected: N, message?: string | Error): asserts actual is Exclude<T, N>;
/**
 * Asserts actual is a single key, not a key array or a key map.
 */
export declare function assertSingleKey(actual: string | string[] | Dictionary): asserts actual is string;
/**
 * Typing wrapper around Object.keys()
 */
export declare function objectKeys<T>(object: T): (keyof T)[];
