declare module "node:dns" {
    // Supported getaddrinfo flags.
    /**
     * Limits returned address types to the types of non-loopback addresses configured on the system. For example, IPv4 addresses are
     * only returned if the current system has at least one IPv4 address configured.
     */
    const ADDRCONFIG: number;
    /**
     * If the IPv6 family was specified, but no IPv6 addresses were found, then return IPv4 mapped IPv6 addresses. It is not supported
     * on some operating systems (e.g. FreeBSD 10.1).
     */
    const V4MAPPED: number;
    /**
     * If `dns.V4MAPPED` is specified, return resolved IPv6 addresses as
     * well as IPv4 mapped IPv6 addresses.
     */
    const ALL: number;
    interface LookupOptions {
        /**
         * The record family. Must be `4`, `6`, or `0`. For backward compatibility reasons, `'IPv4'` and `'IPv6'` are interpreted
         * as `4` and `6` respectively. The value 0 indicates that either an IPv4 or IPv6 address is returned. If the value `0` is used
         * with `{ all: true } (see below)`, both IPv4 and IPv6 addresses are returned.
         * @default 0
         */
        family?: number | "IPv4" | "IPv6" | undefined;
        /**
         * One or more [supported `getaddrinfo`](https://nodejs.org/docs/latest-v25.x/api/dns.html#supported-getaddrinfo-flags) flags. Multiple flags may be
         * passed by bitwise `OR`ing their values.
         */
        hints?: number | undefined;
        /**
         * When `true`, the callback returns all resolved addresses in an array. Otherwise, returns a single address.
         * @default false
         */
        all?: boolean | undefined;
        /**
         * When `verbatim`, the resolved addresses are return unsorted. When `ipv4first`, the resolved addresses are sorted
         * by placing IPv4 addresses before IPv6 addresses. When `ipv6first`, the resolved addresses are sorted by placing IPv6
         * addresses before IPv4 addresses. Default value is configurable using
         * {@link setDefaultResultOrder} or [`--dns-result-order`](https://nodejs.org/docs/latest-v25.x/api/cli.html#--dns-result-orderorder).
         * @default `verbatim` (addresses are not reordered)
         * @since v22.1.0
         */
        order?: "ipv4first" | "ipv6first" | "verbatim" | undefined;
        /**
         * When `true`, the callback receives IPv4 and IPv6 addresses in the order the DNS resolver returned them. When `false`, IPv4
         * addresses are placed before IPv6 addresses. This option will be deprecated in favor of `order`. When both are specified,
         * `order` has higher precedence. New code should only use `order`. Default value is configurable using {@link setDefaultResultOrder}
         * @default true (addresses are not reordered)
         * @deprecated Please use `order` option
         */
        verbatim?: boolean | undefined;
    }
    interface LookupOneOptions extends LookupOptions {
        all?: false | undefined;
    }
    interface LookupAllOptions extends LookupOptions {
        all: true;
    }
    interface LookupAddress {
        /**
         * A string representation of an IPv4 or IPv6 address.
         */
        address: string;
        /**
         * `4` or `6`, denoting the family of `address`, or `0` if the address is not an IPv4 or IPv6 address. `0` is a likely indicator of a
         * bug in the name resolution service used by the operating system.
         */
        family: number;
    }
    /**
     * Resolves a host name (e.g. `'nodejs.org'`) into the first found A (IPv4) or
     * AAAA (IPv6) record. All `option` properties are optional. If `options` is an
     * integer, then it must be `4` or `6` – if `options` is `0` or not provided, then
     * IPv4 and IPv6 addresses are both returned if found.
     *
     * With the `all` option set to `true`, the arguments for `callback` change to `(err, addresses)`, with `addresses` being an array of objects with the
     * properties `address` and `family`.
     *
     * On error, `err` is an `Error` object, where `err.code` is the error code.
     * Keep in mind that `err.code` will be set to `'ENOTFOUND'` not only when
     * the host name does not exist but also when the lookup fails in other ways
     * such as no available file descriptors.
     *
     * `dns.lookup()` does not necessarily have anything to do with the DNS protocol.
     * The implementation uses an operating system facility that can associate names
     * with addresses and vice versa. This implementation can have subtle but
     * important consequences on the behavior of any Node.js program. Please take some
     * time to consult the [Implementation considerations section](https://nodejs.org/docs/latest-v25.x/api/dns.html#implementation-considerations)
     * before using `dns.lookup()`.
     *
     * Example usage:
     *
     * ```js
     * import dns from 'node:dns';
     * const options = {
     *   family: 6,
     *   hints: dns.ADDRCONFIG | dns.V4MAPPED,
     * };
     * dns.lookup('example.com', options, (err, address, family) =>
     *   console.log('address: %j family: IPv%s', address, family));
     * // address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6
     *
     * // When options.all is true, the result will be an Array.
     * options.all = true;
     * dns.lookup('example.com', options, (err, addresses) =>
     *   console.log('addresses: %j', addresses));
     * // addresses: [{"address":"2606:2800:220:1:248:1893:25c8:1946","family":6}]
     * ```
     *
     * If this method is invoked as its [util.promisify()](https://nodejs.org/docs/latest-v25.x/api/util.html#utilpromisifyoriginal) ed
     * version, and `all` is not set to `true`, it returns a `Promise` for an `Object` with `address` and `family` properties.
     * @since v0.1.90
     */
    function lookup(
        hostname: string,
        family: number,
        callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void,
    ): void;
    function lookup(
        hostname: string,
        options: LookupOneOptions,
        callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void,
    ): void;
    function lookup(
        hostname: string,
        options: LookupAllOptions,
        callback: (err: NodeJS.ErrnoException | null, addresses: LookupAddress[]) => void,
    ): void;
    function lookup(
        hostname: string,
        options: LookupOptions,
        callback: (err: NodeJS.ErrnoException | null, address: string | LookupAddress[], family: number) => void,
    ): void;
    function lookup(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void,
    ): void;
    namespace lookup {
        function __promisify__(hostname: string, options: LookupAllOptions): Promise<LookupAddress[]>;
        function __promisify__(hostname: string, options?: LookupOneOptions | number): Promise<LookupAddress>;
        function __promisify__(hostname: string, options: LookupOptions): Promise<LookupAddress | LookupAddress[]>;
    }
    /**
     * Resolves the given `address` and `port` into a host name and service using
     * the operating system's underlying `getnameinfo` implementation.
     *
     * If `address` is not a valid IP address, a `TypeError` will be thrown.
     * The `port` will be coerced to a number. If it is not a legal port, a `TypeError` will be thrown.
     *
     * On an error, `err` is an [`Error`](https://nodejs.org/docs/latest-v25.x/api/errors.html#class-error) object,
     * where `err.code` is the error code.
     *
     * ```js
     * import dns from 'node:dns';
     * dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
     *   console.log(hostname, service);
     *   // Prints: localhost ssh
     * });
     * ```
     *
     * If this method is invoked as its [util.promisify()](https://nodejs.org/docs/latest-v25.x/api/util.html#utilpromisifyoriginal) ed
     * version, it returns a `Promise` for an `Object` with `hostname` and `service` properties.
     * @since v0.11.14
     */
    function lookupService(
        address: string,
        port: number,
        callback: (err: NodeJS.ErrnoException | null, hostname: string, service: string) => void,
    ): void;
    namespace lookupService {
        function __promisify__(
            address: string,
            port: number,
        ): Promise<{
            hostname: string;
            service: string;
        }>;
    }
    interface ResolveOptions {
        ttl: boolean;
    }
    interface ResolveWithTtlOptions extends ResolveOptions {
        ttl: true;
    }
    interface RecordWithTtl {
        address: string;
        ttl: number;
    }
    interface AnyARecord extends RecordWithTtl {
        type: "A";
    }
    interface AnyAaaaRecord extends RecordWithTtl {
        type: "AAAA";
    }
    interface CaaRecord {
        critical: number;
        issue?: string | undefined;
        issuewild?: string | undefined;
        iodef?: string | undefined;
        contactemail?: string | undefined;
        contactphone?: string | undefined;
    }
    interface AnyCaaRecord extends CaaRecord {
        type: "CAA";
    }
    interface MxRecord {
        priority: number;
        exchange: string;
    }
    interface AnyMxRecord extends MxRecord {
        type: "MX";
    }
    interface NaptrRecord {
        flags: string;
        service: string;
        regexp: string;
        replacement: string;
        order: number;
        preference: number;
    }
    interface AnyNaptrRecord extends NaptrRecord {
        type: "NAPTR";
    }
    interface SoaRecord {
        nsname: string;
        hostmaster: string;
        serial: number;
        refresh: number;
        retry: number;
        expire: number;
        minttl: number;
    }
    interface AnySoaRecord extends SoaRecord {
        type: "SOA";
    }
    interface SrvRecord {
        priority: number;
        weight: number;
        port: number;
        name: string;
    }
    interface AnySrvRecord extends SrvRecord {
        type: "SRV";
    }
    interface TlsaRecord {
        certUsage: number;
        selector: number;
        match: number;
        data: ArrayBuffer;
    }
    interface AnyTlsaRecord extends TlsaRecord {
        type: "TLSA";
    }
    interface AnyTxtRecord {
        type: "TXT";
        entries: string[];
    }
    interface AnyNsRecord {
        type: "NS";
        value: string;
    }
    interface AnyPtrRecord {
        type: "PTR";
        value: string;
    }
    interface AnyCnameRecord {
        type: "CNAME";
        value: string;
    }
    type AnyRecord =
        | AnyARecord
        | AnyAaaaRecord
        | AnyCaaRecord
        | AnyCnameRecord
        | AnyMxRecord
        | AnyNaptrRecord
        | AnyNsRecord
        | AnyPtrRecord
        | AnySoaRecord
        | AnySrvRecord
        | AnyTlsaRecord
        | AnyTxtRecord;
    /**
     * Uses the DNS protocol to resolve a host name (e.g. `'nodejs.org'`) into an array
     * of the resource records. The `callback` function has arguments `(err, records)`. When successful, `records` will be an array of resource
     * records. The type and structure of individual results varies based on `rrtype`:
     *
     * <omitted>
     *
     * On error, `err` is an [`Error`](https://nodejs.org/docs/latest-v25.x/api/errors.html#class-error) object,
     * where `err.code` is one of the `DNS error codes`.
     * @since v0.1.27
     * @param hostname Host name to resolve.
     * @param [rrtype='A'] Resource record type.
     */
    function resolve(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void,
    ): void;
    function resolve(
        hostname: string,
        rrtype: "A" | "AAAA" | "CNAME" | "NS" | "PTR",
        callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void,
    ): void;
    function resolve(
        hostname: string,
        rrtype: "ANY",
        callback: (err: NodeJS.ErrnoException | null, addresses: AnyRecord[]) => void,
    ): void;
    function resolve(
        hostname: string,
        rrtype: "CAA",
        callback: (err: NodeJS.ErrnoException | null, address: CaaRecord[]) => void,
    ): void;
    function resolve(
        hostname: string,
        rrtype: "MX",
        callback: (err: NodeJS.ErrnoException | null, addresses: MxRecord[]) => void,
    ): void;
    function resolve(
        hostname: string,
        rrtype: "NAPTR",
        callback: (err: NodeJS.ErrnoException | null, addresses: NaptrRecord[]) => void,
    ): void;
    function resolve(
        hostname: string,
        rrtype: "SOA",
        callback: (err: NodeJS.ErrnoException | null, addresses: SoaRecord) => void,
    ): void;
    function resolve(
        hostname: string,
        rrtype: "SRV",
        callback: (err: NodeJS.ErrnoException | null, addresses: SrvRecord[]) => void,
    ): void;
    function resolve(
        hostname: string,
        rrtype: "TLSA",
        callback: (err: NodeJS.ErrnoException | null, addresses: TlsaRecord[]) => void,
    ): void;
    function resolve(
        hostname: string,
        rrtype: "TXT",
        callback: (err: NodeJS.ErrnoException | null, addresses: string[][]) => void,
    ): void;
    function resolve(
        hostname: string,
        rrtype: string,
        callback: (
            err: NodeJS.ErrnoException | null,
            addresses:
                | string[]
                | CaaRecord[]
                | MxRecord[]
                | NaptrRecord[]
                | SoaRecord
                | SrvRecord[]
                | TlsaRecord[]
                | string[][]
                | AnyRecord[],
        ) => void,
    ): void;
    namespace resolve {
        function __promisify__(hostname: string, rrtype?: "A" | "AAAA" | "CNAME" | "NS" | "PTR"): Promise<string[]>;
        function __promisify__(hostname: string, rrtype: "ANY"): Promise<AnyRecord[]>;
        function __promisify__(hostname: string, rrtype: "CAA"): Promise<CaaRecord[]>;
        function __promisify__(hostname: string, rrtype: "MX"): Promise<MxRecord[]>;
        function __promisify__(hostname: string, rrtype: "NAPTR"): Promise<NaptrRecord[]>;
        function __promisify__(hostname: string, rrtype: "SOA"): Promise<SoaRecord>;
        function __promisify__(hostname: string, rrtype: "SRV"): Promise<SrvRecord[]>;
        function __promisify__(hostname: string, rrtype: "TLSA"): Promise<TlsaRecord[]>;
        function __promisify__(hostname: string, rrtype: "TXT"): Promise<string[][]>;
        function __promisify__(
            hostname: string,
            rrtype: string,
        ): Promise<
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
    }
    /**
     * Uses the DNS protocol to resolve a IPv4 addresses (`A` records) for the `hostname`. The `addresses` argument passed to the `callback` function
     * will contain an array of IPv4 addresses (e.g.`['74.125.79.104', '74.125.79.105', '74.125.79.106']`).
     * @since v0.1.16
     * @param hostname Host name to resolve.
     */
    function resolve4(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void,
    ): void;
    function resolve4(
        hostname: string,
        options: ResolveWithTtlOptions,
        callback: (err: NodeJS.ErrnoException | null, addresses: RecordWithTtl[]) => void,
    ): void;
    function resolve4(
        hostname: string,
        options: ResolveOptions,
        callback: (err: NodeJS.ErrnoException | null, addresses: string[] | RecordWithTtl[]) => void,
    ): void;
    namespace resolve4 {
        function __promisify__(hostname: string): Promise<string[]>;
        function __promisify__(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
        function __promisify__(hostname: string, options?: ResolveOptions): Promise<string[] | RecordWithTtl[]>;
    }
    /**
     * Uses the DNS protocol to resolve IPv6 addresses (`AAAA` records) for the `hostname`. The `addresses` argument passed to the `callback` function
     * will contain an array of IPv6 addresses.
     * @since v0.1.16
     * @param hostname Host name to resolve.
     */
    function resolve6(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void,
    ): void;
    function resolve6(
        hostname: string,
        options: ResolveWithTtlOptions,
        callback: (err: NodeJS.ErrnoException | null, addresses: RecordWithTtl[]) => void,
    ): void;
    function resolve6(
        hostname: string,
        options: ResolveOptions,
        callback: (err: NodeJS.ErrnoException | null, addresses: string[] | RecordWithTtl[]) => void,
    ): void;
    namespace resolve6 {
        function __promisify__(hostname: string): Promise<string[]>;
        function __promisify__(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
        function __promisify__(hostname: string, options?: ResolveOptions): Promise<string[] | RecordWithTtl[]>;
    }
    /**
     * Uses the DNS protocol to resolve `CNAME` records for the `hostname`. The `addresses` argument passed to the `callback` function
     * will contain an array of canonical name records available for the `hostname` (e.g. `['bar.example.com']`).
     * @since v0.3.2
     */
    function resolveCname(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void,
    ): void;
    namespace resolveCname {
        function __promisify__(hostname: string): Promise<string[]>;
    }
    /**
     * Uses the DNS protocol to resolve `CAA` records for the `hostname`. The `addresses` argument passed to the `callback` function
     * will contain an array of certification authority authorization records
     * available for the `hostname` (e.g. `[{critical: 0, iodef: 'mailto:pki@example.com'}, {critical: 128, issue: 'pki.example.com'}]`).
     * @since v15.0.0, v14.17.0
     */
    function resolveCaa(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, records: CaaRecord[]) => void,
    ): void;
    namespace resolveCaa {
        function __promisify__(hostname: string): Promise<CaaRecord[]>;
    }
    /**
     * Uses the DNS protocol to resolve mail exchange records (`MX` records) for the `hostname`. The `addresses` argument passed to the `callback` function will
     * contain an array of objects containing both a `priority` and `exchange` property (e.g. `[{priority: 10, exchange: 'mx.example.com'}, ...]`).
     * @since v0.1.27
     */
    function resolveMx(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: MxRecord[]) => void,
    ): void;
    namespace resolveMx {
        function __promisify__(hostname: string): Promise<MxRecord[]>;
    }
    /**
     * Uses the DNS protocol to resolve regular expression-based records (`NAPTR` records) for the `hostname`. The `addresses` argument passed to the `callback` function will contain an array of
     * objects with the following properties:
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
     * @since v0.9.12
     */
    function resolveNaptr(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: NaptrRecord[]) => void,
    ): void;
    namespace resolveNaptr {
        function __promisify__(hostname: string): Promise<NaptrRecord[]>;
    }
    /**
     * Uses the DNS protocol to resolve name server records (`NS` records) for the `hostname`. The `addresses` argument passed to the `callback` function will
     * contain an array of name server records available for `hostname` (e.g. `['ns1.example.com', 'ns2.example.com']`).
     * @since v0.1.90
     */
    function resolveNs(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void,
    ): void;
    namespace resolveNs {
        function __promisify__(hostname: string): Promise<string[]>;
    }
    /**
     * Uses the DNS protocol to resolve pointer records (`PTR` records) for the `hostname`. The `addresses` argument passed to the `callback` function will
     * be an array of strings containing the reply records.
     * @since v6.0.0
     */
    function resolvePtr(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void,
    ): void;
    namespace resolvePtr {
        function __promisify__(hostname: string): Promise<string[]>;
    }
    /**
     * Uses the DNS protocol to resolve a start of authority record (`SOA` record) for
     * the `hostname`. The `address` argument passed to the `callback` function will
     * be an object with the following properties:
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
     * @since v0.11.10
     */
    function resolveSoa(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, address: SoaRecord) => void,
    ): void;
    namespace resolveSoa {
        function __promisify__(hostname: string): Promise<SoaRecord>;
    }
    /**
     * Uses the DNS protocol to resolve service records (`SRV` records) for the `hostname`. The `addresses` argument passed to the `callback` function will
     * be an array of objects with the following properties:
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
     * @since v0.1.27
     */
    function resolveSrv(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: SrvRecord[]) => void,
    ): void;
    namespace resolveSrv {
        function __promisify__(hostname: string): Promise<SrvRecord[]>;
    }
    /**
     * Uses the DNS protocol to resolve certificate associations (`TLSA` records) for
     * the `hostname`. The `records` argument passed to the `callback` function is an
     * array of objects with these properties:
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
    function resolveTlsa(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: TlsaRecord[]) => void,
    ): void;
    namespace resolveTlsa {
        function __promisify__(hostname: string): Promise<TlsaRecord[]>;
    }
    /**
     * Uses the DNS protocol to resolve text queries (`TXT` records) for the `hostname`. The `records` argument passed to the `callback` function is a
     * two-dimensional array of the text records available for `hostname` (e.g.`[ ['v=spf1 ip4:0.0.0.0 ', '~all' ] ]`). Each sub-array contains TXT chunks of
     * one record. Depending on the use case, these could be either joined together or
     * treated separately.
     * @since v0.1.27
     */
    function resolveTxt(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: string[][]) => void,
    ): void;
    namespace resolveTxt {
        function __promisify__(hostname: string): Promise<string[][]>;
    }
    /**
     * Uses the DNS protocol to resolve all records (also known as `ANY` or `*` query).
     * The `ret` argument passed to the `callback` function will be an array containing
     * various types of records. Each object has a property `type` that indicates the
     * type of the current record. And depending on the `type`, additional properties
     * will be present on the object:
     *
     * <omitted>
     *
     * Here is an example of the `ret` object passed to the callback:
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
     *
     * DNS server operators may choose not to respond to `ANY` queries. It may be better to call individual methods like {@link resolve4}, {@link resolveMx}, and so on. For more details, see
     * [RFC 8482](https://tools.ietf.org/html/rfc8482).
     */
    function resolveAny(
        hostname: string,
        callback: (err: NodeJS.ErrnoException | null, addresses: AnyRecord[]) => void,
    ): void;
    namespace resolveAny {
        function __promisify__(hostname: string): Promise<AnyRecord[]>;
    }
    /**
     * Performs a reverse DNS query that resolves an IPv4 or IPv6 address to an
     * array of host names.
     *
     * On error, `err` is an [`Error`](https://nodejs.org/docs/latest-v25.x/api/errors.html#class-error) object, where `err.code` is
     * one of the [DNS error codes](https://nodejs.org/docs/latest-v25.x/api/dns.html#error-codes).
     * @since v0.1.16
     */
    function reverse(
        ip: string,
        callback: (err: NodeJS.ErrnoException | null, hostnames: string[]) => void,
    ): void;
    /**
     * Get the default value for `order` in {@link lookup} and [`dnsPromises.lookup()`](https://nodejs.org/docs/latest-v25.x/api/dns.html#dnspromiseslookuphostname-options).
     * The value could be:
     *
     * * `ipv4first`: for `order` defaulting to `ipv4first`.
     * * `ipv6first`: for `order` defaulting to `ipv6first`.
     * * `verbatim`: for `order` defaulting to `verbatim`.
     * @since v18.17.0
     */
    function getDefaultResultOrder(): "ipv4first" | "ipv6first" | "verbatim";
    /**
     * Sets the IP address and port of servers to be used when performing DNS
     * resolution. The `servers` argument is an array of [RFC 5952](https://tools.ietf.org/html/rfc5952#section-6) formatted
     * addresses. If the port is the IANA default DNS port (53) it can be omitted.
     *
     * ```js
     * dns.setServers([
     *   '4.4.4.4',
     *   '[2001:4860:4860::8888]',
     *   '4.4.4.4:1053',
     *   '[2001:4860:4860::8888]:1053',
     * ]);
     * ```
     *
     * An error will be thrown if an invalid address is provided.
     *
     * The `dns.setServers()` method must not be called while a DNS query is in
     * progress.
     *
     * The {@link setServers} method affects only {@link resolve}, `dns.resolve*()` and {@link reverse} (and specifically _not_ {@link lookup}).
     *
     * This method works much like [resolve.conf](https://man7.org/linux/man-pages/man5/resolv.conf.5.html).
     * That is, if attempting to resolve with the first server provided results in a `NOTFOUND` error, the `resolve()` method will _not_ attempt to resolve with
     * subsequent servers provided. Fallback DNS servers will only be used if the
     * earlier ones time out or result in some other error.
     * @since v0.11.3
     * @param servers array of [RFC 5952](https://datatracker.ietf.org/doc/html/rfc5952#section-6) formatted addresses
     */
    function setServers(servers: readonly string[]): void;
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
     * @since v0.11.3
     */
    function getServers(): string[];
    /**
     * Set the default value of `order` in {@link lookup} and [`dnsPromises.lookup()`](https://nodejs.org/docs/latest-v25.x/api/dns.html#dnspromiseslookuphostname-options).
     * The value could be:
     *
     * * `ipv4first`: sets default `order` to `ipv4first`.
     * * `ipv6first`: sets default `order` to `ipv6first`.
     * * `verbatim`: sets default `order` to `verbatim`.
     *
     * The default is `verbatim` and {@link setDefaultResultOrder} have higher
     * priority than [`--dns-result-order`](https://nodejs.org/docs/latest-v25.x/api/cli.html#--dns-result-orderorder). When using
     * [worker threads](https://nodejs.org/docs/latest-v25.x/api/worker_threads.html), {@link setDefaultResultOrder} from the main
     * thread won't affect the default dns orders in workers.
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
    interface ResolverOptions {
        /**
         * Query timeout in milliseconds, or `-1` to use the default timeout.
         */
        timeout?: number | undefined;
        /**
         * The number of tries the resolver will try contacting each name server before giving up.
         * @default 4
         */
        tries?: number | undefined;
        /**
         * The max retry timeout, in milliseconds.
         * @default 0
         */
        maxTimeout?: number | undefined;
    }
    /**
     * An independent resolver for DNS requests.
     *
     * Creating a new resolver uses the default server settings. Setting
     * the servers used for a resolver using [`resolver.setServers()`](https://nodejs.org/docs/latest-v25.x/api/dns.html#dnssetserversservers) does not affect
     * other resolvers:
     *
     * ```js
     * import { Resolver } from 'node:dns';
     * const resolver = new Resolver();
     * resolver.setServers(['4.4.4.4']);
     *
     * // This request will use the server at 4.4.4.4, independent of global settings.
     * resolver.resolve4('example.org', (err, addresses) => {
     *   // ...
     * });
     * ```
     *
     * The following methods from the `node:dns` module are available:
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
     * @since v8.3.0
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
declare module "node:dns" {
    export * as promises from "node:dns/promises";
}
declare module "dns" {
    export * from "node:dns";
}
