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
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'no-unnecessary-type-assertion',
    meta: {
        docs: {
            description: 'Disallow type assertions that do not change the type of an expression',
            recommended: 'error',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            unnecessaryAssertion: 'This assertion is unnecessary since it does not change the type of the expression.',
            contextuallyUnnecessary: 'This assertion is unnecessary since the receiver accepts the original type of the expression.',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    typesToIgnore: {
                        description: 'A list of type names to ignore.',
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
            },
        ],
        type: 'suggestion',
    },
    defaultOptions: [{}],
    create(context, [options]) {
        const sourceCode = context.getSourceCode();
        const parserServices = util.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
        const compilerOptions = parserServices.program.getCompilerOptions();
        /**
         * Sometimes tuple types don't have ObjectFlags.Tuple set, like when they're being matched against an inferred type.
         * So, in addition, check if there are integer properties 0..n and no other numeric keys
         */
        function couldBeTupleType(type) {
            const properties = type.getProperties();
            if (properties.length === 0) {
                return false;
            }
            let i = 0;
            for (; i < properties.length; ++i) {
                const name = properties[i].name;
                if (String(i) !== name) {
                    if (i === 0) {
                        // if there are no integer properties, this is not a tuple
                        return false;
                    }
                    break;
                }
            }
            for (; i < properties.length; ++i) {
                if (String(+properties[i].name) === properties[i].name) {
                    return false; // if there are any other numeric properties, this is not a tuple
                }
            }
            return true;
        }
        /**
         * Returns true if there's a chance the variable has been used before a value has been assigned to it
         */
        function isPossiblyUsedBeforeAssigned(node) {
            const declaration = util.getDeclaration(checker, node);
            if (!declaration) {
                // don't know what the declaration is for some reason, so just assume the worst
                return true;
            }
            if (
            // non-strict mode doesn't care about used before assigned errors
            (0, tsutils_1.isStrictCompilerOptionEnabled)(compilerOptions, 'strictNullChecks') &&
                // ignore class properties as they are compile time guarded
                // also ignore function arguments as they can't be used before defined
                (0, tsutils_1.isVariableDeclaration)(declaration) &&
                // is it `const x!: number`
                declaration.initializer === undefined &&
                declaration.exclamationToken === undefined &&
                declaration.type !== undefined) {
                // check if the defined variable type has changed since assignment
                const declarationType = checker.getTypeFromTypeNode(declaration.type);
                const type = util.getConstrainedTypeAtLocation(checker, node);
                if (declarationType === type) {
                    // possibly used before assigned, so just skip it
                    // better to false negative and skip it, than false positive and fix to compile erroring code
                    //
                    // no better way to figure this out right now
                    // https://github.com/Microsoft/TypeScript/issues/31124
                    return true;
                }
            }
            return false;
        }
        function isConstAssertion(node) {
            return (node.type === utils_1.AST_NODE_TYPES.TSTypeReference &&
                node.typeName.type === utils_1.AST_NODE_TYPES.Identifier &&
                node.typeName.name === 'const');
        }
        return {
            TSNonNullExpression(node) {
                var _a;
                if (((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.AssignmentExpression &&
                    node.parent.operator === '=') {
                    if (node.parent.left === node) {
                        context.report({
                            node,
                            messageId: 'contextuallyUnnecessary',
                            fix(fixer) {
                                return fixer.removeRange([
                                    node.expression.range[1],
                                    node.range[1],
                                ]);
                            },
                        });
                    }
                    // for all other = assignments we ignore non-null checks
                    // this is because non-null assertions can change the type-flow of the code
                    // so whilst they might be unnecessary for the assignment - they are necessary
                    // for following code
                    return;
                }
                const originalNode = parserServices.esTreeNodeToTSNodeMap.get(node);
                const type = util.getConstrainedTypeAtLocation(checker, originalNode.expression);
                if (!util.isNullableType(type)) {
                    if (isPossiblyUsedBeforeAssigned(originalNode.expression)) {
                        return;
                    }
                    context.report({
                        node,
                        messageId: 'unnecessaryAssertion',
                        fix(fixer) {
                            return fixer.removeRange([
                                node.expression.range[1],
                                node.range[1],
                            ]);
                        },
                    });
                }
                else {
                    // we know it's a nullable type
                    // so figure out if the variable is used in a place that accepts nullable types
                    const contextualType = util.getContextualType(checker, originalNode);
                    if (contextualType) {
                        // in strict mode you can't assign null to undefined, so we have to make sure that
                        // the two types share a nullable type
                        const typeIncludesUndefined = util.isTypeFlagSet(type, ts.TypeFlags.Undefined);
                        const typeIncludesNull = util.isTypeFlagSet(type, ts.TypeFlags.Null);
                        const contextualTypeIncludesUndefined = util.isTypeFlagSet(contextualType, ts.TypeFlags.Undefined);
                        const contextualTypeIncludesNull = util.isTypeFlagSet(contextualType, ts.TypeFlags.Null);
                        // make sure that the parent accepts the same types
                        // i.e. assigning `string | null | undefined` to `string | undefined` is invalid
                        const isValidUndefined = typeIncludesUndefined
                            ? contextualTypeIncludesUndefined
                            : true;
                        const isValidNull = typeIncludesNull
                            ? contextualTypeIncludesNull
                            : true;
                        if (isValidUndefined && isValidNull) {
                            context.report({
                                node,
                                messageId: 'contextuallyUnnecessary',
                                fix(fixer) {
                                    return fixer.removeRange([
                                        node.expression.range[1],
                                        node.range[1],
                                    ]);
                                },
                            });
                        }
                    }
                }
            },
            'TSAsExpression, TSTypeAssertion'(node) {
                var _a;
                if (((_a = options.typesToIgnore) === null || _a === void 0 ? void 0 : _a.includes(sourceCode.getText(node.typeAnnotation))) ||
                    isConstAssertion(node.typeAnnotation)) {
                    return;
                }
                const originalNode = parserServices.esTreeNodeToTSNodeMap.get(node);
                const castType = checker.getTypeAtLocation(originalNode);
                if ((0, tsutils_1.isTypeFlagSet)(castType, ts.TypeFlags.Literal) ||
                    ((0, tsutils_1.isObjectType)(castType) &&
                        ((0, tsutils_1.isObjectFlagSet)(castType, ts.ObjectFlags.Tuple) ||
                            couldBeTupleType(castType)))) {
                    // It's not always safe to remove a cast to a literal type or tuple
                    // type, as those types are sometimes widened without the cast.
                    return;
                }
                const uncastType = checker.getTypeAtLocation(originalNode.expression);
                if (uncastType === castType) {
                    context.report({
                        node,
                        messageId: 'unnecessaryAssertion',
                        fix(fixer) {
                            if (originalNode.kind === ts.SyntaxKind.TypeAssertionExpression) {
                                const closingAngleBracket = sourceCode.getTokenAfter(node.typeAnnotation);
                                return (closingAngleBracket === null || closingAngleBracket === void 0 ? void 0 : closingAngleBracket.value) === '>'
                                    ? fixer.removeRange([
                                        node.range[0],
                                        closingAngleBracket.range[1],
                                    ])
                                    : null;
                            }
                            return fixer.removeRange([
                                node.expression.range[1] + 1,
                                node.range[1],
                            ]);
                        },
                    });
                }
                // TODO - add contextually unnecessary check for this
            },
        };
    },
});
//# sourceMappingURL=no-unnecessary-type-assertion.js.map