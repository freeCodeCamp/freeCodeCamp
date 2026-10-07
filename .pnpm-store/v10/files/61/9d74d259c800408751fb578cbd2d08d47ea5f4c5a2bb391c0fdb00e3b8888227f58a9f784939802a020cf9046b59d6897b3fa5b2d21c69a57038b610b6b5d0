import { Client } from './client';
import type { Scope } from './scope';
import type { CheckIn, MonitorConfig } from './types/checkin';
import type { Event, EventHint } from './types/event';
import type { ClientOptions } from './types/options';
import type { ParameterizedString } from './types/parameterize';
import type { SeverityLevel } from './types/severity';
import type { BaseTransportOptions } from './types/transport';
export interface ServerRuntimeClientOptions extends ClientOptions<BaseTransportOptions> {
    platform?: string;
    runtime?: {
        name: string;
        version?: string;
    };
    serverName?: string;
}
/**
 * The Sentry Server Runtime Client SDK.
 */
export declare class ServerRuntimeClient<O extends ClientOptions & ServerRuntimeClientOptions = ServerRuntimeClientOptions> extends Client<O> {
    private _disposeCallbacks;
    /**
     * Creates a new Edge SDK instance.
     * @param options Configuration options for this SDK.
     */
    constructor(options: O);
    /**
     * @inheritDoc
     */
    eventFromException(exception: unknown, hint?: EventHint): PromiseLike<Event>;
    /**
     * @inheritDoc
     */
    eventFromMessage(message: ParameterizedString, level?: SeverityLevel, hint?: EventHint): PromiseLike<Event>;
    /**
     * @inheritDoc
     */
    captureException(exception: unknown, hint?: EventHint, scope?: Scope): string;
    /**
     * @inheritDoc
     */
    captureEvent(event: Event, hint?: EventHint, scope?: Scope): string;
    /**
     * Create a cron monitor check in and send it to Sentry.
     *
     * @param checkIn An object that describes a check in.
     * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
     * to create a monitor automatically when sending a check in.
     */
    captureCheckIn(checkIn: CheckIn, monitorConfig?: MonitorConfig, scope?: Scope): string;
    /**
     * @inheritDoc
     */
    registerCleanup(callback: () => void): void;
    /**
     * Disposes of the client and releases all resources.
     *
     * This method clears all internal state to allow the client to be garbage collected.
     * It clears hooks, event processors, integrations, transport, and other internal references.
     *
     * Call this method after flushing to allow the client to be garbage collected.
     * After calling dispose(), the client should not be used anymore.
     *
     * Subclasses should override this method to clean up their own resources and call `super.dispose()`.
     */
    dispose(): void;
    /**
     * @inheritDoc
     */
    protected _prepareEvent(event: Event, hint: EventHint, currentScope: Scope, isolationScope: Scope): PromiseLike<Event | null>;
    /**
     * Process a server-side metric before it is captured.
     */
    private _setUpMetricsProcessing;
}
//# sourceMappingURL=server-runtime-client.d.ts.map