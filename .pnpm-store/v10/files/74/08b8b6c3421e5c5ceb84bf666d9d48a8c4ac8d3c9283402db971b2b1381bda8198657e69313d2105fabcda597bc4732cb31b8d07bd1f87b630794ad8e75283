import { Provider, RetryBackoffStrategy, RetryErrorInfo, RetryStrategyV2, StandardRetryToken } from "@smithy/types";
import { StandardRetryStrategy } from "./StandardRetryStrategy";
/**
 * @public
 *
 * This extension of the StandardRetryStrategy allows customizing the
 * backoff computation.
 */
export declare class ConfiguredRetryStrategy extends StandardRetryStrategy implements RetryStrategyV2 {
    private readonly computeNextBackoffDelay;
    /**
     * @param maxAttempts - the maximum number of retry attempts allowed.
     *                      e.g., if set to 3, then 4 total requests are possible.
     * @param computeNextBackoffDelay - a millisecond delay for each retry or a function that takes the retry attempt
     *                                  and returns the delay.
     *
     * @example exponential backoff.
     * ```js
     * new Client({
     *   retryStrategy: new ConfiguredRetryStrategy(3, (attempt) => attempt ** 2)
     * });
     * ```
     * @example constant delay.
     * ```js
     * new Client({
     *   retryStrategy: new ConfiguredRetryStrategy(3, 2000)
     * });
     * ```
     */
    constructor(maxAttempts: number | Provider<number>, computeNextBackoffDelay?: number | RetryBackoffStrategy["computeNextBackoffDelay"]);
    refreshRetryTokenForRetry(tokenToRenew: StandardRetryToken, errorInfo: RetryErrorInfo): Promise<StandardRetryToken>;
}
