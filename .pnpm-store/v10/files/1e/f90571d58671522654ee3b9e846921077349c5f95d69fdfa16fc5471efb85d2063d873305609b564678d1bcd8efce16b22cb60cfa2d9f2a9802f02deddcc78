declare class DataLoader<K, V, _C = K> {
    constructor(batchLoadFn: DataLoader.BatchLoadFn<K, V>, options?: any);
    load(key: K): Promise<V>;
    loadMany(keys: ArrayLike<K>): Promise<Array<V | Error>>;
    prime(key: K, value: V | Error): this;
    clear(key: K): this;
    clearAll(): this;
    [key: string]: any;
}
declare namespace DataLoader {
    type BatchLoadFn<K, V> = (keys: ReadonlyArray<K>) => PromiseLike<ArrayLike<V | Error>>;
}
export = DataLoader;
//# sourceMappingURL=dataloader-types.d.ts.map
