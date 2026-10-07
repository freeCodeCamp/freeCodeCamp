"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenize = tokenize;
const constants_1 = require("../constants");
const handlers_1 = require("./handlers");
const source_code_1 = require("./source-code");
const chars_buffer_1 = require("./chars-buffer");
const contextHandlers = {
    [constants_1.TokenizerContextTypes.Data]: handlers_1.data,
    [constants_1.TokenizerContextTypes.OpenTagStart]: handlers_1.openTagStart,
    [constants_1.TokenizerContextTypes.CloseTag]: handlers_1.closeTag,
    [constants_1.TokenizerContextTypes.Attributes]: handlers_1.attributes,
    [constants_1.TokenizerContextTypes.OpenTagEnd]: handlers_1.openTagEnd,
    [constants_1.TokenizerContextTypes.AttributeKey]: handlers_1.attributeKey,
    [constants_1.TokenizerContextTypes.AttributeValue]: handlers_1.attributeValue,
    [constants_1.TokenizerContextTypes.AttributeValueBare]: handlers_1.attributeValueBare,
    [constants_1.TokenizerContextTypes.AttributeValueWrapped]: handlers_1.attributeValueWrapped,
    [constants_1.TokenizerContextTypes.ScriptContent]: handlers_1.scriptTagContent,
    [constants_1.TokenizerContextTypes.StyleContent]: handlers_1.styleTagContent,
    [constants_1.TokenizerContextTypes.DoctypeOpen]: handlers_1.DoctypeOpen,
    [constants_1.TokenizerContextTypes.DoctypeClose]: handlers_1.DoctypeClose,
    [constants_1.TokenizerContextTypes.DoctypeAttributes]: handlers_1.doctypeAttributes,
    [constants_1.TokenizerContextTypes.DoctypeAttributeWrapped]: handlers_1.doctypeAttributeWrapped,
    [constants_1.TokenizerContextTypes.DoctypeAttributeBare]: handlers_1.doctypeAttributeBare,
    [constants_1.TokenizerContextTypes.CommentContent]: handlers_1.commentContent,
    [constants_1.TokenizerContextTypes.CustomTagRawContent]: handlers_1.customTagRawContent,
    [constants_1.TokenizerContextTypes.CommentOpen]: handlers_1.noop,
    [constants_1.TokenizerContextTypes.CommentClose]: handlers_1.noop,
};
function tokenizeChars(state) {
    while (!state.sourceCode.isEof()) {
        const handler = contextHandlers[state.currentContext];
        state.decisionBuffer.concat(state.sourceCode.current());
        handler.parse(state.decisionBuffer, state);
    }
    const handler = contextHandlers[state.currentContext];
    state.sourceCode.prev();
    if (handler.handleContentEnd !== undefined) {
        handler.handleContentEnd(state);
    }
}
function tokenize(source = "", tokenAdapter, options = {
    templateInfos: undefined,
    rawContentTags: undefined,
}) {
    const tokens = [];
    const state = {
        currentContext: constants_1.TokenizerContextTypes.Data,
        contextParams: {},
        mode: options.templateInfos ? "template" : "default",
        templateInfos: options.templateInfos || [],
        decisionBuffer: new chars_buffer_1.CharsBuffer(),
        accumulatedContent: new chars_buffer_1.CharsBuffer(),
        tokenAdapter,
        rawContentTags: options.rawContentTags,
        sourceCode: new source_code_1.SourceCode(source, options.templateInfos || []),
        tokens: {
            push(token) {
                tokens.push(Object.assign(Object.assign({}, token), { range: tokenAdapter.finalizeRange(token), loc: tokenAdapter.finalizeLocation(token) }));
            },
        },
    };
    tokenizeChars(state);
    return { state, tokens };
}
