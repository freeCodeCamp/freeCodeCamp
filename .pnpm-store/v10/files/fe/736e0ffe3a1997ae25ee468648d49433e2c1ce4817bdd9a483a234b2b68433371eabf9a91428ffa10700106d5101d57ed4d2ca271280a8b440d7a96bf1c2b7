"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructTree = constructTree;
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const clone_location_1 = require("../utils/clone-location");
const handlers_1 = require("./handlers");
const contextHandlers = {
    [constants_1.ConstructTreeContextTypes.TagContent]: handlers_1.tagContent,
    [constants_1.ConstructTreeContextTypes.Tag]: handlers_1.tag,
    [constants_1.ConstructTreeContextTypes.TagName]: handlers_1.tagName,
    [constants_1.ConstructTreeContextTypes.Attribute]: handlers_1.attribute,
    [constants_1.ConstructTreeContextTypes.Attributes]: handlers_1.attributes,
    [constants_1.ConstructTreeContextTypes.AttributeValue]: handlers_1.attributeValue,
    [constants_1.ConstructTreeContextTypes.Comment]: handlers_1.comment,
    [constants_1.ConstructTreeContextTypes.Doctype]: handlers_1.doctype,
    [constants_1.ConstructTreeContextTypes.DoctypeAttributes]: handlers_1.doctypeAttributes,
    [constants_1.ConstructTreeContextTypes.DoctypeAttribute]: handlers_1.doctypeAttribute,
    [constants_1.ConstructTreeContextTypes.ScriptTag]: handlers_1.scriptTag,
    [constants_1.ConstructTreeContextTypes.StyleTag]: handlers_1.styleTag,
};
const EMPTY_RANGE = [0, 0];
const EMPTY_LOC = {
    start: {
        line: 1,
        column: 0,
    },
    end: {
        line: 1,
        column: 0,
    },
};
function constructTree(tokens) {
    const rootContext = {
        type: constants_1.ConstructTreeContextTypes.TagContent,
        parentRef: undefined,
        content: [],
    };
    const lastToken = (0, utils_1.last)(tokens);
    const firstToken = (0, utils_1.first)(tokens);
    const range = lastToken ? [0, lastToken.range[1]] : EMPTY_RANGE;
    const loc = lastToken
        ? {
            start: (0, clone_location_1.cloneLocation)(firstToken.loc).start,
            end: (0, clone_location_1.cloneLocation)(lastToken.loc).end,
        }
        : EMPTY_LOC;
    loc.start.line = 1;
    const rootNode = {
        type: constants_1.NodeTypes.Document,
        range,
        children: [],
        loc,
    };
    const state = {
        caretPosition: 0,
        currentContext: rootContext,
        currentNode: rootNode,
        rootNode,
    };
    const positionOffset = state.caretPosition;
    processTokens(tokens, state, positionOffset);
    return { state, ast: state.rootNode };
}
function processTokens(tokens, state, positionOffset) {
    let tokenIndex = state.caretPosition - positionOffset;
    while (tokenIndex < tokens.length) {
        const token = tokens[tokenIndex];
        const handler = contextHandlers[state.currentContext.type].construct;
        // @ts-ignore
        state = handler(token, state);
        tokenIndex = state.caretPosition - positionOffset;
    }
    return state;
}
