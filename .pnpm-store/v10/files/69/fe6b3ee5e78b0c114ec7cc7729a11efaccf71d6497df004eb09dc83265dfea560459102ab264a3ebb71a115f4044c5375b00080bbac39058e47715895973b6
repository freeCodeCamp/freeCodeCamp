import { ServerRuntimeClient } from '@sentry/core';
import type { NodeClientOptions } from '../types';
/** A lightweight client for using Sentry with Node without OpenTelemetry. */
export declare class LightNodeClient extends ServerRuntimeClient<NodeClientOptions> {
    private _clientReportInterval;
    private _clientReportOnExitFlushListener;
    private _logOnExitFlushListener;
    constructor(options: NodeClientOptions);
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
}
//# sourceMappingURL=client.d.ts.map