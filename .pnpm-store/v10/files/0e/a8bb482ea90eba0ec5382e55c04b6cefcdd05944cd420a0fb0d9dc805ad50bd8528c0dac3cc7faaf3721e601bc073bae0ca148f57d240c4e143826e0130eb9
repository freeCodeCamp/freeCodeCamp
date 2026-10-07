"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.convertComments = void 0;
const util_1 = require("tsutils/util/util");
const ts = __importStar(require("typescript"));
const node_utils_1 = require("./node-utils");
const ts_estree_1 = require("./ts-estree");
/**
 * Convert all comments for the given AST.
 * @param ast the AST object
 * @param code the TypeScript code
 * @returns the converted ESTreeComment
 * @private
 */
function convertComments(ast, code) {
    const comments = [];
    (0, util_1.forEachComment)(ast, (_, comment) => {
        const type = comment.kind === ts.SyntaxKind.SingleLineCommentTrivia
            ? ts_estree_1.AST_TOKEN_TYPES.Line
            : ts_estree_1.AST_TOKEN_TYPES.Block;
        const range = [comment.pos, comment.end];
        const loc = (0, node_utils_1.getLocFor)(range[0], range[1], ast);
        // both comments start with 2 characters - /* or //
        const textStart = range[0] + 2;
        const textEnd = comment.kind === ts.SyntaxKind.SingleLineCommentTrivia
            ? // single line comments end at the end
                range[1] - textStart
            : // multiline comments end 2 characters early
                range[1] - textStart - 2;
        comments.push({
            type,
            value: code.slice(textStart, textStart + textEnd),
            range,
            loc,
        });
    }, ast);
    return comments;
}
exports.convertComments = convertComments;
//# sourceMappingURL=convert-comments.js.map