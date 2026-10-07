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
import { SpanAttributes } from '../../types/span';
import { ExpressIntegrationOptions, ExpressLayer, ExpressLayerType, ExpressRequest, MiddlewareError, ExpressExportv5, ExpressExportv4 } from './types';
import { ATTR_EXPRESS_NAME, ATTR_EXPRESS_TYPE } from './types';
/**
 * Converts a user-provided error value into an error and error message pair
 *
 * @param error - User-provided error value
 * @returns Both an Error or string representation of the value and an error message
 */
export declare const asErrorAndMessage: (error: unknown) => [
    string | Error,
    string
];
/**
 * Checks if a route contains parameter patterns (e.g., :id, :userId)
 * which are valid even if they don't exactly match the original URL
 */
export declare function isRoutePattern(route: string): boolean;
/**
 * Parse express layer context to retrieve a name and attributes.
 * @param route The route of the layer
 * @param layer Express layer
 * @param [layerPath] if present, the path on which the layer has been mounted
 */
export declare const getLayerMetadata: (route: string, layer: ExpressLayer, layerPath?: string) => {
    attributes: SpanAttributes & {
        [ATTR_EXPRESS_NAME]: string;
        [ATTR_EXPRESS_TYPE]: ExpressLayerType;
    };
    name: string;
};
/**
 * Recursively search the router path from layer stack
 * @param path The path to reconstruct
 * @param layer The layer to reconstruct from
 * @returns The reconstructed path
 */
export declare const getRouterPath: (path: string, layer: ExpressLayer) => string;
/**
 * Check whether the given request is ignored by configuration
 * It will not re-throw exceptions from `list` provided by the client
 * @param constant e.g URL of request
 * @param [list] List of ignore patterns
 * @param [onException] callback for doing something when an exception has
 *     occurred
 */
export type ExpressIsLayerIgnoredOptions = Pick<ExpressIntegrationOptions, 'ignoreLayersType' | 'ignoreLayers'>;
export declare const isLayerIgnored: (name: string, type: ExpressLayerType, config?: ExpressIsLayerIgnoredOptions) => boolean;
/**
 * Extracts the actual matched route from Express request for OpenTelemetry instrumentation.
 * Returns the route that should be used as the http.route attribute.
 *
 * @param req - The Express request object with layers store
 * @param constructedRoute - The constructed route from `getConstructedRoute`
 * @returns The matched route string or undefined if no valid route is found
 */
export declare function getActualMatchedRoute(req: ExpressRequest, constructedRoute: string): string | undefined;
export declare function getConstructedRoute(req: ExpressRequest): string;
export declare const getLayerPath: (args: unknown[]) => string | undefined;
export declare const isExpressWithRouterPrototype: (express: unknown) => express is ExpressExportv5;
export declare const isExpressWithoutRouterPrototype: (express: unknown) => express is ExpressExportv4;
/** Returns true if response code is internal server error */
export declare function defaultShouldHandleError(error: MiddlewareError): boolean;
//# sourceMappingURL=utils.d.ts.map
