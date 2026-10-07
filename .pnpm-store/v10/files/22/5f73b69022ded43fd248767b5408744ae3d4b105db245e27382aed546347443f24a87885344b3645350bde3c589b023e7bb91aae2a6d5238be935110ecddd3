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
exports.NOTANYCHAR = exports.WHITESPACE = exports.WORDS = exports.INTS = void 0;
const Sets = __importStar(require("./sets"));
const types_1 = require("./types");
function setToLookup(tokens) {
    let lookup = {};
    let len = 0;
    for (const token of tokens) {
        if (token.type === types_1.types.CHAR) {
            lookup[token.value] = true;
        }
        // Note this is in an if statement because
        // the SetTokens type is (Char | Range | Set)[]
        // so a type error is thrown if it is not.
        // If the SetTokens type is modified the if statement
        // can be removed
        if (token.type === types_1.types.RANGE) {
            lookup[`${token.from}-${token.to}`] = true;
        }
        len += 1;
    }
    return {
        lookup: () => (Object.assign({}, lookup)),
        len,
    };
}
exports.INTS = setToLookup(Sets.ints().set);
exports.WORDS = setToLookup(Sets.words().set);
exports.WHITESPACE = setToLookup(Sets.whitespace().set);
exports.NOTANYCHAR = setToLookup(Sets.anyChar().set);
//# sourceMappingURL=sets-lookup.js.map