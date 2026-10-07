"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'consistent-type-definitions',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce type definitions to consistently use either `interface` or `type`',
            recommended: 'stylistic',
        },
        fixable: 'code',
        messages: {
            interfaceOverType: 'Use an `interface` instead of a `type`.',
            typeOverInterface: 'Use a `type` instead of an `interface`.',
        },
        schema: [
            {
                type: 'string',
                description: 'Which type definition syntax to prefer.',
                enum: ['interface', 'type'],
            },
        ],
    },
    defaultOptions: ['interface'],
    create(context, [option]) {
        /**
         * Iterates from the highest parent to the currently traversed node
         * to determine whether any node in tree is globally declared module declaration
         */
        function isCurrentlyTraversedNodeWithinModuleDeclaration(node) {
            return context.sourceCode
                .getAncestors(node)
                .some(node => node.type === utils_1.AST_NODE_TYPES.TSModuleDeclaration &&
                node.declare &&
                node.kind === 'global');
        }
        return {
            ...(option === 'interface' && {
                "TSTypeAliasDeclaration[typeAnnotation.type='TSTypeLiteral']"(node) {
                    context.report({
                        node: node.id,
                        messageId: 'interfaceOverType',
                        fix(fixer) {
                            const typeToken = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(node.id, token => token.value === 'type'), util_1.NullThrowsReasons.MissingToken('type keyword', 'type alias'));
                            const equalsToken = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(node.typeAnnotation, token => token.value === '='), util_1.NullThrowsReasons.MissingToken('=', 'type alias'));
                            const beforeEqualsToken = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(equalsToken, {
                                includeComments: true,
                            }), util_1.NullThrowsReasons.MissingToken('before =', 'type alias'));
                            return [
                                // replace 'type' with 'interface'.
                                fixer.replaceText(typeToken, 'interface'),
                                // delete from the = to the { of the type, and put a space to be pretty.
                                fixer.replaceTextRange([beforeEqualsToken.range[1], node.typeAnnotation.range[0]], ' '),
                                // remove from the closing } through the end of the statement.
                                fixer.removeRange([
                                    node.typeAnnotation.range[1],
                                    node.range[1],
                                ]),
                            ];
                        },
                    });
                },
            }),
            ...(option === 'type' && {
                TSInterfaceDeclaration(node) {
                    const fix = isCurrentlyTraversedNodeWithinModuleDeclaration(node)
                        ? null
                        : (fixer) => {
                            const typeNode = node.typeParameters ?? node.id;
                            const fixes = [];
                            const firstToken = context.sourceCode.getTokenBefore(node.id);
                            if (firstToken) {
                                fixes.push(fixer.replaceText(firstToken, 'type'));
                                fixes.push(fixer.replaceTextRange([typeNode.range[1], node.body.range[0]], ' = '));
                            }
                            node.extends.forEach(heritage => {
                                const typeIdentifier = context.sourceCode.getText(heritage);
                                fixes.push(fixer.insertTextAfter(node.body, ` & ${typeIdentifier}`));
                            });
                            if (node.parent.type === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration) {
                                fixes.push(fixer.removeRange([node.parent.range[0], node.range[0]]), fixer.insertTextAfter(node.body, `\nexport default ${node.id.name}`));
                            }
                            return fixes;
                        };
                    context.report({
                        node: node.id,
                        messageId: 'typeOverInterface',
                        /**
                         * remove automatically fix when the interface is within a declare global
                         * @see {@link https://github.com/typescript-eslint/typescript-eslint/issues/2707}
                         */
                        fix,
                    });
                },
            }),
        };
    },
});
//# sourceMappingURL=consistent-type-definitions.js.map