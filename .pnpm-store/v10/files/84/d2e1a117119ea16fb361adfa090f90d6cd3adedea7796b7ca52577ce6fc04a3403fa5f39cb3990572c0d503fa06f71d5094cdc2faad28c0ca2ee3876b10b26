import { Span } from '@opentelemetry/api';
import { InstrumentationBase, InstrumentationConfig } from '@opentelemetry/instrumentation';
declare const kRecordExceptions: unique symbol;
export interface FastifyOtelInstrumentationOpts extends InstrumentationConfig {
    registerOnInitialization?: boolean;
    requestHook?: (span: Span, request: any) => void;
    lifecycleHook?: (span: Span, info: {
        hookName: string;
        request: any;
        handler?: string;
    }) => void;
    recordExceptions?: boolean;
}
export declare class FastifyOtelInstrumentation extends InstrumentationBase<FastifyOtelInstrumentationOpts> {
    _otelLogger: any;
    _requestHook: ((span: Span, request: any) => void) | null;
    _lifecycleHook: ((span: Span, info: any) => void) | null;
    _handleInitialization: ((message: any) => void) | undefined;
    [kRecordExceptions]: boolean;
    constructor(config?: FastifyOtelInstrumentationOpts);
    enable(): any;
    disable(): any;
    init(): never[];
    plugin(): any;
}
export {};
//# sourceMappingURL=instrumentation.d.ts.map
