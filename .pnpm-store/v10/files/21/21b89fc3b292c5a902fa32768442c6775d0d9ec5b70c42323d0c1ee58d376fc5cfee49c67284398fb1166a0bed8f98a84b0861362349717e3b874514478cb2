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
exports.default = (0, util_1.createRule)({
    name: 'no-unnecessary-type-assertion',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow type assertions that do not change the type of an expression',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            contextuallyUnnecessary: 'This assertion is unnecessary since the receiver accepts the original type of the expression.',
            unnecessaryAssertion: 'This assertion is unnecessary since it does not change the type of the expression.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkLiteralConstAssertions: {
                        type: 'boolean',
                        description: 'Whether to check literal const assertions.',
                    },
                    typesToIgnore: {
                        type: 'array',
                        description: 'A list of type names to ignore.',
                        items: {
                            type: 'string',
                        },
                    },
                },
            },
        ],
    },
    defaultOptions: [{}],
    create(context, [options]) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const compilerOptions = services.program.getCompilerOptions();
        /**
         * Returns true if there's a chance the variable has been used before a value has been assigned to it
         */
        function isPossiblyUsedBeforeAssigned(node) {
            const declaration = (0, util_1.getDeclaration)(services, node);
            if (!declaration) {
                // don't know what the declaration is for some reason, so just assume the worst
                return true;
            }
            if (
            // non-strict mode doesn't care about used before assigned errors
            tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'strictNullChecks') &&
                // ignore class properties as they are compile time guarded
                // also ignore function arguments as they can't be used before defined
                ts.isVariableDeclaration(declaration)) {
                // For var declarations, we need to check whether the node
                // is actually in a descendant of its declaration or not. If not,
                // it may be used before defined.
                // eg
                // if (Math.random() < 0.5) {
                //     var x: number  = 2;
                // } else {
                //     x!.toFixed();
                // }
                if (ts.isVariableDeclarationList(declaration.parent) &&
                    // var
                    declaration.parent.flags === ts.NodeFlags.None &&
                    // If they are not in the same file it will not exist.
                    // This situation must not occur using before defined.
                    services.tsNodeToESTreeNodeMap.has(declaration)) {
                    const declaratorNode = services.tsNodeToESTreeNodeMap.get(declaration);
                    const scope = context.sourceCode.getScope(node);
                    const declaratorScope = context.sourceCode.getScope(declaratorNode);
                    let parentScope = declaratorScope;
                    while ((parentScope = parentScope.upper)) {
                        if (parentScope === scope) {
                            return true;
                        }
                    }
                }
                if (
                // is it `const x!: number`
                declaration.initializer == null &&
                    declaration.exclamationToken == null &&
                    declaration.type != null) {
                    // check if the defined variable type has changed since assignment
                    const declarationType = checker.getTypeFromTypeNode(declaration.type);
                    const type = (0, util_1.getConstrainedTypeAtLocation)(services, node);
                    if (declarationType === type &&
                        // `declare`s are never narrowed, so never skip them
                        !(ts.isVariableDeclarationList(declaration.parent) &&
                            ts.isVariableStatement(declaration.parent.parent) &&
                            tsutils.includesModifier((0, util_1.getModifiers)(declaration.parent.parent), ts.SyntaxKind.DeclareKeyword))) {
                        // possibly used before assigned, so just skip it
                        // better to false negative and skip it, than false positive and fix to compile erroring code
                        //
                        // no better way to figure this out right now
                        // https://github.com/Microsoft/TypeScript/issues/31124
                        return true;
                    }
                }
            }
            return false;
        }
        function isConstAssertion(node) {
            return (node.type === utils_1.AST_NODE_TYPES.TSTypeReference &&
                node.typeName.type === utils_1.AST_NODE_TYPES.Identifier &&
                node.typeName.name === 'const');
        }
        function isTemplateLiteralWithExpressions(expression) {
            return (expression.type === utils_1.AST_NODE_TYPES.TemplateLiteral &&
                expression.expressions.length !== 0);
        }
        function isImplicitlyNarrowedLiteralDeclaration({ expression, parent, }) {
            /**
             * Even on `const` variable declarations, template literals with expressions can sometimes be widened without a type assertion.
             * @see https://github.com/typescript-eslint/typescript-eslint/issues/8737
             */
            if (isTemplateLiteralWithExpressions(expression)) {
                return false;
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const maybeDeclarationNode = parent.parent;
            return ((maybeDeclarationNode.type === utils_1.AST_NODE_TYPES.VariableDeclaration &&
                maybeDeclarationNode.kind === 'const') ||
                (parent.type === utils_1.AST_NODE_TYPES.PropertyDefinition && parent.readonly));
        }
        function isTypeUnchanged(node, expression, uncast, cast) {
            if (uncast === cast) {
                return true;
            }
            if (node.typeAnnotation.type === utils_1.AST_NODE_TYPES.TSIntersectionType &&
                containsTypeVariable(cast)) {
                return false;
            }
            if ((0, util_1.isTypeFlagSet)(uncast, ts.TypeFlags.Undefined) &&
                (0, util_1.isTypeFlagSet)(cast, ts.TypeFlags.Undefined) &&
                tsutils.isCompilerOptionEnabled(compilerOptions, 'exactOptionalPropertyTypes')) {
                return areUnionPartsEquivalentIgnoringUndefined(uncast, cast);
            }
            if (((0, util_1.isTypeFlagSet)(uncast, ts.TypeFlags.NonPrimitive) &&
                !(0, util_1.isTypeFlagSet)(cast, ts.TypeFlags.NonPrimitive)) ||
                hasIndexSignature(uncast) !== hasIndexSignature(cast) ||
                containsAny(uncast) ||
                containsAny(cast) ||
                (containsTypeVariable(cast) && !containsTypeVariable(uncast))) {
                return false;
            }
            if (isConceptuallyLiteral(expression) &&
                (expression.type !== utils_1.AST_NODE_TYPES.ObjectExpression ||
                    expression.properties.length === 0 ||
                    cast
                        .getProperties()
                        .some(p => isTypeLiteral(checker.getTypeOfSymbol(p))))) {
                return false;
            }
            if (cast.isIntersection() && !uncast.isIntersection()) {
                const castParts = cast.types;
                const otherPart = castParts.find(part => part !== uncast);
                if (tsutils.isTypeParameter(uncast) &&
                    castParts.length === 2 &&
                    castParts.some(part => part === uncast) &&
                    otherPart != null &&
                    isEmptyObjectType(otherPart) &&
                    !containsTypeVariable(otherPart)) {
                    const constraint = checker.getBaseConstraintOfType(uncast);
                    if (constraint && !(0, util_1.isNullableType)(constraint)) {
                        return true;
                    }
                }
                return false;
            }
            if (!hasSameProperties(uncast, cast) ||
                !haveSameTypeArguments(uncast, cast)) {
                return false;
            }
            return areMutuallyAssignable(uncast, cast);
        }
        function isTypeLiteral(type) {
            return type.isLiteral() || tsutils.isBooleanLiteralType(type);
        }
        function hasIndexSignature(type) {
            return tsutils
                .unionConstituents(type)
                .some(part => checker.getIndexInfosOfType(part).length > 0);
        }
        function getTypeArguments(type) {
            return (type.aliasTypeArguments ??
                (tsutils.isTypeReference(type) ? checker.getTypeArguments(type) : []));
        }
        function typeContains(type, predicate, seen = new Set()) {
            if (seen.has(type)) {
                return false;
            }
            seen.add(type);
            if (predicate(type)) {
                return true;
            }
            if (type.isUnionOrIntersection()) {
                return type.types.some(t => typeContains(t, predicate, seen));
            }
            const nestedTypes = [
                ...getTypeArguments(type),
                ...type
                    .getCallSignatures()
                    .flatMap(sig => [
                    sig.getReturnType(),
                    ...sig.getParameters().map(p => checker.getTypeOfSymbol(p)),
                ]),
            ];
            return nestedTypes.some(t => typeContains(t, predicate, seen));
        }
        function containsAny(type) {
            try {
                return typeContains(type, t => (0, util_1.isTypeFlagSet)(t, ts.TypeFlags.Any));
            }
            catch (error) {
                // Workaround for https://github.com/typescript-eslint/typescript-eslint/issues/12705
                if (error instanceof RangeError &&
                    error.message === 'Maximum call stack size exceeded') {
                    return false;
                }
                throw error;
            }
        }
        function containsTypeVariable(type) {
            return typeContains(type, t => (0, util_1.isTypeFlagSet)(t, ts.TypeFlags.TypeVariable | ts.TypeFlags.Index));
        }
        function hasPhantomTypeArguments(type) {
            return isEmptyObjectType(type) && getTypeArguments(type).length > 0;
        }
        function hasTypeParams(sig) {
            return (sig.getTypeParameters()?.length ?? 0) > 0;
        }
        function genericsMismatch(uncast, contextual) {
            return contextual.getProperties().some(prop => {
                const contextualSigs = checker.getSignaturesOfType(checker.getTypeOfSymbol(prop), ts.SignatureKind.Call);
                if (!contextualSigs.some(hasTypeParams)) {
                    return false;
                }
                const uncastProp = uncast.getProperty(prop.getEscapedName());
                if (!uncastProp) {
                    return true;
                }
                return !checker
                    .getSignaturesOfType(checker.getTypeOfSymbol(uncastProp), ts.SignatureKind.Call)
                    .some(hasTypeParams);
            });
        }
        function hasSameProperties(uncast, cast) {
            const uncastProps = uncast.getProperties();
            const castProps = cast.getProperties();
            if (uncastProps.length !== castProps.length) {
                return false;
            }
            const castPropNames = new Set(castProps.map(p => p.getEscapedName()));
            return uncastProps.every(prop => {
                const name = prop.getEscapedName();
                return (castPropNames.has(name) &&
                    tsutils.isPropertyReadonlyInType(uncast, name, checker) ===
                        tsutils.isPropertyReadonlyInType(cast, name, checker));
            });
        }
        function haveSameTypeArguments(uncast, cast) {
            const uncastArgs = getTypeArguments(uncast);
            const castArgs = getTypeArguments(cast);
            return (uncastArgs.length === castArgs.length &&
                uncastArgs.every((arg, i) => arg === castArgs[i]));
        }
        function areMutuallyAssignable(a, b) {
            return (checker.isTypeAssignableTo(a, b) && checker.isTypeAssignableTo(b, a));
        }
        function areUnionPartsEquivalentIgnoringUndefined(uncast, cast) {
            const filterUndefined = (part) => !(0, util_1.isTypeFlagSet)(part, ts.TypeFlags.Undefined);
            const uncastParts = tsutils
                .unionConstituents(uncast)
                .filter(filterUndefined);
            const castParts = tsutils.unionConstituents(cast).filter(filterUndefined);
            if (uncastParts.length !== castParts.length) {
                return false;
            }
            const uncastPartsSet = new Set(uncastParts);
            return castParts.every(part => uncastPartsSet.has(part));
        }
        function getOriginalExpression(node) {
            let current = node.expression;
            while (current.type === utils_1.AST_NODE_TYPES.TSAsExpression ||
                current.type === utils_1.AST_NODE_TYPES.TSTypeAssertion) {
                current = current.expression;
            }
            return current;
        }
        function isDoubleAssertionUnnecessary(node, contextualType) {
            const innerExpression = node.expression;
            if (innerExpression.type !== utils_1.AST_NODE_TYPES.TSAsExpression &&
                innerExpression.type !== utils_1.AST_NODE_TYPES.TSTypeAssertion) {
                return false;
            }
            const originalExpr = getOriginalExpression(node);
            const originalType = services.getTypeAtLocation(originalExpr);
            const castType = services.getTypeAtLocation(node);
            if (isTypeUnchanged(node, innerExpression, originalType, castType) &&
                !(0, util_1.isTypeFlagSet)(castType, ts.TypeFlags.Any)) {
                return 'unnecessaryAssertion';
            }
            if (contextualType) {
                const intermediateType = services.getTypeAtLocation(innerExpression);
                if (((0, util_1.isTypeFlagSet)(intermediateType, ts.TypeFlags.Any) ||
                    (0, util_1.isTypeFlagSet)(intermediateType, ts.TypeFlags.Unknown)) &&
                    checker.isTypeAssignableTo(originalType, contextualType)) {
                    return 'contextuallyUnnecessary';
                }
            }
            return false;
        }
        const CONCEPTUALLY_LITERAL_TYPES = new Set([
            utils_1.AST_NODE_TYPES.Literal,
            utils_1.AST_NODE_TYPES.ArrayExpression,
            utils_1.AST_NODE_TYPES.ObjectExpression,
            utils_1.AST_NODE_TYPES.TemplateLiteral,
            utils_1.AST_NODE_TYPES.ClassExpression,
            utils_1.AST_NODE_TYPES.FunctionExpression,
            utils_1.AST_NODE_TYPES.ArrowFunctionExpression,
            utils_1.AST_NODE_TYPES.JSXElement,
            utils_1.AST_NODE_TYPES.JSXFragment,
        ]);
        function isConceptuallyLiteral(node) {
            return CONCEPTUALLY_LITERAL_TYPES.has(node.type);
        }
        function isIIFE(expression) {
            return (expression.type === utils_1.AST_NODE_TYPES.CallExpression &&
                (expression.callee.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
                    expression.callee.type === utils_1.AST_NODE_TYPES.FunctionExpression));
        }
        function isEmptyObjectType(type) {
            return ((0, util_1.isTypeFlagSet)(type, ts.TypeFlags.NonPrimitive) ||
                (type.getProperties().length === 0 &&
                    !type.getCallSignatures().length &&
                    !type.getConstructSignatures().length &&
                    !type.getStringIndexType() &&
                    !type.getNumberIndexType()));
        }
        function hasGenericCallSignature(type) {
            return type.getCallSignatures().some(hasTypeParams);
        }
        function isArgumentToOverloadedFunction(node) {
            const { parent } = node;
            if ((parent.type !== utils_1.AST_NODE_TYPES.CallExpression &&
                parent.type !== utils_1.AST_NODE_TYPES.NewExpression) ||
                !parent.arguments.includes(node)) {
                return false;
            }
            // An optional-chained callee (`foo?.bar(...)`) types as `<method> | undefined`,
            // and a union exposes no call signatures — strip the nullability first.
            const calleeType = services
                .getTypeAtLocation(parent.callee)
                .getNonNullableType();
            const signatures = calleeType.getCallSignatures();
            if (signatures.length <= 1) {
                return false;
            }
            const argIndex = parent.arguments.indexOf(node);
            const paramTypes = signatures.map(sig => {
                const params = sig.getParameters();
                if (argIndex >= params.length) {
                    return undefined;
                }
                const param = params[argIndex];
                let paramType = checker.getTypeOfSymbol(param);
                if (param.valueDeclaration &&
                    ts.isParameter(param.valueDeclaration) &&
                    param.valueDeclaration.dotDotDotToken) {
                    const typeArgs = getTypeArguments(paramType);
                    if (typeArgs.length > 0) {
                        paramType = typeArgs[0];
                    }
                }
                return paramType;
            });
            if (paramTypes.some(type => type == null)) {
                return true;
            }
            const definedParamTypes = paramTypes;
            const firstParamType = definedParamTypes[0];
            if (definedParamTypes.every(type => type === firstParamType)) {
                return false;
            }
            const uncastType = services.getTypeAtLocation(node.expression);
            return !definedParamTypes.every(type => checker.isTypeAssignableTo(uncastType, type));
        }
        function isInDestructuringDeclaration(node) {
            const { parent } = node;
            return (parent.type === utils_1.AST_NODE_TYPES.VariableDeclarator &&
                parent.init === node &&
                (parent.id.type === utils_1.AST_NODE_TYPES.ObjectPattern ||
                    parent.id.type === utils_1.AST_NODE_TYPES.ArrayPattern));
        }
        function isPropertyInProblematicContext(node) {
            const { parent } = node;
            if (parent.type !== utils_1.AST_NODE_TYPES.Property || parent.value !== node) {
                return false;
            }
            const objectExpr = parent.parent;
            if (objectExpr.type !== utils_1.AST_NODE_TYPES.ObjectExpression) {
                return false;
            }
            const objectTsNode = services.esTreeNodeToTSNodeMap.get(objectExpr);
            if (checker.getContextualType(objectTsNode)?.isUnion()) {
                const nodeTsNode = services.esTreeNodeToTSNodeMap.get(node);
                const propContextualType = checker.getContextualType(nodeTsNode);
                if (propContextualType == null) {
                    return true;
                }
                const nonNullableContextualType = checker.getNonNullableType(propContextualType);
                if (nonNullableContextualType.isUnion()) {
                    return true;
                }
                const uncastType = services.getTypeAtLocation(node.expression);
                return !checker.isTypeAssignableTo(uncastType, nonNullableContextualType);
            }
            const objectParent = objectExpr.parent;
            return (objectParent.type === utils_1.AST_NODE_TYPES.TSSatisfiesExpression ||
                (objectParent.type === utils_1.AST_NODE_TYPES.CallExpression &&
                    objectParent.parent.type === utils_1.AST_NODE_TYPES.TSSatisfiesExpression));
        }
        function isAssignmentInNonStatementContext(node) {
            const { parent } = node;
            if (parent.type !== utils_1.AST_NODE_TYPES.AssignmentExpression ||
                parent.right !== node) {
                return false;
            }
            const assignmentParent = parent.parent;
            return assignmentParent.type !== utils_1.AST_NODE_TYPES.ExpressionStatement;
        }
        function isRightHandSideOfLogicalAssignment(node) {
            const { parent } = node;
            return (parent.type === utils_1.AST_NODE_TYPES.AssignmentExpression &&
                parent.right === node &&
                (parent.operator === '&&=' ||
                    parent.operator === '||=' ||
                    parent.operator === '??='));
        }
        function isInGenericContext(node) {
            let seenFunction = false;
            for (let current = node.parent; current; current = current.parent) {
                if (current.type === utils_1.AST_NODE_TYPES.FunctionDeclaration) {
                    return false;
                }
                if (current.type === utils_1.AST_NODE_TYPES.FunctionExpression ||
                    current.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression) {
                    if (current.body.type === utils_1.AST_NODE_TYPES.BlockStatement) {
                        return false;
                    }
                    if (seenFunction) {
                        return false;
                    }
                    seenFunction = true;
                }
                if (current.type === utils_1.AST_NODE_TYPES.CallExpression ||
                    current.type === utils_1.AST_NODE_TYPES.NewExpression) {
                    if (current.typeArguments != null) {
                        continue;
                    }
                    if (current.type === utils_1.AST_NODE_TYPES.CallExpression &&
                        current.callee.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                        current.arguments.includes(node)) {
                        continue;
                    }
                    const calleeType = checker.getTypeAtLocation(services.esTreeNodeToTSNodeMap.get(current.callee));
                    if (hasGenericCallSignature(calleeType)) {
                        return true;
                    }
                }
            }
            return false;
        }
        function hasPhantomTypeArgumentMismatch(node, uncastType, contextualType) {
            return (isInGenericContext(node) &&
                (hasPhantomTypeArguments(uncastType) ||
                    hasPhantomTypeArguments(contextualType)) &&
                !haveSameTypeArguments(uncastType, contextualType));
        }
        const SKIP_PARENT_TYPES = new Set([
            utils_1.AST_NODE_TYPES.TSAsExpression,
            utils_1.AST_NODE_TYPES.TSTypeAssertion,
            utils_1.AST_NODE_TYPES.SpreadElement,
            utils_1.AST_NODE_TYPES.TSSatisfiesExpression,
        ]);
        function shouldSkipContextualTypeFallback(node, castIsAny) {
            if (castIsAny) {
                return (node.parent.type === utils_1.AST_NODE_TYPES.LogicalExpression ||
                    isInGenericContext(node));
            }
            /**
             * Interpolated template literals can be widened to `string` while contextual
             * typing still accepts them, so the assertion may be required.
             * @see https://github.com/typescript-eslint/typescript-eslint/issues/12276
             */
            if (isTemplateLiteralWithExpressions(node.expression)) {
                return true;
            }
            if (SKIP_PARENT_TYPES.has(node.parent.type) ||
                node.expression.type === utils_1.AST_NODE_TYPES.ArrayExpression ||
                isInDestructuringDeclaration(node) ||
                isPropertyInProblematicContext(node) ||
                isAssignmentInNonStatementContext(node) ||
                isRightHandSideOfLogicalAssignment(node) ||
                isArgumentToOverloadedFunction(node)) {
                return true;
            }
            if (isInGenericContext(node)) {
                const originalExpr = getOriginalExpression(node);
                return (!isConceptuallyLiteral(originalExpr) &&
                    node.parent.type !== utils_1.AST_NODE_TYPES.Property);
            }
            return false;
        }
        function getUncastType(node) {
            // Special handling for IIFE: extract the function's return type
            if (isIIFE(node.expression)) {
                const callee = node.expression.callee;
                const functionType = services.getTypeAtLocation(callee);
                const signatures = functionType.getCallSignatures();
                if (signatures.length > 0) {
                    const returnType = checker.getReturnTypeOfSignature(signatures[0]);
                    // If the function has no explicit return type annotation and returns undefined,
                    // treat it as void (TypeScript infers () => {} as () => undefined, but it should be void)
                    if (callee.returnType == null &&
                        (0, util_1.isTypeFlagSet)(returnType, ts.TypeFlags.Undefined)) {
                        return checker.getVoidType();
                    }
                    return returnType;
                }
            }
            return services.getTypeAtLocation(node.expression);
        }
        function createAssertionFixer(node) {
            return fixer => {
                if (node.type === utils_1.AST_NODE_TYPES.TSTypeAssertion) {
                    const openingAngleBracket = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(node.typeAnnotation, token => token.type === utils_1.AST_TOKEN_TYPES.Punctuator &&
                        token.value === '<'), util_1.NullThrowsReasons.MissingToken('<', 'type annotation'));
                    const closingAngleBracket = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(node.typeAnnotation, token => token.type === utils_1.AST_TOKEN_TYPES.Punctuator &&
                        token.value === '>'), util_1.NullThrowsReasons.MissingToken('>', 'type annotation'));
                    // Removing the angle brackets leaves the asserted operand at the
                    // assertion's position, so its first token leads whatever the
                    // assertion led. A leading `{`/`function`/`class` at the start of an
                    // expression statement is parsed as a block / function or class
                    // declaration, and a leading `{` at the start of a concise arrow body
                    // is parsed as a block body. In those positions the operand must be
                    // wrapped in parentheses to stay an expression.
                    const firstOperandToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(closingAngleBracket), util_1.NullThrowsReasons.MissingToken('operand', 'type assertion'));
                    const needsParens = (0, util_1.isStartOfExpressionStatementNeedingParentheses)(node, firstOperandToken) ||
                        (0, util_1.isStartOfArrowFunctionBodyNeedingParentheses)(node, firstOperandToken, context.sourceCode);
                    const fixes = [];
                    if (needsParens) {
                        fixes.push(fixer.insertTextBefore(node, '('));
                    }
                    fixes.push(fixer.removeRange([
                        openingAngleBracket.range[0],
                        closingAngleBracket.range[1],
                    ]));
                    if (needsParens) {
                        fixes.push(fixer.insertTextAfter(node, ')'));
                    }
                    return fixes;
                }
                const asToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(node.expression, token => token.type === utils_1.AST_TOKEN_TYPES.Identifier && token.value === 'as'), util_1.NullThrowsReasons.MissingToken('>', 'type annotation'));
                const tokenBeforeAs = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(asToken, {
                    includeComments: true,
                }), util_1.NullThrowsReasons.MissingToken('comment', 'as'));
                return fixer.removeRange([tokenBeforeAs.range[1], node.range[1]]);
            };
        }
        function reportDoubleAssertionIfUnnecessary(node, contextualType) {
            const doubleAssertionResult = isDoubleAssertionUnnecessary(node, contextualType);
            if (doubleAssertionResult) {
                context.report({
                    node,
                    messageId: doubleAssertionResult,
                    fix(fixer) {
                        const originalExpr = getOriginalExpression(node);
                        let text = context.sourceCode.getText(originalExpr);
                        if (originalExpr.type === utils_1.AST_NODE_TYPES.ObjectExpression &&
                            node.parent.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
                            node.parent.body === node) {
                            text = `(${text})`;
                        }
                        return fixer.replaceText(node, text);
                    },
                });
            }
        }
        return {
            'TSAsExpression, TSTypeAssertion'(node) {
                if (options.typesToIgnore?.includes(context.sourceCode.getText(node.typeAnnotation))) {
                    return;
                }
                const castType = services.getTypeAtLocation(node);
                const castTypeIsLiteral = isTypeLiteral(castType);
                const typeAnnotationIsConstAssertion = isConstAssertion(node.typeAnnotation);
                if (!options.checkLiteralConstAssertions &&
                    castTypeIsLiteral &&
                    typeAnnotationIsConstAssertion) {
                    return;
                }
                const uncastType = getUncastType(node);
                const typeIsUnchanged = isTypeUnchanged(node, node.expression, uncastType, castType);
                const wouldSameTypeBeInferred = castTypeIsLiteral
                    ? isImplicitlyNarrowedLiteralDeclaration(node)
                    : !typeAnnotationIsConstAssertion;
                if (typeIsUnchanged && wouldSameTypeBeInferred) {
                    context.report({
                        node,
                        messageId: 'unnecessaryAssertion',
                        fix: createAssertionFixer(node),
                    });
                    return;
                }
                const originalNode = services.esTreeNodeToTSNodeMap.get(node);
                const castIsAny = (0, util_1.isTypeFlagSet)(castType, ts.TypeFlags.Any) &&
                    !SKIP_PARENT_TYPES.has(node.parent.type);
                const contextualType = shouldSkipContextualTypeFallback(node, castIsAny)
                    ? undefined
                    : checker.getContextualType(originalNode);
                if (contextualType) {
                    const contextualTypeIsAny = (0, util_1.isTypeFlagSet)(contextualType, ts.TypeFlags.Any);
                    const isCallArgument = (node.parent.type === utils_1.AST_NODE_TYPES.CallExpression ||
                        node.parent.type === utils_1.AST_NODE_TYPES.NewExpression) &&
                        node.parent.arguments.includes(node);
                    const anyInvolvedInContextualCheck = contextualTypeIsAny
                        ? isCallArgument && !containsAny(castType)
                        : !containsAny(contextualType);
                    const isNullishLiteralToUnion = castType.isUnion() &&
                        ((node.expression.type === utils_1.AST_NODE_TYPES.Literal &&
                            node.expression.value == null) ||
                            (node.expression.type === utils_1.AST_NODE_TYPES.Identifier &&
                                node.expression.name === 'undefined'));
                    const isContextuallyUnnecessary = !typeAnnotationIsConstAssertion &&
                        !containsAny(uncastType) &&
                        anyInvolvedInContextualCheck &&
                        !hasPhantomTypeArgumentMismatch(node, uncastType, contextualType) &&
                        (castIsAny || !genericsMismatch(uncastType, contextualType)) &&
                        (contextualTypeIsAny ||
                            checker.isTypeAssignableTo(uncastType, contextualType)) &&
                        !isNullishLiteralToUnion;
                    if (isContextuallyUnnecessary) {
                        context.report({
                            node,
                            messageId: 'contextuallyUnnecessary',
                            fix: createAssertionFixer(node),
                        });
                        return;
                    }
                }
                reportDoubleAssertionIfUnnecessary(node, contextualType);
            },
            TSNonNullExpression(node) {
                const removeExclamationFix = fixer => {
                    const exclamationToken = (0, util_1.nullThrows)(context.sourceCode.getLastToken(node, token => token.value === '!'), util_1.NullThrowsReasons.MissingToken('exclamation mark', 'non-null assertion'));
                    return fixer.removeRange(exclamationToken.range);
                };
                if (node.parent.type === utils_1.AST_NODE_TYPES.AssignmentExpression &&
                    node.parent.operator === '=') {
                    if (node.parent.left === node) {
                        context.report({
                            node,
                            messageId: 'contextuallyUnnecessary',
                            fix: removeExclamationFix,
                        });
                    }
                    // for all other = assignments we ignore non-null checks
                    // this is because non-null assertions can change the type-flow of the code
                    // so whilst they might be unnecessary for the assignment - they are necessary
                    // for following code
                    return;
                }
                const originalNode = services.esTreeNodeToTSNodeMap.get(node);
                const constrainedType = (0, util_1.getConstrainedTypeAtLocation)(services, node.expression);
                const actualType = services.getTypeAtLocation(node.expression);
                // Check both the constrained type and the actual type.
                // If either is nullable, we should not report the assertion as unnecessary.
                // This handles cases like generic constraints with `any` where the
                // constrained type is `any` (nullable) but the actual type might be
                // a type parameter that TypeScript treats nominally.
                // See: https://github.com/typescript-eslint/typescript-eslint/issues/11559
                const constrainedTypeIsNullable = (0, util_1.isNullableType)(constrainedType);
                const actualTypeIsNullable = (0, util_1.isNullableType)(actualType);
                if (!constrainedTypeIsNullable && !actualTypeIsNullable) {
                    if (node.expression.type === utils_1.AST_NODE_TYPES.Identifier &&
                        isPossiblyUsedBeforeAssigned(node.expression)) {
                        return;
                    }
                    context.report({
                        node,
                        messageId: 'unnecessaryAssertion',
                        fix: removeExclamationFix,
                    });
                }
                else {
                    // we know it's a nullable type
                    // so figure out if the variable is used in a place that accepts nullable types
                    // If the constrained type differs from the actual type (e.g., when dealing
                    // with unresolved generic type parameters), we should not report the assertion
                    // as contextually unnecessary. TypeScript may still require the assertion
                    // even if the constraint is nullable (like `any`).
                    // See: https://github.com/typescript-eslint/typescript-eslint/issues/11559
                    if (constrainedType !== actualType) {
                        return;
                    }
                    const contextualType = (0, util_1.getContextualType)(checker, originalNode);
                    if (contextualType) {
                        if ((0, util_1.isTypeFlagSet)(constrainedType, ts.TypeFlags.Unknown) &&
                            !(0, util_1.isTypeFlagSet)(contextualType, ts.TypeFlags.Unknown)) {
                            return;
                        }
                        // in strict mode you can't assign null to undefined, so we have to make sure that
                        // the two types share a nullable type
                        const typeIncludesUndefined = (0, util_1.isTypeFlagSet)(constrainedType, ts.TypeFlags.Undefined);
                        const typeIncludesNull = (0, util_1.isTypeFlagSet)(constrainedType, ts.TypeFlags.Null);
                        const typeIncludesVoid = (0, util_1.isTypeFlagSet)(constrainedType, ts.TypeFlags.Void);
                        const contextualTypeIncludesUndefined = (0, util_1.isTypeFlagSet)(contextualType, ts.TypeFlags.Undefined);
                        const contextualTypeIncludesNull = (0, util_1.isTypeFlagSet)(contextualType, ts.TypeFlags.Null);
                        const contextualTypeIncludesVoid = (0, util_1.isTypeFlagSet)(contextualType, ts.TypeFlags.Void);
                        // make sure that the parent accepts the same types
                        // i.e. assigning `string | null | undefined` to `string | undefined` is invalid
                        const isValidUndefined = typeIncludesUndefined
                            ? contextualTypeIncludesUndefined
                            : true;
                        const isValidNull = typeIncludesNull
                            ? contextualTypeIncludesNull
                            : true;
                        const isValidVoid = typeIncludesVoid
                            ? contextualTypeIncludesVoid
                            : true;
                        if (isValidUndefined && isValidNull && isValidVoid) {
                            context.report({
                                node,
                                messageId: 'contextuallyUnnecessary',
                                fix: removeExclamationFix,
                            });
                        }
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=no-unnecessary-type-assertion.js.map