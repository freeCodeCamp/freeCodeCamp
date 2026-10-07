"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LINEBREAK_MATCHER = void 0;
exports.isTokenOnSameLine = isTokenOnSameLine;
exports.LINEBREAK_MATCHER = /\r\n|[\r\n\u2028\u2029]/;
/**
 * Determines whether two adjacent tokens are on the same line
 */
function isTokenOnSameLine(left, right) {
    return left.loc.end.line === right.loc.start.line;
}
