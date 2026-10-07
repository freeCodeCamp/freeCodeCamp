import { Provider, RetryStrategy, RetryStrategyConfiguration, RetryStrategyV2 } from "@smithy/types";
export type PartialRetryRuntimeConfigType = Partial<{
    retryStrategy: Provider<RetryStrategyV2 | RetryStrategy>;
}>;
/**
 * @internal
 */
export declare const getRetryConfiguration: (runtimeConfig: PartialRetryRuntimeConfigType) => {
    setRetryStrategy(retryStrategy: Provider<RetryStrategyV2 | RetryStrategy>): void;
    retryStrategy(): Provider<RetryStrategyV2 | RetryStrategy>;
};
/**
 * @internal
 */
export declare const resolveRetryRuntimeConfig: (retryStrategyConfiguration: RetryStrategyConfiguration) => PartialRetryRuntimeConfigType;
