import { IsIPv4Internal } from './ipv4.mjs';
function InRange(ch) {
    return (ch >= 48 && ch <= 57) || // 0-9
        (ch >= 65 && ch <= 70) || // A-F
        (ch >= 97 && ch <= 102); // a-f
}
/**
 * Returns true if the value is an IPv6 address
 * @specification http://tools.ietf.org/html/rfc2373#section-2.2
 */
export function IsIPv6(value) {
    const length = value.length;
    if (length === 0)
        return false;
    let groups = 0;
    let compressed = false;
    let i = 0;
    // handle leading '::'
    if (value.charCodeAt(0) === 58 && value.charCodeAt(1) === 58) {
        if (length === 2)
            return true; // '::' is valid
        compressed = true;
        i = 2;
    }
    while (i < length) {
        // read hex digits
        let digits = 0;
        const start = i;
        while (i < length && InRange(value.charCodeAt(i))) {
            i++;
            digits++;
        }
        if (digits === 0)
            return false;
        const next = value.charCodeAt(i);
        // check for embedded IPv4 at the end
        if (next === 46) { // '.'
            if (!IsIPv4Internal(value, start, length))
                return false;
            groups += 2;
            i = length;
            break;
        }
        if (digits > 4)
            return false;
        groups++;
        if (i === length)
            break;
        // expect ':' separator
        if (next !== 58)
            return false;
        i++;
        // check for '::' compression
        if (value.charCodeAt(i) === 58) {
            if (compressed)
                return false; // only one '::' allowed
            // check for ':::'
            if (value.charCodeAt(i + 1) === 58)
                return false;
            compressed = true;
            i++;
            if (i === length)
                break; // trailing '::'
        }
    }
    return compressed ? groups <= 7 : groups === 8;
}
