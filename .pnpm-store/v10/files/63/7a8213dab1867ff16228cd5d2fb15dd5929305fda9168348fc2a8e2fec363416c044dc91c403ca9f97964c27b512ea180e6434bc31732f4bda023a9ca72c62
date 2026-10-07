import { QueryParams } from './request';
/**
 * Data extracted from an incoming request to a node server
 */
export interface ExtractedNodeRequestData {
    [key: string]: any;
    /** Specific headers from the request */
    headers?: {
        [key: string]: string;
    };
    /**  The request's method */
    method?: string;
    /** The request's URL, including query string */
    url?: string;
    /** String representing the cookies sent along with the request */
    cookies?: {
        [key: string]: string;
    };
    /** The request's query params */
    query_string?: QueryParams;
    /** Any data sent in the request's body, as a JSON string */
    data?: string;
}
/**
 * Location object on a service worker's `self` object.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WorkerLocation.
 */
export interface WorkerLocation {
    /** The protocol scheme of the URL of the script executed in the Worker, including the final ':'. */
    readonly protocol: string;
    /** The host, that is the hostname, a ':', and the port of the URL of the script executed in the Worker. */
    readonly host: string;
    /** The domain of the URL of the script executed in the Worker. */
    readonly hostname: string;
    /** The canonical form of the origin of the specific location. */
    readonly origin: string;
    /** The port number of the URL of the script executed in the Worker. */
    readonly port: string;
    /** The path of the URL of the script executed in the Worker, beginning with a '/'. */
    readonly pathname: string;
    /** The parameters (query string) of the URL of the script executed in the Worker, beginning with a '?'. */
    readonly search: string;
    /** The fragment identifier of the URL of the script executed in the Worker, beginning with a '#'. */
    readonly hash: string;
    /** Stringifier that returns the whole URL of the script executed in the Worker. */
    readonly href: string;
    /** Synonym for `href` attribute */
    toString(): string;
}
export type Primitive = number | string | boolean | bigint | symbol | null | undefined;
export type HttpHeaderValue = string | string[] | number | null;
//# sourceMappingURL=misc.d.ts.map
