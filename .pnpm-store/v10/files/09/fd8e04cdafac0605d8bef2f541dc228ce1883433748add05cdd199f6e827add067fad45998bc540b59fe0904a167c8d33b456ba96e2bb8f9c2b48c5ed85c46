/// <reference types="node" />
import type { IncomingMessage } from "http";
import type { Headers, Options } from "got";
import type { GatsbyCache } from "gatsby";
export type IFetchRemoteFileOptions = {
    url: string;
    auth?: {
        htaccess_pass?: string;
        htaccess_user?: string;
    };
    httpHeaders?: Headers;
    ext?: string;
    name?: string;
    cacheKey?: string;
    excludeDigest?: boolean;
} & ({
    directory: string;
    cache?: never;
} | {
    directory?: never;
    cache: GatsbyCache;
});
/**
 * requestRemoteNode
 * --
 * Download the requested file
 *
 * @param  {String}   url
 * @param  {Headers}  headers
 * @param  {String}   tmpFilename
 * @param  {Object}   httpOptions
 * @param  {number}   attempt
 * @return {Promise<Object>}  Resolves with the [http Result Object]{@link https://nodejs.org/api/http.html#http_class_http_serverresponse}
 */
export declare function requestRemoteNode(url: string | URL, headers: Headers, tmpFilename: string, httpOptions?: Options, attempt?: number): Promise<IncomingMessage>;
