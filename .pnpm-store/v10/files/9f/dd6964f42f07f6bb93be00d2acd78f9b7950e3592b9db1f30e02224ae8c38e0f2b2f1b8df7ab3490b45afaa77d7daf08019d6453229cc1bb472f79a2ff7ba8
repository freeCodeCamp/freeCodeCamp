/**
 * Platform-portable HTTP(S) outgoing-request patching integration
 *
 * Patches the `http` and `https` Node.js built-in module exports to create
 * Sentry spans for outgoing requests and optionally inject distributed trace
 * propagation headers.
 *
 * @module
 *
 * This Sentry integration is a derivative work based on the OpenTelemetry
 * HTTP instrumentation.
 *
 * <https://github.com/open-telemetry/opentelemetry-js/tree/main/experimental/packages/opentelemetry-instrumentation-http>
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
import type { HttpModuleExport, HttpInstrumentationOptions } from './types';
/**
 * Patch an `node:http` or `node:https` module-shaped export so that every
 * outgoing request is tracked by Sentry.
 *
 * @example
 * ```javascript
 * import http from 'http';
 * import { patchHttpModule } from '@sentry/core';
 * patchHttpModule(http, { propagateTrace: true });
 * ```
 */
export declare const patchHttpModuleClient: (httpModuleExport: HttpModuleExport, options?: HttpInstrumentationOptions) => HttpModuleExport;
//# sourceMappingURL=client-patch.d.ts.map