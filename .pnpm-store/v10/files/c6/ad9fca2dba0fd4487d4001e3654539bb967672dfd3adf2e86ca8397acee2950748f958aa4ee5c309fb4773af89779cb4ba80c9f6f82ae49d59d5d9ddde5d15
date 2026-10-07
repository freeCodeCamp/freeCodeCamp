import { Tracer } from '@opentelemetry/api';
import { BasicTracerProvider } from '@opentelemetry/sdk-trace-base';
import { DynamicSamplingContext, Scope, TraceContext } from '@sentry/core';
import { ServerRuntimeClient } from '@sentry/core';
import { AsyncLocalStorageLookup } from '@sentry/opentelemetry';
import { NodeClientOptions } from '../types';
/** A client for using Sentry with Node & OpenTelemetry. */
export declare class NodeClient extends ServerRuntimeClient<NodeClientOptions> {
    traceProvider: BasicTracerProvider | undefined;
    asyncLocalStorageLookup: AsyncLocalStorageLookup | undefined;
    private _tracer;
    private _clientReportInterval;
    private _clientReportOnExitFlushListener;
    private _logOnExitFlushListener;
    constructor(options: NodeClientOptions);
    /*Get the OTEL tracer. */
    readonly tracer: Tracer;
    /** @inheritDoc */
    flush(timeout?: number): PromiseLike<boolean>;
    /** @inheritDoc */
    close(timeout?: number | undefined): PromiseLike<boolean>;
    /**
     * Will start tracking client reports for this client.
     *
     * NOTICE: This method will create an interval that is periodically called and attach a `process.on('beforeExit')`
     * hook. To clean up these resources, call `.close()` when you no longer intend to use the client. Not doing so will
     * result in a memory leak.
     */
    startClientReportTracking(): void;
    /** @inheritDoc */
    protected _setupIntegrations(): void;
    /** Custom implementation for OTEL, so we can handle scope-span linking. */
    protected _getTraceInfoFromScope(scope: Scope | undefined): [
        /*dynamicSamplingContext*/ Partial<DynamicSamplingContext> | undefined,
        /*traceContext*/ TraceContext | undefined
    ];
}
//# sourceMappingURL=client.d.ts.map
