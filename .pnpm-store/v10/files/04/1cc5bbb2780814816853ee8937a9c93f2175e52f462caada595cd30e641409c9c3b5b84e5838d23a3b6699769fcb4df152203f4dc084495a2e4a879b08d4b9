export const numberSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    const numberValue = parseInt(obj[key], 10);
    if (Number.isNaN(numberValue)) {
        throw new TypeError(`Cannot load ${type} '${key}'. Expected number, got '${obj[key]}'.`);
    }
    return numberValue;
};
