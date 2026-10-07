"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAPPING_TO_USER_EVENT = exports.UserEventMethods = exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'prefer-user-event';
exports.UserEventMethods = [
    'click',
    'dblClick',
    'type',
    'upload',
    'clear',
    'selectOptions',
    'deselectOptions',
    'tab',
    'hover',
    'unhover',
    'paste',
];
exports.MAPPING_TO_USER_EVENT = {
    click: ['click', 'type', 'selectOptions', 'deselectOptions'],
    change: ['upload', 'type', 'clear', 'selectOptions', 'deselectOptions'],
    dblClick: ['dblClick'],
    input: ['type', 'upload', 'selectOptions', 'deselectOptions', 'paste'],
    keyDown: ['type', 'tab'],
    keyPress: ['type'],
    keyUp: ['type', 'tab'],
    mouseDown: ['click', 'dblClick', 'selectOptions', 'deselectOptions'],
    mouseEnter: ['hover', 'selectOptions', 'deselectOptions'],
    mouseLeave: ['unhover'],
    mouseMove: ['hover', 'unhover', 'selectOptions', 'deselectOptions'],
    mouseOut: ['unhover'],
    mouseOver: ['hover', 'selectOptions', 'deselectOptions'],
    mouseUp: ['click', 'dblClick', 'selectOptions', 'deselectOptions'],
    paste: ['paste'],
    pointerDown: ['click', 'dblClick', 'selectOptions', 'deselectOptions'],
    pointerEnter: ['hover', 'selectOptions', 'deselectOptions'],
    pointerLeave: ['unhover'],
    pointerMove: ['hover', 'unhover', 'selectOptions', 'deselectOptions'],
    pointerOut: ['unhover'],
    pointerOver: ['hover', 'selectOptions', 'deselectOptions'],
    pointerUp: ['click', 'dblClick', 'selectOptions', 'deselectOptions'],
};
function buildErrorMessage(fireEventMethod) {
    const userEventMethods = exports.MAPPING_TO_USER_EVENT[fireEventMethod].map((methodName) => `userEvent.${methodName}`);
    return userEventMethods.join(', ').replace(/, ([a-zA-Z.]+)$/, ', or $1');
}
const fireEventMappedMethods = Object.keys(exports.MAPPING_TO_USER_EVENT);
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Suggest using `userEvent` over `fireEvent` for simulating user interactions',
            recommendedConfig: {
                dom: false,
                angular: false,
                react: false,
                vue: false,
                marko: false,
            },
        },
        messages: {
            preferUserEvent: 'Prefer using {{userEventMethods}} over fireEvent.{{fireEventMethod}}',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowedMethods: { type: 'array' },
                },
            },
        ],
    },
    defaultOptions: [{ allowedMethods: [] }],
    create(context, [options], helpers) {
        const { allowedMethods } = options;
        const createEventVariables = {};
        const isfireEventMethodAllowed = (methodName) => !fireEventMappedMethods.includes(methodName) ||
            allowedMethods.includes(methodName);
        const getFireEventMethodName = (callExpressionNode, node) => {
            if (!utils_1.ASTUtils.isIdentifier(callExpressionNode.callee) &&
                !(0, node_utils_1.isMemberExpression)(callExpressionNode.callee)) {
                return node.name;
            }
            const secondArgument = callExpressionNode.arguments[1];
            if (utils_1.ASTUtils.isIdentifier(secondArgument) &&
                createEventVariables[secondArgument.name] !== undefined) {
                return createEventVariables[secondArgument.name];
            }
            if (!(0, node_utils_1.isCallExpression)(secondArgument) ||
                !helpers.isCreateEventUtil(secondArgument)) {
                return node.name;
            }
            if (utils_1.ASTUtils.isIdentifier(secondArgument.callee)) {
                return secondArgument.arguments[0]
                    .value;
            }
            return secondArgument.callee
                .property.name;
        };
        return {
            'CallExpression Identifier'(node) {
                if (!helpers.isFireEventMethod(node)) {
                    return;
                }
                const closestCallExpression = (0, node_utils_1.findClosestCallExpressionNode)(node, true);
                if (!closestCallExpression) {
                    return;
                }
                const fireEventMethodName = getFireEventMethodName(closestCallExpression, node);
                if (!fireEventMethodName ||
                    isfireEventMethodAllowed(fireEventMethodName)) {
                    return;
                }
                context.report({
                    node: closestCallExpression.callee,
                    messageId: 'preferUserEvent',
                    data: {
                        userEventMethods: buildErrorMessage(fireEventMethodName),
                        fireEventMethod: fireEventMethodName,
                    },
                });
            },
            VariableDeclarator(node) {
                if (!(0, node_utils_1.isCallExpression)(node.init) ||
                    !helpers.isCreateEventUtil(node.init) ||
                    !utils_1.ASTUtils.isIdentifier(node.id)) {
                    return;
                }
                let fireEventMethodName = '';
                if ((0, node_utils_1.isMemberExpression)(node.init.callee) &&
                    utils_1.ASTUtils.isIdentifier(node.init.callee.property)) {
                    fireEventMethodName = node.init.callee.property.name;
                }
                else if (node.init.arguments.length > 0) {
                    fireEventMethodName = node.init.arguments[0]
                        .value;
                }
                if (!isfireEventMethodAllowed(fireEventMethodName)) {
                    createEventVariables[node.id.name] = fireEventMethodName;
                }
            },
        };
    },
});
