/* =================== USAGE ===================

    import express = require("express");
    var app = express();

 =============================================== */

/// <reference types="express-serve-static-core" />
/// <reference types="serve-static" />

import * as bodyParser from "body-parser";
import * as core from "express-serve-static-core";
import * as qs from "qs";
import * as serveStatic from "serve-static";

/**
 * Creates an Express application. The express() function is a top-level function exported by the express module.
 */
declare function e(): core.Express;

declare namespace e {
    /**
     * This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
     * @since 4.16.0
     */
    var json: typeof bodyParser.json;

    /**
     * This is a built-in middleware function in Express. It parses incoming requests with Buffer payloads and is based on body-parser.
     * @since 4.17.0
     */
    var raw: typeof bodyParser.raw;

    /**
     * This is a built-in middleware function in Express. It parses incoming requests with text payloads and is based on body-parser.
     * @since 4.17.0
     */
    var text: typeof bodyParser.text;

    /**
     * These are the exposed prototypes.
     */
    var application: Application;
    var request: Request;
    var response: Response;

    /**
     * This is a built-in middleware function in Express. It serves static files and is based on serve-static.
     */
    var static: serveStatic.RequestHandlerConstructor<Response>;

    /**
     * This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
     * @since 4.16.0
     */
    var urlencoded: typeof bodyParser.urlencoded;

    /**
     * This is a built-in middleware function in Express. It parses incoming request query parameters.
     */
    export function query(options: qs.IParseOptions | typeof qs.parse): Handler;

    export function Router(options?: RouterOptions): core.Router;

    interface RouterOptions {
        /**
         * Enable case sensitivity.
         */
        caseSensitive?: boolean | undefined;

        /**
         * Preserve the req.params values from the parent router.
         * If the parent and the child have conflicting param names, the child’s value take precedence.
         *
         * @default false
         * @since 4.5.0
         */
        mergeParams?: boolean | undefined;

        /**
         * Enable strict routing.
         */
        strict?: boolean | undefined;
    }

    interface Application extends core.Application {}
    interface CookieOptions extends core.CookieOptions {}
    interface Errback extends core.Errback {}
    interface ErrorRequestHandler<
        P = core.ParamsDictionary,
        ResBody = any,
        ReqBody = any,
        ReqQuery = core.Query,
        Locals extends Record<string, any> = Record<string, any>,
    > extends core.ErrorRequestHandler<P, ResBody, ReqBody, ReqQuery, Locals> {}
    interface Express extends core.Express {}
    interface Handler extends core.Handler {}
    interface IRoute extends core.IRoute {}
    interface IRouter extends core.IRouter {}
    interface IRouterHandler<T> extends core.IRouterHandler<T> {}
    interface IRouterMatcher<T> extends core.IRouterMatcher<T> {}
    interface MediaType extends core.MediaType {}
    interface NextFunction extends core.NextFunction {}
    interface Locals extends core.Locals {}
    interface Request<
        P = core.ParamsDictionary,
        ResBody = any,
        ReqBody = any,
        ReqQuery = core.Query,
        Locals extends Record<string, any> = Record<string, any>,
    > extends core.Request<P, ResBody, ReqBody, ReqQuery, Locals> {}
    interface RequestHandler<
        P = core.ParamsDictionary,
        ResBody = any,
        ReqBody = any,
        ReqQuery = core.Query,
        Locals extends Record<string, any> = Record<string, any>,
    > extends core.RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals> {}
    interface RequestParamHandler extends core.RequestParamHandler {}
    interface Response<
        ResBody = any,
        Locals extends Record<string, any> = Record<string, any>,
    > extends core.Response<ResBody, Locals> {}
    interface Router extends core.Router {}
    interface Send extends core.Send {}
}

export = e;
