/**
 * Platform-portable Express tracing integration.
 *
 * @module
 *
 * This Sentry integration is a derivative work based on the OpenTelemetry
 * Express instrumentation.
 *
 * <https://github.com/open-telemetry/opentelemetry-js-contrib/tree/main/packages/instrumentation-express>
 *
 * Extended under the terms of the Apache 2.0 license linked below:
 *
 * ----
 *
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ExpressErrorMiddleware, ExpressHandlerOptions, ExpressIntegrationOptions, ExpressModuleExport } from './types';
/**
 * This is a portable instrumentatiton function that works in any environment
 * where Express can be loaded, without depending on OpenTelemetry.
 *
 * @example
 * ```javascript
 * import express from 'express';
 * import * as Sentry from '@sentry/deno'; // or any SDK that extends core
 *
 * Sentry.patchExpressModule(express, () => ({}));
 * ```
 */
export declare function patchExpressModule(moduleExports: ExpressModuleExport, getOptions: () => ExpressIntegrationOptions): ExpressModuleExport;
/**
 * @deprecated Pass the Express module export as the first argument and options getter as the second argument.
 */
export declare function patchExpressModule(options: ExpressIntegrationOptions & {
    express: ExpressModuleExport;
}): ExpressModuleExport;
/**
 * An Express-compatible error handler, used by setupExpressErrorHandler
 */
export declare function expressErrorHandler(options?: ExpressHandlerOptions): ExpressErrorMiddleware;
/**
 * Add an Express error handler to capture errors to Sentry.
 *
 * The error handler must be before any other middleware and after all controllers.
 *
 * @param app The Express instances
 * @param options {ExpressHandlerOptions} Configuration options for the handler
 *
 * @example
 * ```javascript
 * import * as Sentry from 'sentry/deno'; // or any other @sentry/<platform>
 * import * as express from 'express';
 *
 * Sentry.instrumentExpress(express);
 *
 * const app = express();
 *
 * // Add your routes, etc.
 *
 * // Add this after all routes,
 * // but before any and other error-handling middlewares are defined
 * Sentry.setupExpressErrorHandler(app);
 *
 * app.listen(3000);
 * ```
 */
export declare function setupExpressErrorHandler(app: {
    use: (middleware: any) => unknown;
}, options?: ExpressHandlerOptions): void;
//# sourceMappingURL=index.d.ts.map
