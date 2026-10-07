export declare const BITS = 32;
export declare const GROUPS = 4;
export declare const RE_ADDRESS: RegExp;
export declare const RE_SUBNET_STRING: RegExp;
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
export declare const SPECIAL_PURPOSE: ReadonlyArray<readonly [string, string, boolean | null]>;
