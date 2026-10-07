import type { Thunk, ObjMap } from './definitions';
export declare function resolveMaybeThunk<T>(thingOrThunk: Thunk<T>): T;
export declare function camelCase(str: string): string;
export declare function getPluralName(name: string): string;
export declare function upperFirst(str: string): string;
export declare function clearName(str: string): string;
export declare function omit(obj: Record<any, any>, keys: string | string[]): Record<any, any>;
export declare function only(obj: Record<any, any>, keys: string | string[]): Record<any, any>;
export declare function inspect(value: unknown): string;
export declare function forEachKey<V>(obj: {
    [key: string]: V;
} | ObjMap<V>, callback: (value: V, key: string) => void): void;
export declare function mapEachKey<NewV = any, T extends Object | undefined = {}>(obj: T, callback: (value: NonNullable<T>[keyof NonNullable<T>], key: keyof NonNullable<T>) => NewV): T extends undefined ? undefined : ObjMap<NewV>;
export declare function keyValMap<T, V>(list: ReadonlyArray<T>, keyFn: (item: T) => string, valFn: (item: T) => V): ObjMap<V>;
export declare function keyMap<T>(list: ReadonlyArray<T>, keyFn: (item: T) => string): ObjMap<T>;
export declare function invariant(condition: unknown, message?: string): asserts condition;
//# sourceMappingURL=misc.d.ts.map