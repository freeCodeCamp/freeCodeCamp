import type { InternalCopier } from './copier';
export type { State } from './copier';
export interface CreateCopierOptions {
    array?: InternalCopier<any[]>;
    arrayBuffer?: InternalCopier<ArrayBuffer>;
    blob?: InternalCopier<Blob>;
    dataView?: InternalCopier<DataView>;
    date?: InternalCopier<Date>;
    error?: InternalCopier<any>;
    map?: InternalCopier<Map<any, any>>;
    object?: InternalCopier<Record<string, any>>;
    regExp?: InternalCopier<RegExp>;
    set?: InternalCopier<Set<any>>;
}
/**
 * Create a custom copier based on the object-specific copy methods passed.
 */
export declare function createCopier(options: CreateCopierOptions): <Value>(value: Value) => Value;
/**
 * Create a custom copier based on the object-specific copy methods passed, defaulting to the
 * same internals as `copyStrict`.
 */
export declare function createStrictCopier(options: CreateCopierOptions): <Value>(value: Value) => Value;
/**
 * Copy an value deeply as much as possible, where strict recreation of object properties
 * are maintained. All properties (including non-enumerable ones) are copied with their
 * original property descriptors on both objects and arrays.
 */
export declare const copyStrict: <Value>(value: Value) => Value;
/**
 * Copy an value deeply as much as possible.
 */
declare const _default: <Value>(value: Value) => Value;
export default _default;
