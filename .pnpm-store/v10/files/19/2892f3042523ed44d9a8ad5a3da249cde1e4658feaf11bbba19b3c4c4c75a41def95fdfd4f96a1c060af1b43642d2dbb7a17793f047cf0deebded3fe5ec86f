import type { CoreOptions } from '../types/options';
import type { SamplingContext } from '../types/samplingcontext';
/**
 * Makes a sampling decision for the given options.
 *
 * Called every time a root span is created. Only root spans which emerge with a `sampled` value of `true` will be
 * sent to Sentry.
 */
export declare function sampleSpan(options: Pick<CoreOptions, 'tracesSampleRate' | 'tracesSampler'>, samplingContext: SamplingContext, sampleRand: number): [sampled: boolean, sampleRate?: number, localSampleRateWasApplied?: boolean];
//# sourceMappingURL=sampling.d.ts.map