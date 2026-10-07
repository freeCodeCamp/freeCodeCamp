"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringLength = getStringLength;
let segmenter;
function isASCII(value) {
    return /^[\u0020-\u007f]*$/u.test(value);
}
function getStringLength(value) {
    if (isASCII(value)) {
        return value.length;
    }
    segmenter ??= new Intl.Segmenter();
    return [...segmenter.segment(value)].length;
}
//# sourceMappingURL=getStringLength.js.map