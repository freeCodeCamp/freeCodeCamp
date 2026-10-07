import type { Meter, MeterOptions } from './Meter';
/**
 * A registry for creating named {@link Meter}s.
 *
 * @since 1.3.0
 */
export interface MeterProvider {
    /**
     * Returns a Meter, creating one if one with the given name, version, and
     * schemaUrl pair is not already created.
     *
     * @param name The name of the meter or instrumentation library.
     * @param version The version of the meter or instrumentation library.
     * @param options The options of the meter or instrumentation library.
     * @returns Meter A Meter with the given name and version
     */
    getMeter(name: string, version?: string, options?: MeterOptions): Meter;
}
//# sourceMappingURL=MeterProvider.d.ts.map