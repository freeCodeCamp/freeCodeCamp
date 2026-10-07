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
const tsutils = __importStar(require("ts-api-utils"));
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-unsafe-call',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow calling a value with type `any`',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            errorCall: 'Unsafe call of a type that could not be resolved.',
            errorCallThis: 'Unsafe call of a `this` type that could not be resolved.',
            errorNew: 'Unsafe construction of a type that could not be resolved.',
            errorTemplateTag: 'Unsafe use of a template tag whose type could not be resolved.',
            unsafeCall: 'Unsafe call of {{type}} typed value.',
            unsafeCallThis: [
                'Unsafe call of {{type}} typed value. `this` is typed as {{type}}.',
                'You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.',
            ].join('\n'),
            unsafeNew: 'Unsafe construction of {{type}} typed value.',
            unsafeTemplateTag: 'Unsafe use of {{type}} typed template tag.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const compilerOptions = services.program.getCompilerOptions();
        const isNoImplicitThis = tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'noImplicitThis');
        function checkCall(node, reportingNode, unsafeMessageId, errorMessageId) {
            const type = (0, util_1.getConstrainedTypeAtLocation)(services, node);
            if ((0, util_1.isTypeAnyType)(type)) {
                if (!isNoImplicitThis) {
                    // `this()` or `this.foo()` or `this.foo[bar]()`
                    const thisExpression = (0, util_1.getThisExpression)(node);
                    if (thisExpression &&
                        (0, util_1.isTypeAnyType)((0, util_1.getConstrainedTypeAtLocation)(services, thisExpression))) {
                        unsafeMessageId = 'unsafeCallThis';
                        errorMessageId = 'errorCallThis';
                    }
                }
                const isErrorType = tsutils.isIntrinsicErrorType(type);
                context.report({
                    node: reportingNode,
                    messageId: isErrorType ? errorMessageId : unsafeMessageId,
                    data: {
                        type: 'an `any`',
                    },
                });
                return;
            }
            if ((0, util_1.isBuiltinSymbolLike)(services.program, type, 'Function')) {
                // this also matches subtypes of `Function`, like `interface Foo extends Function {}`.
                //
                // For weird TS reasons that I don't understand, these are
                //
                // safe to construct if:
                // - they have at least one call signature _that is not void-returning_,
                // - OR they have at least one construct signature.
                //
                // safe to call (including as template) if:
                // - they have at least one call signature
                // - OR they have at least one construct signature.
                const constructSignatures = type.getConstructSignatures();
                if (constructSignatures.length > 0) {
                    return;
                }
                const callSignatures = type.getCallSignatures();
                if (unsafeMessageId === 'unsafeNew') {
                    if (callSignatures.some(signature => !tsutils.isIntrinsicVoidType(signature.getReturnType()))) {
                        return;
                    }
                }
                else if (callSignatures.length > 0) {
                    return;
                }
                context.report({
                    node: reportingNode,
                    messageId: unsafeMessageId,
                    data: {
                        type: 'a `Function`',
                    },
                });
                return;
            }
        }
        return {
            'CallExpression > *.callee'(node) {
                checkCall(node, node, 'unsafeCall', 'errorCall');
            },
            NewExpression(node) {
                checkCall(node.callee, node, 'unsafeNew', 'errorNew');
            },
            'TaggedTemplateExpression > *.tag'(node) {
                checkCall(node, node, 'unsafeTemplateTag', 'errorTemplateTag');
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-call.js.map