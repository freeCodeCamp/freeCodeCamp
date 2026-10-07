"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
function hasAssignmentBeforeNode(variable, node) {
    return (variable.references.some(ref => ref.isWrite() && ref.identifier.range[1] < node.range[1]) ||
        variable.defs.some(def => isDefinitionWithAssignment(def) && def.node.range[1] < node.range[1]));
}
function isDefinitionWithAssignment(definition) {
    if (definition.type !== scope_manager_1.DefinitionType.Variable) {
        return false;
    }
    const variableDeclarator = definition.node;
    return variableDeclarator.definite || variableDeclarator.init != null;
}
exports.default = (0, util_1.createRule)({
    name: 'no-non-null-asserted-nullish-coalescing',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow non-null assertions in the left operand of a nullish coalescing operator',
            recommended: 'strict',
        },
        hasSuggestions: true,
        messages: {
            noNonNullAssertedNullishCoalescing: 'The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.',
            suggestRemovingNonNull: 'Remove the non-null assertion.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        return {
            'LogicalExpression[operator = "??"] > TSNonNullExpression.left'(node) {
                if (node.expression.type === utils_1.TSESTree.AST_NODE_TYPES.Identifier) {
                    const scope = context.sourceCode.getScope(node);
                    const identifier = node.expression;
                    const variable = utils_1.ASTUtils.findVariable(scope, identifier.name);
                    if (variable && !hasAssignmentBeforeNode(variable, node)) {
                        return;
                    }
                }
                context.report({
                    node,
                    messageId: 'noNonNullAssertedNullishCoalescing',
                    /*
                    Use a suggestion instead of a fixer, because this can break type checks.
                    The resulting type of the nullish coalesce is only influenced by the right operand if the left operand can be `null` or `undefined`.
                    After removing the non-null assertion the type of the left operand might contain `null` or `undefined` and then the type of the right operand
                    might change the resulting type of the nullish coalesce.
                    See the following example:
          
                    function test(x?: string): string {
                      const bar = x! ?? false; // type analysis reports `bar` has type `string`
                      //          x  ?? false; // type analysis reports `bar` has type `string | false`
                      return bar;
                    }
                    */
                    suggest: [
                        {
                            messageId: 'suggestRemovingNonNull',
                            fix(fixer) {
                                const exclamationMark = (0, util_1.nullThrows)(context.sourceCode.getLastToken(node, utils_1.ASTUtils.isNonNullAssertionPunctuator), util_1.NullThrowsReasons.MissingToken('!', 'Non-null Assertion'));
                                return fixer.remove(exclamationMark);
                            },
                        },
                    ],
                });
            },
        };
    },
});
//# sourceMappingURL=no-non-null-asserted-nullish-coalescing.js.map