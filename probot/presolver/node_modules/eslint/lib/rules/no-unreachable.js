/**
 * @fileoverview Checks for unreachable code due to return, throws, break, and continue.
 * @author Joel Feenstra
 */
"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given variable declarator has the initializer.
 * @param {ASTNode} node - A VariableDeclarator node to check.
 * @returns {boolean} `true` if the node has the initializer.
 */
function isInitialized(node) {
    return Boolean(node.init);
}

/**
 * Checks whether or not a given code path segment is unreachable.
 * @param {CodePathSegment} segment - A CodePathSegment to check.
 * @returns {boolean} `true` if the segment is unreachable.
 */
function isUnreachable(segment) {
    return !segment.reachable;
}

/**
 * The class to distinguish consecutive unreachable statements.
 */
class ConsecutiveRange {
    constructor(sourceCode) {
        this.sourceCode = sourceCode;
        this.startNode = null;
        this.endNode = null;
    }

    /**
     * The location object of this range.
     * @type {Object}
     */
    get location() {
        return {
            start: this.startNode.loc.start,
            end: this.endNode.loc.end
        };
    }

    /**
     * `true` if this range is empty.
     * @type {boolean}
     */
    get isEmpty() {
        return !(this.startNode && this.endNode);
    }

    /**
     * Checks whether the given node is inside of this range.
     * @param {ASTNode|Token} node - The node to check.
     * @returns {boolean} `true` if the node is inside of this range.
     */
    contains(node) {
        return (
            node.range[0] >= this.startNode.range[0] &&
            node.range[1] <= this.endNode.range[1]
        );
    }

    /**
     * Checks whether the given node is consecutive to this range.
     * @param {ASTNode} node - The node to check.
     * @returns {boolean} `true` if the node is consecutive to this range.
     */
    isConsecutive(node) {
        return this.contains(this.sourceCode.getTokenBefore(node));
    }

    /**
     * Merges the given node to this range.
     * @param {ASTNode} node - The node to merge.
     * @returns {void}
     */
    merge(node) {
        this.endNode = node;
    }

    /**
     * Resets this range by the given node or null.
     * @param {ASTNode|null} node - The node to reset, or null.
     * @returns {void}
     */
    reset(node) {
        this.startNode = this.endNode = node;
    }
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow unreachable code after `return`, `throw`, `continue`, and `break` statements",
            category: "Possible Errors",
            recommended: true
        },

        schema: []
    },

    create(context) {
        let currentCodePath = null;

        const range = new ConsecutiveRange(context.getSourceCode());

        /**
         * Reports a given node if it's unreachable.
         * @param {ASTNode} node - A statement node to report.
         * @returns {void}
         */
        function reportIfUnreachable(node) {
            let nextNode = null;

            if (node && currentCodePath.currentSegments.every(isUnreachable)) {

                // Store this statement to distinguish consecutive statements.
                if (range.isEmpty) {
                    range.reset(node);
                    return;
                }

                // Skip if this statement is inside of the current range.
                if (range.contains(node)) {
                    return;
                }

                // Merge if this statement is consecutive to the current range.
                if (range.isConsecutive(node)) {
                    range.merge(node);
                    return;
                }

                nextNode = node;
            }

            // Report the current range since this statement is reachable or is
            // not consecutive to the current range.
            if (!range.isEmpty) {
                context.report({
                    message: "Unreachable code.",
                    loc: range.location,
                    node: range.startNode
                });
            }

            // Update the current range.
            range.reset(nextNode);
        }

        return {

            // Manages the current code path.
            onCodePathStart(codePath) {
                currentCodePath = codePath;
            },

            onCodePathEnd() {
                currentCodePath = currentCodePath.upper;
            },

            // Registers for all statement nodes (excludes FunctionDeclaration).
            BlockStatement: reportIfUnreachable,
            BreakStatement: reportIfUnreachable,
            ClassDeclaration: reportIfUnreachable,
            ContinueStatement: reportIfUnreachable,
            DebuggerStatement: reportIfUnreachable,
            DoWhileStatement: reportIfUnreachable,
            EmptyStatement: reportIfUnreachable,
            ExpressionStatement: reportIfUnreachable,
            ForInStatement: reportIfUnreachable,
            ForOfStatement: reportIfUnreachable,
            ForStatement: reportIfUnreachable,
            IfStatement: reportIfUnreachable,
            ImportDeclaration: reportIfUnreachable,
            LabeledStatement: reportIfUnreachable,
            ReturnStatement: reportIfUnreachable,
            SwitchStatement: reportIfUnreachable,
            ThrowStatement: reportIfUnreachable,
            TryStatement: reportIfUnreachable,

            VariableDeclaration(node) {
                if (node.kind !== "var" || node.declarations.some(isInitialized)) {
                    reportIfUnreachable(node);
                }
            },

            WhileStatement: reportIfUnreachable,
            WithStatement: reportIfUnreachable,
            ExportNamedDeclaration: reportIfUnreachable,
            ExportDefaultDeclaration: reportIfUnreachable,
            ExportAllDeclaration: reportIfUnreachable,

            "Program:exit"() {
                reportIfUnreachable();
            }
        };
    }
};
