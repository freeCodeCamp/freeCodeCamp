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
        type: "suggestion",

        docs: {
            description: "enforce valid JSDoc comments",
            category: "Possible Errors",
            recommended: false,
            url: "https://eslint.org/docs/rules/valid-jsdoc"
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
                        type: "boolean",
                        default: true
                    },
                    requireParamDescription: {
                        type: "boolean",
                        default: true
                    },
                    requireReturnDescription: {
                        type: "boolean",
                        default: true
                    },
                    matchDescription: {
                        type: "string"
                    },
                    requireReturnType: {
                        type: "boolean",
                        default: true
                    },
                    requireParamType: {
                        type: "boolean",
                        default: true
                    }
                },
                additionalProperties: false
            }
        ],

        fixable: "code",
        messages: {
            unexpectedTag: "Unexpected @{{title}} tag; function has no return statement.",
            expected: "Expected JSDoc for '{{name}}' but found '{{jsdocName}}'.",
            use: "Use @{{name}} instead.",
            useType: "Use '{{expectedTypeName}}' instead of '{{currentTypeName}}'.",
            syntaxError: "JSDoc syntax error.",
            missingBrace: "JSDoc type missing brace.",
            missingParamDesc: "Missing JSDoc parameter description for '{{name}}'.",
            missingParamType: "Missing JSDoc parameter type for '{{name}}'.",
            missingReturnType: "Missing JSDoc return type.",
            missingReturnDesc: "Missing JSDoc return description.",
            missingReturn: "Missing JSDoc @{{returns}} for function.",
            missingParam: "Missing JSDoc for parameter '{{name}}'.",
            duplicateParam: "Duplicate JSDoc parameter '{{name}}'.",
            unsatisfiedDesc: "JSDoc description does not satisfy the regex pattern."
        },

        deprecated: true,
        replacedBy: []
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
            requireParamType = options.requireParamType !== false,
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
                    isTypeClass(node) || node.async
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
         * @returns {{currentType: Doctrine.Type, expectedTypeName: string}} The current type annotation and
         * the expected name of the annotation
         * @private
         */
        function getCurrentExpectedTypes(type) {
            let currentType;

            if (type.name) {
                currentType = type;
            } else if (type.expression) {
                currentType = type.expression;
            }

            return {
                currentType,
                expectedTypeName: currentType && preferType[currentType.name]
            };
        }

        /**
         * Gets the location of a JSDoc node in a file
         * @param {Token} jsdocComment The comment that this node is parsed from
         * @param {{range: number[]}} parsedJsdocNode A tag or other node which was parsed from this comment
         * @returns {{start: SourceLocation, end: SourceLocation}} The 0-based source location for the tag
         */
        function getAbsoluteRange(jsdocComment, parsedJsdocNode) {
            return {
                start: sourceCode.getLocFromIndex(jsdocComment.range[0] + 2 + parsedJsdocNode.range[0]),
                end: sourceCode.getLocFromIndex(jsdocComment.range[0] + 2 + parsedJsdocNode.range[1])
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
                case "TypeApplication": // {Array.<String>}
                    elements = type.applications[0].type === "UnionType" ? type.applications[0].elements : type.applications;
                    typesToCheck.push(getCurrentExpectedTypes(type));
                    break;
                case "RecordType": // {{20:String}}
                    elements = type.fields;
                    break;
                case "UnionType": // {String|number|Test}
                case "ArrayType": // {[String, number, Test]}
                    elements = type.elements;
                    break;
                case "FieldType": // Array.<{count: number, votes: number}>
                    if (type.value) {
                        typesToCheck.push(getCurrentExpectedTypes(type.value));
                    }
                    break;
                default:
                    typesToCheck.push(getCurrentExpectedTypes(type));
            }

            elements.forEach(validateType.bind(null, jsdocNode));

            typesToCheck.forEach(typeToCheck => {
                if (typeToCheck.expectedTypeName &&
                    typeToCheck.expectedTypeName !== typeToCheck.currentType.name) {
                    context.report({
                        node: jsdocNode,
                        messageId: "useType",
                        loc: getAbsoluteRange(jsdocNode, typeToCheck.currentType),
                        data: {
                            currentTypeName: typeToCheck.currentType.name,
                            expectedTypeName: typeToCheck.expectedTypeName
                        },
                        fix(fixer) {
                            return fixer.replaceTextRange(
                                typeToCheck.currentType.range.map(indexInComment => jsdocNode.range[0] + 2 + indexInComment),
                                typeToCheck.expectedTypeName
                            );
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
                paramTagsByName = Object.create(null),
                paramTags = [];
            let hasReturns = false,
                returnsTag,
                hasConstructor = false,
                isInterface = false,
                isOverride = false,
                isAbstract = false;

            // make sure only to validate JSDoc comments
            if (jsdocNode) {
                let jsdoc;

                try {
                    jsdoc = doctrine.parse(jsdocNode.value, {
                        strict: true,
                        unwrap: true,
                        sloppy: true,
                        range: true
                    });
                } catch (ex) {

                    if (/braces/iu.test(ex.message)) {
                        context.report({ node: jsdocNode, messageId: "missingBrace" });
                    } else {
                        context.report({ node: jsdocNode, messageId: "syntaxError" });
                    }

                    return;
                }

                jsdoc.tags.forEach(tag => {

                    switch (tag.title.toLowerCase()) {

                        case "param":
                        case "arg":
                        case "argument":
                            paramTags.push(tag);
                            break;

                        case "return":
                        case "returns":
                            hasReturns = true;
                            returnsTag = tag;
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
                    if (Object.prototype.hasOwnProperty.call(prefer, tag.title) && tag.title !== prefer[tag.title]) {
                        const entireTagRange = getAbsoluteRange(jsdocNode, tag);

                        context.report({
                            node: jsdocNode,
                            messageId: "use",
                            loc: {
                                start: entireTagRange.start,
                                end: {
                                    line: entireTagRange.start.line,
                                    column: entireTagRange.start.column + `@${tag.title}`.length
                                }
                            },
                            data: { name: prefer[tag.title] },
                            fix(fixer) {
                                return fixer.replaceTextRange(
                                    [
                                        jsdocNode.range[0] + tag.range[0] + 3,
                                        jsdocNode.range[0] + tag.range[0] + tag.title.length + 3
                                    ],
                                    prefer[tag.title]
                                );
                            }
                        });
                    }

                    // validate the types
                    if (checkPreferType && tag.type) {
                        validateType(jsdocNode, tag.type);
                    }
                });

                paramTags.forEach(param => {
                    if (requireParamType && !param.type) {
                        context.report({
                            node: jsdocNode,
                            messageId: "missingParamType",
                            loc: getAbsoluteRange(jsdocNode, param),
                            data: { name: param.name }
                        });
                    }
                    if (!param.description && requireParamDescription) {
                        context.report({
                            node: jsdocNode,
                            messageId: "missingParamDesc",
                            loc: getAbsoluteRange(jsdocNode, param),
                            data: { name: param.name }
                        });
                    }
                    if (paramTagsByName[param.name]) {
                        context.report({
                            node: jsdocNode,
                            messageId: "duplicateParam",
                            loc: getAbsoluteRange(jsdocNode, param),
                            data: { name: param.name }
                        });
                    } else if (param.name.indexOf(".") === -1) {
                        paramTagsByName[param.name] = param;
                    }
                });

                if (hasReturns) {
                    if (!requireReturn && !functionData.returnPresent && (returnsTag.type === null || !isValidReturnType(returnsTag)) && !isAbstract) {
                        context.report({
                            node: jsdocNode,
                            messageId: "unexpectedTag",
                            loc: getAbsoluteRange(jsdocNode, returnsTag),
                            data: {
                                title: returnsTag.title
                            }
                        });
                    } else {
                        if (requireReturnType && !returnsTag.type) {
                            context.report({ node: jsdocNode, messageId: "missingReturnType" });
                        }

                        if (!isValidReturnType(returnsTag) && !returnsTag.description && requireReturnDescription) {
                            context.report({ node: jsdocNode, messageId: "missingReturnDesc" });
                        }
                    }
                }

                // check for functions missing @returns
                if (!isOverride && !hasReturns && !hasConstructor && !isInterface &&
                    node.parent.kind !== "get" && node.parent.kind !== "constructor" &&
                    node.parent.kind !== "set" && !isTypeClass(node)) {
                    if (requireReturn || (functionData.returnPresent && !node.async)) {
                        context.report({
                            node: jsdocNode,
                            messageId: "missingReturn",
                            data: {
                                returns: prefer.returns || "returns"
                            }
                        });
                    }
                }

                // check the parameters
                const jsdocParamNames = Object.keys(paramTagsByName);

                if (node.params) {
                    node.params.forEach((param, paramsIndex) => {
                        const bindingParam = param.type === "AssignmentPattern"
                            ? param.left
                            : param;

                        // TODO(nzakas): Figure out logical things to do with destructured, default, rest params
                        if (bindingParam.type === "Identifier") {
                            const name = bindingParam.name;

                            if (jsdocParamNames[paramsIndex] && (name !== jsdocParamNames[paramsIndex])) {
                                context.report({
                                    node: jsdocNode,
                                    messageId: "expected",
                                    loc: getAbsoluteRange(jsdocNode, paramTagsByName[jsdocParamNames[paramsIndex]]),
                                    data: {
                                        name,
                                        jsdocName: jsdocParamNames[paramsIndex]
                                    }
                                });
                            } else if (!paramTagsByName[name] && !isOverride) {
                                context.report({
                                    node: jsdocNode,
                                    messageId: "missingParam",
                                    data: {
                                        name
                                    }
                                });
                            }
                        }
                    });
                }

                if (options.matchDescription) {
                    const regex = new RegExp(options.matchDescription, "u");

                    if (!regex.test(jsdoc.description)) {
                        context.report({ node: jsdocNode, messageId: "unsatisfiedDesc" });
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
