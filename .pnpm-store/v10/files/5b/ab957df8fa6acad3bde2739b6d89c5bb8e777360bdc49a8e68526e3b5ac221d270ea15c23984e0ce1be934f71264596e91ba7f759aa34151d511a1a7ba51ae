/**
 * @fileoverview Flag expressions in statement position that do not side effect
 * @author Michael Ficarra
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Returns `true`.
 * @returns {boolean} `true`.
 */
function alwaysTrue() {
    return true;
}

/**
 * Returns `false`.
 * @returns {boolean} `false`.
 */
function alwaysFalse() {
    return false;
}

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow unused expressions",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-unused-expressions"
        },

        schema: [
            {
                type: "object",
                properties: {
                    allowShortCircuit: {
                        type: "boolean",
                        default: false
                    },
                    allowTernary: {
                        type: "boolean",
                        default: false
                    },
                    allowTaggedTemplates: {
                        type: "boolean",
                        default: false
                    },
                    enforceForJSX: {
                        type: "boolean",
                        default: false
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            unusedExpression: "Expected an assignment or function call and instead saw an expression."
        }
    },

    create(context) {
        const config = context.options[0] || {},
            allowShortCircuit = config.allowShortCircuit || false,
            allowTernary = config.allowTernary || false,
            allowTaggedTemplates = config.allowTaggedTemplates || false,
            enforceForJSX = config.enforceForJSX || false;

        // eslint-disable-next-line jsdoc/require-description
        /**
         * @param {ASTNode} node any node
         * @returns {boolean} whether the given node structurally represents a directive
         */
        function looksLikeDirective(node) {
            return node.type === "ExpressionStatement" &&
                node.expression.type === "Literal" && typeof node.expression.value === "string";
        }

        // eslint-disable-next-line jsdoc/require-description
        /**
         * @param {Function} predicate ([a] -> Boolean) the function used to make the determination
         * @param {a[]} list the input list
         * @returns {a[]} the leading sequence of members in the given list that pass the given predicate
         */
        function takeWhile(predicate, list) {
            for (let i = 0; i < list.length; ++i) {
                if (!predicate(list[i])) {
                    return list.slice(0, i);
                }
            }
            return list.slice();
        }

        // eslint-disable-next-line jsdoc/require-description
        /**
         * @param {ASTNode} node a Program or BlockStatement node
         * @returns {ASTNode[]} the leading sequence of directive nodes in the given node's body
         */
        function directives(node) {
            return takeWhile(looksLikeDirective, node.body);
        }

        // eslint-disable-next-line jsdoc/require-description
        /**
         * @param {ASTNode} node any node
         * @param {ASTNode[]} ancestors the given node's ancestors
         * @returns {boolean} whether the given node is considered a directive in its current position
         */
        function isDirective(node, ancestors) {
            const parent = ancestors[ancestors.length - 1],
                grandparent = ancestors[ancestors.length - 2];

            return (parent.type === "Program" || parent.type === "BlockStatement" &&
                    (/Function/u.test(grandparent.type))) &&
                    directives(parent).indexOf(node) >= 0;
        }

        /**
         * The member functions return `true` if the type has no side-effects.
         * Unknown nodes are handled as `false`, then this rule ignores those.
         */
        const Checker = Object.assign(Object.create(null), {
            isDisallowed(node) {
                return (Checker[node.type] || alwaysFalse)(node);
            },

            ArrayExpression: alwaysTrue,
            ArrowFunctionExpression: alwaysTrue,
            BinaryExpression: alwaysTrue,
            ChainExpression(node) {
                return Checker.isDisallowed(node.expression);
            },
            ClassExpression: alwaysTrue,
            ConditionalExpression(node) {
                if (allowTernary) {
                    return Checker.isDisallowed(node.consequent) || Checker.isDisallowed(node.alternate);
                }
                return true;
            },
            FunctionExpression: alwaysTrue,
            Identifier: alwaysTrue,
            JSXElement() {
                return enforceForJSX;
            },
            JSXFragment() {
                return enforceForJSX;
            },
            Literal: alwaysTrue,
            LogicalExpression(node) {
                if (allowShortCircuit) {
                    return Checker.isDisallowed(node.right);
                }
                return true;
            },
            MemberExpression: alwaysTrue,
            MetaProperty: alwaysTrue,
            ObjectExpression: alwaysTrue,
            SequenceExpression: alwaysTrue,
            TaggedTemplateExpression() {
                return !allowTaggedTemplates;
            },
            TemplateLiteral: alwaysTrue,
            ThisExpression: alwaysTrue,
            UnaryExpression(node) {
                return node.operator !== "void" && node.operator !== "delete";
            }
        });

        return {
            ExpressionStatement(node) {
                if (Checker.isDisallowed(node.expression) && !isDirective(node, context.getAncestors())) {
                    context.report({ node, messageId: "unusedExpression" });
                }
            }
        };
    }
};
