import type { Sampler, SamplingResult } from '../Sampler';
/** Sampler that samples a given fraction of traces based of trace id deterministically. */
export declare class TraceIdRatioBasedSampler implements Sampler {
    private readonly _ratio;
    private _upperBound;
    constructor(ratio?: number);
    shouldSample(context: unknown, traceId: string): SamplingResult;
    toString(): string;
    private _normalize;
    private _accumulate;
}
//# sourceMappingURL=TraceIdRatioBasedSampler.d.ts.map