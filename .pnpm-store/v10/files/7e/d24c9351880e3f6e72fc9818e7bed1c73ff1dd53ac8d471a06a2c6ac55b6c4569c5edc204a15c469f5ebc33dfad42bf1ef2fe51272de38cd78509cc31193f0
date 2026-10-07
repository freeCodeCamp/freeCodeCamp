declare module "node:https" {
    import * as http from "node:http";
    import { Duplex } from "node:stream";
    import * as tls from "node:tls";
    import { URL } from "node:url";
    interface ServerOptions<
        Request extends typeof http.IncomingMessage = typeof http.IncomingMessage,
        Response extends typeof http.ServerResponse<InstanceType<Request>> = typeof http.ServerResponse,
    > extends http.ServerOptions<Request, Response>, tls.TlsOptions {}
    interface RequestOptions extends http.RequestOptions, tls.SecureContextOptions {
        checkServerIdentity?:
            | ((hostname: string, cert: tls.DetailedPeerCertificate) => Error | undefined)
            | undefined;
        rejectUnauthorized?: boolean | undefined; // Defaults to true
        servername?: string | undefined; // SNI TLS Extension
    }
    interface AgentOptions extends http.AgentOptions, tls.ConnectionOptions {
        maxCachedSessions?: number | undefined;
    }
    /**
     * An `Agent` object for HTTPS similar to `http.Agent`. See {@link request} for more information.
     *
     * Like `http.Agent`, the `createConnection(options[, callback])` method can be overridden
     * to customize how TLS connections are established.
     *
     * > See `agent.createConnection()` for details on overriding this method,
     * > including asynchronous socket creation with a callback.
     * @since v0.4.5
     */
    class Agent extends http.Agent {
        constructor(options?: AgentOptions);
        options: AgentOptions;
        createConnection(
            options: RequestOptions,
            callback?: (err: Error | null, stream: Duplex) => void,
        ): Duplex | null | undefined;
        getName(options?: RequestOptions): string;
    }
    interface ServerEventMap<
        Request extends typeof http.IncomingMessage = typeof http.IncomingMessage,
        Response extends typeof http.ServerResponse<InstanceType<Request>> = typeof http.ServerResponse,
    > extends http.ServerEventMap<Request, Response>, tls.ServerEventMap {}
    /**
     * See `http.Server` for more information.
     * @since v0.3.4
     */
    class Server<
        Request extends typeof http.IncomingMessage = typeof http.IncomingMessage,
        Response extends typeof http.ServerResponse<InstanceType<Request>> = typeof http.ServerResponse,
    > extends tls.Server {
        constructor(requestListener?: http.RequestListener<Request, Response>);
        constructor(
            options: ServerOptions<Request, Response>,
            requestListener?: http.RequestListener<Request, Response>,
        );
        /**
         * Closes all connections connected to this server.
         * @since v18.2.0
         */
        closeAllConnections(): void;
        /**
         * Closes all connections connected to this server which are not sending a request or waiting for a response.
         * @since v18.2.0
         */
        closeIdleConnections(): void;
        // #region InternalEventEmitter
        addListener<E extends keyof ServerEventMap>(
            eventName: E,
            listener: (...args: ServerEventMap<Request, Response>[E]) => void,
        ): this;
        addListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
        emit<E extends keyof ServerEventMap>(eventName: E, ...args: ServerEventMap<Request, Response>[E]): boolean;
        emit(eventName: string | symbol, ...args: any[]): boolean;
        listenerCount<E extends keyof ServerEventMap>(
            eventName: E,
            listener?: (...args: ServerEventMap<Request, Response>[E]) => void,
        ): number;
        listenerCount(eventName: string | symbol, listener?: (...args: any[]) => void): number;
        listeners<E extends keyof ServerEventMap>(
            eventName: E,
        ): ((...args: ServerEventMap<Request, Response>[E]) => void)[];
        listeners(eventName: string | symbol): ((...args: any[]) => void)[];
        off<E extends keyof ServerEventMap>(
            eventName: E,
            listener: (...args: ServerEventMap<Request, Response>[E]) => void,
        ): this;
        off(eventName: string | symbol, listener: (...args: any[]) => void): this;
        on<E extends keyof ServerEventMap>(
            eventName: E,
            listener: (...args: ServerEventMap<Request, Response>[E]) => void,
        ): this;
        on(eventName: string | symbol, listener: (...args: any[]) => void): this;
        once<E extends keyof ServerEventMap>(
            eventName: E,
            listener: (...args: ServerEventMap<Request, Response>[E]) => void,
        ): this;
        once(eventName: string | symbol, listener: (...args: any[]) => void): this;
        prependListener<E extends keyof ServerEventMap>(
            eventName: E,
            listener: (...args: ServerEventMap<Request, Response>[E]) => void,
        ): this;
        prependListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener<E extends keyof ServerEventMap>(
            eventName: E,
            listener: (...args: ServerEventMap<Request, Response>[E]) => void,
        ): this;
        prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
        rawListeners<E extends keyof ServerEventMap>(
            eventName: E,
        ): ((...args: ServerEventMap<Request, Response>[E]) => void)[];
        rawListeners(eventName: string | symbol): ((...args: any[]) => void)[];
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        removeAllListeners<E extends keyof ServerEventMap>(eventName?: E): this;
        removeAllListeners(eventName?: string | symbol): this;
        removeListener<E extends keyof ServerEventMap>(
            eventName: E,
            listener: (...args: ServerEventMap<Request, Response>[E]) => void,
        ): this;
        removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
        // #endregion
    }
    interface Server<
        Request extends typeof http.IncomingMessage = typeof http.IncomingMessage,
        Response extends typeof http.ServerResponse<InstanceType<Request>> = typeof http.ServerResponse,
    > extends http.Server<Request, Response> {}
    /**
     * ```js
     * // curl -k https://localhost:8000/
     * import https from 'node:https';
     * import fs from 'node:fs';
     *
     * const options = {
     *   key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
     *   cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
     * };
     *
     * https.createServer(options, (req, res) => {
     *   res.writeHead(200);
     *   res.end('hello world\n');
     * }).listen(8000);
     * ```
     *
     * Or
     *
     * ```js
     * import https from 'node:https';
     * import fs from 'node:fs';
     *
     * const options = {
     *   pfx: fs.readFileSync('test/fixtures/test_cert.pfx'),
     *   passphrase: 'sample',
     * };
     *
     * https.createServer(options, (req, res) => {
     *   res.writeHead(200);
     *   res.end('hello world\n');
     * }).listen(8000);
     * ```
     * @since v0.3.4
     * @param options Accepts `options` from `createServer`, `createSecureContext` and `createServer`.
     * @param requestListener A listener to be added to the `'request'` event.
     */
    function createServer<
        Request extends typeof http.IncomingMessage = typeof http.IncomingMessage,
        Response extends typeof http.ServerResponse<InstanceType<Request>> = typeof http.ServerResponse,
    >(requestListener?: http.RequestListener<Request, Response>): Server<Request, Response>;
    function createServer<
        Request extends typeof http.IncomingMessage = typeof http.IncomingMessage,
        Response extends typeof http.ServerResponse<InstanceType<Request>> = typeof http.ServerResponse,
    >(
        options: ServerOptions<Request, Response>,
        requestListener?: http.RequestListener<Request, Response>,
    ): Server<Request, Response>;
    /**
     * Makes a request to a secure web server.
     *
     * The following additional `options` from `tls.connect()` are also accepted: `ca`, `cert`, `ciphers`, `clientCertEngine`, `crl`, `dhparam`, `ecdhCurve`, `honorCipherOrder`, `key`, `passphrase`,
     * `pfx`, `rejectUnauthorized`, `secureOptions`, `secureProtocol`, `servername`, `sessionIdContext`, `highWaterMark`.
     *
     * `options` can be an object, a string, or a `URL` object. If `options` is a
     * string, it is automatically parsed with `new URL()`. If it is a `URL` object, it will be automatically converted to an ordinary `options` object.
     *
     * `https.request()` returns an instance of the `http.ClientRequest` class. The `ClientRequest` instance is a writable stream. If one needs to
     * upload a file with a POST request, then write to the `ClientRequest` object.
     *
     * ```js
     * import https from 'node:https';
     *
     * const options = {
     *   hostname: 'encrypted.google.com',
     *   port: 443,
     *   path: '/',
     *   method: 'GET',
     * };
     *
     * const req = https.request(options, (res) => {
     *   console.log('statusCode:', res.statusCode);
     *   console.log('headers:', res.headers);
     *
     *   res.on('data', (d) => {
     *     process.stdout.write(d);
     *   });
     * });
     *
     * req.on('error', (e) => {
     *   console.error(e);
     * });
     * req.end();
     * ```
     *
     * Example using options from `tls.connect()`:
     *
     * ```js
     * const options = {
     *   hostname: 'encrypted.google.com',
     *   port: 443,
     *   path: '/',
     *   method: 'GET',
     *   key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
     *   cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
     * };
     * options.agent = new https.Agent(options);
     *
     * const req = https.request(options, (res) => {
     *   // ...
     * });
     * ```
     *
     * Alternatively, opt out of connection pooling by not using an `Agent`.
     *
     * ```js
     * const options = {
     *   hostname: 'encrypted.google.com',
     *   port: 443,
     *   path: '/',
     *   method: 'GET',
     *   key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
     *   cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
     *   agent: false,
     * };
     *
     * const req = https.request(options, (res) => {
     *   // ...
     * });
     * ```
     *
     * Example using a `URL` as `options`:
     *
     * ```js
     * const options = new URL('https://abc:xyz@example.com');
     *
     * const req = https.request(options, (res) => {
     *   // ...
     * });
     * ```
     *
     * Example pinning on certificate fingerprint, or the public key (similar to`pin-sha256`):
     *
     * ```js
     * import tls from 'node:tls';
     * import https from 'node:https';
     * import crypto from 'node:crypto';
     *
     * function sha256(s) {
     *   return crypto.createHash('sha256').update(s).digest('base64');
     * }
     * const options = {
     *   hostname: 'github.com',
     *   port: 443,
     *   path: '/',
     *   method: 'GET',
     *   checkServerIdentity: function(host, cert) {
     *     // Make sure the certificate is issued to the host we are connected to
     *     const err = tls.checkServerIdentity(host, cert);
     *     if (err) {
     *       return err;
     *     }
     *
     *     // Pin the public key, similar to HPKP pin-sha256 pinning
     *     const pubkey256 = 'pL1+qb9HTMRZJmuC/bB/ZI9d302BYrrqiVuRyW+DGrU=';
     *     if (sha256(cert.pubkey) !== pubkey256) {
     *       const msg = 'Certificate verification error: ' +
     *         `The public key of '${cert.subject.CN}' ` +
     *         'does not match our pinned fingerprint';
     *       return new Error(msg);
     *     }
     *
     *     // Pin the exact certificate, rather than the pub key
     *     const cert256 = '25:FE:39:32:D9:63:8C:8A:FC:A1:9A:29:87:' +
     *       'D8:3E:4C:1D:98:DB:71:E4:1A:48:03:98:EA:22:6A:BD:8B:93:16';
     *     if (cert.fingerprint256 !== cert256) {
     *       const msg = 'Certificate verification error: ' +
     *         `The certificate of '${cert.subject.CN}' ` +
     *         'does not match our pinned fingerprint';
     *       return new Error(msg);
     *     }
     *
     *     // This loop is informational only.
     *     // Print the certificate and public key fingerprints of all certs in the
     *     // chain. Its common to pin the public key of the issuer on the public
     *     // internet, while pinning the public key of the service in sensitive
     *     // environments.
     *     do {
     *       console.log('Subject Common Name:', cert.subject.CN);
     *       console.log('  Certificate SHA256 fingerprint:', cert.fingerprint256);
     *
     *       hash = crypto.createHash('sha256');
     *       console.log('  Public key ping-sha256:', sha256(cert.pubkey));
     *
     *       lastprint256 = cert.fingerprint256;
     *       cert = cert.issuerCertificate;
     *     } while (cert.fingerprint256 !== lastprint256);
     *
     *   },
     * };
     *
     * options.agent = new https.Agent(options);
     * const req = https.request(options, (res) => {
     *   console.log('All OK. Server matched our pinned cert or public key');
     *   console.log('statusCode:', res.statusCode);
     *   // Print the HPKP values
     *   console.log('headers:', res.headers['public-key-pins']);
     *
     *   res.on('data', (d) => {});
     * });
     *
     * req.on('error', (e) => {
     *   console.error(e.message);
     * });
     * req.end();
     * ```
     *
     * Outputs for example:
     *
     * ```text
     * Subject Common Name: github.com
     *   Certificate SHA256 fingerprint: 25:FE:39:32:D9:63:8C:8A:FC:A1:9A:29:87:D8:3E:4C:1D:98:DB:71:E4:1A:48:03:98:EA:22:6A:BD:8B:93:16
     *   Public key ping-sha256: pL1+qb9HTMRZJmuC/bB/ZI9d302BYrrqiVuRyW+DGrU=
     * Subject Common Name: DigiCert SHA2 Extended Validation Server CA
     *   Certificate SHA256 fingerprint: 40:3E:06:2A:26:53:05:91:13:28:5B:AF:80:A0:D4:AE:42:2C:84:8C:9F:78:FA:D0:1F:C9:4B:C5:B8:7F:EF:1A
     *   Public key ping-sha256: RRM1dGqnDFsCJXBTHky16vi1obOlCgFFn/yOhI/y+ho=
     * Subject Common Name: DigiCert High Assurance EV Root CA
     *   Certificate SHA256 fingerprint: 74:31:E5:F4:C3:C1:CE:46:90:77:4F:0B:61:E0:54:40:88:3B:A9:A0:1E:D0:0B:A6:AB:D7:80:6E:D3:B1:18:CF
     *   Public key ping-sha256: WoiWRyIOVNa9ihaBciRSC7XHjliYS9VwUGOIud4PB18=
     * All OK. Server matched our pinned cert or public key
     * statusCode: 200
     * headers: max-age=0; pin-sha256="WoiWRyIOVNa9ihaBciRSC7XHjliYS9VwUGOIud4PB18="; pin-sha256="RRM1dGqnDFsCJXBTHky16vi1obOlCgFFn/yOhI/y+ho=";
     * pin-sha256="k2v657xBsOVe1PQRwOsHsw3bsGT2VzIqz5K+59sNQws="; pin-sha256="K87oWBWM9UZfyddvDfoxL+8lpNyoUB2ptGtn0fv6G2Q="; pin-sha256="IQBnNBEiFuhj+8x6X8XLgh01V9Ic5/V3IRQLNFFc7v4=";
     * pin-sha256="iie1VXtL7HzAMF+/PVPR9xzT80kQxdZeJ+zduCB3uj0="; pin-sha256="LvRiGEjRqfzurezaWuj8Wie2gyHMrW5Q06LspMnox7A="; includeSubDomains
     * ```
     * @since v0.3.6
     * @param options Accepts all `options` from `request`, with some differences in default values:
     */
    function request(
        options: RequestOptions | string | URL,
        callback?: (res: http.IncomingMessage) => void,
    ): http.ClientRequest;
    function request(
        url: string | URL,
        options: RequestOptions,
        callback?: (res: http.IncomingMessage) => void,
    ): http.ClientRequest;
    /**
     * Like `http.get()` but for HTTPS.
     *
     * `options` can be an object, a string, or a `URL` object. If `options` is a
     * string, it is automatically parsed with `new URL()`. If it is a `URL` object, it will be automatically converted to an ordinary `options` object.
     *
     * ```js
     * import https from 'node:https';
     *
     * https.get('https://encrypted.google.com/', (res) => {
     *   console.log('statusCode:', res.statusCode);
     *   console.log('headers:', res.headers);
     *
     *   res.on('data', (d) => {
     *     process.stdout.write(d);
     *   });
     *
     * }).on('error', (e) => {
     *   console.error(e);
     * });
     * ```
     * @since v0.3.6
     * @param options Accepts the same `options` as {@link request}, with the `method` always set to `GET`.
     */
    function get(
        options: RequestOptions | string | URL,
        callback?: (res: http.IncomingMessage) => void,
    ): http.ClientRequest;
    function get(
        url: string | URL,
        options: RequestOptions,
        callback?: (res: http.IncomingMessage) => void,
    ): http.ClientRequest;
    let globalAgent: Agent;
}
declare module "https" {
    export * from "node:https";
}
