import type { AttributeObject, RawAttribute, RawAttributes } from './attributes';
import type { Client } from './client';
import type { Attachment } from './types/attachment';
import type { Breadcrumb } from './types/breadcrumb';
import type { Context, Contexts } from './types/context';
import type { DynamicSamplingContext } from './types/envelope';
import type { Event, EventHint } from './types/event';
import type { EventProcessor } from './types/eventprocessor';
import type { Extra, Extras } from './types/extra';
import type { Primitive } from './types/misc';
import type { RequestEventData } from './types/request';
import type { Session } from './types/session';
import type { SeverityLevel } from './types/severity';
import type { Span } from './types/span';
import type { PropagationContext } from './types/tracing';
import type { User } from './types/user';
/**
 * A context to be used for capturing an event.
 * This can either be a Scope, or a partial ScopeContext,
 * or a callback that receives the current scope and returns a new scope to use.
 */
export type CaptureContext = Scope | Partial<ScopeContext> | ((scope: Scope) => Scope);
/**
 * Data that can be converted to a Scope.
 */
export interface ScopeContext {
    user: User;
    level: SeverityLevel;
    extra: Extras;
    contexts: Contexts;
    tags: {
        [key: string]: Primitive;
    };
    attributes?: RawAttributes<Record<string, unknown>>;
    fingerprint: string[];
    propagationContext: PropagationContext;
    conversationId?: string;
}
export interface SdkProcessingMetadata {
    [key: string]: unknown;
    requestSession?: {
        status: 'ok' | 'errored' | 'crashed';
    };
    normalizedRequest?: RequestEventData;
    dynamicSamplingContext?: Partial<DynamicSamplingContext>;
    capturedSpanScope?: Scope;
    capturedSpanIsolationScope?: Scope;
    spanCountBeforeProcessing?: number;
    ipAddress?: string;
}
/**
 * Normalized data of the Scope, ready to be used.
 */
export interface ScopeData {
    eventProcessors: EventProcessor[];
    breadcrumbs: Breadcrumb[];
    user: User;
    tags: {
        [key: string]: Primitive;
    };
    attributes?: RawAttributes<Record<string, unknown>>;
    extra: Extras;
    contexts: Contexts;
    attachments: Attachment[];
    propagationContext: PropagationContext;
    sdkProcessingMetadata: SdkProcessingMetadata;
    fingerprint: string[];
    level?: SeverityLevel;
    transactionName?: string;
    span?: Span;
    conversationId?: string;
}
/**
 * Holds additional event information.
 */
