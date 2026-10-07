"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMethodOrPropertySelector = exports.isMetaSelector = exports.selectorTypeToMessageString = void 0;
const enums_1 = require("./enums");
function selectorTypeToMessageString(selectorType) {
    const notCamelCase = selectorType.replace(/([A-Z])/g, ' $1');
    return notCamelCase.charAt(0).toUpperCase() + notCamelCase.slice(1);
}
exports.selectorTypeToMessageString = selectorTypeToMessageString;
function isMetaSelector(selector) {
    return selector in enums_1.MetaSelectors;
}
exports.isMetaSelector = isMetaSelector;
function isMethodOrPropertySelector(selector) {
    return (selector === enums_1.MetaSelectors.method || selector === enums_1.MetaSelectors.property);
}
exports.isMethodOrPropertySelector = isMethodOrPropertySelector;
//# sourceMappingURL=shared.js.map