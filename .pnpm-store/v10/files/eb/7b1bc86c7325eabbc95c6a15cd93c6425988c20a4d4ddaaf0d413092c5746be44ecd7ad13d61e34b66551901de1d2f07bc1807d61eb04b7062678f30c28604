import { Store, CachingConfig, MultiCache } from "cache-manager";
interface ICacheProperties {
    name?: string;
    store?: Store;
}
export default class GatsbyCache {
    name: string;
    store: Store;
    directory: string;
    cache?: MultiCache;
    constructor({ name, store }?: ICacheProperties);
    init(): GatsbyCache;
    get<T = unknown>(key: any): Promise<T | undefined>;
    set<T>(key: string, value: T, args?: CachingConfig): Promise<T | undefined>;
    del(key: string): Promise<void>;
}
export {};
