"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optimizeDocumentNode = void 0;
const remove_description_js_1 = require("./optimizers/remove-description.js");
const remove_empty_nodes_js_1 = require("./optimizers/remove-empty-nodes.js");
const remove_loc_js_1 = require("./optimizers/remove-loc.js");
const DEFAULT_OPTIMIZERS = [remove_description_js_1.removeDescriptions, remove_empty_nodes_js_1.removeEmptyNodes, remove_loc_js_1.removeLoc];
/**
 * This method accept a DocumentNode and applies the optimizations you wish to use.
 * You can override the default ones or provide you own optimizers if you wish.
 *
 * @param node document to optimize
 * @param optimizers optional, list of optimizer to use
 */
function optimizeDocumentNode(node, optimizers = DEFAULT_OPTIMIZERS) {
    let resultNode = node;
    for (const optimizer of optimizers) {
        if (typeof optimizer !== 'function') {
            throw new Error(`Optimizer provided for "optimizeDocumentNode" must be a function!`);
        }
        const result = optimizer(resultNode);
        if (!result) {
            throw new Error(`Optimizer provided for "optimizeDocumentNode" returned empty value instead of modified "DocumentNode"!`);
        }
        resultNode = result;
    }
    return resultNode;
}
exports.optimizeDocumentNode = optimizeDocumentNode;
