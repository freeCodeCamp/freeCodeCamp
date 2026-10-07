import { BaseTransportOptions, Transport } from '@sentry/core';
import { HTTPModule } from './http-module';
export interface NodeTransportOptions extends BaseTransportOptions {
    /** Set a proxy that should be used for outbound requests. */
    proxy?: string;
    /** HTTPS proxy CA certificates */
    caCerts?: string | Buffer | Array<string | Buffer>;
    /** Custom HTTP module. Defaults to the native 'http' and 'https' modules. */
    httpModule?: HTTPModule;
    /** Allow overriding connection keepAlive, defaults to false */
    keepAlive?: boolean;
}
/**
 * Creates a Transport that uses native the native 'http' and 'https' modules to send events to Sentry.
 */
export declare function makeNodeTransport(options: NodeTransportOptions): Transport;
//# sourceMappingURL=http.d.ts.map
