import { string } from './string.js';
import { jsonConstraintsBuilder } from './_internals/helpers/JsonConstraintsBuilder.js';
import { anything } from './anything.js';
import { fullUnicodeString } from './fullUnicodeString.js';
export function jsonValue(constraints = {}) {
    const noUnicodeString = constraints.noUnicodeString === undefined || constraints.noUnicodeString === true;
    const stringArbitrary = 'stringUnit' in constraints
        ? string({ unit: constraints.stringUnit })
        : noUnicodeString
            ? string()
            : fullUnicodeString();
    return anything(jsonConstraintsBuilder(stringArbitrary, constraints));
}
