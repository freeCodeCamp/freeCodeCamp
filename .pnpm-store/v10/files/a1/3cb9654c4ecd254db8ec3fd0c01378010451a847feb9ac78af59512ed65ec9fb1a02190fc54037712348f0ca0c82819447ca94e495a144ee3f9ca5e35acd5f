/**
 * @fileoverview Rule to disallow loops with a body that allows only one iteration
 * @author Milos Djermanovic
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const allLoopTypes = ["WhileStatement", "DoWhileStatement", "ForStatement", "ForInStatement", "ForOfStatement"];

/**
 * Determines whether the given node is the first node in the code path to which a loop statement
 * 'loops' for the next iteration.
 * @param {ASTNode} node The node to check.
 * @returns {boolean} `true` if the node is a looping target.
 */
function isLoopingTarget(node) {
    const parent = node.parent;

    if (parent) {
        switch (parent.type) {
            case "WhileStatement":
                return node === parent.test;
            case "DoWhileStatement":
                return node === parent.body;
            case "ForStatement":
                return node === (parent.update || parent.test || parent.body);
            case "ForInStatement":
            case "ForOfStatement":
                return node === parent.left;

            // no default
        }
    }

    return false;
}

/**
 * Creates an array with elements from the first given array that are not included in the second given array.
 * @param {Array} arrA The array to compare from.
 * @param {Array} arrB The array to compare against.
 * @returns {Array} a new array that represents `arrA \ arrB`.
 */
function getDifference(arrA, arrB) {
    return arrA.filter(a => !arrB.includes(a));
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow loops with a body that allows only one iteration",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-unreachable-loop"
        },

        schema: [{
            type: "object",
            properties: {
                ignore: {
                    type: "array",
                    items: {
                        enum: allLoopTypes
                    },
                    uniqueItems: true
                }
            },
            additionalProperties: false
        }],

        messages: {
            invalid: "Invalid loop. Its body allows only one iteration."
        }
    },

    create(context) {
        const ignoredLoopTypes = context.options[0] && context.options[0].ignore || [],
            loopTypesToCheck = getDifference(allLoopTypes, ignoredLoopTypes),
            loopSelector = loopTypesToCheck.join(","),
            loopsByTargetSegments = new Map(),
            loopsToReport = new Set();

        let currentCodePath = null;

        return {
            onCodePathStart(codePath) {
                currentCodePath = codePath;
            },

            onCodePathEnd() {
                currentCodePath = currentCodePath.upper;
            },

            [loopSelector](node) {

                /**
                 * Ignore unreachable loop statements to avoid unnecessary complexity in the implementation, or false positives otherwise.
                 * For unreachable segments, the code path analysis does not raise events required for this implementation.
                 */
                if (currentCodePath.currentSegments.some(segment => segment.reachable)) {
                    loopsToReport.add(node);
                }
            },

            onCodePathSegmentStart(segment, node) {
                if (isLoopingTarget(node)) {
                    const loop = node.parent;

                    loopsByTargetSegments.set(segment, loop);
                }
            },

            onCodePathSegmentLoop(_, toSegment, node) {
                const loop = loopsByTargetSegments.get(toSegment);

                /**
                 * The second iteration is reachable, meaning that the loop is valid by the logic of this rule,
                 * only if there is at least one loop event with the appropriate target (which has been already
                 * determined in the `loopsByTargetSegments` map), raised from either:
                 *
                 * - the end of the loop's body (in which case `node === loop`)
                 * - a `continue` statement
                 *
                 * This condition skips loop events raised from `ForInStatement > .right` and `ForOfStatement > .right` nodes.
                 */
                if (node === loop || node.type === "ContinueStatement") {

                    // Removes loop if it exists in the set. Otherwise, `Set#delete` has no effect and doesn't throw.
                    loopsToReport.delete(loop);
                }
            },

            "Program:exit"() {
                loopsToReport.forEach(
                    node => context.report({ node, messageId: "invalid" })
                );
            }
        };
    }
};
