"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.needsPrecedingSemicolon = needsPrecedingSemicolon;
const utils_1 = require("@typescript-eslint/utils");
const ast_utils_1 = require("@typescript-eslint/utils/ast-utils");
// The following is adapted from `eslint`'s source code.
// https://github.com/eslint/eslint/blob/3a4eaf921543b1cd5d1df4ea9dec02fab396af2a/lib/rules/utils/ast-utils.js#L1043-L1132
// Could be export { isStartOfExpressionStatement } from 'eslint/lib/rules/utils/ast-utils'
const BREAK_OR_CONTINUE = new Set([
    utils_1.AST_NODE_TYPES.BreakStatement,
    utils_1.AST_NODE_TYPES.ContinueStatement,
]);
// Declaration types that must contain a string Literal node at the end.
const DECLARATIONS = new Set([
    utils_1.AST_NODE_TYPES.ExportAllDeclaration,
    utils_1.AST_NODE_TYPES.ExportNamedDeclaration,
    utils_1.AST_NODE_TYPES.ImportDeclaration,
]);
const IDENTIFIER_OR_KEYWORD = new Set([
    utils_1.AST_NODE_TYPES.Identifier,
    utils_1.AST_TOKEN_TYPES.Keyword,
]);
// Keywords that can immediately precede an ExpressionStatement node, mapped to the their node types.
const NODE_TYPES_BY_KEYWORD = {
    __proto__: null,
    break: utils_1.AST_NODE_TYPES.BreakStatement,
    continue: utils_1.AST_NODE_TYPES.ContinueStatement,
    debugger: utils_1.AST_NODE_TYPES.DebuggerStatement,
    do: utils_1.AST_NODE_TYPES.DoWhileStatement,
    else: utils_1.AST_NODE_TYPES.IfStatement,
    return: utils_1.AST_NODE_TYPES.ReturnStatement,
    yield: utils_1.AST_NODE_TYPES.YieldExpression,
};
/*
 * Before an opening parenthesis, postfix `++` and `--` always trigger ASI;
 * the tokens `:`, `;`, `{` and `=>` don't expect a semicolon, as that would count as an empty statement.
 */
const PUNCTUATORS = new Set(['--', ';', ':', '{', '++', '=>']);
/*
 * Statements that can contain an `ExpressionStatement` after a closing parenthesis.
 * DoWhileStatement is an exception in that it always triggers ASI after the closing parenthesis.
 */
const STATEMENTS = new Set([
    utils_1.AST_NODE_TYPES.DoWhileStatement,
    utils_1.AST_NODE_TYPES.ForInStatement,
    utils_1.AST_NODE_TYPES.ForOfStatement,
    utils_1.AST_NODE_TYPES.ForStatement,
    utils_1.AST_NODE_TYPES.IfStatement,
    utils_1.AST_NODE_TYPES.WhileStatement,
    utils_1.AST_NODE_TYPES.WithStatement,
]);
/**
 * Determines whether an opening parenthesis `(`, bracket `[` or backtick ``` ` ``` needs to be preceded by a semicolon.
 * This opening parenthesis or bracket should be at the start of an `ExpressionStatement`, a `MethodDefinition` or at
 * the start of the body of an `ArrowFunctionExpression`.
 * @param sourceCode The source code object.
 * @param node A node at the position where an opening parenthesis or bracket will be inserted.
 * @returns Whether a semicolon is required before the opening parenthesis or bracket.
 */
function needsPrecedingSemicolon(sourceCode, node) {
    const prevToken = sourceCode.getTokenBefore(node);
    if (!prevToken ||
        (prevToken.type === utils_1.AST_TOKEN_TYPES.Punctuator &&
            PUNCTUATORS.has(prevToken.value))) {
        return false;
    }
    const prevNode = sourceCode.getNodeByRangeIndex(prevToken.range[0]);
    if (!prevNode) {
        return false;
    }
    if ((0, ast_utils_1.isClosingParenToken)(prevToken)) {
        return !STATEMENTS.has(prevNode.type);
    }
    if ((0, ast_utils_1.isClosingBraceToken)(prevToken)) {
        return ((prevNode.type === utils_1.AST_NODE_TYPES.BlockStatement &&
            prevNode.parent.type === utils_1.AST_NODE_TYPES.FunctionExpression &&
            prevNode.parent.parent.type !== utils_1.AST_NODE_TYPES.MethodDefinition) ||
            (prevNode.type === utils_1.AST_NODE_TYPES.ClassBody &&
                prevNode.parent.type === utils_1.AST_NODE_TYPES.ClassExpression) ||
            prevNode.type === utils_1.AST_NODE_TYPES.ObjectExpression);
    }
    if (!prevNode.parent) {
        return false;
    }
    if (IDENTIFIER_OR_KEYWORD.has(prevToken.type)) {
        if (BREAK_OR_CONTINUE.has(prevNode.parent.type)) {
            return false;
        }
        const keyword = prevToken.value;
        const nodeType = NODE_TYPES_BY_KEYWORD[keyword];
        return prevNode.type !== nodeType;
    }
    if (prevToken.type === utils_1.AST_TOKEN_TYPES.String) {
        return !DECLARATIONS.has(prevNode.parent.type);
    }
    return true;
}
//# sourceMappingURL=needsPrecedingSemiColon.js.map