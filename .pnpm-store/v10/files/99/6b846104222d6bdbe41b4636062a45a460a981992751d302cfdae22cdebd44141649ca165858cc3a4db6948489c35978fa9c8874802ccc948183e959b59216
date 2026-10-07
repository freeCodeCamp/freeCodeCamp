import { Cache as Cache_2 } from '@algolia/cache-common';
import { Logger } from '@algolia/logger-common';
import { MethodType } from '@algolia/requester-common';
import { Request as Request_3 } from '@algolia/requester-common';
import { Requester } from '@algolia/requester-common';
import { Response as Response_2 } from '@algolia/requester-common';

export declare type ApiError = Error & {
    /**
     * The http status code.
     */
    readonly status: number;
    /**
     * Contains report of stack frames of the
     * execution of a certain request.
     */
    readonly transporterStackTrace: readonly StackFrame[];
};

export declare const CallEnum: Readonly<Record<string, CallType>>;

export declare type CallType = 1 | 2 | 3;

export declare function createApiError(message: string, status: number, transporterStackTrace: readonly StackFrame[]): ApiError;

export declare function createDeserializationError(message: string, response: Response_2): DeserializationError;

export declare function createMappedRequestOptions(requestOptions?: RequestOptions, timeout?: number): MappedRequestOptions;

export declare function createRetryError(transporterStackTrace: readonly StackFrame[]): RetryError;

export declare function createStatefulHost(host: StatelessHost, status?: HostStatusType): StatefulHost;

export declare function createStatelessHost(options: HostOptions): StatelessHost;

export declare function createTransporter(options: TransporterOptions): Transporter;

export declare function createUserAgent(version: string): UserAgent;

export declare type DeserializationError = Error & {
    /**
     * The raw response from the server.
     */
    readonly response: Response_2;
};

export declare function deserializeFailure({ content, status }: Response_2, stackFrame: readonly StackFrame[]): Error;

export declare function deserializeSuccess<TObject>(response: Response_2): TObject;

declare type Headers_2 = Readonly<Record<string, string>>;
export { Headers_2 as Headers }

export declare type HostOptions = string | {
    /**
     * The url of the server, without the protocol.
     */
    readonly url: string;
    /**
     * The type of host. Defaults to `Any`.
     */
    readonly accept?: CallType;
    /**
     * The protocol. Defaults to `https`.
     */
    readonly protocol?: string;
};

export declare const HostStatusEnum: Readonly<Record<string, HostStatusType>>;

export declare type HostStatusType = 1 | 2 | 3;

export declare function isStatefulHostTimeouted(host: StatefulHost): boolean;

export declare function isStatefulHostUp(host: StatefulHost): boolean;

export declare type MappedRequestOptions = {
    /**
     * If the request should be cached.
     */
    readonly cacheable: boolean | undefined;
    /**
     * The `read` or `write` timeout of the request.
     */
    readonly timeout: number | undefined;
    /**
     * The headers of the request.
     */
    readonly headers: Record<string, string>;
    /**
     * The query parameters of the request.
     */
    readonly queryParameters: Record<string, any>;
    /**
     * The data to be transfered to the server.
     */
    readonly data?: Record<string, string>;
};

export declare type QueryParameters = Readonly<Record<string, string>>;

declare type Request_2 = {
    /**
     * The method of the request. `GET`, etc.
     */
    readonly method: MethodType;
    /**
     * The path of the request. i.e: `/1/indexes`.
     */
    readonly path: string;
    /**
     * The data to transfer to the server.
     */
    readonly data?: Record<string, any> | ReadonlyArray<Record<string, any>>;
    /**
     * If the response should persist on cache.
     */
    readonly cacheable?: boolean;
};
export { Request_2 as Request }

export declare type RequestOptions = {
    /**
     * If the given request should persist on the cache. Keep in mind,
     * that some methods may have this option enabled by default.
     */
    readonly cacheable?: boolean;
    /**
     * Custom timeout for the request. Note that, in normal situacions
     * the given timeout will be applied. But the transporter layer may
     * increase this timeout if there is need for it.
     */
    readonly timeout?: number;
    /**
     * Custom headers for the request. This headers are
     * going to be merged the transporter headers.
     */
    readonly headers?: Readonly<Record<string, string>>;
    /**
     * Custom query parameters for the request. This query parameters are
     * going to be merged the transporter query parameters.
     */
    readonly queryParameters?: Record<string, any>;
    /**
     * Custom data for the request. This data are
     * going to be merged the transporter data.
     */
    readonly data?: Record<string, any>;
    /**
     * Additional request body values. It's only taken in
     * consideration in `POST` and `PUT` requests.
     */
    [key: string]: any;
};

export declare type RetryError = Error & {
    /**
     * Contains report of stack frames of the
     * execution of a certain request.
     */
    readonly transporterStackTrace: readonly StackFrame[];
};

export declare function serializeData(request: Request_2, requestOptions: RequestOptions): string | undefined;

export declare function serializeHeaders(transporter: Transporter, requestOptions: RequestOptions): Headers_2;

export declare function serializeQueryParameters(parameters: Readonly<Record<string, any>>): string;

export declare function serializeUrl(host: StatelessHost, path: string, queryParameters: Readonly<Record<string, string>>): string;

