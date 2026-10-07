"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const classScopeAnalyzer_1 = require("../util/class-scope-analyzer/classScopeAnalyzer");
exports.default = (0, util_1.createRule)({
    name: 'no-unused-private-class-members',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow unused private class members',
            extendsBaseRule: true,
            requiresTypeChecking: false,
        },
        messages: {
            unusedPrivateClassMember: "Private class member '{{classMemberName}}' is defined but never used.",
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        return {
            'Program:exit'(node) {
                const result = (0, classScopeAnalyzer_1.analyzeClassMemberUsage)(node, utils_1.ESLintUtils.nullThrows(context.sourceCode.scopeManager, 'Missing required scope manager'));
                for (const classScope of result.values()) {
                    for (const member of [
                        ...classScope.members.instance.values(),
                        ...classScope.members.static.values(),
                    ]) {
                        if ((!member.isPrivate() && !member.isHashPrivate()) ||
                            member.isUsed()) {
                            continue;
                        }
                        context.report({
                            node: member.nameNode,
                            messageId: 'unusedPrivateClassMember',
                            data: { classMemberName: member.name },
                        });
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=no-unused-private-class-members.js.map