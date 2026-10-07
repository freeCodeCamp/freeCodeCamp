"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'no-wait-for-empty-callback';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow empty callbacks for `waitFor` and `waitForElementToBeRemoved`',
            recommendedConfig: {
                dom: 'error',
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            noWaitForEmptyCallback: 'Avoid passing empty callback to `{{ methodName }}`. Insert an assertion instead.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        function isValidWaitFor(node) {
            const parentCallExpression = node.parent;
            const parentIdentifier = (0, node_utils_1.getPropertyIdentifierNode)(parentCallExpression);
            if (!parentIdentifier) {
                return false;
            }
            return helpers.isAsyncUtil(parentIdentifier, [
                'waitFor',
                'waitForElementToBeRemoved',
            ]);
        }
        function reportIfEmpty(node) {
            if (!isValidWaitFor(node)) {
                return;
            }
            if ((0, node_utils_1.isEmptyFunction)(node) &&
                (0, node_utils_1.isCallExpression)(node.parent) &&
                utils_1.ASTUtils.isIdentifier(node.parent.callee)) {
                context.report({
                    node,
                    loc: node.body.loc.start,
                    messageId: 'noWaitForEmptyCallback',
                    data: {
                        methodName: node.parent.callee.name,
                    },
                });
            }
        }
        function reportNoop(node) {
            if (!isValidWaitFor(node)) {
                return;
            }
            context.report({
                node,
                loc: node.loc.start,
                messageId: 'noWaitForEmptyCallback',
                data: {
                    methodName: (0, node_utils_1.isCallExpression)(node.parent) &&
                        utils_1.ASTUtils.isIdentifier(node.parent.callee) &&
                        node.parent.callee.name,
                },
            });
        }
        return {
            'CallExpression > ArrowFunctionExpression': reportIfEmpty,
            'CallExpression > FunctionExpression': reportIfEmpty,
            'CallExpression > Identifier[name="noop"]': reportNoop,
        };
    },
});
