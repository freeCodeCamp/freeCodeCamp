/**
 * Determines the type of the given collection, or returns false.
 *
 * @param {unknown} value The potential collection
 * @returns {'Map' | 'Set' | 'WeakMap' | 'WeakSet' | false} 'Map' | 'Set' | 'WeakMap' | 'WeakSet' | false
 */
declare function whichCollection<K, V>(value: Map<K, V>): 'Map';
declare function whichCollection<T>(value: Set<T>): 'Set';
declare function whichCollection<K extends WeakKey, V>(value: WeakMap<K, V>): 'WeakMap';
declare function whichCollection<T extends WeakKey>(value: WeakSet<T>): 'WeakSet';
declare function whichCollection(value: null | undefined | boolean | number | bigint | symbol | unknown): false;

export = whichCollection;
