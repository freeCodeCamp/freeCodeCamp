"use strict";
/* eslint-disable no-param-reassign */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address4 = void 0;
const common = __importStar(require("./common"));
const constants = __importStar(require("./v4/constants"));
const address_error_1 = require("./address-error");
const isCorrect4 = common.isCorrect(constants.BITS);
/**
 * Represents an IPv4 address
 * @param {string} address - An IPv4 address string
 */
class Address4 {
    constructor(address) {
        this.addressMinusSuffix = '';
        this.groups = constants.GROUPS;
        this.parsedAddress = [];
        this.parsedSubnet = '';
        this.subnet = '/32';
        this.subnetMask = 32;
        this.v4 = true;
        /**
         * Returns true if the address is correct, false otherwise
         * @returns {Boolean}
         */
        this.isCorrect = isCorrect4;
        /**
         * Returns true if the given address is in the subnet of the current address.
         * An `Address6` is never in the subnet of an `Address4`; convert with
         * `to4()` or `Address6.fromAddress4()` to compare across families.
         * @returns {boolean}
         */
        this.isInSubnet = common.isInSubnet;
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
        this.isHostInSubnet = common.isHostInSubnet;
        this.address = address;
        const subnet = constants.RE_SUBNET_STRING.exec(address);
        if (subnet) {
            this.parsedSubnet = subnet[0].replace('/', '');
            this.subnetMask = parseInt(this.parsedSubnet, 10);
            this.subnet = `/${this.subnetMask}`;
            if (this.subnetMask < 0 || this.subnetMask > constants.BITS) {
                throw new address_error_1.AddressError('Invalid subnet mask.');
            }
            address = address.replace(constants.RE_SUBNET_STRING, '');
        }
        // Four three-digit octets and three dots: the longest well-formed address
        // is 15 characters. Longer input is rejected before parsing, as Address6
        // does at its own limit.
        const longest = constants.GROUPS * 4 - 1;
        if (address.length > longest) {
            throw new address_error_1.AddressError(`IPv4 addresses are at most ${longest} characters.`);
        }
        this.addressMinusSuffix = address;
        this.parsedAddress = this.parse(address);
    }
    /**
     * Returns true if the given string is a valid IPv4 address (with optional
     * CIDR subnet), false otherwise. Host bits in the subnet portion are
     * allowed (e.g. `192.168.1.5/24` is valid); for strict network-address
     * validation compare `correctForm()` to `startAddress().correctForm()`,
     * or use `networkForm()`.
     */
    static isValid(address) {
        try {
            // eslint-disable-next-line no-new
            new Address4(address);
            return true;
        }
        catch {
            return false;
        }
    }
    /**
     * Parses an IPv4 address string into its four octet groups and stores the
     * result on `this.parsedAddress`. Called automatically by the constructor;
     * you typically don't need to call it directly. Throws `AddressError` if
     * the input is not a valid IPv4 address.
     */
    parse(address) {
        const groups = address.split('.');
        // Checked before the general match so the error names the actual problem.
        // Address6 rejects the same notation on its v4-in-v6 path.
        if (groups.some((group) => /^0\d/.test(group))) {
            throw new address_error_1.AddressError("IPv4 addresses can't have leading zeroes.");
        }
        if (!address.match(constants.RE_ADDRESS)) {
            throw new address_error_1.AddressError('Invalid IPv4 address.');
        }
        return groups;
    }
    /**
     * Returns the address in correct form: octets joined with `.` and any
     * leading zeros stripped (e.g. `192.168.1.1`). For IPv4 this matches the
     * canonical dotted-decimal representation.
     */
    correctForm() {
        return this.parsedAddress.map((part) => parseInt(part, 10)).join('.');
    }
    /**
     * Construct an `Address4` from an address and a dotted-decimal subnet
     * mask given as separate strings (e.g. as returned by Node's
     * `os.networkInterfaces()`). Throws `AddressError` if the mask is
     * non-contiguous (e.g. `255.0.255.0`).
     * @example
     * var address = Address4.fromAddressAndMask('192.168.1.1', '255.255.255.0');
     * address.subnetMask; // 24
     */
    static fromAddressAndMask(address, mask) {
        const bits = common.prefixLengthFromMask(new Address4(mask).bigInt(), constants.BITS);
        return new Address4(`${address}/${bits}`);
    }
    /**
     * Construct an `Address4` from an address and a Cisco-style wildcard mask
     * given as separate strings (e.g. `0.0.0.255` for a `/24`). The wildcard
     * mask is the bitwise inverse of the subnet mask. Throws `AddressError`
     * if the mask is non-contiguous (e.g. `0.255.0.255`).
     * @example
     * var address = Address4.fromAddressAndWildcardMask('10.0.0.1', '0.0.0.255');
     * address.subnetMask; // 24
     */
    static fromAddressAndWildcardMask(address, wildcardMask) {
        const wildcard = new Address4(wildcardMask).bigInt();
        const allOnes = (BigInt(1) << BigInt(constants.BITS)) - BigInt(1);
        const mask = wildcard ^ allOnes;
        const bits = common.prefixLengthFromMask(mask, constants.BITS);
        return new Address4(`${address}/${bits}`);
    }
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
    static fromWildcard(input) {
        const groups = input.split('.');
        if (groups.length !== constants.GROUPS) {
            throw new address_error_1.AddressError('Wildcard pattern must have 4 octets');
        }
        let firstWildcard = -1;
        for (let i = 0; i < groups.length; i++) {
            if (groups[i] === '*') {
                if (firstWildcard === -1) {
                    firstWildcard = i;
                }
            }
            else if (firstWildcard !== -1) {
                throw new address_error_1.AddressError('Wildcard `*` must only appear in trailing octets (e.g. `192.168.0.*`)');
            }
        }
        const trailing = firstWildcard === -1 ? 0 : groups.length - firstWildcard;
        const replaced = groups.map((g) => (g === '*' ? '0' : g));
        const subnetBits = constants.BITS - trailing * 8;
        return new Address4(`${replaced.join('.')}/${subnetBits}`);
    }
    /**
     * Converts a hex string to an IPv4 address object. Accepts 8 hex digits
     * with optional `:` separators (e.g. `'7f000001'` or `'7f:00:00:01'`).
     * Throws `AddressError` for any other length or for non-hex characters.
     * @param {string} hex - a hex string to convert
     * @returns {Address4}
     */
    static fromHex(hex) {
        const stripped = hex.replace(/:/g, '');
        if (!/^[0-9a-fA-F]{8}$/.test(stripped)) {
            throw new address_error_1.AddressError('IPv4 hex must be exactly 8 hex digits');
        }
        const groups = [];
        for (let i = 0; i < 8; i += 2) {
            groups.push(parseInt(stripped.slice(i, i + 2), 16));
        }
        return new Address4(groups.join('.'));
    }
    /**
     * Converts an integer into a IPv4 address object. The integer must be a
     * non-negative safe integer in the range `[0, 2**32 - 1]`; otherwise
     * `AddressError` is thrown.
     * @param {integer} integer - a number to convert
     * @returns {Address4}
     */
    static fromInteger(integer) {
        if (!Number.isInteger(integer) || integer < 0 || integer > 0xffffffff) {
            throw new address_error_1.AddressError('IPv4 integer must be in the range 0 to 2**32 - 1');
        }
        return Address4.fromHex(integer.toString(16).padStart(8, '0'));
    }
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
    static fromArpa(arpaFormAddress) {
        // remove an ending ".in-addr.arpa", in any case and with or without the
        // root dot, as Address6.fromArpa does for ".ip6.arpa"
        const leader = arpaFormAddress.replace(/(\.in-addr\.arpa)?\.?$/i, '');
        const address = leader.split('.').reverse().join('.');
        return new Address4(address);
    }
    /**
     * Converts an IPv4 address object to a hex string
     * @returns {String}
     */
    toHex() {
        return this.parsedAddress.map((part) => common.stringToPaddedHex(part)).join(':');
    }
    /**
     * Converts an IPv4 address object to an array of bytes.
     *
     * To get a Node.js `Buffer`, wrap the result: `Buffer.from(address.toArray())`.
     * @returns {Array}
     */
    toArray() {
        return this.parsedAddress.map((part) => parseInt(part, 10));
    }
    /**
     * Converts an IPv4 address object to an IPv6 address group
     * @returns {String}
     */
    toGroup6() {
        const output = [];
        let i;
        for (i = 0; i < constants.GROUPS; i += 2) {
            output.push(`${common.stringToPaddedHex(this.parsedAddress[i])}${common.stringToPaddedHex(this.parsedAddress[i + 1])}`);
        }
        return output.join(':');
    }
    /**
     * Returns the address as a `bigint`
     * @returns {bigint}
     */
    bigInt() {
        return BigInt(`0x${this.parsedAddress.map((n) => common.stringToPaddedHex(n)).join('')}`);
    }
    /**
     * Helper function getting start address.
     * @returns {bigint}
     */
    _startAddress() {
        return BigInt(`0b${this.mask() + '0'.repeat(constants.BITS - this.subnetMask)}`);
    }
    /**
     * The first address in the range given by this address' subnet.
     * Often referred to as the Network Address.
     * @returns {Address4}
     */
    startAddress() {
        return Address4.fromBigInt(this._startAddress());
    }
    /**
     * The first host address in the range given by this address's subnet ie
     * the first address after the Network Address
     * @returns {Address4}
     */
    startAddressExclusive() {
        const adjust = BigInt('1');
        return Address4.fromBigInt(this._startAddress() + adjust);
    }
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
    offset(n) {
        return Address4.fromBigInt(common.offsetBigInt(this.bigInt(), n, constants.BITS, 'IPv4')).withSubnetMask(this.subnetMask);
    }
    /**
     * Returns the network that follows this address's network: the address after
     * {@link endAddress}, with the same subnet mask. Throws `AddressError` when
     * this network is the last one in the address space.
     * @returns {Address4}
     * @example
     * new Address4('10.0.0.0/24').nextNetwork().networkForm(); // '10.0.1.0/24'
     */
    nextNetwork() {
        return Address4.fromBigInt(common.offsetBigInt(this._endAddress(), 1, constants.BITS, 'IPv4')).withSubnetMask(this.subnetMask);
    }
    withSubnetMask(subnetMask) {
        return new Address4(`${this.correctForm()}/${subnetMask}`);
    }
    /**
     * Helper function getting end address.
     * @returns {bigint}
     */
    _endAddress() {
        return BigInt(`0b${this.mask() + '1'.repeat(constants.BITS - this.subnetMask)}`);
    }
    /**
     * The last address in the range given by this address' subnet
     * Often referred to as the Broadcast
     * @returns {Address4}
     */
    endAddress() {
        return Address4.fromBigInt(this._endAddress());
    }
    /**
     * The last host address in the range given by this address's subnet ie
     * the last address prior to the Broadcast Address
     * @returns {Address4}
     */
    endAddressExclusive() {
        const adjust = BigInt('1');
        return Address4.fromBigInt(this._endAddress() - adjust);
    }
    /**
     * The dotted-decimal form of the subnet mask, e.g. `255.255.240.0` for
     * a `/20`. Returns an `Address4`; call `.correctForm()` for the string.
     * @returns {Address4}
     */
    subnetMaskAddress() {
        return Address4.fromBigInt(BigInt(`0b${'1'.repeat(this.subnetMask)}${'0'.repeat(constants.BITS - this.subnetMask)}`));
    }
    /**
     * The Cisco-style wildcard mask, e.g. `0.0.0.255` for a `/24`. This is
     * the bitwise inverse of `subnetMaskAddress()`. Returns an `Address4`;
     * call `.correctForm()` for the string.
     * @returns {Address4}
     */
    wildcardMask() {
        return Address4.fromBigInt(BigInt(`0b${'0'.repeat(this.subnetMask)}${'1'.repeat(constants.BITS - this.subnetMask)}`));
    }
    /**
     * The network address in CIDR string form, e.g. `192.168.1.0/24` for
     * `192.168.1.5/24`. For an address with no explicit subnet the prefix is
     * `/32`, e.g. `networkForm()` on `192.168.1.5` returns `192.168.1.5/32`.
     * @returns {string}
     */
    networkForm() {
        return `${this.startAddress().correctForm()}/${this.subnetMask}`;
    }
    /**
     * Converts a BigInt to a v4 address object. The value must be in the
     * range `[0, 2**32 - 1]`; otherwise `AddressError` is thrown.
     * @param {bigint} bigInt - a BigInt to convert
     * @returns {Address4}
     */
    static fromBigInt(bigInt) {
        if (bigInt < BigInt(0) || bigInt > BigInt(0xffffffff)) {
            throw new address_error_1.AddressError('IPv4 BigInt must be in the range 0 to 2**32 - 1');
        }
        return Address4.fromHex(bigInt.toString(16).padStart(8, '0'));
    }
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
    static fromByteArray(bytes) {
        common.assertByteArray(bytes, 4, 'IPv4', 0);
        return this.fromUnsignedByteArray(bytes);
    }
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
    static fromUnsignedByteArray(bytes) {
        if (bytes.length !== 4) {
            throw new address_error_1.AddressError('IPv4 addresses require exactly 4 bytes');
        }
        const address = bytes.join('.');
        return new Address4(address);
    }
    /**
     * Returns the first n bits of the address, defaulting to the
     * subnet mask
     * @returns {String}
     */
    mask(mask) {
        if (mask === undefined) {
            mask = this.subnetMask;
        }
        return this.getBitsBase2(0, mask);
    }
    /**
     * Returns the bits in the given range as a base-2 string
     * @returns {string}
     */
    getBitsBase2(start, end) {
        return this.binaryZeroPad().slice(start, end);
    }
    /**
     * Return the reversed in-addr.arpa form of the address, e.g.
     * `42.2.0.192.in-addr.arpa.` for `192.0.2.42`.
     * @param {Object} options
     * @param {boolean} options.omitSuffix - omit the "in-addr.arpa" suffix
     * @returns {String}
     */
    reverseForm(options) {
        if (!options) {
            options = {};
        }
        const reversed = this.correctForm().split('.').reverse().join('.');
        if (options.omitSuffix) {
            return reversed;
        }
        return `${reversed}.in-addr.arpa.`;
    }
    /**
     * Returns true if the given address is a multicast address
     * @returns {boolean}
     */
    isMulticast() {
        return this.isHostInSubnet(MULTICAST_V4);
    }
    /**
     * Returns true if the address is in one of the [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918) private address ranges (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`).
     * @returns {boolean}
     */
    isPrivate() {
        return PRIVATE_V4.some((subnet) => this.isHostInSubnet(subnet));
    }
    /**
     * Returns true if the address is in the loopback range `127.0.0.0/8` ([RFC 1122](https://datatracker.ietf.org/doc/html/rfc1122)).
     * @returns {boolean}
     */
    isLoopback() {
        return this.isHostInSubnet(LOOPBACK_V4);
    }
    /**
     * Returns true if the address is in the link-local range `169.254.0.0/16` ([RFC 3927](https://datatracker.ietf.org/doc/html/rfc3927)).
     * @returns {boolean}
     */
    isLinkLocal() {
        return this.isHostInSubnet(LINK_LOCAL_V4);
    }
    /**
     * Returns true if the address is the unspecified address `0.0.0.0`.
     * @returns {boolean}
     */
    isUnspecified() {
        return this.isHostInSubnet(UNSPECIFIED_V4);
    }
    /**
     * Returns true if the address is the limited broadcast address `255.255.255.255` ([RFC 919](https://datatracker.ietf.org/doc/html/rfc919)).
     * @returns {boolean}
     */
    isBroadcast() {
        return this.isHostInSubnet(BROADCAST_V4);
    }
    /**
     * Returns true if the address is in the carrier-grade NAT range `100.64.0.0/10` ([RFC 6598](https://datatracker.ietf.org/doc/html/rfc6598)).
     * @returns {boolean}
     */
    isCGNAT() {
        return this.isHostInSubnet(CGNAT_V4);
    }
    /**
     * Returns true if the address is in one of the documentation ranges
     * `192.0.2.0/24`, `198.51.100.0/24`, or `203.0.113.0/24` ([RFC 5737](https://datatracker.ietf.org/doc/html/rfc5737)).
     * @returns {boolean}
     */
    isDocumentation() {
        return DOCUMENTATION_V4.some((subnet) => this.isHostInSubnet(subnet));
    }
    /**
     * Returns true if the address is in the benchmarking range `198.18.0.0/15` ([RFC 2544](https://datatracker.ietf.org/doc/html/rfc2544)).
     * @returns {boolean}
     */
    isBenchmarking() {
        return this.isHostInSubnet(BENCHMARKING_V4);
    }
    /**
     * Returns true if the address is in the reserved range `240.0.0.0/4` ([RFC 1112](https://datatracker.ietf.org/doc/html/rfc1112)),
     * which includes the limited broadcast address.
     * @returns {boolean}
     */
    isReserved() {
        return this.isHostInSubnet(RESERVED_V4);
    }
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
    isGlobal() {
        return !this.isMulticast() && common.isGloballyReachable.call(this, SPECIAL_PURPOSE_V4);
    }
    /**
     * Returns a zero-padded base-2 string representation of the address
     * @returns {string}
     */
    binaryZeroPad() {
        if (this._binaryZeroPad === undefined) {
            this._binaryZeroPad = this.bigInt().toString(2).padStart(constants.BITS, '0');
        }
        return this._binaryZeroPad;
    }
    /**
     * Groups an IPv4 address for inclusion at the end of an IPv6 address.
     *
     * Returns an HTML fragment: each half of the address is wrapped in a
     * `<span>` carrying the group classes an address-inspector UI hovers on.
     * The address content is HTML-escaped; anything you concatenate around it
     * is your responsibility.
     * @returns {String}
     */
    groupForV6() {
        const segments = this.parsedAddress;
        return this.correctForm().replace(constants.RE_ADDRESS, `<span class="hover-group group-v4 group-6">${segments
            .slice(0, 2)
            .join('.')}</span>.<span class="hover-group group-v4 group-7">${segments
            .slice(2, 4)
            .join('.')}</span>`);
    }
}
exports.Address4 = Address4;
const MULTICAST_V4 = new Address4('224.0.0.0/4');
const PRIVATE_V4 = [
    new Address4('10.0.0.0/8'),
    new Address4('172.16.0.0/12'),
    new Address4('192.168.0.0/16'),
];
const LOOPBACK_V4 = new Address4('127.0.0.0/8');
const LINK_LOCAL_V4 = new Address4('169.254.0.0/16');
const UNSPECIFIED_V4 = new Address4('0.0.0.0/32');
const BROADCAST_V4 = new Address4('255.255.255.255/32');
const CGNAT_V4 = new Address4('100.64.0.0/10');
const DOCUMENTATION_V4 = [
    new Address4('192.0.2.0/24'),
    new Address4('198.51.100.0/24'),
    new Address4('203.0.113.0/24'),
];
const BENCHMARKING_V4 = new Address4('198.18.0.0/15');
const RESERVED_V4 = new Address4('240.0.0.0/4');
const SPECIAL_PURPOSE_V4 = constants.SPECIAL_PURPOSE.map(([cidr, , reachable]) => ({
    subnet: new Address4(cidr),
    reachable,
}));
//# sourceMappingURL=ipv4.js.map