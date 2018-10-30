"use strict";
const SymbolTree = require("symbol-tree");

exports.cloningSteps = Symbol("cloning steps");

// TODO: the many underscore-prefixed hooks should move here
// E.g. _attrModified (which maybe should be split into its per-spec variants)

/**
 * This SymbolTree is used to build the tree for all Node in a document
 */
exports.domSymbolTree = new SymbolTree("DOM SymbolTree");
