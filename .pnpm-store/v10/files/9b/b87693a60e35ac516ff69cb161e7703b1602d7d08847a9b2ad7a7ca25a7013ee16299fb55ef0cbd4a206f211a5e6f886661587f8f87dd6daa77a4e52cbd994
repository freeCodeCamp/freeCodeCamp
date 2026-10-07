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
    name: 'no-useless-default-assignment',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow default values that will never be used',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        hasSuggestions: true,
        messages: {
            noStrictNullCheck: 'This rule requires the `strictNullChecks` compiler option to be turned on to function correctly.',
            preferOptionalSyntax: 'Using `= undefined` to make a parameter optional adds unnecessary runtime logic.',
            removeDefaultAssignment: 'Remove the default value.',
            uselessDefaultAssignment: 'Default value is useless because the {{ type }} is not optional.',
            uselessUndefined: 'Default value is useless because it is undefined. Optional {{ type }}s are already undefined by default.',
            useOptionalSyntax: 'Use the `?` optional syntax instead.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
                        type: 'boolean',
                        description: 'Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        },
    ],
    create(context, [{ allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing }]) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const compilerOptions = services.program.getCompilerOptions();
        const isStrictNullChecks = tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'strictNullChecks');
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
        function canBeUndefined(type) {
            if ((0, util_1.isTypeAnyType)(type) || (0, util_1.isTypeUnknownType)(type)) {
                return true;
            }
            return tsutils
                .unionConstituents(type)
                .some(part => (0, util_1.isTypeFlagSet)(part, ts.TypeFlags.Undefined));
        }
        function getArrayElementType(arrayType, elementIndex) {
            if (checker.isTupleType(arrayType)) {
                const tupleArgs = checker.getTypeArguments(arrayType);
                if (elementIndex < tupleArgs.length) {
                    return tupleArgs[elementIndex];
                }
            }
            return arrayType.getNumberIndexType() ?? null;
        }
        function checkAssignmentPattern(node) {
            if (node.right.type === utils_1.AST_NODE_TYPES.Identifier &&
                node.right.name === 'undefined') {
                const tsNode = services.esTreeNodeToTSNodeMap.get(node);
                if (ts.isParameter(tsNode) &&
                    tsNode.type &&
                    canBeUndefined(checker.getTypeFromTypeNode(tsNode.type))) {
                    reportPreferOptionalSyntax(node);
                    return;
                }
                const type = node.parent.type === utils_1.AST_NODE_TYPES.Property ||
                    node.parent.type === utils_1.AST_NODE_TYPES.ArrayPattern
                    ? 'property'
                    : 'parameter';
                reportUselessUndefined(node, type);
                return;
            }
            const parent = node.parent;
            if (parent.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
                parent.type === utils_1.AST_NODE_TYPES.FunctionExpression) {
                const paramIndex = parent.params.indexOf(node);
                if (paramIndex !== -1) {
                    const tsFunc = services.esTreeNodeToTSNodeMap.get(parent);
                    // tsFunc is already a FunctionLike subtype; defensive runtime check
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                    if (ts.isFunctionLike(tsFunc)) {
                        const contextualType = checker.getContextualType(tsFunc);
                        if (!contextualType) {
                            return;
                        }
                        const signatures = contextualType.getCallSignatures();
                        if (signatures.length === 0 ||
                            signatures[0].getDeclaration() === tsFunc) {
                            return;
                        }
                        const defaultCanBeUsed = signatures.some(signature => {
                            const params = signature.getParameters();
                            if (paramIndex >= params.length) {
                                return true;
                            }
                            const paramSymbol = params[paramIndex];
                            if (paramSymbol.valueDeclaration &&
                                (0, util_1.isRestParameterDeclaration)(paramSymbol.valueDeclaration)) {
                                return true;
                            }
                            if (tsutils.isSymbolFlagSet(paramSymbol, ts.SymbolFlags.Optional)) {
                                return true;
                            }
                            const paramType = checker.getTypeOfSymbol(paramSymbol);
                            return (tsutils.isTypeParameter(paramType) || canBeUndefined(paramType));
                        });
                        if (!defaultCanBeUsed) {
                            reportUselessDefaultAssignment(node, 'parameter');
                        }
                    }
                }
                return;
            }
            if (parent.type === utils_1.AST_NODE_TYPES.Property) {
                const propertyType = getTypeOfProperty(parent);
                if (!propertyType) {
                    return;
                }
                if (!canBeUndefined(propertyType)) {
                    reportUselessDefaultAssignment(node, 'property');
                }
            }
            else if (parent.type === utils_1.AST_NODE_TYPES.ArrayPattern) {
                const sourceType = getSourceTypeForPattern(parent);
                if (!sourceType) {
                    return;
                }
                if (!checker.isTupleType(sourceType)) {
                    return;
                }
                const tupleArgs = checker.getTypeArguments(sourceType);
                const elementIndex = parent.elements.indexOf(node);
                if (elementIndex < 0 || elementIndex >= tupleArgs.length) {
                    return;
                }
                const { fixedLength, minLength } = sourceType.target;
                if (elementIndex >= minLength) {
                    return;
                }
                const elementTypes = elementIndex < fixedLength
                    ? [tupleArgs[elementIndex]]
                    : tupleArgs.slice(fixedLength);
                if (!elementTypes.some(canBeUndefined)) {
                    reportUselessDefaultAssignment(node, 'property');
                }
            }
        }
        function getTypeOfProperty(node) {
            const objectPattern = node.parent;
            const sourceType = getSourceTypeForPattern(objectPattern);
            if (!sourceType) {
                return null;
            }
            const propertyName = getPropertyName(node.key);
            if (!propertyName) {
                return null;
            }
            const symbol = sourceType.getProperty(propertyName);
            if (!symbol) {
                return null;
            }
            if (tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Optional)) {
                const parent = objectPattern.parent;
                if (parent.type === utils_1.AST_NODE_TYPES.VariableDeclarator &&
                    parent.init &&
                    hasConditionalInitializer(objectPattern)) {
                    const propertyName = getPropertyName(node.key);
                    if (!propertyName ||
                        !hasPropertyInAllBranches(parent.init, propertyName)) {
                        return null;
                    }
                }
            }
            return checker.getTypeOfSymbol(symbol);
        }
        function hasConditionalInitializer(node) {
            const parent = node.parent;
            if (!parent) {
                return false;
            }
            if (parent.type === utils_1.AST_NODE_TYPES.VariableDeclarator && parent.init) {
                return (parent.init.type === utils_1.AST_NODE_TYPES.ConditionalExpression ||
                    parent.init.type === utils_1.AST_NODE_TYPES.LogicalExpression);
            }
            return hasConditionalInitializer(parent);
        }
        function getSourceTypeForPattern(pattern) {
            const parent = (0, util_1.nullThrows)(pattern.parent, util_1.NullThrowsReasons.MissingParent);
            if (parent.type === utils_1.AST_NODE_TYPES.VariableDeclarator && parent.init) {
                const tsNode = services.esTreeNodeToTSNodeMap.get(parent.init);
                return checker.getTypeAtLocation(tsNode);
            }
            if ((0, util_1.isFunction)(parent)) {
                let paramIndex = parent.params.indexOf(pattern);
                const tsFunc = services.esTreeNodeToTSNodeMap.get(parent);
                const signature = (0, util_1.nullThrows)(checker.getSignatureFromDeclaration(tsFunc), util_1.NullThrowsReasons.MissingToken('signature', 'function'));
                const params = signature.getParameters();
                if (signature.thisParameter) {
                    paramIndex--;
                }
                if (paramIndex < 0 || paramIndex >= params.length) {
                    return null;
                }
                return checker.getTypeOfSymbol(params[paramIndex]);
            }
            if (parent.type === utils_1.AST_NODE_TYPES.AssignmentPattern) {
                return getSourceTypeForPattern(parent);
            }
            if (parent.type === utils_1.AST_NODE_TYPES.Property) {
                return getTypeOfProperty(parent);
            }
            if (parent.type === utils_1.AST_NODE_TYPES.ArrayPattern) {
                const arrayType = getSourceTypeForPattern(parent);
                if (!arrayType) {
                    return null;
                }
                const elementIndex = parent.elements.indexOf(pattern);
                return getArrayElementType(arrayType, elementIndex);
            }
            return null;
        }
        function getPropertyName(key) {
            switch (key.type) {
                case utils_1.AST_NODE_TYPES.Identifier:
                    return key.name;
                case utils_1.AST_NODE_TYPES.Literal:
                    return String(key.value);
                case utils_1.AST_NODE_TYPES.TemplateLiteral:
                    return key.expressions.length ? null : key.quasis[0].value.cooked;
                default:
                    return null;
            }
        }
        function reportUselessDefaultAssignment(node, type) {
            context.report({
                node: node.right,
                messageId: 'uselessDefaultAssignment',
                data: { type },
                suggest: [removeDefaultSuggestion(node)],
            });
        }
        function reportUselessUndefined(node, type) {
            context.report({
                node: node.right,
                messageId: 'uselessUndefined',
                data: { type },
                suggest: [removeDefaultSuggestion(node)],
            });
        }
        function reportPreferOptionalSyntax(node) {
            context.report({
                node: node.right,
                messageId: 'preferOptionalSyntax',
                suggest: [useOptionalSyntaxSuggestion(node)],
            });
        }
        function useOptionalSyntaxSuggestion(node) {
            return {
                messageId: 'useOptionalSyntax',
                *fix(fixer) {
                    yield removeDefault(fixer, node);
                    const { left } = node;
                    if (left.type === utils_1.AST_NODE_TYPES.Identifier) {
                        yield fixer.insertTextAfterRange([left.range[0], left.range[0] + left.name.length], '?');
                    }
                },
            };
        }
        function removeDefaultSuggestion(node) {
            return {
                messageId: 'removeDefaultAssignment',
                fix: fixer => removeDefault(fixer, node),
            };
        }
        function removeDefault(fixer, node) {
            const start = node.left.range[1];
            const end = node.range[1];
            return fixer.removeRange([start, end]);
        }
        function hasPropertyInAllBranches(expression, propertyName) {
            return ((expression.type === utils_1.AST_NODE_TYPES.ObjectExpression &&
                expression.properties.some(prop => prop.type === utils_1.AST_NODE_TYPES.Property &&
                    getPropertyName(prop.key) === propertyName)) ||
                (expression.type === utils_1.AST_NODE_TYPES.ConditionalExpression &&
                    hasPropertyInAllBranches(expression.consequent, propertyName) &&
                    hasPropertyInAllBranches(expression.alternate, propertyName)));
        }
        return {
            AssignmentPattern: checkAssignmentPattern,
        };
    },
});
//# sourceMappingURL=no-useless-default-assignment.js.map