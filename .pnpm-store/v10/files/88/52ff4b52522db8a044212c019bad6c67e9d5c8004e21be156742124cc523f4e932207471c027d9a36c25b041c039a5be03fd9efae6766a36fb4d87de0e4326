import type { LoggerProvider } from '../types/LoggerProvider';
import type { Logger } from '../types/Logger';
import type { LoggerOptions } from '../types/LoggerOptions';
export declare class LogsAPI {
    private static _instance?;
    private _proxyLoggerProvider;
    private constructor();
    static getInstance(): LogsAPI;
    setGlobalLoggerProvider(provider: LoggerProvider): LoggerProvider;
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */
    getLoggerProvider(): LoggerProvider;
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */
    getLogger(name: string, version?: string, options?: LoggerOptions): Logger;
    /** Remove the global logger provider */
    disable(): void;
}
//# sourceMappingURL=logs.d.ts.map