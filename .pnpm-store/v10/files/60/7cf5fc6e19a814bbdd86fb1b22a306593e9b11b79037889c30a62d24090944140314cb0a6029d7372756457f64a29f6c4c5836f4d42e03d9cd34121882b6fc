/**
 * Provide the `http.server.request.start` subscription function that we use
 * to instrument incoming HTTP requests that use the `node:http` module.
 *
 * On Node.js v18.7 and up, we can just assign the diagnostics channel
 * listener, and that's enough. But for older node versions, or other SSJS
 * platforms, we have to explicitly fire the provided method an a patched
 * Server.emit method.
 *
 * This decision is made in the relevant Node/Bun/Deno SDKs; core just
 * provides them with the methods to use.
 *
 * When `options.spans` is enabled (explicitly or via the client's tracing
 * config), this also creates server spans around the emitted `'request'`
 * event. The OTel-mode node integration creates spans through a different
 * code path and opts out via explicit `spans: false`.
 */
import { ServerSubscriptionName } from './constants';
type ChannelListener = (message: unknown, name: string | symbol) => void;
import { HttpInstrumentationOptions, HttpServer } from './types';
export type HttpServerSubscriptions = Record<ServerSubscriptionName, ChannelListener>;
export declare function instrumentServer(options: HttpInstrumentationOptions, server: HttpServer): void;
export declare function getHttpServerSubscriptions(options: HttpInstrumentationOptions): HttpServerSubscriptions;
export declare function isStaticAssetRequest(urlPath: string): boolean;
export {};
//# sourceMappingURL=server-subscription.d.ts.map
