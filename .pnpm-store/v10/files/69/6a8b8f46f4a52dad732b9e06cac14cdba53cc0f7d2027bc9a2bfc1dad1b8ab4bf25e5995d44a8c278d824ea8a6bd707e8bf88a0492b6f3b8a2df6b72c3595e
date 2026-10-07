import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { MySQLInstrumentationConfig } from './types';
export declare class MySQLInstrumentation extends InstrumentationBase<MySQLInstrumentationConfig> {
    private _netSemconvStability;
    private _dbSemconvStability;
    private _connectionsUsageOld;
    constructor(config?: MySQLInstrumentationConfig);
    private _setSemconvStabilityFromEnv;
    protected _updateMetricInstruments(): void;
    /**
     * Convenience function for updating the `db.client.connections.usage` metric.
     * The name "count" comes from the eventually replacement for this metric per
     * https://opentelemetry.io/docs/specs/semconv/non-normative/db-migration/#database-client-connection-count
     */
    private _connCountAdd;
    protected init(): InstrumentationNodeModuleDefinition[];
    private _patchCreateConnection;
    private _patchCreatePool;
    private _patchPoolEnd;
    private _patchCreatePoolCluster;
    private _patchAdd;
    private _patchGetConnection;
    private _getConnectionCallbackPatchFn;
    private _patchQuery;
    private _patchCallbackQuery;
    private _setPoolCallbacks;
}
//# sourceMappingURL=instrumentation.d.ts.map