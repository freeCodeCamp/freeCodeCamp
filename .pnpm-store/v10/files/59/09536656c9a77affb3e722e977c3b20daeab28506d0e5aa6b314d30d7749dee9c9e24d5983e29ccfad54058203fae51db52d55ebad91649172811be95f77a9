"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const UNNECESSARY_OPERATORS = new Set(['??=', '&&=', '=', '||=']);
exports.default = (0, util_1.createRule)({
    name: 'no-unnecessary-parameter-property-assignment',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow unnecessary assignment of constructor property parameter',
        },
        messages: {
            unnecessaryAssign: 'This assignment is unnecessary since it is already assigned by a parameter property.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const reportInfoStack = [];
        function isThisMemberExpression(node) {
            return (node.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                node.object.type === utils_1.AST_NODE_TYPES.ThisExpression);
        }
        function getPropertyName(node) {
            if (!isThisMemberExpression(node)) {
                return null;
            }
            if (!node.computed && node.property.type === utils_1.AST_NODE_TYPES.Identifier) {
                return node.property.name;
            }
            if (node.computed) {
                return (0, util_1.getStaticStringValue)(node.property);
            }
            return null;
        }
        function findParentFunction(node) {
            if (!node ||
                node.type === utils_1.AST_NODE_TYPES.FunctionDeclaration ||
                node.type === utils_1.AST_NODE_TYPES.FunctionExpression ||
                node.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression) {
                return node;
            }
            return findParentFunction(node.parent);
        }
        function findParentPropertyDefinition(node) {
            if (!node || node.type === utils_1.AST_NODE_TYPES.PropertyDefinition) {
                return node;
            }
            return findParentPropertyDefinition(node.parent);
        }
        function isConstructorFunctionExpression(node) {
            return (node?.type === utils_1.AST_NODE_TYPES.FunctionExpression &&
                utils_1.ASTUtils.isConstructor(node.parent));
        }
        function isReferenceFromParameter(node) {
            const scope = context.sourceCode.getScope(node);
            const rightRef = scope.references.find(ref => ref.identifier.name === node.name);
            return rightRef?.resolved?.defs.at(0)?.type === scope_manager_1.DefinitionType.Parameter;
        }
        function isParameterPropertyWithName(node, name) {
            return (node.type === utils_1.AST_NODE_TYPES.TSParameterProperty &&
                ((node.parameter.type === utils_1.AST_NODE_TYPES.Identifier && // constructor (public foo) {}
                    node.parameter.name === name) ||
                    (node.parameter.type === utils_1.AST_NODE_TYPES.AssignmentPattern && // constructor (public foo = 1) {}
                        node.parameter.left.name === name)));
        }
        function getIdentifier(node) {
            if (node.type === utils_1.AST_NODE_TYPES.Identifier) {
                return node;
            }
            if (node.type === utils_1.AST_NODE_TYPES.TSAsExpression ||
                node.type === utils_1.AST_NODE_TYPES.TSNonNullExpression) {
                return getIdentifier(node.expression);
            }
            return null;
        }
        function isArrowIIFE(node) {
            return (node.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
                node.parent.type === utils_1.AST_NODE_TYPES.CallExpression);
        }
        return {
            ClassBody() {
                reportInfoStack.push({
                    assignedBeforeConstructor: new Set(),
                    assignedBeforeUnnecessary: new Set(),
                    unnecessaryAssignments: [],
                });
            },
            'ClassBody:exit'() {
                const { assignedBeforeConstructor, unnecessaryAssignments } = (0, util_1.nullThrows)(reportInfoStack.pop(), 'The top stack should exist');
                unnecessaryAssignments.forEach(({ name, node }) => {
                    if (assignedBeforeConstructor.has(name)) {
                        return;
                    }
                    context.report({
                        node,
                        messageId: 'unnecessaryAssign',
                    });
                });
            },
            "MethodDefinition[kind='constructor'] > FunctionExpression AssignmentExpression"(node) {
                let functionNode = findParentFunction(node);
                if (functionNode && isArrowIIFE(functionNode)) {
                    functionNode = findParentFunction(functionNode.parent);
                }
                if (!isConstructorFunctionExpression(functionNode)) {
                    return;
                }
                const { assignedBeforeUnnecessary, unnecessaryAssignments } = (0, util_1.nullThrows)(reportInfoStack.at(reportInfoStack.length - 1), 'The top of stack should exist');
                // A prior write to the parameter binding means a later `this.x = x`
                // may copy a different value than the parameter property initialized.
                if (node.left.type === utils_1.AST_NODE_TYPES.Identifier) {
                    if (isReferenceFromParameter(node.left)) {
                        assignedBeforeUnnecessary.add(node.left.name);
                    }
                    return;
                }
                const leftName = getPropertyName(node.left);
                if (!leftName) {
                    return;
                }
                if (!UNNECESSARY_OPERATORS.has(node.operator)) {
                    assignedBeforeUnnecessary.add(leftName);
                    return;
                }
                const rightId = getIdentifier(node.right);
                if (leftName !== rightId?.name || !isReferenceFromParameter(rightId)) {
                    return;
                }
                const hasParameterProperty = functionNode.params.some(param => isParameterPropertyWithName(param, rightId.name));
                if (hasParameterProperty && !assignedBeforeUnnecessary.has(leftName)) {
                    unnecessaryAssignments.push({
                        name: leftName,
                        node,
                    });
                }
            },
            'PropertyDefinition AssignmentExpression'(node) {
                const name = getPropertyName(node.left);
                if (!name) {
                    return;
                }
                const functionNode = findParentFunction(node);
                if (functionNode &&
                    !(isArrowIIFE(functionNode) &&
                        findParentPropertyDefinition(node)?.value === functionNode.parent)) {
                    return;
                }
                const { assignedBeforeConstructor } = (0, util_1.nullThrows)(reportInfoStack.at(-1), 'The top stack should exist');
                assignedBeforeConstructor.add(name);
            },
        };
    },
});
//# sourceMappingURL=no-unnecessary-parameter-property-assignment.js.map