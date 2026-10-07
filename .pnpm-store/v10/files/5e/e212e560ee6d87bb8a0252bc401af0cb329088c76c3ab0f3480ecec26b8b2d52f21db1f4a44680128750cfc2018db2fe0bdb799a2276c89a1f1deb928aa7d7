/**
 * Creates a new object with the same keys as the original object, but without the excluded keys.
 * @param source original object
 * @param excluded keys to remove from the original object
 * @returns the new object
 */ function omit(source, excluded) {
    if (source === null || source === undefined) {
        return source;
    }
    return Object.keys(source).reduce(function(target, key) {
        if (excluded.indexOf(key) >= 0) {
            return target;
        }
        var validKey = key;
        target[validKey] = source[validKey];
        return target;
    }, {});
}

export { omit };
