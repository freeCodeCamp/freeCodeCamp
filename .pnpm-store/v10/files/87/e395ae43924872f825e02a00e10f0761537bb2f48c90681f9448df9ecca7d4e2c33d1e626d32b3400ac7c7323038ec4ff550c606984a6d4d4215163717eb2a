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
    name: 'no-unsafe-declaration-merging',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow unsafe declaration merging',
            recommended: 'strict',
            requiresTypeChecking: false,
        },
        messages: {
            unsafeMerging: 'Unsafe declaration merging between classes and interfaces.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        function checkUnsafeDeclaration(scope, node, unsafeKind) {
            const variable = scope.set.get(node.name);
            if (!variable) {
                return;
            }
            const defs = variable.defs;
            if (defs.length <= 1) {
                return;
            }
            if (defs.some(def => def.node.type === unsafeKind)) {
                context.report({
                    node,
                    messageId: 'unsafeMerging',
                });
            }
        }
        return {
            ClassDeclaration(node) {
                if (node.id) {
                    // by default eslint returns the inner class scope for the ClassDeclaration node
                    // but we want the outer scope within which merged variables will sit
                    const currentScope = context.getScope().upper;
                    if (currentScope == null) {
                        return;
                    }
                    checkUnsafeDeclaration(currentScope, node.id, utils_1.AST_NODE_TYPES.TSInterfaceDeclaration);
                }
            },
            TSInterfaceDeclaration(node) {
                checkUnsafeDeclaration(context.getScope(), node.id, utils_1.AST_NODE_TYPES.ClassDeclaration);
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-declaration-merging.js.map