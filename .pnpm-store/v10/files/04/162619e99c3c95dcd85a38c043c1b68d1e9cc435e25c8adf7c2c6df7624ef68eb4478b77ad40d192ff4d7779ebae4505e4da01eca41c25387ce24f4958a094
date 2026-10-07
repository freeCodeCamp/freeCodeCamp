import type { Logger } from './types/Logger';
import type { LoggerOptions } from './types/LoggerOptions';
import type { LogRecord } from './types/LogRecord';
export declare class ProxyLogger implements Logger {
    private _delegate?;
    private _provider;
    readonly name: string;
    readonly version?: string | undefined;
    readonly options?: LoggerOptions | undefined;
    constructor(provider: LoggerDelegator, name: string, version?: string | undefined, options?: LoggerOptions | undefined);
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */
    emit(logRecord: LogRecord): void;
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */
    private _getLogger;
}
export interface LoggerDelegator {
    _getDelegateLogger(name: string, version?: string, options?: LoggerOptions): Logger | undefined;
}
//# sourceMappingURL=ProxyLogger.d.ts.map