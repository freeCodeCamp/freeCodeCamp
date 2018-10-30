/**
 * @fileoverview Rule to flag when the same variable is declared more then once.
 * @author Ilya Volodin
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow variable redeclaration",
            category: "Best Practices",
            recommended: true
        },

        schema: [
            {
                type: "object",
                properties: {
                    builtinGlobals: { type: "boolean" }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {
        const options = {
            builtinGlobals: Boolean(context.options[0] && context.options[0].builtinGlobals)
        };

        /**
         * Find variables in a given scope and flag redeclared ones.
         * @param {Scope} scope - An escope scope object.
         * @returns {void}
         * @private
         */
        function findVariablesInScope(scope) {
            scope.variables.forEach(variable => {
                const hasBuiltin = options.builtinGlobals && "writeable" in variable;
                const count = (hasBuiltin ? 1 : 0) + variable.identifiers.length;

                if (count >= 2) {
                    variable.identifiers.sort((a, b) => a.range[1] - b.range[1]);

                    for (let i = (hasBuiltin ? 0 : 1), l = variable.identifiers.length; i < l; i++) {
                        context.report({ node: variable.identifiers[i], message: "'{{a}}' is already defined.", data: { a: variable.name } });
                    }
                }
            });

        }

        /**
         * Find variables in the current scope.
         * @param {ASTNode} node - The Program node.
         * @returns {void}
         * @private
         */
        function checkForGlobal(node) {
            const scope = context.getScope(),
                parserOptions = context.parserOptions,
                ecmaFeatures = parserOptions.ecmaFeatures || {};

            // Nodejs env or modules has a special scope.
            if (ecmaFeatures.globalReturn || node.sourceType === "module") {
                findVariablesInScope(scope.childScopes[0]);
            } else {
                findVariablesInScope(scope);
            }
        }

        /**
         * Find variables in the current scope.
         * @returns {void}
         * @private
         */
        function checkForBlock() {
            findVariablesInScope(context.getScope());
        }

        if (context.parserOptions.ecmaVersion >= 6) {
            return {
                Program: checkForGlobal,
                BlockStatement: checkForBlock,
                SwitchStatement: checkForBlock
            };
        }
        return {
            Program: checkForGlobal,
            FunctionDeclaration: checkForBlock,
            FunctionExpression: checkForBlock,
            ArrowFunctionExpression: checkForBlock
        };

    }
};
