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
 * @param {eslint-scope.Scope} scope A scope to get.
 * @returns {eslint-scope.Variable} The found variable object.
 */
function getVariableOfArguments(scope) {
    const variables = scope.variables;

    for (let i = 0; i < variables.length; ++i) {
        const variable = variables[i];

        if (variable.name === "arguments") {

            /*
             * If there was a parameter which is named "arguments", the implicit "arguments" is not defined.
             * So does fast return with null.
             */
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
 * @param {eslint-scope.Reference} reference The reference to check.
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
        type: "suggestion",

        docs: {
            description: "require rest parameters instead of `arguments`",
            category: "ECMAScript 6",
            recommended: false,
            url: "https://eslint.org/docs/rules/prefer-rest-params"
        },

        schema: [],

        messages: {
            preferRestParams: "Use the rest parameters instead of 'arguments'."
        }
    },

    create(context) {

        /**
         * Reports a given reference.
         * @param {eslint-scope.Reference} reference A reference to report.
         * @returns {void}
         */
        function report(reference) {
            context.report({
                node: reference.identifier,
                loc: reference.identifier.loc,
                messageId: "preferRestParams"
            });
        }

        /**
         * Reports references of the implicit `arguments` variable if exist.
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
