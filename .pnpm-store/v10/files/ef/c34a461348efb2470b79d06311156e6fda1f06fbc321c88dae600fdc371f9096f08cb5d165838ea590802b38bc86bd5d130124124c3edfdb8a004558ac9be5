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
const util_1 = require("../util");
exports.default = util.createRule({
    name: 'no-unnecessary-type-arguments',
    meta: {
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
        type: 'suggestion',
    },
    defaultOptions: [],
    create(context) {
        const parserServices = util.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        function getTypeForComparison(type) {
            if (util.isTypeReferenceType(type)) {
                return {
                    type: type.target,
                    typeArguments: util.getTypeArguments(type, checker),
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
            const param = typeParameters[i];
            if (!(param === null || param === void 0 ? void 0 : param.default)) {
                return;
            }
            // TODO: would like checker.areTypesEquivalent. https://github.com/Microsoft/TypeScript/issues/13502
            const defaultType = checker.getTypeAtLocation(param.default);
            const argTsNode = parserServices.esTreeNodeToTSNodeMap.get(arg);
            const argType = checker.getTypeAtLocation(argTsNode);
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
                const expression = parserServices.esTreeNodeToTSNodeMap.get(node);
                const typeParameters = getTypeParametersFromNode(expression, checker);
                if (typeParameters) {
                    checkTSArgsAndParameters(node, typeParameters);
                }
            },
        };
    },
});
function getTypeParametersFromNode(node, checker) {
    if (ts.isExpressionWithTypeArguments(node)) {
        return getTypeParametersFromType(node.expression, checker);
    }
    if (ts.isTypeReferenceNode(node)) {
        return getTypeParametersFromType(node.typeName, checker);
    }
    if (ts.isCallExpression(node) || ts.isNewExpression(node)) {
        return getTypeParametersFromCall(node, checker);
    }
    return undefined;
}
function getTypeParametersFromType(type, checker) {
    const symAtLocation = checker.getSymbolAtLocation(type);
    if (!symAtLocation) {
        return undefined;
    }
    const sym = getAliasedSymbol(symAtLocation, checker);
    const declarations = sym.getDeclarations();
    if (!declarations) {
        return undefined;
    }
    return (0, util_1.findFirstResult)(declarations, decl => ts.isClassLike(decl) ||
        ts.isTypeAliasDeclaration(decl) ||
        ts.isInterfaceDeclaration(decl)
        ? decl.typeParameters
        : undefined);
}
function getTypeParametersFromCall(node, checker) {
    const sig = checker.getResolvedSignature(node);
    const sigDecl = sig === null || sig === void 0 ? void 0 : sig.getDeclaration();
    if (!sigDecl) {
        return ts.isNewExpression(node)
            ? getTypeParametersFromType(node.expression, checker)
            : undefined;
    }
    return sigDecl.typeParameters;
}
function getAliasedSymbol(symbol, checker) {
    return tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Alias)
        ? checker.getAliasedSymbol(symbol)
        : symbol;
}
//# sourceMappingURL=no-unnecessary-type-arguments.js.map