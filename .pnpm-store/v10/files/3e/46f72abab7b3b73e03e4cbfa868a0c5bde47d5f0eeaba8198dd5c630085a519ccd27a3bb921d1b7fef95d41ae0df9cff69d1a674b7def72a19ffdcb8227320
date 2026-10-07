"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPECIAL_PURPOSE = exports.RE_URL_WITH_PORT = exports.RE_URL = exports.RE_ZONE_STRING = exports.RE_SUBNET_STRING = exports.RE_BAD_ADDRESS = exports.RE_BAD_CHARACTERS = exports.TYPES = exports.SCOPES = exports.GROUPS = exports.BITS = void 0;
exports.BITS = 128;
exports.GROUPS = 8;
/**
 * Represents IPv6 address scopes
 * @memberof Address6
 * @static
 */
exports.SCOPES = {
    0: 'Reserved',
    1: 'Interface local',
    2: 'Link local',
    4: 'Admin local',
    5: 'Site local',
    8: 'Organization local',
    14: 'Global',
    15: 'Reserved',
};
/**
 * Represents IPv6 address types
 * @memberof Address6
 * @static
 */
exports.TYPES = {
    'ff01::1/128': 'Multicast (All nodes on this interface)',
    'ff01::2/128': 'Multicast (All routers on this interface)',
    'ff02::1/128': 'Multicast (All nodes on this link)',
    'ff02::2/128': 'Multicast (All routers on this link)',
    'ff05::2/128': 'Multicast (All routers in this site)',
    'ff02::5/128': 'Multicast (OSPFv3 AllSPF routers)',
    'ff02::6/128': 'Multicast (OSPFv3 AllDR routers)',
    'ff02::9/128': 'Multicast (RIP routers)',
    'ff02::a/128': 'Multicast (EIGRP routers)',
    'ff02::d/128': 'Multicast (PIM routers)',
    'ff02::16/128': 'Multicast (MLDv2 reports)',
    'ff01::fb/128': 'Multicast (mDNSv6)',
    'ff02::fb/128': 'Multicast (mDNSv6)',
    'ff05::fb/128': 'Multicast (mDNSv6)',
    'ff02::1:2/128': 'Multicast (All DHCP servers and relay agents on this link)',
    'ff05::1:2/128': 'Multicast (All DHCP servers and relay agents in this site)',
    'ff02::1:3/128': 'Multicast (All DHCP servers on this link)',
    'ff05::1:3/128': 'Multicast (All DHCP servers in this site)',
    '::/128': 'Unspecified',
    '::1/128': 'Loopback',
    '::ffff:0:0/96': 'IPv4-mapped',
    'ff00::/8': 'Multicast',
    'fe80::/10': 'Link-local unicast',
    'fc00::/7': 'Unique local',
    '2001::/32': 'Teredo',
    '2001:2::/48': 'Benchmarking',
    '2002::/16': '6to4',
    '2001:db8::/32': 'Documentation',
    '3fff::/20': 'Documentation',
    '100::/64': 'Discard-only',
    'fec0::/10': 'Site-local unicast (deprecated)',
    '::/96': 'IPv4-compatible (deprecated)',
    '64:ff9b::/96': 'NAT64 (well-known)',
    '64:ff9b:1::/48': 'NAT64 (local-use)',
};
/**
 * A regular expression that matches bad characters in an IPv6 address
 * @memberof Address6
 * @static
 */
exports.RE_BAD_CHARACTERS = /([^0-9a-f:/%])/gi;
/**
 * A regular expression that matches an incorrect IPv6 address
 * @memberof Address6
 * @static
 */
exports.RE_BAD_ADDRESS = /([0-9a-f]{5,}|:{3,}|[^:]:$|^:[^:]|\/$)/gi;
/**
 * A regular expression that matches an IPv6 subnet
 * @memberof Address6
 * @static
 */
exports.RE_SUBNET_STRING = /\/\d{1,3}(?=%|$)/;
/**
 * A regular expression that matches an IPv6 zone
 * @memberof Address6
 * @static
 */
exports.RE_ZONE_STRING = /%.*$/;
exports.RE_URL = /^(?:\[([0-9a-f:.]+)\]|([0-9a-f:.]+))(?:[/?#].*)?$/i;
exports.RE_URL_WITH_PORT = /^\[([0-9a-f:.]+)\]:([0-9]{1,5})(?:[/?#].*)?$/i;
/**
 * The IANA IPv6 Special-Purpose Address Registry
 * (https://www.iana.org/assignments/iana-ipv6-special-registry/), one entry
 * per block: `[cidr, name, globallyReachable]`. A `null` reachability means
 * the registry says N/A or leaves the column blank; N/A blocks (Teredo, 6to4)
 * are treated as not globally reachable, since a packet to one needs a relay,
 * and blank blocks inherit the answer of the block containing them.
 *
 * `Address6.isGlobal()` answers from the most specific entry containing the
 * address, after delegating IPv4-mapped and NAT64 well-known addresses to the
 * embedded IPv4 address. `test/data/iana-corpus.json` is generated from the
 * registry's CSV and pins this table to it.
 */
exports.SPECIAL_PURPOSE = [
    ['::1/128', 'Loopback Address', false],
    ['::/128', 'Unspecified Address', false],
    ['::ffff:0:0/96', 'IPv4-mapped Address', false],
    ['64:ff9b::/96', 'IPv4-IPv6 Translat.', true],
    ['64:ff9b:1::/48', 'IPv4-IPv6 Translat.', false],
    ['100::/64', 'Discard-Only Address Block', false],
    ['100:0:0:1::/64', 'Dummy IPv6 Prefix', false],
    ['2001::/23', 'IETF Protocol Assignments', false],
    ['2001::/32', 'TEREDO', false],
    ['2001:1::1/128', 'Port Control Protocol Anycast', true],
    ['2001:1::2/128', 'Traversal Using Relays around NAT Anycast', true],
    ['2001:1::3/128', 'DNS-SD Service Registration Protocol Anycast', true],
    ['2001:2::/48', 'Benchmarking', false],
    ['2001:3::/32', 'AMT', true],
    ['2001:4:112::/48', 'AS112-v6', true],
    ['2001:10::/28', 'Deprecated (previously ORCHID)', null],
    ['2001:20::/28', 'ORCHIDv2', true],
    ['2001:30::/28', 'Drone Remote ID Protocol Entity Tags (DETs) Prefix', true],
    ['2001:db8::/32', 'Documentation', false],
    ['2002::/16', '6to4', false],
    ['2620:4f:8000::/48', 'Direct Delegation AS112 Service', true],
    ['3fff::/20', 'Documentation', false],
    ['5f00::/16', 'Segment Routing (SRv6) SIDs', false],
    ['fc00::/7', 'Unique-Local', false],
    ['fe80::/10', 'Link-Local Unicast', false],
];
//# sourceMappingURL=constants.js.map