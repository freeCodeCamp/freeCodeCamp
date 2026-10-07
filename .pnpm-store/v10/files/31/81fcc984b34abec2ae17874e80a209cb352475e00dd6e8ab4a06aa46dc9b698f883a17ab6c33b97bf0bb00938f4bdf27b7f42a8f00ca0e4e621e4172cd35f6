"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'parameter-properties',
    meta: {
        type: 'problem',
        docs: {
            description: 'Require or disallow parameter properties in class constructors',
        },
        messages: {
            preferClassProperty: 'Property {{parameter}} should be declared as a class property.',
            preferParameterProperty: 'Property {{parameter}} should be declared as a parameter property.',
        },
        schema: [
            {
                type: 'object',
                $defs: {
                    modifier: {
                        type: 'string',
                        enum: [
                            'readonly',
                            'private',
                            'protected',
                            'public',
                            'private readonly',
                            'protected readonly',
                            'public readonly',
                        ],
                    },
                },
                additionalProperties: false,
                properties: {
                    allow: {
                        type: 'array',
                        description: 'Whether to allow certain kinds of properties to be ignored.',
                        items: {
                            $ref: '#/items/0/$defs/modifier',
                        },
                    },
                    prefer: {
                        type: 'string',
                        description: 'Whether to prefer class properties or parameter properties.',
                        enum: ['class-property', 'parameter-property'],
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allow: [],
            prefer: 'class-property',
        },
    ],
    create(context, [{ allow = [], prefer = 'class-property' }]) {
        /**
         * Gets the modifiers of `node`.
         * @param node the node to be inspected.
         */
        function getModifiers(node) {
            const modifiers = [];
            if (node.accessibility) {
                modifiers.push(node.accessibility);
            }
            if (node.readonly) {
                modifiers.push('readonly');
            }
            return modifiers.filter(Boolean).join(' ');
        }
        if (prefer === 'class-property') {
            return {
                TSParameterProperty(node) {
                    const modifiers = getModifiers(node);
                    if (!allow.includes(modifiers)) {
                        const name = node.parameter.type === utils_1.AST_NODE_TYPES.Identifier
                            ? node.parameter.name
                            : node.parameter.left.name;
                        context.report({
                            node,
                            messageId: 'preferClassProperty',
                            data: {
                                parameter: name,
                            },
                        });
                    }
                },
            };
        }
        const propertyNodesByNameStack = [];
        function getNodesByName(name) {
            const propertyNodesByName = propertyNodesByNameStack[propertyNodesByNameStack.length - 1];
            const existing = propertyNodesByName.get(name);
            if (existing) {
                return existing;
            }
            const created = {};
            propertyNodesByName.set(name, created);
            return created;
        }
        function typeAnnotationsMatch(classProperty, constructorParameter) {
            if (!classProperty.typeAnnotation ||
                !constructorParameter.typeAnnotation) {
                return (classProperty.typeAnnotation === constructorParameter.typeAnnotation);
            }
            return (context.sourceCode.getText(classProperty.typeAnnotation) ===
                context.sourceCode.getText(constructorParameter.typeAnnotation));
        }
        return {
            ':matches(ClassDeclaration, ClassExpression):exit'() {
                const propertyNodesByName = (0, util_1.nullThrows)(propertyNodesByNameStack.pop(), 'Stack should exist on class exit');
                for (const [name, nodes] of propertyNodesByName) {
                    if (nodes.classProperty &&
                        nodes.constructorAssignment &&
                        nodes.constructorParameter &&
                        typeAnnotationsMatch(nodes.classProperty, nodes.constructorParameter)) {
                        context.report({
                            node: nodes.classProperty,
                            messageId: 'preferParameterProperty',
                            data: {
                                parameter: name,
                            },
                        });
                    }
                }
            },
            ClassBody(node) {
                for (const element of node.body) {
                    if (element.type === utils_1.AST_NODE_TYPES.PropertyDefinition &&
                        element.key.type === utils_1.AST_NODE_TYPES.Identifier &&
                        !element.value &&
                        !allow.includes(getModifiers(element))) {
                        getNodesByName(element.key.name).classProperty = element;
                    }
                }
            },
            'ClassDeclaration, ClassExpression'() {
                propertyNodesByNameStack.push(new Map());
            },
            'MethodDefinition[kind="constructor"]'(node) {
                for (const parameter of node.value.params) {
                    if (parameter.type === utils_1.AST_NODE_TYPES.Identifier) {
                        getNodesByName(parameter.name).constructorParameter = parameter;
                    }
                }
                for (const statement of node.value.body?.body ?? []) {
                    if (statement.type !== utils_1.AST_NODE_TYPES.ExpressionStatement ||
                        statement.expression.type !== utils_1.AST_NODE_TYPES.AssignmentExpression ||
                        statement.expression.left.type !==
                            utils_1.AST_NODE_TYPES.MemberExpression ||
                        statement.expression.left.object.type !==
                            utils_1.AST_NODE_TYPES.ThisExpression ||
                        statement.expression.left.property.type !==
                            utils_1.AST_NODE_TYPES.Identifier ||
                        statement.expression.right.type !== utils_1.AST_NODE_TYPES.Identifier) {
                        break;
                    }
                    getNodesByName(statement.expression.right.name).constructorAssignment = statement.expression;
                }
            },
        };
    },
});
//# sourceMappingURL=parameter-properties.js.map