/**
 * @fileoverview Rule to check multiple var declarations per line
 * @author Alberto Rodríguez
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require or disallow newlines around variable declarations",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [
            {
                enum: ["always", "initializations"]
            }
        ],

        fixable: "whitespace"
    },

    create(context) {

        const ERROR_MESSAGE = "Expected variable declaration to be on a new line.";
        const always = context.options[0] === "always";

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------


        /**
         * Determine if provided keyword is a variant of for specifiers
         * @private
         * @param {string} keyword - keyword to test
         * @returns {boolean} True if `keyword` is a variant of for specifier
         */
        function isForTypeSpecifier(keyword) {
            return keyword === "ForStatement" || keyword === "ForInStatement" || keyword === "ForOfStatement";
        }

        /**
         * Checks newlines around variable declarations.
         * @private
         * @param {ASTNode} node - `VariableDeclaration` node to test
         * @returns {void}
         */
        function checkForNewLine(node) {
            if (isForTypeSpecifier(node.parent.type)) {
                return;
            }

            const declarations = node.declarations;
            let prev;

            declarations.forEach(current => {
                if (prev && prev.loc.end.line === current.loc.start.line) {
                    if (always || prev.init || current.init) {
                        context.report({
                            node,
                            message: ERROR_MESSAGE,
                            loc: current.loc.start,
                            fix: fixer => fixer.insertTextBefore(current, "\n")
                        });
                    }
                }
                prev = current;
            });
        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            VariableDeclaration: checkForNewLine
        };

    }
};
