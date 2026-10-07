/**
 * Implements fast shallow verification of hostnames. This does not perform a
 * struct check on the content of labels (classes of Unicode characters, etc.)
 * but instead check that the structure is valid (number of labels, length of
 * labels, etc.).
 *
 * If you need stricter validation, consider using an external library.
 */
function isValidAscii(code) {
    return ((code >= 97 && code <= 122) || (code >= 48 && code <= 57) || code > 127);
}
/**
 * Check if a hostname string is valid. It's usually a preliminary check before
 * trying to use getDomain or anything else.
 *
 * Beware: it does not check if the TLD exists.
 */
export default function (hostname) {
    if (hostname.length > 255) {
        return false;
    }
    if (hostname.length === 0) {
        return false;
    }
    if (
    /*@__INLINE__*/ !isValidAscii(hostname.charCodeAt(0)) &&
        hostname.charCodeAt(0) !== 46 && // '.' (dot)
        hostname.charCodeAt(0) !== 95 // '_' (underscore)
    ) {
        return false;
    }
    // Validate hostname according to RFC
    let lastDotIndex = -1;
    let lastCharCode = -1;
    const len = hostname.length;
    for (let i = 0; i < len; i += 1) {
        const code = hostname.charCodeAt(i);
        if (code === 46 /* '.' */) {
            if (
            // Check that previous label is < 63 bytes long (64 = 63 + '.')
            i - lastDotIndex > 64 ||
                // Check that previous character was not already a '.'
                lastCharCode === 46 ||
                // Check that the previous label does not end with a '-' (dash)
                lastCharCode === 45 ||
                // Check that the previous label does not end with a '_' (underscore)
                lastCharCode === 95) {
                return false;
            }
            lastDotIndex = i;
        }
        else if (!( /*@__INLINE__*/(isValidAscii(code) || code === 45 || code === 95))) {
            // Check if there is a forbidden character in the label
            return false;
        }
        lastCharCode = code;
    }
    return (
    // Check that last label is shorter than 63 chars
    len - lastDotIndex - 1 <= 63 &&
        // Check that the last character is an allowed trailing label character.
        // Since we already checked that the char is a valid hostname character,
        // we only need to check that it's different from '-'.
        lastCharCode !== 45);
}
//# sourceMappingURL=is-valid.js.map