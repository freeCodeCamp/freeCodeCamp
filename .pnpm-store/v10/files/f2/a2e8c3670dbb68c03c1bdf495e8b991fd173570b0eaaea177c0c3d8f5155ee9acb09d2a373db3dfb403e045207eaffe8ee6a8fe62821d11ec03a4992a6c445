"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE_NAME = void 0;
const create_testing_library_rule_1 = require("../create-testing-library-rule");
const node_utils_1 = require("../node-utils");
exports.RULE_NAME = 'no-dom-import';
const DOM_TESTING_LIBRARY_MODULES = [
    'dom-testing-library',
    '@testing-library/dom',
];
const CORRECT_MODULE_NAME_BY_FRAMEWORK = {
    angular: '@testing-library/angular',
    marko: '@marko/testing-library',
};
const getCorrectModuleName = (moduleName, framework) => {
    var _a;
    return ((_a = CORRECT_MODULE_NAME_BY_FRAMEWORK[framework]) !== null && _a !== void 0 ? _a : moduleName.replace('dom', framework));
};
exports.default = (0, create_testing_library_rule_1.createTestingLibraryRule)({
    name: exports.RULE_NAME,
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow importing from DOM Testing Library',
            recommendedConfig: {
                dom: false,
                angular: ['error', 'angular'],
                react: ['error', 'react'],
                vue: ['error', 'vue'],
                marko: ['error', 'marko'],
            },
        },
        messages: {
            noDomImport: 'import from DOM Testing Library is restricted, import from corresponding Testing Library framework instead',
            noDomImportFramework: 'import from DOM Testing Library is restricted, import from {{module}} instead',
        },
        fixable: 'code',
        schema: [{ type: 'string' }],
    },
    defaultOptions: [''],
    create(context, [framework], helpers) {
        function report(node, moduleName) {
            if (!framework) {
                return context.report({
                    node,
                    messageId: 'noDomImport',
                });
            }
            const correctModuleName = getCorrectModuleName(moduleName, framework);
            context.report({
                data: { module: correctModuleName },
                fix(fixer) {
                    if ((0, node_utils_1.isCallExpression)(node)) {
                        const name = node.arguments[0];
                        return fixer.replaceText(name, name.raw.replace(moduleName, correctModuleName));
                    }
                    else {
                        const name = node.source;
                        return fixer.replaceText(name, name.raw.replace(moduleName, correctModuleName));
                    }
                },
                messageId: 'noDomImportFramework',
                node,
            });
        }
        return {
            'Program:exit'() {
                let importName;
                const allImportNodes = helpers.getAllTestingLibraryImportNodes();
                allImportNodes.forEach((importNode) => {
                    importName = (0, node_utils_1.getImportModuleName)(importNode);
                    const domModuleName = DOM_TESTING_LIBRARY_MODULES.find((module) => module === importName);
                    if (!domModuleName) {
                        return;
                    }
                    report(importNode, domModuleName);
                });
            },
        };
    },
});
