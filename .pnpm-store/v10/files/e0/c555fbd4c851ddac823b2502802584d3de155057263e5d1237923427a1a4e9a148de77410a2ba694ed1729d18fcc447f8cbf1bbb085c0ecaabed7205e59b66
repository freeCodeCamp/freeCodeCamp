import { HookifiedOptions, Hookified } from 'hookified';
import { Keyv } from 'keyv';
export { Keyv } from 'keyv';
export { Hashery } from 'hashery';

type MapInterfacee<K, V> = {
    readonly size: number;
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, key: K, map: MapInterfacee<K, V>) => void, thisArg?: any): void;
    entries(): IterableIterator<[K, V]>;
    keys(): IterableIterator<K>;
    values(): IterableIterator<V>;
    [Symbol.iterator](): IterableIterator<[K, V]>;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): Map<K, V>;
};
type StoreHashFunction = (key: string, storeSize: number) => number;
declare function defaultHashFunction(key: string, storeSize: number): number;
type BigMapOptions = {
    /**
     * Optional size of the store. The default is 4 maps objects.
     * @default 4
     */
    storeSize?: number;
    /**
     * Optional hash function to use for storing keys.
     * @default undefined
     */
    storeHashFunction?: StoreHashFunction;
} & HookifiedOptions;
declare class BigMap<K, V> extends Hookified implements MapInterfacee<K, V> {
    private _storeSize;
    private _store;
    private _storeHashFunction?;
    /**
     * Creates an instance of BigMap.
     * @param {BigMapOptions<K, V>} [options] - Optional configuration options for the BigMap.
     */
    constructor(options?: BigMapOptions);
    /**
     * Gets the number of maps in the store.
     * @returns {number} The number of maps in the store.
     */
    get storeSize(): number;
    /**
     * Sets the number of maps in the store. If the size is less than 1, an error is thrown.
     * If you change the store size it will clear all entries.
     * @param {number} size - The new size of the store.
     * @throws {Error} If the size is less than 1.
     */
    set storeSize(size: number);
    /**
     * Gets the hash function used for storing keys.
     * @returns {StoreHashFunction | undefined} The hash function used for storing keys, or undefined if not set.
     */
    get storeHashFunction(): StoreHashFunction | undefined;
    /**
     * Sets the hash function used for storing keys.
     * @param {StoreHashFunction} hashFunction - The hash function to use for storing keys.
     */
    set storeHashFunction(hashFunction: StoreHashFunction | undefined);
    /**
     * Gets the store, which is an array of maps.
     * @returns {Array<Map<K, V>>} The array of maps in the store.
     */
    get store(): Array<Map<K, V>>;
    /**
     * Gets the map at the specified index in the store.
     * @param {number} index - The index of the map to retrieve.
     * @returns {Map<K, V>} The map at the specified index.
     */
    getStoreMap(index: number): Map<K, V>;
    /**
     * Initializes the store with empty maps.
     * This method is called when the BigMap instance is created.
     */
    initStore(): void;
    /**
     * Gets the store for a specific key.
     * The store is determined by applying the hash function to the key and the store size.
     * If the hash function is not set, it defaults to using the default hash function.
     * @param key - The key for which to get the store.
     * @returns The store for the specified key.
     */
    getStore(key: K): Map<K, V>;
    /**
     * Returns an iterable of key-value pairs in the map.
     * @returns {IterableIterator<[K, V]>} An iterable of key-value pairs in the map.
     */
    entries(): IterableIterator<[K, V]>;
    /**
     * Returns an iterable of keys in the map.
     * @returns {IterableIterator<K>} An iterable of keys in the map.
     */
    keys(): IterableIterator<K>;
    /**
     * Returns an iterable of values in the map.
     * @returns {IterableIterator<V>} An iterable of values in the map.
     */
    values(): IterableIterator<V>;
    /**
     * Returns an iterator that iterates over the key-value pairs in the map.
     * @returns {IterableIterator<[K, V]>} An iterator that iterates over the key-value pairs in the map.
     */
    [Symbol.iterator](): IterableIterator<[K, V]>;
    /**
     * Clears all entries in the map.
     * @returns {void} This method does not return a value.
     */
    clear(): void;
    /**
     * Deletes a key-value pair from the map.
     * @param {K} key - The key of the entry to delete.
     * @returns {boolean} Returns true if the entry was deleted, false if the key was not found.
     */
    delete(key: K): boolean;
    /**
     * Calls a provided callback function once for each key-value pair in the map.
     * @param {function} callbackfn - The function to execute for each key-value pair.
     * @param {any} [thisArg] - An optional value to use as `this` when executing the callback.
     */
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    /**
     * Gets the value associated with the specified key.
     * @param {K} key - The key of the entry to get.
     * @returns {V | undefined} The value associated with the key, or undefined if the key does not exist.
     */
    get(key: K): V | undefined;
    /**
     * Checks if the map contains a key.
     * @param {K} key - The key to check for existence.
     * @returns {boolean} Returns true if the key exists, false otherwise.
     */
    has(key: K): boolean;
    /**
     * Sets the value for a key in the map.
     * @param {K} key - The key of the entry to set.
     * @param {V} value - The value to set for the entry.
     * @returns {Map<K, V>} The map instance.
     */
    set(key: K, value: V): Map<K, V>;
    /**
     * Gets the number of entries in the map.
     * @returns {number} The number of entries in the map.
     */
    get size(): number;
}
/**
 * Will create a Keyv instance with the BigMap adapter. This will also set the namespace and useKeyPrefix to false.
 * @param {BigMapOptions} options - Options for the BigMap adapter such as storeSize and storeHashFunction.
 * @returns {Keyv} - Keyv instance with the BigMap adapter
 */
declare function createKeyv<K = string, V = unknown>(options?: BigMapOptions): Keyv;

export { BigMap, type BigMapOptions, type MapInterfacee, type StoreHashFunction, createKeyv, defaultHashFunction };
