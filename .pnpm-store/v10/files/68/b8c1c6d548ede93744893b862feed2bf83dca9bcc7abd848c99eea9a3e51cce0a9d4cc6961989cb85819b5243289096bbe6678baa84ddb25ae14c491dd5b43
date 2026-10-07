import { Address4 } from './ipv4';
import { Address6 } from './ipv6';
export interface ReverseFormOptions {
    omitSuffix?: boolean;
}
/**
 * Returns whether this address's *network* is contained within `address`,
 * i.e. whether every address this one can represent also falls inside
 * `address`. A network wider than `address` is not contained in it, so
 * `10.0.0.0/8` is not in `10.0.0.0/16`.
 *
 * To ask whether the address itself falls inside a range, ignoring any CIDR
 * suffix it was written with, use {@link isHostInSubnet} instead. That is the
 * question the special-use classifiers ask.
 */
export declare function isInSubnet(this: Address4 | Address6, address: Address4 | Address6): boolean;
/**
 * Returns whether this address's host bits fall inside `address`, ignoring
 * this address's own subnet mask.
 *
 * This is the primitive the special-use classifiers (`isLoopback`,
 * `isPrivate`, `isLinkLocal`, `getType`, …) are built on: they answer a
 * question about the address, so the answer must not change with the CIDR
 * suffix the caller happened to write. Use this rather than
 * {@link isInSubnet} when classifying a single address — notably when the
 * address came from untrusted input and the result backs a trust-boundary
 * decision such as an SSRF allow/deny filter.
 *
 * An address of one family is never inside a network of the other, so an
 * `Address4` against an `Address6` (or the reverse) is `false`. To compare
 * across families, convert first: `Address6.fromAddress4()`, `to4()`, or
 * `toAddress4Nat64()`.
 */
export declare function isHostInSubnet(this: Address4 | Address6, address: Address4 | Address6): boolean;
/**
 * One parsed row of an IANA special-purpose address registry: the block, and
 * whether the registry marks it globally reachable (`null` when the column is
 * blank, in which case the containing block answers).
 */
export interface SpecialPurposeEntry<A extends Address4 | Address6> {
    subnet: A;
    reachable: boolean | null;
}
/**
 * Returns whether the registry marks this address globally reachable: the
 * answer of the most specific entry containing it that has one, or `true`
 * when no entry contains it.
 */
export declare function isGloballyReachable<A extends Address4 | Address6>(this: A, entries: ReadonlyArray<SpecialPurposeEntry<A>>): boolean;
/**
 * Adds `n` to `value` and returns the result, throwing `AddressError` unless
 * `n` is an integer and the result stays within `[0, 2**bits - 1]`.
 */
export declare function offsetBigInt(value: bigint, n: number | bigint, bits: number, family: string): bigint;
export declare function isCorrect(defaultBits: number): (this: Address4 | Address6) => boolean;
/**
 * Returns the prefix length (number of leading 1 bits) of a contiguous
 * subnet mask. Throws `AddressError` if the mask is non-contiguous (e.g.
 * `255.0.255.0`).
 */
export declare function prefixLengthFromMask(value: bigint, totalBits: number): number;
/**
 * Throws `AddressError` unless `bytes` holds exactly `byteCount` integers,
 * each from `minimum` to 255. Pass a `minimum` of `-128` where signed bytes
 * are accepted and folded to unsigned, and `0` where they are not.
 */
export declare function assertByteArray(bytes: number[], byteCount: number, family: 'IPv4' | 'IPv6', minimum: number): void;
export declare function numberToPaddedHex(number: number): string;
export declare function stringToPaddedHex(numberString: string): string;
/**
 * @param binaryValue Binary representation of a value (e.g. `10`)
 * @param position Byte position, where 0 is the least significant bit
 */
export declare function testBit(binaryValue: string, position: number): boolean;
