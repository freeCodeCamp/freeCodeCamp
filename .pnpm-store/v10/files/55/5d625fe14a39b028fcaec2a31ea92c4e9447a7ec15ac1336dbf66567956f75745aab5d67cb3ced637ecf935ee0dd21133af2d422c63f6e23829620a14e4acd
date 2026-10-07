type Key = string | number | symbol;
/**
 * SetArray acts like a `Set` (allowing only one occurrence of a string `key`), but provides the
 * index of the `key` in the backing array.
 *
 * This is designed to allow synchronizing a second array with the contents of the backing array,
 * like how in a sourcemap `sourcesContent[i]` is the source content associated with `source[i]`,
 * and there are never duplicates.
 */
export declare class SetArray<T extends Key = Key> {
    private _indexes;
    array: readonly T[];
    constructor();
}
/**
 * Gets the index associated with `key` in the backing array, if it is already present.
 */
export declare function get<T extends Key>(setarr: SetArray<T>, key: T): number | undefined;
/**
 * Puts `key` into the backing array, if it is not already present. Returns
 * the index of the `key` in the backing array.
 */
export declare function put<T extends Key>(setarr: SetArray<T>, key: T): number;
/**
 * Pops the last added item out of the SetArray.
 */
export declare function pop<T extends Key>(setarr: SetArray<T>): void;
/**
 * Removes the key, if it exists in the set.
 */
export declare function remove<T extends Key>(setarr: SetArray<T>, key: T): void;
export {};
