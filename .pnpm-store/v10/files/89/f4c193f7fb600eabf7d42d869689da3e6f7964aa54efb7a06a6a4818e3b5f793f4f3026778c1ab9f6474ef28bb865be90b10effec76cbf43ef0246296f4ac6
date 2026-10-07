[![CI](https://github.com/beaugunderson/ip-address/actions/workflows/ci.yml/badge.svg)](https://github.com/beaugunderson/ip-address/actions/workflows/ci.yml)
[![codecov]](https://codecov.io/github/beaugunderson/ip-address?branch=main)
[![downloads]](https://www.npmjs.com/package/ip-address)
[![npm]](https://www.npmjs.com/package/ip-address)

[codecov]: https://codecov.io/github/beaugunderson/ip-address/coverage.svg?branch=main
[downloads]: https://img.shields.io/npm/dm/ip-address.svg
[npm]: https://img.shields.io/npm/v/ip-address.svg

## ip-address

`ip-address` is a library for validating and manipulating IPv4 and IPv6 addresses in JavaScript and TypeScript.

### Install

```sh
npm install ip-address
```

### Examples

<!-- prettier-ignore -->
```ts
import { Address4, Address6 } from 'ip-address';

// Validation
Address4.isValid('192.168.1.1');           // true
Address6.isValid('2001:db8::1');           // true
Address6.isValid('not an address');        // false

// Parsing (throws AddressError on invalid input)
const v4 = new Address4('192.168.1.1/24');
const v6 = new Address6('2001:db8::1/64');

// Subnet membership
const host = new Address4('192.168.1.42');
const network = new Address4('192.168.1.0/24');
host.isInSubnet(network);                  // true

// Subnet range
network.startAddress().correctForm();      // '192.168.1.0'
network.endAddress().correctForm();        // '192.168.1.255'

// Strict network-address check (host bits must be zero).
// isValid() accepts CIDRs with host bits set — '192.168.1.5/24' is a valid
// host-with-subnet, but it isn't a network address.
const cidr = new Address4('192.168.1.5/24');
Address4.isValid('192.168.1.5/24');                                // true
cidr.correctForm() === cidr.startAddress().correctForm();          // false

// Address properties
const link = new Address6('fe80::1');
link.isLinkLocal();                        // true
link.isMulticast();                        // false
link.isLoopback();                         // false

new Address4('192.168.1.1').isPrivate();   // true (RFC 1918)
new Address6('fc00::1').isULA();           // true (RFC 4193)

// Numeric and byte representations
v4.bigInt();                               // 3232235777n
v4.toArray();                              // [192, 168, 1, 1]
v6.canonicalForm();                        // '2001:0db8:0000:0000:0000:0000:0000:0001'

// Embedded IPv4 + Teredo
const teredo = new Address6('2001:0:ce49:7601:e866:efff:62c3:fffe');
teredo.inspectTeredo().client4;            // '157.60.0.1'

// Parse host + port from a URL
Address6.fromURL('http://[2001:db8::1]:8080/').port;  // 8080
```

### Features

- Written in TypeScript with full type definitions; usable from CommonJS and ESM
- Zero runtime dependencies
- Parses dotted-quad IPv4 and [RFC 4291](https://datatracker.ietf.org/doc/html/rfc4291) IPv6 notation, including subnets and zones. The `inet_aton` forms (`2130706433`, `0x7f000001`, `127.1`) and leading-zero octets are rejected by design — see [SECURITY.md](./SECURITY.md#classifiers-are-not-an-ssrf-defense)
- Parses IPv6 hosts (and ports) from URLs via `Address6.fromURL(url)`
- Subnet membership checks (`isInSubnet`) and range queries (`startAddress` / `endAddress`)
- Special-property checks: private (RFC 1918) / ULA (RFC 4193), loopback, link-local, multicast, broadcast, unspecified, CGNAT, documentation, Teredo, 6to4, v4-in-v6
- Decodes [Teredo](http://en.wikipedia.org/wiki/Teredo_tunneling#IPv6_addressing) and 6to4 tunneling information
- Conversions: canonical/correct form, hex, binary, decimal, byte arrays, BigInt, `in-addr.arpa` / `ip6.arpa`
- Runs in Node.js and the browser
- Thousands of test cases

### Terminology

A few terms used throughout the API can be confusing if you haven't worked deeply with IPv6 before:

- **Correct form** — the shortest valid representation, per [RFC 5952](https://datatracker.ietf.org/doc/html/rfc5952): leading zeros stripped, the longest run of zero groups collapsed to `::`, and hex digits lowercased (e.g. `2001:db8::1`). This is what most software displays.
- **Canonical form** — the fully expanded representation: all 8 groups, each padded to 4 hex digits, no `::` collapsing (e.g. `2001:0db8:0000:0000:0000:0000:0000:0001`). Useful for sorting and byte-exact comparison.
- **Subnet** — the network portion of an address expressed as a CIDR prefix length (e.g. `/24` for IPv4, `/64` for IPv6). `startAddress()` / `endAddress()` return the bounds of the subnet's range.
- **Zone** — the IPv6 scope identifier appended after `%`, used to disambiguate link-local addresses across interfaces (e.g. `fe80::1%eth0`).
- **v4-in-v6** — mixed notation that embeds an IPv4 address as the last 32 bits of an IPv6 address, e.g. `::ffff:192.168.0.1`. Used for IPv4-mapped IPv6 addresses.
- **Teredo** — a tunneling protocol that encodes an IPv4 endpoint, port, and flags inside a `2001::/32` IPv6 address. `inspectTeredo()` decodes those fields.
- **6to4** — a tunneling protocol that embeds a full 32-bit IPv4 address in bits 16–47 of a `2002::/16` IPv6 address, i.e. the second and third groups (`192.0.2.4` becomes `2002:c000:204::`). `inspect6to4()` decodes the embedded v4 address.

### API

<!-- API:START -->

<details>
<summary><a id="address4"></a><strong>Address4</strong> — Represents an IPv4 address</summary>

**Constructor**

- `new Address4(address: string): Address4`

**Static methods**

- `static isValid(address: string): boolean` — Returns true if the given string is a valid IPv4 address (with optional CIDR subnet), false otherwise. Host bits in the subnet portion are allowed (e.g. `192.168.1.5/24` is valid); for strict network-address validation compare `correctForm()` to `startAddress().correctForm()`, or use `networkForm()`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L62)
- `static fromAddressAndMask(address: string, mask: string): Address4` — Construct an `Address4` from an address and a dotted-decimal subnet mask given as separate strings (e.g. as returned by Node's `os.networkInterfaces()`). Throws `AddressError` if the mask is non-contiguous (e.g. `255.0.255.0`). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L119)
- `static fromAddressAndWildcardMask(address: string, wildcardMask: string): Address4` — Construct an `Address4` from an address and a Cisco-style wildcard mask given as separate strings (e.g. `0.0.0.255` for a `/24`). The wildcard mask is the bitwise inverse of the subnet mask. Throws `AddressError` if the mask is non-contiguous (e.g. `0.255.0.255`). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L133)
- `static fromWildcard(input: string): Address4` — Construct an `Address4` from a wildcard pattern with trailing `*` octets. The number of trailing wildcards determines the prefix length: each `*` represents 8 bits. Only trailing whole-octet wildcards are supported. Partial-octet wildcards (e.g. `192.168.0.1*`) and interior wildcards (e.g. `192.*.0.1`) throw `AddressError`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L154)
- `static fromHex(hex: string): Address4` — Converts a hex string to an IPv4 address object. Accepts 8 hex digits with optional `:` separators (e.g. `'7f000001'` or `'7f:00:00:01'`). Throws `AddressError` for any other length or for non-hex characters. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L189)
- `static fromInteger(integer: number): Address4` — Converts an integer into a IPv4 address object. The integer must be a non-negative safe integer in the range `[0, 2**32 - 1]`; otherwise `AddressError` is thrown. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L212)
- `static fromArpa(arpaFormAddress: string): Address4` — Return an address from in-addr.arpa form: the four octets reversed, with or without the `.in-addr.arpa` suffix and root dot, in any case. Throws `AddressError` unless the reversed labels form a valid IPv4 address, so `fromArpa(x.reverseForm())` round-trips reverseForm. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L231)
- `static fromBigInt(bigInt: bigint): Address4` — Converts a BigInt to a v4 address object. The value must be in the range `[0, 2**32 - 1]`; otherwise `AddressError` is thrown. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L413)
- `static fromByteArray(bytes: number[]): Address4` — Convert a byte array to an Address4 object. Throws `AddressError` unless given exactly 4 integers from 0 to 255. Signed bytes are rejected, so this differs from `Address6.fromByteArray`, which folds them; the two contracts converge on this stricter form in the next major version. To convert from a Node.js `Buffer`, spread it: `Address4.fromByteArray([...buf])`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L431)
- `static fromUnsignedByteArray(bytes: number[]): Address4` — Convert an unsigned byte array to an Address4 object. Throws `AddressError` unless given exactly 4 bytes, and rejects values outside 0 to 255 when parsing the resulting address. To convert from a Node.js `Buffer`, spread it: `Address4.fromUnsignedByteArray([...buf])`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L447)

