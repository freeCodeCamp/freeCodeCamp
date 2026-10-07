/**
 * @fileoverview Rule to flag when the same variable is declared more then once.
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow variable redeclaration",
            category: "Best Practices",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-redeclare"
        },

        messages: {
            redeclared: "'{{id}}' is already defined.",
            redeclaredAsBuiltin: "'{{id}}' is already defined as a built-in global variable.",
            redeclaredBySyntax: "'{{id}}' is already defined by a variable declaration."
        },

        schema: [
            {
                type: "object",
                properties: {
                    builtinGlobals: { type: "boolean", default: true }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {
        const options = {
            builtinGlobals: Boolean(
                context.options.length === 0 ||
                context.options[0].builtinGlobals
            )
        };
        const sourceCode = context.getSourceCode();

        /**
         * Iterate declarations of a given variable.
         * @param {escope.variable} variable The variable object to iterate declarations.
         * @returns {IterableIterator<{type:string,node:ASTNode,loc:SourceLocation}>} The declarations.
         */
        function *iterateDeclarations(variable) {
            if (options.builtinGlobals && (
                variable.eslintImplicitGlobalSetting === "readonly" ||
                variable.eslintImplicitGlobalSetting === "writable"
            )) {
                yield { type: "builtin" };
            }

            for (const id of variable.identifiers) {
                yield { type: "syntax", node: id, loc: id.loc };
            }

            if (variable.eslintExplicitGlobalComments) {
                for (const comment of variable.eslintExplicitGlobalComments) {
                    yield {
                        type: "comment",
                        node: comment,
                        loc: astUtils.getNameLocationInGlobalDirectiveComment(
                            sourceCode,
                            comment,
                            variable.name
                        )
                    };
                }
            }
        }

        /**
         * Find variables in a given scope and flag redeclared ones.
         * @param {Scope} scope An eslint-scope scope object.
         * @returns {void}
         * @private
         */
        function findVariablesInScope(scope) {
            for (const variable of scope.variables) {
                const [
                    declaration,
                    ...extraDeclarations
                ] = iterateDeclarations(variable);

                if (extraDeclarations.length === 0) {
                    continue;
                }

                /*
                 * If the type of a declaration is different from the type of
                 * the first declaration, it shows the location of the first
                 * declaration.
                 */
                const detailMessageId = declaration.type === "builtin"
                    ? "redeclaredAsBuiltin"
                    : "redeclaredBySyntax";
                const data = { id: variable.name };

                // Report extra declarations.
                for (const { type, node, loc } of extraDeclarations) {
                    const messageId = type === declaration.type
                        ? "redeclared"
                        : detailMessageId;

                    context.report({ node, loc, messageId, data });
                }
            }
        }

        /**
         * Find variables in the current scope.
         * @param {ASTNode} node The node of the current scope.
         * @returns {void}
         * @private
         */
        function checkForBlock(node) {
            const scope = context.getScope();

            /*
             * In ES5, some node type such as `BlockStatement` doesn't have that scope.
             * `scope.block` is a different node in such a case.
             */
            if (scope.block === node) {
                findVariablesInScope(scope);
            }
        }

        return {
            Program() {
                const scope = context.getScope();

                findVariablesInScope(scope);

                // Node.js or ES modules has a special scope.
                if (
                    scope.type === "global" &&
                    scope.childScopes[0] &&

                    // The special scope's block is the Program node.
                    scope.block === scope.childScopes[0].block
                ) {
                    findVariablesInScope(scope.childScopes[0]);
                }
            },

            FunctionDeclaration: checkForBlock,
            FunctionExpression: checkForBlock,
            ArrowFunctionExpression: checkForBlock,

            BlockStatement: checkForBlock,
            ForStatement: checkForBlock,
            ForInStatement: checkForBlock,
            ForOfStatement: checkForBlock,
            SwitchStatement: checkForBlock
        };
    }
};
