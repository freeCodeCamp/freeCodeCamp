import { reduce } from './reduce';
export function max(comparer) {
    const max = (typeof comparer === 'function')
        ? (x, y) => comparer(x, y) > 0 ? x : y
        : (x, y) => x > y ? x : y;
    return reduce(max);
}
//# sourceMappingURL=max.js.map