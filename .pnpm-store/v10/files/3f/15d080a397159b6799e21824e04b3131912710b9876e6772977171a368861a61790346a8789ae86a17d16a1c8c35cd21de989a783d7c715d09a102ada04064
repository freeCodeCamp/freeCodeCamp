/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */
import { reduce } from './reduce';
export function min(comparer) {
    var min = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) < 0 ? x : y; }
        : function (x, y) { return x < y ? x : y; };
    return reduce(min);
}
//# sourceMappingURL=min.js.map
