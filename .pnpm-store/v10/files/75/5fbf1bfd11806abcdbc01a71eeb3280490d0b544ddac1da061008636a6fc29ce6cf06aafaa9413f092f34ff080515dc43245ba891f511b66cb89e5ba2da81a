"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const ATTRIBUTE_START_TOKENS = [
    constants_1.TokenTypes.AttributeKey,
    constants_1.TokenTypes.AttributeAssignment,
];
const ATTRIBUTES_END_TOKENS = [
    constants_1.TokenTypes.OpenTagEnd,
    constants_1.TokenTypes.OpenStyleTagEnd,
    constants_1.TokenTypes.OpenScriptTagEnd,
];
function handlerAttributeStart(state, token) {
    (0, utils_1.initAttributesIfNone)(state.currentNode);
    // new empty attribute
    state.currentNode.attributes.push({
        type: constants_1.NodeTypes.Attribute,
        range: (0, utils_1.cloneRange)(token.range),
        loc: (0, utils_1.cloneLocation)(token.loc),
    });
    state.currentContext = {
        parentRef: state.currentContext,
        type: constants_1.ConstructTreeContextTypes.Attribute,
    };
    return state;
}
function handleOpenTagEnd(state) {
    state.currentContext = state.currentContext.parentRef;
    return state;
}
function construct(token, state) {
    if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
        return handlerAttributeStart(state, token);
    }
    if (ATTRIBUTES_END_TOKENS.indexOf(token.type) !== -1) {
        return handleOpenTagEnd(state);
    }
    state.caretPosition++;
    return state;
}
