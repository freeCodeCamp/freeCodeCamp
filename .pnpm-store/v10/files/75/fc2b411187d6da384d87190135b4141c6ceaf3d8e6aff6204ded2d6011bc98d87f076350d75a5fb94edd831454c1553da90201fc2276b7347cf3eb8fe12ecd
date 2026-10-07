import { _object_without_properties_loose } from "./_object_without_properties_loose.js";

export function _object_without_properties(source, excluded) {
    if (source == null) return {};

    var target = _object_without_properties_loose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }

    return target;
}
export { _object_without_properties as _ };
