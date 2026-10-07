"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToString = void 0;
/**
 * Stringify an array of values.
 */
const arrayToString = (array, space, next) => {
    // Map array values to their stringified values with correct indentation.
    const values = array
        .map(function (value, index) {
        const result = next(value, index);
        if (result === undefined)
            return String(result);
        return space + result.split("\n").join(`\n${space}`);
    })
        .join(space ? ",\n" : ",");
    const eol = space && values ? "\n" : "";
    return `[${eol}${values}${eol}]`;
};
exports.arrayToString = arrayToString;
//# sourceMappingURL=array.js.map