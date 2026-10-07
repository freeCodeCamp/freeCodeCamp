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
const tsutils_1 = require("tsutils");
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
// Truthiness utilities
// #region
const isTruthyLiteral = (type) => (0, tsutils_1.isBooleanLiteralType)(type, true) || ((0, tsutils_1.isLiteralType)(type) && !!type.value);
const isPossiblyFalsy = (type) => (0, tsutils_1.unionTypeParts)(type)
    // PossiblyFalsy flag includes literal values, so exclude ones that
    // are definitely truthy
    .filter(t => !isTruthyLiteral(t))
    .some(type => (0, util_1.isTypeFlagSet)(type, ts.TypeFlags.PossiblyFalsy));
const isPossiblyTruthy = (type) => (0, tsutils_1.unionTypeParts)(type).some(type => !(0, tsutils_1.isFalsyType)(type));
// Nullish utilities
const nullishFlag = ts.TypeFlags.Undefined | ts.TypeFlags.Null;
const isNullishType = (type) => (0, util_1.isTypeFlagSet)(type, nullishFlag);
const isPossiblyNullish = (type) => (0, tsutils_1.unionTypeParts)(type).some(isNullishType);
const isAlwaysNullish = (type) => (0, tsutils_1.unionTypeParts)(type).every(isNullishType);
// isLiteralType only covers numbers and strings, this is a more exhaustive check.
const isLiteral = (type) => (0, tsutils_1.isBooleanLiteralType)(type, true) ||
    (0, tsutils_1.isBooleanLiteralType)(type, false) ||
    type.flags === ts.TypeFlags.Undefined ||
    type.flags === ts.TypeFlags.Null ||
    type.flags === ts.TypeFlags.Void ||
    (0, tsutils_1.isLiteralType)(type);
