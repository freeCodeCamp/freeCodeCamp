"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionKeys = void 0;
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
var OptionKeys;
(function (OptionKeys) {
    OptionKeys["ArrayDestructuring"] = "arrayDestructuring";
    OptionKeys["ArrowParameter"] = "arrowParameter";
    OptionKeys["MemberVariableDeclaration"] = "memberVariableDeclaration";
    OptionKeys["ObjectDestructuring"] = "objectDestructuring";
    OptionKeys["Parameter"] = "parameter";
    OptionKeys["PropertyDeclaration"] = "propertyDeclaration";
    OptionKeys["VariableDeclaration"] = "variableDeclaration";
    OptionKeys["VariableDeclarationIgnoreFunction"] = "variableDeclarationIgnoreFunction";
})(OptionKeys || (exports.OptionKeys = OptionKeys = {}));
exports.default = (0, util_1.createRule)({
    name: 'typedef',
    meta: {
        type: 'suggestion',
        deprecated: {
            deprecatedSince: '8.33.0',
            message: 'This is an old rule that is no longer recommended for use.',
        },
        docs: {
            description: 'Require type annotations in certain places',
        },
        messages: {
            expectedTypedef: 'Expected a type annotation.',
            expectedTypedefNamed: 'Expected {{name}} to have a type annotation.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    [OptionKeys.ArrayDestructuring]: {
                        type: 'boolean',
                        description: 'Whether to enforce type annotations on variables declared using array destructuring.',
                    },
                    [OptionKeys.ArrowParameter]: {
                        type: 'boolean',
                        description: 'Whether to enforce type annotations for parameters of arrow functions.',
                    },
                    [OptionKeys.MemberVariableDeclaration]: {
                        type: 'boolean',
                        description: 'Whether to enforce type annotations on member variables of classes.',
                    },
                    [OptionKeys.ObjectDestructuring]: {
                        type: 'boolean',
                        description: 'Whether to enforce type annotations on variables declared using object destructuring.',
                    },
                    [OptionKeys.Parameter]: {
                        type: 'boolean',
                        description: 'Whether to enforce type annotations for parameters of functions and methods.',
                    },
                    [OptionKeys.PropertyDeclaration]: {
                        type: 'boolean',
                        description: 'Whether to enforce type annotations for properties of interfaces and types.',
                    },
                    [OptionKeys.VariableDeclaration]: {
                        type: 'boolean',
                        description: 'Whether to enforce type annotations for variable declarations, excluding array and object destructuring.',
                    },
                    [OptionKeys.VariableDeclarationIgnoreFunction]: {
                        type: 'boolean',
                        description: 'Whether to ignore variable declarations for non-arrow and arrow functions.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            [OptionKeys.ArrayDestructuring]: false,
            [OptionKeys.ArrowParameter]: false,
            [OptionKeys.MemberVariableDeclaration]: false,
            [OptionKeys.ObjectDestructuring]: false,
            [OptionKeys.Parameter]: false,
            [OptionKeys.PropertyDeclaration]: false,
            [OptionKeys.VariableDeclaration]: false,
            [OptionKeys.VariableDeclarationIgnoreFunction]: false,
        },
    ],
    create(context, [{ arrayDestructuring, arrowParameter, memberVariableDeclaration, objectDestructuring, parameter, propertyDeclaration, variableDeclaration, variableDeclarationIgnoreFunction, },]) {
        function report(location, name) {
            context.report({
                node: location,
                messageId: name ? 'expectedTypedefNamed' : 'expectedTypedef',
                data: { name },
            });
        }
        function getNodeName(node) {
            return node.type === utils_1.AST_NODE_TYPES.Identifier ? node.name : undefined;
        }
        function isForOfStatementContext(node) {
            let current = node.parent;
            while (current) {
                switch (current.type) {
                    case utils_1.AST_NODE_TYPES.VariableDeclarator:
                    case utils_1.AST_NODE_TYPES.VariableDeclaration:
                    case utils_1.AST_NODE_TYPES.ObjectPattern:
                    case utils_1.AST_NODE_TYPES.ArrayPattern:
                    case utils_1.AST_NODE_TYPES.Property:
                        current = current.parent;
                        break;
                    case utils_1.AST_NODE_TYPES.ForOfStatement:
                        return true;
                    default:
                        current = undefined;
                }
            }
            return false;
        }
        function checkParameters(params) {
            for (const param of params) {
                let annotationNode;
                switch (param.type) {
                    case utils_1.AST_NODE_TYPES.AssignmentPattern:
                        annotationNode = param.left;
                        break;
                    case utils_1.AST_NODE_TYPES.TSParameterProperty:
                        annotationNode = param.parameter;
                        // Check TS parameter property with default value like `constructor(private param: string = 'something') {}`
                        if (annotationNode.type === utils_1.AST_NODE_TYPES.AssignmentPattern) {
                            annotationNode = annotationNode.left;
                        }
                        break;
                    default:
                        annotationNode = param;
                        break;
                }
                if (!annotationNode.typeAnnotation) {
                    report(param, getNodeName(param));
                }
            }
        }
        function isVariableDeclarationIgnoreFunction(node) {
            return (variableDeclarationIgnoreFunction === true &&
                (node.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
                    node.type === utils_1.AST_NODE_TYPES.FunctionExpression));
        }
        function isAncestorHasTypeAnnotation(node) {
            let ancestor = node.parent;
            while (ancestor) {
                if ((ancestor.type === utils_1.AST_NODE_TYPES.ObjectPattern ||
                    ancestor.type === utils_1.AST_NODE_TYPES.ArrayPattern) &&
                    ancestor.typeAnnotation) {
                    return true;
                }
                ancestor = ancestor.parent;
            }
            return false;
        }
        return {
            ...(arrayDestructuring && {
                ArrayPattern(node) {
                    if (node.parent.type === utils_1.AST_NODE_TYPES.RestElement &&
                        node.parent.typeAnnotation) {
                        return;
                    }
                    if (!node.typeAnnotation &&
                        !isForOfStatementContext(node) &&
                        !isAncestorHasTypeAnnotation(node) &&
                        node.parent.type !== utils_1.AST_NODE_TYPES.AssignmentExpression) {
                        report(node);
                    }
                },
            }),
            ...(arrowParameter && {
                ArrowFunctionExpression(node) {
                    checkParameters(node.params);
                },
            }),
            ...(memberVariableDeclaration && {
                PropertyDefinition(node) {
                    if (!(node.value && isVariableDeclarationIgnoreFunction(node.value)) &&
                        !node.typeAnnotation) {
                        report(node, node.key.type === utils_1.AST_NODE_TYPES.Identifier
                            ? node.key.name
                            : undefined);
                    }
                },
            }),
            ...(parameter && {
                'FunctionDeclaration, FunctionExpression'(node) {
                    checkParameters(node.params);
                },
            }),
            ...(objectDestructuring && {
                ObjectPattern(node) {
                    if (!node.typeAnnotation &&
                        !isForOfStatementContext(node) &&
                        !isAncestorHasTypeAnnotation(node)) {
                        report(node);
                    }
                },
            }),
            ...(propertyDeclaration && {
                'TSIndexSignature, TSPropertySignature'(node) {
                    if (!node.typeAnnotation) {
                        report(node, node.type === utils_1.AST_NODE_TYPES.TSPropertySignature
                            ? getNodeName(node.key)
                            : undefined);
                    }
                },
            }),
            VariableDeclarator(node) {
                if (!variableDeclaration ||
                    node.id.typeAnnotation ||
                    (node.id.type === utils_1.AST_NODE_TYPES.ArrayPattern &&
                        !arrayDestructuring) ||
                    (node.id.type === utils_1.AST_NODE_TYPES.ObjectPattern &&
                        !objectDestructuring) ||
                    (node.init && isVariableDeclarationIgnoreFunction(node.init))) {
                    return;
                }
                let current = node.parent;
                while (current) {
                    switch (current.type) {
                        case utils_1.AST_NODE_TYPES.VariableDeclaration:
                            // Keep looking upwards
                            current = current.parent;
                            break;
                        case utils_1.AST_NODE_TYPES.ForOfStatement:
                        case utils_1.AST_NODE_TYPES.ForInStatement:
                            // Stop traversing and don't report an error
                            return;
                        default:
                            // Stop traversing
                            current = undefined;
                            break;
                    }
                }
                report(node, getNodeName(node.id));
            },
        };
    },
});
//# sourceMappingURL=typedef.js.map