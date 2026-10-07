import * as common from './common';
import { Address4 } from './ipv4';
interface SixToFourProperties {
    prefix: string;
    gateway: string;
}
interface TeredoProperties {
    prefix: string;
    server4: string;
    client4: string;
    flags: string;
    coneNat: boolean;
    microsoft: {
        reserved: boolean;
        universalLocal: boolean;
        groupIndividual: boolean;
        nonce: string;
    };
    udpPort: string;
}
/**
 * Represents an IPv6 address
 * @param {string} address - An IPv6 address string
 * @param {number} [groups=8] - How many octets to parse
 * @example
 * var address = new Address6('2001::/32');
 */
export declare class Address6 {
    address4?: Address4;
    address: string;
    addressMinusSuffix: string;
    elidedGroups?: number;
    elisionBegin?: number;
    elisionEnd?: number;
    groups: number;
    parsedAddress4?: string;
    parsedAddress: string[];
    parsedSubnet: string;
    subnet: string;
    subnetMask: number;
    v4: boolean;
    zone: string;
    private _binaryZeroPad?;
    constructor(address: string, optionalGroups?: number);
    /**
     * Returns true if the given string is a valid IPv6 address (with optional
     * CIDR subnet and zone identifier), false otherwise. Host bits in the
     * subnet portion are allowed (e.g. `2001:db8::1/32` is valid); for strict
     * network-address validation compare `correctForm()` to
     * `startAddress().correctForm()`, or use `networkForm()`.
     */
    static isValid(address: string): boolean;
    /**
     * Convert a BigInt to a v6 address object. The value must be in the
     * range `[0, 2**128 - 1]`; otherwise `AddressError` is thrown.
     * @param {bigint} bigInt - a BigInt to convert
     * @returns {Address6}
     * @example
     * var bigInt = BigInt('1000000000000');
     * var address = Address6.fromBigInt(bigInt);
     * address.correctForm(); // '::e8:d4a5:1000'
     */
    static fromBigInt(bigInt: bigint): Address6;
    /**
     * Parse a URL (with optional bracketed host and port) into an address and
     * port. Returns either `{ address, port }` on success or
     * `{ error, address: null, port: null }` if the URL could not be parsed.
     * Ports are returned as numbers (or `null` if absent or out of range).
     * @example
     * var addressAndPort = Address6.fromURL('http://[ffff::]:8080/foo/');
     * addressAndPort.address.correctForm(); // 'ffff::'
     * addressAndPort.port; // 8080
     */
    static fromURL(url: string): {
        error: string;
        address: null;
        port: null;
    } | {
        address: Address6;
        port: number | null;
        error?: undefined;
    };
    /**
     * Construct an `Address6` from an address and a hex subnet mask given as
     * separate strings (e.g. as returned by Node's `os.networkInterfaces()`).
     * Throws `AddressError` if the mask is non-contiguous (e.g.
     * `ffff::ffff`).
     * @example
     * var address = Address6.fromAddressAndMask('fe80::1', 'ffff:ffff:ffff:ffff::');
     * address.subnetMask; // 64
     */
    static fromAddressAndMask(address: string, mask: string): Address6;
    /**
     * Construct an `Address6` from an address and a Cisco-style wildcard mask
     * given as separate strings (e.g. `::ffff:ffff:ffff:ffff` for a `/64`).
     * The wildcard mask is the bitwise inverse of the subnet mask. Throws
     * `AddressError` if the mask is non-contiguous.
     * @example
     * var address = Address6.fromAddressAndWildcardMask('fe80::1', '::ffff:ffff:ffff:ffff');
     * address.subnetMask; // 64
     */
    static fromAddressAndWildcardMask(address: string, wildcardMask: string): Address6;
    /**
     * Construct an `Address6` from a wildcard pattern with trailing `*`
     * groups. The number of trailing wildcards determines the prefix
     * length: each `*` represents 16 bits. `::` is expanded to zero groups
     * (not wildcards) before evaluating trailing wildcards.
     *
     * Only trailing whole-group wildcards are supported. Partial-group
     * wildcards (e.g. `2001:db8::0*`) and interior wildcards (e.g.
     * `*::1`) throw `AddressError`.
     * @example
     * Address6.fromWildcard('2001:db8:*:*:*:*:*:*').subnet;  // '/32'
     * Address6.fromWildcard('2001:db8::*').subnet;           // '/112'
     * Address6.fromWildcard('*:*:*:*:*:*:*:*').subnet;       // '/0'
     */
    static fromWildcard(input: string): Address6;
    /**
     * Create an IPv6-mapped address given an IPv4 address
     * @param {string} address - An IPv4 address string
     * @returns {Address6}
     * @example
     * var address = Address6.fromAddress4('192.168.0.1');
     * address.correctForm(); // '::ffff:c0a8:1'
     * address.to4in6(); // '::ffff:192.168.0.1'
     */
    static fromAddress4(address: string): Address6;
    /**
     * Return an address from ip6.arpa form. A full 32-nibble name gives a /128
     * address; a shorter name, as used for a delegated reverse zone, gives the
     * network it covers, with a subnet mask of four bits per nibble, so
     * `fromArpa(x.reverseForm())` round-trips {@link reverseForm} for any prefix.
     * @param {string} arpaFormAddress - an 'ip6.arpa' form address
     * @returns {Adress6}
     * @example
     * var address = Address6.fromArpa(e.f.f.f.3.c.2.6.f.f.f.e.6.6.8.e.1.0.6.7.9.4.e.c.0.0.0.0.1.0.0.2.ip6.arpa.)
     * address.correctForm(); // '2001:0:ce49:7601:e866:efff:62c3:fffe'
     * Address6.fromArpa('8.b.d.0.1.0.0.2.ip6.arpa.').networkForm(); // '2001:db8::/32'
     */
    static fromArpa(arpaFormAddress: string): Address6;
    /**
     * Return the Microsoft UNC transcription of the address
     * @returns {String} the Microsoft UNC transcription of the address
     */
    microsoftTranscription(): string;
    /**
     * Return the first n bits of the address, defaulting to the subnet mask
     * @param {number} [mask=subnet] - the number of bits to mask
     * @returns {String} the first n bits of the address as a string
     */
    mask(mask?: number): string;
    /**
     * Return the number of possible subnets of a given size in the address
     * @param {number} [subnetSize=128] - the subnet size
     * @returns {String}
     */
    possibleSubnets(subnetSize?: number): string;
    /**
     * Helper function getting start address.
     * @returns {bigint}
     */
    _startAddress(): bigint;
    /**
     * The first address in the range given by this address' subnet
     * Often referred to as the Network Address.
     * @returns {Address6}
     */
    startAddress(): Address6;
    /**
     * The first host address in the range given by this address's subnet ie
     * the first address after the Network Address
     * @returns {Address6}
     */
    startAddressExclusive(): Address6;
    /**
     * Helper function getting end address.
     * @returns {bigint}
     */
    _endAddress(): bigint;
    /**
     * The last address in the range given by this address's subnet. IPv6 has
     * no broadcast address, so this is an ordinary assignable address (in a
     * 64-bit-interface-identifier subnet it falls inside the reserved
     * subnet-anycast block of [RFC 2526](https://datatracker.ietf.org/doc/html/rfc2526)).
     * @returns {Address6}
     */
    endAddress(): Address6;
    /**
     * The address one before {@link endAddress}. This is the IPv6 counterpart
     * of the IPv4 method that skips the broadcast address; IPv6 has no broadcast,
     * so it drops exactly one address and does not model the 128 reserved
     * subnet-anycast identifiers of [RFC 2526](https://datatracker.ietf.org/doc/html/rfc2526).
     * @returns {Address6}
     */
    endAddressExclusive(): Address6;
    /**
     * Returns the address `n` addresses after this one (or before, when `n` is
     * negative), keeping this address's subnet mask. Throws `AddressError` when
     * the result would fall outside the IPv6 address space or `n` is not an
     * integer.
     * @param {number | bigint} n
     * @returns {Address6}
     * @example
     * new Address6('2001:db8::/64').offset(1).correctForm(); // '2001:db8::1'
     */
    offset(n: number | bigint): Address6;
    /**
     * Returns the network that follows this address's network: the address after
     * {@link endAddress}, with the same subnet mask. Throws `AddressError` when
     * this network is the last one in the address space.
     * @returns {Address6}
     * @example
     * new Address6('2001:db8::/64').nextNetwork().networkForm(); // '2001:db8:0:1::/64'
     */
    nextNetwork(): Address6;
    private withSubnetMask;
    /**
     * The hex form of the subnet mask, e.g. `ffff:ffff:ffff:ffff::` for a
     * `/64`. Returns an `Address6`; call `.correctForm()` for the string.
     * @returns {Address6}
     */
    subnetMaskAddress(): Address6;
    /**
     * The Cisco-style wildcard mask, e.g. `::ffff:ffff:ffff:ffff` for a
     * `/64`. This is the bitwise inverse of `subnetMaskAddress()`. Returns
     * an `Address6`; call `.correctForm()` for the string.
     * @returns {Address6}
     */
    wildcardMask(): Address6;
    /**
     * The network address in CIDR string form, e.g. `2001:db8::/32` for
     * `2001:db8::1/32`. For an address with no explicit subnet the prefix
     * is `/128`, e.g. `networkForm()` on `2001:db8::1` returns
     * `2001:db8::1/128`.
     * @returns {string}
     */
    networkForm(): string;
    /**
     * Return the scope of the address. The 4-bit scope field
     * ([RFC 4291 §2.7](https://datatracker.ietf.org/doc/html/rfc4291#section-2.7))
     * is only defined for multicast addresses; for unicast addresses the scope
     * is derived from the address type per
     * [RFC 4007 §6](https://datatracker.ietf.org/doc/html/rfc4007#section-6).
     * @returns {String}
     */
    getScope(): string;
    /**
     * Return the type of the address
     * @returns {String}
     */
    getType(): string;
    /**
     * Return the bits in the given range as a BigInt
     * @returns {bigint}
     */
    getBits(start: number, end: number): bigint;
    /**
     * Return the bits in the given range as a base-2 string
     * @returns {String}
     */
    getBitsBase2(start: number, end: number): string;
    /**
     * Return the bits in the given range as a base-16 string
     * @returns {String}
     */
    getBitsBase16(start: number, end: number): string;
    /**
     * Return the bits that are set past the subnet mask length
     * @returns {String}
     */
    getBitsPastSubnet(): string;
    /**
     * Return the reversed ip6.arpa form of the address
     * @param {Object} options
     * @param {boolean} options.omitSuffix - omit the "ip6.arpa" suffix
     * @returns {String}
     */
    reverseForm(options?: common.ReverseFormOptions): string;
    /**
     * Returns the address in correct form, per
     * [RFC 5952](https://datatracker.ietf.org/doc/html/rfc5952): leading zeros
     * stripped, the longest run of zero groups collapsed to `::`, and hex digits
     * lowercased (e.g. `2001:db8::1`). This is the recommended form for display.
     */
    correctForm(): string;
    /**
     * Return a zero-padded base-2 string representation of the address
     * @returns {String}
     * @example
     * var address = new Address6('2001:4860:4001:803::1011');
     * address.binaryZeroPad();
     * // '0010000000000001010010000110000001000000000000010000100000000011
     * //  0000000000000000000000000000000000000000000000000001000000010001'
     */
    binaryZeroPad(): string;
    /**
     * Parses a v4-in-v6 string (e.g. `::ffff:192.168.0.1`) by extracting the
     * trailing IPv4 address into `this.address4` / `this.parsedAddress4` and
     * returning the address with the v4 portion converted to two v6 groups.
     * Used internally by `parse()`.
     */
    parse4in6(address: string): string;
    /**
     * Parses an IPv6 address string into its 8 hexadecimal groups (expanding
     * any `::` elision and any trailing v4-in-v6 portion) and stores the result
     * on `this.parsedAddress`. Called automatically by the constructor; you
     * typically don't need to call it directly. Throws `AddressError` if the
     * input is malformed.
     */
    parse(address: string): string[];
    /**
     * Returns the canonical (fully expanded) form of the address: all 8 groups,
     * each padded to 4 hex digits, with no `::` collapsing
     * (e.g. `2001:0db8:0000:0000:0000:0000:0000:0001`). Useful for sorting and
     * byte-exact comparison.
     */
    canonicalForm(): string;
    /**
     * Return the decimal form of the address
     * @returns {String}
     */
    decimal(): string;
    /**
     * Return the address as a BigInt
     * @returns {bigint}
     */
    bigInt(): bigint;
    /**
     * Return the last two groups of this address as an IPv4 address string.
     * If this address carries a CIDR prefix that covers the trailing 32 bits
     * (i.e. `subnetMask >= 96`), the resulting `Address4` inherits the
     * corresponding v4 prefix (`subnetMask - 96`); otherwise it defaults to
     * `/32`.
     * @returns {Address4}
     * @example
     * var address = new Address6('2001:4860:4001::1825:bf11');
     * address.to4().correctForm(); // '24.37.191.17'
     */
    to4(): Address4;
    /**
     * Return the v4-in-v6 form of the address
     * @returns {String}
     */
    to4in6(): string;
    /**
     * Decodes the Teredo tunneling fields embedded in this address. Returns the
     * Teredo prefix, server IPv4, client IPv4, raw flag bits, cone-NAT flag,
     * UDP port, and Microsoft-format flag breakdown (reserved, universal/local,
     * group/individual, nonce). Only meaningful for addresses in `2001::/32`.
     */
    inspectTeredo(): TeredoProperties;
    /**
     * Decodes the 6to4 tunneling fields embedded in this address. Returns the
     * 6to4 prefix and the embedded IPv4 gateway address. Only meaningful for
     * addresses in `2002::/16`.
     */
    inspect6to4(): SixToFourProperties;
    /**
     * Return a v6 6to4 address from a v6 v4inv6 address
     * @returns {Address6}
     */
    to6to4(): Address6 | null;
    /**
     * Embed an IPv4 address into a NAT64 IPv6 address using the encoding
     * defined by [RFC 6052](https://datatracker.ietf.org/doc/html/rfc6052).
     * The default prefix is the well-known prefix `64:ff9b::/96`. The prefix
     * length must be one of 32, 40, 48, 56, 64, or 96; for prefixes shorter
     * than /64 the IPv4 octets are split around the reserved bits 64–71.
     * @example
     * Address6.fromAddress4Nat64('192.0.2.33').correctForm(); // '64:ff9b::c000:221'
     * Address6.fromAddress4Nat64('192.0.2.33', '2001:db8::/32').correctForm(); // '2001:db8:c000:221::'
     */
    static fromAddress4Nat64(address: string, prefix?: string): Address6;
    /**
     * Extract the embedded IPv4 address from a NAT64 IPv6 address using the
     * encoding defined by [RFC 6052](https://datatracker.ietf.org/doc/html/rfc6052).
     * The default prefix is the well-known prefix `64:ff9b::/96`. Returns
     * `null` if this address is not contained within the given prefix.
     * @example
     * new Address6('64:ff9b::c000:221').toAddress4Nat64()!.correctForm(); // '192.0.2.33'
     */
    toAddress4Nat64(prefix?: string): Address4 | null;
    /**
     * Return a byte array.
     *
     * To get a Node.js `Buffer`, wrap the result: `Buffer.from(address.toByteArray())`.
     * @returns {Array}
     */
    toByteArray(): number[];
    /**
     * Return an unsigned byte array.
     *
     * To get a Node.js `Buffer`, wrap the result: `Buffer.from(address.toUnsignedByteArray())`.
     * @returns {Array}
     */
    toUnsignedByteArray(): number[];
    /**
     * Convert a byte array to an Address6 object.
     *
     * Accepts unsigned bytes (0 to 255) or signed bytes (-128 to 127, as an
     * `Int8Array` or a Java `byte[]` holds them), folding signed values to their
     * unsigned equivalent. Throws `AddressError` unless given exactly 16
     * integers from -128 to 255.
     *
     * To convert from a Node.js `Buffer`, spread it: `Address6.fromByteArray([...buf])`.
     * @returns {Address6}
     */
    static fromByteArray(bytes: Array<number>): Address6;
    /**
     * Convert an unsigned byte array to an Address6 object.
     *
     * Throws `AddressError` unless given exactly 16 integers from 0 to 255.
     *
     * To convert from a Node.js `Buffer`, spread it: `Address6.fromUnsignedByteArray([...buf])`.
     * @returns {Address6}
     */
    static fromUnsignedByteArray(bytes: Array<number>): Address6;
    /**
     * Returns true if the given address is in the subnet of the current address.
     * An `Address4` is never in the subnet of an `Address6`; convert with
     * `Address6.fromAddress4()` or `to4()` to compare across families.
     * @returns {boolean}
     */
    isInSubnet: typeof common.isInSubnet;
    /**
     * Returns true if this address's host bits fall inside the given subnet,
     * ignoring this address's own subnet mask. Prefer this over `isInSubnet`
     * when classifying a single address, so the answer doesn't change with the
     * CIDR suffix the caller happened to write — notably when the address came
     * from untrusted input and the result backs a trust-boundary decision.
     * An `Address4` is never in the subnet of an `Address6`; convert with
     * `Address6.fromAddress4()` or `to4()` to compare across families.
     * @returns {boolean}
     */
    isHostInSubnet: typeof common.isHostInSubnet;
    /**
     * Returns true if the address is correct, false otherwise
     * @returns {boolean}
     */
    isCorrect: (this: Address4 | Address6) => boolean;
    /**
     * Returns true if the address is in the canonical form, false otherwise
     * @returns {boolean}
     */
    isCanonical(): boolean;
    /**
     * Returns true if the address is a link-local unicast address in `fe80::/10`
     * ([RFC 4291 §2.4](https://datatracker.ietf.org/doc/html/rfc4291#section-2.4))
     * or an IPv4-mapped / NAT64 address whose embedded IPv4 address is link-local
     * (`169.254.0.0/16`, e.g. `::ffff:169.254.169.254`), false otherwise.
     * @returns {boolean}
     */
    isLinkLocal(): boolean;
    /**
     * Returns true if the address is a multicast address, false otherwise
     * @returns {boolean}
     */
    isMulticast(): boolean;
    /**
     * Returns true if the address was written in v4-in-v6 dotted-quad notation
     * (e.g. `::ffff:127.0.0.1`), false otherwise. This is a notation-level flag
     * and does not reflect whether the address bits lie in the IPv4-mapped
     * (`::ffff:0:0/96`) subnet — for that, see {@link isMapped4}.
     * @returns {boolean}
     */
    is4(): boolean;
    /**
     * Returns true if the address is an IPv4-mapped IPv6 address in
     * `::ffff:0:0/96` ([RFC 4291 §2.5.5.2](https://datatracker.ietf.org/doc/html/rfc4291#section-2.5.5.2)),
     * false otherwise. Unlike {@link is4}, this checks the underlying address
     * bits rather than the textual notation, so `::ffff:127.0.0.1` and
     * `::ffff:7f00:1` both return true.
     * @returns {boolean}
     */
    isMapped4(): boolean;
    /**
     * If this address embeds a routable IPv4 address — i.e. it is IPv4-mapped
     * (`::ffff:0:0/96`) or sits in the NAT64 well-known prefix (`64:ff9b::/96`,
     * [RFC 6052](https://datatracker.ietf.org/doc/html/rfc6052)) — return that
     * embedded address as an {@link Address4}; otherwise return null.
     *
     * The special-property checks (`isLoopback`, `isLinkLocal`, `isMulticast`,
     * `isUnspecified`, `isPrivate`, `isCGNAT`, `isBroadcast`) call this first and
     * delegate to the embedded {@link Address4} when present, so a literal such as
     * `::ffff:127.0.0.1` is classified by what it actually reaches (loopback)
     * rather than by its IPv6 wrapper (which `getType()` reports as IPv4-mapped).
     * This matters wherever the checks back a trust-boundary decision (e.g. an
     * SSRF allow/deny filter): without normalization, `::ffff:10.0.0.1`,
     * `::ffff:169.254.169.254`, `64:ff9b::7f00:1`, etc. would all read as
     * non-internal.
     * @returns {Address4 | null}
     */
    embeddedIPv4(): Address4 | null;
    /**
     * Returns true if the address is a Teredo address, false otherwise
     * @returns {boolean}
     */
    isTeredo(): boolean;
    /**
     * Returns true if the address is a 6to4 address, false otherwise
     * @returns {boolean}
     */
    is6to4(): boolean;
    /**
     * Returns true if the address is a loopback address, false otherwise
     * @returns {boolean}
     */
    isLoopback(): boolean;
    /**
     * Returns true if the address is a Unique Local Address in `fc00::/7` ([RFC 4193](https://datatracker.ietf.org/doc/html/rfc4193)). ULAs are the IPv6 equivalent of IPv4 [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918) private addresses.
     * @returns {boolean}
     */
    isULA(): boolean;
    /**
     * Returns true if the address is private, i.e. a Unique Local Address in
     * `fc00::/7` ([RFC 4193](https://datatracker.ietf.org/doc/html/rfc4193)), an
     * address in the NAT64 local-use range `64:ff9b:1::/48`
     * ([RFC 8215](https://datatracker.ietf.org/doc/html/rfc8215)), or an
     * IPv4-mapped / NAT64 well-known address whose embedded IPv4 address is in
     * one of the [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918)
     * private ranges (e.g. `::ffff:10.0.0.1`). This is the IPv6 counterpart to
     * {@link Address4.isPrivate}; use it instead of {@link isULA} when you need to
     * catch mapped RFC 1918 addresses as well as native ULAs.
     *
     * The local-use NAT64 range is reported private as a whole rather than by
     * its embedded IPv4 address: an operator may carve a prefix of any RFC 6052
     * length out of `64:ff9b:1::/48`, so the same bits decode to different IPv4
     * addresses under different deployments and no single decoding is correct.
     * Use {@link toAddress4Nat64} with the deployment's prefix to decode one.
     * @returns {boolean}
     */
    isPrivate(): boolean;
    /**
     * Returns true if the address is an IPv4-mapped / NAT64 address whose embedded
     * IPv4 address is in the carrier-grade NAT range `100.64.0.0/10`
     * ([RFC 6598](https://datatracker.ietf.org/doc/html/rfc6598)), false
     * otherwise. There is no native IPv6 CGNAT range, so this only ever returns
     * true for an embedded IPv4 address (e.g. `::ffff:100.64.0.1`).
     * @returns {boolean}
     */
    isCGNAT(): boolean;
    /**
     * Returns true if the address is an IPv4-mapped / NAT64 address whose embedded
     * IPv4 address is the limited broadcast address `255.255.255.255`
     * ([RFC 919](https://datatracker.ietf.org/doc/html/rfc919)), false otherwise.
     * There is no IPv6 broadcast, so this only ever returns true for an embedded
     * IPv4 address (e.g. `::ffff:255.255.255.255`).
     * @returns {boolean}
     */
    isBroadcast(): boolean;
    /**
     * Returns true if the address is the unspecified address `::`.
     * @returns {boolean}
     */
    isUnspecified(): boolean;
    /**
     * Returns true if the address is in the documentation prefix `2001:db8::/32` ([RFC 3849](https://datatracker.ietf.org/doc/html/rfc3849)).
     * @returns {boolean}
     */
    isDocumentation(): boolean;
    /**
     * Returns true if the address is in the benchmarking range `2001:2::/48`
     * ([RFC 5180](https://datatracker.ietf.org/doc/html/rfc5180)) or is an
     * IPv4-mapped / NAT64 address whose embedded IPv4 address is in
     * `198.18.0.0/15`, false otherwise.
     * @returns {boolean}
     */
    isBenchmarking(): boolean;
    /**
     * Returns true if the address is globally reachable: inside the global
     * unicast allocation `2000::/3` (the only range the [IANA IPv6 Address Space
     * Registry](https://www.iana.org/assignments/ipv6-address-space/) assigns
     * for global unicast; everything else is reserved, ULA, link-local, or
     * multicast) and not in any block the [IANA IPv6 Special-Purpose Address Registry](https://www.iana.org/assignments/iana-ipv6-special-registry/)
     * marks as not globally reachable. An IPv4-mapped or NAT64 well-known
     * address answers for its embedded IPv4 address, so `::ffff:10.0.0.1` and
     * `64:ff9b::7f00:1` are not global. Teredo (`2001::/32`) and 6to4
     * (`2002::/16`) are not global either: the registry lists them as N/A and a
     * packet to one needs a relay.
     *
     * This covers everything the individual classifiers name and the blocks they
     * do not: the discard-only prefix `100::/64`, the IETF protocol assignments
     * in `2001::/23`, the deprecated site-local `fec0::/10` and IPv4-compatible
     * `::/96` ranges, and unallocated space such as `4000::/3`. It is the single
     * predicate to use where a request must not reach an internal or
     * special-purpose destination; see SECURITY.md.
     * @returns {boolean}
     */
    isGlobal(): boolean;
    /**
     * Returns the address as an HTTP URL with the host bracketed, e.g.
     * `http://[2001:db8::1]/`. If `optionalPort` is provided it is appended,
     * e.g. `http://[2001:db8::1]:8080/`.
     */
    href(optionalPort?: number | string): string;
    /**
     * Returns an HTML `<a>` element whose `href` encodes the address in a URL
     * hash fragment (default prefix `/#address=`). Useful for linking between
     * pages of an address-inspector UI.
     * @param options.className - CSS class for the rendered `<a>` element
     * @param options.prefix - hash prefix prepended to the address (default `/#address=`)
     * @param options.v4 - when true, render the address in v4-in-v6 form
     */
    link(options?: {
        className?: string;
        prefix?: string;
        v4?: boolean;
    }): string;
    /**
     * Groups an address.
     *
     * Returns an HTML fragment: each group is wrapped in a `<span>` carrying
     * the group classes an address-inspector UI hovers on. The address content
     * is HTML-escaped; anything you concatenate around it is your
     * responsibility.
     * @returns {String}
     */
    group(): string;
    /**
     * Generate a regular expression string that can be used to find or validate
     * all variations of this address
     * @param {boolean} substringSearch
     * @returns {string}
     */
    regularExpressionString(this: Address6, substringSearch?: boolean): string;
    /**
     * Generate a regular expression that can be used to find or validate all
     * variations of this address.
     * @param {boolean} substringSearch
     * @returns {RegExp}
     */
    regularExpression(this: Address6, substringSearch?: boolean): RegExp;
}
export {};
