"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'no-container';
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow the use of `container` methods',
            recommendedConfig: {
                dom: false,
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            noContainer: 'Avoid using container methods. Prefer using the methods from Testing Library, such as "getByRole()"',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        const destructuredContainerPropNames = [];
        const renderWrapperNames = [];
        let renderResultVarName = null;
        let containerName = null;
        let containerCallsMethod = false;
        function detectRenderWrapper(node) {
            const innerFunction = (0, node_utils_1.getInnermostReturningFunction)(context, node);
            if (innerFunction) {
                renderWrapperNames.push((0, node_utils_1.getFunctionName)(innerFunction));
            }
        }
        function showErrorIfChainedContainerMethod(innerNode) {
            if ((0, node_utils_1.isMemberExpression)(innerNode)) {
                if (utils_1.ASTUtils.isIdentifier(innerNode.object)) {
                    const isContainerName = innerNode.object.name === containerName;
                    if (isContainerName) {
                        context.report({
                            node: innerNode,
                            messageId: 'noContainer',
                        });
                        return;
                    }
                    const isRenderWrapper = innerNode.object.name === renderResultVarName;
                    containerCallsMethod =
                        utils_1.ASTUtils.isIdentifier(innerNode.property) &&
                            innerNode.property.name === 'container' &&
                            isRenderWrapper;
                    if (containerCallsMethod) {
                        context.report({
                            node: innerNode.property,
                            messageId: 'noContainer',
                        });
                        return;
                    }
                }
                showErrorIfChainedContainerMethod(innerNode.object);
            }
        }
        return {
            CallExpression(node) {
                const callExpressionIdentifier = (0, node_utils_1.getDeepestIdentifierNode)(node);
                if (!callExpressionIdentifier) {
                    return;
                }
                if (helpers.isRenderUtil(callExpressionIdentifier)) {
                    detectRenderWrapper(callExpressionIdentifier);
                }
                if ((0, node_utils_1.isMemberExpression)(node.callee)) {
                    showErrorIfChainedContainerMethod(node.callee);
                }
                else if (utils_1.ASTUtils.isIdentifier(node.callee) &&
                    destructuredContainerPropNames.includes(node.callee.name)) {
                    context.report({
                        node,
                        messageId: 'noContainer',
                    });
                }
            },
            VariableDeclarator(node) {
                if (!node.init) {
                    return;
                }
                const initIdentifierNode = (0, node_utils_1.getDeepestIdentifierNode)(node.init);
                if (!initIdentifierNode) {
                    return;
                }
                const isRenderWrapperVariableDeclarator = renderWrapperNames.includes(initIdentifierNode.name);
                if (!helpers.isRenderVariableDeclarator(node) &&
                    !isRenderWrapperVariableDeclarator) {
                    return;
                }
                if ((0, node_utils_1.isObjectPattern)(node.id)) {
                    const containerIndex = node.id.properties.findIndex((property) => (0, node_utils_1.isProperty)(property) &&
                        utils_1.ASTUtils.isIdentifier(property.key) &&
                        property.key.name === 'container');
                    const nodeValue = containerIndex !== -1 && node.id.properties[containerIndex].value;
                    if (!nodeValue) {
                        return;
                    }
                    if (utils_1.ASTUtils.isIdentifier(nodeValue)) {
                        containerName = nodeValue.name;
                    }
                    else if ((0, node_utils_1.isObjectPattern)(nodeValue)) {
                        nodeValue.properties.forEach((property) => (0, node_utils_1.isProperty)(property) &&
                            utils_1.ASTUtils.isIdentifier(property.key) &&
                            destructuredContainerPropNames.push(property.key.name));
                    }
                }
                else if (utils_1.ASTUtils.isIdentifier(node.id)) {
                    renderResultVarName = node.id.name;
                }
            },
        };
    },
});