export declare type StackFrame = {
    /**
     * The request made.
     */
    readonly request: Request_3;
    /**
     * The received response.
     */
    readonly response: Response_2;
    /**
     * The host associated with the `request` and the `response`.
     */
    readonly host: StatelessHost;
    /**
     * The number of tries left.
     */
    readonly triesLeft: number;
};

export declare function stackFrameWithoutCredentials(stackFrame: StackFrame): StackFrame;

export declare function stackTraceWithoutCredentials(stackTrace: readonly StackFrame[]): readonly StackFrame[];

export declare type StatefulHost = StatelessHost & {
    /**
     * Holds the last time this host failed in milliseconds elapsed
     * since the UNIX epoch. This failure can be because of an
     * timeout error or a because the host is not available.
     */
    readonly lastUpdate: number;
    /**
     * Holds the host status. Note that, depending of the `lastUpdate`
     * an host may be considered as `Up` on the transporter layer.
     */
    readonly status: HostStatusType;
};

export declare type StatelessHost = {
    /**
     * The protocol of the stateless host. Between `http` and `https`.
     */
    readonly protocol: string;
    /**
     * The url, without protocol.
     */
    readonly url: string;
    /**
     * The type of the host.
     */
    readonly accept: CallType;
};

export declare type Timeouts = {
    /**
     * The timeout to stablish a connection with the server.
     */
    readonly connect: number;
    /**
     * The timeout to receive the response on read requests.
     */
    readonly read: number;
    /**
     * The timeout to receive the response on write requests.
     */
    readonly write: number;
};

export declare type Transporter = {
    /**
     * The cache of the hosts. Usually used to persist
     * the state of the host when its down.
     */
    readonly hostsCache: Cache_2;
    /**
     * The logger instance to send events of the transporter.
     */
    readonly logger: Logger;
    /**
     * The underlying requester used. Should differ
     * depending of the enviroment where the client
     * will be used.
     */
    readonly requester: Requester;
    /**
     * The cache of the requests. When requests are
     * `cacheable`, the returned promised persists
     * in this cache to shared in similar resquests
     * before being resolved.
     */
    readonly requestsCache: Cache_2;
    /**
     * The cache of the responses. When requests are
     * `cacheable`, the returned responses persists
     * in this cache to shared in similar resquests.
     */
    readonly responsesCache: Cache_2;
    /**
     * The timeouts used by the requester. The transporter
     * layer may increase this timeouts as defined on the
     * retry strategy.
     */
    readonly timeouts: Timeouts;
    /**
     * The user agent used. Sent on query parameters.
     */
    readonly userAgent: UserAgent;
    /**
     * The headers used on each request.
     */
    readonly headers: Headers_2;
    /**
     * The query parameters used on each request.
     */
    readonly queryParameters: QueryParameters;
    /**
     * The hosts used by the retry strategy.
     *
     * @readonly
     */
    hosts: readonly StatelessHost[];
    /**
     * Performs a read request using read hosts.
     */
    readonly read: <TResponse>(request: Request_2, requestOptions?: RequestOptions) => Readonly<Promise<TResponse>>;
    /**
     * Performs a write request using write hosts.
     */
    readonly write: <TResponse>(request: Request_2, requestOptions?: RequestOptions) => Readonly<Promise<TResponse>>;
};

export declare type TransporterOptions = {
    /**
     * The cache of the hosts. Usually used to persist
     * the state of the host when its down.
     */
    readonly hostsCache: Cache_2;
    /**
     * The logger instance to send events of the transporter.
     */
    readonly logger: Logger;
    /**
     * The underlying requester used. Should differ
     * depending of the enviroment where the client
     * will be used.
     */
    readonly requester: Requester;
    /**
     * The cache of the requests. When requests are
     * `cacheable`, the returned promised persists
     * in this cache to shared in similar resquests
     * before being resolved.
     */
    readonly requestsCache: Cache_2;
    /**
     * The cache of the responses. When requests are
     * `cacheable`, the returned responses persists
     * in this cache to shared in similar resquests.
     */
    readonly responsesCache: Cache_2;
    /**
     * The timeouts used by the requester. The transporter
     * layer may increase this timeouts as defined on the
     * retry strategy.
     */
    readonly timeouts: Timeouts;
    /**
     * The hosts used by the requester.
     */
    readonly hosts: readonly HostOptions[];
    /**
     * The headers used by the requester. The transporter
     * layer may add some extra headers during the request
     * for the user agent, and others.
     */
    readonly headers: Headers_2;
    /**
     * The query parameters used by the requester. The transporter
     * layer may add some extra headers during the request
     * for the user agent, and others.
     */
    readonly queryParameters: QueryParameters;
    /**
     * The user agent used. Sent on query parameters.
     */
    readonly userAgent: UserAgent;
};

export declare type UserAgent = {
    /**
     * The raw value of the user agent.
     *
     * @readonly
     */
    value: string;
    /**
     * Mutates the current user agent ading the given user agent options.
     */
    readonly add: (options: UserAgentOptions) => UserAgent;
};

export declare type UserAgentOptions = {
    /**
     * The segment. Usually the integration name.
     */
    readonly segment: string;
    /**
     * The version. Usually the integration version.
     */
    readonly version?: string;
};

export { }
