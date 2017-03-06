import { isValid as _isValid } from '../create/valid';
import extend from '../utils/extend';
import getParsingFlags from '../create/parsing-flags';

export function isValid () {
    return _isValid(this);
}

export function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

export function invalidAt () {
    return getParsingFlags(this).overflow;
}
