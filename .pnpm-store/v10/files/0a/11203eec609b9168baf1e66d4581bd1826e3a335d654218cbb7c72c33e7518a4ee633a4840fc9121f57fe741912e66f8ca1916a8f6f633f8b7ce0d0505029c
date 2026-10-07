/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */


/**
 * Cursors
 * -------
 *
 * Cursors allow you to hold a reference to a path in a nested immutable data
 * structure, allowing you to pass smaller sections of a larger nested
 * collection to portions of your application while maintaining a central point
 * aware of changes to the entire data structure.
 *
 * This is particularly useful when used in conjuction with component-based UI
 * libraries like [React](http://facebook.github.io/react/) or to simulate
 * "state" throughout an application while maintaining a single flow of logic.
 *
 * Cursors provide a simple API for getting the value at that path
 * (the equivalent of `this.getIn(keyPath)`), updating the value at that path
 * (the equivalent of `this.updateIn(keyPath)`), and getting a sub-cursor
 * starting from that path.
 *
 * When updated, a new root collection is created and provided to the `onChange`
 * function provided to the first call to `Cursor(map, onChange)`.
 *
 * When this cursor's (or any of its sub-cursors') `update` method is called,
 * the resulting new data structure will be provided to the `onChange`
 * function. Use this callback to keep track of the most current value or
 * update the rest of your application.
 */

declare module 'immutable/contrib/cursor' {

  ///<reference path='../../dist/immutable.d.ts'/>
  import Immutable = require('immutable');


  export function from(
    collection: Immutable.Collection<any, any>,
    onChange?: (newValue: any, oldValue?: any, keyPath?: Array<any>) => any
  ): Cursor;
  export function from(
    collection: Immutable.Collection<any, any>,
    keyPath: Array<any>,
    onChange?: (newValue: any, oldValue?: any, keyPath?: Array<any>) => any
  ): Cursor;
  export function from(
    collection: Immutable.Collection<any, any>,
    key: any,
    onChange?: (newValue: any, oldValue?: any, keyPath?: Array<any>) => any
  ): Cursor;


  export interface Cursor extends Immutable.Seq<any, any> {

    /**
     * Returns a sub-cursor following the key-path starting from this cursor.
     */
    cursor(subKeyPath: Array<any>): Cursor;
    cursor(subKey: any): Cursor;

    /**
     * Returns the value at the cursor, if the cursor path does not yet exist,
     * returns `notSetValue`.
     */
    deref(notSetValue?: any): any;

    /**
     * Returns the value at the `key` in the cursor, or `notSetValue` if it
     * does not exist.
     *
     * If the key would return a collection, a new Cursor is returned.
     */
    get(key: any, notSetValue?: any): any;

    /**
     * Returns the value at the `keyPath` in the cursor, or `notSetValue` if it
     * does not exist.
     *
     * If the keyPath would return a collection, a new Cursor is returned.
     */
    getIn(keyPath: Array<any>, notSetValue?: any): any;
    getIn(keyPath: Immutable.Iterable<any, any>, notSetValue?: any): any;

    /**
     * Sets `value` at `key` in the cursor, returning a new cursor to the same
     * point in the new data.
     *
     * If only one parameter is provided, it is set directly as the cursor's value.
     */
    set(key: any, value: any): Cursor;
    set(value: any): Cursor;

    /**
     * Deletes `key` from the cursor, returning a new cursor to the same
     * point in the new data.
     *
     * Note: `delete` cannot be safely used in IE8
     * @alias remove
     */
    delete(key: any): Cursor;
    remove(key: any): Cursor;

    /**
     * Clears the value at this cursor, returning a new cursor to the same
     * point in the new data.
     */
    clear(): Cursor;

    /**
     * Updates the value in the data this cursor points to, triggering the
     * callback for the root cursor and returning a new cursor pointing to the
     * new data.
     */
    update(updater: (value: any) => any): Cursor;
    update(key: any, updater: (value: any) => any): Cursor;
    update(key: any, notSetValue: any, updater: (value: any) => any): Cursor;

    /**
     * @see `Map#merge`
     */
    merge(...iterables: Immutable.Iterable<any, any>[]): Cursor;
    merge(...iterables: {[key: string]: any}[]): Cursor;

    /**
     * @see `Map#mergeWith`
     */
    mergeWith(
      merger: (previous?: any, next?: any) => any,
      ...iterables: Immutable.Iterable<any, any>[]
    ): Cursor;
    mergeWith(
      merger: (previous?: any, next?: any) => any,
      ...iterables: {[key: string]: any}[]
    ): Cursor;

    /**
     * @see `Map#mergeDeep`
     */
    mergeDeep(...iterables: Immutable.Iterable<any, any>[]): Cursor;
    mergeDeep(...iterables: {[key: string]: any}[]): Cursor;

