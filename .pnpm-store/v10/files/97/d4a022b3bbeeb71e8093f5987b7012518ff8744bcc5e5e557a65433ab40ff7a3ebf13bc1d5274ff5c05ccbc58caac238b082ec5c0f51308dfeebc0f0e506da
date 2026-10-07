import { RetryStrategyV2 } from "../retry";
import { Provider, RetryStrategy } from "../util";
/**
 * A configuration interface with methods called by runtime extension
 * @internal
 */
export interface RetryStrategyConfiguration {
    /**
     * Set retry strategy used for all http requests
     * @param retryStrategy
     */
    setRetryStrategy(retryStrategy: Provider<RetryStrategyV2 | RetryStrategy>): void;
    /**
     * Get retry strategy used for all http requests
     * @param retryStrategy
     */
    retryStrategy(): Provider<RetryStrategyV2 | RetryStrategy>;
}
