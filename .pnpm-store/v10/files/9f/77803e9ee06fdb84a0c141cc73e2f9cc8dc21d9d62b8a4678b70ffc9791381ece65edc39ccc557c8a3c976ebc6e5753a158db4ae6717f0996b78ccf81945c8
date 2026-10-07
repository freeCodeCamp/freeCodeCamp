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
var Usefulness;
(function (Usefulness) {
    Usefulness["Always"] = "always";
    Usefulness["Never"] = "will";
    Usefulness["Sometimes"] = "may";
})(Usefulness || (Usefulness = {}));
const canHaveTypeParameters = (declaration) => {
    return (ts.isTypeAliasDeclaration(declaration) ||
        ts.isInterfaceDeclaration(declaration) ||
        ts.isClassDeclaration(declaration));
};
exports.default = (0, util_1.createRule)({
    name: 'no-base-to-string',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        messages: {
            baseArrayJoin: "Using `join()` for {{name}} {{certainty}} use Object's default stringification format ('[object Object]') when stringified.",
            baseToString: "'{{name}}' {{certainty}} use Object's default stringification format ('[object Object]') when stringified.",
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkUnknown: {
                        type: 'boolean',
                        description: 'Whether to also check values of type `unknown`',
                    },
                    ignoredTypeNames: {
                        type: 'array',
                        description: 'Stringified type names to ignore.',
                        items: {
                            type: 'string',
                        },
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            checkUnknown: false,
            ignoredTypeNames: ['Error', 'RegExp', 'URL', 'URLSearchParams'],
        },
    ],
    create(context, [option]) {
        const services = (0, util_1.getParserServices)(context);
        const { program } = services;
        const checker = program.getTypeChecker();
        const ignoredTypeNames = option.ignoredTypeNames ?? [];
        function checkExpression(node, type) {
            if (node.type === utils_1.AST_NODE_TYPES.Literal) {
                return;
            }
            const certainty = collectToStringCertainty(type ?? services.getTypeAtLocation(node), new Set());
            if (certainty === Usefulness.Always) {
                return;
            }
            context.report({
                node,
                messageId: 'baseToString',
                data: {
                    name: context.sourceCode.getText(node),
                    certainty,
                },
            });
        }
        function checkExpressionForArrayJoin(node, type) {
            const certainty = collectJoinCertainty(type, new Set());
            if (certainty === Usefulness.Always) {
                return;
            }
            context.report({
                node,
                messageId: 'baseArrayJoin',
                data: {
                    name: context.sourceCode.getText(node),
                    certainty,
                },
            });
        }
        function collectUnionTypeCertainty(type, collectSubTypeCertainty) {
            const certainties = type.types.map(t => collectSubTypeCertainty(t));
            if (certainties.every(certainty => certainty === Usefulness.Never)) {
                return Usefulness.Never;
            }
            if (certainties.every(certainty => certainty === Usefulness.Always)) {
                return Usefulness.Always;
            }
            return Usefulness.Sometimes;
        }
        function collectIntersectionTypeCertainty(type, collectSubTypeCertainty) {
            for (const subType of type.types) {
                const subtypeUsefulness = collectSubTypeCertainty(subType);
                if (subtypeUsefulness === Usefulness.Always) {
                    return Usefulness.Always;
                }
            }
            return Usefulness.Never;
        }
        function collectTupleCertainty(type, visited) {
            const typeArgs = checker.getTypeArguments(type);
            const certainties = typeArgs.map(t => collectToStringCertainty(t, visited));
            if (certainties.some(certainty => certainty === Usefulness.Never)) {
                return Usefulness.Never;
            }
            if (certainties.some(certainty => certainty === Usefulness.Sometimes)) {
                return Usefulness.Sometimes;
            }
            return Usefulness.Always;
        }
        function collectArrayCertainty(type, visited) {
            const elemType = (0, util_1.nullThrows)(type.getNumberIndexType(), 'array should have number index type');
            return collectToStringCertainty(elemType, visited);
        }
        function collectJoinCertainty(type, visited) {
            if (tsutils.isUnionType(type)) {
                return collectUnionTypeCertainty(type, t => collectJoinCertainty(t, visited));
            }
            if (tsutils.isIntersectionType(type)) {
                return collectIntersectionTypeCertainty(type, t => collectJoinCertainty(t, visited));
            }
            if (checker.isTupleType(type)) {
                return collectTupleCertainty(type, visited);
            }
            if (checker.isArrayType(type)) {
                return collectArrayCertainty(type, visited);
            }
            return Usefulness.Always;
        }
        function collectToStringCertainty(type, visited) {
            if (visited.has(type)) {
                // don't report if this is a self referencing array or tuple type
                return Usefulness.Always;
            }
            if (tsutils.isTypeParameter(type)) {
                const constraint = type.getConstraint();
                if (constraint) {
                    return collectToStringCertainty(constraint, visited);
                }
                // unconstrained generic means `unknown`
                return option.checkUnknown ? Usefulness.Sometimes : Usefulness.Always;
            }
            // the Boolean type definition missing toString()
            if (tsutils.isTypeFlagSet(type, ts.TypeFlags.Boolean) ||
                tsutils.isTypeFlagSet(type, ts.TypeFlags.BooleanLiteral)) {
                return Usefulness.Always;
            }
            const symbol = type.aliasSymbol ?? type.getSymbol();
            const decl = symbol?.getDeclarations()?.[0];
            if (decl &&
                canHaveTypeParameters(decl) &&
                decl.typeParameters &&
                ignoredTypeNames.includes(symbol.name)) {
                return Usefulness.Always;
            }
            if ((0, util_1.matchesTypeOrBaseType)(services, type => ignoredTypeNames.includes((0, util_1.getTypeName)(checker, type)), type)) {
                return Usefulness.Always;
            }
            if (type.isIntersection()) {
                return collectIntersectionTypeCertainty(type, t => collectToStringCertainty(t, visited));
            }
            if (type.isUnion()) {
                return collectUnionTypeCertainty(type, t => collectToStringCertainty(t, visited));
            }
            if (checker.isTupleType(type)) {
                return collectTupleCertainty(type, new Set([...visited, type]));
            }
            if (checker.isArrayType(type)) {
                return collectArrayCertainty(type, new Set([...visited, type]));
            }
            switch (isToStringLikeFromObject(type)) {
                case undefined:
                    // unknown
                    if (option.checkUnknown && type.flags === ts.TypeFlags.Unknown) {
                        return Usefulness.Sometimes;
                    }
                    // e.g. any
                    return Usefulness.Always;
                case true:
                    return Usefulness.Never;
                case false:
                    return Usefulness.Always;
            }
        }
        function isBuiltInStringCall(node) {
            if (node.callee.type === utils_1.AST_NODE_TYPES.Identifier &&
                // eslint-disable-next-line @typescript-eslint/internal/prefer-ast-types-enum
                node.callee.name === 'String' &&
                node.arguments[0]) {
                const scope = context.sourceCode.getScope(node);
                // eslint-disable-next-line @typescript-eslint/internal/prefer-ast-types-enum
                const variable = utils_1.ASTUtils.findVariable(scope, 'String');
                return !variable?.defs.length;
            }
            return false;
        }
        function isSymbolToPrimitiveMethod(node) {
            return (ts.isMethodSignature(node) &&
                ts.isComputedPropertyName(node.name) &&
                ts.isPropertyAccessExpression(node.name.expression) &&
                ts.isIdentifier(node.name.expression.expression) &&
                node.name.expression.expression.text === 'Symbol' &&
                ts.isIdentifier(node.name.expression.name) &&
                node.name.expression.name.text === 'toPrimitive' &&
                (0, util_1.isSymbolFromDefaultLibrary)(program, checker.getSymbolAtLocation(node.name.expression.expression)));
        }
        function isToStringLikeFromObject(type) {
            // An explicit [Symbol.toPrimitive] declaration is always user-defined
            if (type
                .getProperties()
                .some(property => property.valueDeclaration &&
                isSymbolToPrimitiveMethod(property.valueDeclaration))) {
                return false;
            }
            // Otherwise, we check for known methods used in type coercion.
            // We'll try to find one that's not declared on Object itself.
            // Failing that, we'll fall back to one that is.
            let foundFallbackOnObject = false;
            for (const propertyName of ['toLocaleString', 'toString', 'valueOf']) {
                const candidate = checker.getPropertyOfType(type, propertyName);
                if (!candidate) {
                    continue;
                }
                const declarations = candidate.getDeclarations();
                if (!declarations?.length) {
                    continue;
                }
                // If any declaration is not from the Object interface, this is
                // user-defined (e.g. overloaded toString on a class or module).
                // see https://github.com/typescript-eslint/typescript-eslint/issues/8585
                // see https://github.com/typescript-eslint/typescript-eslint/issues/11945
                if (declarations.some(declaration => !(ts.isInterfaceDeclaration(declaration.parent) &&
                    declaration.parent.name.text === 'Object'))) {
                    return false;
                }
                foundFallbackOnObject = true;
            }
            return foundFallbackOnObject ? true : undefined;
        }
        return {
            'AssignmentExpression[operator = "+="], BinaryExpression[operator = "+"]'(node) {
                const leftType = services.getTypeAtLocation(node.left);
                const rightType = services.getTypeAtLocation(node.right);
                if ((0, util_1.getTypeName)(checker, leftType) === 'string') {
                    checkExpression(node.right, rightType);
                }
                else if (node.left.type !== utils_1.AST_NODE_TYPES.PrivateIdentifier &&
                    (0, util_1.getTypeName)(checker, rightType) === 'string') {
                    checkExpression(node.left, leftType);
                }
            },
            CallExpression(node) {
                if (isBuiltInStringCall(node) &&
                    node.arguments[0].type !== utils_1.AST_NODE_TYPES.SpreadElement) {
                    checkExpression(node.arguments[0]);
                }
            },
            'CallExpression > MemberExpression.callee > Identifier[name = "join"].property'(node) {
                const memberExpr = node.parent;
                const type = (0, util_1.getConstrainedTypeAtLocation)(services, memberExpr.object);
                checkExpressionForArrayJoin(memberExpr.object, type);
            },
            'CallExpression > MemberExpression.callee > Identifier[name = /^(toLocaleString|toString)$/].property'(node) {
                const memberExpr = node.parent;
                checkExpression(memberExpr.object);
            },
            TemplateLiteral(node) {
                if (node.parent.type === utils_1.AST_NODE_TYPES.TaggedTemplateExpression) {
                    return;
                }
                for (const expression of node.expressions) {
                    checkExpression(expression);
                }
            },
        };
    },
});
//# sourceMappingURL=no-base-to-string.js.map