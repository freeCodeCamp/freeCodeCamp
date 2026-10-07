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
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'unified-signatures',
    meta: {
        docs: {
            description: 'Disallow two overloads that could be unified into one with a union or an optional/rest parameter',
            // too opinionated to be recommended
            recommended: 'strict',
        },
        type: 'suggestion',
        messages: {
            omittingRestParameter: '{{failureStringStart}} with a rest parameter.',
            omittingSingleParameter: '{{failureStringStart}} with an optional parameter.',
            singleParameterDifference: '{{failureStringStart}} taking `{{type1}} | {{type2}}`.',
        },
        schema: [
            {
                additionalProperties: false,
                properties: {
                    ignoreDifferentlyNamedParameters: {
                        description: 'Whether two parameters with different names at the same index should be considered different even if their types are the same.',
                        type: 'boolean',
                    },
                },
                type: 'object',
            },
        ],
    },
    defaultOptions: [
        {
            ignoreDifferentlyNamedParameters: false,
        },
    ],
    create(context, [{ ignoreDifferentlyNamedParameters }]) {
        const sourceCode = context.getSourceCode();
        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------
        function failureStringStart(otherLine) {
            // For only 2 overloads we don't need to specify which is the other one.
            const overloads = otherLine === undefined
                ? 'These overloads'
                : `This overload and the one on line ${otherLine}`;
            return `${overloads} can be combined into one signature`;
        }
        function addFailures(failures) {
            for (const failure of failures) {
                const { unify, only2 } = failure;
                switch (unify.kind) {
                    case 'single-parameter-difference': {
                        const { p0, p1 } = unify;
                        const lineOfOtherOverload = only2 ? undefined : p0.loc.start.line;
                        const typeAnnotation0 = isTSParameterProperty(p0)
                            ? p0.parameter.typeAnnotation
                            : p0.typeAnnotation;
                        const typeAnnotation1 = isTSParameterProperty(p1)
                            ? p1.parameter.typeAnnotation
                            : p1.typeAnnotation;
                        context.report({
                            loc: p1.loc,
                            messageId: 'singleParameterDifference',
                            data: {
                                failureStringStart: failureStringStart(lineOfOtherOverload),
                                type1: sourceCode.getText(typeAnnotation0 === null || typeAnnotation0 === void 0 ? void 0 : typeAnnotation0.typeAnnotation),
                                type2: sourceCode.getText(typeAnnotation1 === null || typeAnnotation1 === void 0 ? void 0 : typeAnnotation1.typeAnnotation),
                            },
                            node: p1,
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
                            messageId: extraParameter.type === utils_1.AST_NODE_TYPES.RestElement
                                ? 'omittingRestParameter'
                                : 'omittingSingleParameter',
                            data: {
                                failureStringStart: failureStringStart(lineOfOtherOverload),
                            },
                            node: extraParameter,
                        });
                    }
                }
            }
        }
        function checkOverloads(signatures, typeParameters) {
            const result = [];
            const isTypeParameter = getIsTypeParameter(typeParameters);
            for (const overloads of signatures) {
                forEachPair(overloads, (a, b) => {
                    var _a, _b;
                    const signature0 = (_a = a.value) !== null && _a !== void 0 ? _a : a;
                    const signature1 = (_b = b.value) !== null && _b !== void 0 ? _b : b;
                    const unify = compareSignatures(signature0, signature1, isTypeParameter);
                    if (unify !== undefined) {
                        result.push({ unify, only2: overloads.length === 2 });
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
                ? signaturesDifferBySingleParameter(a.params, b.params)
                : signaturesDifferByOptionalOrRestParameter(a, b);
        }
        function signaturesCanBeUnified(a, b, isTypeParameter) {
            // Must return the same type.
            const aTypeParams = a.typeParameters !== undefined ? a.typeParameters.params : undefined;
            const bTypeParams = b.typeParameters !== undefined ? b.typeParameters.params : undefined;
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
            return (typesAreEqual(a.returnType, b.returnType) &&
                // Must take the same type parameters.
                // If one uses a type parameter (from outside) and the other doesn't, they shouldn't be joined.
                util.arraysAreEqual(aTypeParams, bTypeParams, typeParametersAreEqual) &&
                signatureUsesTypeParameter(a, isTypeParameter) ===
                    signatureUsesTypeParameter(b, isTypeParameter));
        }
        /** Detect `a(x: number, y: number, z: number)` and `a(x: number, y: string, z: number)`. */
        function signaturesDifferBySingleParameter(types1, types2) {
            const index = getIndexOfFirstDifference(types1, types2, parametersAreEqual);
            if (index === undefined) {
                return undefined;
            }
            // If remaining arrays are equal, the signatures differ by just one parameter type
            if (!util.arraysAreEqual(types1.slice(index + 1), types2.slice(index + 1), parametersAreEqual)) {
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
            // If one is has 2+ parameters more than the other, they must all be optional/rest.
            // Differ by optional parameters: f() and f(x), f() and f(x, ?y, ...z)
            // Not allowed: f() and f(x, y)
            for (let i = minLength + 1; i < longer.length; i++) {
                if (!parameterMayBeMissing(longer[i])) {
                    return undefined;
                }
            }
            for (let i = 0; i < minLength; i++) {
                const sig1i = sig1[i];
                const sig2i = sig2[i];
                const typeAnnotation1 = isTSParameterProperty(sig1i)
                    ? sig1i.parameter.typeAnnotation
                    : sig1i.typeAnnotation;
                const typeAnnotation2 = isTSParameterProperty(sig2i)
                    ? sig2i.parameter.typeAnnotation
                    : sig2i.typeAnnotation;
                if (!typesAreEqual(typeAnnotation1, typeAnnotation2)) {
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
            if (typeParameters === undefined) {
                return (() => false);
            }
            const set = new Set();
            for (const t of typeParameters.params) {
                set.add(t.name.name);
            }
            return (typeName => set.has(typeName));
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
                return typeContainsTypeParameter(type.typeAnnotation ||
                    type.elementType);
            }
        }
        function isTSParameterProperty(node) {
            return (node.type ===
                utils_1.AST_NODE_TYPES.TSParameterProperty);
        }
        function parametersAreEqual(a, b) {
            const typeAnnotationA = isTSParameterProperty(a)
                ? a.parameter.typeAnnotation
                : a.typeAnnotation;
            const typeAnnotationB = isTSParameterProperty(b)
                ? b.parameter.typeAnnotation
                : b.typeAnnotation;
            return (parametersHaveEqualSigils(a, b) &&
                typesAreEqual(typeAnnotationA, typeAnnotationB));
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
                (b.type === utils_1.AST_NODE_TYPES.RestElement) &&
                (optionalA !== undefined) === (optionalB !== undefined));
        }
        function typeParametersAreEqual(a, b) {
            return (a.name.name === b.name.name &&
                constraintsAreEqual(a.constraint, b.constraint));
        }
        function typesAreEqual(a, b) {
            return (a === b ||
                (a !== undefined &&
                    b !== undefined &&
                    sourceCode.getText(a.typeAnnotation) ===
                        sourceCode.getText(b.typeAnnotation)));
        }
        function constraintsAreEqual(a, b) {
            return (a === b || (a !== undefined && b !== undefined && a.type === b.type));
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
            currentScope && scopes.push(currentScope);
            currentScope = {
                overloads: new Map(),
                parent,
                typeParameters,
            };
        }
        function checkScope() {
            const failures = checkOverloads(Array.from(currentScope.overloads.values()), currentScope.typeParameters);
            addFailures(failures);
            currentScope = scopes.pop();
        }
        function addOverload(signature, key, containingNode) {
            key = key !== null && key !== void 0 ? key : getOverloadKey(signature);
            if (currentScope &&
                (containingNode || signature).parent === currentScope.parent) {
                const overloads = currentScope.overloads.get(key);
                if (overloads !== undefined) {
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
            Program: createScope,
            TSModuleBlock: createScope,
            TSInterfaceDeclaration(node) {
                createScope(node.body, node.typeParameters);
            },
            ClassDeclaration(node) {
                createScope(node.body, node.typeParameters);
            },
            TSTypeLiteral: createScope,
            // collect overloads
            TSDeclareFunction(node) {
                var _a, _b;
                const exportingNode = getExportingNode(node);
                addOverload(node, (_b = (_a = node.id) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : exportingNode === null || exportingNode === void 0 ? void 0 : exportingNode.type, exportingNode);
            },
            TSCallSignatureDeclaration: addOverload,
            TSConstructSignatureDeclaration: addOverload,
            TSMethodSignature: addOverload,
            TSAbstractMethodDefinition(node) {
                if (!node.value.body) {
                    addOverload(node);
                }
            },
            MethodDefinition(node) {
                if (!node.value.body) {
                    addOverload(node);
                }
            },
            // validate scopes
            'Program:exit': checkScope,
            'TSModuleBlock:exit': checkScope,
            'TSInterfaceDeclaration:exit': checkScope,
            'ClassDeclaration:exit': checkScope,
            'TSTypeLiteral:exit': checkScope,
        };
    },
});
function getExportingNode(node) {
    return node.parent &&
        (node.parent.type === utils_1.AST_NODE_TYPES.ExportNamedDeclaration ||
            node.parent.type === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration)
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
            return isIdentifier(key) ? key.name : key.raw;
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
//# sourceMappingURL=unified-signatures.js.map