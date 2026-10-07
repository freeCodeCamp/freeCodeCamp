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
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'prefer-return-this-type',
    defaultOptions: [],
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce that `this` is used when only `this` type is returned',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        messages: {
            useThisType: 'Use `this` type instead.',
        },
        schema: [],
        fixable: 'code',
    },
    create(context) {
        const parserServices = (0, util_1.getParserServices)(context);
        const checker = parserServices.program.getTypeChecker();
        function tryGetNameInType(name, typeNode) {
            if (typeNode.type === utils_1.AST_NODE_TYPES.TSTypeReference &&
                typeNode.typeName.type === utils_1.AST_NODE_TYPES.Identifier &&
                typeNode.typeName.name === name) {
                return typeNode;
            }
            if (typeNode.type === utils_1.AST_NODE_TYPES.TSUnionType) {
                for (const type of typeNode.types) {
                    const found = tryGetNameInType(name, type);
                    if (found) {
                        return found;
                    }
                }
            }
            return undefined;
        }
        function isThisSpecifiedInParameters(originalFunc) {
            const firstArg = originalFunc.params[0];
            return (firstArg &&
                firstArg.type === utils_1.AST_NODE_TYPES.Identifier &&
                firstArg.name === 'this');
        }
        function isFunctionReturningThis(originalFunc, originalClass) {
            if (isThisSpecifiedInParameters(originalFunc)) {
                return false;
            }
            const func = parserServices.esTreeNodeToTSNodeMap.get(originalFunc);
            if (!func.body) {
                return false;
            }
            const classType = checker.getTypeAtLocation(parserServices.esTreeNodeToTSNodeMap.get(originalClass));
            if (func.body.kind !== ts.SyntaxKind.Block) {
                const type = checker.getTypeAtLocation(func.body);
                return classType.thisType === type;
            }
            let hasReturnThis = false;
            let hasReturnClassType = false;
            (0, util_1.forEachReturnStatement)(func.body, stmt => {
                const expr = stmt.expression;
                if (!expr) {
                    return;
                }
                // fast check
                if (expr.kind === ts.SyntaxKind.ThisKeyword) {
                    hasReturnThis = true;
                    return;
                }
                const type = checker.getTypeAtLocation(expr);
                if (classType === type) {
                    hasReturnClassType = true;
                    return true;
                }
                if (classType.thisType === type) {
                    hasReturnThis = true;
                    return;
                }
                return;
            });
            return !hasReturnClassType && hasReturnThis;
        }
        function checkFunction(originalFunc, originalClass) {
            var _a;
            const className = (_a = originalClass.id) === null || _a === void 0 ? void 0 : _a.name;
            if (!className || !originalFunc.returnType) {
                return;
            }
            const node = tryGetNameInType(className, originalFunc.returnType.typeAnnotation);
            if (!node) {
                return;
            }
            if (isFunctionReturningThis(originalFunc, originalClass)) {
                context.report({
                    node,
                    messageId: 'useThisType',
                    fix: fixer => fixer.replaceText(node, 'this'),
                });
            }
        }
        return {
            'ClassBody > MethodDefinition'(node) {
                checkFunction(node.value, node.parent.parent);
            },
            'ClassBody > PropertyDefinition'(node) {
                var _a, _b;
                if (!(((_a = node.value) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.FunctionExpression ||
                    ((_b = node.value) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.ArrowFunctionExpression)) {
                    return;
                }
                checkFunction(node.value, node.parent.parent);
            },
        };
    },
});
//# sourceMappingURL=prefer-return-this-type.js.map