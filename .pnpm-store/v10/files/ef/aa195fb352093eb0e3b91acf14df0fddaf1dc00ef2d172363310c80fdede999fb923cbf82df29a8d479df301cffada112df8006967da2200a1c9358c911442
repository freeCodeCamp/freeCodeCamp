"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'prefer-promise-reject-errors',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require using Error objects as Promise rejection reasons',
            extendsBaseRule: true,
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            rejectAnError: 'Expected the Promise rejection reason to be an Error.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allow: {
                        ...util_1.typeOrValueSpecifiersSchema,
                        description: 'Type specifiers that can be used as Promise rejection reasons.',
                    },
                    allowEmptyReject: {
                        type: 'boolean',
                        description: 'Whether to allow calls to `Promise.reject()` with no arguments.',
                    },
                    allowThrowingAny: {
                        type: 'boolean',
                        description: 'Whether to always allow throwing values typed as `any`.',
                    },
                    allowThrowingUnknown: {
                        type: 'boolean',
                        description: 'Whether to always allow throwing values typed as `unknown`.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allow: [],
            allowEmptyReject: false,
            allowThrowingAny: false,
            allowThrowingUnknown: false,
        },
    ],
    create(context, [options]) {
        const services = (0, util_1.getParserServices)(context);
        function checkRejectCall(callExpression) {
            const argument = callExpression.arguments.at(0);
            if (argument) {
                const type = services.getTypeAtLocation(argument);
                if ((0, util_1.typeMatchesSomeSpecifier)(type, options.allow, services.program)) {
                    return;
                }
                if (options.allowThrowingAny && (0, util_1.isTypeAnyType)(type)) {
                    return;
                }
                if (options.allowThrowingUnknown && (0, util_1.isTypeUnknownType)(type)) {
                    return;
                }
                if ((0, util_1.isErrorLike)(services.program, type) ||
                    (0, util_1.isReadonlyErrorLike)(services.program, type)) {
                    return;
                }
            }
            else if (options.allowEmptyReject) {
                return;
            }
            context.report({
                node: callExpression,
                messageId: 'rejectAnError',
            });
        }
        function typeAtLocationIsLikePromise(node) {
            const type = services.getTypeAtLocation(node);
            return ((0, util_1.isPromiseConstructorLike)(services.program, type) ||
                (0, util_1.isPromiseLike)(services.program, type));
        }
        return {
            CallExpression(node) {
                const callee = (0, util_1.skipChainExpression)(node.callee);
                if (callee.type !== utils_1.AST_NODE_TYPES.MemberExpression) {
                    return;
                }
                if (!(0, util_1.isStaticMemberAccessOfValue)(callee, context, 'reject') ||
                    !typeAtLocationIsLikePromise(callee.object)) {
                    return;
                }
                checkRejectCall(node);
            },
            NewExpression(node) {
                const callee = (0, util_1.skipChainExpression)(node.callee);
                if (!(0, util_1.isPromiseConstructorLike)(services.program, services.getTypeAtLocation(callee))) {
                    return;
                }
                const executor = node.arguments.at(0);
                if (!executor || !(0, util_1.isFunction)(executor)) {
                    return;
                }
                const rejectParamNode = executor.params.at(1);
                if (!rejectParamNode || !(0, util_1.isIdentifier)(rejectParamNode)) {
                    return;
                }
                // reject param is always present in variables declared by executor
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const rejectVariable = context.sourceCode
                    .getDeclaredVariables(executor)
                    .find(variable => variable.identifiers.includes(rejectParamNode));
                rejectVariable.references.forEach(ref => {
                    if (ref.identifier.parent.type !== utils_1.AST_NODE_TYPES.CallExpression ||
                        ref.identifier !== ref.identifier.parent.callee) {
                        return;
                    }
                    checkRejectCall(ref.identifier.parent);
                });
            },
        };
    },
});
//# sourceMappingURL=prefer-promise-reject-errors.js.map