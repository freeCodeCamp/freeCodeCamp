import { KoaInstrumentation } from './vendored/instrumentation';
interface KoaOptions {
    /**
     * Ignore layers of specified types
     */
    ignoreLayersType?: Array<'middleware' | 'router'>;
}
export declare const instrumentKoa: ((options: KoaOptions | undefined) => KoaInstrumentation) & {
    id: string;
};
/**
 * Adds Sentry tracing instrumentation for [Koa](https://koajs.com/).
 *
 * If you also want to capture errors, you need to call `setupKoaErrorHandler(app)` after you set up your Koa server.
 *
 * For more information, see the [koa documentation](https://docs.sentry.io/platforms/javascript/guides/koa/).
 *
 * @param {KoaOptions} options Configuration options for the Koa integration.
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *   integrations: [Sentry.koaIntegration()],
 * })
 * ```
 *
 * @example
 * ```javascript
 * // To ignore middleware spans
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *   integrations: [
 *     Sentry.koaIntegration({
 *       ignoreLayersType: ['middleware']
 *     })
 *   ],
 * })
 * ```
 */
export declare const koaIntegration: (options?: KoaOptions | undefined) => import("@sentry/core").Integration;
/**
 * Add an Koa error handler to capture errors to Sentry.
 *
 * The error handler must be before any other middleware and after all controllers.
 *
 * @param app The Express instances
 * @param options {ExpressHandlerOptions} Configuration options for the handler
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 * const Koa = require("koa");
 *
 * const app = new Koa();
 *
 * Sentry.setupKoaErrorHandler(app);
 *
 * // Add your routes, etc.
 *
 * app.listen(3000);
 * ```
 */
export declare const setupKoaErrorHandler: (app: {
    use: (arg0: (ctx: any, next: any) => Promise<void>) => void;
}) => void;
export {};
//# sourceMappingURL=index.d.ts.map