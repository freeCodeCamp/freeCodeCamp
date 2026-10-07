import { Objectish, AnyObject, AnyMap, AnySet, ImmerState, Archtype } from "../internal";
/** Returns true if the given value is an Immer draft */
export declare function isDraft(value: any): boolean;
/** Returns true if the given value can be drafted by Immer */
export declare function isDraftable(value: any): boolean;
export declare function isPlainObject(value: any): boolean;
/** Get the underlying object that is represented by the given draft */
export declare function original<T>(value: T): T | undefined;
export declare const ownKeys: (target: AnyObject) => PropertyKey[];
export declare const getOwnPropertyDescriptors: <T>(o: T) => { [P in keyof T]: TypedPropertyDescriptor<T[P]>; } & {
    [x: string]: PropertyDescriptor;
};
export declare function each<T extends Objectish>(obj: T, iter: (key: string | number, value: any, source: T) => void, enumerableOnly?: boolean): void;
export declare function getArchtype(thing: any): Archtype;
export declare function has(thing: any, prop: PropertyKey): boolean;
export declare function get(thing: AnyMap | AnyObject, prop: PropertyKey): any;
export declare function set(thing: any, propOrOldValue: PropertyKey, value: any): void;
export declare function is(x: any, y: any): boolean;
export declare function isMap(target: any): target is AnyMap;
export declare function isSet(target: any): target is AnySet;
export declare function latest(state: ImmerState): any;
export declare function shallowCopy(base: any): any;
/**
 * Freezes draftable objects. Returns the original object.
 * By default freezes shallowly, but if the second argument is `true` it will freeze recursively.
 *
 * @param obj
 * @param deep
 */
export declare function freeze<T>(obj: T, deep?: boolean): T;
export declare function isFrozen(obj: any): boolean;
//# sourceMappingURL=common.d.ts.map