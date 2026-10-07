"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const printNodeModifiers = (node, final) => `${node.accessibility ?? ''}${node.static ? ' static' : ''} ${final} `.trimStart();
const isSupportedLiteral = (node) => {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.Literal:
            return true;
        case utils_1.AST_NODE_TYPES.TaggedTemplateExpression:
            return node.quasi.quasis.length === 1;
        case utils_1.AST_NODE_TYPES.TemplateLiteral:
            return node.quasis.length === 1;
        default:
            return false;
    }
};
exports.default = (0, util_1.createRule)({
    name: 'class-literal-property-style',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce that literals on classes are exposed in a consistent style',
            recommended: 'stylistic',
        },
        hasSuggestions: true,
        messages: {
            preferFieldStyle: 'Literals should be exposed using readonly fields.',
            preferFieldStyleSuggestion: 'Replace the literals with readonly fields.',
            preferGetterStyle: 'Literals should be exposed using getters.',
            preferGetterStyleSuggestion: 'Replace the literals with getters.',
        },
        schema: [
            {
                type: 'string',
                description: 'Which literal class member syntax to prefer.',
                enum: ['fields', 'getters'],
            },
        ],
    },
    defaultOptions: ['fields'],
    create(context, [style]) {
        const propertiesInfoStack = [];
        function enterClassBody() {
            propertiesInfoStack.push({
                excludeSet: new Set(),
                properties: [],
            });
        }
        function exitClassBody() {
            const { excludeSet, properties } = (0, util_1.nullThrows)(propertiesInfoStack.pop(), 'Stack should exist on class exit');
            properties.forEach(node => {
                const { value } = node;
                if (!value || !isSupportedLiteral(value)) {
                    return;
                }
                const name = (0, util_1.getStaticMemberAccessValue)(node, context);
                if (name && excludeSet.has(name)) {
                    return;
                }
                context.report({
                    node: node.key,
                    messageId: 'preferGetterStyle',
                    suggest: [
                        {
                            messageId: 'preferGetterStyleSuggestion',
                            fix(fixer) {
                                const name = context.sourceCode.getText(node.key);
                                let text = '';
                                text += printNodeModifiers(node, 'get');
                                text += node.computed ? `[${name}]` : name;
                                text += `() { return ${context.sourceCode.getText(value)}; }`;
                                return fixer.replaceText(node, text);
                            },
                        },
                    ],
                });
            });
        }
        function excludeAssignedProperty(node) {
            if ((0, util_1.isAssignee)(node)) {
                const { excludeSet } = propertiesInfoStack[propertiesInfoStack.length - 1];
                const name = (0, util_1.getStaticMemberAccessValue)(node, context);
                if (name) {
                    excludeSet.add(name);
                }
            }
        }
        return {
            ...(style === 'fields' && {
                MethodDefinition(node) {
                    if (node.kind !== 'get' ||
                        node.override ||
                        !node.value.body ||
                        node.value.body.body.length === 0) {
                        return;
                    }
                    const [statement] = node.value.body.body;
                    if (statement.type !== utils_1.AST_NODE_TYPES.ReturnStatement) {
                        return;
                    }
                    const { argument } = statement;
                    if (!argument || !isSupportedLiteral(argument)) {
                        return;
                    }
                    const name = (0, util_1.getStaticMemberAccessValue)(node, context);
                    const hasDuplicateKeySetter = name &&
                        node.parent.body.some(element => {
                            return (element.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                                element.kind === 'set' &&
                                (0, util_1.isStaticMemberAccessOfValue)(element, context, name));
                        });
                    if (hasDuplicateKeySetter) {
                        return;
                    }
                    const getterBody = node.value.body;
                    context.report({
                        node: node.key,
                        messageId: 'preferFieldStyle',
                        ...(0, util_1.getFixOrSuggest)({
                            fixOrSuggest: node.decorators.length === 0 ? 'suggest' : 'none',
                            suggestion: {
                                messageId: 'preferFieldStyleSuggestion',
                                fix(fixer) {
                                    const name = context.sourceCode.getText(node.key);
                                    const closingParen = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(node.value.returnType ?? getterBody), 'Getter should have a closing parenthesis.');
                                    const betweenParensAndBody = context.sourceCode
                                        .getText()
                                        .slice(closingParen.range[1], getterBody.range[0]);
                                    let text = '';
                                    text += printNodeModifiers(node, 'readonly');
                                    text += node.computed ? `[${name}]` : name;
                                    text += betweenParensAndBody;
                                    text += `= ${context.sourceCode.getText(argument)};`;
                                    return fixer.replaceText(node, text);
                                },
                            },
                        }),
                    });
                },
            }),
            ...(style === 'getters' && {
                ClassBody: enterClassBody,
                'ClassBody:exit': exitClassBody,
                'MethodDefinition[kind="constructor"] ThisExpression'(node) {
                    if (node.parent.type === utils_1.AST_NODE_TYPES.MemberExpression) {
                        let parent = node.parent;
                        while (!(0, util_1.isFunction)(parent)) {
                            parent = parent.parent;
                        }
                        if (parent.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                            parent.parent.kind === 'constructor') {
                            excludeAssignedProperty(node.parent);
                        }
                    }
                },
                PropertyDefinition(node) {
                    if (!node.readonly || node.declare || node.override) {
                        return;
                    }
                    const { properties } = propertiesInfoStack[propertiesInfoStack.length - 1];
                    properties.push(node);
                },
            }),
        };
    },
});
//# sourceMappingURL=class-literal-property-style.js.map