"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInSubnet = isInSubnet;
exports.isHostInSubnet = isHostInSubnet;
exports.isGloballyReachable = isGloballyReachable;
exports.offsetBigInt = offsetBigInt;
exports.isCorrect = isCorrect;
exports.prefixLengthFromMask = prefixLengthFromMask;
exports.assertByteArray = assertByteArray;
exports.numberToPaddedHex = numberToPaddedHex;
exports.stringToPaddedHex = stringToPaddedHex;
exports.testBit = testBit;
const address_error_1 = require("./address-error");
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
function isInSubnet(address) {
    if (this.subnetMask < address.subnetMask) {
        return false;
    }
    return isHostInSubnet.call(this, address);
}
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
function isHostInSubnet(address) {
    // mask() is a bit string of the family's width, and the leading bits of a
    // 32-bit string can coincide with those of a 128-bit one (a00::1 and
    // 10.0.0.0/8 both mask to 00001010), so the widths must agree before the
    // strings are compared.
    if (this.binaryZeroPad().length !== address.binaryZeroPad().length) {
        return false;
    }
    return this.mask(address.subnetMask) === address.mask();
}
/**
 * Returns whether the registry marks this address globally reachable: the
 * answer of the most specific entry containing it that has one, or `true`
 * when no entry contains it.
 */
function isGloballyReachable(entries) {
    let best = null;
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.reachable !== null &&
            isHostInSubnet.call(this, entry.subnet) &&
            (best === null || entry.subnet.subnetMask > best.subnet.subnetMask)) {
            best = entry;
        }
    }
    return best === null ? true : best.reachable;
}
/**
 * Adds `n` to `value` and returns the result, throwing `AddressError` unless
 * `n` is an integer and the result stays within `[0, 2**bits - 1]`.
 */
function offsetBigInt(value, n, bits, family) {
    if (typeof n === 'number' && !Number.isSafeInteger(n)) {
        throw new address_error_1.AddressError(`${family} offset must be an integer`);
    }
    if (typeof n !== 'number' && typeof n !== 'bigint') {
        throw new address_error_1.AddressError(`${family} offset must be an integer`);
    }
    const result = value + BigInt(n);
    if (result < BigInt(0) || result > (BigInt(1) << BigInt(bits)) - BigInt(1)) {
        throw new address_error_1.AddressError(`${family} offset leaves the address space`);
    }
    return result;
}
function isCorrect(defaultBits) {
    return function isCorrectForm() {
        if (this.addressMinusSuffix !== this.correctForm()) {
            return false;
        }
        if (this.subnetMask === defaultBits && !this.parsedSubnet) {
            return true;
        }
        return this.parsedSubnet === String(this.subnetMask);
    };
}
/**
 * Returns the prefix length (number of leading 1 bits) of a contiguous
 * subnet mask. Throws `AddressError` if the mask is non-contiguous (e.g.
 * `255.0.255.0`).
 */
function prefixLengthFromMask(value, totalBits) {
    const binary = value.toString(2).padStart(totalBits, '0');
    if (binary.length > totalBits) {
        throw new address_error_1.AddressError('Invalid subnet mask.');
    }
    const firstZero = binary.indexOf('0');
    if (firstZero === -1) {
        return totalBits;
    }
    if (binary.slice(firstZero).includes('1')) {
        throw new address_error_1.AddressError('Invalid subnet mask.');
    }
    return firstZero;
}
/**
 * Throws `AddressError` unless `bytes` holds exactly `byteCount` integers,
 * each from `minimum` to 255. Pass a `minimum` of `-128` where signed bytes
 * are accepted and folded to unsigned, and `0` where they are not.
 */
function assertByteArray(bytes, byteCount, family, minimum) {
    if (bytes.length !== byteCount) {
        throw new address_error_1.AddressError(`${family} addresses require exactly ${byteCount} bytes`);
    }
    for (let i = 0; i < bytes.length; i++) {
        if (!Number.isInteger(bytes[i]) || bytes[i] < minimum || bytes[i] > 255) {
            throw new address_error_1.AddressError(`All bytes must be integers between ${minimum} and 255`);
        }
    }
}
function numberToPaddedHex(number) {
    return number.toString(16).padStart(2, '0');
}
function stringToPaddedHex(numberString) {
    return numberToPaddedHex(parseInt(numberString, 10));
}
/**
 * @param binaryValue Binary representation of a value (e.g. `10`)
 * @param position Byte position, where 0 is the least significant bit
 */
function testBit(binaryValue, position) {
    const { length } = binaryValue;
    if (position > length) {
        return false;
    }
    const positionInString = length - position;
    return binaryValue.substring(positionInString, positionInString + 1) === '1';
}
//# sourceMappingURL=common.js.map