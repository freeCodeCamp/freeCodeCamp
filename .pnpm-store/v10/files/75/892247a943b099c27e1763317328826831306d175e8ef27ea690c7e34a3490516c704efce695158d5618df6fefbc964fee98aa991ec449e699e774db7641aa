/** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */
import { not } from '../util/not';
import { subscribeTo } from '../util/subscribeTo';
import { filter } from '../operators/filter';
import { Observable } from '../Observable';
export function partition(source, predicate, thisArg) {
    return [
        filter(predicate, thisArg)(new Observable(subscribeTo(source))),
        filter(not(predicate, thisArg))(new Observable(subscribeTo(source)))
    ];
}
//# sourceMappingURL=partition.js.map
