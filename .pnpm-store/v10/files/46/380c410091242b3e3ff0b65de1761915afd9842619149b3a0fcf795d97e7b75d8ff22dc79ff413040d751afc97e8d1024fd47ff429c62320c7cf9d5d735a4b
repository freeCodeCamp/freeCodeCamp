import { SdkError } from "@smithy/types";
/**
 * Determines whether an error is retryable based on the number of retries
 * already attempted, the HTTP status code, and the error received (if any).
 *
 * @param error - The error encountered.
 */
export interface RetryDecider {
    (error: SdkError): boolean;
}
/**
 * Determines the number of milliseconds to wait before retrying an action.
 *
 * @param delayBase - The base delay (in milliseconds).
 * @param attempts - The number of times the action has already been tried.
 */
export interface DelayDecider {
    (delayBase: number, attempts: number): number;
}
/**
 * Interface that specifies the retry quota behavior.
 */
export interface RetryQuota {
    /**
     * returns true if retry tokens are available from the retry quota bucket.
     */
    hasRetryTokens: (error: SdkError) => boolean;
    /**
     * returns token amount from the retry quota bucket.
     * throws error is retry tokens are not available.
     */
    retrieveRetryTokens: (error: SdkError) => number;
    /**
     * releases tokens back to the retry quota.
     */
    releaseRetryTokens: (releaseCapacityAmount?: number) => void;
}
export interface RateLimiter {
    /**
     * If there is sufficient capacity (tokens) available, it immediately returns.
     * If there is not sufficient capacity, it will either sleep a certain amount
     * of time until the rate limiter can retrieve a token from its token bucket
     * or raise an exception indicating there is insufficient capacity.
     */
    getSendToken: () => Promise<void>;
    /**
     * Updates the client sending rate based on response.
     * If the response was successful, the capacity and fill rate are increased.
     * If the response was a throttling response, the capacity and fill rate are
     * decreased. Transient errors do not affect the rate limiter.
     */
    updateClientSendingRate: (response: any) => void;
}
