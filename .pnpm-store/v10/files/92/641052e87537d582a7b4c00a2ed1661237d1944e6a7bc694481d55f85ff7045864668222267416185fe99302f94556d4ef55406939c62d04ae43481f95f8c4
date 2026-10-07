"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'prefer-for-of',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce the use of `for-of` loop over the standard `for` loop where possible',
            recommended: 'strict',
        },
        messages: {
            preferForOf: 'Expected a `for-of` loop instead of a `for` loop with this simple iteration.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function isSingleVariableDeclaration(node) {
            return ((node === null || node === void 0 ? void 0 : node.type) === utils_1.AST_NODE_TYPES.VariableDeclaration &&
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
            if ((node === null || node === void 0 ? void 0 : node.type) === utils_1.AST_NODE_TYPES.BinaryExpression &&
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
                        else if (node.operator === '=') {
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
        function isAssignee(node) {
            var _a;
            const parent = node.parent;
            if (!parent) {
                return false;
            }
            // a[i] = 1, a[i] += 1, etc.
            if (parent.type === utils_1.AST_NODE_TYPES.AssignmentExpression &&
                parent.left === node) {
                return true;
            }
            // delete a[i]
            if (parent.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
                parent.operator === 'delete' &&
                parent.argument === node) {
                return true;
            }
            // a[i]++, --a[i], etc.
            if (parent.type === utils_1.AST_NODE_TYPES.UpdateExpression &&
                parent.argument === node) {
                return true;
            }
            // [a[i]] = [0]
            if (parent.type === utils_1.AST_NODE_TYPES.ArrayPattern) {
                return true;
            }
            // [...a[i]] = [0]
            if (parent.type === utils_1.AST_NODE_TYPES.RestElement) {
                return true;
            }
            // ({ foo: a[i] }) = { foo: 0 }
            if (parent.type === utils_1.AST_NODE_TYPES.Property &&
                parent.value === node &&
                ((_a = parent.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.ObjectExpression &&
                isAssignee(parent.parent)) {
                return true;
            }
            return false;
        }
        function isIndexOnlyUsedWithArray(body, indexVar, arrayExpression) {
            const sourceCode = context.getSourceCode();
            const arrayText = sourceCode.getText(arrayExpression);
            return indexVar.references.every(reference => {
                const id = reference.identifier;
                const node = id.parent;
                return (!contains(body, id) ||
                    (node !== undefined &&
                        node.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                        node.object.type !== utils_1.AST_NODE_TYPES.ThisExpression &&
                        node.property === id &&
                        sourceCode.getText(node.object) === arrayText &&
                        !isAssignee(node)));
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
                const [indexVar] = context.getDeclaredVariables(node.init);
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