    /**
     * @see `Map#mergeDeepWith`
     */
    mergeDeepWith(
      merger: (previous?: any, next?: any) => any,
      ...iterables: Immutable.Iterable<any, any>[]
    ): Cursor;
    mergeDeepWith(
      merger: (previous?: any, next?: any) => any,
      ...iterables: {[key: string]: any}[]
    ): Cursor;

    // Deep persistent changes

    /**
     * Returns a new Cursor having set `value` at this `keyPath`. If any keys in
     * `keyPath` do not exist, a new immutable Map will be created at that key.
     */
    setIn(keyPath: Array<any>, value: any): Cursor;
    setIn(keyPath: Immutable.Iterable<any, any>, value: any): Cursor;

    /**
     * Returns a new Cursor with provided `values` appended
     */
    push(...values: Array<any>): Cursor;

    /**
     * Returns a new Cursor with a size ones less than this Cursor,
     * excluding the last index in this Cursor.
     */
    pop(): Cursor;

    /**
     * Returns a new Cursor with the provided `values` prepended,
     * shifting other values ahead to higher indices.
     */
    unshift(...values: Array<any>): Cursor;

    /**
     * Returns a new Cursor with a size ones less than this Cursor, excluding
     * the first index in this Cursor, shifting all other values to a lower index.
     */
    shift(): Cursor;

    /**
     * Returns a new Cursor having removed the value at this `keyPath`.
     *
     * @alias removeIn
     */
    deleteIn(keyPath: Array<any>): Cursor;
    deleteIn(keyPath: Immutable.Iterable<any, any>): Cursor;
    removeIn(keyPath: Array<any>): Cursor;
    removeIn(keyPath: Immutable.Iterable<any, any>): Cursor;

    /**
     * Returns a new Cursor having applied the `updater` to the value found at
     * the keyPath.
     *
     * If any keys in `keyPath` do not exist, new Immutable `Map`s will
     * be created at those keys. If the `keyPath` does not already contain a
     * value, the `updater` function will be called with `notSetValue`, if
     * provided, otherwise `undefined`.
     *
     * If the `updater` function returns the same value it was called with, then
     * no change will occur. This is still true if `notSetValue` is provided.
     */
    updateIn(
      keyPath: Array<any>,
      updater: (value: any) => any
    ): Cursor;
    updateIn(
      keyPath: Array<any>,
      notSetValue: any,
      updater: (value: any) => any
    ): Cursor;
    updateIn(
      keyPath: Immutable.Iterable<any, any>,
      updater: (value: any) => any
    ): Cursor;
    updateIn(
      keyPath: Immutable.Iterable<any, any>,
      notSetValue: any,
      updater: (value: any) => any
    ): Cursor;

    /**
     * A combination of `updateIn` and `merge`, returning a new Cursor, but
     * performing the merge at a point arrived at by following the keyPath.
     * In other words, these two lines are equivalent:
     *
     *     x.updateIn(['a', 'b', 'c'], abc => abc.merge(y));
     *     x.mergeIn(['a', 'b', 'c'], y);
     *
     */
    mergeIn(
      keyPath: Immutable.Iterable<any, any>,
      ...iterables: Immutable.Iterable<any, any>[]
    ): Cursor;
    mergeIn(
      keyPath: Array<any>,
      ...iterables: Immutable.Iterable<any, any>[]
    ): Cursor;
    mergeIn(
      keyPath: Array<any>,
      ...iterables: {[key: string]: any}[]
    ): Cursor;

    /**
     * A combination of `updateIn` and `mergeDeep`, returning a new Cursor, but
     * performing the deep merge at a point arrived at by following the keyPath.
     * In other words, these two lines are equivalent:
     *
     *     x.updateIn(['a', 'b', 'c'], abc => abc.mergeDeep(y));
     *     x.mergeDeepIn(['a', 'b', 'c'], y);
     *
     */
    mergeDeepIn(
      keyPath: Immutable.Iterable<any, any>,
      ...iterables: Immutable.Iterable<any, any>[]
    ): Cursor;
    mergeDeepIn(
      keyPath: Array<any>,
      ...iterables: Immutable.Iterable<any, any>[]
    ): Cursor;
    mergeDeepIn(
      keyPath: Array<any>,
      ...iterables: {[key: string]: any}[]
    ): Cursor;

    // Transient changes

    /**
     * Every time you call one of the above functions, a new immutable value is
     * created and the callback is triggered. If you need to apply a series of
     * mutations to a Cursor without triggering the callback repeatedly,
     * `withMutations()` creates a temporary mutable copy of the value which
     * can apply mutations in a highly performant manner. Afterwards the
     * callback is triggered with the final value.
     */
    withMutations(mutator: (mutable: any) => any): Cursor;
  }

}
