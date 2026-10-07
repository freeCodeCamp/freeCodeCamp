import * as Idna from './_idna.mjs';
/**
 * Returns true if the value is a valid hostname.
 * @specification https://tools.ietf.org/html/rfc1123
 * @specification https://tools.ietf.org/html/rfc5891
 * @specification https://tools.ietf.org/html/rfc5892
 */
export function IsHostname(value) {
    if (value.length === 0 || value.length > 253)
        return false;
    if (value.charCodeAt(value.length - 1) === 46)
        return false;
    for (const label of value.split('.')) {
        if (!Idna.IsLabel(label))
            return false;
    }
    return true;
}
