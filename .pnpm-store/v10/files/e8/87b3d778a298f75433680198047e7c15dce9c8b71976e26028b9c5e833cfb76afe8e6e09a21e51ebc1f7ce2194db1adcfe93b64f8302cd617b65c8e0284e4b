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
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
const assertionFunctionUtils_1 = require("../util/assertionFunctionUtils");
// #region
const nullishFlag = ts.TypeFlags.Undefined | ts.TypeFlags.Null;
function isNullishType(type) {
    return tsutils.isTypeFlagSet(type, nullishFlag);
}
function isAlwaysNullish(type) {
    return tsutils.unionConstituents(type).every(isNullishType);
}
/**
 * Note that this differs from {@link isNullableType} in that it doesn't consider
 * `any` or `unknown` to be nullable.
 */
function isPossiblyNullish(type) {
    return tsutils
        .unionConstituents(type)
        .some(t => isNullishType(t) || (0, util_1.isTypeFlagSet)(t, ts.TypeFlags.Void));
}
/**
 * Note that this differs from {@link isNullableType} in that it doesn't consider
 * `any` or `unknown` to be nullable.
 */
function isPossiblyNonNullish(type) {
    return tsutils
        .unionConstituents(type)
        .some(t => !isNullishType(t) && !(0, util_1.isTypeFlagSet)(t, ts.TypeFlags.Void));
}
function toStaticValue(type) {
    // type.isLiteral() only covers numbers/bigints and strings, hence the rest of the branches.
    if (tsutils.isBooleanLiteralType(type)) {
        return { value: tsutils.isTrueLiteralType(type) };
    }
    if (type.flags === ts.TypeFlags.Undefined) {
        return { value: undefined };
    }
    if (type.flags === ts.TypeFlags.Null) {
        return { value: null };
    }
    if (type.isLiteral()) {
        return { value: (0, util_1.getValueOfLiteralType)(type) };
    }
    return undefined;
}
const BOOL_OPERATORS = new Set([
    '<',
    '>',
    '<=',
    '>=',
    '==',
    '===',
    '!=',
    '!==',
]);
function isBoolOperator(operator) {
    return BOOL_OPERATORS.has(operator);
}
function booleanComparison(left, operator, right) {
    switch (operator) {
        case '!=':
            // eslint-disable-next-line eqeqeq -- intentionally comparing with loose equality
            return left != right;
        case '!==':
            return left !== right;
        case '<':
            // @ts-expect-error: we don't care if the comparison seems unintentional.
            return left < right;
        case '<=':
            // @ts-expect-error: we don't care if the comparison seems unintentional.
            return left <= right;
        case '==':
            // eslint-disable-next-line eqeqeq -- intentionally comparing with loose equality
            return left == right;
        case '===':
            return left === right;
        case '>':
            // @ts-expect-error: we don't care if the comparison seems unintentional.
            return left > right;
        case '>=':
            // @ts-expect-error: we don't care if the comparison seems unintentional.
            return left >= right;
    }
}
function isOnlyUsedForTruthiness(node) {
    const parent = node.parent;
    switch (parent.type) {
        case utils_1.AST_NODE_TYPES.ConditionalExpression:
        case utils_1.AST_NODE_TYPES.DoWhileStatement:
        case utils_1.AST_NODE_TYPES.ForStatement:
        case utils_1.AST_NODE_TYPES.IfStatement:
        case utils_1.AST_NODE_TYPES.WhileStatement:
            return parent.test === node;
        case utils_1.AST_NODE_TYPES.LogicalExpression:
            return ((parent.operator === '&&' && parent.left === node) ||
                isOnlyUsedForTruthiness(parent));
        case utils_1.AST_NODE_TYPES.UnaryExpression:
            return parent.operator === '!';
        default:
            return false;
    }
}
const constantLoopConditionsAllowedLiterals = new Set([
    true,
    false,
    1,
    0,
]);
exports.default = (0, util_1.createRule)({
    name: 'no-unnecessary-condition',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow conditionals where the type is always truthy or always falsy',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            alwaysFalsy: 'Unnecessary conditional, value is always falsy.',
            alwaysFalsyFunc: 'This callback should return a conditional, but return is always falsy.',
            alwaysNullish: 'Unnecessary conditional, left-hand side of `??` operator is always `null` or `undefined`.',
            alwaysTruthy: 'Unnecessary conditional, value is always truthy.',
            alwaysTruthyFunc: 'This callback should return a conditional, but return is always truthy.',
            comparisonBetweenLiteralTypes: 'Unnecessary conditional, comparison is always {{trueOrFalse}}, since `{{left}} {{operator}} {{right}}` is {{trueOrFalse}}.',
            never: 'Unnecessary conditional, value is `never`.',
            neverNullish: 'Unnecessary conditional, expected left-hand side of `??` operator to be possibly null or undefined.',
            neverOptionalChain: 'Unnecessary optional chain on a non-nullish value.',
            noOverlapBooleanExpression: 'Unnecessary conditional, the types have no overlap.',
            noStrictNullCheck: 'This rule requires the `strictNullChecks` compiler option to be turned on to function correctly.',
            suggestRemoveOptionalChain: 'Remove unnecessary optional chain',
            typeGuardAlreadyIsType: 'Unnecessary conditional, expression already has the type being checked by the {{typeGuardOrAssertionFunction}}.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowConstantLoopConditions: {
                        description: 'Whether to ignore constant loop conditions, such as `while (true)`.',
                        oneOf: [
                            {
                                type: 'boolean',
                                description: 'Always ignore or not ignore the loop conditions',
                            },
                            {
                                type: 'string',
                                description: 'Which situations to ignore constant conditions in.',
                                enum: ['always', 'never', 'only-allowed-literals'],
                            },
                        ],
                    },
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
                        type: 'boolean',
                        description: 'Whether to not error when running with a tsconfig that has strictNullChecks turned.',
                    },
                    checkTypePredicates: {
                        type: 'boolean',
                        description: 'Whether to check the asserted argument of a type predicate function for unnecessary conditions',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowConstantLoopConditions: 'never',
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            checkTypePredicates: false,
        },
    ],
    create(context, [{ allowConstantLoopConditions, allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing, checkTypePredicates, },]) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const compilerOptions = services.program.getCompilerOptions();
        const isStrictNullChecks = tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'strictNullChecks');
        const isNoUncheckedIndexedAccess = tsutils.isCompilerOptionEnabled(compilerOptions, 'noUncheckedIndexedAccess');
        const allowConstantLoopConditionsOption = normalizeAllowConstantLoopConditions(
        // https://github.com/typescript-eslint/typescript-eslint/issues/5439
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        allowConstantLoopConditions);
        if (!isStrictNullChecks &&
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing !== true) {
            context.report({
                loc: {
                    start: { column: 0, line: 0 },
                    end: { column: 0, line: 0 },
                },
                messageId: 'noStrictNullCheck',
            });
        }
        function nodeIsArrayType(node) {
            const nodeType = (0, util_1.getConstrainedTypeAtLocation)(services, node);
            return tsutils
                .unionConstituents(nodeType)
                .some(part => checker.isArrayType(part));
        }
        function nodeIsTupleType(node) {
            const nodeType = (0, util_1.getConstrainedTypeAtLocation)(services, node);
            return tsutils
                .unionConstituents(nodeType)
                .some(part => checker.isTupleType(part));
        }
        function isArrayIndexExpression(node) {
            return (
            // Is an index signature
            node.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                node.computed &&
                // ...into an array type
                (nodeIsArrayType(node.object) ||
                    // ... or a tuple type
                    (nodeIsTupleType(node.object) &&
                        // Exception: literal index into a tuple - will have a sound type
                        node.property.type !== utils_1.AST_NODE_TYPES.Literal)));
        }
        // Conditional is always necessary if it involves:
        //    `any` or `unknown` or a naked type variable
        function isConditionalAlwaysNecessary(type) {
            return tsutils
                .unionConstituents(type)
                .some(part => (0, util_1.isTypeAnyType)(part) ||
                (0, util_1.isTypeUnknownType)(part) ||
                (0, util_1.isTypeFlagSet)(part, ts.TypeFlags.TypeVariable));
        }
        function isNullableMemberExpression(node) {
            const objectType = services.getTypeAtLocation(node.object);
            if (node.computed) {
                const propertyType = services.getTypeAtLocation(node.property);
                return isNullablePropertyType(objectType, propertyType);
            }
            const property = node.property;
            // Get the actual property name, to account for private properties (this.#prop).
            const propertyName = context.sourceCode.getText(property);
            const propertyType = objectType
                .getProperties()
                .find(prop => prop.name === propertyName);
            return (propertyType != null &&
                tsutils.isSymbolFlagSet(propertyType, ts.SymbolFlags.Optional));
        }
        /**
         * Obtains the property types of the computed member expression
         * @param node The member expression
         * @returns The property types, unless the node isn't computed.
         */
        function getComputedMemberPropertyTypes(node) {
            if (!node.computed) {
                return undefined;
            }
            const objectType = (0, util_1.getConstrainedTypeAtLocation)(services, node.object);
            const propertyType = (0, util_1.getConstrainedTypeAtLocation)(services, node.property);
            const propertyTypes = [];
            for (const keyType of tsutils.unionConstituents(propertyType)) {
                if (!keyType.isStringLiteral() && !keyType.isNumberLiteral()) {
                    return undefined;
                }
                const selectedType = (0, util_1.getTypeOfPropertyOfName)(checker, objectType, String(keyType.value));
                if (!selectedType) {
                    return undefined;
                }
                propertyTypes.push(selectedType);
            }
            return propertyTypes;
        }
        /**
         * Verify if the node may have non-nullish properties
         * @param node The node to verify
         * @returns If it may have non-nullish properties, unless the node isn't a
         * MemberExpression
         */
        function hasPossiblyNonNullishComputedMemberProperty(node) {
            if (node.type !== utils_1.AST_NODE_TYPES.MemberExpression) {
                return false;
            }
            const propertyTypes = getComputedMemberPropertyTypes(node);
            if (propertyTypes == null) {
                return false;
            }
            return propertyTypes.some(isPossiblyNonNullish);
        }
        /**
         * Checks if a conditional node is necessary:
         * if the type of the node is always true or always false, it's not necessary.
         */
        function checkNode(expression, isUnaryNotArgument = false, node = expression) {
            // Check if the node is Unary Negation expression and handle it
            if (expression.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
                expression.operator === '!') {
                return checkNode(expression.argument, !isUnaryNotArgument, node);
            }
            // Since typescript array index signature types don't represent the
            //  possibility of out-of-bounds access, if we're indexing into an array
            //  just skip the check, to avoid false positives
            if (!isNoUncheckedIndexedAccess && isArrayIndexExpression(expression)) {
                return;
            }
            // Only check the right side when the logical expression is used for
            // truthiness, as the left side has already been checked by
            // checkLogicalExpressionForUnnecessaryConditionals.
            //
            // Unless the node is nullish coalescing, as it's common to use patterns like
            // `nullBool ?? true` to perform strict boolean checks. If we inspect the right
            // here, it'll usually be a constant condition on purpose.
            // In this case it's better to inspect the type of the expression as a whole.
            if (expression.type === utils_1.AST_NODE_TYPES.LogicalExpression &&
                expression.operator !== '??') {
                if (isOnlyUsedForTruthiness(expression)) {
                    checkNode(expression.right);
                }
                return;
            }
            const type = (0, util_1.getConstrainedTypeAtLocation)(services, expression);
            if (isConditionalAlwaysNecessary(type)) {
                return;
            }
            let messageId = null;
            if ((0, util_1.isTypeFlagSet)(type, ts.TypeFlags.Never)) {
                messageId = 'never';
            }
            else if (!(0, util_1.isPossiblyTruthy)(type)) {
                messageId = !isUnaryNotArgument ? 'alwaysFalsy' : 'alwaysTruthy';
            }
            else if (!(0, util_1.isPossiblyFalsy)(type)) {
                messageId = !isUnaryNotArgument ? 'alwaysTruthy' : 'alwaysFalsy';
            }
            if (messageId) {
                context.report({ node, messageId });
            }
        }
        function checkNodeForNullish(node) {
            const type = (0, util_1.getConstrainedTypeAtLocation)(services, node);
            // Conditional is always necessary if it involves `any`, `unknown` or a naked type parameter
            if ((0, util_1.isTypeFlagSet)(type, ts.TypeFlags.Any |
                ts.TypeFlags.Unknown |
                ts.TypeFlags.TypeParameter |
                ts.TypeFlags.TypeVariable)) {
                return;
            }
            let messageId = null;
            if ((0, util_1.isTypeFlagSet)(type, ts.TypeFlags.Never)) {
                messageId = 'never';
            }
            else if (!isPossiblyNullish(type) &&
                !(node.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                    isNullableMemberExpression(node))) {
                // Since typescript array index signature types don't represent the
                //  possibility of out-of-bounds access, if we're indexing into an array
                //  just skip the check, to avoid false positives
                if (isNoUncheckedIndexedAccess ||
                    (!isArrayIndexExpression(node) &&
                        !(node.type === utils_1.AST_NODE_TYPES.ChainExpression &&
                            node.expression.type !== utils_1.AST_NODE_TYPES.TSNonNullExpression &&
                            optionChainContainsOptionArrayIndex(node.expression)))) {
                    messageId = 'neverNullish';
                }
            }
            else if (isAlwaysNullish(type) &&
                !hasPossiblyNonNullishComputedMemberProperty(node)) {
                messageId = 'alwaysNullish';
            }
            if (messageId) {
                context.report({ node, messageId });
            }
        }
        /**
         * Checks that a binary expression is necessarily conditional, reports otherwise.
         * If both sides of the binary expression are literal values, it's not a necessary condition.
         *
         * NOTE: It's also unnecessary if the types that don't overlap at all
         *    but that case is handled by the Typescript compiler itself.
         *    Known exceptions:
         *      - https://github.com/microsoft/TypeScript/issues/32627
         *      - https://github.com/microsoft/TypeScript/issues/37160 (handled)
         */
        function checkIfBoolExpressionIsNecessaryConditional(node, left, right, operator) {
            const leftType = (0, util_1.getConstrainedTypeAtLocation)(services, left);
            const rightType = (0, util_1.getConstrainedTypeAtLocation)(services, right);
            const leftStaticValue = toStaticValue(leftType);
            const rightStaticValue = toStaticValue(rightType);
            if (leftStaticValue != null && rightStaticValue != null) {
                const conditionIsTrue = booleanComparison(leftStaticValue.value, operator, rightStaticValue.value);
                context.report({
                    node,
                    messageId: 'comparisonBetweenLiteralTypes',
                    data: {
                        left: checker.typeToString(leftType),
                        operator,
                        right: checker.typeToString(rightType),
                        trueOrFalse: conditionIsTrue ? 'true' : 'false',
                    },
                });
                return;
            }
            // Workaround for https://github.com/microsoft/TypeScript/issues/37160
            if (isStrictNullChecks) {
                const UNDEFINED = ts.TypeFlags.Undefined;
                const NULL = ts.TypeFlags.Null;
                const VOID = ts.TypeFlags.Void;
                const isComparable = (type, flag) => {
                    // Allow comparison to `any`, `unknown` or a naked type parameter.
                    flag |=
                        ts.TypeFlags.Any |
                            ts.TypeFlags.Unknown |
                            ts.TypeFlags.TypeParameter |
                            ts.TypeFlags.TypeVariable;
                    // Allow loose comparison to nullish values.
                    if (operator === '==' || operator === '!=') {
                        flag |= NULL | UNDEFINED | VOID;
                    }
                    return (0, util_1.isTypeFlagSet)(type, flag);
                };
                if ((leftType.flags === UNDEFINED &&
                    !isComparable(rightType, UNDEFINED | VOID)) ||
                    (rightType.flags === UNDEFINED &&
                        !isComparable(leftType, UNDEFINED | VOID)) ||
                    (leftType.flags === NULL && !isComparable(rightType, NULL)) ||
                    (rightType.flags === NULL && !isComparable(leftType, NULL))) {
                    context.report({ node, messageId: 'noOverlapBooleanExpression' });
                    return;
                }
            }
        }
        /**
         * Checks that a logical expression contains a boolean, reports otherwise.
         */
        function checkLogicalExpressionForUnnecessaryConditionals(node) {
            if (node.operator === '??') {
                checkNodeForNullish(node.left);
                return;
            }
            // Only checks the left side, since the right side might not be "conditional" at all.
            // The right side will be checked if the LogicalExpression is used in a conditional context
            checkNode(node.left);
        }
        /**
         * Checks that a testable expression of a loop is necessarily conditional, reports otherwise.
         */
        function checkIfLoopIsNecessaryConditional(node) {
            if (node.test == null) {
                // e.g. `for(;;)`
                return;
            }
            if (allowConstantLoopConditionsOption === 'only-allowed-literals' &&
                node.test.type === utils_1.AST_NODE_TYPES.Literal &&
                constantLoopConditionsAllowedLiterals.has(node.test.value)) {
                return;
            }
            if (allowConstantLoopConditionsOption === 'always' &&
                tsutils.isTrueLiteralType((0, util_1.getConstrainedTypeAtLocation)(services, node.test))) {
                return;
            }
            checkNode(node.test);
        }
        function checkCallExpression(node) {
            if (checkTypePredicates) {
                const truthinessAssertedArgument = (0, assertionFunctionUtils_1.findTruthinessAssertedArgument)(services, node);
                if (truthinessAssertedArgument != null) {
                    checkNode(truthinessAssertedArgument);
                }
                const typeGuardAssertedArgument = (0, assertionFunctionUtils_1.findTypeGuardAssertedArgument)(services, node);
                if (typeGuardAssertedArgument != null) {
                    const typeOfArgument = (0, util_1.getConstrainedTypeAtLocation)(services, typeGuardAssertedArgument.argument);
                    if (
                    // Skip `any` — it is assignable to everything, producing
                    // false positives for meaningful runtime type guards.
                    !tsutils.isTypeFlagSet(typeOfArgument, ts.TypeFlags.Any | ts.TypeFlags.Unknown) &&
                        checker.isTypeAssignableTo(typeOfArgument, typeGuardAssertedArgument.type) &&
                        // Only flag if the types are mutually assignable (i.e. equivalent,
                        // like Narrower ↔ Wider with optional props) or the predicate type
                        // is a union that the argument is a strict subtype of.  This avoids
                        // false positives with structural subtypes whose extra members are
                        // all optional in the *predicate* type (e.g. custom MappedType
                        // interfaces extending ts.Type).
                        (checker.isTypeAssignableTo(typeGuardAssertedArgument.type, typeOfArgument) ||
                            typeGuardAssertedArgument.type.isUnion())) {
                        context.report({
                            node: typeGuardAssertedArgument.argument,
                            messageId: 'typeGuardAlreadyIsType',
                            data: {
                                typeGuardOrAssertionFunction: typeGuardAssertedArgument.asserts
                                    ? 'assertion function'
                                    : 'type guard',
                            },
                        });
                    }
                }
            }
            // If this is something like arr.filter(x => /*condition*/), check `condition`
            if ((0, util_1.isArrayMethodCallWithPredicate)(context, services, node) &&
                node.arguments.length) {
                const callback = node.arguments[0];
                // Inline defined functions
                if (callback.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
                    callback.type === utils_1.AST_NODE_TYPES.FunctionExpression) {
                    // Two special cases, where we can directly check the node that's returned:
                    // () => something
                    if (callback.body.type !== utils_1.AST_NODE_TYPES.BlockStatement) {
                        return checkNode(callback.body);
                    }
                    // () => { return something; }
                    const callbackBody = callback.body.body;
                    if (callbackBody.length === 1 &&
                        callbackBody[0].type === utils_1.AST_NODE_TYPES.ReturnStatement &&
                        callbackBody[0].argument) {
                        return checkNode(callbackBody[0].argument);
                    }
                    // Potential enhancement: could use code-path analysis to check
                    //   any function with a single return statement
                    // (Value to complexity ratio is dubious however)
                }
                // Otherwise just do type analysis on the function as a whole.
                const returnTypes = tsutils
                    .getCallSignaturesOfType((0, util_1.getConstrainedTypeAtLocation)(services, callback))
                    .map(sig => sig.getReturnType());
                if (returnTypes.length === 0) {
                    // Not a callable function, e.g. `any`
                    return;
                }
                let hasFalsyReturnTypes = false;
                let hasTruthyReturnTypes = false;
                for (const type of returnTypes) {
                    const { constraintType } = (0, util_1.getConstraintInfo)(checker, type);
                    // Predicate is always necessary if it involves `any` or `unknown`
                    if (!constraintType ||
                        (0, util_1.isTypeAnyType)(constraintType) ||
                        (0, util_1.isTypeUnknownType)(constraintType)) {
                        return;
                    }
                    if ((0, util_1.isPossiblyFalsy)(constraintType)) {
                        hasFalsyReturnTypes = true;
                    }
                    if ((0, util_1.isPossiblyTruthy)(constraintType)) {
                        hasTruthyReturnTypes = true;
                    }
                    // bail early if both a possibly-truthy and a possibly-falsy have been detected
                    if (hasFalsyReturnTypes && hasTruthyReturnTypes) {
                        return;
                    }
                }
                if (!hasFalsyReturnTypes) {
                    return context.report({
                        node: callback,
                        messageId: 'alwaysTruthyFunc',
                    });
                }
                if (!hasTruthyReturnTypes) {
                    return context.report({
                        node: callback,
                        messageId: 'alwaysFalsyFunc',
                    });
                }
            }
        }
        // Recursively searches an optional chain for an array index expression
        //  Has to search the entire chain, because an array index will "infect" the rest of the types
        //  Example:
        //  ```
        //  [{x: {y: "z"} }][n] // type is {x: {y: "z"}}
        //    ?.x // type is {y: "z"}
        //    ?.y // This access is considered "unnecessary" according to the types
        //  ```
        function optionChainContainsOptionArrayIndex(node) {
            const lhsNode = node.type === utils_1.AST_NODE_TYPES.CallExpression ? node.callee : node.object;
            if (node.optional && isArrayIndexExpression(lhsNode)) {
                return true;
            }
            if (lhsNode.type === utils_1.AST_NODE_TYPES.MemberExpression ||
                lhsNode.type === utils_1.AST_NODE_TYPES.CallExpression) {
                return optionChainContainsOptionArrayIndex(lhsNode);
            }
            return false;
        }
        function isNullablePropertyType(objType, propertyType) {
            if (propertyType.isUnion()) {
                return propertyType.types.some(type => isNullablePropertyType(objType, type));
            }
            if (propertyType.isNumberLiteral() || propertyType.isStringLiteral()) {
                const propType = (0, util_1.getTypeOfPropertyOfName)(checker, objType, propertyType.value.toString());
                if (propType) {
                    return (0, util_1.isNullableType)(propType);
                }
            }
            const typeName = (0, util_1.getTypeName)(checker, propertyType);
            return checker
                .getIndexInfosOfType(objType)
                .some(info => (0, util_1.getTypeName)(checker, info.keyType) === typeName);
        }
        // Checks whether a member expression is nullable or not regardless of it's previous node.
        //  Example:
        //  ```
        //  // 'bar' is nullable if 'foo' is null.
        //  // but this function checks regardless of 'foo' type, so returns 'true'.
        //  declare const foo: { bar : { baz: string } } | null
        //  foo?.bar;
        //  ```
        function isMemberExpressionNullableOriginFromObject(node) {
            const prevType = (0, util_1.getConstrainedTypeAtLocation)(services, node.object);
            const property = node.property;
            if (prevType.isUnion() && (0, util_1.isIdentifier)(property)) {
                const isOwnNullable = prevType.types.some(type => {
                    if (node.computed) {
                        const propertyType = (0, util_1.getConstrainedTypeAtLocation)(services, node.property);
                        return isNullablePropertyType(type, propertyType);
                    }
                    const propType = (0, util_1.getTypeOfPropertyOfName)(checker, type, property.name);
                    if (propType) {
                        return (0, util_1.isNullableType)(propType);
                    }
                    const indexInfo = checker.getIndexInfosOfType(type);
                    return indexInfo.some(info => {
                        const isStringTypeName = (0, util_1.getTypeName)(checker, info.keyType) === 'string';
                        return (isStringTypeName &&
                            (isNoUncheckedIndexedAccess || (0, util_1.isNullableType)(info.type)));
                    });
                });
                return !isOwnNullable && (0, util_1.isNullableType)(prevType);
            }
            return false;
        }
        function isCallExpressionNullableOriginFromCallee(node) {
            const prevType = (0, util_1.getConstrainedTypeAtLocation)(services, node.callee);
            if (prevType.isUnion()) {
                const isOwnNullable = prevType.types.some(type => {
                    const signatures = type.getCallSignatures();
                    return signatures.some(sig => (0, util_1.isNullableType)(sig.getReturnType()));
                });
                return !isOwnNullable && (0, util_1.isNullableType)(prevType);
            }
            return false;
        }
        function isOptionableExpression(node) {
            const type = (0, util_1.getConstrainedTypeAtLocation)(services, node);
            const isOwnNullable = node.type === utils_1.AST_NODE_TYPES.MemberExpression
                ? !isMemberExpressionNullableOriginFromObject(node)
                : node.type === utils_1.AST_NODE_TYPES.CallExpression
                    ? !isCallExpressionNullableOriginFromCallee(node)
                    : true;
            return (isConditionalAlwaysNecessary(type) ||
                (isOwnNullable && (0, util_1.isNullableType)(type)));
        }
        function checkOptionalChain(node, beforeOperator, fix) {
            // We only care if this step in the chain is optional. If just descend
            // from an optional chain, then that's fine.
            if (!node.optional) {
                return;
            }
            // Since typescript array index signature types don't represent the
            //  possibility of out-of-bounds access, if we're indexing into an array
            //  just skip the check, to avoid false positives
            if (!isNoUncheckedIndexedAccess &&
                optionChainContainsOptionArrayIndex(node)) {
                return;
            }
            const nodeToCheck = node.type === utils_1.AST_NODE_TYPES.CallExpression ? node.callee : node.object;
            if (isOptionableExpression(nodeToCheck)) {
                return;
            }
            const questionDotOperator = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(beforeOperator, token => token.type === utils_1.AST_TOKEN_TYPES.Punctuator && token.value === '?.'), util_1.NullThrowsReasons.MissingToken('operator', node.type));
            context.report({
                loc: questionDotOperator.loc,
                node,
                messageId: 'neverOptionalChain',
                suggest: [
                    {
                        messageId: 'suggestRemoveOptionalChain',
                        fix(fixer) {
                            return fixer.replaceText(questionDotOperator, fix);
                        },
                    },
                ],
            });
        }
        function checkOptionalMemberExpression(node) {
            checkOptionalChain(node, node.object, node.computed ? '' : '.');
        }
        function checkOptionalCallExpression(node) {
            checkOptionalChain(node, node.callee, '');
        }
        function checkAssignmentExpression(node) {
            // Similar to checkLogicalExpressionForUnnecessaryConditionals, since
            // a ||= b is equivalent to a || (a = b)
            if (['&&=', '||='].includes(node.operator)) {
                checkNode(node.left);
            }
            else if (node.operator === '??=') {
                checkNodeForNullish(node.left);
            }
        }
        return {
            AssignmentExpression: checkAssignmentExpression,
            BinaryExpression(node) {
                const { operator } = node;
                if (isBoolOperator(operator)) {
                    checkIfBoolExpressionIsNecessaryConditional(node, node.left, node.right, operator);
                }
            },
            CallExpression: checkCallExpression,
            'CallExpression[optional = true]': checkOptionalCallExpression,
            ConditionalExpression: (node) => checkNode(node.test),
            DoWhileStatement: checkIfLoopIsNecessaryConditional,
            ForStatement: checkIfLoopIsNecessaryConditional,
            IfStatement: (node) => checkNode(node.test),
            LogicalExpression: checkLogicalExpressionForUnnecessaryConditionals,
            'MemberExpression[optional = true]': checkOptionalMemberExpression,
            SwitchCase({ parent, test }) {
                // only check `case ...:`, not `default:`
                if (test) {
                    checkIfBoolExpressionIsNecessaryConditional(test, parent.discriminant, test, '===');
                }
            },
            WhileStatement: checkIfLoopIsNecessaryConditional,
        };
    },
});
function normalizeAllowConstantLoopConditions(allowConstantLoopConditions) {
    if (allowConstantLoopConditions === true) {
        return 'always';
    }
    if (allowConstantLoopConditions === false) {
        return 'never';
    }
    return allowConstantLoopConditions;
}
//# sourceMappingURL=no-unnecessary-condition.js.map