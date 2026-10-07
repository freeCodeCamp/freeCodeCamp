"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.construct = construct;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function handleOpenTagStart(state, token) {
    (0, utils_1.initChildrenIfNone)(state.currentNode);
    const tagNode = {
        type: constants_1.NodeTypes.Tag,
        parentRef: state.currentNode,
        range: (0, utils_1.cloneRange)(token.range),
        loc: (0, utils_1.cloneLocation)(token.loc),
        attributes: [],
        children: [],
    };
    state.currentNode.children.push(tagNode);
    state.currentNode = tagNode;
    state.currentContext = {
        parentRef: state.currentContext,
        type: constants_1.ConstructTreeContextTypes.Tag,
    };
    return state;
}
function handleCloseTag(state, token) {
    const closeTagName = (0, utils_1.parseCloseTagName)(token.value);
    if (closeTagName !== state.currentNode.name) {
        state.caretPosition++;
        return state;
    }
    state.currentContext = state.currentContext.parentRef;
    return state;
}
function handleCommentOpen(state, token) {
    (0, utils_1.initChildrenIfNone)(state.currentNode);
    const commentNode = {
        type: constants_1.NodeTypes.Comment,
        parentRef: state.currentNode,
        range: (0, utils_1.cloneRange)(token.range),
        loc: (0, utils_1.cloneLocation)(token.loc),
    };
    state.currentNode.children.push(commentNode);
    // @ts-ignore
    state.currentNode = commentNode;
    state.currentContext = {
        parentRef: state.currentContext,
        type: constants_1.ConstructTreeContextTypes.Comment,
    };
    return state;
}
function handleDoctypeOpen(state, token) {
    (0, utils_1.initChildrenIfNone)(state.currentNode);
    const doctypeNode = {
        type: constants_1.NodeTypes.Doctype,
        parentRef: state.currentNode,
        range: (0, utils_1.cloneRange)(token.range),
        loc: (0, utils_1.cloneLocation)(token.loc),
        attributes: [],
    };
    state.currentNode.children.push(doctypeNode);
    // @ts-ignore
    state.currentNode = doctypeNode;
    state.currentContext = {
        parentRef: state.currentContext,
        type: constants_1.ConstructTreeContextTypes.Doctype,
    };
    return state;
}
function handleText(state, token) {
    (0, utils_1.initChildrenIfNone)(state.currentNode);
    const textNode = (0, utils_1.createNodeFrom)(token);
    state.currentNode.children.push(textNode);
    state.caretPosition++;
    return state;
}
function handleRawContent(state, token) {
    (0, utils_1.initChildrenIfNone)(state.currentNode);
    const rawContentNode = (0, utils_1.createNodeFrom)(token);
    state.currentNode.children.push(rawContentNode);
    state.caretPosition++;
    return state;
}
function handleOpenScriptTagStart(state, token) {
    (0, utils_1.initChildrenIfNone)(state.currentNode);
    const scriptNode = {
        type: constants_1.NodeTypes.ScriptTag,
        parentRef: state.currentNode,
        range: (0, utils_1.cloneRange)(token.range),
        loc: (0, utils_1.cloneLocation)(token.loc),
        attributes: [],
    };
    state.currentNode.children.push(scriptNode);
    // @ts-ignore
    state.currentNode = scriptNode;
    state.currentContext = {
        type: constants_1.ConstructTreeContextTypes.ScriptTag,
        parentRef: state.currentContext,
    };
    return state;
}
function handleOpenStyleTagStart(state, token) {
    (0, utils_1.initChildrenIfNone)(state.currentNode);
    const styleNode = {
        type: constants_1.NodeTypes.StyleTag,
        parentRef: state.currentNode,
        range: (0, utils_1.cloneRange)(token.range),
        loc: (0, utils_1.cloneLocation)(token.loc),
        attributes: [],
    };
    state.currentNode.children.push(styleNode);
    // @ts-ignore
    state.currentNode = styleNode;
    state.currentContext = {
        type: constants_1.ConstructTreeContextTypes.StyleTag,
        parentRef: state.currentContext,
    };
    return state;
}
function construct(token, state) {
    if (token.type === constants_1.TokenTypes.OpenScriptTagStart) {
        return handleOpenScriptTagStart(state, token);
    }
    if (token.type === constants_1.TokenTypes.OpenStyleTagStart) {
        return handleOpenStyleTagStart(state, token);
    }
    if (token.type === constants_1.TokenTypes.OpenTagStart) {
        return handleOpenTagStart(state, token);
    }
    if (token.type === constants_1.TokenTypes.Text) {
        return handleText(state, token);
    }
    if (token.type === constants_1.TokenTypes.RawContent) {
        return handleRawContent(state, token);
    }
    if (token.type === constants_1.TokenTypes.CloseTag) {
        return handleCloseTag(state, token);
    }
    if (token.type === constants_1.TokenTypes.CommentOpen) {
        return handleCommentOpen(state, token);
    }
    if (token.type === constants_1.TokenTypes.DoctypeOpen) {
        return handleDoctypeOpen(state, token);
    }
    state.caretPosition++;
    return state;
}
