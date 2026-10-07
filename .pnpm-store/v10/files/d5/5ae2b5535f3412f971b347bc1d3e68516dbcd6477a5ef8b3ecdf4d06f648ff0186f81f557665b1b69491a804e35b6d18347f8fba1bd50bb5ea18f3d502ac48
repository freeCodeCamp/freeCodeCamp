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
const getMemberHeadLoc_1 = require("../util/getMemberHeadLoc");
const functionScopeBoundaries = [
    utils_1.AST_NODE_TYPES.ArrowFunctionExpression,
    utils_1.AST_NODE_TYPES.FunctionDeclaration,
    utils_1.AST_NODE_TYPES.FunctionExpression,
    utils_1.AST_NODE_TYPES.MethodDefinition,
].join(', ');
exports.default = (0, util_1.createRule)({
    name: 'prefer-readonly',
    meta: {
        type: 'suggestion',
        docs: {
            description: "Require private members to be marked as `readonly` if they're never modified outside of the constructor",
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            preferReadonly: "Member '{{name}}' is never reassigned; mark it as `readonly`.",
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    onlyInlineLambdas: {
                        type: 'boolean',
                        description: 'Whether to restrict checking only to members immediately assigned a lambda value.',
                    },
                },
            },
        ],
    },
    defaultOptions: [{ onlyInlineLambdas: false }],
    create(context, [{ onlyInlineLambdas }]) {
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        const classScopeStack = [];
        function handlePropertyAccessExpression(node, parent, classScope) {
            if (ts.isBinaryExpression(parent)) {
                handleParentBinaryExpression(node, parent, classScope);
                return;
            }
            if (ts.isDeleteExpression(parent) || isDestructuringAssignment(node)) {
                classScope.addVariableModification(node);
                return;
            }
            if (ts.isPostfixUnaryExpression(parent) ||
                ts.isPrefixUnaryExpression(parent)) {
                handleParentPostfixOrPrefixUnaryExpression(parent, classScope);
            }
        }
        function handleParentBinaryExpression(node, parent, classScope) {
            if (parent.left === node &&
                tsutils.isAssignmentKind(parent.operatorToken.kind)) {
                classScope.addVariableModification(node);
            }
        }
        function handleParentPostfixOrPrefixUnaryExpression(node, classScope) {
            if (node.operator === ts.SyntaxKind.PlusPlusToken ||
                node.operator === ts.SyntaxKind.MinusMinusToken) {
                classScope.addVariableModification(node.operand);
            }
        }
        function isDestructuringAssignment(node) {
            let current = node.parent;
            while (current) {
                const parent = current.parent;
                if (ts.isObjectLiteralExpression(parent) ||
                    ts.isArrayLiteralExpression(parent) ||
                    ts.isSpreadAssignment(parent) ||
                    (ts.isSpreadElement(parent) &&
                        ts.isArrayLiteralExpression(parent.parent))) {
                    current = parent;
                }
                else if (ts.isBinaryExpression(parent) &&
                    !ts.isPropertyAccessExpression(current)) {
                    return (parent.left === current &&
                        parent.operatorToken.kind === ts.SyntaxKind.EqualsToken);
                }
                else {
                    break;
                }
            }
            return false;
        }
        function isFunctionScopeBoundaryInStack(node) {
            if (classScopeStack.length === 0) {
                return false;
            }
            const tsNode = services.esTreeNodeToTSNodeMap.get(node);
            if (ts.isConstructorDeclaration(tsNode)) {
                return false;
            }
            return tsutils.isFunctionScopeBoundary(tsNode);
        }
        function getEsNodesFromViolatingNode(violatingNode) {
            return {
                esNode: services.tsNodeToESTreeNodeMap.get(violatingNode),
                nameNode: services.tsNodeToESTreeNodeMap.get(violatingNode.name),
            };
        }
        function getTypeAnnotationForViolatingNode(node, type, initializerType) {
            const annotation = checker.typeToString(type);
            // verify the about-to-be-added type annotation is in-scope
            if (tsutils.isTypeFlagSet(initializerType, ts.TypeFlags.EnumLiteral)) {
                const scope = context.sourceCode.getScope(node);
                const variable = utils_1.ASTUtils.findVariable(scope, annotation);
                if (variable == null) {
                    return null;
                }
                const definition = variable.defs.find(def => def.isTypeDefinition);
                if (definition == null) {
                    return null;
                }
                const definitionType = services.getTypeAtLocation(definition.node);
                if (definitionType !== type) {
                    return null;
                }
            }
            return annotation;
        }
        return {
            [`${functionScopeBoundaries}:exit`](node) {
                if (utils_1.ASTUtils.isConstructor(node)) {
                    classScopeStack[classScopeStack.length - 1].exitConstructor();
                }
                else if (isFunctionScopeBoundaryInStack(node)) {
                    classScopeStack[classScopeStack.length - 1].exitNonConstructor();
                }
            },
            'ClassDeclaration, ClassExpression'(node) {
                classScopeStack.push(new ClassScope(checker, services.esTreeNodeToTSNodeMap.get(node), onlyInlineLambdas));
            },
            'ClassDeclaration, ClassExpression:exit'() {
                const finalizedClassScope = (0, util_1.nullThrows)(classScopeStack.pop(), 'Stack should exist on class exit');
                for (const violatingNode of finalizedClassScope.finalizeUnmodifiedPrivateNonReadonlys()) {
                    const { esNode, nameNode } = getEsNodesFromViolatingNode(violatingNode);
                    const reportNodeOrLoc = (() => {
                        switch (esNode.type) {
                            case utils_1.AST_NODE_TYPES.MethodDefinition:
                            case utils_1.AST_NODE_TYPES.PropertyDefinition:
                            case utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition:
                                return { loc: (0, getMemberHeadLoc_1.getMemberHeadLoc)(context.sourceCode, esNode) };
                            case utils_1.AST_NODE_TYPES.TSParameterProperty:
                                return {
                                    loc: (0, getMemberHeadLoc_1.getParameterPropertyHeadLoc)(context.sourceCode, esNode, nameNode.name),
                                };
                            default:
                                return { node: esNode };
                        }
                    })();
                    const typeAnnotation = (() => {
                        if (esNode.type !== utils_1.AST_NODE_TYPES.PropertyDefinition) {
                            return null;
                        }
                        if (esNode.typeAnnotation || !esNode.value) {
                            return null;
                        }
                        if (nameNode.type !== utils_1.AST_NODE_TYPES.Identifier) {
                            return null;
                        }
                        const hasConstructorModifications = finalizedClassScope.memberHasConstructorModifications(nameNode.name);
                        if (!hasConstructorModifications) {
                            return null;
                        }
                        const violatingType = services.getTypeAtLocation(esNode);
                        const initializerType = services.getTypeAtLocation(esNode.value);
                        // if the RHS is a literal, its type would be narrowed, while the
                        // type of the initializer (which isn't `readonly`) would be the
                        // widened type
                        if (initializerType === violatingType) {
                            return null;
                        }
                        if (!tsutils.isLiteralType(initializerType)) {
                            return null;
                        }
                        return getTypeAnnotationForViolatingNode(esNode, violatingType, initializerType);
                    })();
                    context.report({
                        ...reportNodeOrLoc,
                        messageId: 'preferReadonly',
                        data: {
                            name: context.sourceCode.getText(nameNode),
                        },
                        *fix(fixer) {
                            const readonlyInsertionTarget = esNode.type === utils_1.AST_NODE_TYPES.PropertyDefinition &&
                                esNode.computed
                                ? (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(nameNode), 'Expected to find a token before computed property name')
                                : nameNode;
                            yield fixer.insertTextBefore(readonlyInsertionTarget, 'readonly ');
                            if (typeAnnotation) {
                                yield fixer.insertTextAfter(nameNode, `: ${typeAnnotation}`);
                            }
                        },
                    });
                }
            },
            [functionScopeBoundaries](node) {
                if (utils_1.ASTUtils.isConstructor(node)) {
                    classScopeStack[classScopeStack.length - 1].enterConstructor(services.esTreeNodeToTSNodeMap.get(node));
                }
                else if (isFunctionScopeBoundaryInStack(node)) {
                    classScopeStack[classScopeStack.length - 1].enterNonConstructor();
                }
            },
            MemberExpression(node) {
                if (classScopeStack.length === 0) {
                    return;
                }
                const classScope = classScopeStack[classScopeStack.length - 1];
                if (!node.computed) {
                    const tsNode = services.esTreeNodeToTSNodeMap.get(node);
                    handlePropertyAccessExpression(tsNode, tsNode.parent, classScope);
                }
                else {
                    const tsNode = services.esTreeNodeToTSNodeMap.get(node);
                    if (ts.isElementAccessExpression(tsNode) &&
                        ts.isBinaryExpression(tsNode.parent) &&
                        tsNode.parent.left === tsNode &&
                        tsutils.isAssignmentKind(tsNode.parent.operatorToken.kind)) {
                        const memberName = (0, util_1.getStaticMemberAccessValue)(node, context);
                        if (typeof memberName === 'string') {
                            classScope.addVariableModificationByName(tsNode.expression, memberName);
                        }
                    }
                }
            },
        };
    },
});
const OUTSIDE_CONSTRUCTOR = -1;
const DIRECTLY_INSIDE_CONSTRUCTOR = 0;
var TypeToClassRelation;
(function (TypeToClassRelation) {
    TypeToClassRelation[TypeToClassRelation["ClassAndInstance"] = 0] = "ClassAndInstance";
    TypeToClassRelation[TypeToClassRelation["Class"] = 1] = "Class";
    TypeToClassRelation[TypeToClassRelation["Instance"] = 2] = "Instance";
    TypeToClassRelation[TypeToClassRelation["None"] = 3] = "None";
})(TypeToClassRelation || (TypeToClassRelation = {}));
class ClassScope {
    checker;
    onlyInlineLambdas;
    classType;
    constructorScopeDepth = OUTSIDE_CONSTRUCTOR;
    memberVariableModifications = new Set();
    memberVariableWithConstructorModifications = new Set();
    privateModifiableMembers = new Map();
    privateModifiableStatics = new Map();
    staticVariableModifications = new Set();
    constructor(checker, classNode, onlyInlineLambdas) {
        this.checker = checker;
        this.onlyInlineLambdas = onlyInlineLambdas;
        const classType = checker.getTypeAtLocation(classNode);
        if (tsutils.isIntersectionType(classType)) {
            this.classType = classType.types[0];
        }
        else {
            this.classType = classType;
        }
        for (const member of classNode.members) {
            if (ts.isPropertyDeclaration(member)) {
                this.addDeclaredVariable(member);
            }
        }
    }
    addDeclaredVariable(node) {
        if (!(tsutils.isModifierFlagSet(node, ts.ModifierFlags.Private) ||
            node.name.kind === ts.SyntaxKind.PrivateIdentifier) ||
            tsutils.isModifierFlagSet(node, ts.ModifierFlags.Accessor | ts.ModifierFlags.Readonly)) {
            return;
        }
        if (this.onlyInlineLambdas &&
            node.initializer != null &&
            !ts.isArrowFunction(node.initializer)) {
            return;
        }
        const memberName = getMemberName(node.name);
        if (memberName == null) {
            return;
        }
        (tsutils.isModifierFlagSet(node, ts.ModifierFlags.Static)
            ? this.privateModifiableStatics
            : this.privateModifiableMembers).set(memberName, node);
    }
    addVariableModification(node) {
        this.addVariableModificationByName(node.expression, node.name.text);
    }
    addVariableModificationByName(expression, memberName) {
        const modifierType = this.checker.getTypeAtLocation(expression);
        const relationOfModifierTypeToClass = this.getTypeToClassRelation(modifierType);
        if (relationOfModifierTypeToClass === TypeToClassRelation.Instance &&
            this.constructorScopeDepth === DIRECTLY_INSIDE_CONSTRUCTOR) {
            this.memberVariableWithConstructorModifications.add(memberName);
            return;
        }
        if (relationOfModifierTypeToClass === TypeToClassRelation.Instance ||
            relationOfModifierTypeToClass === TypeToClassRelation.ClassAndInstance) {
            this.memberVariableModifications.add(memberName);
        }
        if (relationOfModifierTypeToClass === TypeToClassRelation.Class ||
            relationOfModifierTypeToClass === TypeToClassRelation.ClassAndInstance) {
            this.staticVariableModifications.add(memberName);
        }
    }
    enterConstructor(node) {
        this.constructorScopeDepth = DIRECTLY_INSIDE_CONSTRUCTOR;
        for (const parameter of node.parameters) {
            if (tsutils.isModifierFlagSet(parameter, ts.ModifierFlags.Private)) {
                this.addDeclaredVariable(parameter);
            }
        }
    }
    enterNonConstructor() {
        if (this.constructorScopeDepth !== OUTSIDE_CONSTRUCTOR) {
            this.constructorScopeDepth += 1;
        }
    }
    exitConstructor() {
        this.constructorScopeDepth = OUTSIDE_CONSTRUCTOR;
    }
    exitNonConstructor() {
        if (this.constructorScopeDepth !== OUTSIDE_CONSTRUCTOR) {
            this.constructorScopeDepth -= 1;
        }
    }
    finalizeUnmodifiedPrivateNonReadonlys() {
        this.memberVariableModifications.forEach(variableName => {
            this.privateModifiableMembers.delete(variableName);
        });
        this.staticVariableModifications.forEach(variableName => {
            this.privateModifiableStatics.delete(variableName);
        });
        return [
            ...this.privateModifiableMembers.values(),
            ...this.privateModifiableStatics.values(),
        ];
    }
    getTypeToClassRelation(type) {
        if (type.isIntersection()) {
            let result = TypeToClassRelation.None;
            for (const subType of type.types) {
                const subTypeResult = this.getTypeToClassRelation(subType);
                switch (subTypeResult) {
                    case TypeToClassRelation.Class:
                        if (result === TypeToClassRelation.Instance) {
                            return TypeToClassRelation.ClassAndInstance;
                        }
                        result = TypeToClassRelation.Class;
                        break;
                    case TypeToClassRelation.Instance:
                        if (result === TypeToClassRelation.Class) {
                            return TypeToClassRelation.ClassAndInstance;
                        }
                        result = TypeToClassRelation.Instance;
                        break;
                }
            }
            return result;
        }
        if (type.isUnion()) {
            // any union of class/instance and something else will prevent access to
            // private members, so we assume that union consists only of classes
            // or class instances, because otherwise tsc will report an error
            return this.getTypeToClassRelation(type.types[0]);
        }
        if (!type.getSymbol() || !(0, util_1.typeIsOrHasBaseType)(type, this.classType)) {
            return TypeToClassRelation.None;
        }
        const typeIsClass = tsutils.isObjectType(type) &&
            tsutils.isObjectFlagSet(type, ts.ObjectFlags.Anonymous);
        if (typeIsClass) {
            return TypeToClassRelation.Class;
        }
        return TypeToClassRelation.Instance;
    }
    memberHasConstructorModifications(name) {
        return this.memberVariableWithConstructorModifications.has(name);
    }
}
function getMemberName(name) {
    if (ts.isIdentifier(name) ||
        ts.isPrivateIdentifier(name) ||
        ts.isStringLiteral(name) ||
        ts.isNoSubstitutionTemplateLiteral(name) ||
        ts.isNumericLiteral(name)) {
        return name.text;
    }
    if (ts.isComputedPropertyName(name)) {
        const expression = name.expression;
        if (ts.isNumericLiteral(expression)) {
            return expression.text;
        }
        if (ts.isPropertyAccessExpression(expression) &&
            ts.isIdentifier(expression.expression) &&
            expression.expression.text === 'Symbol') {
            return expression.getText();
        }
    }
    return undefined;
}
//# sourceMappingURL=prefer-readonly.js.map