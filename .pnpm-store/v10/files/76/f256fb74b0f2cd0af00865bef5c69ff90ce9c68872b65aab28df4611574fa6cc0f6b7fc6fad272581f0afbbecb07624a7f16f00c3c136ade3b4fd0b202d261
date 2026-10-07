"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-empty-interface',
    meta: {
        type: 'suggestion',
        deprecated: {
            deprecatedSince: '8.0.0',
            replacedBy: [
                {
                    rule: {
                        name: '@typescript-eslint/no-empty-object-type',
                        url: 'https://typescript-eslint.io/rules/no-empty-object-type',
                    },
                },
            ],
            url: 'https://github.com/typescript-eslint/typescript-eslint/pull/8977',
        },
        docs: {
            description: 'Disallow the declaration of empty interfaces',
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            noEmpty: 'An empty interface is equivalent to `{}`.',
            noEmptyWithSuper: 'An interface declaring no members is equivalent to its supertype.',
        },
        replacedBy: ['@typescript-eslint/no-empty-object-type'],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowSingleExtends: {
                        type: 'boolean',
                        description: 'Whether to allow empty interfaces that extend a single other interface.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowSingleExtends: false,
        },
    ],
    create(context, [{ allowSingleExtends }]) {
        return {
            TSInterfaceDeclaration(node) {
                if (node.body.body.length !== 0) {
                    // interface contains members --> Nothing to report
                    return;
                }
                const extend = node.extends;
                if (extend.length === 0) {
                    context.report({
                        node: node.id,
                        messageId: 'noEmpty',
                    });
                }
                else if (extend.length === 1 &&
                    // interface extends exactly 1 interface --> Report depending on rule setting
                    !allowSingleExtends) {
                    const fix = (fixer) => {
                        let typeParam = '';
                        if (node.typeParameters) {
                            typeParam = context.sourceCode.getText(node.typeParameters);
                        }
                        return fixer.replaceText(node, `type ${context.sourceCode.getText(node.id)}${typeParam} = ${context.sourceCode.getText(extend[0])}`);
                    };
                    const scope = context.sourceCode.getScope(node);
                    const mergedWithClassDeclaration = scope.set
                        .get(node.id.name)
                        ?.defs.some(def => def.node.type === utils_1.AST_NODE_TYPES.ClassDeclaration);
                    const isInAmbientDeclaration = (0, util_1.isDefinitionFile)(context.filename) &&
                        scope.type === scope_manager_1.ScopeType.tsModule &&
                        scope.block.declare;
                    const useAutoFix = !(isInAmbientDeclaration || mergedWithClassDeclaration);
                    context.report({
                        node: node.id,
                        messageId: 'noEmptyWithSuper',
                        ...(useAutoFix
                            ? { fix }
                            : !mergedWithClassDeclaration
                                ? {
                                    suggest: [
                                        {
                                            messageId: 'noEmptyWithSuper',
                                            fix,
                                        },
                                    ],
                                }
                                : null),
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=no-empty-interface.js.map