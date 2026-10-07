import { HapiInstrumentation } from './vendored/instrumentation';
import type { Server } from './types';
export declare const instrumentHapi: ((options?: unknown) => HapiInstrumentation) & {
    id: string;
};
/**
 * Adds Sentry tracing instrumentation for [Hapi](https://hapi.dev/).
 *
 * If you also want to capture errors, you need to call `setupHapiErrorHandler(server)` after you set up your server.
 *
 * For more information, see the [hapi documentation](https://docs.sentry.io/platforms/javascript/guides/hapi/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *   integrations: [Sentry.hapiIntegration()],
 * })
 * ```
 */
export declare const hapiIntegration: () => import("@sentry/core").Integration;
export declare const hapiErrorPlugin: {
    name: string;
    version: string;
    register: (serverArg: Record<any, any>) => Promise<void>;
};
/**
 * Add a Hapi plugin to capture errors to Sentry.
 *
 * @param server The Hapi server to attach the error handler to
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 * const Hapi = require('@hapi/hapi');
 *
 * const init = async () => {
 *   const server = Hapi.server();
 *
 *   // all your routes here
 *
 *   await Sentry.setupHapiErrorHandler(server);
 *
 *   await server.start();
 * };
 * ```
 */
export declare function setupHapiErrorHandler(server: Server): Promise<void>;
//# sourceMappingURL=index.d.ts.map