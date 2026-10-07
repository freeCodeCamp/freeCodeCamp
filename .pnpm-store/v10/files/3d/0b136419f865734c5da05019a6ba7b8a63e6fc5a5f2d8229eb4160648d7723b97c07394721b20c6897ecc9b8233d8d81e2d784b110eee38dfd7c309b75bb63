/** PURE_IMPORTS_START _util_not,_filter PURE_IMPORTS_END */
import { not } from '../util/not';
import { filter } from './filter';
export function partition(predicate, thisArg) {
    return function (source) {
        return [
            filter(predicate, thisArg)(source),
            filter(not(predicate, thisArg))(source)
        ];
    };
}
//# sourceMappingURL=partition.js.map
