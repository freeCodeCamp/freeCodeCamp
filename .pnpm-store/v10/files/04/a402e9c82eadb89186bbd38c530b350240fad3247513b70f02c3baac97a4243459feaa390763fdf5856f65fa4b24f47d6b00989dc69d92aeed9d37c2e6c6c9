"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function handleTagOpenStart(state, token) {
    state.currentNode.name = (0, utils_1.parseOpenTagName)(token.value);
    state.currentContext = state.currentContext.parentRef;
    return state;
}
function construct(token, state) {
    if (token.type === constants_1.TokenTypes.OpenTagStart) {
        handleTagOpenStart(state, token);
    }
    state.caretPosition++;
    return state;
}
