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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertComments = convertComments;
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const node_utils_1 = require("./node-utils");
const ts_estree_1 = require("./ts-estree");
/**
 * Convert all comments for the given AST.
 * @param ast the AST object
 * @returns the converted ESTreeComment
 * @private
 */
function convertComments(ast) {
    return Array.from(tsutils.iterateComments(ast), ({ end, kind, pos, value }) => {
        const type = kind === ts.SyntaxKind.SingleLineCommentTrivia
            ? ts_estree_1.AST_TOKEN_TYPES.Line
            : ts_estree_1.AST_TOKEN_TYPES.Block;
        const range = [pos, end];
        const loc = (0, node_utils_1.getLocFor)(range, ast);
        return {
            type,
            loc,
            range,
            value,
        };
    });
}
