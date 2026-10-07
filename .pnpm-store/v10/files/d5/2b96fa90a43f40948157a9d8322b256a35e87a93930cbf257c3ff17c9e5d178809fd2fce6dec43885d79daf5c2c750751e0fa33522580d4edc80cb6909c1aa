import { Provider, RetryErrorInfo, RetryStrategyV2, RetryToken, StandardRetryToken } from "@smithy/types";
import { RateLimiter } from "./types";
/**
 * @public
 *
 * Strategy options to be passed to AdaptiveRetryStrategy
 */
export interface AdaptiveRetryStrategyOptions {
    rateLimiter?: RateLimiter;
}
/**
 * @public
 *
 * The AdaptiveRetryStrategy is a retry strategy for executing against a very
 * resource constrained set of resources. Care should be taken when using this
 * retry strategy. By default, it uses a dynamic backoff delay based on load
 * currently perceived against the downstream resource and performs circuit
 * breaking to disable retries in the event of high downstream failures using
 * the DefaultRateLimiter.
 *
 * @see {@link StandardRetryStrategy}
 * @see {@link DefaultRateLimiter }
 */
export declare class AdaptiveRetryStrategy implements RetryStrategyV2 {
    private readonly maxAttemptsProvider;
    private rateLimiter;
    private standardRetryStrategy;
    readonly mode: string;
    constructor(maxAttemptsProvider: Provider<number>, options?: AdaptiveRetryStrategyOptions);
    acquireInitialRetryToken(retryTokenScope: string): Promise<RetryToken>;
    refreshRetryTokenForRetry(tokenToRenew: StandardRetryToken, errorInfo: RetryErrorInfo): Promise<RetryToken>;
    recordSuccess(token: StandardRetryToken): void;
}
