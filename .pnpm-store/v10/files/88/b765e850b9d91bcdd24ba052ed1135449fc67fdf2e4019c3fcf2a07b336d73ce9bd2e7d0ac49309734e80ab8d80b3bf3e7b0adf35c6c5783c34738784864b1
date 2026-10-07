/** PURE_IMPORTS_START  PURE_IMPORTS_END */
export function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name_1 = propertyKeys[j];
            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
    }
}
//# sourceMappingURL=applyMixins.js.map
