/// <reference types="node" />

import { IncomingMessage } from "http";
import http = require("http");

/**
 * Parses set-cookie headers into objects
 */
declare function parse(
    input: string | readonly string[] | IncomingMessage,
    options: parse.Options & { map: true },
): parse.CookieMap;
declare function parse(
    input: string | readonly string[] | IncomingMessage,
    options?: parse.Options & { map?: false | undefined },
): parse.Cookie[];
declare function parse(
    input: string | readonly string[] | IncomingMessage,
    options?: parse.Options,
): parse.Cookie[] | parse.CookieMap;

declare namespace parse {
    function parse(
        input: string | readonly string[] | IncomingMessage,
        options: Options & { map: true },
    ): CookieMap;
    function parse(
        input: string | readonly string[] | IncomingMessage,
        options?: Options & { map?: false | undefined },
    ): Cookie[];
    function parse(input: string | readonly string[] | IncomingMessage, options?: Options): Cookie[] | CookieMap;

    /**
     * Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
     * that are within a single set-cookie field-value, such as in the Expires portion.
     * This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
     * Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
     * React Native's fetch does this for *every* header, including set-cookie.
     * Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
     * Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
     */
    function splitCookiesString(input: string | readonly string[] | undefined): string[];

    /**
     * Parses a single set-cookie header value string.
     * Options default is `{decodeValues: true}`. Used under-the-hood by `parse()`
     */
    function parseString(individualSetCookieHeader: string, options?: Options): Cookie;

    interface Cookie {
        /**
         * cookie name
         */
        name: string;
        /**
         * cookie value
         */
        value: string;
        /**
         * cookie path
         */
        path?: string | undefined;
        /**
         * absolute expiration date for the cookie
         */
        expires?: Date | undefined;
        /**
         * relative max age of the cookie in seconds from when the client receives it (integer or undefined)
         * Note: when using with express's res.cookie() method, multiply maxAge by 1000 to convert to milliseconds
         */
        maxAge?: number | undefined;
        /**
         * domain for the cookie,
         * may begin with "." to indicate the named domain or any subdomain of it
         */
        domain?: string | undefined;
        /**
         * indicates that this cookie should only be sent over HTTPs
         */
        secure?: boolean | undefined;
        /**
         * indicates that this cookie should not be accessible to client-side JavaScript
         */
        httpOnly?: boolean | undefined;
        /**
         * indicates a cookie ought not to be sent along with cross-site requests
         */
        sameSite?: string | undefined;
    }

    interface CookieMap {
        [name: string]: Cookie;
    }

    interface Options {
        /**
         * Calls dcodeURIComponent on each value
         * @default true
         */
        decodeValues?: boolean | undefined;
        /**
         * Return an object instead of an array
         * @default false
         */
        map?: boolean | undefined;
        /**
         * Suppress the warning that is loged when called on a request instead of a response
         * @default false
         */
        silent?: boolean | undefined;
    }
}

export = parse;
