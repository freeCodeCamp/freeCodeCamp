export interface Cache {
    wrap<T>(key: string, wrapper: (callback: (error: any, result: T) => void) => any, options: CacheConfig): Promise<any>;
}
export interface CacheConfig {
    ttl: number;
}
export declare function createDefaultCache(): Cache;
