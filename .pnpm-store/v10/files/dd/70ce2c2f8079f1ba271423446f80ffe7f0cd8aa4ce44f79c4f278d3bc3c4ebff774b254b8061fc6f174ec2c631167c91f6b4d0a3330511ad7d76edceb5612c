"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-loop-func');
const CONSTANT_BINDINGS = new Set(['await using', 'const', 'using']);
exports.default = (0, util_1.createRule)({
    name: 'no-loop-func',
    meta: {
        type: 'suggestion',
        // defaultOptions, -- base rule does not use defaultOptions
        deprecated: {
            deprecatedSince: '8.64.0',
            replacedBy: [
                {
                    rule: {
                        name: 'no-loop-func',
                        url: 'https://eslint.org/docs/latest/rules/no-loop-func',
                    },
                },
            ],
            url: 'https://github.com/typescript-eslint/typescript-eslint/issues/12496',
        },
        docs: {
            description: 'Disallow function declarations that contain unsafe references inside loop statements',
            extendsBaseRule: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const SKIPPED_IIFE_NODES = new Set();
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
                        // We need to check nested functions only in case of IIFE.
                        if (SKIPPED_IIFE_NODES.has(parent)) {
                            break;
                        }
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
            const variable = reference.resolved;
            const definition = variable?.defs[0];
            const declaration = definition?.parent;
            const kind = declaration?.type === utils_1.AST_NODE_TYPES.VariableDeclaration
                ? declaration.kind
                : '';
            // type references are all safe
            // this only really matters for global types that haven't been configured
            if (reference.isTypeReference) {
                return true;
            }
            // Variables which are declared by `const`, `using`, or `await using` are
            // safe. They can't be reassigned, so each iteration captures a fresh one.
            if (CONSTANT_BINDINGS.has(kind)) {
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
            const border = getTopLoopNode(loopNode, kind === 'let' ? declaration : null).range[0];
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
                const id = upperRef.identifier;
                return (!upperRef.isWrite() ||
                    (variable?.scope.variableScope === upperRef.from.variableScope &&
                        id.range[0] < border));
            }
            return variable?.references.every(isSafeReference) ?? false;
        }
        /**
         * Reports functions which match the following condition:
         * - has a loop node in ancestors.
         * - has any references which refers to an unsafe variable.
         *
         * @param node The AST node to check.
         */
        function checkForLoops(node) {
            const loopNode = getContainingLoopNode(node);
            if (!loopNode) {
                return;
            }
            const references = context.sourceCode.getScope(node).through;
            if (!(node.async || node.generator) && isIIFE(node)) {
                const isFunctionExpression = node.type === utils_1.AST_NODE_TYPES.FunctionExpression;
                // Check if the function is referenced elsewhere in the code
                const isFunctionReferenced = isFunctionExpression && node.id
                    ? references.some(r => r.identifier.name === node.id?.name)
                    : false;
                if (!isFunctionReferenced) {
                    SKIPPED_IIFE_NODES.add(node);
                    return;
                }
            }
            const unsafeRefs = references
                .filter(r => r.resolved && !isSafe(loopNode, r))
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
            FunctionDeclaration: checkForLoops,
            FunctionExpression: checkForLoops,
        };
    },
});
function isIIFE(node) {
    return (node.parent.type === utils_1.AST_NODE_TYPES.CallExpression &&
        node.parent.callee === node);
}
//# sourceMappingURL=no-loop-func.js.map