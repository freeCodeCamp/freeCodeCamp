export declare const BITS = 128;
export declare const GROUPS = 8;
/**
 * Represents IPv6 address scopes
 * @memberof Address6
 * @static
 */
export declare const SCOPES: {
    [key: number]: string | undefined;
};
/**
 * Represents IPv6 address types
 * @memberof Address6
 * @static
 */
export declare const TYPES: {
    [key: string]: string | undefined;
};
/**
 * A regular expression that matches bad characters in an IPv6 address
 * @memberof Address6
 * @static
 */
export declare const RE_BAD_CHARACTERS: RegExp;
/**
 * A regular expression that matches an incorrect IPv6 address
 * @memberof Address6
 * @static
 */
export declare const RE_BAD_ADDRESS: RegExp;
/**
 * A regular expression that matches an IPv6 subnet
 * @memberof Address6
 * @static
 */
export declare const RE_SUBNET_STRING: RegExp;
/**
 * A regular expression that matches an IPv6 zone
 * @memberof Address6
 * @static
 */
export declare const RE_ZONE_STRING: RegExp;
export declare const RE_URL: RegExp;
export declare const RE_URL_WITH_PORT: RegExp;
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
export declare const SPECIAL_PURPOSE: ReadonlyArray<readonly [string, string, boolean | null]>;
