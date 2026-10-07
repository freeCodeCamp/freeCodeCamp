import { Tracer } from '../index';
export interface ApiCompatibilityChecksOptions {
    /** a boolean that controls whether or not to verify certain API functionality */
    skipBaggageChecks?: boolean;
    skipInjectExtractChecks?: boolean;
}
/**
 * A function that takes a tracer factory, and tests wheter the initialized tracer
 * fulfills Opentracing's api requirements.
 *
 * @param {object} createTracer - a factory function that allocates a tracer.
 * @param {object} [options] - the options to be set on api compatibility
 */
declare function apiCompatibilityChecks(createTracer?: () => Tracer, options?: ApiCompatibilityChecksOptions): void;
export default apiCompatibilityChecks;
//# sourceMappingURL=api_compatibility.d.ts.map