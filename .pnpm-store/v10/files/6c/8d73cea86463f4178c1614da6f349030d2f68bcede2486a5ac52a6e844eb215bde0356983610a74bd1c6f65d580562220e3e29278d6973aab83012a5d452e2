"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const ATTRIBUTE_START_TOKENS = [
    constants_1.TokenTypes.DoctypeAttributeWrapperStart,
    constants_1.TokenTypes.DoctypeAttributeValue,
];
function handleDoctypeClose(state) {
    state.currentContext = state.currentContext.parentRef;
    return state;
}
function handleAttribute(state, token) {
    (0, utils_1.initAttributesIfNone)(state.currentNode);
    // new empty attribute
    state.currentNode.attributes.push({
        type: constants_1.NodeTypes.DoctypeAttribute,
        range: (0, utils_1.cloneRange)(token.range),
        loc: (0, utils_1.cloneLocation)(token.loc),
    });
    state.currentContext = {
        type: constants_1.ConstructTreeContextTypes.DoctypeAttribute,
        parentRef: state.currentContext,
    };
    return state;
}
function construct(token, state) {
    if (token.type === constants_1.TokenTypes.DoctypeClose) {
        return handleDoctypeClose(state);
    }
    if (ATTRIBUTE_START_TOKENS.indexOf(token.type) !== -1) {
        return handleAttribute(state, token);
    }
    state.caretPosition++;
    return state;
}
