"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'require-array-sort-compare',
    meta: {
        type: 'problem',
        docs: {
            description: 'Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`',
            requiresTypeChecking: true,
        },
        messages: {
            requireCompare: "Require 'compare' argument.",
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ignoreStringArrays: {
                        type: 'boolean',
                        description: 'Whether to ignore arrays in which all elements are strings.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            ignoreStringArrays: true,
        },
    ],
    create(context, [options]) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        /**
         * Check if a given node is an array which all elements are string.
         */
        function isStringArrayNode(node) {
            const type = (0, util_1.getConstrainedTypeAtLocation)(services, node);
            if (checker.isArrayType(type) || checker.isTupleType(type)) {
                const typeArgs = checker.getTypeArguments(type);
                return typeArgs.every(arg => (0, util_1.getTypeName)(checker, arg) === 'string');
            }
            return false;
        }
        function checkSortArgument(callee) {
            if (!(0, util_1.isStaticMemberAccessOfValue)(callee, context, 'sort', 'toSorted')) {
                return;
            }
            const calleeObjType = (0, util_1.getConstrainedTypeAtLocation)(services, callee.object);
            if (options.ignoreStringArrays && isStringArrayNode(callee.object)) {
                return;
            }
            if ((0, util_1.isTypeArrayTypeOrUnionOfArrayTypes)(calleeObjType, checker)) {
                context.report({ node: callee.parent, messageId: 'requireCompare' });
            }
        }
        return {
            'CallExpression[arguments.length=0] > MemberExpression': checkSortArgument,
        };
    },
});
//# sourceMappingURL=require-array-sort-compare.js.map