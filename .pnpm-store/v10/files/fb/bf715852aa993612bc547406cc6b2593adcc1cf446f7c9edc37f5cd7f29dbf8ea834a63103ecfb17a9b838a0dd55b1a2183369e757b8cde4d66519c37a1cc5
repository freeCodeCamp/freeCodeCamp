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
    name: 'no-unnecessary-type-arguments',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow type arguments that are equal to the default',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            unnecessaryTypeParameter: 'This is the default value for this type parameter, so it can be omitted.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        function getTypeForComparison(type) {
            if ((0, util_1.isTypeReferenceType)(type)) {
                return {
                    type: type.target,
                    typeArguments: checker.getTypeArguments(type),
                };
            }
            return {
                type,
                typeArguments: [],
            };
        }
        function checkTSArgsAndParameters(esParameters, typeParameters) {
            // Just check the last one. Must specify previous type parameters if the last one is specified.
            const i = esParameters.params.length - 1;
            const arg = esParameters.params[i];
            const param = typeParameters.at(i);
            if (!param?.default) {
                return;
            }
            // TODO: would like checker.areTypesEquivalent. https://github.com/Microsoft/TypeScript/issues/13502
            const defaultType = checker.getTypeAtLocation(param.default);
            const argType = services.getTypeAtLocation(arg);
            // this check should handle some of the most simple cases of like strings, numbers, etc
            if (defaultType !== argType) {
                // For more complex types (like aliases to generic object types) - TS won't always create a
                // global shared type object for the type - so we need to resort to manually comparing the
                // reference type and the passed type arguments.
                // Also - in case there are aliases - we need to resolve them before we do checks
                const defaultTypeResolved = getTypeForComparison(defaultType);
                const argTypeResolved = getTypeForComparison(argType);
                if (
                // ensure the resolved type AND all the parameters are the same
                defaultTypeResolved.type !== argTypeResolved.type ||
                    defaultTypeResolved.typeArguments.length !==
                        argTypeResolved.typeArguments.length ||
                    defaultTypeResolved.typeArguments.some((t, i) => t !== argTypeResolved.typeArguments[i])) {
                    return;
                }
            }
            context.report({
                node: arg,
                messageId: 'unnecessaryTypeParameter',
                fix: fixer => fixer.removeRange(i === 0
                    ? esParameters.range
                    : [esParameters.params[i - 1].range[1], arg.range[1]]),
            });
        }
        return {
            TSTypeParameterInstantiation(node) {
                // TypeScript does not apply default type parameters in instantiation
                // expressions, so explicit type args here are always meaningful.
                if (node.parent.type === utils_1.AST_NODE_TYPES.TSInstantiationExpression) {
                    return;
                }
                const expression = services.esTreeNodeToTSNodeMap.get(node);
                const typeParameters = getTypeParametersFromNode(node, expression, checker);
                if (typeParameters) {
                    checkTSArgsAndParameters(node, typeParameters);
                }
            },
        };
    },
});
function getTypeParametersFromNode(node, tsNode, checker) {
    if (ts.isExpressionWithTypeArguments(tsNode)) {
        return getTypeParametersFromType(node, tsNode.expression, checker);
    }
    if (ts.isTypeReferenceNode(tsNode)) {
        return getTypeParametersFromType(node, tsNode.typeName, checker);
    }
    if (ts.isCallExpression(tsNode) ||
        ts.isNewExpression(tsNode) ||
        ts.isTaggedTemplateExpression(tsNode) ||
        ts.isJsxOpeningElement(tsNode) ||
        ts.isJsxSelfClosingElement(tsNode)) {
        return getTypeParametersFromCall(node, tsNode, checker);
    }
    return undefined;
}
function getTypeParametersFromType(node, type, checker) {
    const symAtLocation = checker.getSymbolAtLocation(type);
    if (!symAtLocation) {
        return undefined;
    }
    const sym = getAliasedSymbol(symAtLocation, checker);
    const declarations = sym.getDeclarations();
    if (!declarations) {
        return undefined;
    }
    const sortedDeclarations = sortDeclarationsByTypeValueContext(node, declarations);
    return (0, util_1.findFirstResult)(sortedDeclarations, decl => {
        if (ts.isTypeAliasDeclaration(decl) ||
            ts.isInterfaceDeclaration(decl) ||
            ts.isClassLike(decl)) {
            return decl.typeParameters;
        }
        if (ts.isVariableDeclaration(decl)) {
            return getConstructSignatureDeclaration(symAtLocation, checker)
                ?.typeParameters;
        }
        return undefined;
    });
}
function getTypeParametersFromCall(node, tsNode, checker) {
    const sig = checker.getResolvedSignature(tsNode);
    const sigDecl = sig?.getDeclaration();
    if (!sigDecl) {
        return ts.isNewExpression(tsNode)
            ? getTypeParametersFromType(node, tsNode.expression, checker)
            : undefined;
    }
    return sigDecl.typeParameters;
}
function getAliasedSymbol(symbol, checker) {
    return tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Alias)
        ? checker.getAliasedSymbol(symbol)
        : symbol;
}
function isInTypeContext(node) {
    return (node.parent.type === utils_1.AST_NODE_TYPES.TSInterfaceHeritage ||
        node.parent.type === utils_1.AST_NODE_TYPES.TSTypeReference ||
        node.parent.type === utils_1.AST_NODE_TYPES.TSClassImplements);
}
function isTypeContextDeclaration(decl) {
    return ts.isTypeAliasDeclaration(decl) || ts.isInterfaceDeclaration(decl);
}
function typeFirstCompare(declA, declB) {
    const aIsType = isTypeContextDeclaration(declA);
    const bIsType = isTypeContextDeclaration(declB);
    return Number(bIsType) - Number(aIsType);
}
function sortDeclarationsByTypeValueContext(node, declarations) {
    const sorted = [...declarations].sort(typeFirstCompare);
    if (isInTypeContext(node)) {
        return sorted;
    }
    return sorted.reverse();
}
function getConstructSignatureDeclaration(symbol, checker) {
    const type = checker.getTypeOfSymbol(symbol);
    const sig = type.getConstructSignatures();
    return sig.at(0)?.getDeclaration();
}
//# sourceMappingURL=no-unnecessary-type-arguments.js.map