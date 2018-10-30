/**
 * @fileoverview Validates JSDoc comments are syntactically correct
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const doctrine = require("doctrine");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce valid JSDoc comments",
            category: "Possible Errors",
            recommended: false
        },

        schema: [
            {
                type: "object",
                properties: {
                    prefer: {
                        type: "object",
                        additionalProperties: {
                            type: "string"
                        }
                    },
                    preferType: {
                        type: "object",
                        additionalProperties: {
                            type: "string"
                        }
                    },
                    requireReturn: {
                        type: "boolean"
                    },
                    requireParamDescription: {
                        type: "boolean"
                    },
                    requireReturnDescription: {
                        type: "boolean"
                    },
                    matchDescription: {
                        type: "string"
                    },
                    requireReturnType: {
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create(context) {

        const options = context.options[0] || {},
            prefer = options.prefer || {},
            sourceCode = context.getSourceCode(),

            // these both default to true, so you have to explicitly make them false
            requireReturn = options.requireReturn !== false,
            requireParamDescription = options.requireParamDescription !== false,
            requireReturnDescription = options.requireReturnDescription !== false,
            requireReturnType = options.requireReturnType !== false,
            preferType = options.preferType || {},
            checkPreferType = Object.keys(preferType).length !== 0;

        //--------------------------------------------------------------------------
        // Helpers
        //--------------------------------------------------------------------------

        // Using a stack to store if a function returns or not (handling nested functions)
        const fns = [];

        /**
         * Check if node type is a Class
         * @param {ASTNode} node node to check.
         * @returns {boolean} True is its a class
         * @private
         */
        function isTypeClass(node) {
            return node.type === "ClassExpression" || node.type === "ClassDeclaration";
        }

        /**
         * When parsing a new function, store it in our function stack.
         * @param {ASTNode} node A function node to check.
         * @returns {void}
         * @private
         */
        function startFunction(node) {
            fns.push({
                returnPresent: (node.type === "ArrowFunctionExpression" && node.body.type !== "BlockStatement") ||
                    isTypeClass(node)
            });
        }

        /**
         * Indicate that return has been found in the current function.
         * @param {ASTNode} node The return node.
         * @returns {void}
         * @private
         */
        function addReturn(node) {
            const functionState = fns[fns.length - 1];

            if (functionState && node.argument !== null) {
                functionState.returnPresent = true;
            }
        }

        /**
         * Check if return tag type is void or undefined
         * @param {Object} tag JSDoc tag
         * @returns {boolean} True if its of type void or undefined
         * @private
         */
        function isValidReturnType(tag) {
            return tag.type === null || tag.type.name === "void" || tag.type.type === "UndefinedLiteral";
        }

        /**
         * Check if type should be validated based on some exceptions
         * @param {Object} type JSDoc tag
         * @returns {boolean} True if it can be validated
         * @private
         */
        function canTypeBeValidated(type) {
            return type !== "UndefinedLiteral" && // {undefined} as there is no name property available.
                   type !== "NullLiteral" && // {null}
                   type !== "NullableLiteral" && // {?}
                   type !== "FunctionType" && // {function(a)}
                   type !== "AllLiteral"; // {*}
        }

        /**
         * Extract the current and expected type based on the input type object
         * @param {Object} type JSDoc tag
         * @returns {Object} current and expected type object
         * @private
         */
        function getCurrentExpectedTypes(type) {
            let currentType;

            if (type.name) {
                currentType = type.name;
            } else if (type.expression) {
                currentType = type.expression.name;
            }

            const expectedType = currentType && preferType[currentType];

            return {
                currentType,
                expectedType
            };
        }

        /**
         * Validate type for a given JSDoc node
         * @param {Object} jsdocNode JSDoc node
         * @param {Object} type JSDoc tag
         * @returns {void}
         * @private
         */
        function validateType(jsdocNode, type) {
            if (!type || !canTypeBeValidated(type.type)) {
                return;
            }

            const typesToCheck = [];
            let elements = [];

            switch (type.type) {
                case "TypeApplication":  // {Array.<String>}
                    elements = type.applications[0].type === "UnionType" ? type.applications[0].elements : type.applications;
                    typesToCheck.push(getCurrentExpectedTypes(type));
                    break;
                case "RecordType":  // {{20:String}}
                    elements = type.fields;
                    break;
                case "UnionType":  // {String|number|Test}
                case "ArrayType":  // {[String, number, Test]}
                    elements = type.elements;
                    break;
                case "FieldType":  // Array.<{count: number, votes: number}>
                    if (type.value) {
                        typesToCheck.push(getCurrentExpectedTypes(type.value));
                    }
                    break;
                default:
                    typesToCheck.push(getCurrentExpectedTypes(type));
            }

            elements.forEach(validateType.bind(null, jsdocNode));

            typesToCheck.forEach(typeToCheck => {
                if (typeToCheck.expectedType &&
                    typeToCheck.expectedType !== typeToCheck.currentType) {
                    context.report({
                        node: jsdocNode,
                        message: "Use '{{expectedType}}' instead of '{{currentType}}'.",
                        data: {
                            currentType: typeToCheck.currentType,
                            expectedType: typeToCheck.expectedType
                        }
                    });
                }
            });
        }

        /**
         * Validate the JSDoc node and output warnings if anything is wrong.
         * @param {ASTNode} node The AST node to check.
         * @returns {void}
         * @private
         */
        function checkJSDoc(node) {
            const jsdocNode = sourceCode.getJSDocComment(node),
                functionData = fns.pop(),
                params = Object.create(null);
            let hasReturns = false,
                hasConstructor = false,
                isInterface = false,
                isOverride = false,
                isAbstract = false,
                jsdoc;

            // make sure only to validate JSDoc comments
            if (jsdocNode) {

                try {
                    jsdoc = doctrine.parse(jsdocNode.value, {
                        strict: true,
                        unwrap: true,
                        sloppy: true
                    });
                } catch (ex) {

                    if (/braces/i.test(ex.message)) {
                        context.report({ node: jsdocNode, message: "JSDoc type missing brace." });
                    } else {
                        context.report({ node: jsdocNode, message: "JSDoc syntax error." });
                    }

                    return;
                }

                jsdoc.tags.forEach(tag => {

                    switch (tag.title.toLowerCase()) {

                        case "param":
                        case "arg":
                        case "argument":
                            if (!tag.type) {
                                context.report({ node: jsdocNode, message: "Missing JSDoc parameter type for '{{name}}'.", data: { name: tag.name } });
                            }

                            if (!tag.description && requireParamDescription) {
                                context.report({ node: jsdocNode, message: "Missing JSDoc parameter description for '{{name}}'.", data: { name: tag.name } });
                            }

                            if (params[tag.name]) {
                                context.report({ node: jsdocNode, message: "Duplicate JSDoc parameter '{{name}}'.", data: { name: tag.name } });
                            } else if (tag.name.indexOf(".") === -1) {
                                params[tag.name] = 1;
                            }
                            break;

                        case "return":
                        case "returns":
                            hasReturns = true;

                            if (!requireReturn && !functionData.returnPresent && (tag.type === null || !isValidReturnType(tag)) && !isAbstract) {
                                context.report({
                                    node: jsdocNode,
                                    message: "Unexpected @{{title}} tag; function has no return statement.",
                                    data: {
                                        title: tag.title
                                    }
                                });
                            } else {
                                if (requireReturnType && !tag.type) {
                                    context.report({ node: jsdocNode, message: "Missing JSDoc return type." });
                                }

                                if (!isValidReturnType(tag) && !tag.description && requireReturnDescription) {
                                    context.report({ node: jsdocNode, message: "Missing JSDoc return description." });
                                }
                            }

                            break;

                        case "constructor":
                        case "class":
                            hasConstructor = true;
                            break;

                        case "override":
                        case "inheritdoc":
                            isOverride = true;
                            break;

                        case "abstract":
                        case "virtual":
                            isAbstract = true;
                            break;

                        case "interface":
                            isInterface = true;
                            break;

                        // no default
                    }

                    // check tag preferences
                    if (prefer.hasOwnProperty(tag.title) && tag.title !== prefer[tag.title]) {
                        context.report({ node: jsdocNode, message: "Use @{{name}} instead.", data: { name: prefer[tag.title] } });
                    }

                    // validate the types
                    if (checkPreferType && tag.type) {
                        validateType(jsdocNode, tag.type);
                    }
                });

                // check for functions missing @returns
                if (!isOverride && !hasReturns && !hasConstructor && !isInterface &&
                    node.parent.kind !== "get" && node.parent.kind !== "constructor" &&
                    node.parent.kind !== "set" && !isTypeClass(node)) {
                    if (requireReturn || functionData.returnPresent) {
                        context.report({
                            node: jsdocNode,
                            message: "Missing JSDoc @{{returns}} for function.",
                            data: {
                                returns: prefer.returns || "returns"
                            }
                        });
                    }
                }

                // check the parameters
                const jsdocParams = Object.keys(params);

                if (node.params) {
                    node.params.forEach((param, i) => {
                        if (param.type === "AssignmentPattern") {
                            param = param.left;
                        }

                        const name = param.name;

                        // TODO(nzakas): Figure out logical things to do with destructured, default, rest params
                        if (param.type === "Identifier") {
                            if (jsdocParams[i] && (name !== jsdocParams[i])) {
                                context.report({ node: jsdocNode, message: "Expected JSDoc for '{{name}}' but found '{{jsdocName}}'.", data: {
                                    name,
                                    jsdocName: jsdocParams[i]
                                } });
                            } else if (!params[name] && !isOverride) {
                                context.report({ node: jsdocNode, message: "Missing JSDoc for parameter '{{name}}'.", data: {
                                    name
                                } });
                            }
                        }
                    });
                }

                if (options.matchDescription) {
                    const regex = new RegExp(options.matchDescription);

                    if (!regex.test(jsdoc.description)) {
                        context.report({ node: jsdocNode, message: "JSDoc description does not satisfy the regex pattern." });
                    }
                }

            }

        }

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            ArrowFunctionExpression: startFunction,
            FunctionExpression: startFunction,
            FunctionDeclaration: startFunction,
            ClassExpression: startFunction,
            ClassDeclaration: startFunction,
            "ArrowFunctionExpression:exit": checkJSDoc,
            "FunctionExpression:exit": checkJSDoc,
            "FunctionDeclaration:exit": checkJSDoc,
            "ClassExpression:exit": checkJSDoc,
            "ClassDeclaration:exit": checkJSDoc,
            ReturnStatement: addReturn
        };

    }
};
