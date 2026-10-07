import type { DataCategory } from '../types/datacategory';
import type { TransportMakeRequestResponse } from '../types/transport';
export type RateLimits = Record<string, number>;
export declare const DEFAULT_RETRY_AFTER: number;
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param header string representation of 'Retry-After' header
 * @param now current unix timestamp
 *
 */
export declare function parseRetryAfterHeader(header: string, now?: number): number;
/**
 * Gets the time that the given category is disabled until for rate limiting.
 * In case no category-specific limit is set but a general rate limit across all categories is active,
 * that time is returned.
 *
 * @return the time in ms that the category is disabled until or 0 if there's no active rate limit.
 */
export declare function disabledUntil(limits: RateLimits, dataCategory: DataCategory): number;
/**
 * Checks if a category is rate limited
 */
export declare function isRateLimited(limits: RateLimits, dataCategory: DataCategory, now?: number): boolean;
/**
 * Update ratelimits from incoming headers.
 *
 * @return the updated RateLimits object.
 */
export declare function updateRateLimits(limits: RateLimits, { statusCode, headers }: TransportMakeRequestResponse, now?: number): RateLimits;
//# sourceMappingURL=ratelimit.d.ts.map