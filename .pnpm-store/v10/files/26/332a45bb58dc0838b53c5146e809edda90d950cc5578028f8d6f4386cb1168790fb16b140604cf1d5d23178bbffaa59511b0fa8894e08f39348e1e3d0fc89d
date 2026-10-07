"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizeClass = exports.strToChars = void 0;
const types_1 = require("./types");
const sets = __importStar(require("./sets"));
const CTRL = '@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?';
/**
 * Finds character representations in str and convert all to
 * their respective characters.
 *
 * @param {string} str
 * @returns {string}
 */
exports.strToChars = (str) => {
    const charsRegex = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|c([@A-Z[\\\]^?])|([0tnvfr]))/g;
    return str.replace(charsRegex, (s, b, lbs, a16, b16, dctrl, eslsh) => {
        if (lbs) {
            return s;
        }
        let code = b ? 8 :
            a16 ? parseInt(a16, 16) :
                b16 ? parseInt(b16, 16) :
                    dctrl ? CTRL.indexOf(dctrl) : {
                        0: 0,
                        t: 9,
                        n: 10,
                        v: 11,
                        f: 12,
                        r: 13,
                    }[eslsh];
        let c = String.fromCharCode(code);
        // Escape special regex characters.
        return /[[\]{}^$.|?*+()]/.test(c) ? `\\${c}` : c;
    });
};
/**
 * Turns class into tokens
 * reads str until it encounters a ] not preceeded by a \
 *
 * @param {string} str
 * @param {string} regexpStr
 * @returns {Array.<Array.<Object>, number>}
 */
exports.tokenizeClass = (str, regexpStr) => {
    var _a, _b, _c, _d, _e, _f, _g;
    let tokens = [], rs, c;
    const regexp = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(((?:\\)])|(((?:\\)?([^\]])))))|(\])|(?:\\)?([^])/g;
    while ((rs = regexp.exec(str)) !== null) {
        const p = (_g = (_f = (_e = (_d = (_c = (_b = (_a = (rs[1] && sets.words())) !== null && _a !== void 0 ? _a : (rs[2] && sets.ints())) !== null && _b !== void 0 ? _b : (rs[3] && sets.whitespace())) !== null && _c !== void 0 ? _c : (rs[4] && sets.notWords())) !== null && _d !== void 0 ? _d : (rs[5] && sets.notInts())) !== null && _e !== void 0 ? _e : (rs[6] && sets.notWhitespace())) !== null && _f !== void 0 ? _f : (rs[7] && {
            type: types_1.types.RANGE,
            from: (rs[8] || rs[9]).charCodeAt(0),
            to: (c = rs[10]).charCodeAt(c.length - 1),
        })) !== null && _g !== void 0 ? _g : ((c = rs[16]) && { type: types_1.types.CHAR, value: c.charCodeAt(0) });
        if (p) {
            tokens.push(p);
        }
        else {
            return [tokens, regexp.lastIndex];
        }
    }
    throw new SyntaxError(`Invalid regular expression: /${regexpStr}/: Unterminated character class`);
};
//# sourceMappingURL=util.js.map