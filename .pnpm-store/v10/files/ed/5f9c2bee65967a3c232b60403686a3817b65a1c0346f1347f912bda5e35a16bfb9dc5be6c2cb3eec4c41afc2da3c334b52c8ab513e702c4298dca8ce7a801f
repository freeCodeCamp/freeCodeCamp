import { FinalizeHandler, FinalizeHandlerArguments, MetadataBearer, Provider, RetryStrategy } from "@smithy/types";
import { DelayDecider, RetryDecider, RetryQuota } from "./types";
/**
 * Strategy options to be passed to StandardRetryStrategy
 */
export interface StandardRetryStrategyOptions {
    retryDecider?: RetryDecider;
    delayDecider?: DelayDecider;
    retryQuota?: RetryQuota;
}
/**
 * @deprecated use StandardRetryStrategy from @smithy/util-retry
 */
export declare class StandardRetryStrategy implements RetryStrategy {
    private readonly maxAttemptsProvider;
    private retryDecider;
    private delayDecider;
    private retryQuota;
    mode: string;
    constructor(maxAttemptsProvider: Provider<number>, options?: StandardRetryStrategyOptions);
    private shouldRetry;
    private getMaxAttempts;
    retry<Input extends object, Ouput extends MetadataBearer>(next: FinalizeHandler<Input, Ouput>, args: FinalizeHandlerArguments<Input>, options?: {
        beforeRequest: Function;
        afterRequest: Function;
    }): Promise<{
        response: unknown;
        output: Ouput;
    }>;
}
