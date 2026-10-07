/**
 * @fileoverview Rule to flag use of an object property of the global object (Math and JSON) as a function
 * @author James Allardice
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { CALL, CONSTRUCT, ReferenceTracker } = require("eslint-utils");
const getPropertyName = require("./utils/ast-utils").getStaticPropertyName;

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const nonCallableGlobals = ["Atomics", "JSON", "Math", "Reflect"];

/**
 * Returns the name of the node to report
 * @param {ASTNode} node A node to report
 * @returns {string} name to report
 */
function getReportNodeName(node) {
    if (node.type === "ChainExpression") {
        return getReportNodeName(node.expression);
    }
    if (node.type === "MemberExpression") {
        return getPropertyName(node);
    }
    return node.name;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow calling global object properties as functions",
            category: "Possible Errors",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-obj-calls"
        },

        schema: [],

        messages: {
            unexpectedCall: "'{{name}}' is not a function.",
            unexpectedRefCall: "'{{name}}' is reference to '{{ref}}', which is not a function."
        }
    },

    create(context) {

        return {
            Program() {
                const scope = context.getScope();
                const tracker = new ReferenceTracker(scope);
                const traceMap = {};

                for (const g of nonCallableGlobals) {
                    traceMap[g] = {
                        [CALL]: true,
                        [CONSTRUCT]: true
                    };
                }

                for (const { node, path } of tracker.iterateGlobalReferences(traceMap)) {
                    const name = getReportNodeName(node.callee);
                    const ref = path[0];
                    const messageId = name === ref ? "unexpectedCall" : "unexpectedRefCall";

                    context.report({ node, messageId, data: { name, ref } });
                }
            }
        };
    }
};
