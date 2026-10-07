// ------------------------------------------------------------------
// Ranged Fast Path
// ------------------------------------------------------------------
/* Returns true if the value is a IPV4 address from index range offsets */
export function IsIPv4Internal(value, start, end) {
    let dots = 0;
    let num = 0;
    let digits = 0;
    let leading = 0;
    for (let i = start; i < end; i++) {
        const ch = value.charCodeAt(i);
        if (ch === 46) { // '.'
            if (digits === 0 || num > 255 || (leading === 48 && digits > 1))
                return false;
            dots++;
            num = 0;
            digits = 0;
            leading = 0;
        }
        else if (ch >= 48 && ch <= 57) { // '0'-'9'
            if (digits === 0)
                leading = ch;
            num = num * 10 + (ch - 48);
            digits++;
        }
        else {
            return false;
        }
    }
    return dots === 3 && digits > 0 && num <= 255 && !(leading === 48 && digits > 1);
}
/**
 * Returns true if the value is a IPV4 address
 * @specification http://tools.ietf.org/html/rfc2673#section-3.2
 */
export function IsIPv4(value) {
    return IsIPv4Internal(value, 0, value.length);
}
