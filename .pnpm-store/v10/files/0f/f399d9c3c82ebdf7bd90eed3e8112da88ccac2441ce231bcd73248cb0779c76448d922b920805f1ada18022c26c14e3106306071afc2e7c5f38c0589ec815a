// Type definitions for send 0.17
// Project: https://github.com/pillarjs/send
// Definitions by: Mike Jerred <https://github.com/MikeJerred>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from "fs";
import * as m from "mime";
import * as stream from "stream";

/**
 * Create a new SendStream for the given path to send to a res.
 * The req is the Node.js HTTP request and the path is a urlencoded path to send (urlencoded, not the actual file-system path).
 */
declare function send(req: stream.Readable, path: string, options?: send.SendOptions): send.SendStream;

declare namespace send {
    const mime: typeof m;
    interface SendOptions {
        /**
         * Enable or disable accepting ranged requests, defaults to true.
         * Disabling this will not send Accept-Ranges and ignore the contents of the Range request header.
         */
        acceptRanges?: boolean | undefined;

        /**
         * Enable or disable setting Cache-Control response header, defaults to true.
         * Disabling this will ignore the maxAge option.
         */
        cacheControl?: boolean | undefined;

        /**
         * Set how "dotfiles" are treated when encountered.
         * A dotfile is a file or directory that begins with a dot (".").
         * Note this check is done on the path itself without checking if the path actually exists on the disk.
         * If root is specified, only the dotfiles above the root are checked (i.e. the root itself can be within a dotfile when when set to "deny").
         * 'allow' No special treatment for dotfiles.
         * 'deny' Send a 403 for any request for a dotfile.
         * 'ignore' Pretend like the dotfile does not exist and 404.
         * The default value is similar to 'ignore', with the exception that this default will not ignore the files within a directory that begins with a dot, for backward-compatibility.
         */
        dotfiles?: "allow" | "deny" | "ignore" | undefined;

        /**
         * Byte offset at which the stream ends, defaults to the length of the file minus 1.
         * The end is inclusive in the stream, meaning end: 3 will include the 4th byte in the stream.
         */
        end?: number | undefined;

        /**
         * Enable or disable etag generation, defaults to true.
         */
        etag?: boolean | undefined;

        /**
         * If a given file doesn't exist, try appending one of the given extensions, in the given order.
         * By default, this is disabled (set to false).
         * An example value that will serve extension-less HTML files: ['html', 'htm'].
         * This is skipped if the requested file already has an extension.
         */
        extensions?: string[] | string | boolean | undefined;

        /**
         * Enable or disable the immutable directive in the Cache-Control response header, defaults to false.
         * If set to true, the maxAge option should also be specified to enable caching.
         * The immutable directive will prevent supported clients from making conditional requests during the life of the maxAge option to check if the file has changed.
         * @default false
         */
        immutable?: boolean | undefined;

        /**
         * By default send supports "index.html" files, to disable this set false or to supply a new index pass a string or an array in preferred order.
         */
        index?: string[] | string | boolean | undefined;

        /**
         * Enable or disable Last-Modified header, defaults to true.
         * Uses the file system's last modified value.
         */
        lastModified?: boolean | undefined;

        /**
         * Provide a max-age in milliseconds for http caching, defaults to 0.
         * This can also be a string accepted by the ms module.
         */
        maxAge?: string | number | undefined;

        /**
         * Serve files relative to path.
         */
        root?: string | undefined;

        /**
         * Byte offset at which the stream starts, defaults to 0.
         * The start is inclusive, meaning start: 2 will include the 3rd byte in the stream.
         */
        start?: number | undefined;
    }

    interface SendStream extends stream.Stream {
        /**
         * @deprecated pass etag as option
         * Enable or disable etag generation.
         */
        etag(val: boolean): SendStream;

        /**
         * @deprecated use dotfiles option
         * Enable or disable "hidden" (dot) files.
         */
        hidden(val: boolean): SendStream;

        /**
         * @deprecated pass index as option
         * Set index `paths`, set to a falsy value to disable index support.
         */
        index(paths: string[] | string): SendStream;

        /**
         * @deprecated pass root as option
         * Set root `path`.
         */
        root(paths: string): SendStream;

        /**
         * @deprecated pass root as option
         * Set root `path`.
         */
        from(paths: string): SendStream;

        /**
         * @deprecated pass maxAge as option
         * Set max-age to `maxAge`.
         */
        maxage(maxAge: string | number): SendStream;

        /**
         * Emit error with `status`.
         */
        error(status: number, error?: Error): void;

        /**
         * Check if the pathname ends with "/".
         */
        hasTrailingSlash(): boolean;

        /**
         * Check if this is a conditional GET request.
         */
        isConditionalGET(): boolean;

        /**
         * Strip content-* header fields.
         */
        removeContentHeaderFields(): void;

        /**
         * Respond with 304 not modified.
         */
        notModified(): void;

        /**
         * Raise error that headers already sent.
         */
        headersAlreadySent(): void;

        /**
         * Check if the request is cacheable, aka responded with 2xx or 304 (see RFC 2616 section 14.2{5,6}).
         */
        isCachable(): boolean;

        /**
         * Handle stat() error.
         */
        onStatError(error: Error): void;

        /**
         * Check if the cache is fresh.
         */
        isFresh(): boolean;

        /**
         * Check if the range is fresh.
         */
        isRangeFresh(): boolean;

        /**
         * Redirect to path.
         */
        redirect(path: string): void;

        /**
         * Pipe to `res`.
         */
        pipe<T extends NodeJS.WritableStream>(res: T): T;

        /**
         * Transfer `path`.
         */
        send(path: string, stat?: fs.Stats): void;

        /**
         * Transfer file for `path`.
         */
        sendFile(path: string): void;

        /**
         * Transfer index for `path`.
         */
        sendIndex(path: string): void;

        /**
         * Transfer index for `path`.
         */
        stream(path: string, options?: {}): void;

        /**
         * Set content-type based on `path` if it hasn't been explicitly set.
         */
        type(path: string): void;

        /**
         * Set response header fields, most fields may be pre-defined.
         */
        setHeader(path: string, stat: fs.Stats): void;
    }
}

export = send;
