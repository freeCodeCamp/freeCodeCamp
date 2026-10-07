import type { LoggerProvider } from './types/LoggerProvider';
import type { Logger } from './types/Logger';
import type { LoggerOptions } from './types/LoggerOptions';
export declare class ProxyLoggerProvider implements LoggerProvider {
    private _delegate?;
    getLogger(name: string, version?: string | undefined, options?: LoggerOptions | undefined): Logger;
    /**
     * Get the delegate logger provider.
     * Used by tests only.
     * @internal
     */
    _getDelegate(): LoggerProvider;
    /**
     * Set the delegate logger provider
     * @internal
     */
    _setDelegate(delegate: LoggerProvider): void;
    /**
     * @internal
     */
    _getDelegateLogger(name: string, version?: string | undefined, options?: LoggerOptions | undefined): Logger | undefined;
}
//# sourceMappingURL=ProxyLoggerProvider.d.ts.map