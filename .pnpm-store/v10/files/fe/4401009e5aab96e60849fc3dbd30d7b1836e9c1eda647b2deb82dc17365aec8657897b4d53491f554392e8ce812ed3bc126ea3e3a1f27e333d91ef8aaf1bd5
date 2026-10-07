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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContextualType = getContextualType;
const ts = __importStar(require("typescript"));
/**
 * Returns the contextual type of a given node.
 * Contextual type is the type of the target the node is going into.
 * i.e. the type of a called function's parameter, or the defined type of a variable declaration
 */
function getContextualType(checker, node) {
    const parent = node.parent;
    if (ts.isCallExpression(parent) || ts.isNewExpression(parent)) {
        if (node === parent.expression) {
            // is the callee, so has no contextual type
            return;
        }
    }
    else if (ts.isVariableDeclaration(parent) ||
        ts.isPropertyDeclaration(parent) ||
        ts.isParameter(parent)) {
        return parent.type ? checker.getTypeFromTypeNode(parent.type) : undefined;
    }
    else if (ts.isJsxExpression(parent)) {
        return checker.getContextualType(parent);
    }
    else if (ts.isIdentifier(node) &&
        (ts.isPropertyAssignment(parent) ||
            ts.isShorthandPropertyAssignment(parent))) {
        return checker.getContextualType(node);
    }
    else if (ts.isBinaryExpression(parent) &&
        parent.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
        parent.right === node) {
        // is RHS of assignment
        return checker.getTypeAtLocation(parent.left);
    }
    else if (![ts.SyntaxKind.JsxExpression, ts.SyntaxKind.TemplateSpan].includes(parent.kind)) {
        // parent is not something we know we can get the contextual type of
        return;
    }
    // TODO - support return statement checking
    return checker.getContextualType(node);
}
//# sourceMappingURL=getContextualType.js.map