**Instance methods**

- `parse(address: string): string[]` — Parses an IPv4 address string into its four octet groups and stores the result on `this.parsedAddress`. Called automatically by the constructor; you typically don't need to call it directly. Throws `AddressError` if the input is not a valid IPv4 address. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L79)
- `correctForm(): string` — Returns the address in correct form: octets joined with `.` and any leading zeros stripped (e.g. `192.168.1.1`). For IPv4 this matches the canonical dotted-decimal representation. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L100)
- `toHex(): string` — Converts an IPv4 address object to a hex string [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L245)
- `toArray(): number[]` — Converts an IPv4 address object to an array of bytes. To get a Node.js `Buffer`, wrap the result: `Buffer.from(address.toArray())`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L255)
- `toGroup6(): string` — Converts an IPv4 address object to an IPv6 address group [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L263)
- `bigInt(): bigint` — Returns the address as a `bigint` [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L282)
- `startAddress(): Address4` — The first address in the range given by this address' subnet. Often referred to as the Network Address. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L299)
- `startAddressExclusive(): Address4` — The first host address in the range given by this address's subnet ie the first address after the Network Address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L308)
- `offset(n: number | bigint): Address4` — Returns the address `n` addresses after this one (or before, when `n` is negative), keeping this address's subnet mask. Throws `AddressError` when the result would fall outside the IPv4 address space or `n` is not an integer. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L323)
- `nextNetwork(): Address4` — Returns the network that follows this address's network: the address after endAddress, with the same subnet mask. Throws `AddressError` when this network is the last one in the address space. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L337)
- `endAddress(): Address4` — The last address in the range given by this address' subnet Often referred to as the Broadcast [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L360)
- `endAddressExclusive(): Address4` — The last host address in the range given by this address's subnet ie the last address prior to the Broadcast Address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L369)
- `subnetMaskAddress(): Address4` — The dotted-decimal form of the subnet mask, e.g. `255.255.240.0` for a `/20`. Returns an `Address4`; call `.correctForm()` for the string. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L379)
- `wildcardMask(): Address4` — The Cisco-style wildcard mask, e.g. `0.0.0.255` for a `/24`. This is the bitwise inverse of `subnetMaskAddress()`. Returns an `Address4`; call `.correctForm()` for the string. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L391)
- `networkForm(): string` — The network address in CIDR string form, e.g. `192.168.1.0/24` for `192.168.1.5/24`. For an address with no explicit subnet the prefix is `/32`, e.g. `networkForm()` on `192.168.1.5` returns `192.168.1.5/32`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L403)
- `mask(mask?: number): string` — Returns the first n bits of the address, defaulting to the subnet mask [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L461)
- `getBitsBase2(start: number, end: number): string` — Returns the bits in the given range as a base-2 string [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L473)
- `reverseForm(options?: ReverseFormOptions): string` — Return the reversed in-addr.arpa form of the address, e.g. `42.2.0.192.in-addr.arpa.` for `192.0.2.42`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L484)
- `isMulticast(): boolean` — Returns true if the given address is a multicast address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L522)
- `isPrivate(): boolean` — Returns true if the address is in one of the [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918) private address ranges (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L530)
- `isLoopback(): boolean` — Returns true if the address is in the loopback range `127.0.0.0/8` ([RFC 1122](https://datatracker.ietf.org/doc/html/rfc1122)). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L538)
- `isLinkLocal(): boolean` — Returns true if the address is in the link-local range `169.254.0.0/16` ([RFC 3927](https://datatracker.ietf.org/doc/html/rfc3927)). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L546)
- `isUnspecified(): boolean` — Returns true if the address is the unspecified address `0.0.0.0`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L554)
- `isBroadcast(): boolean` — Returns true if the address is the limited broadcast address `255.255.255.255` ([RFC 919](https://datatracker.ietf.org/doc/html/rfc919)). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L562)
- `isCGNAT(): boolean` — Returns true if the address is in the carrier-grade NAT range `100.64.0.0/10` ([RFC 6598](https://datatracker.ietf.org/doc/html/rfc6598)). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L570)
- `isDocumentation(): boolean` — Returns true if the address is in one of the documentation ranges `192.0.2.0/24`, `198.51.100.0/24`, or `203.0.113.0/24` ([RFC 5737](https://datatracker.ietf.org/doc/html/rfc5737)). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L579)
- `isBenchmarking(): boolean` — Returns true if the address is in the benchmarking range `198.18.0.0/15` ([RFC 2544](https://datatracker.ietf.org/doc/html/rfc2544)). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L587)
- `isReserved(): boolean` — Returns true if the address is in the reserved range `240.0.0.0/4` ([RFC 1112](https://datatracker.ietf.org/doc/html/rfc1112)), which includes the limited broadcast address. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L596)
- `isGlobal(): boolean` — Returns true if the address is globally reachable: not multicast, and not in any block the [IANA IPv4 Special-Purpose Address Registry](https://www.iana.org/assignments/iana-ipv4-special-registry/) marks as not globally reachable. That covers everything the individual classifiers name (private, loopback, link-local, CGNAT, unspecified, broadcast, documentation, benchmarking, reserved) and the blocks they do not, such as `0.0.0.0/8` and the IETF protocol assignments in `192.0.0.0/24`. This is the single predicate to use where a request must not reach an internal or special-purpose destination; see SECURITY.md. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L611)
- `binaryZeroPad(): string` — Returns a zero-padded base-2 string representation of the address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L619)
- `groupForV6(): string` — Groups an IPv4 address for inclusion at the end of an IPv6 address. Returns an HTML fragment: each half of the address is wrapped in a `<span>` carrying the group classes an address-inspector UI hovers on. The address content is HTML-escaped; anything you concatenate around it is your responsibility. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L635)

**Properties**

- `address: string` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L14)
- `addressMinusSuffix: string` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L15)
- `groups: number` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L16)
- `parsedAddress: string[]` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L17)
- `parsedSubnet: string` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L18)
- `subnet: string` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L19)
- `subnetMask: number` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L20)
- `v4: boolean` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L21)
- `isCorrect: () => boolean` — Returns true if the address is correct, false otherwise [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L108)
- `isInSubnet: (address: Address4 | Address6) => boolean` — Returns true if the given address is in the subnet of the current address. An `Address6` is never in the subnet of an `Address4`; convert with `to4()` or `Address6.fromAddress4()` to compare across families. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L504)
- `isHostInSubnet: (address: Address4 | Address6) => boolean` — Returns true if this address's host bits fall inside the given subnet, ignoring this address's own subnet mask. Prefer this over `isInSubnet` when classifying a single address, so the answer doesn't change with the CIDR suffix the caller happened to write — notably when the address came from untrusted input and the result backs a trust-boundary decision. An `Address6` is never in the subnet of an `Address4`; convert with `to4()` or `Address6.fromAddress4()` to compare across families. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv4.ts#L516)

</details>

<details>
<summary><a id="address6"></a><strong>Address6</strong> — Represents an IPv6 address</summary>

**Constructor**

- `new Address6(address: string, optionalGroups?: number): Address6`

**Static methods**

- `static isValid(address: string): boolean` — Returns true if the given string is a valid IPv6 address (with optional CIDR subnet and zone identifier), false otherwise. Host bits in the subnet portion are allowed (e.g. `2001:db8::1/32` is valid); for strict network-address validation compare `correctForm()` to `startAddress().correctForm()`, or use `networkForm()`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L179)
- `static fromBigInt(bigInt: bigint): Address6` — Convert a BigInt to a v6 address object. The value must be in the range `[0, 2**128 - 1]`; otherwise `AddressError` is thrown. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L200)
- `static fromURL(url: string): { error: string; address: null; port: null } | { error?: undefined; address: Address6; port: number | null }` — Parse a URL (with optional bracketed host and port) into an address and port. Returns either `{ address, port }` on success or `{ error, address: null, port: null }` if the URL could not be parsed. Ports are returned as numbers (or `null` if absent or out of range). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L225)
- `static fromAddressAndMask(address: string, mask: string): Address6` — Construct an `Address6` from an address and a hex subnet mask given as separate strings (e.g. as returned by Node's `os.networkInterfaces()`). Throws `AddressError` if the mask is non-contiguous (e.g. `ffff::ffff`). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L292)
- `static fromAddressAndWildcardMask(address: string, wildcardMask: string): Address6` — Construct an `Address6` from an address and a Cisco-style wildcard mask given as separate strings (e.g. `::ffff:ffff:ffff:ffff` for a `/64`). The wildcard mask is the bitwise inverse of the subnet mask. Throws `AddressError` if the mask is non-contiguous. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L306)
- `static fromWildcard(input: string): Address6` — Construct an `Address6` from a wildcard pattern with trailing `*` groups. The number of trailing wildcards determines the prefix length: each `*` represents 16 bits. `::` is expanded to zero groups (not wildcards) before evaluating trailing wildcards. Only trailing whole-group wildcards are supported. Partial-group wildcards (e.g. `2001:db8::0*`) and interior wildcards (e.g. `*::1`) throw `AddressError`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L328)
- `static fromAddress4(address: string): Address6` — Create an IPv6-mapped address given an IPv4 address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L389)
- `static fromArpa(arpaFormAddress: string): Address6` — Return an address from ip6.arpa form. A full 32-nibble name gives a /128 address; a shorter name, as used for a delegated reverse zone, gives the network it covers, with a subnet mask of four bits per nibble, so `fromArpa(x.reverseForm())` round-trips reverseForm for any prefix. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L409)
- `static fromAddress4Nat64(address: string, prefix?: string): Address6` — Embed an IPv4 address into a NAT64 IPv6 address using the encoding defined by [RFC 6052](https://datatracker.ietf.org/doc/html/rfc6052). The default prefix is the well-known prefix `64:ff9b::/96`. The prefix length must be one of 32, 40, 48, 56, 64, or 96; for prefixes shorter than /64 the IPv4 octets are split around the reserved bits 64–71. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1116)
- `static fromByteArray(bytes: number[]): Address6` — Convert a byte array to an Address6 object. Accepts unsigned bytes (0 to 255) or signed bytes (-128 to 127, as an `Int8Array` or a Java `byte[]` holds them), folding signed values to their unsigned equivalent. Throws `AddressError` unless given exactly 16 integers from -128 to 255. To convert from a Node.js `Buffer`, spread it: `Address6.fromByteArray([...buf])`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1231)
- `static fromUnsignedByteArray(bytes: number[]): Address6` — Convert an unsigned byte array to an Address6 object. Throws `AddressError` unless given exactly 16 integers from 0 to 255. To convert from a Node.js `Buffer`, spread it: `Address6.fromUnsignedByteArray([...buf])`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1248)

