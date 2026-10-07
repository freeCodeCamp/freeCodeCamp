/**
 * @fileoverview Rule to flag adding properties to native object's prototypes.
 * @author David Nelson
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const astUtils = require("./utils/ast-utils");
const globals = require("globals");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",

        docs: {
            description: "disallow extending native types",
            category: "Best Practices",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-extend-native"
        },

        schema: [
            {
                type: "object",
                properties: {
                    exceptions: {
                        type: "array",
                        items: {
                            type: "string"
                        },
                        uniqueItems: true
                    }
                },
                additionalProperties: false
            }
        ],

        messages: {
            unexpected: "{{builtin}} prototype is read only, properties should not be added."
        }
    },

    create(context) {

        const config = context.options[0] || {};
        const exceptions = new Set(config.exceptions || []);
        const modifiedBuiltins = new Set(
            Object.keys(globals.builtin)
                .filter(builtin => builtin[0].toUpperCase() === builtin[0])
                .filter(builtin => !exceptions.has(builtin))
        );

        /**
         * Reports a lint error for the given node.
         * @param {ASTNode} node The node to report.
         * @param {string} builtin The name of the native builtin being extended.
         * @returns {void}
         */
        function reportNode(node, builtin) {
            context.report({
                node,
                messageId: "unexpected",
                data: {
                    builtin
                }
            });
        }

        /**
         * Check to see if the `prototype` property of the given object
         * identifier node is being accessed.
         * @param {ASTNode} identifierNode The Identifier representing the object
         * to check.
         * @returns {boolean} True if the identifier is the object of a
         * MemberExpression and its `prototype` property is being accessed,
         * false otherwise.
         */
        function isPrototypePropertyAccessed(identifierNode) {
            return Boolean(
                identifierNode &&
                identifierNode.parent &&
                identifierNode.parent.type === "MemberExpression" &&
                identifierNode.parent.object === identifierNode &&
                astUtils.getStaticPropertyName(identifierNode.parent) === "prototype"
            );
        }

        /**
         * Check if it's an assignment to the property of the given node.
         * Example: `*.prop = 0` // the `*` is the given node.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} True if an assignment to the property of the node.
         */
        function isAssigningToPropertyOf(node) {
            return (
                node.parent.type === "MemberExpression" &&
                node.parent.object === node &&
                node.parent.parent.type === "AssignmentExpression" &&
                node.parent.parent.left === node.parent
            );
        }

        /**
         * Checks if the given node is at the first argument of the method call of `Object.defineProperty()` or `Object.defineProperties()`.
         * @param {ASTNode} node The node to check.
         * @returns {boolean} True if the node is at the first argument of the method call of `Object.defineProperty()` or `Object.defineProperties()`.
         */
        function isInDefinePropertyCall(node) {
            return (
                node.parent.type === "CallExpression" &&
                node.parent.arguments[0] === node &&
                astUtils.isSpecificMemberAccess(node.parent.callee, "Object", /^definePropert(?:y|ies)$/u)
            );
        }

        /**
         * Check to see if object prototype access is part of a prototype
         * extension. There are three ways a prototype can be extended:
         * 1. Assignment to prototype property (Object.prototype.foo = 1)
         * 2. Object.defineProperty()/Object.defineProperties() on a prototype
         * If prototype extension is detected, report the AssignmentExpression
         * or CallExpression node.
         * @param {ASTNode} identifierNode The Identifier representing the object
         * which prototype is being accessed and possibly extended.
         * @returns {void}
         */
        function checkAndReportPrototypeExtension(identifierNode) {
            if (!isPrototypePropertyAccessed(identifierNode)) {
                return; // This is not `*.prototype` access.
            }

            /*
             * `identifierNode.parent` is a MemberExpression `*.prototype`.
             * If it's an optional member access, it may be wrapped by a `ChainExpression` node.
             */
            const prototypeNode =
                identifierNode.parent.parent.type === "ChainExpression"
                    ? identifierNode.parent.parent
                    : identifierNode.parent;

            if (isAssigningToPropertyOf(prototypeNode)) {

                // `*.prototype` -> MemberExpression -> AssignmentExpression
                reportNode(prototypeNode.parent.parent, identifierNode.name);
            } else if (isInDefinePropertyCall(prototypeNode)) {

                // `*.prototype` -> CallExpression
                reportNode(prototypeNode.parent, identifierNode.name);
            }
        }

        return {

            "Program:exit"() {
                const globalScope = context.getScope();

                modifiedBuiltins.forEach(builtin => {
                    const builtinVar = globalScope.set.get(builtin);

                    if (builtinVar && builtinVar.references) {
                        builtinVar.references
                            .map(ref => ref.identifier)
                            .forEach(checkAndReportPrototypeExtension);
                    }
                });
            }
        };

    }
};
