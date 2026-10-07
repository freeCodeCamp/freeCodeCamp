"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LINEBREAK_MATCHER = exports.isTokenOnSameLine = void 0;
const LINEBREAK_MATCHER = /\r\n|[\r\n\u2028\u2029]/;
exports.LINEBREAK_MATCHER = LINEBREAK_MATCHER;
/**
 * Determines whether two adjacent tokens are on the same line
 */
function isTokenOnSameLine(left, right) {
    return left.loc.end.line === right.loc.start.line;
}
exports.isTokenOnSameLine = isTokenOnSameLine;
//# sourceMappingURL=misc.js.map