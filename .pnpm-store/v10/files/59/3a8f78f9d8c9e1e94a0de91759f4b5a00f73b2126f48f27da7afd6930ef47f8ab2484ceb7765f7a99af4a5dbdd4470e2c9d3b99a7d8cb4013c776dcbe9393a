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
import type { RequestEventData } from '../../types/request';
import type { SpanAttributes } from '../../types/span';
export declare const ATTR_EXPRESS_NAME = "express.name";
export declare const ATTR_HTTP_ROUTE = "http.route";
export declare const ATTR_EXPRESS_TYPE = "express.type";
export type ExpressExport = {
    Router: ExpressRouterv5 | ExpressRouterv4;
    application: ExpressApplication;
};
export type ExpressExportv5 = ExpressExport & {
    Router: ExpressRouterv5;
};
export type ExpressExportv4 = ExpressExport & {
    Router: ExpressRouterv4;
};
export type ExpressModuleExport = ExpressExport | {
    default: ExpressExport;
};
export interface ExpressRequest extends RequestEventData {
    originalUrl: string;
    route: unknown;
    res?: ExpressResponse;
}
export interface ExpressResponse {
    once(ev: string, listener: Function): this;
    removeListener(ev: string, listener?: Function): this;
    emit(ev: string, ...data: unknown[]): this;
}
export interface NextFunction {
    (err?: unknown): void;
    /**
     * "Break-out" of a router by calling {next('router')};
     * @see {https://expressjs.com/en/guide/using-middleware.html#middleware.router}
     */
    (deferToNext: 'router'): void;
    /**
     * "Break-out" of a route by calling {next('route')};
     * @see {https://expressjs.com/en/guide/using-middleware.html#middleware.application}
     */
    (deferToNext: 'route'): void;
}
export type ExpressApplicationRequestHandler = (...handlers: any[]) => any;
export type ExpressRequestInfo<T = unknown> = {
    /** An express request object */
    request: T;
    route: string;
    layerType: ExpressLayerType;
};
export type ExpressLayerType = 'router' | 'middleware' | 'request_handler';
export declare const ExpressLayerType_ROUTER = "router";
export declare const ExpressLayerType_MIDDLEWARE = "middleware";
export declare const ExpressLayerType_REQUEST_HANDLER = "request_handler";
export type PathParams = string | RegExp | Array<string | RegExp>;
export type LayerPathSegment = string | RegExp | number;
export interface ExpressRoute {
    path: string;
    stack: ExpressLayer[];
}
export type ExpressRouterv4 = ExpressRouter;
export interface ExpressRouterv5 {
    prototype: ExpressRouter;
}
export type ExpressLayer = {
    handle: Function & Record<string, unknown> & {
        stack?: ExpressLayer[];
    };
    name: string;
    params: {
        [key: string]: string;
    };
    path?: string;
    regexp: RegExp;
    route?: ExpressLayer;
};
export type ExpressRouter = {
    params: {
        [key: string]: string;
    };
    _params: string[];
    caseSensitive: boolean;
    mergeParams: boolean;
    strict: boolean;
    stack: ExpressLayer[];
    route(prefix: PathParams): ExpressRoute;
    use(...handlers: unknown[]): unknown;
};
export type IgnoreMatcher = string | RegExp | ((name: string) => boolean);
export type ExpressIntegrationOptions = {
    /**
     * @deprecated Pass the express module as the first argument, and an
     * options getter as the second argument to patchExpressModule.
     */
    express?: ExpressModuleExport;
    /** Ignore specific based on their name */
    ignoreLayers?: IgnoreMatcher[];
    /** Ignore specific layers based on their type */
    ignoreLayersType?: ExpressLayerType[];
    /**
     * Optional callback invoked each time a layer resolves the matched HTTP route.
     * Platform-specific integrations (e.g. Node.js) use this to propagate the
     * resolved route to the underlying transport layer (e.g. OTel RPCMetadata).
     */
    onRouteResolved?: (route: string | undefined) => void;
};
export type LayerMetadata = {
    attributes: SpanAttributes;
    name: string;
};
export interface ExpressApplication {
    stack: ExpressLayer[];
    use: ExpressApplicationRequestHandler;
}
export interface MiddlewareError extends Error {
    status?: number | string;
    statusCode?: number | string;
    status_code?: number | string;
    output?: {
        statusCode?: number | string;
    };
}
export type ExpressMiddleware = (req: ExpressRequest, res: ExpressResponse, next: () => void) => void;
export type ExpressErrorMiddleware = (error: MiddlewareError, req: ExpressRequest, res: ExpressResponse, next: (error: MiddlewareError) => void) => void;
export interface ExpressHandlerOptions {
    /**
     * Callback method deciding whether error should be captured and sent to Sentry
     * @param error Captured middleware error
     */
    shouldHandleError?(this: void, error: MiddlewareError): boolean;
}
//# sourceMappingURL=types.d.ts.map