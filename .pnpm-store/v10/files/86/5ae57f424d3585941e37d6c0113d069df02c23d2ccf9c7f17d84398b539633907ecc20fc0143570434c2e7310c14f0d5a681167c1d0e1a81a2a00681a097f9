import type { Cache } from './utils';
export type InternalCopier<Value> = (value: Value, state: State) => Value;
export interface State {
    Constructor: any;
    cache: Cache;
    copier: InternalCopier<any>;
    prototype: any;
}
/**
 * Deeply copy the indexed values in the array.
 */
export declare function copyArrayLoose(array: any[], state: State): any;
/**
 * Deeply copy the indexed values in the array, as well as any custom properties.
 */
export declare function copyArrayStrict<Value extends any[]>(array: Value, state: State): Value;
/**
 * Copy the contents of the ArrayBuffer.
 */
export declare function copyArrayBuffer<Value extends ArrayBuffer>(arrayBuffer: Value, _state: State): Value;
/**
 * Create a new Blob with the contents of the original.
 */
export declare function copyBlob<Value extends Blob>(blob: Value, _state: State): Value;
/**
 * Create a new DataView with the contents of the original.
 */
export declare function copyDataView<Value extends DataView>(dataView: Value, state: State): Value;
/**
 * Create a new Date based on the time of the original.
 */
export declare function copyDate<Value extends Date>(date: Value, state: State): Value;
/**
 * Deeply copy the keys and values of the original.
 */
export declare function copyMapLoose<Value extends Map<any, any>>(map: Value, state: State): Value;
/**
 * Deeply copy the keys and values of the original, as well as any custom properties.
 */
export declare function copyMapStrict<Value extends Map<any, any>>(map: Value, state: State): Value;
declare function copyObjectLooseModern<Value extends Record<string, any>>(object: Value, state: State): Value;
/**
 * Deeply copy the properties (keys and symbols) and values of the original.
 */
export declare const copyObjectLoose: typeof copyObjectLooseModern;
/**
 * Deeply copy the properties (keys and symbols) and values of the original, as well
 * as any hidden or non-enumerable properties.
 */
export declare function copyObjectStrict<Value extends Record<string, any>>(object: Value, state: State): Value;
/**
 * Create a new primitive wrapper from the value of the original.
 */
export declare function copyPrimitiveWrapper<Value extends Boolean | Number | String>(primitiveObject: Value, state: State): Value;
/**
 * Create a new RegExp based on the value and flags of the original.
 */
export declare function copyRegExp<Value extends RegExp>(regExp: Value, state: State): Value;
/**
 * Return the original value (an identity function).
 *
 * @note
 * THis is used for objects that cannot be copied, such as WeakMap.
 */
export declare function copySelf<Value>(value: Value, _state: State): Value;
/**
 * Deeply copy the values of the original.
 */
export declare function copySetLoose<Value extends Set<any>>(set: Value, state: State): Value;
/**
 * Deeply copy the values of the original, as well as any custom properties.
 */
export declare function copySetStrict<Value extends Set<any>>(set: Value, state: State): Value;
export {};
