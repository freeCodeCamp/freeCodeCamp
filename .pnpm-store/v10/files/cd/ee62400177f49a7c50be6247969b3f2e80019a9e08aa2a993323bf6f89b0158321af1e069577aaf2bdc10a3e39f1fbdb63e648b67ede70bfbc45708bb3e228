import { Envelope, EnvelopeItemType } from '../types/envelope';
import { Event } from '../types/event';
import { BaseTransportOptions, Transport } from '../types/transport';
interface MatchParam {
    /** The envelope to be sent */
    envelope: Envelope;
    /**
     * A function that returns an event from the envelope if one exists. You can optionally pass an array of envelope item
     * types to filter by - only envelopes matching the given types will be multiplexed.
     * Allowed values are: 'event', 'transaction', 'profile', 'replay_event'
     *
     * @param types Defaults to ['event']
     */
    getEvent(types?: EnvelopeItemType[]): Event | undefined;
}
type RouteTo = {
    dsn: string;
    release: string;
};
type Matcher = (param: MatchParam) => (string | RouteTo)[];
/**
 * Key used in event.extra to provide routing information for the multiplexed transport.
 * Should contain an array of `{ dsn: string, release?: string }` objects.
 */
export declare const MULTIPLEXED_TRANSPORT_EXTRA_KEY = "MULTIPLEXED_TRANSPORT_EXTRA_KEY";
/**
 * Gets an event from an envelope.
 *
 * This is only exported for use in the tests
 */
export declare function eventFromEnvelope(env: Envelope, types: EnvelopeItemType[]): Event | undefined;
/**
 * Creates a transport that can send events to different DSNs depending on the envelope contents.
 *
 * If no matcher is provided, the transport will look for routing information in
 * `event.extra[MULTIPLEXED_TRANSPORT_EXTRA_KEY]`, which should contain
 * an array of `{ dsn: string, release?: string }` objects.
 */
export declare function makeMultiplexedTransport<TO extends BaseTransportOptions>(createTransport: (options: TO) => Transport, matcher?: Matcher): (options: TO) => Transport;
export {};
//# sourceMappingURL=multiplexed.d.ts.map
