"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTheme = makeTheme;
const theme_ts_1 = require("./theme.js");
function isPlainObject(value) {
    if (typeof value !== 'object' || value === null)
        return false;
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
}
function deepMerge(...objects) {
    const output = {};
    for (const obj of objects) {
        for (const [key, value] of Object.entries(obj)) {
            const prevValue = output[key];
            output[key] =
                isPlainObject(prevValue) && isPlainObject(value)
                    ? deepMerge(prevValue, value)
                    : value;
        }
    }
    return output;
}
function makeTheme(...themes) {
    const themesToMerge = [
        theme_ts_1.defaultTheme,
        ...themes.filter((theme) => theme != null),
    ];
    return deepMerge(...themesToMerge);
}
