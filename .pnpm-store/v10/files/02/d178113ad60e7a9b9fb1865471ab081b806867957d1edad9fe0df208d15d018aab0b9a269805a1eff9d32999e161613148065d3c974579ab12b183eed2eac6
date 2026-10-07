import { not } from '../util/not';
import { filter } from './filter';
export function partition(predicate, thisArg) {
    return (source) => [
        filter(predicate, thisArg)(source),
        filter(not(predicate, thisArg))(source)
    ];
}
//# sourceMappingURL=partition.js.map