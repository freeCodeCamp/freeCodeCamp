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
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
function hasAssignmentBeforeNode(variable, node) {
    return (variable.references.some(ref => ref.isWrite() && ref.identifier.range[1] < node.range[1]) ||
        variable.defs.some(def => isDefinitionWithAssignment(def) && def.node.range[1] < node.range[1]));
}
function isDefinitionWithAssignment(definition) {
    if (definition.type !== scope_manager_1.DefinitionType.Variable) {
        return false;
    }
    const variableDeclarator = definition.node;
    return (variableDeclarator.definite === true || variableDeclarator.init != null);
}
exports.default = util.createRule({
    name: 'no-non-null-asserted-nullish-coalescing',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow non-null assertions in the left operand of a nullish coalescing operator',
            recommended: 'strict',
        },
        messages: {
            noNonNullAssertedNullishCoalescing: 'The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.',
            suggestRemovingNonNull: 'Remove the non-null assertion.',
        },
        schema: [],
        hasSuggestions: true,
    },
    defaultOptions: [],
    create(context) {
        return {
            'LogicalExpression[operator = "??"] > TSNonNullExpression.left'(node) {
                if (node.expression.type === utils_1.TSESTree.AST_NODE_TYPES.Identifier) {
                    const scope = context.getScope();
                    const identifier = node.expression;
                    const variable = utils_1.ASTUtils.findVariable(scope, identifier.name);
                    if (variable && !hasAssignmentBeforeNode(variable, node)) {
                        return;
                    }
                }
                const sourceCode = context.getSourceCode();
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
                                const exclamationMark = util.nullThrows(sourceCode.getLastToken(node, utils_1.ASTUtils.isNonNullAssertionPunctuator), util.NullThrowsReasons.MissingToken('!', 'Non-null Assertion'));
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