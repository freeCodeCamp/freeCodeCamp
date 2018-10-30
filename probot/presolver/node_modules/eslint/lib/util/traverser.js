/**
 * @fileoverview Wrapper around estraverse
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const estraverse = require("estraverse");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const KEY_BLACKLIST = new Set([
    "parent",
    "leadingComments",
    "trailingComments"
]);

/**
 * Wrapper around an estraverse controller that ensures the correct keys
 * are visited.
 * @constructor
 */
class Traverser extends estraverse.Controller {
    traverse(node, visitor) {
        visitor.fallback = Traverser.getKeys;
        return super.traverse(node, visitor);
    }

    /**
     * Calculates the keys to use for traversal.
     * @param {ASTNode} node The node to read keys from.
     * @returns {string[]} An array of keys to visit on the node.
     * @private
     */
    static getKeys(node) {
        return Object.keys(node).filter(key => !KEY_BLACKLIST.has(key));
    }
}

module.exports = Traverser;
