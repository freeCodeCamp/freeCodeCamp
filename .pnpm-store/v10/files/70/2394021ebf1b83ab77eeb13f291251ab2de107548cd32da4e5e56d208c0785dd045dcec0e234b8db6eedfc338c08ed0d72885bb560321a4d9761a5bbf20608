"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const ATTRIBUTE_START_TOKENS = [
    constants_1.TokenTypes.AttributeKey,
    constants_1.TokenTypes.AttributeAssignment,
];
function handleOpenScriptTagStart(state, token) {
    state.currentNode.openStart = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    state.caretPosition++;
    return state;
}
function handleAttributeStartScript(state) {
    state.currentContext = {
        parentRef: state.currentContext,
        type: constants_1.ConstructTreeContextTypes.Attributes,
    };
    return state;
}
function handleOpenScriptTagEnd(state, token) {
    state.currentNode.openEnd = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    state.caretPosition++;
    return state;
}
function handleScriptContent(state, token) {
    state.currentNode.value = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    state.caretPosition++;
    return state;
}
function handleCloseScriptTag(state, token) {
    state.currentNode.close = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    state.currentNode = state.currentNode.parentRef;
    state.currentContext = state.currentContext.parentRef;
    state.caretPosition++;
    return state;
}
function construct(token, state) {
    if (token.type === constants_1.TokenTypes.OpenScriptTagStart) {
        return handleOpenScriptTagStart(state, token);
    }
    if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
        return handleAttributeStartScript(state);
    }
    if (token.type === constants_1.TokenTypes.OpenScriptTagEnd) {
        return handleOpenScriptTagEnd(state, token);
    }
    if (token.type === constants_1.TokenTypes.ScriptTagContent) {
        return handleScriptContent(state, token);
    }
    if (token.type === constants_1.TokenTypes.CloseScriptTag) {
        return handleCloseScriptTag(state, token);
    }
    state.caretPosition++;
    return state;
}
