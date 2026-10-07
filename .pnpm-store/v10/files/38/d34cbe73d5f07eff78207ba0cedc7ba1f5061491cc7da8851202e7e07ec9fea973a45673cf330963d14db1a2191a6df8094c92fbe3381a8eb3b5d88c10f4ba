export function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else obj[key] = value;

    return obj;
}
export { _define_property as _ };
