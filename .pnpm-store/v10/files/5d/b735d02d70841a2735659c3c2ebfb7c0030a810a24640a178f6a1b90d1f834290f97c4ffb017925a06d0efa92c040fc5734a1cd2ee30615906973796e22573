/**
 * Define the channels and subscription methods to subscribe to in order to
 * instrument the `node:http` module. Note that this does *not* actually
 * register the subscriptions, it simply returns a data object with the
 * channel names and the subscription handlers. Attach these to diagnostic
 * channels on Node versions where they are supported (ie, >=22.12.0).
 *
 * If any other platforms that do support diagnostic channels eventually add
 * channel coverage for the `node:http` client, then these methods can be
 * used on those platforms as well.
 *
 * This implementation is used in the client-patch strategy, by simply
 * calling the handlers with the relevant data at the appropriate time.
 */
import { HttpInstrumentationOptions } from './types';
import { ClientSubscriptionName } from './constants';
type ChannelListener = (message: unknown, name: string | symbol) => void;
export type HttpClientSubscriptions = Record<ClientSubscriptionName, ChannelListener>;
export declare function getHttpClientSubscriptions(options: HttpInstrumentationOptions): HttpClientSubscriptions;
export {};
//# sourceMappingURL=client-subscriptions.d.ts.map
