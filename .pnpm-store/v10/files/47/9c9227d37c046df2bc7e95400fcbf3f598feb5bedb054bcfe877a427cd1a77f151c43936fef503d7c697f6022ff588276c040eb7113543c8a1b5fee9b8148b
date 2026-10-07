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
const tsutils = __importStar(require("tsutils"));
const ts = __importStar(require("typescript"));
const util = __importStar(require("../util"));
const util_1 = require("../util");
const functionScopeBoundaries = [
    utils_1.AST_NODE_TYPES.ArrowFunctionExpression,
    utils_1.AST_NODE_TYPES.FunctionDeclaration,
    utils_1.AST_NODE_TYPES.FunctionExpression,
    utils_1.AST_NODE_TYPES.MethodDefinition,
].join(', ');
exports.default = util.createRule({
    name: 'prefer-readonly',
    meta: {
        docs: {
            description: "Require private members to be marked as `readonly` if they're never modified outside of the constructor",
            recommended: false,
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            preferReadonly: "Member '{{name}}' is never reassigned; mark it as `readonly`.",
        },
        schema: [
            {
                allowAdditionalProperties: false,
                properties: {
                    onlyInlineLambdas: {
                        type: 'boolean',
                    },
                },
                type: 'object',
            },
        ],
        type: 'suggestion',
    },
    defaultOptions: [{ onlyInlineLambdas: false }],
    create(context, [{ onlyInlineLambdas }]) {
        const parserServices = util.getParserServices(context);
        const checker = parserServices.program.getTypeChecker();
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
            const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
            if (ts.isConstructorDeclaration(tsNode)) {
                return false;
            }
            return tsutils.isFunctionScopeBoundary(tsNode);
        }
        function getEsNodesFromViolatingNode(violatingNode) {
            if (ts.isParameterPropertyDeclaration(violatingNode, violatingNode.parent)) {
                return {
                    esNode: parserServices.tsNodeToESTreeNodeMap.get(violatingNode.name),
                    nameNode: parserServices.tsNodeToESTreeNodeMap.get(violatingNode.name),
                };
            }
            return {
                esNode: parserServices.tsNodeToESTreeNodeMap.get(violatingNode),
                nameNode: parserServices.tsNodeToESTreeNodeMap.get(violatingNode.name),
            };
        }
        return {
            'ClassDeclaration, ClassExpression'(node) {
                classScopeStack.push(new ClassScope(checker, parserServices.esTreeNodeToTSNodeMap.get(node), onlyInlineLambdas));
            },
            'ClassDeclaration, ClassExpression:exit'() {
                const finalizedClassScope = classScopeStack.pop();
                const sourceCode = context.getSourceCode();
                for (const violatingNode of finalizedClassScope.finalizeUnmodifiedPrivateNonReadonlys()) {
                    const { esNode, nameNode } = getEsNodesFromViolatingNode(violatingNode);
                    context.report({
                        data: {
                            name: sourceCode.getText(nameNode),
                        },
                        fix: fixer => fixer.insertTextBefore(nameNode, 'readonly '),
                        messageId: 'preferReadonly',
                        node: esNode,
                    });
                }
            },
            MemberExpression(node) {
                if (classScopeStack.length !== 0 && !node.computed) {
                    const tsNode = parserServices.esTreeNodeToTSNodeMap.get(node);
                    handlePropertyAccessExpression(tsNode, tsNode.parent, classScopeStack[classScopeStack.length - 1]);
                }
            },
            [functionScopeBoundaries](node) {
                if (utils_1.ASTUtils.isConstructor(node)) {
                    classScopeStack[classScopeStack.length - 1].enterConstructor(parserServices.esTreeNodeToTSNodeMap.get(node));
                }
                else if (isFunctionScopeBoundaryInStack(node)) {
                    classScopeStack[classScopeStack.length - 1].enterNonConstructor();
                }
            },
            [`${functionScopeBoundaries}:exit`](node) {
                if (utils_1.ASTUtils.isConstructor(node)) {
                    classScopeStack[classScopeStack.length - 1].exitConstructor();
                }
                else if (isFunctionScopeBoundaryInStack(node)) {
                    classScopeStack[classScopeStack.length - 1].exitNonConstructor();
                }
            },
        };
    },
});
const OUTSIDE_CONSTRUCTOR = -1;
const DIRECTLY_INSIDE_CONSTRUCTOR = 0;
class ClassScope {
    constructor(checker, classNode, onlyInlineLambdas) {
        this.checker = checker;
        this.onlyInlineLambdas = onlyInlineLambdas;
        this.privateModifiableMembers = new Map();
        this.privateModifiableStatics = new Map();
        this.memberVariableModifications = new Set();
        this.staticVariableModifications = new Set();
        this.constructorScopeDepth = OUTSIDE_CONSTRUCTOR;
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
        if (!tsutils.isModifierFlagSet(node, ts.ModifierFlags.Private) ||
            tsutils.isModifierFlagSet(node, ts.ModifierFlags.Readonly) ||
            ts.isComputedPropertyName(node.name)) {
            return;
        }
        if (this.onlyInlineLambdas &&
            node.initializer !== undefined &&
            !ts.isArrowFunction(node.initializer)) {
            return;
        }
        (tsutils.isModifierFlagSet(node, ts.ModifierFlags.Static)
            ? this.privateModifiableStatics
            : this.privateModifiableMembers).set(node.name.getText(), node);
    }
    addVariableModification(node) {
        const modifierType = this.checker.getTypeAtLocation(node.expression);
        if (!modifierType.getSymbol() ||
            !(0, util_1.typeIsOrHasBaseType)(modifierType, this.classType)) {
            return;
        }
        const modifyingStatic = tsutils.isObjectType(modifierType) &&
            tsutils.isObjectFlagSet(modifierType, ts.ObjectFlags.Anonymous);
        if (!modifyingStatic &&
            this.constructorScopeDepth === DIRECTLY_INSIDE_CONSTRUCTOR) {
            return;
        }
        (modifyingStatic
            ? this.staticVariableModifications
            : this.memberVariableModifications).add(node.name.text);
    }
    enterConstructor(node) {
        this.constructorScopeDepth = DIRECTLY_INSIDE_CONSTRUCTOR;
        for (const parameter of node.parameters) {
            if (tsutils.isModifierFlagSet(parameter, ts.ModifierFlags.Private)) {
                this.addDeclaredVariable(parameter);
            }
        }
    }
    exitConstructor() {
        this.constructorScopeDepth = OUTSIDE_CONSTRUCTOR;
    }
    enterNonConstructor() {
        if (this.constructorScopeDepth !== OUTSIDE_CONSTRUCTOR) {
            this.constructorScopeDepth += 1;
        }
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
            ...Array.from(this.privateModifiableMembers.values()),
            ...Array.from(this.privateModifiableStatics.values()),
        ];
    }
}
//# sourceMappingURL=prefer-readonly.js.map