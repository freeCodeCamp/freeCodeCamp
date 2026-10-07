"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function handleCommentOpen(state, token) {
    state.currentNode.open = (0, utils_1.createNodeFrom)(token);
    state.caretPosition++;
    return state;
}
function handleCommentContent(state, token) {
    state.currentNode.value = (0, utils_1.createNodeFrom)(token);
    state.caretPosition++;
    return state;
}
function handleCommentClose(state, token) {
    state.currentNode.close = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    state.currentNode = state.currentNode.parentRef;
    state.currentContext = state.currentContext.parentRef;
    state.caretPosition++;
    return state;
}
function construct(token, state) {
    if (token.type === constants_1.TokenTypes.CommentOpen) {
        return handleCommentOpen(state, token);
    }
    if (token.type === constants_1.TokenTypes.CommentContent) {
        return handleCommentContent(state, token);
    }
    if (token.type === constants_1.TokenTypes.CommentClose) {
        return handleCommentClose(state, token);
    }
    state.caretPosition++;
    return state;
}
