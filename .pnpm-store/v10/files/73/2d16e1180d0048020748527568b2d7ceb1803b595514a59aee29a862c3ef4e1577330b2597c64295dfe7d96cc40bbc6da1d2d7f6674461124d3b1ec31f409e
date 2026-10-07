import type { Logger } from './Logger';
import type { LoggerOptions } from './LoggerOptions';
/**
 * A registry for creating named {@link Logger}s.
 */
export interface LoggerProvider {
    /**
     * Returns a Logger, creating one if one with the given name, version, and
     * schemaUrl pair is not already created.
     *
     * @param name The name of the logger or instrumentation library.
     * @param version The version of the logger or instrumentation library.
     * @param options The options of the logger or instrumentation library.
     * @returns Logger A Logger with the given name and version
     */
    getLogger(name: string, version?: string, options?: LoggerOptions): Logger;
}
//# sourceMappingURL=LoggerProvider.d.ts.map