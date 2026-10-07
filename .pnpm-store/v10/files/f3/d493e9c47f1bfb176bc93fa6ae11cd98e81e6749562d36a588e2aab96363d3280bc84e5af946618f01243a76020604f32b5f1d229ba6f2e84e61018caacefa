// Type definitions for http-cache-semantics 4.0
// Project: https://github.com/kornelski/http-cache-semantics#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = CachePolicy;

declare class CachePolicy {
    constructor(req: CachePolicy.Request, res: CachePolicy.Response, options?: CachePolicy.Options);

    /**
     * Returns `true` if the response can be stored in a cache.
     * If it's `false` then you MUST NOT store either the request or the response.
     */
    storable(): boolean;

    /**
     * This is the most important method. Use this method to check whether the cached response is still fresh
     * in the context of the new request.
     *
     * If it returns `true`, then the given `request` matches the original response this cache policy has been
     * created with, and the response can be reused without contacting the server. Note that the old response
     * can't be returned without being updated, see `responseHeaders()`.
     *
     * If it returns `false`, then the response may not be matching at all (e.g. it's for a different URL or method),
     * or may require to be refreshed first (see `revalidationHeaders()`).
     */
    satisfiesWithoutRevalidation(newRequest: CachePolicy.Request): boolean;

    /**
     * Returns updated, filtered set of response headers to return to clients receiving the cached response.
     * This function is necessary, because proxies MUST always remove hop-by-hop headers (such as `TE` and `Connection`)
     * and update response's `Age` to avoid doubling cache time.
     *
     * @example
     * cachedResponse.headers = cachePolicy.responseHeaders(cachedResponse);
     */
    responseHeaders(): CachePolicy.Headers;

    /**
     * Returns approximate time in milliseconds until the response becomes stale (i.e. not fresh).
     *
     * After that time (when `timeToLive() <= 0`) the response might not be usable without revalidation. However,
     * there are exceptions, e.g. a client can explicitly allow stale responses, so always check with
     * `satisfiesWithoutRevalidation()`.
     */
    timeToLive(): number;

    /**
     * Chances are you'll want to store the `CachePolicy` object along with the cached response.
     * `obj = policy.toObject()` gives a plain JSON-serializable object.
     */
    toObject(): CachePolicy.CachePolicyObject;

    /**
     * `policy = CachePolicy.fromObject(obj)` creates an instance from object created by `toObject()`.
     */
    static fromObject(obj: CachePolicy.CachePolicyObject): CachePolicy;

    /**
     * Returns updated, filtered set of request headers to send to the origin server to check if the cached
     * response can be reused. These headers allow the origin server to return status 304 indicating the
     * response is still fresh. All headers unrelated to caching are passed through as-is.
     *
     * Use this method when updating cache from the origin server.
     *
     * @example
     * updateRequest.headers = cachePolicy.revalidationHeaders(updateRequest);
     */
    revalidationHeaders(newRequest: CachePolicy.Request): CachePolicy.Headers;

    /**
     * Use this method to update the cache after receiving a new response from the origin server.
     */
    revalidatedPolicy(
        revalidationRequest: CachePolicy.Request,
        revalidationResponse: CachePolicy.Response,
    ): CachePolicy.RevalidationPolicy;
}

declare namespace CachePolicy {
    interface Request {
        url?: string | undefined;
        method?: string | undefined;
        headers: Headers;
    }

    interface Response {
        status?: number | undefined;
        headers: Headers;
    }

    interface Options {
        /**
         * If `true`, then the response is evaluated from a perspective of a shared cache (i.e. `private` is not
         * cacheable and `s-maxage` is respected). If `false`, then the response is evaluated from a perspective
         * of a single-user cache (i.e. `private` is cacheable and `s-maxage` is ignored).
         * `true` is recommended for HTTP clients.
         * @default true
         */
        shared?: boolean | undefined;
        /**
         * A fraction of response's age that is used as a fallback cache duration. The default is 0.1 (10%),
         * e.g. if a file hasn't been modified for 100 days, it'll be cached for 100*0.1 = 10 days.
         * @default 0.1
         */
        cacheHeuristic?: number | undefined;
        /**
         * A number of milliseconds to assume as the default time to cache responses with `Cache-Control: immutable`.
         * Note that [per RFC](https://httpwg.org/specs/rfc8246.html#the-immutable-cache-control-extension)
         * these can become stale, so `max-age` still overrides the default.
         * @default 24*3600*1000 (24h)
         */
        immutableMinTimeToLive?: number | undefined;
        /**
         * If `true`, common anti-cache directives will be completely ignored if the non-standard `pre-check`
         * and `post-check` directives are present. These two useless directives are most commonly found
         * in bad StackOverflow answers and PHP's "session limiter" defaults.
         * @default false
         */
        ignoreCargoCult?: boolean | undefined;
        /**
         * If `false`, then server's `Date` header won't be used as the base for `max-age`. This is against the RFC,
         * but it's useful if you want to cache responses with very short `max-age`, but your local clock
         * is not exactly in sync with the server's.
         * @default true
         */
        trustServerDate?: boolean | undefined;
    }

    interface CachePolicyObject {
        v: number;
        t: number;
        sh: boolean;
        ch: number;
        imm: number;
        st: number;
        resh: Headers;
        rescc: { [key: string]: string };
        m: string;
        u?: string | undefined;
        h?: string | undefined;
        a: boolean;
        reqh: Headers | null;
        reqcc: { [key: string]: string };
    }

    interface Headers {
        [header: string]: string | string[] | undefined;
    }

    interface RevalidationPolicy {
        /**
         * A new `CachePolicy` with HTTP headers updated from `revalidationResponse`. You can always replace
         * the old cached `CachePolicy` with the new one.
         */
        policy: CachePolicy;
        /**
         * Boolean indicating whether the response body has changed.
         *
         * - If `false`, then a valid 304 Not Modified response has been received, and you can reuse the old
         * cached response body.
         * - If `true`, you should use new response's body (if present), or make another request to the origin
         * server without any conditional headers (i.e. don't use `revalidationHeaders()` this time) to get
         * the new resource.
         */
        modified: boolean;
        matches: boolean;
    }
}
