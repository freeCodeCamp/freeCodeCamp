/**
 * The `node:tls` module provides an implementation of the Transport Layer Security
 * (TLS) and Secure Socket Layer (SSL) protocols that is built on top of OpenSSL.
 * The module can be accessed using:
 *
 * ```js
 * import tls from 'node:tls';
 * ```
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/tls.js)
 */
declare module "tls" {
    import { NonSharedBuffer } from "node:buffer";
    import { X509Certificate } from "node:crypto";
    import * as net from "node:net";
    import * as stream from "stream";
    const CLIENT_RENEG_LIMIT: number;
    const CLIENT_RENEG_WINDOW: number;
    interface Certificate extends NodeJS.Dict<string | string[]> {
        /**
         * Country code.
         */
        C?: string | string[];
        /**
         * Street.
         */
        ST?: string | string[];
        /**
         * Locality.
         */
        L?: string | string[];
        /**
         * Organization.
         */
        O?: string | string[];
        /**
         * Organizational unit.
         */
        OU?: string | string[];
        /**
         * Common name.
         */
        CN?: string | string[];
    }
    interface PeerCertificate {
        /**
         * `true` if a Certificate Authority (CA), `false` otherwise.
         * @since v18.13.0
         */
        ca: boolean;
        /**
         * The DER encoded X.509 certificate data.
         */
        raw: NonSharedBuffer;
        /**
         * The certificate subject.
         */
        subject: Certificate;
        /**
         * The certificate issuer, described in the same terms as the `subject`.
         */
        issuer: Certificate;
        /**
         * The date-time the certificate is valid from.
         */
        valid_from: string;
        /**
         * The date-time the certificate is valid to.
         */
        valid_to: string;
        /**
         * The certificate serial number, as a hex string.
         */
        serialNumber: string;
        /**
         * The SHA-1 digest of the DER encoded certificate.
         * It is returned as a `:` separated hexadecimal string.
         */
        fingerprint: string;
        /**
         * The SHA-256 digest of the DER encoded certificate.
         * It is returned as a `:` separated hexadecimal string.
         */
        fingerprint256: string;
        /**
         * The SHA-512 digest of the DER encoded certificate.
         * It is returned as a `:` separated hexadecimal string.
         */
        fingerprint512: string;
        /**
         * The extended key usage, a set of OIDs.
         */
        ext_key_usage?: string[];
        /**
         * A string containing concatenated names for the subject,
         * an alternative to the `subject` names.
         */
        subjectaltname?: string;
        /**
         * An array describing the AuthorityInfoAccess, used with OCSP.
         */
        infoAccess?: NodeJS.Dict<string[]>;
        /**
         * For RSA keys: The RSA bit size.
         *
         * For EC keys: The key size in bits.
         */
        bits?: number;
        /**
         * The RSA exponent, as a string in hexadecimal number notation.
         */
        exponent?: string;
        /**
         * The RSA modulus, as a hexadecimal string.
         */
        modulus?: string;
        /**
         * The public key.
         */
        pubkey?: NonSharedBuffer;
        /**
         * The ASN.1 name of the OID of the elliptic curve.
         * Well-known curves are identified by an OID.
         * While it is unusual, it is possible that the curve
         * is identified by its mathematical properties,
         * in which case it will not have an OID.
         */
        asn1Curve?: string;
        /**
         * The NIST name for the elliptic curve, if it has one
         * (not all well-known curves have been assigned names by NIST).
         */
        nistCurve?: string;
    }
    interface DetailedPeerCertificate extends PeerCertificate {
        /**
         * The issuer certificate object.
         * For self-signed certificates, this may be a circular reference.
         */
        issuerCertificate: DetailedPeerCertificate;
    }
    interface CipherNameAndProtocol {
        /**
         * The cipher name.
         */
        name: string;
        /**
         * SSL/TLS protocol version.
         */
        version: string;
        /**
         * IETF name for the cipher suite.
         */
        standardName: string;
    }
    interface EphemeralKeyInfo {
        /**
         * The supported types are 'DH' and 'ECDH'.
         */
        type: string;
        /**
         * The name property is available only when type is 'ECDH'.
         */
        name?: string | undefined;
        /**
         * The size of parameter of an ephemeral key exchange.
         */
        size: number;
    }
    interface KeyObject {
        /**
         * Private keys in PEM format.
         */
        pem: string | Buffer;
        /**
         * Optional passphrase.
         */
        passphrase?: string | undefined;
    }
    interface PxfObject {
        /**
         * PFX or PKCS12 encoded private key and certificate chain.
         */
        buf: string | Buffer;
        /**
         * Optional passphrase.
         */
        passphrase?: string | undefined;
    }
    interface TLSSocketOptions extends SecureContextOptions, CommonConnectionOptions {
        /**
         * If true the TLS socket will be instantiated in server-mode.
         * Defaults to false.
         */
        isServer?: boolean | undefined;
        /**
         * An optional net.Server instance.
         */
        server?: net.Server | undefined;
        /**
         * An optional Buffer instance containing a TLS session.
         */
        session?: Buffer | undefined;
        /**
         * If true, specifies that the OCSP status request extension will be
         * added to the client hello and an 'OCSPResponse' event will be
         * emitted on the socket before establishing a secure communication
         */
        requestOCSP?: boolean | undefined;
    }
    /**
     * Performs transparent encryption of written data and all required TLS
     * negotiation.
     *
     * Instances of `tls.TLSSocket` implement the duplex `Stream` interface.
     *
     * Methods that return TLS connection metadata (e.g.{@link TLSSocket.getPeerCertificate}) will only return data while the
     * connection is open.
     * @since v0.11.4
     */
    class TLSSocket extends net.Socket {
        /**
         * Construct a new tls.TLSSocket object from an existing TCP socket.
         */
        constructor(socket: net.Socket | stream.Duplex, options?: TLSSocketOptions);
        /**
         * This property is `true` if the peer certificate was signed by one of the CAs
         * specified when creating the `tls.TLSSocket` instance, otherwise `false`.
         * @since v0.11.4
         */
        authorized: boolean;
        /**
         * Returns the reason why the peer's certificate was not been verified. This
         * property is set only when `tlsSocket.authorized === false`.
         * @since v0.11.4
         */
        authorizationError: Error;
        /**
         * Always returns `true`. This may be used to distinguish TLS sockets from regular`net.Socket` instances.
         * @since v0.11.4
         */
        encrypted: true;
        /**
         * String containing the selected ALPN protocol.
         * Before a handshake has completed, this value is always null.
         * When a handshake is completed but not ALPN protocol was selected, tlsSocket.alpnProtocol equals false.
         */
        alpnProtocol: string | false | null;
        /**
         * String containing the server name requested via SNI (Server Name Indication) TLS extension.
         */
        servername: string | false | null;
        /**
         * Returns an object representing the local certificate. The returned object has
         * some properties corresponding to the fields of the certificate.
         *
         * See {@link TLSSocket.getPeerCertificate} for an example of the certificate
         * structure.
         *
         * If there is no local certificate, an empty object will be returned. If the
         * socket has been destroyed, `null` will be returned.
         * @since v11.2.0
         */
        getCertificate(): PeerCertificate | object | null;
        /**
         * Returns an object containing information on the negotiated cipher suite.
         *
         * For example, a TLSv1.2 protocol with AES256-SHA cipher:
         *
         * ```json
         * {
         *     "name": "AES256-SHA",
         *     "standardName": "TLS_RSA_WITH_AES_256_CBC_SHA",
         *     "version": "SSLv3"
         * }
         * ```
         *
         * See [SSL\_CIPHER\_get\_name](https://www.openssl.org/docs/man1.1.1/man3/SSL_CIPHER_get_name.html) for more information.
         * @since v0.11.4
         */
        getCipher(): CipherNameAndProtocol;
        /**
         * Returns an object representing the type, name, and size of parameter of
         * an ephemeral key exchange in `perfect forward secrecy` on a client
         * connection. It returns an empty object when the key exchange is not
         * ephemeral. As this is only supported on a client socket; `null` is returned
         * if called on a server socket. The supported types are `'DH'` and `'ECDH'`. The `name` property is available only when type is `'ECDH'`.
         *
         * For example: `{ type: 'ECDH', name: 'prime256v1', size: 256 }`.
         * @since v5.0.0
         */
        getEphemeralKeyInfo(): EphemeralKeyInfo | object | null;
        /**
         * As the `Finished` messages are message digests of the complete handshake
         * (with a total of 192 bits for TLS 1.0 and more for SSL 3.0), they can
         * be used for external authentication procedures when the authentication
         * provided by SSL/TLS is not desired or is not enough.
         *
         * Corresponds to the `SSL_get_finished` routine in OpenSSL and may be used
         * to implement the `tls-unique` channel binding from [RFC 5929](https://tools.ietf.org/html/rfc5929).
         * @since v9.9.0
         * @return The latest `Finished` message that has been sent to the socket as part of a SSL/TLS handshake, or `undefined` if no `Finished` message has been sent yet.
         */
        getFinished(): NonSharedBuffer | undefined;
        /**
         * Returns an object representing the peer's certificate. If the peer does not
         * provide a certificate, an empty object will be returned. If the socket has been
         * destroyed, `null` will be returned.
         *
         * If the full certificate chain was requested, each certificate will include an`issuerCertificate` property containing an object representing its issuer's
         * certificate.
         * @since v0.11.4
         * @param detailed Include the full certificate chain if `true`, otherwise include just the peer's certificate.
         * @return A certificate object.
         */
        getPeerCertificate(detailed: true): DetailedPeerCertificate;
        getPeerCertificate(detailed?: false): PeerCertificate;
        getPeerCertificate(detailed?: boolean): PeerCertificate | DetailedPeerCertificate;
        /**
         * As the `Finished` messages are message digests of the complete handshake
         * (with a total of 192 bits for TLS 1.0 and more for SSL 3.0), they can
         * be used for external authentication procedures when the authentication
         * provided by SSL/TLS is not desired or is not enough.
         *
         * Corresponds to the `SSL_get_peer_finished` routine in OpenSSL and may be used
         * to implement the `tls-unique` channel binding from [RFC 5929](https://tools.ietf.org/html/rfc5929).
         * @since v9.9.0
         * @return The latest `Finished` message that is expected or has actually been received from the socket as part of a SSL/TLS handshake, or `undefined` if there is no `Finished` message so
         * far.
         */
        getPeerFinished(): NonSharedBuffer | undefined;
        /**
         * Returns a string containing the negotiated SSL/TLS protocol version of the
         * current connection. The value `'unknown'` will be returned for connected
         * sockets that have not completed the handshaking process. The value `null` will
         * be returned for server sockets or disconnected client sockets.
         *
         * Protocol versions are:
         *
         * * `'SSLv3'`
         * * `'TLSv1'`
         * * `'TLSv1.1'`
         * * `'TLSv1.2'`
         * * `'TLSv1.3'`
         *
         * See the OpenSSL [`SSL_get_version`](https://www.openssl.org/docs/man1.1.1/man3/SSL_get_version.html) documentation for more information.
         * @since v5.7.0
         */
        getProtocol(): string | null;
        /**
         * Returns the TLS session data or `undefined` if no session was
         * negotiated. On the client, the data can be provided to the `session` option of {@link connect} to resume the connection. On the server, it may be useful
         * for debugging.
         *
         * See `Session Resumption` for more information.
         *
         * Note: `getSession()` works only for TLSv1.2 and below. For TLSv1.3, applications
         * must use the `'session'` event (it also works for TLSv1.2 and below).
         * @since v0.11.4
         */
        getSession(): NonSharedBuffer | undefined;
        /**
         * See [SSL\_get\_shared\_sigalgs](https://www.openssl.org/docs/man1.1.1/man3/SSL_get_shared_sigalgs.html) for more information.
         * @since v12.11.0
         * @return List of signature algorithms shared between the server and the client in the order of decreasing preference.
         */
        getSharedSigalgs(): string[];
        /**
         * For a client, returns the TLS session ticket if one is available, or`undefined`. For a server, always returns `undefined`.
         *
         * It may be useful for debugging.
         *
         * See `Session Resumption` for more information.
         * @since v0.11.4
         */
        getTLSTicket(): NonSharedBuffer | undefined;
        /**
         * See `Session Resumption` for more information.
         * @since v0.5.6
         * @return `true` if the session was reused, `false` otherwise.
         */
        isSessionReused(): boolean;
        /**
         * The `tlsSocket.renegotiate()` method initiates a TLS renegotiation process.
         * Upon completion, the `callback` function will be passed a single argument
         * that is either an `Error` (if the request failed) or `null`.
         *
         * This method can be used to request a peer's certificate after the secure
         * connection has been established.
         *
         * When running as the server, the socket will be destroyed with an error after `handshakeTimeout` timeout.
         *
         * For TLSv1.3, renegotiation cannot be initiated, it is not supported by the
         * protocol.
         * @since v0.11.8
         * @param callback If `renegotiate()` returned `true`, callback is attached once to the `'secure'` event. If `renegotiate()` returned `false`, `callback` will be called in the next tick with
         * an error, unless the `tlsSocket` has been destroyed, in which case `callback` will not be called at all.
         * @return `true` if renegotiation was initiated, `false` otherwise.
         */
        renegotiate(
            options: {
                rejectUnauthorized?: boolean | undefined;
                requestCert?: boolean | undefined;
            },
            callback: (err: Error | null) => void,
        ): undefined | boolean;
        /**
         * The `tlsSocket.setKeyCert()` method sets the private key and certificate to use for the socket.
         * This is mainly useful if you wish to select a server certificate from a TLS server's `ALPNCallback`.
         * @since v22.5.0, v20.17.0
         * @param context An object containing at least `key` and `cert` properties from the {@link createSecureContext()} `options`,
         * or a TLS context object created with {@link createSecureContext()} itself.
         */
        setKeyCert(context: SecureContextOptions | SecureContext): void;
        /**
         * The `tlsSocket.setMaxSendFragment()` method sets the maximum TLS fragment size.
         * Returns `true` if setting the limit succeeded; `false` otherwise.
         *
         * Smaller fragment sizes decrease the buffering latency on the client: larger
         * fragments are buffered by the TLS layer until the entire fragment is received
         * and its integrity is verified; large fragments can span multiple roundtrips
         * and their processing can be delayed due to packet loss or reordering. However,
         * smaller fragments add extra TLS framing bytes and CPU overhead, which may
         * decrease overall server throughput.
         * @since v0.11.11
         * @param [size=16384] The maximum TLS fragment size. The maximum value is `16384`.
         */
        setMaxSendFragment(size: number): boolean;
        /**
         * Disables TLS renegotiation for this `TLSSocket` instance. Once called, attempts
         * to renegotiate will trigger an `'error'` event on the `TLSSocket`.
         * @since v8.4.0
         */
        disableRenegotiation(): void;
        /**
         * When enabled, TLS packet trace information is written to `stderr`. This can be
         * used to debug TLS connection problems.
         *
         * The format of the output is identical to the output of`openssl s_client -trace` or `openssl s_server -trace`. While it is produced by
         * OpenSSL's `SSL_trace()` function, the format is undocumented, can change
         * without notice, and should not be relied on.
         * @since v12.2.0
         */
        enableTrace(): void;
        /**
         * Returns the peer certificate as an `X509Certificate` object.
         *
         * If there is no peer certificate, or the socket has been destroyed,`undefined` will be returned.
         * @since v15.9.0
         */
        getPeerX509Certificate(): X509Certificate | undefined;
        /**
         * Returns the local certificate as an `X509Certificate` object.
         *
         * If there is no local certificate, or the socket has been destroyed,`undefined` will be returned.
         * @since v15.9.0
         */
        getX509Certificate(): X509Certificate | undefined;
        /**
         * Keying material is used for validations to prevent different kind of attacks in
         * network protocols, for example in the specifications of IEEE 802.1X.
         *
         * Example
         *
         * ```js
         * const keyingMaterial = tlsSocket.exportKeyingMaterial(
         *   128,
         *   'client finished');
         *
         * /*
         *  Example return value of keyingMaterial:
         *  <Buffer 76 26 af 99 c5 56 8e 42 09 91 ef 9f 93 cb ad 6c 7b 65 f8 53 f1 d8 d9
         *     12 5a 33 b8 b5 25 df 7b 37 9f e0 e2 4f b8 67 83 a3 2f cd 5d 41 42 4c 91
         *     74 ef 2c ... 78 more bytes>
         *
         * ```
         *
         * See the OpenSSL [`SSL_export_keying_material`](https://www.openssl.org/docs/man1.1.1/man3/SSL_export_keying_material.html) documentation for more
         * information.
         * @since v13.10.0, v12.17.0
         * @param length number of bytes to retrieve from keying material
         * @param label an application specific label, typically this will be a value from the [IANA Exporter Label
         * Registry](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#exporter-labels).
         * @param context Optionally provide a context.
         * @return requested bytes of the keying material
         */
        exportKeyingMaterial(length: number, label: string, context: Buffer): NonSharedBuffer;
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: "OCSPResponse", listener: (response: NonSharedBuffer) => void): this;
        addListener(event: "secureConnect", listener: () => void): this;
        addListener(event: "session", listener: (session: NonSharedBuffer) => void): this;
        addListener(event: "keylog", listener: (line: NonSharedBuffer) => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "OCSPResponse", response: NonSharedBuffer): boolean;
        emit(event: "secureConnect"): boolean;
        emit(event: "session", session: NonSharedBuffer): boolean;
        emit(event: "keylog", line: NonSharedBuffer): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "OCSPResponse", listener: (response: NonSharedBuffer) => void): this;
        on(event: "secureConnect", listener: () => void): this;
        on(event: "session", listener: (session: NonSharedBuffer) => void): this;
        on(event: "keylog", listener: (line: NonSharedBuffer) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: "OCSPResponse", listener: (response: NonSharedBuffer) => void): this;
        once(event: "secureConnect", listener: () => void): this;
        once(event: "session", listener: (session: NonSharedBuffer) => void): this;
        once(event: "keylog", listener: (line: NonSharedBuffer) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: "OCSPResponse", listener: (response: NonSharedBuffer) => void): this;
        prependListener(event: "secureConnect", listener: () => void): this;
        prependListener(event: "session", listener: (session: NonSharedBuffer) => void): this;
        prependListener(event: "keylog", listener: (line: NonSharedBuffer) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "OCSPResponse", listener: (response: NonSharedBuffer) => void): this;
        prependOnceListener(event: "secureConnect", listener: () => void): this;
        prependOnceListener(event: "session", listener: (session: NonSharedBuffer) => void): this;
        prependOnceListener(event: "keylog", listener: (line: NonSharedBuffer) => void): this;
    }
    interface CommonConnectionOptions {
        /**
         * An optional TLS context object from tls.createSecureContext()
         */
        secureContext?: SecureContext | undefined;
        /**
         * When enabled, TLS packet trace information is written to `stderr`. This can be
         * used to debug TLS connection problems.
         * @default false
         */
        enableTrace?: boolean | undefined;
        /**
         * If true the server will request a certificate from clients that
         * connect and attempt to verify that certificate. Defaults to
         * false.
         */
        requestCert?: boolean | undefined;
        /**
         * An array of strings or a Buffer naming possible ALPN protocols.
         * (Protocols should be ordered by their priority.)
         */
        ALPNProtocols?: readonly string[] | NodeJS.ArrayBufferView | undefined;
        /**
         * SNICallback(servername, cb) <Function> A function that will be
         * called if the client supports SNI TLS extension. Two arguments
         * will be passed when called: servername and cb. SNICallback should
         * invoke cb(null, ctx), where ctx is a SecureContext instance.
         * (tls.createSecureContext(...) can be used to get a proper
         * SecureContext.) If SNICallback wasn't provided the default callback
         * with high-level API will be used (see below).
         */
        SNICallback?: ((servername: string, cb: (err: Error | null, ctx?: SecureContext) => void) => void) | undefined;
        /**
         * If true the server will reject any connection which is not
         * authorized with the list of supplied CAs. This option only has an
         * effect if requestCert is true.
         * @default true
         */
        rejectUnauthorized?: boolean | undefined;
    }
    interface TlsOptions extends SecureContextOptions, CommonConnectionOptions, net.ServerOpts {
        /**
         * Abort the connection if the SSL/TLS handshake does not finish in the
         * specified number of milliseconds. A 'tlsClientError' is emitted on
         * the tls.Server object whenever a handshake times out. Default:
         * 120000 (120 seconds).
         */
        handshakeTimeout?: number | undefined;
        /**
         * The number of seconds after which a TLS session created by the
         * server will no longer be resumable. See Session Resumption for more
         * information. Default: 300.
         */
        sessionTimeout?: number | undefined;
        /**
         * 48-bytes of cryptographically strong pseudo-random data.
         */
        ticketKeys?: Buffer | undefined;
        /**
         * @param socket
         * @param identity identity parameter sent from the client.
         * @return pre-shared key that must either be
         * a buffer or `null` to stop the negotiation process. Returned PSK must be
         * compatible with the selected cipher's digest.
         *
         * When negotiating TLS-PSK (pre-shared keys), this function is called
         * with the identity provided by the client.
         * If the return value is `null` the negotiation process will stop and an
         * "unknown_psk_identity" alert message will be sent to the other party.
         * If the server wishes to hide the fact that the PSK identity was not known,
         * the callback must provide some random data as `psk` to make the connection
         * fail with "decrypt_error" before negotiation is finished.
         * PSK ciphers are disabled by default, and using TLS-PSK thus
         * requires explicitly specifying a cipher suite with the `ciphers` option.
         * More information can be found in the RFC 4279.
         */
        pskCallback?: ((socket: TLSSocket, identity: string) => NodeJS.ArrayBufferView | null) | undefined;
        /**
         * hint to send to a client to help
         * with selecting the identity during TLS-PSK negotiation. Will be ignored
         * in TLS 1.3. Upon failing to set pskIdentityHint `tlsClientError` will be
         * emitted with `ERR_TLS_PSK_SET_IDENTIY_HINT_FAILED` code.
         */
        pskIdentityHint?: string | undefined;
    }
    interface PSKCallbackNegotation {
        psk: NodeJS.ArrayBufferView;
        identity: string;
    }
    interface ConnectionOptions extends SecureContextOptions, CommonConnectionOptions {
        host?: string | undefined;
        port?: number | undefined;
        path?: string | undefined; // Creates unix socket connection to path. If this option is specified, `host` and `port` are ignored.
        socket?: stream.Duplex | undefined; // Establish secure connection on a given socket rather than creating a new socket
        checkServerIdentity?: typeof checkServerIdentity | undefined;
        servername?: string | undefined; // SNI TLS Extension
        session?: Buffer | undefined;
        minDHSize?: number | undefined;
        lookup?: net.LookupFunction | undefined;
        timeout?: number | undefined;
        /**
         * When negotiating TLS-PSK (pre-shared keys), this function is called
         * with optional identity `hint` provided by the server or `null`
         * in case of TLS 1.3 where `hint` was removed.
         * It will be necessary to provide a custom `tls.checkServerIdentity()`
         * for the connection as the default one will try to check hostname/IP
         * of the server against the certificate but that's not applicable for PSK
         * because there won't be a certificate present.
         * More information can be found in the RFC 4279.
         *
         * @param hint message sent from the server to help client
         * decide which identity to use during negotiation.
         * Always `null` if TLS 1.3 is used.
         * @returns Return `null` to stop the negotiation process. `psk` must be
         * compatible with the selected cipher's digest.
         * `identity` must use UTF-8 encoding.
         */
        pskCallback?: ((hint: string | null) => PSKCallbackNegotation | null) | undefined;
    }
    /**
     * Accepts encrypted connections using TLS or SSL.
     * @since v0.3.2
     */
    class Server extends net.Server {
        constructor(secureConnectionListener?: (socket: TLSSocket) => void);
        constructor(options: TlsOptions, secureConnectionListener?: (socket: TLSSocket) => void);
        /**
         * The `server.addContext()` method adds a secure context that will be used if
         * the client request's SNI name matches the supplied `hostname` (or wildcard).
         *
         * When there are multiple matching contexts, the most recently added one is
         * used.
         * @since v0.5.3
         * @param hostname A SNI host name or wildcard (e.g. `'*'`)
         * @param context An object containing any of the possible properties from the {@link createSecureContext} `options` arguments (e.g. `key`, `cert`, `ca`, etc), or a TLS context object created
         * with {@link createSecureContext} itself.
         */
        addContext(hostname: string, context: SecureContextOptions | SecureContext): void;
        /**
         * Returns the session ticket keys.
         *
         * See `Session Resumption` for more information.
         * @since v3.0.0
         * @return A 48-byte buffer containing the session ticket keys.
         */
        getTicketKeys(): NonSharedBuffer;
        /**
         * The `server.setSecureContext()` method replaces the secure context of an
         * existing server. Existing connections to the server are not interrupted.
         * @since v11.0.0
         * @param options An object containing any of the possible properties from the {@link createSecureContext} `options` arguments (e.g. `key`, `cert`, `ca`, etc).
         */
        setSecureContext(options: SecureContextOptions): void;
        /**
         * Sets the session ticket keys.
         *
         * Changes to the ticket keys are effective only for future server connections.
         * Existing or currently pending server connections will use the previous keys.
         *
         * See `Session Resumption` for more information.
         * @since v3.0.0
         * @param keys A 48-byte buffer containing the session ticket keys.
         */
        setTicketKeys(keys: Buffer): void;
        /**
         * events.EventEmitter
         * 1. tlsClientError
         * 2. newSession
         * 3. OCSPRequest
         * 4. resumeSession
         * 5. secureConnection
         * 6. keylog
         */
        addListener(event: string, listener: (...args: any[]) => void): this;
        addListener(event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        addListener(
            event: "newSession",
            listener: (sessionId: NonSharedBuffer, sessionData: NonSharedBuffer, callback: () => void) => void,
        ): this;
        addListener(
            event: "OCSPRequest",
            listener: (
                certificate: NonSharedBuffer,
                issuer: NonSharedBuffer,
                callback: (err: Error | null, resp: Buffer | null) => void,
            ) => void,
        ): this;
        addListener(
            event: "resumeSession",
            listener: (
                sessionId: NonSharedBuffer,
                callback: (err: Error | null, sessionData: Buffer | null) => void,
            ) => void,
        ): this;
        addListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;
        addListener(event: "keylog", listener: (line: NonSharedBuffer, tlsSocket: TLSSocket) => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "tlsClientError", err: Error, tlsSocket: TLSSocket): boolean;
        emit(
            event: "newSession",
            sessionId: NonSharedBuffer,
            sessionData: NonSharedBuffer,
            callback: () => void,
        ): boolean;
        emit(
            event: "OCSPRequest",
            certificate: NonSharedBuffer,
            issuer: NonSharedBuffer,
            callback: (err: Error | null, resp: Buffer | null) => void,
        ): boolean;
        emit(
            event: "resumeSession",
            sessionId: NonSharedBuffer,
            callback: (err: Error | null, sessionData: Buffer | null) => void,
        ): boolean;
        emit(event: "secureConnection", tlsSocket: TLSSocket): boolean;
        emit(event: "keylog", line: NonSharedBuffer, tlsSocket: TLSSocket): boolean;
        on(event: string, listener: (...args: any[]) => void): this;
        on(event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        on(
            event: "newSession",
            listener: (sessionId: NonSharedBuffer, sessionData: NonSharedBuffer, callback: () => void) => void,
        ): this;
        on(
            event: "OCSPRequest",
            listener: (
                certificate: NonSharedBuffer,
                issuer: NonSharedBuffer,
                callback: (err: Error | null, resp: Buffer | null) => void,
            ) => void,
        ): this;
        on(
            event: "resumeSession",
            listener: (
                sessionId: NonSharedBuffer,
                callback: (err: Error | null, sessionData: Buffer | null) => void,
            ) => void,
        ): this;
        on(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;
        on(event: "keylog", listener: (line: NonSharedBuffer, tlsSocket: TLSSocket) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        once(event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        once(
            event: "newSession",
            listener: (sessionId: NonSharedBuffer, sessionData: NonSharedBuffer, callback: () => void) => void,
        ): this;
        once(
            event: "OCSPRequest",
            listener: (
                certificate: NonSharedBuffer,
                issuer: NonSharedBuffer,
                callback: (err: Error | null, resp: Buffer | null) => void,
            ) => void,
        ): this;
        once(
            event: "resumeSession",
            listener: (
                sessionId: NonSharedBuffer,
                callback: (err: Error | null, sessionData: Buffer | null) => void,
            ) => void,
        ): this;
        once(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;
        once(event: "keylog", listener: (line: NonSharedBuffer, tlsSocket: TLSSocket) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        prependListener(
            event: "newSession",
            listener: (sessionId: NonSharedBuffer, sessionData: NonSharedBuffer, callback: () => void) => void,
        ): this;
        prependListener(
            event: "OCSPRequest",
            listener: (
                certificate: NonSharedBuffer,
                issuer: NonSharedBuffer,
                callback: (err: Error | null, resp: Buffer | null) => void,
            ) => void,
        ): this;
        prependListener(
            event: "resumeSession",
            listener: (
                sessionId: NonSharedBuffer,
                callback: (err: Error | null, sessionData: Buffer | null) => void,
            ) => void,
        ): this;
        prependListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;
        prependListener(event: "keylog", listener: (line: NonSharedBuffer, tlsSocket: TLSSocket) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: "tlsClientError", listener: (err: Error, tlsSocket: TLSSocket) => void): this;
        prependOnceListener(
            event: "newSession",
            listener: (sessionId: NonSharedBuffer, sessionData: NonSharedBuffer, callback: () => void) => void,
        ): this;
        prependOnceListener(
            event: "OCSPRequest",
            listener: (
                certificate: NonSharedBuffer,
                issuer: NonSharedBuffer,
                callback: (err: Error | null, resp: Buffer | null) => void,
            ) => void,
        ): this;
        prependOnceListener(
            event: "resumeSession",
            listener: (
                sessionId: NonSharedBuffer,
                callback: (err: Error | null, sessionData: Buffer | null) => void,
            ) => void,
        ): this;
        prependOnceListener(event: "secureConnection", listener: (tlsSocket: TLSSocket) => void): this;
        prependOnceListener(event: "keylog", listener: (line: NonSharedBuffer, tlsSocket: TLSSocket) => void): this;
    }
    type SecureVersion = "TLSv1.3" | "TLSv1.2" | "TLSv1.1" | "TLSv1";
    interface SecureContextOptions {
        /**
         * If set, this will be called when a client opens a connection using the ALPN extension.
         * One argument will be passed to the callback: an object containing `servername` and `protocols` fields,
         * respectively containing the server name from the SNI extension (if any) and an array of
         * ALPN protocol name strings. The callback must return either one of the strings listed in `protocols`,
         * which will be returned to the client as the selected ALPN protocol, or `undefined`,
         * to reject the connection with a fatal alert. If a string is returned that does not match one of
         * the client's ALPN protocols, an error will be thrown.
         * This option cannot be used with the `ALPNProtocols` option, and setting both options will throw an error.
         */
        ALPNCallback?: ((arg: { servername: string; protocols: string[] }) => string | undefined) | undefined;
        /**
         * Treat intermediate (non-self-signed)
         * certificates in the trust CA certificate list as trusted.
         * @since v22.9.0, v20.18.0
         */
        allowPartialTrustChain?: boolean | undefined;
        /**
         * Optionally override the trusted CA certificates. Default is to trust
         * the well-known CAs curated by Mozilla. Mozilla's CAs are completely
         * replaced when CAs are explicitly specified using this option.
         */
        ca?: string | Buffer | Array<string | Buffer> | undefined;
        /**
         *  Cert chains in PEM format. One cert chain should be provided per
         *  private key. Each cert chain should consist of the PEM formatted
         *  certificate for a provided private key, followed by the PEM
         *  formatted intermediate certificates (if any), in order, and not
         *  including the root CA (the root CA must be pre-known to the peer,
         *  see ca). When providing multiple cert chains, they do not have to
         *  be in the same order as their private keys in key. If the
         *  intermediate certificates are not provided, the peer will not be
         *  able to validate the certificate, and the handshake will fail.
         */
        cert?: string | Buffer | Array<string | Buffer> | undefined;
        /**
         *  Colon-separated list of supported signature algorithms. The list
         *  can contain digest algorithms (SHA256, MD5 etc.), public key
         *  algorithms (RSA-PSS, ECDSA etc.), combination of both (e.g
         *  'RSA+SHA384') or TLS v1.3 scheme names (e.g. rsa_pss_pss_sha512).
         */
        sigalgs?: string | undefined;
        /**
         * Cipher suite specification, replacing the default. For more
         * information, see modifying the default cipher suite. Permitted
         * ciphers can be obtained via tls.getCiphers(). Cipher names must be
         * uppercased in order for OpenSSL to accept them.
         */
        ciphers?: string | undefined;
        /**
         * Name of an OpenSSL engine which can provide the client certificate.
         * @deprecated
         */
        clientCertEngine?: string | undefined;
        /**
         * PEM formatted CRLs (Certificate Revocation Lists).
         */
        crl?: string | Buffer | Array<string | Buffer> | undefined;
        /**
         * `'auto'` or custom Diffie-Hellman parameters, required for non-ECDHE perfect forward secrecy.
         * If omitted or invalid, the parameters are silently discarded and DHE ciphers will not be available.
         * ECDHE-based perfect forward secrecy will still be available.
         */
        dhparam?: string | Buffer | undefined;
        /**
         * A string describing a named curve or a colon separated list of curve
         * NIDs or names, for example P-521:P-384:P-256, to use for ECDH key
         * agreement. Set to auto to select the curve automatically. Use
         * crypto.getCurves() to obtain a list of available curve names. On
         * recent releases, openssl ecparam -list_curves will also display the
         * name and description of each available elliptic curve. Default:
         * tls.DEFAULT_ECDH_CURVE.
         */
        ecdhCurve?: string | undefined;
        /**
         * Attempt to use the server's cipher suite preferences instead of the
         * client's. When true, causes SSL_OP_CIPHER_SERVER_PREFERENCE to be
         * set in secureOptions
         */
        honorCipherOrder?: boolean | undefined;
        /**
         * Private keys in PEM format. PEM allows the option of private keys
         * being encrypted. Encrypted keys will be decrypted with
         * options.passphrase. Multiple keys using different algorithms can be
         * provided either as an array of unencrypted key strings or buffers,
         * or an array of objects in the form {pem: <string|buffer>[,
         * passphrase: <string>]}. The object form can only occur in an array.
         * object.passphrase is optional. Encrypted keys will be decrypted with
         * object.passphrase if provided, or options.passphrase if it is not.
         */
        key?: string | Buffer | Array<string | Buffer | KeyObject> | undefined;
        /**
         * Name of an OpenSSL engine to get private key from. Should be used
         * together with privateKeyIdentifier.
         * @deprecated
         */
        privateKeyEngine?: string | undefined;
        /**
         * Identifier of a private key managed by an OpenSSL engine. Should be
         * used together with privateKeyEngine. Should not be set together with
         * key, because both options define a private key in different ways.
         * @deprecated
         */
        privateKeyIdentifier?: string | undefined;
        /**
         * Optionally set the maximum TLS version to allow. One
         * of `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
         * `secureProtocol` option, use one or the other.
         * **Default:** `'TLSv1.3'`, unless changed using CLI options. Using
         * `--tls-max-v1.2` sets the default to `'TLSv1.2'`. Using `--tls-max-v1.3` sets the default to
         * `'TLSv1.3'`. If multiple of the options are provided, the highest maximum is used.
         */
        maxVersion?: SecureVersion | undefined;
        /**
         * Optionally set the minimum TLS version to allow. One
         * of `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. Cannot be specified along with the
         * `secureProtocol` option, use one or the other.  It is not recommended to use
         * less than TLSv1.2, but it may be required for interoperability.
         * **Default:** `'TLSv1.2'`, unless changed using CLI options. Using
         * `--tls-v1.0` sets the default to `'TLSv1'`. Using `--tls-v1.1` sets the default to
         * `'TLSv1.1'`. Using `--tls-min-v1.3` sets the default to
         * 'TLSv1.3'. If multiple of the options are provided, the lowest minimum is used.
         */
        minVersion?: SecureVersion | undefined;
        /**
         * Shared passphrase used for a single private key and/or a PFX.
         */
        passphrase?: string | undefined;
        /**
         * PFX or PKCS12 encoded private key and certificate chain. pfx is an
         * alternative to providing key and cert individually. PFX is usually
         * encrypted, if it is, passphrase will be used to decrypt it. Multiple
         * PFX can be provided either as an array of unencrypted PFX buffers,
         * or an array of objects in the form {buf: <string|buffer>[,
         * passphrase: <string>]}. The object form can only occur in an array.
         * object.passphrase is optional. Encrypted PFX will be decrypted with
         * object.passphrase if provided, or options.passphrase if it is not.
         */
        pfx?: string | Buffer | Array<string | Buffer | PxfObject> | undefined;
        /**
         * Optionally affect the OpenSSL protocol behavior, which is not
         * usually necessary. This should be used carefully if at all! Value is
         * a numeric bitmask of the SSL_OP_* options from OpenSSL Options
         */
        secureOptions?: number | undefined; // Value is a numeric bitmask of the `SSL_OP_*` options
        /**
         * Legacy mechanism to select the TLS protocol version to use, it does
         * not support independent control of the minimum and maximum version,
         * and does not support limiting the protocol to TLSv1.3. Use
         * minVersion and maxVersion instead. The possible values are listed as
         * SSL_METHODS, use the function names as strings. For example, use
         * 'TLSv1_1_method' to force TLS version 1.1, or 'TLS_method' to allow
         * any TLS protocol version up to TLSv1.3. It is not recommended to use
         * TLS versions less than 1.2, but it may be required for
         * interoperability. Default: none, see minVersion.
         */
        secureProtocol?: string | undefined;
        /**
         * Opaque identifier used by servers to ensure session state is not
         * shared between applications. Unused by clients.
         */
        sessionIdContext?: string | undefined;
        /**
         * 48-bytes of cryptographically strong pseudo-random data.
         * See Session Resumption for more information.
         */
        ticketKeys?: Buffer | undefined;
        /**
         * The number of seconds after which a TLS session created by the
         * server will no longer be resumable. See Session Resumption for more
         * information. Default: 300.
         */
        sessionTimeout?: number | undefined;
    }
    interface SecureContext {
        context: any;
    }
    /**
     * Verifies the certificate `cert` is issued to `hostname`.
     *
     * Returns [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object, populating it with `reason`, `host`, and `cert` on
     * failure. On success, returns [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type).
     *
     * This function is intended to be used in combination with the`checkServerIdentity` option that can be passed to {@link connect} and as
     * such operates on a `certificate object`. For other purposes, consider using `x509.checkHost()` instead.
     *
     * This function can be overwritten by providing an alternative function as the `options.checkServerIdentity` option that is passed to `tls.connect()`. The
     * overwriting function can call `tls.checkServerIdentity()` of course, to augment
     * the checks done with additional verification.
     *
     * This function is only called if the certificate passed all other checks, such as
     * being issued by trusted CA (`options.ca`).
     *
     * Earlier versions of Node.js incorrectly accepted certificates for a given`hostname` if a matching `uniformResourceIdentifier` subject alternative name
     * was present (see [CVE-2021-44531](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44531)). Applications that wish to accept`uniformResourceIdentifier` subject alternative names can use
     * a custom `options.checkServerIdentity` function that implements the desired behavior.
     * @since v0.8.4
     * @param hostname The host name or IP address to verify the certificate against.
     * @param cert A `certificate object` representing the peer's certificate.
     */
    function checkServerIdentity(hostname: string, cert: PeerCertificate): Error | undefined;
    /**
     * Creates a new {@link Server}. The `secureConnectionListener`, if provided, is
     * automatically set as a listener for the `'secureConnection'` event.
     *
     * The `ticketKeys` options is automatically shared between `node:cluster` module
     * workers.
     *
     * The following illustrates a simple echo server:
     *
     * ```js
     * import tls from 'node:tls';
     * import fs from 'node:fs';
     *
     * const options = {
     *   key: fs.readFileSync('server-key.pem'),
     *   cert: fs.readFileSync('server-cert.pem'),
     *
     *   // This is necessary only if using client certificate authentication.
     *   requestCert: true,
     *
     *   // This is necessary only if the client uses a self-signed certificate.
     *   ca: [ fs.readFileSync('client-cert.pem') ],
     * };
     *
     * const server = tls.createServer(options, (socket) => {
     *   console.log('server connected',
     *               socket.authorized ? 'authorized' : 'unauthorized');
     *   socket.write('welcome!\n');
     *   socket.setEncoding('utf8');
     *   socket.pipe(socket);
     * });
     * server.listen(8000, () => {
     *   console.log('server bound');
     * });
     * ```
     *
     * The server can be tested by connecting to it using the example client from {@link connect}.
     * @since v0.3.2
     */
    function createServer(secureConnectionListener?: (socket: TLSSocket) => void): Server;
    function createServer(options: TlsOptions, secureConnectionListener?: (socket: TLSSocket) => void): Server;
    /**
     * The `callback` function, if specified, will be added as a listener for the `'secureConnect'` event.
     *
     * `tls.connect()` returns a {@link TLSSocket} object.
     *
     * Unlike the `https` API, `tls.connect()` does not enable the
     * SNI (Server Name Indication) extension by default, which may cause some
     * servers to return an incorrect certificate or reject the connection
     * altogether. To enable SNI, set the `servername` option in addition
     * to `host`.
     *
     * The following illustrates a client for the echo server example from {@link createServer}:
     *
     * ```js
     * // Assumes an echo server that is listening on port 8000.
     * import tls from 'node:tls';
     * import fs from 'node:fs';
     *
     * const options = {
     *   // Necessary only if the server requires client certificate authentication.
     *   key: fs.readFileSync('client-key.pem'),
     *   cert: fs.readFileSync('client-cert.pem'),
     *
     *   // Necessary only if the server uses a self-signed certificate.
     *   ca: [ fs.readFileSync('server-cert.pem') ],
     *
     *   // Necessary only if the server's cert isn't for "localhost".
     *   checkServerIdentity: () => { return null; },
     * };
     *
     * const socket = tls.connect(8000, options, () => {
     *   console.log('client connected',
     *               socket.authorized ? 'authorized' : 'unauthorized');
     *   process.stdin.pipe(socket);
     *   process.stdin.resume();
     * });
     * socket.setEncoding('utf8');
     * socket.on('data', (data) => {
     *   console.log(data);
     * });
     * socket.on('end', () => {
     *   console.log('server ends connection');
     * });
     * ```
     * @since v0.11.3
     */
    function connect(options: ConnectionOptions, secureConnectListener?: () => void): TLSSocket;
    function connect(
        port: number,
        host?: string,
        options?: ConnectionOptions,
        secureConnectListener?: () => void,
    ): TLSSocket;
    function connect(port: number, options?: ConnectionOptions, secureConnectListener?: () => void): TLSSocket;
    /**
     * `{@link createServer}` sets the default value of the `honorCipherOrder` option
     * to `true`, other APIs that create secure contexts leave it unset.
     *
     * `{@link createServer}` uses a 128 bit truncated SHA1 hash value generated
     * from `process.argv` as the default value of the `sessionIdContext` option, other
     * APIs that create secure contexts have no default value.
     *
     * The `tls.createSecureContext()` method creates a `SecureContext` object. It is
     * usable as an argument to several `tls` APIs, such as `server.addContext()`,
     * but has no public methods. The {@link Server} constructor and the {@link createServer} method do not support the `secureContext` option.
     *
     * A key is _required_ for ciphers that use certificates. Either `key` or `pfx` can be used to provide it.
     *
     * If the `ca` option is not given, then Node.js will default to using [Mozilla's publicly trusted list of
     * CAs](https://hg.mozilla.org/mozilla-central/raw-file/tip/security/nss/lib/ckfw/builtins/certdata.txt).
     *
     * Custom DHE parameters are discouraged in favor of the new `dhparam: 'auto' `option. When set to `'auto'`, well-known DHE parameters of sufficient strength
     * will be selected automatically. Otherwise, if necessary, `openssl dhparam` can
     * be used to create custom parameters. The key length must be greater than or
     * equal to 1024 bits or else an error will be thrown. Although 1024 bits is
     * permissible, use 2048 bits or larger for stronger security.
     * @since v0.11.13
     */
    function createSecureContext(options?: SecureContextOptions): SecureContext;
    /**
     * Returns an array containing the CA certificates from various sources, depending on `type`:
     *
     * * `"default"`: return the CA certificates that will be used by the Node.js TLS clients by default.
     *   * When `--use-bundled-ca` is enabled (default), or `--use-openssl-ca` is not enabled,
     *     this would include CA certificates from the bundled Mozilla CA store.
     *   * When `--use-system-ca` is enabled, this would also include certificates from the system's
     *     trusted store.
     *   * When `NODE_EXTRA_CA_CERTS` is used, this would also include certificates loaded from the specified
     *     file.
     * * `"system"`: return the CA certificates that are loaded from the system's trusted store, according
     *   to rules set by `--use-system-ca`. This can be used to get the certificates from the system
     *   when `--use-system-ca` is not enabled.
     * * `"bundled"`: return the CA certificates from the bundled Mozilla CA store. This would be the same
     *   as `tls.rootCertificates`.
     * * `"extra"`: return the CA certificates loaded from `NODE_EXTRA_CA_CERTS`. It's an empty array if
     *   `NODE_EXTRA_CA_CERTS` is not set.
     * @since v22.15.0
     * @param type The type of CA certificates that will be returned. Valid values
     * are `"default"`, `"system"`, `"bundled"` and `"extra"`.
     * **Default:** `"default"`.
     * @returns An array of PEM-encoded certificates. The array may contain duplicates
     * if the same certificate is repeatedly stored in multiple sources.
     */
    function getCACertificates(type?: "default" | "system" | "bundled" | "extra"): string[];
    /**
     * Returns an array with the names of the supported TLS ciphers. The names are
     * lower-case for historical reasons, but must be uppercased to be used in
     * the `ciphers` option of `{@link createSecureContext}`.
     *
     * Not all supported ciphers are enabled by default. See
     * [Modifying the default TLS cipher suite](https://nodejs.org/docs/latest-v24.x/api/tls.html#modifying-the-default-tls-cipher-suite).
     *
     * Cipher names that start with `'tls_'` are for TLSv1.3, all the others are for
     * TLSv1.2 and below.
     *
     * ```js
     * console.log(tls.getCiphers()); // ['aes128-gcm-sha256', 'aes128-sha', ...]
     * ```
     * @since v0.10.2
     */
    function getCiphers(): string[];
    /**
     * Sets the default CA certificates used by Node.js TLS clients. If the provided
     * certificates are parsed successfully, they will become the default CA
     * certificate list returned by {@link getCACertificates} and used
     * by subsequent TLS connections that don't specify their own CA certificates.
     * The certificates will be deduplicated before being set as the default.
     *
     * This function only affects the current Node.js thread. Previous
     * sessions cached by the HTTPS agent won't be affected by this change, so
     * this method should be called before any unwanted cachable TLS connections are
     * made.
     *
     * To use system CA certificates as the default:
     *
     * ```js
     * import tls from 'node:tls';
     * tls.setDefaultCACertificates(tls.getCACertificates('system'));
     * ```
     *
     * This function completely replaces the default CA certificate list. To add additional
     * certificates to the existing defaults, get the current certificates and append to them:
     *
     * ```js
     * import tls from 'node:tls';
     * const currentCerts = tls.getCACertificates('default');
     * const additionalCerts = ['-----BEGIN CERTIFICATE-----\n...'];
     * tls.setDefaultCACertificates([...currentCerts, ...additionalCerts]);
     * ```
     * @since v24.5.0
     * @param certs An array of CA certificates in PEM format.
     */
    function setDefaultCACertificates(certs: ReadonlyArray<string | NodeJS.ArrayBufferView>): void;
    /**
     * The default curve name to use for ECDH key agreement in a tls server.
     * The default value is `'auto'`. See `{@link createSecureContext()}` for further
     * information.
     * @since v0.11.13
     */
    let DEFAULT_ECDH_CURVE: string;
    /**
     * The default value of the `maxVersion` option of `{@link createSecureContext()}`.
     * It can be assigned any of the supported TLS protocol versions,
     * `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. **Default:** `'TLSv1.3'`, unless
     * changed using CLI options. Using `--tls-max-v1.2` sets the default to `'TLSv1.2'`. Using
     * `--tls-max-v1.3` sets the default to `'TLSv1.3'`. If multiple of the options
     * are provided, the highest maximum is used.
     * @since v11.4.0
     */
    let DEFAULT_MAX_VERSION: SecureVersion;
    /**
     * The default value of the `minVersion` option of `{@link createSecureContext()}`.
     * It can be assigned any of the supported TLS protocol versions,
     * `'TLSv1.3'`, `'TLSv1.2'`, `'TLSv1.1'`, or `'TLSv1'`. **Default:** `'TLSv1.2'`, unless
     * changed using CLI options. Using `--tls-min-v1.0` sets the default to
     * `'TLSv1'`. Using `--tls-min-v1.1` sets the default to `'TLSv1.1'`. Using
     * `--tls-min-v1.3` sets the default to `'TLSv1.3'`. If multiple of the options
     * are provided, the lowest minimum is used.
     * @since v11.4.0
     */
    let DEFAULT_MIN_VERSION: SecureVersion;
    /**
     * The default value of the `ciphers` option of `{@link createSecureContext()}`.
     * It can be assigned any of the supported OpenSSL ciphers.
     * Defaults to the content of `crypto.constants.defaultCoreCipherList`, unless
     * changed using CLI options using `--tls-default-ciphers`.
     * @since v19.8.0
     */
    let DEFAULT_CIPHERS: string;
    /**
     * An immutable array of strings representing the root certificates (in PEM format)
     * from the bundled Mozilla CA store as supplied by the current Node.js version.
     *
     * The bundled CA store, as supplied by Node.js, is a snapshot of Mozilla CA store
     * that is fixed at release time. It is identical on all supported platforms.
     * @since v12.3.0
     */
    const rootCertificates: readonly string[];
}
declare module "node:tls" {
    export * from "tls";
}
