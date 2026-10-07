import { RateLimiter } from "./types";
/**
 * @public
 */
export interface DefaultRateLimiterOptions {
    beta?: number;
    minCapacity?: number;
    minFillRate?: number;
    scaleConstant?: number;
    smooth?: number;
}
/**
 * @public
 */
export declare class DefaultRateLimiter implements RateLimiter {
    private beta;
    private minCapacity;
    private minFillRate;
    private scaleConstant;
    private smooth;
    private currentCapacity;
    private enabled;
    private lastMaxRate;
    private measuredTxRate;
    private requestCount;
    private fillRate;
    private lastThrottleTime;
    private lastTimestamp;
    private lastTxRateBucket;
    private maxCapacity;
    private timeWindow;
    constructor(options?: DefaultRateLimiterOptions);
    private getCurrentTimeInSeconds;
    getSendToken(): Promise<void>;
    private acquireTokenBucket;
    private refillTokenBucket;
    updateClientSendingRate(response: any): void;
    private calculateTimeWindow;
    private cubicThrottle;
    private cubicSuccess;
    private enableTokenBucket;
    private updateTokenBucketRate;
    private updateMeasuredRate;
    private getPrecise;
}
