"use strict";
// any is required to work around manipulating the AST in weird ways
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment */
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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-extra-parens');
exports.default = util.createRule({
    name: 'no-extra-parens',
    meta: {
        type: 'layout',
        docs: {
            description: 'Disallow unnecessary parentheses',
            recommended: false,
            extendsBaseRule: true,
        },
        fixable: 'code',
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: baseRule.meta.schema,
        messages: baseRule.meta.messages,
    },
    defaultOptions: ['all'],
    create(context) {
        const rules = baseRule.create(context);
        function binaryExp(node) {
            const rule = rules.BinaryExpression;
            // makes the rule think it should skip the left or right
            const isLeftTypeAssertion = util.isTypeAssertion(node.left);
            const isRightTypeAssertion = util.isTypeAssertion(node.right);
            if (isLeftTypeAssertion && isRightTypeAssertion) {
                return; // ignore
            }
            if (isLeftTypeAssertion) {
                return rule(Object.assign(Object.assign({}, node), { left: Object.assign(Object.assign({}, node.left), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
            }
            if (isRightTypeAssertion) {
                return rule(Object.assign(Object.assign({}, node), { right: Object.assign(Object.assign({}, node.right), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
            }
            return rule(node);
        }
        function callExp(node) {
            var _a;
            const rule = rules.CallExpression;
            if (util.isTypeAssertion(node.callee)) {
                // reduces the precedence of the node so the rule thinks it needs to be wrapped
                return rule(Object.assign(Object.assign({}, node), { callee: Object.assign(Object.assign({}, node.callee), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
            }
            if (node.arguments.length === 1 &&
                ((_a = node.typeParameters) === null || _a === void 0 ? void 0 : _a.params.some(param => param.type === utils_1.AST_NODE_TYPES.TSImportType ||
                    param.type === utils_1.AST_NODE_TYPES.TSArrayType))) {
                return rule(Object.assign(Object.assign({}, node), { arguments: [
                        Object.assign(Object.assign({}, node.arguments[0]), { type: utils_1.AST_NODE_TYPES.SequenceExpression }),
                    ] }));
            }
            return rule(node);
        }
        function unaryUpdateExpression(node) {
            const rule = rules.UnaryExpression;
            if (util.isTypeAssertion(node.argument)) {
                // reduces the precedence of the node so the rule thinks it needs to be wrapped
                return rule(Object.assign(Object.assign({}, node), { argument: Object.assign(Object.assign({}, node.argument), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
            }
            return rule(node);
        }
        const overrides = {
            // ArrayExpression
            ArrowFunctionExpression(node) {
                if (!util.isTypeAssertion(node.body)) {
                    return rules.ArrowFunctionExpression(node);
                }
            },
            // AssignmentExpression
            AwaitExpression(node) {
                if (util.isTypeAssertion(node.argument)) {
                    // reduces the precedence of the node so the rule thinks it needs to be wrapped
                    return rules.AwaitExpression(Object.assign(Object.assign({}, node), { argument: Object.assign(Object.assign({}, node.argument), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
                }
                return rules.AwaitExpression(node);
            },
            BinaryExpression: binaryExp,
            CallExpression: callExp,
            ClassDeclaration(node) {
                var _a;
                if (((_a = node.superClass) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.TSAsExpression) {
                    return rules.ClassDeclaration(Object.assign(Object.assign({}, node), { superClass: Object.assign(Object.assign({}, node.superClass), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
                }
                return rules.ClassDeclaration(node);
            },
            ClassExpression(node) {
                var _a;
                if (((_a = node.superClass) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.TSAsExpression) {
                    return rules.ClassExpression(Object.assign(Object.assign({}, node), { superClass: Object.assign(Object.assign({}, node.superClass), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
                }
                return rules.ClassExpression(node);
            },
            ConditionalExpression(node) {
                // reduces the precedence of the node so the rule thinks it needs to be wrapped
                if (util.isTypeAssertion(node.test)) {
                    return rules.ConditionalExpression(Object.assign(Object.assign({}, node), { test: Object.assign(Object.assign({}, node.test), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
                }
                if (util.isTypeAssertion(node.consequent)) {
                    return rules.ConditionalExpression(Object.assign(Object.assign({}, node), { consequent: Object.assign(Object.assign({}, node.consequent), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
                }
                if (util.isTypeAssertion(node.alternate)) {
                    // reduces the precedence of the node so the rule thinks it needs to be wrapped
                    return rules.ConditionalExpression(Object.assign(Object.assign({}, node), { alternate: Object.assign(Object.assign({}, node.alternate), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
                }
                return rules.ConditionalExpression(node);
            },
            // DoWhileStatement
            // ForIn and ForOf are guarded by eslint version
            ForStatement(node) {
                // make the rule skip the piece by removing it entirely
                if (node.init && util.isTypeAssertion(node.init)) {
                    return rules.ForStatement(Object.assign(Object.assign({}, node), { init: null }));
                }
                if (node.test && util.isTypeAssertion(node.test)) {
                    return rules.ForStatement(Object.assign(Object.assign({}, node), { test: null }));
                }
                if (node.update && util.isTypeAssertion(node.update)) {
                    return rules.ForStatement(Object.assign(Object.assign({}, node), { update: null }));
                }
                return rules.ForStatement(node);
            },
            'ForStatement > *.init:exit'(node) {
                if (!util.isTypeAssertion(node)) {
                    return rules['ForStatement > *.init:exit'](node);
                }
            },
            // IfStatement
            LogicalExpression: binaryExp,
            MemberExpression(node) {
                if (util.isTypeAssertion(node.object)) {
                    // reduces the precedence of the node so the rule thinks it needs to be wrapped
                    return rules.MemberExpression(Object.assign(Object.assign({}, node), { object: Object.assign(Object.assign({}, node.object), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
                }
                return rules.MemberExpression(node);
            },
            NewExpression: callExp,
            // ObjectExpression
            // ReturnStatement
            // SequenceExpression
            SpreadElement(node) {
                if (!util.isTypeAssertion(node.argument)) {
                    return rules.SpreadElement(node);
                }
            },
            SwitchCase(node) {
                if (node.test && !util.isTypeAssertion(node.test)) {
                    return rules.SwitchCase(node);
                }
            },
            // SwitchStatement
            ThrowStatement(node) {
                if (node.argument && !util.isTypeAssertion(node.argument)) {
                    return rules.ThrowStatement(node);
                }
            },
            UnaryExpression: unaryUpdateExpression,
            UpdateExpression: unaryUpdateExpression,
            // VariableDeclarator
            // WhileStatement
            // WithStatement - i'm not going to even bother implementing this terrible and never used feature
            YieldExpression(node) {
                if (node.argument && !util.isTypeAssertion(node.argument)) {
                    return rules.YieldExpression(node);
                }
            },
        };
        if (rules.ForInStatement && rules.ForOfStatement) {
            overrides.ForInStatement = function (node) {
                if (util.isTypeAssertion(node.right)) {
                    // as of 7.20.0 there's no way to skip checking the right of the ForIn
                    // so just don't validate it at all
                    return;
                }
                return rules.ForInStatement(node);
            };
            overrides.ForOfStatement = function (node) {
                if (util.isTypeAssertion(node.right)) {
                    // makes the rule skip checking of the right
                    return rules.ForOfStatement(Object.assign(Object.assign({}, node), { type: utils_1.AST_NODE_TYPES.ForOfStatement, right: Object.assign(Object.assign({}, node.right), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
                }
                return rules.ForOfStatement(node);
            };
        }
        else {
            overrides['ForInStatement, ForOfStatement'] = function (node) {
                if (util.isTypeAssertion(node.right)) {
                    // makes the rule skip checking of the right
                    return rules['ForInStatement, ForOfStatement'](Object.assign(Object.assign({}, node), { type: utils_1.AST_NODE_TYPES.ForOfStatement, right: Object.assign(Object.assign({}, node.right), { type: utils_1.AST_NODE_TYPES.SequenceExpression }) }));
                }
                return rules['ForInStatement, ForOfStatement'](node);
            };
        }
        return Object.assign({}, rules, overrides);
    },
});
//# sourceMappingURL=no-extra-parens.js.map