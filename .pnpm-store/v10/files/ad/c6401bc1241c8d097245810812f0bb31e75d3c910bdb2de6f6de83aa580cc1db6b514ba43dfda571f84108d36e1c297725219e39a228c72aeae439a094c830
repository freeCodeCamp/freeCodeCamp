"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const ATTRIBUTE_START_TOKENS = [
    constants_1.TokenTypes.AttributeKey,
    constants_1.TokenTypes.AttributeAssignment,
];
function handleOpenStyleTagStart(state, token) {
    state.currentNode.openStart = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    state.caretPosition++;
    return state;
}
function handleAttributeStartStyle(state) {
    state.currentContext = {
        parentRef: state.currentContext,
        type: constants_1.ConstructTreeContextTypes.Attributes,
    };
    return state;
}
function handleOpenStyleTagEnd(state, token) {
    state.currentNode.openEnd = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    state.caretPosition++;
    return state;
}
function handleStyleContent(state, token) {
    state.currentNode.value = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    state.caretPosition++;
    return state;
}
function handleCloseStyleTag(state, token) {
    state.currentNode.close = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    state.currentNode = state.currentNode.parentRef;
    state.currentContext = state.currentContext.parentRef;
    state.caretPosition++;
    return state;
}
function construct(token, state) {
    if (token.type === constants_1.TokenTypes.OpenStyleTagStart) {
        return handleOpenStyleTagStart(state, token);
    }
    if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
        return handleAttributeStartStyle(state);
    }
    if (token.type === constants_1.TokenTypes.OpenStyleTagEnd) {
        return handleOpenStyleTagEnd(state, token);
    }
    if (token.type === constants_1.TokenTypes.StyleTagContent) {
        return handleStyleContent(state, token);
    }
    if (token.type === constants_1.TokenTypes.CloseStyleTag) {
        return handleCloseStyleTag(state, token);
    }
    state.caretPosition++;
    return state;
}
