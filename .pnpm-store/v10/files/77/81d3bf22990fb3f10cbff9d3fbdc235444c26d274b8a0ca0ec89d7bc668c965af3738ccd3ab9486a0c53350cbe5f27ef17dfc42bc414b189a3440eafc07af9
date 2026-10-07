"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const OPEN_TAG_END_TOKENS = [
    constants_1.TokenTypes.OpenTagEnd,
    constants_1.TokenTypes.OpenScriptTagEnd,
    constants_1.TokenTypes.OpenStyleTagEnd,
];
function getLastAttribute(state) {
    const attributes = state.currentNode.attributes;
    return attributes[attributes.length - 1];
}
function handleOpenTagEnd(state) {
    state.currentContext = state.currentContext.parentRef;
    return state;
}
function handleAttributeKey(state, token) {
    const attribute = getLastAttribute(state);
    if (attribute.key !== undefined || attribute.value !== undefined) {
        state.currentContext = state.currentContext.parentRef;
        return state;
    }
    attribute.key = (0, utils_1.createNodeFrom)(token);
    state.caretPosition++;
    return state;
}
function handleAttributeAssignment(state) {
    const attribute = getLastAttribute(state);
    if (attribute.value !== undefined) {
        state.currentContext = state.currentContext.parentRef;
        return state;
    }
    state.currentContext = {
        parentRef: state.currentContext,
        type: constants_1.ConstructTreeContextTypes.AttributeValue,
    };
    state.caretPosition++;
    return state;
}
function construct(token, state) {
    if (OPEN_TAG_END_TOKENS.indexOf(token.type) !== -1) {
        return handleOpenTagEnd(state);
    }
    if (token.type === constants_1.TokenTypes.AttributeKey) {
        return handleAttributeKey(state, token);
    }
    if (token.type === constants_1.TokenTypes.AttributeAssignment) {
        return handleAttributeAssignment(state);
    }
    state.caretPosition++;
    return state;
}
