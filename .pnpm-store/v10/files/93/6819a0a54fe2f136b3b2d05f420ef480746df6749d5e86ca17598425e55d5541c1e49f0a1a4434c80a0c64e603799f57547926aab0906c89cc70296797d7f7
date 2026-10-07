/** PURE_IMPORTS_START _util_ArgumentOutOfRangeError,_filter,_throwIfEmpty,_defaultIfEmpty,_take PURE_IMPORTS_END */
import { ArgumentOutOfRangeError } from '../util/ArgumentOutOfRangeError';
import { filter } from './filter';
import { throwIfEmpty } from './throwIfEmpty';
import { defaultIfEmpty } from './defaultIfEmpty';
import { take } from './take';
export function elementAt(index, defaultValue) {
    if (index < 0) {
        throw new ArgumentOutOfRangeError();
    }
    var hasDefaultValue = arguments.length >= 2;
    return function (source) {
        return source.pipe(filter(function (v, i) { return i === index; }), take(1), hasDefaultValue
            ? defaultIfEmpty(defaultValue)
            : throwIfEmpty(function () { return new ArgumentOutOfRangeError(); }));
    };
}
//# sourceMappingURL=elementAt.js.map
