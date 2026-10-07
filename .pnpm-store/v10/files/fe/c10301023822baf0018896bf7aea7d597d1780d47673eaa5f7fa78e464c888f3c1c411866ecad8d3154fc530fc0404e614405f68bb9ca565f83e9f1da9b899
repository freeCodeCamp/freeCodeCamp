"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'consistent-indexed-object-style',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require or disallow the `Record` type',
            recommended: 'strict',
        },
        messages: {
            preferRecord: 'A record is preferred over an index signature.',
            preferIndexSignature: 'An index signature is preferred over a record.',
        },
        fixable: 'code',
        schema: [
            {
                enum: ['record', 'index-signature'],
            },
        ],
    },
    defaultOptions: ['record'],
    create(context, [mode]) {
        const sourceCode = context.getSourceCode();
        function checkMembers(members, node, parentId, prefix, postfix, safeFix = true) {
            if (members.length !== 1) {
                return;
            }
            const [member] = members;
            if (member.type !== utils_1.AST_NODE_TYPES.TSIndexSignature) {
                return;
            }
            const [parameter] = member.parameters;
            if (!parameter) {
                return;
            }
            if (parameter.type !== utils_1.AST_NODE_TYPES.Identifier) {
                return;
            }
            const keyType = parameter.typeAnnotation;
            if (!keyType) {
                return;
            }
            const valueType = member.typeAnnotation;
            if (!valueType) {
                return;
            }
            if (parentId) {
                const scope = context.getScope();
                const superVar = utils_1.ASTUtils.findVariable(scope, parentId.name);
                if (superVar) {
                    const isCircular = superVar.references.some(item => item.isTypeReference &&
                        node.range[0] <= item.identifier.range[0] &&
                        node.range[1] >= item.identifier.range[1]);
                    if (isCircular) {
                        return;
                    }
                }
            }
            context.report({
                node,
                messageId: 'preferRecord',
                fix: safeFix
                    ? (fixer) => {
                        const key = sourceCode.getText(keyType.typeAnnotation);
                        const value = sourceCode.getText(valueType.typeAnnotation);
                        const record = member.readonly
                            ? `Readonly<Record<${key}, ${value}>>`
                            : `Record<${key}, ${value}>`;
                        return fixer.replaceText(node, `${prefix}${record}${postfix}`);
                    }
                    : null,
            });
        }
        return Object.assign(Object.assign({}, (mode === 'index-signature' && {
            TSTypeReference(node) {
                var _a;
                const typeName = node.typeName;
                if (typeName.type !== utils_1.AST_NODE_TYPES.Identifier) {
                    return;
                }
                if (typeName.name !== 'Record') {
                    return;
                }
                const params = (_a = node.typeParameters) === null || _a === void 0 ? void 0 : _a.params;
                if ((params === null || params === void 0 ? void 0 : params.length) !== 2) {
                    return;
                }
                context.report({
                    node,
                    messageId: 'preferIndexSignature',
                    fix(fixer) {
                        const key = sourceCode.getText(params[0]);
                        const type = sourceCode.getText(params[1]);
                        return fixer.replaceText(node, `{ [key: ${key}]: ${type} }`);
                    },
                });
            },
        })), (mode === 'record' && {
            TSTypeLiteral(node) {
                const parent = findParentDeclaration(node);
                checkMembers(node.members, node, parent === null || parent === void 0 ? void 0 : parent.id, '', '');
            },
            TSInterfaceDeclaration(node) {
                var _a, _b, _c, _d;
                let genericTypes = '';
                if (((_b = (_a = node.typeParameters) === null || _a === void 0 ? void 0 : _a.params) !== null && _b !== void 0 ? _b : []).length > 0) {
                    genericTypes = `<${(_c = node.typeParameters) === null || _c === void 0 ? void 0 : _c.params.map(p => sourceCode.getText(p)).join(', ')}>`;
                }
                checkMembers(node.body.body, node, node.id, `type ${node.id.name}${genericTypes} = `, ';', !((_d = node.extends) === null || _d === void 0 ? void 0 : _d.length));
            },
        }));
    },
});
function findParentDeclaration(node) {
    if (node.parent && node.parent.type !== utils_1.AST_NODE_TYPES.TSTypeAnnotation) {
        if (node.parent.type === utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration) {
            return node.parent;
        }
        return findParentDeclaration(node.parent);
    }
    return undefined;
}
//# sourceMappingURL=consistent-indexed-object-style.js.map