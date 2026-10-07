/**
 * @fileoverview Rule to enforce consistent naming of "this" context variables
 * @author Raphael Pigulla
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "enforce consistent naming when capturing the current execution context",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://eslint.org/docs/rules/consistent-this"
        },

        schema: {
            type: "array",
            items: {
                type: "string",
                minLength: 1
            },
            uniqueItems: true
        },

        messages: {
            aliasNotAssignedToThis: "Designated alias '{{name}}' is not assigned to 'this'.",
            unexpectedAlias: "Unexpected alias '{{name}}' for 'this'."
        }
    },

    create(context) {
        let aliases = [];

        if (context.options.length === 0) {
            aliases.push("that");
        } else {
            aliases = context.options;
        }

        /**
         * Reports that a variable declarator or assignment expression is assigning
         * a non-'this' value to the specified alias.
         * @param {ASTNode} node The assigning node.
         * @param {string}  name the name of the alias that was incorrectly used.
         * @returns {void}
         */
        function reportBadAssignment(node, name) {
            context.report({ node, messageId: "aliasNotAssignedToThis", data: { name } });
        }

        /**
         * Checks that an assignment to an identifier only assigns 'this' to the
         * appropriate alias, and the alias is only assigned to 'this'.
         * @param {ASTNode} node The assigning node.
         * @param {Identifier} name The name of the variable assigned to.
         * @param {Expression} value The value of the assignment.
         * @returns {void}
         */
        function checkAssignment(node, name, value) {
            const isThis = value.type === "ThisExpression";

            if (aliases.indexOf(name) !== -1) {
                if (!isThis || node.operator && node.operator !== "=") {
                    reportBadAssignment(node, name);
                }
            } else if (isThis) {
                context.report({ node, messageId: "unexpectedAlias", data: { name } });
            }
        }

        /**
         * Ensures that a variable declaration of the alias in a program or function
         * is assigned to the correct value.
         * @param {string} alias alias the check the assignment of.
         * @param {Object} scope scope of the current code we are checking.
         * @private
         * @returns {void}
         */
        function checkWasAssigned(alias, scope) {
            const variable = scope.set.get(alias);

            if (!variable) {
                return;
            }

            if (variable.defs.some(def => def.node.type === "VariableDeclarator" &&
                def.node.init !== null)) {
                return;
            }

            /*
             * The alias has been declared and not assigned: check it was
             * assigned later in the same scope.
             */
            if (!variable.references.some(reference => {
                const write = reference.writeExpr;

                return (
                    reference.from === scope &&
                    write && write.type === "ThisExpression" &&
                    write.parent.operator === "="
                );
            })) {
                variable.defs.map(def => def.node).forEach(node => {
                    reportBadAssignment(node, alias);
                });
            }
        }

        /**
         * Check each alias to ensure that is was assigned to the correct value.
         * @returns {void}
         */
        function ensureWasAssigned() {
            const scope = context.getScope();

            aliases.forEach(alias => {
                checkWasAssigned(alias, scope);
            });
        }

        return {
            "Program:exit": ensureWasAssigned,
            "FunctionExpression:exit": ensureWasAssigned,
            "FunctionDeclaration:exit": ensureWasAssigned,

            VariableDeclarator(node) {
                const id = node.id;
                const isDestructuring =
                    id.type === "ArrayPattern" || id.type === "ObjectPattern";

                if (node.init !== null && !isDestructuring) {
                    checkAssignment(node, id.name, node.init);
                }
            },

            AssignmentExpression(node) {
                if (node.left.type === "Identifier") {
                    checkAssignment(node, node.left.name, node.right);
                }
            }
        };

    }
};
