import { RequestFn, StorageAdapter, CacheResponse, CacheValue, CacheableOptions, Emitter } from './types.js';
type Func = (...args: any[]) => any;
declare class CacheableRequest {
    cache: StorageAdapter;
    cacheRequest: RequestFn;
    hooks: Map<string, Func>;
    constructor(cacheRequest: RequestFn, cacheAdapter?: StorageAdapter | string);
    request: () => (options: CacheableOptions, cb?: (response: CacheResponse) => void) => Emitter;
    addHook: (name: string, fn: Func) => void;
    removeHook: (name: string) => boolean;
    getHook: (name: string) => Func;
    runHook: (name: string, ...args: any[]) => Promise<CacheValue>;
}
export default CacheableRequest;
export * from './types.js';
export declare const onResponse = "onResponse";
//# sourceMappingURL=index.d.ts.map