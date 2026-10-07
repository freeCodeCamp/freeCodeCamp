import { Client } from '../client';
import { Event, EventHint } from './event';
import { StreamedSpanJSON } from './span';
/** Integration interface */
export interface Integration {
    /**
     * The name of the integration.
     */
    name: string;
    /**
     * This hook is only called once, even if multiple clients are created.
     * It does not receives any arguments, and should only use for e.g. global monkey patching and similar things.
     */
    setupOnce?(): void;
    /**
     * Called before the `setup` hook of any integration is called.
     * This is useful if an integration needs to e.g. modify client options prior to other integrations
     * reading client options.
     *
     * @param client
     */
    beforeSetup?(client: Client): void;
    /**
     * Set up an integration for the given client.
     * Receives the client as argument.
     *
     * Whenever possible, prefer this over `setupOnce`, as that is only run for the first client,
     * whereas `setup` runs for each client. Only truly global things (e.g. registering global handlers)
     * should be done in `setupOnce`.
     */
    setup?(client: Client): void;
    /**
     * This hook is triggered after `setupOnce()` and `setup()` have been called for all integrations.
     * You can use it if it is important that all other integrations have been run before.
     */
    afterAllSetup?(client: Client): void;
    /**
     * An optional hook that allows to preprocess an event _before_ it is passed to all other event processors.
     */
    preprocessEvent?(event: Event, hint: EventHint | undefined, client: Client): void;
    /**
     * An optional hook that allows to process an event.
     * Return `null` to drop the event, or mutate the event & return it.
     * This receives the client that the integration was installed for as third argument.
     */
    processEvent?(event: Event, hint: EventHint, client: Client): Event | null | PromiseLike<Event | null>;
    /**
     * An optional hook that allows modifications to a span. This hook runs after the span is ended,
     * during `captureSpan` and before the span is passed to users' `beforeSendSpan` callback.
     * Use this hook to modify a span in-place.
     */
    processSpan?(span: StreamedSpanJSON, client: Client): void;
    /**
     * An optional hook that allows modifications to a segment span. This hook runs after the segment span is ended,
     * during `captureSpan` and before the segment span is passed to users' `beforeSendSpan` callback.
     * Use this hook to modify a segment span in-place.
     */
    processSegmentSpan?(span: StreamedSpanJSON, client: Client): void;
}
/**
 * An integration in function form.
 * This is expected to return an integration.
 */
export type IntegrationFn<IntegrationType = Integration> = (...rest: any[]) => IntegrationType;
//# sourceMappingURL=integration.d.ts.map
