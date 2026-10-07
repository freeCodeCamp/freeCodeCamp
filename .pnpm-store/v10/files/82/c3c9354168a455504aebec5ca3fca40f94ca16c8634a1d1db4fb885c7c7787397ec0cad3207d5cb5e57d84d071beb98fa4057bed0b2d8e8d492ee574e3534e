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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-loop-func');
exports.default = util.createRule({
    name: 'no-loop-func',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow function declarations that contain unsafe references inside loop statements',
            recommended: false,
            extendsBaseRule: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: [],
        messages: baseRule.meta.messages,
    },
    defaultOptions: [],
    create(context) {
        /**
         * Reports functions which match the following condition:
         * - has a loop node in ancestors.
         * - has any references which refers to an unsafe variable.
         *
         * @param node The AST node to check.
         * @returns Whether or not the node is within a loop.
         */
        function checkForLoops(node) {
            const loopNode = getContainingLoopNode(node);
            if (!loopNode) {
                return;
            }
            const references = context.getScope().through;
            const unsafeRefs = references
                .filter(r => !isSafe(loopNode, r))
                .map(r => r.identifier.name);
            if (unsafeRefs.length > 0) {
                context.report({
                    node,
                    messageId: 'unsafeRefs',
                    data: { varNames: `'${unsafeRefs.join("', '")}'` },
                });
            }
        }
        return {
            ArrowFunctionExpression: checkForLoops,
            FunctionExpression: checkForLoops,
            FunctionDeclaration: checkForLoops,
        };
    },
});
/**
 * Gets the containing loop node of a specified node.
 *
 * We don't need to check nested functions, so this ignores those.
 * `Scope.through` contains references of nested functions.
 *
 * @param node An AST node to get.
 * @returns The containing loop node of the specified node, or `null`.
 */
function getContainingLoopNode(node) {
    for (let currentNode = node; currentNode.parent; currentNode = currentNode.parent) {
        const parent = currentNode.parent;
        switch (parent.type) {
            case utils_1.AST_NODE_TYPES.WhileStatement:
            case utils_1.AST_NODE_TYPES.DoWhileStatement:
                return parent;
            case utils_1.AST_NODE_TYPES.ForStatement:
                // `init` is outside of the loop.
                if (parent.init !== currentNode) {
                    return parent;
                }
                break;
            case utils_1.AST_NODE_TYPES.ForInStatement:
            case utils_1.AST_NODE_TYPES.ForOfStatement:
                // `right` is outside of the loop.
                if (parent.right !== currentNode) {
                    return parent;
                }
                break;
            case utils_1.AST_NODE_TYPES.ArrowFunctionExpression:
            case utils_1.AST_NODE_TYPES.FunctionExpression:
            case utils_1.AST_NODE_TYPES.FunctionDeclaration:
                // We don't need to check nested functions.
                return null;
            default:
                break;
        }
    }
    return null;
}
/**
 * Gets the containing loop node of a given node.
 * If the loop was nested, this returns the most outer loop.
 * @param node A node to get. This is a loop node.
 * @param excludedNode A node that the result node should not include.
 * @returns The most outer loop node.
 */
function getTopLoopNode(node, excludedNode) {
    const border = excludedNode ? excludedNode.range[1] : 0;
    let retv = node;
    let containingLoopNode = node;
    while (containingLoopNode && containingLoopNode.range[0] >= border) {
        retv = containingLoopNode;
        containingLoopNode = getContainingLoopNode(containingLoopNode);
    }
    return retv;
}
/**
 * Checks whether a given reference which refers to an upper scope's variable is
 * safe or not.
 * @param loopNode A containing loop node.
 * @param reference A reference to check.
 * @returns `true` if the reference is safe or not.
 */
function isSafe(loopNode, reference) {
    var _a;
    const variable = reference.resolved;
    const definition = variable === null || variable === void 0 ? void 0 : variable.defs[0];
    const declaration = definition === null || definition === void 0 ? void 0 : definition.parent;
    const kind = (declaration === null || declaration === void 0 ? void 0 : declaration.type) === utils_1.AST_NODE_TYPES.VariableDeclaration
        ? declaration.kind
        : '';
    // type references are all safe
    // this only really matters for global types that haven't been configured
    if (reference.isTypeReference) {
        return true;
    }
    // Variables which are declared by `const` is safe.
    if (kind === 'const') {
        return true;
    }
    /*
     * Variables which are declared by `let` in the loop is safe.
     * It's a different instance from the next loop step's.
     */
    if (kind === 'let' &&
        declaration &&
        declaration.range[0] > loopNode.range[0] &&
        declaration.range[1] < loopNode.range[1]) {
        return true;
    }
    /*
     * WriteReferences which exist after this border are unsafe because those
     * can modify the variable.
     */
    const border = getTopLoopNode(loopNode, kind === 'let' ? declaration : null)
        .range[0];
    /**
     * Checks whether a given reference is safe or not.
     * The reference is every reference of the upper scope's variable we are
     * looking now.
     *
     * It's safe if the reference matches one of the following condition.
     * - is readonly.
     * - doesn't exist inside a local function and after the border.
     *
     * @param upperRef A reference to check.
     * @returns `true` if the reference is safe.
     */
    function isSafeReference(upperRef) {
        var _a;
        const id = upperRef.identifier;
        return (!upperRef.isWrite() ||
            (((_a = variable === null || variable === void 0 ? void 0 : variable.scope) === null || _a === void 0 ? void 0 : _a.variableScope) === upperRef.from.variableScope &&
                id.range[0] < border));
    }
    return (_a = variable === null || variable === void 0 ? void 0 : variable.references.every(isSafeReference)) !== null && _a !== void 0 ? _a : false;
}
//# sourceMappingURL=no-loop-func.js.map