import type { IORedisResponseCustomAttributeFunction } from './vendored/types';
interface RedisOptions {
    /**
     * Define cache prefixes for cache keys that should be captured as a cache span.
     *
     * Setting this to, for example, `['user:']` will capture cache keys that start with `user:`.
     */
    cachePrefixes?: string[];
    /**
     * Maximum length of the cache key added to the span description. If the key exceeds this length, it will be truncated.
     *
     * Passing `0` will use the full cache key without truncation.
     *
     * By default, the full cache key is used.
     */
    maxCacheKeyLength?: number;
}
export declare let _redisOptions: RedisOptions;
export declare const cacheResponseHook: IORedisResponseCustomAttributeFunction;
/** To be able to preload all Redis OTel instrumentations with just one ID ("Redis"), all the instrumentations are generated in this one function  */
export declare const instrumentRedis: (() => void) & {
    id: string;
};
/**
 * Adds Sentry tracing instrumentation for the [redis](https://www.npmjs.com/package/redis) and
 * [ioredis](https://www.npmjs.com/package/ioredis) libraries.
 *
 * For more information, see the [`redisIntegration` documentation](https://docs.sentry.io/platforms/javascript/guides/node/configuration/integrations/redis/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *  integrations: [Sentry.redisIntegration()],
 * });
 * ```
 */
export declare const redisIntegration: (options?: RedisOptions | undefined) => import("@sentry/core").Integration;
export {};
//# sourceMappingURL=index.d.ts.map