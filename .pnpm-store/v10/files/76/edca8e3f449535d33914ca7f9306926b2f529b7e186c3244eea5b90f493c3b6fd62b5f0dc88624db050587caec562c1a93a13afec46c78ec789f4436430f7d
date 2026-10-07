import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { TediousInstrumentationConfig } from './types';
export declare const INJECTED_CTX: unique symbol;
export declare class TediousInstrumentation extends InstrumentationBase<TediousInstrumentationConfig> {
    static readonly COMPONENT = "tedious";
    private _netSemconvStability;
    private _dbSemconvStability;
    constructor(config?: TediousInstrumentationConfig);
    private _setSemconvStabilityFromEnv;
    protected init(): InstrumentationNodeModuleDefinition[];
    private _patchConnect;
    private _buildTraceparent;
    /**
     * Fire a one-off `SET CONTEXT_INFO @opentelemetry_traceparent` on the same
     * connection. Marks the request with INJECTED_CTX so our patch skips it.
     */
    private _injectContextInfo;
    private _shouldInjectFor;
    private _patchQuery;
    private _patchCallbackQuery;
}
//# sourceMappingURL=instrumentation.d.ts.map