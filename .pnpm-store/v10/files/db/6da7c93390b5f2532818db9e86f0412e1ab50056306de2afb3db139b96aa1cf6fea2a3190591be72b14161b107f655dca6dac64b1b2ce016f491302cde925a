import { Provider, RetryErrorInfo, RetryStrategyV2, StandardRetryToken } from "@smithy/types";
/**
 * @public
 */
export declare class StandardRetryStrategy implements RetryStrategyV2 {
    private readonly maxAttempts;
    readonly mode: string;
    private capacity;
    private readonly retryBackoffStrategy;
    private readonly maxAttemptsProvider;
    constructor(maxAttempts: number);
    constructor(maxAttemptsProvider: Provider<number>);
    acquireInitialRetryToken(retryTokenScope: string): Promise<StandardRetryToken>;
    refreshRetryTokenForRetry(token: StandardRetryToken, errorInfo: RetryErrorInfo): Promise<StandardRetryToken>;
    recordSuccess(token: StandardRetryToken): void;
    /**
     * @returns the current available retry capacity.
     *
     * This number decreases when retries are executed and refills when requests or retries succeed.
     */
    getCapacity(): number;
    private getMaxAttempts;
    private shouldRetry;
    private getCapacityCost;
    private isRetryableError;
}
