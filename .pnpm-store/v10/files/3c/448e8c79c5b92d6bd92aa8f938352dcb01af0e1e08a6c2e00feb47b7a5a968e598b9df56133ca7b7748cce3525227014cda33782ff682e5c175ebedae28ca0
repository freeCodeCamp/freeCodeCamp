"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function getLastAttribute(state) {
    const attributes = state.currentNode.attributes;
    return attributes[attributes.length - 1];
}
function handleDoctypeClose(state) {
    state.currentContext = state.currentContext.parentRef;
    return state;
}
function handleAttributeValue(state, token) {
    const attribute = getLastAttribute(state);
    if (attribute.value !== undefined) {
        state.currentContext = state.currentContext.parentRef;
        return state;
    }
    attribute.value = (0, utils_1.createNodeFrom)(token);
    if (!attribute.startWrapper) {
        attribute.range = (0, utils_1.cloneRange)(token.range);
    }
    state.caretPosition++;
    return state;
}
function handleAttributeWrapperStart(state, token) {
    const attribute = getLastAttribute(state);
    if (attribute.value !== undefined) {
        state.currentContext = state.currentContext.parentRef;
        return state;
    }
    attribute.startWrapper = (0, utils_1.createNodeFrom)(token);
    attribute.range = (0, utils_1.cloneRange)(token.range);
    state.caretPosition++;
    return state;
}
function handleAttributeWrapperEnd(state, token) {
    const attribute = getLastAttribute(state);
    attribute.endWrapper = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(attribute, token);
    state.currentContext = state.currentContext.parentRef;
    state.caretPosition++;
    return state;
}
function construct(token, state) {
    if (token.type === constants_1.TokenTypes.DoctypeClose) {
        return handleDoctypeClose(state);
    }
    if (token.type === constants_1.TokenTypes.DoctypeAttributeWrapperStart) {
        return handleAttributeWrapperStart(state, token);
    }
    if (token.type === constants_1.TokenTypes.DoctypeAttributeWrapperEnd) {
        return handleAttributeWrapperEnd(state, token);
    }
    if (token.type === constants_1.TokenTypes.DoctypeAttributeValue) {
        return handleAttributeValue(state, token);
    }
    state.caretPosition++;
    return state;
}
