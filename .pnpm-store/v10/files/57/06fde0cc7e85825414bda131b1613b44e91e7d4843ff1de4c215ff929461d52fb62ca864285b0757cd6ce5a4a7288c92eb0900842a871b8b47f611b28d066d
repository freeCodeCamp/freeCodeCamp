/**
 * @fileoverview Disallow reassignment of function parameters.
 * @author Nat Burns
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const stopNodePattern = /(?:Statement|Declaration|Function(?:Expression)?|Program)$/u;

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow reassigning `function` parameters",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-param-reassign"
        },

        schema: [
            {
                oneOf: [
                    {
                        type: "object",
                        properties: {
                            props: {
                                enum: [false]
                            }
                        },
                        additionalProperties: false
                    },
                    {
                        type: "object",
                        properties: {
                            props: {
                                enum: [true]
                            },
                            ignorePropertyModificationsFor: {
                                type: "array",
                                items: {
                                    type: "string"
                                },
                                uniqueItems: true
                            },
                            ignorePropertyModificationsForRegex: {
                                type: "array",
                                items: {
                                    type: "string"
                                },
                                uniqueItems: true
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],

        messages: {
            assignmentToFunctionParam: "Assignment to function parameter '{{name}}'.",
            assignmentToFunctionParamProp: "Assignment to property of function parameter '{{name}}'."
        }
    },

    create(context) {
        const props = context.options[0] && context.options[0].props;
        const ignoredPropertyAssignmentsFor = context.options[0] && context.options[0].ignorePropertyModificationsFor || [];
        const ignoredPropertyAssignmentsForRegex = context.options[0] && context.options[0].ignorePropertyModificationsForRegex || [];

        /**
         * Checks whether or not the reference modifies properties of its variable.
         * @param {Reference} reference A reference to check.
         * @returns {boolean} Whether or not the reference modifies properties of its variable.
         */
        function isModifyingProp(reference) {
            let node = reference.identifier;
            let parent = node.parent;

            while (parent && (!stopNodePattern.test(parent.type) ||
                    parent.type === "ForInStatement" || parent.type === "ForOfStatement")) {
                switch (parent.type) {

                    // e.g. foo.a = 0;
                    case "AssignmentExpression":
                        return parent.left === node;

                    // e.g. ++foo.a;
                    case "UpdateExpression":
                        return true;

                    // e.g. delete foo.a;
                    case "UnaryExpression":
                        if (parent.operator === "delete") {
                            return true;
                        }
                        break;

                    // e.g. for (foo.a in b) {}
                    case "ForInStatement":
                    case "ForOfStatement":
                        if (parent.left === node) {
                            return true;
                        }

                        // this is a stop node for parent.right and parent.body
                        return false;

                    // EXCLUDES: e.g. cache.get(foo.a).b = 0;
                    case "CallExpression":
                        if (parent.callee !== node) {
                            return false;
                        }
                        break;

                    // EXCLUDES: e.g. cache[foo.a] = 0;
                    case "MemberExpression":
                        if (parent.property === node) {
                            return false;
                        }
                        break;

                    // EXCLUDES: e.g. ({ [foo]: a }) = bar;
                    case "Property":
                        if (parent.key === node) {
                            return false;
                        }

                        break;

                    // EXCLUDES: e.g. (foo ? a : b).c = bar;
                    case "ConditionalExpression":
                        if (parent.test === node) {
                            return false;
                        }

                        break;

                    // no default
                }

                node = parent;
                parent = node.parent;
            }

            return false;
        }

        /**
         * Tests that an identifier name matches any of the ignored property assignments.
         * First we test strings in ignoredPropertyAssignmentsFor.
         * Then we instantiate and test RegExp objects from ignoredPropertyAssignmentsForRegex strings.
         * @param {string} identifierName A string that describes the name of an identifier to
         * ignore property assignments for.
         * @returns {boolean} Whether the string matches an ignored property assignment regular expression or not.
         */
        function isIgnoredPropertyAssignment(identifierName) {
            return ignoredPropertyAssignmentsFor.includes(identifierName) ||
                ignoredPropertyAssignmentsForRegex.some(ignored => new RegExp(ignored, "u").test(identifierName));
        }

        /**
         * Reports a reference if is non initializer and writable.
         * @param {Reference} reference A reference to check.
         * @param {int} index The index of the reference in the references.
         * @param {Reference[]} references The array that the reference belongs to.
         * @returns {void}
         */
        function checkReference(reference, index, references) {
            const identifier = reference.identifier;

            if (identifier &&
                !reference.init &&

                /*
                 * Destructuring assignments can have multiple default value,
                 * so possibly there are multiple writeable references for the same identifier.
                 */
                (index === 0 || references[index - 1].identifier !== identifier)
            ) {
                if (reference.isWrite()) {
                    context.report({
                        node: identifier,
                        messageId: "assignmentToFunctionParam",
                        data: { name: identifier.name }
                    });
                } else if (props && isModifyingProp(reference) && !isIgnoredPropertyAssignment(identifier.name)) {
                    context.report({
                        node: identifier,
                        messageId: "assignmentToFunctionParamProp",
                        data: { name: identifier.name }
                    });
                }
            }
        }

        /**
         * Finds and reports references that are non initializer and writable.
         * @param {Variable} variable A variable to check.
         * @returns {void}
         */
        function checkVariable(variable) {
            if (variable.defs[0].type === "Parameter") {
                variable.references.forEach(checkReference);
            }
        }

        /**
         * Checks parameters of a given function node.
         * @param {ASTNode} node A function node to check.
         * @returns {void}
         */
        function checkForFunction(node) {
            context.getDeclaredVariables(node).forEach(checkVariable);
        }

        return {

            // `:exit` is needed for the `node.parent` property of identifier nodes.
            "FunctionDeclaration:exit": checkForFunction,
            "FunctionExpression:exit": checkForFunction,
            "ArrowFunctionExpression:exit": checkForFunction
        };

    }
};
