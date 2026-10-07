var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { array } from '../../array.js';
export function typedIntArrayArbitraryArbitraryBuilder(constraints, defaultMin, defaultMax, TypedArrayClass, arbitraryBuilder) {
    const generatorName = TypedArrayClass.name;
    const { min = defaultMin, max = defaultMax } = constraints, arrayConstraints = __rest(constraints, ["min", "max"]);
    if (min > max) {
        throw new Error(`Invalid range passed to ${generatorName}: min must be lower than or equal to max`);
    }
    if (min < defaultMin) {
        throw new Error(`Invalid min value passed to ${generatorName}: min must be greater than or equal to ${defaultMin}`);
    }
    if (max > defaultMax) {
        throw new Error(`Invalid max value passed to ${generatorName}: max must be lower than or equal to ${defaultMax}`);
    }
    return array(arbitraryBuilder({ min, max }), arrayConstraints).map((data) => TypedArrayClass.from(data), (value) => {
        if (!(value instanceof TypedArrayClass))
            throw new Error('Invalid type');
        return [...value];
    });
}
