"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const ATTRIBUTE_START_TOKENS = [
    constants_1.TokenTypes.AttributeKey,
    constants_1.TokenTypes.AttributeAssignment,
];
const SELF_CLOSING_TAGS = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
];
function handleOpenTagStart(state, token) {
    state.currentNode.openStart = (0, utils_1.createNodeFrom)(token);
    state.currentContext = {
        parentRef: state.currentContext,
        type: constants_1.ConstructTreeContextTypes.TagName,
    };
    return state;
}
function handleAttributeStart(state) {
    state.currentContext = {
        parentRef: state.currentContext,
        type: constants_1.ConstructTreeContextTypes.Attributes,
    };
    return state;
}
function handleOpenTagEnd(state, token) {
    const tagName = state.currentNode.name;
    state.currentNode.openEnd = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    if (SELF_CLOSING_TAGS.indexOf(tagName) !== -1 ||
        state.currentNode.openEnd.value === "/>") {
        state.currentNode.selfClosing = true;
        state.currentNode = state.currentNode.parentRef;
        state.currentContext = state.currentContext.parentRef;
        state.caretPosition++;
        return state;
    }
    state.currentNode.selfClosing = false;
    state.currentContext = {
        parentRef: state.currentContext,
        type: constants_1.ConstructTreeContextTypes.TagContent,
    };
    state.caretPosition++;
    return state;
}
function handleCloseTag(state, token) {
    state.currentNode.close = (0, utils_1.createNodeFrom)(token);
    (0, utils_1.updateNodeEnd)(state.currentNode, token);
    state.currentNode = state.currentNode.parentRef;
    state.currentContext = state.currentContext.parentRef;
    state.caretPosition++;
    return state;
}
function construct(token, state) {
    if (token.type === constants_1.TokenTypes.OpenTagStart) {
        return handleOpenTagStart(state, token);
    }
    if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
        return handleAttributeStart(state);
    }
    if (token.type === constants_1.TokenTypes.OpenTagEnd) {
        return handleOpenTagEnd(state, token);
    }
    if (token.type === constants_1.TokenTypes.CloseTag) {
        return handleCloseTag(state, token);
    }
    state.caretPosition++;
    return state;
}
