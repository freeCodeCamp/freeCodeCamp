/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Immutable data encourages pure functions (data-in, data-out) and lends itself
 * to much simpler application development and enabling techniques from
 * functional programming such as lazy evaluation.
 *
 * While designed to bring these powerful functional concepts to JavaScript, it
 * presents an Object-Oriented API familiar to Javascript engineers and closely
 * mirroring that of Array, Map, and Set. It is easy and efficient to convert to
 * and from plain Javascript types.

 * Note: all examples are presented in [ES6][]. To run in all browsers, they
 * need to be translated to ES3. For example:
 *
 *     // ES6
 *     foo.map(x => x * x);
 *     // ES3
 *     foo.map(function (x) { return x * x; });
 *
 * [ES6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla
 */

declare module Immutable {

  /**
   * Deeply converts plain JS objects and arrays to Immutable Maps and Lists.
   *
   * If a `reviver` is optionally provided, it will be called with every
   * collection as a Seq (beginning with the most nested collections
   * and proceeding to the top-level collection itself), along with the key
   * refering to each collection and the parent JS object provided as `this`.
   * For the top level, object, the key will be `""`. This `reviver` is expected
   * to return a new Immutable Iterable, allowing for custom conversions from
   * deep JS objects.
   *
   * This example converts JSON to List and OrderedMap:
   *
   *     Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40}, function (key, value) {
   *       var isIndexed = Immutable.Iterable.isIndexed(value);
   *       return isIndexed ? value.toList() : value.toOrderedMap();
   *     });
   *
   *     // true, "b", {b: [10, 20, 30]}
   *     // false, "a", {a: {b: [10, 20, 30]}, c: 40}
   *     // false, "", {"": {a: {b: [10, 20, 30]}, c: 40}}
   *
   * If `reviver` is not provided, the default behavior will convert Arrays into
   * Lists and Objects into Maps.
   *
   * `reviver` acts similarly to the [same parameter in `JSON.parse`][1].
   *
   * `Immutable.fromJS` is conservative in it's conversion. It will only convert
   * arrays which pass `Array.isArray` to Lists, and only raw objects (no custom
   * prototype) to Map.
   *
   * Keep in mind, when using JS objects to construct Immutable Maps, that
   * JavaScript Object properties are always strings, even if written in a
   * quote-less shorthand, while Immutable Maps accept keys of any type.
   *
   * ```js
   * var obj = { 1: "one" };
   * Object.keys(obj); // [ "1" ]
   * obj["1"]; // "one"
   * obj[1];   // "one"
   *
   * var map = Map(obj);
   * map.get("1"); // "one"
   * map.get(1);   // undefined
   * ```
   *
   * Property access for JavaScript Objects first converts the key to a string,
   * but since Immutable Map keys can be of any type the argument to `get()` is
   * not altered.
   *
   * [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Example.3A_Using_the_reviver_parameter
   *      "Using the reviver parameter"
   */
  export function fromJS(
    json: any,
    reviver?: (k: any, v: Iterable<any, any>) => any
  ): any;


  /**
   * Value equality check with semantics similar to `Object.is`, but treats
   * Immutable `Iterable`s as values, equal if the second `Iterable` includes
   * equivalent values.
   *
   * It's used throughout Immutable when checking for equality, including `Map`
   * key equality and `Set` membership.
   *
   *     var map1 = Immutable.Map({a:1, b:1, c:1});
   *     var map2 = Immutable.Map({a:1, b:1, c:1});
   *     assert(map1 !== map2);
   *     assert(Object.is(map1, map2) === false);
   *     assert(Immutable.is(map1, map2) === true);
   *
   * Note: Unlike `Object.is`, `Immutable.is` assumes `0` and `-0` are the same
   * value, matching the behavior of ES6 Map key equality.
   */
  export function is(first: any, second: any): boolean;


  /**
   * Lists are ordered indexed dense collections, much like a JavaScript
   * Array.
   *
   * Lists are immutable and fully persistent with O(log32 N) gets and sets,
   * and O(1) push and pop.
   *
   * Lists implement Deque, with efficient addition and removal from both the
   * end (`push`, `pop`) and beginning (`unshift`, `shift`).
   *
   * Unlike a JavaScript Array, there is no distinction between an
   * "unset" index and an index set to `undefined`. `List#forEach` visits all
   * indices from 0 to size, regardless of if they were explicitly defined.
   */
  export module List {

    /**
     * True if the provided value is a List
     */
    function isList(maybeList: any): boolean;

    /**
     * Creates a new List containing `values`.
     */
    function of<T>(...values: T[]): List<T>;
  }

  /**
   * Create a new immutable List containing the values of the provided
   * iterable-like.
   */
  export function List<T>(): List<T>;
  export function List<T>(iter: Iterable.Indexed<T>): List<T>;
  export function List<T>(iter: Iterable.Set<T>): List<T>;
  export function List<K, V>(iter: Iterable.Keyed<K, V>): List</*[K,V]*/any>;
  export function List<T>(array: Array<T>): List<T>;
  export function List<T>(iterator: Iterator<T>): List<T>;
  export function List<T>(iterable: /*Iterable<T>*/Object): List<T>;


  export interface List<T> extends Collection.Indexed<T> {

    // Persistent changes

    /**
     * Returns a new List which includes `value` at `index`. If `index` already
     * exists in this List, it will be replaced.
     *
     * `index` may be a negative number, which indexes back from the end of the
     * List. `v.set(-1, "value")` sets the last item in the List.
     *
     * If `index` larger than `size`, the returned List's `size` will be large
     * enough to include the `index`.
     */
    set(index: number, value: T): List<T>;

    /**
     * Returns a new List which excludes this `index` and with a size 1 less
     * than this List. Values at indices above `index` are shifted down by 1 to
     * fill the position.
     *
     * This is synonymous with `list.splice(index, 1)`.
     *
     * `index` may be a negative number, which indexes back from the end of the
     * List. `v.delete(-1)` deletes the last item in the List.
     *
     * Note: `delete` cannot be safely used in IE8
     * @alias remove
     */
    delete(index: number): List<T>;
    remove(index: number): List<T>;

    /**
     * Returns a new List with `value` at `index` with a size 1 more than this
     * List. Values at indices above `index` are shifted over by 1.
     *
     * This is synonymous with `list.splice(index, 0, value)
     */
    insert(index: number, value: T): List<T>;

    /**
     * Returns a new List with 0 size and no values.
     */
    clear(): List<T>;

    /**
     * Returns a new List with the provided `values` appended, starting at this
     * List's `size`.
     */
    push(...values: T[]): List<T>;

    /**
     * Returns a new List with a size ones less than this List, excluding
     * the last index in this List.
     *
     * Note: this differs from `Array#pop` because it returns a new
     * List rather than the removed value. Use `last()` to get the last value
     * in this List.
     */
    pop(): List<T>;

    /**
     * Returns a new List with the provided `values` prepended, shifting other
     * values ahead to higher indices.
     */
    unshift(...values: T[]): List<T>;

    /**
     * Returns a new List with a size ones less than this List, excluding
     * the first index in this List, shifting all other values to a lower index.
     *
     * Note: this differs from `Array#shift` because it returns a new
     * List rather than the removed value. Use `first()` to get the first
     * value in this List.
     */
    shift(): List<T>;

    /**
     * Returns a new List with an updated value at `index` with the return
     * value of calling `updater` with the existing value, or `notSetValue` if
     * `index` was not set. If called with a single argument, `updater` is
     * called with the List itself.
     *
     * `index` may be a negative number, which indexes back from the end of the
     * List. `v.update(-1)` updates the last item in the List.
     *
     * @see `Map#update`
     */
    update(updater: (value: List<T>) => List<T>): List<T>;
    update(index: number, updater: (value: T) => T): List<T>;
    update(index: number, notSetValue: T, updater: (value: T) => T): List<T>;

    /**
     * @see `Map#merge`
     */
    merge(...iterables: Iterable.Indexed<T>[]): List<T>;
    merge(...iterables: Array<T>[]): List<T>;

    /**
     * @see `Map#mergeWith`
     */
    mergeWith(
      merger: (previous?: T, next?: T, key?: number) => T,
      ...iterables: Iterable.Indexed<T>[]
    ): List<T>;
    mergeWith(
      merger: (previous?: T, next?: T, key?: number) => T,
      ...iterables: Array<T>[]
    ): List<T>;

    /**
     * @see `Map#mergeDeep`
     */
    mergeDeep(...iterables: Iterable.Indexed<T>[]): List<T>;
    mergeDeep(...iterables: Array<T>[]): List<T>;

    /**
     * @see `Map#mergeDeepWith`
     */
    mergeDeepWith(
      merger: (previous?: T, next?: T, key?: number) => T,
      ...iterables: Iterable.Indexed<T>[]
    ): List<T>;
    mergeDeepWith(
      merger: (previous?: T, next?: T, key?: number) => T,
      ...iterables: Array<T>[]
    ): List<T>;

    /**
     * Returns a new List with size `size`. If `size` is less than this
     * List's size, the new List will exclude values at the higher indices.
     * If `size` is greater than this List's size, the new List will have
     * undefined values for the newly available indices.
     *
     * When building a new List and the final size is known up front, `setSize`
     * used in conjunction with `withMutations` may result in the more
     * performant construction.
     */
    setSize(size: number): List<T>;


    // Deep persistent changes

    /**
     * Returns a new List having set `value` at this `keyPath`. If any keys in
     * `keyPath` do not exist, a new immutable Map will be created at that key.
     *
     * Index numbers are used as keys to determine the path to follow in
     * the List.
     */
    setIn(keyPath: Array<any>, value: any): List<T>;
    setIn(keyPath: Iterable<any, any>, value: any): List<T>;

    /**
     * Returns a new List having removed the value at this `keyPath`. If any
     * keys in `keyPath` do not exist, no change will occur.
     *
     * @alias removeIn
     */
    deleteIn(keyPath: Array<any>): List<T>;
    deleteIn(keyPath: Iterable<any, any>): List<T>;
    removeIn(keyPath: Array<any>): List<T>;
    removeIn(keyPath: Iterable<any, any>): List<T>;

    /**
     * @see `Map#updateIn`
     */
    updateIn(
      keyPath: Array<any>,
      updater: (value: any) => any
    ): List<T>;
    updateIn(
      keyPath: Array<any>,
      notSetValue: any,
      updater: (value: any) => any
    ): List<T>;
    updateIn(
      keyPath: Iterable<any, any>,
      updater: (value: any) => any
    ): List<T>;
    updateIn(
      keyPath: Iterable<any, any>,
      notSetValue: any,
      updater: (value: any) => any
    ): List<T>;

    /**
     * @see `Map#mergeIn`
     */
    mergeIn(
      keyPath: Iterable<any, any>,
      ...iterables: Iterable.Indexed<T>[]
    ): List<T>;
    mergeIn(
      keyPath: Array<any>,
      ...iterables: Iterable.Indexed<T>[]
    ): List<T>;
    mergeIn(
      keyPath: Array<any>,
      ...iterables: Array<T>[]
    ): List<T>;

    /**
     * @see `Map#mergeDeepIn`
     */
    mergeDeepIn(
      keyPath: Iterable<any, any>,
      ...iterables: Iterable.Indexed<T>[]
    ): List<T>;
    mergeDeepIn(
      keyPath: Array<any>,
      ...iterables: Iterable.Indexed<T>[]
    ): List<T>;
    mergeDeepIn(
      keyPath: Array<any>,
      ...iterables: Array<T>[]
    ): List<T>;


    // Transient changes

    /**
     * Note: Not all methods can be used on a mutable collection or within
     * `withMutations`! Only `set`, `push`, `pop`, `shift`, `unshift` and
     * `merge` may be used mutatively.
     *
     * @see `Map#withMutations`
     */
    withMutations(mutator: (mutable: List<T>) => any): List<T>;

    /**
     * @see `Map#asMutable`
     */
    asMutable(): List<T>;

    /**
     * @see `Map#asImmutable`
     */
    asImmutable(): List<T>;
  }


  /**
   * Immutable Map is an unordered Iterable.Keyed of (key, value) pairs with
   * `O(log32 N)` gets and `O(log32 N)` persistent sets.
   *
   * Iteration order of a Map is undefined, however is stable. Multiple
   * iterations of the same Map will iterate in the same order.
   *
   * Map's keys can be of any type, and use `Immutable.is` to determine key
   * equality. This allows the use of any value (including NaN) as a key.
   *
   * Because `Immutable.is` returns equality based on value semantics, and
   * Immutable collections are treated as values, any Immutable collection may
   * be used as a key.
   *
   *     Map().set(List.of(1), 'listofone').get(List.of(1));
   *     // 'listofone'
   *
   * Any JavaScript object may be used as a key, however strict identity is used
   * to evaluate key equality. Two similar looking objects will represent two
   * different keys.
   *
   * Implemented by a hash-array mapped trie.
   */
  export module Map {

    /**
     * True if the provided value is a Map
     */
    function isMap(maybeMap: any): boolean;
  }

  /**
   * Creates a new Immutable Map.
   *
   * Created with the same key value pairs as the provided Iterable.Keyed or
   * JavaScript Object or expects an Iterable of [K, V] tuple entries.
   *
   *     var newMap = Map({key: "value"});
   *     var newMap = Map([["key", "value"]]);
   *
   * Keep in mind, when using JS objects to construct Immutable Maps, that
   * JavaScript Object properties are always strings, even if written in a
   * quote-less shorthand, while Immutable Maps accept keys of any type.
   *
   * ```js
   * var obj = { 1: "one" };
   * Object.keys(obj); // [ "1" ]
   * obj["1"]; // "one"
   * obj[1];   // "one"
   *
   * var map = Map(obj);
   * map.get("1"); // "one"
   * map.get(1);   // undefined
   * ```
   *
   * Property access for JavaScript Objects first converts the key to a string,
   * but since Immutable Map keys can be of any type the argument to `get()` is
   * not altered.
   */
  export function Map<K, V>(): Map<K, V>;
  export function Map<K, V>(iter: Iterable.Keyed<K, V>): Map<K, V>;
  export function Map<K, V>(iter: Iterable<any, /*[K,V]*/Array<any>>): Map<K, V>;
  export function Map<K, V>(array: Array</*[K,V]*/Array<any>>): Map<K, V>;
  export function Map<V>(obj: {[key: string]: V}): Map<string, V>;
  export function Map<K, V>(iterator: Iterator</*[K,V]*/Array<any>>): Map<K, V>;
  export function Map<K, V>(iterable: /*Iterable<[K,V]>*/Object): Map<K, V>;

  export interface Map<K, V> extends Collection.Keyed<K, V> {

    // Persistent changes

    /**
     * Returns a new Map also containing the new key, value pair. If an equivalent
     * key already exists in this Map, it will be replaced.
     */
    set(key: K, value: V): Map<K, V>;

    /**
     * Returns a new Map which excludes this `key`.
     *
     * Note: `delete` cannot be safely used in IE8, but is provided to mirror
     * the ES6 collection API.
     * @alias remove
     */
    delete(key: K): Map<K, V>;
    remove(key: K): Map<K, V>;

    /**
     * Returns a new Map containing no keys or values.
     */
    clear(): Map<K, V>;

    /**
     * Returns a new Map having updated the value at this `key` with the return
     * value of calling `updater` with the existing value, or `notSetValue` if
     * the key was not set. If called with only a single argument, `updater` is
     * called with the Map itself.
     *
     * Equivalent to: `map.set(key, updater(map.get(key, notSetValue)))`.
     */
    update(updater: (value: Map<K, V>) => Map<K, V>): Map<K, V>;
    update(key: K, updater: (value: V) => V): Map<K, V>;
    update(key: K, notSetValue: V, updater: (value: V) => V): Map<K, V>;

    /**
     * Returns a new Map resulting from merging the provided Iterables
     * (or JS objects) into this Map. In other words, this takes each entry of
     * each iterable and sets it on this Map.
     *
     * If any of the values provided to `merge` are not Iterable (would return
     * false for `Immutable.Iterable.isIterable`) then they are deeply converted
     * via `Immutable.fromJS` before being merged. However, if the value is an
     * Iterable but includes non-iterable JS objects or arrays, those nested
     * values will be preserved.
     *
     *     var x = Immutable.Map({a: 10, b: 20, c: 30});
     *     var y = Immutable.Map({b: 40, a: 50, d: 60});
     *     x.merge(y) // { a: 50, b: 40, c: 30, d: 60 }
     *     y.merge(x) // { b: 20, a: 10, d: 60, c: 30 }
     *
     */
    merge(...iterables: Iterable<K, V>[]): Map<K, V>;
    merge(...iterables: {[key: string]: V}[]): Map<string, V>;

    /**
     * Like `merge()`, `mergeWith()` returns a new Map resulting from merging
     * the provided Iterables (or JS objects) into this Map, but uses the
     * `merger` function for dealing with conflicts.
     *
     *     var x = Immutable.Map({a: 10, b: 20, c: 30});
     *     var y = Immutable.Map({b: 40, a: 50, d: 60});
     *     x.mergeWith((prev, next) => prev / next, y) // { a: 0.2, b: 0.5, c: 30, d: 60 }
     *     y.mergeWith((prev, next) => prev / next, x) // { b: 2, a: 5, d: 60, c: 30 }
     *
     */
    mergeWith(
      merger: (previous?: V, next?: V, key?: K) => V,
      ...iterables: Iterable<K, V>[]
    ): Map<K, V>;
    mergeWith(
      merger: (previous?: V, next?: V, key?: K) => V,
      ...iterables: {[key: string]: V}[]
    ): Map<string, V>;

    /**
     * Like `merge()`, but when two Iterables conflict, it merges them as well,
     * recursing deeply through the nested data.
     *
     *     var x = Immutable.fromJS({a: { x: 10, y: 10 }, b: { x: 20, y: 50 } });
     *     var y = Immutable.fromJS({a: { x: 2 }, b: { y: 5 }, c: { z: 3 } });
     *     x.mergeDeep(y) // {a: { x: 2, y: 10 }, b: { x: 20, y: 5 }, c: { z: 3 } }
     *
     */
    mergeDeep(...iterables: Iterable<K, V>[]): Map<K, V>;
    mergeDeep(...iterables: {[key: string]: V}[]): Map<string, V>;

    /**
     * Like `mergeDeep()`, but when two non-Iterables conflict, it uses the
     * `merger` function to determine the resulting value.
     *
     *     var x = Immutable.fromJS({a: { x: 10, y: 10 }, b: { x: 20, y: 50 } });
     *     var y = Immutable.fromJS({a: { x: 2 }, b: { y: 5 }, c: { z: 3 } });
     *     x.mergeDeepWith((prev, next) => prev / next, y)
     *     // {a: { x: 5, y: 10 }, b: { x: 20, y: 10 }, c: { z: 3 } }
     *
     */
    mergeDeepWith(
      merger: (previous?: V, next?: V, key?: K) => V,
      ...iterables: Iterable<K, V>[]
    ): Map<K, V>;
    mergeDeepWith(
      merger: (previous?: V, next?: V, key?: K) => V,
      ...iterables: {[key: string]: V}[]
    ): Map<string, V>;


    // Deep persistent changes

    /**
     * Returns a new Map having set `value` at this `keyPath`. If any keys in
     * `keyPath` do not exist, a new immutable Map will be created at that key.
     */
    setIn(keyPath: Array<any>, value: any): Map<K, V>;
    setIn(KeyPath: Iterable<any, any>, value: any): Map<K, V>;

    /**
     * Returns a new Map having removed the value at this `keyPath`. If any keys
     * in `keyPath` do not exist, no change will occur.
     *
     * @alias removeIn
     */
    deleteIn(keyPath: Array<any>): Map<K, V>;
    deleteIn(keyPath: Iterable<any, any>): Map<K, V>;
    removeIn(keyPath: Array<any>): Map<K, V>;
    removeIn(keyPath: Iterable<any, any>): Map<K, V>;

    /**
     * Returns a new Map having applied the `updater` to the entry found at the
     * keyPath.
     *
     * If any keys in `keyPath` do not exist, new Immutable `Map`s will
     * be created at those keys. If the `keyPath` does not already contain a
     * value, the `updater` function will be called with `notSetValue`, if
     * provided, otherwise `undefined`.
     *
     *     var data = Immutable.fromJS({ a: { b: { c: 10 } } });
     *     data = data.updateIn(['a', 'b', 'c'], val => val * 2);
     *     // { a: { b: { c: 20 } } }
     *
     * If the `updater` function returns the same value it was called with, then
     * no change will occur. This is still true if `notSetValue` is provided.
     *
     *     var data1 = Immutable.fromJS({ a: { b: { c: 10 } } });
     *     data2 = data1.updateIn(['x', 'y', 'z'], 100, val => val);
     *     assert(data2 === data1);
     *
     */
    updateIn(
      keyPath: Array<any>,
      updater: (value: any) => any
    ): Map<K, V>;
    updateIn(
      keyPath: Array<any>,
      notSetValue: any,
      updater: (value: any) => any
    ): Map<K, V>;
    updateIn(
      keyPath: Iterable<any, any>,
      updater: (value: any) => any
    ): Map<K, V>;
    updateIn(
      keyPath: Iterable<any, any>,
      notSetValue: any,
      updater: (value: any) => any
    ): Map<K, V>;

    /**
     * A combination of `updateIn` and `merge`, returning a new Map, but
     * performing the merge at a point arrived at by following the keyPath.
     * In other words, these two lines are equivalent:
     *
     *     x.updateIn(['a', 'b', 'c'], abc => abc.merge(y));
     *     x.mergeIn(['a', 'b', 'c'], y);
     *
     */
    mergeIn(
      keyPath: Iterable<any, any>,
      ...iterables: Iterable<K, V>[]
    ): Map<K, V>;
    mergeIn(
      keyPath: Array<any>,
      ...iterables: Iterable<K, V>[]
    ): Map<K, V>;
    mergeIn(
      keyPath: Array<any>,
      ...iterables: {[key: string]: V}[]
    ): Map<string, V>;

    /**
     * A combination of `updateIn` and `mergeDeep`, returning a new Map, but
     * performing the deep merge at a point arrived at by following the keyPath.
     * In other words, these two lines are equivalent:
     *
     *     x.updateIn(['a', 'b', 'c'], abc => abc.mergeDeep(y));
     *     x.mergeDeepIn(['a', 'b', 'c'], y);
     *
     */
    mergeDeepIn(
      keyPath: Iterable<any, any>,
      ...iterables: Iterable<K, V>[]
    ): Map<K, V>;
    mergeDeepIn(
      keyPath: Array<any>,
      ...iterables: Iterable<K, V>[]
    ): Map<K, V>;
    mergeDeepIn(
      keyPath: Array<any>,
      ...iterables: {[key: string]: V}[]
    ): Map<string, V>;


    // Transient changes

    /**
     * Every time you call one of the above functions, a new immutable Map is
     * created. If a pure function calls a number of these to produce a final
     * return value, then a penalty on performance and memory has been paid by
     * creating all of the intermediate immutable Maps.
     *
     * If you need to apply a series of mutations to produce a new immutable
     * Map, `withMutations()` creates a temporary mutable copy of the Map which
     * can apply mutations in a highly performant manner. In fact, this is
     * exactly how complex mutations like `merge` are done.
     *
     * As an example, this results in the creation of 2, not 4, new Maps:
     *
     *     var map1 = Immutable.Map();
     *     var map2 = map1.withMutations(map => {
     *       map.set('a', 1).set('b', 2).set('c', 3);
     *     });
     *     assert(map1.size === 0);
     *     assert(map2.size === 3);
     *
     * Note: Not all methods can be used on a mutable collection or within
     * `withMutations`! Only `set` and `merge` may be used mutatively.
     *
     */
    withMutations(mutator: (mutable: Map<K, V>) => any): Map<K, V>;

    /**
     * Another way to avoid creation of intermediate Immutable maps is to create
     * a mutable copy of this collection. Mutable copies *always* return `this`,
     * and thus shouldn't be used for equality. Your function should never return
     * a mutable copy of a collection, only use it internally to create a new
     * collection. If possible, use `withMutations` as it provides an easier to
     * use API.
     *
     * Note: if the collection is already mutable, `asMutable` returns itself.
     *
     * Note: Not all methods can be used on a mutable collection or within
     * `withMutations`! Only `set` and `merge` may be used mutatively.
     */
    asMutable(): Map<K, V>;

    /**
     * The yin to `asMutable`'s yang. Because it applies to mutable collections,
     * this operation is *mutable* and returns itself. Once performed, the mutable
     * copy has become immutable and can be safely returned from a function.
     */
    asImmutable(): Map<K, V>;
  }


  /**
   * A type of Map that has the additional guarantee that the iteration order of
   * entries will be the order in which they were set().
   *
   * The iteration behavior of OrderedMap is the same as native ES6 Map and
   * JavaScript Object.
   *
   * Note that `OrderedMap` are more expensive than non-ordered `Map` and may
   * consume more memory. `OrderedMap#set` is amortized O(log32 N), but not
   * stable.
   */

  export module OrderedMap {

    /**
     * True if the provided value is an OrderedMap.
     */
    function isOrderedMap(maybeOrderedMap: any): boolean;
  }

  /**
   * Creates a new Immutable OrderedMap.
   *
   * Created with the same key value pairs as the provided Iterable.Keyed or
   * JavaScript Object or expects an Iterable of [K, V] tuple entries.
   *
   * The iteration order of key-value pairs provided to this constructor will
   * be preserved in the OrderedMap.
   *
   *     var newOrderedMap = OrderedMap({key: "value"});
   *     var newOrderedMap = OrderedMap([["key", "value"]]);
   *
   */
  export function OrderedMap<K, V>(): OrderedMap<K, V>;
  export function OrderedMap<K, V>(iter: Iterable.Keyed<K, V>): OrderedMap<K, V>;
  export function OrderedMap<K, V>(iter: Iterable<any, /*[K,V]*/Array<any>>): OrderedMap<K, V>;
  export function OrderedMap<K, V>(array: Array</*[K,V]*/Array<any>>): OrderedMap<K, V>;
  export function OrderedMap<V>(obj: {[key: string]: V}): OrderedMap<string, V>;
  export function OrderedMap<K, V>(iterator: Iterator</*[K,V]*/Array<any>>): OrderedMap<K, V>;
  export function OrderedMap<K, V>(iterable: /*Iterable<[K,V]>*/Object): OrderedMap<K, V>;

  export interface OrderedMap<K, V> extends Map<K, V> {}


  /**
   * A Collection of unique values with `O(log32 N)` adds and has.
   *
   * When iterating a Set, the entries will be (value, value) pairs. Iteration
   * order of a Set is undefined, however is stable. Multiple iterations of the
   * same Set will iterate in the same order.
   *
   * Set values, like Map keys, may be of any type. Equality is determined using
   * `Immutable.is`, enabling Sets to uniquely include other Immutable
   * collections, custom value types, and NaN.
   */
  export module Set {

    /**
     * True if the provided value is a Set
     */
    function isSet(maybeSet: any): boolean;

    /**
     * Creates a new Set containing `values`.
     */
    function of<T>(...values: T[]): Set<T>;

    /**
     * `Set.fromKeys()` creates a new immutable Set containing the keys from
     * this Iterable or JavaScript Object.
     */
    function fromKeys<T>(iter: Iterable<T, any>): Set<T>;
    function fromKeys(obj: {[key: string]: any}): Set<string>;
  }

  /**
   * Create a new immutable Set containing the values of the provided
   * iterable-like.
   */
  export function Set<T>(): Set<T>;
  export function Set<T>(iter: Iterable.Set<T>): Set<T>;
  export function Set<T>(iter: Iterable.Indexed<T>): Set<T>;
  export function Set<K, V>(iter: Iterable.Keyed<K, V>): Set</*[K,V]*/any>;
  export function Set<T>(array: Array<T>): Set<T>;
  export function Set<T>(iterator: Iterator<T>): Set<T>;
  export function Set<T>(iterable: /*Iterable<T>*/Object): Set<T>;

  export interface Set<T> extends Collection.Set<T> {

    // Persistent changes

    /**
     * Returns a new Set which also includes this value.
     */
    add(value: T): Set<T>;

    /**
     * Returns a new Set which excludes this value.
     *
     * Note: `delete` cannot be safely used in IE8
     * @alias remove
     */
    delete(value: T): Set<T>;
    remove(value: T): Set<T>;

    /**
     * Returns a new Set containing no values.
     */
    clear(): Set<T>;

    /**
     * Returns a Set including any value from `iterables` that does not already
     * exist in this Set.
     * @alias merge
     */
    union(...iterables: Iterable<any, T>[]): Set<T>;
    union(...iterables: Array<T>[]): Set<T>;
    merge(...iterables: Iterable<any, T>[]): Set<T>;
    merge(...iterables: Array<T>[]): Set<T>;


    /**
     * Returns a Set which has removed any values not also contained
     * within `iterables`.
     */
    intersect(...iterables: Iterable<any, T>[]): Set<T>;
    intersect(...iterables: Array<T>[]): Set<T>;

    /**
     * Returns a Set excluding any values contained within `iterables`.
     */
    subtract(...iterables: Iterable<any, T>[]): Set<T>;
    subtract(...iterables: Array<T>[]): Set<T>;


    // Transient changes

    /**
     * Note: Not all methods can be used on a mutable collection or within
     * `withMutations`! Only `add` may be used mutatively.
     *
     * @see `Map#withMutations`
     */
    withMutations(mutator: (mutable: Set<T>) => any): Set<T>;

    /**
     * @see `Map#asMutable`
     */
    asMutable(): Set<T>;

    /**
     * @see `Map#asImmutable`
     */
    asImmutable(): Set<T>;
  }


  /**
   * A type of Set that has the additional guarantee that the iteration order of
   * values will be the order in which they were `add`ed.
   *
   * The iteration behavior of OrderedSet is the same as native ES6 Set.
   *
   * Note that `OrderedSet` are more expensive than non-ordered `Set` and may
   * consume more memory. `OrderedSet#add` is amortized O(log32 N), but not
   * stable.
   */
  export module OrderedSet {

    /**
     * True if the provided value is an OrderedSet.
     */
    function isOrderedSet(maybeOrderedSet: any): boolean;

    /**
     * Creates a new OrderedSet containing `values`.
     */
    function of<T>(...values: T[]): OrderedSet<T>;

    /**
     * `OrderedSet.fromKeys()` creates a new immutable OrderedSet containing
     * the keys from this Iterable or JavaScript Object.
     */
    function fromKeys<T>(iter: Iterable<T, any>): OrderedSet<T>;
    function fromKeys(obj: {[key: string]: any}): OrderedSet<string>;
  }

  /**
   * Create a new immutable OrderedSet containing the values of the provided
   * iterable-like.
   */
  export function OrderedSet<T>(): OrderedSet<T>;
  export function OrderedSet<T>(iter: Iterable.Set<T>): OrderedSet<T>;
  export function OrderedSet<T>(iter: Iterable.Indexed<T>): OrderedSet<T>;
  export function OrderedSet<K, V>(iter: Iterable.Keyed<K, V>): OrderedSet</*[K,V]*/any>;
  export function OrderedSet<T>(array: Array<T>): OrderedSet<T>;
  export function OrderedSet<T>(iterator: Iterator<T>): OrderedSet<T>;
  export function OrderedSet<T>(iterable: /*Iterable<T>*/Object): OrderedSet<T>;

  export interface OrderedSet<T> extends Set<T> {}


  /**
   * Stacks are indexed collections which support very efficient O(1) addition
   * and removal from the front using `unshift(v)` and `shift()`.
   *
   * For familiarity, Stack also provides `push(v)`, `pop()`, and `peek()`, but
   * be aware that they also operate on the front of the list, unlike List or
   * a JavaScript Array.
   *
   * Note: `reverse()` or any inherent reverse traversal (`reduceRight`,
   * `lastIndexOf`, etc.) is not efficient with a Stack.
   *
   * Stack is implemented with a Single-Linked List.
   */
  export module Stack {

    /**
     * True if the provided value is a Stack
     */
    function isStack(maybeStack: any): boolean;

    /**
     * Creates a new Stack containing `values`.
     */
    function of<T>(...values: T[]): Stack<T>;
  }

  /**
   * Create a new immutable Stack containing the values of the provided
   * iterable-like.
   *
   * The iteration order of the provided iterable is preserved in the
   * resulting `Stack`.
   */
  export function Stack<T>(): Stack<T>;
  export function Stack<T>(iter: Iterable.Indexed<T>): Stack<T>;
  export function Stack<T>(iter: Iterable.Set<T>): Stack<T>;
  export function Stack<K, V>(iter: Iterable.Keyed<K, V>): Stack</*[K,V]*/any>;
  export function Stack<T>(array: Array<T>): Stack<T>;
  export function Stack<T>(iterator: Iterator<T>): Stack<T>;
  export function Stack<T>(iterable: /*Iterable<T>*/Object): Stack<T>;

  export interface Stack<T> extends Collection.Indexed<T> {

    // Reading values

    /**
     * Alias for `Stack.first()`.
     */
    peek(): T;


    // Persistent changes

    /**
     * Returns a new Stack with 0 size and no values.
     */
    clear(): Stack<T>;

    /**
     * Returns a new Stack with the provided `values` prepended, shifting other
     * values ahead to higher indices.
     *
     * This is very efficient for Stack.
     */
    unshift(...values: T[]): Stack<T>;

    /**
     * Like `Stack#unshift`, but accepts a iterable rather than varargs.
     */
    unshiftAll(iter: Iterable<any, T>): Stack<T>;
    unshiftAll(iter: Array<T>): Stack<T>;

    /**
     * Returns a new Stack with a size ones less than this Stack, excluding
     * the first item in this Stack, shifting all other values to a lower index.
     *
     * Note: this differs from `Array#shift` because it returns a new
     * Stack rather than the removed value. Use `first()` or `peek()` to get the
     * first value in this Stack.
     */
    shift(): Stack<T>;

    /**
     * Alias for `Stack#unshift` and is not equivalent to `List#push`.
     */
    push(...values: T[]): Stack<T>;

    /**
     * Alias for `Stack#unshiftAll`.
     */
    pushAll(iter: Iterable<any, T>): Stack<T>;
    pushAll(iter: Array<T>): Stack<T>;

    /**
     * Alias for `Stack#shift` and is not equivalent to `List#pop`.
     */
    pop(): Stack<T>;


    // Transient changes

    /**
     * Note: Not all methods can be used on a mutable collection or within
     * `withMutations`! Only `set`, `push`, and `pop` may be used mutatively.
     *
     * @see `Map#withMutations`
     */
    withMutations(mutator: (mutable: Stack<T>) => any): Stack<T>;

    /**
     * @see `Map#asMutable`
     */
    asMutable(): Stack<T>;

    /**
     * @see `Map#asImmutable`
     */
    asImmutable(): Stack<T>;
  }


  /**
   * Returns a Seq.Indexed of numbers from `start` (inclusive) to `end`
   * (exclusive), by `step`, where `start` defaults to 0, `step` to 1, and `end` to
   * infinity. When `start` is equal to `end`, returns empty range.
   *
   *     Range() // [0,1,2,3,...]
   *     Range(10) // [10,11,12,13,...]
   *     Range(10,15) // [10,11,12,13,14]
   *     Range(10,30,5) // [10,15,20,25]
   *     Range(30,10,5) // [30,25,20,15]
   *     Range(30,30,5) // []
   *
   */
  export function Range(start?: number, end?: number, step?: number): Seq.Indexed<number>;


  /**
   * Returns a Seq.Indexed of `value` repeated `times` times. When `times` is
   * not defined, returns an infinite `Seq` of `value`.
   *
   *     Repeat('foo') // ['foo','foo','foo',...]
   *     Repeat('bar',4) // ['bar','bar','bar','bar']
   *
   */
  export function Repeat<T>(value: T, times?: number): Seq.Indexed<T>;


  /**
   * Creates a new Class which produces Record instances. A record is similar to
   * a JS object, but enforce a specific set of allowed string keys, and have
   * default values.
   *
   *     var ABRecord = Record({a:1, b:2})
   *     var myRecord = new ABRecord({b:3})
   *
   * Records always have a value for the keys they define. `remove`ing a key
   * from a record simply resets it to the default value for that key.
   *
   *     myRecord.size // 2
   *     myRecord.get('a') // 1
   *     myRecord.get('b') // 3
   *     myRecordWithoutB = myRecord.remove('b')
   *     myRecordWithoutB.get('b') // 2
   *     myRecordWithoutB.size // 2
   *
   * Values provided to the constructor not found in the Record type will
   * be ignored. For example, in this case, ABRecord is provided a key "x" even
   * though only "a" and "b" have been defined. The value for "x" will be
   * ignored for this record.
   *
   *     var myRecord = new ABRecord({b:3, x:10})
   *     myRecord.get('x') // undefined
   *
   * Because Records have a known set of string keys, property get access works
   * as expected, however property sets will throw an Error.
   *
   * Note: IE8 does not support property access. Only use `get()` when
   * supporting IE8.
   *
   *     myRecord.b // 3
   *     myRecord.b = 5 // throws Error
   *
   * Record Classes can be extended as well, allowing for custom methods on your
   * Record. This is not a common pattern in functional environments, but is in
   * many JS programs.
   *
   * Note: TypeScript does not support this type of subclassing.
   *
   *     class ABRecord extends Record({a:1,b:2}) {
   *       getAB() {
   *         return this.a + this.b;
   *       }
   *     }
   *
   *     var myRecord = new ABRecord({b: 3})
   *     myRecord.getAB() // 4
   *
   */
  export module Record {
    interface Class {
      new (): Map<string, any>;
      new (values: {[key: string]: any}): Map<string, any>;
      new (values: Iterable<string, any>): Map<string, any>; // deprecated

      (): Map<string, any>;
      (values: {[key: string]: any}): Map<string, any>;
      (values: Iterable<string, any>): Map<string, any>; // deprecated
    }
  }

  export function Record(
    defaultValues: {[key: string]: any}, name?: string
  ): Record.Class;


  /**
   * Represents a sequence of values, but may not be backed by a concrete data
   * structure.
   *
   * **Seq is immutable** — Once a Seq is created, it cannot be
   * changed, appended to, rearranged or otherwise modified. Instead, any
   * mutative method called on a `Seq` will return a new `Seq`.
   *
   * **Seq is lazy** — Seq does as little work as necessary to respond to any
   * method call. Values are often created during iteration, including implicit
   * iteration when reducing or converting to a concrete data structure such as
   * a `List` or JavaScript `Array`.
   *
   * For example, the following performs no work, because the resulting
   * Seq's values are never iterated:
   *
   *     var oddSquares = Immutable.Seq.of(1,2,3,4,5,6,7,8)
   *       .filter(x => x % 2).map(x => x * x);
   *
   * Once the Seq is used, it performs only the work necessary. In this
   * example, no intermediate data structures are ever created, filter is only
   * called three times, and map is only called once:
   *
   *     console.log(evenSquares.get(1)); // 9
   *
   * Seq allows for the efficient chaining of operations,
   * allowing for the expression of logic that can otherwise be very tedious:
   *
   *     Immutable.Seq({a:1, b:1, c:1})
   *       .flip().map(key => key.toUpperCase()).flip().toObject();
   *     // Map { A: 1, B: 1, C: 1 }
   *
   * As well as expressing logic that would otherwise be memory or time limited:
   *
   *     Immutable.Range(1, Infinity)
   *       .skip(1000)
   *       .map(n => -n)
   *       .filter(n => n % 2 === 0)
   *       .take(2)
   *       .reduce((r, n) => r * n, 1);
   *     // 1006008
   *
   * Seq is often used to provide a rich collection API to JavaScript Object.
   *
   *     Immutable.Seq({ x: 0, y: 1, z: 2 }).map(v => v * 2).toObject();
   *     // { x: 0, y: 2, z: 4 }
   */

  export module Seq {
    /**
     * True if `maybeSeq` is a Seq, it is not backed by a concrete
     * structure such as Map, List, or Set.
     */
    function isSeq(maybeSeq: any): boolean;

    /**
     * Returns a Seq of the values provided. Alias for `Seq.Indexed.of()`.
     */
    function of<T>(...values: T[]): Seq.Indexed<T>;


    /**
     * `Seq` which represents key-value pairs.
     */
    export module Keyed {}

    /**
     * Always returns a Seq.Keyed, if input is not keyed, expects an
     * iterable of [K, V] tuples.
     */
    export function Keyed<K, V>(): Seq.Keyed<K, V>;
    export function Keyed<K, V>(seq: Iterable.Keyed<K, V>): Seq.Keyed<K, V>;
    export function Keyed<K, V>(seq: Iterable<any, /*[K,V]*/any>): Seq.Keyed<K, V>;
    export function Keyed<K, V>(array: Array</*[K,V]*/any>): Seq.Keyed<K, V>;
    export function Keyed<V>(obj: {[key: string]: V}): Seq.Keyed<string, V>;
    export function Keyed<K, V>(iterator: Iterator</*[K,V]*/any>): Seq.Keyed<K, V>;
    export function Keyed<K, V>(iterable: /*Iterable<[K,V]>*/Object): Seq.Keyed<K, V>;

    export interface Keyed<K, V> extends Seq<K, V>, Iterable.Keyed<K, V> {

      /**
       * Returns itself
       */
      toSeq(): /*this*/Seq.Keyed<K, V>
    }


    /**
     * `Seq` which represents an ordered indexed list of values.
     */
    module Indexed {

      /**
       * Provides an Seq.Indexed of the values provided.
       */
      function of<T>(...values: T[]): Seq.Indexed<T>;
    }

    /**
     * Always returns Seq.Indexed, discarding associated keys and
     * supplying incrementing indices.
     */
    export function Indexed<T>(): Seq.Indexed<T>;
    export function Indexed<T>(seq: Iterable.Indexed<T>): Seq.Indexed<T>;
    export function Indexed<T>(seq: Iterable.Set<T>): Seq.Indexed<T>;
    export function Indexed<K, V>(seq: Iterable.Keyed<K, V>): Seq.Indexed</*[K,V]*/any>;
    export function Indexed<T>(array: Array<T>): Seq.Indexed<T>;
    export function Indexed<T>(iterator: Iterator<T>): Seq.Indexed<T>;
    export function Indexed<T>(iterable: /*Iterable<T>*/Object): Seq.Indexed<T>;

    export interface Indexed<T> extends Seq<number, T>, Iterable.Indexed<T> {

      /**
       * Returns itself
       */
      toSeq(): /*this*/Seq.Indexed<T>
    }


    /**
     * `Seq` which represents a set of values.
     *
     * Because `Seq` are often lazy, `Seq.Set` does not provide the same guarantee
     * of value uniqueness as the concrete `Set`.
     */
    export module Set {

      /**
       * Returns a Seq.Set of the provided values
       */
      function of<T>(...values: T[]): Seq.Set<T>;
    }

    /**
     * Always returns a Seq.Set, discarding associated indices or keys.
     */
    export function Set<T>(): Seq.Set<T>;
    export function Set<T>(seq: Iterable.Set<T>): Seq.Set<T>;
    export function Set<T>(seq: Iterable.Indexed<T>): Seq.Set<T>;
    export function Set<K, V>(seq: Iterable.Keyed<K, V>): Seq.Set</*[K,V]*/any>;
    export function Set<T>(array: Array<T>): Seq.Set<T>;
    export function Set<T>(iterator: Iterator<T>): Seq.Set<T>;
    export function Set<T>(iterable: /*Iterable<T>*/Object): Seq.Set<T>;

    export interface Set<T> extends Seq<T, T>, Iterable.Set<T> {

      /**
       * Returns itself
       */
      toSeq(): /*this*/Seq.Set<T>
    }

  }

  /**
   * Creates a Seq.
   *
   * Returns a particular kind of `Seq` based on the input.
   *
   *   * If a `Seq`, that same `Seq`.
   *   * If an `Iterable`, a `Seq` of the same kind (Keyed, Indexed, or Set).
   *   * If an Array-like, an `Seq.Indexed`.
   *   * If an Object with an Iterator, an `Seq.Indexed`.
   *   * If an Iterator, an `Seq.Indexed`.
   *   * If an Object, a `Seq.Keyed`.
   *
   */
  export function Seq<K, V>(): Seq<K, V>;
  export function Seq<K, V>(seq: Seq<K, V>): Seq<K, V>;
  export function Seq<K, V>(iterable: Iterable<K, V>): Seq<K, V>;
  export function Seq<T>(array: Array<T>): Seq.Indexed<T>;
  export function Seq<V>(obj: {[key: string]: V}): Seq.Keyed<string, V>;
  export function Seq<T>(iterator: Iterator<T>): Seq.Indexed<T>;
  export function Seq<T>(iterable: /*ES6Iterable<T>*/Object): Seq.Indexed<T>;

  export interface Seq<K, V> extends Iterable<K, V> {

    /**
     * Some Seqs can describe their size lazily. When this is the case,
     * size will be an integer. Otherwise it will be undefined.
     *
     * For example, Seqs returned from `map()` or `reverse()`
     * preserve the size of the original `Seq` while `filter()` does not.
     *
     * Note: `Range`, `Repeat` and `Seq`s made from `Array`s and `Object`s will
     * always have a size.
     */
    size: number/*?*/;


    // Force evaluation

    /**
     * Because Sequences are lazy and designed to be chained together, they do
     * not cache their results. For example, this map function is called a total
     * of 6 times, as each `join` iterates the Seq of three values.
     *
     *     var squares = Seq.of(1,2,3).map(x => x * x);
     *     squares.join() + squares.join();
     *
     * If you know a `Seq` will be used multiple times, it may be more
     * efficient to first cache it in memory. Here, the map function is called
     * only 3 times.
     *
     *     var squares = Seq.of(1,2,3).map(x => x * x).cacheResult();
     *     squares.join() + squares.join();
     *
     * Use this method judiciously, as it must fully evaluate a Seq which can be
     * a burden on memory and possibly performance.
     *
     * Note: after calling `cacheResult`, a Seq will always have a `size`.
     */
    cacheResult(): /*this*/Seq<K, V>;
  }

  /**
   * The `Iterable` is a set of (key, value) entries which can be iterated, and
   * is the base class for all collections in `immutable`, allowing them to
   * make use of all the Iterable methods (such as `map` and `filter`).
   *
   * Note: An iterable is always iterated in the same order, however that order
   * may not always be well defined, as is the case for the `Map` and `Set`.
   */
  export module Iterable {
    /**
     * True if `maybeIterable` is an Iterable, or any of its subclasses.
     */
    function isIterable(maybeIterable: any): boolean;

    /**
     * True if `maybeKeyed` is an Iterable.Keyed, or any of its subclasses.
     */
    function isKeyed(maybeKeyed: any): boolean;

    /**
     * True if `maybeIndexed` is a Iterable.Indexed, or any of its subclasses.
     */
    function isIndexed(maybeIndexed: any): boolean;

    /**
     * True if `maybeAssociative` is either a keyed or indexed Iterable.
     */
    function isAssociative(maybeAssociative: any): boolean;

    /**
     * True if `maybeOrdered` is an Iterable where iteration order is well
     * defined. True for Iterable.Indexed as well as OrderedMap and OrderedSet.
     */
    function isOrdered(maybeOrdered: any): boolean;


    /**
     * Keyed Iterables have discrete keys tied to each value.
     *
     * When iterating `Iterable.Keyed`, each iteration will yield a `[K, V]`
     * tuple, in other words, `Iterable#entries` is the default iterator for
     * Keyed Iterables.
     */
    export module Keyed {}

    /**
     * Creates an Iterable.Keyed
     *
     * Similar to `Iterable()`, however it expects iterable-likes of [K, V]
     * tuples if not constructed from a Iterable.Keyed or JS Object.
     */
    export function Keyed<K, V>(iter: Iterable.Keyed<K, V>): Iterable.Keyed<K, V>;
    export function Keyed<K, V>(iter: Iterable<any, /*[K,V]*/any>): Iterable.Keyed<K, V>;
    export function Keyed<K, V>(array: Array</*[K,V]*/any>): Iterable.Keyed<K, V>;
    export function Keyed<V>(obj: {[key: string]: V}): Iterable.Keyed<string, V>;
    export function Keyed<K, V>(iterator: Iterator</*[K,V]*/any>): Iterable.Keyed<K, V>;
    export function Keyed<K, V>(iterable: /*Iterable<[K,V]>*/Object): Iterable.Keyed<K, V>;

    export interface Keyed<K, V> extends Iterable<K, V> {

      /**
       * Returns Seq.Keyed.
       * @override
       */
      toSeq(): Seq.Keyed<K, V>;


      // Sequence functions

      /**
       * Returns a new Iterable.Keyed of the same type where the keys and values
       * have been flipped.
       *
       *     Seq({ a: 'z', b: 'y' }).flip() // { z: 'a', y: 'b' }
       *
       */
      flip(): /*this*/Iterable.Keyed<V, K>;

      /**
       * Returns a new Iterable.Keyed of the same type with keys passed through
       * a `mapper` function.
       *
       *     Seq({ a: 1, b: 2 })
       *       .mapKeys(x => x.toUpperCase())
       *     // Seq { A: 1, B: 2 }
       *
       */
      mapKeys<M>(
        mapper: (key?: K, value?: V, iter?: /*this*/Iterable.Keyed<K, V>) => M,
        context?: any
      ): /*this*/Iterable.Keyed<M, V>;

      /**
       * Returns a new Iterable.Keyed of the same type with entries
       * ([key, value] tuples) passed through a `mapper` function.
       *
       *     Seq({ a: 1, b: 2 })
       *       .mapEntries(([k, v]) => [k.toUpperCase(), v * 2])
       *     // Seq { A: 2, B: 4 }
       *
       */
      mapEntries<KM, VM>(
        mapper: (
          entry?: /*(K, V)*/Array<any>,
          index?: number,
          iter?: /*this*/Iterable.Keyed<K, V>
        ) => /*[KM, VM]*/Array<any>,
        context?: any
      ): /*this*/Iterable.Keyed<KM, VM>;


      // Search for value

      /**
       * Returns the key associated with the search value, or undefined.
       */
      keyOf(searchValue: V): K;

      /**
       * Returns the last key associated with the search value, or undefined.
       */
      lastKeyOf(searchValue: V): K;

      /**
       * Returns the key for which the `predicate` returns true.
       */
      findKey(
        predicate: (value?: V, key?: K, iter?: /*this*/Iterable.Keyed<K, V>) => boolean,
        context?: any
      ): K;

      /**
       * Returns the last key for which the `predicate` returns true.
       *
       * Note: `predicate` will be called for each entry in reverse.
       */
      findLastKey(
        predicate: (value?: V, key?: K, iter?: /*this*/Iterable.Keyed<K, V>) => boolean,
        context?: any
      ): K;
    }


    /**
     * Indexed Iterables have incrementing numeric keys. They exhibit
     * slightly different behavior than `Iterable.Keyed` for some methods in order
     * to better mirror the behavior of JavaScript's `Array`, and add methods
     * which do not make sense on non-indexed Iterables such as `indexOf`.
     *
     * Unlike JavaScript arrays, `Iterable.Indexed`s are always dense. "Unset"
     * indices and `undefined` indices are indistinguishable, and all indices from
     * 0 to `size` are visited when iterated.
     *
     * All Iterable.Indexed methods return re-indexed Iterables. In other words,
     * indices always start at 0 and increment until size. If you wish to
     * preserve indices, using them as keys, convert to a Iterable.Keyed by
     * calling `toKeyedSeq`.
     */
    export module Indexed {}

    /**
     * Creates a new Iterable.Indexed.
     */
    export function Indexed<T>(iter: Iterable.Indexed<T>): Iterable.Indexed<T>;
    export function Indexed<T>(iter: Iterable.Set<T>): Iterable.Indexed<T>;
    export function Indexed<K, V>(iter: Iterable.Keyed<K, V>): Iterable.Indexed</*[K,V]*/any>;
    export function Indexed<T>(array: Array<T>): Iterable.Indexed<T>;
    export function Indexed<T>(iterator: Iterator<T>): Iterable.Indexed<T>;
    export function Indexed<T>(iterable: /*Iterable<T>*/Object): Iterable.Indexed<T>;

    export interface Indexed<T> extends Iterable<number, T> {

      // Reading values

      /**
       * Returns the value associated with the provided index, or notSetValue if
       * the index is beyond the bounds of the Iterable.
       *
       * `index` may be a negative number, which indexes back from the end of the
       * Iterable. `s.get(-1)` gets the last item in the Iterable.
       */
      get(index: number, notSetValue?: T): T;


      // Conversion to Seq

      /**
       * Returns Seq.Indexed.
       * @override
       */
      toSeq(): Seq.Indexed<T>;

      /**
       * If this is an iterable of [key, value] entry tuples, it will return a
       * Seq.Keyed of those entries.
       */
      fromEntrySeq(): Seq.Keyed<any, any>;


      // Combination

      /**
       * Returns an Iterable of the same type with `separator` between each item
       * in this Iterable.
       */
      interpose(separator: T): /*this*/Iterable.Indexed<T>;

      /**
       * Returns an Iterable of the same type with the provided `iterables`
       * interleaved into this iterable.
       *
       * The resulting Iterable includes the first item from each, then the
       * second from each, etc.
       *
       *     I.Seq.of(1,2,3).interleave(I.Seq.of('A','B','C'))
       *     // Seq [ 1, 'A', 2, 'B', 3, 'C' ]
       *
       * The shortest Iterable stops interleave.
       *
       *     I.Seq.of(1,2,3).interleave(
       *       I.Seq.of('A','B'),
       *       I.Seq.of('X','Y','Z')
       *     )
       *     // Seq [ 1, 'A', 'X', 2, 'B', 'Y' ]
       */
      interleave(...iterables: Array<Iterable<any, T>>): /*this*/Iterable.Indexed<T>;

      /**
       * Splice returns a new indexed Iterable by replacing a region of this
       * Iterable with new values. If values are not provided, it only skips the
       * region to be removed.
       *
       * `index` may be a negative number, which indexes back from the end of the
       * Iterable. `s.splice(-2)` splices after the second to last item.
       *
       *     Seq(['a','b','c','d']).splice(1, 2, 'q', 'r', 's')
       *     // Seq ['a', 'q', 'r', 's', 'd']
       *
       */
      splice(
        index: number,
        removeNum: number,
        ...values: /*Array<Iterable.Indexed<T> | T>*/any[]
      ): /*this*/Iterable.Indexed<T>;

      /**
       * Returns an Iterable of the same type "zipped" with the provided
       * iterables.
       *
       * Like `zipWith`, but using the default `zipper`: creating an `Array`.
       *
       *     var a = Seq.of(1, 2, 3);
       *     var b = Seq.of(4, 5, 6);
       *     var c = a.zip(b); // Seq [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
       *
       */
      zip(...iterables: Array<Iterable<any, any>>): /*this*/Iterable.Indexed<any>;

      /**
       * Returns an Iterable of the same type "zipped" with the provided
       * iterables by using a custom `zipper` function.
       *
       *     var a = Seq.of(1, 2, 3);
       *     var b = Seq.of(4, 5, 6);
       *     var c = a.zipWith((a, b) => a + b, b); // Seq [ 5, 7, 9 ]
       *
       */
      zipWith<U, Z>(
        zipper: (value: T, otherValue: U) => Z,
        otherIterable: Iterable<any, U>
      ): Iterable.Indexed<Z>;
      zipWith<U, V, Z>(
        zipper: (value: T, otherValue: U, thirdValue: V) => Z,
        otherIterable: Iterable<any, U>,
        thirdIterable: Iterable<any, V>
      ): Iterable.Indexed<Z>;
      zipWith<Z>(
        zipper: (...any: Array<any>) => Z,
        ...iterables: Array<Iterable<any, any>>
      ): Iterable.Indexed<Z>;


      // Search for value

      /**
       * Returns the first index at which a given value can be found in the
       * Iterable, or -1 if it is not present.
       */
      indexOf(searchValue: T): number;

      /**
       * Returns the last index at which a given value can be found in the
       * Iterable, or -1 if it is not present.
       */
      lastIndexOf(searchValue: T): number;

      /**
       * Returns the first index in the Iterable where a value satisfies the
       * provided predicate function. Otherwise -1 is returned.
       */
      findIndex(
        predicate: (value?: T, index?: number, iter?: /*this*/Iterable.Indexed<T>) => boolean,
        context?: any
      ): number;

      /**
       * Returns the last index in the Iterable where a value satisfies the
       * provided predicate function. Otherwise -1 is returned.
       */
      findLastIndex(
        predicate: (value?: T, index?: number, iter?: /*this*/Iterable.Indexed<T>) => boolean,
        context?: any
      ): number;
    }


    /**
     * Set Iterables only represent values. They have no associated keys or
     * indices. Duplicate values are possible in Seq.Sets, however the
     * concrete `Set` does not allow duplicate values.
     *
     * Iterable methods on Iterable.Set such as `map` and `forEach` will provide
     * the value as both the first and second arguments to the provided function.
     *
     *     var seq = Seq.Set.of('A', 'B', 'C');
     *     assert.equal(seq.every((v, k) => v === k), true);
     *
     */
    export module Set {}

    /**
     * Similar to `Iterable()`, but always returns a Iterable.Set.
     */
    export function Set<T>(iter: Iterable.Set<T>): Iterable.Set<T>;
    export function Set<T>(iter: Iterable.Indexed<T>): Iterable.Set<T>;
    export function Set<K, V>(iter: Iterable.Keyed<K, V>): Iterable.Set</*[K,V]*/any>;
    export function Set<T>(array: Array<T>): Iterable.Set<T>;
    export function Set<T>(iterator: Iterator<T>): Iterable.Set<T>;
    export function Set<T>(iterable: /*Iterable<T>*/Object): Iterable.Set<T>;

    export interface Set<T> extends Iterable<T, T> {

      /**
       * Returns Seq.Set.
       * @override
       */
      toSeq(): Seq.Set<T>;
    }

  }

  /**
   * Creates an Iterable.
   *
   * The type of Iterable created is based on the input.
   *
   *   * If an `Iterable`, that same `Iterable`.
   *   * If an Array-like, an `Iterable.Indexed`.
   *   * If an Object with an Iterator, an `Iterable.Indexed`.
   *   * If an Iterator, an `Iterable.Indexed`.
   *   * If an Object, an `Iterable.Keyed`.
   *
   * This methods forces the conversion of Objects and Strings to Iterables.
   * If you want to ensure that a Iterable of one item is returned, use
   * `Seq.of`.
   */
  export function Iterable<K, V>(iterable: Iterable<K, V>): Iterable<K, V>;
  export function Iterable<T>(array: Array<T>): Iterable.Indexed<T>;
  export function Iterable<V>(obj: {[key: string]: V}): Iterable.Keyed<string, V>;
  export function Iterable<T>(iterator: Iterator<T>): Iterable.Indexed<T>;
  export function Iterable<T>(iterable: /*ES6Iterable<T>*/Object): Iterable.Indexed<T>;
  export function Iterable<V>(value: V): Iterable.Indexed<V>;

  export interface Iterable<K, V> {

    // Value equality

    /**
     * True if this and the other Iterable have value equality, as defined
     * by `Immutable.is()`.
     *
     * Note: This is equivalent to `Immutable.is(this, other)`, but provided to
     * allow for chained expressions.
     */
    equals(other: Iterable<K, V>): boolean;

    /**
     * Computes and returns the hashed identity for this Iterable.
     *
     * The `hashCode` of an Iterable is used to determine potential equality,
     * and is used when adding this to a `Set` or as a key in a `Map`, enabling
     * lookup via a different instance.
     *
     *     var a = List.of(1, 2, 3);
     *     var b = List.of(1, 2, 3);
     *     assert(a !== b); // different instances
     *     var set = Set.of(a);
     *     assert(set.has(b) === true);
     *
     * If two values have the same `hashCode`, they are [not guaranteed
     * to be equal][Hash Collision]. If two values have different `hashCode`s,
     * they must not be equal.
     *
     * [Hash Collision]: http://en.wikipedia.org/wiki/Collision_(computer_science)
     */
    hashCode(): number;


    // Reading values

    /**
     * Returns the value associated with the provided key, or notSetValue if
     * the Iterable does not contain this key.
     *
     * Note: it is possible a key may be associated with an `undefined` value,
     * so if `notSetValue` is not provided and this method returns `undefined`,
     * that does not guarantee the key was not found.
     */
    get(key: K, notSetValue?: V): V;

    /**
     * True if a key exists within this `Iterable`.
     */
    has(key: K): boolean;

    /**
     * True if a value exists within this `Iterable`.
     * @alias contains
     */
    includes(value: V): boolean;
    contains(value: V): boolean;

    /**
     * The first value in the Iterable.
     */
    first(): V;

    /**
     * The last value in the Iterable.
     */
    last(): V;


    // Reading deep values

    /**
     * Returns the value found by following a path of keys or indices through
     * nested Iterables.
     */
    getIn(searchKeyPath: Array<any>, notSetValue?: any): any;
    getIn(searchKeyPath: Iterable<any, any>, notSetValue?: any): any;

    /**
     * True if the result of following a path of keys or indices through nested
     * Iterables results in a set value.
     */
    hasIn(searchKeyPath: Array<any>): boolean;
    hasIn(searchKeyPath: Iterable<any, any>): boolean;


    // Conversion to JavaScript types

    /**
     * Deeply converts this Iterable to equivalent JS.
     *
     * `Iterable.Indexeds`, and `Iterable.Sets` become Arrays, while
     * `Iterable.Keyeds` become Objects.
     *
     * @alias toJSON
     */
    toJS(): any;

    /**
     * Shallowly converts this iterable to an Array, discarding keys.
     */
    toArray(): Array<V>;

    /**
     * Shallowly converts this Iterable to an Object.
     *
     * Throws if keys are not strings.
     */
    toObject(): { [key: string]: V };


    // Conversion to Collections

    /**
     * Converts this Iterable to a Map, Throws if keys are not hashable.
     *
     * Note: This is equivalent to `Map(this.toKeyedSeq())`, but provided
     * for convenience and to allow for chained expressions.
     */
    toMap(): Map<K, V>;

    /**
     * Converts this Iterable to a Map, maintaining the order of iteration.
     *
     * Note: This is equivalent to `OrderedMap(this.toKeyedSeq())`, but
     * provided for convenience and to allow for chained expressions.
     */
    toOrderedMap(): Map<K, V>;

    /**
     * Converts this Iterable to a Set, discarding keys. Throws if values
     * are not hashable.
     *
     * Note: This is equivalent to `Set(this)`, but provided to allow for
     * chained expressions.
     */
    toSet(): Set<V>;

    /**
     * Converts this Iterable to a Set, maintaining the order of iteration and
     * discarding keys.
     *
     * Note: This is equivalent to `OrderedSet(this.valueSeq())`, but provided
     * for convenience and to allow for chained expressions.
     */
    toOrderedSet(): Set<V>;

    /**
     * Converts this Iterable to a List, discarding keys.
     *
     * Note: This is equivalent to `List(this)`, but provided to allow
     * for chained expressions.
     */
    toList(): List<V>;

    /**
     * Converts this Iterable to a Stack, discarding keys. Throws if values
     * are not hashable.
     *
     * Note: This is equivalent to `Stack(this)`, but provided to allow for
     * chained expressions.
     */
    toStack(): Stack<V>;


    // Conversion to Seq

    /**
     * Converts this Iterable to a Seq of the same kind (indexed,
     * keyed, or set).
     */
    toSeq(): Seq<K, V>;

    /**
     * Returns a Seq.Keyed from this Iterable where indices are treated as keys.
     *
     * This is useful if you want to operate on an
     * Iterable.Indexed and preserve the [index, value] pairs.
     *
     * The returned Seq will have identical iteration order as
     * this Iterable.
     *
     * Example:
     *
     *     var indexedSeq = Immutable.Seq.of('A', 'B', 'C');
     *     indexedSeq.filter(v => v === 'B').toString() // Seq [ 'B' ]
     *     var keyedSeq = indexedSeq.toKeyedSeq();
     *     keyedSeq.filter(v => v === 'B').toString() // Seq { 1: 'B' }
     *
     */
    toKeyedSeq(): Seq.Keyed<K, V>;

    /**
     * Returns an Seq.Indexed of the values of this Iterable, discarding keys.
     */
    toIndexedSeq(): Seq.Indexed<V>;

    /**
     * Returns a Seq.Set of the values of this Iterable, discarding keys.
     */
    toSetSeq(): Seq.Set<V>;


    // Iterators

    /**
     * An iterator of this `Iterable`'s keys.
     */
    keys(): Iterator<K>;

    /**
     * An iterator of this `Iterable`'s values.
     */
    values(): Iterator<V>;

    /**
     * An iterator of this `Iterable`'s entries as `[key, value]` tuples.
     */
    entries(): Iterator</*[K, V]*/Array<any>>;


    // Iterables (Seq)

    /**
     * Returns a new Seq.Indexed of the keys of this Iterable,
     * discarding values.
     */
    keySeq(): Seq.Indexed<K>;

    /**
     * Returns an Seq.Indexed of the values of this Iterable, discarding keys.
     */
    valueSeq(): Seq.Indexed<V>;

    /**
     * Returns a new Seq.Indexed of [key, value] tuples.
     */
    entrySeq(): Seq.Indexed</*(K, V)*/Array<any>>;


    // Sequence algorithms

    /**
     * Returns a new Iterable of the same type with values passed through a
     * `mapper` function.
     *
     *     Seq({ a: 1, b: 2 }).map(x => 10 * x)
     *     // Seq { a: 10, b: 20 }
     *
     */
    map<M>(
      mapper: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => M,
      context?: any
    ): /*this*/Iterable<K, M>;

    /**
     * Returns a new Iterable of the same type with only the entries for which
     * the `predicate` function returns true.
     *
     *     Seq({a:1,b:2,c:3,d:4}).filter(x => x % 2 === 0)
     *     // Seq { b: 2, d: 4 }
     *
     */
    filter(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any
    ): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type with only the entries for which
     * the `predicate` function returns false.
     *
     *     Seq({a:1,b:2,c:3,d:4}).filterNot(x => x % 2 === 0)
     *     // Seq { a: 1, c: 3 }
     *
     */
    filterNot(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any
    ): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type in reverse order.
     */
    reverse(): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type which includes the same entries,
     * stably sorted by using a `comparator`.
     *
     * If a `comparator` is not provided, a default comparator uses `<` and `>`.
     *
     * `comparator(valueA, valueB)`:
     *
     *   * Returns `0` if the elements should not be swapped.
     *   * Returns `-1` (or any negative number) if `valueA` comes before `valueB`
     *   * Returns `1` (or any positive number) if `valueA` comes after `valueB`
     *   * Is pure, i.e. it must always return the same value for the same pair
     *     of values.
     *
     * When sorting collections which have no defined order, their ordered
     * equivalents will be returned. e.g. `map.sort()` returns OrderedMap.
     */
    sort(comparator?: (valueA: V, valueB: V) => number): /*this*/Iterable<K, V>;

    /**
     * Like `sort`, but also accepts a `comparatorValueMapper` which allows for
     * sorting by more sophisticated means:
     *
     *     hitters.sortBy(hitter => hitter.avgHits);
     *
     */
    sortBy<C>(
      comparatorValueMapper: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => C,
      comparator?: (valueA: C, valueB: C) => number
    ): /*this*/Iterable<K, V>;

    /**
     * Returns a `Iterable.Keyed` of `Iterable.Keyeds`, grouped by the return
     * value of the `grouper` function.
     *
     * Note: This is always an eager operation.
     */
    groupBy<G>(
      grouper: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => G,
      context?: any
    ): /*Map*/Seq.Keyed<G, /*this*/Iterable<K, V>>;


    // Side effects

    /**
     * The `sideEffect` is executed for every entry in the Iterable.
     *
     * Unlike `Array#forEach`, if any call of `sideEffect` returns
     * `false`, the iteration will stop. Returns the number of entries iterated
     * (including the last iteration which returned false).
     */
    forEach(
      sideEffect: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => any,
      context?: any
    ): number;


    // Creating subsets

    /**
     * Returns a new Iterable of the same type representing a portion of this
     * Iterable from start up to but not including end.
     *
     * If begin is negative, it is offset from the end of the Iterable. e.g.
     * `slice(-2)` returns a Iterable of the last two entries. If it is not
     * provided the new Iterable will begin at the beginning of this Iterable.
     *
     * If end is negative, it is offset from the end of the Iterable. e.g.
     * `slice(0, -1)` returns an Iterable of everything but the last entry. If
     * it is not provided, the new Iterable will continue through the end of
     * this Iterable.
     *
     * If the requested slice is equivalent to the current Iterable, then it
     * will return itself.
     */
    slice(begin?: number, end?: number): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type containing all entries except
     * the first.
     */
    rest(): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type containing all entries except
     * the last.
     */
    butLast(): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type which excludes the first `amount`
     * entries from this Iterable.
     */
    skip(amount: number): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type which excludes the last `amount`
     * entries from this Iterable.
     */
    skipLast(amount: number): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type which includes entries starting
     * from when `predicate` first returns false.
     *
     *     Seq.of('dog','frog','cat','hat','god')
     *       .skipWhile(x => x.match(/g/))
     *     // Seq [ 'cat', 'hat', 'god' ]
     *
     */
    skipWhile(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any
    ): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type which includes entries starting
     * from when `predicate` first returns true.
     *
     *     Seq.of('dog','frog','cat','hat','god')
     *       .skipUntil(x => x.match(/hat/))
     *     // Seq [ 'hat', 'god' ]
     *
     */
    skipUntil(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any
    ): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type which includes the first `amount`
     * entries from this Iterable.
     */
    take(amount: number): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type which includes the last `amount`
     * entries from this Iterable.
     */
    takeLast(amount: number): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type which includes entries from this
     * Iterable as long as the `predicate` returns true.
     *
     *     Seq.of('dog','frog','cat','hat','god')
     *       .takeWhile(x => x.match(/o/))
     *     // Seq [ 'dog', 'frog' ]
     *
     */
    takeWhile(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any
    ): /*this*/Iterable<K, V>;

    /**
     * Returns a new Iterable of the same type which includes entries from this
     * Iterable as long as the `predicate` returns false.
     *
     *     Seq.of('dog','frog','cat','hat','god').takeUntil(x => x.match(/at/))
     *     // ['dog', 'frog']
     *
     */
    takeUntil(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any
    ): /*this*/Iterable<K, V>;


    // Combination

    /**
     * Returns a new Iterable of the same type with other values and
     * iterable-like concatenated to this one.
     *
     * For Seqs, all entries will be present in
     * the resulting iterable, even if they have the same key.
     */
    concat(...valuesOrIterables: /*Array<Iterable<K, V>|V*/any[]): /*this*/Iterable<K, V>;

    /**
     * Flattens nested Iterables.
     *
     * Will deeply flatten the Iterable by default, returning an Iterable of the
     * same type, but a `depth` can be provided in the form of a number or
     * boolean (where true means to shallowly flatten one level). A depth of 0
     * (or shallow: false) will deeply flatten.
     *
     * Flattens only others Iterable, not Arrays or Objects.
     *
     * Note: `flatten(true)` operates on Iterable<any, Iterable<K, V>> and
     * returns Iterable<K, V>
     */
    flatten(depth?: number): /*this*/Iterable<any, any>;
    flatten(shallow?: boolean): /*this*/Iterable<any, any>;

    /**
     * Flat-maps the Iterable, returning an Iterable of the same type.
     *
     * Similar to `iter.map(...).flatten(true)`.
     */
    flatMap<MK, MV>(
      mapper: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => Iterable<MK, MV>,
      context?: any
    ): /*this*/Iterable<MK, MV>;
    flatMap<MK, MV>(
      mapper: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => /*iterable-like*/any,
      context?: any
    ): /*this*/Iterable<MK, MV>;


    // Reducing a value

    /**
     * Reduces the Iterable to a value by calling the `reducer` for every entry
     * in the Iterable and passing along the reduced value.
     *
     * If `initialReduction` is not provided, or is null, the first item in the
     * Iterable will be used.
     *
     * @see `Array#reduce`.
     */
    reduce<R>(
      reducer: (reduction?: R, value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => R,
      initialReduction?: R,
      context?: any
    ): R;

    /**
     * Reduces the Iterable in reverse (from the right side).
     *
     * Note: Similar to this.reverse().reduce(), and provided for parity
     * with `Array#reduceRight`.
     */
    reduceRight<R>(
      reducer: (reduction?: R, value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => R,
      initialReduction?: R,
      context?: any
    ): R;

    /**
     * True if `predicate` returns true for all entries in the Iterable.
     */
    every(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any
    ): boolean;

    /**
     * True if `predicate` returns true for any entry in the Iterable.
     */
    some(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any
    ): boolean;

    /**
     * Joins values together as a string, inserting a separator between each.
     * The default separator is `","`.
     */
    join(separator?: string): string;

    /**
     * Returns true if this Iterable includes no values.
     *
     * For some lazy `Seq`, `isEmpty` might need to iterate to determine
     * emptiness. At most one iteration will occur.
     */
    isEmpty(): boolean;

    /**
     * Returns the size of this Iterable.
     *
     * Regardless of if this Iterable can describe its size lazily (some Seqs
     * cannot), this method will always return the correct size. E.g. it
     * evaluates a lazy `Seq` if necessary.
     *
     * If `predicate` is provided, then this returns the count of entries in the
     * Iterable for which the `predicate` returns true.
     */
    count(): number;
    count(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any
    ): number;

    /**
     * Returns a `Seq.Keyed` of counts, grouped by the return value of
     * the `grouper` function.
     *
     * Note: This is not a lazy operation.
     */
    countBy<G>(
      grouper: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => G,
      context?: any
    ): Map<G, number>;


    // Search for value

    /**
     * Returns the value for which the `predicate` returns true.
     */
    find(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any,
      notSetValue?: V
    ): V;

    /**
     * Returns the last value for which the `predicate` returns true.
     *
     * Note: `predicate` will be called for each entry in reverse.
     */
    findLast(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any,
      notSetValue?: V
    ): V;

    /**
     * Returns the [key, value] entry for which the `predicate` returns true.
     */
    findEntry(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any,
      notSetValue?: V
    ): /*[K, V]*/Array<any>;

    /**
     * Returns the last [key, value] entry for which the `predicate`
     * returns true.
     *
     * Note: `predicate` will be called for each entry in reverse.
     */
    findLastEntry(
      predicate: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => boolean,
      context?: any,
      notSetValue?: V
    ): /*[K, V]*/Array<any>;

    /**
     * Returns the maximum value in this collection. If any values are
     * comparatively equivalent, the first one found will be returned.
     *
     * The `comparator` is used in the same way as `Iterable#sort`. If it is not
     * provided, the default comparator is `>`.
     *
     * When two values are considered equivalent, the first encountered will be
     * returned. Otherwise, `max` will operate independent of the order of input
     * as long as the comparator is commutative. The default comparator `>` is
     * commutative *only* when types do not differ.
     *
     * If `comparator` returns 0 and either value is NaN, undefined, or null,
     * that value will be returned.
     */
    max(comparator?: (valueA: V, valueB: V) => number): V;

    /**
     * Like `max`, but also accepts a `comparatorValueMapper` which allows for
     * comparing by more sophisticated means:
     *
     *     hitters.maxBy(hitter => hitter.avgHits);
     *
     */
    maxBy<C>(
      comparatorValueMapper: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => C,
      comparator?: (valueA: C, valueB: C) => number
    ): V;

    /**
     * Returns the minimum value in this collection. If any values are
     * comparatively equivalent, the first one found will be returned.
     *
     * The `comparator` is used in the same way as `Iterable#sort`. If it is not
     * provided, the default comparator is `<`.
     *
     * When two values are considered equivalent, the first encountered will be
     * returned. Otherwise, `min` will operate independent of the order of input
     * as long as the comparator is commutative. The default comparator `<` is
     * commutative *only* when types do not differ.
     *
     * If `comparator` returns 0 and either value is NaN, undefined, or null,
     * that value will be returned.
     */
    min(comparator?: (valueA: V, valueB: V) => number): V;

    /**
     * Like `min`, but also accepts a `comparatorValueMapper` which allows for
     * comparing by more sophisticated means:
     *
     *     hitters.minBy(hitter => hitter.avgHits);
     *
     */
    minBy<C>(
      comparatorValueMapper: (value?: V, key?: K, iter?: /*this*/Iterable<K, V>) => C,
      comparator?: (valueA: C, valueB: C) => number
    ): V;


    // Comparison

    /**
     * True if `iter` includes every value in this Iterable.
     */
    isSubset(iter: Iterable<any, V>): boolean;
    isSubset(iter: Array<V>): boolean;

    /**
     * True if this Iterable includes every value in `iter`.
     */
    isSuperset(iter: Iterable<any, V>): boolean;
    isSuperset(iter: Array<V>): boolean;


    /**
     * Note: this is here as a convenience to work around an issue with
     * TypeScript https://github.com/Microsoft/TypeScript/issues/285, but
     * Iterable does not define `size`, instead `Seq` defines `size` as
     * nullable number, and `Collection` defines `size` as always a number.
     *
     * @ignore
     */
    size: number;
  }


  /**
   * Collection is the abstract base class for concrete data structures. It
   * cannot be constructed directly.
   *
   * Implementations should extend one of the subclasses, `Collection.Keyed`,
   * `Collection.Indexed`, or `Collection.Set`.
   */
  export module Collection {


    /**
     * `Collection` which represents key-value pairs.
     */
    export module Keyed {}

    export interface Keyed<K, V> extends Collection<K, V>, Iterable.Keyed<K, V> {

      /**
       * Returns Seq.Keyed.
       * @override
       */
      toSeq(): Seq.Keyed<K, V>;
    }


    /**
     * `Collection` which represents ordered indexed values.
     */
    export module Indexed {}

    export interface Indexed<T> extends Collection<number, T>, Iterable.Indexed<T> {

      /**
       * Returns Seq.Indexed.
       * @override
       */
      toSeq(): Seq.Indexed<T>;
    }


    /**
     * `Collection` which represents values, unassociated with keys or indices.
     *
     * `Collection.Set` implementations should guarantee value uniqueness.
     */
    export module Set {}

    export interface Set<T> extends Collection<T, T>, Iterable.Set<T> {

      /**
       * Returns Seq.Set.
       * @override
       */
      toSeq(): Seq.Set<T>;
    }

  }

  export interface Collection<K, V> extends Iterable<K, V> {

    /**
     * All collections maintain their current `size` as an integer.
     */
    size: number;
  }


  /**
   * ES6 Iterator.
   *
   * This is not part of the Immutable library, but a common interface used by
   * many types in ES6 JavaScript.
   *
   * @ignore
   */
  export interface Iterator<T> {
    next(): { value: T; done: boolean; }
  }

}

declare module "immutable" {
  export = Immutable
}
