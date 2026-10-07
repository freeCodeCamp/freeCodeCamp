import { defaultTheme } from "./theme.js";
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
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion
    return output;
}
export function makeTheme(...themes) {
    // oxlint-disable-next-line typescript/no-unsafe-type-assertion
    const themesToMerge = [
        defaultTheme,
        ...themes.filter((theme) => theme != null),
    ];
    return deepMerge(...themesToMerge);
}
