"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectorTypeToMessageString = selectorTypeToMessageString;
exports.isMetaSelector = isMetaSelector;
exports.isMethodOrPropertySelector = isMethodOrPropertySelector;
const enums_1 = require("./enums");
function selectorTypeToMessageString(selectorType) {
    const notCamelCase = selectorType.replaceAll(/([A-Z])/g, ' $1');
    return notCamelCase.charAt(0).toUpperCase() + notCamelCase.slice(1);
}
function isMetaSelector(selector) {
    return selector in enums_1.MetaSelectors;
}
function isMethodOrPropertySelector(selector) {
    return (selector === enums_1.MetaSelectors.method || selector === enums_1.MetaSelectors.property);
}
//# sourceMappingURL=shared.js.map