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
const util = __importStar(require("../util"));
const util_1 = require("../util");
exports.default = util.createRule({
    name: 'no-unsafe-assignment',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow assigning a value with type `any` to variables and properties',
            recommended: 'error',
            requiresTypeChecking: true,
        },
        messages: {
            anyAssignment: 'Unsafe assignment of an `any` value.',
            anyAssignmentThis: [
                'Unsafe assignment of an `any` value. `this` is typed as `any`.',
                'You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.',
            ].join('\n'),
            unsafeArrayPattern: 'Unsafe array destructuring of an `any` array value.',
            unsafeArrayPatternFromTuple: 'Unsafe array destructuring of a tuple element with an `any` value.',
            unsafeAssignment: 'Unsafe assignment of type {{sender}} to a variable of type {{receiver}}.',
            unsafeArraySpread: 'Unsafe spread of an `any` value in an array.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const { program, esTreeNodeToTSNodeMap } = util.getParserServices(context);
        const checker = program.getTypeChecker();
        const compilerOptions = program.getCompilerOptions();
        const isNoImplicitThis = tsutils.isStrictCompilerOptionEnabled(compilerOptions, 'noImplicitThis');
        // returns true if the assignment reported
        function checkArrayDestructureHelper(receiverNode, senderNode) {
            if (receiverNode.type !== utils_1.AST_NODE_TYPES.ArrayPattern) {
                return false;
            }
            const senderTsNode = esTreeNodeToTSNodeMap.get(senderNode);
            const senderType = checker.getTypeAtLocation(senderTsNode);
            return checkArrayDestructure(receiverNode, senderType, senderTsNode);
        }
        // returns true if the assignment reported
        function checkArrayDestructure(receiverNode, senderType, senderNode) {
            // any array
            // const [x] = ([] as any[]);
            if (util.isTypeAnyArrayType(senderType, checker)) {
                context.report({
                    node: receiverNode,
                    messageId: 'unsafeArrayPattern',
                });
                return false;
            }
            if (!checker.isTupleType(senderType)) {
                return true;
            }
            const tupleElements = util.getTypeArguments(senderType, checker);
            // tuple with any
            // const [x] = [1 as any];
            let didReport = false;
            for (let receiverIndex = 0; receiverIndex < receiverNode.elements.length; receiverIndex += 1) {
                const receiverElement = receiverNode.elements[receiverIndex];
                if (!receiverElement) {
                    continue;
                }
                if (receiverElement.type === utils_1.AST_NODE_TYPES.RestElement) {
                    // don't handle rests as they're not a 1:1 assignment
                    continue;
                }
                const senderType = tupleElements[receiverIndex];
                if (!senderType) {
                    continue;
                }
                // check for the any type first so we can handle [[[x]]] = [any]
                if (util.isTypeAnyType(senderType)) {
                    context.report({
                        node: receiverElement,
                        messageId: 'unsafeArrayPatternFromTuple',
                    });
                    // we want to report on every invalid element in the tuple
                    didReport = true;
                }
                else if (receiverElement.type === utils_1.AST_NODE_TYPES.ArrayPattern) {
                    didReport = checkArrayDestructure(receiverElement, senderType, senderNode);
                }
                else if (receiverElement.type === utils_1.AST_NODE_TYPES.ObjectPattern) {
                    didReport = checkObjectDestructure(receiverElement, senderType, senderNode);
                }
            }
            return didReport;
        }
        // returns true if the assignment reported
        function checkObjectDestructureHelper(receiverNode, senderNode) {
            if (receiverNode.type !== utils_1.AST_NODE_TYPES.ObjectPattern) {
                return false;
            }
            const senderTsNode = esTreeNodeToTSNodeMap.get(senderNode);
            const senderType = checker.getTypeAtLocation(senderTsNode);
            return checkObjectDestructure(receiverNode, senderType, senderTsNode);
        }
        // returns true if the assignment reported
        function checkObjectDestructure(receiverNode, senderType, senderNode) {
            const properties = new Map(senderType
                .getProperties()
                .map(property => [
                property.getName(),
                checker.getTypeOfSymbolAtLocation(property, senderNode),
            ]));
            let didReport = false;
            for (const receiverProperty of receiverNode.properties) {
                if (receiverProperty.type === utils_1.AST_NODE_TYPES.RestElement) {
                    // don't bother checking rest
                    continue;
                }
                let key;
                if (receiverProperty.computed === false) {
                    key =
                        receiverProperty.key.type === utils_1.AST_NODE_TYPES.Identifier
                            ? receiverProperty.key.name
                            : String(receiverProperty.key.value);
                }
                else if (receiverProperty.key.type === utils_1.AST_NODE_TYPES.Literal) {
                    key = String(receiverProperty.key.value);
                }
                else if (receiverProperty.key.type === utils_1.AST_NODE_TYPES.TemplateLiteral &&
                    receiverProperty.key.quasis.length === 1) {
                    key = String(receiverProperty.key.quasis[0].value.cooked);
                }
                else {
                    // can't figure out the name, so skip it
                    continue;
                }
                const senderType = properties.get(key);
                if (!senderType) {
                    continue;
                }
                // check for the any type first so we can handle {x: {y: z}} = {x: any}
                if (util.isTypeAnyType(senderType)) {
                    context.report({
                        node: receiverProperty.value,
                        messageId: 'unsafeArrayPatternFromTuple',
                    });
                    didReport = true;
                }
                else if (receiverProperty.value.type === utils_1.AST_NODE_TYPES.ArrayPattern) {
                    didReport = checkArrayDestructure(receiverProperty.value, senderType, senderNode);
                }
                else if (receiverProperty.value.type === utils_1.AST_NODE_TYPES.ObjectPattern) {
                    didReport = checkObjectDestructure(receiverProperty.value, senderType, senderNode);
                }
            }
            return didReport;
        }
        // returns true if the assignment reported
        function checkAssignment(receiverNode, senderNode, reportingNode, comparisonType) {
            var _a;
            const receiverTsNode = esTreeNodeToTSNodeMap.get(receiverNode);
            const receiverType = comparisonType === 2 /* ComparisonType.Contextual */
                ? (_a = util.getContextualType(checker, receiverTsNode)) !== null && _a !== void 0 ? _a : checker.getTypeAtLocation(receiverTsNode)
                : checker.getTypeAtLocation(receiverTsNode);
            const senderType = checker.getTypeAtLocation(esTreeNodeToTSNodeMap.get(senderNode));
            if (util.isTypeAnyType(senderType)) {
                // handle cases when we assign any ==> unknown.
                if (util.isTypeUnknownType(receiverType)) {
                    return false;
                }
                let messageId = 'anyAssignment';
                if (!isNoImplicitThis) {
                    // `var foo = this`
                    const thisExpression = (0, util_1.getThisExpression)(senderNode);
                    if (thisExpression &&
                        util.isTypeAnyType(util.getConstrainedTypeAtLocation(checker, esTreeNodeToTSNodeMap.get(thisExpression)))) {
                        messageId = 'anyAssignmentThis';
                    }
                }
                context.report({
                    node: reportingNode,
                    messageId,
                });
                return true;
            }
            if (comparisonType === 0 /* ComparisonType.None */) {
                return false;
            }
            const result = util.isUnsafeAssignment(senderType, receiverType, checker, senderNode);
            if (!result) {
                return false;
            }
            const { sender, receiver } = result;
            context.report({
                node: reportingNode,
                messageId: 'unsafeAssignment',
                data: {
                    sender: checker.typeToString(sender),
                    receiver: checker.typeToString(receiver),
                },
            });
            return true;
        }
        function getComparisonType(typeAnnotation) {
            return typeAnnotation
                ? // if there's a type annotation, we can do a comparison
                    1 /* ComparisonType.Basic */
                : // no type annotation means the variable's type will just be inferred, thus equal
                    0 /* ComparisonType.None */;
        }
        return {
            'VariableDeclarator[init != null]'(node) {
                const init = util.nullThrows(node.init, util.NullThrowsReasons.MissingToken(node.type, 'init'));
                let didReport = checkAssignment(node.id, init, node, getComparisonType(node.id.typeAnnotation));
                if (!didReport) {
                    didReport = checkArrayDestructureHelper(node.id, init);
                }
                if (!didReport) {
                    checkObjectDestructureHelper(node.id, init);
                }
            },
            'PropertyDefinition[value != null]'(node) {
                checkAssignment(node.key, node.value, node, getComparisonType(node.typeAnnotation));
            },
            'AssignmentExpression[operator = "="], AssignmentPattern'(node) {
                let didReport = checkAssignment(node.left, node.right, node, 1 /* ComparisonType.Basic */);
                if (!didReport) {
                    didReport = checkArrayDestructureHelper(node.left, node.right);
                }
                if (!didReport) {
                    checkObjectDestructureHelper(node.left, node.right);
                }
            },
            // object pattern props are checked via assignments
            ':not(ObjectPattern) > Property'(node) {
                if (node.value.type === utils_1.AST_NODE_TYPES.AssignmentPattern ||
                    node.value.type === utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression) {
                    // handled by other selector
                    return;
                }
                checkAssignment(node.key, node.value, node, 2 /* ComparisonType.Contextual */);
            },
            'ArrayExpression > SpreadElement'(node) {
                const resetNode = esTreeNodeToTSNodeMap.get(node.argument);
                const restType = checker.getTypeAtLocation(resetNode);
                if (util.isTypeAnyType(restType) ||
                    util.isTypeAnyArrayType(restType, checker)) {
                    context.report({
                        node: node,
                        messageId: 'unsafeArraySpread',
                    });
                }
            },
            'JSXAttribute[value != null]'(node) {
                const value = util.nullThrows(node.value, util.NullThrowsReasons.MissingToken(node.type, 'value'));
                if (value.type !== utils_1.AST_NODE_TYPES.JSXExpressionContainer ||
                    value.expression.type === utils_1.AST_NODE_TYPES.JSXEmptyExpression) {
                    return;
                }
                checkAssignment(node.name, value.expression, value.expression, 2 /* ComparisonType.Contextual */);
            },
        };
    },
});
//# sourceMappingURL=no-unsafe-assignment.js.map