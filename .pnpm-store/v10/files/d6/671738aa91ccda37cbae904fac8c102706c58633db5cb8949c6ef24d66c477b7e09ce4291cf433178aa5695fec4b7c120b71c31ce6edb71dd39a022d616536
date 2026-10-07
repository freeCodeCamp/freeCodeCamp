import { isScalar } from '../nodes/identity.js';

function mapIncludes(ctx, items, search) {
    const { uniqueKeys } = ctx.options;
    if (uniqueKeys === false)
        return false;
    const isEqual = typeof uniqueKeys === 'function'
        ? uniqueKeys
        : (a, b) => a === b || (isScalar(a) && isScalar(b) && a.value === b.value);
    return items.some(pair => isEqual(pair.key, search));
}

export { mapIncludes };
