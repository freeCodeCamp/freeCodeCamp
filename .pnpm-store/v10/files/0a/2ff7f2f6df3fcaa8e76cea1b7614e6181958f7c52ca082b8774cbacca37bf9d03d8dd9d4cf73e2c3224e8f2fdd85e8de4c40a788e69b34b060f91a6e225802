import * as common from './common';
/**
 * Represents an IPv4 address
 * @param {string} address - An IPv4 address string
 */
export declare class Address4 {
    address: string;
    addressMinusSuffix: string;
    groups: number;
    parsedAddress: string[];
    parsedSubnet: string;
    subnet: string;
    subnetMask: number;
    v4: boolean;
    private _binaryZeroPad?;
    constructor(address: string);
    /**
     * Returns true if the given string is a valid IPv4 address (with optional
     * CIDR subnet), false otherwise. Host bits in the subnet portion are
     * allowed (e.g. `192.168.1.5/24` is valid); for strict network-address
     * validation compare `correctForm()` to `startAddress().correctForm()`,
     * or use `networkForm()`.
     */
    static isValid(address: string): boolean;
    /**
     * Parses an IPv4 address string into its four octet groups and stores the
     * result on `this.parsedAddress`. Called automatically by the constructor;
     * you typically don't need to call it directly. Throws `AddressError` if
     * the input is not a valid IPv4 address.
     */
    parse(address: string): string[];
    /**
     * Returns the address in correct form: octets joined with `.` and any
     * leading zeros stripped (e.g. `192.168.1.1`). For IPv4 this matches the
     * canonical dotted-decimal representation.
     */
    correctForm(): string;
    /**
     * Returns true if the address is correct, false otherwise
     * @returns {Boolean}
     */
    isCorrect: (this: Address4 | import("./ipv6").Address6) => boolean;
    /**
     * Construct an `Address4` from an address and a dotted-decimal subnet
     * mask given as separate strings (e.g. as returned by Node's
     * `os.networkInterfaces()`). Throws `AddressError` if the mask is
     * non-contiguous (e.g. `255.0.255.0`).
     * @example
     * var address = Address4.fromAddressAndMask('192.168.1.1', '255.255.255.0');
     * address.subnetMask; // 24
     */
    static fromAddressAndMask(address: string, mask: string): Address4;
    /**
     * Construct an `Address4` from an address and a Cisco-style wildcard mask
     * given as separate strings (e.g. `0.0.0.255` for a `/24`). The wildcard
     * mask is the bitwise inverse of the subnet mask. Throws `AddressError`
     * if the mask is non-contiguous (e.g. `0.255.0.255`).
     * @example
     * var address = Address4.fromAddressAndWildcardMask('10.0.0.1', '0.0.0.255');
     * address.subnetMask; // 24
     */
    static fromAddressAndWildcardMask(address: string, wildcardMask: string): Address4;
    /**
     * Construct an `Address4` from a wildcard pattern with trailing `*`
     * octets. The number of trailing wildcards determines the prefix
     * length: each `*` represents 8 bits.
     *
     * Only trailing whole-octet wildcards are supported. Partial-octet
     * wildcards (e.g. `192.168.0.1*`) and interior wildcards (e.g.
     * `192.*.0.1`) throw `AddressError`.
     * @example
     * Address4.fromWildcard('192.168.0.*').subnet;   // '/24'
     * Address4.fromWildcard('192.168.*.*').subnet;   // '/16'
     * Address4.fromWildcard('*.*.*.*').subnet;       // '/0'
     */
    static fromWildcard(input: string): Address4;
    /**
     * Converts a hex string to an IPv4 address object. Accepts 8 hex digits
     * with optional `:` separators (e.g. `'7f000001'` or `'7f:00:00:01'`).
     * Throws `AddressError` for any other length or for non-hex characters.
     * @param {string} hex - a hex string to convert
     * @returns {Address4}
     */
    static fromHex(hex: string): Address4;
    /**
     * Converts an integer into a IPv4 address object. The integer must be a
     * non-negative safe integer in the range `[0, 2**32 - 1]`; otherwise
     * `AddressError` is thrown.
     * @param {integer} integer - a number to convert
     * @returns {Address4}
     */
    static fromInteger(integer: number): Address4;
    /**
     * Return an address from in-addr.arpa form: the four octets reversed, with
     * or without the `.in-addr.arpa` suffix and root dot, in any case. Throws
     * `AddressError` unless the reversed labels form a valid IPv4 address, so
     * `fromArpa(x.reverseForm())` round-trips {@link reverseForm}.
     * @param {string} arpaFormAddress - an 'in-addr.arpa' form ipv4 address
     * @returns {Adress4}
     * @example
     * var address = Address4.fromArpa('42.2.0.192.in-addr.arpa.')
     * address.correctForm(); // '192.0.2.42'
     */
    static fromArpa(arpaFormAddress: string): Address4;
    /**
     * Converts an IPv4 address object to a hex string
     * @returns {String}
     */
    toHex(): string;
    /**
     * Converts an IPv4 address object to an array of bytes.
     *
     * To get a Node.js `Buffer`, wrap the result: `Buffer.from(address.toArray())`.
     * @returns {Array}
     */
    toArray(): number[];
    /**
     * Converts an IPv4 address object to an IPv6 address group
     * @returns {String}
     */
    toGroup6(): string;
    /**
     * Returns the address as a `bigint`
     * @returns {bigint}
     */
    bigInt(): bigint;
    /**
     * Helper function getting start address.
     * @returns {bigint}
     */
    _startAddress(): bigint;
    /**
     * The first address in the range given by this address' subnet.
     * Often referred to as the Network Address.
     * @returns {Address4}
     */
    startAddress(): Address4;
    /**
     * The first host address in the range given by this address's subnet ie
     * the first address after the Network Address
     * @returns {Address4}
     */
    startAddressExclusive(): Address4;
    /**
     * Returns the address `n` addresses after this one (or before, when `n` is
     * negative), keeping this address's subnet mask. Throws `AddressError` when
     * the result would fall outside the IPv4 address space or `n` is not an
     * integer.
     * @param {number | bigint} n
     * @returns {Address4}
     * @example
     * new Address4('10.0.0.0/24').offset(1).correctForm(); // '10.0.0.1'
     */
    offset(n: number | bigint): Address4;
    /**
     * Returns the network that follows this address's network: the address after
     * {@link endAddress}, with the same subnet mask. Throws `AddressError` when
     * this network is the last one in the address space.
     * @returns {Address4}
     * @example
     * new Address4('10.0.0.0/24').nextNetwork().networkForm(); // '10.0.1.0/24'
     */
    nextNetwork(): Address4;
    private withSubnetMask;
    /**
     * Helper function getting end address.
     * @returns {bigint}
     */
    _endAddress(): bigint;
    /**
     * The last address in the range given by this address' subnet
     * Often referred to as the Broadcast
     * @returns {Address4}
     */
    endAddress(): Address4;
    /**
     * The last host address in the range given by this address's subnet ie
     * the last address prior to the Broadcast Address
     * @returns {Address4}
     */
    endAddressExclusive(): Address4;
    /**
     * The dotted-decimal form of the subnet mask, e.g. `255.255.240.0` for
     * a `/20`. Returns an `Address4`; call `.correctForm()` for the string.
     * @returns {Address4}
     */
    subnetMaskAddress(): Address4;
    /**
     * The Cisco-style wildcard mask, e.g. `0.0.0.255` for a `/24`. This is
     * the bitwise inverse of `subnetMaskAddress()`. Returns an `Address4`;
     * call `.correctForm()` for the string.
     * @returns {Address4}
     */
    wildcardMask(): Address4;
    /**
     * The network address in CIDR string form, e.g. `192.168.1.0/24` for
     * `192.168.1.5/24`. For an address with no explicit subnet the prefix is
     * `/32`, e.g. `networkForm()` on `192.168.1.5` returns `192.168.1.5/32`.
     * @returns {string}
     */
    networkForm(): string;
    /**
     * Converts a BigInt to a v4 address object. The value must be in the
     * range `[0, 2**32 - 1]`; otherwise `AddressError` is thrown.
     * @param {bigint} bigInt - a BigInt to convert
     * @returns {Address4}
     */
    static fromBigInt(bigInt: bigint): Address4;
    /**
     * Convert a byte array to an Address4 object. Throws `AddressError` unless
     * given exactly 4 integers from 0 to 255. Signed bytes are rejected, so
     * this differs from `Address6.fromByteArray`, which folds them; the two
     * contracts converge on this stricter form in the next major version.
     *
     * To convert from a Node.js `Buffer`, spread it: `Address4.fromByteArray([...buf])`.
     * @param {Array<number>} bytes - an array of 4 bytes (0-255)
     * @returns {Address4}
     */
    static fromByteArray(bytes: Array<number>): Address4;
    /**
     * Convert an unsigned byte array to an Address4 object. Throws
     * `AddressError` unless given exactly 4 bytes, and rejects values outside
     * 0 to 255 when parsing the resulting address.
     *
     * To convert from a Node.js `Buffer`, spread it:
     * `Address4.fromUnsignedByteArray([...buf])`.
     * @param {Array<number>} bytes - an array of 4 unsigned bytes (0-255)
     * @returns {Address4}
     */
    static fromUnsignedByteArray(bytes: Array<number>): Address4;
    /**
     * Returns the first n bits of the address, defaulting to the
     * subnet mask
     * @returns {String}
     */
    mask(mask?: number): string;
    /**
     * Returns the bits in the given range as a base-2 string
     * @returns {string}
     */
    getBitsBase2(start: number, end: number): string;
    /**
     * Return the reversed in-addr.arpa form of the address, e.g.
     * `42.2.0.192.in-addr.arpa.` for `192.0.2.42`.
     * @param {Object} options
     * @param {boolean} options.omitSuffix - omit the "in-addr.arpa" suffix
     * @returns {String}
     */
    reverseForm(options?: common.ReverseFormOptions): string;
    /**
     * Returns true if the given address is in the subnet of the current address.
     * An `Address6` is never in the subnet of an `Address4`; convert with
     * `to4()` or `Address6.fromAddress4()` to compare across families.
     * @returns {boolean}
     */
    isInSubnet: typeof common.isInSubnet;
    /**
     * Returns true if this address's host bits fall inside the given subnet,
     * ignoring this address's own subnet mask. Prefer this over `isInSubnet`
     * when classifying a single address, so the answer doesn't change with the
     * CIDR suffix the caller happened to write — notably when the address came
     * from untrusted input and the result backs a trust-boundary decision.
     * An `Address6` is never in the subnet of an `Address4`; convert with
     * `to4()` or `Address6.fromAddress4()` to compare across families.
     * @returns {boolean}
     */
    isHostInSubnet: typeof common.isHostInSubnet;
    /**
     * Returns true if the given address is a multicast address
     * @returns {boolean}
     */
    isMulticast(): boolean;
    /**
     * Returns true if the address is in one of the [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918) private address ranges (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`).
     * @returns {boolean}
     */
    isPrivate(): boolean;
    /**
     * Returns true if the address is in the loopback range `127.0.0.0/8` ([RFC 1122](https://datatracker.ietf.org/doc/html/rfc1122)).
     * @returns {boolean}
     */
    isLoopback(): boolean;
    /**
     * Returns true if the address is in the link-local range `169.254.0.0/16` ([RFC 3927](https://datatracker.ietf.org/doc/html/rfc3927)).
     * @returns {boolean}
     */
    isLinkLocal(): boolean;
    /**
     * Returns true if the address is the unspecified address `0.0.0.0`.
     * @returns {boolean}
     */
    isUnspecified(): boolean;
    /**
     * Returns true if the address is the limited broadcast address `255.255.255.255` ([RFC 919](https://datatracker.ietf.org/doc/html/rfc919)).
     * @returns {boolean}
     */
    isBroadcast(): boolean;
    /**
     * Returns true if the address is in the carrier-grade NAT range `100.64.0.0/10` ([RFC 6598](https://datatracker.ietf.org/doc/html/rfc6598)).
     * @returns {boolean}
     */
    isCGNAT(): boolean;
    /**
     * Returns true if the address is in one of the documentation ranges
     * `192.0.2.0/24`, `198.51.100.0/24`, or `203.0.113.0/24` ([RFC 5737](https://datatracker.ietf.org/doc/html/rfc5737)).
     * @returns {boolean}
     */
    isDocumentation(): boolean;
    /**
     * Returns true if the address is in the benchmarking range `198.18.0.0/15` ([RFC 2544](https://datatracker.ietf.org/doc/html/rfc2544)).
     * @returns {boolean}
     */
    isBenchmarking(): boolean;
    /**
     * Returns true if the address is in the reserved range `240.0.0.0/4` ([RFC 1112](https://datatracker.ietf.org/doc/html/rfc1112)),
     * which includes the limited broadcast address.
     * @returns {boolean}
     */
    isReserved(): boolean;
    /**
     * Returns true if the address is globally reachable: not multicast, and not
     * in any block the [IANA IPv4 Special-Purpose Address Registry](https://www.iana.org/assignments/iana-ipv4-special-registry/)
     * marks as not globally reachable. That covers everything the individual
     * classifiers name (private, loopback, link-local, CGNAT, unspecified,
     * broadcast, documentation, benchmarking, reserved) and the blocks they do
     * not, such as `0.0.0.0/8` and the IETF protocol assignments in
     * `192.0.0.0/24`. This is the single predicate to use where a request must
     * not reach an internal or special-purpose destination; see SECURITY.md.
     * @returns {boolean}
     */
    isGlobal(): boolean;
    /**
     * Returns a zero-padded base-2 string representation of the address
     * @returns {string}
     */
    binaryZeroPad(): string;
    /**
     * Groups an IPv4 address for inclusion at the end of an IPv6 address.
     *
     * Returns an HTML fragment: each half of the address is wrapped in a
     * `<span>` carrying the group classes an address-inspector UI hovers on.
     * The address content is HTML-escaped; anything you concatenate around it
     * is your responsibility.
     * @returns {String}
     */
    groupForV6(): string;
}
