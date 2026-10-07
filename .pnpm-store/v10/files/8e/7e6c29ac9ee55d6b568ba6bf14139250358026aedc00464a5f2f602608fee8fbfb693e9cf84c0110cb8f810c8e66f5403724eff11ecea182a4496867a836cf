import { reduce } from './reduce';
export function min(comparer) {
    const min = (typeof comparer === 'function')
        ? (x, y) => comparer(x, y) < 0 ? x : y
        : (x, y) => x < y ? x : y;
    return reduce(min);
}
//# sourceMappingURL=min.js.map