"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const VALUE_END_TOKENS = [
    constants_1.TokenTypes.OpenTagEnd,
    constants_1.TokenTypes.AttributeKey,
    constants_1.TokenTypes.AttributeAssignment,
    constants_1.TokenTypes.OpenScriptTagEnd,
    constants_1.TokenTypes.OpenStyleTagEnd,
];
function getLastAttribute(state) {
    const attributes = state.currentNode.attributes;
    return attributes[attributes.length - 1];
}
function handleValueEnd(state) {
    state.currentContext = state.currentContext.parentRef;
    return state;
}
function handleAttributeValue(state, token) {
    const attribute = getLastAttribute(state);
    attribute.value = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(attribute, token);
    state.caretPosition++;
    return state;
}
function handleAttributeValueWrapperStart(state, token) {
    const attribute = getLastAttribute(state);
    attribute.startWrapper = (0, utils_1.createNodeFrom)(token);
    if (!attribute.key) {
        attribute.range = (0, utils_1.cloneRange)(token.range);
        attribute.loc = (0, utils_1.cloneLocation)(token.loc);
    }
    state.caretPosition++;
    return state;
}
function handleAttributeValueWrapperEnd(state, token) {
    const attribute = getLastAttribute(state);
    attribute.endWrapper = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(attribute, token);
    state.caretPosition++;
    return state;
}
function construct(token, state) {
    if (VALUE_END_TOKENS.indexOf(token.type) !== -1) {
        return handleValueEnd(state);
    }
    if (token.type === constants_1.TokenTypes.AttributeValue) {
        return handleAttributeValue(state, token);
    }
    if (token.type === constants_1.TokenTypes.AttributeValueWrapperStart) {
        return handleAttributeValueWrapperStart(state, token);
    }
    if (token.type === constants_1.TokenTypes.AttributeValueWrapperEnd) {
        return handleAttributeValueWrapperEnd(state, token);
    }
    state.caretPosition++;
    return state;
}
