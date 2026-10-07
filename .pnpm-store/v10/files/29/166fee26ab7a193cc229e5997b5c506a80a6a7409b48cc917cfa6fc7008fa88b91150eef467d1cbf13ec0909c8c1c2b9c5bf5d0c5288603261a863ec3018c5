/** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */
import { EmptyError } from '../util/EmptyError';
import { filter } from './filter';
import { take } from './take';
import { defaultIfEmpty } from './defaultIfEmpty';
import { throwIfEmpty } from './throwIfEmpty';
import { identity } from '../util/identity';
export function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) { return source.pipe(predicate ? filter(function (v, i) { return predicate(v, i, source); }) : identity, take(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
}
//# sourceMappingURL=first.js.map
