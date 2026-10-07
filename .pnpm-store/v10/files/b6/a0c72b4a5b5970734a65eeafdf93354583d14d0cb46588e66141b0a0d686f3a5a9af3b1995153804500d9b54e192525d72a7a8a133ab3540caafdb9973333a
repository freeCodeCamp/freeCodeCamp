"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'consistent-generic-constructors',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce specifying generic type arguments on type annotation or constructor name of a constructor call',
            recommended: 'strict',
        },
        messages: {
            preferTypeAnnotation: 'The generic type arguments should be specified as part of the type annotation.',
            preferConstructor: 'The generic type arguments should be specified as part of the constructor type arguments.',
        },
        fixable: 'code',
        schema: [
            {
                enum: ['type-annotation', 'constructor'],
            },
        ],
    },
    defaultOptions: ['constructor'],
    create(context, [mode]) {
        const sourceCode = context.getSourceCode();
        return {
            'VariableDeclarator,PropertyDefinition,:matches(FunctionDeclaration,FunctionExpression) > AssignmentPattern'(node) {
                var _a, _b;
                function getLHSRHS() {
                    switch (node.type) {
                        case utils_1.AST_NODE_TYPES.VariableDeclarator:
                            return [node.id, node.init];
                        case utils_1.AST_NODE_TYPES.PropertyDefinition:
                            return [node, node.value];
                        case utils_1.AST_NODE_TYPES.AssignmentPattern:
                            return [node.left, node.right];
                        default:
                            throw new Error(`Unhandled node type: ${node.type}`);
                    }
                }
                const [lhsName, rhs] = getLHSRHS();
                const lhs = (_a = lhsName.typeAnnotation) === null || _a === void 0 ? void 0 : _a.typeAnnotation;
                if (!rhs ||
                    rhs.type !== utils_1.AST_NODE_TYPES.NewExpression ||
                    rhs.callee.type !== utils_1.AST_NODE_TYPES.Identifier) {
                    return;
                }
                if (lhs &&
                    (lhs.type !== utils_1.AST_NODE_TYPES.TSTypeReference ||
                        lhs.typeName.type !== utils_1.AST_NODE_TYPES.Identifier ||
                        lhs.typeName.name !== rhs.callee.name)) {
                    return;
                }
                if (mode === 'type-annotation') {
                    if (!lhs && rhs.typeParameters) {
                        const { typeParameters, callee } = rhs;
                        const typeAnnotation = sourceCode.getText(callee) + sourceCode.getText(typeParameters);
                        context.report({
                            node,
                            messageId: 'preferTypeAnnotation',
                            fix(fixer) {
                                function getIDToAttachAnnotation() {
                                    if (node.type !== utils_1.AST_NODE_TYPES.PropertyDefinition) {
                                        return lhsName;
                                    }
                                    if (!node.computed) {
                                        return node.key;
                                    }
                                    // If the property's computed, we have to attach the
                                    // annotation after the square bracket, not the enclosed expression
                                    return sourceCode.getTokenAfter(node.key);
                                }
                                return [
                                    fixer.remove(typeParameters),
                                    fixer.insertTextAfter(getIDToAttachAnnotation(), ': ' + typeAnnotation),
                                ];
                            },
                        });
                    }
                    return;
                }
                if (mode === 'constructor') {
                    if ((lhs === null || lhs === void 0 ? void 0 : lhs.typeParameters) && !rhs.typeParameters) {
                        const hasParens = ((_b = sourceCode.getTokenAfter(rhs.callee)) === null || _b === void 0 ? void 0 : _b.value) === '(';
                        const extraComments = new Set(sourceCode.getCommentsInside(lhs.parent));
                        sourceCode
                            .getCommentsInside(lhs.typeParameters)
                            .forEach(c => extraComments.delete(c));
                        context.report({
                            node,
                            messageId: 'preferConstructor',
                            *fix(fixer) {
                                yield fixer.remove(lhs.parent);
                                for (const comment of extraComments) {
                                    yield fixer.insertTextAfter(rhs.callee, sourceCode.getText(comment));
                                }
                                yield fixer.insertTextAfter(rhs.callee, sourceCode.getText(lhs.typeParameters));
                                if (!hasParens) {
                                    yield fixer.insertTextAfter(rhs.callee, '()');
                                }
                            },
                        });
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=consistent-generic-constructors.js.map