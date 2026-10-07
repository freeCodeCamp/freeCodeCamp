import { _ as _object_without_properties_loose } from "./_object_without_properties_loose.js";

function _object_without_properties(source, excluded) {
    if (source == null) return {};

    var target = {}, sourceKeys, key, i;
    if (typeof Reflect !== "undefined" && Reflect.ownKeys) {
        sourceKeys = Reflect.ownKeys(source);
        for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }

        return target;
    }

    target = _object_without_properties_loose(source, excluded);
    if (Object.getOwnPropertySymbols) {
        sourceKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }

    return target;
}

export { _object_without_properties as _ };
