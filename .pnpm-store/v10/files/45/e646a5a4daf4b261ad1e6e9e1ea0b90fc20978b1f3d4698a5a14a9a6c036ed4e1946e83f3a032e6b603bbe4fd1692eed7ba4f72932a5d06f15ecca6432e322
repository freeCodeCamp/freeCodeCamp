/**
 * @fileoverview A rule to disallow using `this`/`super` before `super()`.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given node is a constructor.
 * @param {ASTNode} node A node to check. This node type is one of
 *   `Program`, `FunctionDeclaration`, `FunctionExpression`, and
 *   `ArrowFunctionExpression`.
 * @returns {boolean} `true` if the node is a constructor.
 */
function isConstructorFunction(node) {
    return (
        node.type === "FunctionExpression" &&
        node.parent.type === "MethodDefinition" &&
        node.parent.kind === "constructor"
    );
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "problem",

        docs: {
            description: "disallow `this`/`super` before calling `super()` in constructors",
            category: "ECMAScript 6",
            recommended: true,
            url: "https://eslint.org/docs/rules/no-this-before-super"
        },

        schema: [],

        messages: {
            noBeforeSuper: "'{{kind}}' is not allowed before 'super()'."
        }
    },

    create(context) {

        /*
         * Information for each constructor.
         * - upper:      Information of the upper constructor.
         * - hasExtends: A flag which shows whether the owner class has a valid
         *   `extends` part.
         * - scope:      The scope of the owner class.
         * - codePath:   The code path of this constructor.
         */
        let funcInfo = null;

        /*
         * Information for each code path segment.
         * Each key is the id of a code path segment.
         * Each value is an object:
         * - superCalled:  The flag which shows `super()` called in all code paths.
         * - invalidNodes: The array of invalid ThisExpression and Super nodes.
         */
        let segInfoMap = Object.create(null);

        /**
         * Gets whether or not `super()` is called in a given code path segment.
         * @param {CodePathSegment} segment A code path segment to get.
         * @returns {boolean} `true` if `super()` is called.
         */
        function isCalled(segment) {
            return !segment.reachable || segInfoMap[segment.id].superCalled;
        }

        /**
         * Checks whether or not this is in a constructor.
         * @returns {boolean} `true` if this is in a constructor.
         */
        function isInConstructorOfDerivedClass() {
            return Boolean(funcInfo && funcInfo.isConstructor && funcInfo.hasExtends);
        }

        /**
         * Checks whether or not this is before `super()` is called.
         * @returns {boolean} `true` if this is before `super()` is called.
         */
        function isBeforeCallOfSuper() {
            return (
                isInConstructorOfDerivedClass() &&
                !funcInfo.codePath.currentSegments.every(isCalled)
            );
        }

        /**
         * Sets a given node as invalid.
         * @param {ASTNode} node A node to set as invalid. This is one of
         *      a ThisExpression and a Super.
         * @returns {void}
         */
        function setInvalid(node) {
            const segments = funcInfo.codePath.currentSegments;

            for (let i = 0; i < segments.length; ++i) {
                const segment = segments[i];

                if (segment.reachable) {
                    segInfoMap[segment.id].invalidNodes.push(node);
                }
            }
        }

        /**
         * Sets the current segment as `super` was called.
         * @returns {void}
         */
        function setSuperCalled() {
            const segments = funcInfo.codePath.currentSegments;

            for (let i = 0; i < segments.length; ++i) {
                const segment = segments[i];

                if (segment.reachable) {
                    segInfoMap[segment.id].superCalled = true;
                }
            }
        }

        return {

            /**
             * Adds information of a constructor into the stack.
             * @param {CodePath} codePath A code path which was started.
             * @param {ASTNode} node The current node.
             * @returns {void}
             */
            onCodePathStart(codePath, node) {
                if (isConstructorFunction(node)) {

                    // Class > ClassBody > MethodDefinition > FunctionExpression
                    const classNode = node.parent.parent.parent;

                    funcInfo = {
                        upper: funcInfo,
                        isConstructor: true,
                        hasExtends: Boolean(
                            classNode.superClass &&
                            !astUtils.isNullOrUndefined(classNode.superClass)
                        ),
                        codePath
                    };
                } else {
                    funcInfo = {
                        upper: funcInfo,
                        isConstructor: false,
                        hasExtends: false,
                        codePath
                    };
                }
            },

            /**
             * Removes the top of stack item.
             *
             * And this traverses all segments of this code path then reports every
             * invalid node.
             * @param {CodePath} codePath A code path which was ended.
             * @returns {void}
             */
            onCodePathEnd(codePath) {
                const isDerivedClass = funcInfo.hasExtends;

                funcInfo = funcInfo.upper;
                if (!isDerivedClass) {
                    return;
                }

                codePath.traverseSegments((segment, controller) => {
                    const info = segInfoMap[segment.id];

                    for (let i = 0; i < info.invalidNodes.length; ++i) {
                        const invalidNode = info.invalidNodes[i];

                        context.report({
                            messageId: "noBeforeSuper",
                            node: invalidNode,
                            data: {
                                kind: invalidNode.type === "Super" ? "super" : "this"
                            }
                        });
                    }

                    if (info.superCalled) {
                        controller.skip();
                    }
                });
            },

            /**
             * Initialize information of a given code path segment.
             * @param {CodePathSegment} segment A code path segment to initialize.
             * @returns {void}
             */
            onCodePathSegmentStart(segment) {
                if (!isInConstructorOfDerivedClass()) {
                    return;
                }

                // Initialize info.
                segInfoMap[segment.id] = {
                    superCalled: (
                        segment.prevSegments.length > 0 &&
                        segment.prevSegments.every(isCalled)
                    ),
                    invalidNodes: []
                };
            },

            /**
             * Update information of the code path segment when a code path was
             * looped.
             * @param {CodePathSegment} fromSegment The code path segment of the
             *      end of a loop.
             * @param {CodePathSegment} toSegment A code path segment of the head
             *      of a loop.
             * @returns {void}
             */
            onCodePathSegmentLoop(fromSegment, toSegment) {
                if (!isInConstructorOfDerivedClass()) {
                    return;
                }

                // Update information inside of the loop.
                funcInfo.codePath.traverseSegments(
                    { first: toSegment, last: fromSegment },
                    (segment, controller) => {
                        const info = segInfoMap[segment.id];

                        if (info.superCalled) {
                            info.invalidNodes = [];
                            controller.skip();
                        } else if (
                            segment.prevSegments.length > 0 &&
                            segment.prevSegments.every(isCalled)
                        ) {
                            info.superCalled = true;
                            info.invalidNodes = [];
                        }
                    }
                );
            },

            /**
             * Reports if this is before `super()`.
             * @param {ASTNode} node A target node.
             * @returns {void}
             */
            ThisExpression(node) {
                if (isBeforeCallOfSuper()) {
                    setInvalid(node);
                }
            },

            /**
             * Reports if this is before `super()`.
             * @param {ASTNode} node A target node.
             * @returns {void}
             */
            Super(node) {
                if (!astUtils.isCallee(node) && isBeforeCallOfSuper()) {
                    setInvalid(node);
                }
            },

            /**
             * Marks `super()` called.
             * @param {ASTNode} node A target node.
             * @returns {void}
             */
            "CallExpression:exit"(node) {
                if (node.callee.type === "Super" && isBeforeCallOfSuper()) {
                    setSuperCalled();
                }
            },

            /**
             * Resets state.
             * @returns {void}
             */
            "Program:exit"() {
                segInfoMap = Object.create(null);
            }
        };
    }
};
