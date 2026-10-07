"use strict";
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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameLocationInGlobalDirectiveComment = getNameLocationInGlobalDirectiveComment;
exports.forEachReturnStatement = forEachReturnStatement;
exports.forEachChildESTree = forEachChildESTree;
const visitor_keys_1 = require("@typescript-eslint/visitor-keys");
const ts = __importStar(require("typescript"));
const escapeRegExp_1 = require("./escapeRegExp");
// deeply re-export, for convenience
__exportStar(require("@typescript-eslint/utils/ast-utils"), exports);
// The following is copied from `eslint`'s source code since it doesn't exist in eslint@5.
// https://github.com/eslint/eslint/blob/145aec1ab9052fbca96a44d04927c595951b1536/lib/rules/utils/ast-utils.js#L1751-L1779
// Could be export { getNameLocationInGlobalDirectiveComment } from 'eslint/lib/rules/utils/ast-utils'
/**
 * Get the `loc` object of a given name in a `/*globals` comment directive.
 * @param sourceCode The source code to convert index to loc.
 * @param comment The `/*globals` comment directive which include the name.
 * @param name The name to find.
 * @returns The `loc` object.
 */
function getNameLocationInGlobalDirectiveComment(sourceCode, comment, name) {
    const namePattern = new RegExp(`[\\s,]${(0, escapeRegExp_1.escapeRegExp)(name)}(?:$|[\\s,:])`, 'gu');
    // To ignore the first text "global".
    namePattern.lastIndex = comment.value.indexOf('global') + 6;
    // Search a given variable name.
    const match = namePattern.exec(comment.value);
    // Convert the index to loc.
    const start = sourceCode.getLocFromIndex(comment.range[0] + '/*'.length + (match ? match.index + 1 : 0));
    const end = {
        column: start.column + (match ? name.length : 1),
        line: start.line,
    };
    return { end, start };
}
// Copied from typescript https://github.com/microsoft/TypeScript/blob/42b0e3c4630c129ca39ce0df9fff5f0d1b4dd348/src/compiler/utilities.ts#L1335
// Warning: This has the same semantics as the forEach family of functions,
//          in that traversal terminates in the event that 'visitor' supplies a truthy value.
function forEachReturnStatement(body, visitor) {
    return traverse(body);
    function traverse(node) {
        switch (node.kind) {
            case ts.SyntaxKind.ReturnStatement:
                return visitor(node);
            case ts.SyntaxKind.CaseBlock:
            case ts.SyntaxKind.Block:
            case ts.SyntaxKind.IfStatement:
            case ts.SyntaxKind.DoStatement:
            case ts.SyntaxKind.WhileStatement:
            case ts.SyntaxKind.ForStatement:
            case ts.SyntaxKind.ForInStatement:
            case ts.SyntaxKind.ForOfStatement:
            case ts.SyntaxKind.WithStatement:
            case ts.SyntaxKind.SwitchStatement:
            case ts.SyntaxKind.CaseClause:
            case ts.SyntaxKind.DefaultClause:
            case ts.SyntaxKind.LabeledStatement:
            case ts.SyntaxKind.TryStatement:
            case ts.SyntaxKind.CatchClause:
                return ts.forEachChild(node, traverse);
        }
        return undefined;
    }
}
function isESTreeNodeLike(node) {
    return (typeof node === 'object' &&
        node != null &&
        'type' in node &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        typeof node.type === 'string');
}
/**
 * Rough equivalent to ts.forEachChild for ESTree nodes.
 * It returns the first truthy value returned by the callback, if any.
 */
function forEachChildESTree(node, callback) {
    function visit(currentNode) {
        const result = callback(currentNode);
        if (result) {
            return result;
        }
        const currentKeys = visitor_keys_1.visitorKeys[currentNode.type];
        if (!currentKeys) {
            return undefined;
        }
        for (const key of currentKeys) {
            const currentProperty = currentNode[key];
            if (Array.isArray(currentProperty)) {
                for (const child of currentProperty) {
                    if (isESTreeNodeLike(child)) {
                        const result = visit(child);
                        if (result) {
                            return result;
                        }
                    }
                }
            }
            else if (isESTreeNodeLike(currentProperty)) {
                const result = visit(currentProperty);
                if (result) {
                    return result;
                }
            }
        }
        return undefined;
    }
    return visit(node);
}
//# sourceMappingURL=astUtils.js.map