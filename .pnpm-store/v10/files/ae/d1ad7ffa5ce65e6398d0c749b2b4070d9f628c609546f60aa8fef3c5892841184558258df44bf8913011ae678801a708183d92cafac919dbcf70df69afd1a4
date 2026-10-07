"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSyntheticExpression = exports.isRestTypeNode = exports.isOptionalTypeNode = void 0;
const tslib_1 = require("tslib");
tslib_1.__exportStar(require("../2.9/node"), exports);
const ts = require("typescript");
function isOptionalTypeNode(node) {
    return node.kind === ts.SyntaxKind.OptionalType;
}
exports.isOptionalTypeNode = isOptionalTypeNode;
function isRestTypeNode(node) {
    return node.kind === ts.SyntaxKind.RestType;
}
exports.isRestTypeNode = isRestTypeNode;
function isSyntheticExpression(node) {
    return node.kind === ts.SyntaxKind.SyntheticExpression;
}
exports.isSyntheticExpression = isSyntheticExpression;
//# sourceMappingURL=node.js.map