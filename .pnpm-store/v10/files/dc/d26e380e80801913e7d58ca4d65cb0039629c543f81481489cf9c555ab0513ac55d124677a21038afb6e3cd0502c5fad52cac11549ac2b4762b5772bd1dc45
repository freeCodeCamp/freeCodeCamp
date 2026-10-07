"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.astConverter = astConverter;
const convert_1 = require("./convert");
const convert_comments_1 = require("./convert-comments");
const node_utils_1 = require("./node-utils");
const simple_traverse_1 = require("./simple-traverse");
function astConverter(ast, parseSettings, shouldPreserveNodeMaps) {
    /**
     * The TypeScript compiler produced fundamental parse errors when parsing the
     * source.
     */
    const { parseDiagnostics } = ast;
    if (parseDiagnostics.length) {
        throw (0, convert_1.convertError)(parseDiagnostics[0]);
    }
    /**
     * Recursively convert the TypeScript AST into an ESTree-compatible AST
     */
    const instance = new convert_1.Converter(ast, {
        allowInvalidAST: parseSettings.allowInvalidAST,
        errorOnUnknownASTType: parseSettings.errorOnUnknownASTType,
        shouldPreserveNodeMaps,
        suppressDeprecatedPropertyWarnings: parseSettings.suppressDeprecatedPropertyWarnings,
    });
    const estree = instance.convertProgram();
    /**
     * Optionally remove range and loc if specified
     */
    if (!parseSettings.range || !parseSettings.loc) {
        (0, simple_traverse_1.simpleTraverse)(estree, {
            enter: node => {
                if (!parseSettings.range) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- TS 4.0 made this an error because the types aren't optional
                    // @ts-expect-error
                    delete node.range;
                }
                if (!parseSettings.loc) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- TS 4.0 made this an error because the types aren't optional
                    // @ts-expect-error
                    delete node.loc;
                }
            },
        });
    }
    /**
     * Optionally convert and include all tokens in the AST
     */
    if (parseSettings.tokens) {
        estree.tokens = (0, node_utils_1.convertTokens)(ast);
    }
    /**
     * Optionally convert and include all comments in the AST
     */
    if (parseSettings.comment) {
        estree.comments = (0, convert_comments_1.convertComments)(ast);
    }
    const astMaps = instance.getASTMaps();
    return { astMaps, estree };
}
