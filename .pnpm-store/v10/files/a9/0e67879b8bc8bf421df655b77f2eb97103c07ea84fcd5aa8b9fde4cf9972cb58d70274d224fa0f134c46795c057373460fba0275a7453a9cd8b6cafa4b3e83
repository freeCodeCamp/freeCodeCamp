"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findClosestBeforeHook = exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
const utils_2 = require("../utils");
exports.RULE_NAME = 'no-render-in-setup';
function findClosestBeforeHook(node, testingFrameworkSetupHooksToFilter) {
    if (node === null) {
        return null;
    }
    if ((0, node_utils_1.isCallExpression)(node) &&
        utils_1.ASTUtils.isIdentifier(node.callee) &&
        testingFrameworkSetupHooksToFilter.includes(node.callee.name)) {
        return node.callee;
    }
    if (node.parent) {
        return findClosestBeforeHook(node.parent, testingFrameworkSetupHooksToFilter);
    }
    return null;
}
exports.findClosestBeforeHook = findClosestBeforeHook;
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow the use of `render` in testing frameworks setup functions',
            recommendedConfig: {
                dom: false,
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            noRenderInSetup: 'Forbidden usage of `render` within testing framework `{{ name }}` setup',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowTestingFrameworkSetupHook: {
                        enum: utils_2.TESTING_FRAMEWORK_SETUP_HOOKS,
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowTestingFrameworkSetupHook: '',
        },
    ],
    create(context, [{ allowTestingFrameworkSetupHook }], helpers) {
        const renderWrapperNames = [];
        function detectRenderWrapper(node) {
            const innerFunction = (0, node_utils_1.getInnermostReturningFunction)(context, node);
            if (innerFunction) {
                renderWrapperNames.push((0, node_utils_1.getFunctionName)(innerFunction));
            }
        }
        return {
            CallExpression(node) {
                const testingFrameworkSetupHooksToFilter = utils_2.TESTING_FRAMEWORK_SETUP_HOOKS.filter((hook) => hook !== allowTestingFrameworkSetupHook);
                const callExpressionIdentifier = (0, node_utils_1.getDeepestIdentifierNode)(node);
                if (!callExpressionIdentifier) {
                    return;
                }
                const isRenderIdentifier = helpers.isRenderUtil(callExpressionIdentifier);
                if (isRenderIdentifier) {
                    detectRenderWrapper(callExpressionIdentifier);
                }
                if (!isRenderIdentifier &&
                    !renderWrapperNames.includes(callExpressionIdentifier.name)) {
                    return;
                }
                const beforeHook = findClosestBeforeHook(node, testingFrameworkSetupHooksToFilter);
                if (!beforeHook) {
                    return;
                }
                context.report({
                    node: callExpressionIdentifier,
                    messageId: 'noRenderInSetup',
                    data: {
                        name: beforeHook.name,
                    },
                });
            },
        };
    },
});
