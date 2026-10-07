declare module "node:quic" {
    import { KeyObject, webcrypto } from "node:crypto";
    import { SocketAddress } from "node:net";
    import { ReadableStream } from "node:stream/web";
    /**
     * @since v23.8.0
     */
    type OnSessionCallback = (this: QuicEndpoint, session: QuicSession) => void;
    /**
     * @since v23.8.0
     */
    type OnStreamCallback = (this: QuicSession, stream: QuicStream) => void;
    /**
     * @since v23.8.0
     */
    type OnDatagramCallback = (this: QuicSession, datagram: Uint8Array, early: boolean) => void;
    /**
     * @since v23.8.0
     */
    type OnDatagramStatusCallback = (this: QuicSession, id: bigint, status: "lost" | "acknowledged") => void;
    /**
     * @since v23.8.0
     */
    type OnPathValidationCallback = (
        this: QuicSession,
        result: "success" | "failure" | "aborted",
        newLocalAddress: SocketAddress,
        newRemoteAddress: SocketAddress,
        oldLocalAddress: SocketAddress,
        oldRemoteAddress: SocketAddress,
        preferredAddress: boolean,
    ) => void;
    /**
     * @since v23.8.0
     */
    type OnSessionTicketCallback = (this: QuicSession, ticket: object) => void;
    /**
     * @since v23.8.0
     */
    type OnVersionNegotiationCallback = (
        this: QuicSession,
        version: number,
        requestedVersions: number[],
        supportedVersions: number[],
    ) => void;
    /**
     * @since v23.8.0
     */
    type OnHandshakeCallback = (
        this: QuicSession,
        sni: string,
        alpn: string,
        cipher: string,
        cipherVersion: string,
        validationErrorReason: string,
        validationErrorCode: number,
        earlyDataAccepted: boolean,
    ) => void;
    /**
     * @since v23.8.0
     */
    type OnBlockedCallback = (this: QuicStream) => void;
    /**
     * @since v23.8.0
     */
    type OnStreamErrorCallback = (this: QuicStream, error: any) => void;
    /**
     * @since v23.8.0
     */
    interface TransportParams {
        /**
         * The preferred IPv4 address to advertise.
         * @since v23.8.0
         */
        preferredAddressIpv4?: SocketAddress | undefined;
        /**
         * The preferred IPv6 address to advertise.
         * @since v23.8.0
         */
        preferredAddressIpv6?: SocketAddress | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxStreamDataBidiLocal?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxStreamDataBidiRemote?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxStreamDataUni?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxData?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxStreamsBidi?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        initialMaxStreamsUni?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        maxIdleTimeout?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        activeConnectionIDLimit?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        ackDelayExponent?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        maxAckDelay?: bigint | number | undefined;
        /**
         * @since v23.8.0
         */
        maxDatagramFrameSize?: bigint | number | undefined;
    }
    /**
     * @since v23.8.0
     */
    interface SessionOptions {
        /**
         * An endpoint to use.
         * @since v23.8.0
         */
        endpoint?: EndpointOptions | QuicEndpoint | undefined;
        /**
         * The ALPN protocol identifier.
         * @since v23.8.0
         */
        alpn?: string | undefined;
        /**
         * The CA certificates to use for sessions.
         * @since v23.8.0
         */
        ca?: ArrayBuffer | NodeJS.ArrayBufferView | ReadonlyArray<ArrayBuffer | NodeJS.ArrayBufferView> | undefined;
        /**
         * Specifies the congestion control algorithm that will be used.
         * Must be set to one of either `'reno'`, `'cubic'`, or `'bbr'`.
         *
         * This is an advanced option that users typically won't have need to specify.
         * @since v23.8.0
         */
        cc?: `${constants.cc}` | undefined;
        /**
         * The TLS certificates to use for sessions.
         * @since v23.8.0
         */
        certs?: ArrayBuffer | NodeJS.ArrayBufferView | ReadonlyArray<ArrayBuffer | NodeJS.ArrayBufferView> | undefined;
        /**
         * The list of supported TLS 1.3 cipher algorithms.
         * @since v23.8.0
         */
        ciphers?: string | undefined;
        /**
         * The CRL to use for sessions.
         * @since v23.8.0
         */
        crl?: ArrayBuffer | NodeJS.ArrayBufferView | ReadonlyArray<ArrayBuffer | NodeJS.ArrayBufferView> | undefined;
        /**
         * The list of support TLS 1.3 cipher groups.
         * @since v23.8.0
         */
        groups?: string | undefined;
        /**
         * True to enable TLS keylogging output.
         * @since v23.8.0
         */
        keylog?: boolean | undefined;
        /**
         * The TLS crypto keys to use for sessions.
         * @since v23.8.0
         */
        keys?: KeyObject | webcrypto.CryptoKey | ReadonlyArray<KeyObject | webcrypto.CryptoKey> | undefined;
        /**
         * Specifies the maximum UDP packet payload size.
         * @since v23.8.0
         */
        maxPayloadSize?: bigint | number | undefined;
        /**
         * Specifies the maximum stream flow-control window size.
         * @since v23.8.0
         */
        maxStreamWindow?: bigint | number | undefined;
        /**
         * Specifies the maximum session flow-control window size.
         * @since v23.8.0
         */
        maxWindow?: bigint | number | undefined;
        /**
         * The minimum QUIC version number to allow. This is an advanced option that users
         * typically won't have need to specify.
         * @since v23.8.0
         */
        minVersion?: number | undefined;
        /**
         * When the remote peer advertises a preferred address, this option specifies whether
         * to use it or ignore it.
         * @since v23.8.0
         */
        preferredAddressPolicy?: "use" | "ignore" | "default" | undefined;
        /**
         * True if qlog output should be enabled.
         * @since v23.8.0
         */
        qlog?: boolean | undefined;
        /**
         * A session ticket to use for 0RTT session resumption.
         * @since v23.8.0
         */
        sessionTicket?: NodeJS.ArrayBufferView | undefined;
        /**
         * Specifies the maximum number of milliseconds a TLS handshake is permitted to take
         * to complete before timing out.
         * @since v23.8.0
         */
        handshakeTimeout?: bigint | number | undefined;
        /**
         * The peer server name to target.
         * @since v23.8.0
         */
        sni?: string | undefined;
        /**
         * True to enable TLS tracing output.
         * @since v23.8.0
         */
        tlsTrace?: boolean | undefined;
        /**
         * The QUIC transport parameters to use for the session.
         * @since v23.8.0
         */
        transportParams?: TransportParams | undefined;
        /**
         * Specifies the maximum number of unacknowledged packets a session should allow.
         * @since v23.8.0
         */
        unacknowledgedPacketThreshold?: bigint | number | undefined;
        /**
         * True to require verification of TLS client certificate.
         * @since v23.8.0
         */
        verifyClient?: boolean | undefined;
        /**
         * True to require private key verification.
         * @since v23.8.0
         */
        verifyPrivateKey?: boolean | undefined;
        /**
         * The QUIC version number to use. This is an advanced option that users typically
         * won't have need to specify.
         * @since v23.8.0
         */
        version?: number | undefined;
    }
    /**
     * Initiate a new client-side session.
     *
     * ```js
     * import { connect } from 'node:quic';
     * import { Buffer } from 'node:buffer';
     *
     * const enc = new TextEncoder();
     * const alpn = 'foo';
     * const client = await connect('123.123.123.123:8888', { alpn });
     * await client.createUnidirectionalStream({
     *   body: enc.encode('hello world'),
     * });
     * ```
     *
     * By default, every call to `connect(...)` will create a new local
     * `QuicEndpoint` instance bound to a new random local IP port. To
     * specify the exact local address to use, or to multiplex multiple
     * QUIC sessions over a single local port, pass the `endpoint` option
     * with either a `QuicEndpoint` or `EndpointOptions` as the argument.
     *
     * ```js
     * import { QuicEndpoint, connect } from 'node:quic';
     *
     * const endpoint = new QuicEndpoint({
     *   address: '127.0.0.1:1234',
     * });
     *
     * const client = await connect('123.123.123.123:8888', { endpoint });
     * ```
     * @since v23.8.0
     */
    function connect(address: string | SocketAddress, options?: SessionOptions): Promise<QuicSession>;
    /**
     * Configures the endpoint to listen as a server. When a new session is initiated by
     * a remote peer, the given `onsession` callback will be invoked with the created
     * session.
     *
     * ```js
     * import { listen } from 'node:quic';
     *
     * const endpoint = await listen((session) => {
     *   // ... handle the session
     * });
     *
     * // Closing the endpoint allows any sessions open when close is called
     * // to complete naturally while preventing new sessions from being
     * // initiated. Once all existing sessions have finished, the endpoint
     * // will be destroyed. The call returns a promise that is resolved once
     * // the endpoint is destroyed.
     * await endpoint.close();
     * ```
     *
     * By default, every call to `listen(...)` will create a new local
     * `QuicEndpoint` instance bound to a new random local IP port. To
     * specify the exact local address to use, or to multiplex multiple
     * QUIC sessions over a single local port, pass the `endpoint` option
     * with either a `QuicEndpoint` or `EndpointOptions` as the argument.
     *
     * At most, any single `QuicEndpoint` can only be configured to listen as
     * a server once.
     * @since v23.8.0
     */
    function listen(onsession: OnSessionCallback, options?: SessionOptions): Promise<QuicEndpoint>;
    /**
     * The endpoint configuration options passed when constructing a new `QuicEndpoint` instance.
     * @since v23.8.0
     */
    interface EndpointOptions {
        /**
         * If not specified the endpoint will bind to IPv4 `localhost` on a random port.
         * @since v23.8.0
         */
        address?: SocketAddress | string | undefined;
        /**
         * The endpoint maintains an internal cache of validated socket addresses as a
         * performance optimization. This option sets the maximum number of addresses
         * that are cache. This is an advanced option that users typically won't have
         * need to specify.
         * @since v23.8.0
         */
        addressLRUSize?: bigint | number | undefined;
        /**
         * When `true`, indicates that the endpoint should bind only to IPv6 addresses.
         * @since v23.8.0
         */
        ipv6Only?: boolean | undefined;
        /**
         * Specifies the maximum number of concurrent sessions allowed per remote peer address.
         * @since v23.8.0
         */
        maxConnectionsPerHost?: bigint | number | undefined;
        /**
         * Specifies the maximum total number of concurrent sessions.
         * @since v23.8.0
         */
        maxConnectionsTotal?: bigint | number | undefined;
        /**
         * Specifies the maximum number of QUIC retry attempts allowed per remote peer address.
         * @since v23.8.0
         */
        maxRetries?: bigint | number | undefined;
        /**
         * Specifies the maximum number of stateless resets that are allowed per remote peer address.
         * @since v23.8.0
         */
        maxStatelessResetsPerHost?: bigint | number | undefined;
        /**
         * Specifies the length of time a QUIC retry token is considered valid.
         * @since v23.8.0
         */
        retryTokenExpiration?: bigint | number | undefined;
        /**
         * Specifies the 16-byte secret used to generate QUIC retry tokens.
         * @since v23.8.0
         */
        resetTokenSecret?: NodeJS.ArrayBufferView | undefined;
        /**
         * Specifies the length of time a QUIC token is considered valid.
         * @since v23.8.0
         */
        tokenExpiration?: bigint | number | undefined;
        /**
         * Specifies the 16-byte secret used to generate QUIC tokens.
         * @since v23.8.0
         */
        tokenSecret?: NodeJS.ArrayBufferView | undefined;
        /**
         * @since v23.8.0
         */
        udpReceiveBufferSize?: number | undefined;
        /**
         * @since v23.8.0
         */
        udpSendBufferSize?: number | undefined;
        /**
         * @since v23.8.0
         */
        udpTTL?: number | undefined;
        /**
         * When `true`, requires that the endpoint validate peer addresses using retry packets
         * while establishing a new connection.
         * @since v23.8.0
         */
        validateAddress?: boolean | undefined;
    }
    /**
     * A `QuicEndpoint` encapsulates the local UDP-port binding for QUIC. It can be
     * used as both a client and a server.
     * @since v23.8.0
     */
    class QuicEndpoint implements AsyncDisposable {
        constructor(options?: EndpointOptions);
        /**
         * The local UDP socket address to which the endpoint is bound, if any.
         *
         * If the endpoint is not currently bound then the value will be `undefined`. Read only.
         * @since v23.8.0
         */
        readonly address: SocketAddress | undefined;
        /**
         * When `endpoint.busy` is set to true, the endpoint will temporarily reject
         * new sessions from being created. Read/write.
         *
         * ```js
         * // Mark the endpoint busy. New sessions will be prevented.
         * endpoint.busy = true;
         *
         * // Mark the endpoint free. New session will be allowed.
         * endpoint.busy = false;
         * ```
         *
         * The `busy` property is useful when the endpoint is under heavy load and needs to
         * temporarily reject new sessions while it catches up.
         * @since v23.8.0
         */
        busy: boolean;
        /**
         * Gracefully close the endpoint. The endpoint will close and destroy itself when
         * all currently open sessions close. Once called, new sessions will be rejected.
         *
         * Returns a promise that is fulfilled when the endpoint is destroyed.
         * @since v23.8.0
         */
        close(): Promise<void>;
        /**
         * A promise that is fulfilled when the endpoint is destroyed. This will be the same promise that is
         * returned by the `endpoint.close()` function. Read only.
         * @since v23.8.0
         */
        readonly closed: Promise<void>;
        /**
         * True if `endpoint.close()` has been called and closing the endpoint has not yet completed.
         * Read only.
         * @since v23.8.0
         */
        readonly closing: boolean;
        /**
         * Forcefully closes the endpoint by forcing all open sessions to be immediately
         * closed.
         * @since v23.8.0
         */
        destroy(error?: any): void;
        /**
         * True if `endpoint.destroy()` has been called. Read only.
         * @since v23.8.0
         */
        readonly destroyed: boolean;
        /**
         * The statistics collected for an active session. Read only.
         * @since v23.8.0
         */
        readonly stats: QuicEndpoint.Stats;
        /**
         * Calls `endpoint.close()` and returns a promise that fulfills when the
         * endpoint has closed.
         * @since v23.8.0
         */
        [Symbol.asyncDispose](): Promise<void>;
    }
    namespace QuicEndpoint {
        /**
         * A view of the collected statistics for an endpoint.
         * @since v23.8.0
         */
        class Stats {
            private constructor();
            /**
             * A timestamp indicating the moment the endpoint was created. Read only.
             * @since v23.8.0
             */
            readonly createdAt: bigint;
            /**
             * A timestamp indicating the moment the endpoint was destroyed. Read only.
             * @since v23.8.0
             */
            readonly destroyedAt: bigint;
            /**
             * The total number of bytes received by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly bytesReceived: bigint;
            /**
             * The total number of bytes sent by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly bytesSent: bigint;
            /**
             * The total number of QUIC packets successfully received by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly packetsReceived: bigint;
            /**
             * The total number of QUIC packets successfully sent by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly packetsSent: bigint;
            /**
             * The total number of peer-initiated sessions received by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly serverSessions: bigint;
            /**
             * The total number of sessions initiated by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly clientSessions: bigint;
            /**
             * The total number of times an initial packet was rejected due to the
             * endpoint being marked busy. Read only.
             * @since v23.8.0
             */
            readonly serverBusyCount: bigint;
            /**
             * The total number of QUIC retry attempts on this endpoint. Read only.
             * @since v23.8.0
             */
            readonly retryCount: bigint;
            /**
             * The total number sessions rejected due to QUIC version mismatch. Read only.
             * @since v23.8.0
             */
            readonly versionNegotiationCount: bigint;
            /**
             * The total number of stateless resets handled by this endpoint. Read only.
             * @since v23.8.0
             */
            readonly statelessResetCount: bigint;
            /**
             * The total number of sessions that were closed before handshake completed. Read only.
             * @since v23.8.0
             */
            readonly immediateCloseCount: bigint;
        }
    }
    interface CreateStreamOptions {
        body?: ArrayBuffer | NodeJS.ArrayBufferView | Blob | undefined;
        sendOrder?: number | undefined;
    }
    interface SessionPath {
        local: SocketAddress;
        remote: SocketAddress;
    }
    /**
     * A `QuicSession` represents the local side of a QUIC connection.
     * @since v23.8.0
     */
    class QuicSession implements AsyncDisposable {
        private constructor();
        /**
         * Initiate a graceful close of the session. Existing streams will be allowed
         * to complete but no new streams will be opened. Once all streams have closed,
         * the session will be destroyed. The returned promise will be fulfilled once
         * the session has been destroyed.
         * @since v23.8.0
         */
        close(): Promise<void>;
        /**
         * A promise that is fulfilled once the session is destroyed.
         * @since v23.8.0
         */
        readonly closed: Promise<void>;
        /**
         * Immediately destroy the session. All streams will be destroys and the
         * session will be closed.
         * @since v23.8.0
         */
        destroy(error?: any): void;
        /**
         * True if `session.destroy()` has been called. Read only.
         * @since v23.8.0
         */
        readonly destroyed: boolean;
        /**
         * The endpoint that created this session. Read only.
         * @since v23.8.0
         */
        readonly endpoint: QuicEndpoint;
        /**
         * The callback to invoke when a new stream is initiated by a remote peer. Read/write.
         * @since v23.8.0
         */
        onstream: OnStreamCallback | undefined;
        /**
         * The callback to invoke when a new datagram is received from a remote peer. Read/write.
         * @since v23.8.0
         */
        ondatagram: OnDatagramCallback | undefined;
        /**
         * The callback to invoke when the status of a datagram is updated. Read/write.
         * @since v23.8.0
         */
        ondatagramstatus: OnDatagramStatusCallback | undefined;
        /**
         * The callback to invoke when the path validation is updated. Read/write.
         * @since v23.8.0
         */
        onpathvalidation: OnPathValidationCallback | undefined;
        /**
         * The callback to invoke when a new session ticket is received. Read/write.
         * @since v23.8.0
         */
        onsessionticket: OnSessionTicketCallback | undefined;
        /**
         * The callback to invoke when a version negotiation is initiated. Read/write.
         * @since v23.8.0
         */
        onversionnegotiation: OnVersionNegotiationCallback | undefined;
        /**
         * The callback to invoke when the TLS handshake is completed. Read/write.
         * @since v23.8.0
         */
        onhandshake: OnHandshakeCallback | undefined;
        /**
         * Open a new bidirectional stream. If the `body` option is not specified,
         * the outgoing stream will be half-closed.
         * @since v23.8.0
         */
        createBidirectionalStream(options?: CreateStreamOptions): Promise<QuicStream>;
        /**
         * Open a new unidirectional stream. If the `body` option is not specified,
         * the outgoing stream will be closed.
         * @since v23.8.0
         */
        createUnidirectionalStream(options?: CreateStreamOptions): Promise<QuicStream>;
        /**
         * The local and remote socket addresses associated with the session. Read only.
         * @since v23.8.0
         */
        path: SessionPath | undefined;
        /**
         * Sends an unreliable datagram to the remote peer, returning the datagram ID.
         * If the datagram payload is specified as an `ArrayBufferView`, then ownership of
         * that view will be transfered to the underlying stream.
         * @since v23.8.0
         */
        sendDatagram(datagram: string | NodeJS.ArrayBufferView): bigint;
        /**
         * Return the current statistics for the session. Read only.
         * @since v23.8.0
         */
        readonly stats: QuicSession.Stats;
        /**
         * Initiate a key update for the session.
         * @since v23.8.0
         */
        updateKey(): void;
        /**
         * Calls `session.close()` and returns a promise that fulfills when the
         * session has closed.
         * @since v23.8.0
         */
        [Symbol.asyncDispose](): Promise<void>;
    }
    namespace QuicSession {
        /**
         * @since v23.8.0
         */
        class Stats {
            private constructor();
            /**
             * @since v23.8.0
             */
            readonly createdAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly closingAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly handshakeCompletedAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly handshakeConfirmedAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly bytesReceived: bigint;
            /**
             * @since v23.8.0
             */
            readonly bytesSent: bigint;
            /**
             * @since v23.8.0
             */
            readonly bidiInStreamCount: bigint;
            /**
             * @since v23.8.0
             */
            readonly bidiOutStreamCount: bigint;
            /**
             * @since v23.8.0
             */
            readonly uniInStreamCount: bigint;
            /**
             * @since v23.8.0
             */
            readonly uniOutStreamCount: bigint;
            /**
             * @since v23.8.0
             */
            readonly maxBytesInFlights: bigint;
            /**
             * @since v23.8.0
             */
            readonly bytesInFlight: bigint;
            /**
             * @since v23.8.0
             */
            readonly blockCount: bigint;
            /**
             * @since v23.8.0
             */
            readonly cwnd: bigint;
            /**
             * @since v23.8.0
             */
            readonly latestRtt: bigint;
            /**
             * @since v23.8.0
             */
            readonly minRtt: bigint;
            /**
             * @since v23.8.0
             */
            readonly rttVar: bigint;
            /**
             * @since v23.8.0
             */
            readonly smoothedRtt: bigint;
            /**
             * @since v23.8.0
             */
            readonly ssthresh: bigint;
            /**
             * @since v23.8.0
             */
            readonly datagramsReceived: bigint;
            /**
             * @since v23.8.0
             */
            readonly datagramsSent: bigint;
            /**
             * @since v23.8.0
             */
            readonly datagramsAcknowledged: bigint;
            /**
             * @since v23.8.0
             */
            readonly datagramsLost: bigint;
        }
    }
    /**
     * @since v23.8.0
     */
    class QuicStream {
        private constructor();
        /**
         * A promise that is fulfilled when the stream is fully closed.
         * @since v23.8.0
         */
        readonly closed: Promise<void>;
        /**
         * Immediately and abruptly destroys the stream.
         * @since v23.8.0
         */
        destroy(error?: any): void;
        /**
         * True if `stream.destroy()` has been called.
         * @since v23.8.0
         */
        readonly destroyed: boolean;
        /**
         * The directionality of the stream. Read only.
         * @since v23.8.0
         */
        readonly direction: "bidi" | "uni";
        /**
         * The stream ID. Read only.
         * @since v23.8.0
         */
        readonly id: bigint;
        /**
         * The callback to invoke when the stream is blocked. Read/write.
         * @since v23.8.0
         */
        onblocked: OnBlockedCallback | undefined;
        /**
         * The callback to invoke when the stream is reset. Read/write.
         * @since v23.8.0
         */
        onreset: OnStreamErrorCallback | undefined;
        /**
         * @since v23.8.0
         */
        readonly readable: ReadableStream<Uint8Array>;
        /**
         * The session that created this stream. Read only.
         * @since v23.8.0
         */
        readonly session: QuicSession;
        /**
         * The current statistics for the stream. Read only.
         * @since v23.8.0
         */
        readonly stats: QuicStream.Stats;
    }
    namespace QuicStream {
        /**
         * @since v23.8.0
         */
        class Stats {
            private constructor();
            /**
             * @since v23.8.0
             */
            readonly ackedAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly bytesReceived: bigint;
            /**
             * @since v23.8.0
             */
            readonly bytesSent: bigint;
            /**
             * @since v23.8.0
             */
            readonly createdAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly destroyedAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly finalSize: bigint;
            /**
             * @since v23.8.0
             */
            readonly isConnected: bigint;
            /**
             * @since v23.8.0
             */
            readonly maxOffset: bigint;
            /**
             * @since v23.8.0
             */
            readonly maxOffsetAcknowledged: bigint;
            /**
             * @since v23.8.0
             */
            readonly maxOffsetReceived: bigint;
            /**
             * @since v23.8.0
             */
            readonly openedAt: bigint;
            /**
             * @since v23.8.0
             */
            readonly receivedAt: bigint;
        }
    }
    namespace constants {
        enum cc {
            RENO = "reno",
            CUBIC = "cubic",
            BBR = "bbr",
        }
        const DEFAULT_CIPHERS: string;
        const DEFAULT_GROUPS: string;
    }
}
