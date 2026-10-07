"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRange = void 0;
exports.createParts = createParts;
const constants_1 = require("../constants");
const chars_1 = require("../tokenizer/chars");
const getRange = (info) => {
    return Array.isArray(info) ? info : [info.open[0], info.close[1]];
};
exports.getRange = getRange;
function createParts(state, type) {
    return state.mode === "template" && state.accumulatedContent.hasTemplate()
        ? state.accumulatedContent.getParts().map((chars) => {
            var _a, _b;
            if (chars.type === chars_1.CharsType.HTML) {
                const base = {
                    type: constants_1.TokenTypes.Part,
                    range: chars.range,
                    loc: state.sourceCode.getLocationOf(chars.range),
                    value: chars.value,
                    partOf: type,
                };
                return Object.assign(Object.assign({}, base), { range: state.tokenAdapter.finalizeRange(base), loc: state.tokenAdapter.finalizeLocation(base) });
            }
            const open = ((_a = chars.wrapper) === null || _a === void 0 ? void 0 : _a.open)
                ? {
                    type: constants_1.TokenTypes.OpenTemplate,
                    range: chars.wrapper.open,
                    loc: state.sourceCode.getLocationOf(chars.wrapper.open),
                    value: state.sourceCode.source.slice(chars.wrapper.open[0], chars.wrapper.open[1]),
                }
                : undefined;
            const close = ((_b = chars.wrapper) === null || _b === void 0 ? void 0 : _b.close)
                ? {
                    type: constants_1.TokenTypes.CloseTemplate,
                    range: chars.wrapper.close,
                    loc: state.sourceCode.getLocationOf(chars.wrapper.close),
                    value: state.sourceCode.source.slice(chars.wrapper.close[0], chars.wrapper.close[1]),
                }
                : undefined;
            const base = {
                type: constants_1.TokenTypes.Template,
                range: chars.range,
                loc: state.sourceCode.getLocationOf(chars.range),
                value: chars.value,
                partOf: type,
                open: open && Object.assign(Object.assign({}, open), { range: state.tokenAdapter.finalizeRange(open), loc: state.tokenAdapter.finalizeLocation(open) }),
                close: close && Object.assign(Object.assign({}, close), { range: state.tokenAdapter.finalizeRange(close), loc: state.tokenAdapter.finalizeLocation(close) }),
            };
            return Object.assign(Object.assign({}, base), { range: state.tokenAdapter.finalizeRange(base), loc: state.tokenAdapter.finalizeLocation(base) });
        })
        : [];
}
