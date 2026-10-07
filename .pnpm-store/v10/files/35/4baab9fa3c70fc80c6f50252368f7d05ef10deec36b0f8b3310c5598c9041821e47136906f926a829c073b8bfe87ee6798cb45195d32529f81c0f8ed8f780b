"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNonNullWrapper = exports.getBaseType = exports.isWrapperType = exports.mergeOutputs = void 0;
const graphql_1 = require("graphql");
function mergeOutputs(content) {
    const result = { content: '', prepend: [], append: [] };
    if (Array.isArray(content)) {
        content.forEach(item => {
            if (typeof item === 'string') {
                result.content += item;
            }
            else {
                result.content += item.content;
                result.prepend.push(...(item.prepend || []));
                result.append.push(...(item.append || []));
            }
        });
    }
    return [...result.prepend, result.content, ...result.append].join('\n');
}
exports.mergeOutputs = mergeOutputs;
function isWrapperType(t) {
    return (0, graphql_1.isListType)(t) || (0, graphql_1.isNonNullType)(t);
}
exports.isWrapperType = isWrapperType;
function getBaseType(type) {
    if (isWrapperType(type)) {
        return getBaseType(type.ofType);
    }
    return type;
}
exports.getBaseType = getBaseType;
function removeNonNullWrapper(type) {
    return (0, graphql_1.isNonNullType)(type) ? type.ofType : type;
}
exports.removeNonNullWrapper = removeNonNullWrapper;
