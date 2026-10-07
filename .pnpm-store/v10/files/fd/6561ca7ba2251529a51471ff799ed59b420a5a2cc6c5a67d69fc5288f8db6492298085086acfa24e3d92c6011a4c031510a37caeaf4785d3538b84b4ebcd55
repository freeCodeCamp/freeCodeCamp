import type { ESLintSettings } from "./types";

export type CacheKey = unknown;
export type CacheObject = {
    result: unknown;
    lastSeen: ReturnType<typeof process.hrtime>;
};

declare class ModuleCache {
    map: Map<CacheKey, CacheObject>;

    constructor(map?: Map<CacheKey, CacheObject>);

    get<T>(cacheKey: CacheKey, settings: ESLintSettings): T | undefined;

    set<T>(cacheKey: CacheKey, result: T): T;

    static getSettings(settings: ESLintSettings): { lifetime: number } & Omit<ESLintSettings['import/cache'], 'lifetime'>;
}
export default ModuleCache;

export type { ModuleCache }
