"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasOverloadSignatures = hasOverloadSignatures;
const utils_1 = require("@typescript-eslint/utils");
const misc_1 = require("./misc");
/**
 * @return `true` if the function or method node has overload signatures.
 */
function hasOverloadSignatures(node, context) {
    // `export default function () {}`
    if (node.parent.type === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration) {
        return node.parent.parent.body.some(member => {
            return (member.type === utils_1.AST_NODE_TYPES.ExportDefaultDeclaration &&
                member.declaration.type === utils_1.AST_NODE_TYPES.TSDeclareFunction);
        });
    }
    // `export function f() {}`
    if (node.parent.type === utils_1.AST_NODE_TYPES.ExportNamedDeclaration) {
        return node.parent.parent.body.some(member => {
            return (member.type === utils_1.AST_NODE_TYPES.ExportNamedDeclaration &&
                member.declaration?.type === utils_1.AST_NODE_TYPES.TSDeclareFunction &&
                getFunctionDeclarationName(member.declaration, context) ===
                    getFunctionDeclarationName(node, context));
        });
    }
    // either:
    // - `function f() {}`
    // - `class T { foo() {} }`
    const nodeKey = getFunctionDeclarationName(node, context);
    return node.parent.body.some(member => {
        return ((member.type === utils_1.AST_NODE_TYPES.TSDeclareFunction ||
            (member.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                member.value.body == null)) &&
            nodeKey === getFunctionDeclarationName(member, context));
    });
}
function getFunctionDeclarationName(node, context) {
    if (node.type === utils_1.AST_NODE_TYPES.FunctionDeclaration ||
        node.type === utils_1.AST_NODE_TYPES.TSDeclareFunction) {
        // For a `FunctionDeclaration` or `TSDeclareFunction` this may be `null` if
        // and only if the parent is an `ExportDefaultDeclaration`.
        //
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return node.id.name;
    }
    return (0, misc_1.getStaticMemberAccessValue)(node, context);
}
//# sourceMappingURL=hasOverloadSignatures.js.map