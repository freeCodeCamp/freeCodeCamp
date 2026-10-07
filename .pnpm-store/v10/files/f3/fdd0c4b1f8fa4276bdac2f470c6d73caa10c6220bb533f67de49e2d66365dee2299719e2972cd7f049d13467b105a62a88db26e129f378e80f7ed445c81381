import type { Meter, MeterOptions } from '../metrics/Meter';
import type { MeterProvider } from '../metrics/MeterProvider';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Metrics API
 */
export declare class MetricsAPI {
    private static _instance?;
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    private constructor();
    /** Get the singleton instance of the Metrics API */
    static getInstance(): MetricsAPI;
    /**
     * Set the current global meter provider.
     * Returns true if the meter provider was successfully registered, else false.
     */
    setGlobalMeterProvider(provider: MeterProvider): boolean;
    /**
     * Returns the global meter provider.
     */
    getMeterProvider(): MeterProvider;
    /**
     * Returns a meter from the global meter provider.
     */
    getMeter(name: string, version?: string, options?: MeterOptions): Meter;
    /** Remove the global meter provider */
    disable(): void;
}
//# sourceMappingURL=metrics.d.ts.map