/// <reference types="node" />

import { EventEmitter } from 'events';
import * as Http from 'http';
import * as Https from 'https';
import * as Stream from 'stream';
import * as Url from 'url';
import { LookupFunction } from "node:net"

import { Boom } from '@hapi/boom';


/**
 * An HTTP request client.
 */
declare class Client {

    /**
     * An object containing the node agents used for pooling connections for `http` and `https`.
     */
    agents: Client.Agents;

    /**
     * An event emitter used to deliver events when the `events` option is set.
     */
    events?: Client.Events;

    /**
     * Creates a new client.
     * 
     * @param options - the client default options.
     */
    constructor(options?: Client.Options);

    /**
     * Creates a new client using the current client options as defaults and the provided options as override.
     * 
     * @param options - the client override options.
     * 
     * @returns a new client.
     */
    defaults(options: Client.Options): Client;

    /**
     * Request an HTTP resource.
     * 
     * @param method - a string specifying the HTTP request method. Defaults to 'GET'.
     * @param url - the URI of the requested resource.
     * @param options - default options override.
     * 
     * @returns a promise resolving into an HTTP response object with a 'req' property holding a reference to the HTTP request object.
     */
    request(method: string, url: string, options?: Client.request.Options): Promise<Http.IncomingMessage> & { req: Http.ClientRequest };

    /**
     * Reads a readable stream and returns the parsed payload.
     * 
     * @param res - the readable stream.
     * @param options - default options override.
     * 
     * @returns the parsed payload based on the provided options.
     */
    read<T = Buffer>(res: Stream.Readable | Http.IncomingMessage, options?: Client.read.Options): Promise<T>;

    /**
     * Converts a buffer, string, or an array of them into a readable stream.
     * 
     * @param payload - a string, buffer, or an array of them.
     * @param encoding - the payload encoding.
     * 
     * @returns a readable stream.
     */
    toReadableStream(payload: Client.toReadableStream.Payload, encoding?: string): Stream.Readable;

    /**
     * Parses the HTTP Cache-Control header.
     * 
     * @param field - the header content.
     * 
     * @returns an object with the header parameters or null if invalid.
     */
    parseCacheControl(field: string): Client.parseCacheControl.Parameters | null;

    /**
     * Performs an HTTP GET request.
     * 
     * @param uri - the resource URI.
     * @param options - default options override.
     * 
     * @returns the received payload Buffer or parsed payload based on the options.
     */
    get<T>(uri: string, options?: Client.request.Options & Client.read.Options): Promise<Client.request.Response<T>>;

    /**
     * Performs an HTTP POST request.
     *
     * @param uri - the resource URI.
     * @param options - default options override.
     *
     * @returns the received payload Buffer or parsed payload based on the options.
     */
    post<T>(uri: string, options?: Client.request.Options & Client.read.Options): Promise<Client.request.Response<T>>;

    /**
     * Performs an HTTP PATCH request.
     *
     * @param uri - the resource URI.
     * @param options - default options override.
     *
     * @returns the received payload Buffer or parsed payload based on the options.
     */
    patch<T>(uri: string, options?: Client.request.Options & Client.read.Options): Promise<Client.request.Response<T>>;

    /**
     * Performs an HTTP PUT request.
     *
     * @param uri - the resource URI.
     * @param options - default options override.
     *
     * @returns the received payload Buffer or parsed payload based on the options.
     */
    put<T>(uri: string, options?: Client.request.Options & Client.read.Options): Promise<Client.request.Response<T>>;

    /**
     * Performs an HTTP DELETE request.
     *
     * @param uri - the resource URI.
     * @param options - default options override.
     *
     * @returns the received payload Buffer or parsed payload based on the options.
     */
    delete<T>(uri: string, options?: Client.request.Options & Client.read.Options): Promise<Client.request.Response<T>>;
}


declare namespace Client {

    interface Options extends request.Options, read.Options {

        /**
         * An object containing the node agents used for pooling connections for `http` and `https`.
         */
        readonly agents?: Agents;

        /**
         * Enables events.
         * 
         * @default false
         */
        readonly events?: boolean;
    }

    interface Agents {

        /**
         * The agent used for HTTP requests.
         */
        readonly http: Http.Agent;

        /**
         * The agent used for HTTPS requests.
         */
        readonly https: Https.Agent;

        /**
         * The agent used for HTTPS requests which ignores unauthorized requests.
         */
        readonly httpsAllowUnauthorized: Https.Agent;
    }

    class Events extends EventEmitter {

        on(event: 'preRequest', litener: Events.preRequest): this;
        once(event: 'preRequest', litener: Events.preRequest): this;
        addListener(event: 'preRequest', litener: Events.preRequest): this;

