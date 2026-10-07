"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'unified-signatures',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow two overloads that could be unified into one with a union or an optional/rest parameter',
            // too opinionated to be recommended
            recommended: 'strict',
        },
        messages: {
            allParametersAreSame: '{{failureStringStart}} with identical parameters.',
            omittingRestParameter: '{{failureStringStart}} with a rest parameter.',
            omittingSingleParameter: '{{failureStringStart}} with an optional parameter.',
            singleParameterDifference: '{{failureStringStart}} taking `{{types}}`.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ignoreDifferentlyNamedParameters: {
                        type: 'boolean',
                        description: 'Whether two parameters with different names at the same index should be considered different even if their types are the same.',
                    },
                    ignoreOverloadsWithDifferentJSDoc: {
                        type: 'boolean',
                        description: 'Whether two overloads with different JSDoc comments should be considered different even if their parameter and return types are the same.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            ignoreDifferentlyNamedParameters: false,
            ignoreOverloadsWithDifferentJSDoc: false,
        },
    ],
    create(context, [{ ignoreDifferentlyNamedParameters, ignoreOverloadsWithDifferentJSDoc }]) {
        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------
        function failureStringStart(otherLine) {
            // For only 2 overloads we don't need to specify which is the other one.
            const overloads = otherLine == null
                ? 'These overloads'
                : `This overload and the one on line ${otherLine}`;
            return `${overloads} can be combined into one signature`;
        }
        function addFailures(failures) {
            for (const failure of failures) {
                const { only2, unify } = failure;
                switch (unify.kind) {
                    case 'single-parameter-difference': {
                        const { p0, p1 } = unify;
                        const lineOfOtherOverload = only2 ? undefined : p0.loc.start.line;
                        const typeAnnotation0 = getParameterTypeAnnotation(p0);
                        const typeAnnotation1 = getParameterTypeAnnotation(p1);
                        context.report({
                            loc: p1.loc,
                            node: p1,
                            messageId: 'singleParameterDifference',
                            data: {
                                failureStringStart: failureStringStart(lineOfOtherOverload),
                                types: getUnifiedTypeText(typeAnnotation0, typeAnnotation1),
                            },
                        });
                        break;
                    }
                    case 'extra-parameter': {
                        const { extraParameter, otherSignature } = unify;
                        const lineOfOtherOverload = only2
                            ? undefined
                            : otherSignature.loc.start.line;
                        context.report({
                            loc: extraParameter.loc,
                            node: extraParameter,
                            messageId: extraParameter.type === utils_1.AST_NODE_TYPES.RestElement
                                ? 'omittingRestParameter'
                                : 'omittingSingleParameter',
                            data: {
                                failureStringStart: failureStringStart(lineOfOtherOverload),
                            },
                        });
                        break;
                    }
                    case 'all-parameters-are-same': {
                        const { signature0, signature1 } = unify;
                        const lineOfOtherOverload = only2
                            ? undefined
                            : signature0.loc.start.line;
                        context.report({
                            node: signature1,
                            messageId: 'allParametersAreSame',
                            data: {
                                failureStringStart: failureStringStart(lineOfOtherOverload),
                            },
                        });
                        break;
                    }
                    default:
                        unify;
                }
            }
        }
        function checkOverloads(signatures, typeParameters) {
            const result = [];
            const isTypeParameter = getIsTypeParameter(typeParameters);
            for (const overloads of signatures) {
                forEachPair(overloads, (a, b) => {
                    const signature0 = a.value ?? a;
                    const signature1 = b.value ?? b;
                    const unify = compareSignatures(signature0, signature1, isTypeParameter);
                    if (unify != null) {
                        result.push({ only2: overloads.length === 2, unify });
                    }
                });
            }
            return result;
        }
        function compareSignatures(a, b, isTypeParameter) {
            if (!signaturesCanBeUnified(a, b, isTypeParameter)) {
                return undefined;
            }
            return a.params.length === b.params.length
                ? signaturesHaveSameAmountOfParameters(a, b)
                : signaturesDifferByOptionalOrRestParameter(a, b);
        }
        function signaturesCanBeUnified(a, b, isTypeParameter) {
            // Must return the same type.
            const aTypeParams = a.typeParameters != null ? a.typeParameters.params : undefined;
            const bTypeParams = b.typeParameters != null ? b.typeParameters.params : undefined;
            if (ignoreDifferentlyNamedParameters) {
                const commonParamsLength = Math.min(a.params.length, b.params.length);
                for (let i = 0; i < commonParamsLength; i += 1) {
                    if (a.params[i].type === b.params[i].type &&
                        getStaticParameterName(a.params[i]) !==
                            getStaticParameterName(b.params[i])) {
                        return false;
                    }
                }
            }
            if (ignoreOverloadsWithDifferentJSDoc) {
                const aComment = getBlockCommentForNode(getCommentTargetNode(a));
                const bComment = getBlockCommentForNode(getCommentTargetNode(b));
                if (aComment?.value !== bComment?.value) {
                    return false;
                }
            }
            return (typesAreEqual(a.returnType?.typeAnnotation, b.returnType?.typeAnnotation) &&
                // Must take the same type parameters.
                // If one uses a type parameter (from outside) and the other doesn't, they shouldn't be joined.
                (0, util_1.arraysAreEqual)(aTypeParams, bTypeParams, typeParametersAreEqual) &&
                signatureUsesTypeParameter(a, isTypeParameter) ===
                    signatureUsesTypeParameter(b, isTypeParameter));
        }
        /**
         * Detect no difference, i.e. `a(x: number, y: string)` and `a(x: number, y: string)`,
         * or one param difference, i.e. `a(x: number, y: number, z: number)` and `a(x: number, y: string, z: number)`.
         */
        function signaturesHaveSameAmountOfParameters(signature0, signature1) {
            const types1 = signature0.params;
            const types2 = signature1.params;
            const firstParam1 = types1[0];
            const firstParam2 = types2[0];
            // exempt signatures with `this: void` from the rule
            if (isThisVoidParam(firstParam1) || isThisVoidParam(firstParam2)) {
                return undefined;
            }
            const index = getIndexOfFirstDifference(types1, types2, parametersAreEqual);
            if (index == null) {
                return {
                    kind: 'all-parameters-are-same',
                    signature0,
                    signature1,
                };
            }
            // If remaining arrays are equal, the signatures differ by just one parameter type
            if (!(0, util_1.arraysAreEqual)(types1.slice(index + 1), types2.slice(index + 1), parametersAreEqual)) {
                return undefined;
            }
            const a = types1[index];
            const b = types2[index];
            // Can unify `a?: string` and `b?: number`. Can't unify `...args: string[]` and `...args: number[]`.
            // See https://github.com/Microsoft/TypeScript/issues/5077
            return parametersHaveEqualSigils(a, b) &&
                a.type !== utils_1.AST_NODE_TYPES.RestElement
                ? { kind: 'single-parameter-difference', p0: a, p1: b }
                : undefined;
        }
        function getParameterTypeAnnotation(parameter) {
            return isTSParameterProperty(parameter)
                ? parameter.parameter.typeAnnotation?.typeAnnotation
                : parameter.typeAnnotation?.typeAnnotation;
        }
        function getUnifiedTypeText(type0, type1) {
            // When a signature's parameter has no type annotation
            if (type0 == null || type1 == null) {
                return getUnionMemberText((0, util_1.nullThrows)(type0 ?? type1, 'Expected a type annotation for one of the parameters, but both were undefined'));
            }
            const members = [...getUnionMembers(type0), ...getUnionMembers(type1)];
            const uniqueMembers = [];
            for (const member of members) {
                if (!uniqueMembers.some(other => typesAreEqual(other, member))) {
                    uniqueMembers.push(member);
                }
            }
            return uniqueMembers
                .map(member => getUnionMemberText(member))
                .join(' | ');
        }
        function getUnionMembers(type) {
            return type.type === utils_1.AST_NODE_TYPES.TSUnionType
                ? type.types.flatMap(getUnionMembers)
                : [type];
        }
        function getUnionMemberText(type) {
            const text = context.sourceCode.getText(type);
            const needsParentheses = type.type === utils_1.AST_NODE_TYPES.TSConditionalType ||
                type.type === utils_1.AST_NODE_TYPES.TSConstructorType ||
                type.type === utils_1.AST_NODE_TYPES.TSFunctionType;
            return needsParentheses ? `(${text})` : text;
        }
        function isThisParam(param) {
            return param?.type === utils_1.AST_NODE_TYPES.Identifier && param.name === 'this';
        }
        function isThisVoidParam(param) {
            return (isThisParam(param) &&
                param.typeAnnotation?.typeAnnotation.type ===
                    utils_1.AST_NODE_TYPES.TSVoidKeyword);
        }
        /**
         * Detect `a(): void` and `a(x: number): void`.
         * Returns the parameter declaration (`x: number` in this example) that should be optional/rest, and overload it's a part of.
         */
        function signaturesDifferByOptionalOrRestParameter(a, b) {
            const sig1 = a.params;
            const sig2 = b.params;
            const minLength = Math.min(sig1.length, sig2.length);
            const longer = sig1.length < sig2.length ? sig2 : sig1;
            const shorter = sig1.length < sig2.length ? sig1 : sig2;
            const shorterSig = sig1.length < sig2.length ? a : b;
            const firstParam1 = sig1.at(0);
            const firstParam2 = sig2.at(0);
            // If one signature has explicit this type and another doesn't, they can't
            // be unified.
            if (isThisParam(firstParam1) !== isThisParam(firstParam2)) {
                return undefined;
            }
            // exempt signatures with `this: void` from the rule
            if (isThisVoidParam(firstParam1) || isThisVoidParam(firstParam2)) {
                return undefined;
            }
            // If one is has 2+ parameters more than the other, they must all be optional/rest.
            // Differ by optional parameters: f() and f(x), f() and f(x, ?y, ...z)
            // Not allowed: f() and f(x, y)
            for (let i = minLength + 1; i < longer.length; i++) {
                if (!parameterMayBeMissing(longer[i])) {
                    return undefined;
                }
            }
            for (let i = 0; i < minLength; i++) {
                if (!typesAreEqual(getParameterTypeAnnotation(sig1[i]), getParameterTypeAnnotation(sig2[i]))) {
                    return undefined;
                }
            }
            if (minLength > 0 &&
                shorter[minLength - 1].type === utils_1.AST_NODE_TYPES.RestElement) {
                return undefined;
            }
            return {
                extraParameter: longer[longer.length - 1],
                kind: 'extra-parameter',
                otherSignature: shorterSig,
            };
        }
        /** Given type parameters, returns a function to test whether a type is one of those parameters. */
        function getIsTypeParameter(typeParameters) {
            if (typeParameters == null) {
                return () => false;
            }
            const set = new Set();
            for (const t of typeParameters.params) {
                set.add(t.name.name);
            }
            return typeName => set.has(typeName);
        }
        /** True if any of the outer type parameters are used in a signature. */
        function signatureUsesTypeParameter(sig, isTypeParameter) {
            return sig.params.some((p) => typeContainsTypeParameter(isTSParameterProperty(p)
                ? p.parameter.typeAnnotation
                : p.typeAnnotation));
            function typeContainsTypeParameter(type) {
                if (!type) {
                    return false;
                }
                if (type.type === utils_1.AST_NODE_TYPES.TSTypeReference) {
                    const typeName = type.typeName;
                    if (isIdentifier(typeName) && isTypeParameter(typeName.name)) {
                        return true;
                    }
                }
                return typeContainsTypeParameter(type.typeAnnotation ??
                    type.elementType);
            }
        }
        function isTSParameterProperty(node) {
            return node.type === utils_1.AST_NODE_TYPES.TSParameterProperty;
        }
        function parametersAreEqual(a, b) {
            return (parametersHaveEqualSigils(a, b) &&
                typesAreEqual(getParameterTypeAnnotation(a), getParameterTypeAnnotation(b)));
        }
        /** True for optional/rest parameters. */
        function parameterMayBeMissing(p) {
            const optional = isTSParameterProperty(p)
                ? p.parameter.optional
                : p.optional;
            return p.type === utils_1.AST_NODE_TYPES.RestElement || optional;
        }
        /** False if one is optional and the other isn't, or one is a rest parameter and the other isn't. */
        function parametersHaveEqualSigils(a, b) {
            const optionalA = isTSParameterProperty(a)
                ? a.parameter.optional
                : a.optional;
            const optionalB = isTSParameterProperty(b)
                ? b.parameter.optional
                : b.optional;
            return ((a.type === utils_1.AST_NODE_TYPES.RestElement) ===
                (b.type === utils_1.AST_NODE_TYPES.RestElement) && optionalA === optionalB);
        }
        function typeParametersAreEqual(a, b) {
            return (a.name.name === b.name.name && typesAreEqual(a.constraint, b.constraint));
        }
        function typesAreEqual(a, b) {
            return (a === b ||
                (a != null &&
                    b != null &&
                    context.sourceCode.getText(a) === context.sourceCode.getText(b)));
        }
        /* Returns the first index where `a` and `b` differ. */
        function getIndexOfFirstDifference(a, b, equal) {
            for (let i = 0; i < a.length && i < b.length; i++) {
                if (!equal(a[i], b[i])) {
                    return i;
                }
            }
            return undefined;
        }
        /** Calls `action` for every pair of values in `values`. */
        function forEachPair(values, action) {
            for (let i = 0; i < values.length; i++) {
                for (let j = i + 1; j < values.length; j++) {
                    action(values[i], values[j]);
                }
            }
        }
        const scopes = [];
        let currentScope = {
            overloads: new Map(),
        };
        function createScope(parent, typeParameters) {
            if (currentScope) {
                scopes.push(currentScope);
            }
            currentScope = {
                overloads: new Map(),
                parent,
                typeParameters,
            };
        }
        function checkScope() {
            const scope = (0, util_1.nullThrows)(currentScope, 'checkScope() called without a current scope');
            const failures = checkOverloads([...scope.overloads.values()], scope.typeParameters);
            addFailures(failures);
            currentScope = scopes.pop();
        }
        /**
         * @returns the first valid JSDoc comment annotating `node`
         */
        function getBlockCommentForNode(node) {
            return context.sourceCode
                .getCommentsBefore(node)
                .reverse()
                .find(comment => comment.type === utils_1.AST_TOKEN_TYPES.Block);
        }
        function addOverload(signature, key, containingNode) {
            key ??= getOverloadKey(signature);
            if ((containingNode ?? signature).parent === currentScope?.parent) {
                const overloads = currentScope.overloads.get(key);
                if (overloads != null) {
                    overloads.push(signature);
                }
                else {
                    currentScope.overloads.set(key, [signature]);
                }
            }
        }
        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
        return {
            ClassDeclaration(node) {
                createScope(node.body, node.typeParameters);
            },
            Program: createScope,
            TSInterfaceDeclaration(node) {
                createScope(node.body, node.typeParameters);
            },
            TSModuleBlock: createScope,
            TSTypeLiteral: createScope,
            // collect overloads
            MethodDefinition(node) {
                if (!node.value.body && !isGetterOrSetter(node)) {
                    addOverload(node);
                }
            },
            TSAbstractMethodDefinition(node) {
                if (!node.value.body && !isGetterOrSetter(node)) {
                    addOverload(node);
                }
            },
            TSCallSignatureDeclaration: addOverload,
            TSConstructSignatureDeclaration: addOverload,
            TSDeclareFunction(node) {
                const exportingNode = getExportingNode(node);
                addOverload(node, node.id?.name ?? exportingNode?.type, exportingNode);
            },
            TSMethodSignature(node) {
                if (!isGetterOrSetter(node)) {
                    addOverload(node);
                }
            },
            // validate scopes
            'ClassDeclaration:exit': checkScope,
            'Program:exit': checkScope,
            'TSInterfaceDeclaration:exit': checkScope,
            'TSModuleBlock:exit': checkScope,
            'TSTypeLiteral:exit': checkScope,
        };
    },
});
function getCommentTargetNode(node) {
    if (node.type === utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression) {
        return node.parent;
    }
    return getExportingNode(node) ?? node;
}
function getExportingNode(node) {
    return node.parent.type === utils_1.AST_NODE_TYPES.ExportNamedDeclaration ||
        node.parent.type === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration
        ? node.parent
        : undefined;
}
function getOverloadKey(node) {
    const info = getOverloadInfo(node);
    return ((node.computed ? '0' : '1') +
        (node.static ? '0' : '1') +
        info);
}
function getOverloadInfo(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration:
            return 'constructor';
        case utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration:
            return '()';
        default: {
            const { key } = node;
            if (isPrivateIdentifier(key)) {
                return `private_identifier_${key.name}`;
            }
            if (isIdentifier(key)) {
                return `identifier_${key.name}`;
            }
            return key.raw;
        }
    }
}
function getStaticParameterName(param) {
    switch (param.type) {
        case utils_1.AST_NODE_TYPES.Identifier:
            return param.name;
        case utils_1.AST_NODE_TYPES.RestElement:
            return getStaticParameterName(param.argument);
        default:
            return undefined;
    }
}
function isIdentifier(node) {
    return node.type === utils_1.AST_NODE_TYPES.Identifier;
}
function isPrivateIdentifier(node) {
    return node.type === utils_1.AST_NODE_TYPES.PrivateIdentifier;
}
function isGetterOrSetter(node) {
    return node.kind === 'get' || node.kind === 'set';
}
//# sourceMappingURL=unified-signatures.js.map