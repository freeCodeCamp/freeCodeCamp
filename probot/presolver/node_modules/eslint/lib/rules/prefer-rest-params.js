/**
 * @fileoverview Rule to
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Gets the variable object of `arguments` which is defined implicitly.
 * @param {escope.Scope} scope - A scope to get.
 * @returns {escope.Variable} The found variable object.
 */
function getVariableOfArguments(scope) {
    const variables = scope.variables;

    for (let i = 0; i < variables.length; ++i) {
        const variable = variables[i];

        if (variable.name === "arguments") {

            // If there was a parameter which is named "arguments", the implicit "arguments" is not defined.
            // So does fast return with null.
            return (variable.identifiers.length === 0) ? variable : null;
        }
    }

    /* istanbul ignore next : unreachable */
    return null;
}

/**
 * Checks if the given reference is not normal member access.
 *
 * - arguments         .... true    // not member access
 * - arguments[i]      .... true    // computed member access
 * - arguments[0]      .... true    // computed member access
 * - arguments.length  .... false   // normal member access
 *
 * @param {escope.Reference} reference - The reference to check.
 * @returns {boolean} `true` if the reference is not normal member access.
 */
function isNotNormalMemberAccess(reference) {
    const id = reference.identifier;
    const parent = id.parent;

    return !(
        parent.type === "MemberExpression" &&
        parent.object === id &&
        !parent.computed
    );
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "require rest parameters instead of `arguments`",
            category: "ECMAScript 6",
            recommended: false
        },

        schema: []
    },

    create(context) {

        /**
         * Reports a given reference.
         *
         * @param {escope.Reference} reference - A reference to report.
         * @returns {void}
         */
        function report(reference) {
            context.report({
                node: reference.identifier,
                loc: reference.identifier.loc,
                message: "Use the rest parameters instead of 'arguments'."
            });
        }

        /**
         * Reports references of the implicit `arguments` variable if exist.
         *
         * @returns {void}
         */
        function checkForArguments() {
            const argumentsVar = getVariableOfArguments(context.getScope());

            if (argumentsVar) {
                argumentsVar
                    .references
                    .filter(isNotNormalMemberAccess)
                    .forEach(report);
            }
        }

        return {
            "FunctionDeclaration:exit": checkForArguments,
            "FunctionExpression:exit": checkForArguments
        };
    }
};