        on(event: 'request', listener: Events.request): this;
        once(event: 'request', listener: Events.request): this;
        addListener(event: 'request', listener: Events.request): this;

        on(event: 'response', listener: Events.response): this;
        once(event: 'response', listener: Events.response): this;
        addListener(event: 'response', listener: Events.response): this;
    }

    namespace Events {

        type preRequest = (uri: string, options: Client.Options) => void;
        type request = (req: Http.ClientRequest) => void;
        type response = (err: Boom | undefined, details: { req: Http.ClientRequest, res: Http.IncomingMessage | undefined, start: number, url: Url.URL }) => void;
    }

    namespace request {

        interface Options {

            /**
             * Node HTTP or HTTPS Agent object (false disables agent pooling).
             */
            readonly agent?: Http.Agent | Https.Agent | false;

            /**
             * Custom lookup function. Default: dns.lookup().
             */
            readonly lookup?: LookupFunction;

            /**
             * IP address family to use when resolving host or hostname. Valid values are 4 or 6. When unspecified, both IP v4 and v6 will be used.
             */
            readonly family?: number;

            /**
             * Optional dns.lookup() hints.
             */
            readonly hints?: number;

            /**
             * Fully qualified URL string used as the base URL.
             */
            readonly baseUrl?: string;

            /**
             * A function to call before a redirect is triggered.
             * 
             * @param redirectMethod - a string specifying the redirect method.
             * @param statusCode - HTTP status code of the response that triggered the redirect.
             * @param location - The redirect location string.
             * @param resHeaders - An object with the headers received as part of the redirection response.
             * @param redirectOptions - Options that will be applied to the redirect request. Changes to this object are applied to the redirection request.
             * @param next - the callback function called to perform the redirection.
             */
            readonly beforeRedirect?: (redirectMethod: string, statusCode: number, location: string, resHeaders: Record<string, string>, redirectOptions: Client.request.Options, next: () => void) => void;

            /**
             * TLS list of TLS ciphers to override node's default.
             */
            readonly ciphers?: string;

            /**
             * An object containing the request headers.
             */
            readonly headers?: Record<string, string>;

            /**
             * Determines how to handle gzipped payloads.
             * 
             * @default false
             */
            readonly gunzip?: boolean | 'force';

            /**
             * The request body as a string, Buffer, readable stream, or an object that can be serialized using `JSON.stringify()`.
             */
            readonly payload?: Payload;

            /**
             * Enables redirects on 303 responses (using GET).
             * 
             * @default false
             */
            readonly redirect303?: boolean;

            /**
             * Overrides the HTTP method used when following 301 and 302 redirections. Defaults to the original method.
             */
            readonly redirectMethod?: string;

            /**
             * The maximum number of redirects to follow.
             * 
             * @default false
             */
            readonly redirects?: number | false;

            /**
             * A function to call when a redirect was triggered.
             * 
             * @param statusCode - HTTP status code of the response that triggered the redirect.
             * @param location - the redirected location string.
             * @param req - the new ClientRequest object which replaces the one initially returned.
             */
            readonly redirected?: (statusCode: number, location: string, req: Http.ClientRequest) => void;

            /**
             * TLS flag indicating whether the client should reject a response from a server with invalid certificates.
             */
            readonly rejectUnauthorized?: boolean;

            /**
             * TLS flag indicating the SSL method to use, e.g. `SSLv3_method` to force SSL version 3.
             */
            readonly secureProtocol?: string;

            /**
             * A UNIX socket path string for direct server connection.
             */
            readonly socketPath?: string;

            /**
             * Number of milliseconds to wait without receiving a response before aborting the request.
             * 
             * @default 0
             */
            readonly timeout?: number;
        }

        type Payload = string | Buffer | Stream.Readable | object;

        interface Response<T = Buffer> {

            res: Http.IncomingMessage;
            payload: T;
        }
    }

    namespace read {

        interface Options {

            /**
            * Determines how to handle gzipped payloads.
            *
            * @default false
            */
            readonly gunzip?: boolean | 'force';

            /**
             * Determines how to parse the payload as JSON.
             */
            readonly json?: boolean | 'strict' | 'force';

            /**
             * The maximum allowed response payload size.
             * 
             * @default 0
             */
            readonly maxBytes?: number;

            /**
             * The number of milliseconds to wait while reading data before aborting handling of the response.
             * 
             * @default 0
             */
            readonly timeout?: number;
        }
    }

    namespace toReadableStream {

        type Item = string | Buffer;
        type Payload = Item | Item[];
    }

    namespace parseCacheControl {

        interface Parameters {

            'max-age'?: number;
            [key: string]: string | number | undefined;
        }
    }
}


declare const client: Client;
export = client;
