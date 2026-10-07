function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};

    var target = {}, sourceKeys = Object.getOwnPropertyNames(source), key, i;
    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
    }

    return target;
}
export { _object_without_properties_loose as _ };
