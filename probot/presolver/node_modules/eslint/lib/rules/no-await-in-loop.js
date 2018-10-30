/**
 * @fileoverview Rule to disallow uses of await inside of loops.
 * @author Nat Mote (nmote)
 */
"use strict";

// Node types which are considered loops.
const loopTypes = new Set([
    "ForStatement",
    "ForOfStatement",
    "ForInStatement",
    "WhileStatement",
    "DoWhileStatement"
]);

// Node types at which we should stop looking for loops. For example, it is fine to declare an async
// function within a loop, and use await inside of that.
const boundaryTypes = new Set([
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression"
]);

module.exports = {
    meta: {
        docs: {
            description: "disallow `await` inside of loops",
            category: "Possible Errors",
            recommended: false
        },
        schema: []
    },
    create(context) {
        return {
            AwaitExpression(node) {
                const ancestors = context.getAncestors();

                // Reverse so that we can traverse from the deepest node upwards.
                ancestors.reverse();

                // Create a set of all the ancestors plus this node so that we can check
                // if this use of await appears in the body of the loop as opposed to
                // the right-hand side of a for...of, for example.
                const ancestorSet = new Set(ancestors).add(node);

                for (let i = 0; i < ancestors.length; i++) {
                    const ancestor = ancestors[i];

                    if (boundaryTypes.has(ancestor.type)) {

                        // Short-circuit out if we encounter a boundary type. Loops above
                        // this do not matter.
                        return;
                    }
                    if (loopTypes.has(ancestor.type)) {

                        // Only report if we are actually in the body or another part that gets executed on
                        // every iteration.
                        if (
                            ancestorSet.has(ancestor.body) ||
                            ancestorSet.has(ancestor.test) ||
                            ancestorSet.has(ancestor.update)
                        ) {
                            context.report({
                                node,
                                message: "Unexpected `await` inside a loop."
                            });
                            return;
                        }
                    }
                }
            }
        };
    }
};
