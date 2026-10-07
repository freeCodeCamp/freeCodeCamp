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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('prefer-destructuring');
const destructuringTypeConfig = {
    type: 'object',
    additionalProperties: false,
    properties: {
        array: {
            type: 'boolean',
        },
        object: {
            type: 'boolean',
        },
    },
};
const schema = [
    {
        oneOf: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    AssignmentExpression: destructuringTypeConfig,
                    VariableDeclarator: destructuringTypeConfig,
                },
            },
            destructuringTypeConfig,
        ],
    },
    {
        type: 'object',
        additionalProperties: false,
        properties: {
            enforceForDeclarationWithTypeAnnotation: {
                type: 'boolean',
                description: 'Whether to enforce destructuring on variable declarations with type annotations.',
            },
            enforceForRenamedProperties: {
                type: 'boolean',
                description: 'Whether to enforce destructuring that use a different variable name than the property name.',
            },
        },
    },
];
exports.default = (0, util_1.createRule)({
    name: 'prefer-destructuring',
    meta: {
        type: 'suggestion',
        // defaultOptions, -- base rule does not use defaultOptions
        docs: {
            description: 'Require destructuring from arrays and/or objects',
            extendsBaseRule: true,
            frozen: true,
            requiresTypeChecking: true,
        },
        fixable: baseRule.meta.fixable,
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
        schema,
    },
    defaultOptions: [
        {
            AssignmentExpression: {
                array: true,
                object: true,
            },
            VariableDeclarator: {
                array: true,
                object: true,
            },
        },
        {},
    ],
    create(context, [enabledTypes, options]) {
        const { enforceForDeclarationWithTypeAnnotation = false, enforceForRenamedProperties = false, } = options;
        const { esTreeNodeToTSNodeMap, program } = (0, util_1.getParserServices)(context);
        const typeChecker = program.getTypeChecker();
        const baseRules = baseRule.create(context);
        let baseRulesWithoutFixCache = null;
        return {
            AssignmentExpression(node) {
                if (node.operator !== '=') {
                    return;
                }
                performCheck(node.left, node.right, node);
            },
            VariableDeclarator(node) {
                performCheck(node.id, node.init, node);
            },
        };
        function performCheck(leftNode, rightNode, reportNode) {
            const rules = leftNode.type === utils_1.AST_NODE_TYPES.Identifier &&
                leftNode.typeAnnotation == null
                ? baseRules
                : baseRulesWithoutFix();
            if ((leftNode.type === utils_1.AST_NODE_TYPES.ArrayPattern ||
                leftNode.type === utils_1.AST_NODE_TYPES.Identifier ||
                leftNode.type === utils_1.AST_NODE_TYPES.ObjectPattern) &&
                leftNode.typeAnnotation != null &&
                !enforceForDeclarationWithTypeAnnotation) {
                return;
            }
            if (rightNode != null &&
                isArrayLiteralIntegerIndexAccess(rightNode) &&
                rightNode.object.type !== utils_1.AST_NODE_TYPES.Super) {
                const tsObj = esTreeNodeToTSNodeMap.get(rightNode.object);
                const objType = typeChecker.getTypeAtLocation(tsObj);
                if (!isTypeAnyOrIterableType(objType, typeChecker)) {
                    if (!enforceForRenamedProperties ||
                        !getNormalizedEnabledType(reportNode.type, 'object')) {
                        return;
                    }
                    context.report({
                        node: reportNode,
                        messageId: 'preferDestructuring',
                        data: { type: 'object' },
                    });
                    return;
                }
            }
            if (reportNode.type === utils_1.AST_NODE_TYPES.AssignmentExpression) {
                rules.AssignmentExpression(reportNode);
            }
            else {
                rules.VariableDeclarator(reportNode);
            }
        }
        function getNormalizedEnabledType(nodeType, destructuringType) {
            if ('object' in enabledTypes || 'array' in enabledTypes) {
                return enabledTypes[destructuringType];
            }
            return enabledTypes[nodeType][destructuringType];
        }
        function baseRulesWithoutFix() {
            baseRulesWithoutFixCache ??= baseRule.create(noFixContext(context));
            return baseRulesWithoutFixCache;
        }
    },
});
function noFixContext(context) {
    const customContext = {
        report: (descriptor) => {
            context.report({
                ...descriptor,
                fix: undefined,
            });
        },
    };
    // we can't directly proxy `context` because its `report` property is non-configurable
    // and non-writable. So we proxy `customContext` and redirect all
    // property access to the original context except for `report`
    return new Proxy(customContext, {
        get(target, path, receiver) {
            if (path !== 'report') {
                return Reflect.get(context, path, receiver);
            }
            return Reflect.get(target, path, receiver);
        },
    });
}
function isTypeAnyOrIterableType(type, typeChecker) {
    if ((0, util_1.isTypeAnyType)(type)) {
        return true;
    }
    if (!type.isUnion()) {
        const iterator = tsutils.getWellKnownSymbolPropertyOfType(type, 'iterator', typeChecker);
        return iterator != null;
    }
    return type.types.every(t => isTypeAnyOrIterableType(t, typeChecker));
}
function isArrayLiteralIntegerIndexAccess(node) {
    if (node.type !== utils_1.AST_NODE_TYPES.MemberExpression) {
        return false;
    }
    if (node.property.type !== utils_1.AST_NODE_TYPES.Literal) {
        return false;
    }
    return Number.isInteger(node.property.value);
}
//# sourceMappingURL=prefer-destructuring.js.map