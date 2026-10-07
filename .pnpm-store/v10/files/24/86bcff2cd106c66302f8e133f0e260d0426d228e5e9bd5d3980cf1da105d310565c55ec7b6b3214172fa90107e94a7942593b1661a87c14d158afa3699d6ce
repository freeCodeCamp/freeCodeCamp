import { Envelope } from '../types/envelope';
import { InternalBaseTransportOptions, Transport } from '../types/transport';
export declare const MIN_DELAY = 100;
export declare const START_DELAY = 5000;
export interface OfflineStore {
    push(env: Envelope): Promise<void>;
    unshift(env: Envelope): Promise<void>;
    shift(): Promise<Envelope | undefined>;
}
export type CreateOfflineStore = (options: OfflineTransportOptions) => OfflineStore;
export interface OfflineTransportOptions extends InternalBaseTransportOptions {
    /**
     * A function that creates the offline store instance.
     */
    createStore?: CreateOfflineStore;
    /**
     * Flush the offline store shortly after startup.
     *
     * Defaults: false
     */
    flushAtStartup?: boolean;
    /**
     * Called before an event is stored.
     *
     * Return false to drop the envelope rather than store it.
     *
     * @param envelope The envelope that failed to send.
     * @param error The error that occurred.
     * @param retryDelay The current retry delay in milliseconds.
     * @returns Whether the envelope should be stored.
     */
    shouldStore?: (envelope: Envelope, error: Error, retryDelay: number) => boolean | Promise<boolean>;
    /**
     * Should an attempt be made to send the envelope to Sentry.
     *
     * If this function is supplied and returns false, `shouldStore` will be called to determine if the envelope should be stored.
     *
     * @param envelope The envelope that will be sent.
     * @returns Whether we should attempt to send the envelope
     */
    shouldSend?: (envelope: Envelope) => boolean | Promise<boolean>;
}
/**
 * Wraps a transport and stores and retries events when they fail to send.
 *
 * @param createTransport The transport to wrap.
 */
export declare function makeOfflineTransport<TO>(createTransport: (options: TO) => Transport): (options: TO & OfflineTransportOptions) => Transport;
//# sourceMappingURL=offline.d.ts.map
