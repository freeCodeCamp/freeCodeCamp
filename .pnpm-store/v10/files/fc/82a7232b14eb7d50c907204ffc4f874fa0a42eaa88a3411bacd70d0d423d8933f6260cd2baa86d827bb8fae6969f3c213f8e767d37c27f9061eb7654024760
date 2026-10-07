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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenAtPosition = void 0;
const ts = __importStar(require("typescript"));
function getTokenAtPosition(sourceFile, position) {
    const queue = [sourceFile];
    let current;
    while (queue.length > 0) {
        current = queue.shift();
        // find the child that contains 'position'
        for (const child of current.getChildren(sourceFile)) {
            const start = child.getFullStart();
            if (start > position) {
                // If this child begins after position, then all subsequent children will as well.
                return current;
            }
            const end = child.getEnd();
            if (position < end ||
                (position === end && child.kind === ts.SyntaxKind.EndOfFileToken)) {
                queue.push(child);
                break;
            }
        }
    }
    return current;
}
exports.getTokenAtPosition = getTokenAtPosition;
//# sourceMappingURL=getTokenAtPosition.js.map