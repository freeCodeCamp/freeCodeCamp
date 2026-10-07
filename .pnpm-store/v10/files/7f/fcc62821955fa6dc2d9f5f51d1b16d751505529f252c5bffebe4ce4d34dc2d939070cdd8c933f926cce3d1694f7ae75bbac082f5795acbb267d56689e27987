"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const tokensMap = {
    script: constants_1.TokenTypes.OpenScriptTagEnd,
    style: constants_1.TokenTypes.OpenStyleTagEnd,
    default: constants_1.TokenTypes.OpenTagEnd,
};
const contextsMap = {
    script: constants_1.TokenizerContextTypes.ScriptContent,
    style: constants_1.TokenizerContextTypes.StyleContent,
    default: constants_1.TokenizerContextTypes.Data,
};
function parse(chars, state) {
    if (chars.value() === ">") {
        return parseClosingCornerBrace(state);
    }
    state.accumulatedContent.concatBuffer(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function parseClosingCornerBrace(state) {
    var _a, _b;
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: true });
    const tagName = (_a = state.contextParams[constants_1.TokenizerContextTypes.OpenTagEnd]) === null || _a === void 0 ? void 0 : _a.tagName;
    state.tokens.push({
        type: tokensMap[tagName] || tokensMap.default,
        value: state.accumulatedContent.value() + state.decisionBuffer.value(),
        range: position.range,
        loc: position.loc,
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    if ((_b = state.rawContentTags) === null || _b === void 0 ? void 0 : _b.includes(tagName)) {
        state.contextParams[constants_1.TokenizerContextTypes.CustomTagRawContent] = {
            tagName,
        };
        state.currentContext = constants_1.TokenizerContextTypes.CustomTagRawContent;
    }
    else {
        state.currentContext =
            contextsMap[tagName || "default"] || contextsMap["default"];
    }
    state.sourceCode.next();
    state.contextParams[constants_1.TokenizerContextTypes.OpenTagEnd] = undefined;
}
