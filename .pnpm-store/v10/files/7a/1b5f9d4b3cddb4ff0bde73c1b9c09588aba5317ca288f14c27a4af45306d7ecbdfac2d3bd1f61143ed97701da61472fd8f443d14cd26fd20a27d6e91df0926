/** PURE_IMPORTS_START _util_EmptyError,_filter,_takeLast,_throwIfEmpty,_defaultIfEmpty,_util_identity PURE_IMPORTS_END */
import { EmptyError } from '../util/EmptyError';
import { filter } from './filter';
import { takeLast } from './takeLast';
import { throwIfEmpty } from './throwIfEmpty';
import { defaultIfEmpty } from './defaultIfEmpty';
import { identity } from '../util/identity';
export function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) { return source.pipe(predicate ? filter(function (v, i) { return predicate(v, i, source); }) : identity, takeLast(1), hasDefaultValue ? defaultIfEmpty(defaultValue) : throwIfEmpty(function () { return new EmptyError(); })); };
}
//# sourceMappingURL=last.js.map
