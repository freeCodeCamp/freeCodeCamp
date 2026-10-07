"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'related-getter-setter-pairs',
    meta: {
        type: 'problem',
        docs: {
            description: 'Enforce that `get()` types should be assignable to their equivalent `set()` type',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        messages: {
            mismatch: '`get()` type should be assignable to its equivalent `set()` type.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const methodPairsStack = [];
        function addPropertyNode(member, inner, kind) {
            const methodPairs = methodPairsStack[methodPairsStack.length - 1];
            const { name } = (0, util_1.getNameFromMember)(member, context.sourceCode);
            methodPairs.set(name, {
                ...methodPairs.get(name),
                [kind]: inner,
            });
        }
        return {
            ':matches(ClassBody, TSInterfaceBody, TSTypeLiteral):exit'() {
                const methodPairs = methodPairsStack[methodPairsStack.length - 1];
                for (const pair of methodPairs.values()) {
                    if (!pair.get || !pair.set) {
                        continue;
                    }
                    const getter = pair.get;
                    const getType = services.getTypeAtLocation(getter);
                    const setType = services.getTypeAtLocation(pair.set.params[0]);
                    if (!checker.isTypeAssignableTo(getType, setType)) {
                        context.report({
                            node: getter.returnType.typeAnnotation,
                            messageId: 'mismatch',
                        });
                    }
                }
                methodPairsStack.pop();
            },
            ':matches(MethodDefinition, TSMethodSignature)[kind=get]'(node) {
                const getter = getMethodFromNode(node);
                if (getter.returnType) {
                    addPropertyNode(node, getter, 'get');
                }
            },
            ':matches(MethodDefinition, TSMethodSignature)[kind=set]'(node) {
                const setter = getMethodFromNode(node);
                if (setter.params.length === 1) {
                    addPropertyNode(node, setter, 'set');
                }
            },
            'ClassBody, TSInterfaceBody, TSTypeLiteral'() {
                methodPairsStack.push(new Map());
            },
        };
    },
});
function getMethodFromNode(node) {
    return node.type === utils_1.AST_NODE_TYPES.TSMethodSignature ? node : node.value;
}
//# sourceMappingURL=related-getter-setter-pairs.js.map