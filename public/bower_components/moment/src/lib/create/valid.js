import extend from '../utils/extend';
import { createUTC } from './utc';
import getParsingFlags from '../create/parsing-flags';

export function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        m._isValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated;

        if (m._strict) {
            m._isValid = m._isValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }
    }
    return m._isValid;
}

export function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}
