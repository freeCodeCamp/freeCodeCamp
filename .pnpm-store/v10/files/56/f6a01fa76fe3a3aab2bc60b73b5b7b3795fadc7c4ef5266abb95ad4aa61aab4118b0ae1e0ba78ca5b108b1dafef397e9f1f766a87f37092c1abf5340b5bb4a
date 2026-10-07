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
const tsutils = __importStar(require("ts-api-utils"));
const util_1 = require("../util");
var State;
(function (State) {
    State[State["Unsafe"] = 1] = "Unsafe";
    State[State["Safe"] = 2] = "Safe";
    State[State["Chained"] = 3] = "Chained";
})(State || (State = {}));
exports.default = (0, util_1.createRule)({
    name: 'no-unsafe-member-access',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow member access on a value with type `any`',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            errorComputedMemberAccess: 'The type of computed name {{property}} cannot be resolved.',
            errorMemberExpression: 'Unsafe member access {{property}} on a type that cannot be resolved.',
            errorThisMemberExpression: [
                'Unsafe member access {{property}}. The type of `this` cannot be resolved.',
                'You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.',
            ].join('\n'),
            unsafeComputedMemberAccess: 'Computed name {{property}} resolves to an `any` value.',
            unsafeMemberExpression: 'Unsafe member access {{property}} on an `any` value.',
            unsafeThisMemberExpression: [
                'Unsafe member access {{property}} on an `any` value. `this` is typed as `any`.',
                'You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.',
            ].join('\n'),
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowOptionalChaining: {
                        type: 'boolean',
                        description: 'Whether to allow `?.` optional chains on `any` values.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowOptionalChaining: false,
        },
    ],
    create(context, [{ allowOptionalChaining }]) {
        const services = (0, util_1.getParserServices)(context);
        const compilerOptions = services.program.getCompilerOptions();
        const isNoImplicitThis = tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'noImplicitThis');
        const stateCache = new Map();
        // Case notes:
        // value?.outer.middle.inner
        // The ChainExpression is a child of the root expression, and a parent of all the MemberExpressions.
        // But the left-most expression is what we want to report on: the inner-most expressions.
        // In fact, this is true even if the chain is on the inside!
        // value.outer.middle?.inner;
        // It was already true that every `object` (MemberExpression) has optional: boolean
        function checkMemberExpression(node) {
            if (allowOptionalChaining && node.optional) {
                stateCache.set(node, State.Chained);
                return State.Chained;
            }
            const cachedState = stateCache.get(node);
            if (cachedState) {
                return cachedState;
            }
            if (node.object.type === utils_1.AST_NODE_TYPES.MemberExpression) {
                const objectState = checkMemberExpression(node.object);
                if (objectState === State.Unsafe) {
                    // if the object is unsafe, we know this will be unsafe as well
                    // we don't need to report, as we have already reported on the inner member expr
                    stateCache.set(node, objectState);
                    return objectState;
                }
            }
            const type = services.getTypeAtLocation(node.object);
            const state = (0, util_1.isTypeAnyType)(type) ? State.Unsafe : State.Safe;
            stateCache.set(node, state);
            if (state === State.Unsafe) {
                const propertyName = context.sourceCode.getText(node.property);
                let messageId;
                if (!isNoImplicitThis) {
                    // `this.foo` or `this.foo[bar]`
                    const thisExpression = (0, util_1.getThisExpression)(node);
                    if (thisExpression) {
                        const thisType = (0, util_1.getConstrainedTypeAtLocation)(services, thisExpression);
                        if ((0, util_1.isTypeAnyType)(thisType)) {
                            messageId = tsutils.isIntrinsicErrorType(thisType)
                                ? 'errorThisMemberExpression'
                                : 'unsafeThisMemberExpression';
                        }
                    }
                }
                if (!messageId) {
                    messageId = tsutils.isIntrinsicErrorType(type)
                        ? 'errorMemberExpression'
                        : 'unsafeMemberExpression';
                }
                context.report({
                    node: node.property,
                    messageId,
                    data: {
                        property: node.computed ? `[${propertyName}]` : `.${propertyName}`,
                    },
                });
            }
            return state;
        }
        return {
            // ignore MemberExpressions with ancestors of type `TSClassImplements` or `TSInterfaceHeritage`
            'MemberExpression:not(TSClassImplements MemberExpression, TSInterfaceHeritage MemberExpression)': checkMemberExpression,
            'MemberExpression[computed = true] > *.property'(node) {
                if (allowOptionalChaining &&
                    node.parent.optional) {
                    return;
                }
                if (
                // x[1]
                node.type === utils_1.AST_NODE_TYPES.Literal ||
                    // x[1++] x[++x] etc
                    // FUN FACT - **all** update expressions return type number, regardless of the argument's type,
                    // because JS engines return NaN if there the argument is not a number.
                    node.type === utils_1.AST_NODE_TYPES.UpdateExpression) {
                    // perf optimizations - literals can obviously never be `any`
                    return;
                }
                const type = services.getTypeAtLocation(node);
                if ((0, util_1.isTypeAnyType)(type)) {
                    const propertyName = context.sourceCode.getText(node);
                    context.report({
                        node,
                        messageId: tsutils.isIntrinsicErrorType(type)
                            ? 'errorComputedMemberAccess'
                            : 'unsafeComputedMemberAccess',
                        data: {
                            property: `[${propertyName}]`,
                        },
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-member-access.js.map