"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'prefer-wait-for';
const DEPRECATED_METHODS = ['wait', 'waitForElement', 'waitForDomChange'];
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Use `waitFor` instead of deprecated wait methods',
            recommendedConfig: {
                dom: false,
                angular: false,
                react: false,
                vue: false,
                marko: false,
            },
        },
        messages: {
            preferWaitForMethod: '`{{ methodName }}` is deprecated in favour of `waitFor`',
            preferWaitForImport: 'import `waitFor` instead of deprecated async utils',
            preferWaitForRequire: 'require `waitFor` instead of deprecated async utils',
        },
        fixable: 'code',
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        let addWaitFor = false;
        const reportRequire = (node) => {
            context.report({
                node,
                messageId: 'preferWaitForRequire',
                fix(fixer) {
                    const excludedImports = [...DEPRECATED_METHODS, 'waitFor'];
                    const newAllRequired = node.properties
                        .filter((s) => (0, node_utils_1.isProperty)(s) &&
                        utils_1.ASTUtils.isIdentifier(s.key) &&
                        !excludedImports.includes(s.key.name))
                        .map((s) => s.key.name);
                    newAllRequired.push('waitFor');
                    return fixer.replaceText(node, `{ ${newAllRequired.join(',')} }`);
                },
            });
        };
        const reportImport = (node) => {
            context.report({
                node,
                messageId: 'preferWaitForImport',
                fix(fixer) {
                    const excludedImports = [...DEPRECATED_METHODS, 'waitFor'];
                    const newImports = node.specifiers
                        .map((specifier) => (0, node_utils_1.isImportSpecifier)(specifier) &&
                        !excludedImports.includes(specifier.imported.name) &&
                        specifier.imported.name)
                        .filter(Boolean);
                    newImports.push('waitFor');
                    const newNode = `import { ${newImports.join(',')} } from '${node.source.value}';`;
                    return fixer.replaceText(node, newNode);
                },
            });
        };
        const reportWait = (node) => {
            context.report({
                node,
                messageId: 'preferWaitForMethod',
                data: {
                    methodName: node.name,
                },
                fix(fixer) {
                    const callExpressionNode = (0, node_utils_1.findClosestCallExpressionNode)(node);
                    if (!callExpressionNode) {
                        return null;
                    }
                    const [arg] = callExpressionNode.arguments;
                    const fixers = [];
                    if (arg) {
                        fixers.push(fixer.replaceText(node, 'waitFor'));
                        if (node.name === 'waitForDomChange') {
                            fixers.push(fixer.insertTextBefore(arg, '() => {}, '));
                        }
                    }
                    else {
                        let methodReplacement = 'waitFor(() => {})';
                        if ((0, node_utils_1.isMemberExpression)(node.parent) &&
                            utils_1.ASTUtils.isIdentifier(node.parent.object)) {
                            methodReplacement = `${node.parent.object.name}.${methodReplacement}`;
                        }
                        const newText = methodReplacement;
                        fixers.push(fixer.replaceText(callExpressionNode, newText));
                    }
                    return fixers;
                },
            });
        };
        return {
            'CallExpression > MemberExpression'(node) {
                const isDeprecatedMethod = utils_1.ASTUtils.isIdentifier(node.property) &&
                    DEPRECATED_METHODS.includes(node.property.name);
                if (!isDeprecatedMethod) {
                    return;
                }
                if (!helpers.isNodeComingFromTestingLibrary(node)) {
                    return;
                }
                addWaitFor = true;
                reportWait(node.property);
            },
            'CallExpression > Identifier'(node) {
                if (!DEPRECATED_METHODS.includes(node.name)) {
                    return;
                }
                if (!helpers.isNodeComingFromTestingLibrary(node)) {
                    return;
                }
                addWaitFor = true;
                reportWait(node);
            },
            'Program:exit'() {
                var _a;
                if (!addWaitFor) {
                    return;
                }
                const testingLibraryNode = (_a = helpers.getCustomModuleImportNode()) !== null && _a !== void 0 ? _a : helpers.getTestingLibraryImportNode();
                if ((0, node_utils_1.isCallExpression)(testingLibraryNode)) {
                    const parent = testingLibraryNode.parent;
                    if (!(0, node_utils_1.isObjectPattern)(parent.id)) {
                        return;
                    }
                    reportRequire(parent.id);
                }
                else if (testingLibraryNode) {
                    if (testingLibraryNode.specifiers.length === 1 &&
                        (0, node_utils_1.isImportNamespaceSpecifier)(testingLibraryNode.specifiers[0])) {
                        return;
                    }
                    reportImport(testingLibraryNode);
                }
            },
        };
    },
});
