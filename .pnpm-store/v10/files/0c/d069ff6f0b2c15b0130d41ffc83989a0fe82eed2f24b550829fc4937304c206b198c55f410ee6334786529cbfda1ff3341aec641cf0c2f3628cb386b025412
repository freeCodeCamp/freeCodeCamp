"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPECIAL_PURPOSE = exports.RE_SUBNET_STRING = exports.RE_ADDRESS = exports.GROUPS = exports.BITS = void 0;
exports.BITS = 32;
exports.GROUPS = 4;
// Each octet is 0-255 written without a leading zero. A leading zero is
// octal to the WHATWG URL parser, inet_aton, and getaddrinfo, but decimal to
// parseInt(part, 10), so accepting the notation would make this library
// disagree with the network stack about which host a string names.
exports.RE_ADDRESS = /^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/g;
exports.RE_SUBNET_STRING = /\/\d{1,2}$/;
/**
 * The IANA IPv4 Special-Purpose Address Registry
 * (https://www.iana.org/assignments/iana-ipv4-special-registry/), one entry
 * per block: `[cidr, name, globallyReachable]`. A `null` reachability means
 * the registry leaves the column blank and the block inherits the answer of
 * the block containing it (or is global when nothing contains it).
 *
 * `Address4.isGlobal()` answers from the most specific entry containing the
 * address. `test/data/iana-corpus.json` is generated from the registry's CSV
 * and pins this table to it.
 */
exports.SPECIAL_PURPOSE = [
    ['0.0.0.0/8', 'This network', false],
    ['0.0.0.0/32', 'This host on this network', false],
    ['10.0.0.0/8', 'Private-Use', false],
    ['100.64.0.0/10', 'Shared Address Space', false],
    ['127.0.0.0/8', 'Loopback', false],
    ['169.254.0.0/16', 'Link Local', false],
    ['172.16.0.0/12', 'Private-Use', false],
    ['192.0.0.0/24', 'IETF Protocol Assignments', false],
    ['192.0.0.0/29', 'IPv4 Service Continuity Prefix', false],
    ['192.0.0.8/32', 'IPv4 dummy address', false],
    ['192.0.0.9/32', 'Port Control Protocol Anycast', true],
    ['192.0.0.10/32', 'Traversal Using Relays around NAT Anycast', true],
    ['192.0.0.170/32', 'NAT64/DNS64 Discovery', false],
    ['192.0.0.171/32', 'NAT64/DNS64 Discovery', false],
    ['192.0.2.0/24', 'Documentation (TEST-NET-1)', false],
    ['192.31.196.0/24', 'AS112-v4', true],
    ['192.52.193.0/24', 'AMT', true],
    ['192.88.99.0/24', 'Deprecated (6to4 Relay Anycast)', null],
    ['192.88.99.2/32', '6a44-relay anycast address', false],
    ['192.168.0.0/16', 'Private-Use', false],
    ['192.175.48.0/24', 'Direct Delegation AS112 Service', true],
    ['198.18.0.0/15', 'Benchmarking', false],
    ['198.51.100.0/24', 'Documentation (TEST-NET-2)', false],
    ['203.0.113.0/24', 'Documentation (TEST-NET-3)', false],
    ['240.0.0.0/4', 'Reserved', false],
    ['255.255.255.255/32', 'Limited Broadcast', false],
];
//# sourceMappingURL=constants.js.map