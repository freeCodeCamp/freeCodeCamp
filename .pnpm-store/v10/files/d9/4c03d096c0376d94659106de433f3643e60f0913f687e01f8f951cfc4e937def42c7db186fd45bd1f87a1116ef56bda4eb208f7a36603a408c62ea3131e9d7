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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'return-await',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce consistent awaiting of returned promises',
            recommended: {
                strict: ['error-handling-correctness-only'],
            },
            requiresTypeChecking: true,
        },
        fixable: 'code',
        // eslint-disable-next-line eslint-plugin/require-meta-has-suggestions -- suggestions are exposed through a helper.
        hasSuggestions: true,
        messages: {
            disallowedPromiseAwait: 'Returning an awaited promise is not allowed in this context.',
            disallowedPromiseAwaitSuggestion: 'Remove `await` before the expression. Use caution as this may impact control flow.',
            nonPromiseAwait: 'Returning an awaited value that is not a promise is not allowed.',
            requiredPromiseAwait: 'Returning an awaited promise is required in this context.',
            requiredPromiseAwaitSuggestion: 'Add `await` before the expression. Use caution as this may impact control flow.',
        },
        schema: [
            {
                type: 'string',
                oneOf: [
                    {
                        type: 'string',
                        description: 'Requires that all returned promises be awaited.',
                        enum: ['always'],
                    },
                    {
                        type: 'string',
                        description: 'In error-handling contexts, the rule enforces that returned promises must be awaited. In ordinary contexts, the rule does not enforce any particular behavior around whether returned promises are awaited.',
                        enum: ['error-handling-correctness-only'],
                    },
                    {
                        type: 'string',
                        description: 'In error-handling contexts, the rule enforces that returned promises must be awaited. In ordinary contexts, the rule enforces that returned promises _must not_ be awaited.',
                        enum: ['in-try-catch'],
                    },
                    {
                        type: 'string',
                        description: 'Disallows awaiting any returned promises.',
                        enum: ['never'],
                    },
                ],
            },
        ],
    },
    defaultOptions: ['in-try-catch'],
    create(context, [option]) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const scopeInfoStack = [];
        function enterFunction(node) {
            scopeInfoStack.push({
                hasAsync: node.async,
                owningFunc: node,
            });
        }
        function exitFunction() {
            scopeInfoStack.pop();
        }
        function affectsExplicitResourceManagement(node) {
            // just need to determine if there is a `using` declaration in scope.
            let scope = context.sourceCode.getScope(node);
            const functionScope = scope.variableScope;
            while (true) {
                for (const variable of scope.variables) {
                    if (variable.defs.length !== 1) {
                        // This can't be the case for `using` or `await using` since it's
                        // an error to redeclare those more than once in the same scope,
                        // unlike, say, `var` declarations.
                        continue;
                    }
                    const declaration = variable.defs[0];
                    const declaratorNode = declaration.node;
                    const declarationNode = declaratorNode.parent;
                    // if it's a using/await using declaration, and it comes _before_ the
                    // node we're checking, it affects control flow for that node.
                    if (['await using', 'using'].includes(declarationNode.kind) &&
                        declaratorNode.range[1] < node.range[0]) {
                        return true;
                    }
                }
                if (scope === functionScope) {
                    // We've checked all the relevant scopes
                    break;
                }
                // This should always exist, since the rule should only be checking
                // contexts in which `return` statements are legal, which should always
                // be inside a function.
                scope = (0, util_1.nullThrows)(scope.upper, 'Expected parent scope to exist. return-await should only operate on return statements within functions');
            }
            return false;
        }
        /**
         * Tests whether a node is inside of an explicit error handling context
         * (try/catch/finally) in a way that throwing an exception will have an
         * impact on the program's control flow.
         */
        function affectsExplicitErrorHandling(node) {
            // If an error-handling block is followed by another error-handling block,
            // control flow is affected by whether promises in it are awaited or not.
            // Otherwise, we need to check recursively for nested try statements until
            // we get to the top level of a function or the program. If by then,
            // there's no offending error-handling blocks, it doesn't affect control
            // flow.
            const tryAncestorResult = findContainingTryStatement(node);
            if (tryAncestorResult == null) {
                return false;
            }
            const { block, tryStatement } = tryAncestorResult;
            switch (block) {
                case 'catch':
                    // Exceptions thrown in catch blocks followed by a finally block affect
                    // control flow.
                    if (tryStatement.finallyBlock != null) {
                        return true;
                    }
                    // Otherwise recurse.
                    return affectsExplicitErrorHandling(tryStatement);
                case 'finally':
                    return affectsExplicitErrorHandling(tryStatement);
                case 'try':
                    // Try blocks are always followed by either a catch or finally,
                    // so exceptions thrown here always affect control flow.
                    return true;
                default: {
                    const __never = block;
                    throw new Error(`Unexpected block type: ${String(__never)}`);
                }
            }
        }
        /**
         * A try _statement_ is the whole thing that encompasses try block,
         * catch clause, and finally block. This function finds the nearest
         * enclosing try statement (if present) for a given node, and reports which
         * part of the try statement the node is in.
         */
        function findContainingTryStatement(node) {
            let child = node;
            let ancestor = node.parent;
            while (ancestor && !ts.isFunctionLike(ancestor)) {
                if (ts.isTryStatement(ancestor)) {
                    let block;
                    if (child === ancestor.tryBlock) {
                        block = 'try';
                    }
                    else if (child === ancestor.catchClause) {
                        block = 'catch';
                    }
                    else if (child === ancestor.finallyBlock) {
                        block = 'finally';
                    }
                    return {
                        block: (0, util_1.nullThrows)(block, 'Child of a try statement must be a try block, catch clause, or finally block'),
                        tryStatement: ancestor,
                    };
                }
                child = ancestor;
                ancestor = ancestor.parent;
            }
            return undefined;
        }
        function removeAwait(fixer, node) {
            // Should always be an await node; but let's be safe.
            /* istanbul ignore if */ if (!(0, util_1.isAwaitExpression)(node)) {
                return null;
            }
            const awaitToken = context.sourceCode.getFirstToken(node, util_1.isAwaitKeyword);
            // Should always be the case; but let's be safe.
            /* istanbul ignore if */ if (!awaitToken) {
                return null;
            }
            const awaitTokenRemovalRange = (0, util_1.getAwaitTokenRemovalRange)(context.sourceCode, awaitToken);
            const awaitRemovalFix = fixer.removeRange(awaitTokenRemovalRange);
            const firstOperandToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(awaitToken), util_1.NullThrowsReasons.MissingToken('operand', 'await expression'));
            if ((0, util_1.isStartOfArrowFunctionBodyNeedingParentheses)(node, firstOperandToken, context.sourceCode)) {
                return [
                    awaitRemovalFix,
                    fixer.insertTextBefore(node.argument, '('),
                    fixer.insertTextAfter(node.argument, ')'),
                ];
            }
            return awaitRemovalFix;
        }
        function insertAwait(fixer, node, isHighPrecedence) {
            if (isHighPrecedence) {
                return fixer.insertTextBefore(node, 'await ');
            }
            return [
                fixer.insertTextBefore(node, 'await ('),
                fixer.insertTextAfter(node, ')'),
            ];
        }
        function test(node, expression) {
            let child;
            const isAwait = ts.isAwaitExpression(expression);
            if (isAwait) {
                child = expression.getChildAt(1);
            }
            else {
                child = expression;
            }
            const type = checker.getTypeAtLocation(child);
            const certainty = (0, util_1.needsToBeAwaited)(checker, expression, type);
            // handle awaited _non_thenables
            if (certainty !== util_1.Awaitable.Always) {
                if (isAwait) {
                    if (certainty === util_1.Awaitable.May) {
                        return;
                    }
                    context.report({
                        node,
                        messageId: 'nonPromiseAwait',
                        fix: fixer => removeAwait(fixer, node),
                    });
                }
                return;
            }
            // At this point it's definitely a thenable.
            const affectsErrorHandling = affectsExplicitErrorHandling(expression) ||
                affectsExplicitResourceManagement(node);
            const useAutoFix = !affectsErrorHandling;
            const ruleConfiguration = getConfiguration(option);
            const shouldAwaitInCurrentContext = affectsErrorHandling
                ? ruleConfiguration.errorHandlingContext
                : ruleConfiguration.ordinaryContext;
            switch (shouldAwaitInCurrentContext) {
                case 'await':
                    if (!isAwait) {
                        context.report({
                            node,
                            messageId: 'requiredPromiseAwait',
                            ...(0, util_1.getFixOrSuggest)({
                                fixOrSuggest: useAutoFix ? 'fix' : 'suggest',
                                suggestion: {
                                    messageId: 'requiredPromiseAwaitSuggestion',
                                    fix: fixer => insertAwait(fixer, node, (0, util_1.isHigherPrecedenceThanAwait)(expression)),
                                },
                            }),
                        });
                    }
                    break;
                case "don't-care":
                    break;
                case 'no-await':
                    if (isAwait) {
                        context.report({
                            node,
                            messageId: 'disallowedPromiseAwait',
                            ...(0, util_1.getFixOrSuggest)({
                                fixOrSuggest: useAutoFix ? 'fix' : 'suggest',
                                suggestion: {
                                    messageId: 'disallowedPromiseAwaitSuggestion',
                                    fix: fixer => removeAwait(fixer, node),
                                },
                            }),
                        });
                    }
                    break;
            }
        }
        function findPossiblyReturnedNodes(node) {
            if (node.type === utils_1.AST_NODE_TYPES.ConditionalExpression) {
                return [
                    ...findPossiblyReturnedNodes(node.alternate),
                    ...findPossiblyReturnedNodes(node.consequent),
                ];
            }
            return [node];
        }
        return {
            ArrowFunctionExpression: enterFunction,
            'ArrowFunctionExpression:exit': exitFunction,
            FunctionDeclaration: enterFunction,
            'FunctionDeclaration:exit': exitFunction,
            FunctionExpression: enterFunction,
            'FunctionExpression:exit': exitFunction,
            // executes after less specific handler, so exitFunction is called
            'ArrowFunctionExpression[async = true]:exit'(node) {
                if (node.body.type !== utils_1.AST_NODE_TYPES.BlockStatement) {
                    findPossiblyReturnedNodes(node.body).forEach(node => {
                        const tsNode = services.esTreeNodeToTSNodeMap.get(node);
                        test(node, tsNode);
                    });
                }
            },
            ReturnStatement(node) {
                const scopeInfo = scopeInfoStack.at(-1);
                if (!scopeInfo?.hasAsync || !node.argument) {
                    return;
                }
                findPossiblyReturnedNodes(node.argument).forEach(node => {
                    const tsNode = services.esTreeNodeToTSNodeMap.get(node);
                    test(node, tsNode);
                });
            },
        };
    },
});
function getConfiguration(option) {
    switch (option) {
        case 'always':
            return {
                errorHandlingContext: 'await',
                ordinaryContext: 'await',
            };
        case 'error-handling-correctness-only':
            return {
                errorHandlingContext: 'await',
                ordinaryContext: "don't-care",
            };
        case 'in-try-catch':
            return {
                errorHandlingContext: 'await',
                ordinaryContext: 'no-await',
            };
        case 'never':
            return {
                errorHandlingContext: 'no-await',
                ordinaryContext: 'no-await',
            };
    }
}
//# sourceMappingURL=return-await.js.map