export declare class Scope {
    /** Flag if notifying is happening. */
    protected _notifyingListeners: boolean;
    /** Callback for client to receive scope changes. */
    protected _scopeListeners: Array<(scope: Scope) => void>;
    /** Callback list that will be called during event processing. */
    protected _eventProcessors: EventProcessor[];
    /** Array of breadcrumbs. */
    protected _breadcrumbs: Breadcrumb[];
    /** User */
    protected _user: User;
    /** Tags */
    protected _tags: {
        [key: string]: Primitive;
    };
    /** Attributes */
    protected _attributes: RawAttributes<Record<string, unknown>>;
    /** Extra */
    protected _extra: Extras;
    /** Contexts */
    protected _contexts: Contexts;
    /** Attachments */
    protected _attachments: Attachment[];
    /** Propagation Context for distributed tracing */
    protected _propagationContext: PropagationContext;
    /**
     * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
     * sent to Sentry
     */
    protected _sdkProcessingMetadata: SdkProcessingMetadata;
    /** Fingerprint */
    protected _fingerprint?: string[];
    /** Severity */
    protected _level?: SeverityLevel;
    /**
     * Transaction Name
     *
     * IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
     * It's purpose is to assign a transaction to the scope that's added to non-transaction events.
     */
    protected _transactionName?: string;
    /** Session */
    protected _session?: Session;
    /** The client on this scope */
    protected _client?: Client;
    /** Contains the last event id of a captured event.  */
    protected _lastEventId?: string;
    /** Conversation ID */
    protected _conversationId?: string;
    constructor();
    /**
     * Clone all data from this scope into a new scope.
     */
    clone(): Scope;
    /**
     * Update the client assigned to this scope.
     * Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
     * as well as manually created scopes.
     */
    setClient(client: Client | undefined): void;
    /**
     * Set the ID of the last captured error event.
     * This is generally only captured on the isolation scope.
     */
    setLastEventId(lastEventId: string | undefined): void;
    /**
     * Get the client assigned to this scope.
     */
    getClient<C extends Client>(): C | undefined;
    /**
     * Get the ID of the last captured error event.
     * This is generally only available on the isolation scope.
     */
    lastEventId(): string | undefined;
    /**
     * @inheritDoc
     */
    addScopeListener(callback: (scope: Scope) => void): void;
    /**
     * Add an event processor that will be called before an event is sent.
     */
    addEventProcessor(callback: EventProcessor): this;
    /**
     * Set the user for this scope.
     * Set to `null` to unset the user.
     */
    setUser(user: User | null): this;
    /**
     * Get the user from this scope.
     */
    getUser(): User | undefined;
    /**
     * Set the conversation ID for this scope.
     * Set to `null` to unset the conversation ID.
     */
    setConversationId(conversationId: string | null | undefined): this;
    /**
     * Set an object that will be merged into existing tags on the scope,
     * and will be sent as tags data with the event.
     */
    setTags(tags: {
        [key: string]: Primitive;
    }): this;
    /**
     * Set a single tag that will be sent as tags data with the event.
     */
    setTag(key: string, value: Primitive): this;
    /**
     * Sets attributes onto the scope.
     *
     * These attributes are currently applied to logs and metrics.
     * In the future, they will also be applied to spans.
     *
     * Important: For now, only strings, numbers and boolean attributes are supported, despite types allowing for
     * more complex attribute types. We'll add this support in the future but already specify the wider type to
     * avoid a breaking change in the future.
     *
     * @param newAttributes - The attributes to set on the scope. You can either pass in key-value pairs, or
     * an object with a `value` and an optional `unit` (if applicable to your attribute).
     *
     * @example
     * ```typescript
     * scope.setAttributes({
     *   is_admin: true,
     *   payment_selection: 'credit_card',
     *   render_duration: { value: 'render_duration', unit: 'ms' },
     * });
     * ```
     */
    setAttributes<T extends Record<string, unknown>>(newAttributes: RawAttributes<T>): this;
    /**
     * Sets an attribute onto the scope.
     *
     * These attributes are currently applied to logs and metrics.
     * In the future, they will also be applied to spans.
     *
     * Important: For now, only strings, numbers and boolean attributes are supported, despite types allowing for
     * more complex attribute types. We'll add this support in the future but already specify the wider type to
     * avoid a breaking change in the future.
     *
     * @param key - The attribute key.
     * @param value - the attribute value. You can either pass in a raw value, or an attribute
     * object with a `value` and an optional `unit` (if applicable to your attribute).
     *
     * @example
     * ```typescript
     * scope.setAttribute('is_admin', true);
     * scope.setAttribute('render_duration', { value: 'render_duration', unit: 'ms' });
     * ```
     */
    setAttribute<T extends RawAttribute<T> extends {
        value: any;
    } | {
        unit: any;
    } ? AttributeObject : unknown>(key: string, value: RawAttribute<T>): this;
    /**
     * Removes the attribute with the given key from the scope.
     *
     * @param key - The attribute key.
     *
     * @example
     * ```typescript
     * scope.removeAttribute('is_admin');
     * ```
     */
    removeAttribute(key: string): this;
    /**
     * Set an object that will be merged into existing extra on the scope,
     * and will be sent as extra data with the event.
     */
    setExtras(extras: Extras): this;
    /**
     * Set a single key:value extra entry that will be sent as extra data with the event.
     */
    setExtra(key: string, extra: Extra): this;
    /**
     * Sets the fingerprint on the scope to send with the events.
     * @param {string[]} fingerprint Fingerprint to group events in Sentry.
     */
    setFingerprint(fingerprint: string[]): this;
    /**
     * Sets the level on the scope for future events.
     */
    setLevel(level: SeverityLevel): this;
    /**
     * Sets the transaction name on the scope so that the name of e.g. taken server route or
     * the page location is attached to future events.
     *
     * IMPORTANT: Calling this function does NOT change the name of the currently active
     * root span. If you want to change the name of the active root span, use
     * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
     *
     * By default, the SDK updates the scope's transaction name automatically on sensible
     * occasions, such as a page navigation or when handling a new request on the server.
     */
    setTransactionName(name?: string): this;
    /**
     * Sets context data with the given name.
     * Data passed as context will be normalized. You can also pass `null` to unset the context.
     * Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
     */
    setContext(key: string, context: Context | null): this;
    /**
     * Set the session for the scope.
     */
    setSession(session?: Session): this;
    /**
     * Get the session from the scope.
     */
    getSession(): Session | undefined;
    /**
     * Updates the scope with provided data. Can work in three variations:
     * - plain object containing updatable attributes
     * - Scope instance that'll extract the attributes from
     * - callback function that'll receive the current scope as an argument and allow for modifications
     */
    update(captureContext?: CaptureContext): this;
    /**
     * Clears the current scope and resets its properties.
     * Note: The client will not be cleared.
     */
    clear(): this;
    /**
     * Adds a breadcrumb to the scope.
     * By default, the last 100 breadcrumbs are kept.
     */
    addBreadcrumb(breadcrumb: Breadcrumb, maxBreadcrumbs?: number): this;
    /**
     * Get the last breadcrumb of the scope.
     */
    getLastBreadcrumb(): Breadcrumb | undefined;
    /**
     * Clear all breadcrumbs from the scope.
     */
    clearBreadcrumbs(): this;
    /**
     * Add an attachment to the scope.
     */
    addAttachment(attachment: Attachment): this;
    /**
     * Clear all attachments from the scope.
     */
    clearAttachments(): this;
    /**
     * Get the data of this scope, which should be applied to an event during processing.
     */
    getScopeData(): ScopeData;
    /**
     * Add data which will be accessible during event processing but won't get sent to Sentry.
     */
    setSDKProcessingMetadata(newData: SdkProcessingMetadata): this;
    /**
     * Add propagation context to the scope, used for distributed tracing
     */
    setPropagationContext(context: PropagationContext): this;
    /**
     * Get propagation context from the scope, used for distributed tracing
     */
    getPropagationContext(): PropagationContext;
    /**
     * Capture an exception for this scope.
     *
     * @returns {string} The id of the captured Sentry event.
     */
    captureException(exception: unknown, hint?: EventHint): string;
    /**
     * Capture a message for this scope.
     *
     * @returns {string} The id of the captured message.
     */
    captureMessage(message: string, level?: SeverityLevel, hint?: EventHint): string;
    /**
     * Capture a Sentry event for this scope.
     *
     * @returns {string} The id of the captured event.
     */
    captureEvent(event: Event, hint?: EventHint): string;
    /**
     * This will be called on every set call.
     */
    protected _notifyScopeListeners(): void;
}
//# sourceMappingURL=scope.d.ts.map