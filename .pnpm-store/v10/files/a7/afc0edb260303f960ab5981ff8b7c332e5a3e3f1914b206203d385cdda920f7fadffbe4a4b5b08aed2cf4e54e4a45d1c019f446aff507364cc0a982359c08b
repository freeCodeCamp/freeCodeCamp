"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'prefer-screen-queries';
const ALLOWED_RENDER_PROPERTIES_FOR_DESTRUCTURING = [
    'container',
    'baseElement',
];
function usesContainerOrBaseElement(node) {
    const secondArgument = node.arguments[1];
    return ((0, node_utils_1.isObjectExpression)(secondArgument) &&
        secondArgument.properties.some((property) => (0, node_utils_1.isProperty)(property) &&
            utils_1.ASTUtils.isIdentifier(property.key) &&
            ALLOWED_RENDER_PROPERTIES_FOR_DESTRUCTURING.includes(property.key.name)));
}
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Suggest using `screen` while querying',
            recommendedConfig: {
                dom: 'error',
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            preferScreenQueries: 'Avoid destructuring queries from `render` result, use `screen.{{ name }}` instead',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        const renderWrapperNames = [];
        function detectRenderWrapper(node) {
            const innerFunction = (0, node_utils_1.getInnermostReturningFunction)(context, node);
            if (innerFunction) {
                renderWrapperNames.push((0, node_utils_1.getFunctionName)(innerFunction));
            }
        }
        function isReportableRender(node) {
            return (helpers.isRenderUtil(node) || renderWrapperNames.includes(node.name));
        }
        function reportInvalidUsage(node) {
            context.report({
                node,
                messageId: 'preferScreenQueries',
                data: {
                    name: node.name,
                },
            });
        }
        function saveSafeDestructuredQueries(node) {
            if ((0, node_utils_1.isObjectPattern)(node.id)) {
                for (const property of node.id.properties) {
                    if ((0, node_utils_1.isProperty)(property) &&
                        utils_1.ASTUtils.isIdentifier(property.key) &&
                        helpers.isBuiltInQuery(property.key)) {
                        safeDestructuredQueries.push(property.key.name);
                    }
                }
            }
        }
        function isIdentifierAllowed(name) {
            return ['screen', ...withinDeclaredVariables].includes(name);
        }
        const safeDestructuredQueries = [];
        const withinDeclaredVariables = [];
        return {
            VariableDeclarator(node) {
                if (!(0, node_utils_1.isCallExpression)(node.init) ||
                    !utils_1.ASTUtils.isIdentifier(node.init.callee)) {
                    return;
                }
                const isComingFromValidRender = isReportableRender(node.init.callee);
                if (!isComingFromValidRender) {
                    saveSafeDestructuredQueries(node);
                }
                const isWithinFunction = node.init.callee.name === 'within';
                const usesRenderOptions = isComingFromValidRender && usesContainerOrBaseElement(node.init);
                if (!isWithinFunction && !usesRenderOptions) {
                    return;
                }
                if ((0, node_utils_1.isObjectPattern)(node.id)) {
                    saveSafeDestructuredQueries(node);
                }
                else if (utils_1.ASTUtils.isIdentifier(node.id)) {
                    withinDeclaredVariables.push(node.id.name);
                }
            },
            CallExpression(node) {
                const identifierNode = (0, node_utils_1.getDeepestIdentifierNode)(node);
                if (!identifierNode) {
                    return;
                }
                if (helpers.isRenderUtil(identifierNode)) {
                    detectRenderWrapper(identifierNode);
                }
                if (!helpers.isBuiltInQuery(identifierNode)) {
                    return;
                }
                if (!(0, node_utils_1.isMemberExpression)(identifierNode.parent)) {
                    const isSafeDestructuredQuery = safeDestructuredQueries.some((queryName) => queryName === identifierNode.name);
                    if (isSafeDestructuredQuery) {
                        return;
                    }
                    reportInvalidUsage(identifierNode);
                    return;
                }
                const memberExpressionNode = identifierNode.parent;
                if ((0, node_utils_1.isCallExpression)(memberExpressionNode.object) &&
                    utils_1.ASTUtils.isIdentifier(memberExpressionNode.object.callee) &&
                    memberExpressionNode.object.callee.name !== 'within' &&
                    isReportableRender(memberExpressionNode.object.callee) &&
                    !usesContainerOrBaseElement(memberExpressionNode.object)) {
                    reportInvalidUsage(identifierNode);
                    return;
                }
                if (utils_1.ASTUtils.isIdentifier(memberExpressionNode.object) &&
                    !isIdentifierAllowed(memberExpressionNode.object.name)) {
                    reportInvalidUsage(identifierNode);
                }
            },
        };
    },
});
