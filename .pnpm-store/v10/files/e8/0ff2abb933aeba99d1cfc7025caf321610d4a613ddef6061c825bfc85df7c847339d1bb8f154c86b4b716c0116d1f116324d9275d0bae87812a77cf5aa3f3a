"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNodeEnd = updateNodeEnd;
function updateNodeEnd(node, token) {
    node.range[1] = token.range[1];
    node.loc.end = Object.assign({}, token.loc.end);
}
