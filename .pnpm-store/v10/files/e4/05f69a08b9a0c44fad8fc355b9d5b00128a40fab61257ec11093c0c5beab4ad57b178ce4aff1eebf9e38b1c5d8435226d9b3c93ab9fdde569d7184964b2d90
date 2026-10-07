import { CaptureContext } from './scope';
import { CheckIn, MonitorConfig } from './types/checkin';
import { Event, EventHint } from './types/event';
import { EventProcessor } from './types/eventprocessor';
import { Extra, Extras } from './types/extra';
import { Primitive } from './types/misc';
import { Session, SessionContext } from './types/session';
import { SeverityLevel } from './types/severity';
import { User } from './types/user';
import { ExclusiveEventHintOrCaptureContext } from './utils/prepareEvent';
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception The exception to capture.
 * @param hint Optional additional data to attach to the Sentry event.
 * @returns the id of the captured Sentry event.
 */
export declare function captureException(exception: unknown, hint?: ExclusiveEventHintOrCaptureContext): string;
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param captureContext Define the level of the message or pass in additional data to attach to the message.
 * @returns the id of the captured message.
 */
export declare function captureMessage(message: string, captureContext?: CaptureContext | SeverityLevel): string;
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @param hint Optional additional data to attach to the Sentry event.
 * @returns the id of the captured event.
 */
export declare function captureEvent(event: Event, hint?: EventHint): string;
/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */
export declare function setContext(name: string, context: {
    [key: string]: unknown;
} | null): void;
/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
export declare function setExtras(extras: Extras): void;
/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */
export declare function setExtra(key: string, extra: Extra): void;
/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
export declare function setTags(tags: {
    [key: string]: Primitive;
}): void;
/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */
export declare function setTag(key: string, value: Primitive): void;
/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
export declare function setUser(user: User | null): void;
/**
 * Sets the conversation ID for the current isolation scope.
 *
 * @param conversationId The conversation ID to set. Pass `null` or `undefined` to unset the conversation ID.
 */
export declare function setConversationId(conversationId: string | null | undefined): void;
/**
 * The last error event id of the isolation scope.
 *
 * Warning: This function really returns the last recorded error event id on the current
 * isolation scope. If you call this function after handling a certain error and another error
 * is captured in between, the last one is returned instead of the one you might expect.
 * Also, ids of events that were never sent to Sentry (for example because
 * they were dropped in `beforeSend`) could be returned.
 *
 * @returns The last event id of the isolation scope.
 */
export declare function lastEventId(): string | undefined;
/**
 * Create a cron monitor check in and send it to Sentry.
 *
 * @param checkIn An object that describes a check in.
 * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
 * to create a monitor automatically when sending a check in.
 */
export declare function captureCheckIn(checkIn: CheckIn, upsertMonitorConfig?: MonitorConfig): string;
/**
 * Wraps a callback with a cron monitor check in. The check in will be sent to Sentry when the callback finishes.
 *
 * @param monitorSlug The distinct slug of the monitor.
 * @param callback Callback to be monitored
 * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
 * to create a monitor automatically when sending a check in.
 */
export declare function withMonitor<T>(monitorSlug: CheckIn['monitorSlug'], callback: () => T, upsertMonitorConfig?: MonitorConfig): T;
/**
 * Call `flush()` on the current client, if there is one. See {@link Client.flush}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
 * the client to wait until all events are sent before resolving the promise.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
export declare function flush(timeout?: number): Promise<boolean>;
/**
 * Call `close()` on the current client, if there is one. See {@link Client.close}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue before shutting down. Omitting this
 * parameter will cause the client to wait until all events are sent before disabling itself.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
export declare function close(timeout?: number): Promise<boolean>;
/**
 * Returns true if Sentry has been properly initialized.
 */
export declare function isInitialized(): boolean;
/** If the SDK is initialized & enabled. */
export declare function isEnabled(): boolean;
/**
 * Add an event processor.
 * This will be added to the current isolation scope, ensuring any event that is processed in the current execution
 * context will have the processor applied.
 */
export declare function addEventProcessor(callback: EventProcessor): void;
/**
 * Start a session on the current isolation scope.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns the new active session
 */
export declare function startSession(context?: SessionContext): Session;
/**
 * End the session on the current isolation scope.
 */
export declare function endSession(): void;
/**
 * Sends the current session on the scope to Sentry
 *
 * @param end If set the session will be marked as exited and removed from the scope.
 *            Defaults to `false`.
 */
export declare function captureSession(end?: boolean): void;
//# sourceMappingURL=exports.d.ts.map
