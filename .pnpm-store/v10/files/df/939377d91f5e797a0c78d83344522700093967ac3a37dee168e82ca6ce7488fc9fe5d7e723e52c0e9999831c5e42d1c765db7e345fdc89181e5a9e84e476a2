"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeNamedTypeArray = void 0;
const utils_1 = require("@graphql-tools/utils");
function alreadyExists(arr, other) {
    return !!arr.find(i => i.name.value === other.name.value);
}
function mergeNamedTypeArray(first = [], second = [], config = {}) {
    const result = [...second, ...first.filter(d => !alreadyExists(second, d))];
    if (config && config.sort) {
        result.sort(utils_1.compareNodes);
    }
    return result;
}
exports.mergeNamedTypeArray = mergeNamedTypeArray;
