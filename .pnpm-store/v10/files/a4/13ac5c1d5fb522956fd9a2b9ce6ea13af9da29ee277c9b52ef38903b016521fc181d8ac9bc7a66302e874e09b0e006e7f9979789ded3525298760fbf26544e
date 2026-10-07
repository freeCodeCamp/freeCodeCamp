"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const utils_1 = require("@typescript-eslint/utils");
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'no-manual-cleanup';
const CLEANUP_LIBRARY_REGEXP = /(@testing-library\/(preact|react|svelte|vue))|@marko\/testing-library/;
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow the use of `cleanup`',
            recommendedConfig: {
                dom: false,
                angular: false,
                react: false,
                vue: false,
                marko: false,
            },
        },
        messages: {
            noManualCleanup: "`cleanup` is performed automatically by your test runner, you don't need manual cleanups.",
        },
        schema: [],
    },
    defaultOptions: [],
    create(context, _, helpers) {
        function reportImportReferences(references) {
            for (const reference of references) {
                const utilsUsage = reference.identifier.parent;
                if (utilsUsage &&
                    (0, node_utils_1.isMemberExpression)(utilsUsage) &&
                    utils_1.ASTUtils.isIdentifier(utilsUsage.property) &&
                    utilsUsage.property.name === 'cleanup') {
                    context.report({
                        node: utilsUsage.property,
                        messageId: 'noManualCleanup',
                    });
                }
            }
        }
        function reportCandidateModule(moduleNode) {
            if ((0, node_utils_1.isImportDeclaration)(moduleNode)) {
                if ((0, node_utils_1.isImportDefaultSpecifier)(moduleNode.specifiers[0])) {
                    const { references } = context.getDeclaredVariables(moduleNode)[0];
                    reportImportReferences(references);
                }
                const cleanupSpecifier = moduleNode.specifiers.find((specifier) => (0, node_utils_1.isImportSpecifier)(specifier) &&
                    specifier.imported.name === 'cleanup');
                if (cleanupSpecifier) {
                    context.report({
                        node: cleanupSpecifier,
                        messageId: 'noManualCleanup',
                    });
                }
            }
            else {
                const declaratorNode = moduleNode.parent;
                if ((0, node_utils_1.isObjectPattern)(declaratorNode.id)) {
                    const cleanupProperty = declaratorNode.id.properties.find((property) => (0, node_utils_1.isProperty)(property) &&
                        utils_1.ASTUtils.isIdentifier(property.key) &&
                        property.key.name === 'cleanup');
                    if (cleanupProperty) {
                        context.report({
                            node: cleanupProperty,
                            messageId: 'noManualCleanup',
                        });
                    }
                }
                else {
                    const references = (0, node_utils_1.getVariableReferences)(context, declaratorNode);
                    reportImportReferences(references);
                }
            }
        }
        return {
            'Program:exit'() {
                const testingLibraryImportName = helpers.getTestingLibraryImportName();
                const testingLibraryImportNode = helpers.getTestingLibraryImportNode();
                const customModuleImportNode = helpers.getCustomModuleImportNode();
                if (testingLibraryImportName &&
                    testingLibraryImportNode &&
                    testingLibraryImportName.match(CLEANUP_LIBRARY_REGEXP)) {
                    reportCandidateModule(testingLibraryImportNode);
                }
                if (customModuleImportNode) {
                    reportCandidateModule(customModuleImportNode);
                }
            },
        };
    },
});
