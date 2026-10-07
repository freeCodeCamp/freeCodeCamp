export declare class TypeStorage<K = any, V = any> {
    types: Map<K | string, V>;
    constructor();
    get size(): number;
    clear(): void;
    delete(typeName: K): boolean;
    entries(): Iterator<[K | string, V]>;
    forEach(callbackfn: (value: V, index: K | string, map: Map<K | string, V>) => unknown, thisArg?: any): void;
    get(typeName: K): V;
    has(typeName: K): boolean;
    keys(): Iterator<K | string>;
    set(typeName: K | string, value: V): TypeStorage<K, V>;
    values(): Iterator<V>;
    add(value: V): string | null;
    hasInstance(typeName: K, ClassObj: any): boolean;
    getOrSet(typeName: K, typeOrThunk: V | ((schemaComposer: this) => V)): V;
}
//# sourceMappingURL=TypeStorage.d.ts.map