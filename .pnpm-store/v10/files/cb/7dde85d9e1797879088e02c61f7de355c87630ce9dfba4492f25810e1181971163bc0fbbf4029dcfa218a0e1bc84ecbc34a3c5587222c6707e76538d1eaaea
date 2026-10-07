"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'prefer-for-of',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce the use of `for-of` loop over the standard `for` loop where possible',
            recommended: 'stylistic',
        },
        messages: {
            preferForOf: 'Expected a `for-of` loop instead of a `for` loop with this simple iteration.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function isSingleVariableDeclaration(node) {
            return (node?.type === utils_1.AST_NODE_TYPES.VariableDeclaration &&
                node.kind !== 'const' &&
                node.declarations.length === 1);
        }
        function isLiteral(node, value) {
            return node.type === utils_1.AST_NODE_TYPES.Literal && node.value === value;
        }
        function isZeroInitialized(node) {
            return node.init != null && isLiteral(node.init, 0);
        }
        function isMatchingIdentifier(node, name) {
            return node.type === utils_1.AST_NODE_TYPES.Identifier && node.name === name;
        }
        function isLessThanLengthExpression(node, name) {
            if (node?.type === utils_1.AST_NODE_TYPES.BinaryExpression &&
                node.operator === '<' &&
                isMatchingIdentifier(node.left, name) &&
                node.right.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                isMatchingIdentifier(node.right.property, 'length')) {
                return node.right.object;
            }
            return null;
        }
        function isIncrement(node, name) {
            if (!node) {
                return false;
            }
            switch (node.type) {
                case utils_1.AST_NODE_TYPES.UpdateExpression:
                    // x++ or ++x
                    return (node.operator === '++' && isMatchingIdentifier(node.argument, name));
                case utils_1.AST_NODE_TYPES.AssignmentExpression:
                    if (isMatchingIdentifier(node.left, name)) {
                        if (node.operator === '+=') {
                            // x += 1
                            return isLiteral(node.right, 1);
                        }
                        if (node.operator === '=') {
                            // x = x + 1 or x = 1 + x
                            const expr = node.right;
                            return (expr.type === utils_1.AST_NODE_TYPES.BinaryExpression &&
                                expr.operator === '+' &&
                                ((isMatchingIdentifier(expr.left, name) &&
                                    isLiteral(expr.right, 1)) ||
                                    (isLiteral(expr.left, 1) &&
                                        isMatchingIdentifier(expr.right, name))));
                        }
                    }
            }
            return false;
        }
        function contains(outer, inner) {
            return (outer.range[0] <= inner.range[0] && outer.range[1] >= inner.range[1]);
        }
        function isIndexOnlyUsedWithArray(body, indexVar, arrayExpression) {
            const arrayText = context.sourceCode.getText(arrayExpression);
            return indexVar.references.every(reference => {
                const id = reference.identifier;
                const node = id.parent;
                return (!contains(body, id) ||
                    (node.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                        node.object.type !== utils_1.AST_NODE_TYPES.ThisExpression &&
                        node.property === id &&
                        context.sourceCode.getText(node.object) === arrayText &&
                        !(0, util_1.isAssignee)(node)));
            });
        }
        return {
            'ForStatement:exit'(node) {
                if (!isSingleVariableDeclaration(node.init)) {
                    return;
                }
                const declarator = node.init.declarations[0];
                if (!declarator ||
                    !isZeroInitialized(declarator) ||
                    declarator.id.type !== utils_1.AST_NODE_TYPES.Identifier) {
                    return;
                }
                const indexName = declarator.id.name;
                const arrayExpression = isLessThanLengthExpression(node.test, indexName);
                if (!arrayExpression) {
                    return;
                }
                const [indexVar] = context.sourceCode.getDeclaredVariables(node.init);
                if (isIncrement(node.update, indexName) &&
                    isIndexOnlyUsedWithArray(node.body, indexVar, arrayExpression)) {
                    context.report({
                        node,
                        messageId: 'preferForOf',
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=prefer-for-of.js.map