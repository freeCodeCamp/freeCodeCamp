/**
 * The `dns.promises` API provides an alternative set of asynchronous DNS methods
 * that return `Promise` objects rather than using callbacks. The API is accessible
 * via `import { promises as dnsPromises } from 'node:dns'` or `import dnsPromises from 'node:dns/promises'`.
 * @since v10.6.0
 */
declare module "dns/promises" {
    import {
        AnyRecord,
        CaaRecord,
        LookupAddress,
        LookupAllOptions,
        LookupOneOptions,
        LookupOptions,
        MxRecord,
        NaptrRecord,
        RecordWithTtl,
        ResolveOptions,
        ResolverOptions,
        ResolveWithTtlOptions,
        SoaRecord,
        SrvRecord,
        TlsaRecord,
    } from "node:dns";
    /**
     * Returns an array of IP address strings, formatted according to [RFC 5952](https://tools.ietf.org/html/rfc5952#section-6),
     * that are currently configured for DNS resolution. A string will include a port
     * section if a custom port is used.
     *
     * ```js
     * [
     *   '4.4.4.4',
     *   '2001:4860:4860::8888',
     *   '4.4.4.4:1053',
     *   '[2001:4860:4860::8888]:1053',
     * ]
     * ```
     * @since v10.6.0
     */
    function getServers(): string[];
    /**
     * Resolves a host name (e.g. `'nodejs.org'`) into the first found A (IPv4) or
     * AAAA (IPv6) record. All `option` properties are optional. If `options` is an
     * integer, then it must be `4` or `6` – if `options` is not provided, then IPv4
     * and IPv6 addresses are both returned if found.
     *
     * With the `all` option set to `true`, the `Promise` is resolved with `addresses` being an array of objects with the properties `address` and `family`.
     *
     * On error, the `Promise` is rejected with an [`Error`](https://nodejs.org/docs/latest-v20.x/api/errors.html#class-error) object, where `err.code` is the error code.
     * Keep in mind that `err.code` will be set to `'ENOTFOUND'` not only when
     * the host name does not exist but also when the lookup fails in other ways
     * such as no available file descriptors.
     *
     * [`dnsPromises.lookup()`](https://nodejs.org/docs/latest-v20.x/api/dns.html#dnspromiseslookuphostname-options) does not necessarily have anything to do with the DNS
     * protocol. The implementation uses an operating system facility that can
     * associate names with addresses and vice versa. This implementation can have
     * subtle but important consequences on the behavior of any Node.js program. Please
     * take some time to consult the [Implementation considerations section](https://nodejs.org/docs/latest-v20.x/api/dns.html#implementation-considerations) before
     * using `dnsPromises.lookup()`.
     *
     * Example usage:
     *
     * ```js
     * import dns from 'node:dns';
     * const dnsPromises = dns.promises;
     * const options = {
     *   family: 6,
     *   hints: dns.ADDRCONFIG | dns.V4MAPPED,
     * };
     *
     * dnsPromises.lookup('example.com', options).then((result) => {
     *   console.log('address: %j family: IPv%s', result.address, result.family);
     *   // address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6
     * });
     *
     * // When options.all is true, the result will be an Array.
     * options.all = true;
     * dnsPromises.lookup('example.com', options).then((result) => {
     *   console.log('addresses: %j', result);
     *   // addresses: [{"address":"2606:2800:220:1:248:1893:25c8:1946","family":6}]
     * });
     * ```
     * @since v10.6.0
     */
    function lookup(hostname: string, family: number): Promise<LookupAddress>;
    function lookup(hostname: string, options: LookupOneOptions): Promise<LookupAddress>;
    function lookup(hostname: string, options: LookupAllOptions): Promise<LookupAddress[]>;
    function lookup(hostname: string, options: LookupOptions): Promise<LookupAddress | LookupAddress[]>;
    function lookup(hostname: string): Promise<LookupAddress>;
    /**
     * Resolves the given `address` and `port` into a host name and service using
     * the operating system's underlying `getnameinfo` implementation.
     *
     * If `address` is not a valid IP address, a `TypeError` will be thrown.
     * The `port` will be coerced to a number. If it is not a legal port, a `TypeError` will be thrown.
     *
     * On error, the `Promise` is rejected with an [`Error`](https://nodejs.org/docs/latest-v20.x/api/errors.html#class-error) object, where `err.code` is the error code.
     *
     * ```js
     * import dnsPromises from 'node:dns';
     * dnsPromises.lookupService('127.0.0.1', 22).then((result) => {
     *   console.log(result.hostname, result.service);
     *   // Prints: localhost ssh
     * });
     * ```
     * @since v10.6.0
     */
    function lookupService(
        address: string,
        port: number,
    ): Promise<{
        hostname: string;
        service: string;
    }>;
    /**
     * Uses the DNS protocol to resolve a host name (e.g. `'nodejs.org'`) into an array
     * of the resource records. When successful, the `Promise` is resolved with an
     * array of resource records. The type and structure of individual results vary
     * based on `rrtype`:
     *
     * <omitted>
     *
     * On error, the `Promise` is rejected with an [`Error`](https://nodejs.org/docs/latest-v20.x/api/errors.html#class-error) object, where `err.code`
     * is one of the [DNS error codes](https://nodejs.org/docs/latest-v20.x/api/dns.html#error-codes).
     * @since v10.6.0
     * @param hostname Host name to resolve.
     * @param [rrtype='A'] Resource record type.
     */
    function resolve(hostname: string): Promise<string[]>;
    function resolve(hostname: string, rrtype: "A" | "AAAA" | "CNAME" | "NS" | "PTR"): Promise<string[]>;
    function resolve(hostname: string, rrtype: "ANY"): Promise<AnyRecord[]>;
    function resolve(hostname: string, rrtype: "CAA"): Promise<CaaRecord[]>;
    function resolve(hostname: string, rrtype: "MX"): Promise<MxRecord[]>;
    function resolve(hostname: string, rrtype: "NAPTR"): Promise<NaptrRecord[]>;
    function resolve(hostname: string, rrtype: "SOA"): Promise<SoaRecord>;
    function resolve(hostname: string, rrtype: "SRV"): Promise<SrvRecord[]>;
    function resolve(hostname: string, rrtype: "TLSA"): Promise<TlsaRecord[]>;
    function resolve(hostname: string, rrtype: "TXT"): Promise<string[][]>;
    function resolve(hostname: string, rrtype: string): Promise<
        | string[]
        | CaaRecord[]
        | MxRecord[]
        | NaptrRecord[]
        | SoaRecord
        | SrvRecord[]
        | TlsaRecord[]
        | string[][]
        | AnyRecord[]
    >;
    /**
     * Uses the DNS protocol to resolve IPv4 addresses (`A` records) for the `hostname`. On success, the `Promise` is resolved with an array of IPv4
     * addresses (e.g. `['74.125.79.104', '74.125.79.105', '74.125.79.106']`).
     * @since v10.6.0
     * @param hostname Host name to resolve.
     */
    function resolve4(hostname: string): Promise<string[]>;
    function resolve4(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
    function resolve4(hostname: string, options: ResolveOptions): Promise<string[] | RecordWithTtl[]>;
    /**
     * Uses the DNS protocol to resolve IPv6 addresses (`AAAA` records) for the `hostname`. On success, the `Promise` is resolved with an array of IPv6
     * addresses.
     * @since v10.6.0
     * @param hostname Host name to resolve.
     */
    function resolve6(hostname: string): Promise<string[]>;
    function resolve6(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
    function resolve6(hostname: string, options: ResolveOptions): Promise<string[] | RecordWithTtl[]>;
    /**
     * Uses the DNS protocol to resolve all records (also known as `ANY` or `*` query).
     * On success, the `Promise` is resolved with an array containing various types of
     * records. Each object has a property `type` that indicates the type of the
     * current record. And depending on the `type`, additional properties will be
     * present on the object:
     *
     * <omitted>
     *
     * Here is an example of the result object:
     *
     * ```js
     * [ { type: 'A', address: '127.0.0.1', ttl: 299 },
     *   { type: 'CNAME', value: 'example.com' },
     *   { type: 'MX', exchange: 'alt4.aspmx.l.example.com', priority: 50 },
     *   { type: 'NS', value: 'ns1.example.com' },
     *   { type: 'TXT', entries: [ 'v=spf1 include:_spf.example.com ~all' ] },
     *   { type: 'SOA',
     *     nsname: 'ns1.example.com',
     *     hostmaster: 'admin.example.com',
     *     serial: 156696742,
     *     refresh: 900,
     *     retry: 900,
     *     expire: 1800,
     *     minttl: 60 } ]
     * ```
     * @since v10.6.0
     */
    function resolveAny(hostname: string): Promise<AnyRecord[]>;
    /**
     * Uses the DNS protocol to resolve `CAA` records for the `hostname`. On success,
     * the `Promise` is resolved with an array of objects containing available
     * certification authority authorization records available for the `hostname` (e.g. `[{critical: 0, iodef: 'mailto:pki@example.com'},{critical: 128, issue: 'pki.example.com'}]`).
     * @since v15.0.0, v14.17.0
     */
    function resolveCaa(hostname: string): Promise<CaaRecord[]>;
    /**
     * Uses the DNS protocol to resolve `CNAME` records for the `hostname`. On success,
     * the `Promise` is resolved with an array of canonical name records available for
     * the `hostname` (e.g. `['bar.example.com']`).
     * @since v10.6.0
     */
    function resolveCname(hostname: string): Promise<string[]>;
    /**
     * Uses the DNS protocol to resolve mail exchange records (`MX` records) for the `hostname`. On success, the `Promise` is resolved with an array of objects
     * containing both a `priority` and `exchange` property (e.g.`[{priority: 10, exchange: 'mx.example.com'}, ...]`).
     * @since v10.6.0
     */
    function resolveMx(hostname: string): Promise<MxRecord[]>;
    /**
     * Uses the DNS protocol to resolve regular expression-based records (`NAPTR` records) for the `hostname`. On success, the `Promise` is resolved with an array
     * of objects with the following properties:
     *
     * * `flags`
     * * `service`
     * * `regexp`
     * * `replacement`
     * * `order`
     * * `preference`
     *
     * ```js
     * {
     *   flags: 's',
     *   service: 'SIP+D2U',
     *   regexp: '',
     *   replacement: '_sip._udp.example.com',
     *   order: 30,
     *   preference: 100
     * }
     * ```
     * @since v10.6.0
     */
    function resolveNaptr(hostname: string): Promise<NaptrRecord[]>;
    /**
     * Uses the DNS protocol to resolve name server records (`NS` records) for the `hostname`. On success, the `Promise` is resolved with an array of name server
     * records available for `hostname` (e.g.`['ns1.example.com', 'ns2.example.com']`).
     * @since v10.6.0
     */
    function resolveNs(hostname: string): Promise<string[]>;
    /**
     * Uses the DNS protocol to resolve pointer records (`PTR` records) for the `hostname`. On success, the `Promise` is resolved with an array of strings
     * containing the reply records.
     * @since v10.6.0
     */
    function resolvePtr(hostname: string): Promise<string[]>;
    /**
     * Uses the DNS protocol to resolve a start of authority record (`SOA` record) for
     * the `hostname`. On success, the `Promise` is resolved with an object with the
     * following properties:
     *
     * * `nsname`
     * * `hostmaster`
     * * `serial`
     * * `refresh`
     * * `retry`
     * * `expire`
     * * `minttl`
     *
     * ```js
     * {
     *   nsname: 'ns.example.com',
     *   hostmaster: 'root.example.com',
     *   serial: 2013101809,
     *   refresh: 10000,
     *   retry: 2400,
     *   expire: 604800,
     *   minttl: 3600
     * }
     * ```
     * @since v10.6.0
     */
    function resolveSoa(hostname: string): Promise<SoaRecord>;
    /**
     * Uses the DNS protocol to resolve service records (`SRV` records) for the `hostname`. On success, the `Promise` is resolved with an array of objects with
     * the following properties:
     *
     * * `priority`
     * * `weight`
     * * `port`
     * * `name`
     *
     * ```js
     * {
     *   priority: 10,
     *   weight: 5,
     *   port: 21223,
     *   name: 'service.example.com'
     * }
     * ```
     * @since v10.6.0
     */
    function resolveSrv(hostname: string): Promise<SrvRecord[]>;
    /**
     * Uses the DNS protocol to resolve certificate associations (`TLSA` records) for
     * the `hostname`. On success, the `Promise` is resolved with an array of objectsAdd commentMore actions
     * with these properties:
     *
     * * `certUsage`
     * * `selector`
     * * `match`
     * * `data`
     *
     * ```js
     * {
     *   certUsage: 3,
     *   selector: 1,
     *   match: 1,
     *   data: [ArrayBuffer]
     * }
     * ```
     * @since v23.9.0, v22.15.0
     */
    function resolveTlsa(hostname: string): Promise<TlsaRecord[]>;
    /**
     * Uses the DNS protocol to resolve text queries (`TXT` records) for the `hostname`. On success, the `Promise` is resolved with a two-dimensional array
     * of the text records available for `hostname` (e.g.`[ ['v=spf1 ip4:0.0.0.0 ', '~all' ] ]`). Each sub-array contains TXT chunks of
     * one record. Depending on the use case, these could be either joined together or
     * treated separately.
     * @since v10.6.0
     */
    function resolveTxt(hostname: string): Promise<string[][]>;
    /**
     * Performs a reverse DNS query that resolves an IPv4 or IPv6 address to an
     * array of host names.
     *
     * On error, the `Promise` is rejected with an [`Error`](https://nodejs.org/docs/latest-v20.x/api/errors.html#class-error) object, where `err.code`
     * is one of the [DNS error codes](https://nodejs.org/docs/latest-v20.x/api/dns.html#error-codes).
     * @since v10.6.0
     */
    function reverse(ip: string): Promise<string[]>;
    /**
     * Get the default value for `verbatim` in {@link lookup} and [dnsPromises.lookup()](https://nodejs.org/docs/latest-v20.x/api/dns.html#dnspromiseslookuphostname-options).
     * The value could be:
     *
     * * `ipv4first`: for `verbatim` defaulting to `false`.
     * * `verbatim`: for `verbatim` defaulting to `true`.
     * @since v20.1.0
     */
    function getDefaultResultOrder(): "ipv4first" | "verbatim";
    /**
     * Sets the IP address and port of servers to be used when performing DNS
     * resolution. The `servers` argument is an array of [RFC 5952](https://tools.ietf.org/html/rfc5952#section-6) formatted
     * addresses. If the port is the IANA default DNS port (53) it can be omitted.
     *
     * ```js
     * dnsPromises.setServers([
     *   '4.4.4.4',
     *   '[2001:4860:4860::8888]',
     *   '4.4.4.4:1053',
     *   '[2001:4860:4860::8888]:1053',
     * ]);
     * ```
     *
     * An error will be thrown if an invalid address is provided.
     *
     * The `dnsPromises.setServers()` method must not be called while a DNS query is in
     * progress.
     *
     * This method works much like [resolve.conf](https://man7.org/linux/man-pages/man5/resolv.conf.5.html).
     * That is, if attempting to resolve with the first server provided results in a `NOTFOUND` error, the `resolve()` method will _not_ attempt to resolve with
     * subsequent servers provided. Fallback DNS servers will only be used if the
     * earlier ones time out or result in some other error.
     * @since v10.6.0
     * @param servers array of `RFC 5952` formatted addresses
     */
    function setServers(servers: readonly string[]): void;
    /**
     * Set the default value of `order` in `dns.lookup()` and `{@link lookup}`. The value could be:
     *
     * * `ipv4first`: sets default `order` to `ipv4first`.
     * * `ipv6first`: sets default `order` to `ipv6first`.
     * * `verbatim`: sets default `order` to `verbatim`.
     *
     * The default is `verbatim` and [dnsPromises.setDefaultResultOrder()](https://nodejs.org/docs/latest-v20.x/api/dns.html#dnspromisessetdefaultresultorderorder)
     * have higher priority than [`--dns-result-order`](https://nodejs.org/docs/latest-v20.x/api/cli.html#--dns-result-orderorder).
     * When using [worker threads](https://nodejs.org/docs/latest-v20.x/api/worker_threads.html), [`dnsPromises.setDefaultResultOrder()`](https://nodejs.org/docs/latest-v20.x/api/dns.html#dnspromisessetdefaultresultorderorder)
     * from the main thread won't affect the default dns orders in workers.
     * @since v16.4.0, v14.18.0
     * @param order must be `'ipv4first'`, `'ipv6first'` or `'verbatim'`.
     */
    function setDefaultResultOrder(order: "ipv4first" | "ipv6first" | "verbatim"): void;
    // Error codes
    const NODATA: "ENODATA";
    const FORMERR: "EFORMERR";
    const SERVFAIL: "ESERVFAIL";
    const NOTFOUND: "ENOTFOUND";
    const NOTIMP: "ENOTIMP";
    const REFUSED: "EREFUSED";
    const BADQUERY: "EBADQUERY";
    const BADNAME: "EBADNAME";
    const BADFAMILY: "EBADFAMILY";
    const BADRESP: "EBADRESP";
    const CONNREFUSED: "ECONNREFUSED";
    const TIMEOUT: "ETIMEOUT";
    const EOF: "EOF";
    const FILE: "EFILE";
    const NOMEM: "ENOMEM";
    const DESTRUCTION: "EDESTRUCTION";
    const BADSTR: "EBADSTR";
    const BADFLAGS: "EBADFLAGS";
    const NONAME: "ENONAME";
    const BADHINTS: "EBADHINTS";
    const NOTINITIALIZED: "ENOTINITIALIZED";
    const LOADIPHLPAPI: "ELOADIPHLPAPI";
    const ADDRGETNETWORKPARAMS: "EADDRGETNETWORKPARAMS";
    const CANCELLED: "ECANCELLED";

    /**
     * An independent resolver for DNS requests.
     *
     * Creating a new resolver uses the default server settings. Setting
     * the servers used for a resolver using [`resolver.setServers()`](https://nodejs.org/docs/latest-v20.x/api/dns.html#dnspromisessetserversservers) does not affect
     * other resolvers:
     *
     * ```js
     * import { promises } from 'node:dns';
     * const resolver = new promises.Resolver();
     * resolver.setServers(['4.4.4.4']);
     *
     * // This request will use the server at 4.4.4.4, independent of global settings.
     * resolver.resolve4('example.org').then((addresses) => {
     *   // ...
     * });
     *
     * // Alternatively, the same code can be written using async-await style.
     * (async function() {
     *   const addresses = await resolver.resolve4('example.org');
     * })();
     * ```
     *
     * The following methods from the `dnsPromises` API are available:
     *
     * * `resolver.getServers()`
     * * `resolver.resolve()`
     * * `resolver.resolve4()`
     * * `resolver.resolve6()`
     * * `resolver.resolveAny()`
     * * `resolver.resolveCaa()`
     * * `resolver.resolveCname()`
     * * `resolver.resolveMx()`
     * * `resolver.resolveNaptr()`
     * * `resolver.resolveNs()`
     * * `resolver.resolvePtr()`
     * * `resolver.resolveSoa()`
     * * `resolver.resolveSrv()`
     * * `resolver.resolveTxt()`
     * * `resolver.reverse()`
     * * `resolver.setServers()`
     * @since v10.6.0
     */
    class Resolver {
        constructor(options?: ResolverOptions);
        /**
         * Cancel all outstanding DNS queries made by this resolver. The corresponding
         * callbacks will be called with an error with code `ECANCELLED`.
         * @since v8.3.0
         */
        cancel(): void;
        getServers: typeof getServers;
        resolve: typeof resolve;
        resolve4: typeof resolve4;
        resolve6: typeof resolve6;
        resolveAny: typeof resolveAny;
        resolveCaa: typeof resolveCaa;
        resolveCname: typeof resolveCname;
        resolveMx: typeof resolveMx;
        resolveNaptr: typeof resolveNaptr;
        resolveNs: typeof resolveNs;
        resolvePtr: typeof resolvePtr;
        resolveSoa: typeof resolveSoa;
        resolveSrv: typeof resolveSrv;
        resolveTlsa: typeof resolveTlsa;
        resolveTxt: typeof resolveTxt;
        reverse: typeof reverse;
        /**
         * The resolver instance will send its requests from the specified IP address.
         * This allows programs to specify outbound interfaces when used on multi-homed
         * systems.
         *
         * If a v4 or v6 address is not specified, it is set to the default and the
         * operating system will choose a local address automatically.
         *
         * The resolver will use the v4 local address when making requests to IPv4 DNS
         * servers, and the v6 local address when making requests to IPv6 DNS servers.
         * The `rrtype` of resolution requests has no impact on the local address used.
         * @since v15.1.0, v14.17.0
         * @param [ipv4='0.0.0.0'] A string representation of an IPv4 address.
         * @param [ipv6='::0'] A string representation of an IPv6 address.
         */
        setLocalAddress(ipv4?: string, ipv6?: string): void;
        setServers: typeof setServers;
    }
}
declare module "node:dns/promises" {
    export * from "dns/promises";
}
