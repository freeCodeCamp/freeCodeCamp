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
exports.writeSetTokens = exports.setChar = void 0;
const types_1 = require("./types");
const sets = __importStar(require("./sets-lookup"));
/**
 * Takes character code and returns character to be displayed in a set
 * @param {number} charCode Character code of set element
 * @returns {string} The string for the sets character
 */
function setChar(charCode) {
    return charCode === 94 ? '\\^' :
        charCode === 92 ? '\\\\' :
            charCode === 93 ? '\\]' :
                charCode === 45 ? '\\-' :
                    String.fromCharCode(charCode);
}
exports.setChar = setChar;
/**
 * Test if a character set matches a 'set-lookup'
 * @param {SetTokens} set The set to be tested
 * @param {SetLookup} param The predefined 'set-lookup' & the number of elements in the lookup
 * @returns {boolean} True if the character set corresponds to the 'set-lookup'
 */
function isSameSet(set, { lookup, len }) {
    // If the set and the lookup are not of the same length
    // then we immediately know that the lookup will be false
    if (len !== set.length) {
        return false;
    }
    const map = lookup();
    for (const elem of set) {
        if (elem.type === types_1.types.SET) {
            return false;
        }
        const key = elem.type === types_1.types.CHAR ? elem.value : `${elem.from}-${elem.to}`;
        if (map[key]) {
            map[key] = false;
        }
        else {
            return false;
        }
    }
    return true;
}
/**
 * Writes the tokens for a set
 * @param {Set} set The set to display
 * @param {boolean} isNested Whether the token is nested inside another set token
 * @returns {string} The tokens for the set
 */
function writeSetTokens(set, isNested = false) {
    if (isSameSet(set.set, sets.INTS)) {
        return set.not ? '\\D' : '\\d';
    }
    if (isSameSet(set.set, sets.WORDS)) {
        return set.not ? '\\W' : '\\w';
    }
    // Notanychar is only relevant when not nested inside another set token
    if (set.not && isSameSet(set.set, sets.NOTANYCHAR)) {
        return '.';
    }
    if (isSameSet(set.set, sets.WHITESPACE)) {
        return set.not ? '\\S' : '\\s';
    }
    let tokenString = '';
    for (let i = 0; i < set.set.length; i++) {
        const subset = set.set[i];
        tokenString += writeSetToken(subset);
    }
    const contents = `${set.not ? '^' : ''}${tokenString}`;
    return isNested ? contents : `[${contents}]`;
}
exports.writeSetTokens = writeSetTokens;
/**
 * Writes a token within a set
 * @param {Range | Char | Set} set The set token to display
 * @returns {string} The token as a string
 */
function writeSetToken(set) {
    if (set.type === types_1.types.CHAR) {
        return setChar(set.value);
    }
    else if (set.type === types_1.types.RANGE) {
        return `${setChar(set.from)}-${setChar(set.to)}`;
    }
    return writeSetTokens(set, true);
}
//# sourceMappingURL=write-set-tokens.js.map