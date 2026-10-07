"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
exports.handleContentEnd = handleContentEnd;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const COMMENT_START = "<!--";
const OPEN_TAG_START_PATTERN = /^<\w/;
function parse(chars, state) {
    const value = chars.value();
    if (OPEN_TAG_START_PATTERN.test(value)) {
        return parseOpeningCornerBraceWithText(state);
    }
    if (value === "</") {
        return parseOpeningCornerBraceWithSlash(state);
    }
    if (value === "<" || value === "<!" || value === "<!-") {
        state.sourceCode.next();
        return;
    }
    if (value === COMMENT_START) {
        return parseCommentOpen(state);
    }
    if (isIncompleteDoctype(value)) {
        state.sourceCode.next();
        return;
    }
    if (value.toUpperCase() === "<!DOCTYPE") {
        return parseDoctypeOpen(state);
    }
    state.accumulatedContent.concatBuffer(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function handleContentEnd(state) {
    const textContent = state.accumulatedContent.value() + state.decisionBuffer.value();
    if (textContent.length !== 0) {
        const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
        state.tokens.push({
            type: constants_1.TokenTypes.Text,
            value: textContent,
            range: position.range,
            loc: position.loc,
            parts: (0, utils_1.createParts)(state, constants_1.TokenTypes.Text),
        });
    }
}
function generateTextToken(state) {
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
    return {
        type: constants_1.TokenTypes.Text,
        value: state.accumulatedContent.value(),
        range: position.range,
        loc: position.loc,
        parts: (0, utils_1.createParts)(state, constants_1.TokenTypes.Text),
    };
}
function parseOpeningCornerBraceWithText(state) {
    if (state.accumulatedContent.length() !== 0) {
        state.tokens.push(generateTextToken(state));
    }
    state.accumulatedContent.replace(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.OpenTagStart;
    state.sourceCode.next();
}
function parseOpeningCornerBraceWithSlash(state) {
    if (state.accumulatedContent.length() !== 0) {
        state.tokens.push(generateTextToken(state));
    }
    state.accumulatedContent.replace(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.CloseTag;
    state.sourceCode.next();
}
function isIncompleteDoctype(chars) {
    const charsUpperCase = chars.toUpperCase();
    return (charsUpperCase === "<!" ||
        charsUpperCase === "<!D" ||
        charsUpperCase === "<!DO" ||
        charsUpperCase === "<!DOC" ||
        charsUpperCase === "<!DOCT" ||
        charsUpperCase === "<!DOCTY" ||
        charsUpperCase === "<!DOCTYP");
}
function parseCommentOpen(state) {
    if (state.accumulatedContent.length() !== 0) {
        state.tokens.push(generateTextToken(state));
    }
    const range = [
        state.sourceCode.index() - (COMMENT_START.length - 1),
        state.sourceCode.index() + 1,
    ];
    state.tokens.push({
        type: constants_1.TokenTypes.CommentOpen,
        value: state.decisionBuffer.value(),
        range: range,
        loc: state.sourceCode.getLocationOf(range),
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.CommentContent;
    state.sourceCode.next();
}
function parseDoctypeOpen(state) {
    if (state.accumulatedContent.length() !== 0) {
        state.tokens.push(generateTextToken(state));
    }
    state.accumulatedContent.replace(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.DoctypeOpen;
    state.sourceCode.next();
}
