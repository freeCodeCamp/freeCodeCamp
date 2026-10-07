"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'parameter-properties',
    meta: {
        type: 'problem',
        docs: {
            description: 'Require or disallow parameter properties in class constructors',
            recommended: false,
        },
        messages: {
            preferClassProperty: 'Property {{parameter}} should be declared as a class property.',
            preferParameterProperty: 'Property {{parameter}} should be declared as a parameter property.',
        },
        schema: {
            $defs: {
                modifier: {
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
            prefixItems: [
                {
                    type: 'object',
                    properties: {
                        allow: {
                            type: 'array',
                            items: {
                                $ref: '#/$defs/modifier',
                            },
                            minItems: 1,
                        },
                        prefer: {
                            enum: ['class-property', 'parameter-property'],
                        },
                    },
                    additionalProperties: false,
                },
            ],
            type: 'array',
        },
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
                        // HAS to be an identifier or assignment or TSC will throw
                        if (node.parameter.type !== utils_1.AST_NODE_TYPES.Identifier &&
                            node.parameter.type !== utils_1.AST_NODE_TYPES.AssignmentPattern) {
                            return;
                        }
                        const name = node.parameter.type === utils_1.AST_NODE_TYPES.Identifier
                            ? node.parameter.name
                            : // has to be an Identifier or TSC will throw an error
                                node.parameter.left.name;
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
        const sourceCode = context.getSourceCode();
        function typeAnnotationsMatch(classProperty, constructorParameter) {
            if (!classProperty.typeAnnotation ||
                !constructorParameter.typeAnnotation) {
                return (classProperty.typeAnnotation === constructorParameter.typeAnnotation);
            }
            return (sourceCode.getText(classProperty.typeAnnotation) ===
                sourceCode.getText(constructorParameter.typeAnnotation));
        }
        return {
            'ClassDeclaration, ClassExpression'() {
                propertyNodesByNameStack.push(new Map());
            },
            ':matches(ClassDeclaration, ClassExpression):exit'() {
                const propertyNodesByName = propertyNodesByNameStack.pop();
                for (const [name, nodes] of propertyNodesByName) {
                    if (nodes.classProperty &&
                        nodes.constructorAssignment &&
                        nodes.constructorParameter &&
                        typeAnnotationsMatch(nodes.classProperty, nodes.constructorParameter)) {
                        context.report({
                            data: {
                                parameter: name,
                            },
                            messageId: 'preferParameterProperty',
                            node: nodes.classProperty,
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
            'MethodDefinition[kind="constructor"]'(node) {
                var _a, _b;
                for (const parameter of node.value.params) {
                    if (parameter.type === utils_1.AST_NODE_TYPES.Identifier) {
                        getNodesByName(parameter.name).constructorParameter = parameter;
                    }
                }
                for (const statement of (_b = (_a = node.value.body) === null || _a === void 0 ? void 0 : _a.body) !== null && _b !== void 0 ? _b : []) {
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