"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnescapedAny = void 0;
const getUnescapedAny = (sequence, code) => {
    if (code != null) {
        return String.fromCodePoint(code);
    }
    switch (sequence) {
        case '\\b':
            return '\b';
        case '\\f':
            return '\f';
        case '\\n':
            return '\n';
        case '\\r':
            return '\r';
        case '\\t':
            return '\t';
        case '\\v':
            return '\v';
    }
    return false;
};
exports.getUnescapedAny = getUnescapedAny;
//# sourceMappingURL=get-unescaped-any.js.map