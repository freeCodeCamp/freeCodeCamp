import { InstrumentationBase } from '@opentelemetry/instrumentation';
import type { UndiciInstrumentationConfig } from './types';
export declare class UndiciInstrumentation extends InstrumentationBase<UndiciInstrumentationConfig> {
    private _channelSubs;
    private _recordFromReq;
    private _httpClientDurationHistogram;
    constructor(config?: UndiciInstrumentationConfig);
    protected init(): undefined;
    disable(): void;
    enable(): void;
    protected _updateMetricInstruments(): void;
    private subscribeToChannel;
    private parseRequestHeaders;
    private onRequestCreated;
    private onRequestHeaders;
    private onResponseHeaders;
    private onDone;
    private onError;
    private recordRequestDuration;
    private getRequestMethod;
}
//# sourceMappingURL=undici.d.ts.map