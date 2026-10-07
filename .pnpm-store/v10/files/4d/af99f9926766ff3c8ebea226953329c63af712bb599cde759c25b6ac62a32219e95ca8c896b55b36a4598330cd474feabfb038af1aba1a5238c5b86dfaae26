"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const ATTRIBUTES_START_TOKENS = [
    constants_1.TokenTypes.DoctypeAttributeWrapperStart,
    constants_1.TokenTypes.DoctypeAttributeValue,
];
function handleDoctypeOpen(state, token) {
    state.currentNode.open = (0, utils_1.createNodeFrom)(token);
    state.caretPosition++;
    return state;
}
function handleDoctypeClose(state, token) {
    state.currentNode.close = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    state.currentNode = state.currentNode.parentRef;
    state.currentContext = state.currentContext.parentRef;
    state.caretPosition++;
    return state;
}
function handleDoctypeAttributes(state) {
    state.currentContext = {
        parentRef: state.currentContext,
        type: constants_1.ConstructTreeContextTypes.DoctypeAttributes,
    };
    return state;
}
function construct(token, state) {
    if (token.type === constants_1.TokenTypes.DoctypeOpen) {
        return handleDoctypeOpen(state, token);
    }
    if (token.type === constants_1.TokenTypes.DoctypeClose) {
        return handleDoctypeClose(state, token);
    }
    if (ATTRIBUTES_START_TOKENS.indexOf(token.type) !== -1) {
        return handleDoctypeAttributes(state);
    }
    state.caretPosition++;
    return state;
}
