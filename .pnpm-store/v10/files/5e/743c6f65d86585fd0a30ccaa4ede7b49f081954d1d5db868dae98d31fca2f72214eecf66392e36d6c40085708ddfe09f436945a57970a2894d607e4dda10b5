"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
const USER_EVENT_ASYNC_EXCEPTIONS = ['type', 'keyboard'];
const VALID_EVENT_MODULES = ['fire-event', 'user-event'];
exports.RULE_NAME = 'no-await-sync-events';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow unnecessary `await` for sync events',
            recommendedConfig: {
                dom: false,
                angular: false,
                react: false,
                vue: false,
                marko: false,
            },
        },
        messages: {
            noAwaitSyncEvents: '`{{ name }}` is sync and does not need `await` operator',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    eventModules: {
                        type: 'array',
                        minItems: 1,
                        items: {
                            enum: VALID_EVENT_MODULES,
                        },
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [{ eventModules: VALID_EVENT_MODULES }],
    create(context, [options], helpers) {
        const { eventModules = VALID_EVENT_MODULES } = options;
        let hasDelayDeclarationOrAssignmentGTZero;
        return {
            VariableDeclaration(node) {
                hasDelayDeclarationOrAssignmentGTZero = node.declarations.some((property) => utils_1.ASTUtils.isIdentifier(property.id) &&
                    property.id.name === 'delay' &&
                    (0, node_utils_1.isLiteral)(property.init) &&
                    property.init.value &&
                    property.init.value > 0);
            },
            AssignmentExpression(node) {
                if (utils_1.ASTUtils.isIdentifier(node.left) &&
                    node.left.name === 'delay' &&
                    (0, node_utils_1.isLiteral)(node.right) &&
                    node.right.value !== null) {
                    hasDelayDeclarationOrAssignmentGTZero = node.right.value > 0;
                }
            },
            'AwaitExpression > CallExpression'(node) {
                var _a;
                const simulateEventFunctionIdentifier = (0, node_utils_1.getDeepestIdentifierNode)(node);
                if (!simulateEventFunctionIdentifier) {
                    return;
                }
                const isUserEventMethod = helpers.isUserEventMethod(simulateEventFunctionIdentifier);
                const isFireEventMethod = helpers.isFireEventMethod(simulateEventFunctionIdentifier);
                const isSimulateEventMethod = isUserEventMethod || isFireEventMethod;
                if (!isSimulateEventMethod) {
                    return;
                }
                if (isFireEventMethod && !eventModules.includes('fire-event')) {
                    return;
                }
                if (isUserEventMethod && !eventModules.includes('user-event')) {
                    return;
                }
                const lastArg = node.arguments[node.arguments.length - 1];
                const hasDelayProperty = (0, node_utils_1.isObjectExpression)(lastArg) &&
                    lastArg.properties.some((property) => (0, node_utils_1.isProperty)(property) &&
                        utils_1.ASTUtils.isIdentifier(property.key) &&
                        property.key.name === 'delay');
                const hasDelayLiteralGTZero = (0, node_utils_1.isObjectExpression)(lastArg) &&
                    lastArg.properties.some((property) => (0, node_utils_1.isProperty)(property) &&
                        utils_1.ASTUtils.isIdentifier(property.key) &&
                        property.key.name === 'delay' &&
                        (0, node_utils_1.isLiteral)(property.value) &&
                        !!property.value.value &&
                        property.value.value > 0);
                const simulateEventFunctionName = simulateEventFunctionIdentifier.name;
                if (USER_EVENT_ASYNC_EXCEPTIONS.includes(simulateEventFunctionName) &&
                    hasDelayProperty &&
                    (hasDelayDeclarationOrAssignmentGTZero || hasDelayLiteralGTZero)) {
                    return;
                }
                const eventModuleName = (_a = (0, node_utils_1.getPropertyIdentifierNode)(node)) === null || _a === void 0 ? void 0 : _a.name;
                const eventFullName = eventModuleName
                    ? `${eventModuleName}.${simulateEventFunctionName}`
                    : simulateEventFunctionName;
                context.report({
                    node,
                    messageId: 'noAwaitSyncEvents',
                    data: {
                        name: eventFullName,
                    },
                });
            },
        };
    },
});
