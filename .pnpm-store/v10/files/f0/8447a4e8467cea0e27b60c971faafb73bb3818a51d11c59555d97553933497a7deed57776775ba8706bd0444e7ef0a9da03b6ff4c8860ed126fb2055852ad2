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
const tsutils = __importStar(require("tsutils"));
const util = __importStar(require("../util"));
const util_1 = require("../util");
exports.default = util.createRule({
    name: 'no-unsafe-member-access',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow member access on a value with type `any`',
            recommended: 'error',
            requiresTypeChecking: true,
        },
        messages: {
            unsafeMemberExpression: 'Unsafe member access {{property}} on an `any` value.',
            unsafeThisMemberExpression: [
                'Unsafe member access {{property}} on an `any` value. `this` is typed as `any`.',
                'You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.',
            ].join('\n'),
            unsafeComputedMemberAccess: 'Computed name {{property}} resolves to an any value.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const { program, esTreeNodeToTSNodeMap } = util.getParserServices(context);
        const checker = program.getTypeChecker();
        const compilerOptions = program.getCompilerOptions();
        const isNoImplicitThis = tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'noImplicitThis');
        const sourceCode = context.getSourceCode();
        const stateCache = new Map();
        function checkMemberExpression(node) {
            const cachedState = stateCache.get(node);
            if (cachedState) {
                return cachedState;
            }
            if (node.object.type === utils_1.AST_NODE_TYPES.MemberExpression) {
                const objectState = checkMemberExpression(node.object);
                if (objectState === 1 /* State.Unsafe */) {
                    // if the object is unsafe, we know this will be unsafe as well
                    // we don't need to report, as we have already reported on the inner member expr
                    stateCache.set(node, objectState);
                    return objectState;
                }
            }
            const tsNode = esTreeNodeToTSNodeMap.get(node.object);
            const type = checker.getTypeAtLocation(tsNode);
            const state = util.isTypeAnyType(type) ? 1 /* State.Unsafe */ : 2 /* State.Safe */;
            stateCache.set(node, state);
            if (state === 1 /* State.Unsafe */) {
                const propertyName = sourceCode.getText(node.property);
                let messageId = 'unsafeMemberExpression';
                if (!isNoImplicitThis) {
                    // `this.foo` or `this.foo[bar]`
                    const thisExpression = (0, util_1.getThisExpression)(node);
                    if (thisExpression &&
                        util.isTypeAnyType(util.getConstrainedTypeAtLocation(checker, esTreeNodeToTSNodeMap.get(thisExpression)))) {
                        messageId = 'unsafeThisMemberExpression';
                    }
                }
                context.report({
                    node,
                    messageId,
                    data: {
                        property: node.computed ? `[${propertyName}]` : `.${propertyName}`,
                    },
                });
            }
            return state;
        }
        return {
            // ignore MemberExpression if it's parent is TSClassImplements or TSInterfaceHeritage
            ':not(TSClassImplements, TSInterfaceHeritage) > MemberExpression': checkMemberExpression,
            'MemberExpression[computed = true] > *.property'(node) {
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
                const tsNode = esTreeNodeToTSNodeMap.get(node);
                const type = checker.getTypeAtLocation(tsNode);
                if (util.isTypeAnyType(type)) {
                    const propertyName = sourceCode.getText(node);
                    context.report({
                        node,
                        messageId: 'unsafeComputedMemberAccess',
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