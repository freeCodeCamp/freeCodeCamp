import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { PgInstrumentationConfig } from './types';
export declare class PgInstrumentation extends InstrumentationBase<PgInstrumentationConfig> {
    private _operationDuration;
    private _connectionsCount;
    private _connectionPendingRequests;
    private _connectionsCounter;
    private _semconvStability;
    constructor(config?: PgInstrumentationConfig);
    _updateMetricInstruments(): void;
    protected init(): InstrumentationNodeModuleDefinition[];
    private _patchPgClient;
    private _unpatchPgClient;
    private _getClientConnectPatch;
    private recordOperationDuration;
    private _getClientQueryPatch;
    private _setPoolConnectEventListeners;
    private _getPoolConnectPatch;
}
//# sourceMappingURL=instrumentation.d.ts.map