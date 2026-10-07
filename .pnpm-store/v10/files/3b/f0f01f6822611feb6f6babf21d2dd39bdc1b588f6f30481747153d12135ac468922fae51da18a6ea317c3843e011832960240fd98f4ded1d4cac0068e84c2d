import { ConnectInstrumentation } from './vendored/instrumentation';
type ConnectApp = {
    use: (middleware: any) => void;
};
export declare const instrumentConnect: ((options?: unknown) => ConnectInstrumentation) & {
    id: string;
};
/**
 * Adds Sentry tracing instrumentation for [Connect](https://github.com/senchalabs/connect/).
 *
 * If you also want to capture errors, you need to call `setupConnectErrorHandler(app)` after you initialize your connect app.
 *
 * For more information, see the [connect documentation](https://docs.sentry.io/platforms/javascript/guides/connect/).
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 *
 * Sentry.init({
 *   integrations: [Sentry.connectIntegration()],
 * })
 * ```
 */
export declare const connectIntegration: () => import("@sentry/core").Integration;
/**
 * Add a Connect middleware to capture errors to Sentry.
 *
 * @param app The Connect app to attach the error handler to
 *
 * @example
 * ```javascript
 * const Sentry = require('@sentry/node');
 * const connect = require("connect");
 *
 * const app = connect();
 *
 * Sentry.setupConnectErrorHandler(app);
 *
 * // Add you connect routes here
 *
 * app.listen(3000);
 * ```
 */
export declare const setupConnectErrorHandler: (app: ConnectApp) => void;
export {};
//# sourceMappingURL=index.d.ts.map