// Type definitions for serve-static 1.15
// Project: https://github.com/expressjs/serve-static
// Definitions by: Uros Smolnik <https://github.com/urossmolnik>
//                 Linus Unnebäck <https://github.com/LinusU>
//                 Devansh Jethmalani <https://github.com/devanshj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as http from "http";
import { HttpError } from "http-errors";
import * as m from "mime";

/**
 * Create a new middleware function to serve files from within a given root directory.
 * The file to serve will be determined by combining req.url with the provided root directory.
 * When a file is not found, instead of sending a 404 response, this module will instead call next() to move on to the next middleware, allowing for stacking and fall-backs.
 */
declare function serveStatic<R extends http.ServerResponse>(
    root: string,
    options?: serveStatic.ServeStaticOptions<R>,
): serveStatic.RequestHandler<R>;

declare namespace serveStatic {
    var mime: typeof m;
    interface ServeStaticOptions<R extends http.ServerResponse = http.ServerResponse> {
        /**
         * Enable or disable accepting ranged requests, defaults to true.
         * Disabling this will not send Accept-Ranges and ignore the contents of the Range request header.
         */
        acceptRanges?: boolean | undefined;

        /**
         * Enable or disable setting Cache-Control response header, defaults to true.
         * Disabling this will ignore the immutable and maxAge options.
         */
        cacheControl?: boolean | undefined;

        /**
         * Set how "dotfiles" are treated when encountered. A dotfile is a file or directory that begins with a dot (".").
         * Note this check is done on the path itself without checking if the path actually exists on the disk.
         * If root is specified, only the dotfiles above the root are checked (i.e. the root itself can be within a dotfile when when set to "deny").
         * The default value is 'ignore'.
         * 'allow' No special treatment for dotfiles
         * 'deny' Send a 403 for any request for a dotfile
         * 'ignore' Pretend like the dotfile does not exist and call next()
         */
        dotfiles?: string | undefined;

        /**
         * Enable or disable etag generation, defaults to true.
         */
        etag?: boolean | undefined;

        /**
         * Set file extension fallbacks. When set, if a file is not found, the given extensions will be added to the file name and search for.
         * The first that exists will be served. Example: ['html', 'htm'].
         * The default value is false.
         */
        extensions?: string[] | false | undefined;

        /**
         * Let client errors fall-through as unhandled requests, otherwise forward a client error.
         * The default value is true.
         */
        fallthrough?: boolean | undefined;

        /**
         * Enable or disable the immutable directive in the Cache-Control response header.
         * If enabled, the maxAge option should also be specified to enable caching. The immutable directive will prevent supported clients from making conditional requests during the life of the maxAge option to check if the file has changed.
         */
        immutable?: boolean | undefined;

        /**
         * By default this module will send "index.html" files in response to a request on a directory.
         * To disable this set false or to supply a new index pass a string or an array in preferred order.
         */
        index?: boolean | string | string[] | undefined;

        /**
         * Enable or disable Last-Modified header, defaults to true. Uses the file system's last modified value.
         */
        lastModified?: boolean | undefined;

        /**
         * Provide a max-age in milliseconds for http caching, defaults to 0. This can also be a string accepted by the ms module.
         */
        maxAge?: number | string | undefined;

        /**
         * Redirect to trailing "/" when the pathname is a dir. Defaults to true.
         */
        redirect?: boolean | undefined;

        /**
         * Function to set custom headers on response. Alterations to the headers need to occur synchronously.
         * The function is called as fn(res, path, stat), where the arguments are:
         * res the response object
         * path the file path that is being sent
         * stat the stat object of the file that is being sent
         */
        setHeaders?: ((res: R, path: string, stat: any) => any) | undefined;
    }

    interface RequestHandler<R extends http.ServerResponse> {
        (request: http.IncomingMessage, response: R, next: (err?: HttpError) => void): any;
    }

    interface RequestHandlerConstructor<R extends http.ServerResponse> {
        (root: string, options?: ServeStaticOptions<R>): RequestHandler<R>;
        mime: typeof m;
    }
}

export = serveStatic;
