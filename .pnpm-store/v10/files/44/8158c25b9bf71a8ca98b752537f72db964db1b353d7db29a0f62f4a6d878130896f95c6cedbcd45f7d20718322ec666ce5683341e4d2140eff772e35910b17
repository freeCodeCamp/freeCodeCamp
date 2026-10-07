import type { Sampler } from './Sampler';
import type { SpanLimits, TracerConfig, GeneralLimits } from './types';
export declare const DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
export declare const DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT: number;
/**
 * Function to merge Default configuration (as specified in './config') with
 * user provided configurations.
 */
export declare function mergeConfig(userConfig: TracerConfig): TracerConfig & {
    sampler: Sampler;
    spanLimits: SpanLimits;
    generalLimits: GeneralLimits;
};
/**
 * When general limits are provided and model specific limits are not,
 * configures the model specific limits by using the values from the general ones.
 * @param userConfig User provided tracer configuration
 */
export declare function reconfigureLimits(userConfig: TracerConfig): TracerConfig;
//# sourceMappingURL=utility.d.ts.map