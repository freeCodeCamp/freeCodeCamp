import { LocalStorageCompat, StickyAssignmentsDocument, StickyAttributeKey } from "./types/growthbook";
export interface CookieAttributes {
    expires?: number | Date | undefined;
    path?: string | undefined;
    domain?: string | undefined;
    secure?: boolean | undefined;
    sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None" | undefined;
    [property: string]: any;
}
export interface JsCookiesCompat<T = string> {
    set(name: string, value: string | T, options?: CookieAttributes): string | undefined;
    get(name: string): string | T | undefined;
    get(): {
        [key: string]: string;
    };
    remove(name: string, options?: CookieAttributes): void;
}
export interface IORedisCompat {
    mget(...keys: string[]): Promise<string[]>;
    set(key: string, value: string): Promise<string>;
}
export interface RequestCompat {
    cookies: Record<string, string>;
    [key: string]: unknown;
}
export interface ResponseCompat {
    cookie(name: string, value: string, options?: CookieAttributes): ResponseCompat;
    [key: string]: unknown;
}
/**
 * Responsible for reading and writing documents which describe sticky bucket assignments.
 */
export declare abstract class StickyBucketService {
    protected prefix: string;
    constructor(opts?: {
        prefix?: string;
    });
    abstract getAssignments(attributeName: string, attributeValue: string): Promise<StickyAssignmentsDocument | null>;
    abstract saveAssignments(doc: StickyAssignmentsDocument): Promise<unknown>;
    /**
     * The SDK calls getAllAssignments to populate sticky buckets. This in turn will
     * typically loop through individual getAssignments calls. However, some StickyBucketService
     * instances (i.e. Redis) will instead perform a multi-query inside getAllAssignments instead.
     */
    getAllAssignments(attributes: Record<string, string>): Promise<Record<StickyAttributeKey, StickyAssignmentsDocument>>;
    getKey(attributeName: string, attributeValue: string): string;
}
export declare abstract class StickyBucketServiceSync extends StickyBucketService {
    abstract getAssignmentsSync(attributeName: string, attributeValue: string): StickyAssignmentsDocument | null;
    abstract saveAssignmentsSync(doc: StickyAssignmentsDocument): void;
    getAssignments(attributeName: string, attributeValue: string): Promise<StickyAssignmentsDocument | null>;
    saveAssignments(doc: StickyAssignmentsDocument): Promise<void>;
    getAllAssignmentsSync(attributes: Record<string, string>): Record<StickyAttributeKey, StickyAssignmentsDocument>;
}
export declare class LocalStorageStickyBucketService extends StickyBucketService {
    private localStorage;
    constructor(opts?: {
        prefix?: string;
        localStorage?: LocalStorageCompat;
    });
    getAssignments(attributeName: string, attributeValue: string): Promise<StickyAssignmentsDocument | null>;
    saveAssignments(doc: StickyAssignmentsDocument): Promise<void>;
}
export declare class ExpressCookieStickyBucketService extends StickyBucketServiceSync {
    /**
     * Intended to be used with cookieParser() middleware from npm: 'cookie-parser'.
     * Assumes:
     *  - reading a cookie is automatically decoded via decodeURIComponent() or similar
     *  - writing a cookie name & value must be manually encoded via encodeURIComponent() or similar
     *  - all cookie bodies are JSON encoded strings and are manually encoded/decoded
     */
    private req;
    private res;
    private cookieAttributes;
    constructor({ prefix, req, res, cookieAttributes, }: {
        prefix?: string;
        req: RequestCompat;
        res: ResponseCompat;
        cookieAttributes?: CookieAttributes;
    });
    getAssignmentsSync(attributeName: string, attributeValue: string): StickyAssignmentsDocument | null;
    saveAssignmentsSync(doc: StickyAssignmentsDocument): void;
}
export declare class BrowserCookieStickyBucketService extends StickyBucketServiceSync {
    /**
     * Intended to be used with npm: 'js-cookie'.
     * Assumes:
     *  - reading a cookie is automatically decoded via decodeURIComponent() or similar
     *  - writing a cookie name & value is automatically encoded via encodeURIComponent() or similar
     *  - all cookie bodies are JSON encoded strings and are manually encoded/decoded
     */
    private jsCookie;
    private cookieAttributes;
    constructor({ prefix, jsCookie, cookieAttributes, }: {
        prefix?: string;
        jsCookie: JsCookiesCompat;
        cookieAttributes?: CookieAttributes;
    });
    getAssignmentsSync(attributeName: string, attributeValue: string): StickyAssignmentsDocument | null;
    saveAssignmentsSync(doc: StickyAssignmentsDocument): Promise<void>;
}
export declare class RedisStickyBucketService extends StickyBucketService {
    /** Intended to be used with npm: 'ioredis'. **/
    private redis;
    constructor({ redis }: {
        redis: IORedisCompat;
    });
    getAllAssignments(attributes: Record<string, string>): Promise<Record<StickyAttributeKey, StickyAssignmentsDocument>>;
    getAssignments(_attributeName: string, _attributeValue: string): Promise<null>;
    saveAssignments(doc: StickyAssignmentsDocument): Promise<void>;
}
//# sourceMappingURL=sticky-bucket-service.d.ts.map