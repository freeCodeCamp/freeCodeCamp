import { AsyncContextStack } from './asyncContext/stackStrategy';
import { AsyncContextStrategy } from './asyncContext/types';
import { Client } from './client';
import { Scope } from './scope';
import { SerializedLog } from './types/log';
import { SerializedMetric } from './types/metric';
/**
 * An object that contains globally accessible properties and maintains a scope stack.
 * @hidden
 */
export interface Carrier {
    __SENTRY__?: VersionedCarrier;
}
type VersionedCarrier = {
    version?: string;
} & Record<Exclude<string, 'version'>, SentryCarrier>;
export interface SentryCarrier {
    acs?: AsyncContextStrategy;
    stack?: AsyncContextStack;
    globalScope?: Scope;
    defaultIsolationScope?: Scope;
    defaultCurrentScope?: Scope;
    loggerSettings?: {
        enabled: boolean;
    };
    /**
     * A map of Sentry clients to their log buffers.
     * This is used to store logs that are sent to Sentry.
     */
    clientToLogBufferMap?: WeakMap<Client, Array<SerializedLog>>;
    /**
     * A map of Sentry clients to their metric buffers.
     * This is used to store metrics that are sent to Sentry.
     */
    clientToMetricBufferMap?: WeakMap<Client, Array<SerializedMetric>>;
    /** Overwrites TextEncoder used in `@sentry/core`, need for `react-native@0.73` and older */
    encodePolyfill?: (input: string) => Uint8Array;
    /** Overwrites TextDecoder used in `@sentry/core`, need for `react-native@0.73` and older */
    decodePolyfill?: (input: Uint8Array) => string;
}
/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
export declare function getMainCarrier(): Carrier;
/** Will either get the existing sentry carrier, or create a new one. */
export declare function getSentryCarrier(carrier: Carrier): SentryCarrier;
/**
 * Returns a global singleton contained in the global `__SENTRY__[]` object.
 *
 * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
 * function and added to the `__SENTRY__` object.
 *
 * @param name name of the global singleton on __SENTRY__
 * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
 * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
 * @returns the singleton
 */
export declare function getGlobalSingleton<Prop extends keyof SentryCarrier>(name: Prop, creator: () => NonNullable<SentryCarrier[Prop]>, obj?: import("./shared-exports").InternalGlobal): NonNullable<SentryCarrier[Prop]>;
export {};
//# sourceMappingURL=carrier.d.ts.map
