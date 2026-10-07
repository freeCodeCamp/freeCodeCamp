"use strict";
/* eslint-disable prefer-destructuring */
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
exports.Address6 = void 0;
const common = __importStar(require("./common"));
const constants4 = __importStar(require("./v4/constants"));
const constants6 = __importStar(require("./v6/constants"));
const helpers = __importStar(require("./v6/helpers"));
const ipv4_1 = require("./ipv4");
const regular_expressions_1 = require("./v6/regular-expressions");
const address_error_1 = require("./address-error");
const common_1 = require("./common");
const isCorrect6 = common.isCorrect(constants6.BITS);
function assert(condition) {
    if (!condition) {
        throw new Error('Assertion failed.');
    }
}
function addCommas(number) {
    const r = /(\d+)(\d{3})/;
    while (r.test(number)) {
        number = number.replace(r, '$1,$2');
    }
    return number;
}
function spanLeadingZeroes4(n) {
    n = n.replace(/^(0{1,})([1-9]+)$/, '<span class="parse-error">$1</span>$2');
    n = n.replace(/^(0{1,})(0)$/, '<span class="parse-error">$1</span>$2');
    return n;
}
/*
 * A helper function to compact an array
 */
function compact(address, slice) {
    const s1 = [];
    const s2 = [];
    let i;
    for (i = 0; i < address.length; i++) {
        if (i < slice[0]) {
            s1.push(address[i]);
        }
        else if (i > slice[1]) {
            s2.push(address[i]);
        }
    }
    return s1.concat(['compact']).concat(s2);
}
function paddedHex(octet) {
    return parseInt(octet, 16).toString(16).padStart(4, '0');
}
function unsignByte(b) {
    return b & 0xff;
}
/**
 * Represents an IPv6 address
 * @param {string} address - An IPv6 address string
 * @param {number} [groups=8] - How many octets to parse
 * @example
 * var address = new Address6('2001::/32');
 */