**Instance methods**

- `microsoftTranscription(): string` — Return the Microsoft UNC transcription of the address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L434)
- `mask(mask?: number): string` — Return the first n bits of the address, defaulting to the subnet mask [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L443)
- `possibleSubnets(subnetSize?: number): string` — Return the number of possible subnets of a given size in the address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L453)
- `startAddress(): Address6` — The first address in the range given by this address' subnet Often referred to as the Network Address. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L478)
- `startAddressExclusive(): Address6` — The first host address in the range given by this address's subnet ie the first address after the Network Address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L487)
- `endAddress(): Address6` — The last address in the range given by this address's subnet. IPv6 has no broadcast address, so this is an ordinary assignable address (in a 64-bit-interface-identifier subnet it falls inside the reserved subnet-anycast block of [RFC 2526](https://datatracker.ietf.org/doc/html/rfc2526)). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L507)
- `endAddressExclusive(): Address6` — The address one before endAddress. This is the IPv6 counterpart of the IPv4 method that skips the broadcast address; IPv6 has no broadcast, so it drops exactly one address and does not model the 128 reserved subnet-anycast identifiers of [RFC 2526](https://datatracker.ietf.org/doc/html/rfc2526). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L518)
- `offset(n: number | bigint): Address6` — Returns the address `n` addresses after this one (or before, when `n` is negative), keeping this address's subnet mask. Throws `AddressError` when the result would fall outside the IPv6 address space or `n` is not an integer. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L533)
- `nextNetwork(): Address6` — Returns the network that follows this address's network: the address after endAddress, with the same subnet mask. Throws `AddressError` when this network is the last one in the address space. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L547)
- `subnetMaskAddress(): Address6` — The hex form of the subnet mask, e.g. `ffff:ffff:ffff:ffff::` for a `/64`. Returns an `Address6`; call `.correctForm()` for the string. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L562)
- `wildcardMask(): Address6` — The Cisco-style wildcard mask, e.g. `::ffff:ffff:ffff:ffff` for a `/64`. This is the bitwise inverse of `subnetMaskAddress()`. Returns an `Address6`; call `.correctForm()` for the string. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L574)
- `networkForm(): string` — The network address in CIDR string form, e.g. `2001:db8::/32` for `2001:db8::1/32`. For an address with no explicit subnet the prefix is `/128`, e.g. `networkForm()` on `2001:db8::1` returns `2001:db8::1/128`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L587)
- `getScope(): string` — Return the scope of the address. The 4-bit scope field ([RFC 4291 §2.7](https://datatracker.ietf.org/doc/html/rfc4291#section-2.7)) is only defined for multicast addresses; for unicast addresses the scope is derived from the address type per [RFC 4007 §6](https://datatracker.ietf.org/doc/html/rfc4007#section-6). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L599)
- `getType(): string` — Return the type of the address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L626)
- `getBits(start: number, end: number): bigint` — Return the bits in the given range as a BigInt [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L641)
- `getBitsBase2(start: number, end: number): string` — Return the bits in the given range as a base-2 string [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L649)
- `getBitsBase16(start: number, end: number): string` — Return the bits in the given range as a base-16 string [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L657)
- `getBitsPastSubnet(): string` — Return the bits that are set past the subnet mask length [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L673)
- `reverseForm(options?: ReverseFormOptions): string` — Return the reversed ip6.arpa form of the address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L683)
- `correctForm(): string` — Returns the address in correct form, per [RFC 5952](https://datatracker.ietf.org/doc/html/rfc5952): leading zeros stripped, the longest run of zero groups collapsed to `::`, and hex digits lowercased (e.g. `2001:db8::1`). This is the recommended form for display. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L718)
- `binaryZeroPad(): string` — Return a zero-padded base-2 string representation of the address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L780)
- `parse4in6(address: string): string` — Parses a v4-in-v6 string (e.g. `::ffff:192.168.0.1`) by extracting the trailing IPv4 address into `this.address4` / `this.parsedAddress4` and returning the address with the v4 portion converted to two v6 groups. Used internally by `parse()`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L794)
- `parse(address: string): string[]` — Parses an IPv6 address string into its 8 hexadecimal groups (expanding any `::` elision and any trailing v4-in-v6 portion) and stores the result on `this.parsedAddress`. Called automatically by the constructor; you typically don't need to call it directly. Throws `AddressError` if the input is malformed. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L851)
- `canonicalForm(): string` — Returns the canonical (fully expanded) form of the address: all 8 groups, each padded to 4 hex digits, with no `::` collapsing (e.g. `2001:0db8:0000:0000:0000:0000:0000:0001`). Useful for sorting and byte-exact comparison. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L931)
- `decimal(): string` — Return the decimal form of the address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L939)
- `bigInt(): bigint` — Return the address as a BigInt [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L947)
- `to4(): Address4` — Return the last two groups of this address as an IPv4 address string. If this address carries a CIDR prefix that covers the trailing 32 bits (i.e. `subnetMask >= 96`), the resulting `Address4` inherits the corresponding v4 prefix (`subnetMask - 96`); otherwise it defaults to `/32`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L962)
- `to4in6(): string` — Return the v4-in-v6 form of the address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L986)
- `inspectTeredo(): TeredoProperties` — Decodes the Teredo tunneling fields embedded in this address. Returns the Teredo prefix, server IPv4, client IPv4, raw flag bits, cone-NAT flag, UDP port, and Microsoft-format flag breakdown (reserved, universal/local, group/individual, nonce). Only meaningful for addresses in `2001::/32`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1007)
- `inspect6to4(): SixToFourProperties` — Decodes the 6to4 tunneling fields embedded in this address. Returns the 6to4 prefix and the embedded IPv4 gateway address. Only meaningful for addresses in `2002::/16`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1070)
- `to6to4(): Address6 | null` — Return a v6 6to4 address from a v6 v4inv6 address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1090)
- `toAddress4Nat64(prefix?: string): Address4 | null` — Extract the embedded IPv4 address from a NAT64 IPv6 address using the encoding defined by [RFC 6052](https://datatracker.ietf.org/doc/html/rfc6052). The default prefix is the well-known prefix `64:ff9b::/96`. Returns `null` if this address is not contained within the given prefix. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1159)
- `toByteArray(): number[]` — Return a byte array. To get a Node.js `Buffer`, wrap the result: `Buffer.from(address.toByteArray())`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1194)
- `toUnsignedByteArray(): number[]` — Return an unsigned byte array. To get a Node.js `Buffer`, wrap the result: `Buffer.from(address.toUnsignedByteArray())`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1213)
- `isCanonical(): boolean` — Returns true if the address is in the canonical form, false otherwise [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1295)
- `isLinkLocal(): boolean` — Returns true if the address is a link-local unicast address in `fe80::/10` ([RFC 4291 §2.4](https://datatracker.ietf.org/doc/html/rfc4291#section-2.4)) or an IPv4-mapped / NAT64 address whose embedded IPv4 address is link-local (`169.254.0.0/16`, e.g. `::ffff:169.254.169.254`), false otherwise. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1306)
- `isMulticast(): boolean` — Returns true if the address is a multicast address, false otherwise [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1319)
- `is4(): boolean` — Returns true if the address was written in v4-in-v6 dotted-quad notation (e.g. `::ffff:127.0.0.1`), false otherwise. This is a notation-level flag and does not reflect whether the address bits lie in the IPv4-mapped (`::ffff:0:0/96`) subnet — for that, see isMapped4. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1336)
- `isMapped4(): boolean` — Returns true if the address is an IPv4-mapped IPv6 address in `::ffff:0:0/96` ([RFC 4291 §2.5.5.2](https://datatracker.ietf.org/doc/html/rfc4291#section-2.5.5.2)), false otherwise. Unlike is4, this checks the underlying address bits rather than the textual notation, so `::ffff:127.0.0.1` and `::ffff:7f00:1` both return true. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1348)
- `embeddedIPv4(): Address4 | null` — If this address embeds a routable IPv4 address — i.e. it is IPv4-mapped (`::ffff:0:0/96`) or sits in the NAT64 well-known prefix (`64:ff9b::/96`, [RFC 6052](https://datatracker.ietf.org/doc/html/rfc6052)) — return that embedded address as an Address4; otherwise return null. The special-property checks (`isLoopback`, `isLinkLocal`, `isMulticast`, `isUnspecified`, `isPrivate`, `isCGNAT`, `isBroadcast`) call this first and delegate to the embedded Address4 when present, so a literal such as `::ffff:127.0.0.1` is classified by what it actually reaches (loopback) rather than by its IPv6 wrapper (which `getType()` reports as IPv4-mapped). This matters wherever the checks back a trust-boundary decision (e.g. an SSRF allow/deny filter): without normalization, `::ffff:10.0.0.1`, `::ffff:169.254.169.254`, `64:ff9b::7f00:1`, etc. would all read as non-internal. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1369)
- `isTeredo(): boolean` — Returns true if the address is a Teredo address, false otherwise [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1381)
- `is6to4(): boolean` — Returns true if the address is a 6to4 address, false otherwise [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1389)
- `isLoopback(): boolean` — Returns true if the address is a loopback address, false otherwise [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1397)
- `isULA(): boolean` — Returns true if the address is a Unique Local Address in `fc00::/7` ([RFC 4193](https://datatracker.ietf.org/doc/html/rfc4193)). ULAs are the IPv6 equivalent of IPv4 [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918) private addresses. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1410)
- `isPrivate(): boolean` — Returns true if the address is private, i.e. a Unique Local Address in `fc00::/7` ([RFC 4193](https://datatracker.ietf.org/doc/html/rfc4193)), an address in the NAT64 local-use range `64:ff9b:1::/48` ([RFC 8215](https://datatracker.ietf.org/doc/html/rfc8215)), or an IPv4-mapped / NAT64 well-known address whose embedded IPv4 address is in one of the [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918) private ranges (e.g. `::ffff:10.0.0.1`). This is the IPv6 counterpart to Address4.isPrivate; use it instead of isULA when you need to catch mapped RFC 1918 addresses as well as native ULAs. The local-use NAT64 range is reported private as a whole rather than by its embedded IPv4 address: an operator may carve a prefix of any RFC 6052 length out of `64:ff9b:1::/48`, so the same bits decode to different IPv4 addresses under different deployments and no single decoding is correct. Use toAddress4Nat64 with the deployment's prefix to decode one. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1432)
- `isCGNAT(): boolean` — Returns true if the address is an IPv4-mapped / NAT64 address whose embedded IPv4 address is in the carrier-grade NAT range `100.64.0.0/10` ([RFC 6598](https://datatracker.ietf.org/doc/html/rfc6598)), false otherwise. There is no native IPv6 CGNAT range, so this only ever returns true for an embedded IPv4 address (e.g. `::ffff:100.64.0.1`). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1449)
- `isBroadcast(): boolean` — Returns true if the address is an IPv4-mapped / NAT64 address whose embedded IPv4 address is the limited broadcast address `255.255.255.255` ([RFC 919](https://datatracker.ietf.org/doc/html/rfc919)), false otherwise. There is no IPv6 broadcast, so this only ever returns true for an embedded IPv4 address (e.g. `::ffff:255.255.255.255`). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1466)
- `isUnspecified(): boolean` — Returns true if the address is the unspecified address `::`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1479)
- `isDocumentation(): boolean` — Returns true if the address is in the documentation prefix `2001:db8::/32` ([RFC 3849](https://datatracker.ietf.org/doc/html/rfc3849)). [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1492)
- `isBenchmarking(): boolean` — Returns true if the address is in the benchmarking range `2001:2::/48` ([RFC 5180](https://datatracker.ietf.org/doc/html/rfc5180)) or is an IPv4-mapped / NAT64 address whose embedded IPv4 address is in `198.18.0.0/15`, false otherwise. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1503)
- `isGlobal(): boolean` — Returns true if the address is globally reachable: inside the global unicast allocation `2000::/3` (the only range the [IANA IPv6 Address Space Registry](https://www.iana.org/assignments/ipv6-address-space/) assigns for global unicast; everything else is reserved, ULA, link-local, or multicast) and not in any block the [IANA IPv6 Special-Purpose Address Registry](https://www.iana.org/assignments/iana-ipv6-special-registry/) marks as not globally reachable. An IPv4-mapped or NAT64 well-known address answers for its embedded IPv4 address, so `::ffff:10.0.0.1` and `64:ff9b::7f00:1` are not global. Teredo (`2001::/32`) and 6to4 (`2002::/16`) are not global either: the registry lists them as N/A and a packet to one needs a relay. This covers everything the individual classifiers name and the blocks they do not: the discard-only prefix `100::/64`, the IETF protocol assignments in `2001::/23`, the deprecated site-local `fec0::/10` and IPv4-compatible `::/96` ranges, and unallocated space such as `4000::/3`. It is the single predicate to use where a request must not reach an internal or special-purpose destination; see SECURITY.md. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1532)
- `href(optionalPort?: string | number): string` — Returns the address as an HTTP URL with the host bracketed, e.g. `http://[2001:db8::1]/`. If `optionalPort` is provided it is appended, e.g. `http://[2001:db8::1]:8080/`. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1551)
- `link(options?: { className?: string; prefix?: string; v4?: boolean }): string` — Returns an HTML `<a>` element whose `href` encodes the address in a URL hash fragment (default prefix `/#address=`). Useful for linking between pages of an address-inspector UI. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1569)
- `group(): string` — Groups an address. Returns an HTML fragment: each group is wrapped in a `<span>` carrying the group classes an address-inspector UI hovers on. The address content is HTML-escaped; anything you concatenate around it is your responsibility. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1614)
- `regularExpressionString(substringSearch?: boolean): string` — Generate a regular expression string that can be used to find or validate all variations of this address [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1666)
- `regularExpression(substringSearch?: boolean): RegExp` — Generate a regular expression that can be used to find or validate all variations of this address. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1720)

**Properties**

- `address4: Address4` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L97)
- `address: string` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L98)
- `addressMinusSuffix: string` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L99)
- `elidedGroups: number` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L100)
- `elisionBegin: number` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L101)
- `elisionEnd: number` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L102)
- `groups: number` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L103)
- `parsedAddress4: string` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L104)
- `parsedAddress: string[]` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L105)
- `parsedSubnet: string` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L106)
- `subnet: string` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L107)
- `subnetMask: number` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L108)
- `v4: boolean` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L109)
- `zone: string` — [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L110)
- `isInSubnet: (address: Address4 | Address6) => boolean` — Returns true if the given address is in the subnet of the current address. An `Address4` is never in the subnet of an `Address6`; convert with `Address6.fromAddress4()` or `to4()` to compare across families. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1271)
- `isHostInSubnet: (address: Address4 | Address6) => boolean` — Returns true if this address's host bits fall inside the given subnet, ignoring this address's own subnet mask. Prefer this over `isInSubnet` when classifying a single address, so the answer doesn't change with the CIDR suffix the caller happened to write — notably when the address came from untrusted input and the result backs a trust-boundary decision. An `Address4` is never in the subnet of an `Address6`; convert with `Address6.fromAddress4()` or `to4()` to compare across families. [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1283)
- `isCorrect: () => boolean` — Returns true if the address is correct, false otherwise [src](https://github.com/beaugunderson/ip-address/blob/main/src/ipv6.ts#L1289)

</details>

<details>
<summary><a id="addresserror"></a><strong>AddressError</strong></summary>

**Constructor**

- `new AddressError(message: string, parseMessage?: string): AddressError`

**Properties**

- `parseMessage: string` — The offending address with the portion that failed to parse wrapped in `<span class="parse-error">`, e.g. `2001:db8<span class="parse-error">:::</span>1`. Present only on errors thrown from a parse path that can point at a specific substring. This is an HTML fragment intended for an address-inspector UI. The address content is HTML-escaped, so it is safe to insert as-is; treat it as markup rather than as a plain-text message, and use `message` for anything that renders as text. [src](https://github.com/beaugunderson/ip-address/blob/main/src/address-error.ts#L13)

</details>

<!-- API:END -->

### Security

Vulnerabilities go through [GitHub's private vulnerability reporting](https://github.com/beaugunderson/ip-address/security/advisories/new); [SECURITY.md](./SECURITY.md) has the scope and what to expect. Confirmed issues get a fix, a release, and a public [advisory](https://github.com/beaugunderson/ip-address/security/advisories) with a CVE, rather than a quiet patch.

Releases are built and published by CI through npm trusted publishing. Every version from 10.2.1 onward carries a provenance attestation tying the tarball to the commit and workflow that built it. Check it with `npm audit signatures`.

If you are using the address-property checks as a security control, read [that section of SECURITY.md](./SECURITY.md#classifiers-are-not-an-ssrf-defense) first. `isPrivate()`, `isLoopback()`, `isInSubnet()` and their siblings classify an address that has already been parsed, which makes them one layer of an SSRF guard rather than the whole of it. A hostname that resolves to an internal address, a DNS record that changes after your check, or a redirect will all sail past a guard built only on them. Within that layer, use `isGlobal()` rather than an OR of the named classifiers: it is false for every block the IANA special-purpose registries mark as not globally reachable, including the ones with no classifier of their own.

### Used by

`ip-address` is downloaded ~86 million times per week, mostly via the Node proxy/agent ecosystem. The dependency chain runs through a handful of widely-used packages:

- [**socks**](https://github.com/JoshGlazebrook/socks) (~53M weekly) — SOCKS4/5 client for Node; depends on `ip-address` directly. The single biggest source of downloads.
- [**socks-proxy-agent**](https://github.com/TooTallNate/proxy-agents/tree/main/packages/socks-proxy-agent) (~55M weekly) — `http.Agent` for SOCKS proxies; depends on `socks`. Bundled by virtually every CLI that respects `HTTPS_PROXY`.
- [**npm**](https://github.com/npm/cli) and [**pnpm**](https://github.com/pnpm/pnpm) — both bundle `socks-proxy-agent` through their HTTP fetch stack (`make-fetch-happen` → `@npmcli/agent`), so every Node install on the planet pulls in `ip-address` as a transitive dependency.
- [**Puppeteer**](https://github.com/puppeteer/puppeteer) — `@puppeteer/browsers` uses `proxy-agent` for browser-binary downloads, which routes through `socks-proxy-agent` → `socks` → `ip-address`.
- [**proxy-agent**](https://github.com/TooTallNate/proxy-agents/tree/main/packages/proxy-agent) (~28M weekly) and [**pac-proxy-agent**](https://github.com/TooTallNate/proxy-agents/tree/main/packages/pac-proxy-agent) (~27M weekly) — auto-detecting proxy agents (HTTP/HTTPS/SOCKS/PAC) used widely in scraping, headless-browser, and CI tooling.
- [**cacache**](https://github.com/npm/cacache) (~40M weekly) — npm's content-addressable cache; pulls in the same fetch stack.

Beyond the proxy chain, `ip-address` has been used by Juniper Networks' Contrail, Ably's proxy-protocol implementation, Rackspace's serialization framework, IPFS, and the [SwitchyOmega](https://github.com/FelisCatus/SwitchyOmega) Chrome extension, among many others.
