import type { Context, Link, Attributes, SpanKind } from '@opentelemetry/api';
import type { Sampler, SamplingResult } from '../Sampler';
/**
 * A composite sampler that either respects the parent span's sampling decision
 * or delegates to `delegateSampler` for root spans.
 */
export declare class ParentBasedSampler implements Sampler {
    private _root;
    private _remoteParentSampled;
    private _remoteParentNotSampled;
    private _localParentSampled;
    private _localParentNotSampled;
    constructor(config: ParentBasedSamplerConfig);
    shouldSample(context: Context, traceId: string, spanName: string, spanKind: SpanKind, attributes: Attributes, links: Link[]): SamplingResult;
    toString(): string;
}
interface ParentBasedSamplerConfig {
    /** Sampler called for spans with no parent */
    root: Sampler;
    /** Sampler called for spans with a remote parent which was sampled. Default AlwaysOn */
    remoteParentSampled?: Sampler;
    /** Sampler called for spans with a remote parent which was not sampled. Default AlwaysOff */
    remoteParentNotSampled?: Sampler;
    /** Sampler called for spans with a local parent which was sampled. Default AlwaysOn */
    localParentSampled?: Sampler;
    /** Sampler called for spans with a local parent which was not sampled. Default AlwaysOff */
    localParentNotSampled?: Sampler;
}
export {};
//# sourceMappingURL=ParentBasedSampler.d.ts.map