class Address6 {
    constructor(address, optionalGroups) {
        this.addressMinusSuffix = '';
        this.parsedSubnet = '';
        this.subnet = '/128';
        this.subnetMask = 128;
        this.v4 = false;
        this.zone = '';
        // #region Attributes
        /**
         * Returns true if the given address is in the subnet of the current address.
         * An `Address4` is never in the subnet of an `Address6`; convert with
         * `Address6.fromAddress4()` or `to4()` to compare across families.
         * @returns {boolean}
         */
        this.isInSubnet = common.isInSubnet;
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
        this.isHostInSubnet = common.isHostInSubnet;
        /**
         * Returns true if the address is correct, false otherwise
         * @returns {boolean}
         */
        this.isCorrect = isCorrect6;
        if (optionalGroups === undefined) {
            this.groups = constants6.GROUPS;
        }
        else {
            this.groups = optionalGroups;
        }
        this.address = address;
        const subnet = constants6.RE_SUBNET_STRING.exec(address);
        if (subnet) {
            this.parsedSubnet = subnet[0].replace('/', '');
            this.subnetMask = parseInt(this.parsedSubnet, 10);
            this.subnet = `/${this.subnetMask}`;
            if (Number.isNaN(this.subnetMask) ||
                this.subnetMask < 0 ||
                this.subnetMask > constants6.BITS) {
                throw new address_error_1.AddressError('Invalid subnet mask.');
            }
            address = address.replace(constants6.RE_SUBNET_STRING, '');
        }
        // RE_SUBNET_STRING anchors on the end of the address, so it strips only
        // the trailing suffix. A second one left behind (`::/0/1`) is malformed
        // and must be rejected rather than parsed as an address group.
        if (/\//.test(address)) {
            throw new address_error_1.AddressError('Invalid subnet mask.');
        }
        const zone = constants6.RE_ZONE_STRING.exec(address);
        if (zone) {
            this.zone = zone[0];
            address = address.replace(constants6.RE_ZONE_STRING, '');
        }
        // The longest well-formed address is all but the last two groups written
        // as four hex digits with their colons, then a 15-character dotted quad:
        // 5 * (groups - 2) + 15, which is 45 for eight groups, the same line
        // CPython's ipaddress module draws. Rejecting longer input here keeps the
        // parse diagnostics, which wrap every offending character in a span,
        // proportional to an address rather than to whatever was passed in.
        const longest = this.groups * 5 + 5;
        if (address.length > longest) {
            throw new address_error_1.AddressError(`IPv6 addresses are at most ${longest} characters.`);
        }
        this.addressMinusSuffix = address;
        this.parsedAddress = this.parse(this.addressMinusSuffix);
    }
    /**
     * Returns true if the given string is a valid IPv6 address (with optional
     * CIDR subnet and zone identifier), false otherwise. Host bits in the
     * subnet portion are allowed (e.g. `2001:db8::1/32` is valid); for strict
     * network-address validation compare `correctForm()` to
     * `startAddress().correctForm()`, or use `networkForm()`.
     */
    static isValid(address) {
        try {
            // eslint-disable-next-line no-new
            new Address6(address);
            return true;
        }
        catch {
            return false;
        }
    }
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
    static fromBigInt(bigInt) {
        if (bigInt < BigInt(0) || bigInt > (BigInt(1) << BigInt(constants6.BITS)) - BigInt(1)) {
            throw new address_error_1.AddressError('IPv6 BigInt must be in the range 0 to 2**128 - 1');
        }
        const hex = bigInt.toString(16).padStart(32, '0');
        const groups = [];
        for (let i = 0; i < constants6.GROUPS; i++) {
            groups.push(hex.slice(i * 4, (i + 1) * 4));
        }
        return new Address6(groups.join(':'));
    }
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
    static fromURL(url) {
        var _a;
        let host;
        let port = null;
        let result;
        let error;
        // Remove the protocol prefix, if any
        const stripped = url.replace(/^[a-z][a-z0-9+.-]*:\/\//i, '');
        // If we have brackets parse them and find a port
        if (stripped.indexOf('[') !== -1 && stripped.indexOf(']:') !== -1) {
            error = 'failed to parse address with port';
            result = constants6.RE_URL_WITH_PORT.exec(stripped);
            if (result === null) {
                return { error, address: null, port: null };
            }
            host = result[1];
            port = result[2];
        }
        else {
            error = 'failed to parse address from URL';
            result = constants6.RE_URL.exec(stripped);
            if (result === null) {
                return { error, address: null, port: null };
            }
            host = (_a = result[1]) !== null && _a !== void 0 ? _a : result[2];
        }
        // If there's a port convert it to an integer
        if (port) {
            port = parseInt(port, 10);
            // squelch out of range ports (valid ports are 0-65535)
            if (port < 0 || port > 65535) {
                port = null;
            }
        }
        else {
            // Standardize `undefined` to `null`
            port = null;
        }
        // The URL character class is a superset of valid IPv6, so a host the
        // regex accepted (an IPv4 literal, bare punctuation, too many groups)
        // can still be rejected by the parser
        let address;
        try {
            address = new Address6(host);
        }
        catch {
            return { error, address: null, port: null };
        }
        return { address, port };
    }
    /**
     * Construct an `Address6` from an address and a hex subnet mask given as
     * separate strings (e.g. as returned by Node's `os.networkInterfaces()`).
     * Throws `AddressError` if the mask is non-contiguous (e.g.
     * `ffff::ffff`).
     * @example
     * var address = Address6.fromAddressAndMask('fe80::1', 'ffff:ffff:ffff:ffff::');
     * address.subnetMask; // 64
     */
    static fromAddressAndMask(address, mask) {
        const bits = common.prefixLengthFromMask(new Address6(mask).bigInt(), constants6.BITS);
        return new Address6(`${address}/${bits}`);
    }
    /**
     * Construct an `Address6` from an address and a Cisco-style wildcard mask
     * given as separate strings (e.g. `::ffff:ffff:ffff:ffff` for a `/64`).
     * The wildcard mask is the bitwise inverse of the subnet mask. Throws
     * `AddressError` if the mask is non-contiguous.
     * @example
     * var address = Address6.fromAddressAndWildcardMask('fe80::1', '::ffff:ffff:ffff:ffff');
     * address.subnetMask; // 64
     */
    static fromAddressAndWildcardMask(address, wildcardMask) {
        const wildcard = new Address6(wildcardMask).bigInt();
        const allOnes = (BigInt(1) << BigInt(constants6.BITS)) - BigInt(1);
        const mask = wildcard ^ allOnes;
        const bits = common.prefixLengthFromMask(mask, constants6.BITS);
        return new Address6(`${address}/${bits}`);
    }
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
    static fromWildcard(input) {
        if (input.includes('%') || input.includes('/')) {
            throw new address_error_1.AddressError('Wildcard pattern must not include a zone or CIDR suffix');
        }
        const halves = input.split('::');
        if (halves.length > 2) {
            throw new address_error_1.AddressError("Wildcard pattern cannot contain more than one '::'");
        }
        let groups;
        if (halves.length === 2) {
            const left = halves[0] === '' ? [] : halves[0].split(':');
            const right = halves[1] === '' ? [] : halves[1].split(':');
            const remaining = constants6.GROUPS - left.length - right.length;
            if (remaining < 1) {
                throw new address_error_1.AddressError("Wildcard pattern with '::' has too many groups");
            }
            groups = [...left, ...new Array(remaining).fill('0'), ...right];
        }
        else {
            groups = input.split(':');
        }
        if (groups.length !== constants6.GROUPS) {
            throw new address_error_1.AddressError('Wildcard pattern must have 8 groups');
        }
        let firstWildcard = -1;
        for (let i = 0; i < groups.length; i++) {
            if (groups[i] === '*') {
                if (firstWildcard === -1) {
                    firstWildcard = i;
                }
            }
            else if (firstWildcard !== -1) {
                throw new address_error_1.AddressError('Wildcard `*` must only appear in trailing groups (e.g. `2001:db8:*:*:*:*:*:*`)');
            }
        }
        const trailing = firstWildcard === -1 ? 0 : groups.length - firstWildcard;
        const replaced = groups.map((g) => (g === '*' ? '0' : g));
        const subnetBits = constants6.BITS - trailing * 16;
        return new Address6(`${replaced.join(':')}/${subnetBits}`);
    }
    /**
     * Create an IPv6-mapped address given an IPv4 address
     * @param {string} address - An IPv4 address string
     * @returns {Address6}
     * @example
     * var address = Address6.fromAddress4('192.168.0.1');
     * address.correctForm(); // '::ffff:c0a8:1'
     * address.to4in6(); // '::ffff:192.168.0.1'
     */
    static fromAddress4(address) {
        const address4 = new ipv4_1.Address4(address);
        const mask6 = constants6.BITS - (constants4.BITS - address4.subnetMask);
        return new Address6(`::ffff:${address4.correctForm()}/${mask6}`);
    }
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
    static fromArpa(arpaFormAddress) {
        // remove an ending ".ip6.arpa", in any case and with or without the root
        // dot
        const nibbles = arpaFormAddress.replace(/(\.ip6\.arpa)?\.?$/i, '');
        if (!/^[0-9a-f](\.[0-9a-f]){0,31}$/i.test(nibbles)) {
            throw new address_error_1.AddressError("Invalid 'ip6.arpa' form.");
        }
        const reversed = nibbles.split('.').reverse();
        const subnetMask = reversed.length * 4;
        const hex = reversed.join('').padEnd(32, '0');
        const groups = [];
        for (let i = 0; i < constants6.GROUPS; i++) {
            groups.push(hex.slice(i * 4, (i + 1) * 4));
        }
        return new Address6(`${groups.join(':')}/${subnetMask}`);
    }
    /**
     * Return the Microsoft UNC transcription of the address
     * @returns {String} the Microsoft UNC transcription of the address
     */
    microsoftTranscription() {
        return `${this.correctForm().replace(/:/g, '-')}.ipv6-literal.net`;
    }
    /**
     * Return the first n bits of the address, defaulting to the subnet mask
     * @param {number} [mask=subnet] - the number of bits to mask
     * @returns {String} the first n bits of the address as a string
     */
    mask(mask = this.subnetMask) {
        return this.getBitsBase2(0, mask);
    }
    /**
     * Return the number of possible subnets of a given size in the address
     * @param {number} [subnetSize=128] - the subnet size
     * @returns {String}
     */
    // TODO: probably useful to have a numeric version of this too
    possibleSubnets(subnetSize = 128) {
        const availableBits = constants6.BITS - this.subnetMask;
        const subnetBits = Math.abs(subnetSize - constants6.BITS);
        const subnetPowers = availableBits - subnetBits;
        if (subnetPowers < 0) {
            return '0';
        }
        return addCommas((BigInt('2') ** BigInt(subnetPowers)).toString(10));
    }
    /**
     * Helper function getting start address.
     * @returns {bigint}
     */
    _startAddress() {
        return BigInt(`0b${this.mask() + '0'.repeat(constants6.BITS - this.subnetMask)}`);
    }
    /**
     * The first address in the range given by this address' subnet
     * Often referred to as the Network Address.
     * @returns {Address6}
     */
    startAddress() {
        return Address6.fromBigInt(this._startAddress());
    }
    /**
     * The first host address in the range given by this address's subnet ie
     * the first address after the Network Address
     * @returns {Address6}
     */
    startAddressExclusive() {
        const adjust = BigInt('1');
        return Address6.fromBigInt(this._startAddress() + adjust);
    }
    /**
     * Helper function getting end address.
     * @returns {bigint}
     */
    _endAddress() {
        return BigInt(`0b${this.mask() + '1'.repeat(constants6.BITS - this.subnetMask)}`);
    }
    /**
     * The last address in the range given by this address's subnet. IPv6 has
     * no broadcast address, so this is an ordinary assignable address (in a
     * 64-bit-interface-identifier subnet it falls inside the reserved
     * subnet-anycast block of [RFC 2526](https://datatracker.ietf.org/doc/html/rfc2526)).
     * @returns {Address6}
     */
    endAddress() {
        return Address6.fromBigInt(this._endAddress());
    }
    /**
     * The address one before {@link endAddress}. This is the IPv6 counterpart
     * of the IPv4 method that skips the broadcast address; IPv6 has no broadcast,
     * so it drops exactly one address and does not model the 128 reserved
     * subnet-anycast identifiers of [RFC 2526](https://datatracker.ietf.org/doc/html/rfc2526).
     * @returns {Address6}
     */
    endAddressExclusive() {
        const adjust = BigInt('1');
        return Address6.fromBigInt(this._endAddress() - adjust);
    }
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
    offset(n) {
        return Address6.fromBigInt(common.offsetBigInt(this.bigInt(), n, constants6.BITS, 'IPv6')).withSubnetMask(this.subnetMask);
    }
    /**
     * Returns the network that follows this address's network: the address after
     * {@link endAddress}, with the same subnet mask. Throws `AddressError` when
     * this network is the last one in the address space.
     * @returns {Address6}
     * @example
     * new Address6('2001:db8::/64').nextNetwork().networkForm(); // '2001:db8:0:1::/64'
     */
    nextNetwork() {
        return Address6.fromBigInt(common.offsetBigInt(this._endAddress(), 1, constants6.BITS, 'IPv6')).withSubnetMask(this.subnetMask);
    }
    withSubnetMask(subnetMask) {
        return new Address6(`${this.correctForm()}/${subnetMask}`);
    }
    /**
     * The hex form of the subnet mask, e.g. `ffff:ffff:ffff:ffff::` for a
     * `/64`. Returns an `Address6`; call `.correctForm()` for the string.
     * @returns {Address6}
     */
    subnetMaskAddress() {
        return Address6.fromBigInt(BigInt(`0b${'1'.repeat(this.subnetMask)}${'0'.repeat(constants6.BITS - this.subnetMask)}`));
    }
    /**
     * The Cisco-style wildcard mask, e.g. `::ffff:ffff:ffff:ffff` for a
     * `/64`. This is the bitwise inverse of `subnetMaskAddress()`. Returns
     * an `Address6`; call `.correctForm()` for the string.
     * @returns {Address6}
     */
    wildcardMask() {
        return Address6.fromBigInt(BigInt(`0b${'0'.repeat(this.subnetMask)}${'1'.repeat(constants6.BITS - this.subnetMask)}`));
    }
    /**
     * The network address in CIDR string form, e.g. `2001:db8::/32` for
     * `2001:db8::1/32`. For an address with no explicit subnet the prefix
     * is `/128`, e.g. `networkForm()` on `2001:db8::1` returns
     * `2001:db8::1/128`.
     * @returns {string}
     */
    networkForm() {
        return `${this.startAddress().correctForm()}/${this.subnetMask}`;
    }
    /**
     * Return the scope of the address. The 4-bit scope field
     * ([RFC 4291 §2.7](https://datatracker.ietf.org/doc/html/rfc4291#section-2.7))
     * is only defined for multicast addresses; for unicast addresses the scope
     * is derived from the address type per
     * [RFC 4007 §6](https://datatracker.ietf.org/doc/html/rfc4007#section-6).
     * @returns {String}
     */
    getScope() {
        const type = this.getType();
        if (type === 'Multicast' || type.startsWith('Multicast ')) {
            const scope = constants6.SCOPES[parseInt(this.getBits(12, 16).toString(10), 10)];
            return scope || 'Unknown';
        }
        // RFC 4291 §2.5.3: the loopback address is treated as having Link-Local
        // scope. (Multicast scope 1, "Interface-Local", is a different concept
        // used only for loopback transmission of multicast.)
        if (type === 'Link-local unicast' || type === 'Loopback') {
            return 'Link local';
        }
        // RFC 4007 §6: the unspecified address has no scope.
        if (type === 'Unspecified') {
            return 'Unknown';
        }
        return 'Global';
    }
    /**
     * Return the type of the address
     * @returns {String}
     */
    getType() {
        for (let i = 0; i < TYPE_SUBNETS.length; i++) {
            const entry = TYPE_SUBNETS[i];
            if (this.isHostInSubnet(entry[0])) {
                return entry[1];
            }
        }
        return 'Global unicast';
    }
    /**
     * Return the bits in the given range as a BigInt
     * @returns {bigint}
     */
    getBits(start, end) {
        return BigInt(`0b${this.getBitsBase2(start, end)}`);
    }
    /**
     * Return the bits in the given range as a base-2 string
     * @returns {String}
     */
    getBitsBase2(start, end) {
        return this.binaryZeroPad().slice(start, end);
    }
    /**
     * Return the bits in the given range as a base-16 string
     * @returns {String}
     */
    getBitsBase16(start, end) {
        const length = end - start;
        if (length % 4 !== 0) {
            throw new Error('Length of bits to retrieve must be divisible by four');
        }
        return this.getBits(start, end)
            .toString(16)
            .padStart(length / 4, '0');
    }
    /**
     * Return the bits that are set past the subnet mask length
     * @returns {String}
     */
    getBitsPastSubnet() {
        return this.getBitsBase2(this.subnetMask, constants6.BITS);
    }
    /**
     * Return the reversed ip6.arpa form of the address
     * @param {Object} options
     * @param {boolean} options.omitSuffix - omit the "ip6.arpa" suffix
     * @returns {String}
     */
    reverseForm(options) {
        if (!options) {
            options = {};
        }
        const characters = Math.floor(this.subnetMask / 4);
        const reversed = this.canonicalForm()
            .replace(/:/g, '')
            .split('')
            .slice(0, characters)
            .reverse()
            .join('.');
        if (characters > 0) {
            if (options.omitSuffix) {
                return reversed;
            }
            return `${reversed}.ip6.arpa.`;
        }
        if (options.omitSuffix) {
            return '';
        }
        return 'ip6.arpa.';
    }
    /**
     * Returns the address in correct form, per
     * [RFC 5952](https://datatracker.ietf.org/doc/html/rfc5952): leading zeros
     * stripped, the longest run of zero groups collapsed to `::`, and hex digits
     * lowercased (e.g. `2001:db8::1`). This is the recommended form for display.
     */
    correctForm() {
        let i;
        let groups = [];
        let zeroCounter = 0;
        const zeroes = [];
        for (i = 0; i < this.parsedAddress.length; i++) {
            const value = parseInt(this.parsedAddress[i], 16);
            if (value === 0) {
                zeroCounter++;
            }
            if (value !== 0 && zeroCounter > 0) {
                if (zeroCounter > 1) {
                    zeroes.push([i - zeroCounter, i - 1]);
                }
                zeroCounter = 0;
            }
        }
        // Do we end with a string of zeroes?
        if (zeroCounter > 1) {
            zeroes.push([this.parsedAddress.length - zeroCounter, this.parsedAddress.length - 1]);
        }
        const zeroLengths = zeroes.map((n) => n[1] - n[0] + 1);
        if (zeroes.length > 0) {
            const index = zeroLengths.indexOf(Math.max(...zeroLengths));
            groups = compact(this.parsedAddress, zeroes[index]);
        }
        else {
            groups = this.parsedAddress;
        }
        for (i = 0; i < groups.length; i++) {
            if (groups[i] !== 'compact') {
                groups[i] = parseInt(groups[i], 16).toString(16);
            }
        }
        let correct = groups.join(':');
        correct = correct.replace(/^compact$/, '::');
        correct = correct.replace(/(^compact)|(compact$)/, ':');
        correct = correct.replace(/compact/, '');
        return correct;
    }
    /**
     * Return a zero-padded base-2 string representation of the address
     * @returns {String}
     * @example
     * var address = new Address6('2001:4860:4001:803::1011');
     * address.binaryZeroPad();
     * // '0010000000000001010010000110000001000000000000010000100000000011
     * //  0000000000000000000000000000000000000000000000000001000000010001'
     */
    binaryZeroPad() {
        if (this._binaryZeroPad === undefined) {
            this._binaryZeroPad = this.bigInt().toString(2).padStart(constants6.BITS, '0');
        }
        return this._binaryZeroPad;
    }
    /**
     * Parses a v4-in-v6 string (e.g. `::ffff:192.168.0.1`) by extracting the
     * trailing IPv4 address into `this.address4` / `this.parsedAddress4` and
     * returning the address with the v4 portion converted to two v6 groups.
     * Used internally by `parse()`.
     */
    // TODO: Improve the semantics of this helper function
    parse4in6(address) {
        if (address.indexOf('.') === -1) {
            return address;
        }
        const groups = address.split(':');
        const lastGroup = groups.slice(-1)[0];
        // RE_ADDRESS rejects octets with a leading zero, so a dotted-quad tail is
        // matched permissively first: that way this notation still gets its own
        // message with the offending octet highlighted, rather than falling
        // through as an unrecognized group.
        const v4Octets = lastGroup.split('.');
        if (v4Octets.length === constants4.GROUPS &&
            v4Octets.every((octet) => /^\d{1,3}$/.test(octet))) {
            if (v4Octets.some((octet) => /^0\d/.test(octet))) {
                // The prefix groups haven't been through the bad-character check
                // yet, so escape them before including in the error HTML.
                const highlighted = v4Octets.map(spanLeadingZeroes4).join('.');
                const prefix = groups.slice(0, -1).map(helpers.escapeHtml).join(':');
                const separator = groups.length > 1 ? ':' : '';
                throw new address_error_1.AddressError("IPv4 addresses can't have leading zeroes.", `${prefix}${separator}${highlighted}`);
            }
        }
        const address4 = lastGroup.match(constants4.RE_ADDRESS);
        if (address4) {
            this.parsedAddress4 = address4[0];
            const v4Suffix = this.subnetMask >= 96 ? `/${this.subnetMask - 96}` : '';
            this.address4 = new ipv4_1.Address4(`${this.parsedAddress4}${v4Suffix}`);
            this.v4 = true;
            groups[groups.length - 1] = this.address4.toGroup6();
            address = groups.join(':');
        }
        return address;
    }
    /**
     * Parses an IPv6 address string into its 8 hexadecimal groups (expanding
     * any `::` elision and any trailing v4-in-v6 portion) and stores the result
     * on `this.parsedAddress`. Called automatically by the constructor; you
     * typically don't need to call it directly. Throws `AddressError` if the
     * input is malformed.
     */
    // TODO: Make private?
    parse(address) {
        address = this.parse4in6(address);
        const badCharacters = address.match(constants6.RE_BAD_CHARACTERS);
        if (badCharacters) {
            throw new address_error_1.AddressError(`Bad character${badCharacters.length > 1 ? 's' : ''} detected in address: ${badCharacters.join('')}`, address.replace(constants6.RE_BAD_CHARACTERS, '<span class="parse-error">$1</span>'));
        }
        const badAddress = address.match(constants6.RE_BAD_ADDRESS);
        if (badAddress) {
            throw new address_error_1.AddressError(`Address failed regex: ${badAddress.join('')}`, address.replace(constants6.RE_BAD_ADDRESS, '<span class="parse-error">$1</span>'));
        }
        let groups = [];
        const halves = address.split('::');
        if (halves.length === 2) {
            let first = halves[0].split(':');
            let last = halves[1].split(':');
            if (first.length === 1 && first[0] === '') {
                first = [];
            }
            if (last.length === 1 && last[0] === '') {
                last = [];
            }
            const remaining = this.groups - (first.length + last.length);
            if (!remaining) {
                throw new address_error_1.AddressError('Error parsing groups');
            }
            this.elidedGroups = remaining;
            this.elisionBegin = first.length;
            this.elisionEnd = first.length + this.elidedGroups;
            groups = groups.concat(first);
            for (let i = 0; i < remaining; i++) {
                groups.push('0');
            }
            groups = groups.concat(last);
        }
        else if (halves.length === 1) {
            groups = address.split(':');
            this.elidedGroups = 0;
        }
        else {
            throw new address_error_1.AddressError('Too many :: groups found');
        }
        groups = groups.map((group) => parseInt(group, 16).toString(16));
        if (groups.length !== this.groups) {
            throw new address_error_1.AddressError('Incorrect number of groups found');
        }
        return groups;
    }
    /**
     * Returns the canonical (fully expanded) form of the address: all 8 groups,
     * each padded to 4 hex digits, with no `::` collapsing
     * (e.g. `2001:0db8:0000:0000:0000:0000:0000:0001`). Useful for sorting and
     * byte-exact comparison.
     */
    canonicalForm() {
        return this.parsedAddress.map(paddedHex).join(':');
    }
    /**
     * Return the decimal form of the address
     * @returns {String}
     */
    decimal() {
        return this.parsedAddress.map((n) => parseInt(n, 16).toString(10).padStart(5, '0')).join(':');
    }
    /**
     * Return the address as a BigInt
     * @returns {bigint}
     */
    bigInt() {
        return BigInt(`0x${this.parsedAddress.map(paddedHex).join('')}`);
    }
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
    to4() {
        const binary = this.binaryZeroPad().split('');
        const hex = BigInt(`0b${binary.slice(96, 128).join('')}`)
            .toString(16)
            .padStart(8, '0');
        if (this.subnetMask >= 96) {
            const v4Mask = this.subnetMask - 96;
            const groups = [];
            for (let i = 0; i < 8; i += 2) {
                groups.push(parseInt(hex.slice(i, i + 2), 16));
            }
            return new ipv4_1.Address4(`${groups.join('.')}/${v4Mask}`);
        }
        return ipv4_1.Address4.fromHex(hex);
    }
    /**
     * Return the v4-in-v6 form of the address
     * @returns {String}
     */
    to4in6() {
        const address4 = this.to4();
        const address6 = new Address6(this.parsedAddress.slice(0, 6).join(':'), 6);
        const correct = address6.correctForm();
        let infix = '';
        if (!/:$/.test(correct)) {
            infix = ':';
        }
        return correct + infix + address4.correctForm();
    }
    /**
     * Decodes the Teredo tunneling fields embedded in this address. Returns the
     * Teredo prefix, server IPv4, client IPv4, raw flag bits, cone-NAT flag,
     * UDP port, and Microsoft-format flag breakdown (reserved, universal/local,
     * group/individual, nonce). Only meaningful for addresses in `2001::/32`.
     */
    inspectTeredo() {
        /*
        - Bits 0 to 31 are set to the Teredo prefix (normally 2001:0000::/32).
        - Bits 32 to 63 embed the primary IPv4 address of the Teredo server that
          is used.
        - Bits 64 to 79 can be used to define some flags. Currently only the
          higher order bit is used; it is set to 1 if the Teredo client is
          located behind a cone NAT, 0 otherwise. For Microsoft's Windows Vista
          and Windows Server 2008 implementations, more bits are used. In those
          implementations, the format for these 16 bits is "CRAAAAUG AAAAAAAA",
          where "C" remains the "Cone" flag. The "R" bit is reserved for future
          use. The "U" bit is for the Universal/Local flag (set to 0). The "G" bit
          is Individual/Group flag (set to 0). The A bits are set to a 12-bit
          randomly generated number chosen by the Teredo client to introduce
          additional protection for the Teredo node against IPv6-based scanning
          attacks.
        - Bits 80 to 95 contains the obfuscated UDP port number. This is the
          port number that is mapped by the NAT to the Teredo client with all
          bits inverted.
        - Bits 96 to 127 contains the obfuscated IPv4 address. This is the
          public IPv4 address of the NAT with all bits inverted.
        */
        const prefix = this.getBitsBase16(0, 32);
        const bitsForUdpPort = this.getBits(80, 96);
        const udpPort = (bitsForUdpPort ^ BigInt('0xffff')).toString();
        const server4 = ipv4_1.Address4.fromHex(this.getBitsBase16(32, 64));
        const bitsForClient4 = this.getBits(96, 128);
        const client4 = ipv4_1.Address4.fromHex((bitsForClient4 ^ BigInt('0xffffffff')).toString(16).padStart(8, '0'));
        const flagsBase2 = this.getBitsBase2(64, 80);
        const coneNat = (0, common_1.testBit)(flagsBase2, 15);
        const reserved = (0, common_1.testBit)(flagsBase2, 14);
        const groupIndividual = (0, common_1.testBit)(flagsBase2, 8);
        const universalLocal = (0, common_1.testBit)(flagsBase2, 9);
        const nonce = BigInt(`0b${flagsBase2.slice(2, 6) + flagsBase2.slice(8, 16)}`).toString(10);
        return {
            prefix: `${prefix.slice(0, 4)}:${prefix.slice(4, 8)}`,
            server4: server4.address,
            client4: client4.address,
            flags: flagsBase2,
            coneNat,
            microsoft: {
                reserved,
                universalLocal,
                groupIndividual,
                nonce,
            },
            udpPort,
        };
    }
    /**
     * Decodes the 6to4 tunneling fields embedded in this address. Returns the
     * 6to4 prefix and the embedded IPv4 gateway address. Only meaningful for
     * addresses in `2002::/16`.
     */
    inspect6to4() {
        /*
        - Bits 0 to 15 are set to the 6to4 prefix (2002::/16).
        - Bits 16 to 48 embed the IPv4 address of the 6to4 gateway that is used.
        */
        const prefix = this.getBitsBase16(0, 16);
        const gateway = ipv4_1.Address4.fromHex(this.getBitsBase16(16, 48));
        return {
            prefix: prefix.slice(0, 4),
            gateway: gateway.address,
        };
    }
    /**
     * Return a v6 6to4 address from a v6 v4inv6 address
     * @returns {Address6}
     */
    to6to4() {
        if (!this.is4()) {
            return null;
        }
        const addr6to4 = [
            '2002',
            this.getBitsBase16(96, 112),
            this.getBitsBase16(112, 128),
            '',
            '/16',
        ].join(':');
        return new Address6(addr6to4);
    }
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
    static fromAddress4Nat64(address, prefix = '64:ff9b::/96') {
        const v4 = new ipv4_1.Address4(address);
        const prefix6 = new Address6(prefix);
        const pl = prefix6.subnetMask;
        if (pl !== 32 && pl !== 40 && pl !== 48 && pl !== 56 && pl !== 64 && pl !== 96) {
            throw new address_error_1.AddressError('NAT64 prefix length must be 32, 40, 48, 56, 64, or 96');
        }
        const prefixBits = prefix6.binaryZeroPad();
        const v4Bits = v4.binaryZeroPad();
        let bits;
        if (pl === 96) {
            bits = prefixBits.slice(0, 96) + v4Bits;
        }
        else {
            const beforeU = 64 - pl;
            bits = [
                prefixBits.slice(0, pl),
                v4Bits.slice(0, beforeU),
                // Bits 64 to 71 are the reserved u octet and are always zero.
                '00000000',
                v4Bits.slice(beforeU),
                '0'.repeat(128 - 72 - (32 - beforeU)),
            ].join('');
        }
        const hex = BigInt(`0b${bits}`).toString(16).padStart(32, '0');
        const groups = [];
        for (let i = 0; i < 8; i++) {
            groups.push(hex.slice(i * 4, (i + 1) * 4));
        }
        return new Address6(groups.join(':'));
    }
    /**
     * Extract the embedded IPv4 address from a NAT64 IPv6 address using the
     * encoding defined by [RFC 6052](https://datatracker.ietf.org/doc/html/rfc6052).
     * The default prefix is the well-known prefix `64:ff9b::/96`. Returns
     * `null` if this address is not contained within the given prefix.
     * @example
     * new Address6('64:ff9b::c000:221').toAddress4Nat64()!.correctForm(); // '192.0.2.33'
     */
    toAddress4Nat64(prefix = '64:ff9b::/96') {
        const prefix6 = new Address6(prefix);
        const pl = prefix6.subnetMask;
        if (pl !== 32 && pl !== 40 && pl !== 48 && pl !== 56 && pl !== 64 && pl !== 96) {
            throw new address_error_1.AddressError('NAT64 prefix length must be 32, 40, 48, 56, 64, or 96');
        }
        if (!this.isHostInSubnet(prefix6)) {
            return null;
        }
        const bits = this.binaryZeroPad();
        let v4Bits;
        if (pl === 96) {
            v4Bits = bits.slice(96, 128);
        }
        else {
            const beforeU = 64 - pl;
            v4Bits = bits.slice(pl, pl + beforeU) + bits.slice(72, 72 + (32 - beforeU));
        }
        const octets = [];
        for (let i = 0; i < 4; i++) {
            octets.push(parseInt(v4Bits.slice(i * 8, (i + 1) * 8), 2).toString());
        }
        return new ipv4_1.Address4(octets.join('.'));
    }
    /**
     * Return a byte array.
     *
     * To get a Node.js `Buffer`, wrap the result: `Buffer.from(address.toByteArray())`.
     * @returns {Array}
     */
    toByteArray() {
        const value = this.bigInt()
            .toString(16)
            .padStart(constants6.BITS / 4, '0');
        const bytes = [];
        for (let i = 0, length = value.length; i < length; i += 2) {
            bytes.push(parseInt(value.substring(i, i + 2), 16));
        }
        return bytes;
    }
    /**
     * Return an unsigned byte array.
     *
     * To get a Node.js `Buffer`, wrap the result: `Buffer.from(address.toUnsignedByteArray())`.
     * @returns {Array}
     */
    toUnsignedByteArray() {
        // toByteArray() emits 0 to 255, so unsigning it is an identity mapping and
        // the two methods return equal arrays. 11.0.0 keeps one of them and makes
        // this a deprecated alias; test/common-test.ts fails at that version.
        return this.toByteArray().map(unsignByte);
    }
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
    static fromByteArray(bytes) {
        // Address4.fromByteArray takes unsigned bytes only. 11.0.0 aligns this
        // method with it, at which point the -128 floor here, unsignByte, and the
        // mapping below all go; test/common-test.ts fails at that version.
        common.assertByteArray(bytes, 16, 'IPv6', -128);
        return this.fromUnsignedByteArray(bytes.map(unsignByte));
    }
    /**
     * Convert an unsigned byte array to an Address6 object.
     *
     * Throws `AddressError` unless given exactly 16 integers from 0 to 255.
     *
     * To convert from a Node.js `Buffer`, spread it: `Address6.fromUnsignedByteArray([...buf])`.
     * @returns {Address6}
     */
    static fromUnsignedByteArray(bytes) {
        common.assertByteArray(bytes, 16, 'IPv6', 0);
        const BYTE_MAX = BigInt('256');
        let result = BigInt('0');
        let multiplier = BigInt('1');
        for (let i = bytes.length - 1; i >= 0; i--) {
            result += multiplier * BigInt(bytes[i].toString(10));
            multiplier *= BYTE_MAX;
        }
        return Address6.fromBigInt(result);
    }
    /**
     * Returns true if the address is in the canonical form, false otherwise
     * @returns {boolean}
     */
    isCanonical() {
        return this.addressMinusSuffix === this.canonicalForm();
    }
    /**
     * Returns true if the address is a link-local unicast address in `fe80::/10`
     * ([RFC 4291 §2.4](https://datatracker.ietf.org/doc/html/rfc4291#section-2.4))
     * or an IPv4-mapped / NAT64 address whose embedded IPv4 address is link-local
     * (`169.254.0.0/16`, e.g. `::ffff:169.254.169.254`), false otherwise.
     * @returns {boolean}
     */
    isLinkLocal() {
        const embedded = this.embeddedIPv4();
        if (embedded) {
            return embedded.isLinkLocal();
        }
        return this.isHostInSubnet(LINK_LOCAL_SUBNET);
    }
    /**
     * Returns true if the address is a multicast address, false otherwise
     * @returns {boolean}
     */
    isMulticast() {
        const embedded = this.embeddedIPv4();
        if (embedded) {
            return embedded.isMulticast();
        }
        const type = this.getType();
        return type === 'Multicast' || type.startsWith('Multicast ');
    }
    /**
     * Returns true if the address was written in v4-in-v6 dotted-quad notation
     * (e.g. `::ffff:127.0.0.1`), false otherwise. This is a notation-level flag
     * and does not reflect whether the address bits lie in the IPv4-mapped
     * (`::ffff:0:0/96`) subnet — for that, see {@link isMapped4}.
     * @returns {boolean}
     */
    is4() {
        return this.v4;
    }
    /**
     * Returns true if the address is an IPv4-mapped IPv6 address in
     * `::ffff:0:0/96` ([RFC 4291 §2.5.5.2](https://datatracker.ietf.org/doc/html/rfc4291#section-2.5.5.2)),
     * false otherwise. Unlike {@link is4}, this checks the underlying address
     * bits rather than the textual notation, so `::ffff:127.0.0.1` and
     * `::ffff:7f00:1` both return true.
     * @returns {boolean}
     */
    isMapped4() {
        return this.isHostInSubnet(IPV4_MAPPED_SUBNET);
    }
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
    embeddedIPv4() {
        if (this.isMapped4() || this.isHostInSubnet(NAT64_WELL_KNOWN_SUBNET)) {
            return this.to4();
        }
        return null;
    }
    /**
     * Returns true if the address is a Teredo address, false otherwise
     * @returns {boolean}
     */
    isTeredo() {
        return this.isHostInSubnet(TEREDO_SUBNET);
    }
    /**
     * Returns true if the address is a 6to4 address, false otherwise
     * @returns {boolean}
     */
    is6to4() {
        return this.isHostInSubnet(SIX_TO_FOUR_SUBNET);
    }
    /**
     * Returns true if the address is a loopback address, false otherwise
     * @returns {boolean}
     */
    isLoopback() {
        const embedded = this.embeddedIPv4();
        if (embedded) {
            return embedded.isLoopback();
        }
        return this.getType() === 'Loopback';
    }
    /**
     * Returns true if the address is a Unique Local Address in `fc00::/7` ([RFC 4193](https://datatracker.ietf.org/doc/html/rfc4193)). ULAs are the IPv6 equivalent of IPv4 [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918) private addresses.
     * @returns {boolean}
     */
    isULA() {
        return this.isHostInSubnet(ULA_SUBNET);
    }
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
    isPrivate() {
        const embedded = this.embeddedIPv4();
        if (embedded) {
            return embedded.isPrivate();
        }
        return this.isULA() || this.isHostInSubnet(NAT64_LOCAL_USE_SUBNET);
    }
    /**
     * Returns true if the address is an IPv4-mapped / NAT64 address whose embedded
     * IPv4 address is in the carrier-grade NAT range `100.64.0.0/10`
     * ([RFC 6598](https://datatracker.ietf.org/doc/html/rfc6598)), false
     * otherwise. There is no native IPv6 CGNAT range, so this only ever returns
     * true for an embedded IPv4 address (e.g. `::ffff:100.64.0.1`).
     * @returns {boolean}
     */
    isCGNAT() {
        const embedded = this.embeddedIPv4();
        if (embedded) {
            return embedded.isCGNAT();
        }
        return false;
    }
    /**
     * Returns true if the address is an IPv4-mapped / NAT64 address whose embedded
     * IPv4 address is the limited broadcast address `255.255.255.255`
     * ([RFC 919](https://datatracker.ietf.org/doc/html/rfc919)), false otherwise.
     * There is no IPv6 broadcast, so this only ever returns true for an embedded
     * IPv4 address (e.g. `::ffff:255.255.255.255`).
     * @returns {boolean}
     */
    isBroadcast() {
        const embedded = this.embeddedIPv4();
        if (embedded) {
            return embedded.isBroadcast();
        }
        return false;
    }
    /**
     * Returns true if the address is the unspecified address `::`.
     * @returns {boolean}
     */
    isUnspecified() {
        const embedded = this.embeddedIPv4();
        if (embedded) {
            return embedded.isUnspecified();
        }
        return this.getType() === 'Unspecified';
    }
    /**
     * Returns true if the address is in the documentation prefix `2001:db8::/32` ([RFC 3849](https://datatracker.ietf.org/doc/html/rfc3849)).
     * @returns {boolean}
     */
    isDocumentation() {
        return DOCUMENTATION_SUBNETS.some((subnet) => this.isHostInSubnet(subnet));
    }
    /**
     * Returns true if the address is in the benchmarking range `2001:2::/48`
     * ([RFC 5180](https://datatracker.ietf.org/doc/html/rfc5180)) or is an
     * IPv4-mapped / NAT64 address whose embedded IPv4 address is in
     * `198.18.0.0/15`, false otherwise.
     * @returns {boolean}
     */
    isBenchmarking() {
        const embedded = this.embeddedIPv4();
        if (embedded) {
            return embedded.isBenchmarking();
        }
        return this.isHostInSubnet(BENCHMARKING_SUBNET);
    }
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
    isGlobal() {
        const embedded = this.embeddedIPv4();
        if (embedded) {
            return embedded.isGlobal();
        }
        return (this.isHostInSubnet(GLOBAL_UNICAST_SUBNET) &&
            common.isGloballyReachable.call(this, SPECIAL_PURPOSE_V6));
    }
    // #endregion
    // #region HTML
    /**
     * Returns the address as an HTTP URL with the host bracketed, e.g.
     * `http://[2001:db8::1]/`. If `optionalPort` is provided it is appended,
     * e.g. `http://[2001:db8::1]:8080/`.
     */
    href(optionalPort) {
        if (optionalPort === undefined) {
            optionalPort = '';
        }
        else {
            optionalPort = `:${optionalPort}`;
        }
        return `http://[${this.correctForm()}]${optionalPort}/`;
    }
    /**
     * Returns an HTML `<a>` element whose `href` encodes the address in a URL
     * hash fragment (default prefix `/#address=`). Useful for linking between
     * pages of an address-inspector UI.
     * @param options.className - CSS class for the rendered `<a>` element
     * @param options.prefix - hash prefix prepended to the address (default `/#address=`)
     * @param options.v4 - when true, render the address in v4-in-v6 form
     */
    link(options) {
        if (!options) {
            options = {};
        }
        if (options.className === undefined) {
            options.className = '';
        }
        if (options.prefix === undefined) {
            options.prefix = '/#address=';
        }
        if (options.v4 === undefined) {
            options.v4 = false;
        }
        let formFunction = this.correctForm;
        if (options.v4) {
            formFunction = this.to4in6;
        }
        const form = formFunction.call(this);
        const safeHref = helpers.escapeHtml(`${options.prefix}${form}`);
        const safeForm = helpers.escapeHtml(form);
        if (options.className) {
            const safeClass = helpers.escapeHtml(options.className);
            return `<a href="${safeHref}" class="${safeClass}">${safeForm}</a>`;
        }
        return `<a href="${safeHref}">${safeForm}</a>`;
    }
    /**
     * Groups an address.
     *
     * Returns an HTML fragment: each group is wrapped in a `<span>` carrying
     * the group classes an address-inspector UI hovers on. The address content
     * is HTML-escaped; anything you concatenate around it is your
     * responsibility.
     * @returns {String}
     */
    group() {
        if (this.elidedGroups === 0) {
            // The simple case
            return helpers.simpleGroup(this.addressMinusSuffix).join(':');
        }
        assert(typeof this.elidedGroups === 'number');
        assert(typeof this.elisionBegin === 'number');
        // The elided case
        const output = [];
        const [left, right] = this.addressMinusSuffix.split('::');
        if (left.length) {
            output.push(...helpers.simpleGroup(left));
        }
        else {
            output.push('');
        }
        const classes = ['hover-group'];
        for (let i = this.elisionBegin; i < this.elisionBegin + this.elidedGroups; i++) {
            classes.push(`group-${i}`);
        }
        output.push(`<span class="${classes.join(' ')}"></span>`);
        if (right.length) {
            output.push(...helpers.simpleGroup(right, this.elisionEnd));
        }
        else {
            output.push('');
        }
        if (this.is4()) {
            assert(this.address4 instanceof ipv4_1.Address4);
            output.pop();
            output.push(this.address4.groupForV6());
        }
        return output.join(':');
    }
    // #endregion
    // #region Regular expressions
    /**
     * Generate a regular expression string that can be used to find or validate
     * all variations of this address
     * @param {boolean} substringSearch
     * @returns {string}
     */
    regularExpressionString(substringSearch = false) {
        let output = [];
        // TODO: revisit why this is necessary
        const address6 = new Address6(this.correctForm());
        if (address6.elidedGroups === 0) {
            // The simple case
            output.push((0, regular_expressions_1.simpleRegularExpression)(address6.parsedAddress));
        }
        else if (address6.elidedGroups === constants6.GROUPS) {
            // A completely elided address
            output.push((0, regular_expressions_1.possibleElisions)(constants6.GROUPS));
        }
        else {
            // A partially elided address
            const halves = address6.address.split('::');
            if (halves[0].length) {
                output.push((0, regular_expressions_1.simpleRegularExpression)(halves[0].split(':')));
            }
            assert(typeof address6.elidedGroups === 'number');
            output.push((0, regular_expressions_1.possibleElisions)(address6.elidedGroups, halves[0].length !== 0, halves[1].length !== 0));
            if (halves[1].length) {
                output.push((0, regular_expressions_1.simpleRegularExpression)(halves[1].split(':')));
            }
            output = [output.join(':')];
        }
        if (!substringSearch) {
            output = [
                '(?=^|',
                regular_expressions_1.ADDRESS_BOUNDARY,
                '|[^\\w\\:])(',
                ...output,
                ')(?=[^\\w\\:]|',
                regular_expressions_1.ADDRESS_BOUNDARY,
                '|$)',
            ];
        }
        return output.join('');
    }
    /**
     * Generate a regular expression that can be used to find or validate all
     * variations of this address.
     * @param {boolean} substringSearch
     * @returns {RegExp}
     */
    regularExpression(substringSearch = false) {
        return new RegExp(this.regularExpressionString(substringSearch), 'i');
    }
}
exports.Address6 = Address6;
const TYPE_SUBNETS = Object.keys(constants6.TYPES).map((subnet) => [
    new Address6(subnet),
    constants6.TYPES[subnet],
]);
const TEREDO_SUBNET = new Address6('2001::/32');
const SIX_TO_FOUR_SUBNET = new Address6('2002::/16');
const ULA_SUBNET = new Address6('fc00::/7');
const LINK_LOCAL_SUBNET = new Address6('fe80::/10');
const DOCUMENTATION_SUBNETS = [new Address6('2001:db8::/32'), new Address6('3fff::/20')];
const BENCHMARKING_SUBNET = new Address6('2001:2::/48');
const GLOBAL_UNICAST_SUBNET = new Address6('2000::/3');
const SPECIAL_PURPOSE_V6 = constants6.SPECIAL_PURPOSE.map(([cidr, , reachable]) => ({
    subnet: new Address6(cidr),
    reachable,
}));
const IPV4_MAPPED_SUBNET = new Address6('::ffff:0:0/96');
const NAT64_WELL_KNOWN_SUBNET = new Address6('64:ff9b::/96');
const NAT64_LOCAL_USE_SUBNET = new Address6('64:ff9b:1::/48');
//# sourceMappingURL=ipv6.js.map