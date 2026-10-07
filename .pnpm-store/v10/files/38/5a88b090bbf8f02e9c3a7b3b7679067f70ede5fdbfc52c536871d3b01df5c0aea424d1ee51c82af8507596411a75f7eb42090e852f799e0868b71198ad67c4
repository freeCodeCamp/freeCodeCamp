import { HonoInstrumentation } from './instrumentation';
import { Context, MiddlewareHandlerInterface } from './types';
export declare const instrumentHono: ((options?: unknown) => HonoInstrumentation) & {
    id: string;
};
/**
 * Adds Sentry tracing instrumentation for [Hono](https://hono.dev/).
 *
 * If you also want to capture errors, you need to call `setupHonoErrorHandler(app)` after you set up your Hono server.
 *
 * For more information, see the [hono documentation](https://docs.sentry.io/platforms/javascript/guides/hono/).
 *
 * @deprecated Use the `@sentry/hono` package instead. The `sentry()` middleware from `@sentry/hono/node` handles
 * tracing and error capturing automatically without needing this integration or `setupHonoErrorHandler`.
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *   integrations: [Sentry.honoIntegration()],
 * })
 * ```
 */
export declare const honoIntegration: () => import("@sentry/core").Integration;
interface HonoHandlerOptions {
    /**
     * Callback method deciding whether error should be captured and sent to Sentry
     * @param error Captured Hono error
     */
    shouldHandleError: (context: Context) => boolean;
}
/**
 * Add a Hono error handler to capture errors to Sentry.
 *
 * @param app The Hono instances
 * @param options Configuration options for the handler
 *
 * @deprecated Use the `@sentry/hono` package instead. The `sentry()` middleware from `@sentry/hono/node` handles
 * error capturing automatically without needing this function or `honoIntegration`.
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 * const { Hono } = require("hono");
 *
 * const app = new Hono();
 *
 * Sentry.setupHonoErrorHandler(app);
 *
 * // Add your routes, etc.
 * ```
 */
export declare function setupHonoErrorHandler(app: {
    use: MiddlewareHandlerInterface;
}, options?: Partial<HonoHandlerOptions>): void;
export {};
//# sourceMappingURL=index.d.ts.map
