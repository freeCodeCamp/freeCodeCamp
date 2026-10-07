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
const tsutils = __importStar(require("tsutils"));
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
const shared_1 = require("./enum-utils/shared");
/**
 * @returns Whether the right type is an unsafe comparison against any left type.
 */
function typeViolates(leftTypeParts, right) {
    const leftValueKinds = new Set(leftTypeParts.map(getEnumValueType));
    return ((leftValueKinds.has(ts.TypeFlags.Number) &&
        tsutils.isTypeFlagSet(right, ts.TypeFlags.Number | ts.TypeFlags.NumberLike)) ||
        (leftValueKinds.has(ts.TypeFlags.String) &&
            tsutils.isTypeFlagSet(right, ts.TypeFlags.String | ts.TypeFlags.StringLike)));
}
/**
 * @returns What type a type's enum value is (number or string), if either.
 */
function getEnumValueType(type) {
    return util.isTypeFlagSet(type, ts.TypeFlags.EnumLike)
        ? util.isTypeFlagSet(type, ts.TypeFlags.NumberLiteral)
            ? ts.TypeFlags.Number
            : ts.TypeFlags.String
        : undefined;
}
exports.default = util.createRule({
    name: 'no-unsafe-enum-comparison',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow comparing an enum value with a non-enum value',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        messages: {
            mismatched: 'The two values in this comparison do not have a shared enum type.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const parserServices = util.getParserServices(context);
        const typeChecker = parserServices.program.getTypeChecker();
        function getTypeFromNode(node) {
            return typeChecker.getTypeAtLocation(parserServices.esTreeNodeToTSNodeMap.get(node));
        }
        return {
            'BinaryExpression[operator=/=|<|>/]'(node) {
                const left = getTypeFromNode(node.left);
                const right = getTypeFromNode(node.right);
                // Allow comparisons that don't have anything to do with enums:
                //
                // ```ts
                // 1 === 2;
                // ```
                const leftEnumTypes = (0, shared_1.getEnumTypes)(typeChecker, left);
                const rightEnumTypes = new Set((0, shared_1.getEnumTypes)(typeChecker, right));
                if (leftEnumTypes.length === 0 && rightEnumTypes.size === 0) {
                    return;
                }
                // Allow comparisons that share an enum type:
                //
                // ```ts
                // Fruit.Apple === Fruit.Banana;
                // ```
                for (const leftEnumType of leftEnumTypes) {
                    if (rightEnumTypes.has(leftEnumType)) {
                        return;
                    }
                }
                const leftTypeParts = tsutils.unionTypeParts(left);
                const rightTypeParts = tsutils.unionTypeParts(right);
                // If a type exists in both sides, we consider this comparison safe:
                //
                // ```ts
                // declare const fruit: Fruit.Apple | 0;
                // fruit === 0;
                // ```
                for (const leftTypePart of leftTypeParts) {
                    if (rightTypeParts.includes(leftTypePart)) {
                        return;
                    }
                }
                if (typeViolates(leftTypeParts, right) ||
                    typeViolates(rightTypeParts, left)) {
                    context.report({
                        messageId: 'mismatched',
                        node,
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-enum-comparison.js.map