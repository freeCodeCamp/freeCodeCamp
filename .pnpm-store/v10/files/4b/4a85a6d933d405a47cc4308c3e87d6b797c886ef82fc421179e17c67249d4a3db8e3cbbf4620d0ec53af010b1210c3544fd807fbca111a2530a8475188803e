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
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-unsafe-type-assertion',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow type assertions that narrow a type',
            requiresTypeChecking: true,
        },
        messages: {
            unsafeOfAnyTypeAssertion: 'Unsafe assertion from {{type}} detected: consider using type guards or a safer assertion.',
            unsafeToAnyTypeAssertion: 'Unsafe assertion to {{type}} detected: consider using a more specific type to ensure safety.',
            unsafeToUnconstrainedTypeAssertion: "Unsafe type assertion: '{{type}}' could be instantiated with an arbitrary type which could be unrelated to the original type.",
            unsafeTypeAssertion: "Unsafe type assertion: type '{{type}}' is more narrow than the original type.",
            unsafeTypeAssertionAssignableToConstraint: "Unsafe type assertion: the original type is assignable to the constraint of type '{{type}}', but '{{type}}' could be instantiated with a different subtype of its constraint.",
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        function getAnyTypeName(type) {
            return tsutils.isIntrinsicErrorType(type) ? 'error typed' : '`any`';
        }
        function isObjectLiteralType(type) {
            return (tsutils.isObjectType(type) &&
                tsutils.isObjectFlagSet(type, ts.ObjectFlags.ObjectLiteral));
        }
        function checkExpression(node) {
            const expressionType = services.getTypeAtLocation(node.expression);
            const assertedType = services.getTypeAtLocation(node.typeAnnotation);
            if (expressionType === assertedType) {
                return;
            }
            // handle cases when asserting unknown ==> any.
            if ((0, util_1.isTypeAnyType)(assertedType) && (0, util_1.isTypeUnknownType)(expressionType)) {
                context.report({
                    node,
                    messageId: 'unsafeToAnyTypeAssertion',
                    data: {
                        type: '`any`',
                    },
                });
                return;
            }
            const unsafeExpressionAny = (0, util_1.isUnsafeAssignment)(expressionType, assertedType, checker, node.expression);
            if (unsafeExpressionAny) {
                context.report({
                    node,
                    messageId: 'unsafeOfAnyTypeAssertion',
                    data: {
                        type: getAnyTypeName(unsafeExpressionAny.sender),
                    },
                });
                return;
            }
            const unsafeAssertedAny = (0, util_1.isUnsafeAssignment)(assertedType, expressionType, checker, node.typeAnnotation);
            if (unsafeAssertedAny) {
                context.report({
                    node,
                    messageId: 'unsafeToAnyTypeAssertion',
                    data: {
                        type: getAnyTypeName(unsafeAssertedAny.sender),
                    },
                });
                return;
            }
            // Use the widened type in case of an object literal so `isTypeAssignableTo()`
            // won't fail on excess property check.
            const expressionWidenedType = isObjectLiteralType(expressionType)
                ? checker.getWidenedType(expressionType)
                : expressionType;
            let isAssertionSafe;
            try {
                isAssertionSafe = checker.isTypeAssignableTo(expressionWidenedType, assertedType);
            }
            catch {
                // workaround for https://github.com/microsoft/TypeScript/issues/62933
                return;
            }
            if (isAssertionSafe) {
                return;
            }
            // Produce a more specific error message when targeting a type parameter
            if (tsutils.isTypeParameter(assertedType)) {
                const assertedTypeConstraint = checker.getBaseConstraintOfType(assertedType);
                if (!assertedTypeConstraint) {
                    // asserting to an unconstrained type parameter is unsafe
                    context.report({
                        node,
                        messageId: 'unsafeToUnconstrainedTypeAssertion',
                        data: {
                            type: checker.typeToString(assertedType),
                        },
                    });
                    return;
                }
                // special case message if the original type is assignable to the
                // constraint of the target type parameter
                const isAssignableToConstraint = checker.isTypeAssignableTo(expressionWidenedType, assertedTypeConstraint);
                if (isAssignableToConstraint) {
                    context.report({
                        node,
                        messageId: 'unsafeTypeAssertionAssignableToConstraint',
                        data: {
                            type: checker.typeToString(assertedType),
                        },
                    });
                    return;
                }
            }
            // General error message
            context.report({
                node,
                messageId: 'unsafeTypeAssertion',
                data: {
                    type: checker.typeToString(assertedType),
                },
            });
        }
        return {
            'TSAsExpression, TSTypeAssertion'(node) {
                checkExpression(node);
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-type-assertion.js.map