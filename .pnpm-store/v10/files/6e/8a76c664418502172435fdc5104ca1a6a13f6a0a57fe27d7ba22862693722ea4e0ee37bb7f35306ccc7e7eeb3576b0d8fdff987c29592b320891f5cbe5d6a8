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
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'require-array-sort-compare',
    defaultOptions: [
        {
            ignoreStringArrays: false,
        },
    ],
    meta: {
        type: 'problem',
        docs: {
            description: 'Require `Array#sort` calls to always provide a `compareFunction`',
            recommended: false,
            requiresTypeChecking: true,
        },
        messages: {
            requireCompare: "Require 'compare' argument.",
        },
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreStringArrays: {
                        description: 'Whether to ignore arrays in which all elements are strings.',
                        type: 'boolean',
                    },
                },
            },
        ],
    },
    create(context, [options]) {
        const service = util.getParserServices(context);
        const checker = service.program.getTypeChecker();
        /**
         * Check if a given node is an array which all elements are string.
         * @param node
         */
        function isStringArrayNode(node) {
            const type = checker.getTypeAtLocation(service.esTreeNodeToTSNodeMap.get(node));
            if (checker.isArrayType(type) || checker.isTupleType(type)) {
                const typeArgs = util.getTypeArguments(type, checker);
                return typeArgs.every(arg => util.getTypeName(checker, arg) === 'string');
            }
            return false;
        }
        return {
            "CallExpression[arguments.length=0] > MemberExpression[property.name='sort'][computed=false]"(callee) {
                const tsNode = service.esTreeNodeToTSNodeMap.get(callee.object);
                const calleeObjType = util.getConstrainedTypeAtLocation(checker, tsNode);
                if (options.ignoreStringArrays && isStringArrayNode(callee.object)) {
                    return;
                }
                if (util.isTypeArrayTypeOrUnionOfArrayTypes(calleeObjType, checker)) {
                    context.report({ node: callee.parent, messageId: 'requireCompare' });
                }
            },
        };
    },
});
//# sourceMappingURL=require-array-sort-compare.js.map