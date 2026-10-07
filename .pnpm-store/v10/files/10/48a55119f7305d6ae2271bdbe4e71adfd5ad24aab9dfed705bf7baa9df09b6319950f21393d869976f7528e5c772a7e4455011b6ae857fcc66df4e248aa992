"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = exports.camelCaseTransformMerge = exports.camelCaseTransform = void 0;
var tslib_1 = require("tslib");
var pascal_case_1 = require("pascal-case");
function camelCaseTransform(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return pascal_case_1.pascalCaseTransform(input, index);
}
exports.camelCaseTransform = camelCaseTransform;
function camelCaseTransformMerge(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return pascal_case_1.pascalCaseTransformMerge(input);
}
exports.camelCaseTransformMerge = camelCaseTransformMerge;
function camelCase(input, options) {
    if (options === void 0) { options = {}; }
    return pascal_case_1.pascalCase(input, tslib_1.__assign({ transform: camelCaseTransform }, options));
}
exports.camelCase = camelCase;
//# sourceMappingURL=index.js.map