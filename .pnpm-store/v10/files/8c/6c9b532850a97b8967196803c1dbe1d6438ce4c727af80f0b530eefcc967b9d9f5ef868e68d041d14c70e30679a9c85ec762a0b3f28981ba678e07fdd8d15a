import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { MongoDBInstrumentationConfig } from './types';
/** mongodb instrumentation plugin for OpenTelemetry */
export declare class MongoDBInstrumentation extends InstrumentationBase<MongoDBInstrumentationConfig> {
    private _netSemconvStability;
    private _dbSemconvStability;
    private _connectionsUsage;
    private _poolName;
    constructor(config?: MongoDBInstrumentationConfig);
    private _setSemconvStabilityFromEnv;
    setConfig(config?: MongoDBInstrumentationConfig): void;
    _updateMetricInstruments(): void;
    /**
     * Convenience function for updating the `db.client.connections.usage` metric.
     * The name "count" comes from the eventual replacement for this metric per
     * https://opentelemetry.io/docs/specs/semconv/non-normative/db-migration/#database-client-connection-count
     */
    private _connCountAdd;
    init(): InstrumentationNodeModuleDefinition[];
    private _getV3ConnectionPatches;
    private _getV4SessionsPatches;
    private _getV4AcquireCommand;
    private _getV4ReleaseCommand;
    private _getV4ConnectionPoolPatches;
    private _getV4ConnectPatches;
    private _getV4ConnectionPoolCheckOut;
    private _getV4ConnectCommand;
    private _getV4ConnectionPatches;
    /** Creates spans for common operations */
    private _getV3PatchOperation;
    /** Creates spans for command operation */
    private _getV3PatchCommand;
    /** Creates spans for command operation */
    private _getV4PatchCommandCallback;
    private _getV4PatchCommandPromise;
    /** Creates spans for find operation */
    private _getV3PatchFind;
    /** Creates spans for find operation */
    private _getV3PatchCursor;
    /**
     * Get the mongodb command type from the object.
     * @param command Internal mongodb command object
     */
    private static _getCommandType;
    /**
     * Determine a span's attributes by fetching related metadata from the context
     * @param connectionCtx mongodb internal connection context
     * @param ns mongodb namespace
     * @param command mongodb internal representation of a command
     */
    private _getV4SpanAttributes;
    /**
     * Determine a span's attributes by fetching related metadata from the context
     * @param ns mongodb namespace
     * @param topology mongodb internal representation of the network topology
     * @param command mongodb internal representation of a command
     */
    private _getV3SpanAttributes;
    private _getSpanAttributes;
    private _spanNameFromAttrs;
    private _getDefaultDbStatementReplacer;
    private _defaultDbStatementSerializer;
    /**
     * Triggers the response hook in case it is defined.
     * @param span The span to add the results to.
     * @param result The command result
     */
    private _handleExecutionResult;
    /**
     * Ends a created span.
     * @param span The created span to end.
     * @param resultHandler A callback function.
     * @param connectionId: The connection ID of the Command response.
     */
    private _patchEnd;
    private setPoolName;
    private _checkSkipInstrumentation;
}
//# sourceMappingURL=instrumentation.d.ts.map