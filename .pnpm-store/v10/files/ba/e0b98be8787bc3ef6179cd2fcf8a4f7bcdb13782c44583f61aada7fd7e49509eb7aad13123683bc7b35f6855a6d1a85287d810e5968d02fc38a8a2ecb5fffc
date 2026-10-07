"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFindByQueryVariant = exports.WAIT_METHODS = exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'prefer-find-by';
exports.WAIT_METHODS = ['waitFor', 'waitForElement', 'wait'];
function getFindByQueryVariant(queryMethod) {
    return queryMethod.includes('All') ? 'findAllBy' : 'findBy';
}
exports.getFindByQueryVariant = getFindByQueryVariant;
function findRenderDefinitionDeclaration(scope, query) {
    var _a;
    if (!scope) {
        return null;
    }
    const variable = scope.variables.find((v) => v.name === query);
    if (variable) {
        return ((_a = variable.defs
            .map(({ name }) => name)
            .filter(utils_1.ASTUtils.isIdentifier)
            .find(({ name }) => name === query)) !== null && _a !== void 0 ? _a : null);
    }
    return findRenderDefinitionDeclaration(scope.upper, query);
}
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Suggest using `find(All)By*` query instead of `waitFor` + `get(All)By*` to wait for elements',
            recommendedConfig: {
                dom: 'error',
                angular: 'error',
                react: 'error',
                vue: 'error',
                marko: 'error',
            },
        },
        messages: {
            preferFindBy: 'Prefer `{{queryVariant}}{{queryMethod}}` query over using `{{waitForMethodName}}` + `{{prevQuery}}`',
        },
        fixable: 'code',
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        const sourceCode = context.getSourceCode();
        function reportInvalidUsage(node, replacementParams) {
            const { queryMethod, queryVariant, prevQuery, waitForMethodName, fix } = replacementParams;
            context.report({
                node,
                messageId: 'preferFindBy',
                data: {
                    queryVariant,
                    queryMethod,
                    prevQuery,
                    waitForMethodName,
                },
                fix,
            });
        }
        function getWrongQueryNameInAssertion(node) {
            if (!(0, node_utils_1.isCallExpression)(node.body) ||
                !(0, node_utils_1.isMemberExpression)(node.body.callee)) {
                return null;
            }
            if ((0, node_utils_1.isCallExpression)(node.body.callee.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.arguments[0]) &&
                utils_1.ASTUtils.isIdentifier(node.body.callee.object.arguments[0].callee)) {
                return node.body.callee.object.arguments[0].callee.name;
            }
            if (!utils_1.ASTUtils.isIdentifier(node.body.callee.property)) {
                return null;
            }
            if ((0, node_utils_1.isCallExpression)(node.body.callee.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.arguments[0]) &&
                (0, node_utils_1.isMemberExpression)(node.body.callee.object.arguments[0].callee) &&
                utils_1.ASTUtils.isIdentifier(node.body.callee.object.arguments[0].callee.property)) {
                return node.body.callee.object.arguments[0].callee.property.name;
            }
            if ((0, node_utils_1.isMemberExpression)(node.body.callee.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.object.arguments[0]) &&
                (0, node_utils_1.isMemberExpression)(node.body.callee.object.object.arguments[0].callee) &&
                utils_1.ASTUtils.isIdentifier(node.body.callee.object.object.arguments[0].callee.property)) {
                return node.body.callee.object.object.arguments[0].callee.property.name;
            }
            if ((0, node_utils_1.isMemberExpression)(node.body.callee.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.object.arguments[0]) &&
                utils_1.ASTUtils.isIdentifier(node.body.callee.object.object.arguments[0].callee)) {
                return node.body.callee.object.object.arguments[0].callee.name;
            }
            return node.body.callee.property.name;
        }
        function getWrongQueryName(node) {
            if (!(0, node_utils_1.isCallExpression)(node.body)) {
                return null;
            }
            if (utils_1.ASTUtils.isIdentifier(node.body.callee) &&
                helpers.isSyncQuery(node.body.callee)) {
                return node.body.callee.name;
            }
            return getWrongQueryNameInAssertion(node);
        }
        function getCaller(node) {
            if (!(0, node_utils_1.isCallExpression)(node.body) ||
                !(0, node_utils_1.isMemberExpression)(node.body.callee)) {
                return null;
            }
            if (utils_1.ASTUtils.isIdentifier(node.body.callee.object)) {
                return node.body.callee.object.name;
            }
            if ((0, node_utils_1.isCallExpression)(node.body.callee.object) &&
                utils_1.ASTUtils.isIdentifier(node.body.callee.object.callee) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.arguments[0]) &&
                (0, node_utils_1.isMemberExpression)(node.body.callee.object.arguments[0].callee) &&
                utils_1.ASTUtils.isIdentifier(node.body.callee.object.arguments[0].callee.object)) {
                return node.body.callee.object.arguments[0].callee.object.name;
            }
            if ((0, node_utils_1.isMemberExpression)(node.body.callee.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.object.arguments[0]) &&
                (0, node_utils_1.isMemberExpression)(node.body.callee.object.object.arguments[0].callee) &&
                utils_1.ASTUtils.isIdentifier(node.body.callee.object.object.arguments[0].callee.object)) {
                return node.body.callee.object.object.arguments[0].callee.object.name;
            }
            return null;
        }
        function isSyncQuery(node) {
            if (!(0, node_utils_1.isCallExpression)(node.body)) {
                return false;
            }
            const isQuery = utils_1.ASTUtils.isIdentifier(node.body.callee) &&
                helpers.isSyncQuery(node.body.callee);
            const isWrappedInPresenceAssert = (0, node_utils_1.isMemberExpression)(node.body.callee) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.arguments[0]) &&
                utils_1.ASTUtils.isIdentifier(node.body.callee.object.arguments[0].callee) &&
                helpers.isSyncQuery(node.body.callee.object.arguments[0].callee) &&
                helpers.isPresenceAssert(node.body.callee);
            const isWrappedInNegatedPresenceAssert = (0, node_utils_1.isMemberExpression)(node.body.callee) &&
                (0, node_utils_1.isMemberExpression)(node.body.callee.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.object.arguments[0]) &&
                utils_1.ASTUtils.isIdentifier(node.body.callee.object.object.arguments[0].callee) &&
                helpers.isSyncQuery(node.body.callee.object.object.arguments[0].callee) &&
                helpers.isPresenceAssert(node.body.callee.object);
            return (isQuery || isWrappedInPresenceAssert || isWrappedInNegatedPresenceAssert);
        }
        function isScreenSyncQuery(node) {
            if (!(0, node_utils_1.isArrowFunctionExpression)(node) || !(0, node_utils_1.isCallExpression)(node.body)) {
                return false;
            }
            if (!(0, node_utils_1.isMemberExpression)(node.body.callee) ||
                !utils_1.ASTUtils.isIdentifier(node.body.callee.property)) {
                return false;
            }
            if (!utils_1.ASTUtils.isIdentifier(node.body.callee.object) &&
                !(0, node_utils_1.isCallExpression)(node.body.callee.object) &&
                !(0, node_utils_1.isMemberExpression)(node.body.callee.object)) {
                return false;
            }
            const isWrappedInPresenceAssert = helpers.isPresenceAssert(node.body.callee) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.arguments[0]) &&
                (0, node_utils_1.isMemberExpression)(node.body.callee.object.arguments[0].callee) &&
                utils_1.ASTUtils.isIdentifier(node.body.callee.object.arguments[0].callee.object);
            const isWrappedInNegatedPresenceAssert = (0, node_utils_1.isMemberExpression)(node.body.callee.object) &&
                helpers.isPresenceAssert(node.body.callee.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.object) &&
                (0, node_utils_1.isCallExpression)(node.body.callee.object.object.arguments[0]) &&
                (0, node_utils_1.isMemberExpression)(node.body.callee.object.object.arguments[0].callee);
            return (helpers.isSyncQuery(node.body.callee.property) ||
                isWrappedInPresenceAssert ||
                isWrappedInNegatedPresenceAssert);
        }
        function getQueryArguments(node) {
            if ((0, node_utils_1.isMemberExpression)(node.callee) &&
                (0, node_utils_1.isCallExpression)(node.callee.object) &&
                (0, node_utils_1.isCallExpression)(node.callee.object.arguments[0])) {
                return node.callee.object.arguments[0].arguments;
            }
            if ((0, node_utils_1.isMemberExpression)(node.callee) &&
                (0, node_utils_1.isMemberExpression)(node.callee.object) &&
                (0, node_utils_1.isCallExpression)(node.callee.object.object) &&
                (0, node_utils_1.isCallExpression)(node.callee.object.object.arguments[0])) {
                return node.callee.object.object.arguments[0].arguments;
            }
            return node.arguments;
        }
        return {
            'AwaitExpression > CallExpression'(node) {
                if (!utils_1.ASTUtils.isIdentifier(node.callee) ||
                    !helpers.isAsyncUtil(node.callee, exports.WAIT_METHODS)) {
                    return;
                }
                const argument = node.arguments[0];
                if (!(0, node_utils_1.isArrowFunctionExpression)(argument) ||
                    !(0, node_utils_1.isCallExpression)(argument.body)) {
                    return;
                }
                const waitForMethodName = node.callee.name;
                if (isScreenSyncQuery(argument)) {
                    const caller = getCaller(argument);
                    if (!caller) {
                        return;
                    }
                    const fullQueryMethod = getWrongQueryName(argument);
                    if (!fullQueryMethod) {
                        return;
                    }
                    const waitOptions = node.arguments[1];
                    let waitOptionsSourceCode = '';
                    if ((0, node_utils_1.isObjectExpression)(waitOptions)) {
                        waitOptionsSourceCode = `, ${sourceCode.getText(waitOptions)}`;
                    }
                    const queryVariant = getFindByQueryVariant(fullQueryMethod);
                    const callArguments = getQueryArguments(argument.body);
                    const queryMethod = fullQueryMethod.split('By')[1];
                    if (!queryMethod) {
                        return;
                    }
                    reportInvalidUsage(node, {
                        queryMethod,
                        queryVariant,
                        prevQuery: fullQueryMethod,
                        waitForMethodName,
                        fix(fixer) {
                            const property = argument.body
                                .callee.property;
                            if (helpers.isCustomQuery(property)) {
                                return null;
                            }
                            const newCode = `${caller}.${queryVariant}${queryMethod}(${callArguments
                                .map((callArgNode) => sourceCode.getText(callArgNode))
                                .join(', ')}${waitOptionsSourceCode})`;
                            return fixer.replaceText(node, newCode);
                        },
                    });
                    return;
                }
                if (!isSyncQuery(argument)) {
                    return;
                }
                const fullQueryMethod = getWrongQueryName(argument);
                if (!fullQueryMethod) {
                    return;
                }
                const queryMethod = fullQueryMethod.split('By')[1];
                const queryVariant = getFindByQueryVariant(fullQueryMethod);
                const callArguments = getQueryArguments(argument.body);
                reportInvalidUsage(node, {
                    queryMethod,
                    queryVariant,
                    prevQuery: fullQueryMethod,
                    waitForMethodName,
                    fix(fixer) {
                        if (helpers.isCustomQuery(argument.body
                            .callee)) {
                            return null;
                        }
                        const findByMethod = `${queryVariant}${queryMethod}`;
                        const allFixes = [];
                        const newCode = `${findByMethod}(${callArguments
                            .map((callArgNode) => sourceCode.getText(callArgNode))
                            .join(', ')})`;
                        allFixes.push(fixer.replaceText(node, newCode));
                        const definition = findRenderDefinitionDeclaration(context.getScope(), fullQueryMethod);
                        if (!definition) {
                            return allFixes;
                        }
                        if (definition.parent &&
                            (0, node_utils_1.isObjectPattern)(definition.parent.parent)) {
                            const allVariableDeclarations = definition.parent.parent;
                            if (allVariableDeclarations.properties.some((p) => (0, node_utils_1.isProperty)(p) &&
                                utils_1.ASTUtils.isIdentifier(p.key) &&
                                p.key.name === findByMethod)) {
                                return allFixes;
                            }
                            const textDestructuring = sourceCode.getText(allVariableDeclarations);
                            const text = textDestructuring.replace(/(\s*})$/, `, ${findByMethod}$1`);
                            allFixes.push(fixer.replaceText(allVariableDeclarations, text));
                        }
                        return allFixes;
                    },
                });
            },
        };
    },
});
