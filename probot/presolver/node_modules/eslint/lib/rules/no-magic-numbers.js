/**
 * @fileoverview Rule to flag statements that use magic numbers (adapted from https://github.com/danielstjules/buddy.js)
 * @author Vincent Lemeunier
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow magic numbers",
            category: "Best Practices",
            recommended: false
        },

        schema: [{
            type: "object",
            properties: {
                detectObjects: {
                    type: "boolean"
                },
                enforceConst: {
                    type: "boolean"
                },
                ignore: {
                    type: "array",
                    items: {
                        type: "number"
                    },
                    uniqueItems: true
                },
                ignoreArrayIndexes: {
                    type: "boolean"
                }
            },
            additionalProperties: false
        }]
    },

    create(context) {
        const config = context.options[0] || {},
            detectObjects = !!config.detectObjects,
            enforceConst = !!config.enforceConst,
            ignore = config.ignore || [],
            ignoreArrayIndexes = !!config.ignoreArrayIndexes;

        /**
         * Returns whether the node is number literal
         * @param {Node} node - the node literal being evaluated
         * @returns {boolean} true if the node is a number literal
         */
        function isNumber(node) {
            return typeof node.value === "number";
        }

        /**
         * Returns whether the number should be ignored
         * @param {number} num - the number
         * @returns {boolean} true if the number should be ignored
         */
        function shouldIgnoreNumber(num) {
            return ignore.indexOf(num) !== -1;
        }

        /**
         * Returns whether the number should be ignored when used as a radix within parseInt() or Number.parseInt()
         * @param {ASTNode} parent - the non-"UnaryExpression" parent
         * @param {ASTNode} node - the node literal being evaluated
         * @returns {boolean} true if the number should be ignored
         */
        function shouldIgnoreParseInt(parent, node) {
            return parent.type === "CallExpression" && node === parent.arguments[1] &&
                (parent.callee.name === "parseInt" ||
                parent.callee.type === "MemberExpression" &&
                parent.callee.object.name === "Number" &&
                parent.callee.property.name === "parseInt");
        }

        /**
         * Returns whether the number should be ignored when used to define a JSX prop
         * @param {ASTNode} parent - the non-"UnaryExpression" parent
         * @returns {boolean} true if the number should be ignored
         */
        function shouldIgnoreJSXNumbers(parent) {
            return parent.type.indexOf("JSX") === 0;
        }

        /**
         * Returns whether the number should be ignored when used as an array index with enabled 'ignoreArrayIndexes' option.
         * @param {ASTNode} parent - the non-"UnaryExpression" parent.
         * @returns {boolean} true if the number should be ignored
         */
        function shouldIgnoreArrayIndexes(parent) {
            return parent.type === "MemberExpression" && ignoreArrayIndexes;
        }

        return {
            Literal(node) {
                let parent = node.parent,
                    value = node.value,
                    raw = node.raw;
                const okTypes = detectObjects ? [] : ["ObjectExpression", "Property", "AssignmentExpression"];

                if (!isNumber(node)) {
                    return;
                }

                // For negative magic numbers: update the value and parent node
                if (parent.type === "UnaryExpression" && parent.operator === "-") {
                    node = parent;
                    parent = node.parent;
                    value = -value;
                    raw = `-${raw}`;
                }

                if (shouldIgnoreNumber(value) ||
                    shouldIgnoreParseInt(parent, node) ||
                    shouldIgnoreArrayIndexes(parent) ||
                    shouldIgnoreJSXNumbers(parent)) {
                    return;
                }

                if (parent.type === "VariableDeclarator") {
                    if (enforceConst && parent.parent.kind !== "const") {
                        context.report({
                            node,
                            message: "Number constants declarations must use 'const'."
                        });
                    }
                } else if (
                    okTypes.indexOf(parent.type) === -1 ||
                    (parent.type === "AssignmentExpression" && parent.left.type === "Identifier")
                ) {
                    context.report({
                        node,
                        message: "No magic number: {{raw}}.",
                        data: {
                            raw
                        }
                    });
                }
            }
        };
    }
};
