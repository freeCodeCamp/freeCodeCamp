import extend from '../utils/extend';
import { createUTC } from './utc';
import getParsingFlags from '../create/parsing-flags';
import some from '../utils/some';

export function isValid(m) {
    var flags = null,
        parsedParts = false,
        isNowValid = m._d && !isNaN(m._d.getTime());
    if (isNowValid) {
        flags = getParsingFlags(m);
        parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        isNowValid =
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidEra &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));
        if (m._strict) {
            isNowValid =
                isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }
    }
    if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
    } else {
        return isNowValid;
    }
    return m._isValid;
}

export function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    } else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}
