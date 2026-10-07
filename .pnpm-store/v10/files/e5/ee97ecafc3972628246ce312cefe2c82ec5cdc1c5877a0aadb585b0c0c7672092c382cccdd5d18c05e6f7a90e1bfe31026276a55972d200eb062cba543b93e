function IsAlpha(ch) {
    return (ch >= 97 && ch <= 122) || (ch >= 65 && ch <= 90); // a-z, A-Z
}
function IsAlphaNumeric(ch) {
    return IsAlpha(ch) || (ch >= 48 && ch <= 57); // a-z, A-Z, 0-9
}
function IsHex(ch) {
    return (ch >= 48 && ch <= 57) || // 0-9
        (ch >= 65 && ch <= 70) || // A-F
        (ch >= 97 && ch <= 102); // a-f
}
function IsSchemeChar(ch) {
    return IsAlphaNumeric(ch) ||
        ch === 43 || ch === 45 || ch === 46; // '+', '-', '.'
}
function IsUnreserved(ch) {
    return IsAlphaNumeric(ch) ||
        ch === 45 || ch === 46 || // '-', '.'
        ch === 95 || ch === 126; // '_', '~'
}
function IsSubDelim(ch) {
    return ch === 33 || ch === 36 || ch === 38 || ch === 39 ||
        ch === 40 || ch === 41 || ch === 42 || ch === 43 ||
        ch === 44 || ch === 59 || ch === 61; // ! $ & ' ( ) * + , ; =
}
function IsPchar(ch) {
    return IsUnreserved(ch) || IsSubDelim(ch) || ch === 58 || ch === 64; // ':', '@'
}
/**
 * Returns true if the value matches RFC 3986 URI syntax.
 * @specification https://tools.ietf.org/html/rfc3986
 */
export function IsUri(value) {
    const length = value.length;
    if (length === 0)
        return false;
    // Scheme: must start with a letter
    if (!IsAlpha(value.charCodeAt(0)))
        return false;
    // Scheme: continues until ':'
    let i = 1;
    while (i < length) {
        const ch = value.charCodeAt(i);
        if (ch === 58)
            break; // ':'
        if (!IsSchemeChar(ch))
            return false;
        i++;
    }
    // Ensure scheme is terminated by ':'
    if (value.charCodeAt(i) !== 58)
        return false;
    i++;
    // Authority: optional '//'
    if (value.charCodeAt(i) === 47 && value.charCodeAt(i + 1) === 47) {
        i += 2;
        // Userinfo: check for '@' before path/query/fragment delimiters
        const authorityStart = i;
        let atPos = -1;
        for (let j = i; j < length; j++) {
            const ch = value.charCodeAt(j);
            if (ch === 64) {
                atPos = j;
                break;
            } // '@'
            if (ch === 47 || ch === 63 || ch === 35)
                break; // '/', '?', '#'
        }
        if (atPos !== -1) {
            // Userinfo: validate allowed chars and percent-encoding
            for (let j = authorityStart; j < atPos; j++) {
                const ch = value.charCodeAt(j);
                if (ch === 91 || ch === 93)
                    return false; // No '[' or ']' in userinfo
                if (ch === 37) { // '%' percent-encoding
                    if (j + 2 >= atPos || !IsHex(value.charCodeAt(j + 1)) || !IsHex(value.charCodeAt(j + 2)))
                        return false;
                    j += 2;
                }
                else if (!IsUnreserved(ch) && !IsSubDelim(ch) && ch !== 58)
                    return false;
            }
            i = atPos + 1;
        }
        // Host: IP-literal [addr] or reg-name
        if (value.charCodeAt(i) === 91) { // '['
            i++;
            while (i < length && value.charCodeAt(i) !== 93)
                i++;
            if (value.charCodeAt(i) !== 93)
                return false; // ']'
            i++;
        }
        else {
            // Host: validate ASCII; skip validation for non-ASCII (Unicode hosts)
            while (i < length) {
                const ch = value.charCodeAt(i);
                if (ch === 47 || ch === 63 || ch === 35 || ch === 58)
                    break;
                if (ch < 128 && !IsUnreserved(ch) && !IsSubDelim(ch))
                    return false;
                i++;
            }
        }
        // Port: optional digits after ':'
        if (value.charCodeAt(i) === 58) { // ':'
            i++;
            while (i < length) {
                const ch = value.charCodeAt(i);
                if (ch === 47 || ch === 63 || ch === 35)
                    break;
                if (ch < 48 || ch > 57)
                    return false; // 0-9
                i++;
            }
        }
    }
    // Path, Query, and Fragment
    while (i < length) {
        const ch = value.charCodeAt(i);
        if (ch === 37) { // '%' percent-encoding
            if (i + 2 >= length || !IsHex(value.charCodeAt(i + 1)) || !IsHex(value.charCodeAt(i + 2)))
                return false;
            i += 2;
        }
        else if (ch > 127) {
            return false; // URI is ASCII-only
        }
        else if (!(IsPchar(ch) || ch === 47 || ch === 63 || ch === 35)) {
            return false; // '/', '?', '#'
        }
        i++;
    }
    return true;
}
