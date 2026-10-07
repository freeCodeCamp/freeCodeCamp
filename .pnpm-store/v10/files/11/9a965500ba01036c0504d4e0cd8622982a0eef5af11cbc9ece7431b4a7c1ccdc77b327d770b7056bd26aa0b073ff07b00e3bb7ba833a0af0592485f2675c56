"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
const utils_2 = require("../utils");
exports.RULE_NAME = 'no-debugging-utils';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow the use of debugging utilities like `debug`',
            recommendedConfig: {
                dom: false,
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            noDebug: 'Unexpected debug statement',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    utilsToCheckFor: {
                        type: 'object',
                        properties: utils_2.DEBUG_UTILS.reduce((obj, name) => (Object.assign({ [name]: { type: 'boolean' } }, obj)), {}),
                        additionalProperties: false,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [
        { utilsToCheckFor: { debug: true, logTestingPlaygroundURL: true } },
    ],
    create(context, [{ utilsToCheckFor = {} }], helpers) {
        const suspiciousDebugVariableNames = [];
        const suspiciousReferenceNodes = [];
        const renderWrapperNames = [];
        const builtInConsoleNodes = [];
        const utilsToReport = Object.entries(utilsToCheckFor)
            .filter(([, shouldCheckFor]) => shouldCheckFor)
            .map(([name]) => name);
        function detectRenderWrapper(node) {
            const innerFunction = (0, node_utils_1.getInnermostReturningFunction)(context, node);
            if (innerFunction) {
                renderWrapperNames.push((0, node_utils_1.getFunctionName)(innerFunction));
            }
        }
        return {
            VariableDeclarator(node) {
                if (!node.init) {
                    return;
                }
                const initIdentifierNode = (0, node_utils_1.getDeepestIdentifierNode)(node.init);
                if (!initIdentifierNode) {
                    return;
                }
                if (initIdentifierNode.name === 'console') {
                    builtInConsoleNodes.push(node);
                    return;
                }
                const isRenderWrapperVariableDeclarator = renderWrapperNames.includes(initIdentifierNode.name);
                if (!helpers.isRenderVariableDeclarator(node) &&
                    !isRenderWrapperVariableDeclarator) {
                    return;
                }
                if ((0, node_utils_1.isObjectPattern)(node.id)) {
                    for (const property of node.id.properties) {
                        if ((0, node_utils_1.isProperty)(property) &&
                            utils_1.ASTUtils.isIdentifier(property.key) &&
                            utilsToReport.includes(property.key.name)) {
                            const identifierNode = (0, node_utils_1.getDeepestIdentifierNode)(property.value);
                            if (identifierNode) {
                                suspiciousDebugVariableNames.push(identifierNode.name);
                            }
                        }
                    }
                }
                if (utils_1.ASTUtils.isIdentifier(node.id)) {
                    suspiciousReferenceNodes.push(node.id);
                }
            },
            CallExpression(node) {
                const callExpressionIdentifier = (0, node_utils_1.getDeepestIdentifierNode)(node);
                if (!callExpressionIdentifier) {
                    return;
                }
                if (helpers.isRenderUtil(callExpressionIdentifier)) {
                    detectRenderWrapper(callExpressionIdentifier);
                }
                const referenceNode = (0, node_utils_1.getReferenceNode)(node);
                const referenceIdentifier = (0, node_utils_1.getPropertyIdentifierNode)(referenceNode);
                if (!referenceIdentifier) {
                    return;
                }
                const isDebugUtil = helpers.isDebugUtil(callExpressionIdentifier, utilsToReport);
                const isDeclaredDebugVariable = suspiciousDebugVariableNames.includes(callExpressionIdentifier.name);
                const isChainedReferenceDebug = suspiciousReferenceNodes.some((suspiciousReferenceIdentifier) => {
                    return (utilsToReport.includes(callExpressionIdentifier.name) &&
                        suspiciousReferenceIdentifier.name === referenceIdentifier.name);
                });
                const isVariableFromBuiltInConsole = builtInConsoleNodes.some((variableDeclarator) => {
                    const variables = context.getDeclaredVariables(variableDeclarator);
                    return variables.some(({ name }) => name === callExpressionIdentifier.name &&
                        (0, node_utils_1.isCallExpression)(callExpressionIdentifier.parent));
                });
                if (!isVariableFromBuiltInConsole &&
                    (isDebugUtil || isDeclaredDebugVariable || isChainedReferenceDebug)) {
                    context.report({
                        node: callExpressionIdentifier,
                        messageId: 'noDebug',
                    });
                }
            },
        };
    },
});
