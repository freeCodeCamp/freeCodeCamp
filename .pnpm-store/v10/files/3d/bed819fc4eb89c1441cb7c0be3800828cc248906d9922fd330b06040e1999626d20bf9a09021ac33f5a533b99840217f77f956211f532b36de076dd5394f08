"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeRegExp = escapeRegExp;
/**
 * Lodash <https://lodash.com/>
 * Released under MIT license <https://lodash.com/license>
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);
function escapeRegExp(string = '') {
    return string && reHasRegExpChar.test(string)
        ? string.replaceAll(reRegExpChar, '\\$&')
        : string;
}
//# sourceMappingURL=escapeRegExp.js.map