exports.default = (0, util_1.createRule)({
    name: 'no-unnecessary-condition',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow conditionals where the type is always truthy or always falsy',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowConstantLoopConditions: {
                        description: 'Whether to ignore constant loop conditions, such as `while (true)`.',
                        type: 'boolean',
                    },
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
                        description: 'Whether to not error when running with a tsconfig that has strictNullChecks turned.',
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
        fixable: 'code',
        messages: {
            alwaysTruthy: 'Unnecessary conditional, value is always truthy.',
            alwaysFalsy: 'Unnecessary conditional, value is always falsy.',
            alwaysTruthyFunc: 'This callback should return a conditional, but return is always truthy.',
            alwaysFalsyFunc: 'This callback should return a conditional, but return is always falsy.',
            neverNullish: 'Unnecessary conditional, expected left-hand side of `??` operator to be possibly null or undefined.',
            alwaysNullish: 'Unnecessary conditional, left-hand side of `??` operator is always `null` or `undefined`.',
            literalBooleanExpression: 'Unnecessary conditional, both sides of the expression are literal values.',
            noOverlapBooleanExpression: 'Unnecessary conditional, the types have no overlap.',
            never: 'Unnecessary conditional, value is `never`.',
            neverOptionalChain: 'Unnecessary optional chain on a non-nullish value.',
            noStrictNullCheck: 'This rule requires the `strictNullChecks` compiler option to be turned on to function correctly.',
        },
    },
    defaultOptions: [
        {
            allowConstantLoopConditions: false,
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        },
    ],
    create(context, [{ allowConstantLoopConditions, allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing, },]) {
        const service = (0, util_1.getParserServices)(context);
        const checker = service.program.getTypeChecker();
        const sourceCode = context.getSourceCode();
        const compilerOptions = service.program.getCompilerOptions();
        const isStrictNullChecks = (0, tsutils_1.isStrictCompilerOptionEnabled)(compilerOptions, 'strictNullChecks');
        if (!isStrictNullChecks &&
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing !== true) {
            context.report({
                loc: {
                    start: { line: 0, column: 0 },
                    end: { line: 0, column: 0 },
                },
                messageId: 'noStrictNullCheck',
            });
        }
        function getNodeType(node) {
            const tsNode = service.esTreeNodeToTSNodeMap.get(node);
            return (0, util_1.getConstrainedTypeAtLocation)(checker, tsNode);
        }
        function nodeIsArrayType(node) {
            const nodeType = getNodeType(node);
            return checker.isArrayType(nodeType);
        }
        function nodeIsTupleType(node) {
            const nodeType = getNodeType(node);
            return checker.isTupleType(nodeType);
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
        /**
         * Checks if a conditional node is necessary:
         * if the type of the node is always true or always false, it's not necessary.
         */
        function checkNode(node, isUnaryNotArgument = false) {
            // Check if the node is Unary Negation expression and handle it
            if (node.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
                node.operator === '!') {
                return checkNode(node.argument, true);
            }
            // Since typescript array index signature types don't represent the
            //  possibility of out-of-bounds access, if we're indexing into an array
            //  just skip the check, to avoid false positives
            if (isArrayIndexExpression(node)) {
                return;
            }
            // When checking logical expressions, only check the right side
            //  as the left side has been checked by checkLogicalExpressionForUnnecessaryConditionals
            //
            // Unless the node is nullish coalescing, as it's common to use patterns like `nullBool ?? true` to to strict
            //  boolean checks if we inspect the right here, it'll usually be a constant condition on purpose.
            // In this case it's better to inspect the type of the expression as a whole.
            if (node.type === utils_1.AST_NODE_TYPES.LogicalExpression &&
                node.operator !== '??') {
                return checkNode(node.right);
            }
            const type = getNodeType(node);
            // Conditional is always necessary if it involves:
            //    `any` or `unknown` or a naked type variable
            if ((0, tsutils_1.unionTypeParts)(type).some(part => (0, util_1.isTypeAnyType)(part) ||
                (0, util_1.isTypeUnknownType)(part) ||
                (0, util_1.isTypeFlagSet)(part, ts.TypeFlags.TypeVariable))) {
                return;
            }
            let messageId = null;
            if ((0, util_1.isTypeFlagSet)(type, ts.TypeFlags.Never)) {
                messageId = 'never';
            }
            else if (!isPossiblyTruthy(type)) {
                messageId = !isUnaryNotArgument ? 'alwaysFalsy' : 'alwaysTruthy';
            }
            else if (!isPossiblyFalsy(type)) {
                messageId = !isUnaryNotArgument ? 'alwaysTruthy' : 'alwaysFalsy';
            }
            if (messageId) {
                context.report({ node, messageId });
            }
        }
        function checkNodeForNullish(node) {
            const type = getNodeType(node);
            // Conditional is always necessary if it involves `any`, `unknown` or a naked type parameter
            if ((0, util_1.isTypeFlagSet)(type, ts.TypeFlags.Any | ts.TypeFlags.Unknown | ts.TypeFlags.TypeParameter)) {
                return;
            }
            let messageId = null;
            if ((0, util_1.isTypeFlagSet)(type, ts.TypeFlags.Never)) {
                messageId = 'never';
            }
            else if (!isPossiblyNullish(type)) {
                // Since typescript array index signature types don't represent the
                //  possibility of out-of-bounds access, if we're indexing into an array
                //  just skip the check, to avoid false positives
                if (!isArrayIndexExpression(node) &&
                    !(node.type === utils_1.AST_NODE_TYPES.ChainExpression &&
                        node.expression.type !== utils_1.AST_NODE_TYPES.TSNonNullExpression &&
                        optionChainContainsOptionArrayIndex(node.expression))) {
                    messageId = 'neverNullish';
                }
            }
            else if (isAlwaysNullish(type)) {
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
         *      * https://github.com/microsoft/TypeScript/issues/32627
         *      * https://github.com/microsoft/TypeScript/issues/37160 (handled)
         */
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
        function checkIfBinaryExpressionIsNecessaryConditional(node) {
            if (!BOOL_OPERATORS.has(node.operator)) {
                return;
            }
            const leftType = getNodeType(node.left);
            const rightType = getNodeType(node.right);
            if (isLiteral(leftType) && isLiteral(rightType)) {
                context.report({ node, messageId: 'literalBooleanExpression' });
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
                            ts.TypeFlags.TypeParameter;
                    // Allow loose comparison to nullish values.
                    if (node.operator === '==' || node.operator === '!=') {
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
            /**
             * Allow:
             *   while (true) {}
             *   for (;true;) {}
             *   do {} while (true)
             */
            if (allowConstantLoopConditions &&
                (0, tsutils_1.isBooleanLiteralType)(getNodeType(node.test), true)) {
                return;
            }
            checkNode(node.test);
        }
        const ARRAY_PREDICATE_FUNCTIONS = new Set([
            'filter',
            'find',
            'some',
            'every',
        ]);
        function isArrayPredicateFunction(node) {
            const { callee } = node;
            return (
            // looks like `something.filter` or `something.find`
            callee.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                callee.property.type === utils_1.AST_NODE_TYPES.Identifier &&
                ARRAY_PREDICATE_FUNCTIONS.has(callee.property.name) &&
                // and the left-hand side is an array, according to the types
                (nodeIsArrayType(callee.object) || nodeIsTupleType(callee.object)));
        }
        function checkCallExpression(node) {
            // If this is something like arr.filter(x => /*condition*/), check `condition`
            if (isArrayPredicateFunction(node) && node.arguments.length) {
                const callback = node.arguments[0];
                // Inline defined functions
                if ((callback.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
                    callback.type === utils_1.AST_NODE_TYPES.FunctionExpression) &&
                    callback.body) {
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
                const returnTypes = (0, tsutils_1.getCallSignaturesOfType)(getNodeType(callback)).map(sig => sig.getReturnType());
                /* istanbul ignore if */ if (returnTypes.length === 0) {
                    // Not a callable function
                    return;
                }
                // Predicate is always necessary if it involves `any` or `unknown`
                if (returnTypes.some(t => (0, util_1.isTypeAnyType)(t) || (0, util_1.isTypeUnknownType)(t))) {
                    return;
                }
                if (!returnTypes.some(isPossiblyFalsy)) {
                    return context.report({
                        node: callback,
                        messageId: 'alwaysTruthyFunc',
                    });
                }
                if (!returnTypes.some(isPossiblyTruthy)) {
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
                    return (0, util_1.isNullableType)(propType, { allowUndefined: true });
                }
            }
            const typeName = (0, util_1.getTypeName)(checker, propertyType);
            return !!((typeName === 'string' &&
                checker.getIndexInfoOfType(objType, ts.IndexKind.String)) ||
                (typeName === 'number' &&
                    checker.getIndexInfoOfType(objType, ts.IndexKind.Number)));
        }
        // Checks whether a member expression is nullable or not regardless of it's previous node.
        //  Example:
        //  ```
        //  // 'bar' is nullable if 'foo' is null.
        //  // but this function checks regardless of 'foo' type, so returns 'true'.
        //  declare const foo: { bar : { baz: string } } | null
        //  foo?.bar;
        //  ```
        function isNullableOriginFromPrev(node) {
            const prevType = getNodeType(node.object);
            const property = node.property;
            if (prevType.isUnion() && (0, util_1.isIdentifier)(property)) {
                const isOwnNullable = prevType.types.some(type => {
                    if (node.computed) {
                        const propertyType = getNodeType(node.property);
                        return isNullablePropertyType(type, propertyType);
                    }
                    const propType = (0, util_1.getTypeOfPropertyOfName)(checker, type, property.name);
                    if (propType) {
                        return (0, util_1.isNullableType)(propType, { allowUndefined: true });
                    }
                    return !!checker.getIndexInfoOfType(type, ts.IndexKind.String);
                });
                return (!isOwnNullable && (0, util_1.isNullableType)(prevType, { allowUndefined: true }));
            }
            return false;
        }
        function isOptionableExpression(node) {
            const type = getNodeType(node);
            const isOwnNullable = node.type === utils_1.AST_NODE_TYPES.MemberExpression
                ? !isNullableOriginFromPrev(node)
                : true;
            const possiblyVoid = (0, util_1.isTypeFlagSet)(type, ts.TypeFlags.Void);
            return ((0, util_1.isTypeFlagSet)(type, ts.TypeFlags.Any | ts.TypeFlags.Unknown) ||
                (isOwnNullable &&
                    ((0, util_1.isNullableType)(type, { allowUndefined: true }) || possiblyVoid)));
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
            if (optionChainContainsOptionArrayIndex(node)) {
                return;
            }
            const nodeToCheck = node.type === utils_1.AST_NODE_TYPES.CallExpression ? node.callee : node.object;
            if (isOptionableExpression(nodeToCheck)) {
                return;
            }
            const questionDotOperator = (0, util_1.nullThrows)(sourceCode.getTokenAfter(beforeOperator, token => token.type === utils_1.AST_TOKEN_TYPES.Punctuator && token.value === '?.'), util_1.NullThrowsReasons.MissingToken('operator', node.type));
            context.report({
                node,
                loc: questionDotOperator.loc,
                messageId: 'neverOptionalChain',
                fix(fixer) {
                    return fixer.replaceText(questionDotOperator, fix);
                },
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
            if (['||=', '&&='].includes(node.operator)) {
                checkNode(node.left);
            }
            else if (node.operator === '??=') {
                checkNodeForNullish(node.left);
            }
        }
        return {
            AssignmentExpression: checkAssignmentExpression,
            BinaryExpression: checkIfBinaryExpressionIsNecessaryConditional,
            CallExpression: checkCallExpression,
            ConditionalExpression: (node) => checkNode(node.test),
            DoWhileStatement: checkIfLoopIsNecessaryConditional,
            ForStatement: checkIfLoopIsNecessaryConditional,
            IfStatement: (node) => checkNode(node.test),
            LogicalExpression: checkLogicalExpressionForUnnecessaryConditionals,
            WhileStatement: checkIfLoopIsNecessaryConditional,
            'MemberExpression[optional = true]': checkOptionalMemberExpression,
            'CallExpression[optional = true]': checkOptionalCallExpression,
        };
    },
});
//# sourceMappingURL=no-unnecessary-condition.js.map