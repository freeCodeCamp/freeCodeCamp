import { IsIdnLabel } from './_idna.mjs';
/**
 * Returns true if the value is a valid internationalized (IDN) hostname.
 * @specification https://tools.ietf.org/html/rfc3490
 * @specification https://tools.ietf.org/html/rfc5891
 * @specification https://tools.ietf.org/html/rfc5892
 */
export function IsIdnHostname(value) {
    if (value.length === 0 || value.includes(' '))
        return false;
    const canonical = value.normalize('NFC').replace(/[\u002E\u3002\uFF0E\uFF61]/g, '.');
    if (canonical.length > 253)
        return false;
    for (const label of canonical.split('.')) {
        if (!IsIdnLabel(label))
            return false;
    }
    return true;
}
