import { FinalizeHandler, FinalizeHandlerArguments, MetadataBearer, Provider } from "@smithy/types";
import { RateLimiter } from "@smithy/util-retry";
import { StandardRetryStrategy, StandardRetryStrategyOptions } from "./StandardRetryStrategy";
/**
 * Strategy options to be passed to AdaptiveRetryStrategy
 */
export interface AdaptiveRetryStrategyOptions extends StandardRetryStrategyOptions {
    rateLimiter?: RateLimiter;
}
/**
 * @deprecated use AdaptiveRetryStrategy from @smithy/util-retry
 */
export declare class AdaptiveRetryStrategy extends StandardRetryStrategy {
    private rateLimiter;
    constructor(maxAttemptsProvider: Provider<number>, options?: AdaptiveRetryStrategyOptions);
    retry<Input extends object, Ouput extends MetadataBearer>(next: FinalizeHandler<Input, Ouput>, args: FinalizeHandlerArguments<Input>): Promise<{
        response: unknown;
        output: Ouput;
    }>;
}
